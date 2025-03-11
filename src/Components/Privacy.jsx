import React, { useState } from "react";
import "./Styles/Privacy.css";

const sections = [
  {
    title: "Grievance",
    content: `For any grievances, please reach out to our Grievance officer – Bhavin Makwana on support@deckidz.com `,
  },
  {
    title: "Individual Rights",
    content: `Deckidz also makes certain choices available to you when it comes to your personal data. Please review the below information outlining your choices and how to exercise them.`,
  },
  {
    title: "Review and Update Your Data",
    content: `You have the right to access and update any personal data that we have collected. Some personal data, such as the account holder’s name and email address can be found and updated using the account setting tool on our website at https://www.deckidz.com . For any personal data beyond this, please submit a request using the contact information provided below. We may request more information to confirm your identity before modifying any personal data. If you want to ensure the complete removal of your data, send us an email, requesting for the same at support@deckidz.com.`,
  },
  {
    title: "Restrict Processing",
    content: `You have the right to restrict how we process your personal data in certain circumstances. In some ways, this is an alternative to requesting the erasure of your data. Rather than requesting we erase all of your personal data, you may request that we limit our uses of your personal data to specific purposes. You may wish to request we restrict our processing if you contest the accuracy of your personal data and we are working to verify this information, or if you want us to retain your personal data in connection to a legal claim but cease processing it.`,
  },
  {
    title: "Data Portability",
    content: `You have the right to obtain copies of your information in a structured, commonly used format that you can move your data between our service and the services of others. We may request more information to confirm your identity before providing any personal data.`,
  },
  {
    title: "Right To Object",
    content: `You have the right to object to the processing of your personal data for direct marketing purposes or when our processing of your data is based on legitimate interests. You may request that we stop processing your personal data for direct marketing purposes. This is an absolute right and we cannot refuse this request. Beyond direct marketing, if you wish to exercise this right, you must give specific reasons why you object to our processing of your data, based on your particular situation. Even after receiving such a request, we may continue processing if it is necessary for the exercise/defence of a legal claim or if we can demonstrate a compelling legitimate ground for the processing.
If any request made under this section is manifestly unfounded or excessive, we may reject the request or require a reasonable fee to honour the request. If we decide to reject your request, we will inform you of the reasons for not taking action and provide information on other possible remedies. If we decide that a reasonable fee is necessary, we will promptly inform you and will comply with the request upon receipt of this fee.`,
  },
  {
    title: "Contact for Individual Rights Requests",
    content: `Please use the below information when submitting a request to exercise any of the above rights. Please do not submit requests across multiple communications channels. We will make all efforts to respond to your request within a reasonable timeframe.

Email: support@deckidz.com

Post:
INDIA: C-230, Siddharth Excellence, Opp Dmart, Vasna Road,Vadodara,Gujarat-391410Phone: +91-7990667314


If you wish to raise a concern about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local supervisory authority.`,
  },
  {
    title: "Contact for Individual Rights Requests",
    content: `If you are accessing the service from within the European Union (EU) or are an EU citizen, we would encourage you to read the information given below:

If you are an individual in the European Union (EU) or an EU citizen, we collect and process data about you only where we have legal bases for doing so under applicable EU laws. This means we collect and process your data only when;

It is necessary for a legitimate interest  (which is not overridden by your individual privacy interests), such as  preventing fraud, improving the service, and increasing the security of  the service and network infrastructure;

You have consented to this collection and  processing for a specific purpose;

It is necessary to fulfil our contractual  obligations; or

It is necessary to comply with a legal  obligation.

Where we rely on your consent to process your personal data, you have the right to withdraw or decline consent at any time. If you wish to withdraw your consent, please contact us at support@deckidz.com.

Some examples of our legitimate interests and the data being processed include:

Network and information security (password, IP  address, Device ID)

Customer Support and fraud prevention (name,  email address)

Improving our products and services (hardware  information, activity logs)

Where we rely on our legitimate interests to process your personal data, you have the right to object.

For more information on your how your personal data will be processed and the rights you have regarding this processing, refer to our Individual Rights section.`,
  },
  {
    title: "Data Collected From Our Website",
    content: `The Website is intended for adults - teachers, and parents to allow them to purchase our products and understand the essence of why we do, what we do. Our Website does not provide access to the Deckidz Experience and children shouldn’t use our Website.`,
  },
  {
    title: "Personal Information You Provide",
    content: `When you use the Website, you may provide and we may collect personal information about you through our Website when you visit or order from our Website, such as your email address, physical address, phone number or credit card information. Other information you may affirmatively provide to us is generally maintained along with personal information. You can choose not to provide any information that is affirmatively requested of you. However, this may limit your ability to use the Website as effectively as other users.

In addition to collecting information on the Website, we may collect information from you when you communicate with us over the phone or via e-mail. This information may include Personal Information. This information may be matched with and stored in connection with Personal Information provided or collected in connection with the Website.`,
  },
  {
    title: "Information Collected Automatically/ Cookie policy",
    content: `Log file information is automatically reported by your browser each time you access a web page on our Website. When you access the Website, our servers automatically record certain information that your web browser sends whenever you visit any website. These server logs may include information such as your web request, browser type, referring / exit pages and URLs, number of clicks, domain names, landing pages, pages viewed, and other similar information.

We may use mobile analytics software and various backend systems to analyze certain information regarding your use of the Website such as email address, pageviews, advertisements clicked on, and transaction-related information.

In general, we will store Website tracking information in an anonymous aggregated form; however, we or our third-party tracking partners may store certain information, such as pageviews, in a manner that can be associated to specific users.

We do not use cookies to collect personal information about you. A persistent cookie remains on your hard drive after you close your browser. Persistent cookies may be used by your browser on subsequent visits to the Website. Persistent cookies can be removed by following your web browser’s directions. A session cookie is temporary and disappears after you close your browser. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent.

We do not collect information about your location from your mobile device, but we do log your IP address, which can be used to approximate location. We use IP addresses only for activities necessary to maintain or analyze the service; perform network communications; authenticate users or personalize content; protect the security or integrity of the user and the service; ensure legal or regulatory compliance; or fulfill a request of a user.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use or may use information we collect for a variety of purposes, including:

To operate the service, monitor the  effectiveness of the service, to improve the content of the service, and  layout and design.

To help provide you with a smooth, efficient user experience.

To monitor, analyze and describe usage  patterns and performance of the service, including aggregate metrics such  as total number of visitors, traffic, and demographic patterns.

To conduct system administration and system  troubleshooting and to diagnose or fix technology problems.

To comply with legal requirements and process  (for example, in response to subpoenas, court orders, and law enforcement  or governmental requests or investigations), and to protect our legal  rights or the rights of others (for example, by working to reduce the risk  of fraud or misuse of the service).

To enforce our Terms of Use or other policies  or agreements.

With respect to information collected through  the Website described in the “Information Collected Automatically” section  above, to assist in marketing efforts, including, for example, by  tailoring and serving advertisements, and by tracking the effectiveness of  marketing efforts.

In connection with an unusual business  transaction, such as the bankruptcy or liquidation of, sale of, purchase  of, or merger with our business or another business.

Please note that this information is only of  adults - parents and educator. This is not children’s information.`,
  },
  {
    title: "Personal Information",
    content: `Deckidz will not rent or sell your Personal Information to others, nor will we share your Personal Information with independent third parties for marketing purposes. To operate the service, however, we may share your Personal Information with our agents, representatives and contractors so they can provide us with support services and other features. Generally, we limit the information provided to these service providers to that which is reasonably necessary for them to perform their functions, and we require them to agree to maintain the confidentiality of such information.

For example, Ecommerce (Stripe) is the primary recipient of your personal data. Some other parties that are recipients of your personal information are:

Google

If you would like more information on any of these categories or specific recipients, please contact us at support@deckidz.com.`,
  },
  {
    title: "Non-Personally Identifiable Information",
    content: `We may share non-personally identifiable information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc.) with interested third parties for various purposes, including (i) compliance with various reporting obligations; (ii) for business or marketing purposes; or (iii) to assist such parties in understanding our users’ interests, habits, and usage patterns for certain programs, content, services, advertisements, promotions, and/or functionality available through the Website.`,
  },
  {
    title: "Instances where we are required to share your Personal Information",
    content: `Deckidz will disclose your Personal Information where required to do so by law or subpoena or if we reasonably believe that such action is necessary to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our Terms of Use or to protect the security or integrity of our service; and/or (c) to exercise or protect the rights, property, or personal safety of Deckidz our users or others. It is our policy to provide notice to our users before producing their Personal Information in response to law enforcement requests unless (i) we are prohibited by law or court order from doing so, (ii) we have reason to believe the user’s account has been compromised such that the notice would go to the wrong person, or notice would otherwise be counterproductive or would create a risk to safety, or (iii) it is an emergency request and prior notice would be impractical (in which case we may provide notice after the fact).`,
  },
  {
    title: "What happens in the event of a change of control",
    content: `We may buy or sell/divest/transfer the company (including any shares in the company), or any combination of our products, services, assets and/or businesses. Your information, such as email addresses, and other user information related to the service, may be among the items sold or otherwise transferred in these types of transactions. We may also sell, assign or otherwise transfer such information in the course of corporate divestitures, mergers, acquisitions, bankruptcies, dissolutions, re-organizations, liquidations, similar transactions or proceedings involving all or a portion of the company.`,
  },
  {
    title: "Processing Personal Data",
    content: `Lawful Bases for Processing Personal Data
If you are an individual in the European Union (EU) or an EU citizen, we collect and process data about you only where we have legal bases for doing so under applicable EU laws. This means we collect and process your data only when:

It is necessary for a legitimate interest  (which is not overridden by your individual privacy interests), such as  preventing fraud, improving the service, and increasing the security of  the service and network infrastructure;

You have consented to this collection and  processing for a specific purpose;

It is necessary to fulfil our contractual  obligations; or

It is necessary to comply with a legal  obligation.

Where we rely on your consent to process your personal data, you have the right to withdraw or decline consent at any time. If you wish to withdraw your consent, please contact us at:

Email: support@deckidz.com


Post:
INDIA: C-230, Siddharth Excellence, Opp Dmart, Vasna Road,Vadodara,Gujarat-391410Phone: +91-7990667314

Some examples of our legitimate interests and the data being processed include:

Network and information security (password, IP  address, Device ID)

Customer Support and fraud prevention (name, email address)

Improving our products and services (hardware  information, activity logs)

Where we rely on our legitimate interests to process your personal data, you have the right to object. If you have any questions or need further information concerning the legal basis on which we collect and use your personal data, please contact us at support@deckidz.com`,
  },
  {
    title:
      "Transfers, Storage, and Processing - Important Information for Users Outside the U.S.",
    content: `We primarily store data about you, including personal information, on servers located and operated within the United States and India. If you reside outside of the United States, in order to provide and operate the service, we may send and store your personal information (also commonly referred to as personal data) outside of the country where you reside or are located, to the United States. Therefore, our collection and use of your personal information is subject to the United States’ laws related to privacy and use of personal data and information. These laws, including what is determined to be “personal data and/or information,” are different and may be less protective than those applicable to you in your country of residence. By accepting the terms of this privacy policy, you acknowledge, agree and consent to (1) the transfer to and processing of personal information on servers located outside of the country where you reside, (2) our collection and use of your personal information as described herein and in accordance with the laws of the United States that may be different and may be less protective than those in your country and (3) that you are taking a risk by using the service.

Whenever we share personal information originating in the EU with an entity outside of the EU, we will do so on the basis of the EU standard contractual clauses.`,
  },
  {
    title: "Your Choices About Your Information",
    content: `You may, of course, decline to share certain personal information with us, in which case we may not be able to provide to you some of the features and functionality of the service. You may update, correct, or delete your profile information and preferences at any time by accessing your account preferences page on the Website or contacting us at support@deckidz.com

Please note that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain all information you submit for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so. To update, correct, or delete any other personal information, please see the Individual Rights section below for more information.

If you receive commercial email from us, you may unsubscribe at any time by following the instructions contained within the email. You may also opt-out from receiving commercial email from us, and any other promotional communications that we may send to you from time to time, by using the account management tools on our website at https://www.deckidz.com or sending your request to us by email at support@deckidz.com

Please be aware that if you opt-out of receiving commercial email from us or otherwise modify the nature or frequency of promotional communications you receive from us, it may take up to ten business days for us to process your request, and you may receive promotional communications from us that you have opted-out from during that period. Additionally, even after you opt-out from receiving commercial messages from us, you will continue to receive administrative messages from us regarding the service.`,
  },
  {
    title: "Data Retention",
    content: `Deckidz may retain users’ data for the following purposes:

To develop new features and improve the  service;

To support subsequent customer service  inquiries;

To improve the safety and security of the  service; or

Comply with our legal obligations.

We will retain your information for as long as is reasonably necessary in relation to the purposes for which this data was collected. In many instances, we will retain your data while it is necessary for your use of the service, which may include maintaining this information beyond when you cease using the service.

One you cease using our service, it takes 60 days to completely erase all data from our servers.`,
  },
  {
    title: "How We Protect Your Information - Security and Passwords",
    content: `Deckidz takes what it believes to be commercially reasonable physical, electronic, and procedural safeguards to protect Personal Information. However, since no security system is impenetrable and “perfect security” does not exist on the Internet, we cannot guarantee the security of Personal Information or Browsing Information. If you create an account to use the Website, you may be asked to choose a password for your account, which can be used to access information associated with your account (including Personal Information). You should choose a password that is not easy to guess, and does not use words that you would find in a dictionary. Do not disclose your password to any other person. You are responsible for maintaining the confidentiality of your password and account, and we will attribute activities that occur using your account information (e.g., through the use of your password) to you. If you suspect that your password has been compromised, contact us immediately at support@deckidz.com `,
  },
  {
    title: "Email and Recommendation Communications",
    content: `We may send you, or you may elect to sign up to receive, emails from us. We may also send you communications within an App regarding recommendations for other Deckidz Apps. To help us understand whether we are providing information of interest to you, we may include software code or other tracking technologies in our emails to monitor whether you opened a particular email, whether you have clicked on the images and/or links in the email, the date and time the message was opened, and whether your computer is capable of receiving HTML-based email.
 We endeavour to allow you to unsubscribe at any time from our email programs by clicking on the unsubscribe link at the bottom of any email message. We reserve the right to send you service announcements or similar administrative messages within an app. If you wish to opt out or withdraw consent, please refer to Processing Personal Data to know how.

Additionally, if you have queries regarding the same, feel free to contact us at support@deckidz.com `,
  },
  {
    title: "Compromise of Personal Information",
    content: `In the event that Personal Information is compromised as a result of a breach of security, Deckidz will promptly notify those persons whose Personal Information has been compromised, in accordance with the notification procedures set forth in this Privacy Policy, or as otherwise required by applicable law. In the event that we or our service suffers a data security breach that requires us to provide you with notice, such as under applicable law, you consent to allow us to provide you with such notice by sending an e-mail to the primary e-mail address that is associated with your account. `,
  },
  {
    title: "Notification Procedures",
    content: `It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through conspicuous posting of such notice on the service, as determined by Deckidz in its sole discretion. We reserve the right to determine the form and means of providing notifications to you, provided that you may opt out of certain means of notification as described in this Privacy Policy. The Website may contain features or links to websites and services provided by third parties. Any information you provide on third-party websites or services is provided directly to the operators of such services and is subject to those operators’ policies, if any, governing privacy and security, even if accessed through the Website. We are not responsible for the content or privacy and security practices and policies of third-party websites or services to which links or access are provided through the Website. We encourage you to learn about third parties’ privacy and security policies before providing them with information. `,
  },
  {
    title: "Children’s Privacy Policy",
    content: `We respect children’s privacy, and it is our greatest priority to protect any such limited data. The Children’s Privacy Policy explains our data collection, use, and protection processes. All references to “children” or “child” in this Children’s Privacy Policy shall mean children under 16 years of age, and all references to the term “parent” shall include legal guardians.

The most important point to note is that the Deckidz website is not intended for children. Children need not access it. We don’t market to them and never knowingly collect any personal information from children.

All the learning and play experience that add up to the “Deckidz experience” for children is limited to the Deckidz apps - Animal Encyclopedia With AR. All three apps are tailor-made to limit the use of children’s information and protect their privacy. Our apps contain no external links to third-party websites or services.

Parents and educators can download the Deckidz apps from the Apple App Store, Google Deckidz, and Amazon Appstore. We encourage parents and educators to complete the simple onboarding process to help children get started. Downloading the app doesn’t trigger the collection of any Personally Identifiable Information. We only collect device information such as operating system and administrative permissions, essential to installing the app on your device. All the Deckidz apps work without an internet connection after the initial installation and one-time download of all the content.

Parents and educators can create multiple profiles and customize the app for children. However, children do not have access to these settings.

We comply with the Children's Online Privacy Protection Act ("COPPA"), and we only collect analytics data (does not include Personally Identifiable Information) from the Deckidz apps. This data is anonymized and used as an aggregate to solely improve the play and learning experience of the Deckidz apps. This data is not used for any commercial purposes.

If the service is being used by a school and/or teacher (the “Educational Institution”) with students under 16 years of age, such Educational Institution agrees that it has reviewed our Terms of Use and our Privacy Policy. The Deckidz apps only request Personally Identifiable Information from parents and/or teachers. We will never knowingly solicit, nor will we accept, Personally Identifiable Information from users known to be under 16 years of age. We collect only the minimum amount of information needed about students from teachers. Any such information is used only in connection with the Educational Institution’s use of the Deckidz apps.

If a parent or an educator discovers any information shared/collected without your approval, please email us at support@ Deckidz.com. We will do what is needed to delete such information from our systems. `,
  },
  {
    title: "Governing Law - Visitors Residing Outside the United States",
    content: `This Privacy Policy and the privacy practices of our service are governed solely under the laws of India without regard to its conflict of law principles. Those who use our service and reside outside the United States are responsible for compliance with local laws. If you reside outside of the United States, by using our service, you consent to the collection, transfer, storage, processing and use of your personal information in the United States of America in accordance with this Privacy Policy. `,
  },
  {
    title: "Updates to Our Privacy Policy",
    content: `We reserve the right to update this Privacy Policy from time to time. When we do, we will revise the “Effective Date” at the top of this Privacy Policy. We encourage you to check this page periodically for any updates. If you continue to use the service following the posting of an updated version of this Privacy Policy, we will treat your continued use as acceptance of the updated version.

If we make material changes to this Privacy Policy, we may notify you more prominently. If we affect the way we handle Personal Information collected from children users (if applicable), we will first notify and obtain verifiable consent of a parent or legal guardian. `,
  },
  {
    title: "Contact Us",
    content: `If you have any remaining questions about how we treat your privacy, just let us know. You can contact us by email at support@deckidz.com


You may also reach out to us via post:

Post:

INDIA:C-230, Siddharth Excellence, Opp Dmart, Vasna Road,Vadodara,Gujarat-391410   Phone: +91-7990667314 `,
  },
];

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="privacy-container">
        <div className="privacy-content">
          <header>
            <h1>Privacy Policy</h1>
          </header>
          <p>
            This Privacy Policy explains what information belonging to you will
            be collected and used by Dec Gaming Studio Pvt Ltd. (“Deckidz,”
            “we,” “us,” or “our”) when you access our website located at{" "}
            <a
              href="https://www.deckidz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.deckidz.com
            </a>
            , the mobile applications available on Apple App Store, Amazon
            Appstore, and Google Play Store provided by us (the “Apps”), and
            other services (collectively, together with the website and the
            Apps, therein called our “service”).
          </p>
          <p>
            We will not use or share your information with anyone except as
            described in this Privacy Policy. Each time you use our service, you
            are accepting the practices described in this Privacy Policy at that
            time. The Deckidz Website is intended for adults only and does not
            allow any form of game play. The Apps downloaded to your device
            allow game play and are intended for families and users across all
            age groups.
          </p>
          <p>
            Please read this policy in its entirety, including our Children’s
            Privacy Policy section, before using our services. The Children’s
            Privacy Policy will control over any conflicting provisions in our
            general Privacy Policy as it concerns children’s data.
          </p>
        </div>

        <div className="accordion">
          <h1>Privacy Policy</h1>
          {sections.map((section, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span className={`icons ${activeIndex === index ? "open" : ""}`}>
                  ⮞
                </span>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
