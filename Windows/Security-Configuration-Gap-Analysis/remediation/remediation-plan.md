# Remediation Plan

## Objective

Reduce or formally accept configuration deviations identified during security baseline comparison.

## Controlled Remediation Workflow

| Phase | Action | Outcome |
|---|---|---|
| 1 | Validate baseline | Confirm the approved security requirement |
| 2 | Validate deviation | Confirm the effective setting and evidence |
| 3 | Risk assessment | Determine likelihood, impact, and compensating controls |
| 4 | Change approval | Obtain authorization before production changes |
| 5 | Remediation | Apply the approved configuration |
| 6 | Verification | Re-run baseline comparison |
| 7 | Documentation | Record evidence, owner, date, and result |
| 8 | Exception handling | Document approved deviations that remain |

## Control-Specific Actions

### GAP-001 — LockoutBadCount

- Verify the organization's approved account-lockout requirement.
- Determine whether the effective value of `0` is intentional.
- Assess exposure to password-guessing and brute-force attacks.
- If remediation is required, apply the approved value using controlled configuration management.
- Re-run the baseline comparison and retain evidence.

### GAP-002 — MinimumPasswordLength

- Verify the baseline value captured during the lab.
- Compare it with the effective value of `7`.
- Check current organizational password policy and identity requirements.
- Apply an approved configuration if a deviation is not justified.
- Re-test and document the final state.

## Governance Considerations

Security baselines should be tailored to the organization's risk profile and operational requirements. A secure configuration is one that is justified, controlled, measurable, and supported by evidence—not merely one that matches a generic template.
