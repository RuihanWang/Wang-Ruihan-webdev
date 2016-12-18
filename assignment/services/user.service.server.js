
module.exports = function(app, model) {
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
var users = model.UserModel;

    app.get("/api/user",findUser);
    app.get("/api/user/:uid",findUserById);
    app.post("/api/user",createUser);
    app.put("/api/user/:uid",updateUser);
    app.delete("/api/user/:uid",deleteUser);
    app.get("/api/login",findUserByCredentials);
    app.post  ('/api/login', passport.authenticate('wam'), login);
    app.post('/api/logout', logout);

    app.get ('/api/loggedin', loggedin)
    app.post ('/api/register', register);





    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use('wam',new LocalStrategy(localStrategy));
    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }
    function logout(req, res) {
        req.logOut();
        res.send(200);
    }
    function login(req, res) {
        var user = req.user;
        res.json(user);
    }
    function serializeUser(user, done) {
        done(null, user);
    }
    function register (req, res) {
        var user = req.body;
        userModel
            .createUser(user)
            .then(
                function(user){
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }




    function localStrategy(username, password, done) {
        users
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if(user.username === username && user.password === password) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }


    function deserializeUser(user, done) {
        developerModel
            .findDeveloperById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

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