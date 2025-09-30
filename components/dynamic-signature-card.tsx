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
  showDownload?: boolean
}

export default function DynamicSignatureCard({ contactInfo, showDownload = false }: DynamicSignatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPNG, setIsGeneratingPNG] = useState(false)

  const downloadAsPNG = async () => {
    if (!cardRef.current) return

    try {
      setIsGeneratingPNG(true)
      await new Promise((resolve) => setTimeout(resolve, 100))
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      })
      const link = document.createElement("a")
      link.download = `${contactInfo.fullName.replace(/\s+/g, "_")}_business_card.png`
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
          padding: "16px",
          width: "100%",
          maxWidth: "576px",
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
            right: "-10px",
            width: "80px",
            height: "50px",
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
            top: "30px",
            right: "20px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.39)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "-15px",
            width: "260px",
            height: "10px",
            // borderRadius: "50%",
            backgroundColor: "rgba(105, 183, 74, 1)" ,
            // "rgba(105, 183, 74, 1)",
            zIndex: 0,
          }}
        ></div>


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
            bottom: "20px",
            left: "40px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.27)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "30%",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            // backgroundColor: "rgba(105, 183, 74, 0.22)",
            zIndex: 0,
          }}
        ></div>
        
        {/* Main Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "12px" }}>
            <h1 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "4px", color: "#68b74a" }}>
              {contactInfo.fullName.toUpperCase()}
            </h1>
            <p style={{ color: "#cd915b", fontSize: "14px", fontWeight: 400 }}>{contactInfo.position}</p>
          </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flexShrink: 0, marginRight: "16px" }}>
            <Image src="/agib-logo.png" alt="Agib Bank Ltd" width={126} height={50} className="object-contain" />
          </div>

          <div
            style={{
              borderLeft: "1px solid #eab308",
              height: "48px",
              marginLeft: "12px",
              marginRight: "12px",
              opacity: 0.4,
            }}
          ></div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                alignItems: "center",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <Mail
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
                  fontSize: "9px",
                  lineHeight: "16px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-15px" : "0px",
                }}
              >
                {contactInfo.email}
              </span>
            </div>
            
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30px 1fr",
                alignItems: "left",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <MapPin
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
                  fontSize: "8px",
                  lineHeight: "11px",
                  alignSelf: "left",
                  marginTop: isGeneratingPNG ? "-5px" : "0px",
                  marginLeft: "-10px",
                }}
              >
                19 Kairaba Avenue,<br />Kanifing, KMC P.O Box 1415 The Gambia
                
              </span>
            </div>

            
          </div>

          <div
            style={{
              borderLeft: "1px solid #eab308",
              height: "48px",
              marginLeft: "12px",
              marginRight: "12px",
              opacity: 0.4,
            }}
          ></div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                alignItems: "center",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <PhoneCallIcon
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
                  fontSize: contactInfo.officeNumber ? "9px" : "9px",
                  lineHeight: "16px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-15px" : "0px",
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
                gridTemplateColumns: "20px 1fr",
                alignItems: "center",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <Building2
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
                  fontSize: contactInfo.officeNumber ? "9px" : "9px",
                  lineHeight: "16px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-15px" : "0px",
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
                gridTemplateColumns: "20px 1fr",
                alignItems: "center",
                gap: "4px",
                height: "16px",
                color: "#374151",
              }}
            >
              <Globe
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
                  fontSize: "10px",
                  lineHeight: "16px",
                  alignSelf: "center",
                  marginTop: isGeneratingPNG ? "-15px" : "0px",
                }}
              >
                www.agib.gm
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px", gap: "4px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "4px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Twitter style={{ width: "12px", height: "12px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "4px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Linkedin style={{ width: "12px", height: "12px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "4px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mail style={{ width: "12px", height: "12px", color: "#ffffff" }} />
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "4px",
              backgroundColor: "#68b74a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Facebook style={{ width: "12px", height: "12px", color: "#ffffff" }} />
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
