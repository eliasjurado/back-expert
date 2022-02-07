const { Schema } = require("mongoose");
const { model } = require("mongoose");

const UserSchema = Schema({
    tx_first_name : {
        type : String,
        require : true,
    },
    tx_p_last_name : {
        type : String,
        require : true,
    },
    tx_m_last_name : {
        type : String,
        require : true,
    },
    tx_username : {
        type : String,
        require : true,
        trim : true,
        unique: true,
    },
    tx_email :{
        type : String,
        require : true,
        trim: true,
        unique : true,
    },
    tx_avatar : {
        type : String,
        trim:true,
    },
    tx_site_web:{
        type:String,
        trim:true,
    },
    tx_password:{
        type:String,
        trim:true,
        require:true,
    },
    dt_created:{
        type:Date,
        default: Date.now(),
    }
});

module.exports = model("User",UserSchema);