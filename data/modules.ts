export type Module = {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    route: string;
  };
  
  export const modules: Module[] = [
    {
      id: 'phishing',
      title: 'Phishing Email Simulation',
      description: 'Learn how to detect phishing emails',
      imagePath: '/images/phishing.png',
      route: '/modules/simulation',
    },
    {
      id: 'passwords',
      title: 'Password Strength Game',
      description: 'Test your password strength',
      imagePath: '/images/password.png',
      route: '/modules/protection/password',
    },
    {
      id: 'privacy',
      title: 'Privacy Scenario Choices',
      description: 'Understand and make choices about privacy',
      imagePath: '/images/privacy.png',
      route: '/modules/protection/privacy',
    },
    {
      id: 'quiz',
      title: 'Cyber Threats Quiz',
      description: 'Test your knowledge of common cyber threats',
      imagePath: '/images/quiz.png',
      route: '/modules/awareness/quiz',
    },
  ];