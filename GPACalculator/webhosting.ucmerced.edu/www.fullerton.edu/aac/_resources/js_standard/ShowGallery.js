//-------------------------------------------------------------------------------------------------------------
//VERSION 4 IMAGE GALLERY FUNCTIONS


function Gallery_SetPreview() 
{
    //allows the editor to choose from various style types
    //chooses the gallery style and sets it

    var galleryclass = document.getElementById('selGalleryClass').options[document.getElementById('selGalleryClass').selectedIndex].value;
    document.getElementById('divPreviewGallery_A').className = galleryclass;
    document.getElementById('divPreviewSetupMobile').className = galleryclass;
}

function lightbox_actions(e) {
    //alert(target.id);
    var id = event.target.id
    if (id == "") {
        lightbox_exit();
    }
}

function lightbox(ImageCount, Letter) 
{
    //alert("Hi mom");
    var containercss = document.getElementById("div" + Letter);
   // alert(containercss.className);
    //alert(containercss.className.indexOf("nolightbox"));

    if (containercss.className.indexOf("nolightbox") > 0) {

    } else {
        document.getElementById('lightbox_container').value = Letter;
        document.getElementById('lightbox_imagenumber').value = ImageCount;
        document.getElementById('lightbox_maximagenumber').value = document.getElementById('lightbox_' + Letter + '_maximagenumber').value;
        document.getElementById('LightBox').className = "lightbox_on";

      //  GalleryFrameHeight = parseInt(window.innerHeight);
      //  GalleryFrameWidth = parseInt(window.innerWidth);

       
       // document.getElementById('LightBox').style.height = parseInt(GalleryFrameHeight) + "px";
        //document.getElementById('LightBox').style.width = parseInt(GalleryFrameWidth) + "px";

        lightbox_showimage(ImageCount, Letter);

        
    }

}

function lightbox_showimage(ImageCount, Letter) {

    var TheImage = document.getElementById("Image_" + Letter + "_" + ImageCount);
    var TheText = document.getElementById("ImageText_" + Letter + "_" + ImageCount);
    var GalleryFrameHeight = document.getElementById('LightBox').scrollHeight;
    var GalleryFrameWidth = document.getElementById('LightBox').scrollWidth;
    var LimitImageHeight = 365; // the amount of margin + padding taken up in the height

    //RESET THE IMAGE FRAME TO ALLOW FOR BIGGER IMAGES
    document.getElementById("LB_ImgFrame").style.height = parseInt(GalleryFrameHeight - LimitImageHeight) + "px"; //assume there's text
    document.getElementById("LB_ImgFrame").style.width = GalleryFrameWidth + "px";
    

    //START BY MAKING IMAGE FADE OUT
    document.getElementById("LB_Img").className = "FadeOut";
    //alert(ImageCount);
    //alert(TheText.innerHTML.length);

    //SET THE TEXT IF ANY IS NEEDED
    if (TheText.innerHTML.length < 3) {
        document.getElementById("LightBoxImageText").className = "hideme";
        document.getElementById("LightBoxImageText").innerHTML = "";
        document.getElementById("LB_ImgFrame").style.paddingBottom = "50px"; //reduce the max height needed since there's no text
        document.getElementById("LB_ImgFrame").style.height = parseInt(GalleryFrameHeight - 150) + "px"; //assume there's text
        LimitImageHeight = 150;
        }
    else {
        document.getElementById("LightBoxImageText").className = "img_text";
        document.getElementById("LightBoxImageText").innerHTML = TheText.innerHTML;
        document.getElementById("LB_ImgFrame").style.paddingBottom = "280px"; //reduce the max height needed since there's no text
    }

    //SETUP THE NEXT PICTURE TO SHOW
    document.getElementById("LB_Img").style.height = "auto";
    document.getElementById("LB_Img").style.width = "auto";
    document.getElementById("LB_Img").src = TheImage.src;
    setTimeout(function () { document.getElementById("LB_Img").className = "FadeIn" }, 100);

    var GalleryImageWidth = document.getElementById('LB_Img').scrollWidth;
    var GalleryImageHeight = document.getElementById('LB_Img').scrollHeight;

    //alert("SRC: " + document.getElementById("LB_Img").src + "\n\n" + "H: " + GalleryImageHeight + " W: " + GalleryImageWidth);

    if (GalleryImageHeight < parseInt(GalleryFrameHeight - LimitImageHeight)) {
        //IMAGE IS SHORT ENOUGHT TO FIT SCREEN
        document.getElementById("LB_ImgFrame").style.height = GalleryImageHeight + "px";
        document.getElementById("LB_ImgFrame").style.width = GalleryImageWidth + "px";

    } else {
        //IMAGE IS TOO TALL AND NEEDS ADJUSTMENT
        document.getElementById("LB_Img").style.height = parseInt(GalleryFrameHeight - LimitImageHeight) + "px";
        document.getElementById("LB_Img").style.width = "auto";

        GalleryImageHeight = document.getElementById('LB_Img').scrollHeight;
        GalleryImageWidth = document.getElementById('LB_Img').scrollWidth;
        
        document.getElementById("LB_ImgFrame").style.height = GalleryImageHeight + "px";
        document.getElementById("LB_ImgFrame").style.width = GalleryImageWidth + "px";

    }   
}

