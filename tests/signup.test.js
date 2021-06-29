// const express = require('express');
const db = require('../connection/db');
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);
const Users = require('../models/User');


beforeAll(async() => {
    await db.connect();
});


afterEach(async() => await db.clearDatabase());

afterAll(async() => await db.closeDatabase());

describe('Sign up for user', () => {

    it('it should create a new account', async() => {
        const res = await request.post('/api/users/user/signup')
            .send({
                name: "Sonu",
                email: "Navgurukul2@gmail.com",
                password: 123456
            });

        expect(res.statusCode).toEqual(200);
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        expect(emailRegex.test(res.request._data.email)).toBeTruthy();
    });


    it('it should enter the user data inside the user collection', async() => {

        const users = new Users({

            name: "Sonu",
            email: "Navgurukul20@gmail.com",
            password: 123456
        });

        const { email } = users;

        users.save();

        console.log(users);

        const userData = await Users.find();

        console.log(userData, "searched");
    });
});


// jest.setTimeout(30000);