(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController)
        .controller("EditWebsiteController",EditWebsiteController);

    function WebsiteListController(WebsiteService) {
        var vm = this;
console.log("cao");




    }

    function NewWebsiteController() {

    }


    function EditWebsiteController() {

    }
})();