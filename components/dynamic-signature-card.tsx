"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Globe, Twitter, Linkedin, Facebook, PhoneCall, Building, Building2, Building2Icon, LucidePhone, PhoneIcon, PhoneCallIcon } from "lucide-react"
import { url } from "inspector"

interface ContactInfo {
  fullName: string
  position: string
  email: string
  phoneNumber: string
  officeNumber?: string
}

interface DynamicSignatureCardProps {
  contactInfo: ContactInfo
  selectedBranch?: {
    name: string
    value: string
  }
  showDownload?: boolean
}

const branchAddresses = [
  {
    name: "Kairaba Branch",
    value: "19 Kairaba Avenue,\nKanifing, KMC, P.O Box 1415\nThe Gambia"
  },
  {
    name: "Banjul Branch",
    value: "Becca Plaza\n5/6 Liberation Avenue\nP.O. Box 1415\nBanjul"
  },
  {
    name: "New Jeshwang Branch",
    value: "Mamadi Manjang Highway\nSerrekunda"
  },
  {
    name: "Tranquil Branch",
    value: "Brufut Highway\nTranquil"
  },
  {
    name: "Bakoteh Branch",
    value: "Manjai Highway"
  },
  {
    name: "Latrikunda Branch",
    value: "Latrikuda Sabiji\nLatrikunda"
  },
  {
    name: "Brikama Branch",
    value: "Mosque Road\nBrikama"
  },
  {
    name: "Farafenni Branch",
    value: "Farafenni"
  },
  {
    name: "Basse Branch",
    value: "Basse"
  }
]

