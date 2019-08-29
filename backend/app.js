var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),   
    jwt = require('jsonwebtoken'),
    jwtDecode = require('jwt-decode'),
    cors = require('cors'), 
    mongoose = require('mongoose');
var config = require('./config');
//require models
var Admin = require('./models/admin');
var Complaint = require('./models/complaint');
var Advertisement = require('./models/advertisement');
var Farmer = require('./models/farmer');

mongoose.connect("mongodb://localhost:27017/netfarm",{ useNewUrlParser: true});

app.use(cors());
app.set('superSecret', config.secret);
app.set('device_id', '1234567890');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(__dirname + "/public"));

app.post("/signup/farmer",(req,res)=>{
    var new_farmer = {
        name : req.body.name,
        phone_no : req.body.phone_no,
        password : req.body.password,
        crop_grown : req.body.crop_grown,
        role : "farmer",
    }; 
    Farmer.create(new_farmer).then((farmer)=>{
        res.status(200).json({success: true, message: "new farmer added"});
    }).catch(()=>{
        res.status(400).json({success: false, message:"Cannot create new ID"});
    })
});
app.post("/login/farmer",(req,res)=>{
    var phone_no = req.body.phone_no;
    var password = req.body.password;
    Farmer.findOne({'phone_no': phone_no}).then((user)=>{
        if(user==null)
            res.status(404).json({success: false, message: "no such farmer exixsts"});
        if(password != user.password)
            res.status(400).json({success: false, message: "Credenials doesnt match"});
        res.status(200).json({success:true, message: "Welcome back "+user.name});
    }).catch(()=>{
        res.status(400).json({success:false, message: "Internal errors"});
    })
});
app.get("/advertisement",(req,res)=>{
    Advertisement.find({}).then((ad)=>{
        res.status(200).json(ad);
    }).catch(()=>{
        res.status(400).json({success:false, message: "couldnt find any ad, Internal error"});
    })
});
app.post("/advertisement",(req,res)=>{
    var new_ad = {
        category : req.body.category,
        item_name : req.body.item_name,
        quantity : req.body.quantity|| 0,
        cost : req.body.cost || 0,
        posterType : req.body.posterType,
        poster : req.body.poster,
        status: "not-sold",
    };
    Advertisement.create(new_ad).then((ad)=>{
        res.status(200).json({success: true, message: "ad posted"});
    }).catch(()=>{
        res.status(400).json({success:false , message: "opsiii!! cdnt post ad, Internal error!"});
    });
})
app.put("/advertisement",(req,res)=>{
    var edited_ad = {
        status : "sold",
    };
    Advertisement.findByIdAndUpdate(req.body._id, edited_ad).then((ad)=>{
        if(ad==null)
            res.status(404).json({success: false, message: "No such Ad exists!"});
        else
            res.status(201).json({success: true, message: "Ad status updated"});
    }).catch(()=>{
        res.status(400).json({success: false, message: "Internal error, could not edit Ad"});
    })
})
app.get("/complaint",(req,res)=>{
    Complaint.find({}).then((com)=>{
        res.status(200).json(com);
    })
});
app.post("/complaint",(req, res)=>{
    var new_complaint = {
        context : req.body.context ,
        category: req.body.category,
        complainant : req.body.complainant,
        complainer : req.body.complainer,
        respondent : req.body.respondent,
        responder : req.body.responder,
        status: "In-Queue",
    };
    Complaint.create(new_complaint).then((com)=>{
        if(new_complaint.complainer=='Farmer'){
            Farmer.findById(new_complaint.complainant).then((farmer)=>{
                farmer.complaint.push(com._id);
                farmer.save(()=>{
                    res.status(201).json({success: true, message : "Complaint posted"});
                })
            }).catch();
        }
    }).catch(()=>{
        res.status(400).json({success: false, message: "Internal error, could not post complaint"});
    })
})
app.put("/complaint",(req,res)=>{
    var edited_complaint = {
        status : req.body.status,
    };
    Complaint.findByIdAndUpdate(req.body._id, edited_complaint).then((com)=>{
        if(com==null)
            res.status(404).json({success: false, message: "No such complaint exists!"});
        else
            res.status(201).json({success: true, message: "compalint status updated"});
    }).catch(()=>{
        res.status(400).json({success: false, message: "Internal error, could not edit complaint"});
    })
})

app.put('/adminLogin', (req, res) => {
    var username = req.body.username;
    var password  = req.body.password;
    // console.log("request for admin login");
    Admin.findOne({'username' : username, 'password': password}).then((user)=>{
        if(user == null)
            res.status(404).json({success: false, message: "Invalid username or Password"});
        else{
            if(user.jwtToken[0] != null)
                res.status(200).json({success: true,message: "welcome back "+user.username, token:user.jwtToken[0] })
            else{
                const payload = {
                    username: user.username,
                    role: 'admin'
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn: '240h' //  
                });
                // console.log(token);
                user.jwtToken.push(token);
                user.save(()=>{
                    // console.log("token saved");
                    // console.log(user.jwtToken[0]);
                    res.status(201).json({success:true, message:"new token generated",token: token });
                });
                // console.log(token);
            }
        }
    }).catch(()=>{})
});


function generateNewJWT (user , role){
    console.log(user);
    const payload = {
        name: user.name,
        role : role,
        // device_id: device_id,
    };
    var token = jwt.sign(payload, app.get('superSecret'), {
        expiresIn: '24h' //  
    });
    user.jwtToken.push(token);
    console.log(user.jwtToken[0]);
    var newToken = {
        jwt: token,
        // device_id: device_id,
        user_id: user._id
    }
    JwtDevice.create((newToken), ()=>{})
    user.save(()=>{

        return ({
            success: true,
            message: 'token generated',
            user_id: user._id,
        });
    });
    // console.log(token);
   
   
    //return the info including token as json
}

app.listen( process.env.PORT || 8000  , () => {
    console.log("Server Connected");
})