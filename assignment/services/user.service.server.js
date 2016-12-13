
module.exports = function(app, model) {

var users = model.UserModel;

    app.get("/api/user",findUser);
    app.get("/api/user/:uid",findUserById);
    app.post("/api/user",createUser);
    app.put("/api/user/:uid",updateUser);
    app.delete("/api/user/:uid",deleteUser);
    app.get("/api/login",findUserByCredentials);

    function findUserById(req, res) {
        users
            .findUserById(req.params.uid)
            .then(function (user) {

                res.send(user);
            },
            function(error) {
                res.sendStatus(400).send(error);
            });
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
            users
                .findUserByCredentials(username, password)
                .then(function(user) {
                    if(user) {
                        res.send(user);
                    }else {
                        res.send('0');
                    }
                },
                        function(error){
                        res.sendStatus(400).send(error);
                        })
    }
    function findUserByUsername(req, res) {
     var username = req.params.username;
        users
            .findUserByUsername(username)
            .then(function(user) {
                    if(user){
                        res.sendStatus(400).send("Already exist");

                    }else {
                        res.send('0');
                    }


            },
            function(error) {
                        res.send(error);
            })
    }
    function findUser(req, res) {




    }


//     function findUserById(req, res) {
//         var id = req.params.uid;
//         console.log("id" +id);
//         var user = null;
//         for(u in users) {
//
//             user = users[u];
// console.log("user" +user._id+"id"+ id );
//            console.log("isorno" + user._id == id);
//             if(user._id == id){
//                 res.send(user);
//                 console.log(user);
//                 return;
//             }
//         }
//         res.send('0');
//         return;
//
//     }



    function createUser(req, res) {
        var user = req.body;
        users
            .findUserByUsername(user.username)
            .then(
                function(newuser) {
                    if(newuser) {
                        res.sendstatus(400).send("Username already exists");
                        console.log("Username already exists");
                    } else {
                    return users.createUser(user);
                    }
                },
                function(error) {
                    res.sendstatus(400).send(error);
                }
            )
            .then(function (newu) {
                    res.send(newu);
                console.log(user);
            },
            function(error) {
                    res.sendStatus(400).send(error);





    });
    }


    function deleteUser(req, res) {

        var userId = req.params.uid;
        users
            .deleteUser(userId)
            .then(function(status) {res.sendStatus(200);},
                function(error) {res.status(404);}
            );



    }
    function updateUser(req, res) {
        var userId = req.params.uid;
        var user = req.body;
users
    .updateUser(userId, user)
    .then(
        function (user) {
            res.send(user);
        },
        function (error) {
            res.send(error);
        }
    )

    }

};