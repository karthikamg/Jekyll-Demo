$(document).ready(function(){

	var MainPage = Backbone.View.extend({
		el: '#container',
		render: function(){
			this.$el.html('Page content goes here!!!!!');
		}
	});

	mainPage = new MainPage();

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		}
	});

	var router = new Router();

	router.on('route:home', function(){
		mainPage.render();
	});

	Backbone.history.start(); //necessary to start backbone

});