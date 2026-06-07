# MiniHelpDesk

## Project Overview

MiniHelpDesk is a web-based ticket management system developed as part of the BSCS Web Technologies I Final Project.

The system allows users to create, view, filter, and manage support tickets efficiently through a modern web interface connected to a MongoDB database.

---

## Group Information

**Group Number:** 13

**Project Title:** MiniHelpDesk

---

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* React Router DOM

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB

---

## Features

### Core Features

#### 1. Create Ticket

Users can create new support tickets with relevant information.

#### 2. View Tickets

All created tickets are displayed on the dashboard.

#### 3. Delete Ticket

Users can remove tickets from the system.

#### 4. Dashboard Summary

The dashboard displays:

* Total Tickets
* Open Tickets
* In Progress Tickets
* Closed Tickets

---

## Product Feature

### Filter by Status

Users can filter tickets according to their status:

* All
* Open
* In Progress
* Closed

This feature improves usability and helps users quickly find relevant tickets.

---

## Engineering Feature

### Empty State Design

When no tickets are available, the system displays a user-friendly message:

"No tickets found"

This improves the user experience and provides clear feedback.

---

## Additional Features

### Delete Confirmation

Before deleting a ticket, the user is asked for confirmation to prevent accidental deletions.

### Ticket Count Display

The system displays the number of tickets currently visible.

---

## Bonus Feature: Authentication Flow

A simple authentication system has been implemented.

### Login Credentials

Username: admin

Password: 1234

### Authentication Features

* Login Page
* Logout Button
* Protected Application Access
* Local Storage Session Persistence

---

## Project Structure

Frontend:

src/

* components/
* pages/
* types/
* App.tsx

Backend:

server/

* controllers/
* routes/
* models/
* app.ts

---

## How to Run the Project

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
npm run dev
```

### Database

Ensure MongoDB is running and properly connected.

---

## Conclusion

MiniHelpDesk demonstrates the implementation of modern web development concepts including React, TypeScript, Express, MongoDB, routing, authentication, filtering, and user experience enhancements.
