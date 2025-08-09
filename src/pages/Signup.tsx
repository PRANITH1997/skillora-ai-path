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

const baseSchema = {
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  phone: z.string().regex(/^[+\d][\d\s-]{7,}$/i, "Enter a valid phone number"),
  password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*\d).+$/, "At least 1 uppercase and 1 number"),
  confirmPassword: z.string().min(8),
  userType: z.enum(["Student", "Working"]),
  experience: z.string().optional(),
  heardFrom: z.string().optional(),
};

const schema = z.object(baseSchema).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
}).refine((d) => d.userType === "Student" || (d.userType === "Working" && (!!d.experience && !!d.heardFrom)), {
  message: "For Working users, Experience and How did you hear about us are required",
  path: ["experience"],
});

type Form = z.infer<typeof schema>;

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });
  const userType = watch("userType");

  const onSubmit = async (data: Form) => {
    // TODO: Replace with Supabase auth + profile
    toast({ title: "Account created (demo)", description: "Redirecting..." });
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Sign Up — Skilora Research Labs</title>
        <meta name="description" content="Create your Skilora account to access courses and AI assistance." />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <SiteHeader />
      <main className="container mx-auto py-10">
        <section className="mx-auto max-w-2xl rounded-lg border p-6 glow-card">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-muted-foreground mb-6">Join AI-powered learning</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...register("firstName")} />
              {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" {...register("lastName")} />
              {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="new-password" {...register("password")} />
              {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" autoComplete="new-password" {...register("confirmPassword")} />
              {errors.confirmPassword && <p className="text-sm text-destructive mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="userType">User Type</Label>
              <select id="userType" className="w-full h-10 rounded-md border bg-background" {...register("userType")}>
                <option value="Student">Student</option>
                <option value="Working">Working</option>
              </select>
            </div>
            {userType === "Working" && (
              <>
                <div className="md:col-span-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input id="experience" placeholder="e.g., 3 years in data science" {...register("experience")} />
                  {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience.message as string}</p>}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="heardFrom">How did you hear about Skilora Research Labs?</Label>
                  <Input id="heardFrom" placeholder="LinkedIn, Friend, Webinar..." {...register("heardFrom")} />
                </div>
              </>
            )}
            <div className="md:col-span-2 mt-2">
              <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create account"}
              </Button>
            </div>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">Already have an account? <a className="underline" href="/login">Sign in</a></p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Signup;
