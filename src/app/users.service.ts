import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    activeUsers = ["Max", "Anna"];
    inactiveUsers = ["Chris", "Manu"];

    constructor(private counterService: CounterService) { }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        // removes 1 element from inactive users array
        this.inactiveUsers.splice(id, 1);

        //! set to Active
        this.counterService.incrementInactiveToActive();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        // removes 1 element from active users array
        this.activeUsers.splice(id, 1);

        this.counterService.incrementActiveToInactive();
    }
}
