function solve(commands) {
    // Parse the initial array from the first element of commands
    let arr = commands.shift().split(' ').map(Number);

    // Loop through the remaining commands and process them
    for (let command of commands) {
        let [action, param1, param2] = command.split(' ');

        param1 = Number(param1);
        param2 = Number(param2);

        switch (action) {
            case 'Add':
                arr.push(param1);
                break;
            case 'Remove':
                arr = arr.filter(num => num !== param1);
                break;
            case 'RemoveAt':
                arr.splice(param1, 1);
                break;
            case 'Insert':
                arr.splice(param2, 0, param1);
                break;
        }
    }

    // Print the manipulated array
    console.log(arr.join(' '));
}

// Example usage:
solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
