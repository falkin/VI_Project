function Council() {
	var council;
	var selectedcouncil;
	var allcouncil;
	var partiarray = new Array();
	var councilarray = new Array();
	var dateBegin = 2000;
	var dateEnd = 2012;

	var monthNames = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre");
	var ar = new Array();
	var conc = new Array();
	conc['CN'] = "Conseil national";
	conc['BR'] = "Conseil fédéral";
	conc['BR*'] = "Conseil fédéral";
	conc['CE'] = "Conseil des Etats";
	var genr = new Array();
	genr['m'] = "Homme";
	genr['f'] = "Femme";
	ar['ZH'] = new Array("474px-Wappen_Zürich_matt.svg.png", "Zurich");
	ar['BE'] = new Array("474px-Wappen_Bern_matt.svg.png", "Berne");
	ar['LU'] = new Array("474px-Wappen_Luzern_matt.svg.png", "Lucerne");
	ar['UR'] = new Array("474px-Wappen_Uri_matt.svg.png", "Uri");
	ar['SZ'] = new Array("474px-Wappen_des_Kantons_Schwyz.", "Schwytz");
	ar['OW'] = new Array("474px-Wappen_Obwalden_matt.svg.png", "Obwald");
	ar['NW'] = new Array("474px-Wappen_Nidwalden_matt.svg.png", "Nidwald");
	ar['GL'] = new Array("474px-Wappen_Glarus_matt.svg.png", "Glaris");
	ar['ZG'] = new Array("474px-Wappen_Zug_matt.svg.png", "Zoug");
	ar['FR'] = new Array("474px-Wappen_Freiburg_matt.svg.png", "Fribourg");
	ar['SO'] = new Array("474px-Wappen_Solothurn_matt.svg.png", "Soleure");
	ar['BS'] = new Array("474px-Wappen_Basel-Stadt_matt.svg.png", "Bâle-Ville");
	ar['BL'] = new Array("474px-Wappen_Basel-Landschaft.svg.png", "Bâle-Campagne");
	ar['SH'] = new Array("474px-Wappen_Schaffhausen_matt.svg.png", "Schaffhouse");
	ar['AR'] = new Array("474px-Wappen_Appenzell_Ausserrhoden_matt.svg.png", "Appenzell Rhodes-Extérieures");
	ar['AI'] = new Array("474px-Wappen_Appenzell_Innerrhoden_matt.svg.png", "Appenzell Rhodes-Intérieures");
	ar['SG'] = new Array("474px-Wappen_St_Gallen.svg.png", "Saint-Gall");
	ar['GR'] = new Array("474px-Wappen_Graubünden_matt.svg.png", "Grisons");
	ar['AG'] = new Array("474px-Wappen_Aargau_matt.svg.png", "Argovie");
	ar['TG'] = new Array("474px-Wappen_Thurgau_matt.svg.png", "Thurgovie");
	ar['TI'] = new Array("474px-Wappen_Tessin_matt.svg.png", "Tessin");
	ar['VD'] = new Array("474px-Wappen_Waadt_matt.svg.png", "Vaud");
	ar['VS'] = new Array("474px-Wappen_Wallis_matt.svg.png", "Valais");
	ar['NE'] = new Array("474px-Wappen_Neuenburg_matt.svg.png", "Neuchâtel");
	ar['GE'] = new Array("474px-Wappen_Genf_matt.svg.png", "Genève");
	ar['JU'] = new Array("474px-Wappen_Jura_matt.svg.png", "Jura");

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

	this.setCouncil = function(party) {
		councilarray = party.split(" ");
		return this.reload();
	}

	this.councilfilter = function(counc) {
		selectedcouncil = selectedcouncil.filter(function(counciller) {
			for (var i = 0; i < councilarray.length; i++) {
				if (counciller.council.abbreviation.substring(0, 2) == councilarray[i])
					return true;
			}
			return false;
		});
	}

	this.setCouncil = function(counc) {
		councilarray = counc.split(" ");
		return this.reload();
	}

	this.setDate = function(dateB, dateE) {
		dateBegin = dateB;
		dateEnd = dateE;
		return this.reload();
	}

	this.partyfilter = function() {
		selectedcouncil = selectedcouncil.filter(function(counciller) {
			if (partiarray.length == 0 || partiarray[0] == "-")
				return true;
			for (var i = 0; i < partiarray.length; i++) {
				if (counciller.party.abbreviation == partiarray[i])
					return true;
			}
			return false;
		});
	}

	this.setParty = function(party) {
		partiarray = party.split(", ");
		return this.reload();
	}

	this.reload = function() {
		this.getCouncillers();
		this.datefilter();
		this.councilfilter()
		this.partyfilter();
		return this;
	}

	this.datefilter = function() {
		selectedcouncil = selectedcouncil.filter(function(council) {
			if (council.membership.leavingDate == null && dateEnd >= 2012) {
				return true;
			}
			yearE = parseInt(council.membership.leavingDate.substring(0, 4));
			return yearE >= dateBegin && yearE <= dateEnd;
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
			councillerarray[2] = {
				v : index,
				f : value.canton.abbreviation
			};
			//selectedcouncilarray[selectedcouncilarray.length] = councillerarray;
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

	this.setImage = function(data) {
		alert("coucou")
	}
	this.updateMoreInformations = function(idCouncil, idLevel) {
		searchImage(selectedcouncil[idCouncil].lastName + "&" + selectedcouncil[idCouncil].firstName, this);
		var dateBir = selectedcouncil[idCouncil].birthDate.toString().split("T")[0].split("-");
		var entry = selectedcouncil[idCouncil].membership.entryDate.toString().split("T")[0].split("-");

		$(".moreInformation" + idLevel + " .titleName").text(selectedcouncil[idCouncil].lastName + " " + selectedcouncil[idCouncil].firstName);
		$(".moreInformation" + idLevel + " .birthDate").text(dateBir[2] + " " + monthNames[dateBir[1].replace("0", "") - 1] + " " + dateBir[0]);
		if (selectedcouncil[idCouncil].dateOfDeath) {
			var dateDeath = selectedcouncil[idCouncil].birthDate.toString().split("T")[0].split("-");
			$(".moreInformation" + idLevel + " .dateOfDeath").text(dateDeath[2] + " " + monthNames[dateDeath[1].replace("0", "") - 1] + " " + dateDeath[0]);
		} else {
			$(".moreInformation" + idLevel + " .dateOfDeath").text(" - ");
		}
		$(".moreInformation" + idLevel + " .placeOfCitizenship").text(selectedcouncil[idCouncil].placeOfCitizenship);
		$(".moreInformation" + idLevel + " .canton").text(ar[selectedcouncil[idCouncil].canton.abbreviation][1]);
		$(".moreInformation" + idLevel + " .imgCanton").attr("src", "../img/canton/" + ar[selectedcouncil[idCouncil].canton.abbreviation][0]);
		$(".moreInformation" + idLevel + " .gender").text(genr[selectedcouncil[idCouncil].gender]);
		$(".moreInformation" + idLevel + " .party").text(this.searchParty(selectedcouncil[idCouncil].party.abbreviation));
		$(".moreInformation" + idLevel + " .council").text(conc[selectedcouncil[idCouncil].council.abbreviation]);
		$(".moreInformation" + idLevel + " .entryDate").text(entry[2] + " " + monthNames[entry[1].replace("0", "") - 1] + " " + entry[0]);
		if (selectedcouncil[idCouncil].membership.leavingDate) {
			var leave = selectedcouncil[idCouncil].membership.leavingDate.toString().split("T")[0].split("-");
			$(".moreInformation" + idLevel + " .leavingDate").text(leave[2] + " " + monthNames[leave[1].replace("0", "") - 1] + " " + leave[0]);
		} else {
			$(".moreInformation" + idLevel + " .leavingDate").text("Encore en fonction");
		}
		$(".moreInformation" + idLevel).animate({
			opacity : "1"
		}, 600);
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
				return "(" + value.abbreviation + ") " + value.name;
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

