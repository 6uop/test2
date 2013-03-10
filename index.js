module.exports = test ;

$ = require('component-jquery');
function test(){
	$('body').append('<div class="test">hello world!</div>');
}