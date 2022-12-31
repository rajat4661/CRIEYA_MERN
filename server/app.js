const bcrypt = require('bcrypt');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
require('dotenv').config();
const express = require('express');
const app = express()
app.use(cors())
mongoose.set('strictQuery', false);





//Connecting to database

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true}).then(()=>{
    console.log("DB Connected");
}).catch((err)=> console.log(err));

app.use(express.json())

//UserSchema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },

    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]


})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
        this.cpassword =await bcrypt.hash(this.cpassword , 12);

    }
    next();
});




userSchema.method("generateAuthToken" , async function(){
    try {
        let token = jwt.sign({_id:this._id},'process.env.SECRET_KEY');
        this.tokens= this.tokens.concat({token:token})
        await this.save();
        return token;
        
    } catch (error) {
        console.log(error);
    }
})






const User  = mongoose.model('USER',userSchema)




//middleware
// const middleware = (req ,res , next)=>{

// console.log("middleware")
// }
// middleware();





// routes

app.get('/',function(req, res){
    res.send("server started");
})

app.get('/aboutme',(req, res)=>{
    res.send("about me")
})

app.get('/contact',function(req, res){
    res.send("hello contact")
})

app.get('/signin',function(req, res){
    res.send("hello signin")
})

app.get('/signup',function(req, res){
    res.send("hello signup")
})



app.post('/register' , async (req,res)=>{
   
    const { name , email , phone , work , password , cpassword} = req.body
    console.log(req.body)
    


   
        const user = new User({
                                          name: req.body.user.name,
                                          email:req.body.user.email,
                                          work:req.body.user.work,
                                         phone:req.body.user.phone,
                                         password:req.body.user.password,
                                        cpassword:req.body.user.cpassword
                                      })

                                      
            //   const token  = jwt.sign({email:})
        
               user.save(function(err){
                 if(err){
                     console.log(err);
                  return res.status(422).json({error:"data not filled"});

                 }
                 else{
                     console.log("sucessfully saved to database")
                     return res.json({error:"saved to db"});

                 }
               })

  
    })
    

    app.post('/sign' , async(req, res)=>{
        try {
            
        
        let token;
        const email = req.body.Login.email;
        const password = req.body.Login.password;
        const userLogin = User.findOne({email});
         userLogin.then(user=>{
            if(!user){
                return res.status(400).json({error:"email not found"})
            }
            // console.log(user.password)
            bcrypt.compare(password, user.password).then(async isMatch=>{
                
                if(isMatch){

                    // const token : jwt.sign({email:user.email , id:user._id},"mynameisrajatchaudhary")
                    //   token = await userLogin.generateAuthToken();
                    // console.log(token)
                   
                    return res.status(500).json({message:"sucess"})

                }
                else{
                    return res.status(400).json({message:"wrong password"})
                    
                }
            })
        })
    }catch (error) {
       console.log(error);     
        }
    })

    // app.post('/sign', async(req , res)=>{
    //     const {  email , password} = req.body
    //     // console.log(req.body.Login.emaill)
       
   

    // try {
    //     let token;
    //     const { email , password } = req.body; 
        
    //     if(!email || !password ){
    //     return res.status(400).json({error:"plz fill data"});
    // }
    //     const check =  await User.findOne({email:req.body.Login.email });
        

    //     if(check){
    //          const isMatch = await bcrypt.compare(req.body.Login.password,check.password);
    //           token = await  check.generateAuthToken();
    //          console.log(token);

    //          res.cookie("jwtoken",token, {
    //             maxAge:900000,
    //             httpOnly:true

    //          })

    //     if(!isMatch){
    //     res.status(400).json({error:"invalid"})
    //     }
    //     else{
            
    //      res.json({message:"succesfully signed"})
    //     }
    //     }
    //     else{
    //          res.status(400).json({message:"invalid credential"})
    //     }

       
        
        
    // } catch (error) {
    //     console.log(error);
        
    // }

    // })

// listen port 

app.listen(5000 , function(req, res){
    console.log("server started at port 3000")
})