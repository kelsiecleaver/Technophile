var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var extend = require('../lib/extend');

function NintendoDS(){
 GameConsole.call(this, 'Nintendo DS');
}
extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;