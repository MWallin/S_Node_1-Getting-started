"use strict"

/*eslint object-property-newline:0*/
/*eslint comma-spacing:0*/

// *****************************************************************************
// *****************************************************************************
// Requires

const loki = require( "lokijs" )



// *****************************************************************************
// *****************************************************************************
// DB setup here

const db = new loki( "db.json" )

db.addCollection( "top" ).insert( [
  { term: "Javascript"      , style: "warning"  },
  { term: "Angular 2"       , style: "danger"  },
  { term: "Node JS"         , style: "succes"  },
  { term: "Golang"          , style: "info"    },
  { term: "iOS"             , style: "default" },
  { term: "ReactJS"         , style: "warning"  },
  { term: "Ionic"           , style: "danger"  },
  { term: "REST"            , style: "succes"  },
  { term: "Authentication"  , style: "info"    },
  { term: "Android"         , style: "default" }
] )


db.addCollection( "searches" )

db.saveDatabase()
