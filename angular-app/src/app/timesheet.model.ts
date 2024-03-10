import { Status } from "./status.model";
import { User } from "./user.model";

export class Timesheet {
    id!: number;
    project!: string;
    task!: string;
    from!: string;
    to!: string;
    user!: User;
    status!: Status;

}