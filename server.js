/**
 * server.js - Express application entry point for the Artifact2 tutorial server.
 *
 * Introduces the Express.js web framework (requirement R2) and serves two HTTP
 * GET endpoints:
 *   - GET /              -> "Hello world"  (original, preserved - requirement R3)
 *   - GET /good-evening  -> "Good evening" (new, additive       - requirement R4)
 *
 * The server listens on process.env.PORT when provided, otherwise port 3000.
 * Run with `npm start` (or `node server.js`).
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Existing endpoint (preserved): respond with the original greeting.
app.get('/', (req, res) => res.send('Hello world'));

// New endpoint (additive): respond with the evening greeting.
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Bind the HTTP listener so both routes become reachable.
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
