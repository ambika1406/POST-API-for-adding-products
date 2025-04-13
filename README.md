Ecommerce API
This is a MERN stack-based e-commerce API that allows users to add products, sign up, and sign in.

Features
- Add products with details like title, price, category, image, rating, and more.
- Retrieve all product information.
- User signup with necessary details.
- User signin with authentication using JWT.


Folder Structure
/models
   ├── index.js  (Main server file)
   
/routes
   ├── product.js
   ├── signup.js
   ├── signin.js
   
/models
   ├── product.js
   ├── user.js



Installation & Setup
- Clone the Repositorygit clone <repository-url>

- Install Dependenciesnpm install

- Setup MongoDB- Ensure MongoDB is installed and running.
- Update the connection string in index.js if necessary.

- Run the Servernode models/index.js



API Endpoints
Product Routes
- POST /products - Add a new product.
- GET /products - Retrieve all products.

User Authentication
- POST /signup - Register a new user.
- POST /signin - Login with roll number and password.




