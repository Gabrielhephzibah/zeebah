<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<!-- router.post("/login", (req, res, next) => {
    console.log(req.body)
    User.find({ username: req.body.username })
    .exec()
    .then(user => {
        console.log(user)
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if (result) {
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_KEY, {
                    expiresIn: "24hrs"
                });
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        });
    })
    .catch(err => console.log(err));
}); -->