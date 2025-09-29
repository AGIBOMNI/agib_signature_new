"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import DynamicSignatureCard from "@/components/dynamic-signature-card"

interface ContactInfo {
  fullName: string
  position: string
  email: string
  phoneNumber: string
}

function CardContent() {
  const searchParams = useSearchParams()
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)

  useEffect(() => {
    const name = searchParams.get("name")
    const position = searchParams.get("position")
    const email = searchParams.get("email")
    const phone = searchParams.get("phone")

    if (name && position && email && phone) {
      setContactInfo({
        fullName: name,
        position: position,
        email: email,
        phoneNumber: phone,
      })
    }
  }, [searchParams])

  if (!contactInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Link</h1>
          <p className="text-gray-600">This business card link is missing required information.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Agib Bank v7 Business Card</h1>
        <DynamicSignatureCard contactInfo={contactInfo} showDownload={true} />
        <div className="mt-6">
          <p className="text-sm text-gray-600">This is a shareable v7 business card for {contactInfo.fullName}</p>
        </div>
      </div>
    </div>
  )
}

export default function CardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading business card...</p>
          </div>
        </div>
      }
    >
      <CardContent />
    </Suspense>
  )
}
