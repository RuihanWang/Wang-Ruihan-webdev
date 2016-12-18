
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
                var pro = UserService.findUserByCredentials(username, password);
                    pro
                        .success(function(user){
                            console.log(user);
                            if(user === '0') {
                                vm.error = "No such user";
                            } else {
                                $location.url("/user/" + user._id);
                            }
                        })
                        .error(noUser);
             function noUser() {
                  console.log("error at login")
                }


            }
        }

            function RegisterController(UserService,$routeParams,$location) {
                var vm = this;
                vm.register = register;
                function register( username, password, firstname,lastname ) {

                    var user = {username: username, password: password, firstName:firstname,lastName:lastname};

                    var use  = UserService.createUser(user);
                    use
                        .success(RegisterSuccess)
                        .error(RegisterError);
                    function RegisterSuccess(user) {
                        $location.url("/user/" + user._id);
                    }
                    function RegisterError() {
                        vm.error="RegisterFail";
                        vm.alert(vm.error);
                    }
                }

            }

            function ProfileController(UserService,$routeParams,$location) {

                var vm = this;
                vm.UpdateUser = UpdateUser;
                vm.GetWebsites = GetWebsites;
                vm.uid = parseInt($routeParams.uid);
                console.log(vm.uid);
                vm.pro = UserService.findUserById(vm.uid);
                console.log(vm.pro);
                vm.pro
                    .success(function(user) {
                        vm.user = user;
                        console.log(vm.user);
                    })
                    .error(function() {
                        console.log("profile erroe")
                    })

                function GetWebsites() {
                    $location.url("/user/" +vm.user._id +"/website");
                }

                function UpdateUser(username, password, firstname,lastname) {
                    var UserId = $routeParams.uid;

                    var use = {_id : UserId, username: username, password: password, firstName:firstname,lastName:lastname};
console.log(use);

                    var promise = UserService.updateUser(UserId, use);
                   promise
                       .success(function(user) {
                           console.log(user);
                       })
                       .error(function() {
                           console.log("error update");
                       })

                }


            }



})();
