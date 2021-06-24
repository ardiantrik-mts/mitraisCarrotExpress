const Item = require('../models/item');
const { beforeEach, afterAll } = require('@jest/globals');
const request = require('supertest')
const app = require('../app')
const  mongoose  = require("mongoose");
// import app from '../app.js';

beforeAll(done => {
    done()
  })

describe("given input of item", () => {
    test("properly insert", async () => {
        const response = await request(app).post("/item").send({
            "itemName": "sego goreng",
            "itemStock": 20,
            "description": "nasi yang digoreng"
        });
        // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(200);
    });

    test("failed to insert", async () => {
        const response = await request(app).post("/item").send({
            "itemStock": 20,
            "description": "nasi yang digoreng"
        });
        // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(400);
    });

});

describe("given output of item", () => {
    test("failed to fetch", async () => {
        const response = await request(app).get("/item");
        // // // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(400);
        // await request(app).get("/item").expect(200);
    });

    test("properly fetch", async () => {
        const response = await request(app).get("/item");
        // // // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(200);
        // await request(app).get("/item").expect(200);
    });

    test("properly fetch with parameter", async () => {
        const response = await request(app).get("/item/sego");
        // // // const user = await User.findById(req.params.id);
        expect(response.statusCode).toBe(200);
        // await request(app).get("/item").expect(200);
    });

    
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
  })
