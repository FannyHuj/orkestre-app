import { Evenement } from "./evenement";
import { User } from "./user";

export interface UserEvenement {
    id: number;
    participant:User;
    evenement:Evenement;
}
