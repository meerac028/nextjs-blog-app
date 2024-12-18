import { getBlogs } from '@/lib/api';
import { Header } from '@/components/layout/header';
import { HeroSlider } from '@/components/hero/hero-slider';
import { BlogSlider } from '@/components/blog/slider/blog-slider';

export default async function Home() {
  const { blogs } = await getBlogs();

  return (
    <div>
      <HeroSlider />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <div>
          <Header 
            title="Our Blog" 
            description="Discover the latest insights and stories" 
          />
        </div>
        
        <BlogSlider 
          blogs={blogs} 
          title="Featured Posts" 
        />
      </main>
    </div>
  );
}