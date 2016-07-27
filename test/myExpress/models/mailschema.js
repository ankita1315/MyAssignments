var mongoose=require('mongoose');
var mailschema=mongoose.Schema({
msg_id:String,
msg_from:String,
msg_to:String,
Msg_snippet:String,
Msg_data:String
});
module.exports=mongoose.model('mymails',mailschema);
