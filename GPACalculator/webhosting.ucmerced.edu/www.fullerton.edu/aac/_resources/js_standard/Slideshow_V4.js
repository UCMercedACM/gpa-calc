
function SlideShowSetup(slider) {
    theslider = document.getElementById(slider + "_container");
    var counter = Slide_Count(slider);

    for (var i = 0; i < counter; i++) {
        if (i == 0) {
            theslider.children[i].className = "slide_show";
        }
        else {
            theslider.children[i].className = "slide_hide";
        }
    }

   //SetMarginBasement(slider);
   //NavBarSetup(slider);

   try {
       setTimeout(function(){ SetMarginBasement(slider); NavBarSetup(slider) }, 200);
  } catch (err) {
       
   }

}

function SetMarginBasement(slider) {
    
    theslider = document.getElementById(slider + "_container");
    var counter = Slide_Count(slider);

    var theheight;
    for (var i = 0; i < counter; i++) {
        if (theslider.children[i].className == "slide_show") {
            theheight = theslider.children[i].offsetHeight;
        }
    }

    var setBottom = parseInt(theheight);
    var setNavButtons = parseInt(theheight) / 2 - 35;
  
    document.getElementById(slider + "_slideshow_shell").style.marginBottom = setBottom + "px";
    document.getElementById(slider + "_btnPrev").style.top = setNavButtons + "px";
    document.getElementById(slider + "_btnNext").style.top = setNavButtons + "px";
    document.getElementById(slider + "_navbar").style.top = theheight + "px";

    var cssStyle = document.getElementById(slider + "_slideshow_shell").className;
    
    if (cssStyle.indexOf('slidelayout_strips') > 0) {
        MoveStrips(slider);
    }

    if (cssStyle.indexOf('slidelayout_motion') > 0) {
        MoveMotion(slider);
    }

}

function Slide_On(slider, active) {
    theslider = document.getElementById(slider + "_container");
    var counter = Slide_Count(slider);
    
    //turn off or deactivate all slides
    for (var i = 1; i <= counter; i++) {
        theslider.children[parseInt(i-1)].className = "slide_hide";
        document.getElementById(slider + '_button_' + i).className = "";
        theslider.children[parseInt(i - 1)].style = "";
    }
   
    //activate the new slide
    theslider.children[parseInt(active -1)].className = "slide_show";
    document.getElementById(slider + '_button_' + active).className = "active";
    //update move time for slider
    document.getElementById(slider + '_movetime').value = new Date();
    //update bottom margin position
    SetMarginBasement(slider);


    var cssStyle = document.getElementById(slider + "_slideshow_shell").className;
    if (cssStyle.indexOf('slidelayout_previews') > 0) {
        MovePreviews(slider, active);
    }
}

function MoveMotion(slider) {
    document.getElementById(slider + "_slideshow_shell").style.marginBottom = "20px";
    var MyDiv;
    MyDiv = document.getElementById(slider + "_container");

    var MyX = (Math.random() * (100 - 1) + 1).toFixed(0);
    var MyY = (Math.random() * (100 - 1) + 1).toFixed(0);
    var MyMove = (Math.random() * (10 - 1) + 1).toFixed(0);
    if (MyMove > 5) {
        MyX = MyX * -1;
    }

    if (MyMove == 2 || MyMove == 4 || MyMove == 6 || MyMove == 8 || MyMove == 10) {
        MyY = MyY * -1;
    }

    for (var i = 0; i < MyDiv.childNodes.length; i++) {

        //alert(MyDiv.childNodes[i].className);

        if (MyDiv.childNodes[i].className === "slide_show") {
            //alert("found it");
            var Slide_Show = MyDiv.childNodes[i];
            var Image;
            var Holder;

            // alert(ImageDiv.childNodes[0].nodeName);
            if (Slide_Show.childNodes[0].nodeName == "A") //Slide has an anchor tag
            {
                var Temp;
                Temp = Slide_Show.childNodes[0];
                Holder = Temp.childNodes[0];
                Image = Holder.childNodes[0];

            }
            else {

                Holder = Slide_Show.childNodes[0];
                Image = Holder.childNodes[0];
            }
            try {
                //alert(Holder.nodeName); 
                var myImage = Holder.childNodes[0];
                //alert(myImage.offsetHeight);
                Holder.style.height = parseInt(myImage.offsetHeight) + "px";
                document.getElementById(slider + "_slideshow_shell").style.height = (parseInt(myImage.offsetHeight) + 20) + "px";

                myImage.style.transform = "translate(" + MyX + "px," + MyY + "px) scale(1.35,1.35)";
                Holder.style.position = "relative";

                //alert(myImage); 

            } catch (err)
            { }
        } else if (MyDiv.childNodes[i].className === "slide_hide") {
            //alert("found it");
            var Slide_Show = MyDiv.childNodes[i];
            var Image;
            var Holder;

            // alert(ImageDiv.childNodes[0].nodeName);
            if (Slide_Show.childNodes[0].nodeName == "A") //Slide has an anchor tag
            {
                var Temp;
                Temp = Slide_Show.childNodes[0];
                Holder = Temp.childNodes[0];
                Image = Holder.childNodes[0];

            }
            else {

                Holder = Slide_Show.childNodes[0];
                Image = Holder.childNodes[0];
            }
            try {
                //alert(Holder.nodeName); 
                var myImage = Holder.childNodes[0];
                //alert(myImage.offsetHeight);
                
                myImage.style.transform = "translate(0px,0px) scale(1.15,1.15)";
                
                //alert(myImage); 

            } catch (err)
            { }
        }
    }
    //alert(MyDegree);

}

