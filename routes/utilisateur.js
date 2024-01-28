let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let userLogin = req.params.login;
    console.log(userLogin);

    User.findOne({login: userLogin}, (err, login) =>{
        if(err){res.send(err)}
        console.log(`User: ${JSON.stringify(login)}`);
        res.json(login);

    })
}

module.exports = { getUser };