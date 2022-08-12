const router = require('express').Router();
const passport = require('passport');
var data=null;
 router.get('/login/success',(req, res)=>{

         res.json({
            success: true,
            message:"successful",
            user: data
         })

 })
 router.get('/login/fail',(req, res)=>{

         res.json({
            success: false,
            message:"Login Failure",
    })
 })
  router.get('/logout',(req,res)=>{
     req.logout();
     res.redirect('http://localhost:3000/');
  })

  //google
 router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

 router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login/fail' }),
     function(req, res) {
    // Successful authentication, redirect home.
       data = req.user;
       res.redirect('http://localhost:3000/');
   });

// facebook
router.get('/facebook',
   passport.authenticate('facebook'));
 
router.get('/facebook/callback',
   passport.authenticate('facebook', { failureRedirect: '/login/fail' }),
   function(req, res) {
     // Successful authentication, redirect home.
     data= req.user;

     res.redirect('http://localhost:3000/');
   });

   // github
router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router  .get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('http://localhost:3000/');
  });

  module.exports = router;