function MoveStrips(slider) {

    var MyDiv; 
    var MyH2;
    var MyP;
    var MyDegree = (Math.random() *(3 - 0) + 0).toFixed(2);
    var TopH2=(Math.random() *(20 - 5) + 5).toFixed(0);
    var LeftH2 = (Math.random() * (8 - 3) + 3).toFixed(0);

    var TopP = (Math.random() * (80 - 45) + 45).toFixed(0);
    var LeftP = (Math.random() * (8 - 3) + 3).toFixed(0);

    if (TopH2 > (parseInt(TopP) + 3)) {
        TopP = parseInt(TopP) + 5;
    }

    MyDiv = document.getElementById(slider + "_container");
    
    for(var i=0; i < MyDiv.childNodes.length; i++) {

        //alert(MyDiv.childNodes[i].className);

        if(MyDiv.childNodes[i].className === "slide_show") 
        {
            //alert("found it");
            var Slide_Show = MyDiv.childNodes[i];
            var Captions;

            // alert(ImageDiv.childNodes[0].nodeName);
            if (Slide_Show.childNodes[0].nodeName == "A") //Slide has an anchor tag
            {
                var temp;
                temp = Slide_Show.childNodes[0];
                Captions = temp.childNodes[1];
                
            }
            else {

                Captions = Slide_Show.childNodes[1];
            }
            try
            {
                if(Captions.childNodes[0].nodeName == "H2") {
                     MyH2 = Captions.childNodes[0];
                     MyP = Captions.childNodes[1];
                    //alert(MyP.innerHTML);
                     MyH2.style.transform = "rotate(" + MyDegree + "deg)";
                     MyH2.style.top = TopH2 + "%";
                     MyH2.style.left = LeftH2 + "%";

                    
                     var TestMyP_Height = MyP.offsetHeight
                     var TestSlide_Height = MyDiv.childNodes[i].offsetHeight
                     var TestPercent_Height = ((TestMyP_Height / TestSlide_Height) * 100).toFixed(0);

                    if ((TopP + TestPercent_Height) > 100) {
                         TopP = 75 - parseInt(TestPercent_Height);
                     }
                     MyP.style.top = TopP + "%";
                     MyP.style.left = LeftP + "%";
                     MyP.style.transform = "rotate(-" + MyDegree + "deg)";
                
                } else {
                    MyP = Captions.childNodes[0];
                   
                    var TestMyP_Height = MyP.offsetHeight
                    var TestSlide_Height = MyDiv.childNodes[i].offsetHeight
                    var TestPercent_Height = ((TestMyP_Height / TestSlide_Height) * 100).toFixed(0);

                   if ((TopP + TestPercent_Height) > 100) {
                        TopP = 75 - parseInt(TestPercent_Height);
                    }


                    MyP.style.top = TopP + "%";
                    MyP.style.left = LeftP + "%";
                    MyP.style.transform = "rotate(-" + MyDegree + "deg)";
                }    
              }catch(err)
            { }     
        }
    }
    //alert(MyDegree);
        
}
function MovePreviews(slider, active) {
    var counter = Slide_Count(slider);
    var imagewidth = 0;

    for (var i = 1; i < counter; i++) {

        var myID = slider + "_button_" + i;
        var myImg = document.getElementById(myID);
        if (i < active) {
            imagewidth += myImg.width;
        }
    }
    mySlider = document.getElementById(slider + "_slider_inside");
    mySlider.style.marginLeft = parseInt(imagewidth * -1) + "px";
    //alert(imagewidth);
}

