
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Plus, MessageSquare, User, Heart, Eye, ThumbsUp, Reply } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles?: {
    first_name: string | null;
    last_name: string | null;
  };
}

const ForumPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: ''
  });

  // Sample featured topics for women empowerment
  const featuredTopics = [
    { name: "Leadership", count: 245, color: "bg-empowerher-pink" },
    { name: "Career Growth", count: 189, color: "bg-purple-500" },
    { name: "Health & Wellness", count: 156, color: "bg-blue-500" },
    { name: "Entrepreneurship", count: 134, color: "bg-green-500" },
    { name: "Financial Independence", count: 98, color: "bg-orange-500" },
    { name: "Work-Life Balance", count: 87, color: "bg-teal-500" }
  ];

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .select(`
          *,
          profiles:user_id (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading posts:', error);
        return;
      }

      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/');
      return;
    }

    if (!newPost.title.trim() || !newPost.content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and content.",
        variant: "destructive"
      });
      return;
    }

    setIsCreating(true);
    try {
      const { error } = await supabase
        .from('forum_posts')
        .insert({
          title: newPost.title.trim(),
          content: newPost.content.trim(),
          user_id: user.id
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create post. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success",
        description: "Post created successfully!"
      });

      setNewPost({ title: '', content: '' });
      setShowCreateDialog(false);
      loadPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsCreating(false);
    }
  };

  const getUserDisplayName = (post: ForumPost) => {
    if (post.profiles?.first_name || post.profiles?.last_name) {
      return `${post.profiles.first_name || ''} ${post.profiles.last_name || ''}`.trim();
    }
    return 'Anonymous User';
  };

  const handleReply = (postId: string) => {
    toast({
      title: "Reply Feature",
      description: "Reply functionality coming soon!",
    });
  };

  if (loading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-empowerher-pink mx-auto mb-4"></div>
        <p className="text-gray-600">Loading community discussions...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Women Empowerment Community</h1>
              <p className="text-gray-600">Share experiences, ask questions, and support each other on the journey to empowerment</p>
            </div>
            
            {user ? (
              <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
                <DialogTrigger asChild>
                  <Button className="bg-empowerher-pink hover:bg-empowerher-pink-dark text-white px-6 py-2 rounded-lg font-medium">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Share Your Story</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={newPost.title}
                        onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="What's on your mind?"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={newPost.content}
                        onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="Share your thoughts, experiences, or questions..."
                        rows={4}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isCreating}
                      className="w-full bg-empowerher-pink hover:bg-empowerher-pink-dark"
                    >
                      {isCreating ? 'Publishing...' : 'Publish Post'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            ) : (
              <Button 
                onClick={() => navigate('/')}
                className="bg-empowerher-pink hover:bg-empowerher-pink-dark text-white px-6 py-2"
              >
                Sign In to Participate
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h3>
                <div className="space-y-3">
                  {featuredTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${topic.color}`}></div>
                        <span className="text-gray-700 font-medium">{topic.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{topic.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Members</span>
                    <span className="font-semibold text-empowerher-pink">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts This Month</span>
                    <span className="font-semibold text-empowerher-pink">341</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-semibold text-empowerher-pink">156</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {posts.length === 0 ? (
                <Card className="bg-white shadow-sm border">
                  <CardContent className="p-12 text-center">
                    <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Start the Conversation</h3>
                    <p className="text-gray-500 mb-6">Be the first to share your story and inspire others in our community!</p>
                    {user && (
                      <Button 
                        onClick={() => setShowCreateDialog(true)}
                        className="bg-empowerher-pink hover:bg-empowerher-pink-dark"
                      >
                        Create First Post
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="bg-white shadow-sm border hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-empowerher-pink-light rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-empowerher-pink" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{getUserDisplayName(post)}</p>
                              <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-700 mb-4 whitespace-pre-wrap leading-relaxed">{post.content}</p>
                        
                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-empowerher-pink transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-sm">Like</span>
                            </button>
                            <button 
                              onClick={() => handleReply(post.id)}
                              className="flex items-center gap-2 text-gray-500 hover:text-empowerher-pink transition-colors"
                            >
                              <Reply className="h-4 w-4" />
                              <span className="text-sm">Reply</span>
                            </button>
                            <div className="flex items-center gap-2 text-gray-500">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">{Math.floor(Math.random() * 100) + 20}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{Math.floor(Math.random() * 50) + 5}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ForumPage;
