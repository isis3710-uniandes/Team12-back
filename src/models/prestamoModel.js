const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
const fs = require('fs');

exports.createSchema = {
    id: Joi.string().optional(),
    paymentId: Joi.string().optional(),
    userId: Joi.string().required(),
    objectId: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    valor: Joi.string().required()
};

exports.updateSchema = {
    paymentId: Joi.string().optional(),
    userId: Joi.string().optional(),
    objectId: Joi.string().optional(),
    startDate: Joi.string().optional(),
    endDate: Joi.string().optional(),
    valor: Joi.string().optional()

};
/*
* obj = {userID=1, objectID=1, prestamoID= undefined}
*/
exports.fk_on_list_all = function (obj) {
    var file = './data/usuarios.json';
    var data = fs.readFileSync(file, 'utf8');
    var users = JSON.parse(data);

    var usuarioOk = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == obj.userID) {
            return true;
        }
    }
    return false;
}

/*
Si fuesen, por ejemplo, /users/1/object/1/categories.
Debería comprobar que exista el usuario de id 1, el objeto de id 1
y que el objeto de id 1 pertenece al usuario de id 1.
* obj = {userID=1, objectID=1, prestamoID= undefined}
*/
exports.fk_on_create = function (obj, prestamo) {
    var file = './data/usuarios.json';
    var data = fs.readFileSync(file, 'utf8');
    var users = JSON.parse(data);

    var file2 = './data/objetos.json';
    var data2 = fs.readFileSync(file2, 'utf8');
    var objects = JSON.parse(data2);

    for (var i = 0; i < users.length; i++) {
        if (users[i].id == obj.userID) {
            return true;
        }
    }
    return false;
}

exports.fk_on_read_one = function (obj, prestamo) {
    var file = './data/usuarios.json';
    var data = fs.readFileSync(file, 'utf8');
    var users = JSON.parse(data);

    for (var i = 0; i < users.length; i++) {
        if (users[i].id == obj.userID) {
            return true;
        }
    }

    return false;
}

exports.fk_on_update = function (obj, prestamo) {
    var file = './data/usuarios.json';
    var data = fs.readFileSync(file, 'utf8');
    var users = JSON.parse(data);

    for (var i = 0; i < users.length; i++) {
        if (users[i].id == obj.userID) {
            return true;
        }
    }
    return false;
}

exports.fk_on_delete = function (obj, prestamo) {
    var file = './data/usuarios.json';
    var data = fs.readFileSync(file, 'utf8');
    var users = JSON.parse(data);
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == obj.userID) {
            return true;
        }
    }
    return false;
}
