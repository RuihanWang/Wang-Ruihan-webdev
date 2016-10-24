(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController",NewWebsiteController)
        .controller("EditWebsiteController",EditWebsiteController);

    function WebsiteListController(WebsiteService) {





        $scope.websites = websites;

        console.log("Hello from WebsiteListController");
    }

    function NewWebsiteController() {

    }


    function EditWebsiteController() {

    }
})();