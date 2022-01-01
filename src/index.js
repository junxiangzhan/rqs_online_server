import express from 'express';
import FileSystem from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from './client/components/App';

const app = express();

app.use( express.static( 'public' ));

app.get( "*", function ( req, res ) {
    return FileSystem.readFile( path.join( __dirname, 'index.html' ), function ( err, data ) {
        if ( err ) throw err;

        const replacement = {
            content: renderToString(
                <div><App /></div>
            )
        }

        res.send( Object.entries( replacement ).reduce( 
            function ( previousValue, [ replaceTarget, replaceValue ] ) {
                return previousValue.replaceAll( `{{ ${ replaceTarget } }}`, replaceValue );
            }, String( data )
        ));
    });
});

app.listen( process.env.port ?? 3000, function () {
    console.log(`Your app is listening on port ${ process.env.port ?? 3000 }.`)
});