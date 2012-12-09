function Council() {
	var council;
	var selectedcouncil;
	var allcouncil;
	var partiarray=new Array();
	var councilarray=new Array();
	var dateBegin=2000;
	var dateEnd=2012;
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

	this.setCouncil = function(party){
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

	this.setCouncil = function(counc){
		councilarray=counc.split(" ");
		return this.reload();
	}
	
	this.setDate = function(dateB, dateE){
		dateBegin=dateB;
		dateEnd=dateE;
		return this.reload();
	}
	
	this.partyfilter = function() {
		selectedcouncil = selectedcouncil.filter(function(counciller) {
			if (partiarray.length==0 || partiarray[0] == "-")
				return true;
			for (var i = 0; i < partiarray.length; i++) {
				if (counciller.party.abbreviation == partiarray[i])
					return true;
			}
			return false;
		});
	}
	
	this.setParty = function(party){
		partiarray = party.split(", ");
		return this.reload();
	}
	
	this.reload = function(){
		this.getCouncillers();
		this.datefilter();
		this.councilfilter()
		this.partyfilter();
		return this;
	}

	this.datefilter = function() {
		selectedcouncil = selectedcouncil.filter(function(council) {
			if(council.membership.leavingDate == null && dateEnd>=2012){
				return true;
			}
			yearE = parseInt(council.membership.leavingDate.substring(0,4));
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
			councillerarray[0] = value.firstName;
			councillerarray[1] = value.lastName;
			councillerarray[2] = {
				v : index,
				f : value.council.abbreviation
			};

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

