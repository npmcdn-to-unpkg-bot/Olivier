var login = require('./api/Login.js');
var getStoresByName = require('./api/GetStoresByName.js');
var getMenuByStoreID = require('./api/GetMenuByStoreID.js');
var establishOrder = require('./api/EstablishOrder.js');

exports.Login = login.login;
exports.GetStoresByName = getStoresByName.GetStoresByName;
exports.GetMenuByStoreID = getMenuByStoreID.GetMenuByStoreID;
exports.EstablishOrder = establishOrder.EstablishOrder;

