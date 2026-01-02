# Deliverable 1: SCM Plan (SCMP)

**Department of Software Engineering**
**Software Configuration Management (SCM) Mini Project**
**Project:** Personal Expense Tracker
**Submission Date:** 12/30/2025
**Team Members:** [List names here]

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
| Project Manager | [Name] | Coordinate SCM activities, manage baselines         |
| SCM Officer     | [Name] | Maintain SCMP, track changes, ensure CI consistency |
| Developer       | [Name] | Implement UI and core features                      |
| Tester          | [Name] | Perform integration and unit tests                  |
| Documenter      | [Name] | Prepare CI register, CRs, release notes             |
| Reviewer        | [Name] | Review pull requests, verify changes                |

---

## 3. Configuration Items (CIs) + Naming Conventions

| CI Name                  | Version | Owner    | Category    | Status      |
| ------------------------ | ------- | -------- | ----------- | ----------- |
| SCMP.md                  | 1.0     | Member 1 | Document    | Approved    |
| CI_Register.xlsx         | 1.0     | Member 2 | Document    | Approved    |
| Change_Request_Form.docx | 1.0     | Member 3 | Document    | Approved    |
| Baseline_BL1.md          | 1.0     | Member 4 | Document    | Approved    |
| Baseline_BL2.md          | 1.0     | Member 4 | Document    | Approved    |
| UI Pages (Next.js)       | 0.1     | Member 5 | Source Code | In Progress |
| JSON Database            | 0.1     | Member 6 | Data        | In Progress |

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
