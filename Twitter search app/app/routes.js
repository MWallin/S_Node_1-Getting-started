"use strict"

module.exports = function( app ) {

  // ***************************************************************************
  // Regular routes

  app.get( "/", ( req, res ) => {
    res.send( "This is the home page" )
  })

  app.get( "/top", ( req, res ) => {
    res.send( "This is the top page" )
  })

  app.get( "/results", ( req, res ) => {
    res.send( "This is the results page" )
  })



  // ***************************************************************************
  // API-routes

  app.get( "/api/results", ( req, res ) => {
    res.json({message: "This is the API page"})
  })

}
