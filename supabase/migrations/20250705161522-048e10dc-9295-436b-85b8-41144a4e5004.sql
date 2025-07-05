
-- Create a table for user history tracking
CREATE TABLE public.user_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  page_name TEXT NOT NULL,
  page_url TEXT NOT NULL,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.user_history ENABLE ROW LEVEL SECURITY;

-- Create policies for user history
CREATE POLICY "Users can view their own history" 
  ON public.user_history 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own history" 
  ON public.user_history 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own history" 
  ON public.user_history 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX user_history_user_id_idx ON public.user_history(user_id);
CREATE INDEX user_history_visited_at_idx ON public.user_history(visited_at DESC);
