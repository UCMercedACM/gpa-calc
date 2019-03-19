
				
// JScript import file

// YOU MAY FIND THE NEED TO HAVE YOUR OWN JS FILES ON YOUR PAGES.  BY DEFAULT THERE IS 
// NO NEED TO INCLUDE SEPERATE JAVASCRIPT FILES INTO YOUR SITE AS ALL FUNCTIONS 
// DESIGNED FOR THE TEMPLATES WILL AUTOMATICALLY BE ADDED IN THE STANDARD JS FILES.

// DO NOT EDIT THE FUNCTION BELOW IT IS USED TO ADD IN THE JAVASCRIPT

function addJavascript(jsname) {
	
	var header = document.getElementsByTagName('head')[0];
	var myscript = document.createElement('script');
	
	myscript.setAttribute('type','text/javascript');
	myscript.setAttribute('src',jsname);
	header.appendChild(myscript);
}

	var myHost = window.location.host.toLowerCase();
			
				
									addJavascript('https://webhosting.ucmerced.edu/form_validation.js');
									addJavascript('https://webhosting.ucmerced.edu/cardSortFunctions.js');
									addJavascript('https://webhosting.ucmerced.edu/randomInAllPages.js');
								}
							
