(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService($http) {


        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            sort: sort


        };
        return api;

        function sort(start, end) {
            var url = "/api/user/:uId/website/:wid/page/:pId/widget?initial=" +start+"&final=" + end;
            console.log(url);
            return $http.put(url);
        }
        function findWidgetById(uId, wId, pId, wgId) {

            var url = "/api/user/" + uId + "/website/" + wId + "/page/" + pId + "/widget/" + wgId;
            console.log(url);
            return $http.get(url);
        }

        function findWidgetsByPageId(uId, wId, pId) {

            return $http.get("/api/user/" + uId + "/website/" + wId + "/page/" + pId +"/widget/");
        }


        function createWidget(uId, wId, pId, widget) {
            var url = "/api/user/" + uId + "/website/" + wId + "/page/" + pId + "/widget";
            return $http.post(url, widget)

        }


        function updateWidget(uId, wId, pId, wgId, widget) {
            var url = "/api/user/" + uId + "/website/" + wId + "/page/" + pId + "/widget/" + wgId;
            return $http.put(url, widget);
        }

        function deleteWidget(uId, wId, pId, wgId) {
            var url = "/api/user/" + uId + "/website/" + wId + "/page/" + pId + "/widget/" + wgId;
            return $http.delete(url);
        }
    }
})();