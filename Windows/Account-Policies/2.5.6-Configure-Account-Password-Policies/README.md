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

# EMETRIX Tech — Live Recording Plan

The lab is recorded as a **professional practical security-engineering demonstration**, not simply as a course completion.

## Video Positioning

```text
REPEATED FAILED LOGINS
          ↓
AUTHENTICATION RISK
          ↓
PASSWORD POLICY + ACCOUNT LOCKOUT
          ↓
STRONGER AUTHENTICATION BASELINE
```

### Primary Title

**I Hardened Windows Authentication Against Repeated Login Attempts 🔐**

### Technical Title

**Windows Authentication Hardening | Password & Account Lockout Policies — Live Security Lab**

### Episode

**EMETRIX Tech Security Lab #2.5.6**

---

## Scene 01 — Hook

**Visual:** Fast, clean opening animation.

```text
AUTHENTICATION
      ↓
FAILED LOGIN ATTEMPTS
      ↓
WHAT HAPPENS NEXT?
```

**Voice:** None.

---

## Scene 02 — Introduction

**Camera:** Professional medium shot.

**Lower third:**

```text
ABDUL NAASIR OBAIDY
Founder — EMETRIX Tech
Cybersecurity • Security Engineering • IT Security
```

**Say:**

> “What happens when someone keeps guessing the password to a Windows account?”
>
> “A strong password alone isn't enough. We also need controls that determine how passwords are managed and what happens after repeated failed login attempts.”
>
> “Today, I'm going to configure those controls in a controlled Windows security lab.”

---

## Scene 03 — Lab Setup

**Visual:** Windows lab VM.

**Say:**

> “This is a controlled Windows security lab. I'll be using Local Security Policy to configure two areas: Password Policy and Account Lockout Policy.”

**On-screen:**

`WINDOWS SECURITY LAB → AUTHENTICATION HARDENING`

---

## Scene 04 — Open Local Security Policy

**Action:** Open Local Security Policy and maximize the console.

**Say:**

> “I'll start by opening Local Security Policy. This gives us access to the local account-security controls.”

---

## Scene 05 — Account Policies

**Action:** Open **Security Settings → Account Policies**.

**Say:**

> “Under Account Policies, we have the two areas we need. Password Policy controls the characteristics and lifecycle of passwords, while Account Lockout Policy controls repeated invalid authentication attempts.”

---

## Scene 06 — Password Policy

**Action:** Open **Password Policy**.

**Say:**

> “Let's start with the password policy. The lab requires five specific controls.”

**Overlay:**

`HISTORY · MAX AGE · MIN AGE · LENGTH · COMPLEXITY`

---

## Scene 07 — Password History

**Action:** Set **Enforce password history = 4**.

**Say:**

> “First, I'm configuring password history to remember the last four passwords. This reduces immediate reuse of recently used credentials.”

**Overlay:** `PASSWORD HISTORY → 4`

---

## Scene 08 — Maximum Password Age

**Action:** Set **30 days**.

**Say:**

> “Next, the maximum password age is set to 30 days. This establishes the maximum password lifetime defined by this lab configuration.”

**Overlay:** `MAXIMUM AGE → 30 DAYS`

---

## Scene 09 — Minimum Password Age

**Action:** Set **2 days**.

**Say:**

> “The minimum password age is two days. This prevents immediate password cycling under the configured policy.”

**Overlay:** `MINIMUM AGE → 2 DAYS`

---

## Scene 10 — Minimum Password Length

**Action:** Set **10 characters**.

**Say:**

> “Now I'm requiring passwords to contain at least ten characters. Password length is an important component of reducing the feasibility of password-guessing attacks.”

**Overlay:** `MINIMUM LENGTH → 10`

---

## Scene 11 — Complexity

**Action:** Enable password complexity requirements.

**Say:**

> “And I'm enabling password complexity requirements, so the policy isn't relying on password length alone.”

**Overlay:** `COMPLEXITY → ENABLED ✓`

---

## Scene 12 — Transition

**Camera:** Abdul on screen.

**Say:**

> “We've now strengthened the password itself. But authentication security has another problem.”

Pause.

> “What happens when an attacker simply keeps trying?”

**Transition:** `ACCOUNT LOCKOUT`

---

## Scene 13 — Account Lockout Policy

**Action:** Open **Account Policies → Account Lockout Policy**.

**Say:**

> “This is where Account Lockout Policy comes into play. Instead of allowing unlimited failed authentication attempts, we can define when an account becomes locked.”

---

## Scene 14 — Lockout Threshold

**Action:** Set **4 invalid attempts**.

**Say:**

> “For this lab, I'm setting the account lockout threshold to four invalid attempts. After four invalid attempts, the account is locked.”

**Overlay:**

