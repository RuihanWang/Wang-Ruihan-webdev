module.exports = function() {
    var  mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/webdev');

    var UserModel = require("./user/user.model.server")();

    var WebsiteModel =  require("./website/website.model.server")();
     var PageModel = require("./page/page.model.server")();
      var  WidgetModel =  require("./widget/widget.model.server")();




    var model = {
        UserModel :UserModel,
        WebsiteModel:WebsiteModel,
        PageModel:PageModel,
        WidgetModel:WidgetModel,

    };

    return model;
};