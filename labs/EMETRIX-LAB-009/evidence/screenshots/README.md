# LAB-009 Evidence — Manage Certificates

Capture screenshots that demonstrate certificate lifecycle decisions and outcomes.

## Exact Evidence Set

1. `01-certification-authority-overview.png` — Certification Authority console showing the controlled CA environment without unnecessary domain identifiers.
2. `02-pending-request-approval.png` — pending-request view showing the approved certificate request; sanitize names/identifiers where unnecessary.
3. `03-pending-request-denial.png` — pending-request view showing the denied request.
4. `04-certificate-revocation-key-compromise.png` — issued-certificate/revocation result showing the Key Compromise reason without unnecessary identity details.
5. `05-certificate-revocation-change-of-affiliation.png` — issued-certificate/revocation result showing the Change of Affiliation reason without unnecessary identity details.
6. `06-certificate-unrevocation.png` — revoked-certificate view/result showing the controlled unrevocation operation.
7. `07-lab-validation-result.png` — final 4/4 (100%) Pass result, if available.

## Sanitization

Do not publish private keys, certificate private material, authentication secrets, unnecessary usernames, hostnames, domain identifiers, or other sensitive PKI information.