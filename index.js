'use strict'

const PMPEngine = require('pmp-engine');
const UIServer  = require('./server');
const open      = require('open');
const appPort   = 4200;

// setup UI server
let uiServer = new UIServer(appPort, () => {
    open(`http://localhost:${appPort}`);
});
uiServer.launch();

// setup PMP engine
this.pmpEngine = new PMPEngine({ ioEnabled:true });

this.pmpEngine._hellSpawn._status.subscribe(status => {
    console.log('status changes --> ' + status);
});