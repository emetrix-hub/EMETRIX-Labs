# Windows Server Security Configuration Gap Analysis

> **EMETRIX Tech Security Engineering Lab**  
> **Baseline vs Reality — Validating Windows Server Security Configuration**

[![Platform](https://img.shields.io/badge/Platform-Windows%20Server%202019-0078D4?style=flat-square)](#environment) [![Focus](https://img.shields.io/badge/Focus-Security%20Baseline%20%7C%20Gap%20Analysis-111827?style=flat-square)](#objectives) [![Tool](https://img.shields.io/badge/Tool-Microsoft%20Policy%20Analyzer-5C2D91?style=flat-square)]

## Executive Summary

This lab demonstrates a practical **system configuration gap analysis** of Windows Server 2019 against a Microsoft security baseline.

The assessment compares the **expected security configuration** defined by the selected baseline with the **effective configuration** of the live operating system. Differences are identified, documented, and interpreted from a security-engineering perspective.

> **Security principle:** A configuration deviation is not automatically a vulnerability. It is a signal that requires validation against organizational policy, risk appetite, business requirements, and the approved security baseline.

## Objectives

- Verify the target operating-system version and build.
- Select a security baseline appropriate to the target platform.
- Review baseline policy requirements.
- Compare the baseline with the system's effective state.
- Identify configuration gaps and configuration drift.
- Document findings and security implications.
- Demonstrate security governance and configuration assurance.

## Environment

| Component | Configuration |
|---|---|
| System | PC10 virtual machine |
| Operating System | Windows Server 2019 |
| Version | 1809 |
| OS Build | 17763 |
| Assessment Tool | Microsoft Policy Analyzer |
| Baseline | `MSFT-Win10-v1809-RS5-WS2019-FINAL` |
| Source Toolkit | Microsoft Security Compliance Toolkit |

## Assessment Methodology

```text
Identify Platform
      ↓
Verify Version & Build
      ↓
Select Matching Security Baseline
      ↓
Review Expected Configuration
      ↓
Compare Against Effective State
      ↓
Identify Configuration Gaps
      ↓
Assess Security Significance
      ↓
Document & Remediate
```

## Key Evidence

Evidence should be stored in the `evidence/` directory and should contain **only sanitized lab screenshots**. Do not publish credentials, personal information, production identifiers, tokens, private IP information, or unrelated lab data.

Recommended evidence set:

1. Windows Server version and build (`winver`).
2. Policy Analyzer baseline loaded.
3. Baseline policy view.
4. `LockoutBadCount` baseline value.
5. `MinimumPasswordLength` baseline value.
6. Effective-state comparison.
7. Highlighted configuration differences.
8. Final documented findings.

## Findings

The lab explicitly identifies the following effective-state values:

| Control | Baseline | Effective State | Assessment |
|---|---:|---:|---|
| `LockoutBadCount` | **9** | **0** | Configuration gap identified |
| `MinimumPasswordLength` | **Verify in Policy Analyzer** | **7** | Configuration gap assessment depends on verified baseline value |

### Finding 01 — Account Lockout Configuration

**Control:** `LockoutBadCount`  
**Baseline:** `9`  
**Effective state:** `0`

The effective configuration differs from the selected baseline. The deviation should be reviewed against the organization's authentication policy and risk requirements before remediation is applied.

### Finding 02 — Minimum Password Length

**Control:** `MinimumPasswordLength`  
**Baseline:** **Record the value displayed by Policy Analyzer during execution**  
**Effective state:** `7`

The effective configuration must be compared with the verified baseline value. The final assessment should use the actual value observed during the lab rather than an assumed value.

## Security Interpretation

The system is **not aligned with the selected security template for the identified differences**. However, baseline variance should not be treated as proof of compromise or as an automatically exploitable vulnerability.

A professional assessment asks:

- Is the deviation intentional?
- Is there an approved exception?
- Does the organization have a different security requirement?
- Does the deviation increase likelihood or impact of a relevant threat?
- Is remediation technically and operationally appropriate?

## Remediation Approach

Before changing production systems:

1. Validate the approved organizational security baseline.
2. Confirm the business and technical requirements.
3. Assess the risk associated with the deviation.
4. Obtain appropriate change approval.
5. Apply the required configuration through controlled change management.
6. Re-run the comparison.
7. Capture evidence showing the resulting state.
8. Document any accepted exceptions.

## Tools & Technologies

- Windows Server 2019
- Microsoft Policy Analyzer
- Microsoft Security Compliance Toolkit
- Windows PowerShell
- Security baseline assessment
- Configuration auditing
- Security governance

## CompTIA Security+ Alignment

This practical exercise supports concepts associated with:

- **1.2** — Fundamental security concepts
- **3.2** — Security principles for enterprise infrastructure
- **4.1** — Security techniques for computing resources
- **4.4** — Security alerting and monitoring concepts and tools
- **5.1** — Security governance

## Professional Takeaway

> **Security is not assumed. It is measured, validated, documented, and continuously improved.**

A security baseline establishes an expected state. Gap analysis provides the evidence needed to determine how closely the live environment matches that expectation.

## Lab Limitations

This is an isolated educational lab environment. The Microsoft baseline is a reference configuration and should be tailored to the organization's architecture, threat model, regulatory obligations, operational requirements, and approved security policy before being adopted in production.

## Related EMETRIX Tech Work

This lab forms part of the **EMETRIX Tech Security Engineering Lab Series**, documenting practical work across Windows security, endpoint security, SOC operations, threat hunting, vulnerability management, network security, digital forensics, cloud security, and automation.

## Author

**Abdul Naasir Obaidy**  
Founder — **EMETRIX Tech**  
Cybersecurity • Security Engineering • IT Security

---

**Repository:** [EMETRIX-Labs](https://github.com/emetrix-hub/EMETRIX-Labs)
