function ladybugs(array) {
    let fieldSize = array[0];
    let ladybugIndexes = array[1].split(' ').map(Number);
    let commands = array.slice(2);

    let field = new Array(fieldSize).fill(0);

    for (let index of ladybugIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let command of commands) {
        let [startIndex, direction, flyLength] = command.split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
            continue;
        }

        field[startIndex] = 0;

        let currentIndex = startIndex;

        while (true) {
            if (direction === 'right') {
                currentIndex += flyLength;
            } else if (direction === 'left') {
                currentIndex -= flyLength;
            }

            if (currentIndex < 0 || currentIndex >= fieldSize) {
                break;
            }

            if (field[currentIndex] === 0) {
                field[currentIndex] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

// Test cases
ladybugs([3, '0 1', '0 right 1', '2 right 1']); // Output: 0 1 0
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']); // Output: 0 0 0
ladybugs([5, '3', '3 left 2', '1 left -2']); // Output: 0 0 0 1 0
