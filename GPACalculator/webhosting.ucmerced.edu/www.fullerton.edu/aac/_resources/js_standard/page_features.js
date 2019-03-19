//alert("STARTING LOAD");


// Scroll handler to toggle classes.
window.addEventListener("scroll", function () { PageWhereAmI() });

window.addEventListener("keydown", function () { MoveTheGallery() });
window.addEventListener("keypress", function () { MoveTheGallery() });
window.addEventListener("click", function () { CheckTheClicker() });

function PageWhereAmI() {

    document.getElementById("test_info").innerHTML = " ";
    document.getElementById("test_info").innerHTML = window.pageYOffset;

    if (window.pageYOffset > 198) {
        //user scrolled down page so the top is no longer showing
        document.getElementById("back_to_top").className = "BTT_on";
        document.getElementById("header_LowerScroll").className = "BTT_on";

    } else {
        //user is seeing the top of the page
        document.getElementById("back_to_top").className = "BTT_off";
        document.getElementById("header_LowerScroll").className = "BTT_off";
    }
}

function MoveTheGallery(e) {
    if (null !== document.getElementById('LightBox') && document.getElementById('LightBox').className == "lightbox_on") {
        //move image gallery based on specific key press
        e = e || window.event;
        //alert(e.keyCode);

        if (e.keyCode == '38') {
            // up arrow
            //alert("Up");
        }
        else if (e.keyCode == '40') {
            // down arrow
            //alert("Down");
        }
        else if (e.keyCode == '37') {
            // left arrow
            lightbox_prev();
        }
        else if (e.keyCode == '39') {
            // right arrow
            lightbox_next();
        } 
        else if (e.keyCode == '36') {
            //home key
            lightbox_first();
        } 
        else if (e.keyCode == '35') {
            //end key
            lightbox_last();
        }
        else if (e.keyCode == '27') {
            //esc key
            lightbox_exit();
        }
    }
}

function CheckTheClicker(e)
{
    //check to see if the gallery is open
    e = e || window.event;
    //alert(e.target.id);
    if(e.target.id == "" || e.target.id == null)
    {
        try{
        if(document.getElementById('LightBox').className == "lightbox_on")
        {
            lightbox_exit()
        }
        }catch(err)
        {}
    }

}

//PageWhereAmI();
//alert("END OF LOAD");

function ShowHideNav(navid)
{
    var li = navid.replace("btn", "");

    btnnav = document.getElementById(navid);

    if(btnnav.innerHTML.trim() == "+")
    {
        btnnav.innerHTML = "-";
        document.getElementById(li).className = "active";
    }else
    {
        btnnav.innerHTML = "+";
        document.getElementById(li).className = "";
    }
}

//Left Nav Slider
function ExpandLeftMenu()
{
    if(document.getElementById('MobileVertNavSlider').innerHTML == "&gt;")
    {
        document.getElementById('MobileVertNavSlider').className= "showright";
        document.getElementById('MobileVertNavSlider').innerHTML = "&lt;";
        document.getElementById('VerticalNavMenu').className ="showright";
    }
    else
    {document.getElementById('MobileVertNavSlider').className= "hideleft";
        document.getElementById('MobileVertNavSlider').innerHTML = "&gt;";
        document.getElementById('VerticalNavMenu').className ="hideleft";
    }
}

//move breadcrumbs
setTimeout('BreadCrumbClass()', 400);
function BreadCrumbClass()
{
    try{
        document.getElementById("Breadcrumb").className = "CrumbMover";
    }
    catch(err){
    }
}


//determine if IE then disable sitecues, it doesn't seem to launch in IE correctly
setTimeout('IE_version()', 50);

function IE_version() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var trident = ua.indexOf("Trident/");

	//alert(ua);
	
    if (msie > 0 || trident > 0)  // If Internet Explorer, return version number
    {
        document.getElementById("sitecues-badge").className = "hideme";
        //alert('IE');
        
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
    }

    return false;
}

//MOBILE USE FUNCTIONS
function mobilemenu()
{
    if(document.getElementById('mobile_header_menu').className == 'mobileclosed')
    {
        document.getElementById('mobile_header_menu').className = 'mobileopen';
        document.getElementById('btnMobileMenu').className = 'mobileon';
    }else
    {
        document.getElementById('mobile_header_menu').className = 'mobileclosed';
        document.getElementById('btnMobileMenu').className = 'mobileoff';
    }
}
	
function mobileexpand(div)
{
		
    if(document.getElementById(div).className == 'mobileexpand')
    {
        document.getElementById(div).className = 'mobilecollapse';
		document.getElementById(div + "_button").innerHTML = '+';
    }else
    {
        document.getElementById(div).className = 'mobileexpand';
	    document.getElementById(div + "_button").innerHTML = '-';
    }
}



