




	//  https://www.youtube.com/watch?v=ofme2o29ngU
	//  https://www.youtube.com/watch?v=DZBGEVgL2eE
	//  https://www.youtube.com/watch?v=ZKwrOXl5TDI
	//  https://www.youtube.com/watch?v=Co3TTrlG-ok
	//  https://www.mongodb.com/developer/products/realm/build-ci-cd-pipelines-realm-apps-github-actions/


/*
			DID YOU REMEMBER TO STARTUP MONGO DB FIRST?   admin cmd  'mongod'
			AND THEN CONNECT....

*/


const pickerRef = [
	{"Genesis": [
		{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"2": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25" ]},
		{"3": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
		{"4": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26" ]},
		{"5": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32" ]},
		{"6": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]},
		{"7": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
		{"8": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]},
		{"9": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29" ]},
		{"10": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32" ]},
		{"11": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32" ]},
		{"12": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20" ]},
		{"13": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" ]},
		{"14": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
		{"15": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21" ]},
		{"16": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16" ]},
		{"17": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27" ]},
		{"18": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"19": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38" ]},
		{"20": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" ]},
		{"21": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"22": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
		{"23": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20" ]},
		{"24": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67" ]},
		{"25": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"26": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"27": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46" ]},
		{"28": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]},
		{"29": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"30": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43" ]},
		{"31": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55" ]},
		{"32": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32" ]},
		{"33": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20" ]},
		{"34": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"35": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29" ]},
		{"36": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43" ]},
		{"37": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36" ]},
		{"38": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30" ]},
		{"39": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ]},
		{"40": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ]},
		{"41": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57" ]},
		{"42": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38" ]},
		{"43": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"44": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"45": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"46": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"47": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"48": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]},
		{"49": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"50": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26" ]}
	]},
	{"Proverbs": [
		{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"2": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]},
		{"3": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"4": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27" ]},
		{"5": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ]},
		{"6": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"7": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27" ]},
		{"8": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36" ]},
		{"9": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" ]},
		{"10": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32" ]},
		{"11": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"12": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"13": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25" ]},
		{"14": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"15": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"16": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"17": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"18": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
		{"19": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29" ]},
		{"20": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30" ]},
		{"21": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"22": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29" ]},
		{"23": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ]},
		{"24": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34" ]},
		{"25": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"26": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"27": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27" ]},
		{"28": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28" ]},
		{"29": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27" ]},
		{"30": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33" ]},
		{"31": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]}
	]},
	{"Psalms": [
		{"1": [ "1", "2", "3", "4", "5", "6" ]},
		{"2": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ]},
		{"3": [ "1", "2", "3", "4", "5", "6", "7", "8" ]},
		{"4": [ "1", "2", "3", "4", "5", "6", "7", "8" ]},
		{"5": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ]},
		{"6": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]},
		{"7": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17" ]},
		{"8": [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]},
		{"9": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20" ]},
		{"10": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" ]},
		{"11": [ "1", "2", "3", "4", "5", "6", "7" ]},
		{"12": [ "1", "2", "3", "4", "5", "6", "7", "8" ]},
		{"13": [ "1", "2", "3", "4", "5", "6" ]},
		{"14": [ "1", "2", "3", "4", "5", "6", "7" ]},
		{"15": [ "1", "2", "3", "4", "5" ]},
		{"16": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11" ]},
		{"17": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15" ]},
		{"18": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50" ]},
		{"19": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14" ]},
		{"20": [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]},
		{"21": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13" ]},
		{"22": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]},
		{"23": [ "1", "2", "3", "4", "5", "6" ]},
		{"24": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]},
		{"25": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22" ]}
	]}
]

document.addEventListener('DOMContentLoaded', (e) => {
	// console.log(e.type)

	// whole OT and NT book lists
	const bookListArray = [
		['Genesis', 'Proverbs', 'Psalms'],
		['1 John', '2 John', '3 John', 'Jude'],
	]
	/*
	const pickerRef = [
		[
			{"Genesis": [
				{"1": [ "1", "2", "3", "4", "5" ]},
				{"2": [ "1", "2" ]},
				{"3": [ "1", "2" ]}
			]},
			{"Proverbs": [
				{"1": [ "1", "2", "3", "4", "5" ]},
				{"2": [ "1", "2" ]},
				{"3": [ "1", "2" ]}
			]},
			{"Psalms": [
				{"1": [ "1", "2", "3", "4", "5" ]},
				{"2": [ "1", "2" ]},
				{"3": [ "1", "2" ]}
			]}
		],[
			{"1 John": [
				{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]},
				{"2": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29" ]},
				{"3": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24" ]},
				{"4": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21" ]},
				{"5": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21" ]}
			]},
			{"2 John": [
				{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13" ]}
			]},
			{"3 John": [
				{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14" ]}
			]},
			{"Jude": [
				{"1": [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25" ]}
			]}
		]
	] */

	var appState = {
		currentTagID: 2,
	}

	var taggedVersesObject = [
		{
			tagName: 'love',
			tagID: 1,
			versesArray: [
				{
					book: { "id":"20", "name":"Proverbs" },
					reference: "1:1-2",
					text: "The proverbs of Solomon, son of David, king of Israel:"
				},
			],
		},
		{
			tagName: 'faith',
			tagID: 2,
			versesArray: [
				{
					verseRefKey: '1:4',
					verseKey: 'xtext one',
				},
			],
		},
	]


	var verseForm = 					document.getElementById("verseForm");
	var formElTestament =	document.getElementById("chooseTest");
	var formElBookList = 			document.getElementById("testamentBookList");
	var formElVerseRef = 		document.getElementById("chapterVerseRef");
	var formElText = 		document.getElementById("verseText");

	var tagPicker = 					document.getElementById("tagPicker");
	var addTag = 							document.getElementById("addTag");
	var addTagInput = 				document.getElementById("addTagInput");
	var addTagBtn = 					document.getElementById("addTagBtn");
	var cancelAddTag = 				document.getElementById("cancelAddTag");
	var saveButton = 					document.getElementById("saveButton");

	taggedVersesObject.forEach(tag => {
		tagPicker.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value"${tag.tagName}">${tag.tagName}</option>`;
		addTag.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value"${tag.tagName}">${tag.tagName}</option>`;
	});


	// set tag to previously set tag
	tagPicker.selectedIndex = appState.currentTagID

	let setBooksFunction = () => {
		let addBooksToSelect = (testament) => {
			formElBookList.innerHTML = ''
			bookListArray[testament].forEach((book) => {
				formElBookList.innerHTML += `<option value"${book}">${book}</option>`
			})
		}

		if (formElTestament.checked == true) {
			// console.log("checked")
			addBooksToSelect(1)
		} else {
			// console.log("not checked")
			addBooksToSelect(0)
		}
	}

	setBooksFunction()
	formElTestament.addEventListener('change', setBooksFunction)

	tagPicker.addEventListener('change', (e) => {
		console.log(e.target.selectedOptions[0].dataset.tagId)
		console.log(tagPicker.value)
		// update app state (current tag)
		appState.currentTagID = e.target.selectedOptions[0].dataset.tagId

		// update verse display


	})

	/*
	 *	add new tag
	 */

	// initialize modal
	var newTagModal = new bootstrap.Modal(document.getElementById('newTagModal'), {});



	addTag.addEventListener('change', () => {
		// console.log(addTag.selectedIndex);
		if (addTag.selectedIndex == 1) {
			newTagModal.show()
		}
	})

	// focus on input when modal shown
	document.getElementById('newTagModal').addEventListener('shown.bs.modal', function () {
		addTagInput.focus()
	})
	document.getElementById('newTagModal').addEventListener('hidden.bs.modal', function () {
		addTagInput.value = '';
	})

	addTagInput.addEventListener('keyup', (e) => {
		if (e.target.value.length) {
			addTagBtn.disabled = false
		} else {
			addTagBtn.disabled = true
		}
	})

	addTagBtn.addEventListener('click', () => {
		// add to array
		addNewTagToArray(addTagInput.value)
		newTagModal.hide()
	})

	cancelAddTag.addEventListener("click", () => { addTag.selectedIndex = 0 });


	function addNewTagToArray(newTagName) {
		console.log(newTagName)
		const tempArray = taggedVersesObject.map((tag) => tag.tagID)
		console.log(tempArray)

		var newTagID = Math.max(...tempArray) +1
		console.log(newTagID)

		var newArrayIndexObject = {
			tagName: newTagName,
			tagID: newTagID,
			versesArray: [],
		}

		taggedVersesObject.push(newArrayIndexObject)
		console.log(taggedVersesObject)

		// remove all dynamically added tag options from selects
		document.querySelectorAll(".dynamic-select-option").forEach((option) => {
			  option.remove();
		});

		// add tags back to selects with the new tag
		taggedVersesObject.forEach((tag) => {
			addTag.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value="${tag.tagName}">${tag.tagName}</option>`
			tagPicker.innerHTML += `<option class="dynamic-select-option" data-tag-id="${tag.tagID}" value="${tag.tagName}">${tag.tagName}</option>`
		})

		// set tag to previously set tag
		tagPicker.selectedIndex = appState.currentTagID


		// set tag select to newly added tag

		// console.log(addTag.length);
		addTag.selectedIndex = addTag.length - 1
	}




		(function(){
			var addVerseContainerEl = document.getElementById("addVerseContainer");

			document.getElementById("vToggle").addEventListener("click", function () {
				addVerseContainerEl.classList.toggle('close');
				this.classList.toggle('close');
			});
		}());





	saveButton.addEventListener('click', function (e) {
		// console.log(verseForm.checkValidity());
		if (verseForm.checkValidity() && addTag.selectedIndex > 1) {
			e.preventDefault()

			let ref = formElBookList.value + ' ' + formElVerseRef.value

			console.log(addTag.selectedOptions[0].dataset.tagId)
			console.log(addTag.value)

			console.log("formElText.value", formElText.value)
			console.log(ref)

			taggedVersesObject.forEach(function (tagObject) {
				if(tagObject.tagID == addTag.selectedOptions[0].dataset.tagId){
					console.log(tagObject);
					let verseTextRef = {
						verseRefKey: ref,
						verseKey: formElText.value,
					}

					// update array
					tagObject.versesArray.push(verseTextRef)
				}
			});


			console.log(taggedVersesObject);
			localStorage.setItem('taggedVersesObjectKey', JSON.stringify(taggedVersesObject));

		}
	})






	let appendEntries = () => {
	}


	console.log(JB)

	JB.tags.forEach(item => { tag(item) })

	function tag(arr){
		console.log(arr.tag_id, arr.tag_name);

		entries(arr.tag_entries)
		console.log("\n");

	}


	function entries(entry){
		entry.forEach(item => {
			console.log(item.text, item.book.name, item.reference);
			console.log("\n");
		})
	}



/*
<div id="tagEntries">

					<div class="tagEntry mb-4">
						<div class="text">The proverbs of Solomon, son of David, king of Israel:</div>
						<span class="book">Proverbs</span>
						<span class="reference">1:1</span>
					</div>
*/





})

