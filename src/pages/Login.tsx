import { useNavigate } from "react-router-dom";
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

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

type Form = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Form) => {
    // TODO: Replace with Supabase auth
    toast({ title: "Logged in (demo)", description: "Redirecting to dashboard..." });
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Login — Skilora Research Labs</title>
        <meta name="description" content="Sign in to access your courses, classes, and AI assistant." />
        <link rel="canonical" href="/login" />
      </Helmet>
      <SiteHeader />
      <main className="container mx-auto py-10">
        <section className="mx-auto max-w-md rounded-lg border p-6 glow-card">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground mb-6">Sign in to continue</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="/forgot-password" className="text-sm text-muted-foreground hover:underline">Forgot password?</a>
              </div>
              <Input id="password" type="password" autoComplete="current-password" {...register("password")} />
              {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">New here? <a className="underline" href="/signup">Create an account</a></p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Login;
