$(function() {
	// swiss map personalization
	map = new jvm.WorldMap({
		map : 'ch_merc_en',
		container : $('#map'),
		backgroundColor : 'white',
		regionStyle : {
			initial : {
				fill : 'lightblue'
			},
			hover : {
				fill : 'black',
				"fill-opacity" : 0.8
			}
		},
		series : {
			regions : [{
				attribute : 'fill'
			}]
		}
	});

	var conciller = [{
		"id" : 1353,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1799-07-29T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1866-07-16T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Giuseppe",
		"function" : "m",
		"gender" : "m",
		"lastName" : "a Marca",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1849-12-01T00:00:00Z",
			"leavingDate" : "1851-07-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Soazza (GR)"
	}, {
		"id" : 1354,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1878-10-06T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SZ",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1959-10-17T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Alois",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ab Yberg",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1928-12-03T00:00:00Z",
			"leavingDate" : "1935-12-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Schwyz (SZ)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2000-09-25T00:00:00Z",
			"leavingDate" : "2003-11-30T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2003-12-01T00:00:00Z",
			"leavingDate" : "2003-12-03T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "RL"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2003-12-04T00:00:00Z",
			"leavingDate" : "2007-12-02T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "RL"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2007-12-03T00:00:00Z",
			"leavingDate" : "2008-11-21T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "RL"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2008-11-22T00:00:00Z",
			"leavingDate" : "2011-12-04T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 801,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1966-01-04T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TI",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "RL"
		},
		"firstName" : "Fabio",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abate",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2011-12-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Cabbio (TI)"
	}, {
		"id" : 1355,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1914-11-18T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1998-08-13T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 2,
			"abbreviation" : "S"
		},
		"firstName" : "Alfred",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abegg",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1963-12-02T00:00:00Z",
			"leavingDate" : "1971-11-28T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PSS",
			"name" : null
		},
		"placeOfCitizenship" : "Zürich (ZH)"
	}, {
		"id" : 1356,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1834-07-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "ZH",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1912-02-17T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 122,
			"abbreviation" : "LD"
		},
		"firstName" : "Johann Jakob",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abegg",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1887-12-05T00:00:00Z",
			"leavingDate" : "1912-02-17T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "Küsnacht (ZH)"
	}, {
		"id" : 1357,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1883-01-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1942-03-27T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 4,
			"abbreviation" : "V"
		},
		"firstName" : "H. Roman",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abt",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1919-01-01T00:00:00Z",
			"leavingDate" : "1931-12-06T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "UDC",
			"name" : null
		},
		"placeOfCitizenship" : "Bünzen (AG)"
	}, {
		"id" : 1357,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1883-01-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1942-03-27T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 4,
			"abbreviation" : "V"
		},
		"firstName" : "H. Roman",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abt",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1931-12-07T00:00:00Z",
			"leavingDate" : "1932-12-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "UDC",
			"name" : null
		},
		"placeOfCitizenship" : "Bünzen (AG)"
	}, {
		"id" : 1357,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1883-01-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1942-03-27T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 4,
			"abbreviation" : "V"
		},
		"firstName" : "H. Roman",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abt",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1932-12-06T00:00:00Z",
			"leavingDate" : "1942-03-27T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "UDC",
			"name" : null
		},
		"placeOfCitizenship" : "Bünzen (AG)"
	}, {
		"id" : 1358,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1854-06-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1937-11-15T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Heinrich E.",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Abt",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1911-12-04T00:00:00Z",
			"leavingDate" : "1919-11-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Bünzen (AG)"
	}, {
		"id" : 1359,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1907-04-02T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "LU",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1997-12-12T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Alfred",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ackermann",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1953-09-14T00:00:00Z",
			"leavingDate" : "1970-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Entlebuch (LU)"
	}, {
		"id" : 1360,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1901-02-16T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1987-05-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Joseph",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ackermann",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1947-12-01T00:00:00Z",
			"leavingDate" : "1951-12-02T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Düdingen (FR), Plasselb (FR)"
	}, {
		"id" : 1361,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1890-11-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1969-01-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Walter",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ackermann",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1935-12-02T00:00:00Z",
			"leavingDate" : "1946-12-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Herisau (AR)"
	}, {
		"id" : 1361,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1890-11-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1969-01-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Walter",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ackermann",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1946-12-02T00:00:00Z",
			"leavingDate" : "1947-11-30T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Herisau (AR)"
	}, {
		"id" : 1361,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1890-11-15T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1969-01-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Walter",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ackermann",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1947-12-01T00:00:00Z",
			"leavingDate" : "1963-12-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Herisau (AR)"
	}, {
		"id" : 1362,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1821-02-21T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "AG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1879-12-02T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Peter",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Acklin",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1863-12-07T00:00:00Z",
			"leavingDate" : "1866-12-02T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Herznach (AG)"
	}, {
		"id" : 1363,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1828-02-12T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BL",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1888-01-21T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 125,
			"abbreviation" : "LG"
		},
		"firstName" : "Jakob Josef",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Adam",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1863-12-07T00:00:00Z",
			"leavingDate" : "1868-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Allschwil (BL)"
	}, {
		"id" : 1364,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1894-09-21T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "VD",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1953-12-17T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "Jules-Henri",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Addor",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1943-12-06T00:00:00Z",
			"leavingDate" : "1947-11-30T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Gustave",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1878-12-02T00:00:00Z",
			"leavingDate" : "1880-09-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Dém*",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 7,
			"abbreviation" : "L"
		},
		"firstName" : "Gustave",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1889-03-25T00:00:00Z",
			"leavingDate" : "1901-06-02T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLS",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 7,
			"abbreviation" : "L"
		},
		"firstName" : "Gustave",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1901-06-03T00:00:00Z",
			"leavingDate" : "1902-02-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLS",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM",
		"faction" : {
			"id" : 7,
			"abbreviation" : "L"
		},
		"firstName" : "Gustave",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1902-10-01T00:00:00Z",
			"leavingDate" : "1917-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLS",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 3,
			"abbreviation" : "BR",
			"code" : "RAT_3_",
			"type" : "B"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 0,
			"abbreviation" : "-"
		},
		"firstName" : "Gustave",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1917-06-26T00:00:00Z",
			"leavingDate" : "1919-12-31T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "LPS",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1365,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1845-12-23T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "GE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 3,
			"abbreviation" : "BR*",
			"code" : "RAT_3_",
			"type" : "B"
		},
		"dateOfDeath" : "1928-03-31T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 0,
			"abbreviation" : "-"
		},
		"firstName" : "Gustave",
		"function" : "p",
		"gender" : "m",
		"lastName" : "Ador",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1919-01-01T00:00:00Z",
			"leavingDate" : "1919-12-31T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "LPS",
			"name" : null
		},
		"placeOfCitizenship" : "Vuiteboeuf (VD), Genf (GE)"
	}, {
		"id" : 1366,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1887-03-29T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1958-11-23T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 2,
			"abbreviation" : "S"
		},
		"firstName" : "Ernst",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebersold",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1947-12-01T00:00:00Z",
			"leavingDate" : "1958-11-23T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PSS",
			"name" : null
		},
		"placeOfCitizenship" : "Rubigen (BE)"
	}, {
		"id" : 3867,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1958-11-26T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 4,
			"abbreviation" : "V"
		},
		"firstName" : "Andreas",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebi",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2007-12-03T00:00:00Z",
			"leavingDate" : "2011-12-04T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "UDC",
			"name" : null
		},
		"placeOfCitizenship" : "Wynigen (BE)"
	}, {
		"id" : 3867,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1958-11-26T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 4,
			"abbreviation" : "V"
		},
		"firstName" : "Andreas",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebi",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2011-12-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "UDC",
			"name" : null
		},
		"placeOfCitizenship" : "Wynigen (BE)"
	}, {
		"id" : 4049,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1967-10-18T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 2,
			"abbreviation" : "S"
		},
		"firstName" : "Matthias",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebischer",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "2011-12-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PSS",
			"name" : null
		},
		"placeOfCitizenship" : "Guggisberg (BE)"
	}, {
		"id" : 1172,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1914-01-02T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "2009-02-28T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Max",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebischer",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1951-12-03T00:00:00Z",
			"leavingDate" : "1969-11-24T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Saint-Ours (FR), Heitenried (FR)"
	}, {
		"id" : 1367,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1908-11-02T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "BE",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1971-02-27T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 108,
			"abbreviation" : "DE"
		},
		"firstName" : "Paul",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aebischer",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1967-12-04T00:00:00Z",
			"leavingDate" : "1971-02-27T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PEV",
			"name" : null
		},
		"placeOfCitizenship" : "Guggisberg (BE)"
	}, {
		"id" : 1368,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1841-11-13T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1898-07-18T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Paul",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1881-02-14T00:00:00Z",
			"leavingDate" : "1881-10-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Freiburg (FR)"
	}, {
		"id" : 1368,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1841-11-13T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1898-07-18T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Paul",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1883-06-18T00:00:00Z",
			"leavingDate" : "1898-07-18T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Freiburg (FR)"
	}, {
		"id" : 1369,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1884-05-06T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1957-02-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Pierre",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1931-12-01T00:00:00Z",
			"leavingDate" : "1944-12-03T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Freiburg (FR)"
	}, {
		"id" : 1369,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1884-05-06T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1957-02-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Pierre",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1944-12-04T00:00:00Z",
			"leavingDate" : "1945-12-03T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Freiburg (FR)"
	}, {
		"id" : 1369,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1884-05-06T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1957-02-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 3,
			"abbreviation" : "C"
		},
		"firstName" : "Pierre",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1945-12-04T00:00:00Z",
			"leavingDate" : "1947-11-30T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PDC",
			"name" : null
		},
		"placeOfCitizenship" : "Freiburg (FR)"
	}, {
		"id" : 369,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1950-02-14T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "FR",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 2,
			"abbreviation" : "S"
		},
		"firstName" : "Pierre",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aeby",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1995-12-04T00:00:00Z",
			"leavingDate" : "1999-12-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PSS",
			"name" : null
		},
		"placeOfCitizenship" : "Düdingen (FR)"
	}, {
		"id" : 1370,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1870-04-18T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "TG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1921-11-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 1,
			"abbreviation" : "R"
		},
		"firstName" : "A. Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM-DD",
		"membership" : {
			"id" : 0,
			"entryDate" : "1919-01-27T00:00:00Z",
			"leavingDate" : "1921-11-04T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "PLR",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1849-04-16T00:00:00Z",
			"leavingDate" : "1849-11-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1850-07-01T00:00:00Z",
			"leavingDate" : "1851-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1851-12-01T00:00:00Z",
			"leavingDate" : "1852-12-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1853-07-04T00:00:00Z",
			"leavingDate" : "1853-12-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1857-12-07T00:00:00Z",
			"leavingDate" : "1864-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1865-07-03T00:00:00Z",
			"leavingDate" : "1868-07-05T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1868-07-06T00:00:00Z",
			"leavingDate" : "1868-12-23T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 2,
			"abbreviation" : "CE",
			"code" : "RAT_2_",
			"type" : "S"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1868-12-24T00:00:00Z",
			"leavingDate" : "1872-06-01T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}, {
		"id" : 1371,
		"updated" : "2012-11-10T17:42:13Z",
		"hasMorePages" : true,
		"birthDate" : "1816-08-22T00:00:00Z",
		"birthDateMask" : "YYYY-MM-DD",
		"canton" : {
			"id" : 0,
			"abbreviation" : "SG",
			"code" : "KAN_0_"
		},
		"council" : {
			"id" : 1,
			"abbreviation" : "CN",
			"code" : "RAT_1_",
			"type" : "N"
		},
		"dateOfDeath" : "1897-12-04T00:00:00Z",
		"dateOfDeathMask" : "YYYY-MM-DD",
		"entryDateMask" : "YYYY-MM-DD",
		"faction" : {
			"id" : 126,
			"abbreviation" : "MC"
		},
		"firstName" : "Arnold Otto",
		"function" : "m",
		"gender" : "m",
		"lastName" : "Aepli",
		"leavingDateMask" : "YYYY-MM",
		"membership" : {
			"id" : 0,
			"entryDate" : "1872-12-02T00:00:00Z",
			"leavingDate" : "1876-06-04T00:00:00Z"
		},
		"party" : {
			"id" : 0,
			"abbreviation" : "Lib*",
			"name" : null
		},
		"placeOfCitizenship" : "St. Gallen (SG), Diessenhofen (TG)"
	}];

	var countCanton = {};
	$.each(conciller, function(index, value) {
		if (index != 0 && conciller[index - 1].id == conciller[index].id)
			return true;
		if (value.canton.abbreviation in countCanton)
			countCanton[value.canton.abbreviation]++;
		else
			countCanton[value.canton.abbreviation] = 1;
		console.log(value.canton.abbreviation);

	});

	$.each(countCanton, function(index, value) {
		console.log(value);
	});

	var colors = {}, key;
	var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#EF5689', '#A6D854'];

	for (key in map.regions) {
		var region = key.substring(3, 7);
		if ( region in countCanton)
			colors[key] = palette[countCanton[region]];
	}
	for (var key in countCanton) {
		console.log(countCanton[key]);
	}
	map.series.regions[0].setValues(colors);
});