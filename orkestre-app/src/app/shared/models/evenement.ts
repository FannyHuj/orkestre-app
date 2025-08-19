import { EvenementCategoryEnum } from "./evenementCategoryEnum";
import { User } from "./user";

export interface Evenement {
  id: number;
  title: string;
  description: string;
  evenementDate: Date;
  evenementTime:Date;
  location: string;
  category: EvenementCategoryEnum;
  maxCapacity: number;
  organizer: User;
  price:number;
  countParticipants: number;
  remainingCapacity: number;
  isCompleted: boolean;
}
