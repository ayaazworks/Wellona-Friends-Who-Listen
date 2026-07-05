export const refund = {
  title: "Refund Policy",
  subtitle: "",
  effective: "Effective Date: July 1, 2025  |  Applicable Region: India",
  sections: [
    {
      id: "preamble",
      heading: "About This Policy",
      content: `This Refund Policy ("Policy") governs requests for refunds by registered Customers on the Wellona mobile application. This Policy applies only to Customer wallet top-up payments made through Google Play In-App Purchases ("IAP"). It does not apply to Provider (Expert) earnings or payout disputes.`,
      warning: "⚠  IMPORTANT: Wallet credits on Wellona are prepaid and non-refundable as a general rule. Refunds are available only in the specific, limited circumstances described in this Policy.",
    },
    {
      id: "how-it-works",
      heading: "1. How the Wallet Works",
      content: "When you top up your Wellona Wallet, the amount is credited to your in-app balance via Google Play IAP. Calls are charged at the applicable per-minute rate, deducted in real time. Billing begins when a Provider accepts your call and ends when either party disconnects. Partial minutes are billed as full minutes.\n\nYour Wallet balance has no monetary value outside the App, cannot be transferred, and cannot be withdrawn as cash.",
    },
    {
      id: "general-rule",
      heading: "2. General Rule: Purchases Are Final",
      content: "All wallet top-up purchases made through Google Play are final and non-refundable once credited to your Wallet, except in the specific circumstances listed in Section 3.",
      redBox: "✕  Call connected successfully — no refund is available regardless of conversation outcome, quality of advice, or personal dissatisfaction.",
      content2: "The following situations do not qualify for a refund under any circumstances:",
      bullets: [
        "You are dissatisfied with the advice, conversation content, or the Provider's approach.",
        "You ran out of Wallet balance sooner than expected.",
        "A call was shorter than you expected because you or the Provider ended it.",
        "You forgot to disconnect and were charged for longer than intended.",
        "You changed your mind about using the App after making a purchase.",
        "Technical difficulties caused by your own device, internet connection, or mobile network.",
      ],
    },
    {
      id: "eligible",
      heading: "3. Circumstances Where a Refund May Be Considered",
      content: "Refunds are considered on a case-by-case basis only in the following specific situations. Submission of a refund request does not guarantee approval.",
      subsections: [
        {
          title: "3.1  Call Never Connected",
          text: "If your Wallet was debited but the call never connected (the Provider did not accept the call and no voice session was established), you are entitled to a full refund of the amount deducted. Please report within 24 hours.",
          greenBox: "✓  Eligible for refund: Call charged but never connected."
        },
        {
          title: "3.2  Severe Technical Failure on Our Platform",
          text: "If a call was abruptly disconnected due to a confirmed server-side technical fault on Wellona's infrastructure (not your network) within the first 2 minutes, a partial or full refund may be considered. Requests must be submitted within 24 hours. Wellona will verify against server logs.",
          amberBox: "⚠  Network issues on your end (weak signal, mobile data dropout, poor Wi-Fi) are not platform faults and do not qualify."
        },
        {
          title: "3.3  Duplicate / Double Payment",
          text: "If you were charged twice for the same top-up due to a payment processing error, the duplicate charge will be refunded in full. Contact us within 48 hours with both Google Play order IDs.",
          greenBox: "✓  Eligible for refund: Verified duplicate charge for the same order."
        },
        {
          title: "3.4  Unauthorised Transaction",
          text: "If you believe a top-up was made without your authorisation, report it at ayaazatom@gmail.com within 24 hours and simultaneously file a dispute with Google Play and your bank. Refunds for unauthorised transactions are ultimately governed by Google Play's dispute resolution process."
        },
        {
          title: "3.5  App-Cancelled Order",
          text: "In the rare event that Wellona is unable to fulfil a service after payment has been collected, the full amount will be refunded automatically. We will notify you proactively.",
          greenBox: "✓  Eligible for refund: Order cancelled by Wellona before fulfilment."
        },
      ],
    },
    {
      id: "how-to-request",
      heading: "4. How to Request a Refund",
      content: "To submit a refund request, email us at:",
      email: "ayaazatom@gmail.com",
      content2: "Your request must include:",
      bullets: [
        "Your registered mobile number on Wellona.",
        "The date and approximate time of the call or transaction in question.",
        "The Google Play order ID or transaction ID (available in your Google Play purchase history).",
        "A brief description of the issue and the clause under Section 3 you believe applies.",
      ],
      amberBox: "⚠  By submitting a refund request, you consent to Wellona accessing the relevant call metadata (duration, timestamps, connection status, and server logs) for the purpose of verifying your claim. No audio content is recorded or reviewed.",
    },
    {
      id: "timelines",
      heading: "5. Review & Processing Timelines",
      subsections: [
        { title: "Acknowledgement", text: "We will acknowledge receipt of your refund request within 24 hours of submission." },
        { title: "Review Decision", text: "We aim to issue a decision within 5 business days. Complex cases may take up to 10 business days." },
        { title: "Refund Credit", text: "Approved refunds are processed within 7–10 business days of approval, subject to Google Play and banking timelines. Refunds are credited to the original Google Play payment method." },
      ],
      content2: "Wellona does not issue refunds in cash or via UPI, bank transfer, or any method other than the original payment source.",
    },
    {
      id: "google-play",
      heading: "6. Google Play Refund Policy",
      content: "Because all wallet top-ups are processed through Google Play In-App Purchases, Google Play's own refund policy also applies. You may be eligible to request a refund directly from Google Play within a limited window after purchase (typically 48 hours for IAP, subject to Google's terms).\n\nIf Google Play approves a refund for a purchase that has already been credited to and spent from your Wallet, Wellona reserves the right to deduct the corresponding amount from your Wallet balance.",
    },
    {
      id: "summary",
      heading: "7. Summary: What Is and Is Not Covered",
      table: [
        { scenario: "Call connected, conversation completed", outcome: "Not eligible — all charges are final once a call connects." },
        { scenario: "Dissatisfied with advice or conversation quality", outcome: "Not eligible — platform is not responsible for advice accuracy or outcome." },
        { scenario: "Call charged but never connected", outcome: "Eligible — full refund of amount charged for that session." },
        { scenario: "Platform-side technical failure in first 2 minutes", outcome: "May be eligible — assessed after server log verification." },
        { scenario: "Your network/device caused the disconnection", outcome: "Not eligible — network issues on the user's side are not our fault." },
        { scenario: "Duplicate charge for the same transaction", outcome: "Eligible — duplicate amount refunded in full after verification." },
        { scenario: "Unauthorised transaction on your account", outcome: "Refer to Google Play dispute process; Wellona will cooperate." },
        { scenario: "Order cancelled by Wellona before fulfilment", outcome: "Eligible — automatic full refund, no request needed." },
      ],
    },
    {
      id: "providers",
      heading: "8. Provider Payouts — Not Covered by This Policy",
      content: "This Policy does not apply to Provider (Expert) earnings or payout disputes. Payout-related queries — including failed transfers, TDS deductions, or UPI errors — must be directed to ayaazatom@gmail.com separately. Providers cannot request refunds for platform service fees deducted from their earnings.",
    },
    {
      id: "contact",
      heading: "9. Contact & Grievance Redressal",
      content: "For all refund requests and related queries:",
      contact: {
        role: "Grievance Officer — Wellona App",
        email: "ayaazatom@gmail.com",
        response: "Acknowledged within 24 hours; resolved within 15 business days.",
      },
      content2: "All complaints will be treated fairly and in accordance with applicable Indian consumer protection laws, including the Consumer Protection Act, 2019.",
    },
  ],
};