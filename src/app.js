import passport from 'passport';
import initializePassport from './config/passport.config.js';
import express from 'express';
const app= express();
const PUERTO= 8080;
import './database.js'
app.use(express.static('./src/public'))
import viewsRouter from './routes/views.router.js'
import userRouter from './routes/user.router.js'
//Middleware
app.use (express.json ());
app.use (express.urlencoded ({extended:true}));
import cookieParser from 'cookie-parser';
app.use (cookieParser());
app.use(passport.initialize());
initializePassport();

//Express handlebars
import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


//Rutas
app.use("/", viewsRouter)
app.use("/", userRouter)


app.listen (PUERTO, ()=> { console.log(`Escuchando el puerto ${PUERTO}`);})