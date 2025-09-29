import Image from "next/image"
import { Mail, MapPin, Phone, Globe, Twitter, Linkedin, Facebook } from "lucide-react"

export default function SignatureCard() {
  return (
    <div className="bg-white shadow-lg border border-gray-200 p-4 max-w-xl w-full">
      {/* Header Section */}
      <div className="mb-3">
        <h1 className="text-lg font-bold mb-1" style={{ color: "#6cb64d" }}>
          ALIOUNE BADARA KEITA
        </h1>
        <p className="text-gray-500 text-sm">Tech Lead, Software Developer</p>
      </div>

      {/* Main Content Section */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 mr-4">
          <Image src="/agib-logo.png" alt="Agib Bank Ltd" width={140} height={56} className="object-contain" />
        </div>

        <div className="border-l h-12 mx-3" style={{ borderColor: "#cc9662", opacity: 0.4 }}></div>

        {/* Contact Information */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: "#6cb64d" }} />
            <span className="text-xs">19 Kairaba Avenue</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Mail className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: "#6cb64d" }} />
            <span className="text-xs">aliouneb.keita@agib.gm</span>
          </div>
        </div>

        <div className="border-l h-12 mx-3" style={{ borderColor: "#cc9662", opacity: 0.4 }}></div>

        {/* Contact Information */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center text-gray-600">
            <Phone className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: "#6cb64d" }} />
            <span className="text-xs">3451004</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Globe className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: "#6cb64d" }} />
            <span className="text-xs">www.agib.gm</span>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-end mt-3 space-x-1">
        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#6cb64d" }}>
          <Twitter className="w-3 h-3 text-white" />
        </div>
        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#6cb64d" }}>
          <Linkedin className="w-3 h-3 text-white" />
        </div>
        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#6cb64d" }}>
          <Mail className="w-3 h-3 text-white" />
        </div>
        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#6cb64d" }}>
          <Facebook className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  )
}
