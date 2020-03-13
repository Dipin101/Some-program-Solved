for(var i=0;i<5;i++){
	for(var j=0;j<=i;j++){
		document.write("*");
	}
	document.write("<br/>");
}

for(var i=5;i>=0;i--){
	for(var j=0;j>i;j--){
		document.write("*");
	}
	document.write("<br/>");
}

//spaced pattern
 var n = n;
    for (var i = 1; i <= n; i++) {
        var whiteSpace = [];
        var stairSpace = [];
        for (var j = 0; j < n - i; j++) {
            whiteSpace.push(' ');
        };
        for (var k = 0; k < i; k++) {
            stairSpace.push('#');
        };
        whiteSpace = whiteSpace.join('');
        stairSpace = stairSpace.join('');
        console.log(whiteSpace + stairSpace);
    };