const prompt = require('prompt-sync')();
const miles_a_day = 33;

function get_interval_days(){
    let date_of_purchase = new Date('2020,1,24');
    let todays_date = new Date();
    return parseInt((todays_date - date_of_purchase)/24/60/60/1000);
}

function miles_left(){
    let total_days = get_interval_days();
    let leased_miles_alloted = total_days * miles_a_day;
    let current_miles_on_car = Number(prompt("How many miles are on the car? : "));
    return leased_miles_alloted - current_miles_on_car;
}

function results(){
    result = miles_left();
    if(result === 0){
        return 'You are right on the Mark with 0 Miles left be careful!';
    } else if (result > 0){
        return `You are doing great, you have ${result} miles saved up!`;
    } else {
        return `You aren't doing that good you are ${result} over your miles!`;
    }
}

console.log(results());


