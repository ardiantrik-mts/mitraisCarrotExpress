const { beforeEach, afterAll } = require('@jest/globals');
const request = require('supertest')
const app = require('../app')

// beforeAll(done => {
//     done()
//   })

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

describe("given url input false", () => {
    test("properly redirect to error message 404", async () => {
        const response = await request(app).get("/something");
        // // // const user = await User.findById(req.params.id);
        console.log(response);
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("URL not found!");
        // await request(app).get("/item").expect(200);
    });
});

// afterAll(done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     mongoose.connection.close()
//     done()
//   })
