
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Plus, MessageSquare, User } from 'lucide-react';
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
      loadPosts(); // Reload posts
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

  if (loading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Community Forum</h1>
            
            {user ? (
              <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-empowerher-pink hover:bg-gray-100">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={newPost.title}
                        onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter post title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={newPost.content}
                        onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="Share your thoughts..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isCreating}
                      className="w-full bg-empowerher-pink hover:bg-empowerher-pink-dark"
                    >
                      {isCreating ? 'Creating...' : 'Create Post'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            ) : (
              <Button 
                onClick={() => navigate('/')}
                className="bg-white text-empowerher-pink hover:bg-gray-100"
              >
                Sign In to Post
              </Button>
            )}
          </div>

          {posts.length === 0 ? (
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No posts yet. Be the first to start a conversation!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{getUserDisplayName(post)}</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ForumPage;
