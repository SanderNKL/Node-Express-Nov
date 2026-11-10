import express from "express";

import userRouter from "./routers/userRouter.js";


const app = express();

/* Legg til støtte for å lese JSON data fra body */
app.use(express.json())

/* Vårt første Endepunkt! */
app.get('/', (req, res) => {
    res.json({ data: 'Hello World!' })
})

/* Våre Routes */
app.use('/users', userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});