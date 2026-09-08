<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-002 — Configure a Captive Portal

## 1. Lab Overview

Controlled network-security laboratory demonstrating captive-portal access control and selective pass-through behavior on a pfSense-based security appliance.

**Source exercise:** 2.4.6 Configure a Captive Portal  
**Result:** 4/4 — 100% Pass  
**Recorded:** Yes

## 2. Executive Summary

The lab configured a guest wireless captive-portal zone and applied connection, timeout, bandwidth, authentication, MAC pass-through, and IP pass-through controls. The exercise demonstrates how a network security appliance can place an access-control boundary in front of a guest network while allowing explicitly defined exceptions.

## 3. Security Objective

Provide controlled guest-network access while enforcing defined session and traffic constraints and demonstrating how exceptions can be granted to approved devices or addresses.

## 4. Lab Requirements

- pfSense-based controlled laboratory
- Guest wireless interface
- Captive-portal zone
- Session limits and timeouts
- Bandwidth controls
- MAC pass-through
- IP pass-through

## 5. Environment

A simulated network-security environment using a pfSense appliance and a guest wireless segment. Lab-only identifiers are used in the evidence; unnecessary addresses and hardware identifiers should be sanitized before publication.

## 6. Architecture

```text
             Guest Wireless Clients
                      │
                      ▼
             ┌──────────────────┐
             │ GuestWi-Fi       │
             │ Network Segment  │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │ pfSense Firewall │
             │ Captive Portal   │
             └───────┬──────────┘
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
  Portal-controlled         Explicit pass-through
       clients                 exceptions
```

## 7. Security Controls Implemented

| Control | Purpose |
|---|---|
| Captive Portal | Establish an access-control boundary |
| Guest interface | Separate guest access from other network functions |
| Connection limit | Bound concurrent portal sessions |
| Idle/hard timeouts | Limit session duration |
| Bandwidth restriction | Constrain guest traffic consumption |
| MAC pass-through | Allow a defined device to bypass the portal |
| IP pass-through | Allow a defined address/range to bypass the portal |

## 8. Implementation

The controlled lab established a guest captive-portal zone, enabled the portal on the guest interface, configured concurrent-session and timeout controls, applied per-user bandwidth restrictions, and configured explicit MAC and IP pass-through entries. Values visible in source material are treated as lab-only and are not presented as production configuration.

## 9. Evidence

Store sanitized evidence under `evidence/screenshots/`.

Recommended evidence set:

- `01-lab-environment.png`
- `02-captive-portal-configuration-page-1.png`
- `02-captive-portal-configuration-page-2.png`
- `03-captive-portal-mac-control.png`
- `04-captive-portal-ip-control.png`

Do not publish real credentials or unnecessary network identifiers.

## 10. Findings & Security Analysis

**Finding 01 — Access boundary:** The captive portal creates an explicit policy boundary for guest access.

**Finding 02 — Session governance:** Connection and timeout limits reduce uncontrolled resource consumption and persistent sessions.

**Finding 03 — Traffic governance:** Per-user bandwidth limits provide a basic resource-control mechanism.

**Finding 04 — Exceptions:** MAC and IP pass-through demonstrate that exceptions must be deliberate and tightly governed because they bypass normal portal interaction.

## 11. Risk Considerations

Pass-through entries increase the trusted surface of the guest-access policy. They should be minimized, reviewed, documented, and removed when no longer required. Guest networks should not be treated as trusted merely because captive-portal controls are present.

## 12. Validation

**Result: 4/4 — 100% Pass.** The source lab report confirms successful completion of the required captive-portal configuration and pass-through controls.

## 13. Lessons Learned

- Captive portals are an access-control mechanism, not a substitute for network segmentation.
- Session limits and bandwidth controls contribute to resource governance.
- Exceptions can weaken a policy boundary and therefore require lifecycle management.
- Security configuration should always be validated after implementation.

## 14. Skills Demonstrated

Network security • pfSense • captive portal configuration • access control • guest-network security • traffic governance • configuration validation • security documentation

## 15. References & Attribution

The lab was completed in a controlled training environment based on a CompTIA exercise. This repository intentionally does not reproduce proprietary step-by-step instructions or credentials. It documents the author's implementation, security analysis, evidence, and validation.

## 16. EMETRIX Labs Methodology

**Learn → Perform → Capture Evidence → Analyze → Validate → Document → Publish → Improve**

## 17. Lab Status

- **Lab ID:** EMETRIX-LAB-002
- **Status:** Completed
- **Assessment:** 4/4 — Pass
- **Evidence:** Sanitized screenshots prepared
- **Recording:** Completed

## 18. Media

The lab recording is maintained in the EMETRIX Tech content pipeline. Add the final public video URL here after publication.

---

**EMETRIX Tech — Protect • Detect • Respond**