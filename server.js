'use strict';

const express = require('express');

const app = express();

const obj = {name: "Test peeps", age: 27};

app.get('/', (request, response) => response(200).json(obj));

app.listen(3000);