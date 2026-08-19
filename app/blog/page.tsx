import Link from "next/link";

const posts = ["hello-world", "nextjs-is-fun", "learning-routing"];

export default function BlogIndex() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
