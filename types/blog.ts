export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface BlogListResponse {
  blogs: Blog[];
}