# EMETRIX-LAB-003 — Discover Bluetooth Devices

## 1. Lab Overview

Controlled wireless-security laboratory focused on Bluetooth adapter initialization, device discovery, connectivity validation, service enumeration, and device-class identification.

**Source exercise:** 2.4.7 Discover Bluetooth Devices  
**Result:** 8/8 — 100% Pass  
**Recorded:** Yes

## 2. Executive Summary

The lab used Linux Bluetooth utilities to identify nearby Bluetooth devices and then progressively increase the level of technical detail: adapter status, discovery, reachability, service enumeration, and device-class information. This demonstrates a practical wireless reconnaissance workflow in a controlled environment.

## 3. Security Objective

Demonstrate how Bluetooth-enabled systems can be discovered and characterized so that an analyst can understand wireless exposure and identify devices that may require additional security controls.

## 4. Lab Requirements

- Linux laboratory environment
- Bluetooth adapter
- `hciconfig`
- `hcitool`
- `l2ping`
- `sdptool`
- Controlled nearby Bluetooth devices

## 5. Environment

A controlled Linux security laboratory with a local Bluetooth adapter and multiple devices within radio range. Evidence is sanitized before publication so device identifiers are not unnecessarily exposed.

## 6. Architecture

```text
       Bluetooth Adapter (Linux)
                  │
        ┌─────────▼─────────┐
        │ Adapter Validation │
        │    hciconfig       │
        └─────────┬─────────┘
                  │
        ┌─────────▼─────────┐
        │ Device Discovery   │
        │     hcitool scan   │
        └─────────┬─────────┘
                  │
        ┌─────────▼─────────┐
        │ Reachability Test  │
        │      l2ping        │
        └─────────┬─────────┘
                  │
        ┌─────────▼─────────┐
        │ Service Enumeration│
        │     sdptool        │
        └─────────┬─────────┘
                  │
        ┌─────────▼─────────┐
        │ Class Identification│
        │     hcitool inq    │
        └────────────────────┘
```

## 7. Security Controls Implemented

This lab is primarily an assessment and enumeration exercise rather than a defensive configuration task. The relevant security controls are the controlled test boundary, evidence sanitization, authorization of the lab environment, and separation from production Bluetooth systems.

## 8. Implementation

The workflow initialized and verified the Bluetooth adapter, performed device discovery, tested discovered devices for reachability, queried services on a selected device, and used inquiry output to inspect device-class information. The observed evidence was captured as separate stages so each analytical step can be traced to a screenshot.

## 9. Evidence

Sanitized evidence should be stored under `evidence/screenshots/`.

Recommended evidence set:

- `01-bluetooth-adapter-status.png`
- `02-bluetooth-device-discovery.png`
- `03-bluetooth-connectivity-validation.png`
- `04-bluetooth-service-enumeration.png`
- `05-bluetooth-inquiry-results.png`
- `06-lab-validation-result.png`

The screenshots demonstrate adapter status, discovery output, successful connectivity checks, service enumeration, class information, and final lab validation.

## 10. Findings & Security Analysis

**Finding 01 — Discoverability:** Multiple Bluetooth devices were visible during the controlled scan, demonstrating that wireless exposure can be observed without interacting with higher-level applications.

**Finding 02 — Reachability:** `l2ping` was used to determine which discovered devices responded in the laboratory environment.

**Finding 03 — Service exposure:** `sdptool` exposed service information for a selected device, illustrating that discoverable services can increase an attacker's understanding of a target.

**Finding 04 — Device classification:** Inquiry output provided device-class information that can help characterize nearby Bluetooth systems.

## 11. Risk Considerations

Bluetooth exposure should be assessed according to device role, discoverability requirements, pairing controls, authentication, encryption, supported profiles, firmware state, and organizational policy. Enumeration results alone do not establish compromise; they establish observable exposure and attack-surface information.

## 12. Validation

**Result: 8/8 — 100% Pass.** The source lab report confirms successful completion of the required discovery, reachability, service-query, and class-identification activities.

## 13. Lessons Learned

- Wireless reconnaissance should progress from discovery to characterization.
- A discovered device is not automatically a vulnerable device.
- Service enumeration can reveal useful attack-surface information.
- Evidence should be captured at each analytical stage.
- Bluetooth identifiers should be sanitized before public publication when they are not necessary for the learning objective.

## 14. Skills Demonstrated

Bluetooth security • Linux security tooling • wireless reconnaissance • device discovery • connectivity testing • service enumeration • device classification • evidence handling • security analysis

## 15. References & Attribution

The lab was completed in a controlled training environment based on a CompTIA exercise. This repository does not reproduce proprietary instructions. The report documents the author's practical execution, observed evidence, analysis, validation, and lessons learned.

## 16. EMETRIX Labs Methodology

**Learn → Perform → Capture Evidence → Analyze → Validate → Document → Publish → Improve**

All wireless testing represented here is limited to controlled, authorized laboratory environments.

## 17. Lab Status

- **Lab ID:** EMETRIX-LAB-003
- **Status:** Completed
- **Assessment:** 8/8 — Pass
- **Evidence:** Sanitized evidence set prepared
- **Recording:** Completed

## 18. Media

The lab recording is maintained in the EMETRIX Tech content pipeline. Add the final public video URL here after publication.

---

**EMETRIX Tech — Protect • Detect • Respond**