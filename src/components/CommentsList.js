const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    {comments && comments.length === 0 ? (
        <p>No comments have been added.</p>
    ):""}
    {comments.map((comment, i) => (
        <div className="comment" key={i}>
            <h4>{comment.email}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;