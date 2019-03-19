//setup array of current div blocks that are using the class accordion
var myAccordionArray = ["test"];
var myAccordGroupArray = ["test"];

function collectAccordionSections() {

    myAccordionArray.pop();
    myAccordGroupArray.pop();

    var TheA = "A".charCodeAt(0);
    var TheZ = "Z".charCodeAt(0);

    for (i = TheA; i <= TheZ; i++) {
        //alert(String.fromCharCode(i));
        try {
            var divIndex = 'div' + String.fromCharCode(i)
            var checkclass = document.getElementById(divIndex).className.toLowerCase();

            if (checkclass.indexOf("accordion-form") >= 0) {
                //alert("Have Found One");
                document.getElementById(divIndex).className += " accordion-open";
                var myDiv = document.getElementById(divIndex);
                //alert(myDiv.getElementsByTagName("h3")[0].innerHTML);
                myDiv.getElementsByTagName("h3")[0].setAttribute("onclick", "AccordionMeForm('" + divIndex + "')");
                //document.getElementById('div' + String.fromCharCode(i)).onclick = AccordionMeSolo;
            } else {

                if (checkclass.indexOf("accordion-solo") >= 0 || checkclass.indexOf("accordion-scroll-solo") >= 0) {
                    document.getElementById('div' + String.fromCharCode(i)).className += " accordion-closed";
                    document.getElementById('div' + String.fromCharCode(i)).setAttribute("onclick", "AccordionMeSolo()");
                    document.getElementById('div' + String.fromCharCode(i)).onclick = AccordionMeSolo;

                }
                else if (checkclass.indexOf("accordion") >= 0) {
                    myAccordionArray.push("div" + String.fromCharCode(i));
                }
            }
        }
        catch (err) {
        }
    }

    for (i = 0; i < myAccordionArray.length; i++) {
        if (i == 0) {
            document.getElementById(myAccordionArray[i]).className += " accordion-open";
        } else {
            document.getElementById(myAccordionArray[i]).className += " accordion-closed";
        }

        document.getElementById(myAccordionArray[i]).setAttribute("onclick", "AccordionMe()");
        document.getElementById(myAccordionArray[i]).onclick = AccordionMe;
    }

    //check for content containers as well as individual divs
    for (i = 1; i < 27; i++) {

       try{
            var checkclass = document.getElementById('divContentContainer' + i).className.toLowerCase();
            if (checkclass.indexOf("accord-group") >= 0) {
            document.getElementById('divContentContainer' + i).className += " accord-group-closed";
            document.getElementById('divContentContainer' + i).setAttribute("onclick", "AccordionMeGroup()");
            document.getElementById('divContentContainer' + i).onclick = AccordionMeGroup;

            }
            else if (checkclass.indexOf("accord-group") >= 0) {
                myAccordGroupArray.push("divContentContainer" + i);
            }
        }
        catch(err)
        {}
    }



    for (i = 0; i < myAccordGroupArray.length; i++) {
        if (i == 0) {
            document.getElementById(myAccordGroupArray[i]).className += " accord-group-open";
        } else {
            document.getElementById(myAccordGroupArray[i]).className += " accord-group-closed";
        }

        document.getElementById(myAccordGroupArray[i]).setAttribute("onclick", "AccordionMeGroup()");
        document.getElementById(myAccordGroupArray[i]).onclick = AccordionMe;
    }

   
}

function AccordionMe() {
    var myObject = this;
    //alert(myObject.id);
    if (document.getElementById(myObject.id).className.indexOf("accordion-open") > -1) {
        // alert("status is open");
        CloseDown(myObject.id);
    } else {
        CloseThemAll();
        OpenUp(myObject.id);
    }
}

function AccordionMeGroup() {
    var myObject = this;
    //alert(myObject.id);
    if (document.getElementById(myObject.id).className.indexOf("accord-group-open") > -1) {
        // alert("status is open");
        CloseDownGroup(myObject.id);
    } else {
        CloseThemAllGroup();
        OpenUpGroup(myObject.id);
    }
}

function AccordionMeSolo() {
    var myObject = this;

    //alert(myObject.id);
    if (document.getElementById(myObject.id).className.indexOf("accordion-open") > -1) {
       // alert("status is open");
       CloseDown(myObject.id);
   } else {

       //alert("status is closed");
       OpenUp(myObject.id);  
    }
}

function AccordionMeForm(div) {
    
    if (document.getElementById(div).className.indexOf("accordion-open") > -1) {
        // alert("status is open");
        document.getElementById(div).className = document.getElementById(div).className.replace("accordion-open", "accordion-closed");
    } else {
        //alert("status is closed");
    document.getElementById(div).className = document.getElementById(div).className.replace("accordion-closed", "accordion-open");
    }
}

function CloseThemAll() 
{
    for (i = 0; i < myAccordionArray.length; i++) {
      
        if (document.getElementById(myAccordionArray[i]).className.indexOf("accordion-open") > -1) {
            //document.getElementById(myAccordionArray[i]).className = document.getElementById(myAccordionArray[i]).className.replace("accordion-open", "accordion-closed");
            
            CloseDown(myAccordionArray[i]);
        }
    }
 }

function OpenUp(div) 
{
    document.getElementById(div).className = document.getElementById(div).className.replace("accordion-closed", "accordion-open");
}

function CloseDown(div) 
{
    document.getElementById(div).className = document.getElementById(div).className.replace("accordion-open", "accordion-closed");
}

function CloseThemAllGroup() {
    for (i = 0; i < myAccordionArray.length; i++) {

        if (document.getElementById(myAccordionArray[i]).className.indexOf("accord-group-open") > -1) {
            //document.getElementById(myAccordionArray[i]).className = document.getElementById(myAccordionArray[i]).className.replace("accordion-open", "accordion-closed");

            CloseDownGroup(myAccordionArray[i]);
        }
    }
}

function OpenUpGroup(div) {
    document.getElementById(div).className = document.getElementById(div).className.replace("accord-group-closed", "accord-group-open");
}

function CloseDownGroup(div) {
    document.getElementById(div).className = document.getElementById(div).className.replace("accord-group-open", "accord-group-closed");
}


