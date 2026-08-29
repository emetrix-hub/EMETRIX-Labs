# Windows Account Password Policies — Lab 2.5.6

> **EMETRIX Tech Security Lab**  
> Windows security hardening | Authentication controls | Local Security Policy

## Lab Overview

This lab demonstrates how to configure local Windows password and account-lockout controls through **Local Security Policy**. The objective is to strengthen authentication by enforcing password-management requirements and limiting repeated invalid logon attempts.

The lab is based on **CompTIA CertMaster Labs — 2.5.6 Configure Account Password Policies**. The source lab report records a successful completion with **8/8 (100%)** and a reported execution time of **07:06**.

## Objectives

Configure the following controls:

- Password history: remember the last **4** passwords
- Maximum password age: **30 days**
- Minimum password age: **2 days**
- Minimum password length: **10 characters**
- Password complexity requirements: **Enabled**
- Account lockout threshold: **4 invalid attempts**
- Account lockout duration: **60 minutes**
- Reset account lockout counter after: **40 minutes**

## Security Concept

The lab focuses on two related authentication-control areas:

```text
                    WINDOWS AUTHENTICATION
                              |
             +----------------+----------------+
             |                                 |
      PASSWORD POLICY                  ACCOUNT LOCKOUT
             |                                 |
   +---------+---------+             +---------+---------+
   |         |         |             |         |         |
 History   Age/Length  Complexity  Threshold Duration  Reset
             |                                 |
             +---------------+-----------------+
                             |
                    DEFENSE IN DEPTH
```

Password policy controls the characteristics and lifecycle of credentials. Account lockout controls repeated invalid authentication attempts.

## Lab Environment

| Component | Configuration |
|---|---|
| Platform | Windows lab environment |
| Administrative interface | Local Security Policy |
| Primary policy area | Account Policies |
| Password policy | Account Policies → Password Policy |
| Lockout policy | Account Policies → Account Lockout Policy |

> Keep screenshots limited to the isolated lab environment. Do not expose real usernames, passwords, tokens, corporate hostnames, internal IP addresses, or other sensitive information.

## Configuration Matrix

| Policy Location | Policy | Required Setting |
|---|---|---:|
| Account Policies / Password Policy | Enforce password history | 4 |
| Account Policies / Password Policy | Maximum password age | 30 days |
| Account Policies / Password Policy | Minimum password age | 2 days |
| Account Policies / Password Policy | Minimum password length | 10 characters |
| Account Policies / Password Policy | Passwords must meet complexity requirements | Enabled |
| Account Policies / Account Lockout Policy | Account lockout threshold | 4 invalid attempts |
| Account Policies / Account Lockout Policy | Account lockout duration | 60 minutes |
| Account Policies / Account Lockout Policy | Reset account lockout counter after | 40 minutes |

## Procedure

### 1. Open Local Security Policy

Open **Local Security Policy** from the Windows administrative tools and maximize the console for easier navigation.

### 2. Configure Password Policy

Navigate to:

```text
Security Settings
└── Account Policies
    └── Password Policy
```

Configure each required password-policy setting according to the configuration matrix above. Open the relevant policy, apply the required value, and confirm the change.

### 3. Configure Account Lockout Policy

Navigate to:

```text
Security Settings
└── Account Policies
    └── Account Lockout Policy
```

Configure the threshold, duration, and reset-counter settings according to the matrix above.

### 4. Verify

Review both policy sections after configuration and capture clean evidence showing the configured values. Record the final lab result separately from configuration screenshots.

## Expected Security Outcome

The completed configuration establishes a local authentication baseline in which:

1. Recent passwords cannot be immediately reused beyond the configured history.
2. Password changes are constrained by minimum and maximum age settings.
3. Passwords must meet the configured length and complexity requirements.
4. Repeated invalid authentication attempts trigger account lockout.
5. Locked accounts remain locked for the configured duration.
6. The invalid-attempt counter resets after the configured period.

These controls should be understood as **one layer of authentication defense**, not a complete identity-security architecture. In enterprise environments, additional controls such as centralized identity management, MFA, monitoring, privileged-access controls, and detection/response capabilities may also be required.

## Evidence Checklist

Capture the following during the live lab recording:

- [ ] Local Security Policy console opened
- [ ] Account Policies → Password Policy visible
- [ ] Password history = 4
- [ ] Maximum password age = 30 days
- [ ] Minimum password age = 2 days
- [ ] Minimum password length = 10 characters
- [ ] Complexity requirements = Enabled
- [ ] Account Lockout Policy visible
- [ ] Lockout threshold = 4
- [ ] Lockout duration = 60 minutes
- [ ] Reset lockout counter = 40 minutes
- [ ] Final verification screen(s)
- [ ] Lab completion result: 8/8 (100%) Pass

## Recording Plan — EMETRIX Tech

### Hook

**AUTHENTICATION → WHAT HAPPENS NEXT?**

Opening narration after the hook:

> "What happens when someone keeps guessing the password to a Windows account? A strong password alone isn't enough. We need controls that determine how passwords are managed—and what happens after repeated failed login attempts. So, let's configure those controls in Windows."

### Demonstration Flow

1. Introduce the authentication problem.
2. Open Local Security Policy.
3. Show Account Policies.
4. Configure Password Policy settings one by one.
5. Transition to Account Lockout Policy.
6. Configure threshold, duration, and reset interval.
7. Show the final configuration as a security baseline.
8. Display the verified 8/8 (100%) result.
9. Close with the EMETRIX Tech security takeaway.

### Closing Line

> "Authentication security isn't just about having a complicated password. It's about controlling what happens before, during, and after a failed login. That's how security policies become a real defensive control."

## Social Media Repurposing

### Primary Short-Form Title

**I Hardened Windows Authentication 🔐 | Real Cybersecurity Lab**

### Technical Title

**Windows Password Security: Account Password & Lockout Policies | Live Security Lab**

### Suggested On-Screen Keywords

`PASSWORD POLICY` · `ACCOUNT LOCKOUT` · `WINDOWS SECURITY` · `AUTHENTICATION` · `DEFENSE IN DEPTH`

### Content Angle

Position the video as a practical defensive-security demonstration rather than a generic Windows tutorial. The key narrative is:

```text
Repeated Failed Logins
        ↓
Authentication Risk
        ↓
Password Policy + Lockout Controls
        ↓
Stronger Local Authentication Baseline
```

## Validation Result

**Status:** PASS  
**Score:** 8/8 — 100%  
**Reported lab time:** 07:06

## Source

Training reference: **CompTIA CertMaster Labs — 2.5.6 Configure Account Password Policies**.

The source lab report specifies the required settings and procedure and records the successful 8/8 (100%) completion.

## Disclaimer

This repository documents a controlled educational cybersecurity lab. Perform configuration changes only on systems you own or are explicitly authorized to administer. Do not apply lab settings to production systems without an approved change-management and security-review process.

© 2026 EMETRIX Tech — Educational cybersecurity lab documentation.
