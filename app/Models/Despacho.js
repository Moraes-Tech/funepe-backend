'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Despacho extends Model {
  caixaEntrada () {
    return this.belongsTo('App/Models/CaixaEntrada')
  }

  despachoPadrao () {
    return this.belongsTo('App/Models/Despacho')
  }

  despacho () {
    return this.belongsTo('App/Models/Usuario')
  }
}

module.exports = Despacho