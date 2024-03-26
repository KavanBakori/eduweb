const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Signup,Suggestion,Profile,Pickedtopic, connectToDatabase } = require('./dbschemas');
const bcrypt =  require('bcrypt');
const SECRET_KEY = "NOTESAPI";
const jwt = require("jsonwebtoken");

const app = express();
const port = 3002;

connectToDatabase(); 

app.use(cors());
app.use(bodyParser.json());

// app.post('/signup', async (req, res)=>{
//   const {name, email, password, role} = req.body;

//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);

//   try{
//     const user = new Signup({
//       name:name,
//       email: email,
//       password: password,
//       role:role,
//     });
//      const saveduser=await user.save();
//      console.log(saveduser);
//   }catch(e){
//     console.error('Error creating user:'+ e);
//     res.status(500).json({ e: 'An error occurred' });
//   }
// })


// Authentication***************************************************************************************************************
app.post('/signup', async(req,res) => {

  try{
    const {password, email,name,role} = req.body;
  //check if the user already exists in database
  const userExist = await Signup.findOne({email : email});
  if(userExist){
    return res.status(400).json ("User with this email is already exist");
  }
  const hashedPassword = await bcrypt.hash(password,10);

  const result = await Signup.create ({
    name:name,
    email:email,
    password : hashedPassword,
    role:role
  });

  const token =jwt.sign({email:result.email, role:result.role, id:result._id, name:result.name}, SECRET_KEY);
  res.status(201).json({token:token ,  user: result}) ;
  console.log(token);
  }catch(e){
     console.log(e);
     res.status(500).json({err: "Internal Server Error"});
  }
})
app.post('/login', async(req,res) => {
  const {lemail, lpassword, lrole}= req.body;
 try{
  const userExist = await Signup.findOne({email : lemail});
  if(!userExist){
    return res.status(404).json ("User with this email is not exist");
  }

  const matchpass = await bcrypt.compare (lpassword, userExist.password);
  if (!matchpass ) {
    return res.status(400).json("Invalid Password");
  }

  if(userExist.role == lrole){
    const token =jwt.sign({email:userExist.email, role:userExist.role, id:userExist._id, name:userExist.name}, SECRET_KEY);
  res.status(201).json({token:token ,  user: userExist}) ;
  }else{
    return res.status(400).json("Invalid role");
  }

 }catch(e){
  console.log(e);
     res.status(500).json({err: "Internal Server Error"});
 }


})

// Suggetions***************************************************************************************************************
app.post('/suggetion', async (req, res) => {
  const { topicname, topicdes } = req.body;

  try {
    const suggestion = new Suggestion({
      topicname: topicname,
      topicdes: topicdes,
    });

    const savedSuggestion = await suggestion.save();
    console.log(savedSuggestion);
    res.status(200).json(savedSuggestion);
  } catch (error) {
    console.error('Error creating suggestion:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.get('/fetchsuggetion', async(req,res) => {
  try{
    const sug= await Suggestion.find();
  res.json(sug);
  }
  catch(e){
    console.log(e);
  }
})


// app.post('/login', async (req, res) => {
//   console.log(req.body.email)
//   try {
//     const check = await Signup.findOne({ email: req.body.email });
//     if (check && check.password === req.body.password) {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false});
//     }
//   } catch (error) {
//     console.error('An error occurred', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });


// Profile update***************************************************************************************************************
app.put('/profile', async (req, res) => {
  try {
    const { email, phone, role } = req.body;

    // Check if the profile with the specified email exists
    let updatedProfile;
    const existingProfile = await Profile.findOne({ email: email });

    if (existingProfile) {
      // If the profile exists, update its fields
      updatedProfile = await Profile.findOneAndUpdate(
        { email: email },
        {
          $set: {
            phone: phone,
            occupation: role
          }
        },
        { new: true }
      );
    } else {
      // If the profile doesn't exist, create a new one
      updatedProfile = await new Profile({
        username: username,
        fullname: fullname,
        email: email,
        phone: phone,
        occupation: occupation
      }).save();
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating/creating profile:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.get('/fetchprofile', async(req,res)=>{
    try{
      const prof = await Profile.find();
      res.json(prof);
    }catch(e){
      console.log(e);
    }
})



// picked topics***************************************************************************************************************
app.post('/picked', async(req,res)=>{
  const {Educatoremail, topicname, topicdes, email} = req.body;

    try{
      const pick = new Pickedtopic({
        topicname:topicname,
        topicdes:topicdes,
        Educatoremail:Educatoremail,
        picked:true,
      })

      const picked = await pick.save() ;
      console.log(picked);
      res.status(200).json(picked);
    }catch(e){
      console.error('Error picking topic:', error);
    res.status(500).json({ error: 'An error occurred' });
    }
})

app.get('/fetchpicked', async(req,res)=>{
  try{
    const pick = await Pickedtopic.find();
    res.json(pick);
  }catch(e){
    console.log(e);
  }
})



app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
