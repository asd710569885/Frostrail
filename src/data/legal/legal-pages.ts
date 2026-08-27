export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type LegalPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: readonly LegalSection[];
};

export const legalPages: Record<string, LegalPageData> = {
  "privacy-policy": {
    slug: "privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    lede: "This Privacy Policy explains what information Frostrail Wiki may handle when you visit the site, how that information is used, and the choices available to you.",
    updated: "August 27, 2026",
    sections: [
      { id: "scope", title: "1. Scope", paragraphs: ["This policy applies to frostrail.org and the pages published by Frostrail Wiki. It does not apply to Steam, YouTube, GitHub, social networks, game publishers, developers, or any other website reached through an external link.", "Frostrail Wiki is an independent fan website. It does not operate Frostrail game accounts, Closed Beta registration, Steam accounts, or publisher mailing lists."] },
      { id: "information", title: "2. Information We Handle", paragraphs: ["The website does not require an account and does not provide contact, registration, payment, or upload forms. You can read the public pages without submitting your name, address, phone number, payment details, or game credentials.", "Web hosting and security providers may process ordinary technical records such as IP address, browser type, requested page, date and time, referring page, response status, and diagnostic information. These records are generally used to deliver pages, prevent abuse, investigate errors, and maintain site security."], bullets: ["No Frostrail game account data is collected", "No payment information is requested", "No Closed Beta invitations are issued through this website", "Do not send passwords, access tokens, or sensitive personal records by email"] },
      { id: "cookies", title: "3. Cookies and Local Storage", paragraphs: ["Frostrail Wiki does not currently use advertising cookies or create a visitor profile for targeted marketing. Essential hosting, caching, security, or content-delivery services may use short-lived technical storage where required to operate and protect the site.", "If analytics, advertising, account features, or optional cookies are added later, this policy will be updated before those features are treated as part of the normal site experience."] },
      { id: "external", title: "4. External Links", paragraphs: ["Pages may link to Steam, YouTube, GitHub, interviews, press releases, and other third-party websites. Those services set their own privacy rules and may record your visit after you follow a link. Review the destination's privacy information before sharing personal data or signing in."] },
      { id: "retention", title: "5. Retention and Security", paragraphs: ["Technical logs are retained only as long as reasonably needed for hosting, security, troubleshooting, legal compliance, or abuse prevention, subject to the practices of the relevant service provider. No internet service can promise absolute security, but reasonable care is taken to limit unnecessary collection and exposure."] },
      { id: "children", title: "6. Children's Privacy", paragraphs: ["This website is written for a general gaming audience and is not designed to knowingly collect personal information from children. A parent or guardian who believes a child has sent personal information to the site may contact us so the concern can be reviewed."] },
      { id: "choices", title: "7. Your Choices and Contact", paragraphs: ["You may browse without creating an account, avoid external links, use browser privacy controls, and decline to send information by email. For a privacy question or a request concerning information you believe was sent to this site, contact wanghuan@frostrail.org and describe the relevant page and issue without including passwords or sensitive documents."] },
      { id: "changes", title: "8. Policy Changes", paragraphs: ["This policy may change when site features, service providers, or legal requirements change. The updated date at the top of the page will change when a substantive revision is published."] },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    eyebrow: "Legal",
    title: "Terms of Service",
    lede: "These Terms of Service set the rules for using Frostrail Wiki and explain the limits of information published about a game that is still in development.",
    updated: "August 27, 2026",
    sections: [
      { id: "acceptance", title: "1. Acceptance of These Terms", paragraphs: ["By accessing frostrail.org, you agree to use the website lawfully and in accordance with these terms. If you do not agree, discontinue use of the website."] },
      { id: "fan-site", title: "2. Independent Fan-Site Status", paragraphs: ["Frostrail Wiki is an independent, unofficial fan website. It is not owned, operated, sponsored, endorsed, or supported by FakeFish, Shiro Unlimited, Steam, Valve, or another platform holder. The website cannot provide game support, account recovery, refunds, beta access, keys, or publisher services."] },
      { id: "information", title: "3. Informational Use", paragraphs: ["Guides, statistics, release details, platform information, and gameplay descriptions are provided for general informational purposes. Frostrail is in development, so builds, dates, features, recipes, balance values, and availability may change.", "Reasonable effort is made to date changing information and distinguish announced plans from playable behavior, but completeness and uninterrupted accuracy cannot be guaranteed. Check the game's official store and announcement channels before making a purchase or relying on a test date."] },
      { id: "acceptable-use", title: "4. Acceptable Use", paragraphs: ["You may read, link to, and quote reasonable portions of the website for lawful personal, community, commentary, or editorial purposes. You may not interfere with the website, attempt unauthorized access, distribute malware, impersonate the site, scrape it in a way that disrupts service, or use its content for fraud or misleading beta invitations."], bullets: ["Do not present this fan site as an official Frostrail service", "Do not sell access, keys, or invitations in its name", "Do not use automated traffic that harms availability", "Do not remove attribution from quoted original material"] },
      { id: "intellectual-property", title: "5. Intellectual Property", paragraphs: ["Original page text, organization, and site-specific presentation are protected by applicable copyright rules. Frostrail names, logos, screenshots, trailers, artwork, and game materials belong to their respective owners and are used for identification, commentary, criticism, news, and fan documentation."] },
      { id: "external-links", title: "6. External Services", paragraphs: ["External links are provided for convenience and context. Frostrail Wiki does not control the availability, security, content, prices, terms, or privacy practices of third-party services. A link does not automatically mean that the destination endorses this website or that this website endorses every statement on the destination."] },
      { id: "disclaimer", title: "7. Disclaimer", paragraphs: ["The website is provided on an as-is and as-available basis. To the extent permitted by law, no warranty is made that every page will be error-free, current, available, or suitable for a particular purpose. Nothing on the site is professional legal, financial, security, or purchasing advice."] },
      { id: "liability", title: "8. Limitation of Liability", paragraphs: ["To the extent permitted by applicable law, Frostrail Wiki and its contributors are not liable for indirect, incidental, special, consequential, or punitive loss arising from use of the website, reliance on pre-release information, third-party links, service interruption, or unauthorized third-party conduct."] },
      { id: "changes", title: "9. Changes and Contact", paragraphs: ["These terms may be updated to reflect changes to the website or applicable requirements. Continued use after publication of revised terms means the revised terms apply. Questions about these terms may be sent to wanghuan@frostrail.org."] },
    ],
  },
  copyright: {
    slug: "copyright",
    eyebrow: "Legal",
    title: "Copyright",
    lede: "This page explains ownership of Frostrail Wiki material, how game assets are treated, and how to report a copyright concern.",
    updated: "August 27, 2026",
    sections: [
      { id: "ownership", title: "1. Website Content", paragraphs: ["Unless a page states otherwise, original explanatory text, editing, information architecture, and site-specific presentation published by Frostrail Wiki are protected by applicable copyright law. Permission to browse the site does not transfer ownership of that material."] },
      { id: "game-materials", title: "2. Frostrail and Third-Party Materials", paragraphs: ["Frostrail names, logos, artwork, screenshots, trailers, characters, world elements, and other game materials remain the property of FakeFish, Shiro Unlimited, and their respective rights holders. Steam, YouTube, GitHub, and other third-party names and marks belong to their owners.", "Game materials are used on this independent fan site for identification, commentary, criticism, news reporting, and educational documentation. Their appearance does not imply sponsorship or endorsement."] },
      { id: "permitted-use", title: "3. Linking and Limited Quotation", paragraphs: ["You may link to public pages. You may also quote a reasonable portion of original text for commentary, discussion, or editorial use when the quotation is accurate, proportionate, and accompanied by a clear link or attribution. Republishing whole pages, removing attribution, or presenting the site's work as your own requires prior permission unless applicable law allows the use."] },
      { id: "report", title: "4. Reporting a Copyright Concern", paragraphs: ["If you believe material on frostrail.org infringes your copyright, email wanghuan@frostrail.org. Include your name and contact details, the work you own or represent, the exact page URL and material at issue, the action you request, and a statement explaining why the use is unauthorized.", "Requests that do not identify the exact page or the relevant protected work may take longer to review. Do not send passwords, identity documents, or unrelated personal information."] },
      { id: "response", title: "5. Review and Response", paragraphs: ["A credible request may lead to clarification, attribution, replacement, restricted access, or removal while the issue is reviewed. Frostrail Wiki may ask for enough information to understand authority, ownership, and the scope of the request. Nothing on this page waives rights, defenses, exceptions, or limitations available under applicable law."] },
      { id: "trademarks", title: "6. Trademarks", paragraphs: ["Use of a game, company, platform, or product name is descriptive and nominative. No license, partnership, approval, or official status should be inferred from that use."] },
    ],
  },
  "about-us": {
    slug: "about-us",
    eyebrow: "Legal",
    title: "About Us",
    lede: "Frostrail Wiki is an independent fan site built to help players understand the journey north without turning development updates into hype or guesswork.",
    updated: "August 27, 2026",
    sections: [
      { id: "mission", title: "Our Mission", paragraphs: ["The site brings practical Frostrail information into one readable place: beginner guidance, the Eden Engine, weapons, crafting, Relics, locations, enemies, co-op, test access, platform questions, and the Early Access plan.", "Pages are organized around the questions players actually ask before a test or purchase. The goal is to make preparation easier while keeping changing pre-release details in their proper context."] },
      { id: "editorial", title: "How We Write", paragraphs: ["We separate playable behavior, screenshots, store information, developer statements, press material, and community interpretation. Exact statistics keep their build or screenshot context. Values that have not been published are left open instead of being filled with estimates from mockups or unrelated games."], bullets: ["Player questions come before keyword repetition", "Changing details carry a visible date", "Planned features are not described as finished mechanics", "Corrections should identify the page and the better information"] },
      { id: "independence", title: "Independence", paragraphs: ["Frostrail Wiki is not an official FakeFish or Shiro Unlimited website. The site does not issue keys, manage beta access, sell the game, operate game accounts, or speak for the developers and publisher.", "Frostrail names, screenshots, artwork, and other game materials belong to their respective owners. Their use helps readers identify and discuss the game; it does not create an affiliation."] },
      { id: "coverage", title: "What We Cover", paragraphs: ["Coverage includes the Steam Early Access window, Closed Beta information, solo and online co-op, train systems, survival mechanics, equipment, world locations, enemy types, and development updates. As playable builds expand, guides can become more specific about routes, recipes, balance, and tactics."] },
      { id: "corrections", title: "Corrections", paragraphs: ["If a page is outdated or inaccurate, email wanghuan@frostrail.org with the page URL, the statement that needs attention, and a screenshot or public announcement when available. Clear corrections are more useful than general requests to rewrite an entire page."] },
    ],
  },
  "contact-us": {
    slug: "contact-us",
    eyebrow: "Legal",
    title: "Contact Us",
    lede: "Use the email address below for corrections, legal notices, privacy questions, broken links, or general feedback about Frostrail Wiki.",
    updated: "August 27, 2026",
    sections: [
      { id: "email", title: "Email", paragraphs: ["Contact: wanghuan@frostrail.org", "There is no contact form on this website. Email is the only contact method listed on this page. Do not send passwords, Steam credentials, beta keys, payment details, or sensitive identity documents."] },
      { id: "corrections", title: "Factual Corrections", paragraphs: ["For a factual correction, include the exact page URL, quote or describe the statement, explain what appears to be wrong, and provide a public announcement, store page, in-game screenshot, or reproducible build context when possible. This makes it easier to review a changing pre-release detail without guessing."] },
      { id: "copyright", title: "Copyright and Legal Notices", paragraphs: ["For a copyright concern, identify the protected work, the exact material and page URL, your relationship to the rights holder, and the action requested. For a privacy or terms question, name the relevant section and explain the concern in plain language."] },
      { id: "not-support", title: "What We Cannot Handle", paragraphs: ["Frostrail Wiki cannot provide official game support, recover accounts, issue refunds, grant Closed Beta access, distribute keys, confirm selection emails, or answer on behalf of FakeFish or Shiro Unlimited. Use the official game, store, developer, or publisher support channel for those requests."] },
      { id: "response", title: "Response Expectations", paragraphs: ["Messages may be prioritized by urgency, clarity, and whether they identify a specific page or legal concern. A response time is not guaranteed. Repeated promotional messages, unrelated pitches, abusive mail, and requests for beta invitations may not receive a reply."] },
    ],
  },
};

export const legalSlugs = Object.keys(legalPages);
