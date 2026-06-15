import Hero from "@/components/marketing/Hero";
import CostOfAverage from "@/components/marketing/CostOfAverage";
import FounderPhilosophy from "@/components/marketing/FounderPhilosophy";
import InsideTheThinking from "@/components/marketing/InsideTheThinking";
import AdvancedPortfolio from "@/components/marketing/AdvancedPortfolio";
import CompileMethod from "@/components/marketing/CompileMethod";
import MeetTheStrategist from "@/components/marketing/MeetTheStrategist";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import CTASection from "@/components/marketing/CTASection";
import ScrollProgress from "@/components/marketing/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      
      {/* Chapter 1: The Opening */}
      <Hero />
      <CostOfAverage />
      
      {/* Chapter 2: The Thinking */}
      <FounderPhilosophy />
      <InsideTheThinking />
      
      {/* Chapter 3: The Work */}
      <AdvancedPortfolio />
      
      {/* Chapter 4: The Method */}
      <CompileMethod />
      
      {/* Chapter 5: The Strategist */}
      <MeetTheStrategist />
      <TestimonialsSection />
      
      {/* Chapter 6: The Close */}
      <CTASection />
    </>
  );
}