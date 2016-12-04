module.exports = function (app) {
    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/uploads'});
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

    app.post("/api/upload", upload.single('myFile'), uploadImage);

    app.get("/api/user/:uId/website/:wId/page/:pId/widget", findAllWidgetsForPage);
    app.get("/api/user/:uId/website/:wId/page/:pId/widget/:wgId",findWidgetById);
    app.post("/api/user/:uId/website/:wId/page/:pId/widget", createWidget);
    app.delete("/api/user/:uId/website/:wId/page/:pId/widget/:wgId",deteleWidget);
    app.put("/api/user/:uId/website/:wId/page/:pId/widget/:wgId",updateWidget);
    app.put("/api/user/:uId/website/:wId/page/:pId/widget",sortWidget);



    function sortWidget(req, res) {
        var start = req.query.initial;
        var end = req.query.final;
        console.log("server" + start + " " +end);
        widgets.splice(end,0,widgets.splice(start,1)[0]);
        res.send(widgets);


    }
    function uploadImage(req, res) {


        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
console.log("widget"+ widgetId);

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;
        res.send(myFile);
    }


    function createWidget(req, res) {
        var widget = req.body;
        widgets.push(widget);
        res.send(widgets);
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pId;
        var result = [];
        for(var g in widgets) {
            if(widgets[g].pageId == pid) {
                result.push(widgets[g]);
            }
        }
        res.send(result);
    }
    function findWidgetById(req,res) {
        var id = req.params.wgId;
        console.log("server" + id);
        var widget = null;
        for(g in widgets) {

            widget = widgets[g];

            if(widget._id == id){
                res.send(widget);

                return;
            }else {
                res.send('0');
                return;
            }
        }

    }

    function updateWidget(req, res) {

        var widget = req.body;
        for(g in widgets) {
            if (parseInt(widget._id) === parseInt(widgets[g]._id)) {
                widgets[g] = widget;
                res.send(widget);
                return;
            } else {
                res.send('0');
                return;
            }
        }

        }

    function deteleWidget(req,res) {
        var id = parseInt(req.params.wgId);
        for (g in widgets) {
            var widget = widgets[g];
            if (widget._id === id) {
                widgets.splice(u, 1);
                res.send(widgets);
                return;


            }


        }
        res.send('0');

    }

};