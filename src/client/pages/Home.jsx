import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getVideos from '@wasp/queries/getVideos';

export function HomePage() {
  const { data: videos, isLoading, error } = useQuery(getVideos);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className="p-4">
      {videos.map((video) => (
        <div key={video.id} className="mb-4">
          <iframe
            src={video.url}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <Link to={`/video/${video.id}`} className="text-blue-500 hover:underline">View Details</Link>
        </div>
      ))}
    </div>
  );
}