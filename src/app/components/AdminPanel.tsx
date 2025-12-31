import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { BlogAdmin } from "./BlogAdmin";

interface AdminPanelProps {
  onBackToSite: () => void;
}

export function AdminPanel({ onBackToSite }: AdminPanelProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={onBackToSite}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                Portfolio Admin Panel
              </h1>
              <p className="text-sm text-gray-600">Manage your portfolio content</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Soffi A</p>
            <p className="text-xs text-gray-600">Administrator</p>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="py-8">
        <Tabs defaultValue="blog" className="max-w-7xl mx-auto px-4">
          <TabsList className="mb-8">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <BlogAdmin />
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="bg-white rounded-lg p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Testimonials Management</h2>
              <p className="text-gray-600 mb-4">Coming soon - Approve and manage patient testimonials</p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="bg-white rounded-lg p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Portfolio Settings</h2>
              <p className="text-gray-600 mb-4">Coming soon - Update profile information and preferences</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
