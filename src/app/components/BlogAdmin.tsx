import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Plus, Edit, Trash2, Save, X, Database } from "lucide-react";
import { blogAPI } from "../../utils/api";
import { toast } from "sonner";
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    image: "",
    author: "Soffi A",
    readTime: "",
    tags: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAllPosts();
      if (response.success) {
        setPosts(response.data || []);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
    };

    try {
      if (editingPost) {
        const response = await blogAPI.updatePost(editingPost.id.replace('blog_post_', ''), postData);
        if (response.success) {
          toast.success("Post updated successfully!");
          fetchPosts();
        }
      } else {
        const response = await blogAPI.createPost(postData);
        if (response.success) {
          toast.success("Post created successfully!");
          fetchPosts();
        }
      }
      
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Failed to save post");
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      readTime: post.readTime,
      tags: post.tags.join(", "),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await blogAPI.deletePost(postId.replace('blog_post_', ''));
      if (response.success) {
        toast.success("Post deleted successfully!");
        fetchPosts();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      category: "",
      excerpt: "",
      content: "",
      image: "",
      author: "Soffi A",
      readTime: "",
      tags: "",
    });
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const handleSeedData = async () => {
    if (!confirm("This will add sample blog posts to your database. Continue?")) return;
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-3dcf849d/seed`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Successfully seeded ${data.seeded.blogPosts} blog posts!`);
        fetchPosts();
      } else {
        toast.error("Failed to seed data");
      }
    } catch (error) {
      console.error("Error seeding data:", error);
      toast.error("Failed to seed data");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Admin Panel</h1>
          <p className="text-gray-600">Manage your blog posts</p>
        </div>
        
        <div className="flex gap-3">
          {posts.length === 0 && (
            <Button 
              variant="outline"
              onClick={handleSeedData}
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <Database className="mr-2 h-5 w-5" />
              Load Sample Data
            </Button>
          )}
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => resetForm()}>
                <Plus className="mr-2 h-5 w-5" />
                New Post
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title *</label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter post title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category *</label>
                    <Input
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g., Eye Care Tips"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Read Time *</label>
                    <Input
                      required
                      value={formData.readTime}
                      onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image URL *</label>
                  <Input
                    required
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt *</label>
                  <Textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Brief description of the post"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Content *</label>
                  <Textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Full post content"
                    rows={8}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="vision care, eye health, tips"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                    <Save className="mr-2 h-4 w-4" />
                    {editingPost ? "Update Post" : "Create Post"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-600 mb-4">No blog posts yet. Create your first post!</p>
          <Button 
            className="bg-amber-700 hover:bg-amber-800" 
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="mr-2 h-5 w-5" />
            Create First Post
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-48 h-32 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge className="bg-amber-700 mb-2">{post.category}</Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}