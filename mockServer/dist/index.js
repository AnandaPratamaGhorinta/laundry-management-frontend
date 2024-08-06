"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// New API route: GET /users, returning a list of users
app.get('/users', (request, response) => {
    response.json([
        { id: 546, username: 'John' },
        { id: 894, username: 'Mary' },
        { id: 326, username: 'Jane' }
    ]);
});
// DELETE user
app.delete('/users', (request, response) => {
    response.json({ result: 'success' });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
