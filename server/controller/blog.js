/**
 * Created by LMJ on 2015-01-26.
 */
var model = reqlib("/server/model/blog.js");
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("blog/index", {
                title : "시작페이지"
            });
        },
        id : "blog_index"
    }
}