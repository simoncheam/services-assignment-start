export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    // add 2 methods
    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter)
    }

    incrementInactiveToActive() {

        this.inactiveToActiveCounter++;
        console.log('Inactive to Active: ' + this.inactiveToActiveCounter)
    }


}