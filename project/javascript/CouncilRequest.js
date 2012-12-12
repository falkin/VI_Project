function Council() {
	var council;
	var selectedcouncil;
	var allcouncil;
	
	var monthNames = new Array("janvier", "février", "mars", 
	"avril", "mai", "juin", "juillet", "aout", "septembre", 
	"octobre", "novembre", "décembre");
	var ar = new Array();
	var conc = new Array();	
	conc['CN'] = "Conseil national";
	conc['BR'] = "Conseil fédéral";
	conc['BR*'] = "Conseil fédéral";	
	conc['CE'] = "Conseil des Etats";	
	var genr = new Array();	
	genr['m'] = "Homme";
	genr['f'] = "Femme";	
	ar['ZH'] =	new Array("474px-Wappen_Zürich_matt.scg.png","Zurich");
	ar['BE'] =	new Array("474px-Wappen_Bern_matt.scg.png","Berne");
	ar['LU'] =	new Array("474px-Wappen_Luzern_matt.scg.png","Lucerne");
	ar['UR'] =	new Array("474px-Wappen_Uri_matt.scg.png","Uri");
	ar['SZ'] =	new Array("474px-Wappen_des_Kantons_Schwyz.","Schwytz");
	ar['OW'] =	new Array("474px-Wappen_Obwalden_matt.scg.png","Obwald");
	ar['NW'] =	new Array("474px-Wappen_Nidwalden_matt.scg.png","Nidwald");
	ar['GL'] =	new Array("474px-Wappen_Glarus_matt.scg.png","Glaris");
	ar['ZG'] =	new Array("474px-Wappen_Zug_matt.scg.png","Zoug");
	ar['FR'] =	new Array("474px-Wappen_Freiburg_matt.scg.png","Fribourg");
	ar['SO'] =	new Array("474px-Wappen_Solothurn_matt.scg.png","Soleure");
	ar['BS'] =	new Array("474px-Wappen_Basel-Stadt_matt.scg.png","Bâle-Ville");
	ar['BL'] =	new Array("474px-Wappen_Basel-Landschaft.","Bâle-Campagne");
	ar['SH'] =	new Array("474px-Wappen_Schaffhausen_matt.scg.png","Schaffhouse");
	ar['AR'] =	new Array("474px-Wappen_Appenzell_Ausserrhoden_matt.scg.png","Appenzell Rhodes-Extérieures");
	ar['AI'] =	new Array("474px-Wappen_Appenzell_Innerrhoden_matt.scg.png","Appenzell Rhodes-Intérieures");
	ar['SG'] =	new Array("474px-Wappen_St._Gallen_matt.scg.png","Saint-Gall");
	ar['GR'] =	new Array("474px-Wappen_Graubünden_matt.scg.png","Grisons");
	ar['AG'] =	new Array("474px-Wappen_Aargau_matt.scg.png","Argovie");
	ar['TG'] =	new Array("474px-Wappen_Thurgau_matt.scg.png","Thurgovie");
	ar['TI'] =	new Array("474px-Wappen_Tessin_matt.scg.png","Tessin");
	ar['VD'] =	new Array("474px-Wappen_Waadt_matt.scg.png","Vaud");
	ar['VS'] =	new Array("474px-Wappen_Wallis_matt.scg.png","Valais");
	ar['NE'] =	new Array("474px-Wappen_Neuenburg_matt.scg.png","Neuchâtel");
	ar['GE'] =	new Array("474px-Wappen_Genf_matt.scg.png","Genève");
	ar['JU'] =	new Array("474px-Wappen_Jura_matt.scg.png","Jura");
	/*	this.getCouncillersOnline = function() {
	 for (var i = 1; i < 120; i++) {
	 $.ajax({
	 url : 'http://ws.parlament.ch/councillors/historic?format=json&pagenumber='+i,
	 async : false,
	 dataType : 'json',
	 success : function(data) {
	 if(i==1)
	 council = data;
	 else
	 council=council.concat(data);
	 }
	 });
	 }
	 selectedcouncil = council;
	 $('body').append(JSON.stringify(council,null,2));
	 console.log(JSON.stringify(council,null,2));
	 return this;
	 }*/

	this.getCouncillers = function() {
		if (council == null) {
			$.ajax({
				url : '../data/Councillers.json',
				async : false,
				dataType : 'json',
				success : function(data) {
					council = data;
				}
			});
		}
		selectedcouncil = council;
		allcouncil = council;

		return this;
	};

	this.cantonfilter = function(canton) {
		selectedcouncil = council.filter(function(council) {
			return council.canton.abbreviation == canton;
		});
		return this;
	}

	this.genderfilter = function(gender) {
		selectedcouncil = council.filter(function(council) {
			return council.gender == gender;
		});
		return this;
	}

	this.councilfilter = function(counc) {
		selectedcouncil = council.filter(function(counciller) {
			var councilarray = counc.split(" ");
			for (var i = 0; i < councilarray.length; i++) {
				if (counciller.council.abbreviation.substring(0, 2) == councilarray[i])
					return true;
			}
			return false;
		});
		return this;
	}

	this.datefilter = function() {
		council = council.filter(function(council) {
			var d = council.membership.leavingDate == null;
			return d;
		});
		return this;
	}

	this.byCanton = function() {
		var countCanton = {};
		$.each(selectedcouncil, function(index, value) {
			if (value.canton.abbreviation in countCanton)
				countCanton[value.canton.abbreviation]++;
			else
				countCanton[value.canton.abbreviation] = 1;
		});
		return countCanton;
	}

	this.WomanProportion = function() {
		var countWomen = {};
		var countMen = {};

		$.each(selectedcouncil, function(index, value) {
			var countTab = value.gender == 'f' ? countWomen : countMen;
			if (value.canton.abbreviation in countTab)
				countTab[value.canton.abbreviation]++;
			else
				countTab[value.canton.abbreviation] = 1;
		});

		$.each(countWomen, function(index, value) {
			countWomen[index] = countWomen[index] / countMen[index];
		});
		return countWomen;
	}

	this.toObject = function() {
		return selectedcouncil;
	}

	this.toArray = function() {
		var selectedcouncilarray = new Array();
		var val = new Array();
		$.each(selectedcouncil, function(index, value) {
			var councillerarray = new Array();
			councillerarray[0] = value.lastName;
			councillerarray[1] = value.firstName;
			councillerarray[2] =  {v:index, f:value.canton.abbreviation};
		
			selectedcouncilarray[selectedcouncilarray.length] = councillerarray;
		});
		return selectedcouncilarray;
	}

	this.smallestDate = function() {
		var smallestDate = 3000;
		$.each(allcouncil, function(index, value) {
			var date = value.membership.entryDate.split('-');
			if (smallestDate > date[0]) {
				smallestDate = date[0];
			}
		});
		return smallestDate;
	}

	this.searchInstead = function(idCouncil) {
		return selectedcouncil[idCouncil].placeOfCitizenship;
	}
	
	


	this.updateMoreInformations = function(idCouncil,idLevel) {
		var dateBir= selectedcouncil[idCouncil].birthDate.toString().split("T")[0].split("-");
		var entry= selectedcouncil[idCouncil].membership.entryDate.toString().split("T")[0].split("-");
		
		$(".moreInformation"+idLevel+" .titleName").text(selectedcouncil[idCouncil].lastName+" "+selectedcouncil[idCouncil].firstName);
		$(".moreInformation"+idLevel+" .birthDate").text(dateBir[2]+" "+monthNames[dateBir[1].replace("0","")-1]+" "+dateBir[0]);
		if(selectedcouncil[idCouncil].dateOfDeath){
			var dateDeath = selectedcouncil[idCouncil].birthDate.toString().split("T")[0].split("-");
			$(".moreInformation"+idLevel+" .dateOfDeath").text(dateDeath[2]+" "+monthNames[dateDeath[1].replace("0","")-1]+" "+dateDeath[0]);
		}
		else{
				$(".moreInformation"+idLevel+" .dateOfDeath").text(" - ");
		}
		$(".moreInformation"+idLevel+" .placeOfCitizenship").text(selectedcouncil[idCouncil].placeOfCitizenship);
		$(".moreInformation"+idLevel+" .canton").text(ar[selectedcouncil[idCouncil].canton.abbreviation][1]);
		$(".moreInformation"+idLevel+" .imgCanton").attr("src", "../img/canton/"+ar[selectedcouncil[idCouncil].canton.abbreviation][0]);
		$(".moreInformation"+idLevel+" .gender").text(genr[selectedcouncil[idCouncil].gender]);
		$(".moreInformation"+idLevel+" .party").text(this.searchParty(selectedcouncil[idCouncil].party.abbreviation));
		$(".moreInformation"+idLevel+" .council").text(conc[selectedcouncil[idCouncil].council.abbreviation]);
		$(".moreInformation"+idLevel+" .entryDate").text(entry[2]+" "+monthNames[entry[1].replace("0","")-1]+" "+entry[0]);
		if(selectedcouncil[idCouncil].membership.leavingDate){
			var leave = selectedcouncil[idCouncil].membership.leavingDate.toString().split("T")[0].split("-");
			$(".moreInformation"+idLevel+" .leavingDate").text(leave[2]+" "+monthNames[leave[1].replace("0","")-1]+" "+leave[0]);
		}
		else{
				$(".moreInformation"+idLevel+" .leavingDate").text(" - ");
		}
		
	}
	

	this.searchParty = function(key) {
		var party;
		$.ajax({
			url : '../data/Parti.json',
			async : false,
			dataType : 'json',
			success : function(data) {
				party = data;
			}
		});
		$.each(party, function(index, value) {
			if (value.abbreviation == key) {
				return "("+value.abbreviation+") " + value.name;
			}
		});
		return key;
	}

	this.loadAllParty = function() {
		var allCouncilPartie = {};
		$.each(allcouncil, function(index, value) {
			if (!allCouncilPartie[value.party.abbreviation]) {
				allCouncilPartie[value.party.abbreviation] = value.party.abbreviation;
			}
		});
		var party;
		$.ajax({
			url : '../data/Parti.json',
			async : false,
			dataType : 'json',
			success : function(data) {
				party = data;
			}
		});
		$.each(party, function(index, value) {
			if (value.id != 26 && value.id != 1468 && allCouncilPartie[value.abbreviation]) {
				var newOption = $('<option value="newOpt" id="dsfdf">' + value.abbreviation + " - " + value.name + '</option>');
				newOption.insertAfter('#selectParty option:last-child');
			}
		});

	}
}