function MovePreviews_hover(slider, moveby) {
    document.getElementById(slider + "_hoverme").value = 1;
    PlayPause(slider);
    MovePreviews_RapidMove(slider, moveby);
}

function MovePreviews_hover_out(slider) {
    document.getElementById(slider + "_hoverme").value = 0;
    PlayPause(slider);
}

function MovePreviews_RapidMove(slider, moveby) {
    if (document.getElementById(slider + "_hoverme").value == 1) {
        var mySlider = document.getElementById(slider + "_slider_inside");
        var leftside = parseInt(mySlider.style.marginLeft);
       
        var counter = Slide_Count(slider);
        var fullwidth = 0;
        for (var i = 1; i < counter; i++) {

            var myID = slider + "_button_" + i;
            var myImg = document.getElementById(myID);
            fullwidth += myImg.width;
        }
        
        if (parseInt(leftside + moveby) > 0) {
            leftside = 0;
            moveby = 0;
        }

        if (parseInt(leftside + moveby) < parseInt(fullwidth * -1)) {
            leftside = parseInt(fullwidth * -1);
            moveby = 0;
        }

        mySlider.style.marginLeft = parseInt(leftside + moveby) + "px";
        //alert(imagewidth);
        setTimeout(function () { MovePreviews_RapidMove(slider, moveby) }, 2000);
       
    }
}

function Slide_Count(slider) {
    var count = 0;
    theslider = document.getElementById(slider + "_container");
    count = theslider.childElementCount;
    return count;
}

function Slide_ActiveSlide(slider) {
    var active = 0;
    var counter = Slide_Count(slider);
    for (var i = 0; i < counter; i++) {
        if (theslider.children[i].className == "slide_show") {
            active = parseInt(i+1);
        }
    }
    return active;
}

function MovePrev(slider) {
    var active = Slide_ActiveSlide(slider);
    var counter = Slide_Count(slider);
    switch (active) {
        case 1:
            active = counter;
            break;
        default:
            active = active - 1;
    }

    Slide_On(slider, active);
}

function MoveNext(slider) {
    var active = Slide_ActiveSlide(slider);
    var counter = Slide_Count(slider);
  
    switch (active) {
        case counter:
            active = 1;
            break;
        default:
            active = active + 1;
    }
   Slide_On(slider, active);
}


function PlayPause(slider) {

    if (document.getElementById(slider + "_PlayPause").innerText == ">" || document.getElementById(slider + "_PlayPause").textContent == ">")
    {
        document.getElementById(slider + "_PlayPause").innerText = "||";
         document.getElementById(slider + "_PlayPause").textContent = "||";
        document.getElementById(slider + "_PlayPause").title = "Slideshow in manual move mode";

    } else {
        
        document.getElementById(slider + "_PlayPause").innerText = ">";
        document.getElementById(slider + "_PlayPause").textContent = ">";
        document.getElementById(slider + "_PlayPause").title = "Slideshow in auto play mode";
        setTimeout(function () { AutoMove(slider) }, parseInt(document.getElementById(slider + '_timeout').value));

    }
}

function AutoMove(slider) {

    //alert("i'm moving - " + slider);

    var lastmove = document.getElementById(slider + '_movetime').value;

    if (lastmove == "") 
    {
        document.getElementById(slider + '_movetime').value = new Date();
        lastmove = document.getElementById(slider + '_movetime').value;
    }
    var now = new Date();
    var lasttime = new Date(lastmove);
    var nowtime = now.getTime();
    var timediff = nowtime - lasttime;

    if (document.getElementById(slider + "_PlayPause").innerText != "||") {
        //first check to see if nothing has moved since last auto move
        if (timediff > document.getElementById(slider + '_timeout').value)
        { MoveNext(slider); }
        //setup next automove
        setTimeout(function () { AutoMove(slider) }, parseInt(document.getElementById(slider + '_timeout').value));
    } else {
       // alert("i'm not moving - " + slider);
       // alert("-" + document.getElementById(slider + "_PlayPause").innerText + "-");
    }
}

