# 🚀 Docker Compose & Multi-Service Applications Demonstration

A modern **3-tier containerized web application** built using **React**, **Node.js (Express)**, and **Redis**, orchestrated with **Docker Compose**.

This project serves as the foundation for an **AI Interview Platform**, demonstrating how frontend, backend, and database services communicate in an isolated and scalable container environment.

---

# 📌 Features

* ⚛️ React frontend for the user interface
* 🚀 Express.js backend API
* ⚡ Redis for fast in-memory data storage
* 🐳 Fully containerized using Docker Compose
* 🔄 Hot reloading for frontend and backend during development
* 📦 Isolated services with internal Docker networking
* 🛠️ Easy setup with a single command

---

# 🏗️ Project Architecture

```
                +--------------------+
                |   React Frontend   |
                |      (web)         |
                +---------+----------+
                          |
                    HTTP Requests
                          |
                          ▼
                +--------------------+
                | Express Backend API|
                |       (api)        |
                +---------+----------+
                          |
                    Redis Client
                          |
                          ▼
                +--------------------+
                |       Redis        |
                |    (redis_db)      |
                +--------------------+
```

---

# 📂 Project Structure

```
project-root/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── api/                    # Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── Dockerfile
│   └── server.js
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

---

# 🧰 Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| React          | Frontend UI                   |
| Node.js        | Runtime Environment           |
| Express.js     | Backend API                   |
| Redis          | In-memory Database            |
| Docker         | Containerization              |
| Docker Compose | Multi-container orchestration |

---

# 📋 Prerequisites

Before running the project, install:

* Docker Desktop
* Docker Compose (included with Docker Desktop)

Verify Docker is running:

```bash
docker --version
docker compose version
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Narain-karthick/Docker-Compose-Demonstration.git

cd <project-folder>
```

---

## 2. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

REDIS_HOST=redis_db

REDIS_PORT=6379

CLIENT_PORT=3000
```

> If a `.env.example` file is available, copy it and update the required values.

---

## 3. Build and Start the Containers

```bash
docker compose up -d --build
```

Docker Compose will:

* Build the frontend image
* Build the backend image
* Pull the Redis image
* Create a Docker network
* Start all services

---

# 🌐 Access the Application

After the containers start successfully:

### Frontend

```
http://localhost:3000
```

*(or `http://localhost:5173` if using Vite)*

---

### Backend API

```
http://localhost:5000/api/count
```

---

### Redis

Runs internally inside Docker and is accessible by the backend using:

```
redis_db:6379
```

---

# 🐳 Docker Services

| Service  | Description     |
| -------- | --------------- |
| web      | React frontend  |
| api      | Express backend |
| redis_db | Redis database  |

---

# 🔄 Hot Reloading

The project uses **bind mounts** in Docker Compose.

This means:

* Editing React code instantly refreshes the UI.
* Editing Express code automatically restarts the server.
* No need to rebuild Docker images for normal code changes.

Only rebuild when:

* Installing new packages
* Updating Dockerfiles
* Changing container configuration

Rebuild command:

```bash
docker compose up -d --build
```

---

# 🧑‍💻 Useful Docker Commands

## Start the Project

```bash
docker compose up -d
```

---

## Build and Start

```bash
docker compose up -d --build
```

---

## Stop Containers

```bash
docker compose down
```

This stops all containers while preserving Redis data.

---

## Stop Containers and Remove Volumes

```bash
docker compose down -v
```

This performs a complete reset by deleting all persistent Redis data.

---

## View Live Logs

```bash
docker compose logs -f
```

View logs for a specific service:

```bash
docker compose logs -f api

docker compose logs -f web

docker compose logs -f redis_db
```

---

## List Running Containers

```bash
docker ps
```

---

## Restart Containers

```bash
docker compose restart
```

---

## Access Redis CLI

```bash
docker exec -it $(docker ps -qf "name=redis_db") redis-cli
```

Example:

```bash
127.0.0.1:6379> KEYS *

127.0.0.1:6379> GET count
```

---

# 🧪 Development Workflow

1. Start Docker containers.

```bash
docker compose up -d
```

2. Modify frontend or backend code.

3. Save the file.

4. Docker automatically updates the running container.

5. Refresh the browser to view changes.

---

# 📦 API Endpoint

Example endpoint:

```
GET /api/count
```

Response:

```json
{
    "count": 15
}
```

---

# 🛠️ Troubleshooting

### Containers are not starting

Check logs:

```bash
docker compose logs
```

---

### Port already in use

Stop the conflicting process or change the port in:

* `.env`
* `docker-compose.yml`

---

### Redis connection failed

Verify Redis is running:

```bash
docker ps
```

Check Redis logs:

```bash
docker compose logs redis_db
```

---

### Rebuild Everything

```bash
docker compose down -v

docker compose up -d --build
```

---
