# Woodside Bazaar

Woodside Bazaar is an online grocery store that allows users to shop the freshest of ingredients! This mock application is meant to serve as a template for local mom/pop stores, and further customizations can be made based on the client's request.

## Tech Stack

**Client:** `Typescript`, `React`, `React Bootstrap`, `Redux Toolkit`

**Server:** `Node`, `Express`, `MongoDB`

## Demo

Here's a walkthrough of how the app functions:

- User loads into the home page & looks through the website promo banner. Then heads to the product page and select a variety of products to cart.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarIntro.gif)
  <br/>

- User can toggle the quantity of their selected products in cart. There are buttons that also allow user to clear entire cart or to continue shopping in product page.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarCart.gif)
  <br/>

## Deployment

Clone this repository and install npm packages on both client & server side.

```bash
  npm install
```

Then, to deploy this project run the following on client & server terminal:

```bash
  npm run dev
```

## Database Models

#### Users

- All user information is stored in database when registering account. Login is verified by comparing email and password to user input. The passwords saved in db are encrypted for extra security.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarUsermodel.gif)
  <br/>

#### Products

- All products were manually imported into product table and are accessible to frontend via RTK Query calls.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarProductmodel.gif)
  <br/>

## Future Features

In future versions, I plan on implementing a variety of features:

- Adding user order's to their history & showing it to them in a dedicated profile page
- Integrating Stripe API payment service
