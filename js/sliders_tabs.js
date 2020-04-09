$(document).ready(function(){

  //прокрутка при нажатии на иконку "мышка"
  $('.min-mouse').click(function function_name(argument) {
    // body...
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $('html').animate({scrollTop: destination}, 950);

    return false;
  });

  //
   // Let articles = Array.from($(""))
});









// function openDesc {
//   var i, m-content, tablinks;
//   m-content = document.getElementsByClassName("m-content");
//   for (i = 0; i < m-content.length; i++) {
//     m-content[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



// $(document).ready(function(){
	
// 	$('ul.tabs li').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('ul.tabs li').removeClass('current');
// 		$('.tab-content').removeClass('current');

// 		$(this).addClass('current');
// 		$("#"+tab_id).addClass('current');
// 	})

// })