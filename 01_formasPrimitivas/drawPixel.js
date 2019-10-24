var configScreen, draw_pixel, clear_window,drawSampleRect;
(function () {

	function _bandwidth() {
		var range = this.range(), domain = this.domain();
		return (range[1] - range[0]) / (domain[1] - domain[0])
	}


	function _is_valid(obj) {
		if (!obj || (typeof obj) != "object") {
			return false;
		}
		if (isNaN(obj.t)) {
			return false;
		}
		if (!obj.c || !(obj.c instanceof Array)) {
			return false;
		}
		
		if (obj.c.length > 0) {
			for (var i = 0; i < obj.c.length; i++) {
				if (!obj.c[i] || (typeof obj.c[i]) != "object") {
					return false;
				} if (isNaN(obj.c[i].x)) {
					return false;
				}
				if (isNaN(obj.c[i].x)) {
					return false;
				}
			}
		}
		return true;
	}

	var x = d3.scaleLinear(), 
		y = d3.scaleLinear();

	var g;
	var list_of_pixels = [];

	var color_pixel = "#000000",
		color_new_pixel = "#0000FF";
	var time_between = 500;
	var width = 800,
		height = 600,
		n_pixel_w = width/10,
		n_pixel_h = height/10;

		
	x.bandwidth = _bandwidth;
	y.bandwidth = _bandwidth;

	configScreen = function (container, t, w, h, n_w, n_h) {
		time_between = t || time_between,
			width = w || width,
			height = h || height,
			n_pixel_w = n_w || n_pixel_w,
			n_pixel_h = n_h || n_pixel_h;
		container = container || "body";
		g = d3.select(container).append("svg")
			.attr("width", width)
			.attr("height", height);
		x.range([0,width]).domain([0,n_pixel_w]);
		y.range([0,height]).domain([0,n_pixel_h]);
		g.append("rect").attr("class","borda").attr("width",width).attr("height",height)
			.attr("fill","none").attr("stroke","#000").attr("stroke-width",2);
	}

	draw_pixel = function (obj) {
		if (_is_valid(obj)) {
			list_of_pixels = list_of_pixels.concat(obj.c);

			g.selectAll(".pixel").data(list_of_pixels)
				.attr("fill",color_pixel);
				
			g.selectAll(".pixel").data(list_of_pixels)
				.enter().append("rect").attr("class","pixel")
					.attr("x",function(d){return x(d.x);})
					.attr("y",function(d){return x(d.y);})
					.attr("width",x.bandwidth())
					.attr("height",y.bandwidth())
					.attr("fill",color_new_pixel);
		}
	}
	clear_window = function(){
		g.selectAll(".pixel").remove();
		list_of_pixels = [];
	}

	drawSampleRect = function(){
		var i = 0;
        var interval = setInterval(function () {
            draw_pixel(
                {t: i, c: [
                    { x: i, y: i }
                ]
            });
            i++;
            if (i == 60)
                clearInterval(interval);
        }, 1000);
	}

})();