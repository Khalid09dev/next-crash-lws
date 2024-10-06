'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
}, [error])

return (
    <div className='mt-2'>
    <h2>Something went wrong while fetching posts!</h2>
    <button
        onClick={
        // Attempt to recover by trying to re-render the segment
        () => reset()
        }
    className='bg-blue-300 text-white px-3 py-1 rounded mt-3'>
        Try again
    </button>
    </div>
)
}