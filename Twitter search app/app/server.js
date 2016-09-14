"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires

const express = require( "express" )



// *****************************************************************************
// *****************************************************************************
// App setup is here

const app = express()

app.set( "view engine", "ejs" )
app.set( "views", __dirname + "../public/views" )

app.use( express.static( __dirname + "/../public" ) )



// *****************************************************************************
// *****************************************************************************
// Router setup is here

require( "./routes" )( app )



// ****************************************************************************
// ****************************************************************************
// Exports

module.exports = app
