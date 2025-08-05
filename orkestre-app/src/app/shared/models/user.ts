import { UserRoleEnum } from "./userRoleEnum";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber:string;
  picture: string;
  role: UserRoleEnum;
}
