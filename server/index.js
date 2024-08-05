const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const CareerModel = require('./models/Careers')
const UniModel = require('./models/Universities')
const salaryModel = require('./models/Salaries')


const app = express()

app.use(express.json())
app.use(cors())




mongoose.connect("mongodb+srv://ronaldkwan93:QuyqsnCT-VfFiw5@cluster0.zfomx6f.mongodb.net/")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.post("/login", (req, res) => {
    const {email, password} = req.body 
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
                console.log(user)
    
            } else {
                res.json("Email or Password is incorrect!")
            }
        } else {
            res.json("User doesn't exist!")
        }
    })
})


app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await UserModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists!' });
        }

        // Create a new user if the email is not taken
        const newUser = new UserModel({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/postCareer', (req, res) => {
    CareerModel.create(req.body)
        .then(career => res.json(career))
        .catch(err => res.status(500).json({ error: err.message })); // Return a 500 status code for server errors
});

app.post('/postUniversity', (req, res) => {
    UniModel.create(req.body)
        .then(career => res.json(career))
        .catch(err => res.status(500).json({ error: err.message })); // Return a 500 status code for server errors
});

app.post('/postSalary', (req, res) => {
    salaryModel.create(req.body)
        .then(career => res.json(career))
        .catch(err => res.status(500).json({ error: err.message })); // Return a 500 status code for server errors
});

app.get('/getCareers', (req, res) => {
    CareerModel.find()
      .then(careers => res.json(careers))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  app.get('/getUniversities', (req, res) => {
    UniModel.find()
      .then(universities => res.json(universities))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  app.get('/getSalaries', (req, res) => {
    salaryModel.find()
      .then(salary => res.json(salary))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  app.get('/getUsers', (req, res) => {
    const {email} = req.body
    UserModel.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  });



app.post('/getUser', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// Express.js route for updating user profile
app.put("/updateUser", (req, res) => {
    const { email, name, password } = req.body;
  
    if (!email || !name || !password) {
      return res.status(400).json({ error: 'Email, name, and password are required' });
    }
  
    UserModel.findOneAndUpdate(
      { email: email }, // Find user by email
      { name, password },
      { new: true } // Return the updated document
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });
  



app.listen(3001, () => {
    console.log("Server is running!")
})