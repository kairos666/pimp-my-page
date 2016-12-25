'use strict'

const express           = require('express');
const expressStaticGzip = require("express-static-gzip");
const chalk             = require('chalk');
const path              = require('path');
const indexFilePath     = path.join(__dirname, 'UI/public/index.html');

class UIServer {
    constructor(appPort) {
        this.appPort = appPort;
        this.app     = express();
        this.router  = express.Router();

        // server setup
        this.init();
    }

    init() {
        // serve static files
        this.app.use(expressStaticGzip('UI/public'));

        // server routes handling
        this.router.get('/', (req, res) => {
            res.sendFile(indexFilePath);  
        });
        this.router.get('/dashboard', (req, res) => {
            res.sendFile(indexFilePath); 
        });
        this.router.get('/console', (req, res) => {
            res.sendFile(indexFilePath);
        });
        this.router.get('/help', (req, res) => {
            res.sendFile(indexFilePath); 
        });
        this.router.get('/configuration', (req, res) => {
           res.sendFile(indexFilePath);
        });
        this.router.get('/configuration:selectedTabIndex', (req, res) => {
           res.sendFile(indexFilePath);
        });
        // catch 404 and forward to main route
        this.router.use((req, res) => {
            res.redirect('/');
        });

        this.app.use('/', this.router);
    }

    launch() {
        this.app.listen(this.appPort, () => {
            console.log(chalk.blue(`PMP UI server started --> `) + chalk.green(`http://localhost:${this.appPort}`));
        });
    }
}

module.exports = UIServer;
