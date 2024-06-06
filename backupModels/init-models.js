var DataTypes = require("sequelize").DataTypes;
var _batiment = require("./batiment");
var _capsules = require("./capsules");
var _code_iso = require("./code_iso");
var _comptes = require("./comptes");
var _coute = require("./coute");
var _factures = require("./factures");
var _message = require("./message");
var _relie = require("./relie");
var _reservations = require("./reservations");
var _roles = require("./roles");
var _se_situe = require("./se_situe");
var _services = require("./services");
var _typemessage = require("./typemessage");
var _typereservation = require("./typereservation");
var _ville = require("./ville");

function initModels(sequelize) {
  var batiment = _batiment(sequelize, DataTypes);
  var capsules = _capsules(sequelize, DataTypes);
  var code_iso = _code_iso(sequelize, DataTypes);
  var comptes = _comptes(sequelize, DataTypes);
  var coute = _coute(sequelize, DataTypes);
  var factures = _factures(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var relie = _relie(sequelize, DataTypes);
  var reservations = _reservations(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var se_situe = _se_situe(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var typemessage = _typemessage(sequelize, DataTypes);
  var typereservation = _typereservation(sequelize, DataTypes);
  var ville = _ville(sequelize, DataTypes);

  batiment.belongsToMany(capsules, { as: 'id_capsule_capsules', through: se_situe, foreignKey: "id_batiment", otherKey: "id_capsule" });
  batiment.belongsToMany(comptes, { as: 'id_compte_comptes', through: relie, foreignKey: "id_batiment", otherKey: "id_compte" });
  capsules.belongsToMany(batiment, { as: 'id_batiment_batiment_se_situes', through: se_situe, foreignKey: "id_capsule", otherKey: "id_batiment" });
  comptes.belongsToMany(batiment, { as: 'id_batiment_batiments', through: relie, foreignKey: "id_compte", otherKey: "id_batiment" });
  factures.belongsToMany(services, { as: 'id_service_services', through: coute, foreignKey: "id_facture", otherKey: "id_service" });
  services.belongsToMany(factures, { as: 'id_facture_factures', through: coute, foreignKey: "id_service", otherKey: "id_facture" });
  relie.belongsTo(batiment, { as: "id_batiment_batiment", foreignKey: "id_batiment"});
  batiment.hasMany(relie, { as: "relies", foreignKey: "id_batiment"});
  se_situe.belongsTo(batiment, { as: "id_batiment_batiment", foreignKey: "id_batiment"});
  batiment.hasMany(se_situe, { as: "se_situes", foreignKey: "id_batiment"});
  reservations.belongsTo(capsules, { as: "id_capsule_capsule", foreignKey: "id_capsule"});
  capsules.hasMany(reservations, { as: "reservations", foreignKey: "id_capsule"});
  se_situe.belongsTo(capsules, { as: "id_capsule_capsule", foreignKey: "id_capsule"});
  capsules.hasMany(se_situe, { as: "se_situes", foreignKey: "id_capsule"});
  ville.belongsTo(code_iso, { as: "id_code_iso_code_iso", foreignKey: "id_code_iso"});
  code_iso.hasMany(ville, { as: "villes", foreignKey: "id_code_iso"});
  factures.belongsTo(comptes, { as: "id_compte_compte", foreignKey: "id_compte"});
  comptes.hasMany(factures, { as: "factures", foreignKey: "id_compte"});
  message.belongsTo(comptes, { as: "id_compte_compte", foreignKey: "id_compte"});
  comptes.hasMany(message, { as: "messages", foreignKey: "id_compte"});
  relie.belongsTo(comptes, { as: "id_compte_compte", foreignKey: "id_compte"});
  comptes.hasMany(relie, { as: "relies", foreignKey: "id_compte"});
  reservations.belongsTo(comptes, { as: "id_compte_compte", foreignKey: "id_compte"});
  comptes.hasMany(reservations, { as: "reservations", foreignKey: "id_compte"});
  coute.belongsTo(factures, { as: "id_facture_facture", foreignKey: "id_facture"});
  factures.hasMany(coute, { as: "coutes", foreignKey: "id_facture"});
  reservations.belongsTo(factures, { as: "id_facture_facture", foreignKey: "id_facture"});
  factures.hasMany(reservations, { as: "reservations", foreignKey: "id_facture"});
  comptes.belongsTo(roles, { as: "id_role_role", foreignKey: "id_role"});
  roles.hasMany(comptes, { as: "comptes", foreignKey: "id_role"});
  coute.belongsTo(services, { as: "id_service_service", foreignKey: "id_service"});
  services.hasMany(coute, { as: "coutes", foreignKey: "id_service"});
  message.belongsTo(typemessage, { as: "id_typeMessage_typemessage", foreignKey: "id_typeMessage"});
  typemessage.hasMany(message, { as: "messages", foreignKey: "id_typeMessage"});
  reservations.belongsTo(typereservation, { as: "id_typeReservation_typereservation", foreignKey: "id_typeReservation"});
  typereservation.hasMany(reservations, { as: "reservations", foreignKey: "id_typeReservation"});
  batiment.belongsTo(ville, { as: "id_ville_ville", foreignKey: "id_ville"});
  ville.hasMany(batiment, { as: "batiments", foreignKey: "id_ville"});
  comptes.belongsTo(ville, { as: "id_ville_ville", foreignKey: "id_ville"});
  ville.hasMany(comptes, { as: "comptes", foreignKey: "id_ville"});

  return {
    batiment,
    capsules,
    code_iso,
    comptes,
    coute,
    factures,
    message,
    relie,
    reservations,
    roles,
    se_situe,
    services,
    typemessage,
    typereservation,
    ville,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
