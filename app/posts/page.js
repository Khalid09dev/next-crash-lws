import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link";

export const metadata = () => ({
    title: "Create Posts",
    description: "Create and manage posts on your blog"
})
export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);

    return (
        <div className="mt-5">
            <h1>All Posts</h1>

            <ul className="mt-5">
                {posts.map((post) => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </div>
    )
}