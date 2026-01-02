# Personal Expense Tracker - SCM Mini Project

**Department of Software Engineering**  
**Software Configuration Management (SCM) Mini Project**  
**Submission Date:** 12/30/2025

## Project Overview

This project implements a **Personal Expense Tracker** as a simple web application using **Next.js** for the frontend and a **JSON file** as a simple database.  
The project focuses on **Software Configuration Management (SCM) principles**, including version control, baselines, change requests, and configuration audits.

### Key Features Implemented

- Login / Authentication page
- Main Dashboard with list of expenses
- Core feature: Add / Edit / Delete an expense
- Simple JSON database for storing data
- Proper folder structure and documentation

## Repository Structure

````bash
authdash-personal-expense-tracker/
├── docs/ # SCM documents (SCMP, CI Register, Change Requests, Baseline Records)
├── src/ # Source code
│ ├── app/ # Next.js pages
│ ├── components/# React components
│ ├── data/ # JSON database
│ └── styles/ # CSS / Tailwind styles
├── tests/ # Unit / Integration tests
├── releases/ # Release notes and packaged versions
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md # Project overview

## Getting Started

**Prerequisites:**

- Node.js (v18+)
- npm or yarn
- Git

**Setup & Run:**

```bash
# Clone the repository
git clone <repository-url>
cd authdash-personal-expense-tracker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm run start
````

# Run all tests

```bash
npm run test
```

# SCM Deliverables Included

SCMP Document (docs/SCMP.docx)

CI Register (docs/CI_Register.xlsx)

Change Request Form (docs/Change_Request_Form.docx)

Baseline Records (docs/Baseline_BL1.docx, docs/Baseline_BL2.docx)

Release Notes (releases/Release_v1.0.md, releases/Release_v1.1.md)

# Branching Strategy

main: stable baseline versions

feature/\*: individual member tasks (e.g., feature/ui-pages, feature/change-request)

tags: BL1, BL2 for baselines

# Contributors

Member 1: SCMP Document

Member 2: CI Register

Member 3: Change Requests

Member 4: Baseline Records

Member 5: UI Pages

Member 6: JSON Database & Components

License

This project is developed for SWENG5111 SCM Mini Project at AASTU. All rights reserved.
