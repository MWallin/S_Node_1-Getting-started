"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires

const db = require( "../util/db.js" )



// *****************************************************************************
// *****************************************************************************
// Exports

exports.home = ( req, res ) => {

  // Load database
  db.loadDatabase({}, () => {

    // Render the index view
    res.render( "index", {
      // Get actual data from db to render
      searches: db.getCollection( "searches" ).data
    })
  })

}


exports.top = ( req, res ) => {

  // Load database
  db.loadDatabase({}, () => {

    // Render the index view
    res.render( "top", {
      // Get actual data from db to render
      terms: db.getCollection( "top" ).data
    })
  })


}