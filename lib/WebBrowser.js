var webBrowser = function(){

};
webBrowser.prototype.open = function(url){
  console.log(url);
return "Browsing to " + url;
};


module.exports = webBrowser;
