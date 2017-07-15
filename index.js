"use strict";
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
app.on('ready', function () {
    var Screen = electron.screen;
    var size = Screen.getPrimaryDisplay().size;
    var mainWindow = new BrowserWindow({
        left: 0,
        top: 0,
        width: size.width,
        height: size.height,
        frame: false,
        show: true,
        transparent: true,
        resizable: false,
        'always-on-top': true
    });
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
