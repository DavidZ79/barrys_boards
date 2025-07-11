# Database Setup for Barry's Boards

This directory contains database setup scripts and instructions for the Barry's Boards ecommerce platform.

## Prerequisites

- PostgreSQL 12 or higher
- Java 17 or higher
- Maven

## Setup Instructions

### 1. Install PostgreSQL

Download and install PostgreSQL from [postgresql.org](https://www.postgresql.org/download/)

### 2. Create Database

```sql
CREATE DATABASE barrys_boards;
CREATE USER barrys_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE barrys_boards TO barrys_user;
```

### 3. Update Application Properties

Update the database connection details in `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/barrys_boards
spring.datasource.username=barrys_user
spring.datasource.password=your_password
```

### 4. Run the Application

The database schema will be automatically created when you start the Spring Boot application:

```bash
cd backend
./mvnw spring-boot:run
```

## Database Schema

The application uses JPA/Hibernate with automatic schema generation. The main entities are:

- **users** - User accounts and authentication
- **products** - Product catalog
- **carts** - Shopping carts
- **cart_items** - Items in shopping carts
- **orders** - Customer orders
- **order_items** - Items in orders

## Sample Data

The application includes a data seeder that automatically populates the database with sample products when it starts for the first time.

## Backup and Restore

### Backup
```bash
pg_dump -U barrys_user -d barrys_boards > backup.sql
```

### Restore
```bash
psql -U barrys_user -d barrys_boards < backup.sql
``` 