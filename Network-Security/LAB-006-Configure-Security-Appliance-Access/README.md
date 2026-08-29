<p align="center">
  <img src="../../assets/Emetrix_Orginal_logo.PNG" width="180">
</p>

# 🔐 LAB-006 | Configure Security Appliance Access

### pfSense Management-Plane Hardening

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Category](https://img.shields.io/badge/Category-Network%20Security-blue)
![Platform](https://img.shields.io/badge/Platform-CompTIA%20Labs-orange)
![Technology](https://img.shields.io/badge/Technology-pfSense-blue)
![Difficulty](https://img.shields.io/badge/Difficulty-Intermediate-orange)

## Executive Summary

This laboratory demonstrates practical hardening of administrative access to a pfSense security appliance. The exercise focuses on administrator credential management, creation of a dedicated administrative user, management-session timeout, and the webConfigurator anti-lockout setting.

The lab was completed successfully with **4/4 required tasks — 100% Pass** and a reported execution time of **03:23**. fileciteturn8file0L2-L11

> **Credential handling:** The original training report contains lab-only credentials. They are intentionally not reproduced in this public portfolio documentation.

## Objectives

- Change the default administrative account password.
- Create and configure a separate pfSense administrative user.
- Configure a 20-minute management-session timeout.
- Configure the HTTP webConfigurator anti-lockout option as required by the lab.
- Validate the completed configuration.

These objectives are directly derived from the supplied lab report. fileciteturn8file0L6-L11

## Security Context

Administrative interfaces are part of the security appliance's management plane. Weak or shared administrative credentials, excessive session lifetime, and poorly controlled management access can increase the impact of credential compromise.

This lab therefore demonstrates four practical controls:

| Control | Lab Configuration | Security Purpose |
|---|---|---|
| Administrator credential | Password changed | Reduce reliance on default credentials |
| Dedicated admin user | New named administrative account | Improve accountability and separation of identity |
| Session timeout | 20 minutes | Reduce exposure from unattended sessions |
| webConfigurator anti-lockout | HTTP setting configured per lab | Demonstrate management-plane access control |

## Lab Environment

| Component | Configuration |
|---|---|
| Security appliance | pfSense |
| Management interface | pfSense webConfigurator |
| Client | Google Chrome |
| Platform | CompTIA CertMaster Labs |
| Result | 4/4 — 100% Pass |
| Reported time | 03:23 |

## Implementation Walkthrough

### 1. Access the pfSense Management Console

Open the lab's browser-based pfSense management interface and authenticate with the credentials supplied by the training environment.

The source report identifies the management address and initial lab credentials; these are intentionally omitted here to avoid publishing authentication material. fileciteturn8file0L13-L21

### 2. Change the Default Administrator Password

Navigate to:

```text
System
└── User Manager
    └── admin
```

Edit the default administrator account, replace the training password with a strong lab password, confirm it, and save the change. fileciteturn8file0L22-L27

**Security rationale:** Default administrative credentials should never remain unchanged on a deployed security appliance.

### 3. Create a Named Administrative User

Create a separate user account and configure it with the required administrative group membership. The supplied lab uses a named user and full-name field; the actual credentials are omitted from this portfolio record. fileciteturn8file0L28-L35

**Security rationale:** Named administrative identities improve accountability and make administrative activity easier to attribute than a shared generic account.

### 4. Configure Management Session Timeout

Navigate to the pfSense system settings and set the management-session timeout to:

```text
20 minutes
```

Save the configuration. fileciteturn8file0L36-L39

**Security rationale:** Shorter management sessions reduce the window in which an unattended authenticated browser session can be abused.

### 5. Configure webConfigurator Anti-Lockout

Navigate to:

```text
System
└── Advanced
    └── webConfigurator
```

Configure the protocol and anti-lockout option according to the lab requirement, then save the change. The supplied report specifies **HTTP** and instructs disabling the anti-lockout rule. fileciteturn8file0L40-L47

> **Important:** This is a training-lab configuration. In a production firewall, management-plane access should be evaluated against the organization's remote-administration, HTTPS, network-segmentation, and change-management requirements before changing anti-lockout behavior.

## Configuration Summary

```text
pfSense Management Plane
        │
        ├── Default admin credential changed
        │
        ├── Named administrative user created
        │
        ├── Session timeout → 20 minutes
        │
        └── webConfigurator HTTP anti-lockout configured
```

## Validation

The supplied lab report records:

```text
4 / 4
100% PASS
Time: 03:23
```

All four required actions were completed successfully. fileciteturn8file0L2-L11

## Security Analysis

### Management-plane hardening

The most important lesson is that firewall security is not limited to packet filtering. The administrative interface itself is a high-value attack surface.

### Identity and accountability

A named administrative account provides stronger attribution than relying exclusively on a generic administrator identity.

### Session security

A 20-minute timeout limits the useful lifetime of an unattended authenticated session.

### Change-control awareness

The anti-lockout setting illustrates why management-plane configuration changes must be considered in context. A setting that is appropriate for a controlled training environment may have different operational consequences on a production security appliance.

## Evidence Checklist

- [x] pfSense management console accessed
- [x] Default administrator password changed
- [x] Named administrative user created
- [x] Administrative group membership configured
- [x] Session timeout configured to 20 minutes
- [x] webConfigurator HTTP anti-lockout requirement configured
- [x] Final lab result verified — 4/4 (100%)
- [x] Live recording completed

## 🎥 EMETRIX Tech Live Recording Record

This laboratory was **recorded live during the practical configuration** for EMETRIX Tech social-media content. The recording is treated as a technical demonstration of the actual lab workflow rather than a scripted simulation.

### Primary Video Title

**I Hardened a pfSense Firewall's Admin Access — Live Cybersecurity Lab 🔐**

### Technical Title

**pfSense Management-Plane Hardening | Configure Security Appliance Access — CompTIA Lab 2.4.10**

### Recording Structure

**Scene 01 — Hook**  
Show the pfSense interface and introduce the problem: administrative access is itself an attack surface.

**Scene 02 — Introduction**  
Explain that the demonstration will harden administrator access through credential management, named administration, session control, and management-interface configuration.

**Scene 03 — Default Admin Hardening**  
Show the User Manager workflow and the password-change action without displaying the actual password.

**Scene 04 — Named Administrator**  
Show creation of the dedicated administrative identity and group assignment. Keep credentials hidden.

**Scene 05 — Session Security**  
Show the 20-minute session-timeout configuration and briefly explain why unattended sessions matter.

**Scene 06 — webConfigurator Control**  
Show the HTTP protocol and anti-lockout configuration required by the training lab. Add a brief production-safety disclaimer.

**Scene 07 — Validation**  
Review the four controls and show the completed 4/4 — 100% result.

**Scene 08 — EMETRIX Tech Close**  
Summarize the management-plane hardening lesson and direct viewers to EMETRIX Tech for additional practical cybersecurity labs.

### Recording Safety Checklist

- Do not show passwords or reusable credentials.
- Do not expose real firewall IP addresses or production infrastructure.
- Use only the isolated training environment.
- Keep the terminal/browser view readable at important configuration points.
- Capture the final validation screen.
- Preserve the original recording as the source for short-form clips.

## Social Media Repurposing

| Platform | Content Angle |
|---|---|
| TikTok | “Your firewall admin panel is an attack surface too.” |
| Instagram Reels | pfSense management-plane hardening |
| YouTube Shorts | Why session timeout matters |
| LinkedIn | Firewall administration and privileged-access controls |
| YouTube | Full live lab walkthrough |
| GitHub | Portfolio documentation and technical evidence |

### Short-form Hook

> “Your firewall can block attacks — but what protects the person who administers it?”

### Suggested On-screen Keywords

`pfSense` · `FIREWALL SECURITY` · `ADMIN ACCESS` · `PRIVILEGED ACCESS` · `SESSION TIMEOUT` · `NETWORK SECURITY`

## Skills Demonstrated

- pfSense administration
- Firewall management
- Administrative identity management
- Privileged-access concepts
- Session-security configuration
- Management-plane security
- Network-security documentation
- Technical communication

## Professional Reflection

This laboratory reinforced an important security-engineering principle: protecting the data plane is only part of securing a network appliance. The management plane must also be treated as a privileged attack surface.

The exercise strengthened practical experience with pfSense user administration, session controls, and management-interface configuration while also reinforcing the need to distinguish controlled training configurations from production security baselines.

## Source

**CompTIA CertMaster Labs — 2.4.10 Configure Security Appliance Access**

The supplied lab report records successful completion with **4/4 (100%)** and a time of **03:23**. fileciteturn8file0L2-L11

## Disclaimer

This documentation represents a controlled educational cybersecurity laboratory. Perform administrative changes only on systems you own or are explicitly authorized to manage.

**© 2026 EMETRIX Tech — Educational Cybersecurity Lab Documentation**
