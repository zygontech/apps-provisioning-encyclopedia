# The Auto-Provisioning Encyclopedia

This repository is an inventory of auth and provisioning methods of all public web applications (aka SaaS, Cloud Apps etc).

## Why we need this?

### The dream of automatic provisioning for web apps

You're in IT or Security, your team is growing, you're starting to imagine a world where all your new teammates onboarding and offboarding is automated, but you are asking yourself:

- How do I automate provisioning and deprovisioning of accounts on the apps we use?
- Is Okta / Jumpcloud / _Insert IdP provider here_ not made for that?
- Do my apps support auto-provisioning? what about auto-deprovisioning?
- Do my apps provide an API for provisioning?
- Why is provisioning tied to SSO?
- Do I need to pay for SSO? For provisioning?

Guess what, everyone wonders the same thing and there is not a definitive place to know what you can do with your apps... until now!

### It's a trap!

If you're like most of us and you do your research, you will quickly realize that it's a trap:

- Most apps don't support automatic provisioning
- When supported, automatic provisioning mostly creates the account but does not handle role / workspace access
- Even less apps support automatic deprovisioning
- If you're a Google Workspace customer, you're looking at purchasing another Identity Provider to support SCIM
- Each app vendor make you pay for SAML SSO as part of their Enterprise plan

The realization flow typically goes like this:

- You want to do automatic provisioning
- You purchase a new IdP (e.g. Okta, Jumpcloud)
- You upgrade your licences on your most important apps (10-30)
- You deploy SAML SSO on these apps
- With Just-In-Time provisioning it automatically creates an account on most of these apps
- To make onboarding work, you need to create onboarding tasks templates for each app to properly set permissions and workspace access
- Automatic offboarding is nowhere to be seen

In conclusion, you have spent cash on a new IdP ($$), spent cash upgrading your apps licences ($$$$$$), have deployed SAML SSO which was not your goal, and you still end up with most your applications provisioning not automated: manual tasks and templates for apps with incomplete provisioning or no provisioning automation, and zero solution for offboarding and closing accounts automatically.

### This encyclopedia speeds up your research

The goal of this encyclopedia is to speed up your research drastically when looking for automated provisioning options for your apps, thus allowing you to quickly figure out the ROI of your plan.

## How it works

Upon applying changes to the `database.csv` a Github Action automatically transforms the content of the CSV into individual YAML files used to generate the pages of the Encyclopedia.

## Contributing

Missing an app? Wrong info?

Anyone can contribute! Simply create a Pull Request against the database.csv

## Creators and maintainers

This project has been created by the team at Zygon. Feel free to reach out if you want to become an official maintainer! contact@zygon.tech

### About Zygon

![Zygon Logo](https://zygon-public-resources.s3.eu-west-3.amazonaws.com/zygon_logo_350_82.png "Zygon Logo")
[Zygon](https://www.zygon.tech/) was founded in 2023 to make identity governance a breeze for IT and security professionals struggling with SaaS Sprawl and compliance.
Modern IT and Security teams use Zygon to govern cloud identities at scale. Access reviews, account (de)provisioning and overall identity lifecycle operations are automated for all their applications.
