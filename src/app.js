import express from 'express';
const app= express();
const PUERTO= 8080;


app.use (express.json ());
app.use (express.urlencoded ({extended:true}));
app.use(express.static('./src/public'))