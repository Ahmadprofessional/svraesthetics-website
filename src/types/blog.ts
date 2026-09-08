export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  publishDate: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  sections: BlogSection[];
  conclusion: string;
}
