function towersOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
        return;
    }

    towersOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
    towersOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3; 
// const sourceRod = 'A';
// const auxiliaryRod = 'B';
// const destinationRod = 'C';

towersOfHanoi(numDisks, 'A', 'B', 'C');

