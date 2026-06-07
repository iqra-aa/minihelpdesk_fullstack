# MiniHelpDesk

A simple Help Desk Ticket Management System built using React, TypeScript, Express, and MongoDB.

## Group Information

**Course:** Web Technologies I
**Project Title:** MiniHelpDesk
**Group Number:** 13

### Group Members

* Iqra 2312151
* Farheen Zahra 2312149


---

# Project Description

MiniHelpDesk is a web application that helps users create and manage support tickets.

The system allows users to:

* Create support tickets
* View all tickets
* Update ticket information
* Delete tickets
* Filter tickets by status
* Track ticket statistics through a dashboard
* Log in and log out of the system

The application uses a React frontend, an Express backend, and MongoDB for data storage.

---

# Technologies Used

## Frontend

* React
* TypeScript
* Vite
* React Router DOM

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* MongoDB

---

# Features

## 1. Ticket Management

Users can:

* Create tickets
* View tickets
* Edit tickets
* Delete tickets

Each ticket contains information such as:

* Title
* Description
* Status

---

## 2. Dashboard Summary

The dashboard displays:

* Total Tickets
* Open Tickets
* In Progress Tickets
* Closed Tickets

This provides a quick overview of the system.

---

## 3. Filter by Status (Product Feature)

Users can filter tickets based on their status.

Available filters:

* All
* Open
* In Progress
* Closed

This makes ticket management easier and more organized.

---

## 4. Empty State Design (Engineering Feature)

When there are no tickets available, the application displays:

"No tickets found"

This improves the user experience by providing meaningful feedback instead of showing an empty screen.

---

## 5. Delete Confirmation

Before deleting a ticket, the system asks for confirmation to prevent accidental deletion.

---

## 6. Authentication (Bonus Feature)

A simple login system has been implemented.

### Demo Credentials

Username:

admin

Password:

1234

### Authentication Features

* Login page
* Logout functionality
* Protected access to the application
* Session persistence using Local Storage

---

# Project Structure

```text
MiniHelpDesk
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── types
│   │   └── App.tsx
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   └── app.ts
│   │
│   └── package.json
│
├── README.md
└── .gitignore
```

# Installation and Setup

## Clone the Repository

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd MiniHelpDesk
```

---

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

---

## MongoDB Setup

Ensure MongoDB is installed and running.

Update the MongoDB connection string in the backend configuration if required.

---

# Screenshots

Add screenshots of:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e09e4639-0e47-4e7d-9e30-7717af133efb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/64be3aa2-26a3-4dca-88a0-f2d28d3af31b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8634f550-eb7b-42f1-90b6-8297ba0b6cb9" />



---

# Learning Outcomes

This project demonstrates:

* React component development
* TypeScript usage
* REST API development with Express
* MongoDB integration
* Routing in React
* State management
* Authentication concepts
* User experience improvements

---

# Conclusion

MiniHelpDesk is a simple ticket management system developed as part of the Web Technologies I course. The project demonstrates full-stack web development concepts using modern technologies and implements both the required Product Feature and Engineering Feature successfully.
