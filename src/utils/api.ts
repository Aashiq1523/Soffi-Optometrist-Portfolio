import { projectId, publicAnonKey } from '../../utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-3dcf849d`;

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${publicAnonKey}`,
});

// ========== BLOG API ==========

export const blogAPI = {
  async getAllPosts() {
    const response = await fetch(`${API_BASE_URL}/blog/posts`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async getPostById(id: string) {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async createPost(post: any) {
    const response = await fetch(`${API_BASE_URL}/blog/posts`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
  },

  async updatePost(id: string, updates: any) {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return data;
  },

  async deletePost(id: string) {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },
};

// ========== TESTIMONIALS API ==========

export const testimonialsAPI = {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async create(testimonial: any) {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(testimonial),
    });
    const data = await response.json();
    return data;
  },

  async approve(id: string) {
    const response = await fetch(`${API_BASE_URL}/testimonials/${id}/approve`, {
      method: 'PUT',
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async delete(id: string) {
    const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },
};

// ========== PORTFOLIO DATA API ==========

export const portfolioAPI = {
  async getProfile() {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async updateProfile(profile: any) {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    return data;
  },

  async getCertifications() {
    const response = await fetch(`${API_BASE_URL}/certifications`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async getCases() {
    const response = await fetch(`${API_BASE_URL}/cases`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async getAwards() {
    const response = await fetch(`${API_BASE_URL}/awards`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },

  async getOutreach() {
    const response = await fetch(`${API_BASE_URL}/outreach`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    return data;
  },
};
