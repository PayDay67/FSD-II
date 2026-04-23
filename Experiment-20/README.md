# Testing Backend - CI/CD Pipeline Experiment-16

A simple Node.js/Express backend application demonstrating CI/CD pipeline integration with Docker and GitHub Actions.

## Features

- Express.js REST API
- Health check endpoint
- Docker containerization
- GitHub Actions CI/CD pipeline
- Multi-stage Dockerfile for optimization

## Project Structure

```
.
├── index.js              # Main application entry point
├── package.json          # Node.js dependencies
├── Dockerfile            # Docker image definition
├── .dockerignore         # Docker build exclusions
├── .gitignore            # Git exclusions
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
└── README.md             # This file
```

## Local Development

### Prerequisites
- Node.js 18+
- Docker
- Docker Compose (optional)

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

Server will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/info` - Application information

## Docker

### Build Docker Image

```bash
docker build -t testing-backend:latest .
```

### Run Container

```bash
docker run -p 3000:3000 -e NODE_ENV=production testing-backend:latest
```

## GitHub Actions CI/CD

The repository includes a GitHub Actions workflow that automatically:
1. Builds the Docker image
2. Pushes to Docker registry
3. Deploys the application

See `.github/workflows/deploy.yml` for workflow details.
