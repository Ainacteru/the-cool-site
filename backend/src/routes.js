console.log('routes.js loaded');


const express = require('express');
const router = express.Router();
const { bleh, heartbeat } = require('./ew');

router.get('/', bleh);
router.get('/heartbeat', heartbeat)

module.exports = router;
