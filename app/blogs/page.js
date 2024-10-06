import Link from "next/link"

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: 'blog 1',
            description: 'blog 1 description',
        },
        {
            id: 2,
            title: 'blog 2',
            description: 'blog 2 description',
        }
    ] 

    return (
        <div className="mt-5">
            <h1>Blogs</h1>
            <ul>
                {
                    blogs.map((blog) => <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}