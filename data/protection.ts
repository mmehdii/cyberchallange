export type ProtectionTool = {
    id: string;
    title: string;
    description: string;
    content: string;
    imagePath: string;
  };
  
  export const protectionTools: ProtectionTool[] = [
   
    {
      id: 'scenario',
      title: 'Privacy Scenarios',
      description: 'Test your privacy knowledge with real-world scenarios',
      content: 'Interactive scenarios to help you make better privacy decisions.',
      imagePath: '/images/privacy.png',
    },
    {
      id: 'antivirus',
      title: 'Antivirus Software',
      description: 'Learn about protecting your devices with antivirus software',
      content: `
        # Antivirus Software Protection
  
        Antivirus software is designed to detect, prevent, and remove malicious software like viruses, trojans, and worms. It's an essential tool for maintaining the security of your devices.
  
        ## How Antivirus Software Works:
  
        - Signature-based detection: Identifies known malware by comparing against a database of signatures
        - Heuristic-based detection: Analyzes the behavior of programs to identify suspicious activity
        - Real-time protection: Continuously monitors system activity to detect and block threats
        - Scheduled scans: Periodically checks your device for malware
  
        ## Choosing the Right Antivirus:
  
        1. Look for comprehensive protection against various types of malware
        2. Consider performance impact on your device
        3. Check for additional features like firewall, password manager, etc.
        4. Research reliability and detection rates
        5. Consider cost vs. features offered
        6. Ensure compatibility with your device
  
        Remember to keep your antivirus software updated to protect against the latest threats.
      `,
      imagePath: '/images/antivirus.png',
    },
    {
      id: 'firewall',
      title: 'Firewall Protection',
      description: 'Understanding how firewalls safeguard your network',
      content: `
        # Firewall Protection
  
        A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between your trusted internal network and untrusted external networks.
  
        ## Types of Firewalls:
  
        - Packet filtering firewalls: Examine packets and prevent their transmission if they don't match established rules
        - Stateful inspection firewalls: Monitor active connections and determine which network packets to allow
        - Proxy firewalls: Filter messages at the application level
        - Next-generation firewalls (NGFW): Combine traditional firewall technology with additional capabilities
  
        ## Benefits of Using a Firewall:
  
        1. Prevents unauthorized access to your network
        2. Blocks malicious programs from accessing your system
        3. Prevents sensitive data from leaving your network
        4. Provides logging capabilities for security events
        5. Offers network traffic monitoring
        6. Can be configured according to specific security needs
  
        Most operating systems come with built-in firewalls, but ensure they're properly configured and enabled.
      `,
      imagePath: '/images/firewall.png',
    },
    {
      id: 'password',
      title: 'Password Security',
      description: 'Best practices for creating and managing strong passwords',
      content: `
        # Password Security Best Practices
  
        Strong passwords are your first line of defense against unauthorized access to your accounts and personal information. 
  
        ## Creating Strong Passwords:
  
        - Use a minimum of 12 characters
        - Include a mix of uppercase and lowercase letters
        - Add numbers and special characters
        - Avoid sequential patterns or repeating characters
        - Don't use personal information that could be easily guessed
        - Use unique passwords for different accounts
  
        ## Password Management Tips:
  
        1. Consider using a reputable password manager
        2. Enable multi-factor authentication when available
        3. Change passwords regularly, especially for sensitive accounts
        4. Don't share passwords with others
        5. Avoid storing passwords in plain text
        6. Be cautious of phishing attempts trying to steal your credentials
  
        Remember: The longer and more complex your password, the harder it is to crack.
      `,
      imagePath: '/images/password-security.png',
    },
    {
      id: 'privacy',
      title: 'Privacy Protection',
      description: 'Tools and techniques to safeguard your online privacy',
      content: `
        # Protecting Your Online Privacy
  
        In today's digital world, protecting your online privacy is crucial. Your personal information can be collected, shared, and potentially misused without your knowledge.
  
        ## Privacy Protection Measures:
  
        - Use privacy-focused browsers and search engines
        - Adjust privacy settings on social media and other accounts
        - Be mindful of the information you share online
        - Use a Virtual Private Network (VPN) when connecting to public Wi-Fi
        - Consider using browser extensions that block trackers
  
        ## Data Minimization Strategies:
  
        1. Only provide necessary information when creating accounts
        2. Regularly review and delete unused accounts
        3. Clear browsing history and cookies periodically
        4. Read privacy policies before accepting terms
        5. Opt out of data collection when possible
        6. Be cautious about granting permissions to apps and websites
  
        Taking control of your digital footprint is an ongoing process that requires awareness and vigilance.
      `,
      imagePath: '/images/privacy.png',
    },
  ];
  
  export const securityTips = [
    {
      id: 1,
      title: "Keep Software Updated",
      description: "Always update your operating system, applications, and antivirus software to patch security vulnerabilities.",
      icon: "ArrowCircleUp"
    },
    {
      id: 2,
      title: "Use Strong, Unique Passwords",
      description: "Create complex passwords and avoid reusing them across different accounts.",
      icon: "Lock"
    },
    {
      id: 3,
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security by requiring a second form of verification beyond your password.",
      icon: "ShieldCheck"
    },
    {
      id: 4,
      title: "Be Careful with Email Attachments",
      description: "Don't open attachments from unknown senders or unexpected attachments from known contacts.",
      icon: "WarningCircle"
    },
    {
      id: 5,
      title: "Secure Your Wi-Fi Network",
      description: "Use strong encryption (WPA3 if available), a complex password, and change default admin credentials.",
      icon: "WifiHigh"
    },
    {
      id: 6,
      title: "Back Up Your Data",
      description: "Regularly back up important data to an external drive or secure cloud service.",
      icon: "CloudArrowUp"
    }
  ];