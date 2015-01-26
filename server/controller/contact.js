/**
 * Created by LMJ on 2015-01-26.
 */
var model = reqlib("/server/model/contact.js");
module.exports = {
    index: {
        handler : function(request, reply){
            reply.view("contact/index", {
                title : "시작페이지"
            });
        },
        id : "contact_index"
    }
}