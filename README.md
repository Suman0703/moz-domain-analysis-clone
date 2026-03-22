# Moz Domain Analysis Clone

high-fidelity, fully responsive React clone of the **Moz Domain Analysis** dashboard. This project serves as a showcase for advanced CSS layout techniques, React state management, and mobile-first design principles.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
---

## 🚀 Live Demo

(https://moz-domain-analysis-clone.vercel.app/)

---

## 📌 Project Overview

This project replicates the UI structure and layout of the Moz Domain Analysis page.  
It demonstrates practical implementation of:

- Component-based architecture
- Responsive design principles
- Tailwind utility-first styling
- Clean and scalable folder structure

The goal of this project was to strengthen frontend development skills by rebuilding a real-world SaaS interface.

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **React Icons**

---

## 🚀 Key Features

- **Mobile-First Responsive UI**: Every component (Charts, Tables, Hero, and Nav) is handcrafted to scale from small mobile devices to large desktop monitors.
- **Interactive Navigation**: 
  - Dynamic Mega Menu for Desktop.
  - Hamburger Menu for Mobile.
  - "Click-outside" logic to auto-close menus.
- **Data Visualization**: 
  - Responsive Bar Charts with horizontal scrolling on mobile.
  - "Discovered & Lost" link charts with custom tooltips.
- **Custom 404 Experience**: An integrated "Blog" page simulation featuring a cute, interactive 404 state.
- **Dynamic Routing**: Built-in state-based navigation between the Dashboard and Blog views.

## 🛠️ Technical Implementation

- **CSS-in-JS**: Leveraged **Tailwind CSS** for rapid UI development and layout control.
- **State Management**: Used React `useState` and `useEffect` for handling navigation, menu toggles, and UI interactions.
- **Modern Layouts**: Utilized CSS Grid and Flexbox to manage complex dashboard spacing.
- **Optimization**: Implemented "Fluid Truncation" in tables to ensure data stays aligned on tiny screens.

## 📂 Project Architecture

```text
src/
├── components/
│   ├── Navbar.jsx          # Interactive Mega Menu & Mobile Nav
│   ├── Hero.jsx            # Dynamic Search & DA Stats Card
│   ├── Dashboard.jsx       # Main Grid Controller
│   ├── DataCard.jsx        # Reusable Fluid Data Tables
│   ├── ChartCard.jsx       # Swipeable Link Growth Chart
│   ├── BarChartCard.jsx    # Responsive Ranking Distribution
│   ├── CompetitorCard.jsx  # Multi-column Competitor Analysis
│   ├── CtaBanner.jsx       # Responsive Engagement Sections
│   ├── EmptyStateCard.jsx  # Snippet Placeholders with Illustrations
│   └── NotFound.jsx        # Integrated 404 Blog View
├── App.jsx                 # Global Layout & Page Controller
└── main.jsx                # Entry Point

```
---
## 👤 Author

**Suman Devi** *Third-Year B.Tech Computer Science Student*

---

> **Disclaimer:** This project was created for educational and portfolio purposes to demonstrate UI cloning and responsive design skills.