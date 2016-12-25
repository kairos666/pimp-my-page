'use strict'

const pmpEngine = require('pmp-engine');
const UIServer  = require('./server');
const appPort   = 4200;

// setup UI server
let uiServer = new UIServer(appPort);
uiServer.launch();