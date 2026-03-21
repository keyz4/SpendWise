# ⚠️ DO NOT FEED THIS FILE TO ANY AI AGENT — This document is for human developers only.

---

# SpendWise — Implementation To-Do List

> This is the master list of all features that need to be implemented. They are ordered by **dependency** — pick them up from top to bottom. Each To-Do links to a detailed feature specification in the `features/` folder.
>
> **Difficulty ratings:** 🟢 Easy | 🟡 Medium | 🔴 Hard

---

## Phase 1 — Foundation (Backend Infrastructure)

| #  | Feature Code                    | Title                                  | Difficulty | Depends On |
|----|----------------------------------|----------------------------------------|------------|------------|
| 1  | [f001](../features/f001.md)     | MongoDB Database Connection            | 🟢 Easy     | —          |
| 2  | [f002](../features/f002.md)     | User Registration & Login API          | 🟡 Medium   | f001       |
| 3  | [f003](../features/f003.md)     | JWT Auth Middleware & Route Protection | 🟡 Medium   | f002       |

---

## Phase 2 — Core Backend APIs

| #  | Feature Code                    | Title                                  | Difficulty | Depends On  |
|----|----------------------------------|----------------------------------------|------------|-------------|
| 4  | [f004](../features/f004.md)     | Category Management API                | 🟢 Easy     | f001, f003  |
| 5  | [f005](../features/f005.md)     | Transaction CRUD API                   | 🟡 Medium   | f001, f003  |
| 6  | [f006](../features/f006.md)     | Budget CRUD API                        | 🟡 Medium   | f001, f003  |

---

## Phase 3 — Frontend Authentication

| #  | Feature Code                    | Title                                  | Difficulty | Depends On  |
|----|----------------------------------|----------------------------------------|------------|-------------|
| 7  | [f007](../features/f007.md)     | Frontend Auth (Login, Signup, JWT)     | 🟡 Medium   | f002, f003  |
| 8  | [f008](../features/f008.md)     | Protected Routes & Auth Guard          | 🟡 Medium   | f007        |

---

## Phase 4 — Frontend Feature Integration

| #  | Feature Code                    | Title                                  | Difficulty | Depends On       |
|----|----------------------------------|----------------------------------------|------------|------------------|
| 9  | [f009](../features/f009.md)     | Transaction Management UI              | 🔴 Hard     | f005, f007       |
| 10 | [f010](../features/f010.md)     | Budget Management UI                   | 🟡 Medium   | f006, f007       |
| 11 | [f011](../features/f011.md)     | Category Management UI                 | 🟢 Easy     | f004, f007       |

---

## Phase 5 — Data Visualization & Analytics

| #  | Feature Code                    | Title                                  | Difficulty | Depends On       |
|----|----------------------------------|----------------------------------------|------------|------------------|
| 12 | [f012](../features/f012.md)     | Dashboard Charts (Recharts)            | 🟡 Medium   | f009             |
| 13 | [f013](../features/f013.md)     | Insights & Analytics Page              | 🔴 Hard     | f012             |

---

## Phase 6 — Polish & UX

| #  | Feature Code                    | Title                                  | Difficulty | Depends On       |
|----|----------------------------------|----------------------------------------|------------|------------------|
| 14 | [f014](../features/f014.md)     | Settings, Error Handling & UX Polish   | 🟡 Medium   | f007             |

---

## Quick Reference — Files Affected Per Feature

| Feature | Backend Files | Frontend Files |
|---------|--------------|----------------|
| f001 | `server/src/config/db.ts`, `server/src/index.ts`, `server/.env` | — |
| f002 | `server/src/controllers/authController.ts`, `server/src/models/User.ts`, `server/src/routes/auth.ts` | — |
| f003 | `server/src/middleware/auth.ts`, `server/src/routes/*.ts` | — |
| f004 | `server/src/controllers/categoryController.ts`, `server/src/models/Category.ts` | — |
| f005 | `server/src/controllers/transactionController.ts`, `server/src/models/Transaction.ts` | — |
| f006 | `server/src/controllers/budgetController.ts`, `server/src/models/Budget.ts` | — |
| f007 | — | `client/src/api/auth.ts`, `client/src/api/axios.ts`, `client/src/pages/Login.tsx`, `client/src/pages/Signup.tsx` |
| f008 | — | `client/src/App.tsx`, new `ProtectedRoute.tsx` component |
| f009 | — | `client/src/pages/Transactions.tsx`, `client/src/api/transactions.ts`, new modal component |
| f010 | — | `client/src/pages/Budget.tsx`, `client/src/api/budget.ts`, new modal component |
| f011 | — | New `client/src/pages/Categories.tsx` or within Settings |
| f012 | — | `client/src/pages/Dashboard.tsx` |
| f013 | — | `client/src/pages/Insights.tsx` |
| f014 | — | `client/src/pages/Settings.tsx`, layout components, global error handler |
