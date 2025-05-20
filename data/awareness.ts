export type Topic = {
    id: string;
    title: string;
    description: string;
    content: string;
    imagePath: string;
  };
  
  export const awarenessTopic: Topic[] = [
    { 
      id: 'phishing',
      title: 'Phishing Attacks',
      description: 'Learn how to identify and avoid phishing attempts',
      content: `
        # Understanding Phishing Attacks
  
        Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message.
  
        ## Common Signs of Phishing Emails:
  
        - Suspicious sender email addresses
        - Generic greetings and signatures
        - Grammar and spelling errors
        - Urgent or threatening language
        - Suspicious attachments or links
        - Requests for personal information
  
        ## How to Protect Yourself:
  
        1. Verify the sender's email address
        2. Don't click on suspicious links
        3. Be cautious of attachments
        4. Don't share personal information via email
        5. Use multi-factor authentication
        6. Keep your software and systems updated
      `,
      imagePath: '/images/phishing-detail.png',
    },
    {
      id: 'malware',
      title: 'Malware Threats',
      description: 'Understanding different types of malware and prevention techniques',
      content: `
        # Understanding Malware Threats
  
        Malware, short for "malicious software," refers to any software intentionally designed to cause damage to a computer, server, client, or computer network. There are various types of malware including viruses, worms, trojan horses, ransomware, spyware, adware, and more.
  
        ## Common Types of Malware:
  
        - Viruses: Programs that can replicate themselves and spread to other computers
        - Worms: Self-replicating programs that spread without human intervention
        - Trojans: Malware disguised as legitimate software
        - Ransomware: Encrypts files until a ransom is paid
        - Spyware: Monitors user activity without consent
        - Adware: Displays unwanted advertisements
  
        ## Prevention Techniques:
  
        1. Install reputable antivirus/anti-malware software
        2. Keep your operating system and applications updated
        3. Be cautious when downloading files or clicking links
        4. Use strong passwords and multi-factor authentication
        5. Backup your data regularly
        6. Be wary of suspicious emails or messages
      `,
      imagePath: '/images/malware.png',
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering',
      description: 'How attackers manipulate people to breach security',
      content: `
        # Social Engineering Tactics
  
        Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It's a technique that relies heavily on human interaction and often involves tricking people to break normal security procedures.
  
        ## Common Social Engineering Tactics:
  
        - Pretexting: Creating a fabricated scenario to obtain information
        - Baiting: Offering something enticing to swap for information
        - Quid pro quo: Offering a service in exchange for information
        - Tailgating: Following someone into a restricted area
        - Phishing: Sending fraudulent communications to obtain sensitive data
  
        ## Protection Measures:
  
        1. Verify identity before sharing sensitive information
        2. Be skeptical of unsolicited requests for information
        3. Follow security policies and procedures
        4. Be cautious about what you share on social media
        5. Report suspicious activities or requests
        6. Undergo regular security awareness training
      `,
      imagePath: '/images/social-engineering.png',
    },
  ];
  
  export const quizQuestions = [
    {
      id: 1,
      question: "Which of these is a common sign of a phishing email?",
      options: [
        "The sender's email address matches the company's domain",
        "The email has urgent language demanding immediate action",
        "The email is expected and relates to your recent activities",
        "The email contains only text with no links or attachments"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is ransomware?",
      options: [
        "Software that displays unwanted advertisements",
        "Malware that monitors user activity without consent",
        "Malicious software that encrypts files until a ransom is paid",
        "A program that protects against cyber attacks"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Which of the following is a good password practice?",
      options: [
        "Using the same password for multiple accounts",
        "Sharing passwords with trusted colleagues",
        "Writing passwords on sticky notes for convenience",
        "Using a unique combination of letters, numbers, and symbols"
      ],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "What is multi-factor authentication?",
      options: [
        "Using multiple passwords for one account",
        "A security measure requiring multiple forms of verification",
        "Encrypting data multiple times",
        "Having multiple antivirus programs installed"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Which action increases your vulnerability to cyber attacks?",
      options: [
        "Regularly updating your software",
        "Using public Wi-Fi without a VPN",
        "Backing up your data regularly",
        "Installing software only from official sources"
      ],
      correctAnswer: 1
    }
  ];