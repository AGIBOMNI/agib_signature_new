export default function EmailSignature() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        lineHeight: "1.3",
        color: "#333333",
        maxWidth: "450px",
      }}
    >
      {/* Main signature container */}
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: "12px", verticalAlign: "top" }}>
              {/* Logo */}
              <img
                src="/agib-logo.png"
                alt="Agib Bank Ltd"
                style={{
                  width: "90px",
                  height: "auto",
                  display: "block",
                }}
              />
            </td>
            <td
              style={{
                paddingLeft: "12px",
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
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginBottom: "1px",
                  }}
                >
                  ALIOUNE BADARA KEITA
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "12px",
                    marginBottom: "8px",
                  }}
                >
                  Tech Lead, Software Developer
                </div>

                {/* Contact Details */}
                <div style={{ marginBottom: "2px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📍</span>
                  <span style={{ color: "#666666" }}>19 Kairaba Avenue</span>
                </div>

                <div style={{ marginBottom: "2px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📧</span>
                  <a
                    href="mailto:aliouneb.keita@agib.gm"
                    style={{
                      color: "#6cb64d",
                      textDecoration: "none",
                    }}
                  >
                    aliouneb.keita@agib.gm
                  </a>
                </div>

                <div style={{ marginBottom: "2px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📞</span>
                  <a
                    href="tel:3451004"
                    style={{
                      color: "#666666",
                      textDecoration: "none",
                    }}
                  >
                    3451004
                  </a>
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>🌐</span>
                  <a
                    href="https://www.agib.gm"
                    style={{
                      color: "#6cb64d",
                      textDecoration: "none",
                    }}
                  >
                    www.agib.gm
                  </a>
                </div>

                {/* Social Media Icons */}
                <div style={{ marginTop: "8px" }}>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      T
                    </div>
                  </a>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      in
                    </div>
                  </a>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      G+
                    </div>
                  </a>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#6cb64d",
                        borderRadius: "3px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
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
          marginTop: "10px",
          paddingTop: "6px",
          borderTop: `1px solid rgba(204, 150, 98, 0.3)`,
          fontSize: "9px",
          color: "#999999",
        }}
      >
        <em>Your Investment Partner</em>
      </div>
    </div>
  )
}
