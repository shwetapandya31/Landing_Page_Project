# STRAT_OS Landing Page Project
landing-page-project-smoky-seven.vercel.app
## Overview
This project is a modern, responsive landing page designed for an IT infrastructure startup, tech company, or SaaS business called **STRAT_OS**. It showcases a professional, premium design aimed at enterprise clients who need to scale their infrastructure with intelligence. 

The application is built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It includes a beautiful hero section, feature highlights, an about section, a contact form, and a responsive navigation bar.

## Project Structure
The codebase has been neatly organized into reusable React components located in the `src/components/` directory:
- `Navbar.tsx`: Responsive top navigation.
- `Hero.tsx`: Main landing section with background and call-to-action.
- `Features.tsx`: Grid layout showcasing core services.
- `About.tsx`: Information about the company's mission.
- `Contact.tsx`: A functional contact form (powered by Formspree).
- `Footer.tsx`: Bottom section with links and social icons.

---

## 🚀 How to Run the Project Anywhere

If you want to view, test, or present this landing page on any computer, please follow these simple steps:

### 1. Prerequisites
Before you begin, ensure you have the following installed on your computer:
- **Node.js**: You can download and install it from [nodejs.org](https://nodejs.org/). (We recommend the LTS version).
- **A Code Editor**: Such as [Visual Studio Code](https://code.visualstudio.com/).

### 2. Installation Steps
1. **Open the project folder**: Extract the project files. Open the **`Startup`** folder in your code editor (like VS Code). 
   *(Important: Ensure you are inside the `Startup` folder where the `package.json` file is located).*
2. **Open the terminal**: In VS Code, you can open the terminal by clicking `Terminal` -> `New Terminal` from the top menu.
3. **Install dependencies**: Run the following command in the terminal to download all the necessary tools for the project:
   ```bash
   npm install
   ```

### 3. Running the Landing Page
Once the installation is complete, you can start the local development server by running:
```bash
npm run dev
```

After running this command, the terminal will provide a local URL (usually `http://localhost:5173`). 
Simply hold **Ctrl** (or **Cmd** on Mac) and click the link, or copy and paste it into your web browser to view the live landing page!

---

## Deployment (Putting it Live)
When you are ready to make this landing page publicly accessible on the internet (so anyone can view it via a link):

1. Run the build command in your terminal to create the production version:
   ```bash
   npm run build
   ```
2. The optimized, deploy-ready files will be generated in a new `dist/` folder.
3. You can drag and drop this `dist/` folder into free hosting services like **Vercel**, **Netlify**, or **Cloudflare Pages** to instantly get a public website link.
