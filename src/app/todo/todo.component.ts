import { Component } from '@angular/core';
import { TodoItem } from "../todoitem";
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  displayAll: boolean = false;
  inputText: string="";

  constructor() { 
    this.model.items = this.getItemsFromLS();
  }

  model = new Model();

  getName() {
    return this.model.name;
  }

  addItem() {
    if (this.inputText != "") { 
      let data ={ description: this.inputText, action: false }
      this.model.items.push(data) 
      let items = this.getItemsFromLS();
      items.push(data)
      localStorage.setItem("items",JSON.stringify(items));
      this.inputText= "";
    }
    else {
      alert("bilgi giriniz.")
    }
  }

  onActionChanged(item:TodoItem){
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(i => {
      if(i.description == item.description){
        i.action = item.action;
      }
    });

    localStorage.setItem("items",JSON.stringify(items));
  }

  getItemsFromLS(){
    let items: TodoItem[]=[];

    let value = localStorage.getItem("items");

    if(value!=null){
      items=JSON.parse(value);
    }

    return items;
  }
  
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action)
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  getBtnClasses(){
   return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-danger': this.inputText.length>0

    }
  }

}
