
function roman_to_Int(str1) {
    if(str1 == null)
        return -1;

    var num = char_to_int(str1.charAt(0));
    var pre, curr;
    document.write("i am here 1");
    document.write("<br>");
    for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        document.write(str1.charAt(i));
        document.write("<br>");
        pre = char_to_int(str1.charAt(i-1));
        document.write(str1.charAt(i-1));
        document.write("<br>");

        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }
    document.write("The Roman Numeral is " + str1 + " and the integer value is " +num)
    document.write("<br>");
    //return num;
}

function char_to_int(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}
