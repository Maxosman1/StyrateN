import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getContests from '@wasp/queries/getContests';

export function Home() {
  const { data: contests, isLoading, error } = useQuery(getContests);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>New ????</h2>
        <Link to='/new' className='text-blue-500 hover:underline'>See All</Link>
      </div>
      <div className='overflow-x-auto whitespace-nowrap'>
        {contests.map((contest) => (
          <div key={contest.id} className='inline-block mr-4'>
            <Link to={`/contest/${contest.id}`}>
              <div className='w-64 h-36 bg-gray-200 rounded-lg'>
                <img src={contest.thumbnailUrl} alt={contest.name} className='w-full h-full object-cover rounded-lg' />
              </div>
              <h3 className='text-lg font-bold mt-2'>{contest.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center mt-8 mb-4'>
        <h2 className='text-2xl font-bold'>Trending ????</h2>
        <Link to='/trending' className='text-blue-500 hover:underline'>See All</Link>
      </div>
      <div className='overflow-x-auto whitespace-nowrap'>
        {contests.map((contest) => (
          <div key={contest.id} className='inline-block mr-4'>
            <Link to={`/contest/${contest.id}`}>
              <div className='w-64 h-36 bg-gray-200 rounded-lg'>
                <img src={contest.thumbnailUrl} alt={contest.name} className='w-full h-full object-cover rounded-lg' />
              </div>
              <h3 className='text-lg font-bold mt-2'>{contest.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}