function myLeap(year){
    if(Year%4===0){
        if(Year%100===0){
            if(Year%400===0){
                return"Leap year";


            }
            else{
                return"not a leap year";
            }
        }
        else{
            return"leap year";

        }
    }
    else{
    return"Not a leap Year";

    }
}

var LPYR = myLeap(3021)