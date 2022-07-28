import Link from 'next/link';
import { BlogCard, BlogGrid } from "./BlogTileStyles";
import Title from "../Title";

export default function BlogTile({ posts }) {
 
return (
  <>
  <BlogGrid>
  {posts.map((post, index) => (
    <BlogCard key={index}>
      <Link
        href='/blog'
      >
        <Title color={"black"} title={post.title}/>
      </Link>
  </BlogCard>
  ))}
  </BlogGrid>
  </>
  );
}