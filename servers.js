const Router = require("express").Router();
const fs = require("fs");
const UserModel = require('./models/User');
const { check, validationResult } = require('express-validator');

require('./apis/demo')(UserModel, Router);

module.exports = Router;