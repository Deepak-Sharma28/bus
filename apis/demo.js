const { check, validationResult } = require('express-validator');

module.exports = (UserModel, Router) => {
    Router.post('/api/users/user/signup', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'email is required').isEmail(),
        check('password', 'password is required').isLength({ min: 6 })
    ], async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ "errors": errors.array() });
        }
        const {
            name,
            email,
            password
        } = req.body;

        try {
            let user = await UserModel.findOne({ email });

            if (user) {
                return res.status(400).json({
                    errors: [{ msg: "user already exists" }]
                });
            }

            user = new UserModel({
                name: name,
                email: email,
                password: password,
            });
            // console.log(user);
            user.save();


            return res.json({ msg: "you have successfully logged in" });


        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }

    });
};