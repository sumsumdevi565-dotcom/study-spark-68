import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, BookOpen, Brain, BarChart3, FileText, Target, TrendingUp, Star } from "lucide-react";
import studyHero from "@/assets/study-hero.jpg";
import documentProcessing from "@/assets/document-processing.jpg";
import analytics from "@/assets/analytics.jpg";
import aiRecommendations from "@/assets/ai-recommendations.jpg";

const StudyDashboard = () => {
  return (
    <div className="min-h-screen bg-dashboard">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Personalized Study System
              </h1>
              <p className="text-xl text-white/90">
                Transform your learning with AI-powered document processing, automated assessments, and intelligent study recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Documents
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Analytics
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={studyHero} 
                alt="Study System Dashboard" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents Processed</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">+3 this week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">78%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assessments Taken</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">16</div>
              <p className="text-xs text-muted-foreground">+4 this week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">85%</div>
              <p className="text-xs text-muted-foreground">+5% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Document Processing */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src={documentProcessing} 
                  alt="Document Processing" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-xl">Document Processing</CardTitle>
              <CardDescription>
                Upload and process study materials with AI-powered analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>PDFs Processed</span>
                  <span className="font-medium">18/25</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <Button variant="study" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Document
              </Button>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src={analytics} 
                  alt="Progress Analytics" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-xl">Progress Analytics</CardTitle>
              <CardDescription>
                Track your learning progress with detailed insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Weekly Goal</span>
                  <span className="font-medium">6/8 hours</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <Button variant="success" className="w-full">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Full Analytics
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src={aiRecommendations} 
                  alt="AI Recommendations" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-xl">AI Recommendations</CardTitle>
              <CardDescription>
                Get personalized study suggestions based on your progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span>Next Study Topic</span>
                  <span className="font-medium text-accent">Calculus</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Recommended Time</span>
                  <span className="font-medium">45 min</span>
                </div>
              </div>
              <Button variant="accent" className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Get Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recent Study Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span className="font-medium">Completed "Linear Algebra Quiz"</span>
                </div>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Processed "Calculus Textbook Chapter 3"</span>
                </div>
                <span className="text-sm text-muted-foreground">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="font-medium">Generated assessment from "Physics Notes"</span>
                </div>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyDashboard;