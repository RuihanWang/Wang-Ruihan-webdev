(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController",NewPageController)
        .controller("EditPageController",EditPageController);

    function PageListController(PageService,$routeParams,$location,WebsiteService) {
        var vm = this;
        vm.RemovePage = RemovePage;

        function init() {
            vm.uid = $routeParams.uid;


        vm.wid = $routeParams.wid;
        vm.wpro = WebsiteService.findWebsiteById(vm.uid,vm.wid);
            vm.wpro
                .success(function(website){
                    vm.website = website;
                    console.log(vm.website);
            })
                .error(function() {
                    console.log("error")
                });
        vm.ppro = PageService.findPagesByWebsite(vm.uid,vm.wid);
            console.log("uidwid" + vm.wid +vm.uid);
            vm.ppro
                .success(function(pages){
                    vm.pages = pages;

                })
                .error(function(){
                    console.log("error")
                });
    }
    init();


        function RemovePage (pageId) {

            PageService.deletePage(vm.uid,vm.wid,pageId);
            init();

        }




    }

    function NewPageController(WebsiteService,$routeParams,$location,PageService) {
        var vm = this;
        vm.NewPage = NewPage;

        function init() {
            vm.uid = $routeParams.uid;


            vm.wid = $routeParams.wid;
            vm.wpro = WebsiteService.findWebsiteById(vm.uid,vm.wid);
            vm.wpro
                .success(function(website){
                    vm.website = website;

                })
                .error(function() {
                    console.log("error")
                });
            vm.ppro = PageService.findPagesByWebsite(vm.uid,vm.wid);
            vm.ppro
                .success(function(pages){
                    vm.pages = pages
                })
                .error(function(){
                    console.log("error")
                });
        }
        init();



        function NewPage(name, description) {
            var id = Date.now();
            vm.page = {
                _id:id, name:name,websiteId:vm.wid,description:description
            };
            vm.ppro = PageService.createPage(vm.uid, vm.page);
            vm.ppro
                .success(function(page){


                    $location.url("/user/" +vm.uid +"/website/" +vm.wid+ "/page");
                })
                .error(function(){
                    console.log("error")
                });

        }

    }


    function EditPageController(WebsiteService,$routeParams,$location,PageService) {
        var vm = this;
        vm.UpdatePage = UpdatePage;
        function init() {
            vm.uid = $routeParams.uid;


            vm.wid = $routeParams.wid;
            vm.pid = $routeParams.pid;
            vm.wpro = WebsiteService.findWebsiteById(vm.uid,vm.wid);
            vm.wpro
                .success(function(website){
                    vm.website = website;
                })
                .error(function() {
                    console.log("error")
                });
            vm.ppro = PageService.findPagesByWebsite(vm.uid,vm.wid);
            vm.ppro
                .success(function(pages){
                    vm.pages = pages
                })
                .error(function(){
                    console.log("error")
                });
        }
        init();


        function UpdatePage(pageId, name, description) {
            vm.editpage = {
                "_id":pageId, "name":name,"websiteId":vm.uid,"description":description

            };
            vm.ppro = PageService.updatePage(vm.uid, vm.editpage);
            vm.ppro
                .success(function(page){
                    vm.page = page
                })
                .error(function(){
                    console.log("error")
                });
            $location.url("/user/" + vm.uid +"/website/"+ vm.wid+"/page/" );



        }
    }
})();
