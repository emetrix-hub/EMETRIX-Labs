# LAB-007 Evidence — Analyze Passwords Using Rainbow Tables

Capture evidence that demonstrates the analytical workflow without publishing recoverable credentials.

## Exact Evidence Set

1. `01-rainbowcrack-charset-analysis.png` — charset inspection/output used to evaluate the laboratory password requirements.
2. `02-md5-rainbow-table-generation.png` — evidence that the MD5 rainbow-table generation stage was completed.
3. `03-sha1-rainbow-table-generation.png` — evidence that the SHA-1 rainbow-table generation stage was completed.
4. `04-rainbow-table-sorting.png` — evidence of the table-sorting stage.
5. `05-hash-analysis-result.png` — controlled hash-analysis/recovery output; redact or replace any recovered plaintext passwords before public publication.
6. `06-password-policy-assessment.png` — evidence of the security assessment comparing observed password results against the laboratory policy, without exposing plaintext credentials.
7. `07-lab-validation-result.png` — final 9/9 (100%) Pass result, if available.

## Sanitization

Do not publish plaintext passwords, reusable credentials, password files, private authentication material, or unnecessary hashes. The purpose of the public evidence is to demonstrate the security-analysis workflow and defensive conclusion, not to disclose credentials.