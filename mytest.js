var MyTest = function(){

}

MyTest.prototype.giveMeFunc = function(){
	return function(){};
}

MyTest.prototype.makeDelay = function(){
	setTimeout(function(){
		window.hasDelay = true;
	},1000);
}

MyTest.prototype.makeAsync = function(callback){
	window.hasAsync = true;
	callback();
}

MyTest.prototype.makeAlert = function(){
	alert('hello world!');
}