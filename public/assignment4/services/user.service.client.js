
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService($http) {
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
            return $http.post("/api/user", newuser);


        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            console.log(url);
            return $http.get(url);
        }

        // for(u in users) {
        //     user = users[u];
        //     id = parseInt(id);
        //     if(parseInt(user._id) === id) {
        //         return user;
        //         console.log(user);
        //
        //     }
        //
        //
        // }



        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;




            return $http.get(url);



        }


        function updateUser(userId,user) {
        var url = "/api/user/" + userId;
            return $http.put(url,user)
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/"+ userId);

        }

    }
})();
