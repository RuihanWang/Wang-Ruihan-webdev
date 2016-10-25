
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
                function register( username, password, firstname,lastname ) {

                    var user = {username: username, password: password, firstName:firstname,lastName:lastname};

                    var use  = UserService.createUser(user);
                    console.log(use);
                    console.log(user);
                    $location.url("/user/" +use._id);
                }

            }

            function ProfileController(UserService,$routeParams,$location) {

                var vm = this;
                vm.UpdateUser = UpdateUser;
                vm.GetWebsites = GetWebsites;
                vm.user = UserService.findUserById(parseInt($routeParams.uid));

                function GetWebsites() {
                    $location.url("/user/" +vm.user._id +"/website");
                }

                function UpdateUser(username, password, firstname,lastname) {
                    var UserId = $routeParams.uid;
                    console.log(UserId);
                    var use = {_id : UserId, username: username, password: password, firstName:firstname,lastName:lastname};


                    UserService.updateUser(UserId, use);
                    console.log("got it")

                }


            }



})();
