# 🌐 LAB-002 | Configure a Captive Portal

> Configure a secure guest wireless access portal using pfSense to control network access, enforce bandwidth limits, and manage trusted device exceptions.

---

## 📋 Lab Information

| Category | Details |
|----------|---------|
| **Lab ID** | LAB-002 |
| **Platform** | CompTIA Labs |
| **Technology** | pfSense Firewall |
| **Domain** | Network Security |
| **Difficulty** | Intermediate |
| **Status** | ✅ Completed |

---

## 📑 Table of Contents

- Executive Summary
- Objectives
- Business Scenario
- Threat Addressed
- Security Controls Implemented
- Implementation Walkthrough
- Security Analysis
- Business Impact
- Enterprise Applications
- Skills Demonstrated
- Professional Reflection
- References
- Related EMETRIX Labs

---

# 📖 Executive Summary

This lab demonstrates the implementation of a captive portal using **pfSense** to secure guest wireless access within an enterprise environment. The configuration enforces controlled access to the guest network while applying bandwidth restrictions, connection limits, and trusted device exceptions to improve both security and network performance.

---

# 🎯 Objectives

- Configure a captive portal zone
- Secure guest wireless network access
- Configure concurrent connection limits
- Apply idle and hard session timeouts
- Restrict per-user bandwidth usage
- Configure trusted MAC and IP address pass-through
- Validate secure network access policies

---

# 🏢 Business Scenario

A medium-sized organization provides wireless internet access for visitors, contractors, and guests. To protect internal resources while maintaining a positive user experience, the IT department deploys a captive portal that isolates guest users from the corporate network and enforces usage policies.

---

# 🛡️ Threat Addressed

- Unauthorized network access
- Guest network abuse
- Excessive bandwidth consumption
- Resource exhaustion
- Unrestricted wireless access

---

# 🔐 Security Controls Implemented

- Guest Wi-Fi Captive Portal
- Network Segmentation
- Connection Limits
- Idle Session Timeout
- Hard Session Timeout
- Per-user Bandwidth Restrictions
- MAC Address Pass-through
- IP Address Pass-through

---

# 📷 Implementation Walkthrough

### Step 1 — Create the Captive Portal Zone

*Screenshot will be added.*

Configured the **WiFi-Guest** captive portal zone for guest wireless access.

---

### Step 2 — Configure Captive Portal Settings

*Screenshot will be added.*

Enabled the captive portal, configured connection limits, session timeouts, and bandwidth restrictions.

---

### Step 3 — Configure Trusted Devices

*Screenshot will be added.*

Configured trusted MAC and IP address pass-through for authorized administrative devices.

---

### Step 4 — Validate Configuration

*Screenshot will be added.*

Verified that the captive portal and security policies were successfully applied.

---

# 🔍 Security Analysis

Captive portals provide an additional layer of network security by controlling access to guest wireless networks. Limiting concurrent connections, enforcing session timeouts, and applying bandwidth restrictions reduce the risk of abuse while maintaining network availability. Trusted device exceptions allow approved systems to operate without unnecessary authentication while preserving overall security.

---

# 📈 Business Impact

Implementing a captive portal improves organizational security by separating guest users from internal resources, reducing unauthorized access, and ensuring fair use of network bandwidth. This approach supports a secure and reliable guest networking experience in enterprise environments.

---

# 🏢 Enterprise Applications

- Corporate Offices
- Hotels
- Universities
- Hospitals
- Airports
- Retail Stores
- Conference Centers

---

# 💻 Skills Demonstrated

- pfSense Administration
- Firewall Configuration
- Guest Network Security
- Network Segmentation
- Access Control
- Bandwidth Management
- Captive Portal Deployment
- Security Policy Implementation

---

# 💭 Professional Reflection

This lab demonstrated how captive portals strengthen enterprise network security by controlling guest access while protecting internal resources. Configuring bandwidth limits, connection restrictions, and trusted device exceptions reinforced the importance of balancing security requirements with operational usability.

---

# 📄 References

- CompTIA Security+ Lab
- pfSense Documentation
- Network Access Control (NAC) Best Practices

---

## 🔗 Related EMETRIX Labs

| Lab | Topic | Status |
|------|-------|--------|
| LAB-001 | Implement Physical Security Countermeasures | ✅ Complete |
| LAB-003 | Bluetooth Device Discovery | 🚧 Documentation in Progress |
| LAB-004 | Secure a Mobile Device | 🎬 Recorded • Pending Release |

---

## 📌 About EMETRIX Tech

EMETRIX Tech is a cybersecurity knowledge platform focused on practical laboratory exercises, professional technical documentation, security research, and real-world cybersecurity engineering.

🌐 **Website:** *Coming Soon*

📂 **GitHub:** EMETRIX-Labs

© EMETRIX Tech
