(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController)
        .controller("EditWebsiteController",EditWebsiteController);

    function WebsiteListController(WebsiteService,$routeParams,$location,UserService) {
        var vm = this;
        vm.RemoveWebsite = RemoveWebsite;
       function init() {
           vm.wpro = WebsiteService.findWebsitesByUser($routeParams.uid);

           vm.wpro
               .success(function (websites) {
                   vm.websites = websites;
                   console.log(vm.websites);
               })
               .error(function () {
                   console.log("error from websites get")
               });

           vm.uid = $routeParams.uid;
           vm.upro = UserService.findUserById(vm.uid);
           vm.upro
               .success(function (user) {
                   vm.user = user;
                   console.log(user);
               })
               .error(function () {
                   console.log("error from websites get")
               });
       }
       init();

        function RemoveWebsite (uid,webId) {


            vm.pro = WebsiteService.deleteWebsite(uid,webId);
            vm.pro
                .success(function(websites) {

                })
                .error(function() {
                    console.log("error from websites get")
                });
            vm.wpro = WebsiteService.findWebsitesByUser($routeParams.uid);

            vm.wpro
                .success(function(websites) {
                    vm.websites = websites;
                })
                .error(function() {
                    console.log("error from websites get")
                });

        }




    }

    function NewWebsiteController(WebsiteService,$routeParams,$location,UserService) {
        var vm = this;
        vm.NewWeb = NewWeb;
        vm.uid = $routeParams.uid;




        function NewWeb(name,description) {

            var website = {
               _user: vm.uid, name:name, description:description
            };
            console.log(website);
            vm.npro = WebsiteService.createWebsite(website);
            vm.npro
                .success(function(website) {
                    console.log("success new web")
                })
                .error(function() {
                    console.log("error from websites new")
                });
            $location.url("/user/" +vm.uid +"/website");
        }

    }


    function EditWebsiteController(WebsiteService,$routeParams,$location,UserService) {

        var vm = this;
        vm.UpdateWeb = UpdateWeb;

        vm.webpro = WebsiteService.findWebsiteById($routeParams.uid,$routeParams.wid);
        vm.webpro
            .success(function(website) {
                vm.website = website;
                console.log(vm.website);

            });


        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        // vm.upro = UserService.findUserById(vm.uid);
        // vm.upro
        //     .success(function(user) {
        //         vm.user = user;
        //     })
        //     .error(function() {
        //         console.log("error from websites get");
        //     });

        function UpdateWeb(name) {

            vm.web = {
                "name":name, _user:vm.uid

            };

            vm.upo = WebsiteService.updateWebsite(vm.web);
            vm.upo
                .success(function(website) {
                    vm.website = website;
                })
                .error(function() {
                    console.log("error from websites get");
                });
            $location.url("/user/" + vm.uid +"/website");



        }
    }
})();