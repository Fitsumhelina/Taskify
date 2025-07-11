# 🧠 Simple Task Manager API (TypeScript + Express + Prisma)

## 📌 Description

This project is a secure and scalable **RESTful API** built with:

* **Node.js + Express.js** for server logic
* **TypeScript** for safer, cleaner code
* **Prisma ORM** for database interaction
* **JWT** for authentication
* **bcrypt** for password hashing

It provides **user registration/login**, **task management**, and **user profile control** — all protected by JWT middleware.

---

## 🗂️ Project Structure

```
├── prisma/                 # Prisma schema & DB migration logic
├── src/
│   ├── controller/         # Logic for auth, task, and user
│   │   ├── authController.ts
│   │   ├── taskController.ts
│   │   └── userController.ts
│   ├── middleware/
│   │   └── authMiddleware.ts   # JWT verification middleware
│   ├── routes/
│   │   ├── taskRoute.ts        # /api/tasks
│   │   └── userRoute.ts        # /api/users
│   ├── app.ts                 # Main express app
│   ├── caching.ts             # Optional (Redis/local caching)
│   └── queries.ts             # Optional (custom queries)
├── .env                      # Env variables like DB and JWT secret
├── nodemon.json              # Auto-reloading config for dev
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript config
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file at the root with:

```env
DATABASE_URL=postgresql://<your-user>:<password>@localhost:5432/<your-db>
JWT_SECRET=your_jwt_secret
PORT=5000
```

Make sure to run:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

## 💻 Running the App (Development Mode)

You can run it with `ts-node` and `nodemon`:

```bash
npx ts-node app.ts 
```

### ✅ `nodemon.json`

Ensure this config exists:

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/app.ts"
}
```

### ✅ Scripts in `package.json`

```json
"scripts": {
  "dev": "nodemon",
  "build": "tsc",
  "start": "node dist/app.js"
}
```

---

## 🔐 Auth & User Endpoints

**Base Path:** `/api/users`

| Method | Endpoint    | Protected | Description                 |
| ------ | ----------- | --------- | --------------------------- |
| POST   | `/register` | ❌         | Register new user           |
| POST   | `/login`    | ❌         | Login and receive JWT token |
| GET    | `/profile`  | ✅         | Get current user profile    |
| PUT    | `/profile`  | ✅         | Update user name/email      |
| DELETE | `/profile`  | ✅         | Delete user and their data  |

### 🔐 JWT Usage

All protected routes require the following header:

```
Authorization: Bearer <your_token_here>
```

---

## 📋 Task Endpoints

**Base Path:** `/api/tasks`

| Method | Endpoint     | Protected | Description                |
| ------ | ------------ | --------- | -------------------------- |
| POST   | `/`          | ✅         | Create a new task          |
| GET    | `/`          | ✅         | Get all tasks for the user |
| PUT    | `/:id`       | ✅         | Update a task              |
| DELETE | `/tasks/:id` | ✅         | Delete a task              |

---

## 📦 Example JSON Requests

### 🔑 Register

```json
POST /api/users/register
{
  "name": "fitsum",
  "email": "fitse@gmail.com",
  "password": "1234",
  "confirmPassword": "1234"
}
```

### 🔑 Login

```json
POST /api/users/login
{
  "email": "fitse@gmail.com",
  "password": "1234"
}
```

### 📌 Create Task

```json
POST /api/tasks/
Authorization: Bearer <JWT_TOKEN>

{
  "name": "Finish project",
  "status": "in-progress",
  "userId": 1
}
```

---

## 🔍 Error Handling

* 400 for validation errors
* 401 for auth errors
* 500 for internal server issues (with `console.error`)

---

## ✨ Improvements You Could Add

* ✅ Zod or Joi for request validation
* ✅ Swagger documentation
* ✅ Role-based access control
* ✅ Pagination for task fetching
* ✅ Unit tests with Jest or Vitest

---

## 🧠 Author

Built by **Fitsum**, a passionate software engineer based in Ethiopia 🇪🇹.

