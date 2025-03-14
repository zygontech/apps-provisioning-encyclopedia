# The Auto-Provisioning Atlas

This repository is an inventory of authentication and provisioning methods for all public web applications (SaaS, Cloud Apps, etc.).

Link to website version: [The Auto-Provisioning Atlas at autoprovisioningatlas.zygon.tech](https://autoprovisioningatlas.zygon.tech/)

![The Auto-Provisioning Atlas](https://zygon-public-resources.s3.eu-west-3.amazonaws.com/auto_provisioning_atlas.png?)

## Why Do We Need This?

### The Dream of Automatic Provisioning for Web Apps

You're in IT or Security. Your team is growing. You dream of automating onboarding and offboarding, but you're asking yourself:

- How do I automate account provisioning and deprovisioning for our apps?
- Isn't Okta, JumpCloud, or [insert IdP provider here] supposed to handle this?
- Do our apps support **auto-provisioning**? What about **auto-deprovisioning**?
- Do our apps provide an **API for provisioning**?
- Why is **provisioning tied to SSO**?
- Do we need to **pay extra for SSO or provisioning**?

Guess what? Everyone wonders the same thing. But until now, there hasn't been a definitive place to check what’s possible with your apps.

### It's a Trap!

If you’re like most of us, your research will quickly reveal the trap:

- ❌ **Most apps don’t support automatic provisioning.**
- ❌ When supported, it often only creates accounts. **Permissions/workspace access still require manual steps.**
- ❌ Even fewer apps support **automatic deprovisioning**.
- ❌ If you use **Google Workspace**, you may need to buy another **IdP for SCIM**.
- ❌ Many apps bundle **SAML SSO** with expensive **Enterprise plans**.

#### The Realization Flow:

1. You want automatic provisioning.
2. You purchase a new IdP (e.g., Okta, JumpCloud).
3. You **upgrade your app licenses** (10–30 apps).
4. You **deploy SAML SSO** for these apps.
5. **Just-In-Time (JIT) provisioning** creates accounts for most apps.
6. To make onboarding work, you **still need manual onboarding tasks** to set permissions and access.
7. **Automatic offboarding is non-existent.**

### The Result?

- 💸 **New IdP costs**
- 💸 **Upgraded app licenses**
- 🔄 **SSO setup (which wasn’t your goal)**
- ⏳ **Manual onboarding tasks remain**
- ❌ **No real automation for deprovisioning**

### The True ROI of Provisioning Automation

This project **drastically speeds up** your research into auto-provisioning options for your apps, helping you quickly assess the **true ROI** of automating provisioning for your organization.

## How It Works

Each app entry follows a simple format. You can check existing references in the `database.csv` file.

### **App Data Format (CSV → YAML)**

Each app includes the following fields:

```yaml
Name: *any string*
Domain: *any string*
Google OIDC: *TRUE/FALSE/UPGRADE/UNKNOWN*
Microsoft OIDC: *TRUE/FALSE/UPGRADE/UNKNOWN*
SAML: *TRUE/FALSE/UPGRADE/UNKNOWN*
JIT: *TRUE/FALSE/UPGRADE/UNKNOWN*
SCIM Provisioning: *TRUE/FALSE/UPGRADE/UNKNOWN*
SCIM Deprovisioning: *TRUE/FALSE/UPGRADE/UNKNOWN*
Public Provisioning API: *TRUE/FALSE/UPGRADE/UNKNOWN*
Compatible Google SCIM: *TRUE/FALSE*
Sources:
  - *any URL string*
```

> **Note:**
> When you update database.csv, a GitHub Action automatically converts the CSV into individual YAML files, generating the Encyclopedia pages.

### Understanding the Values

- **TRUE** → The feature is available **at no cost**.
- **FALSE** → The feature is not available **at any cost**.
- **UPGRADE** → The feature is available but **requires a license upgrade**.
- **UNKNOWN** → The feature is **not documented**.

### Google SCIM Compatibility (TRUE/FALSE)

Google Workspace SCIM support is limited to certain apps.
Only the apps listed in Google’s [official documentation](https://support.google.com/a/topic/10018788) are compatible.
This differs from other IdPs, which support any SCIM server, so we singled it out for quick access.

## Contributing

Missing an app? Found incorrect info?

Anyone can contribute! 🎉

- Edit database.csv and follow the format.
- Submit a Pull Request with your changes.

## Creators and maintainers

This project has been created by the team at Zygon. Feel free to reach out if you want to become an official maintainer! contact@zygon.tech

### About Zygon

![Zygon Logo](https://zygon-public-resources.s3.eu-west-3.amazonaws.com/zygon_logo_350_82.png "Zygon Logo")

[Zygon](https://www.zygon.tech/) was founded in 2023 to make identity governance a breeze for IT and security professionals struggling with SaaS Sprawl and compliance.
Modern IT and Security teams use Zygon to govern cloud identities at scale. Access reviews, account (de)provisioning and overall identity lifecycle operations are automated for all their applications.
