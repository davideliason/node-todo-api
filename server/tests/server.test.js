const expect = require('expect');
const request = require('request');
// need to load in express.app for access to server => supertest
const { app } = require('./../server');
// need to load our Todo model
// we will be querying the db so this is necessary
const { Todo } = require('./../models/Todo');

// will use describe to group the test routes
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var test = 'Test todo text';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)   // assertion #1
            .expect((res) => {  // assertion #2
                expect(res.body.text).toBe(text); // custom expect assertion
            })
            .end(err, res) => {  // still need to check db
            if (err) {
                return done(err);  // stop execution
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1); // assertion #1
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        }
    });
});