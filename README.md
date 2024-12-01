# Learn Orbit

## Overview

**Learn Orbit** is a modern and interactive platform designed to enhance skill development. Built with React and Vite, this modern application offers detailed roadmaps, curated references, and practical projects to help users master new skills. With seamless user authentication managed by Clerk, Learn Orbit ensures secure access and personalized experiences. Progress tracking is efficiently handled through local storage, eliminating the need for a traditional backend server. Deployed on Vercel, Learn Orbit combines advanced technology with user-centric features to support your learning journey.

## Features

- **Skill Roadmaps:** Detailed roadmaps for various skills, including learning paths, references, and projects.
- **User Authentication:** Secure sign-up and sign-in managed by Clerk.
- **Progress Tracking:** Track learning progress using local storage.
- **Responsive Design:** Built with Tailwind CSS, Shadcn UI and Magic UI for a responsive and modern UI.
- **Deployment:** Deployed on Vercel for seamless access and performance.

## Getting Started

To set up and run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or later)
- [npm](https://www.npmjs.com/) (v7.0.0 or later)

### Installation

1. **Clone the repository:**

````bash
   git clone https://github.com/Shivaraj-Kolekar/LearnOrbit.git

````

2. **Navigate to the project directory**:

```bash
cd LearnOrbit
```

3. **Install the dependencies:**

```bash
npm Install
```

4. **Configure environment variables**:

Create a .env.local file in the root directory and add your Clerk API keys. For example:

```
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

```

## Running the Application

To start the development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser to view the application.

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be available in the dist directory.

## Deployment

The application is configured for deployment on Vercel. Follow these steps to deploy:

1. Push your code to GitHub:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. Deploy on Vercel:

- Connect your GitHub repository to Vercel.
- Follow the Vercel deployment guide for instructions.

## Usage

- Skill Roadmaps: Navigate through different skill roadmaps, explore learning paths, and access references and projects.
- Authentication: Use Clerk for secure sign-up and sign-in. Configure redirects and authentication settings as per your needs.
- Progress Tracking: Local storage is used to track and save user progress across sessions.

## Contributing

Contributions are welcome! To contribute, please fork the repository, make your changes, and submit a pull request. Ensure that your changes adhere to the coding guidelines and are thoroughly tested.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web applications.
- Tailwind CSS: A utility-first CSS framework for styling.
- Clerk: Provides authentication and user management services.
- Vercel: Hosting platform for deploying front-end projects.

## Contact

For questions or feedback, please contact:

- Email: shivaraj832004@gmail.com
- GitHub: Shivaraj-Kolekar
