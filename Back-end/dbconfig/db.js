const mongoose = require('mongoose');

const data=()=>{
  mongoose.connect('mongodb://localhost:27017/JobSearchPortal') 
  // useNewUrlParser: true,
  // useUnifiedTopology: true,

.then((data) => {
  console.log(`Connected to MongoDB ${data.connection.name}`);
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

}
module.exports = data;

// mongodb+srv://harsh:Harsh%4074@cluster0.ugf5p1l.mongodb.net/curd?retryWrites=true&w=majority&appName=Cluster0