'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function CatchAll() {
  useEffect(() => {
    window.location.href = '/'
  }, [])

  redirect('/')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">Redirecting to home...</p>
      </div>
    </div>
  )
}
