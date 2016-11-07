(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService() {



        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget


        };
        return api;



        function findWidgetById(wid) {
            for (var w in widgets) {
                if (widgets[w]._id == wid) {
                    return widgets[w];
                }
            }
            return null;
        }

        function findWidgetsByPageId(pid) {
            var personal = [];

            var widget = null;
            console.log(widgets);
            for(u in widgets) {
                widget =  widgets[u];
                console.log(parseInt(pid) === parseInt(widget.pageId));
                if(parseInt(pid) === parseInt(widget.pageId)) {
                    personal.push(widget);
                    console.log(personal)
                }
            }

            return personal;
        }


        function createWidget(userId, website) {

            website.developerId = userId;
            website._id = "777";


            websites.push(website);
        }


        function findWebsiteById(wgId) {
            var web = null;
            for (u in websites) {
                web = websites[u];
                id = parseInt(websiteId);
                if (parseInt(web._id) === id) {
                    return web;

                }


            }
            return null;


        }


        function updateWidget(wgid, widget) {
            var web = null;
            for (u in websites) {
                web = websites[u];
                id = parseInt(websiteId);
                if (parseInt(website._id) === id) {
                    websites[u] = web;
                    return web;

                }


            }

            return null;

        }

        function deleteWidget(wgid) {

            var web = null;
            for (u in websites) {
                web = websites[u];
                id = parseInt(websiteId);
                if (parseInt(web._id) === id) {
                    websites.splice(u, 1);
                    return web;


                }


            }
            return null;

        }


    }

})();