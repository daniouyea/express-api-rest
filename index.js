//const express = require("express");
import express from "express";
//import data from "./data.json" assert {type: 'json'};
import db from "./db.js";
//import bodyParser from "body-parser";

const app = express();
app.use(express.json());

//API REST
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
});

//USERS
app.get('/users', async (req, res) => {
    const users = await db.users()
    return res.status(200).send(users);
});
app.get('/user/:id', async (req, res) => {
    const user = await db.user(req.params.id);
    if (user) {
        return res.status(200).send(user);
    }
    return res.status(404).send({ message: 'User not found' });
});
//add
app.post('/user', async (req, res) => {
    if (!req.body?.name || !req.body?.email || !req.body?.username) {
        return res.status(400).send({ message: 'Post data not found' });
    }
    const { name, username, email } = req.body;
    if (!name || !username || !email) {
        return res.status(400).send({ message: 'Please, fill all the fields' });
    }

    if (await db.addUser({ name, username, email })) {
        return res.status(201).send({ message: 'User created' });
    }
    return res.status(500).send({ message: 'Error creating user' });
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

