
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

        function LoginController(UserService) {
            console.log("hello form");
            var vm = this;

        }
         function RegisterController(UserService) {
            var vm = this;
             vm.register = register;
             function register(username, password) {
                var user = {username: username, password: password};

                 UserService.createUser(user);
                 console.log("success register");
                 console.log(users);
             }

         }
         function ProfileController(UserService) {
             console.log("hello form");
             var vm = this;

    }

})();
