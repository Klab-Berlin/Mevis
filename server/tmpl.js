var fs	= require('fs'),
	doT	= require('dot');



function create ( path, callback ) {

    var fileName = 'compiled.js',

        precompile = !callback;

    /* ensure the relative path */
    fs.realpath( path, function ( err, resolvedPath ) {

        if (err) throw  err;


        getTemplates( resolvedPath, precompile, function ( templates ) {

            if ( !precompile ) {

                callback( templates );

            } else {

                var data = 'var templates = {\n';

                Object.keys( templates ).forEach( function ( key ) {

                    data += '\t' +key + ': ' + templates[key] + ',';
                });

                data = data.substr( 0, data.length - 1 )
                           .replace(/(\r\n+|\n+|\r+)/g, '')  // line breaks
                           .replace(/\t+/g, '') + '};';      // removing tabs + end


                fs.writeFile( resolvedPath + '/' + fileName, data, 'utf8', function ( err ) {

                    if ( err ) throw err;

                    console.log('Created "' + fileName + '" !' );
                });
            }

        });

    });
}



function getTemplates ( dir, precompile, create ) {

    var templates = {},

        type = 'html',

        current, name,  // temp
        pending;        // iterator


    checkDir( dir, type, function ( files ) {

        pending = files.length;


        files.forEach( function ( file ) {

            current = dir + '/' + file;

            fs.readFile( current, 'utf8', function ( err, data ) {

                if ( err ) throw err;

                name = file.substr( 0, file.lastIndexOf('.') );

                data = doT.template( data );

                templates[ name ] = precompile ? data.toString() : data;

                if ( !--pending ) create( templates );
            });

        });

    });
}



function checkDir ( dir, checkType, callback ) {

    if ( !callback ) {

      callback = type;
      checkType = 'html';
    }

    var results = [],
        length, type;   // temp

    fs.readdir( dir, function ( err, files ) {

        if ( err ) throw err;

        length = files.length,

        files.forEach( function ( file ) {

            type = file.substr( file.lastIndexOf('.') + 1, file.length );

            if ( type === checkType ) results.push( file );

            if ( !--length ) callback( results );
        });
    });
}



module.exports = {

    create: create
};
