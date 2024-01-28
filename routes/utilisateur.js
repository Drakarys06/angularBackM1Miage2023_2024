let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let userId = req.params.login;
    console.log(userId);

    User.findOne({login: userId}, (err, login) =>{
        if(err){res.send(err)}
        console.log(`User: ${JSON.stringify(login)}`);
        res.json(login);

    })
}
module.exports = { getUser };