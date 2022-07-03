const {faker} = require("@faker-js/faker");
const express = require("express");

const app = express();
const port = 8000;


const fakeUser = () => ({
    userId: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
});

const fakeCompany = () => ({
    userId: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const createUser = fakeUser(); 
    res.json(createUser);
});

app.get("/api/companies/new", (req, res) => {
    const createCompany = fakeCompany(); 
    res.json(createCompany);
});

app.get("/api/user/company", (req, res) => {
    const createUser = fakeUser(); 
    const createCompany = fakeCompany();
    const userCompany = {
        user: createUser,
        company: createCompany,
    };
    res.json(userCompany);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
