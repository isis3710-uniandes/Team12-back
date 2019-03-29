const Controller = require('../controllers/loginController');

module.exports = function(app) {
	var c = new Controller('./data/usuarios.json');

    // login Routes   
    app.post('/login',function(req, res)  {
        c.login(req, res);
    })
};
