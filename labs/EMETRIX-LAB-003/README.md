<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-003 — Discover Bluetooth Devices

> **Wireless Security • Bluetooth • Linux Security Tooling • Reconnaissance**

## 📋 Business Scenario
A security analyst needs to understand the Bluetooth exposure visible from an authorized laboratory environment and characterize discoverable devices without interacting with production systems.

## 🎯 Lab Objective
Perform Bluetooth adapter validation, device discovery, connectivity checks, service enumeration, and device-class identification in a controlled environment.

## ⚠️ Threat Addressed
Unnecessary Bluetooth discoverability and service exposure can increase the observable wireless attack surface.

## 🛡️ Security Controls Implemented
This is primarily an assessment exercise. Controls include an authorized laboratory boundary, evidence sanitization, and separation from production Bluetooth systems.

## 🛠️ Implementation Walkthrough
The workflow progressed from adapter status to device discovery, reachability testing, service enumeration, and device-class identification using Linux Bluetooth tooling. Proprietary instructions are not reproduced.

## 🔍 Security Analysis
The lab demonstrates that wireless exposure can be characterized progressively: discovery identifies visible devices, reachability establishes responsiveness, service enumeration reveals exposed services, and class information helps characterize device types.

## 📊 Business Impact
Bluetooth exposure should be governed according to business need, device role, discoverability, pairing, authentication, encryption, firmware, and organizational policy.

## 🏢 Enterprise Applications
- Wireless security assessment
- Endpoint security
- Bluetooth exposure reviews
- Security monitoring and reconnaissance

## 🧠 Skills Demonstrated
Bluetooth security • Linux • wireless reconnaissance • device discovery • connectivity testing • service enumeration • evidence handling

## 📝 Professional Reflection
The laboratory reinforced the importance of moving from discovery to characterization while keeping wireless testing authorized and controlled.

## 📚 References & Attribution
Completed in a controlled training environment based on a CompTIA exercise. The portfolio records practical execution, observed evidence, analysis, and validation without reproducing proprietary instructions.

## 🔗 Related EMETRIX Labs
- [EMETRIX-LAB-002 — Configure a Captive Portal](../EMETRIX-LAB-002/)
- [EMETRIX-LAB-005 — Configure a Security Appliance](../EMETRIX-LAB-005/)

## 🎥 Media
### YouTube Walkthrough
▶️ **[Watch the LAB-003 Walkthrough on YouTube](https://youtu.be/QyuT93tzMoU)**

The video complements the technical documentation and sanitized evidence in this repository.

## 📁 Evidence
Sanitized evidence is stored under `evidence/screenshots/`. Bluetooth identifiers should be minimized or redacted when not necessary for the learning objective.

## 👤 About EMETRIX Tech
**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**