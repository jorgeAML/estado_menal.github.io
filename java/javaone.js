//medicinaresources blog
$(document).ready(function () {
	$("<img>", {
		"appendTo": ".nav",
		"src": "imagenes/header.jpg"		
	});
	$("<div/>", {
		"appendTo": ".nav",
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
	$(".navbar").find("div").eq(3).html("<a href='mrnoticias/mrnoticias.html'>MR noticias</a>").attr({
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

	
	//SECCION1 de noticias principales
	$("<div/>", {
		"appendTo": ".noticias1",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "column",
	});
	$("<div/>", {
		"appendTo": ".column",
		"class": "notpri notpri-h",
		html: "<a/>",
	});
	$(".notpri").find("a").eq(0).attr({
		href: "posts/2018-2-21-estadisticas_2017.html",
		title: "Estadísticas del primer año de MedicinaResources",
		"class": "window-link-n1",
	});
	//foto + historia de la noticia
	$("<div/>", {
		"appendTo": ".window-link-n1",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "np1 column--2of3",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "np2 column",
		"insertAfter": ".column--2of3",
	});
	$("<img>", {
		"appendTo": ".np1",
		"src": "imagenes/IMG_5992.png"
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "title-mrn",
		html: "MedicinaResources noticias",
	});
	$("<h1/>", {
		"appendTo": ".np2",
		"class": "title-principal",
		"insertAfter": ".title-mrn",
		html: "Estadísticas del primer año de MedicinaResources",
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "parafo-prin",
		"insertAfter": "title-principal",
		html: "Todo un año de estadísticas, algunas bajas y otras altas pero ni modo, descubre que hicimos para que MedicinaResources sea tan único en la región latinoamericana.",
	});
	$("<div/>", {
		"appendTo": ".np2",
		"class": "circle",
		"insertAfter": "parafo-prin",
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "circle-parrafo",
		html: "Jorge Martínez de MedicinaResources."
	});
	
	/*
	FADE IN
	*/
	/*$(".notpri").mouseenter(function() {
		$(this).fadeIn(750).addClass(".notpri_hover");
	});*/
	/*$(".noticias1").mouseenter(function( event ) {
		$(this).addClass(".notpri_hover");
	});*/


	//noticias 2
	$("<div/>", {
		"appendTo": ".noticias2",
		"class": "row2",
	});
	//contenedor para la noticia 2
	$("<div/>", {
		"appendTo": ".row2",
		"class": "column n2",
	});
	$("<div/>", {
		"appendTo": ".n2",
		"class": "noti2",
		html: "<a/>",
	});
	$(".noti2").find("a").eq(0).attr({
		title: "El porque necesitas concentrarte",
		href: "posts/2018-2-1-el_porque_necesitas_concentrarte.html",
		"class": "window-link-n2",
	});
	$("<img>", {
		"appendTo": ".window-link-n2",
		"src": "imagenes/focus.jpg",
	});
	var newMed = "MedicinaResources noticias";
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "title-mrn scale1-2",
		"insertAfter": "img",
		html: newMed,
	});
	$("<h1/>", {
		"appendTo": ".window-link-n2",
		"class": "title-principal-50 scale1-3",
		"insertAfter": "scale1-2",
		html: "El porque necesitas concentrarte",
	});
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "parafo-prin scale1-4",
		"insertAfter": ".scale1-3",
		html: "Tenemos una tendencia que nos permite a nosotros mismos aprender de diferentes maneras o direcciones. Involucrarnos en muchas actividades y causas. Pero somos más efectivos cuando nos concentramos, especialmente cuando nos concentramos en nuestras habilidades.",
	});
	$("<div/>", {
		"appendTo": ".window-link-n2",
		"class": "circle-devorah",
		"insertAfter": "scale1-4",
	});
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "circle-parrafo-closer",
		html: "Devorah Aller de Personal Growth.",
	});
	//contenedor para la noticia 3
	$("<div/>", {
		"appendTo": ".row",
		"insertAfter": ".n2",
		"class": "column n3",
	});
	$("<div/>", {
		"appendTo": ".n3",
		"class": "noti3",
		html: "<a/>",
	});
	$(".noti3").find("a").eq(0).attr({
		"href": "posts/2018-1-28-ads_en_medicinaresources.html",
		"title": "¿Ads en MedicinaResources? ¿Privatización o vigilancia?",
		"class": "window-link-n3",
	});
	$("<img>", {
		"appendTo": ".window-link-n3",
		"src": "imagenes/ads.jpg",
	});
	$("<p/>", {
		"appendTo": "window-link-n3",
		"class": "title-mrn scale2-1",
		"insertAfter": "img",
		html: newMed,
	});
	$("<h1/>", {
		"appendTo": ".window-link-n3",
		"class": "title-principal-50 scale2-2",
		"insertAfter": ".scale2-1",
		html: "¿Ads en MedicinaResources? ¿Privatización o vigilancia?,"
	});
	$("<p/>", {
		"appendTo": ".window-link-n3",
		"class": "parafo-prin scale2-3",
		"insertAfter": ".scale2-2",
		html: "Hace poco decidimos implementar Ads de google en MedicinaResources, ¿pero será necesario? ¿será que todos los usuarios pueden ver los anuncios en MedicinaResources? He aquí algunos consejos para mandar al carajo los anuncios de Google de ¡una vez por todas! y el pequeño experimento en nuestro sitio.",
	});
	$("<div/>", {
		"appendTo": ".window-link-n3",
		"class": "circle-eira",
		"insertAfter": "scale2-3",
	});
	$("<p/>", {
		"appendTo": ".window-link-n3",
		"class": "circle-parrafo-closer up20",
		html: "Eira Giralt de MedicinaResources.",
	});
	
	var myname = "Jorge Martínez de MedicinaResources";


	//footer
	$("<div/>", {
		"appendTo": "footer",
		"class": "foot-div",
		html: "<div/><div/><div/>", 
	});
	$(".foot-div").find("div").eq(0).html("MedicinaResources &copy 2018");
	$(".foot-div").find("div").eq(1).html("Guatemala - Santiago");
	$(".foot-div").find("div").eq(2).html("San Petersburgo - Rusia");

	//$(".notpri").hide(1000);
	$(".notpri").mouseenter(function(){
		$(this).addClass("notpri-s", function(){
			$("notpri-s").fadeIn("slow");
		});
		return false;
	});
	$(".notpri").mouseleave(function(){
		$(this).removeClass("notpri-s", "slow");
	});


	$(".navbar a").mouseenter(function(){
		$(this).addClass("navbar-h", "slow");
	});
	$(".navbar a").mouseleave(function(){
		$(this).removeClass("navbar-h", "slow");
	});
});
//agregar a la linea 54 notpri-h
