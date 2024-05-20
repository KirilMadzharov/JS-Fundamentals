function login(input) {
    let username = input[0];
    let attempts = 0;


    for (let i = 1; i < input.length; i++) {
        attempts ++;

        if (input[i].split("").reverse().join("") === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (attempts >= 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }
}