<p align="center">
  <img src="../../assets/Emetrix_Orginal_logo.PNG" width="180">
</p>

# 🔓 LAB-007 | Analyze Passwords Using Rainbow Tables

### Password Hash Analysis with RainbowCrack

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Category](https://img.shields.io/badge/Category-Linux%20Security-blue)
![Platform](https://img.shields.io/badge/Platform-CompTIA%20Labs-orange)
![Technology](https://img.shields.io/badge/Technology-RainbowCrack-purple)
![Difficulty](https://img.shields.io/badge/Difficulty-Intermediate-orange)

## Executive Summary

This laboratory demonstrates how precomputed rainbow tables can be used to analyze password hashes in a controlled cybersecurity training environment. The workflow covers character-set selection, generation of MD5 and SHA-1 rainbow tables, table sorting, and hash analysis with `rcrack`.

The supplied lab report records successful completion with **9/9 — 100% Pass** and a reported execution time of **06:58**. fileciteturn8file1L2-L18

> **Scope:** This is an authorized educational exercise. The techniques and hashes documented here are limited to the supplied training environment.

## Objectives

- Inspect the RainbowCrack character-set definitions.
- Determine which character set supports the company's stated password requirements.
- Generate MD5 and SHA-1 rainbow tables.
- Sort the generated tables with `rtsort`.
- Analyze the supplied hash file with `rcrack`.
- Evaluate recovered passwords against the stated password policy.

These requirements are taken directly from the supplied lab report. fileciteturn8file1L6-L18

## Security Concept

A password hash is designed to allow verification without storing the original password. Rainbow tables take a different approach from an online brute-force attack: they use precomputation to trade storage and computation time for faster lookup of candidate plaintexts against supported hash algorithms and character spaces.

The key security lesson is that **fast legacy password hashes and weak passwords can make offline password recovery significantly easier**. Modern authentication systems should use purpose-built password hashing functions with appropriate cost factors and salts rather than relying on fast unsalted hashes.

## Lab Environment

| Component | Configuration |
|---|---|
| Platform | CompTIA CertMaster Labs |
| Operating environment | Linux training environment |
| Primary tool | RainbowCrack / RainbowCrack utilities |
| Commands | `cat`, `rtgen`, `rtsort`, `rcrack` |
| Result | 9/9 — 100% Pass |
| Reported time | 06:58 |

## Workflow

```text
Password Requirements
        │
        ▼
Character-Set Analysis
        │
        ▼
Rainbow Table Generation
        │
        ├── MD5
        └── SHA-1
        │
        ▼
Table Sorting
        │
        ▼
Hash Analysis
        │
        ▼
Password Policy Evaluation
```

## Implementation

### Step 1 — Inspect the Character Set

The lab begins by examining the RainbowCrack character-set file:

```bash
cat /usr/share/rainbowcrack/charset.txt
```

The purpose is to identify the character set that covers all characters required by the company's password requirements. fileciteturn8file1L20-L27

### Step 2 — Generate an MD5 Rainbow Table

The supplied lab procedure uses:

```bash
rtgen md5 ascii-32-95 1 20 0 1000 1000 0
```

This creates an MD5 rainbow-crack table using the lab-specified character set and parameters. fileciteturn8file1L28-L31

### Step 3 — Generate a SHA-1 Rainbow Table

The supplied procedure then generates a SHA-1 table:

```bash
rtgen sha1 ascii-32-95 1 20 0 1000 1000 0
```

The lab deliberately demonstrates both MD5 and SHA-1 hash analysis. fileciteturn8file1L28-L32

### Step 4 — Sort the Tables

Sort the generated tables with:

```bash
rtsort .
```

Sorting prepares the generated table files for the subsequent lookup process. fileciteturn8file1L28-L32

### Step 5 — Analyze the Captured Hashes

The supplied lab procedure uses:

```bash
rcrack . -l /root/captured_hashes.txt
```

This searches the generated rainbow tables for matches against the hashes contained in the supplied training hash file. fileciteturn8file1L33-L36

## Lab Questions

The original exercise asks the learner to determine:

1. Which character set supports the company's password requirements?
2. What is the password corresponding to the supplied MD5 hash `202cb962ac59075b964b07152d234b70`?
3. What is the password corresponding to the supplied MD5 hash `400238780e6c41f8f790161e6ed4df3b`?
4. What is the password corresponding to the supplied SHA-1 hash `89BF04763BF91C9EE2DDBE23D7B5C730BDD41FF2`?
5. Which recovered passwords fail the company's password policy?

These questions are explicitly listed in the supplied report. fileciteturn8file1L8-L18

For portfolio documentation, the emphasis is on reproducing and explaining the authorized workflow rather than publishing unnecessary recovered credentials.

## Security Analysis

### Why Rainbow Tables Matter

Rainbow tables demonstrate the risk of using weak, fast, unsalted password hashing schemes. Once an attacker obtains password hashes, precomputation can accelerate recovery for passwords within the supported search space.

### Why Salting Matters

A unique cryptographic salt changes the hash input for each password. This prevents one precomputed rainbow table from being directly reusable across many accounts and substantially reduces the value of traditional rainbow-table attacks.

### Why Password Policy Matters

The exercise connects technical password recovery with policy enforcement. Recovering a password is only one part of the analysis; security teams must also determine whether the recovered credential meets organizational requirements for length and character composition.

## Defensive Takeaways

- Prefer modern password-hashing algorithms designed for password storage.
- Use unique salts for each password.
- Avoid legacy fast hashes such as unsalted MD5 or SHA-1 for password storage.
- Enforce strong password requirements appropriate to the organization's threat model.
- Protect credential databases and restrict access to authentication data.
- Monitor for credential-compromise indicators and investigate exposed password hashes.

## Evidence Checklist

- [x] RainbowCrack character-set file inspected
- [x] Required character-set selection performed
- [x] MD5 rainbow table generated
- [x] SHA-1 rainbow table generated
- [x] Rainbow tables sorted with `rtsort`
- [x] Captured hash file analyzed with `rcrack`
- [x] Lab questions completed
- [x] Final lab result verified — 9/9 (100%)
- [x] Live recording completed

#

- Linux command-line operations
- Password-hash analysis
- RainbowCrack tooling
- MD5 and SHA-1 analysis
- Character-set analysis
- Offline password-recovery concepts
- Password-policy evaluation
- Security documentation
- Defensive security analysis

## Professional Reflection

This laboratory provided practical exposure to the relationship between password storage design and offline credential attacks. The exercise demonstrates why organizations should not treat a password hash as automatically safe simply because the plaintext is not stored.

The most important defensive lesson is architectural: modern authentication systems should use unique salts and password-hashing algorithms designed to be computationally expensive, rather than fast legacy hashes that are well suited to high-speed guessing and precomputation.

## Source

**CompTIA CertMaster Labs — 2.5.5 Analyze Passwords using Rainbow Tables**

The supplied report records successful completion with **9/9 (100%)** and a reported time of **06:58**. fileciteturn8file1L2-L5

## Disclaimer

This documentation represents a controlled educational cybersecurity laboratory. Perform password-hash analysis only against systems, credentials, and datasets you own or are explicitly authorized to test.

**© 2026 EMETRIX Tech — Educational Cybersecurity Lab Documentation**
