(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService($http) {




        var api = {

                createWebsite: createWebsite,
                findWebsitesByUser:findWebsitesByUser,
                findWebsiteById: findWebsiteById,
                updateWebsite:updateWebsite,
                deleteWebsite: deleteWebsite

    };

    return api;




        function createWebsite(website) {
          url = "/api/user/" +website.uid +"/website" ;
            return $http.post(url,website);
        }


        function findWebsitesByUser(userId) {

          return $http.get("/api/user/"+userId +"/website");

        }

        function findWebsiteById(uid,websiteId) {
         url = "/api/user/" +uid + "/website/" +websiteId;
            return $http.get(url);

        }


        function updateWebsite(website) {
       url = "/api/user/" +website.uid +"/website/" +website._id;
            return $http.put(url,website);




        }

        function deleteWebsite(uid,websiteId) {

        url = "/api/user/" +uid +"/website/" +websiteId;
            return $http.delete(url);

        }









    }



})();