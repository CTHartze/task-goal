# Task/Goal Project

This project is a task management application designed to help users set and complete their tasks/goals. 

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Architecture](#project-architecture)
3. [Access/Setup Instructions](#access-or-setup-instructions)
4. [Usage Guidelines](#usage-guidelines)

## Project Overview

The Task Goal Project is a full-stack web application that allows users to create and manage tasks.

## Project Architecture

The project is divided into several key components:

1. **Frontend**: Built using React.js, the frontend provides a responsive and interactive user interface.
2. **Backend**: Implemented with Node.js and Express.js, the backend handles API requests, and database interactions.
3. **Database**: MongoDB is used for data storage.
4. **Task Management**: Core features include creating, updating, and deleting tasks.

### File Structure

```project-root
├── client/...app
│ ├── build
│ ├── public
│ ├── src
│ ├── package.json
│ └── README.md
├── server
│ ├── models
│ ├── routes
│ ├── index.js
│ ├── package.json
│ ├── Procfile
│ └── req.REST
└── README.md
```

## Access or Setup Instructions

Access the app link [here](https://taskgoal-app.netlify.app/).

Follow these steps to set up the project on your local machine:

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/CTHartze/task-goal.git
    cd task-goal
    ```

2. **Install frontend dependencies:**
    ```sh
    cd server
    npm install
    ```

3. **Install backend dependencies:**
   In another window:
   ```sh
    cd client/todo-list-mernapp
    npm install
    ```
   
### Running the Application

1. **Start the backend server:**
    ```sh
    cd server
    npm start
    ```

2. **Start the frontend development server:**
   In another window:
    ```sh
    cd client/todo-list-mernapp
    npm start
    ```

The application should now be running at `http://localhost:3000` (frontend).

## Usage Guidelines

1.  **Create Tasks:**
    - Use the form to add new tasks.

3. **Manage Tasks:**
    - View your tasks in a list.
    - Edit or delete tasks as needed.
