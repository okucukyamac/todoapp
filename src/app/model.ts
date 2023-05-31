import {TodoItem} from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name="Oğuz";
        this.items=[ {description:"kahvalt",action:true},
        {description:"spor",action:true},
        {description:"alışveriş",action:false}]
    }
}