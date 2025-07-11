# Barry's Boards - Custom Mechanical Keyboard Ecommerce

A full-stack ecommerce platform for custom mechanical keyboards and keyboard parts.

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Spring Boot with Java
- **Database**: PostgreSQL
- **Payment Processing**: Stripe API
- **Authentication**: JWT tokens

## Project Structure

```
barrys_boards/
├── frontend/          # React frontend application
├── backend/           # Spring Boot backend application
├── database/          # Database scripts and migrations
└── docs/             # Documentation
```

## Features (MVP)

- Product catalog with categories (keyboards, switches, keycaps, etc.)
- User authentication and registration
- Shopping cart functionality
- Secure payment processing with Stripe
- Order management
- Admin panel for product management

## Getting Started

### Prerequisites
- Node.js (v18+)
- Java 17+
- PostgreSQL
- Stripe account

### Quick Start
1. Clone the repository
2. Set up the database (see database/README.md)
3. Configure environment variables
4. Start the backend: `cd backend && ./mvnw spring-boot:run`
5. Start the frontend: `cd frontend && npm start`

## Environment Variables

Create `.env` files in both frontend and backend directories with:
- Database connection details
- Stripe API keys
- JWT secret keys