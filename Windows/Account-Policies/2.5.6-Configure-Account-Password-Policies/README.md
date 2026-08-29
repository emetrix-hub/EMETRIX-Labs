# Windows Account Password Policies — Lab 2.5.6

> **EMETRIX Tech Security Lab**  
> Windows Security Hardening | Authentication Controls | Local Security Policy

## Overview

This lab demonstrates the configuration of local Windows password and account-lockout policies through **Local Security Policy**.

**Training reference:** CompTIA CertMaster Labs — **2.5.6 Configure Account Password Policies**  
**Lab result:** **8/8 — 100% Pass**  
**Reported lab time:** **07:06**

The goal is to establish a stronger local authentication baseline by controlling password lifecycle requirements and limiting repeated invalid authentication attempts.

---

## Objectives

| # | Security Control | Required Setting |
|---|---|---:|
| 1 | Enforce password history | **4** |
| 2 | Maximum password age | **30 days** |
| 3 | Minimum password age | **2 days** |
| 4 | Minimum password length | **10 characters** |
| 5 | Password complexity requirements | **Enabled** |
| 6 | Account lockout threshold | **4 invalid attempts** |
| 7 | Account lockout duration | **60 minutes** |
| 8 | Reset account lockout counter after | **40 minutes** |

---

## Security Concept

```text
                    WINDOWS AUTHENTICATION
                             │
              ┌──────────────┴──────────────┐
              │                             │
       PASSWORD POLICY              ACCOUNT LOCKOUT
              │                             │
    ┌─────────┼─────────┐          ┌────────┼────────┐
    │         │         │          │        │        │
 History   Age/Length Complexity Threshold Duration  Reset
              │                             │
              └──────────────┬──────────────┘
                             │
                  AUTHENTICATION HARDENING
```

**Password Policy** controls password reuse, age, length, and complexity.

**Account Lockout Policy** controls repeated invalid authentication attempts, lockout duration, and counter reset behavior.

These controls are one layer of **defense in depth** and are not a complete identity-security architecture.

---

## Lab Environment

| Component | Configuration |
|---|---|
| Platform | Windows lab environment |
| Administrative interface | Local Security Policy |
| Primary policy area | Account Policies |
| Password policy | Account Policies → Password Policy |
| Lockout policy | Account Policies → Account Lockout Policy |

> **Security:** Use an isolated, authorized lab. Never expose real passwords, credentials, corporate hostnames, internal IP addresses, tokens, or other sensitive information in screenshots or recordings.

---

# Configuration

## Password Policy

Navigate to:

```text
Security Settings
└── Account Policies
    └── Password Policy
```

Configure:

| Policy | Required Value |
|---|---:|
| Enforce password history | **4** |
| Maximum password age | **30 days** |
| Minimum password age | **2 days** |
| Minimum password length | **10 characters** |
| Passwords must meet complexity requirements | **Enabled** |

## Account Lockout Policy

Navigate to:

```text
Security Settings
└── Account Policies
    └── Account Lockout Policy
```

Configure:

| Policy | Required Value |
|---|---:|
| Account lockout threshold | **4 invalid attempts** |
| Account lockout duration | **60 minutes** |
| Reset account lockout counter after | **40 minutes** |

---

# Procedure

### 1. Open Local Security Policy

Open **Local Security Policy** from the Windows administrative tools and maximize the console.

### 2. Configure Password Policy

Open **Security Settings → Account Policies → Password Policy**. Configure each of the five required password controls using the values above. Verify each setting before continuing.

### 3. Configure Account Lockout Policy

Open **Security Settings → Account Policies → Account Lockout Policy**. Configure the threshold, duration, and reset-counter values.

### 4. Verify

Review both policy sections and confirm all eight settings match the required configuration. Capture clean evidence screenshots.

### 5. Record Result

Verify the completed lab result:

```text
8 / 8
100% PASS
```

---

# Expected Security Outcome

The completed configuration establishes a local authentication baseline where:

1. Recent passwords are retained in password history.
2. Password changes are governed by minimum and maximum age settings.
3. Passwords must meet the configured minimum length.
4. Password complexity requirements are enabled.
5. Repeated invalid authentication attempts trigger account lockout.
6. Locked accounts remain locked for the configured duration.
7. The invalid-attempt counter resets after the configured period.

In enterprise environments, these controls should be complemented by centralized identity management, MFA, privileged-access controls, logging, monitoring, alerting, and incident response.

---

# Evidence Checklist

- [ ] Windows lab environment
- [ ] Local Security Policy console
- [ ] Account Policies → Password Policy
- [ ] Password history = 4
- [ ] Maximum password age = 30 days
- [ ] Minimum password age = 2 days
- [ ] Minimum password length = 10
- [ ] Complexity = Enabled
- [ ] Account Lockout Policy
- [ ] Lockout threshold = 4
- [ ] Lockout duration = 60 minutes
- [ ] Reset counter = 40 minutes
- [ ] Final verification
- [ ] Lab result = 8/8 (100%) Pass

---

# Source

**CompTIA CertMaster Labs — 2.5.6 Configure Account Password Policies**

The source lab report specifies the required password and account-lockout controls and records successful completion with **8/8 (100%)**.

---

# Disclaimer

This repository documents a controlled educational cybersecurity lab. Perform configuration changes only on systems you own or are explicitly authorized to administer.

Do not apply laboratory settings to production systems without appropriate testing, change management, security review, and organizational approval.

**© 2026 EMETRIX Tech — Educational Cybersecurity Lab Documentation**
