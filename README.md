# JQuery-Crash-Course
JQuery Crash Course




##Events:
	*Mouse Events:
			on()
			dblclick()
			trigger()
			click()
			dblclick()
			mouseenter()
			mouseleave()
			hover()

		*click(): --> in Higher Version of jq this method is depreciated insted use on() / trigger()
			hide()
			show()
			toggle()

	*Keyboard Events:
		keypress()
		keydown()
		keyup()

	*Document/Window Events:
		load()
		resize()
		scroll()
		unload()

##jQuery Effects:
	*Fade:
		/*These Functions also can get 'fast'/'slow'/numeric time in seconds params : -> $('selector').fadeIn('slow') or 'fast' or fadeIn(3000)
		You Can Also Pass in a Callable Function To Do Something after the animation is done -> fadeIn(3000, function(){some shit};);

		fadeIn()
		fadeOut()
		fadeToggle()
		fadeTo()

	*Slide:
		slideDown()
		slideUp()
		slideToggle()
		stop()

	*JQ Animate:
		animate()

##jQuery Traversing - Ancestors:
	*funcs:
		parent()
		parents()
		parentsUntil()

	*Descendants:
		children()
		find()

	*Siblings:
		siblings()
		next()
		nextAll()
		nextUntil()
		prev()
		prevAll()
		prevUntil()

	*Filtering:
		first()
		last()
		eq()
		not()
		filter()

##jQuery HTML & Css:
	*Get:
		text()
		html()
		val()
	*Set:
		text()
		html()
		val()
	*Add:
		append()
		prepend()
		after()
		before()
	*Remove:
		remove()
		empty()
	*CSS:
		addClass()
		removeClass()
		toggleClass()
		css()
##jQuery Dimension:
	*Methods:
		width()
		height()
		innerWidth()
		innerHeight()
		outerWidth()
		outerHeight()

##JQuery Ajax:
	*load:
		load() --> $(selector).load(URL,data,callback);

		*The Call Back Param Can Have:

			responseTxt
			statusTxt
			xhr

			*Sample:
				$("button").click(function(){
					$("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
						if(statusTxt == "success")
							alert("External content loaded successfully!");
						if(statusTxt == "error")
							alert("Error: " + xhr.status + ": " + xhr.statusText);
					});
				});
