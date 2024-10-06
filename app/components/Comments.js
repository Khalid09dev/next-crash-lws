export default async function Comments({promise}) {
    const comments = await promise;
    return (
        <div className="mt-3">
                <h1 className="mb-3">Comments</h1>
                <ul>
                    {comments.map((comment) => <li className="mb-2" key={comment.id}>{comment.body}</li>)}
                </ul>
        </div>
    )
}