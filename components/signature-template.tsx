// Template for team members to customize
export default function SignatureTemplate() {
  // EDIT THESE VALUES FOR EACH TEAM MEMBER
  const contactInfo = {
    name: "YOUR NAME HERE",
    title: "Your Job Title",
    address: "19 Kairaba Avenue", // Keep same address
    email: "your.email@agib.gm",
    phone: "Your Phone Number",
    website: "www.agib.gm", // Keep same website
    // Social media links (optional - replace # with actual URLs)
    twitter: "#",
    linkedin: "#",
    googleplus: "#",
    facebook: "#",
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        lineHeight: "1.4",
        color: "#333333",
        maxWidth: "600px",
      }}
    >
      {/* Main signature container */}
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: "20px", verticalAlign: "top" }}>
              {/* Logo */}
              <img
                src="/agib-logo.png"
                alt="Agib Bank Ltd"
                style={{
                  width: "120px",
                  height: "auto",
                  display: "block",
                }}
              />
            </td>
            <td
              style={{
                paddingLeft: "20px",
                borderLeft: `1px solid rgba(204, 150, 98, 0.4)`,
                verticalAlign: "top",
              }}
            >
              {/* Contact Information */}
              <div>
                {/* Name and Title */}
                <div
                  style={{
                    color: "#6cb64d",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "2px",
                  }}
                >
                  {contactInfo.name.toUpperCase()}
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "14px",
                    marginBottom: "12px",
                  }}
                >
                  {contactInfo.title}
                </div>

                {/* Contact Details */}
                <div style={{ marginBottom: "4px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "8px" }}>📍</span>
                  <span style={{ color: "#666666" }}>{contactInfo.address}</span>
                </div>

                <div style={{ marginBottom: "4px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "8px" }}>📧</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    style={{
                      color: "#6cb64d",
                      textDecoration: "none",
                    }}
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div style={{ marginBottom: "4px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "8px" }}>📞</span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    style={{
                      color: "#666666",
                      textDecoration: "none",
                    }}
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div style={{ marginBottom: "8px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "8px" }}>🌐</span>
                  <a
                    href={`https://${contactInfo.website}`}
                    style={{
                      color: "#6cb64d",
                      textDecoration: "none",
                    }}
                  >
                    {contactInfo.website}
                  </a>
                </div>

                {/* Social Media Icons */}
                <div style={{ marginTop: "12px" }}>
                  <a
                    href={contactInfo.twitter}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      T
                    </div>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      in
                    </div>
                  </a>
                  <a
                    href={contactInfo.googleplus}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      G+
                    </div>
                  </a>
                  <a
                    href={contactInfo.facebook}
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      f
                    </div>
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Disclaimer or additional info */}
      <div
        style={{
          marginTop: "15px",
          paddingTop: "10px",
          borderTop: `1px solid rgba(204, 150, 98, 0.3)`,
          fontSize: "11px",
          color: "#999999",
        }}
      >
        <em>Your Investment Partner</em>
      </div>
    </div>
  )
}
