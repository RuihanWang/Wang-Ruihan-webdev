module.exports = function (app,model) {
    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/uploads'});
    var widgets = model.WidgetModel;
    var pages = model.PageModel;


    app.post("/api/upload", upload.single('myFile'), uploadImage);

    app.get("/api/user/:uId/website/:wId/page/:pId/widget", findAllWidgetsForPage);
    app.get("/api/user/:uId/website/:wId/page/:pId/widget/:wgId", findWidgetById);
    app.post("/api/user/:uId/website/:wId/page/:pId/widget", createWidget);
    app.delete("/api/user/:uId/website/:wId/page/:pId/widget/:wgId", deleteWidget);
    app.put("/api/user/:uId/website/:wId/page/:pId/widget/:wgId", updateWidget);
    app.put("/api/user/:uId/website/:wId/page/:pId/widget", sortWidget);


//something need to be done
    function sortWidget(req, res) {
        var pageId = req.params.pId;
        var start = req.query.initial;
        var end = req.query.final;

        widgets
            .sortWidget(pageId,start, end)
            .then(
                function (widgetList) {
                    res.send(widgetList)

                },
                function (error) {
                    res.send(error);
                })

    }

    function uploadImage(req, res) {


        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;
        res.send(myFile);
    }



    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pId;
        widgets
            .findAllWidgetsForPage(pageId)
            .then(
                function (page) {
                    res.send(page.widgets);
                },
                function (error) {
                    res.send(error);
                }
            );
    }

    // function findWidgetById(req, res) {
    //     var widgetId = req.params.widgetId;
    //     for(var i in widgets) {
    //         if(widgets[i]._id === widgetId) {
    //             res.send(widgets[i]);
    //             return;
    //         }
    //     }
    //     res.send({});
    // }
    //

    function findWidgetById(req, res) {
        var widgetId = req.params.wgId;
        widgets
            .findWidgetById(widgetId)
            .then(
                function (widget) {
                    res.send(widget);
                },
                function (error) {
                    res.send(error);
                }
            );
    }

    function updateWidget(req, res) {
        var widgetId = req.params.wgId;
        var widget = req.body;
        widgets
            .updateWidget(widgetId, widget)
            .then(
                function (widget) {
                    res.send(widget);
                },
                function (error) {
                    res.send(error);
                }
            );
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.wgid;
        widgets
            .deleteWidget(widgetId)
            .then(
                function (widget) {
                    res.json(200);
                },
                function (error) {
                    res.json(400);
                });
    }


    function createWidget(req, res) {
        var widgetId = req.params.pId;
        var widget = req.body;
        widgets
            .createWidget(widgetId, widget)
            .then(
                function (newwidget) {
                    res.send(newwidget);

                },
                function (error) {
                    res.send(error);
                }
            );
    }

//     function uploadImage(req, res) {
//         var widgetId = req.body.wgid;
//         var websiteId = req.body.wid;
//         var pageId = req.body.pid;
//         var userId   = req.body.uid;
//         var width = req.body.width;
//         var myFile = req.file;
//         if(myFile) {
//             var originalname = myFile.originalname;
//             var filename = myFile.filename;var path = myFile.path;
//             var destination = myFile.destination;var size = myFile.size;var mimetype = myFile.mimetype;
//             widgets
//                 .findWidgetById(widgetId)
//                 .then(function(widget) {widget.url = "/uploads/" + filename;
//                         return widgetModel
//                             .updateWidget(widgetId, widget)},
//                     function(error) {res.status(404).send(error);}
//                 ).then(
//                 function(widget) {res.redirect("/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);},
//                 function(error) {res.status(404).send("Unable to update widget with ID " + widgetId);})
//         }else{ res.redirect("/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
//             return;}}
//
}