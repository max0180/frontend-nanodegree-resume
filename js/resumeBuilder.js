var bio = {
	"name": "Max Ivannikov",
	"role": "Web Developer",
	"skills": [
		"HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"
	],
	"contacts": {
		"email": "mvi205@nyu.edu",
		"mobile": "212-263-5433",
		"github": "max0180",
		"location": "New York, NY"
	},
	"bioPic": "images/simpson.gif",
	"welcomeMessage": "Front- and Back-End Web Developer in training"
}

var work = {
	"jobs": [{
		"title": "Researcher",
		"dates": "2013 - present",
		"employer": "NYU Medical Center",
		"location": "New York, NY",
		"description": "Work on a project that aims to elucidate biological effects of oxygen nanostructures at the organismal and cellular levels in partnership with Revalesio Corp. Conducting research in collaboration with Toyama Corp. on several lead compounds for Alzheimer's disease treatment to elucidate their cellular mechanisms."
	}, {
		"title": "Postdoctoral Scholar",
		"dates": "2010 - 2013",
		"employer": "UT Health Science Center",
		"location": "San Antonio, TX",
		"description": "Studied cytosolic and mitochondrial calcium kinetics and energy metabolism activation by calcium in larval Drosophila NMJs by using various transgenic Drosophila models."
	}]
}

var education = {
	"schools": [{
		"degree": "PhD",
		"majors": ["Biomedical Sciences"],
		"name": "NYU",
		"location": "New York, NY",
		"dates": "2005-2010",
		"url": "http://nyu.edu"
	}, {
		"degree": "Bachelor of Science",
		"majors": ["Biochemistry", "Chemistry"],
		"name": "NSU",
		"location": "Novosibirsk, Russia",
		"dates": "1997-2002",
		"url": "http://ngs.com"
	}],
	"onlineCourses": [{
		"title": "JavaScript",
		"school": "Udacity",
		"date": "May 2016 - present",
		"url": "http://udacity.com"
	}, {
		"title": "HTML",
		"school": "Udacity",
		"date": "May 2016 - present",
		"url": "http://udacity.com"
	}]
}
 
var projects = {
	"science": [{
		"title": "Biological effects of oxygen nanostructures",
		"dates": "November 2013 - present",
		"description": "Conduct studies to investigate biological and biophysical properties of oxygen nanobubbles in mouse skeletal muscles, brain slices and primary neuronal cultures.  Demonstrated the ability of oxygen nanobubbles to cross natural and artificial lipid bilayer membranes, and to stimulate both mitochondrial respiration and neurotransmission in mouse NMJs.",
		"image": "http://www.alzforum.org/sites/default/files/styles/media-medium/public/12.24_Nanobubble.jpg?itok=HxgM6M2I"
	},{
		"title": "Calcium and energy metabolism",
		"dates": "February 2010 - August 2013",
		"description": "Quantified free mitochondrial calcium levels and their stimulatory effects on presynaptic mitochondrial metabolism at larval NMJs in Drosophila melanogaster.  Demonstrated the cause-effect relationship of oxidative stress in muscle weakness and atrophy during aging.",
		"image": "http://journals.plos.org/plosone/article/figure/image?size=inline&id=info:doi/10.1371/journal.pone.0100834.g005"
	}]
}

projects.display = function() {
	$("#projects h2").after(HTMLprojectStart);
	for(var i in this.science) {
   var x = HTMLprojectTitle.replace("%data%" , this.science[i].title) + 
		HTMLprojectDates.replace("%data%" , this.science[i].dates) +
		HTMLprojectDescription.replace("%data%" , this.science[i].description) +
		HTMLprojectImage.replace("%data%" , this.science[i].image);
		
   $(".project-entry:last").append(x);
	}
};

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (var i in this.jobs) {
	

	var x = HTMLworkEmployer.replace("%data%" , this.jobs[i].employer) 
		+ HTMLworkTitle.replace("%data%" , this.jobs[i].title);
	
	var y = HTMLworkLocation.replace("%data%" , this.jobs[i].location) +
		HTMLworkDates.replace("%data%" , this.jobs[i].dates);
	
	var z = HTMLworkDescription.replace("%data%" , this.jobs[i].description);
	
	$(".work-entry:last").append(x, y, z);
	}
};

bio.display = function() {

	var nameRes = HTMLheaderName.replace("%data%" , this.name);

	var roleRs = HTMLheaderRole.replace("%data%" , this.role);

	var imgTag = HTMLbioPic.replace("%data%" , this.bioPic);

	var welMsg = HTMLwelcomeMsg.replace("%data%" , this.welcomeMessage);

	$("#header").prepend(nameRes, roleRs);

	$("#topContacts").after(welMsg, imgTag);

	var contactInfo = ["mobile","email","twitter","github","blog","location"];
	
	for (var x = 0; x < contactInfo.length; x++) {
	if(this.contacts.hasOwnProperty(contactInfo[x])) {
	var y = HTMLcontact.replace("%mode%" , contactInfo[x]);
	var z = y.replace("%data%" , this.contacts[contactInfo[x]]);
	$("#topContacts").append(z);
	$("#footerContacts").append(z);

		};
	}

	if (this.skills.length > 0) { 
	$("#header").append(HTMLskillsStart);
	for(var x = 0; x < this.skills.length; x++) {
	var skill = HTMLskills.replace("%data%" , this.skills[x]);
	$("#skills").append(skill);
		}
	};

}

education.display = function () {
	$("#education h2").after(HTMLschoolStart);
	
	for (var i in this.schools) {
		var x = HTMLschoolName.replace("%data%" , this.schools[i].name) +
				HTMLschoolDegree.replace("%data%" , this.schools[i].degree) +
				HTMLschoolDates.replace("%data%" , this.schools[i].dates) +
				HTMLschoolLocation.replace("%data%" , this.schools[i].location) +
				HTMLschoolMajor.replace("%data%" , this.schools[i].majors.join(", "));
		$(".education-entry:last").append(x);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (var j in this.onlineCourses) {
		var z= HTMLonlineURL.replace("%data%" , this.onlineCourses[j].url);
		var y = HTMLonlineTitle.replace("%data%" , this.onlineCourses[j].title) +
				HTMLonlineSchool.replace("%data%" , this.onlineCourses[j].school) +
				HTMLonlineDates.replace("%data%" , this.onlineCourses[j].date) +
				 z.replace( "#" , this.onlineCourses[j].url);
		$(".education-entry:last").append(y);
	} 
} 


function inName(name){
var nameArr = name.split(" ");
var intName = nameArr[0].charAt(0).toUpperCase() + nameArr[0].slice(1).toLowerCase() +
" " + nameArr[1].toUpperCase();
return intName;
}

projects.display();

work.display();

bio.display();

education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


$(document).ready(function(){
	$(".work-entry, .project-entry, .education-entry").hide();

    $("h2:not(#mapDiv>h2, #lets-connect>h2)").click(function(){
    	$(this).next().slideToggle(600);
    $(this).find("i.fa").toggleClass("fa-minus"); 
		}); });







