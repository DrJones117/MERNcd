const { faker } = require('@faker-js/faker')

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.database.mongodbObjectId()
    }
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id:faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newFake
}

const newFakeUser = createUser();
const newFakeCompany = createCompany();
const newFakeCombo = {
    user: newFakeUser,
    company: newFakeCompany
};

console.log(newFakeUser) 
console.log(newFakeCompany)
console.log(newFakeCombo)


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("api/users/new", (req, res) => {
    res.send(newFakeUser)
})

app.get("api/companies/new", (req, res) => {
    res.send(newFakeCompany)
})

app.get("api/user/company", (req, res) => {
    res.send(newFakeCombo)
})

const server = app.listen(8000, () =>
    console.log(`Running on port ${port}!`)
);
