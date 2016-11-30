(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("WidgetEditController", WidgetEditController)
        .controller("WidgetListNewController",WidgetListNewController);


    function WidgetListNewController($routeParams,
                                     WidgetService, $sce,$location) {
        console.log("youtube");
        var vm  = this;
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;
        vm.widgets = WidgetService.findWidgetsByPageId(vm.pid);
        vm.checkSafeHtml = checkSafeHtml;
        vm.NewImageWidget = NewImageWidget;
        vm.NewHeaderWidget = NewHeaderWidget;
        vm.NewYoutubeWidget = NewYoutubeWidget;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        function NewHeaderWidget(size, text) {
            var widget = {
                "_id": Date.now(), "size":size, "text": text,"widgetType": "HEADER", "pageId": vm.pid,
            }
           WidgetService.createWidget(widget);

            $location.url("/user/" +vm.uid +"/website/" +vm.wid+ "/page/" +vm.pid +"/widget");


    }
        function NewImageWidget(size,text) {
            var widget = {
                "_id": Date.now(), "width":size, "url": text,"widgetType": "IMAGE", "pageId": vm.pid,
            }
            WidgetService.createWidget(widget);
            $location.url("/user/" +vm.uid +"/website/" +vm.wid+ "/page/" +vm.pid +"/widget");

        }
        function NewYoutubeWidget(size,text) {
            var widget = {
                "_id": Date.now(), "width":size, "url": text,"widgetType": "YOUTUBE", "pageId": vm.pid,
            }
            WidgetService.createWidget(widget);
            $location.url("/user/" +vm.uid +"/website/" +vm.wid+ "/page/" +vm.pid +"/widget");

        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }


        console.log(vm.widgets);

    };

    function WidgetListController($routeParams,
                                  WidgetService, $sce,$location) {
        var vm  = this;


        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;
        vm.widgets = WidgetService.findWidgetsByPageId(vm.pid);
        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;


        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }




    }



    function WidgetEditController($routeParams,
                                  WidgetService, $sce,$location) {


        var vm  = this;
        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;
        vm.widget = WidgetService.findWidgetById(vm.wgid);

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }


    }
})();