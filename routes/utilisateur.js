let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let idUser = req.params.id; // = id

    User.findById(idUser, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

module.exports = { getUser };