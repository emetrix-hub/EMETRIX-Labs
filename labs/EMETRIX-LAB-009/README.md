<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-009 — Manage Certificates

> **PKI • Certificate Lifecycle Management • Windows Server • Trust & Revocation**

## 📋 Business Scenario
An enterprise certificate authority must manage certificate requests and lifecycle events consistently so unauthorized, compromised, or no-longer-trusted identities do not remain active.

## 🎯 Lab Objective
Demonstrate controlled certificate lifecycle operations including approval, denial, revocation with reason codes, and unrevocation.

## ⚠️ Threat Addressed
Poor certificate lifecycle management can leave unauthorized or compromised identities trusted within an environment.

## 🛡️ Security Controls Implemented
- Certificate request approval
- Certificate request denial
- Certificate revocation
- Revocation reason codes
- Certificate status restoration
- PKI lifecycle governance

## 🛠️ Implementation Walkthrough
The source laboratory report records **4/4 (100%) Pass**. A pending certificate request was approved, another denied, two certificates revoked using distinct reasons, and a revoked certificate restored through the controlled unrevocation workflow.

## 🔍 Security Analysis
Certificate management is a lifecycle process. Approval establishes trust, denial prevents inappropriate issuance, revocation removes trust when conditions change, and reason codes provide operational context.

## 📊 Business Impact
Effective PKI lifecycle management supports trusted identity, authentication, encrypted communications, and access-control mechanisms.

## 🏢 Enterprise Applications
- Enterprise PKI
- Smart-card authentication
- Certificate-based identity
- Windows Certificate Services
- Credential-compromise response

## 🧠 Skills Demonstrated
Certificate lifecycle management • PKI • Windows Certification Authority • revocation management • security decision-making

## 📝 Professional Reflection
The laboratory demonstrated why certificate authorities require disciplined lifecycle governance and deliberate revocation decisions.

## 📚 References & Attribution
Completed in a controlled training environment based on a CompTIA exercise. Proprietary instructions and sensitive certificate material are not reproduced.

## 🔗 Related EMETRIX Labs
- [EMETRIX-LAB-006 — Configure Security Appliance Access](../EMETRIX-LAB-006/)
- [EMETRIX-LAB-010 — Security Configuration Gap Analysis](../EMETRIX-LAB-010/)

## 🎥 Media
### YouTube Walkthrough
▶️ **[Watch the LAB-009 Walkthrough on YouTube](https://youtu.be/B-XGUfuZjvk)**

The video complements the technical documentation and sanitized evidence in this repository.

## 📁 Evidence
Sanitized laboratory evidence should be stored under `evidence/screenshots/`. Never publish private keys, authentication secrets, or unnecessary personal identifiers.

## 👤 About EMETRIX Tech
**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**