$(document).ready(function() {

	$("<div/>", {
		"appendTo": ".position-navbar",
		"class": "navbar",
		"html": "<div/><div/><nav><div/><div/><div/></nav>",
	});
	$(".navbar").find("nav").eq(0).attr({
		"class": "navbar_items",
	});
	$(".navbar").find("div").eq(1).html("<i class='material-icons'>&#xE5D2;</i>").attr({
		"class": "navbar_link navbar_link-toogle",
	});
	$(".navbar").find("div").eq(0).html("<a href='https://jorgeaml.github.io/medicinaresourcesblog.github.io/'>MedicinaResources - blog</a>").attr({
		"class": "navbar_link navbar_link-brand",
	});
	$(".navbar").find("div").eq(2).html("<a href='https://github.com/jorgeAML'>Github</a>").attr({
		"class": "navbar_link",
	});
	$(".navbar").find("div").eq(3).html("<a href='#'>MR noticias</a>").attr({
		"class": "navbar_link",
	});
	$(".navbar").find("div").eq(4).html("<a href='#'>Acerca de nosotros</a>").attr({
		"class": "navbar_link",
	});

	/*
	FUCTION RESPONSIVE NAV 
	*/

	$(".navbar_link-toogle").click(function(){
		$(".navbar_items").slideToggle( 800 );
	})
	$(".navbar_items").click(function() {
		console.log('show this shit');
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
	$(".a3").find("p").eq(0).html("He aquí algunos consejos para mandar al carajo los anuncios de Google de ¡una vez por todas! y el pequeño experimento en MedicinaResources.").attr({
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
	$("<div/>", {
		"appendTo": "footer",
		"class": "foot-div",
		html: "<div/><div/><div/>", 
	});
	$(".foot-div").find("div").eq(0).html("MedicinaResources &copy 2018");
	$(".foot-div").find("div").eq(1).html("Santiago - Guatemala");
	$(".foot-div").find("div").eq(2).html("Sant Petersburgo - Rusia");
});
