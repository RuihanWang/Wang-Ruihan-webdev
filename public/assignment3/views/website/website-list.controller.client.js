(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController)
        .controller("EditWebsiteController",EditWebsiteController);

    function WebsiteListController(WebsiteService,$routeParams,$location,UserService) {
        var vm = this;
        vm.RemoveWebsite = RemoveWebsite;
        vm.websites = WebsiteService.findWebsitesByUser($routeParams.uid);

        vm.uid = $routeParams.uid;
        vm.user = UserService.findUserById(vm.uid);

        function RemoveWebsite (webId) {

            WebsiteService.deleteWebsite(webId);
            vm.websites = WebsiteService.findWebsitesByUser($routeParams.uid);
        }




    }

    function NewWebsiteController(WebsiteService,$routeParams,$location,UserService) {
        var vm = this;
        vm.NewWeb = NewWeb;
        vm.uid = $routeParams.uid;
        vm.user = UserService.findUserById(vm.uid);



        function NewWeb(name, description) {

            var website = {
                name:name, description:description
            }
            WebsiteService.createWebsite(vm.uid, website);
            $location.url("/user/" +vm.uid +"/website");
        }

    }


    function EditWebsiteController(WebsiteService,$routeParams,$location,UserService) {
        var vm = this;
        vm.UpdateWeb = UpdateWeb;

        vm.website = WebsiteService.findWebsiteById($routeParams.wid);
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.user = UserService.findUserById(vm.uid);
        function UpdateWeb(webId, name, description) {
            vm.web = {
                "_id":webId, "name":name,"developerId":vm.uid,"description":description

            };
            console.log(vm.web);
            WebsiteService.updateWebsite(webId, vm.web);
            $location.url("/user/" + vm.uid +"/website");



        }
    }
})();