function NavBarSetup(slider) {
    
    var active = Slide_ActiveSlide(slider);
    var counter = Slide_Count(slider);
    var strUL = "<button title=\"Slideshow in auto play mode\" id=\"" + slider + "_PlayPause\" onclick=\"PlayPause('" + slider + "')\">></button> ";
    var cssStyle = document.getElementById(slider + "_slideshow_shell").className;
    var blnNavSetupFound = false;

    if (blnNavSetupFound == false && cssStyle.indexOf('slidelayout_previews') > 0) {
        blnNavSetupFound = true;
        //alert("active: " + active + " | counter: " + counter);
        strUL += "<div class=\"slideshow_image_slider_outside\">";
        strUL += "<input type=\"hidden\" id=\"" + slider + "_hoverme\" value=\"0\" />";
        strUL += "<div onmouseover=\"MovePreviews_hover('" + slider + "', 250)\" onmouseout=\"MovePreviews_hover_out('" + slider + "')\" class=\"slideshow_image_slider_inside_moveleft\"> < </div>";
        strUL += "<div class=\"slideshow_image_slider_outside2\">";
        strUL += "<div id=\"" + slider + "_slider_inside\" style=\"margin-left:0px;\" class=\"slideshow_image_slider_inside\">";
       
        for (var i = 1; i <= counter; i++) {
            //get the current image
            try{
                var TheImage = document.getElementById(slider + "_" + i);
                 //alert(TheImage.src);
                strUL += "<img ";
                if (i == active)
                { strUL += "class=\"active\""; }
                
                strUL += " id=\"" + slider + "_button_" + i + "\""; 
                strUL += " alt=\"" + slider + " " + i + "\"";
                strUL += " onclick=\"Slide_On('" + slider + "', " + i + ")\"";
                strUL += " src=\"" + TheImage.src + "\"";
                strUL += " //";
                strUL += ">";

            } catch (err) {
            //alert("I ran into a problem");
            }
        }
        strUL += "</div></div>";
        strUL += "<div onmouseover=\"MovePreviews_hover('" + slider + "', -250)\" onmouseout=\"MovePreviews_hover_out('" + slider + "')\" class=\"slideshow_image_slider_inside_moveright\"> > </div>";
        strUL += "</div>";
    }

    
    if(blnNavSetupFound == false) 
    {
        for (var i = 1; i <= counter; i++) {

            strUL += "<button ";
            if(i == active) 
            { strUL += " class=\"active\"";}

            strUL += " id=\"" + slider + "_button_" + i + "\"";
            strUL += " onclick=\"Slide_On('" + slider + "', " + i + ")\">" + i + "</button> "; 
            
            
        }
    }
    
    document.getElementById(slider + '_navbar').innerHTML = strUL;
    //alert(AutoMoveTime);
    try {
        setTimeout(function () { AutoMove(slider) }, document.getElementById(slider + '_timeout').value);
    } catch (err) {
    }

   // alert("auto move should fire - " + slider);

}



function SlideShowTransition(classname) {

    buttons = document.getElementById('transitions_choices');
    document.getElementById("txtSlideTransition").value = classname;

    //alert(buttons.childElementCount);
    

    for (var i = 0; i < buttons.childElementCount; i++) {

        theButton = buttons.children[i];

       // alert(theButton.innerHTML);

        if (theButton.innerHTML.toLowerCase() == classname.toLowerCase()) {
            theButton.className = "active";
        }
        else {
            theButton.className = "";
        }
    }

    //alert("hi mom");
    SetupSlideShowPreview();
}

function SlideShowTransition_Layout(classname) {
    buttons = document.getElementById('layout_choices');
    document.getElementById("txtSlideLayout").value = classname;

    //alert(buttons.childElementCount);

    for (var i = 0; i < buttons.childElementCount; i++) {

        theButton = buttons.children[i];

        //alert(theButton.innerHTML);

        if (theButton.innerHTML.toLowerCase() == classname.toLowerCase()) {
            theButton.className = "active";
        }
        else {
            theButton.className = "";
        }
    }

    SetupSlideShowPreview();
}

function SlideShowTransition_Color(classname) {
    buttons = document.getElementById('color_choices');
    document.getElementById("txtSlideColor").value = classname;

    //alert(buttons.childElementCount);

    for (var i = 0; i < buttons.childElementCount; i++) {

        theButton = buttons.children[i];

        //alert(theButton.innerHTML);

        if (theButton.innerHTML.toLowerCase() == classname.toLowerCase()) {
            theButton.className = "active";
        }
        else {
            theButton.className = "";
        }
    }

    SetupSlideShowPreview();
}

function SetupSlideShowPreview() 
{
    var Trans = document.getElementById("txtSlideTransition").value;
    var Layout = document.getElementById("txtSlideLayout").value;
    var Color = document.getElementById("txtSlideColor").value;

    //alert(Trans + " " + Layout);
    document.getElementById("txtSlideshow_CSS").value = Trans + " " + Color + " " + Layout;

    theslider = document.getElementById("sliderA_slideshow_shell");
    theslider.className = "Slideshow_Shell " + document.getElementById("txtSlideshow_CSS").value;

    SlideShowSetup('sliderA');

}

				
