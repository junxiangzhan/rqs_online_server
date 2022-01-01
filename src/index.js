import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './client/components/App';

const app = express();

app.use( express.static( 'public' ));

app.get( "*", function ( req, res ) {
    return fs.readFile( path.join( __dirname, 'index.html' ), function ( err, data ) {
        if ( err ) throw err;

        const replacement = {
            content: renderToString(
                <div>
                    <StaticRouter location={ req.path }>
                        <App />
                    </StaticRouter>
                </div>
            )
        }


        res.end( Object.entries( replacement ).reduce( 
            function ( previousValue, [ replaceTarget, replaceValue ] ) {
                return previousValue.replaceAll( `{{ ${ replaceTarget } }}`, replaceValue );
            }, String( data )
        ));
    });
});

app.listen( process.env.port ?? 3000, function () {
    console.log(`Your app is listening on port ${ process.env.port ?? 3000 }.`)
});