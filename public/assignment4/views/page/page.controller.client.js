(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController",NewPageController)
        .controller("EditPageController",EditPageController);

    function PageListController(PageService,$routeParams,$location,WebsiteService) {
        var vm = this;
        vm.RemovePage = RemovePage;

        vm.uid  = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.website = WebsiteService.findWebsiteById(vm.wid);
        console.log(vm.website)
        vm.pages = PageService.findPagesByWebsite($routeParams.wid);

        function RemovePage (pageId) {

            PageService.deletePage(pageId);
            vm.pages = PageService.findPagesByWebsite($routeParams.wid);
        }




    }

    function NewPageController(WebsiteService,$routeParams,$location,PageService) {
        var vm = this;
        vm.NewPage = NewPage;
        vm.wid = $routeParams.wid;
        vm.pages = PageService.findPagesByWebsite(vm.wid);
        vm.website = WebsiteService.findWebsiteById(vm.wid);
        vm.uid  = $routeParams.uid;


        function NewPage(name, description) {

            var page = {
                name:name, description:description,
            }
            PageService.createPage(vm.wid, page);
            $location.url("/user/" +vm.uid +"/website/" +vm.wid+ "/page/");
        }

    }


    function EditPageController(WebsiteService,$routeParams,$location,PageService) {
        var vm = this;
        vm.UpdatePage = UpdatePage;

        vm.page = PageService.findPagesByWebsite($routeParams.wid);
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;

        vm.website = WebsiteService.findWebsiteById(vm.wid);
        function UpdatePage(pageId, name, description) {
            vm.editpage = {
                "_id":webId, "name":name,"developerId":vm.uid,"description":description

            };
            PageService.updatePage(pageId, vm.editpage);
            $location.url("/user/" + vm.uid +"/website/"+ vm.wid+"/page/" );



        }
    }
})();
