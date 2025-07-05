
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserHistory } from '@/hooks/useUserHistory';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { History, Trash2 } from 'lucide-react';

const MyHistoryPage = () => {
  const { user, loading } = useAuth();
  const { history, loadHistory, deleteHistory } = useUserHistory();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      loadHistoryData();
    }
  }, [user, loading, navigate]);

  const loadHistoryData = async () => {
    setIsLoading(true);
    await loadHistory();
    setIsLoading(false);
  };

  const handleDeleteHistory = async () => {
    const success = await deleteHistory();
    if (success) {
      toast({
        title: "History cleared",
        description: "Your browsing history has been deleted successfully!"
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to delete history. Please try again.",
        variant: "destructive"
      });
    }
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <History className="h-8 w-8 text-white" />
              <h1 className="text-4xl font-bold text-white">My History</h1>
            </div>
            {history.length > 0 && (
              <Button
                onClick={handleDeleteHistory}
                variant="secondary"
                className="bg-white text-empowerher-pink hover:bg-gray-100"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear History
              </Button>
            )}
          </div>
          
          {history.length === 0 ? (
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <History className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No browsing history yet.</p>
                <p className="text-gray-500 mt-2">Start exploring our pages and your activity will appear here!</p>
                <Button 
                  onClick={() => navigate('/')}
                  className="mt-4 bg-empowerher-pink hover:bg-empowerher-pink-dark"
                >
                  Explore Pages
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {history.map((entry) => (
                <Card key={entry.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {entry.page_name}
                        </h3>
                        <p className="text-sm text-gray-500">{entry.page_url}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          {new Date(entry.visited_at).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(entry.visited_at).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
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

export default MyHistoryPage;
