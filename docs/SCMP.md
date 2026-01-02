# Deliverable 1: SCM Plan (SCMP)

**Version:** 1.1  
**Department of Software Engineering**
**Software Configuration Management (SCM) Mini Project**
**Project:** Personal Expense Tracker
**Submission Date:** 12/30/2025
**Team Members:** 

1. Abdurezak Kemal   ETS 0022/14  
2. Beamlak Solomon   ETS 0256/14  
3. Beamlak Kagnew    ETS 0257/14  
4. Bemenet Beyene    ETS 0274/14  
5. Burtukan Kussa    ETS 0306/14  
6. Betelhem Seleshi  ETS 0316/14  
---

## 1. Purpose & Scope

**Purpose:**
The purpose of this SCM Plan is to define how the **Personal Expense Tracker** project will be managed, versioned, and maintained in a controlled manner using **Git/GitHub**.

**Scope:**

- Implement a simple personal expense tracker with login/authentication, dashboard, and CRUD operations for expenses.
- Apply **Software Configuration Management (SCM)** principles: version control, baselines, change requests, and configuration audits.
- Use **Next.js frontend** and a **JSON file database** for simplicity.

---

## 2. Roles & Responsibilities

| Role            | Member | Responsibility                                      |
| --------------- | ------ | --------------------------------------------------- |
| Project Manager | Betelhem Seleshi | Coordinate SCM activities, manage baselines         |
| SCM Officer     | Bemenet Beyene | Maintain SCMP, track changes, ensure CI consistency |
| Developer       | Beamlak Kagnew,Beamlak Solomon,Burtukan Kussa, Abdurezak Kemal   | Implement UI and core features                      |
| Tester          | Betelhem Seleshi  | Perform integration and unit tests                  |
| Documenter      | Bemenet Beyene | Prepare CI register, CRs, release notes             |
| Reviewer        | Burtukan Kussa | Review pull requests, verify changes                |

---

## 3. Configuration Items (CIs) + Naming Conventions

| CI Name                  | Version | Owner             | Category    | Status      |
| ------------------------ | ------- | ----------------  | ----------- | ----------- |
| SCMP.md                  | 1.0     | Abdurezak Kemal   | Document    | Approved    |
| CI_Register.md           | 1.0     | Beamlak Solomon   | Document    | Approved    |
| Change_Request_Form.docx | 1.0     | Betelhem Seleshi  | Document    | Approved    |
| Baseline_BL1.md          | 1.0     | Bemenet Beyene    | Document    | Approved    |
| Baseline_BL2.md          | 1.0     | Bemenet Beyene    | Document    | Approved    |
| README.md                | 1.0     | Abdurezak Kemal   | Document    | Approved    |
| index.html               | 0.1     | Burtukan Kussa    | HTML        | Approved    |
| App.tsx                  | 0.1     | Beamlak Kagnew    | Source Code | Approved    |
| index.tsx                | 0.1     | Beamlak Kagnew    | Source Code | Approved    |
| components/              | 0.1     | Betelhem Seleshi  | Source Code | Approved    |
| pages/                   | 0.1     | Bemenet Beyene    | Source Code | Approved    |
| data/users.ts            | 0.1     | Betelhem Seleshi  | Database    | Approved    |
| types.ts                 | 0.1     | Bemenet Beyene    | Source Code | Approved    |
| vite.config.ts           | 0.1     | Burtukan Kussa    | Config      | Approved    |
| tsconfig.json            | 0.1     | Burtukan Kussa    | Config      | Approved    |
| package.json             | 0.1     | Burtukan Kussa    | Config      | Approved    |
| package-lock.json        | 0.1     | Burtukan Kussa    | Config      | Approved    |
| docs/Mockups/            | 0.1     | Beamlak Solomon   | UI Mockups  | Approved    |

**Naming Conventions:**

- Documents: `<DocumentName>.md` or `.docx`
- Code Files: lowercase with dashes (`expense-list.tsx`)
- CI Versions: Major.Minor (e.g., 1.0, 1.1)

---

## 4. Versioning Rules

- **Document Versioning:** Major.Minor (e.g., 1.0, 1.1)
- **Source Code Versioning:** Semantic versioning (v1.0.0, v1.1.0)
- **Baselines:** Tagged in Git as `BL1`, `BL2`

---

## 5. Branching Model

- **main:** Stable baseline versions
- **feature/\***: Individual tasks by team members
- **release/\***: Release candidates
- **hotfix/\***: Emergency fixes

---

## 6. Change Control Process

1. Submit **Change Request (CR)** form (`docs/Change_Request_Form.docx`).
2. Review CR by team.
3. Approved CR assigned to responsible member.
4. Implement changes in **feature branch**.
5. Merge via **Pull Request (PR)** to `main`.
6. Update **CI Register** and **Release Notes**.

---

## 7. Baseline Management

- **Baseline 1 (BL1):** Repository setup, initial documents, initial CI list.
- **Baseline 2 (BL2):** Working prototype + CR fixes.
- **Each baseline:** Git tag, Baseline Record, updated CI Register.

---

## 8. Tools Used

- **Version Control:** Git / GitHub
- **Project Management:** GitHub Projects / Issues
- **Documents:** MS Word, Excel, Markdown
- **Code/IDE:** VS Code
- **Frontend:** Next.js / React
- **Database:** JSON file
