export const terms = {
  title: "Terms & Conditions",
  subtitle: "of Use",
  effective: "Effective Date: July 1, 2025  |  Version 1.0  |  India",
  sections: [
    {
      id: "preamble",
      heading: "About These Terms",
      content: `Please read these Terms and Conditions of Use ("Terms") carefully before registering on or using the Wellona mobile application ("App", "Platform", "we", "us", "our"). These Terms constitute a legally binding agreement between you ("User", "you", "your") and the company operating Wellona. By downloading, installing, registering on, or using the App, you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, you must immediately cease using the App.

Wellona is a paid voice-calling platform that connects registered male Customers with registered female Providers (Experts) for personal wellness conversations. Calls are charged on a per-minute basis, deducted from a pre-loaded wallet. Wellona does not employ Providers — they are independent users of the platform.`,
    },
    {
      id: "definitions",
      heading: "1. Definitions",
      content: `For the purposes of these Terms, the following definitions apply:`,
      bullets: [
        '"Customer" means a registered male user who initiates and pays for calls with Providers.',
        '"Provider" or "Expert" means a registered female user who receives calls and earns from them.',
        '"Wallet" means the in-app prepaid balance maintained on behalf of a Customer, topped up exclusively through Google Play In-App Purchases.',
        '"Session" or "Call" means a real-time voice call initiated by a Customer with a Provider through the App.',
        '"Per-Minute Rate" means the charge deducted from the Customer\'s Wallet for each minute or partial minute of a Session.',
        '"Payout" means the transfer of a Provider\'s accumulated earnings to their registered bank/UPI account.',
      ],
    },
    {
      id: "eligibility",
      heading: "2. Acceptance & Eligibility",
      content: "By using the App, you represent and warrant that:",
      bullets: [
        "You are at least 18 years of age. The App is strictly for adults. Wellona reserves the right to immediately terminate any account found to belong to a minor.",
        "You are legally competent to enter into a binding contract under the laws of your jurisdiction.",
        "All information you provide during registration is truthful, current, accurate, and complete.",
        "You will keep your account credentials confidential and are solely responsible for all activity under your account.",
        "Your use of the App does not violate any law applicable to you.",
      ],
    },
    {
      id: "registration",
      heading: "3. Account Registration & Security",
      content: `Accounts are created using your mobile phone number, verified by one-time password (OTP). You may also register via supported third-party authentication methods (e.g., Firebase Phone Auth or Truecaller SDK) where available.

You agree to provide accurate and complete registration information and promptly update it if it changes. You must not share your account with any third party. Notify us immediately at ayaazatom@gmail.com if you suspect unauthorised access. Wellona will never ask for your password.`,
    },
    {
      id: "wallet",
      heading: "4. Customer Wallet & In-App Purchases",
      subsections: [
        { title: "4.1  Wallet Top-Up", text: "Customers add funds to their Wallet exclusively through Google Play In-App Purchases (\"IAP\"). All purchases are subject to Google Play's terms. Once credited, purchases are non-refundable except as expressly required by applicable law or Google Play policy." },
        { title: "4.2  Per-Minute Billing", text: "Your Wallet balance is debited for each Session at the applicable Per-Minute Rate displayed before the call begins. Billing starts when the Provider accepts the call and ends when either party disconnects. Partial minutes are billed as full minutes." },
        { title: "4.3  Insufficient Balance", text: "If your Wallet balance falls below the minimum required to sustain a call, the Session may be automatically terminated. Wellona is not liable for calls interrupted due to insufficient balance." },
        { title: "4.4  No Cash Withdrawal by Customers", text: "Customer Wallet balances cannot be withdrawn as cash or transferred. Unused balance has no monetary value outside the App." },
        { title: "4.5  Pricing Changes", text: "Wellona may update Per-Minute Rates at any time. Changes take effect for Sessions initiated after the update. Continued use constitutes acceptance." },
      ],
    },
    {
      id: "payouts",
      heading: "5. Provider Earnings & Payouts",
      subsections: [
        { title: "5.1  Earning Model", text: "Providers earn a share of the per-minute revenue from Customer calls as specified in the Provider Dashboard. Wellona retains a platform service fee from each transaction." },
        { title: "5.2  Payout Eligibility", text: "Providers may request a Payout once per calendar day. Minimum: ₹1,000. Maximum per day: ₹10,000. Account must be verified and in good standing. A valid UPI ID or bank account linked to a PAN-verified identity must be on file." },
        { title: "5.3  Tax Deducted at Source (TDS)", text: "All Payouts are subject to TDS deduction as mandated by the Income Tax Act, 1961. Wellona shall issue Form 16A / TDS certificates as required by law." },
        { title: "5.4  UPI & Bank Details", text: "Providers are responsible for the accuracy of their UPI ID or bank account details. UPI details may be updated no more than once every 30 days." },
        { title: "5.5  Payout Processing Time", text: "Payouts are processed within 1–3 business days from approval. Processing times may be extended during public holidays, banking outages, or compliance reviews." },
      ],
    },
    {
      id: "conduct",
      heading: "6. Call Conduct & Community Standards",
      content: "All Sessions must be conducted lawfully and in good faith. The following are strictly prohibited:",
      bullets: [
        "Sharing personal contact information (phone numbers, social media handles, addresses) during or in connection with a Session.",
        "Soliciting, arranging, or facilitating any transaction or payment outside the App.",
        "Any sexual, explicit, obscene, or indecent communication.",
        "Harassment, bullying, intimidation, threats, or abusive language of any kind.",
        "Impersonating any person, including other users or Wellona staff.",
        "Sharing OTPs, financial credentials, or sensitive personal information.",
        "Recording Sessions without explicit consent of all parties.",
        "Using the App for any unlawful purpose.",
      ],
    },
    {
      id: "prohibited",
      heading: "7. Prohibited Content & Zero-Tolerance Policies",
      content: "The following categories attract immediate account termination and may be reported to law enforcement:",
      bullets: [
        "Any content that sexually exploits, grooms, endangers, or involves minors in any way whatsoever.",
        "Content that promotes, incites, or glorifies violence, terrorism, hate speech, or discrimination.",
        "Content designed to defraud, deceive, or financially exploit any user.",
        "Distribution of malware, spyware, or any harmful code.",
        "Any attempt to reverse-engineer, scrape, or extract data from the App.",
      ],
      content2: "Wellona complies with the Information Technology Act, 2000, IT (Intermediary Guidelines) Rules 2021, Bharatiya Nyaya Sanhita 2023, POCSO Act 2012, and all applicable Indian laws.",
    },
    {
      id: "disclaimer",
      heading: "8. Platform Role, Disclaimer & Liability",
      subsections: [
        { title: "8.1  Intermediary", text: "Wellona is a technology intermediary. It does not screen, vet, endorse, or guarantee the quality or accuracy of any advice or information shared by any Provider. Conversations are for personal support and general wellness discussion only — not professional medical, psychological, legal, or financial advice." },
        { title: "8.2  \"As-Is\" Service", text: "The App and all services are provided on an \"as is\" and \"as available\" basis without warranty of any kind. Wellona does not warrant that the App will be uninterrupted, error-free, or free from harmful components." },
        { title: "8.3  Limitation of Liability", text: "Wellona's aggregate liability to any user shall not exceed the total amount paid by that user to Wellona in the three calendar months immediately preceding the event giving rise to the claim." },
        { title: "8.4  Mental Health Disclaimer", text: "Wellona is not a crisis intervention service. If you are experiencing thoughts of suicide or self-harm, contact emergency services immediately. India: iCall – 9152987821 | Vandrevala Foundation – 1860-2662-345." },
      ],
    },
    {
      id: "termination",
      heading: "9. Suspension & Termination",
      content: "Wellona may suspend or permanently terminate your account, with or without notice, if you:",
      bullets: [
        "Breach any provision of these Terms.",
        "Provide false, misleading, or unverifiable registration data.",
        "Engage in conduct that exposes Wellona, another user, or any third party to legal liability.",
        "Fail to comply with a lawful request from a regulatory authority or court.",
        "Remain inactive for a continuous period of 12 months or more.",
      ],
    },
    {
      id: "governing",
      heading: "10. Governing Law & Dispute Resolution",
      content: "These Terms are governed by and construed in accordance with the laws of India. Any dispute shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Bengaluru, Karnataka. The arbitral award shall be final and binding.\n\nFor grievances: ayaazatom@gmail.com — acknowledged within 24 hours, resolved within 15 days.",
    },
  ],
};