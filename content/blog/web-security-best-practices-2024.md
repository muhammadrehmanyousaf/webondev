## Why Web Security Is a Moving Target

Web applications are attacked continuously, and the attack surface keeps growing: richer client-side JavaScript, sprawling third-party dependencies, API-first backends, and identity flows that span multiple services. Security is not a feature you bolt on at the end — it is a property you design in and verify continuously.

This guide distills the practices that matter most for modern web applications, grounded in the [OWASP Top 10](https://owasp.org/www-project-top-ten/), [MDN web security documentation](https://developer.mozilla.org/en-US/docs/Web/Security), and [web.dev](https://web.dev/secure/). It is written for defenders: developers, reviewers, and operators who want to ship resilient applications.

## The OWASP Top 10: Themes That Still Define Risk

The OWASP Top 10 is the industry-standard awareness document for web application risk. Rather than memorizing positions, focus on the recurring themes that drive most real-world breaches:

- **Broken Access Control** — users acting outside their intended permissions. This has consistently ranked as the most prevalent category. Enforce authorization on the server for every request, deny by default, and never trust the client to hide a privileged action.
- **Cryptographic Failures** — weak, missing, or misused cryptography exposing sensitive data. Encrypt data in transit and at rest, and avoid rolling your own crypto.
- **Injection** — untrusted input changing the meaning of a command or query (SQL, NoSQL, OS, LDAP). Use parameterized interfaces.
- **Insecure Design** — flaws baked into the architecture before a line of code is written. Threat-model early.
- **Security Misconfiguration** — default credentials, verbose errors, missing hardening, open cloud buckets.
- **Vulnerable and Outdated Components** — running dependencies with known flaws.
- **Identification and Authentication Failures** — weak credential handling, broken session management.
- **Software and Data Integrity Failures** — trusting unsigned updates, plugins, or CI/CD artifacts.
- **Security Logging and Monitoring Failures** — you cannot respond to what you cannot see.
- **Server-Side Request Forgery (SSRF)** — coercing the server into making attacker-controlled requests.

OWASP also publishes a dedicated [API Security Top 10](https://owasp.org/www-project-api-security/), which is essential reading for backends that serve mobile and single-page apps.

## Cross-Site Scripting (XSS) and Output Encoding

XSS happens when attacker-controlled data is interpreted as executable code in a victim's browser. It remains one of the most common client-side flaws.

The single most important defense is **context-aware output encoding**: encode data based on where it lands — HTML body, HTML attribute, JavaScript, URL, or CSS contexts each require different escaping.

- Prefer frameworks that auto-escape by default (React, Angular, Vue). Treat `dangerouslySetInnerHTML`, `v-html`, and `[innerHTML]` as red flags requiring justification.
- Never build HTML by string concatenation with user input.
- Sanitize rich HTML (e.g., from a WYSIWYG editor) with a vetted library such as DOMPurify before insertion.
- Avoid DOM XSS sinks like `eval()`, `element.innerHTML`, and `document.write()` with untrusted data.

A strong [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is your defense-in-depth backstop. Modern CSPs favor **nonces or hashes** over allowlisting host domains:

```http
Content-Security-Policy: default-src 'self';
  script-src 'self' 'nonce-r4nd0m';
  object-src 'none';
  base-uri 'none';
  require-trusted-types-for 'script'
```

[Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) locks down dangerous DOM injection sinks at the browser level and is one of the strongest anti-DOM-XSS controls available today.

## Cross-Site Request Forgery (CSRF)

CSRF tricks an authenticated user's browser into submitting a request they did not intend. The defenses have matured:

- **SameSite cookies.** Set `SameSite=Lax` (a sensible default for most apps) or `SameSite=Strict` for the most sensitive cookies. This blocks most cross-site cookie-driven requests automatically.
- **Anti-CSRF tokens.** Use synchronizer tokens or the double-submit cookie pattern for state-changing requests, especially where SameSite alone is insufficient.
- **Verify Origin/Referer** headers for sensitive endpoints as an additional check.

Cookie flags should be explicit:

```http
Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax; Path=/
```

For pure token-based APIs that send credentials in an `Authorization` header rather than cookies, classic CSRF generally does not apply — but you then inherit the token-storage and XSS concerns discussed below.

## Authentication, Sessions, and JWT

Authentication failures are routinely exploited. Build on proven primitives rather than custom schemes.

**Passwords and credentials**

- Hash passwords with a memory-hard algorithm: **Argon2id** (preferred), **scrypt**, or **bcrypt**. Never use fast hashes like MD5 or SHA-256 alone for passwords.
- Enforce reasonable length over arbitrary complexity, and check candidate passwords against known-breached lists.
- Offer (and encourage) **multi-factor authentication** — phishing-resistant options like passkeys/WebAuthn are now widely supported and should be the default for high-value accounts.
- Rate-limit and add progressive delays on login to slow credential stuffing.

**Sessions**

- Prefer server-side sessions with opaque, random identifiers stored in `HttpOnly; Secure; SameSite` cookies.
- Regenerate the session ID on login and privilege change to prevent fixation.
- Enforce idle and absolute timeouts, and invalidate sessions server-side on logout.

**JWTs — handle with care**

JSON Web Tokens are useful but easy to misuse:

- Always pin the algorithm server-side. Reject `alg: none` and never let the token header dictate the verification algorithm.
- Keep access tokens short-lived; use rotating, revocable refresh tokens.
- Validate `iss`, `aud`, and `exp` claims on every request.
- Do not store JWTs in `localStorage` if you can avoid it — it is readable by any XSS payload. Prefer `HttpOnly` cookies for browser sessions.
- Remember that a self-contained JWT cannot be trivially revoked; maintain a denylist or keep token lifetimes short.

## Secure HTTP Headers

Security headers are cheap, high-leverage hardening. At minimum, configure:

| Header | Purpose |
| --- | --- |
| `Content-Security-Policy` | Restrict script/resource sources; primary XSS defense-in-depth |
| `Strict-Transport-Security` | Force HTTPS and prevent protocol downgrade |
| `X-Content-Type-Options: nosniff` | Stop MIME-type sniffing |
| `Referrer-Policy` | Limit referrer leakage (e.g., `strict-origin-when-cross-origin`) |
| `Cross-Origin-Opener-Policy` | Isolate your browsing context window |
| `Cross-Origin-Resource-Policy` | Control who can embed your resources |
| `Permissions-Policy` | Disable unused browser features (camera, geolocation, etc.) |

Note that `X-Frame-Options` is superseded by the CSP `frame-ancestors` directive; use `frame-ancestors 'none'` (or an explicit allowlist) to prevent clickjacking.

A solid HSTS header, once you are confident in full HTTPS coverage:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Validate your configuration against tools like the [Mozilla Observatory](https://developer.mozilla.org/en-US/observatory) and MDN's header references.

## Input Validation

Validation and output encoding solve different problems and you need both. Validation reduces the attack surface; encoding neutralizes whatever still gets through.

- Validate on the **server** — client-side validation is a UX feature, not a security control.
- Prefer **allowlists** (accept known-good shapes) over denylists (block known-bad), which attackers reliably bypass.
- Validate type, length, format, and range. Use schema validation (e.g., JSON Schema, Zod, Pydantic) at trust boundaries.
- Canonicalize and decode input once before validating to avoid bypasses through double-encoding.
- Treat file uploads as hostile: check content type, cap size, store outside the web root, and never execute uploaded content.

## SQL and NoSQL Injection

Injection is prevented by **separating code from data**, not by escaping strings.

**SQL — always parameterize:**

```js
// Safe: parameterized query, input can never alter the query structure
const user = await db.query(
  'SELECT id, email FROM users WHERE email = $1',
  [submittedEmail]
);
```

Avoid string interpolation into queries. Use an ORM or query builder, but understand that ORMs can still emit raw SQL — review any `raw()` escape hatches. Apply least-privilege database accounts so a compromised query cannot drop tables or read unrelated data.

**NoSQL is not immune.** Document stores are vulnerable to operator injection when untrusted input becomes a query object. For example, a JSON body of `{"password": {"$ne": null}}` can bypass a naive MongoDB login check. Defenses:

- Cast and validate inputs to expected primitive types before querying.
- Reject query objects where you expect scalars.
- Disable or sanitize query operators (`$where`, `$ne`, etc.) coming from user input.

## Secrets Management

Hardcoded secrets in source control are a perennial cause of breaches.

- Never commit credentials, API keys, or private keys. Add scanning (e.g., gitleaks, GitHub secret scanning) to CI and pre-commit hooks.
- Load secrets from environment variables or a dedicated **secrets manager** (HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, Azure Key Vault).
- Rotate secrets regularly and immediately after suspected exposure.
- Scope keys to least privilege; use short-lived, workload-identity credentials over long-lived static keys where possible.
- Keep secrets out of client bundles, logs, and error messages — anything shipped to the browser is public.

## Dependency and Supply-Chain Security

Most application code today is third-party code. The supply chain is now a primary attack vector.

- Maintain a lockfile and **pin dependency versions**; review changes to the lockfile in pull requests.
- Run automated scanning: `npm audit`, GitHub Dependabot, OWASP Dependency-Check, or Snyk. Patch known-vulnerable components promptly.
- Generate a **Software Bill of Materials (SBOM)** so you can quickly determine whether a newly disclosed vulnerability affects you.
- Verify integrity: use Subresource Integrity (`integrity="sha384-..."`) for third-party scripts loaded from CDNs.
- Be cautious with install scripts, typosquatted package names, and dependency confusion; prefer scoped/internal registries for private packages.
- Sign and verify build artifacts; protect your CI/CD pipeline as carefully as production — it has the keys to everything.

## HTTPS and TLS

Transport security is the floor, not the ceiling.

- Serve **all** traffic over HTTPS and redirect HTTP to HTTPS. Mixed content undermines the whole effort.
- Use TLS 1.2 or **TLS 1.3**; disable legacy protocols (SSL 3.0, TLS 1.0/1.1) and weak cipher suites.
- Automate certificate issuance and renewal (e.g., Let's Encrypt / ACME) so certificates never silently expire.
- Enable HSTS once HTTPS coverage is complete, and consider HSTS preloading for your apex domain.
- Prefer modern key exchange with forward secrecy. Test your endpoint with [SSL Labs](https://www.ssllabs.com/ssltest/) or `testssl.sh`.

## Practical Hardening Checklist

Use this as a pre-launch and periodic review gate:

- [ ] All traffic forced over HTTPS; HSTS enabled with `includeSubDomains`.
- [ ] Server-side authorization enforced on every endpoint; deny by default.
- [ ] Passwords hashed with Argon2id/scrypt/bcrypt; MFA/passkeys available.
- [ ] Sessions are `HttpOnly; Secure; SameSite`, regenerated on login, with timeouts.
- [ ] JWT algorithm pinned; `alg: none` rejected; claims validated; tokens short-lived.
- [ ] Output is context-encoded; a nonce/hash-based CSP is deployed.
- [ ] CSRF protection via SameSite cookies plus tokens on state-changing actions.
- [ ] All queries parameterized; NoSQL inputs type-checked; least-privilege DB accounts.
- [ ] Server-side input validation with allowlists and schema enforcement.
- [ ] Security headers configured and validated externally.
- [ ] No secrets in source; secrets manager in use; scanning in CI.
- [ ] Dependencies pinned, scanned, and patched; SBOM generated; SRI on CDN assets.
- [ ] CI/CD pipeline secured; build artifacts signed.
- [ ] Logging and monitoring capture security events; alerts are actionable.
- [ ] Error responses are generic; stack traces never reach users.

## Bringing It Together

Strong web security is layered. No single control — not CSP, not parameterized queries, not MFA — is sufficient alone. The goal is **defense in depth**: assume any one layer can fail and ensure the next one limits the blast radius.

Treat security as a continuous practice. Threat-model new features, review dependencies on a schedule, keep an inventory of what you run, and test your defenses with automated scanning and periodic penetration testing. The OWASP, MDN, and web.dev resources linked throughout are free, current, and worth bookmarking — they evolve as the threat landscape does, and so should your applications.
