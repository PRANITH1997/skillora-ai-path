import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Helmet } from "react-helmet-async";

const schema = z.object({ email: z.string().email() });

type Form = z.infer<typeof schema>;

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async ({ email }: Form) => {
    // TODO: integrate password reset via Supabase auth
    toast({ title: "Reset link sent (demo)", description: `If an account exists for ${email}, you'll receive an email.` });
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password — Skilora Research Labs</title>
        <meta name="description" content="Request a password reset link to your email." />
        <link rel="canonical" href="/forgot-password" />
      </Helmet>
      <SiteHeader />
      <main className="container mx-auto py-10">
        <section className="mx-auto max-w-md rounded-lg border p-6 glow-card">
          <h1 className="text-2xl font-semibold">Reset your password</h1>
          <p className="text-sm text-muted-foreground mb-6">Enter your email to receive a reset link</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ForgotPassword;
