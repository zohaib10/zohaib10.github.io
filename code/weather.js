//var right = 0; 
var step = 1;
var tempStep = 5;

/* Concatinating two numbers whose difference is 5 to target elements that are 5 divs apart*/
function buttonAction(){
   if(step != 6){
        var steppy = document.getElementById("stepper"+step);
        steppy.style.display = "none";
    
        tempStep = 5 + step;
        var nextSteppy = document.getElementById("stepper"+tempStep);
    //    console.log(tempStep);
        nextSteppy.style.display = "flex";
    
        step++;
   }

}

function buttonAction0(){
    var minusStep = step-1;
    var steppy = document.getElementById("stepper"+minusStep);
    steppy.style.display = "flex";
    
    tempStep = 5 + minusStep;
    var nextSteppy = document.getElementById("stepper"+tempStep);
    //console.log(tempStep);
    nextSteppy.style.display = "none";
    
    step--;

}


/* called when new weather arrives */

function callbackFunction(data) {
	//var pgh = document.getElementById("forecast");
    //pgh.textContent = JSON.stringify(data);

    console.log(data);
    
    //var notherOne = JSON.stringify(data);
    //console.log(notherOne);
    
    //This changes the date
    var date = data.query.results.channel.item.forecast["0"].date;
    document.getElementById("thisDate").innerHTML = date;
    
    //This Changes the time
    var time = data.query.results.channel.lastBuildDate;
    var cTime = time.substring(17,25);
    document.getElementById("time").innerHTML = "Today " + cTime;
    
    //This will change the city
    var city = data.query.results.channel.title.substring(17);
    document.getElementById("city").innerHTML = city;
    //this gets the current temp
    var temp = data.query.results.channel.item.forecast["0"].high;
    document.getElementById("temp").innerHTML = temp+"&#176;";
    
    var cond = data.query.results.channel.item.forecast["0"].text;
    document.getElementById("condition").innerHTML = cond;
    console.log(cond);
    if(cond == "Mostly Cloudy" || cond == "Cloudy"){
        document.getElementById("img").src = "../cloudy.png";
    }else if(cond == "Mostly Sunny" || cond == "Partly Cloudy"){
        document.getElementById("img").src = "../partlycloudy.png";
    }else if(cond == "Sunny" || cond == "Clear"){
        document.getElementById("img").src = "../sunny.png";
    }else if(cond == "Thunderstorms"){
        document.getElementById("img").src = "../thunders.png";
    }else if(cond == "Breezy"){
        document.getElementById("img").src = "../breezy.png";
    }else if(cond == "Scattered Thunderstorms"){
        document.getElementById("img").src = "../sct.png";
    }else if(cond == "Scattered Showers"){
        document.getElementById("img").src = "../scatteredshowers.png";
    }else if(cond == "Rain" || cond == "Showers"){
        document.getElementById("img").src = "../rain.png";
    }else if(cond == "Snow Showers" || cond == "Snow"){
        document.getElementById("img").src = "../rain-snow.png";
    }
    
    var humidity = data.query.results.channel.atmosphere.humidity;
    document.getElementById("drop").innerHTML = humidity+"%";
    
    var speed = data.query.results.channel.wind.speed;
    document.getElementById("miles").innerHTML = speed+"mph";
    
    for(var i = 0; i <10; i++){
        var day = data.query.results.channel.item.forecast[i].day;
        var day1 = document.getElementById("day"+(i+1));
        day1.innerHTML = day;
        day1.style.marginTop = "0px";
        day1.style.color = "white";
        day1.style.fontFamily = "sans-serif";
        day1.style.fontWeight = "100";
        day1.style.fontSize = "26px";
        
        var cond = data.query.results.channel.item.forecast[i].text;
        var cond1 = document.getElementById("cond"+(i+1));
        cond1.innerHTML = cond;
        //cond1.style.marginTop = "0px";
        cond1.style.fontSize = "13px";
        cond1.style.color = "white";
        
         
        if(cond == "Mostly Cloudy" || cond == "Cloudy"){
            document.getElementById("image"+(i+1)).src = "../cloudy.png";
        }else if(cond == "Mostly Sunny" || cond == "Partly Cloudy"){
            document.getElementById("image"+(i+1)).src = "../partlycloudy.png";
        }else if(cond == "Sunny"||cond == "Clear"){
            document.getElementById("image"+(i+1)).src = "../sunny.png";
        }else if(cond == "Scattered Showers"){
            document.getElementById("image"+(i+1)).src = "../scatteredshowers.png";
        }else if(cond == "Breezy"){
            document.getElementById("image"+(i+1)).src = "../breezy.png";
        }else if(cond == "Thunderstorms"){
            document.getElementById("image"+(i+1)).src = "../thunders.png";
        }else if(cond == "Scattered Thunderstorms"){
            document.getElementById("image"+(i+1)).src = "../sct.png";
        }else if(cond == "Rain"|| cond == "Showers"){
            document.getElementById("image"+(i+1)).src = "../rain.png";
        }else if(cond == "Snow Showers" || cond == "Snow"){
            document.getElementById("image"+(i+1)).src = "../rain-snow.png";
        }


        var high = data.query.results.channel.item.forecast[i].high;
        var low = data.query.results.channel.item.forecast[i].low;
        //console.log(low);
        
        var temper = document.getElementById("t"+(i+1));
        temper.innerHTML =  high+"&#176;   -   "+low+"&#176;";
        temper.style.textAlign = "center";
        temper.style.fontFamily = "sans-serif";
        temper.style.fontSize = "30px";
        temper.style.fontWeight = "100";
        temper.style.marginTop = "0px";
        temper.style.color = "white";
    }

}


function gotNewPlace() {
	// get what the user put into the textbox
	var newPlace = document.getElementById("zipbox").value;
    console.log(newPlace);

	// make a new script element
	var script = document.createElement('script');

	// start making the complicated URL
	script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+newPlace+"')&format=json&callback=callbackFunction"
	script.id = "jsonpCall";

	// remove old script
	var oldScript = document.getElementById("jsonpCall");
	if (oldScript != null) {
		document.body.removeChild(oldScript);
	}

	// put new script into DOM at bottom of body
	document.body.appendChild(script);
}

function buttonAP(){
    var minusStep = step-1;
    var steppy = document.getElementById("stepper"+minusStep);
    steppy.style.display = "flex";
    
    tempStep = step;
    var nextSteppy = document.getElementById("stepper"+tempStep);
    //console.log(tempStep);
    nextSteppy.style.display = "none";
    
    step--;
}

function buttonAM(){
    if(step != 10){
        var steppy = document.getElementById("stepper"+step);
        steppy.style.display = "none";
    
        tempStep = 1+ step;
        var nextSteppy = document.getElementById("stepper"+tempStep);
    //    console.log(tempStep);
        nextSteppy.style.display = "flex";
    
        step++;

    }
}