
/*
 * GET home page.
 */

exports.paramRead=function(req, res){
	
	console.log("Title is"+req.body.title);
	console.log("Name is"+req.body.name);
	console.log("DOB is"+req.body.profession);
	console.log("Email is"+req.body.email);
	console.log("Prefession is"+req.body.profession);
	console.log("Town is"+req.body.town);
	
	
	switch(req.body.profession)
	{
	
	case "Oceanology":

		console.log("1 Oceanology");
		res.render('presentation/oceanology');
		

		break;
	
	case "Oceanography":
		
		console.log("2 Oceanography");
		res.render('presentation/oceanography');
		break;
		
	case "Ocean Engineering":
		console.log("Ocean Engineering");
		res.render('presentation/oceanEngineering');
		break;
		
	case "Marine Biiologist":
		console.log("Marine Biiologist");
		res.render('presentation/marineBiiologist');
		break;
		
	case "Marine Echologist":
		console.log("Marine Echologist");
		res.render('presentation/marineEchologist');
		break;
	case "Biology Researcher":
		console.log("Biology Researcher");
		res.render('presentation/biologyResearcher');
		break;
	case "Underwater Archeologist":
		console.log("Underwater Archeologist");
		res.render('presentation/underwaterArcheologist');
		break;
	case "Aquaculturist":
		console.log("Aquaculturist");
		res.render('presentation/aquaculturist');
		break;
	case "Fisherman":
		console.log("Fisherman");
		res.render('presentation/fisherman');
		break;
	case "Social and Policy Science":
		console.log("Social and Policy Science");
		res.render('presentation/socialandPolicyScience');
		break;
	case "Environment Enthusist":
		console.log("Environment Enthusist");
		res.render('presentation/environmentEnthusist');
		break;
	case "Climate Researcher":
		console.log("Climate Researcher");
		res.render('presentation/climateResearcher');
		break;
	case "Ocean Advocate":
		console.log("Ocean Advocate");
		res.render('presentation/oceanAdvocate');
		break;
	case "Aquatic Echology Technician":
		console.log("Aquatic Echology Technician");
		res.render('presentation/aquaticEchologyTechnician');
		break;
	case "Underwater Cinematographer":
		console.log("Underwater Cinematographer");
		res.render('presentation/underwaterCinematographer');
		break;
	case "Environmental Educator":
		console.log("Environmental Educator");
		res.render('presentation/environmentalEducator');
		break;

	}
	
	//res.redirect('/');
	
	//For diff page
	//res.render('presentation');
};

exports.index=function(req, res){
	res.render('index');
};

