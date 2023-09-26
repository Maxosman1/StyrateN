import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getContests from '@wasp/queries/getContests';

export function ContestPage() {
  const { data: contests, isLoading, error } = useQuery(getContests);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <div className='flex flex-wrap gap-4'>
        {contests.map((contest) => (
          <Link
            to={`/contest/${contest.id}`}
            key={contest.id}
            className='w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200'
          >
            <div className='h-40 bg-gray-300 rounded-lg'></div>
            <div className='mt-2 font-bold'>{contest.name}</div>
            <div className='mt-1 text-sm'>{contest.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}