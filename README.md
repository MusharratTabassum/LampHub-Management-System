
# LampHub

Overview : LampHub is a full stack niche website with dynamic functionalities and responsive design.Users of two roles can interact with the system by using the web frontend.As data source, NoSQL database is used (MongoDB).
It allows user to create an account, buy items and delete them.Email/password firebase authentication has been added.The backend services are deployed on Heroku.The frontend is deployed on firebase.All the services and UI are done using Node Express and React js.

## Live Link
[LampHub](https://lampshub.web.app/)


## API Reference

#### Get all products

```http
  https://secure-crag-28279.herokuapp.com/products
```
#### Get all order details

```http
  https://secure-crag-28279.herokuapp.com/bookings
```

#### Get booking

```http
  https://secure-crag-28279.herokuapp.com/bookings/${id}
```

#### Get reviews

```http
  https://secure-crag-28279.herokuapp.com/reviews
```

## Role Activity

#### User:

- View the products,after login can see the product details.   
- Order any product if she/he is logged in to the site. 
- If any product is ordered by any user,she/he can see her/his orders detail. 
- If any user wants to cancel the order ,she/he can cancel. 



#### Admin:

- View the products,after login can see the product details.   
- Admin can add new product.  
- Admin can see all the orders.
- Admin can cancel any ordered item from all orders.
- Admin can update the ordered item's status of any user.
- 
## Technologies Used

- nodejs
- Express JS
- React Js
- React Router Dom
- React Bootstrap
- EmailJS
- MongoDb
- Heroku
- Firebase Authentication
- Firebase Hosting




## Admin Login Credential

Email : admin@admin.com
Password : 123456

