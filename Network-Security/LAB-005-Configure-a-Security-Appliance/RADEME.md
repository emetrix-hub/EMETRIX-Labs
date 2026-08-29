<p align="center">
  <img src="../../assets/Emetrix_Orginal_logo.PNG" width="180">
</p>

# 🔐 LAB-005 | Configure a Security Appliance

### Enterprise Firewall Administration with pfSense

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Category](https://img.shields.io/badge/Category-Network%20Security-blue)
![Platform](https://img.shields.io/badge/Platform-CompTIA%20Labs-orange)
![Technology](https://img.shields.io/badge/Technology-pfSense-blue)
![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green)

Configure an enterprise pfSense Security Appliance by implementing DNS configuration, WAN interface settings, and gateway management to establish reliable network connectivity.

This laboratory demonstrates practical firewall administration tasks commonly performed by Network Administrators, Security Engineers, SOC Analysts, and Infrastructure Engineers.

## Executive Summary

Modern organizations rely on security appliances to inspect traffic, enforce security policies, and provide secure communication between internal networks and external resources.

This laboratory demonstrates the deployment and configuration of a pfSense firewall by configuring DNS services, assigning a static WAN interface, and creating a default gateway.

## Objectives

- Configure Primary DNS Server
- Configure Secondary DNS Server
- Configure WAN Interface
- Configure Static IPv4
- Create Default Gateway
- Apply Firewall Configuration
- Verify Network Connectivity

## Business Scenario

A medium-sized organization is deploying a new perimeter firewall to secure internet connectivity. Before users can access external resources, the firewall must be configured with reliable DNS servers, a static WAN address, and a properly configured default gateway.

## Security Concepts

- **Firewall Administration** — managing inbound and outbound traffic.
- **DNS** — name resolution for network resources.
- **WAN** — external network connectivity.
- **Gateway** — default route for outbound traffic.
- **Static Addressing** — predictable enterprise network configuration.

## Lab Environment

| Component | Description |
|---|---|
| Security Appliance | pfSense |
| Firewall | Enterprise Firewall |
| Network | Simulated Enterprise |
| Platform | CompTIA Labs |
| Browser | Google Chrome |

## Network Topology

```text
                     Internet
                         │
                         │
                Gateway 65.86.1.1
                         │
                ┌───────────────────┐
                │     pfSense       │
                │Enterprise Firewall│
                └───────────────────┘
                     │
       ┌─────────────┴─────────────┐
       │                           │
    DNS1 Server                  DNS2 Server
    163.128.78.93                163.128.80.93
```

## Implementation Walkthrough

### Step 1 — Access the pfSense Management Console

Access the pfSense management interface through the lab browser.

### Step 2 — Configure DNS

Navigate to:

```text
System
└── General Setup
```

Configure:

- Primary DNS: `163.128.78.93`
- Secondary DNS: `163.128.80.93`

Save the configuration.

### Step 3 — Configure WAN

Navigate to:

```text
Interfaces
└── WAN
```

Enable the interface and configure static IPv4 addressing.

### Step 4 — Create Gateway

Create the gateway:

- Gateway name: `WANGateway`
- Gateway IP: `65.86.1.1`

### Step 5 — Apply Configuration

Save the changes and apply the firewall configuration.

## Configuration Summary

| Area | Setting | Value |
|---|---|---|
| DNS | Primary | `163.128.78.93` |
| DNS | Secondary | `163.128.80.93` |
| WAN | IPv4 | Static |
| WAN | Address | `65.86.24.136` |
| WAN | Mask | `/8` |
| Gateway | Name | `WANGateway` |
| Gateway | Address | `65.86.1.1` |

## Security Analysis

This lab demonstrates:

- Firewall administration
- DNS infrastructure
- Static network configuration
- Routing
- Enterprise network deployment
- Infrastructure security
- Secure Internet connectivity

## Business Impact

Proper firewall configuration helps organizations maintain reliable Internet connectivity, improve network stability, support secure communications, reduce configuration errors, strengthen perimeter defense, and simplify troubleshooting.

## Enterprise Applications

The same configuration principles are relevant to banking, healthcare, government, manufacturing, cloud infrastructure, data centers, and corporate networks.

## Skills Demonstrated

- pfSense
- Firewall Administration
- DNS Configuration
- Gateway Configuration
- WAN Deployment
- TCP/IP Networking
- Network Security
- Infrastructure Security
- Security Documentation
- Technical Writing

## Professional Reflection

This laboratory strengthened my practical understanding of enterprise firewall deployment using pfSense. Configuring DNS services, WAN interfaces, and gateway settings reinforced the importance of accurate network configuration for maintaining secure and reliable connectivity.

Beyond completing the technical objectives, this exercise enhanced my ability to document infrastructure changes in a structured and professional manner, reflecting practices commonly used by network and security teams in production environments.

## 🎥 EMETRIX Tech Live Recording Record

**Recording status: Completed — recorded live during the practical lab.**

This lab was recorded as a professional hands-on demonstration for EMETRIX Tech. The recording focuses on explaining the security and networking rationale while the actual configuration is performed on screen.

### Primary Video Title

**I Configured a pfSense Enterprise Firewall From Scratch — Live Cybersecurity Lab 🔥**

### Technical Title

**pfSense Firewall Configuration | DNS, WAN & Gateway Setup — CompTIA Security Lab**

### Recording Structure

**Scene 01 — Hook**  
Show the pfSense interface and establish the scenario: an organization needs a correctly configured perimeter firewall before reliable external connectivity can be provided.

**Scene 02 — Professional Introduction**  
Introduce Abdul / EMETRIX Tech and explain that the lab demonstrates practical firewall administration rather than a purely theoretical walkthrough.

**Scene 03 — Lab Environment**  
Show the simulated enterprise environment and briefly explain the firewall, WAN, DNS, and gateway roles.

**Scene 04 — DNS Configuration**  
Demonstrate the General Setup page and explain why reliable DNS configuration matters for name resolution.

**Scene 05 — WAN Configuration**  
Configure the WAN interface with the required static IPv4 settings and explain the purpose of the WAN interface.

**Scene 06 — Gateway Configuration**  
Create the `WANGateway` and explain that the gateway provides the default route for outbound traffic.

**Scene 07 — Apply & Verify**  
Save and apply the configuration, then review the final settings and connectivity state.

**Scene 08 — Security Engineering Takeaway**  
Explain that a firewall is only as reliable as its underlying network configuration and that DNS, addressing, and routing must be configured accurately.

**Scene 09 — EMETRIX Tech Close**  
Close with the EMETRIX Tech brand and invite viewers to follow for additional practical cybersecurity and security-engineering labs.

### Recording Safety

- Use only the authorized training environment.
- Do not expose production credentials, infrastructure, or secrets.
- If publishing publicly, treat lab IP addresses as training-environment data and avoid implying they belong to a real organization.
- Keep the configuration process readable and deliberate.
- Capture the final configuration and verification state.

## Social Media Repurposing

| Platform | Content Angle |
|---|---|
| Instagram Reels | “I configured a pfSense firewall live” |
| TikTok | DNS + WAN + Gateway explained quickly |
| YouTube Shorts | What a default gateway does |
| LinkedIn | Practical firewall administration case study |
| YouTube | Full pfSense configuration walkthrough |
| GitHub | Complete technical documentation |

### Short-Form Hook

> “A firewall isn't secure just because it's installed. Let's configure the network behind it.”

## Validation

The original lab documentation records the configuration workflow and successful completion. The final repository entry documents the implemented DNS, WAN, and gateway configuration together with the live recording record.

## References

- CompTIA CyberDefense / CertMaster Labs
- pfSense Documentation
- TCP/IP Networking Fundamentals
- DNS Best Practices
- Enterprise Firewall Administration

## Related EMETRIX Labs

| Lab | Topic | Status |
|---|---|---|
| LAB-001 | Implement Physical Security Countermeasures | ✅ Complete |
| LAB-002 | Configure a Captive Portal | ✅ Complete |
| LAB-003 | Bluetooth Device Discovery | ✅ Complete |
| LAB-004 | Secure a Mobile Device | ✅ Complete |
| LAB-005 | Configure a Security Appliance | ✅ Complete |
| LAB-006 | Configure Security Appliance Access | ✅ Complete |

## About EMETRIX Tech

EMETRIX Tech is an independent cybersecurity knowledge platform dedicated to building enterprise-grade technical documentation, hands-on cybersecurity laboratories, and practical IT infrastructure projects.

🌐 Website: https://www.emetrix-tech.com  
💼 LinkedIn: https://www.linkedin.com/in/abdul-naasir-obaidy  
📂 GitHub: https://github.com/emetrix-hub/EMETRIX-Labs  
📺 YouTube: https://youtube.com/@emetrix-tech  
🎵 TikTok: https://www.tiktok.com/@emetrix_tech

---

© 2026 EMETRIX Tech
