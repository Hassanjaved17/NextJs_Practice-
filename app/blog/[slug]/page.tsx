export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This is the content for "{slug}".</p>
    </div>
  );
}