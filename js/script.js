---
---

$(document).ready(function(){

	var util = {},
		views = {}; // util is on the Window level, since it needs to be accessed by the templates

	{% include common/util.js %}
	{% include common/collections.js %}
	{% include common/models.js %}

	{% include router/router.js %}

	{% include views/mainPage.js %}

	Backbone.history.start(); //necessary to start backbone

});