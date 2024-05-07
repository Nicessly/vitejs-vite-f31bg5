
import React from 'react';
import './post.css'; 
import { UilImagePlus } from '@iconscout/react-unicons';

function Post() {
    return (
        <main>
            <form className="create-post">
                <div className="profile-pic">
                    <img src="images/profile-8.jpg" alt="" />
                </div>
                <label htmlFor="image-upload" className="image-upload-label">
                    <UilImagePlus className="image-icon" /> {/* Utiliza el icono de "imagen" correcto */}
                </label>
                <input type="file" id="image-upload" accept="image/*" className="image-upload-input" />
                <br />
                <input type="text" placeholder="What's on your mind Chirag?" id="create-post" />
                <br />
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        </main>
    );
}

export default Post;
