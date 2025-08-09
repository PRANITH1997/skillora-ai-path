import { Button } from "@/components/ui/button";
import AISearchBar from "@/components/common/AISearchBar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--muted))] to-transparent" />
      <div className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-bold tracking-tight">
          Accelerate learning with AI at Skilora Research Labs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Courses, live classes, projects, and an AI assistant that answers your course questions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Get started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/login">I already have an account</Link>
          </Button>
        </div>
        <div className="mt-10 flex justify-center">
          <AISearchBar />
        </div>
      </div>
      <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))]" />
    </section>
  );
};

export default Hero;
