var express = require('express');
var router = express.Router();
var  mailer = require('express-mailer');

/* GET home page. */
router.get('/expressMailer', function(req, res, next) {
  res.render('emailsend');
});


router.post('/expressMailer', function (req, res, next) {

	var usr = req.body.usermail;
     console.log(usr);
     var sub = req.body.subject;
     console.log(sub);
     var comment = req.body.comment;
     console.log(comment);
  res.mailer.send('abc', {
    to: usr,  
    subject: sub, 
    text:comment  
  }, function (err, success) {
  	//console.log(err, success);
    if (err) {
      
      res.send({result: 'There was an error sending the email'});
    }else{
    	  res.send({result: 'Email Sent'});
    }
    
  });
});





module.exports = router;
