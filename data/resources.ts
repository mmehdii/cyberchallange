export type Resource = {
    id: string;
    title: string;
    description: string;
    link: string;
    type: 'video' | 'article' | 'guide';
    source: string;
    date: string;
  };
  
  export const resourcesData: Resource[] = [
    // Videos
   {
  id: 'video-internet-safety-kids',
  title: 'Cyber Security for Kids | Internet Safety Tips for Kids',
  description: 'Provides five essential tips for kids to stay safe online.',
  link: 'https://www.youtube.com/watch?v=nVEyG3C-Mqw',
  type: 'video',
  source: 'CyberSafe Academy',
  date: 'March 10, 2022'
},
{
  id: 'video-personal-info-kids',
  title: "Cyber Security for Kids: Personal Information You Shouldn't Share",
  description: 'Educates children on the importance of keeping personal information private online.',
  link: 'https://www.youtube.com/watch?v=Y_D-wRx-jWw',
  type: 'video',
  source: 'CyberSafe Academy',
  date: 'January 2023'
},
{
  id: 'video-cybersecurity-basics-k2',
  title: "Don't Get Tricked! K-2 Cybersecurity Basics Lesson",
  description: 'An engaging lesson tailored for young children to understand basic cybersecurity concepts.',
  link: 'https://www.youtube.com/watch?v=LEC0r-v2EtU',
  type: 'video',
  source: 'CYBER.ORG',
  date: 'November 2022'
},
{
  id: 'video-pathways-cybersecurity',
  title: 'Pathways to Cybersecurity for High School Students',
  description: 'Explores various career paths in cybersecurity and how high school students can prepare.',
  link: 'https://www.youtube.com/watch?v=7KghdmOcd4I',
  type: 'video',
  source: 'IBM Canada',
  date: 'September 2023'
},
{
  id: 'video-school-cybersecurity-basics',
  title: 'School Cybersecurity: Key Basics Explained',
  description: 'Breaks down essential cybersecurity concepts relevant to school environments.',
  link: 'https://www.youtube.com/watch?v=GgZ_JBimss8',
  type: 'video',
  source: 'Avant Assessment',
  date: 'July 2024'
},
{
  id: 'video-maryville-cybersecurity-programs',
  title: 'Maryville Showcases Cybersecurity Programs for High School Students',
  description: 'Highlights programs aimed at teaching high school students about cybersecurity careers.',
  link: 'https://www.youtube.com/watch?v=LXq0AjaRhb0',
  type: 'video',
  source: 'Maryville University',
  date: 'March 2025'
},

    
  {
    id: 'article-vpn',
    title: 'Why You Should Use a VPN',
    description: 'Explores the benefits of VPNs in enhancing online privacy and security, including encrypting internet traffic and masking IP addresses.',
    link: 'https://www.cnet.com/tech/services-and-software/reasons-why-to-use-a-vpn/',
    type: 'article',
    source: 'CNET',
    date: 'January 20, 2024'
  },
  {
    id: 'article-social',
    title: 'Social Media Privacy Settings: Why They Matter',
    description: 'Highlights the importance of adjusting privacy settings on platforms like Facebook and Twitter to protect personal information from identity theft and cyberbullying.',
    link: 'https://internetprivacy.com/social-media-privacy-settings/',
    type: 'article',
    source: 'InternetPrivacy.com',
    date: 'April 4, 2023'
  },
  {
    id: 'article-threats',
    title: 'Top Cybersecurity Threats 2025',
    description: 'Discusses emerging cybersecurity threats for 2025, with a focus on the rise of sophisticated ransomware attacks and the need for enhanced security measures.',
    link: 'https://onlinedegrees.sandiego.edu/top-cyber-security-threats',
    type: 'article',
    source: 'University of San Diego',
    date: 'August 2025'
  },
  {
    id: 'guide-students',
    title: '12 Cybersecurity Tips For Students At Home And In School',
    description: 'Provides practical advice for students to stay safe online, including securing social media, using encrypted tools, and understanding data privacy.',
    link: 'https://www.teachthought.com/technology/cybersecurity-tips-for-students/',
    type: 'guide',
    source: 'TeachThought',
    date: 'January 2024'
  },
  {
    id: 'guide-parents',
    title: 'Cybersecurity Tips for Parents: How to Keep Kids Safe Online',
    description: 'Offers strategies for parents to protect their children online, including educating them about cyber threats and using family-friendly browsers.',
    link: 'https://www.iplocation.net/cybersecurity-tips-for-parents-how-to-keep-kids-safe-online',
    type: 'guide',
    source: 'IP Location',
    date: 'January 29, 2025'
  }
    
  
  ];
  
  export type GlossaryTerm = {
    term: string;
    definition: string;
  };
  
  export const glossaryTerms: GlossaryTerm[] = [
    {
      term: 'Malware',
      definition: 'Short for "malicious software," refers to any software intentionally designed to cause damage to a computer, server, client, or computer network.'
    },
    {
      term: 'Phishing',
      definition: 'A cyberattack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need.'
    },
    {
      term: 'Ransomware',
      definition: 'A type of malicious software designed to block access to a computer system until a sum of money is paid.'
    },
    {
      term: 'Two-Factor Authentication (2FA)',
      definition: 'A security process in which users provide two different authentication factors to verify themselves, providing an additional layer of security.'
    },
    {
      term: 'VPN (Virtual Private Network)',
      definition: 'Extends a private network across a public network, enabling users to send and receive data across shared or public networks as if their devices were directly connected to the private network.'
    },
    {
      term: 'Firewall',
      definition: 'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.'
    },
    {
      term: 'Encryption',
      definition: 'The process of converting information or data into a code to prevent unauthorized access.'
    },
    {
      term: 'Social Engineering',
      definition: 'The psychological manipulation of people into performing actions or divulging confidential information.'
    },
    {
      term: 'Antivirus',
      definition: 'Software designed to detect, prevent, and remove malicious software.'
    },
    {
      term: 'Botnet',
      definition: 'A network of private computers infected with malicious software and controlled without the owners\' knowledge.'
    },
    {
      term: 'DDoS (Distributed Denial of Service)',
      definition: 'An attack where multiple compromised systems are used to target a single system causing a denial of service.'
    },
    {
      term: 'Keylogger',
      definition: 'A software program or hardware device that records the real-time activity of a computer user including the keyboard keys they press.'
    }
  ];