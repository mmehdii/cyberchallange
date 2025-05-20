# Cybersecurity Awareness Challenge

An interactive platform for high school students to learn about cybersecurity concepts in an engaging and gamified way.

## Features

- Interactive learning modules on cybersecurity topics
- Phishing email simulations to practice threat identification
- Quizzes to test knowledge
- Protection tips and resources
- Leaderboard to track progress
- Mobile-first responsive design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Phosphor Icons

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── about/            # About page
│   ├── leaderboard/      # Leaderboard page
│   ├── modules/          # Learning modules
│   │   ├── awareness/    # Awareness module and topics
│   │   ├── protection/   # Protection tools and tips
│   │   └── simulation/   # Phishing simulation
│   ├── resources/        # Resource hub
│   │   ├── articles/     # Articles page
│   │   ├── videos/       # Videos page
│   │   └── glossary/     # Glossary page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── not-found.tsx     # 404 page
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── data/                 # Mock data files
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `public/images` folder and add the following placeholder images:
   - hero.png
   - awareness-hero.png
   - protection-hero.png
   - simulation-hero.png
   - phishing.png
   - password.png
   - privacy.png
   - quiz.png
   - phishing-detail.png
   - malware.png
   - social-engineering.png
   - antivirus.png
   - firewall.png
   - password-security.png

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Extending the Application

### Adding New Modules

1. Add new module data to the appropriate data file in the `data/` directory.
2. Create the necessary route components in the `app/` directory.
3. Update navigation components to include the new module.

### Adding Authentication

This application is designed without authentication. To add user authentication:

1. Install an authentication library like NextAuth.js or Clerk.
2. Create authentication pages in the app directory.
3. Add user-specific data storage with a database like MongoDB, Supabase, or Firebase.
4. Implement protected routes using middleware.

## License

This project is licensed under the MIT License.