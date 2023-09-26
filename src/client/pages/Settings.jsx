import React from 'react';


export function Settings() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Settings</h1>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-2'>Notification Preferences</h2>
        <div className='flex items-center mb-2'>
          <input type='checkbox' className='mr-2' />
          <label>Receive email notifications</label>
        </div>
        <div className='flex items-center'>
          <input type='checkbox' className='mr-2' />
          <label>Receive push notifications</label>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-2'>Privacy Settings</h2>
        <div className='flex items-center mb-2'>
          <input type='checkbox' className='mr-2' />
          <label>Make profile public</label>
        </div>
        <div className='flex items-center'>
          <input type='checkbox' className='mr-2' />
          <label>Allow direct messages</label>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-xl font-bold mb-2'>Subscription</h2>
        <p>You are currently subscribed to the Premium tier.</p>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2'>Cancel Subscription</button>
      </div>
    </div>
  );
}