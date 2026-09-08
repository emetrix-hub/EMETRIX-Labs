# EMETRIX-LAB-009 — Manage Certificates

> **PKI • Certificate Lifecycle Management • Windows Server • Trust & Revocation**

## 📋 Business Scenario

An enterprise certificate authority must manage certificate requests and lifecycle events consistently. Security administrators need to approve legitimate requests, reject inappropriate requests, revoke compromised or outdated certificates, and restore certificates only when justified.

## 🎯 Lab Objective

Demonstrate controlled certificate lifecycle operations including approval, denial, revocation with reason codes, and unrevocation.

## ⚠️ Threat Addressed

Poor certificate lifecycle management can leave unauthorized, compromised, or no-longer-trusted identities active within an environment.

## 🛡️ Security Controls Implemented

- Certificate request approval
- Certificate request denial
- Certificate revocation
- Revocation reason codes
- Certificate status restoration
- PKI lifecycle governance

## 🛠️ Implementation Walkthrough

The source laboratory report records **4/4 (100%) Pass** for the certificate-management exercise. fileciteturn67file4L2-L15

### Certificate Request Management

A pending smart-card certificate request was approved while another pending request was denied. fileciteturn67file4L25-L31

### Certificate Revocation

Two issued certificates were revoked using distinct reason codes: **Key Compromise** and **Change of Affiliation**. fileciteturn67file4L32-L39

### Certificate Status Restoration

A previously revoked certificate was restored through the controlled unrevocation workflow. fileciteturn67file4L40-L45

> Usernames, hostnames, domain identifiers, and other training-environment details are intentionally minimized in this public portfolio.

## 🔍 Security Analysis

Certificate management is a lifecycle process rather than a one-time issuance activity. Approval establishes trust, denial prevents inappropriate issuance, revocation removes trust when conditions change, and documented reason codes provide operational context for the security decision.

## 📊 Business Impact

Effective PKI lifecycle management helps protect identity, authentication, encrypted communications, and access-control mechanisms that depend on trusted certificates.

## 🏢 Enterprise Applications

- Enterprise PKI
- Smart-card authentication
- Certificate-based identity
- Windows certificate services
- Incident response and credential compromise handling
- Joiner/mover/leaver processes

## 🧠 Skills Demonstrated

- Certificate lifecycle management
- PKI fundamentals
- Windows Certification Authority administration
- Revocation management
- Security decision-making
- Identity and access security

## 📝 Professional Reflection

The laboratory demonstrated why certificate authorities require disciplined lifecycle governance. Revocation decisions should be tied to clear operational reasons, while restoration should be treated as a deliberate security action rather than a routine administrative task.

## 📚 References & Attribution

- CompTIA hands-on security training exercise: **2.5.7 Manage Certificates**
- Windows Server Certification Authority / PKI concepts

## 🔗 Related EMETRIX Labs

- [EMETRIX-LAB-006 — Configure Security Appliance Access](../EMETRIX-LAB-006/)
- [EMETRIX-LAB-010 — Security Configuration Gap Analysis](../EMETRIX-LAB-010/)

## 🎥 Media

### YouTube Walkthrough

The laboratory recording is part of the EMETRIX Tech published cybersecurity video portfolio. The verified public video URL will be maintained here once its lab mapping is confirmed.

## 👤 About EMETRIX Tech

**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**
