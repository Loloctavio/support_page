# HayAI Labs Support Center

Public support site for HayAI Labs mobile apps. The site is built with Next.js App Router, TypeScript, and CSS modules. It provides a general support hub plus one public support page per app, suitable for App Store Connect Support URL fields.

## Public Routes

- `/support`: General support hub with app cards and the main contact email.
- `/support/[slug]`: App-specific support page generated from `lib/support-config.ts`.
- `/support/[slug]/privacy`: App-specific privacy policy page.
- `/support/[slug]/terms`: App-specific terms of service page.
- `/privacy`: Compatibility redirect to `/support/memories-archive/privacy`.
- `/terms`: Compatibility redirect to `/support/memories-archive/terms`.

## What Each App Support Page Shows

Each app added to the support config gets a public support page with:

- App title and description
- Visible support email with `mailto:` link
- What users should include when reporting an issue
- Account deletion instructions and deletion details
- Frequently asked questions
- Links to that app's Privacy Policy and Terms of Service
- Developer information, including developer name, location, platform, app version, and bundle identifier

The `/support` hub also creates an app card for each configured app with:

- Platform label
- App name
- Short description
- `View Support` link to `/support/[slug]`

## App-Specific Legal Pages

Privacy policies and terms are not global. Each app object defines its own legal content:

- `privacy`: rendered at `/support/[slug]/privacy`
- `terms`: rendered at `/support/[slug]/terms`

This matters because each mobile app may collect different data, use different services, or have different account deletion behavior. Do not reuse another app's legal text unless it actually applies.

## How To Add Another App

Add a new object to the `apps` array in `lib/support-config.ts`.

Example:

```ts
{
  slug: "new-app-slug",
  name: "New App Name",
  description: "Short description shown on the support hub card.",
  longDescription: "Longer description shown on the app support page.",
  supportEmail: SUPPORT_EMAIL,
  appVersion: "1.0.0",
  platform: "iOS",
  bundleIdentifier: "com.example.newapp",
  accountDeletionPath: "Settings > Account > Delete Account",
  accountDeletionDetails: [
    "Explain what the user must do before deletion starts.",
    "Explain what account data is removed.",
    "Mention any temporary retention only if it applies.",
  ],
  faqs: [
    {
      question: "How do I contact support?",
      answer: "Email support with your app version, device model, iOS version, and steps to reproduce the issue.",
    },
  ],
  privacy: {
    lastUpdated: "Month YYYY",
    intro: "Explain what this app-specific privacy policy covers.",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "Describe the information this specific app collects.",
        ],
      },
    ],
  },
  terms: {
    lastUpdated: "Month YYYY",
    intro: "Explain what these app-specific terms cover.",
    sections: [
      {
        title: "Use of the App",
        body: [
          "Describe the terms that apply to this specific app.",
        ],
      },
    ],
  },
}
```

After adding it:

1. The app card appears automatically on `/support`.
2. The app-specific support page is available at `/support/new-app-slug`.
3. The app-specific privacy policy is available at `/support/new-app-slug/privacy`.
4. The app-specific terms are available at `/support/new-app-slug/terms`.
5. Use `/support/new-app-slug` as the app's Support URL in App Store Connect.
6. Use the app-specific privacy URL where App Store Connect requests a Privacy Policy URL.

## Updating Contact Email

The shared support email is defined in `lib/support-config.ts`:

```ts
export const SUPPORT_EMAIL = "devloloctavio@gmail.com";
```

Change that value if the support inbox changes. Individual apps can also use a different `supportEmail` if needed.

## Verification

Run these checks before deploying:

```bash
npm run typecheck
npm run lint
npm run build
```
