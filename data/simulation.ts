export type PhishingEmail = {
    id: string;
    sender: string;
    senderEmail: string;
    subject: string;
    date: string;
    body: string;
    redFlags: PhishingRedFlag[];
  };
  
  export type PhishingRedFlag = {
    id: string;
    description: string;
    explanation: string;
  };
  
  export const phishingEmails: PhishingEmail[] = [
    {
      id: 'bank-alert',
      sender: 'BankSecure Alert',
      senderEmail: 'security-alerts@banksecure-verify.com',
      subject: 'URGENT: Your account has been compromised',
      date: 'Today, 10:23 AM',
      body: `
        <p>Dear Valued Customer,</p>
        
        <p>We have detected suspicious activity on your BankSecure account. Your account may have been compromised and has been temporarily limited.</p>
        
        <p><strong>To restore your account access, you must verify your information immediately by clicking the link below:</strong></p>
        
        <p><a href="#" class="text-[#ed1d26] underline">https://banksecure-verify.com/account-verify</a></p>
        
        <p>If you do not verify your account within 24 hours, your account will be suspended indefinitely for security purposes.</p>
        
        <p>BankSecure Customer Service Team<br>
        Reference: #BNK-29584-A</p>
      `,
      redFlags: [
        {
          id: 'suspicious-domain',
          description: 'Suspicious sender domain',
          explanation: 'The email comes from "banksecure-verify.com" rather than the official bank domain. Legitimate banks use their official domain for communications.'
        },
        {
          id: 'urgency',
          description: 'Creates false urgency',
          explanation: 'The email tries to create panic by claiming your account has been compromised and setting a short timeframe for action.'
        },
        {
          id: 'generic-greeting',
          description: 'Generic greeting',
          explanation: 'The email uses "Dear Valued Customer" instead of your name. Legitimate banks typically address you by name.'
        },
        {
          id: 'suspicious-link',
          description: 'Suspicious hyperlink',
          explanation: 'The link doesn\'t lead to the official bank website. Hovering over it would reveal a different destination.'
        },
        {
          id: 'threatening',
          description: 'Threatens negative consequences',
          explanation: 'The email threatens account suspension to pressure you into immediate action without thinking.'
        }
      ]
    },
    {
      id: 'prize-winner',
      sender: 'International Prize Commission',
      senderEmail: 'claims@prize-intl-foundation.org',
      subject: 'CONGRATULATIONS: You\'ve WON $5,000,000.00',
      date: 'Yesterday, 3:47 PM',
      body: `
        <p>CONGRATULATIONS!!!</p>
        
        <p>We are pleased to inform you that your email address was randomly selected among millions of addresses as the winner of our INTERNATIONAL EMAIL LOTTERY PROGRAM.</p>
        
        <p>You have been awarded the sum of <strong>$5,000,000.00 (FIVE MILLION DOLLARS)</strong>.</p>
        
        <p>To claim your prize, please send the following information to our claims agent:</p>
        
        <ul>
          <li>Full Name</li>
          <li>Home Address</li>
          <li>Phone Number</li>
          <li>Copy of ID</li>
          <li>Bank Account Details</li>
        </ul>
        
        <p>Please contact our claims agent immediately at: claims-agent@prize-process.net</p>
        
        <p>Sincerely,<br>
        Dr. James Williams<br>
        International Prize Commission</p>
      `,
      redFlags: [
        {
          id: 'too-good',
          description: 'Too good to be true',
          explanation: 'Offers of unexpected large sums of money are classic signs of scams. If you didn\'t enter a lottery, you can\'t win one.'
        },
        {
          id: 'poor-formatting',
          description: 'Poor formatting and excessive punctuation',
          explanation: 'Multiple exclamation points, all caps, and inconsistent formatting are common in phishing emails.'
        },
        {
          id: 'personal-info-request',
          description: 'Requests for sensitive personal information',
          explanation: 'The email asks for personal details including bank information, which legitimate organizations would never request via email.'
        },
        {
          id: 'different-reply-address',
          description: 'Different reply address',
          explanation: 'The contact email address is different from the sender address, suggesting deception.'
        },
        {
          id: 'vague-details',
          description: 'Vague contest details',
          explanation: 'The email doesn\'t provide specific details about how or when you entered this lottery.'
        }
      ]
    }
  ];
  
  export type ResponseOption = {
    id: string;
    title: string;
    description: string;
    isCorrect: boolean;
    feedback: string;
  };
  
  export const phishingResponses: ResponseOption[] = [
    {
      id: 'click-link',
      title: 'Click the link to check',
      description: 'Click the link to see if it looks legitimate before entering any information',
      isCorrect: false,
      feedback: 'Never click links in suspicious emails. Even visiting malicious websites can sometimes infect your device with malware.'
    },
    {
      id: 'reply-question',
      title: 'Reply to ask questions',
      description: 'Reply to the email to ask for more information to verify its authenticity',
      isCorrect: false,
      feedback: 'Replying to phishing emails confirms your address is active and may lead to more phishing attempts. Never engage with suspicious senders.'
    },
    {
      id: 'contact-official',
      title: 'Contact through official channels',
      description: 'Ignore the email and contact the organization directly using their official website or phone number',
      isCorrect: true,
      feedback: 'Excellent choice! Always verify suspicious communications by contacting the organization through their official channels, not using contact information from the suspicious email.'
    },
    {
      id: 'delete-report',
      title: 'Delete and report',
      description: 'Delete the email and report it as phishing through your email provider',
      isCorrect: true,
      feedback: 'Great! Reporting phishing attempts helps email providers improve their filters and protect other users.'
    },
    {
      id: 'share-warn',
      title: 'Share with colleagues',
      description: 'Forward the email to colleagues to warn them about the potential scam',
      isCorrect: false,
      feedback: 'While warning others is well-intentioned, forwarding phishing emails can spread the threat. Instead, report it to your IT department and let them issue proper warnings.'
    }
  ];