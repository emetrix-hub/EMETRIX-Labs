# Security Configuration Gap Findings

## Assessment Scope

Windows Server 2019, version 1809, OS Build 17763, assessed against `MSFT-Win10-v1809-RS5-WS2019-FINAL` using Microsoft Policy Analyzer.

## Finding Register

| ID | Control | Baseline | Effective State | Status |
|---|---|---:|---:|---|
| GAP-001 | `LockoutBadCount` | 9 | 0 | Deviation |
| GAP-002 | `MinimumPasswordLength` | Verify from captured baseline evidence | 7 | Requires verified comparison |

## GAP-001 — LockoutBadCount

The effective state differs from the selected security baseline. The configuration should be reviewed against the organization's approved authentication policy before any change is made.

**Evidence:** `evidence/04-effective-state-comparison.png`

## GAP-002 — MinimumPasswordLength

The effective state is 7. The baseline value must be recorded from the Policy Analyzer baseline view captured during the lab. No assumed baseline value should be used in the final assessment.

**Evidence:** `evidence/03-baseline-policy-view.png` and `evidence/04-effective-state-comparison.png`

## Risk Assessment Note

A baseline deviation is not, by itself, evidence of compromise or a confirmed vulnerability. Risk depends on exposure, threat model, business impact, compensating controls, and approved organizational requirements.

## Recommended Disposition

- Validate the approved baseline.
- Determine whether the deviation is intentional.
- Check for an approved exception.
- Assess security risk.
- Remediate through change management where required.
- Re-run Policy Analyzer to verify the resulting state.
