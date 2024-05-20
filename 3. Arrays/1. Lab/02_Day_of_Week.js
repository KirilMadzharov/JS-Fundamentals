function dayOftheWeek(day) {
    let days =
        [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        ]

    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log("Invalid day!")
    }
}

dayOftheWeek(3);
dayOftheWeek(6);
dayOftheWeek(11);



// function dayOftheWeek(day) {
//     let days =
//         {
//             0: "Monday",
//             1: "Tuesday",
//             2: "Wednesday",
//             3: "Thursday",
//             4: "Friday",
//             5: "Saturday",
//             6: "Sunday",
//         }
//
//     if (day >= 1 && day <= 7) {
//         console.log(days[day - 1]);
//     } else {
//         console.log("Invalid day!")
//     }
// }
//
// dayOftheWeek(3);
// dayOftheWeek(6);
// dayOftheWeek(11);