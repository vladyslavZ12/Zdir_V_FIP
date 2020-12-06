const addClients = (db,nodemailer,transporter) =>(req,res) =>{
    const {name, phone, comments} = req.body;
      db('clients')
      .insert({
        name: name,
        phone:phone,
        comments: comments,
      })
      .then(data=>{
        const info = transporter.sendMail({
          from: 'crmsystemgroup25@gmail.com', // sender address
          to: 'vladyslavzdir8@gmail.com', // list of receivers
          subject: `${name} requested a call`, // Subject line
          html: `<br>${name} requested a call ${phone}<br>Comments: ${comments}`
        })
      })
      .then(info=>res.status(200))
      .catch(err=>{
        if(err.code==='23505')
        res.redirect('/contact');
        console.log("error =" ,err.code);
      });
    }

    module.exports = {
      addClients:addClients
    }