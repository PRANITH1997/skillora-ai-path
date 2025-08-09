import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  isAuthenticated?: boolean;
  onAsk?: (q: string) => void;
  className?: string;
}

const AISearchBar = ({ isAuthenticated = false, onAsk, className }: Props) => {
  const [q, setQ] = useState("");
  const disabled = !isAuthenticated || q.trim().length === 0;
  const input = (
    <div className={cn("flex w-full max-w-2xl items-center gap-2", className)}>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={isAuthenticated ? "Ask anything about your courses..." : "Log in to ask the AI assistant"}
        className="h-12"
      />
      <Button variant="hero" size="lg" disabled={disabled} onClick={() => onAsk?.(q)}>
        Ask AI
      </Button>
    </div>
  );

  if (isAuthenticated) return input;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{input}</TooltipTrigger>
        <TooltipContent>
          <p>Sign in to use the AI assistant</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AISearchBar;
