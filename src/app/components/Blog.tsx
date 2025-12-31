import { useState, useEffect } from "react";
import { Calendar, User, Tag, ArrowRight, X } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogAPI } from "../../utils/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { EyeBackground } from "./EyeBackground";

export function Blog() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await blogAPI.getAllPosts();
        if (response.success && response.data) {
          setBlogPosts(response.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedPost(null), 300); // Clear after animation
  };

  return (
    <>
      <section id="blog" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Eye-themed background */}
        <EyeBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Blog & Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sharing knowledge, experiences, and perspectives on eye care and clinical practice
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No blog posts yet. Check back soon!</p>
              <p className="text-sm text-gray-500">Use the Admin panel to create your first blog post.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 6).map((post, index) => (
                  <Card key={post.id || index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-700 hover:bg-amber-800">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        {post.readTime && (
                          <div className="flex items-center gap-1">
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2 group-hover:text-amber-700 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag: string, tagIndex: number) => (
                            <Badge 
                              key={tagIndex} 
                              variant="outline" 
                              className="text-xs border-amber-700 text-amber-700"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-amber-50 group-hover:text-amber-700"
                        onClick={() => handleReadMore(post)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {blogPosts.length > 6 && (
                <div className="text-center mt-12">
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg">
                    View All Blog Posts
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900 pr-8">
                  {selectedPost.title}
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  {selectedPost.excerpt}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Featured Image */}
                {selectedPost.image && (
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  {selectedPost.readTime && (
                    <span className="text-gray-500">• {selectedPost.readTime}</span>
                  )}
                  <Badge className="bg-amber-700 hover:bg-amber-800">
                    {selectedPost.category}
                  </Badge>
                </div>
                
                {/* Tags */}
                {selectedPost.tags && selectedPost.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag: string, index: number) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-amber-700 text-amber-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }}
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}