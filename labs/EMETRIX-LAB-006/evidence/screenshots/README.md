# LAB-006 Evidence — Configure Security Appliance Access

Capture only sanitized screenshots that prove administrative-security configuration.

## Exact Evidence Set

1. `01-pfsense-user-management-overview.png` — User Manager view showing the administrative account context without passwords.
2. `02-admin-account-security.png` — admin-account configuration showing the password-management action/result without revealing the password.
3. `03-dedicated-admin-user.png` — dedicated user account and appropriate administrative group membership; redact unnecessary identity details if needed.
4. `04-session-timeout-20-minutes.png` — pfSense session timeout configured to 20 minutes.
5. `05-webconfigurator-anti-lockout.png` — webConfigurator/HTTP anti-lockout configuration as actually observed in the lab.
6. `06-lab-validation-result.png` — final 4/4 (100%) Pass result, if available.

## Sanitization

Never publish passwords, usernames when unnecessary, internal IP addresses, hostnames, or other authentication/security-sensitive identifiers. The anti-lockout setting must be documented as a laboratory observation, not automatically presented as a production recommendation.