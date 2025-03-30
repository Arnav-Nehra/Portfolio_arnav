'use client';

import { useState } from 'react';
import ProjectHeading from "@/components/ProjectHeading";
import BlogCategories from "@/components/BlogCategories";
import BlogList from "@/components/BlogList";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="container mx-auto px-4 py-8">
      <ProjectHeading 
        headingtitle="My Blogs" 
        description="Exploring ideas through words and sharing my journey in technology"
      />
      <BlogCategories 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <BlogList selectedCategory={selectedCategory} />
    </main>
  );
}