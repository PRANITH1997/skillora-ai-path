import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AISearchBar from "@/components/common/AISearchBar";

const UserDashboard = () => {
  return (
    <>
      <Helmet>
        <title>User Dashboard — Skilora Research Labs</title>
        <meta name="description" content="Access courses, tasks, certificates, projects, and live classes." />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <SiteHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="live">Live Classes</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="ai">AI Search</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

        <TabsContent value="courses">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Enrolled courses will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No courses yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Ask the AI Assistant</CardTitle>
              <CardDescription>Get instant help on your course topics</CardDescription>
            </CardHeader>
            <CardContent>
              <AISearchBar isAuthenticated />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Assignments & Quizzes</CardTitle>
              <CardDescription>Manage your tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No tasks yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Certificates</CardTitle>
              <CardDescription>Earned certificates will appear here</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Track your projects</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Attendance</CardTitle>
              <CardDescription>Class attendance records</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="live">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Live Classes</CardTitle>
              <CardDescription>Join upcoming sessions</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="materials">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Materials</CardTitle>
              <CardDescription>Access notes, slides, and videos</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Edit your personal information</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </>
  );
};

export default UserDashboard;
