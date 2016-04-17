require("./app.css");

import {Header} from "./header";

global.app = {};
app.Header = Header;

class HomeContent {
  static getContent() {
    return $(`
      <main>
        <h2>ログイン</h2>
        <button onclick="app.Header.ajaxLogin()">api req</button>
        <br>
        <input type="text" id="res" placeholder="res">
      </main>
    `);
  }
}

$("body").append( Header.getContent() );
$("body").append( HomeContent.getContent() );

console.log( "app.js 11" );
if(module.hot) {
  
  // module.hot.accept(function() {
  //   console.log( "### header.js koko1" );
  // })
  
  // accept update of dependency
  module.hot.accept("./header", function() {
    
    console.log( "### header updated" );
    app.Header = require("./header").Header;
    console.log( {Header: Header} );
  });
}
