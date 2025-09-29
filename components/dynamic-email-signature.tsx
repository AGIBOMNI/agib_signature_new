interface ContactInfo {
  fullName: string
  position: string
  email: string
  phoneNumber: string
}

interface DynamicEmailSignatureProps {
  contactInfo: ContactInfo
}

export default function DynamicEmailSignature({ contactInfo }: DynamicEmailSignatureProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        lineHeight: "1.4",
        color: "#333333",
        maxWidth: "500px",
      }}
    >
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ paddingRight: "15px", verticalAlign: "top" }}>
              <img
                src="/agib-logo.png"
                alt="Agib Bank Ltd"
                style={{ width: "80px", height: "auto", display: "block" }}
              />
            </td>
            <td style={{ paddingLeft: "15px", borderLeft: "1px solid rgba(204, 150, 98, 0.4)", verticalAlign: "top" }}>
              <div>
                <div style={{ color: "#6cb64d", fontSize: "14px", fontWeight: "bold", marginBottom: "2px" }}>
                  {contactInfo.fullName.toUpperCase()}
                </div>
                <div style={{ color: "#666666", fontSize: "11px", marginBottom: "8px" }}>{contactInfo.position}</div>
                <div style={{ marginBottom: "3px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📍</span>
                  <span style={{ color: "#666666" }}>19 Kairaba Avenue</span>
                </div>
                <div style={{ marginBottom: "3px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📧</span>
                  <a href={`mailto:${contactInfo.email}`} style={{ color: "#6cb64d", textDecoration: "none" }}>
                    {contactInfo.email}
                  </a>
                </div>
                <div style={{ marginBottom: "3px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>📞</span>
                  <a href={`tel:${contactInfo.phoneNumber}`} style={{ color: "#666666", textDecoration: "none" }}>
                    {contactInfo.phoneNumber}
                  </a>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ color: "#6cb64d", marginRight: "6px" }}>🌐</span>
                  <a href="https://www.agib.gm" style={{ color: "#6cb64d", textDecoration: "none" }}>
                    www.agib.gm
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          marginTop: "10px",
          paddingTop: "6px",
          borderTop: "1px solid rgba(204, 150, 98, 0.3)",
          fontSize: "10px",
          color: "#999999",
        }}
      >
        <em>Your Investment Partner</em>
      </div>
    </div>
  )
}
