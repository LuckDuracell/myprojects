//Gather Date Information
var currentDate = new Date();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();

//Calculate Days into the Year
if (month >= 12) {
  day = day + 335;
} else if (month >= 11){
  day = day + 305;
} else if (month >= 10) {
  day = day + 273;
} else if (month >= 9) {
  day = day + 243;
} else if (month >= 8) {
  day = day + 212;
} else if (month >= 7) {
  day = day + 181;
} else if (month >= 6) {
  day = day + 151;
} else if (month >= 5) {
  day = day + 121;
} else if (month >= 4) {
  day = day + 91;
} else if (month >= 3) {
  day = day + 59;
} else if (month >= 2) {
day = day + 31;
}

//Convert Days to Months and Days
var monthsLeft = 0;
var daysLeft = 365 - day;

for (var i = 0; i < daysLeft; i++) {
  if (daysLeft > 30) {
    daysLeft = daysLeft - 30;
    monthsLeft = monthsLeft + 1;
  }
}

//Election Date
var eDaysLeft = 307 - day;

//Covid Data
var countries = getColumn("COVID-19 Cases per Country", "Total Confirmed Cases");
var dateUpdated = getColumn("COVID-19 Cases per Country", "Date");
var recoveries = getColumn("COVID-19 Cases per Country", "Total Recovered");

//Prep the Screens
setProperty("hsDaysLeftCount", "text", monthsLeft + " Months and " + daysLeft + " Days Away");
setProperty("elDaysLeftCount", "text", eDaysLeft + " Days Away");



//Buttons
onEvent("hsCases", "click", function() {
  setCovidScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});
onEvent("hsElection", "click", function() {
  setElectionScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});
onEvent("csHome", "click", function() {
  setHomeScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});
onEvent("csElection", "click", function() {
  setElectionScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});
onEvent("elHome", "click", function() {
  setHomeScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});
onEvent("elCases", "click", function() {
  setCovidScreen();
  playSound("assets/category_swish/karate_whoosh_14.mp3");
});



//Functions:
//Sets up and shows the Home Screen
function setHomeScreen() {
  setScreen("homeScreen");
  setProperty("hsDaysLeftCount", "text", monthsLeft + " Months and " + daysLeft + " Days Away");
}

//Sets up and shows the COVID-19 Screen
function setCovidScreen(date, country, recovered, countryID) {
  setScreen("covidScreen");
  countryID = countries.length - 14;
  country = countries[countryID];
  date = dateUpdated[countryID];
  recovered = recoveries[countryID];
  country = country.toLocaleString();
  recovered = recovered.toLocaleString();
  date = date.insert(3, "day");
  setProperty("cdData", "text", country + " USA Cases as of " + date);
  setProperty("cdDataR", "text", recovered + " Americans Recovered as of " + date);
}

//Sets up and shows the Election Screen
function setElectionScreen() {
  setScreen("electionScreen");
  setProperty("hsDaysLeftCount", "text", monthsLeft + " Months and " + daysLeft + " Days Away");
}

//SIMPELIFIED INSERT TO STRING CODE - STACK OVERFLOW
String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};