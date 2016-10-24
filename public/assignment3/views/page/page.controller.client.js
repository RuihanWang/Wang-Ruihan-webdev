
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController",EditPageController);

    function NewPageController(PageService) {
        $scope.hello = "hello from login controller";

    }
    function PageListController(PageService) {


    }

    function EditPageController(PageService) {

    }

})();
