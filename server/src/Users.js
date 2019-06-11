const express = require( "express" )
const users = express.Router()
const cors = require( "cors" )
const jwt = require( "jsonwebtoken" )
const bcrypt = require( "bcrypt" )

const User = require( "../models/User" )
users.use( cors() )
/////////////////////////////USERS/////////////////
process.env.SECRET_KEY = 'secret'

users.post('/register', ( req, res ) => {
  const today = new Date()
  const userData = {
    pseudo: req.body.pseudo,
    profil: req.body.profil,
    email: req.body.email,
    password: req.body.password,
    mode: req.body.mode,
    created: today
  }

  User.findOne( {
    email: req.body.email
  } )
    .then( user => {
      if ( !user ) {
        bcrypt.hash( req.body.password, 10, ( err, hash ) => {
          userData.password = hash
          User.create( userData )
            .then( user => {
              res.json( {
                status: user.email + ' registered'
              } )
            } )
            .catch( err => {
              res.send( 'error: ' + err )
            } )
        } )
      } else {
        res.json( {
          error: 'User already exists'
        } )
      }
    } )
    .catch( err => {
      res.send( 'error: ' + err )
    } )
} )

users.post( '/login', ( req, res ) => {
  User.findOne( {
      email: req.body.email
    } )
    .then( user => {
      if ( user ) {
        if ( bcrypt.compareSync( req.body.password, user.password ) ) {
          const payload = {
            _id: user._id,
            pseudo: user.pseudo,
            profil: user.profil,
            email: user.email,
            mode: user.mode
          }
          let token = jwt.sign( payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          } )
          res.send( token )
        } else {
          res.json( {
            error: 'User does not exist'
          } )
        }
      } else {
        res.json( {
          error: 'User does not exist'
        } )
      }
    } )
    .catch( err => {
      res.send( 'error: ' + err )
    } )
} )

module.exports = users