
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
            findUserById : findUserById

    };
        return api;
        function createUser(user) {

           console.log(user);


        }
        function findUserById(id) {
            var user = null;
            for(u in users) {
                user = users[u];
                if(user._id === id) {
                    return user;
                    console.log(user);

                }


            }
            return null;


        }

    }
})();
