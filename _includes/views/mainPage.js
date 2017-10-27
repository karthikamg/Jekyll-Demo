views.mainPage = Backbone.View.extend({
	el: '#container',
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html('Hi, Page content goes here!!!!!');
	}
});