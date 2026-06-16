import Hero from "@/components/marketing/Hero";
import StorytellingTransition from "@/components/marketing/StorytellingTransition";
import ValueTransformation from "@/components/marketing/ValueTransformation";
import TransformationShowcase from "@/components/marketing/TransformationShowcase";
import FounderPhilosophy from "@/components/marketing/FounderPhilosophy";
import ClientOutcomes from "@/components/marketing/ClientOutcomes";
import CTASection from "@/components/marketing/CTASection";
import ScrollProgress from "@/components/marketing/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      
      {/* Chapter 1: The Opening */}
      <Hero />
      
      {/* Chapter 2: The Truth (Storytelling Transition) */}
      <StorytellingTransition />
      
      {/* Chapter 3: The Unforgettable Moment */}
      <ValueTransformation />
      
      {/* Chapter 4: The Work (Deep case studies) */}
      <TransformationShowcase />
      
      {/* Chapter 5: The Thinker */}
      <FounderPhilosophy />
      
      {/* Chapter 6: The Evidence */}
      <ClientOutcomes />
      
      {/* Chapter 7: The Close */}
      <CTASection />
    </>
  );
}