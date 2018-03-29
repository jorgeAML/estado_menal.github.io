$(document).ready(function() {

	$("<ul/>", {
		"appendTo": "nav",
		"class": "onlynav",
		html: "<li><a/></li></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li>",
	});
	$(".onlynav").find("img").eq(0).attr({
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/logonav.jpg",
		"class": "imgnav",
	});
	$(".onlynav").find("a").eq(0).html("MedicinaResources").attr({
		href: "https://jorgeaml.github.io/medicinaresourcesblog.github.io/",
		title: "MedicinaResources",
		"class": "navtitle",
	});
	/*$(".onlynav").find("a").eq(1).html("Página principal").attr({
		href: "http://www.medicinaresources.com/",
		title: "volver a medicinaresources",
	});*/
	$(".onlynav").find("a").eq(2).html("Github").attr({
		href: "https://github.com/jorgeAML",
		title: "ver repositorios en Github",
		"class": "nava1",
	});
	$(".onlynav").find("a").eq(3).html("MR noticias").attr({
		href: "#",
		title: "Noticias",
		"class": "nava1",
	});
	$(".onlynav").find("a").eq(4).html("Acerca de nosotros").attr({
		href: "#",
		title: "conoce un poco más de MedicinaResources",
		"class": "nava1",
	});

	//POST

	$("<div/>", {
		"appendTo": ".post",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "column",
	});
	$("<div/>", {
		"appendTo": ".column",
		"class": "hojapost",
	});
	$("<div/>", {
		"appendTo": ".hojapost",
		"class": "inlinediv",
	});
	//inicio del post

	$("<div/>", {
		"appendTo": ".inlinediv",
		"class": "post-left a1",
		html: "<img><h2/><hr><p/><a><button/></a>",
	});
	$(".a1").find("img").eq(0).attr({
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/estadisticasuno.png",
		"class": "imga1",
	});
	$(".a1").find("hr").eq(0).attr({
		"class": "hra1",
	});
	$(".a1").find("h2").eq(0).html("Estadísticas de MedicinaResources").attr({
		"class": "h2a1",
	});
	$(".a1").find("p").eq(0).html("Todo un año de estadísticas, algunas bajas y otras altas pero ni modo. descubre que hicimos para que MedicinaResources sea tan único en latinoamerica.").attr({
		"class": "pa1",
	});
	$(".a1").find("button").html("Leer noticia").eq(0).attr({
		"class": "buttona1",
	});
	$(".a1").find("a").eq(0).attr({
		href: "https://jorgeaml.github.io/medicinaresourcesblog.github.io/posts/2018-2-21-estadisticas_2017.html",
		title: "Estadísticas del primer año de MedicinaResources",
	});

	//post 2 centro

	$("<div/>", {
		"appendTo": ".inlinediv",
		"class": "post-left a2",
		html: "<img><h2/><hr><p/><a><button/></a>",
	});
	$(".a2").find("img").eq(0).attr({
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/focus.jpg",
		"class": "imga1",
	});
	$(".a2").find("hr").eq(0).attr({
		"class": "hra1",
	});
	$(".a2").find("h2").eq(0).html("El porque necesitas concentrarte").attr({
		"class": "h2a1",
	});
	$(".a2").find("p").eq(0).html("Tenemos una tendencia que nos permite a nosotros mismos aprender de diferentes maneras o direcciones, involucrarnos en muchas actividades y causas...").attr({
		"class": "pa1",
	});
	$(".a2").find("button").html("Leer noticia").eq(0).attr({
		"class": "buttona1",
	});
	$(".a2").find("a").eq(0).attr({
		href: "https://jorgeaml.github.io/medicinaresourcesblog.github.io/posts/2018-2-1-el_porque_necesitas_concentrarte.html",
		title: "El porque necesitas concentrarte.",
	});

	//post 3 derecha


	$("<div/>", {
		"appendTo": ".inlinediv",
		"class": "post-left a3",
		html: "<img><h2/><hr><p/><a><button/></a>",
	});
	$(".a3").find("img").eq(0).attr({
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/ads.jpg",
		"class": "imga1",
	});
	$(".a3").find("hr").eq(0).attr({
		"class": "hra1",
	});
	$(".a3").find("h2").eq(0).html("¿Ads en MedicinaResources?").attr({
		"class": "h2a1",
	});
	$(".a3").find("p").eq(0).html("He aquí algunos consejos para mandar al carajo los anuncios de Google de ¡una vez por todas! y el pequeño experimento en nuestro sitio.").attr({
		"class": "pa1",
	});
	$(".a3").find("button").html("Leer noticia").eq(0).attr({
		"class": "buttona1",
	});
	$(".a3").find("a").eq(0).attr({
		href: "https://jorgeaml.github.io/medicinaresourcesblog.github.io/posts/2018-1-28-ads_en_medicinaresources.html",
		title: "Ads en MedicinaResources",
	});


	//footer
	$("<span/>", {
		"appendTo": "footer",
		html: "MedicinaResources &copy 2018",
	});
	$("<span/>", {
		"appendTo": "footer",
		html: "Santiago - Guatemala",
	});
	$("<span/>", {
		"appendTo": "footer",
		html: "Sant - Petersburgo - Russia",
	});
});
