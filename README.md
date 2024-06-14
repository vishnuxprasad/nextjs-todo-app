# To-Do App built with Next.js

This is a simple To-Do application built with Next.js, styled using Tailwind CSS and daisyUI, and uses JSON Server as a mock backend to store the tasks. This README will guide you through the steps to set up and run the application on your local machine.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)

## Features

- Add, edit, and delete tasks.
- Mark tasks as completed.
- Styled using [Tailwind CSS](https://tailwindcss.com/).
- Custom styling with [daisyUI](https://daisyui.com/) component library.
- JSON Server for a mock backend ([GitHub](https://github.com/typicode/json-server/tree/v0)).
- Built with [Next.js](https://nextjs.org/), a React framework.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- npm or yarn
- Git

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vishnuxprasad/nextjs-todo-app.git
   cd nextjs-todo-app
   ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

## Running the Application

1. **Start JSON Server:**

    ```bash
    npm run json-server
    ```

JSON Server will start on http://localhost:3001. You can access the JSON data by navigating to http://localhost:3001/tasks.

2. **Start the Next.js development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```
    
Your application should now be running at http://localhost:3000.

## Usage

- **Add Task:** Click on the "ADD NEW TASK" button, enter the task details, and submit.
- **Edit Task:** Click on the edit icon next to the task, update the task details, and submit.
- **Delete Task:** Click on the delete icon next to the task to remove it.
- **Mark Task as Completed:** Check the checkbox next to the task to mark it as completed.





