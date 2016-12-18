
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService($http) {

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser,
            login:login,
            logout:logout,
            register: register



        };
        return api;
        function register(user) {
            return $http.post("/api/register", user);
        }

        function logout(user) {
            return $http.post("/api/logout");
        }

        function login(user) {
            return $http.post("/api/login", user);
        }
        function createUser(user) {
            

            return $http.post("/api/user", user);


        }

        function findUserById(id) {
            var url = "/api/user/" + id;

            return $http.get(url);
        }




        function findUserByCredentials(username, password) {
            var url = "/api/login?username=" + username + "&password=" + password;




            return $http.get(url);



        }


        function updateUser(userId,user) {
        var url = "/api/user/" + userId;
            return $http.put(url,user);
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/"+ userId);

        }

    }
})();
