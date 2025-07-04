
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Star, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Review {
  id: string;
  rating: number;
  comment: string | null;
  page_url: string | null;
  created_at: string;
}

const MyReviewsPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      loadReviews();
    }
  }, [user, loading, navigate]);

  const loadReviews = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading reviews:', error);
        return;
      }

      setReviews(data || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete review.",
          variant: "destructive"
        });
        return;
      }

      setReviews(prev => prev.filter(review => review.id !== reviewId));
      toast({
        title: "Success",
        description: "Review deleted successfully!"
      });
    } catch (error) {
      console.error('Error deleting review:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Reviews</h1>
          
          {reviews.length === 0 ? (
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 text-lg">You haven't written any reviews yet.</p>
                <Button 
                  onClick={() => navigate('/')}
                  className="mt-4 bg-empowerher-pink hover:bg-empowerher-pink-dark"
                >
                  Explore Pages to Review
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-white shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {review.page_url ? `Review for ${review.page_url}` : 'General Review'}
                      </CardTitle>
                      <div className="flex items-center space-x-1 mt-2">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteReview(review.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    {review.comment && (
                      <p className="text-gray-700 mb-4">{review.comment}</p>
                    )}
                    <p className="text-sm text-gray-500">
                      Reviewed on {new Date(review.created_at).toLocaleDateString()}
                    </p>
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

export default MyReviewsPage;
