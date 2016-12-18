(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("WidgetEditController", WidgetEditController)
        .controller("WidgetListNewController", WidgetNewController);

    function WidgetListController($routeParams,
                                  WidgetService, $sce) {

        var vm  = this;


        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        vm.removeWidget  = removeWidget;

        function init() {
            vm.uid = $routeParams.uid;
            vm.wid = $routeParams.wid;
            vm.pid = $routeParams.pid;
            vm.wpro = WidgetService.findWidgetsByPageId(vm.uid, vm.wid,vm.pid);
            vm.wpro
                .success(function (res) {
                    vm.widgets = res;
                })
                .error(function (res) {
                    console.log("error loading widgets" + res);
                });
        }
        init();


        function removeWidget(wgId, widget) {
            vm.wgpro = WidgetService.deleteWidget(vm.uid, vm.wid, vm.pid, wgId, widget);
            vm.wgpro
                .success(function(res) {
                    console.log("delete widget" +res);
                })
                .error(function(res) {
                    console.log("error delete " + res)
                })
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





    }



    function WidgetEditController($routeParams,
                                  WidgetService, $sce) {


        var vm = this;
        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        function init() {
            vm.uid = $routeParams.uid;
            vm.wid = $routeParams.wid;
            vm.pid = $routeParams.pid;
            vm.wgId = $routeParams.wgid;
            vm.wpro = WidgetService.findWidgetById(vm.uid, vm.wid,vm.pid,vm.wgId);
            vm.wpro
                .success(function (res) {
                    vm.widget = res;
                    console.log(vm.widget);
                })
                .error(function (res) {
                    console.log("error loading widgets" + res);
                });
        }
        init();

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/" + id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }
        function updateWidget(widgetType,size,text) {
            var id = Date.now();
            var widget = {
                "_id" :id, "widgetType" :widgetType,"size" :size, "text":text, "pageId":vm.pid
            };
            var wgpro = WidgetService.updateWidget(vm.uid,vm.wid,vm.pid,vm.wgid,widget);
            wgpro
                .success(function (res) {
                    vm.widget = res;
                })
                .error(function (res) {
                    console.log("error loading widget" + res);
                });
        }
    }




    function WidgetNewController($routeParams,
                                     WidgetService, $sce,$location) {
        console.log("youtube");
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.pid = $routeParams.pid;
        vm.wgid =Date.now();
        vm.widgets = WidgetService.findWidgetsByPageId(vm.pid);
        vm.checkSafeHtml = checkSafeHtml;
        vm.NewImageWidget = NewImageWidget;
        vm.NewHeaderWidget = NewHeaderWidget;
        vm.NewYoutubeWidget = NewYoutubeWidget;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        function NewHeaderWidget(size, text) {
            var widget = {
                "_id": Date.now(), "size": size, "text": text, "widgetType": "HEADER", "pageId": vm.pid,
            };
            WidgetService.createWidget(widget);

            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");


        }

        function NewImageWidget(size, text) {
            var widget = {
                "_id": Date.now(), "width": size, "url": text, "widgetType": "IMAGE", "pageId": vm.pid,
            };
            WidgetService.createWidget(widget);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");

        }

        function NewYoutubeWidget(size, text) {
            var widget = {
                "_id": Date.now(), "width": size, "url": text, "widgetType": "YOUTUBE", "pageId": vm.pid,
            };
            WidgetService.createWidget(widget);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");

        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/" + id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }
    }
})();