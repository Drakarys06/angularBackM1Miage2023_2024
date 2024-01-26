let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let userId = req.params.id; // = id

    User.findOne({_id: userId}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

module.exports = { getUser };