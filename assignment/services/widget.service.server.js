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
    app.get("api/user/:uId/website/:wId/page/:pId/widget/:wgId",findWidgetById);
    app.post("/api/user/:uId/website/:wId/page/:pId/widget", createWidget);
    app.delete("/api/user/:uId/website/:wId/page/:pId/widget/:wgId",deteleWidget);
    app.put("api/user/:uId/website/:wid/page/:pId/widget/:wgId",updateWidget);


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
    }


    function createWidget(req, res) {
        var website = req.body;
        websites.push(website);
        res.send(websites);
    }

    function findAllWidgetsForPage(req, res) {
        var uid = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].uid == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }
    function findWidgetById(req,res) {

    }

    function updateWidget(req, res) {


    }

    function deteleWidget(req,res) {

    }

}