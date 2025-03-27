
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Define logo paths to ensure they're included in the build
const logoAssets = {
  aiesec: "/lovable-uploads/8a15f841-36a3-41a4-93f5-0be0258de7eb.png",
  cerdas: "/lovable-uploads/71b25773-296e-4243-af44-3007f9456159.png",
  ecosensa: "/lovable-uploads/b3eff8b6-ce61-42bb-b49b-304082a1bae2.png",
  mbot: "/lovable-uploads/a3ecb9de-5607-42ff-812c-d2641cb4d361.png",
  sabafon: "/lovable-uploads/155739b0-d584-4cb8-b1ad-6fb9089eb81a.png",
  utm: "/lovable-uploads/9b98683c-50da-4d68-b4c2-181ce58e677a.png",
  utp: "/lovable-uploads/596eb427-26d6-4b24-bb38-16dd50bcd76a.png"
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index logoAssets={logoAssets} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
