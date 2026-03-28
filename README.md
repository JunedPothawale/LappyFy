# 📁 Project Structure (React + Vite | Microservice Ready)

This project follows a **modular, scalable, and microservice-aligned architecture**. Each domain is isolated into its own module, making the application easy to maintain and extend.

---

## 🧱 Folder Structure

```
src/
│
├── app/                          # App bootstrap & routing
│   ├── App.jsx
│   ├── main.jsx
│   ├── routes.jsx               # Central route definitions
│   └── providers/               # Context providers (Auth, Theme, etc.)
│
├── config/                      # Environment & API configuration
│   ├── env.js                   # import.meta.env wrapper
│   └── api.config.js            # API endpoints mapping
│
├── shared/                      # Global reusable layer
│   ├── components/              # Reusable UI components (Button, Input, Modal)
│   ├── layouts/                 # Layouts (MainLayout, AdminLayout, AuthLayout)
│   ├── hooks/                   # Custom hooks (useAuth, useFetch)
│   ├── utils/                   # Utility functions
│   └── services/                # Axios / API base setup
│
├── modules/                     # Domain-based modules (Microservice aligned)
│   │
│   ├── auth/                    # Authentication module
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── hooks/
│   │
│   ├── product/                 # Product module
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── hooks/
│   │
│   ├── cart/                    # Cart module
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── hooks/
│   │
│   ├── order/                   # Order module
│   │   ├── pages/
│   │   ├── components/
│   │   └── api/
│   │
│   ├── admin/                   # Admin panel
│   │   ├── pages/
│   │   ├── components/
│   │   └── api/
│   │
│   └── customer/                # Customer-facing module
│       ├── pages/
│       ├── components/
│       └── api/
│
├── widgets/                     # Large UI blocks (Header, Footer, Breadcrumbs)
│   ├── Header/
│   ├── Footer/
│   └── Breadcrumbs/
│
├── assets/                      # Static assets (images, icons, styles)
│   ├── images/
│   ├── icons/
│   └── styles/
│
└── index.css
```

---

## 🧠 Architecture Principles

* **Domain-Based Structure**
  Each module represents a business domain (auth, cart, product, etc.)

* **Microservice Alignment**
  Frontend modules map directly to backend services

* **Separation of Concerns**

  * `shared/` → reusable logic
  * `modules/` → business logic
  * `widgets/` → UI sections

* **Scalability**
  Easy to add new modules without affecting existing ones

---

## 🔗 Example Mapping

| Backend Service | Frontend Module   |
| --------------- | ----------------- |
| Auth Service    | `modules/auth`    |
| Product API     | `modules/product` |
| Cart API        | `modules/cart`    |
| Order API       | `modules/order`   |

---

## ⚙️ Environment Setup

Environment variables are managed using Vite:

```
.env.development
.env.production
.env.staging
```

Example:

```
VITE_API_URL=http://localhost:5000
VITE_AUTH=/auth
VITE_CART=/cart
```

---

## 🚀 Development

```
npm install
npm run dev
```

---

## 🏗️ Build

```
npm run build
npm run preview
```

---

## 📌 Best Practices

* Keep modules isolated (no cross-module dependency)
* Use `shared/` only for reusable logic
* Store API logic inside each module (`modules/*/api`)
* Use layouts with `<Outlet />` for page composition

---

## 🎯 Summary

This architecture ensures:

* Clean code organization
* High scalability
* Microservice compatibility
* Easy team collaboration

---
