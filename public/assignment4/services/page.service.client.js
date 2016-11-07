(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {


        var ids = [
            111,222,333,444,555,666,777,888,999


        ]

        var api = {

            createPage: createPage,
            findPagesByWebsite:findPagesByWebsite,
            findPageById: findPageById,
            updatePage:updatePage,
            deletePage: deletePage

        };

        return api;




        function createPage(websiteId, page) {
            var id = ids.pop();
            var newpage = {

                "_id": "id", "name": page.name,  "websiteId":websiteId , "description": page.description
            };

            pages.push(newpage);
        }


        function findPagesByWebsite(websiteId) {
            var personal = [];

            var page = null;
            for(u in pages) {
                page =  pages[u];

                if(parseInt(websiteId) === parseInt(page.websiteId)) {
                    personal.push(page);
                }
            }

            return personal;
        }

        function findPageById(pageId) {
            var page = null;
            for(u in pages) {
                page = pages[u];
                id = parseInt(pageId);
                if(parseInt(page._id) === id) {
                    return page;

                }


            }
            return null;




        }


        function updatePage(PageId, Page) {
            var page = null;
            for(u in Pages) {
                page = pages[u];
                id = parseInt(pageId);
                if(parseInt(page._id) === id) {
                    pages[u] =page;
                    return page;

                }


            }

            return null;

        }

        function deletePage(pageId) {

            var page = null;
            for(u in pages) {
                page = pages[u];
                id = parseInt(pageId);

                if(parseInt(page._id) === id) {
                    pages.splice(u,1);


                    return page;



                }


            }
            return null;

        }



    }



})();