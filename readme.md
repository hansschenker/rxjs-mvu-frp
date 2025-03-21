# rxjs-mvu-frp

*A minimalist, strongly-typed web application architecture exploring how far you can practically take **RxJS**, **TypeScript**, **MVU**, and **Functional Reactive Programming (FRP)** principles.*

---

## 🚀 **Project Vision**

This project explores a clear and practical architectural style that relies purely on **RxJS** and **TypeScript**—without traditional web frameworks—to build robust, strongly typed, and reactive web applications using:

- **Model-View-Update (MVU) pattern**
- **Functional Reactive Programming (FRP) principles**
- **Component-Based Architecture**
- **Reactive Router and HTTP Handling**

---

## 📌 **Project Structure**

```bash
rxjs-mvu-frp/
├── src/
│   ├── core/             # MVU Reactive Core (Model, Update, ReactiveStore)
│   ├── components/       # Strongly-typed UI Components
│   ├── router/           # Reactive Routing
│   ├── http/             # Reactive HTTP Requests
│   ├── forms/            # Reactive Forms
│   ├── animations/       # Reactive Animations
│   ├── persistence/      # Reactive State Persistence
│   ├── debug/            # Reactive Debugging Tools
│   └── main.ts           # Application Entry Point
│
├── tests/                # Tests (Vitest)
├── vite.config.ts        # Vite Configuration
├── package.json          # Dependencies & scripts
└── README.md             # Project Documentation
