const app= require('express')();
const port=3000;
app.set('views', __dirname + '/view');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home');
})
app.listen(3000,()=>console.log(`Server started on port ${port}`));