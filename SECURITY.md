# Security notes

This is a static, dependency-free contact site.

Included hardening:
- Strict Content-Security-Policy in the HTML.
- `frame-ancestors 'none'` in CSP to reduce clickjacking risk where CSP headers are honored.
- `object-src 'none'` and `form-action 'none'`.
- No forms, databases, cookies, localStorage, third-party JavaScript, or API endpoints.
- External links use HTTPS and `rel="noopener noreferrer"`.
- Responsive design with no external font/CDN dependency.

Important:
A website cannot honestly be guaranteed to be "against every vulnerability." Server-side
security headers must also be configured by the hosting provider, and any future backend,
login, database, upload, or API must be secured separately.

Recommended production response headers:
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'none'; font-src 'self'; upgrade-insecure-requests
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
Strict-Transport-Security: max-age=31536000; includeSubDomains


## Image protection
`sayed.png` is displayed with drag/context-menu deterrence. This is not true access
control: because the image is sent to the visitor's browser, a determined visitor can
still retrieve it from browser cache/network tools or take a screenshot.

For genuine protection, keep the original image off the public web and serve only a
lower-resolution/watermarked derivative, or require authenticated server-side access.
