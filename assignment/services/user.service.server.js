
module.exports = function(app) {
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];


    app.get("/api/user",findUser);
    app.get("/api/user/:uid",findUserById);
    app.post("/api/user",createUser);
    app.put("/api/user/:uid",updateUser);
    app.delete("/api/user/:uid",deleteUser);

    function findUser(req, res) {
        var params = req.params;
        var query = req.query;
        if(query.password && query.username) {
            findUserByCredentials(req, res);
        } else if(query.username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        for(var u in users) {
            if(users[u].username === username &&
                users[u].password === password) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }
    function findUserByUsername(req, res) {
        var username = req.query.username;
        for(var u in users) {
            if(users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }
    // function findUser(req, res) {
    //
    //     var username = req.query.username;
    //     var password = req.query.password;
    //     console.log("hello" +req.query.username);
    //     var user = null;
    //     for(u in users) {
    //         user =users[u];
    //         if(user.username === username && user.password === password) {
    //             res.send(user);
    //             return;
    //         }
    //     }
    //     res.send('0');
    //
    // }


    function findUserById(req, res) {
        var id = req.params.uid;
        console.log("id" +id);
        var user = null;
        for(u in users) {

            user = users[u];
console.log("user" +user._id+"id"+ id );
           console.log("isorno" + user._id == id);
            if(user._id == id){
                res.send(user);
                console.log(user);
                return;
            }
        }
        res.send('0');
        return;

    }



    function createUser(req, res) {
        var user = req.body;
        users.push(user);
        res.send(users);




    }


    function deleteUser(req, res) {

        var id = parseInt(req.params.uid);
        for (u in users) {
           var user = users[u];
            if (user._id === id) {
                users.splice(u, 1);
                res.send(users);
                return;


            }


        }
res.send('0');



    }
    function updateUser(req, res) {
    var user = req.body;
        console.log(user);
        for(u in users) {
           if( parseInt(user._id) === parseInt(users[u]._id)) {
               users[u] = user;
               res.send('200');
               return;
           } else {
               res.send('0');
               return;
           }


        }


    }

};