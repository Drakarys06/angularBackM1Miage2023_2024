let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let userLogin = req.params.login;

    User.findOne({login: userLogin}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

module.exports = { getUser };
