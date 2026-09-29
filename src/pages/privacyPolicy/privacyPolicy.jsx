import PageHeader from "../../views/pageHeader";
function PrivacyPolicy() {
  const tableOfContents = [
    {
      href: "#what-information-do-we-collect",
      label: "What information do we collect?",
    },
    {
      href: "#how-do-we-use-your-information",
      label: "How do we use your information?",
    },
    {
      href: "#will-your-information-be-shared-with-anyone",
      label: "Will your information be shared with anyone?",
    },
    {
      href: "#who-will-your-information-be-shared-with",
      label: "Who will your information be shared with?",
    },
    {
      href: "#do-we-use-cookies-and-other-tracking-technologies",
      label: "Do we use cookies and other tracking technologies?",
    },
    {
      href: "#how-long-do-we-keep-your-information",
      label: "How long do we keep your information?",
    },
    {
      href: "#how-do-we-keep-your-information-safe",
      label: "How do we keep your information safe?",
    },
    {
      href: "#what-are-your-privacy-rights",
      label: "What are your privacy rights?",
    },
    {
      href: "#controls-for-do-not-track-features",
      label: "Controls for do-not-track features?",
    },
    {
      href: "#do-california-residents-have-specific-privacy-rights",
      label: "Do California residents have specific privacy rights?",
    },
    {
      href: "#do-we-make-updates-to-this-policy",
      label: "Do we make updates to this policy?",
    },
    {
      href: "#how-can-you-contact-us-about-this-policy",
      label: "How can you contact us about this policy?",
    },
  ];

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Read our Privacy Policy to understand how we collect, use, and protect your personal information."
      ></PageHeader>

      <div class="container b-child-container white mt-4">
        <section class="a-section">
          <div>
            <div class="text-center">
              <h1>Privacy Policy</h1>
                <span>Last Updated May 5, 2023</span>
            </div>

           <div aria-label="Privacy Policy Introduction">
                  <p>
                    Thank you for choosing to be part of our community at RORI
                    Technologies LLC, DBA Accoric, a New York Corporation
                    (“Company”, “we”, “us”, or “our”). We are committed to
                    protecting your personal information and your right to
                    privacy. If you have any questions or concerns about our
                    policy, or practices with regards to your personal
                    information, please contact us at{" "}
                    <a href="mailto:info@accoric.com">info@accoric.com</a>
                  </p>

                  <p>
                    When you visit our website, www.accoric.com, or use our
                    services, you entrust us with your personal information. We
                    take the privacy of your information very seriously, and we
                    would like to provide you with a clear understanding of our
                    Privacy Policy. This policy explains what information we
                    collect, how we use it, and your rights regarding your
                    personal data. We encourage you to read this policy
                    carefully to ensure that you are aware of how we handle your
                    personal information. If you do not agree with any terms of
                    this Privacy Policy, please refrain from using our sites,
                    applications, and services.
                  </p>
                  <p>
                    This Privacy Policy applies to all information collected
                    through our website (such as www.accoric.com), mobile
                    application (“Apps”), and/or any related services, sales,
                    marketing, or events (we refer to them collectively in this
                    Privacy Policy as the “Sites”). Please read this Privacy
                  </p>

                  <p>
                    Policy carefully as it will help you make informed decisions
                    about sharing your personal information with us.
                  </p>
                </div>


            <div>
             
              <div>
                
                <div aria-label="Table Of Content" className="tableOfContents">
                  <h2 class="title mb-4">Table of Contents</h2>
                  <ul>
                    {tableOfContents.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  id="what-information-do-we-collect"
                  aria-label="What Information Do We Collect?"
                >
                  <h2 class="title mb-4">What Information Do We Collect?</h2>
                  <div>
                    <i>
                      <span>In Short:</span> We collect personal information
                      that you provide to us such as name, address, contact
                      information, passwords and security data, and payment
                      information.
                    </i>
                  </div>
                  <h3>Personal information you disclose to us</h3>
                  <p>
                    We collect personal information that you voluntarily provide
                    to us when registering at the Sites or Apps, expressing an
                    interest in obtaining information about us or our products
                    and services, when participating in activities on the Sites,
                    Apps, or otherwise contacting us.
                  </p>
                  <p>
                    The personal information that we collect depends on the
                    context of your interactions with us and the Site or Apps,
                    the choice you make, and the products and features you use.
                    The personal information we collect can include the
                    following:
                  </p>
                  <p>
                    <b>Name and Contact Data.</b> We collect your first and last
                    name, email address, postal address, phone number, and other
                    similar contact data.
                  </p>
                  <p>
                    <b>Credentials.</b> We collect passwords, password hints,
                    and similar security information used for authentication and
                    account access.
                  </p>
                  <p>
                    <b>Payment Data.</b> We collect data necessary to process
                    your payment if you make purchases, such as your payment
                    instrument number (such as credit card number), and the
                    security code associated with your payment instrument. All
                    payment data is stored by our payment processor, and you
                    should review its privacy policies and contact the payment
                    processor directly to respond to your questions.
                  </p>
                  <p>
                    All personal information that you provide to us must be
                    true, complete and accurate, and you must notify us of any
                    changes to such personal information.
                  </p>
                </div>

                <div
                  id="how-do-we-use-your-information"
                  aria-label="How do We Use Your Information?"
                >
                  <h2 class="title mb-4">How Do We Use Your Information?</h2>
                  <div>
                    <i>
                      <span>In Short:</span> We process your information for
                      purposes based on legitimate business interests, the
                      fulfillment of our contract with you, compliance with our
                      legal obligations, and/or your consent.
                    </i>
                  </div>

                  <p>
                    We use personal information collected via our Sites or Apps
                    for a variety of businesses purposes described below. We
                    process your personal information for these purposes in
                    reliance on our legitimate business interests, in order to
                    enter into or perform a contract with you, with your
                    consent, and/or for compliance with our legal obligations.
                    We indicate the specific processing grounds we rely on next
                    to each purpose listed below.
                  </p>
                  <p>
                    The personal information that we collect depends on the
                    context of your interactions with us and the Site or Apps,
                    the choice you make, and the products and features you use.
                    The personal information we collect can include the
                    following:
                  </p>
                  <p>We use the information we collect or receive:</p>
                  <ol>
                    <li>
                      <span>
                        To facilitate account creation and logon process.
                      </span>
                      If you choose to link your account with us to a
                      third-party account, such as your Google or Facebook
                      account, we use the information you allowed us to collect
                      from those third-parties to facilitate account creation
                      and logon process.
                    </li>
                    <li>
                      <span>
                        {" "}
                        To send you marketing and promotional communications.
                      </span>{" "}
                      We and/or our third-party marketing partners may use the
                      personal information you send to us for our marketing
                      purposes, if this is in accordance with your marketing
                      preferences. You can opt-out of our marketing emails at
                      any time (see WHAT ARE YOUR PRIVACY RIGHTS below).
                    </li>
                    <li>
                      <span>To send administrative information to you.</span> We
                      may use your personal information to send you product,
                      service, and new feature information and/or information
                      about changes to our terms, conditions, and policies.
                    </li>
                    <li>
                      <span> Fulfill and manage your orders.</span>We may use
                      your information to fulfill and manage your orders,
                      payments, returns, and exchanges made through the Sites or
                      Apps.
                    </li>
                    <li>
                      <span> To protect our Sites.</span>We may use your
                      information as part of our efforts to keep our Sites or
                      Apps free and secure (for example, of fraud monitoring and
                      prevention).
                    </li>
                    <li>
                      <span>
                        {" "}
                        To enforce our terms, conditions, and policies.
                      </span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        To respond to legal requests and prevent harm.
                      </span>{" "}
                      If we receive a subpoena or other legal request, we may
                      need to inspect the data we hold to determine how to
                      respond.
                    </li>
                    <li>
                      <span> For other Business Purposes.</span> We may use your
                      information for other Business Purposes, such as data
                      analysis, identifying usage trends, determining the
                      effectiveness of our promotional campaigns and to evaluate
                      and improve our Sites or Apps, products, services,
                      marketing, and your experience.
                    </li>
                    <li>
                      In cases where your employer or training provider
                      registers you on the Accoric Management platform, we may
                      also use your contact information to send you information
                      about related Accoric products and services that support
                      certification tracking and compliance management, such as
                      the Personal DASHcard™. These communications are intended
                      to enhance your use of the Accoric platform and you may
                      opt out at any time by following the unsubscribe
                      instructions provided in such communications.
                    </li>
                  </ol>
                  <p>
                    When you provide your mobile phone number or email address,
                    you consent to receive communications from us related to
                    your use of the Accoric Personal DashCard platform. These
                    communications may include:
                  </p>
                  <ul>
                    <li>
                      <span>
                        One-time passcode (OTP) for account login or
                        verification
                      </span>
                    </li>
                    <li>
                      <span>
                        Reminders about upcoming certification expirations
                      </span>
                    </li>
                    <li>
                      <span>Important account or feature updates</span>
                    </li>
                  </ul>
                  <p>
                    You may manage your preferences or opt out of non-essential
                    reminders through the notification settings within the app.
                    Please note that some essential service communications (such
                    as authentication codes) may still be sent even if you opt
                    out of marketing or reminder messages.
                  </p>
                  <p>
                    Users can control their notification preferences, including
                    SMS and email reminders, by adjusting settings within the
                    Personal DashCard app.
                  </p>
                  <p>
                    Standard messaging and data rates may apply depending on
                    your mobile carrier.
                  </p>
                </div>
                <div
                  id="will-your-information-be-shared-with-anyone"
                  aria-label="Will Your Information Be Shared With Anyone?"
                >
                  <h2 class="title mb-4">Will Your Information Be Shared With Anyone?</h2>

                  <div>
                    <i>
                      <span>In Short:</span> We only share information with your
                      consent, to comply with laws, to protect your rights, or
                      to fulfill business obligations.
                    </i>
                  </div>

                  <p>
                    We may process or share data based on the following legal
                    basis:
                  </p>
                  <ol>
                    <li>
                      <span> Consent:</span> We may process your data if you
                      have given us specific consent to use your personal
                      information in a specific purpose.
                    </li>
                    <li>
                      <span> Legitimate Interests:</span> We may process your
                      data when it is reasonably necessary to achieve our
                      legitimate business interests.
                    </li>
                    <li>
                      <span> Performance of a Contract:</span>Where we have
                      entered into a contract with you, we may process your
                      personal information to fulfill the terms of our contract.
                    </li>
                    <li>
                      <span>Legal Obligations:</span> We may disclose your
                      information where we are legally required to do so in
                      order to comply with applicable law, governmental
                      requests, a judicial proceeding, court order, or legal
                      process, such as in response to a court order or a
                      subpoena (including in response to public authorities to
                      meet national security or law enforcement requirements).
                    </li>
                    <li>
                      <span>Vital Interests:</span> We may disclose your
                      information where we believe it is necessary to
                      investigate, prevent, or take action regarding potential
                      violations or our policies, suspected fraud, situations
                      involving potential threats to the safety of any persona
                      and illegal activities, or as evidence in litigation in
                      which we are involved.
                    </li>
                  </ol>
                  <p>
                    More specifically, we may need to process your data or share
                    your personal information in the following situations:
                  </p>
                  <ol>
                    <li>
                      <span>
                        {" "}
                        Vendors, Consultants, and Other Third-Party Service
                        Providers.{" "}
                      </span>{" "}
                      We may share your data with third-party vendors, service
                      providers, contractors or agents who perform services for
                      us or on our behalf and require access to such information
                      to do that work. Examples include: payment processing,
                      data analysis, email delivery, hosting services, customer
                      service, and marketing efforts. We may allow selected
                      third-parties to use tracking technology on the Sites or
                      Apps, which will enable them to collect data about how you
                      interact with the Sites or Apps over time. This
                      information may be used to, among other things, analyze
                      and tack data, determine the popularity of certain
                      content, and better understand online activity. Unless
                      described in this Policy, we do not share, sell, rent, or
                      trade any of your information with third-parties for their
                      promotional purposes.
                    </li>
                    <li>
                      <span>Business Transfers:</span> We may share or transfer
                      your information in connection with, o during negotiations
                      of, any merger, sale of company assets, financing, or
                      acquisition of all or a portion of our business to another
                      company.
                    </li>
                    <li>
                      <span> Business Partners.</span>We may share your
                      information with our business partners to offer you
                      certain products, service, or promotions.
                    </li>
                  </ol>
                </div>

                <div
                  id="who-will-your-information-be-shared-with"
                  aria-label="Who Will Your Information Be Shared With?"
                >
                  <h2 class="title mb-4">Who Will Your Information Be Shared With?</h2>

                  <div>
                    <i>
                      <span>In Short:</span> We only share information with the
                      following third-parties.
                    </i>
                  </div>

                  <p>
                    We only share and disclose your information with the
                    following third-parties. We have categorized each party so
                    that you may easily understand the purpose of our data
                    collection and processing practices. If we have processed
                    your data based on your consent, and you wish to revoke your
                    consent, please contact us.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Advertising, Direct Marketing, and Lead Generation
                      </span>
                    </li>
                    <li>
                      <span> Affiliate Marketing Programs</span>
                    </li>
                    <li>
                      <span>
                        Allow Users to Connect to their Third-Party Accounts
                      </span>
                    </li>
                    <li>
                      <span>Communicate and Chat with Users</span>
                    </li>
                    <li>
                      <span> Content Optimization</span>
                    </li>
                    <li>
                      <span>Data Backup and Security</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        Functionality and Infrastructure Optimization
                      </span>
                    </li>
                    <li>
                      <span>Invoice and Billing</span>
                    </li>
                    <li>
                      <span>Retargeting Platforms</span>
                    </li>
                    <li>
                      <span>Social Media Sharing and Advertising</span>
                    </li>
                    <li>
                      <span> User Account Registration and Authentication</span>
                    </li>
                    <li>
                      <span>User Commenting and Forms</span>
                    </li>
                    <li>
                      <span> Web and Mobile Analytics</span>
                    </li>
                    <li>
                      <span> Website Hosting</span>
                    </li>
                    <li>
                      <span>Website Performance Monitoring</span>
                    </li>
                    <li>
                      <span> Website Testing</span>
                    </li>
                  </ul>
                </div>

                <div
                  id="do-we-use-cookies-and-other-tracking-technologies"
                  aria-label="Do We Use Cookies and Other Tracking Technologies?"
                >
                  <h2 class="title mb-4">Do We Use Cookies and Other Tracking Technologies?</h2>

                  <div>
                    <i>
                      <span>In Short:</span> We may use cookies and other
                      tracking technologies to collect and store your
                      information.
                    </i>
                  </div>
                  <p>
                    We may use cookies and similar tracking technologies (like
                    web beacons and pixels) to access or store information.
                    Specific information about how we use such technologies and
                    how you can refuse certain cookies is set out in our Cookie
                    Policy.
                  </p>
                </div>

                <div
                  id="how-long-do-we-keep-your-information"
                  aria-label="How Long Do We Keep Your Information?"
                >
                  <h2 class="title mb-4">How Long Do We Keep Your Information?</h2>

                  <div>
                    <i>
                      <span>In Short:</span>We keep your information for as long
                      as necessary to fulfill the purposes outlined in this
                      Privacy Policy, unless otherwise required by law.
                    </i>
                  </div>

                  <p>
                    We will only keep your personal information for as long as
                    it is necessary for the purposes set out in this Privacy
                    Policy, unless a longer retention period is required or
                    permitted by law (such as tax, accounting, or other legal
                    requirements) No purpose in this policy will require us
                    keeping your personal information for longer than the period
                    of time in which users have an account with us.
                  </p>

                  <p>
                    When we have no ongoing legitimate business need to process
                    your personal information, we will either delete or
                    anonymize it, or, if this is not possible (for example,
                    because your personal information has been stored in backup
                    achieves), then we will securely store your personal
                    information and isolate it from any further processing until
                    deletion is possible.
                  </p>
                </div>

                <div
                  id="how-do-we-keep-your-information-safe"
                  aria-label="How Do We Keep Your Information Safe?"
                >
                  <h2 class="title mb-4">How Do We Keep Your Information Safe?</h2>

                  <div>
                    <i>
                      <span>In Short:</span>We aim to protect your personal
                      information through a system of organizational and
                      technical security measures.
                    </i>
                  </div>
                  <p>
                    We have implemented appropriate technical and organizational
                    security measures designed to protect the security of any
                    personal information we process. However, despite our
                    safeguards and efforts to secure your information, no
                    electronic transmission over the Internet or information
                    storage technology can be guaranteed to be 100% secure, so
                    we cannot promise or guarantee that hackers, cybercriminals,
                    or other unauthorized third parties will not be able to
                    defeat our security, and improperly collect, access, steal,
                    or modify your information. Although we will do our best to
                    protect your personal information, transmission of personal
                    information to and from our Website is at your own risk. You
                    should only access the Website within a secure environment.
                  </p>
                </div>

                <div
                  id="what-are-your-privacy-rights"
                  aria-label="What Are Your Privacy Rights?"
                >
                  <h2 class="title mb-4">What Are Your Privacy Rights?</h2>

                  <div>
                    <i>
                      <span>In Short:</span> In some regions, such as the
                      European Economic Area, you have rights that allow you
                      greater access to and control over your personal
                      information. You may review, change, or terminate at any
                      time.
                    </i>
                  </div>

                  <p>
                    In some regions (like the European Economic Area), you have
                    certain rights under applicable data protection laws. These
                    may include the right (i) to request and obtain a copy of
                    your personal information; (ii) to request rectification or
                    erasure; (iii) to restrict the processing of your personal
                    information; and (iv) if applicable, to data portability. In
                    certain circumstance, you may also have the right to object
                    to the processing of your personal information. To make such
                    a request, please see HOW CAN YOU CONTACT US ABOUT THIS
                    POLICY below. We will consider and act upon any request in
                    accordance with applicable data protection laws.
                  </p>
                  <p>
                    If we are relying on your consent to process your personal
                    information, you have the right to withdraw your consent at
                    any time. Please note however, that this will not affect the
                    lawfulness of the processing before its withdrawal.
                  </p>
                  <p>
                    If you are resident in the European Economic Area and you
                    believe we are unlawfully processing your personal
                    information, you also have the right to complain to your
                    local data protection supervisory authority.
                  </p>

                  <h3>Account Information</h3>

                  <p>
                    If you would at any time like to review or change the
                    information in your account or terminate your account, you
                    can: Log into your account settings and update your user
                    account. Upon your request to terminate your account, we
                    will deactivate or delete your account and information from
                    our active databases. However, some information may be
                    retained in our filed to prevent fraud, troubleshoot
                    problems, assist with any investigations, enforce our Terms
                    of Use and/or comply with legal requirements.
                  </p>

                  <h3>Cookies and Similar Technologies</h3>

                  <p>
                    Most Web browsers are set to accept cookies by default. If
                    you prefer, you can usually choose to set your browser to
                    remove cookies and to reject cookies. If you choose to
                    remove cookies or reject cookies, this could affect certain
                    features or services of our Sites or Apps. To opt-out of
                    interest-based advertising by advertisers on our Sites or
                    Apps visit{" "}
                    <a
                      href="https://www.aboutads.info/choices/"
                      aria-label="About Ads opt-out tool"
                      title="AboutAds Opt-out tool"
                    >
                      AboutAd&apos;s Opt-out tool.
                    </a>
                  </p>

                  <h3>Opting Out of Email Marketing</h3>
                  <p>
                    You can unsubscribe from our marketing email list at any
                    time by clicking on the unsubscribe link in the emails that
                    we send or by contacting us using the details provided
                    below. You will then be removed from the marketing email
                    list – however, we will still need to send you
                    service-related emails that are necessary for the
                    administration and use of your account. To otherwise
                    opt-out, you may: Access your account settings and update
                    preferences.
                  </p>
                </div>

                <div
                  id="controls-for-do-not-track-features"
                  aria-label="Controls For Do-Not-Track Features"
                >
                  <h2 class="title mb-4">Controls For Do-Not-Track Features</h2>

                  <p>
                    Most Web browsers and some mobile operating systems and
                    mobile applications include a Do-Not-Track (“DNT”) feature
                    or setting you can activate to signal your privacy
                    preference not to have data about your online browsing
                    activities monitored and collected. No uniform technology
                    standard for recognizing and implementing DNT signalized has
                    been finalized. As such, we do not currently respond to DNT
                    browser signals or any other mechanism that automatically
                    communicates your choice not to be tracked online. If a
                    standard for online tracking is adopted that we must follow
                    in the future, we will inform you about that practice in a
                    revised version of this Privacy Policy
                  </p>
                </div>

                <div
                  id="do-california-residents-have-specific-privacy-rights"
                  aria-label="Do California Residents Have Specific Privacy Rights?"
                >
                  <h2 class="title mb-4">Do California Residents Have Specific Privacy Rights?</h2>
                  <div className="Content_Body">
                    <div>
                      <i>
                        <span>In Short:</span> Yes, if you are a resident of
                        California, you are granted specific rights regarding
                        access to your personal information.
                      </i>
                    </div>
                    <p>
                      <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.83.&lawCode=CIV">
                        <i>California Civil Code Section 1798.83,</i>
                      </a>{" "}
                      also known as the “Shine the Light” law, permits our users
                      who are California residents to request and obtain from
                      us, once a year, and free of charge, information about
                      categories of personal information (if any) we disclosed
                      to third-parties for direct marketing purposes and the
                      names and addresses of all third-parties with which we
                      shared personal information in the immediately preceding
                      calendar year. If you are a California resident and would
                      like to make such a request, please submit your request in
                      writing to us using the contact information provided
                      below.
                    </p>
                    <p>
                      If you are under 18 years of age, reside in California,
                      and have a registered account with the Sites or Apps, you
                      have the right to request removal of unwanted data that
                      you publicly post on the Sites or Apps. To request removal
                      of such data, please contact us using the contact
                      information provided below, and include the email address
                      associated with your account and a statement that you
                      reside in California. We ill make sure the data is not
                      publicly displayed on the Sites or Apps, but please be
                      aware that the data may not be completely or
                      comprehensively removed from our systems.
                    </p>
                  </div>
                </div>

                <div
                  id="do-we-make-updates-to-this-policy"
                  aria-label="Do We Make Updates To This Policy?"
                >
                  <h2 class="title mb-4">Do We Make Updates To This Policy?</h2>
                  <div className="Content_Body">
                    <div>
                      <i>
                        <span>In Short:</span> Yes, we will update this policy
                        as necessary to stay compliant with relevant laws.
                      </i>
                    </div>
                    <div className="Content_Paragraphs">
                      <p>
                        We may update this Privacy Policy from time to time. The
                        updates version will be indicated by an updated
                        “Revised” date and the updated version will be effective
                        as soon as it is accessible. If we make material changes
                        to this Privacy Policy, we may notify you either by
                        prominently posting a notice of such changes or by
                        directly sending you a notification. We encourage you to
                        review this Privacy Policy frequently to be informed of
                        how we are protecting your information.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="how-can-you-contact-us-about-this-policy"
                  aria-label="How Can You Contact Us About This Policy?"
                >
                  <h2 class="title mb-4">How Can You Contact Us About This Policy?</h2>

                  <div>
                    <span>
                      If you have questions or comments about this Privacy
                      Policy, you may contact Nick Ercolano, by email at{" "}
                      <a href="mailto:info@accoric.com">info@accoric.com</a>, by
                      phone at <a href="tel:516-200-4720">516-200-4720</a> , or
                      by post to:
                    </span>
                    <div>
                      <p>
                        <strong>RORI Technologies LLC</strong>
                        <br />
                        d/b/a Accoric
                        <br />
                        110 Walt Whitman Road
                        <br />
                        STE 203
                        <br />
                        Huntington Station, NY 11746
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
