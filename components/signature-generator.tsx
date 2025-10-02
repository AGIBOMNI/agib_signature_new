"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Briefcase, Mail, Phone, Plus, Eye, MapPin } from "lucide-react"
import DynamicSignatureCard from "./dynamic-signature-card"
import Image from "next/image"

interface ContactInfo {
  fullName: string
  position: string
  email: string
  phoneNumber: string
  officeNumber?: string
}

const branchAddresses = [
  {
    name: "Kairaba Branch",
    value: "19 Kairaba Avenue,\nKanifing, KMC, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Banjul Branch",
    value: "Becca Plaza 5/6 Liberation Avenue,\nBCC, Banjul P.O Box 1415\nThe Gambia"
  },
  {
    name: "New Jeshwang Branch",
    value: "Mamadi Manjang Highway,\nSerrekunda,KMC, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Tranquil Branch",
    value: "Brufut Highway,\nTranquil,WCR, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Bakoteh Branch",
    value: "Manjai Highway\nBakoteh,KMC, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Latrikunda Branch",
    value: "Latrikuda Sabiji\nLatrikunda,KMC, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Brikama Branch",
    value: "Mosque Road\nBrikama, WCR, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Farafenni Branch",
    value: "North Bank Region,\nFarafenni,NBR, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Basse Branch",
    value: "Basse Santosu,\nBasse, URR, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Numuyel Agency",
    value: "Upper River Region,\nNumuyel,URR, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Garawol Agency",
    value: "Upper River Region,\nGarawol, URR, P.O Box 1415\nThe Gambia"
  }
]

export default function SignatureGenerator() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    fullName: "",
    position: "",
    email: "",
    phoneNumber: "",
    officeNumber: "",
  })

  const [showSignature, setShowSignature] = useState(false)
  const [generatedLink, setGeneratedLink] = useState("")
  const [selectedBranch, setSelectedBranch] = useState(branchAddresses[0])

  const handleInputChange = (field: keyof ContactInfo, value: string) => {
    setContactInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGenerateCard = () => {
    if (contactInfo.fullName && contactInfo.position && contactInfo.email && contactInfo.phoneNumber) {
      setShowSignature(true)
    }
  }

  const isFormValid = contactInfo.fullName && contactInfo.position && contactInfo.email && contactInfo.phoneNumber

  const handleTakeScreenshot = () => {
    // This will trigger the download function in the DynamicSignatureCard component
    const event = new CustomEvent("takeScreenshot")
    window.dispatchEvent(event)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* AGIB Logo Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex justify-center">
          <Image
            src="/agib-logo.png"
            alt="AGIB Logo"
            width={250}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          <Card className="h-fit">
            <div style={{ backgroundColor: "#68b74a", marginTop: "-1.5rem" }} className="px-6 py-4 rounded-t-lg ">
              <div className="flex items-center gap-3 text-white">
                <Plus className="w-6 h-6" />
                <div>
                  <h2 className="text-xl font-semibold">ADD YOUR INFORMATION</h2>
                  <p className="text-green-100 text-sm">Create professional signature cards instantly</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                {/* Row 1: Full Name and Position */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Alioune Badara"
                      value={contactInfo.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4" />
                      Position/Title
                    </Label>
                    <Input
                      id="position"
                      type="text"
                      placeholder="Lead Software Engineer"
                      value={contactInfo.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Row 2: Email and Branch Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="aliouneb.keita@agib.gm"
                      value={contactInfo.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="branch-select"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Select Branch Address
                    </Label>
                    <Select
                      value={selectedBranch.name}
                      onValueChange={(value) => {
                        const branch = branchAddresses.find(b => b.name === value)
                        if (branch) setSelectedBranch(branch)
                      }}
                    >
                      <SelectTrigger className="h-12 w-full focus:ring-green-500">
                        <SelectValue placeholder="Select a branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branchAddresses.map((branch) => (
                          <SelectItem key={branch.name} value={branch.name}>
                            {branch.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: Phone Number and Office Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                    >
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="3451004"
                      value={contactInfo.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="officeNumber"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                    >
                      <Phone className="w-4 h-4" />
                      Office Number (Optional)
                    </Label>
                    <Input
                      id="officeNumber"
                      type="tel"
                      placeholder="3425142"
                      value={contactInfo.officeNumber}
                      onChange={(e) => handleInputChange("officeNumber", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-fit">
            <div style={{ backgroundColor: "#68b74a", marginTop: "-1.5rem" }} className="px-6 py-4 rounded-t-lg">
              <div className="flex items-center gap-3 text-white">
                <Eye className="w-6 h-6" />
                <div>
                  <h2 className="text-xl font-semibold">Signature Card Preview</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              {showSignature && isFormValid ? (
                <div className="flex justify-center">
                  <DynamicSignatureCard contactInfo={contactInfo} selectedBranch={selectedBranch} showDownload={true} />
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12 border-2 border-dashed border-gray-200 rounded-lg">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">No Preview Available</p>
                  <p>Fill in all fields to see your signature card preview</p>
                </div>
              )}
            </div>

            {!showSignature && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleGenerateCard}
              disabled={!isFormValid}
              size="lg"
              style={{ backgroundColor: isFormValid ? "#68B74A" : undefined }}
              className="px-8 py-3 text-lg"
            >
              Generate Signature Card
            </Button>
          </div>
        )}
          </Card>

          
        </div>

        {/* {!showSignature && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleGenerateCard}
              disabled={!isFormValid}
              size="lg"
              style={{ backgroundColor: isFormValid ? "#68B74A" : undefined }}
              className="px-8 py-3 text-lg"
            >
              Generate Signature Card
            </Button>
          </div>
        )} */}

      </div>
    </div>
    </>
  )
}
