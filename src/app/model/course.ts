import { User } from './user';
import { Lesson } from "./lesson";

export type Course = {
  id?:number;
  name?:string;
  lessonList?:Lesson[];
  description?:string;
  user?:User;
}