export default function DynamicSignatureCard({ contactInfo, selectedBranch, showDownload = false }: DynamicSignatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPNG, setIsGeneratingPNG] = useState(false)
  
  // Use prop or default to first branch
  const currentBranch = selectedBranch || branchAddresses[0]

  const downloadAsPNG = async () => {
    if (!cardRef.current) return

    try {
      setIsGeneratingPNG(true)
      await new Promise((resolve) => setTimeout(resolve, 100))
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2.2,
        useCORS: true,
        allowTaint: true,
      })
      const link = document.createElement("a")
      link.download = `${contactInfo.fullName.replace(/\s+/g, "_")}_signature_card.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (error) {
      console.error("Error generating PNG:", error)
      alert("Error generating PNG. Please try again.")
    } finally {
      setIsGeneratingPNG(false)
    }
  }

  return (
    <div className="space-y-4">
      <div
        ref={cardRef}
        style={{
          // backgroundColor: "#ffffff",
          backgroundImage: 'url("/new_bg.png")',
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          padding: "10px",
          width: "100%",
          maxWidth: "360px",
          minWidth: "360px",
          maxHeight: "155px",
          position: "relative",
          overflow: "hidden",
          // borderRadius: "12px",
        }}
      >
        {/* Decorative Bubbles */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "-8px",
            width: "65px",
            height: "40px",
            borderRadius: "50%",
            backgroundImage: "url('/Agib_Favicon_3.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.15,
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "15px",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.39)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "-12px",
            width: "220px",
            height: "10px",
            // borderRadius: "50%",
            backgroundColor:  "rgba(105, 183, 74, 1)" ,
            // "rgba(105, 183, 74, 1)",
            zIndex: 0,
            color: "#fffcfaff",
            fontSize: "7px",
            textAlign: "left",
            paddingLeft: "28px",
            paddingTop: isGeneratingPNG ? "-20px" : "0px",
          }}
        ><h6 style={{marginTop: isGeneratingPNG ? '-5px' : "0px"}}>Your Investment Partner</h6></div>


        {/* ...... */}
        {/* <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "-15px",
            width: "100px",
            height: "2px",
            // borderRadius: "50%",
            backgroundColor: "rgba(105, 183, 74, 1)",
            zIndex: 0,
          }}
        ></div> */}

        {/* ...... */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "32px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.27)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "30%",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.22)",
            zIndex: 0,
          }}
        ></div>
        
        {/* Main Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "10px" }}>
            <h1 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px", color: "#68b74a" }}>
              {contactInfo.fullName.toUpperCase()}
            </h1>
            <p style={{ color: "#cd915b", fontSize: "12px", fontWeight: 400 }}>{contactInfo.position}</p>
          </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flexShrink: 0, marginRight: "5px" }}>
            <Image src="/agib-logo.png" alt="Agib Bank Ltd" width={100} height={60} className="object-contain" />
          </div>

          <div
            style={{
              borderLeft: "1px solid #eab308",
              height: "40px",
              marginLeft: "8px",
              marginRight: "8px",
              opacity: 0.4,
            }}
          ></div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                alignItems: "center",
                gap: "3px",
                height: "14px",
                color: "#374151",
              }}
            >
              <Mail
                style={{
                  width: "10px",
                  height: "10px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                }}
              />
              <span
                style={{
                  fontSize: "7px",
                  lineHeight: "14px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-12px" : "0px",
                }}
              >
                {contactInfo.email}
              </span>
            </div>
            
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr",
                alignItems: "left",
                gap: "3px",
                marginRight: "10px",
                height: "14px",
                minWidth: "120px",
                color: "#374151",
              }}
            >
              <MapPin
                style={{
                  width: "10px",
                  height: "10px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                  
                }}
              />
              <span
                style={{
                  fontSize: "6px",
                  lineHeight: "9px",
                  alignSelf: "left",
                  marginTop: isGeneratingPNG ? "-4px" : "0px",
                  marginLeft: "-8px",
                }}
              >
                {currentBranch.value.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < currentBranch.value.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>

            
          </div>

          <div
            style={{
              borderLeft: "1px solid #eab308",
              height: "40px",
              marginLeft: "8px",
              marginRight: "8px",
              opacity: 0.4,
            }}
          ></div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                alignItems: "center",
                gap: "3px",
                height: "14px",
                color: "#374151",
              }}
            >
              <PhoneCallIcon
                style={{
                  width: "10px",
                  height: "10px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                }}
              />
              <span
                style={{
                  fontSize: "6px",
                  lineHeight: "14px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-10px" : "0px",
                }}
              >
               +220 {contactInfo.phoneNumber}
              </span>
            </div>

            {
              contactInfo.officeNumber ? (
              
              <div
              style={{
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                alignItems: "center",
                gap: "3px",
                height: "14px",
                color: "#374151",
              }}
            >
              <Building2
                style={{
                  width: "10px",
                  height: "10px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                }}
              />
              <span
                style={{
                  fontSize: "6px",
                  lineHeight: "14px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-10px" : "0px",
                }}
              >
              {contactInfo.officeNumber ? ` +220 ${contactInfo.officeNumber}` : ""}
              </span>
            </div> ) : null}

            {/* <div
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                alignItems: "center",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <Phone
                style={{
                  width: "12px",
                  height: "12px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-15px" : "0px",
                }}
              >
                3425142
              </span>
            </div> */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                alignItems: "center",
                gap: "3px",
                height: "14px",
                color: "#374151",
              }}
            >
              <Globe
                style={{
                  width: "10px",
                  height: "10px",
                  color: "#68b74a",
                  justifySelf: "start",
                  alignSelf: "center",
                }}
              />
              <span
                style={{
                  fontSize: "6px",
                  lineHeight: "14px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-10px" : "0px",
                }}
              >
                www.agib.gm
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px", gap: "3px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "3px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Twitter style={{ width: "10px", height: "10px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "3px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Linkedin style={{ width: "10px", height: "10px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "3px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mail style={{ width: "10px", height: "10px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "3px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Facebook style={{ width: "10px", height: "10px", color: "#ffffff" }} />
          </div>
        </div>
        </div>
      </div>

      {showDownload && (
        <div className="text-center">
          <button
            onClick={downloadAsPNG}
            style={{
              padding: "8px 24px",
              backgroundColor: "#68b74a",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#68b74a")}
          >
            Download PNG
          </button>
        </div>
      )}
    </div>
  )
}
