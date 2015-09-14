/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs" : [{
        "employer" : "True Corp.",
        "title" : "Trainee",
        "dates" : "someday",
        "description" : "Develope web application",
        "location" : "13.7625823,100.567762"
    },
    {
        "employer" : "WebOn Thaiand",
        "title" : "Jr. System Developer",
        "dates" : "Present",
        "description" : "Developer WebOn CMS base on Perl",
        "location" : "13.735257, 100.561987"
    }]
}

var project = {
	"projects" : [{
        "title" : "Vitual Reality for FPS Game",
        "date" : "May, 2015",
        "description" : "For more Experiance when play shooting game. You will controll your RC car and shoot enemies. You will be a driver and shooter like you sit in your car.",
        "image" : "somewhere.com"
	}]
}

var bio = {
	"name" : "Waitoon",
    "role" : "Jr. System Developer",
    "contacts" : 
    {
    	"mobile" : "(66)085 143 1591",
    	"github" : "killerv",
    	"line" : "killerv",
    	"location" : "13.649398, 100.419157",
    	"email" : "waitoon@webon.net"
    },
    "msg" : "Oh! Bello, papaguena! Tu le bella comme le papaya",
    "skills" : [
        "Photography", "Programming", "Driven"
    ]
}

var education = {
	"schools" : [
        {
        	"name" : "KMUTT",
        	"location" : "13.649895, 100.494262",
        	"degree" : "Bachelor's degree",
        	"majors" : ["Computer Engineering"],
        	"date" : 2015,
        	"info" : "cpe.kmutt.ac.th"
        },
        {
            "name" : "RNP",
            "location" : "13.722982, 100.378894",
            "degree" : "High School",
            "majors" : ["Scien and Math"],
            "date" : 2011,
            "info" : "www.rnp.ac.th"
        }
	],
	"onlineClasses" : [
        {
            "title" : "Javascript Basics",
            "school" : "Udatcity",
            "date" : "31 Jul, 2015 - 3 Aug, 2015",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
	    }
    ]
}

function displaywork(){
    for(var job in work.jobs ){
    
        $('#workExperience').append(HTMLworkStart);
          
        var formattedEmployer      = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
        var formattedworkTitle     = HTMLworkTitle.replace('%data%',work.jobs[job].title);
        var formattedDates         = HTMLworkDates.replace('%data%',work.jobs[job].dates);
        var formattedDescription   = HTMLworkDescription.replace('%data%',work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedworkTitle;

        $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedDescription);
    }
}

function inName(name){
    name = name.toUpperCase();
    var nameArray = name.split(" ");
    nameArray[0] = nameArray[0].replace(nameArray[0].slice(1),nameArray[0].slice(1).toLowerCase());
    return nameArray[0] + " " + nameArray[1];
}

project.display = function(){
    var formattedTitle;
    var formattedDates;
    var formattedDescription;
    var formattedImage;
      
    for(var proj in project.projects){
        formattedTitle       = HTMLprojectTitle.replace('%data%',project.projects[proj].title);
        formattedDates       = HTMLprojectDates.replace('%data%',project.projects[proj].date);
        formattedDescription = HTMLprojectDescription.replace('%data%',project.projects[proj].description);
        formattedImage       = HTMLprojectImage.replace('%data%',project.projects[proj].image);
        
        $('#projects').append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImage);
      }
};

education.displaySchool = function(){

    var formattedName;
    var formattedLocation;
    var formattedDegree;
    var formattedMajors;
    var formattedDates;
      
    for(var school in education.schools){
        formattedName     = HTMLschoolName.replace('%data%',education.schools[school].name);
        formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
        formattedDegree   = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
        formattedMajors   = HTMLschoolMajor.replace('%data%',education.schools[school].majors);
        formattedDates    = HTMLschoolDates.replace('%data%',education.schools[school].date);
        
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajors);
    }


    if(education.onlineClasses.length > 0){

        var formattedTitle;
        var formattedTitle;
        var formattedURL;
        
        $('#education').append(HTMLonlineClasses);

        for(var onlineClass in education.onlineClasses){
            formattedTitle  = HTMLonlineTitle.replace('%data%',education.onlineClasses[onlineClass].title);
            formattedSchool = HTMLonlineSchool.replace('%data%',education.onlineClasses[onlineClass].school);
            formattedDates  = HTMLonlineDates.replace('%data%',education.onlineClasses[onlineClass].date);
            formattedURL    = HTMLonlineURL.replace('%data%',education.onlineClasses[onlineClass].url);
            
            var formattedTitleSchool = formattedTitle + formattedSchool;

            $('#education').append(HTMLschoolStart);
            $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedURL);
        }
    }
    
};

