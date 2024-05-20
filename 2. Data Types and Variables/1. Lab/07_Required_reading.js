function reading(numOfPages, pagesPerHour, days) {
    let totalReadTime = numOfPages / pagesPerHour;
    let hoursRequired = totalReadTime/days;

    console.log(hoursRequired);
}

reading(212, 20 , 2);
reading(432, 15 , 4);
