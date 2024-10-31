# Timesheet App

A robust and user-friendly timesheet tracking application built using **React** with **Inertia.js** and **Laravel**. This app is containerized with Docker for efficient development and deployment, featuring two containers: one for the **database** and another running on **Ubuntu Linux**.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Docker Configuration](#docker-configuration)
- [Modular Architecture](#modular-architecture)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Time Tracking**: Log work hours with precise start and end times, calculate overtime, and track double time.
- **Dynamic Row Management**: Add, edit, and delete time-tracking entries on the fly.
- **Data Persistence**: Store timesheet data with a backend database.
- **Dockerized Environment**: Simplified setup and deployment using Docker with separate containers for the app and the database.
- **Interactive Frontend**: A sleek user interface built with React, powered by Inertia.js for seamless client-server interaction.

## Technology Stack

- **Frontend**: React, Inertia.js, Redux Toolkit
- **Backend**: Laravel
- **Database**: MySQL
- **Containerization**: Docker
- **Environment**: Ubuntu Linux

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/timesheet-app.git
   cd timesheet-app
   ```

2. **Environment Configuration**  
   Copy the `.env.example` file to `.env` and configure your environment settings.
   ```bash
   cp .env.example .env
   ```

3. **Install Dependencies**
    - Install the backend dependencies:
      ```bash
      composer install
      ```
    - Install the frontend dependencies:
      ```bash
      npm install
      ```

4. **Set Up Docker Containers**
    - Ensure Docker is installed and running.
    - Build and start the containers:
      ```bash
      docker-compose up -d
      ```
    - The application will be available at `http://localhost:8002` by default, and the database at `localhost:3306`.

5. **Database Migration**
    - Run the migrations to set up the database tables:
      ```bash
      php artisan migrate
      ```

## Docker Configuration

The application is set up with a `docker-compose.yml` file that defines two containers:

- **App Container**: Runs on Ubuntu Linux and houses the Laravel application.
- **Database Container**: A MySQL container used to persist application data.

### Docker Setup Summary

- **Database**:
-     image: mysql:5.7
      container_name: db-server
      environment:
          MYSQL_ROOT_PASSWORD: root
          MYSQL_DATABASE: timesheet_dev
          MYSQL_USER: username
          MYSQL_PASSWORD: 'password'
      volumes:
          - db_data:/var/lib/mysql
          - ./init-db.sql:/docker-entrypoint-initdb.d/init-db.sql
      ports:
          - "3307:3306

- **App**:
-     web:
      build: .
      container_name: v3-server
      ports:
      - "8002:80"
      volumes:
      - .:/var/www/html
      depends_on:
      - db
      environment:
      - DB_HOST=db
      - DB_DATABASE=timesheet_dev
      - DB_USERNAME=username
      - DB_PASSWORD=passsowrd
-     volumes:
        db_data:

## Modular Architecture

This project utilizes the [InterNACHI Modular](https://github.com/InterNACHI/modular) package to implement a modular architecture in Laravel. This allows for better code organization, scalability, and maintainability by structuring the application into individual, self-contained modules.

For more details, see the [InterNACHI Modular repository](https://github.com/InterNACHI/modular).

## Usage

1. **Accessing the App**: Go to `http://localhost:8000` to view the application.
2. **Using Docker**: If you using docker to run the app, then you can access it on `http://localhost:8002` 
3. **Adding Time Entries**: Use the timesheet UI to add new entries by specifying start and end times.
3. **Editing Entries**: Edit existing entries, and changes will reflect in real-time.
4. **Calculate Overtime**: Automatically calculates overtime and double time based on your custom rules.

## Folder Structure

```plaintext
.
├── app               # Laravel application files
├── app-module        # Modules folder for modular react components
├── bootstrap         # Boostrap config
├── config            # App config files
├── init-db.sql       # Folder for all extracted database
├── public            # Public resources
├── resources         # React components and frontend assets
├── routes            # React main routes
├── storage           # Storage folder
├── docker-compose.yml
├── Dockerfile
├── .env.example      # Example environment configuration
├── package.json      # Node.js dependencies
└── README.md         # Project documentation
```
## Changelog

For a detailed list of changes, please see the [Changelog](./CHANGELOG.md).
## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Push to the branch and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
