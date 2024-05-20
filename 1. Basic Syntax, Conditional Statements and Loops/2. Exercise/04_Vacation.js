function vacation(group, type, day) {

    let groupOfPeople = Number(group);
    let typeOfPeople = type;
    let dayOfTheWeek = day;

    let priceStudents = 0;
    let priceBusiness = 0;
    let priceRegular = 0;
    let discountRate = 0;

    if (typeOfPeople === "Students") {
        if (dayOfTheWeek === "Friday") {
            priceStudents = 8.45;
        } else if (dayOfTheWeek === "Saturday") {
            priceStudents = 9.80;
        } else if (dayOfTheWeek === "Sunday") {
            priceStudents = 10.46;
        }
    } else if (typeOfPeople === "Business") {
        if (dayOfTheWeek === "Friday") {
            priceBusiness = 10.90;
        } else if (dayOfTheWeek === "Saturday") {
            priceBusiness = 15.60;
        } else if (dayOfTheWeek === "Sunday") {
            priceBusiness = 16;
        }
    } else if (typeOfPeople === "Regular") {
        if (dayOfTheWeek === "Friday") {
            priceRegular = 15;
        } else if (dayOfTheWeek === "Saturday") {
            priceRegular = 20;
        } else if (dayOfTheWeek === "Sunday") {
            priceRegular = 22.50;
        }
    }

    if (typeOfPeople === "Students" && groupOfPeople >= 30) {
        discountRate = 0.15;
    } else if (typeOfPeople === "Business" && groupOfPeople >= 100) {
        groupOfPeople -= 10;
    }  else if (typeOfPeople === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        discountRate = 0.05;
    }

    let priceTotal = (priceStudents + priceBusiness + priceRegular)  * groupOfPeople;
    let discount = priceTotal * discountRate;
    let total = priceTotal - discount;

    console.log(`Total price: ${total.toFixed(2)}`);
}