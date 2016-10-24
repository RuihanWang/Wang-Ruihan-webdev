
(function() {


    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController(WidgetServive) {
        $scope.hello = "hello from login controller";

    }
    function NewWidgetController(WidgetServive) {


    }
    function EditWidgetController(WidgetServive) {



    }

})();