const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    let person = await prisma.people.create({
    data: { name: 'Rafael' },
    })

    let people = await prisma.people.findMany({
        select: { name: true }
    })

    let html = '<h1>Full Cycle Rocks!</h1>'
    for(let pers of people) {
        html += `<h5>${pers.name}</h5>`
    }
    res.send(html)
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
