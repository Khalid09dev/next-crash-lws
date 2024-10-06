import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import { Suspense } from "react";
export async function generateMetadata({params}) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    }
}

export default async function PostPage({params}) {
    const { id } = params;
    const postPromise = await getPost(id);
    const commentsPromise = await getPostComment(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    const post = await postPromise;

    return (
        <div className="mt-5">
            <h2 className="text-3xl">{post.title}</h2>
            <p className="pt-2">{post.body}</p>
            <hr/>
            <Suspense fallback="<h1>Loading Comments</h1>">
                <Comments promise={commentsPromise}/>
            </Suspense>
        </div>
    )
}