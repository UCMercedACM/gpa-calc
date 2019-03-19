/*if($("#divZ").children().children().attr("id") !== undefined && $("#divZ").children().children().attr("id") === "popupToShowDiv"){
	openPopupWindow('http://www.fullerton.edu/aac/docs/Summer_Hours_2016-For_Website.pdf');
}

//function to open a popup
function openPopupWindow(url){
	window.open(url,'newwin','height=800,width=1000');
}*/

//for main page slideshow and quotes position toggle
if($("#sliderA_slideshow_shell").length > 0 && $(".quote").length > 0){
	$(".quote").insertAfter($("#sliderA_slideshow_shell"));
}

// to display college name at runtime
function replaceOrAddCollegeName(){
	if($("#collegeNameHere").length > 0){	
		if($("#divA_content header").text().trim().length > 0){
			$("#collegeNameHere").text($("#divA_content header").text());	
		}else{
			$("#collegeNameHere").text($("#divA_content h1").text().trim());
		}		
		console.log("replaced");
	}else{
		console.log("did nothing");
	}
}

setTimeout(replaceOrAddCollegeName, 200);

setTimeout(function(){
	$("#formSubmitButton").on("click",function(){
		if($("input[name='current_answer_value']:checked").length === 0){
			$("<p class='errorMessageCardSort'>Please select one of the rankings</p>").insertBefore($("#divB_content").children()[0]).fadeIn(1000);
		}else{
			$("#cardSortForm").submit();
		}
	});
	
	$("#divG p").addClass("marginLeftNegative3");
	$("#divH img").addClass("marginRight50Percent");
	$("#divI img").addClass("marginRight65Percent");
	
},1000);

setTimeout(function(){
	// to align card sort page
	if($("#divK_content").text().trim().length > 0){
		if(document.getElementById("divD") !== null){
			document.getElementById("divD").className += "paddingBoth10Percent";
		}else{
			document.getElementById("divE").className += "paddingLeft28Percent";
		}
	}		
	// deleting social media icons from every card
	if($("#divK_content h2").text().trim() === "Learn more about the major"){
		$("#divK_content p").toggle();
	}
	
	// to delete all the hypwelinks from left panel in card sort pages
	if($("#VerticalNavMenu .sectionnav development ul li:first-child").text().trim() === "POSSIBLE CAREERS" || $("#VerticalNavMenu .sectionnav development ul li:first-child").text().trim() === "Concentration"){
		console.log("enter");
		$("#VerticalNavMenu .sectionnav development ul li:not(:first-child)").each(function(){
			$(this.children).removeAttr("href");
			$(this.children).removeAttr("target");
		});
	}
	
	if($("#VerticalNavMenu .sectionnav production ul li:first-child").text().trim() === "POSSIBLE CAREERS" || $("#VerticalNavMenu .sectionnav production ul li:first-child").text().trim() === "Concentration"){
		console.log("enter");
		$("#VerticalNavMenu .sectionnav production ul li:not(:first-child)").each(function(){
			$(this.children).removeAttr("href");
			$(this.children).removeAttr("target");
		});
	}
}, 300);




