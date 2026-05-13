# Week 3 - Backend API

This folder contains a small Node.js backend project using Express, MongoDB, and Mongoose.

## Topics Covered

- Express server setup
- MongoDB connection using Mongoose
- REST API routes
- Product CRUD operations
- Mongoose schema validation
- Environment variables with `dotenv`
- Request testing using `req.http`

## Project Files

| File/Folder | Description |
|---|---|
| `server.js` | Main backend server file. Connects to MongoDB and starts the Express server on port `4000`. |
| `APIs/ProductAPI.js` | Product API routes for create, read, update, and delete operations. |
| `models/productModel.js` | Product schema and Mongoose model. |
| `req.http` | Sample API requests for testing user and product APIs. |
| `.env` | Stores environment variables. |
| `package.json` | Project dependencies and scripts. |

## Product API Routes

| Method | Route | Description |
|---|---|---|
| `POST` | `/product-api/products` | Create a product |
| `GET` | `/product-api/products` | Get all products |
| `GET` | `/product-api/products/:id` | Get product by product ID |
| `PUT` | `/product-api/products/:id` | Update product |
| `DELETE` | `/product-api/products/:id` | Delete product |

## Product Fields

- `productName`
- `productId`
- `price`
- `brandName`

## How to Run

```bash
npm install
npm start
```

Server runs at:

```text
http://localhost:4000
```
