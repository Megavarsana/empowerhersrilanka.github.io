
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SafetyPage from "./pages/SafetyPage";
import SupportPage from "./pages/SupportPage";
import GuidancePage from "./pages/GuidancePage";
import WomensHealthPage from "./pages/WomensHealthPage";
import MentalHealthPage from "./pages/MentalHealthPage";
import PregnancyPage from "./pages/PregnancyPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhatWeDo from "./pages/WhatWeDo";
import ProfilePage from "./pages/ProfilePage";
import MyReviewsPage from "./pages/MyReviewsPage";
import ForumPage from "./pages/ForumPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/guidance" element={<GuidancePage />} />
            <Route path="/womens-health" element={<WomensHealthPage />} />
            <Route path="/mental-health" element={<MentalHealthPage />} />
            <Route path="/pregnancy" element={<PregnancyPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/my-reviews" element={<MyReviewsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
