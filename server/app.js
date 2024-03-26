const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Signup, connectToDatabase } = require('./dbschemas');
const bcrypt =  require('bcrypt');

const app = express();
const port = 3002;

connectToDatabase(); 

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', async (req, res)=>{
  const {name, email, password, role} = req.body;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try{
    const user = new Signup({
      name:name,
      email: email,
      password: hashedPassword,
      role:role,
    });
     const saveduser=await user.save();
     console.log(saveduser);
  }catch(e){
    console.error('Error creating user:', e);
    res.status(500).json({ error: 'An error occurred' });
  }
})


app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
