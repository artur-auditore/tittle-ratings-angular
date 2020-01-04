import { Gender } from './Gender';
import { Starring } from './Starring';

export class Title{
    id: number;
    name: String;
    year: number;
    starring: Starring;
    gender: Gender;
}