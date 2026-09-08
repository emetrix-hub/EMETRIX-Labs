<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-002 — Configure a Captive Portal

> **Network Security • pfSense • Captive Portal • Access Control**

## 📋 Business Scenario
A guest wireless network requires controlled access through a pfSense captive portal while permitting explicitly defined exceptions.

## 🎯 Lab Objective
Configure and validate a captive-portal zone, session controls, bandwidth restrictions, MAC pass-through, and IP pass-through in a controlled environment.

## ⚠️ Threat Addressed
Uncontrolled guest access, excessive resource consumption, and poorly governed access exceptions.

## 🛡️ Security Controls Implemented
- Captive portal access boundary
- Guest interface segmentation
- Concurrent-session and timeout controls
- Bandwidth restrictions
- MAC pass-through
- IP pass-through

## 🛠️ Implementation Walkthrough
The laboratory configured a guest captive-portal zone on pfSense, applied session and bandwidth controls, and configured explicit MAC and IP pass-through entries. Proprietary step-by-step instructions and sensitive identifiers are not reproduced.

## 🔍 Security Analysis
The captive portal provides an access-control boundary, while session and bandwidth controls provide resource governance. Pass-through entries should be tightly controlled because they bypass normal portal interaction.

## 📊 Business Impact
A governed guest-access architecture reduces uncontrolled network exposure and helps maintain predictable resource usage.

## 🏢 Enterprise Applications
- Guest Wi-Fi security
- Network access control
- Firewall and gateway administration
- Segmented network environments

## 🧠 Skills Demonstrated
pfSense • captive portal configuration • network access control • guest-network security • traffic governance • validation

## 📝 Professional Reflection
The exercise reinforced that captive portals complement, rather than replace, segmentation and broader network-security controls.

## 📚 References & Attribution
Completed in a controlled training environment based on a CompTIA exercise. This portfolio documents practical execution and analysis without reproducing proprietary instructions.

## 🔗 Related EMETRIX Labs
- [EMETRIX-LAB-001 — Implement Physical Security Countermeasures](../EMETRIX-LAB-001/)
- [EMETRIX-LAB-005 — Configure a Security Appliance](../EMETRIX-LAB-005/)

## 🎥 Media
### YouTube Walkthrough
▶️ **[Watch the LAB-002 Walkthrough on YouTube](https://youtu.be/_KAA50s9AAA)**

The video complements the technical documentation and sanitized evidence in this repository.

## 📁 Evidence
Sanitized evidence is stored under `evidence/screenshots/`. Do not publish credentials or unnecessary network identifiers.

## 👤 About EMETRIX Tech
**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**