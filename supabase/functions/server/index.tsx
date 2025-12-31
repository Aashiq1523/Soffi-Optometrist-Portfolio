import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { sampleBlogPosts, sampleTestimonials } from "./seed.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3dcf849d/health", (c) => {
  return c.json({ status: "ok" });
});

// ========== BLOG POSTS ROUTES ==========

// Get all blog posts
app.get("/make-server-3dcf849d/blog/posts", async (c) => {
  try {
    const posts = await kv.getByPrefix("blog_post_");
    return c.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return c.json({ success: false, error: "Failed to fetch blog posts" }, 500);
  }
});

// Get single blog post by ID
app.get("/make-server-3dcf849d/blog/posts/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const post = await kv.get(`blog_post_${id}`);
    if (!post) {
      return c.json({ success: false, error: "Post not found" }, 404);
    }
    return c.json({ success: true, data: post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return c.json({ success: false, error: "Failed to fetch blog post" }, 500);
  }
});

// Create new blog post
app.post("/make-server-3dcf849d/blog/posts", async (c) => {
  try {
    const body = await c.req.json();
    const postId = `blog_post_${Date.now()}`;
    const post = {
      id: postId,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await kv.set(postId, post);
    return c.json({ success: true, data: post }, 201);
  } catch (error) {
    console.error("Error creating blog post:", error);
    return c.json({ success: false, error: "Failed to create blog post" }, 500);
  }
});

// Update blog post
app.put("/make-server-3dcf849d/blog/posts/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const postKey = `blog_post_${id}`;
    const existingPost = await kv.get(postKey);
    
    if (!existingPost) {
      return c.json({ success: false, error: "Post not found" }, 404);
    }
    
    const updatedPost = {
      ...existingPost,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(postKey, updatedPost);
    return c.json({ success: true, data: updatedPost });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return c.json({ success: false, error: "Failed to update blog post" }, 500);
  }
});

// Delete blog post
app.delete("/make-server-3dcf849d/blog/posts/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const postKey = `blog_post_${id}`;
    await kv.del(postKey);
    return c.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return c.json({ success: false, error: "Failed to delete blog post" }, 500);
  }
});

// ========== TESTIMONIALS ROUTES ==========

// Get all testimonials
app.get("/make-server-3dcf849d/testimonials", async (c) => {
  try {
    const testimonials = await kv.getByPrefix("testimonial_");
    return c.json({ success: true, data: testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return c.json({ success: false, error: "Failed to fetch testimonials" }, 500);
  }
});

// Create new testimonial
app.post("/make-server-3dcf849d/testimonials", async (c) => {
  try {
    const body = await c.req.json();
    const testimonialId = `testimonial_${Date.now()}`;
    const testimonial = {
      id: testimonialId,
      ...body,
      createdAt: new Date().toISOString(),
      approved: false, // Testimonials need approval by default
    };
    await kv.set(testimonialId, testimonial);
    return c.json({ success: true, data: testimonial }, 201);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return c.json({ success: false, error: "Failed to submit testimonial" }, 500);
  }
});

// Approve testimonial
app.put("/make-server-3dcf849d/testimonials/:id/approve", async (c) => {
  try {
    const id = c.req.param("id");
    const testimonialKey = `testimonial_${id}`;
    const testimonial = await kv.get(testimonialKey);
    
    if (!testimonial) {
      return c.json({ success: false, error: "Testimonial not found" }, 404);
    }
    
    const updatedTestimonial = {
      ...testimonial,
      approved: true,
      approvedAt: new Date().toISOString(),
    };
    
    await kv.set(testimonialKey, updatedTestimonial);
    return c.json({ success: true, data: updatedTestimonial });
  } catch (error) {
    console.error("Error approving testimonial:", error);
    return c.json({ success: false, error: "Failed to approve testimonial" }, 500);
  }
});

// Delete testimonial
app.delete("/make-server-3dcf849d/testimonials/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const testimonialKey = `testimonial_${id}`;
    await kv.del(testimonialKey);
    return c.json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return c.json({ success: false, error: "Failed to delete testimonial" }, 500);
  }
});

// ========== PORTFOLIO DATA ROUTES ==========

// Get profile data
app.get("/make-server-3dcf849d/profile", async (c) => {
  try {
    const profile = await kv.get("profile_data");
    return c.json({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return c.json({ success: false, error: "Failed to fetch profile" }, 500);
  }
});

// Update profile data
app.put("/make-server-3dcf849d/profile", async (c) => {
  try {
    const body = await c.req.json();
    await kv.set("profile_data", body);
    return c.json({ success: true, data: body });
  } catch (error) {
    console.error("Error updating profile:", error);
    return c.json({ success: false, error: "Failed to update profile" }, 500);
  }
});

// Get certifications
app.get("/make-server-3dcf849d/certifications", async (c) => {
  try {
    const certifications = await kv.getByPrefix("cert_");
    return c.json({ success: true, data: certifications });
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return c.json({ success: false, error: "Failed to fetch certifications" }, 500);
  }
});

// Get clinical cases
app.get("/make-server-3dcf849d/cases", async (c) => {
  try {
    const cases = await kv.getByPrefix("case_");
    return c.json({ success: true, data: cases });
  } catch (error) {
    console.error("Error fetching cases:", error);
    return c.json({ success: false, error: "Failed to fetch cases" }, 500);
  }
});

// Get awards
app.get("/make-server-3dcf849d/awards", async (c) => {
  try {
    const awards = await kv.getByPrefix("award_");
    return c.json({ success: true, data: awards });
  } catch (error) {
    console.error("Error fetching awards:", error);
    return c.json({ success: false, error: "Failed to fetch awards" }, 500);
  }
});

// Get outreach activities
app.get("/make-server-3dcf849d/outreach", async (c) => {
  try {
    const activities = await kv.getByPrefix("outreach_");
    return c.json({ success: true, data: activities });
  } catch (error) {
    console.error("Error fetching outreach activities:", error);
    return c.json({ success: false, error: "Failed to fetch outreach activities" }, 500);
  }
});

// ========== SEED DATA ENDPOINT ==========

// Seed sample data (for demo/testing purposes)
app.post("/make-server-3dcf849d/seed", async (c) => {
  try {
    console.log("Seeding sample blog posts...");
    
    // Seed blog posts
    for (const post of sampleBlogPosts) {
      const postId = `blog_post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await kv.set(postId, {
        id: postId,
        ...post,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      // Small delay to ensure unique timestamps
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    console.log("Seeding sample testimonials...");
    
    // Seed testimonials
    for (const testimonial of sampleTestimonials) {
      const testimonialId = `testimonial_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await kv.set(testimonialId, {
        id: testimonialId,
        ...testimonial,
        createdAt: new Date().toISOString(),
      });
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    return c.json({ 
      success: true, 
      message: "Sample data seeded successfully",
      seeded: {
        blogPosts: sampleBlogPosts.length,
        testimonials: sampleTestimonials.length
      }
    });
  } catch (error) {
    console.error("Error seeding data:", error);
    return c.json({ success: false, error: "Failed to seed data" }, 500);
  }
});

Deno.serve(app.fetch);