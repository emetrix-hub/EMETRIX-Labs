<p align="center">
  <img src="../../assets/branding/emetrix-tech-logo.png" alt="EMETRIX Tech Logo" width="220">
</p>

# EMETRIX-LAB-001 — Implement Physical Security Countermeasures

## 1. Lab Overview
Controlled security laboratory demonstrating layered physical-security controls for a building entrance and a restricted networking area.

**Source exercise:** 2.3.4 Implement Physical Security Countermeasures  
**Result:** 4/4 — 100% Pass  
**Recorded:** Yes

## 2. Executive Summary
The lab implemented smart-card access readers, IP camera coverage, restricted-area signage, and visitor logging to demonstrate layered prevention, detection, deterrence, and accountability.

## 3. Security Objective
Reduce unauthorized physical access to sensitive areas and improve visibility and accountability for security-relevant activity.

## 4. Lab Requirements
- Controlled laboratory environment
- Smart-card access control
- IP security-camera coverage
- Restricted-access signage
- Visitor logging

## 5. Environment
A simulated corporate facility containing a lobby, front entrance, networking closet, and security-control locations. No production workplace systems or photographs are used.

## 6. Architecture
```text
Building Entry → Smart-card Access → Lobby / Visitor Log → Restricted Networking Area
                                  ↘ CCTV Monitoring ↗
```

## 7. Security Controls Implemented
- Smart-card access control
- IP camera monitoring
- Restricted-area signage
- Visitor logging and accountability

## 8. Implementation
The controlled exercise placed access readers at the main entrance and networking-closet entrance, camera coverage inside and outside the networking closet, restricted-access signage, and a visitor log.

## 9. Evidence
Sanitized evidence is stored under `evidence/screenshots/`. Recommended evidence includes the environment, access control, camera monitoring, visitor management, restricted-area control, and final validation screenshots.

## 10. Findings & Security Analysis
Layered physical controls provide stronger protection than any single mechanism. Access controls prevent or restrict entry, cameras support detection, signage provides deterrence, and visitor records provide accountability.

## 11. Risk Considerations
Controls require appropriate credential lifecycle management, camera monitoring and retention, visitor-record protection, and periodic validation.

## 12. Validation
**Result: 4/4 — 100% Pass.**

## 13. Lessons Learned
- Physical security is part of the security architecture.
- Layered controls reduce dependence on a single mechanism.
- Detection complements prevention.
- Documentation supports accountability.

## 14. Skills Demonstrated
Physical security • access control • CCTV concepts • security monitoring • visitor management • validation • security documentation • risk analysis

## 15. References & Attribution
Completed in a controlled training environment based on a CompTIA exercise. Proprietary step-by-step instructions are not reproduced; this report documents practical execution, analysis, evidence, and validation.

## 16. EMETRIX Labs Methodology
**Learn → Perform → Capture Evidence → Analyze → Validate → Document → Publish → Improve**

## 17. Lab Status
- **Lab ID:** EMETRIX-LAB-001
- **Status:** Completed
- **Assessment:** 4/4 — Pass
- **Recording:** Completed

## 18. Media
### YouTube Walkthrough
▶️ **[Watch the LAB-001 Walkthrough on YouTube](https://youtu.be/SZ12Xh82hYc)**

The video demonstrates the practical laboratory execution and complements the technical documentation and sanitized evidence in this repository.

---

**EMETRIX Tech — Protect • Detect • Respond**