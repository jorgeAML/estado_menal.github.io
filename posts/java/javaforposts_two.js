$(document).ready(function () {
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
	$(".navbar a").mouseenter(function(){
		$(this).addClass("navbar-h", "slow");
	});
	$(".navbar a").mouseleave(function(){
		$(this).removeClass("navbar-h", "slow");
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
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "circle-parrafo",
		html: "21 de febrero del 2018 / MedicinaResources noticias.",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal-x4",
		html: "Estadísticas del primer año de MedicinaResources",
	});
	$("<img>", {
		"appendTo": ".hojapost",
		"class": "imgpost1",
		"src": "imagenes/estadisticasuno.png",	
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "Descubre todo lo que sucedio en MedicinaResources, recordando el 2017",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "MedicinaResources cumplio exactamente un año el 19 de febrero del 2018, pero las verdaderas estadísticas llegaron meses después, no fue al siguiente sino hasta en junio del 2017, para nosotros haber creado un proyecto de tal magnitud y que le fuera de gran utilidad no solamente a un grupo en específico, sino a varios paises de Latinoamerica; es una meta más cumplida.",
	});

	//SVG files

	$("<div/>", {
		"appendTo": ".hojapost",
		"class": "circle fc1",
	});
	$(".fc1").circleProgress({
		value: 0.75386,
		size: 150,
		thickness: 18,
		reverse: true,
		animation: { duration: 5900, easing: "circleProgressEasing" },
		/*data-animation-start-value: "1.0",
		data-reverse: "true",*/
		fill: {
			gradient: ["#F4F2DA", "#31c4ce", "#853cd5"]
		}
	});
	$("<p/>", {
		"appendTo": ".circle",
		"class": "p-circle",
		html: "75,836 clicks",
	});
	$("<div/>", {
		"appendTo": ".hojapost",
		"class": "circle fc2",
	});
	$(".fc2").circleProgress({
		value: 0.915724,
		size: 150,
		thickness: 18,
		animation: { duration: 6200, easing: "circleProgressEasing" },
		fill: {
			gradient: ["#F4F2DA", "#e86af0", "#00d27f"]
		}
	});
	$("<p/>", {
		"appendTo": ".fc2",
		"class": "p-circle",
		html: "+ 1M de impresiones en la web",
	});
	$("<div/>", {
		"appendTo": ".hojapost",
		"class": "circle fc3",
	});
	$(".fc3").circleProgress({
		value: 0.804,
		size: 150,
		thickness: 18,
		reverse: true,
		animation: { duration: 7200, easing: "circleProgressEasing" },
		fill: {
			gradient: ["#F4F2DA", "	#ffc300", "	#ff8000"]
		}
	});
	$("<p/>", {
		"appendTo": ".fc3",
		"class": "p-circle",
		html: "CTR: 8.04%",
	});
	$("<div/>", {
		"appendTo": ".hojapost",
		"class": "circle fc4",
	});
	$(".fc4").circleProgress({
		value: 0.108,
		size: 150,
		thickness: 18,
		animation: { duration: 8200, easing: "circleProgressEasing" },
		fill: {
			gradient: ["#F4F2DA", "#028900", "#adff00"]
		}
	});
	$("<p/>", {
		"appendTo": ".fc4",
		"class": "p-circle",
		html: "#10.8 - posición en la web",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Bien, las siguientes gráficas demuestran cuantos clicks recibe el sitio, el total de impresiones [cuantas veces es generado nuestro sitio pero no es visitado o solamente lo visitan en la página de inicio], el porcentaje de clicks (CTR) es el conteo de clicks divido por el número de impresiones y la posición del sitio al hacer cualquier busqueda en cualquier navegador.",
	});
	$("<hr>", {
		"appendTo": ".hojapost",
		"class": "hr-divide",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "Países",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "A pesar que MedicinaResources fue echa para Guatemala y sus habitantes hemos visto que no se posiciona como el páis #1 en la busqueda de archivos educativos, sino es más, paises vecinos son los que mejor saben hacer busquedas en Internet, he aqui cuando nos preguntamos, ¿será qué estamos tan interesados en aprender? las estadísticas muestran que paises como México, Argentina, España, etc. Tienen mayor acceso a la educación por internet o simplemente tienen sus propios sitios para la busqueda cientifica (no incluyendo Google o metabuscadores).",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "#1",
	});

	//Flags
	$("<div>", {
		"class": "routerline containerflags",
		"appendTo": ".hojapost",
		html: "<div><img><p/></div><div><img><p/></div><div><img><p/></div><div><img><p/></div>"
	})
	$(".containerflags").find("div").eq(0).attr({
		"class": "padfix",
	});
	$(".containerflags").find("img").eq(0).attr({
		"src": "https://lipis.github.io/flag-icon-css/flags/4x3/mx.svg",
		"class": "flag",
	});
	$(".containerflags").find("p").eq(0).html("México").attr({
		"class": "p-circle",
	});

	$(".containerflags").find("div").eq(1).attr({
		"class": "padfix",
	});
	$(".containerflags").find("img").eq(1).attr({
		"src": "imagenes/click.png",
		//class.
	});
	$(".containerflags").find("p").eq(1).html("13,027 clicks").attr({
		"class": "p-circle",
	});
		$(".containerflags").find("div").eq(2).attr({
		"class": "padfix",
	});
	$(".containerflags").find("img").eq(2).attr({
		"src": "imagenes/blank-page.png",
		//class.
	});
	$(".containerflags").find("p").eq(2).html("+ 119,421 de impresiones en la web").attr({
		"class": "p-circle",
	});	$(".containerflags").find("div").eq(3).attr({
		"class": "padfix",
	});
	$(".containerflags").find("img").eq(3).attr({
		"src": "imagenes/optimization.png",
		//class.
	});
	$(".containerflags").find("p").eq(3).html("#7.5 - posición en la web").attr({
		"class": "p-circle",
	});


	//2


	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "#2",
	});

	//Flags
	$("<div>", {
		"class": "routerline containerflags2",
		"appendTo": ".hojapost",
		html: "<div><img><p/></div><div><img><p/></div><div><img><p/></div><div><img><p/></div>"
	})
	$(".containerflags2").find("div").eq(0).attr({
		"class": "padfix",
	});
	$(".containerflags2").find("img").eq(0).attr({
		"src": "https://lipis.github.io/flag-icon-css/flags/4x3/ec.svg",
		"class": "flag",
	});
	$(".containerflags2").find("p").eq(0).html("Ecuador").attr({
		"class": "p-circle",
	});

	$(".containerflags2").find("div").eq(1).attr({
		"class": "padfix",
	});
	$(".containerflags2").find("img").eq(1).attr({
		"src": "imagenes/click.png",
		//class.
	});
	$(".containerflags2").find("p").eq(1).html("2,221 clicks").attr({
		"class": "p-circle",
	});
	$(".containerflags2").find("div").eq(2).attr({
		"class": "padfix",
	});
	$(".containerflags2").find("img").eq(2).attr({
		"src": "imagenes/blank-page.png",
		//class.
	});
	$(".containerflags2").find("p").eq(2).html("+ 24,411 de impresiones en la web").attr({
		"class": "p-circle",
	});	
	$(".containerflags2").find("div").eq(3).attr({
		"class": "padfix",
	});
	$(".containerflags2").find("img").eq(3).attr({
		"src": "imagenes/optimization.png",
		//class.
	});
	$(".containerflags2").find("p").eq(3).html("#7.9 - posición en la web").attr({
		"class": "p-circle",
	});
	
	
	//3 


		$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "#3",
	});

	//Flags
	$("<div>", {
		"class": "routerline containerflags3",
		"appendTo": ".hojapost",
		html: "<div><img><p/></div><div><img><p/></div><div><img><p/></div><div><img><p/></div>"
	})
	$(".containerflags3").find("div").eq(0).attr({
		"class": "padfix",
	});
	$(".containerflags3").find("img").eq(0).attr({
		"src": "https://lipis.github.io/flag-icon-css/flags/4x3/co.svg",
		"class": "flag",
	});
	$(".containerflags3").find("p").eq(0).html("Colombia").attr({
		"class": "p-circle",
	});

	$(".containerflags3").find("div").eq(1).attr({
		"class": "padfix",
	});
	$(".containerflags3").find("img").eq(1).attr({
		"src": "imagenes/click.png",
		//class.
	});
	$(".containerflags3").find("p").eq(1).html("1,754 clicks").attr({
		"class": "p-circle",
	});
		$(".containerflags3").find("div").eq(2).attr({
		"class": "padfix",
	});
	$(".containerflags3").find("img").eq(2).attr({
		"src": "imagenes/blank-page.png",
		//class.
	});
	$(".containerflags3").find("p").eq(2).html("+ 21,407 de impresiones en la web").attr({
		"class": "p-circle",
	});	
	$(".containerflags3").find("div").eq(3).attr({
		"class": "padfix",
	});
	$(".containerflags3").find("img").eq(3).attr({
		"src": "imagenes/optimization.png",
		//class.
	});
	$(".containerflags3").find("p").eq(3).html("#7.9 - posición en la web").attr({
		"class": "p-circle",
	});
	

	//4

	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "#4",
	});

	//Flags
	$("<div>", {
		"class": "routerline containerflags4",
		"appendTo": ".hojapost",
		html: "<div><img><p/></div><div><img><p/></div><div><img><p/></div><div><img><p/></div>"
	})
	$(".containerflags4").find("div").eq(0).attr({
		"class": "padfix",
	});
	$(".containerflags4").find("img").eq(0).attr({
		"src": "https://lipis.github.io/flag-icon-css/flags/4x3/pe.svg",
		"class": "flag",
	});
	$(".containerflags4").find("p").eq(0).html("Peru").attr({
		"class": "p-circle",
	});

	$(".containerflags4").find("div").eq(1).attr({
		"class": "padfix",
	});
	$(".containerflags4").find("img").eq(1).attr({
		"src": "imagenes/click.png",
		//class.
	});
	$(".containerflags4").find("p").eq(1).html("1,420 clicks").attr({
		"class": "p-circle",
	});
		$(".containerflags4").find("div").eq(2).attr({
		"class": "padfix",
	});
	$(".containerflags4").find("img").eq(2).attr({
		"src": "imagenes/blank-page.png",
		//class.
	});
	$(".containerflags4").find("p").eq(2).html("+ 16,850 de impresiones en la web").attr({
		"class": "p-circle",
	});	
	$(".containerflags4").find("div").eq(3).attr({
		"class": "padfix",
	});
	$(".containerflags4").find("img").eq(3).attr({
		"src": "imagenes/optimization.png",
		//class.
	});
	$(".containerflags4").find("p").eq(3).html("#8.5 - posición en la web").attr({
		"class": "p-circle",
	});

	//5 

	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "#5",
	});

	//Flags
	$("<div>", {
		"class": "routerline containerflags5",
		"appendTo": ".hojapost",
		html: "<div><img><p/></div><div><img><p/></div><div><img><p/></div><div><img><p/></div>"
	})
	$(".containerflags5").find("div").eq(0).attr({
		"class": "padfix",
	});
	$(".containerflags5").find("img").eq(0).attr({
		"src": "https://lipis.github.io/flag-icon-css/flags/4x3/es.svg",
		"class": "flag",
	});
	$(".containerflags5").find("p").eq(0).html("España").attr({
		"class": "p-circle",
	});

	$(".containerflags5").find("div").eq(1).attr({
		"class": "padfix",
	});
	$(".containerflags5").find("img").eq(1).attr({
		"src": "imagenes/click.png",
		//class.
	});
	$(".containerflags5").find("p").eq(1).html("1,333 clicks").attr({
		"class": "p-circle",
	});
		$(".containerflags5").find("div").eq(2).attr({
		"class": "padfix",
	});
	$(".containerflags5").find("img").eq(2).attr({
		"src": "imagenes/blank-page.png",
		//class.
	});
	$(".containerflags5").find("p").eq(2).html("+ 30,624 de impresiones en la web").attr({
		"class": "p-circle",
	});	
	$(".containerflags5").find("div").eq(3).attr({
		"class": "padfix",
	});
	$(".containerflags5").find("img").eq(3).attr({
		"src": "imagenes/optimization.png",
		//class.
	});
	$(".containerflags5").find("p").eq(3).html("#12.4 - posición en la web").attr({
		"class": "p-circle",
	});

	$("<hr>", {
		"appendTo": ".hojapost",
		"class": "hr-divide",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "Páginas más visitadas",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Para el equipo de MedicinaResources, nos ha impresionado las páginas que los usuarios más visitan, ya que MedicinaResources fue hecha con un fin esperando resultados especificos pero esto no fue así. He aquí las primeras diez páginas más visitadas de MedicinaResources",
	});
	$("<ol/>", {
		"appendTo": ".hojapost",
		"class": "li-est",
		html: "<li/><li/><li/><li/><li/><li/><li/><li/><li/><li/>",
	});
	$(".li-est").find("li").eq(0).html("Semiología/Historia clínica.");
	$(".li-est").find("li").eq(1).html("Bioquímica/Libros/Horton.pdf");
	$(".li-est").find("li").eq(2).html("Bioquímica/Laboratorios/lab1.");
	$(".li-est").find("li").eq(3).html("Bioquímica/presentaciones/Generalidades de lípidos.");
	$(".li-est").find("li").eq(4).html("Semiología/Introductoria.");
	$(".li-est").find("li").eq(5).html("Bioquímica/presentaciones/B-oxidación.");
	$(".li-est").find("li").eq(6).html("Bioquímica/presentaciones/ciclo de Krebs.");
	$(".li-est").find("li").eq(7).html("Semiología/Documentos/Lesiones elementales.");
	$(".li-est").find("li").eq(8).html("Bioquímica/Laboratorios/Hidrolisis de almidon.");
	$(".li-est").find("li").eq(9).html("Bioquímica/casos clínicos.");

	$("<div/>", {
		"appendTo": ".hojapost",
		"insertAfter": ".afterCircle",
		"class": "circle-jorge",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "title-mrn",
		html: "Jorge Martínez de MedicinaResources.",
	});
		//footer
	$("<div/>", {
		"appendTo": "footer",
		"class": "foot-div",
		html: "<div/><div/><div/>", 
	});
	$(".foot-div").find("div").eq(0).html("MedicinaResources &copy 2018");
	$(".foot-div").find("div").eq(1).html("Guatemala - Santiago");
	$(".foot-div").find("div").eq(2).html("San Petersburgo - Rusia");
	
});
