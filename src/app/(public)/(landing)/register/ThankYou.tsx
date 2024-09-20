'use client';

import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-[50vh] flex flex-col justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for registering!</h2>
        <p className="text-lg">We are excited to have you as a member of our community.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => router.push('/home')}>
          Continue
        </button>
      </div>
    </div>
  )
}