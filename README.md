# 📁 Project Structure (React + Vite | Microservice Ready)

This project follows a **modular, scalable, and microservice-aligned architecture**. Each domain is isolated into its own module, making the application easy to maintain, test, and extend.

---

## 🧱 Folder Structure

```
src/
│
├── app/                          # App bootstrap & global orchestration
│   ├── App.jsx
│   ├── main.jsx
│   ├── routes.jsx               # Central route definitions
│   │
│   ├── providers/               # Global providers
│   │   ├── ReduxProvider.jsx
│   │   └── (AuthProvider, ThemeProvider, etc.)
│   │
│   └── store/                   # 🔥 Redux global setup
│       ├── store.js
│       ├── rootReducer.js
│       ├── persistConfig.js
│
├── config/                      # Environment & API configuration
│   ├── env.js                   # import.meta.env wrapper
│   └── api.config.js            # API endpoints mapping
│
├── shared/                      # Global reusable layer
│   ├── components/              # Reusable UI components
│   ├── layouts/                 # Layouts (MainLayout, AdminLayout)
│   ├── hooks/                   # Custom hooks
│   ├── utils/                   # Utility functions
│   │   └── validators.js        # Generic validators only
│   └── services/                # 🔥 API base setup (Axios)
│       └── apiClient.js
│
├── modules/                     # Domain-based modules (Microservice aligned)
│   │
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/                 # 🔥 API calls
│   │   │   └── authApi.js
│   │   ├── store/               # 🔥 Redux slice
│   │   │   └── authSlice.js
│   │   ├── validation/          # 🔥 Validation schemas
│   │   │   └── authValidation.js
│   │   └── hooks/
│   │
│   ├── product/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   ├── store/
│   │   ├── validation/
│   │   └── hooks/
│   │
│   ├── cart/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   ├── store/
│   │   └── validation/
│   │
│   ├── order/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── validation/
│   │
│   ├── admin/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── validation/
│   │
│   └── customer/
│       ├── pages/
│       ├── components/
│       ├── api/
│       └── validation/
│
├── widgets/                     # Large UI blocks
│   ├── Header/
│   ├── Footer/
│   └── Breadcrumbs/
│
├── assets/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── styles/
│
└── index.css
```

---

## 🧠 Architecture Principles

### 🔹 Domain-Based Structure

Each module represents a business domain (auth, product, cart, etc.)

### 🔹 Microservice Alignment

Frontend modules map directly to backend services

### 🔹 Separation of Concerns

| Layer      | Responsibility                  |
| ---------- | ------------------------------- |
| `app/`     | App bootstrap, Redux, providers |
| `modules/` | Business logic                  |
| `shared/`  | Reusable/global logic           |
| `widgets/` | UI sections                     |

---

## 🔗 Example Mapping

| Backend Service | Frontend Module   |
| --------------- | ----------------- |
| Auth Service    | `modules/auth`    |
| Product API     | `modules/product` |
| Cart API        | `modules/cart`    |
| Order API       | `modules/order`   |

---

# 🗂️ State Management (Redux + Persist)

## 📍 Location

```
app/store/
```

## 📦 Responsibilities

* `store.js` → Configure Redux store
* `rootReducer.js` → Combine module reducers
* `persistConfig.js` → Configure persistence

## 🧩 Slice Placement

```
modules/*/store/*.js
```

👉 Each module owns its own state

---

# 🌐 API Architecture

## 📍 API Calls Location

```
modules/*/api/
```

👉 Each module handles its own API calls

## 📍 Shared API Client

```
shared/services/apiClient.js
```

👉 Contains:

* Axios instance
* Base URL
* Interceptors (Auth token, etc.)

---

## 🔄 API Flow

```
Component
   ↓
Redux Thunk
   ↓
Module API
   ↓
Shared API Client
   ↓
Backend
```

---

# ✅ Validation Architecture

## 📍 Validation Location

```
modules/*/validation/
```

👉 Each module defines its own validation rules

## 🧩 Example

```
modules/auth/validation/authValidation.js
```

## 📍 Usage

* UI Forms → Primary validation
* Redux Thunk → Optional safety validation
* Backend → Final validation (mandatory)

---

## 🔁 Validation Responsibility

| Layer             | Role             |
| ----------------- | ---------------- |
| Module Validation | Business rules   |
| UI                | User feedback    |
| Backend           | Final validation |

---

# ⚙️ Environment Setup

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

# 🚀 Development

```
npm install
npm run dev
```

---

# 🏗️ Build

```
npm run build
npm run preview
```

---

# 📌 Best Practices

### ✅ Do

* Keep modules isolated
* Keep API inside modules
* Keep validation inside modules
* Use shared only for reusable logic
* Persist only necessary state (auth, cart)

### ❌ Avoid

* Cross-module dependencies
* API calls inside components
* Validation inside Redux slices
* Business logic inside shared/

---

# 🎯 Summary

This architecture ensures:

* Clean and maintainable codebase
* Strong separation of concerns
* High scalability
* Microservice compatibility
* Team-friendly structure

---

## 🚀 Future Ready

This setup is ready for:

* RTK Query integration
* SSR / Next.js migration
* Micro-frontend scaling
* Large team collaboration

---
