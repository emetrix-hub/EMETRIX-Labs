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

</p>


Configure an enterprise pfSense Security Appliance by implementing secure DNS configuration, WAN interface settings, and gateway management to establish reliable network connectivity.

This laboratory demonstrates practical firewall administration tasks commonly performed by Network Administrators, Security Engineers, SOC Analysts, and Infrastructure Engineers.

_______________________________________________________________________________________________________________________________________________________________________________________

Table of Contents:

- Executive Summary

- Objectives

- Business Scenario

- Security Concepts

- Lab Environment

- Network Topology

- Implementation Walkthrough

- Configuration Summary

- Screenshots

- Security Analysis

- Business Impact

- Enterprise Applications

- Skills Demonstrated

- Professional Reflection
- ______________________________________________________________________________________________________________________________________________________________________________________

- Executive Summary

Modern organizations rely on security appliances to inspect traffic, enforce security policies, and provide secure communication between internal networks and external resources.

This laboratory demonstrates the deployment and configuration of a pfSense firewall by configuring DNS services, assigning a static WAN interface, and creating a default gateway.

The completed configuration establishes reliable outbound connectivity while reinforcing fundamental enterprise firewall administration concepts.
_________________________________________________________________________________________________________________________________________________

Objectives

- Configure Primary DNS Server
- Configure Secondary DNS Server
- Configure WAN Interface
- Configure Static IPv4
- Create Default Gateway
- Apply Firewall Configuration
- Verify Network Connectivity
__________________________________________________________________________________________________________________________________________________

Business Scenario

A medium-sized organization is deploying a new perimeter firewall to secure internet connectivity.

Before users can access external resources, the firewall must be configured with reliable DNS servers, a static WAN address, and a properly configured default gateway.

Your responsibility is to complete the initial deployment while following enterprise networking best practices.
___________________________________________________________________________________________________________________________________________________

Security Concepts
Firewall Administration

Managing inbound and outbound traffic.
______________________________________

DNS

Secure name resolution.

WAN

External Internet connectivity.

Gateway

Default route for outbound traffic.

Static Addressing

Predictable enterprise network configuration.

_____________________________________________

Lab Environment

Component	Description

Security Appliance	pfSense

Firewall	Enterprise Firewall

Network	Simulated Enterprise

Platform	CompTIA Labs

Browser	Google Chrome
___________________________
Network Topology

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
    163.128.78.93                  163.128.80.93

   
    
    
  ________________________________________________________________________

   
    
  Implementation Walkthrough


Step 1

Access the pfSense Management Console.




Step 2



Navigate to

System

↓

General Setup

Configure

Primary DNS

Secondary DNS


Save.




Step 3

Navigate to

Interfaces

↓

WAN

Enable Interface.

Configure Static IPv4.




Step 4

Create Gateway

Gateway Name

WANGateway

Gateway IP

65.86.1.1




Step 5

Save.

Apply Changes.

_____________________________________________________________


Configuration Summary



DNS
Setting	Value
DNS1	163.128.78.93
DNS2	163.128.80.93
WAN
Setting	Value
Interface	WAN
IPv4	Static
Address	65.86.24.136
Mask	/8
Gateway
Setting	Value
Gateway	WANGateway
Address	65.86.1.1

______________________________________________________


Security Analysis

This lab demonstrates several enterprise networking concepts.

✔ Firewall Administration

✔ DNS Infrastructure

✔ Static Network Configuration

✔ Routing

✔ Enterprise Network Deployment

✔ Infrastructure Security

✔ Secure Internet Connectivity


___________________________________________________

Business Impact

Proper firewall configuration enables organizations to

Maintain reliable Internet connectivity
Improve network stability
Support secure communications
Reduce configuration errors
Strengthen perimeter defense
Simplify troubleshooting

____________________________________


Enterprise Applications

This configuration methodology is commonly used in

🏦 Banking

🏥 Healthcare

🏛 Government

🏭 Manufacturing

☁ Cloud Infrastructure

📡 Data Centers

🏢 Corporate Networks


_________________________________________________
Skills Demonstrated

✔ Firewall Administration

✔ pfSense

✔ DNS Configuration

✔ Gateway Configuration

✔ WAN Deployment

✔ TCP/IP Networking

✔ Network Security

✔ Infrastructure Security

✔ Security Documentation

✔ Technical Writing

_____________________________________________________



Professional Reflection


This laboratory strengthened my practical understanding of enterprise firewall deployment using pfSense. Configuring DNS services, WAN interfaces, and gateway settings reinforced the importance of accurate network configuration for maintaining secure and reliable connectivity.

Beyond completing the technical objectives, this exercise enhanced my ability to document infrastructure changes in a structured and professional manner, reflecting practices commonly used by network and security teams in production environments.

The experience contributes directly to my continued development in Network Security, Security Operations (SOC), and Security Engineering.


References

CompTIA CyberDefense Labs

pfSense Documentation

TCP/IP Networking Fundamentals

DNS Best Practices

Enterprise Firewall Administration

_________________________________________


Related EMETRIX Labs


Lab	Topic	Status

LAB-001	Implement Physical Security Countermeasures	✅

LAB-002	Configure a Captive Portal	✅

LAB-003	Bluetooth Device Discovery	✅

LAB-004	Secure a Mobile Device	✅

LAB-005	Configure a Security Appliance	✅

_______________________________________________________________________________________

About EMETRIX Tech

EMETRIX Tech is an independent cybersecurity knowledge platform dedicated to building enterprise-grade technical documentation, hands-on cybersecurity laboratories, and practical IT infrastructure projects.

The EMETRIX Labs repository showcases real-world implementations across network security, firewall administration, endpoint security, digital forensics, cloud technologies, security operations (SOC), and infrastructure engineering. Each lab is documented to professional standards, helping aspiring cybersecurity professionals develop practical skills while demonstrating technical competency through structured, portfolio-ready projects.


🌐 Website: https://www.emetrix-tech.com

💼 LinkedIn: https://www.linkedin.com/in/abdul-naasir-obaidy

📂 GitHub: https://github.com/emetrix-hub/EMETRIX-Labs

📺 YouTube: https://youtube.com/@emetrix-tech

🎵 TikTok: https://www.tiktok.com/@emetrix_tech



