
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
        var ids = [
            111,222,333,444,555,666,777,888,999


        ];

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser

        };
        return api;
        function createUser(user) {
            var UserId = ids.pop();
            var newuser = {
                _id: UserId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            };
            users.push(newuser);
            console.log(newuser + "hehe");
            return newuser;


        }

        function findUserById(id) {


            for (u in users) {
                user = users[u];
                id = parseInt(id);
                if (parseInt(user._id) === id) {
                    return user;
                    console.log(user);

                }


            }
            return null;
        }


        function findUserByCredentials(username, password) {
            var url = "/api/user/username=" + username + "&password=" + password;




            return $http.get(url);



        }


        function updateUser(userId, user) {

            var use = null;
            for (u in users) {
                use = users[u];
                id = parseInt(userId);
                if (parseInt(use._id) === id) {
                    users[u] = user;
                    console.log(users)
                    return user;

                }


            }

            return null;

        }

        function deleteUser(userId) {
            var user = null;
            for (u in users) {
                user = users[u];
                id = parseInt(id);
                if (user._id === id) {
                    users.splice(u, 1);
                    return user;


                }


            }
            return null;


        }

    }
})();
