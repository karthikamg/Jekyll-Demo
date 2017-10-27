var Router = Backbone.Router.extend({
	routes: {
		'': 'redirect'
	},

	redirect: function(){
		new views.mainPage();
		// this.navigate('', {trigger: true});
	}
});

var router = new Router();

// router.on('route:home', function(){ debugger;
// 	new views.mainPage();
// });