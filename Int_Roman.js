/*

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. */


function integer_to_roman(num) {
    if (typeof num !== 'number')
        return false;

    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    document.write ("Input number " + num + " is "  + Array(+digits.join("") + 1).join("M") + roman_num);
    document.write("<br>");
    //return Array(+digits.join("") + 1).join("M") + roman_num;
}
