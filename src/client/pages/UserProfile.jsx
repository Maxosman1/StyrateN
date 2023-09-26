import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getUser from '@wasp/queries/getUser';
import createVideo from '@wasp/actions/createVideo';

export function UserProfile() {
  const { userId } = useParams();
  const { data: user, isLoading, error } = useQuery(getUser, { userId });
  const createVideoFn = useAction(createVideo);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateVideo = (url) => {
    createVideoFn({ url });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Videos: {user.videos.length}</p>
      <p>Comments: {user.comments.length}</p>
      <p>Reactions: {user.reactions.length}</p>

      <h3 className="text-xl font-bold mt-4">Submit New Video</h3>
      <input
        type="text"
        placeholder="Video URL"
        className="px-1 py-2 border rounded text-lg"
      />
      <button
        onClick={() => handleCreateVideo('URL')}
        className="bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded mt-2"
      >
        Submit
      </button>

      <h3 className="text-xl font-bold mt-4">Videos</h3>
      {user.videos.map((video) => (
        <div key={video.id} className="border rounded p-2 mt-2">
          <p>{video.url}</p>
        </div>
      ))}
    </div>
  );
}