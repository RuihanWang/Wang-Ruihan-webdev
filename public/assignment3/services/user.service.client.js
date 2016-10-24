
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService() {
        var users = [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];
        var api = {
            createUser   : createUser,
            findUserById : findUserById,
            findUserByCredentials:findUserByCredentials,
            updateUser:updateUser,
            deleteUser:deleteUser

    };
        return api;
        function createUser(user) {

          var newuser = {
              _id:user._id, username:user.username,password:user.password,firstName:user.firstName,lastName:user.lastName
          }
            users.push(newuser);
            console.log(users);


        }
        function findUserById(id) {
            var user = null;
            for(u in users) {
                user = users[u];
                id = parseInt(id);
                if(parseInt(user._id) === id) {
                    return user;
                    console.log(user);

                }


            }
            return null;


        }

        function findUserByCredentials(username, password) {
            var user = null;
            for(u in users) {
                password = password;
                user = users[u];
                if(user.username === username && user.password ===password) {
                    return user;
                    console.log("success");


                }


            }
            console.log("no success")
            return null;


        }


        function updateUser(userId, user) {

        }

        function deleteUser(userId) {
            var user = null;
            for(u in users) {
                user = users[u];
                id = parseInt(id);
                if(user._id === id) {
                    return user;
                    console.log(user);

                }


            }
            return null;



        }

    }
})();
