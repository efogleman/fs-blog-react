import { useState } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser'

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [commentText, setCommentText] = useState('');
    const [error, setError] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        try {
            setError(null);
            if (!commentText || commentText.trim() === '') {
                throw Error('Comment is required.');
            }
            setCommentText(commentText.trim());

            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.post(`/api/articles/${articleName}/comments`, {
                text: commentText,
            }, { 
                headers,
            });
            const updatedArticle = response.data;
            onArticleUpdated(updatedArticle);
            setCommentText('');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            {error && <p className='error'>{error}</p>}
            {user && <p>You are posting as {user.email}</p>}
            <label>
                <textarea 
                    value={commentText}
                    placeholder="Enter your comment."
                    onChange={e => setCommentText(e.target.value)}
                    rows="4"
                    cols="50" />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;