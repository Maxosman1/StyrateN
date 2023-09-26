import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getSubmissions from '@wasp/queries/getSubmissions';

export function Submission() {
  const { submissionId } = useParams();
  const { data: submission, isLoading, error } = useQuery(getSubmissions, { contestId: submissionId });

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      <h1>{submission.title}</h1>
      <video src={submission.videoUrl} controls />
      <p>{submission.description}</p>
      {/* Additional UI elements for reactions and comments */}
    </div>
  );
}