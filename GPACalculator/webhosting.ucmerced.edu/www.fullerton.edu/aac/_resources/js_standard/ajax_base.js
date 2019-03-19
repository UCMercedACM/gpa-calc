// -----------------------------------------------------------------------------------
function AjaxMe(serverbase, action, parameters, results) {

   // alert("hello");

    var method;
    var url;

    method = "GET";

    switch(action)
    {
        case 'BuildGalleryIndex':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            alert("Building It!");
            break;

        case 'LoadGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;

            document.getElementById('txtGalleryStatus').innerHTML = "Gallery Loaded Successfully";
            // document.getElementById('divImgEdit').style.display = "none";
            break;
       
       case 'RebuildGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            document.getElementById('txtGalleryStatus').innerHTML = "Rebuilding Gallery";
            break;

       
        case 'EditImageInfo':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'UpdateImageInfo':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            document.getElementById('txtGalleryStatus').innerHTML = "Updating Image Info";            
            break;

        case 'UpdateImageOrder':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'SortImageOrder':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
             break;

         case 'PublicGallery':
             url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
             url += "&parameters=" + parameters;
             url += "&ispublic=1";
             url += "&results=" + results;
             document.getElementById(results).style.display = "block";
             break;

        case 'TraningInfo':
            url = serverbase + "/_resources/scripts_php/functions_Training.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'TraningContent':
            url = serverbase + "/_resources/scripts_php/functions_Training.php?action=" + action;
            url += "&parameters=TraningContent";
            url += "&TrainingURL=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'ContentMine':
            url = serverbase + "/_resources/scripts_php/functions_ContentMiner.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Pull_RSS':
            url = serverbase + "/_resources/scripts_php/functions_ContentMiner.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;
       
        case 'LoadForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_ReadyForms':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_StandardFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_CustomFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'AddElementToForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'RemoveElementFromForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_EditElement':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'LoadFramework':
            url = serverbase + "/_resources/scripts_php/functions_framework.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;
            
    }

    AjaxCall(method, url, parameters, results);
}

function AjaxCall(method, url, parameters, results) {
   
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
      
     //alert("hi there");
   
    //document.getElementById(results).innerHTML += "<br/><br/>Call Begins.";
    //document.getElementById(results).innerHTML += "<br/><br/>URL: " + url;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(results).innerHTML = xmlhttp.responseText;
            GalleryMsgUpdate();
        } else {
            document.getElementById(results).innerHTML = "loading data...please wait";
            document.getElementById(results).innerHTML += "<br/><br/>" + url;
            document.getElementById(results).innerHTML += "<br/><br/>Ready State: " + xmlhttp.readyState + ", Status: " + xmlhttp.status;
        }
    }

    if (method == "GET") 
    {
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } else {

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }

}

function GalleryMsgUpdate() 
{
    
    try{
        if (document.getElementById('txtGalleryStatus').innerHTML == "Image Updated") 
        {
            setTimeout(function () { document.getElementById('lnkGalleryRefresh').click(); }, 1500);
        }
        else 
        {
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus StatusChange_start'; }, 1400);
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus StatusChange'; }, 2000);
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus'; }, 4000);
            setTimeout(function () { document.getElementById('txtGalleryStatus').innerHTML = '&nbsp;'; }, 4500);
        }
   }
    catch (e) { //do nothing
    }
}
