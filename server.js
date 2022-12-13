const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./views/home.html",{ root:__dirname });
});
app.get("/services", (req, res) => {
  res.sendFile("./views/ourServices.html",{ root:__dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("./views/contactUs.html",{ root:__dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((req, res, next) => {
   const day=new Date().getDay()
   const hour= new Date().getHours()
   if (0<day && day<6) {
    if (8<=hour && hour<=18) {
        return next()
    }
   }
    
return res.send('we are closed')
    
  })