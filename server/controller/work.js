/**
 * Created by LMJ on 2015-01-26.
 */
var model = reqlib("/server/model/work.js");
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("work/index", {
                title : "시작페이지"
            });
        },
        id : "index"
    },
    missing : {
        handler : function(request, reply){
            reply.view("404", {
                title : "Total Bummer 404 Page"
            }).code(404);
        },
        id : "404"
    }
}