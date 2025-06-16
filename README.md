# 🌍 Agroecology Content API – Scalable Backend

## 📘 API Overview

This project is a **backend api** built with **Node.js/Express**, designed to power the Agroecology InfoHub consumer platform. It provides a modular, scalable RESTful API for serving dynamic content such as products, outlet data, FAQs, blogs, and dashboard metrics.

---

## 🎯 Objective

Create a robust, internationalized API backend that supports the frontend Agroecology InfoHub prototype. The backend handles content delivery, basic user authentication, and supports multilingual responses (English & French).

---

## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **PostgreSQL** + **Knex.js**
- **Jest** (for API testing)
- **JWT** (for optional authentication)
- **i18n** (Internationalization support)

---

## 🚀 Features Implemented

### 1. 📡 RESTful API Endpoints

| Endpoint         | Description                              |
|------------------|------------------------------------------|
| `GET api/products`  | List of agroecological products           |
| `GET api/outlets`   | Outlet data with coordinates & categories |
| `GET api/faqs`      | Frequently asked questions                |
| `GET api/blogs`     | List blog posts                          |
| `POST api/blogs`    | Create a new blog post *(JWT Protected)* |
| `GET api/dashboard` | Returns mock metrics (users, products, etc.) |
| `POST api/ingest?table=products` | Supports file upload to the products table|
| `POST api/auth/register` | Handles user registration |
| `POST api/auth/login` | Login using registered credentials |
--- 

### 2. 🧩 Database & Schema

Supports **PostgreSQL** (via Knex.js).  
Entities include:

- **Products**
- **Outlets**
- **Blogs**
- **Users**
- **FAQs**

Each model is designed with scalability and data integrity in mind.

---

### 3. 🌐 Internationalization (i18n)

- FAQ responses and product descriptions are available in **English** and **French**.
- Simple JSON-based translation structure or middleware used to return language-specific responses.

---

### 4. 📥 Data Ingestion

- A utility route or script allows admins to upload JSON files to populate:
  - Products
  - FAQs
  - Blogs
  - Outlets

---

### 5. 🔐 Authentication (Bonus)

- JWT-based token authentication implemented on `POST /blogs`.
- Middleware checks for valid tokens before allowing blog creation.

---

### 6. 🧪 API Testing

- At least **3 test cases** implemented using:
  - **Jest** 
- Covers:
  - Successful data retrieval
  - Blog creation (with and without auth)
  - Successful JSON file upload to populate products table

---

## 📦 Getting Started

### Prerequisites

- Node.js ≥ 20.5.x
- PostgreSQL with Knex*
- Postman (for testing)

---

### 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/wycliffe-kip/agroecology-api.git
cd agroecology-api

# Install dependencies
npm install

###  🌱 Running the Server
bash
Copy
Edit
# Development mode
npm run dev

# Production mode
npm start
### ⚙️ Environment Variables
Create a .env file in the root:

For PostgreSQL:

DB_CLIENT=pg
DB_HOST=127.0.0.1
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=agroecology

### 🧪 Running Tests

npm test
### 📁 Project Structure

agroecology-api/
├─ config/
│  └─ knex.js
├─ core/
│  ├─ middleware/
│  │  ├─ auth.js
│  │  ├─ authMiddleware.js
│  │  └─ errorHandler.js
│  ├─ services/
│  └─ utils/
│     ├─ auditUtils.js
│     ├─ i18n.js
│     └─ jwt.js
├─ db/
│  ├─ migrations/
│  │  ├─ 20250615063803_create_users_table.js
│  │  ├─ 20250615063850_create_products_table.js
│  │  ├─ 20250615063901_create_outlets_table.js
│  │  ├─ 20250615063902_create_blogs_table.js
│  │  └─ 20250615063902_create_faqs_table.js
│  └─ seeds/
│     ├─ aseed_users.js
│     ├─ seed_blogs.js
│     ├─ seed_faqs.js
│     ├─ seed_outlets.js
│     └─ seed_products.js
├─ features/
│  ├─ auth/
│  │  ├─ auth.controller.js
│  │  ├─ auth.routes.js
│  │  └─ auth.service.js
│  ├─ blogs/
│  │  ├─ blog.controller.js
│  │  ├─ blog.model.js
│  │  └─ blog.routes.js
│  ├─ dashboard/
│  │  ├─ dashboard.controller.js
│  │  └─ dashboard.routes.js
│  ├─ faqs/
│  │  ├─ faq.controller.js
│  │  ├─ faq.model.js
│  │  └─ faq.routes.js
│  ├─ ingest/
│  │  ├─ ingest.controller.js
│  │  └─ ingest.routes.js
│  ├─ outlets/
│  │  ├─ outlet.controller.js
│  │  ├─ outlet.model.js
│  │  └─ outlet.routes.js
│  ├─ products/
│  │  ├─ product.controller.js
│  │  ├─ product.model.js
│  │  └─ product.routes.js
│  ├─ upload/
│  └─ users/
├─ locales/
│  ├─ en/
│  │  └─ en.json
│  └─ fr/
│     └─ fr.json
├─ routes/
│  └─ index.js
├─ src/
│  └─ data/
│     └─ products.json
├─ tests/
│  ├─ blogs.test.js
│  ├─ ingest.test.js
│  ├─ products.test.js
│  └─ valid-products.json
├─ .env
├─ .env.test
├─ agroecology-api@1.0.0
├─ app.js
├─ knexfile.js
├─ NODE_ENV=test
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.js
├─ swagger.js
└─ test-db.js

### 📄 License
This project is for demonstration purposes only.

### 🙌 Acknowledgments
Express.js for building fast APIs

PostgreSQL / Knex for database abstraction

i18next or custom middleware for i18n

Jestfor test automation
