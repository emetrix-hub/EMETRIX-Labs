<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-006 — Configure Security Appliance Access

> **Access Control • pfSense • Administrative Security • Session Management**

## 📋 Business Scenario

Administrative access to a network security appliance must be controlled so that management functions are protected against weak credentials, excessive session lifetime, and unnecessary management exposure.

## 🎯 Lab Objective

Harden administrative access to a pfSense security appliance by changing the default administrator credential, creating a dedicated administrative user, defining a session timeout, and reviewing the web management anti-lockout configuration.

## ⚠️ Threat Addressed

Weak or shared administrative credentials and poorly controlled management sessions can increase the likelihood and impact of unauthorized administrative access.

## 🛡️ Security Controls Implemented

- Administrative credential management
- Named administrative account
- Session timeout
- Web management access control
- Administrative privilege assignment

## 🛠️ Implementation Walkthrough

The controlled exercise successfully completed four administrative-access objectives. The source lab report records **4/4 (100%) Pass**.

### Administrative Credential Management

The default administrator password was changed and a separate user account was created with administrative group membership.

### Session Management

A 20-minute management-session timeout was configured.

### Web Management Configuration

The exercise also modified the webConfigurator anti-lockout setting for HTTP. This configuration is documented as a laboratory observation and should not be interpreted as a production recommendation without an explicit security architecture and access-control review.

> Credentials, internal addresses, and training-environment identifiers are intentionally excluded from this public portfolio.

## 🔍 Security Analysis

The lab demonstrates the importance of identity-specific administration, credential lifecycle management, session controls, and deliberate management-plane configuration. Administrative security is a critical part of the overall firewall security boundary.

## 📊 Business Impact

Strong administrative controls reduce the risk of unauthorized configuration changes that could affect network availability, confidentiality, traffic filtering, or security monitoring.

## 🏢 Enterprise Applications

- Firewall administration
- Network security operations
- Privileged-access management
- Infrastructure hardening
- Security change control

## 🧠 Skills Demonstrated

- pfSense administration
- Administrative access control
- Privileged account management
- Session-security configuration
- Security hardening
- Configuration validation

## 📝 Professional Reflection

The exercise reinforced that protecting the management plane is as important as configuring the data plane. Administrative accounts should be individually attributable, appropriately privileged, and governed by strong authentication and session-management controls.

## 📚 References & Attribution

- CompTIA hands-on security training exercise: **2.4.10 Configure Security Appliance Access**
- pfSense documentation and controlled laboratory environment

## 🔗 Related EMETRIX Labs

- [EMETRIX-LAB-005 — Configure a Security Appliance](../EMETRIX-LAB-005/)
- [EMETRIX-LAB-009 — Manage Certificates](../EMETRIX-LAB-009/)

## 🎥 Media

### YouTube Walkthrough

The laboratory recording is part of the EMETRIX Tech published cybersecurity video portfolio. The verified public video URL will be maintained here once its lab mapping is confirmed.

## 📁 Evidence

Sanitized laboratory evidence should be stored under `evidence/screenshots/` when available. Never publish credentials, passwords, private keys, authentication tokens, production network information, or unnecessary personal data.

## 👤 About EMETRIX Tech

**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**
