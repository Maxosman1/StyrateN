import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getUserProfile from '@wasp/queries/getUserProfile';
import updateProfile from '@wasp/actions/updateProfile';

export function Profile() {
  const { userId } = useParams();
  const { data: userProfile, isLoading, error } = useQuery(getUserProfile, { id: userId });
  const updateProfileFn = useAction(updateProfile);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdateProfile = (value) => {
    updateProfileFn({ handle: value });
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{userProfile.username}</h1>
      <div className="flex items-center mb-4">
        <img src={userProfile.profilePicture} alt="Profile Picture" className="w-16 h-16 rounded-full mr-4" />
        <input type="file" accept="image/*" className="px-2 py-1 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="handle" className="block font-bold">Handle:</label>
        <input type="text" id="handle" value={userProfile.handle} onChange={(e) => handleUpdateProfile(e.target.value)} className="px-2 py-1 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="points" className="block font-bold">Points:</label>
        <p id="points" className="px-2 py-1 border rounded">{userProfile.points}</p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Submissions</h2>
      {userProfile.submissions.map((submission) => (
        <div key={submission.id} className="bg-gray-100 p-4 mb-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{submission.title}</h3>
          <p>{submission.description}</p>
        </div>
      ))}
    </div>
  );
}