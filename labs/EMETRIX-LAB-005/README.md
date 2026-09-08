# EMETRIX-LAB-005 — Configure a Security Appliance

> **Network Security • pfSense • DNS Configuration • WAN Configuration • Gateway Management**

## 📋 Business Scenario

A network security appliance provides a critical enforcement point between network segments and external connectivity. Incorrect DNS, WAN, or gateway configuration can affect availability, routing, name resolution, and the effectiveness of downstream security controls.

## 🎯 Lab Objective

Configure and validate core security-appliance network parameters in a controlled laboratory environment, focusing on DNS services, WAN addressing, and default gateway configuration.

## ⚠️ Threat Addressed

Incorrect or insecure network-appliance configuration can introduce connectivity failures, routing problems, misdirected traffic, and weaknesses in the organization's network security boundary.

## 🛡️ Security Controls Implemented

- Security-appliance configuration baseline
- DNS configuration
- WAN interface configuration
- Default gateway management
- Network boundary enforcement
- Configuration validation

## 🛠️ Implementation Walkthrough

The laboratory was completed in a controlled pfSense training environment. The public documentation records the security-relevant configuration outcome without reproducing proprietary training instructions or publishing sensitive laboratory credentials and identifiers.

### DNS Configuration

The required DNS configuration was applied and reviewed as part of the appliance baseline.

### WAN Configuration

The WAN interface was configured according to the laboratory requirements, including the required IPv4 network parameters.

### Gateway Configuration

The appropriate default gateway was configured to provide the required upstream routing path.

### Validation

The completed configuration was checked against the laboratory requirements before the exercise was marked complete.

## 🔍 Security Analysis

A firewall or security appliance is only as reliable as its underlying configuration. DNS, WAN addressing, and gateway settings influence how traffic is resolved, routed, and controlled at the network boundary. Configuration should therefore be treated as a security baseline rather than a one-time setup task.

## 📊 Business Impact

A correctly configured security appliance supports reliable network connectivity while establishing a predictable foundation for firewall rules, segmentation, monitoring, and other defensive controls.

## 🏢 Enterprise Applications

- Perimeter firewall deployment
- Branch-office network security
- Network segmentation
- Secure internet gateways
- DNS and gateway management
- Security-appliance baseline configuration

## 🧠 Skills Demonstrated

- pfSense administration
- Network security configuration
- DNS configuration
- WAN configuration
- Gateway management
- Network troubleshooting
- Configuration validation

## 📝 Professional Reflection

This laboratory reinforced the importance of establishing a controlled network-security baseline before implementing higher-level firewall and monitoring policies. Accurate interface, DNS, and gateway configuration reduces avoidable operational and security issues.

## 📚 References & Attribution

- CompTIA hands-on security training exercise: **Configure a Security Appliance**
- pfSense documentation relevant to the laboratory platform

This portfolio does not reproduce proprietary step-by-step training instructions.

## 🔗 Related EMETRIX Labs

- [EMETRIX-LAB-002 — Configure a Captive Portal](../EMETRIX-LAB-002/)
- [EMETRIX-LAB-006 — Configure Security Appliance Access](../EMETRIX-LAB-006/)
- [EMETRIX-LAB-010 — Security Configuration Gap Analysis](../EMETRIX-LAB-010/)

## 🎥 Media

### YouTube Walkthrough

▶️ **Watch the EMETRIX Tech laboratory walkthrough**

Add the verified public YouTube URL for LAB-005 here once the recording-to-lab mapping is confirmed.

The video complements the technical documentation and sanitized evidence contained in this repository.

## 📁 Evidence

Sanitized laboratory evidence should be stored under `evidence/screenshots/` when available. Do not publish credentials, private keys, authentication tokens, production network information, or unnecessary personal data.

## 👤 About EMETRIX Tech

**EMETRIX Tech** develops practical cybersecurity and security-operations knowledge through controlled laboratories, technical investigations, documentation, and defensive security engineering.

**Protect • Detect • Respond**
