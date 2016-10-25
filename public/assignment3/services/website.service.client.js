(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites = [

            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }

        ];

        var ids = [
            111,222,333,444,555,666,777,888,999


        ]

        var api = {

                createWebsite: createWebsite,
                findWebsitesByUser:findWebsitesByUser,
                findWebsiteById: findWebsiteById,
                updateWebsite:updateWebsite,
                deleteWebsite: deleteWebsite

    };

    return api;




        function createWebsite(userId, website) {
            var id = ids.pop();
            var newweb = {

                "_id": "id", "name": website.name,  "developerId": userId, "description": website.description
            };

           websites.push(newweb);
        }


        function findWebsitesByUser(userId) {
            var personal = [];

            var web = null;
            console.log(websites)
            for(u in websites) {
              web =  websites[u];
                console.log(parseInt(userId) === parseInt(web.developerId));
                if(parseInt(userId) === parseInt(web.developerId)) {
                    personal.push(web);
                    console.log(personal)
                }
            }

            return personal;
        }

        function findWebsiteById(websiteId) {
            var web = null;
            for(u in websites) {
                web = websites[u];
                id = parseInt(websiteId);
                if(parseInt(web._id) === id) {
                    return web;

                }


            }
            return null;




        }


        function updateWebsite(websiteId, website) {
            var web = null;
            for(u in websites) {
                web = websites[u];
                id = parseInt(websiteId);
                console.log("good")
                if(parseInt(website._id) === id) {
                    websites[u] =web;
                    return web;

                }


            }

            return null;

        }

        function deleteWebsite(websiteId) {

            var web = null;
            for(u in websites) {
                web = websites[u];
                id = parseInt(websiteId);

                if(parseInt(web._id) === id) {
                   websites.splice(u,1);
                    console.log(websites);


                    return web;



                }


            }
            return null;

        }









    }



})();