```text
1 ✕   2 ✕   3 ✕   4 ✕
             ↓
      ACCOUNT LOCKED
```

---

## Scene 15 — Lockout Duration

**Action:** Set **60 minutes**.

**Say:**

> “The lockout duration is 60 minutes, so a locked account remains locked for the configured period.”

**Overlay:** `LOCKOUT DURATION → 60 MINUTES`

---

## Scene 16 — Counter Reset

**Action:** Set **40 minutes**.

**Say:**

> “Finally, I'm configuring the failed-attempt counter to reset after 40 minutes.”

**Overlay:** `COUNTER RESET → 40 MINUTES`

---

## Scene 17 — Final Baseline Review

**Action:** Review the completed settings.

**Say:**

> “Now let's review the security baseline we've created.”
>
> “Four previous passwords remembered. Thirty-day maximum password age. Two-day minimum password age. Ten-character minimum password length. Password complexity enabled.”
>
> “And account lockout after four invalid attempts, with a 60-minute lockout duration and a 40-minute reset interval.”

---

## Scene 18 — Security Engineer Explanation

**Camera:** Abdul on screen.

**Say:**

> “The important point here is that we're not relying on one control.”
>
> “Password policy strengthens the credential requirements.”
>
> “Account lockout limits repeated failed authentication attempts.”
>
> “Together, these controls provide an additional layer of defense around Windows authentication.”

**Overlay:**

`PASSWORD QUALITY + FAILED-LOGIN CONTROL → AUTHENTICATION DEFENSE`

---

## Scene 19 — Lab Result

**Action:** Display the completed lab result.

**Say:**

> “And the lab is complete. Eight out of eight. One hundred percent.”

**On-screen:**

```text
8 / 8
100% PASS
LAB 2.5.6
```

---

## Scene 20 — Final Takeaway

**Camera:** Abdul on screen.

**Say:**

> “The takeaway is simple. Authentication security isn't just about creating a stronger password.”
>
> “It's about establishing policies around password lifecycle, complexity, and failed authentication attempts.”
>
> “That's how a simple Windows configuration becomes a practical security control.”

---

## Scene 21 — EMETRIX Tech Close

**Say:**

> “I'm Abdul, founder of EMETRIX Tech.”
>
> “If you want to see more practical cybersecurity labs, security engineering, and defensive techniques, follow EMETRIX Tech.”

**End card:**

```text
EMETRIX TECH
PRACTICAL CYBERSECURITY
LEARN • PRACTICE • DEFEND
```

---

# Recording Quality Checklist

### Before Recording

- Use the isolated Windows lab VM.
- Close unrelated applications and notifications.
- Set a clean desktop and readable display scaling.
- Prepare the lab report/result screen.
- Confirm no sensitive information is visible.
- Test microphone and screen recording.

### During Recording

- Record the real configuration process.
- Keep the mouse movement deliberate.
- Pause briefly after important settings so viewers can read them.
- Capture each required value clearly.
- Avoid exposing credentials or sensitive system information.
- Record the final verification and 8/8 result.

### Evidence Sequence

```text
01  Windows lab
02  Local Security Policy
03  Account Policies
04  Password Policy
05  History = 4
06  Max age = 30 days
07  Min age = 2 days
08  Length = 10
09  Complexity = Enabled
10  Account Lockout Policy
11  Threshold = 4
12  Duration = 60 minutes
13  Counter reset = 40 minutes
14  Final verification
15  8/8 — 100% Pass
```

---

# Social Media Repurposing

| Platform | Content Angle |
|---|---|
| Instagram Reels | Windows authentication hardening |
| TikTok | “What happens after 4 failed logins?” |
| YouTube Shorts | Account lockout explained |
| LinkedIn | Technical security-hardening case study |
| YouTube | Full live lab walkthrough |
| Carousel | Eight Windows authentication controls |
| GitHub | Technical documentation + evidence |

### Short-Form Hook

**“What happens when someone keeps guessing a Windows password?”**

### Keywords

`WINDOWS SECURITY` · `AUTHENTICATION` · `PASSWORD POLICY` · `ACCOUNT LOCKOUT` · `SECURITY HARDENING` · `DEFENSE IN DEPTH`

---

# Validation

**Status:** PASS  
**Score:** **8/8 — 100%**  
**Reported lab time:** **07:06**

---

# Source

**CompTIA CertMaster Labs — 2.5.6 Configure Account Password Policies**

The source lab report specifies the required password and account-lockout controls and records successful completion with **8/8 (100%)**.

---

# Disclaimer

This repository documents a controlled educational cybersecurity lab. Perform configuration changes only on systems you own or are explicitly authorized to administer.

Do not apply laboratory settings to production systems without appropriate testing, change management, security review, and organizational approval.

**© 2026 EMETRIX Tech — Educational Cybersecurity Lab Documentation**
