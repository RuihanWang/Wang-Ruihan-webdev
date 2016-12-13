(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService($http) {




        var api = {

            createPage: createPage,
            findPagesByWebsite:findPagesByWebsite,
            findPageById: findPageById,
            updatePage:updatePage,
            deletePage: deletePage

        };

        return api;




        function createPage(userId,websiteId, page) {

           url = "/api/user/" +userId +"/website/" + websiteId + "/page" ;

            return $http.post(url,page);
        }


        function findPagesByWebsite(userId,websiteId) {

            return $http.get("/api/user/"+userId +"/website/" +websiteId + "/page");
        }

        function findPageById(userId, websiteId, pageId) {



            url = "/api/user/" +userId + "/website/" +websiteId +"/page/" +pageId;
            return $http.get(url,page);



        }


        function updatePage(uid,page) {



            url = "/api/user/" +uid +"/website/" +page.websiteId +"/page/" +page._id;
            return $http.put(url,page);


        }

        function deletePage(uid,websiteId,pageId) {

            url = "/api/user/" +uid +"/website/" +websiteId +"/page/" + pageId;
            return $http.delete(url);

        }



    }



})();