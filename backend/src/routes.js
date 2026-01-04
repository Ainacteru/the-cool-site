console.log('routes.js loaded');


const express = require('express');
const router = express.Router();
const { bleh } = require('./ew');

router.get('/', bleh);

module.exports = router;
