let User = require('../model/utilisateur');


// Récupérer un utilisateur par son login (GET)
function getUser(req, res){
    let userId = req.params.id;
    console.log(userId);

    User.findOne({id: userId}, (err, user) =>{
        if(err){res.send(err)}
        console.log(`User: ${JSON.stringify(user)}`);
        res.json(user);

    })
}

function getUsers(req, res){
    console.log("getUsers");
    User.find({}, (err, users) => {
        if(err){res.send(err)}
        res.json(users);
        console.log(`Users: ${JSON.stringify(users)}`);
    })
}

module.exports = { getUser, getUsers};