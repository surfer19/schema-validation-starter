## Dog Breeds Application 🐕

A full-stack application showcasing dog breeds using React (Frontend) and Python/FastAPI (Backend).

### Prerequisites

- Node.js >= `18.0.0`
- npm >= `9.0.0`
- Python `3.x`

### Installation

1. Clone the repository:

```Bash
git clone <repository-url>
cd dog-breeds-app
```

2. Install all dependencies (both frontend and backend):

```Bash
npm run install:all
```

This will:

- Install root dependencies
- Install frontend dependencies
- Create Python virtual environment
- Install Python dependencies

### Development

Run the entire application (frontend + backend):

```Bash
npm run dev
```

Or run components separately:

```Bash
# Frontend only
npm run dev:client

# Backend only
npm run dev:api
```

### Project Structure

```
├── api
│   ├── __init__.py
│   ├── dependencies.py
│   ├── main.py
│   ├── models.py
│   └── requiremens.txt
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   └── ui
│   │   ├── features
│   │   │   └── dogs
│   │   │       ├── components
│   │   │       └── pages
│   │   ├── lib
│   │   ├── services
│   │   └── types
├── package.json
└── schema
    ├── openapi.json
    ├── template.hbs
    └── zod-schema.ts
```

### Available Scripts
- npm run install:all - Install all dependencies (frontend & backend)
- npm run dev - Run both frontend and backend in development mode
- npm run dev:client - Run frontend only
- npm run dev:api - Run backend only
- npm run build:client - Build frontend for production
- npm run lint:client - Run linting on frontend code
- npm run test:client - Run frontend tests
- npm run clean - Clean up generated files and directories

