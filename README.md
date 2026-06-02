# Aforro React Assignment

This repository contains the solution for the Aforro React Assignment. It includes a Dashboard UI built from the provided Figma design and a functional Data Table integrating the JSONPlaceholder API.

## Project Setup

1. Make sure you have Node.js installed.
2. Clone the repository and navigate to the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Features Implemented

### Part 1: UI Implementation
- Built a pixel-perfect (or close to it) representation of the Dashboard design using React functional components.
- Styled using standard CSS with CSS variables for the color palette (`index.css`).
- Created a robust layout with a persistent Sidebar, Header, and a grid-based Widget area.
- Used `lucide-react` for SVG icons.
- Implemented mock charts for visual fidelity using `recharts` (LineChart, BarChart, AreaChart).
- Responsive or semi-responsive container scaling using flexbox/grid.

### Part 2: API Integration & Data Table
- Integrated the `https://jsonplaceholder.typicode.com/users` API using `axios` inside a custom hook (`useUsers`).
- Built a reusable `UserDataTable` component placed prominently at the bottom of the dashboard.
- Implemented **Search** by name or email.
- Implemented **Sorting** (A-Z, Z-A) by clicking on the Name column header.
- Implemented **Filtering** by City using a dynamically populated dropdown menu.
- Handled loading states and API error gracefully.

## Required Submission Links

- **GitHub Repository**: [Insert your GitHub link here]
- **Walkthrough Recording (Mandatory)**: [Insert your screen recording link here]
- **Reference Document (PDF)**: [Insert your PDF link here]

## Assumptions & Decisions
- **Styling**: Standard CSS with a BEM-like structure and global CSS variables was used to keep dependencies low while strictly following the provided design palette.
- **Charts**: Real charting libraries (`recharts`) were used with mock data to show that the dashboard is ready for real analytics data, rather than just static images.
- **Integration**: The User Data Table was placed at the bottom of the main dashboard to combine both assignments into a cohesive single-page experience.
- **Vite**: Used Vite over CRA for modern, fast build tooling.
