module.exports = function() {

    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var Widget = mongoose.model("Widget", WidgetSchema);


    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage : findAllWidgetsForPage,
        findWidgetById:findWidgetById,
        updateWidget:updateWidget,
        deleteWidget:deleteWidget,
        sortWidget:sortWidget,


    };
    return api;


    function deleteWidget(widgetId){

        return Widget.remove({_id: widgetId});
    }


    function createWidget(pageId, widget) {
        widget._page = pageId;
        return Widget.create(widget);
    }

    function findAllWidgetsForPage(pageId){
    return Widget.find({_page:pageId});




    }

    function findWidgetById(widgetId){

        return Widget.findById(widgetId);
    }

    function updateWidget(widgetId, widget){delete widget._id;
        return Widget
            .update({_id: widgetId},{
                $set: widget
            });
    }


    function sortWidget(pageId,start,end) {
        var widgetList = null;
var pro = this.findAllWidgetsForPage(pageId);
        pro
            .then(
                function(widgetLi) {
                     widgetList = widgetLi;
                },
                function (error){
                    console.log(error);
                }
            );
        widgetList




    }



};


