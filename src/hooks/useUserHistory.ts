
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useLocation } from 'react-router-dom';

interface HistoryEntry {
  id: string;
  page_name: string;
  page_url: string;
  visited_at: string;
}

export const useUserHistory = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // Track page visits
  useEffect(() => {
    if (!user) return;

    const trackPageVisit = async () => {
      const pageName = getPageName(location.pathname);
      
      try {
        await supabase
          .from('user_history')
          .insert({
            user_id: user.id,
            page_name: pageName,
            page_url: location.pathname
          });
      } catch (error) {
        console.error('Error tracking page visit:', error);
      }
    };

    trackPageVisit();
  }, [location.pathname, user]);

  // Load user history
  const loadHistory = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_history')
        .select('*')
        .eq('user_id', user.id)
        .order('visited_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error loading history:', error);
        return;
      }

      setHistory(data || []);
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  // Delete all history
  const deleteHistory = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_history')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        console.error('Error deleting history:', error);
        return false;
      }

      setHistory([]);
      return true;
    } catch (error) {
      console.error('Error deleting history:', error);
      return false;
    }
  };

  return {
    history,
    loadHistory,
    deleteHistory
  };
};

const getPageName = (pathname: string): string => {
  const routes: Record<string, string> = {
    '/': 'Home',
    '/safety': 'Safety',
    '/support': 'Support',
    '/guidance': 'Guidance',
    '/womens-health': 'Women\'s Health',
    '/mental-health': 'Mental Health',
    '/pregnancy': 'Pregnancy',
    '/profile': 'My Profile',
    '/my-reviews': 'My Reviews',
    '/forum': 'Forum',
    '/what-we-do': 'What We Do',
    '/privacy': 'Privacy Policy',
    '/terms': 'Terms of Service'
  };

  return routes[pathname] || pathname;
};
