const Item = require('../models/item');
const { beforeEach, afterAll } = require('@jest/globals');
const supertest = require('supertest')
const app = require('../app')
// import app from '../app.js';

// describe("given input of item", () => {
//     test("properly insert", async () => {
//         const response = await request(app).post("/item").send({
//             "itemName": "sego goreng",
//             "itemStock": 20,
//             "description": "nasi yang digoreng"
//         });
//         // const user = await User.findById(req.params.id);
//         expect(response.statusCode).toBe(200);
//     })

// });
beforeEach( async () => {
    await Item({
            itemName: "sego goreng",
            itemStock: 20,
            description: "nasi yang digoreng"
        }).save();
});

describe("given output of item", () => {
    test("properly fetch", async () => {
        const response = await request(app).get("/item");
        // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(200);
    });

});
