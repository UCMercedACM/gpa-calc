//to hide the errror on load
$("#cardSortError").hide();


function submitCardSortForm(){
	var selectedChoiceRank;
	$(".exclude_checkbox").each(function(){
		if($(this).is(":checked")){
		selectedChoiceRank = $(this).val();
		}
	});
	
	if(undefined === selectedChoiceRank){
		$("#cardSortError").fadeIn(2000);
	}else{
		var selectedChoiceRank = "collegeOfArts="+selectedChoiceRank;
		var formAction = $('form[name="cardSortForm"]').attr("action")
		formAction = formAction + "?" + selectedChoiceRank;
		$('form[name="cardSortForm"]').submit();
	}
}

//--------------------------------------------------------
function getQuerystringParameter(parameter) {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
	
	
	return urlParams[parameter];
};



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Start Adivsement Function
function StartAdvisement(college, results)
{
	
	var serverbase = document.getElementById('hdnServerBase').value;
	var hdnAdvisementAnswers = getQuerystringParameter('hdnAdvisementAnswers');
	var current_answer = getQuerystringParameter('current_answer');
	var current_answer_value = getQuerystringParameter('current_answer_value');
	var parameters = college + "|";
	var count = 0; //count goes 1 to n
	var currentCount= 0, totalCount = 0, i = 0;
	
	if(hdnAdvisementAnswers == undefined)	
	{
		//nothing found - starting point
		//alert("It was nothing");
		parameters += count + "|";		
	}
	else
	{
		//pull values from previous pages

		//reformat values passed via html
		hdnAdvisementAnswers = hdnAdvisementAnswers.replace("%3d", "=");
		hdnAdvisementAnswers = hdnAdvisementAnswers.replace("%3D", "=");

		//generate an array for all answers
		var results_array = hdnAdvisementAnswers.split("*");
		var strAdvisementAnswers = "";

		//figure out the count from the currently known previous values for any 0 values.  The number of 0
		totalCount = results_array.length;

		  //update the current answer array with the previous value passed to us
		  var strCurrentAnswer = results_array[current_answer];
		  strCurrentAnswer = strCurrentAnswer.replace("0", current_answer_value);
		  results_array[current_answer] = strCurrentAnswer;
		
		for(i;i<hdnAdvisementAnswers.length;i++)if(hdnAdvisementAnswers[i]=='0')currentCount++;
		
		for(i=0; i < totalCount; i++)
		{
			strAdvisementAnswers += results_array[i];
			if(i<totalCount)strAdvisementAnswers += "*";
		}

  		currentCount = totalCount - currentCount;
		
		//set the count to the next value you are searching to answer
		currentCount = parseInt(current_answer) + 1;
				
		//build the parameter value to pass		
		parameters += currentCount + "|" + strAdvisementAnswers;				
	}
	
	AjaxMe_Advisement(serverbase, 'StartAdvisement', parameters, results)
}

//------------------------------------------------------------------------------------------------------------
// AJAX CALLS FOR ADVISEMENT

function CardSortSummary(results)
{
	var serverbase = document.getElementById('hdnServerBase').value;
	var hdnAdvisementAnswers = getQuerystringParameter('hdnAdvisementAnswers');
	var current_answer = getQuerystringParameter('current_answer');
	var current_answer_value = getQuerystringParameter('current_answer_value');
	var college = getQuerystringParameter('college');
	var parameters = college + "|";
	var count = 0; //count goes 1 to n
	var currentCount= 0, totalCount = 0, i = 0;

	//reformat values passed via html
	hdnAdvisementAnswers = hdnAdvisementAnswers.replace("%3d", "=");
	hdnAdvisementAnswers = hdnAdvisementAnswers.replace("%3D", "=");

	//generate an array for all answers
		var results_array = hdnAdvisementAnswers.split("*");
		var strAdvisementAnswers = "";

		//figure out the count from the currently known previous values for any 0 values.  The number of 0
		totalCount = results_array.length;

		  //update the current answer array with the previous value passed to us
		  var strCurrentAnswer = results_array[current_answer];
		  strCurrentAnswer = strCurrentAnswer.replace("0", current_answer_value);
		  results_array[current_answer] = strCurrentAnswer;
		
		for(i;i<hdnAdvisementAnswers.length;i++)if(hdnAdvisementAnswers[i]=='0')currentCount++;
		
		for(i=0; i < totalCount; i++)
		{
			strAdvisementAnswers += results_array[i];
			if(i<totalCount)strAdvisementAnswers += "*";
		}

  		currentCount = totalCount - currentCount;
		
		//set the count to the next value you are searching to answer
		currentCount = parseInt(current_answer) + 1;
				
		//build the parameter value to pass		
		parameters += strAdvisementAnswers;		

		//alert(strAdvisementAnswers);
		//alert(parameters);
		AjaxMe_Advisement(serverbase, 'CardSortSummary', parameters, results)

}
//------------------------------------------------------------------------------------------------------------
// AJAX CALLS FOR ADVISEMENT
function AjaxMe_Advisement(serverbase, action, parameters, results) {
    var method;
    var url;

    method = "GET";

    switch(action)
    {
        case 'StartAdvisement':
            url = serverbase + "/_resources/scripts_php_site/functions_advisement.php?action=" + action;
            url += "&parameters=" + parameters;
            //alert("Building It!");
            break;      

		case 'CardSortSummary':
            url = serverbase + "/_resources/scripts_php_site/functions_advisement.php?action=" + action;
            url += "&parameters=" + parameters;
            //alert("Building It!");
            break;      
            
    }

    AjaxCall(method, url, parameters, results);
}
