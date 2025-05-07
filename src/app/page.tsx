import ProfileCard from "@/components/profile-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HTML to PNG Converter",
  description: "Convert HTML content to PNG images",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">HTML to PNG Converter</h1>
        <ProfileCard />
      </div>  
    </main>
  )
}
