export const SUPPORT_EMAIL = "devloloctavio@gmail.com";

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalContent = {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type SupportApp = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  supportEmail: string;
  appVersion: string;
  platform: "iOS";
  bundleIdentifier: string;
  accountDeletionPath: string;
  accountDeletionDetails: string[];
  faqs: FaqItem[];
  privacy: LegalContent;
  terms: LegalContent;
};

// Add future apps here to publish new support cards and app-specific pages.
export const apps: SupportApp[] = [
  {
    slug: "memories-archive",
    name: "Memories Archive",
    description: "A private photo and video memory gallery for couples.",
    longDescription:
      "Memories Archive is a private photo and video memory gallery designed for couples to save and revisit meaningful moments together.",
    supportEmail: SUPPORT_EMAIL,
    appVersion: "1.2.4",
    platform: "iOS",
    bundleIdentifier: "com.memoriesarchive.lolocochon",
    accountDeletionPath: "Settings > Danger Zone > Delete Account",
    accountDeletionDetails: [
      "The app asks you to confirm the action and re-enter your password before deletion starts.",
      "Deletes your profile and private account data.",
      "Deletes your private link code, uploaded photos, uploaded files, and associated access.",
      "Deletes calendar activities you created and clears local app caches.",
      "Unlinks your account from your partner account if you were paired.",
      "Some operational logs or backups may persist temporarily, and some information may be retained only if required by applicable law.",
    ],
    faqs: [
      {
        question: "How do I upload photos or videos?",
        answer:
          "Use the camera tab to capture a memory or choose media from your library, then upload it to your shared gallery.",
      },
      {
        question: "How do I change my profile photo?",
        answer:
          "Open Settings, tap Edit Profile, and choose a new image for your profile.",
      },
      {
        question: "How do I link with my partner?",
        answer:
          "Open the Match tab and use your partner's private link code. Paired users can then share gallery memories and calendar items.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Email support with the issue, device model, iOS version, app version, and steps so it can be reproduced.",
      },
    ],
    privacy: {
      lastUpdated: "March 2026",
      intro:
        "This policy explains how Memories Archive collects, uses, and protects information when you use the app.",
      sections: [
        {
          title: "Information We Collect",
          body: [
            "Account information such as your email address, display name, and optional profile photo.",
            "User content you upload, including photos, videos, captions, shared calendar entries, and pairing metadata.",
            "Technical and device information such as app version, device type, operating system, and basic diagnostics needed to operate the service.",
            "Notification-related information such as a push token if you allow notifications.",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "To create and manage your account and keep you signed in.",
            "To store, display, and sync your uploaded profile media, gallery media, and calendar content.",
            "To share content only with the paired user you explicitly link inside the app.",
            "To send optional service notifications such as new shared memories, new calendar plans, or pairing events.",
            "To maintain, secure, troubleshoot, and improve the app.",
          ],
        },
        {
          title: "Data Storage and Sharing",
          body: [
            "Account data, media, and shared content may be stored using Firebase services and related infrastructure used to operate the app.",
            "Gallery and calendar content linked to a pair is intended to be accessible only to the paired users involved.",
            "We do not sell personal information.",
            "Information may be disclosed if required by law, to respond to valid legal requests, or to protect the security and integrity of the service.",
          ],
        },
        {
          title: "Retention, Deletion, and Your Choices",
          body: [
            "You are responsible for the content you upload and choose to share.",
            "You can delete your account from the app settings flow. Deletion is intended to remove your account data and associated access, though some operational logs or backups may persist temporarily.",
            "You can revoke device permissions such as camera, photo library, or notifications through your device settings, but some features may no longer work as expected.",
            "The app is not directed to children under 13.",
            "We may update this policy from time to time and will update the last updated date when material changes are made.",
          ],
        },
      ],
    },
    terms: {
      lastUpdated: "March 2026",
      intro:
        "By using Memories Archive, you agree to these terms governing access to and use of the app.",
      sections: [
        {
          title: "Use of the App",
          body: [
            "Memories Archive lets users create accounts, upload profile media, store memories, link with a partner, and manage shared calendar content.",
            "You must use the app lawfully and in a way that does not violate the rights, privacy, or safety of others.",
          ],
        },
        {
          title: "Accounts and Content",
          body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for activity that occurs under your account.",
            "By uploading content, you represent that you own it or have the necessary rights and permission to store and share it through the service.",
            "You keep ownership of your content, but you grant the app the limited rights needed to host, process, sync, and display it in order to operate the service.",
          ],
        },
        {
          title: "Prohibited Uses and Availability",
          body: [
            "You must not upload illegal, abusive, infringing, sexually exploitative, malicious, or rights-violating content, or use the service to harass, impersonate, or harm others.",
            "You must not attempt to bypass app security, interfere with the service, scrape unauthorized data, or misuse shared content belonging to another user.",
            "We may remove content, restrict access, suspend accounts, or take other action if these terms or applicable law are violated.",
            "We do not guarantee uninterrupted availability and may change, suspend, or discontinue features at any time.",
          ],
        },
        {
          title: "Liability, Termination, and Changes",
          body: [
            "The app is provided \"as is\" and \"as available\" without warranties to the extent permitted by applicable law.",
            "To the extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages resulting from use of the service.",
            "We may suspend or terminate access to the app if necessary for security, maintenance, legal compliance, or violations of these terms.",
            "We may update these terms from time to time, and continued use of the app after changes take effect means you accept the updated terms.",
          ],
        },
      ],
    },
  },
];

export function getAppBySlug(slug: string) {
  return apps.find((app) => app.slug === slug);
}
