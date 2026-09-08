# EMETRIX-LAB-001 — Implement Physical Security Countermeasures

## 1. Lab Overview

Controlled security laboratory demonstrating layered physical-security controls for a building entrance and a restricted networking area.

**Source exercise:** 2.3.4 Implement Physical Security Countermeasures  
**Result:** 4/4 — 100% Pass  
**Recorded:** Yes

## 2. Executive Summary

The lab implemented complementary physical controls: smart-card access readers, IP camera coverage, restricted-area signage, and visitor logging. The control set demonstrates how prevention, detection, deterrence, and accountability can work together rather than relying on one mechanism.

## 3. Security Objective

Reduce unauthorized physical access to sensitive areas and improve visibility and accountability for visitors and security-relevant activity.

## 4. Lab Requirements

- Controlled laboratory environment
- Building entrance and networking-closet scenario
- Smart-card access control
- IP security-camera coverage
- Restricted-access signage
- Visitor logging

## 5. Environment

A simulated corporate facility containing a lobby, front entrance, networking closet, and security-control locations. No production workplace systems or photographs are used in this portfolio.

## 6. Architecture

```text
                 ┌───────────────────────┐
                 │     Building Entry    │
                 │  Smart-card reader    │
                 └───────────┬───────────┘
                             │
                      ┌──────▼──────┐
                      │    Lobby    │
                      │ Visitor log │
                      └──────┬──────┘
                             │
                 ┌───────────▼───────────┐
                 │   Networking Closet   │
                 │ Access reader + sign  │
                 │ Interior/exterior CCTV│
                 └───────────────────────┘
```

## 7. Security Controls Implemented

| Control | Purpose | Security property |
|---|---|---|
| Smart-card reader | Restrict entry | Prevention |
| IP camera | Monitor sensitive areas | Detection |
| Restricted-access sign | Deter unauthorized entry | Deterrence / Directive |
| Visitor log | Record visitor activity | Accountability |

## 8. Implementation

The controlled exercise placed access readers at the main entrance and networking-closet entrance, camera coverage inside and outside the networking closet, a restricted-access sign at the sensitive door, and a visitor log at the lobby desk. The implementation was then validated against the lab objectives.

## 9. Evidence

Evidence should be stored under `evidence/screenshots/` using sanitized laboratory screenshots. Do not publish real workplace photographs, credentials, or sensitive identifiers.

Recommended evidence set:

- `01-lab-environment-overview.png`
- `02-smart-card-access-control.png`
- `03-ip-camera-security-monitoring.png`
- `04-visitor-log-control.png`
- `05-restricted-area-control.png`

## 10. Findings & Security Analysis

**Finding 01 — Access control:** Card readers establish an authorization boundary at the building and sensitive-area entrances.

**Finding 02 — Monitoring:** Camera placement increases the ability to observe activity around a high-value area.

**Finding 03 — Deterrence:** Restricted-area signage communicates the security boundary and expected behavior.

**Finding 04 — Accountability:** Visitor logging creates an operational record that can support later review.

The controls are stronger as a layered set than as isolated mechanisms.

## 11. Risk Considerations

Physical controls can be bypassed, misconfigured, disabled, or rendered ineffective by poor operational procedures. Access credentials require lifecycle management, cameras require suitable retention and monitoring, and visitor records require controlled handling.

## 12. Validation

**Result: 4/4 — 100% Pass.** The source lab report records successful completion of all required controls.

## 13. Lessons Learned

- Physical security is part of an organization's security architecture.
- Layered controls reduce dependence on a single defensive mechanism.
- Detection controls complement preventive controls.
- Documentation and accountability are security controls, not administrative afterthoughts.

## 14. Skills Demonstrated

Physical security controls • access control • CCTV concepts • security monitoring • visitor management • control validation • security documentation • risk analysis

## 15. References & Attribution

The lab was completed in a controlled training environment based on a CompTIA exercise. This repository does not reproduce the proprietary step-by-step instructions. The portfolio records the author's implementation, analysis, evidence, and validation.

## 16. EMETRIX Labs Methodology

**Learn → Perform → Capture Evidence → Analyze → Validate → Document → Publish → Improve**

Evidence is sanitized before publication and separated from any production environment.

## 17. Lab Status

- **Lab ID:** EMETRIX-LAB-001
- **Status:** Completed
- **Assessment:** 4/4 — Pass
- **Evidence:** Prepared for portfolio use
- **Recording:** Completed

## 18. Media

The lab recording is maintained as part of the EMETRIX Tech cybersecurity content pipeline. Add the final public video URL here after publication.

---

**EMETRIX Tech — Protect • Detect • Respond**