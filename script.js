//Please delete this line. I need it otherwise github will not add a empty line.
//Sorry Nathan, but we will keep these lines for evermore

var websiteDisplayName = ["Ultimate Painting", "Pythinium", "Electron-o-verse"]
var websiteName = ["ULTIMATE PAINTING", "PYTHINIUM", "ELECTRONOVERSE"]
var descriptionDisplay = ["Learn Awesome painting techniques!", "Download our secure web browser!", "Learn everything form programming to electronics! All the tutorials at your fingertips!"]
var description = ["LEARN AWESOME PAINTINGS TECHNIQUES!", "DOWNLOAD OUR SECURE WEB BROWSER!", "LEARN EVERYTHING FORM PROGRAMMING TO ELECTRONICS! ALL THE TUTORIALS AT YOUR FINGERTIPS!"]
var url = ["./ultimatePainting/index.html", "./pythinium/index.html", "https://electronoverse.home.blog/"]
var searchTerm = "xxx";
var nameVariable = "xxx";
var descriptionVariable = "xxx";
var count = 0;
var resultFound = false;

var element1 = document.getElementsByClassName("resultTitle");
var element2 = document.getElementsByClassName("resultText");


function myFunction () { 
	if (event.keyCode==13) {

		while (element1[0]) {
    		element1[0].parentNode.removeChild(element1[0]);
		}
		
		while (element2[0]) {
    		element2[0].parentNode.removeChild(element2[0]);
		}
		var resultFound = false;
		
		var searchTerm = document.getElementById("searchQuery").value;
		var searchTerm = searchTerm.toUpperCase();
		for (count = 0; count < websiteName.length; count ++) {
			if (websiteName[count].includes(searchTerm) == true || description[count].includes(searchTerm) == true || url[count].includes(searchTerm) == true) {
				var resultFound = true;
				var nameVariable = document.createElement("a");
				nameVariable.innerHTML = websiteDisplayName[count];
				nameVariable.className = "resultTitle";
				nameVariable.href = url[count];


				var descriptionVariable = document.createElement("P");
				descriptionVariable.innerText = descriptionDisplay[count];
				descriptionVariable.className = "resultText";

				document.body.appendChild(nameVariable);
				document.body.appendChild(descriptionVariable);

				} else {
					if (count+1 == websiteName.length) {
						if (resultFound != true) { 
							var descriptionVariable = document.createElement("P");
							descriptionVariable.innerText = "Sorry, we couldn't find anything. Try using fewer words or searching for 'learn' or 'web'!";
							descriptionVariable.className = "resultText";
							document.body.appendChild(descriptionVariable);
						}
				}
			}
		}
	}
}
