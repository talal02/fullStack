const express = require('express');
const request = require('request-promise');
var path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = '6dbde31f6d540c5f37d95767a3248373';
const BASE_URL = `http://api.scraperapi.com?api_key=${API_KEY}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/help.html'));
});

// Product Details
app.get('/product/:pid', async (req, res) => {
  const { pid } = req.params;
  try {
    const response = await request(`${BASE_URL}&url=https://www.amazon.com/dp/${pid}`);
    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }
});

// Product Reviews
app.get('/product/:pid/reviews', async (req, res) => {
  const { pid } = req.params;
  try {
    const response = await request(`${BASE_URL}&url=https://www.amazon.com/product-reviews/${pid}`);
    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }
});

// Product Offers
app.get('/product/:pid/offers', async (req, res) => {
  const { pid } = req.params;
  try {
    const response = await request(`${BASE_URL}&url=https://www.amazon.com/gp/offer-listing/${pid}`);
    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }
});

// Search Results
app.get('/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const response = await request(`${BASE_URL}&url=https://www.amazon.com/s?k=${query}`);
    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT);