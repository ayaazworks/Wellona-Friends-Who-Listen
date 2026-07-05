export const privacy = {
  title: "Privacy Policy",
  subtitle: "",
  effective: "Effective Date: July 1, 2025  |  Applicable Region: India",
  sections: [
    {
      id: "preamble",
      heading: "About This Policy",
      content: `This Privacy Policy ("Policy") describes how Wellona ("we", "us", "our", "the App") collects, uses, stores, and protects personal information of users ("you", "your", "User") of the Wellona mobile application. This Policy is published in compliance with the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable Indian laws.

By downloading, installing, or using the App, you confirm that you have read and understood this Policy and expressly consent to the collection and processing of your information as described herein.

Wellona is available and operated exclusively in India. All data is collected, stored, and processed in India.`,
      warning: "⚠  IMPORTANT: Wellona is not a crisis intervention or mental health treatment service. If you are experiencing thoughts of suicide or self-harm, stop using the App immediately and contact emergency services. India: iCall – 9152987821 | Vandrevala Foundation – 1860-2662-345.",
    },
    {
      id: "consent",
      heading: "1. User Consent",
      content: `We collect, use, and process your personal information only on the basis of your explicit, informed, and voluntary consent as expressed when you register and use the App.

You may withdraw consent at any time by contacting us at ayaazatom@gmail.com. Withdrawing consent may prevent us from providing you access to the App and its services.`,
    },
    {
      id: "collect",
      heading: "2. Information We Collect",
      content: "We collect the following categories of personal and technical information:",
      subsections: [
        { title: "2.1  Account & Registration Data", text: "When you register, we collect your mobile phone number, name or nickname, date of birth, and gender. Providers additionally submit a voice sample for verification purposes." },
        { title: "2.2  Call & Session Data", text: "When a voice call takes place, we collect call metadata including call duration (in minutes), timestamps, the identities of both parties, and billing records. We do not store audio recordings of calls between Customers and Providers." },
        { title: "2.3  Financial & Transaction Data", text: "For Customers: wallet top-up amounts, Google Play transaction IDs, wallet balance, and per-minute deduction logs. For Providers: UPI ID or bank account details (linked to PAN), payout history, and TDS-related tax information." },
        { title: "2.4  Device & Technical Data", text: "We may automatically collect device identifiers, OS version, app version, IP address, session logs, and crash reports. Used solely for technical operation, security, and improvement of the App." },
        { title: "2.5  Microphone Permission", text: "The App requests microphone access to enable real-time voice calls. Microphone access is used only during active calls. We do not access the microphone at any other time." },
        { title: "2.6  Provider Voice Verification Sample", text: "Providers submit a short voice recording as part of onboarding verification. This recording is reviewed by our internal team only and is not shared with Customers. It is deleted within 30 days of account closure." },
      ],
      note: "We do not collect email addresses, photographs, social media profiles, or location data. We collect only what is strictly necessary to operate the App.",
    },
    {
      id: "usage",
      heading: "3. How We Use Your Information",
      content: "Your information is used exclusively for the following purposes:",
      bullets: [
        "Creating, verifying, and securing your account on the App.",
        "Matching Customers with available online Providers and enabling voice calls between them.",
        "Deducting per-minute charges from Customer Wallets and crediting Provider earnings accurately.",
        "Processing Google Play IAP top-ups and verifying payment confirmation.",
        "Processing Provider payout requests and complying with TDS deduction obligations under the Income Tax Act, 1961.",
        "Sending transactional notifications: OTPs, call alerts, wallet deduction confirmations, and payout status updates.",
        "Investigating and resolving user reports of misconduct, harassment, or policy violations.",
        "Detecting and preventing fraud, abuse, or unauthorised access to the App.",
        "Improving the App's performance and features using anonymised technical data.",
        "Complying with lawful orders from Indian courts, government agencies, and law enforcement authorities.",
      ],
      content2: "We do not use your data for advertising, profiling, or any purpose not listed above.",
    },
    {
      id: "no-marketing",
      heading: "4. Data We Do Not Collect or Share for Marketing",
      content: "Wellona does not:",
      bullets: [
        "Sell your personal data to any third party under any circumstances.",
        "Share your mobile number or personal details with advertisers or marketing partners.",
        "Use your call content or conversation topics for profiling, targeting, or analysis.",
        "Collect or store audio recordings of Customer–Provider calls.",
        "Share your information with third parties for promotional purposes of any kind.",
      ],
    },
    {
      id: "sharing",
      heading: "5. Data Sharing & Disclosure",
      content: "We share your personal information only in the following limited circumstances:",
      subsections: [
        { title: "5.1  Service Providers", text: "We use third-party technical providers for cloud hosting (servers in India), real-time voice communication (ZegoCloud or equivalent), push notifications (Firebase Cloud Messaging), and payment processing (Google Play billing, UPI payment partners). These providers access only data necessary for their specific function and are contractually bound to confidentiality." },
        { title: "5.2  Tax & Regulatory Compliance", text: "Provider payout and TDS data may be shared with Indian tax authorities as required under the Income Tax Act, 1961. We issue TDS certificates (Form 16A) as required by law. No Customer data is shared for this purpose." },
        { title: "5.3  Law Enforcement & Legal Process", text: "We may disclose your information to Indian law enforcement agencies, courts, or government authorities where legally required. We will disclose only the minimum information required." },
        { title: "5.4  Safety", text: "We may share information where we have a genuine, reasonable belief that there is an imminent threat to the physical safety of any person." },
      ],
      content2: "In all cases of sharing, we apply the principle of minimum necessary disclosure.",
    },
    {
      id: "sdks",
      heading: "6. Third-Party SDKs & Tools",
      content: "The App integrates the following categories of third-party tools:",
      bullets: [
        "Firebase (Google LLC) — for phone number authentication (OTP), push notifications, and crash reporting.",
        "ZegoCloud or equivalent VOIP SDK — for real-time voice call infrastructure. No audio content is retained by the SDK provider beyond the live session.",
        "Google Play Billing — for processing In-App Purchases. Payment instrument details are handled entirely by Google and are not accessible to Wellona.",
        "RevenueCat (if applicable) — for managing IAP entitlements. Only transaction identifiers and amounts are shared.",
      ],
      content2: "We do not use advertising SDKs, social media tracking pixels, or behavioural analytics tools that profile individual users.",
    },
    {
      id: "retention",
      heading: "7. Data Storage & Retention",
      content: "All data is stored on servers located in India. Specific retention periods:",
      bullets: [
        "Account data (name, phone number, gender, role): retained for the duration of your active account, plus 2 years after account closure.",
        "Call metadata and billing records: retained for 7 years to comply with financial record-keeping obligations under Indian law.",
        "Provider TDS and payout records: retained for 7 years as required under Indian tax law.",
        "Provider voice verification sample: retained for the duration of the active Provider account and deleted within 30 days of account closure.",
        "Device and technical logs: retained for a maximum of 90 days for debugging and security purposes, then automatically deleted.",
      ],
      content2: "Upon expiry of the relevant retention period, data is securely erased from our systems.",
    },
    {
      id: "security",
      heading: "8. Security Measures",
      content: `We implement reasonable and appropriate technical and organisational security measures to protect your personal information. These include encrypted data transmission (TLS/HTTPS), access controls limiting data access to authorised personnel only, regular security reviews, and secure handling of Provider bank and UPI details.

While we take every reasonable precaution, no system connected to the internet can be guaranteed completely secure. You are responsible for maintaining the confidentiality of your account credentials.`,
    },
    {
      id: "children",
      heading: "9. Children's Privacy",
      warning: "IF YOU ARE UNDER 18 YEARS OF AGE, DO NOT USE THIS APP OR SUBMIT ANY PERSONAL INFORMATION. The App is strictly for adults (18+) only.",
      content: "Wellona does not knowingly collect personal information from any person under the age of 18. If a parent or guardian becomes aware that a minor has provided us with personal information, they must contact us immediately at ayaazatom@gmail.com. We will take prompt steps to delete the information from our systems upon verified notification.",
    },
    {
      id: "rights",
      heading: "10. Your Rights",
      content: "As a User, you have the following rights in relation to your personal information:",
      subsections: [
        { title: "Right of Access", text: "You may request a summary of the personal data we hold about you at any time." },
        { title: "Right to Correction", text: "You may update inaccurate or incomplete information through your in-app profile settings or by contacting us." },
        { title: "Right to Withdraw Consent", text: "You may withdraw your consent to data processing at any time. Withdrawal will prevent us from continuing to provide the App's services to you." },
        { title: "Right to Account Deletion", text: "You may request deletion of your account and associated personal data." },
      ],
      content2: "To exercise any of these rights, contact us at ayaazatom@gmail.com. We will respond within 15 business days.",
    },
    {
      id: "deletion",
      heading: "11. Account & Data Deletion",
      content: `You may delete your Wellona account at any time through the App's settings menu. Account deletion is permanent and irreversible.

Upon account deletion: your profile information will be permanently removed from active systems; any unused Customer Wallet balance will be forfeited; outstanding Provider Payout requests will be processed subject to standard eligibility; financial and billing records required by law will be retained for the applicable statutory period.

You may also request data deletion by emailing ayaazatom@gmail.com. We will confirm receipt within 24 hours and complete the deletion within 30 days, except where retention is required by law.`,
    },
    {
      id: "notifications",
      heading: "12. Communications & Notifications",
      content: "By registering on the App, you consent to receive the following communications from us:",
      bullets: [
        "OTPs and account verification messages (via SMS).",
        "In-app notifications for call alerts, wallet deductions, and payout status.",
        "Transactional alerts relating to your account activity.",
      ],
      content2: "We do not send promotional or marketing messages. You cannot opt out of essential transactional communications (such as OTPs and call alerts) while your account remains active.",
    },
    {
      id: "updates",
      heading: "13. Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. Where changes are material, we will notify you via in-app notification at least 7 days before the changes take effect. Your continued use of the App after the effective date of any revision constitutes acceptance of the updated Policy.",
    },
    {
      id: "grievance",
      heading: "14. Grievance Officer",
      content: "In accordance with the Information Technology Act, 2000 and IT (Intermediary Guidelines) Rules, 2021, any grievance may be submitted to:",
      contact: {
        role: "Grievance Officer",
        company: "Wellona App",
        email: "ayaazatom@gmail.com",
        response: "Acknowledged within 24 hours; resolved within 15 days.",
      },
    },
    {
      id: "law",
      heading: "15. Governing Law",
      content: "This Privacy Policy is governed by and shall be construed in accordance with the laws of India. Any dispute arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.",
    },
  ],
};