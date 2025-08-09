import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard — Skilora Research Labs</title>
        <meta name="description" content="Manage courses, students, schedules and analytics." />
        <link rel="canonical" href="/admin" />
      </Helmet>
      <SiteHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="schedule">Class Scheduling</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="uploads">Uploads</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="targets">Targets</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Add, edit and delete courses</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero">Add Course</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Schedule Live Classes</CardTitle>
                <CardDescription>Integrate Zoom or WebRTC (coming soon)</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View profiles, enrollment, and attendance</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="uploads">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Content & Resources</CardTitle>
                <CardDescription>Upload materials, assignments, and quizzes</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Track progress and completion rates</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="targets">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Target Processing</CardTitle>
                <CardDescription>Select entries and process in batches</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Reports & Certificates</CardTitle>
                <CardDescription>Generate and issue certificates</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </>
  );
};

export default AdminDashboard;
