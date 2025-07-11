# Barry's Boards - Setup Guide

This guide will help you set up and run the Barry's Boards ecommerce platform locally.

## Prerequisites

- **Java 17** or higher
- **Node.js 18** or higher
- **PostgreSQL 12** or higher
- **Maven** (for backend)
- **npm** (for frontend)

## Quick Start

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd barrys_boards
```

### 2. Database Setup

1. Install PostgreSQL if you haven't already
2. Create the database:

```sql
CREATE DATABASE barrys_boards;
CREATE USER barrys_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE barrys_boards TO barrys_user;
```

3. Update database credentials in `backend/src/main/resources/application.properties`

### 3. Backend Setup

```bash
cd backend

# Install dependencies and run
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will start on `http://localhost:3000`

## Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```properties
# Database
DB_URL=jdbc:postgresql://localhost:5432/barrys_boards
DB_USERNAME=barrys_user
DB_PASSWORD=your_secure_password

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRATION=86400000

# Stripe (for payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```properties
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

## Features Included

### Backend (Spring Boot)
- ✅ Product catalog with categories
- ✅ RESTful API endpoints
- ✅ Database entities and relationships
- ✅ Sample data seeder
- ✅ CORS configuration
- ✅ Basic security setup

### Frontend (React + TypeScript)
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Product listing and filtering
- ✅ Search functionality
- ✅ Category-based navigation
- ✅ Product cards with add-to-cart
- ✅ Routing setup

### Database (PostgreSQL)
- ✅ User management
- ✅ Product catalog
- ✅ Shopping cart system
- ✅ Order management
- ✅ Automatic schema generation

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category
- `GET /api/products/search?query={query}` - Search products
- `GET /api/products/available` - Get available products only

## Next Steps

This is an MVP (Minimum Viable Product). To make it production-ready, consider adding:

### Backend Enhancements
- [ ] User authentication and authorization
- [ ] Shopping cart API endpoints
- [ ] Order processing with Stripe integration
- [ ] Input validation and error handling
- [ ] Logging and monitoring
- [ ] Unit and integration tests

### Frontend Enhancements
- [ ] User registration and login
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Order history
- [ ] Product detail pages
- [ ] Admin panel
- [ ] Responsive design improvements

### Infrastructure
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Production deployment
- [ ] SSL/TLS certificates
- [ ] Database backups
- [ ] Monitoring and alerting

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check database credentials in `application.properties`
   - Ensure database and user exist

2. **Frontend Build Errors**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

3. **CORS Errors**
   - Verify backend is running on port 8080
   - Check CORS configuration in backend

4. **Port Already in Use**
   - Change ports in configuration files
   - Kill processes using the ports

## Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the logs in both frontend and backend
3. Ensure all prerequisites are met
4. Verify environment variables are set correctly

## License

This project is for educational purposes. Customize as needed for your business requirements. 