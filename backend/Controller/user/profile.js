const User = require("../../Models/user");

const Profile = (req, res) => {

    if (!req.user) {
        return res.status(404).send({ "message": "Please Login" });
    }

    User.findOne({ _id: req.user }, (err, user) => {

        if (err) {
            return res.staus(400).send({ "message": "Something went wrong" });
        }

        if (!user) {
            return res.status(400).send({ "message": "User not Found" });
        }

        // password not return
        return res.status(200).send({
            "name": user.name,
            "email": user.email,
            "orders": user.orders,
            "location": user.location
        })
    });

}

module.exports = Profile;