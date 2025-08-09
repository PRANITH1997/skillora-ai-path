import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Skilora Research Labs — AI EdTech Platform</title>
        <meta name="description" content="AI-integrated learning: courses, live classes, projects, and a smart assistant." />
        <link rel="canonical" href="/" />
      </Helmet>
      <SiteHeader />
      <main>
        <Hero />
        <section id="about" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">About Us</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
                <CardDescription>Personalized, AI-assisted learning for everyone</CardDescription>
              </CardHeader>
              <CardContent>
                We blend pedagogy with cutting-edge AI to accelerate outcomes.
              </CardContent>
            </Card>
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>1000+ learners empowered</CardDescription>
              </CardHeader>
              <CardContent>
                From graduates to working pros, we boost skills and careers.
              </CardContent>
            </Card>
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Approach</CardTitle>
                <CardDescription>Live classes, projects, and mentorship</CardDescription>
              </CardHeader>
              <CardContent>
                Real-world tasks and community support drive mastery.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Contact</h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <h3 className="text-base font-semibold mb-2">Address</h3>
              <p>Skilora Research Labs<br/>123 Learning Ave<br/>Bangalore, India</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Email & Phone</h3>
              <p>hello@skilora.ai<br/>+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Social</h3>
              <p>LinkedIn • Twitter • YouTube</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
