(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);
    function WidgetService() {

        var widgets = [
            {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        ];

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


        function createWidget(widget) {
          widgets.push(widget);

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

            var widget = null;
            for (g in widgets) {
                widget = widgets[g];
                id = parseInt(wgid);
                if (parseInt(widget._id) === id) {
                    widgets.splice(u, 1);
                    return widget;


                }


            }
            return null;

        }


    }

})();