function lightbox_prev() {
    var Letter = document.getElementById('lightbox_container').value;
    var CurrentImage = document.getElementById("lightbox_imagenumber").value;
    var MaxImage = document.getElementById("lightbox_maximagenumber").value;

    if (parseInt(CurrentImage) == 1) {
        document.getElementById("lightbox_imagenumber").value = parseInt(MaxImage);
        
        lightbox_showimage(parseInt(MaxImage), Letter);
    } else {
        document.getElementById("lightbox_imagenumber").value = parseInt(CurrentImage) - 1;
        
        lightbox_showimage((parseInt(CurrentImage) - 1), Letter);
    }
}

function lightbox_next() {
    var Letter = document.getElementById('lightbox_container').value;
    var CurrentImage = document.getElementById("lightbox_imagenumber").value;
    var MaxImage = document.getElementById("lightbox_maximagenumber").value;
   // alert(CurrentImage);
   // alert(MaxImage);
    if (parseInt(CurrentImage) == parseInt(MaxImage)) {
        document.getElementById("lightbox_imagenumber").value = 1;
        lightbox_showimage(1, Letter);
    } else {
        document.getElementById("lightbox_imagenumber").value = parseInt(CurrentImage) + 1;
        lightbox_showimage((parseInt(CurrentImage)+1), Letter);
    }
}

function lightbox_first() {
    var Letter = document.getElementById('lightbox_container').value;
    var CurrentImage = document.getElementById("lightbox_imagenumber").value;
    var MaxImage = document.getElementById("lightbox_maximagenumber").value;
    // alert(CurrentImage);
    // alert(MaxImage);
    document.getElementById("lightbox_imagenumber").value = 1;
    lightbox_showimage(1, Letter);
}

function lightbox_last() {
    var Letter = document.getElementById('lightbox_container').value;
    var CurrentImage = document.getElementById("lightbox_imagenumber").value;
    var MaxImage = document.getElementById("lightbox_maximagenumber").value;
    // alert(CurrentImage);
    // alert(MaxImage);
    
     document.getElementById("lightbox_imagenumber").value = MaxImage;
     lightbox_showimage(MaxImage, Letter);
    
}

function lightbox_exit() {
   
        document.getElementById('LightBox').className = "lightbox";

    }

    function lightbox_click() {

        //do nothing

    }

    function PublicGallery(serverbase, action, parameters, results) {

        AjaxMe(serverbase, action, parameters, results)
    }

