var gameConsole = function(systemName){
  this.systemName = systemName;
};
gameConsole.prototype.play = function(game){
  console.log(game);
return this.systemName + ' plays ' + game.title;

};






module.exports = gameConsole;