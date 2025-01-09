(function( $ ) {
  $(function() {     
     
      
      //for pdf file open in new-tab
      $("a[href$='.pdf']").attr("target","_blank");

     //show more and less code
     $("label[for|='post']").click(function(){        
     	$(this).parent().find(".toggle1,.togglein").toggleClass( "toggle2" );
     	if ($(this).parent().find(".toggle2").length>0) {
     		$(this).html("Show less &#8592;")
     	}
     	else
     	{
     	  $(this).html("Show more &#8594;")	
     	}
     })

    //tabs
    $(document).on("mouseenter",".dropdown",function(){
       $(this).addClass("open")
     });
    $(document).on("mouseleave",".dropdown",function(){
       $(this).removeClass("open")
    });
  
 
    
    //navigation in single page
      var qs = getQueryStrings();     
      var myParam = qs["nav"];
        if(typeof(myParam)!=='undefined'){
          var top=$('#'+myParam).offset().top;
          
          if(myParam=='integration' || myParam=='salescloud')
           {

            $("#salesforce").click();
           } 

           
           switch(myParam){
            case "integration":
            top=1700;
            break;
            case "salescloud":
            top=2400;
            $("#tab-cloud-1").css("display","none"); 

            //$("#salescloud").click();
            break;
            case "odc":
            $("#partner-with-us").click();            
            top=1250;            
            break;

           }
          
          $('#'+myParam).click();
          $('html, body').animate({scrollTop:top-100},3000, 'easeOutExpo');
        }

  });
})(jQuery);

//navigation in single page
function getQueryStrings() { 
var assoc  = {};
var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
var queryString = location.search.substring(1); 
var keyValues = queryString.split('&');

for(var i in keyValues) { 
  var key = keyValues[i].split('=');
  if (key.length > 1) {
    assoc[decode(key[0])] = decode(key[1]);
  }
}

return assoc; 
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function country_contact(id){
	var phone="";
	var displayemail="";
	var attachemail="";
	switch(id){
		case 1:
		//INDIA
		phone="+914040300300";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		
		break;
		case 2:
		//Ireland
		phone="+353876941200 ";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		
		break;
		case 3:
		//Germany
		phone="+49(0)6966 554 457";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		break;
		case 4:
		//Spain
		phone="+34 7493181666";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		
		break;
		case 5:
		//UK
		phone="+44 7493181666";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		
		break;
		case 6:
		//US
		phone="+1-408-802-2274";
		displayemail="info@moldtekit.com";
		attachemail="mailto:info@moldtekit.com";
		
		break;

          
		
	}
createCookie("phone",phone,3);
createCookie("displayemail",displayemail,3);
createCookie("attachemail",attachemail,3);

if(typeof($('#countryPhone')[0])!=typeof(undefined)){
$('#countryPhone')[0].innerHTML=readCookie("phone");
$('#countrymail')[0].innerHTML=readCookie("displayemail");
$('#countrymail')[0].href=readCookie("attachemail");
}

}

function CheckCookies(){
	var retVal=false;
	if(readCookie("phone")!="" && typeof(readCookie("phone"))!=typeof(undefined) && readCookie("displayemail")!="" && typeof(readCookie("displayemail"))!=typeof(undefined) && readCookie("attachemail")!="" && typeof(readCookie("attachemail"))!=typeof(undefined)){
		retVal=true;
	}
	return retVal;
}

$( document ).ready(function() {
    if(CheckCookies() && typeof($('#countryPhone')[0])!=typeof(undefined)){
$('#countryPhone')[0].innerHTML=readCookie("phone");
$('#countrymail')[0].innerHTML=readCookie("displayemail");
$('#countrymail')[0].href=readCookie("attachemail");

}
});



