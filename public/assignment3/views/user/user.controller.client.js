
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

        function LoginController(UserService, $location) {
            var vm = this;
            vm.Login = Login;
            function Login(username, password) {
                var user = UserService.findUserByCredentials(username, password);

                if(user === null){
                    vm.error ="No such User";
                }else {
                    var uid = user._id;
                    $location.url("/user/" +uid);

                }

            }
        }

            function RegisterController(UserService,$routeParams,$location) {
                var vm = this;
                vm.register = register;
                function register(id, username, password, firstname,lastname ) {
                    var user = {_id : id, username: username, password: password, firstName:firstname,lastName:lastname};

                    UserService.createUser(user);
                    $location.url("/user/" +user._id);
                }

            }

            function ProfileController(UserService,$routeParams,$location) {

                var vm = this;
                var user = UserService.findUserById(parseInt($routeParams.uid));
                vm.user = user;
                vm.Websites = Websites;
                function Websites() {
                    $location.url("/user/" +user._id +"/website");
                }


            }



})();
