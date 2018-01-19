//import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  

  
  
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() { }
  //Saving Data
btnclk1(){


}

  btnclk = function () {
    if (this.id)
    {
        alert("Enter ID");
    }
    else if (this.name)
    {
        alert("Enter Name");
    }
    else if (this.desg) {
        alert("Enter Designation");
    }
    else {
    this.emparr.push({ 'arr_id': this.id,'arr_name': this.name, 'arr_desg': this.desg });
    this.id = '';
    this.name = '';
    this.desg = '';
    }

};
//Editing Data
var='key';
edit = function (emp, indx) {
    //key = indx;                
    this.id = emp.arr_id;
    this.name = emp.arr_name;
    this.desg = emp.arr_desg;
};
//Updating Data
btnupd = function (id, name, desg) {
  this.emparr['key'].arr_id = id;
 this.emparr['key'].arr_name = name;
 this.emparr['key'].arr_desg = desg;
  this.id = '';
  this.name = '';
  this.desg = '';
};
//delete
del = function (id) {
  this.emparr.splice(id, 1);
};
//   ngOnInit() {  
//     this.items = [];
//  this.addItem = function (item) {  //to add item
//   this.items.push(item);
//  this.item = {};
//   },
//   removeItem(i) {
//  this.removeItem = function (index) {   //to remove item
//   console.log(index);
//   this.items.splice(index, 1)
//   },
//   addItem() {
//  this.editItem = function (index) { //to edit item
// this.editing = this.items.indexOf(index); 
//  }}
    
//   }

// }

// ngOnInit() {
//   this.itemCount = this.goals.length;
//   this._data.goal.subscribe(res => this.goals = res);
//   this._data.changeGoal(this.goals);
// }

// addItem() {
//   this.goals.push(this.goalText);
//   this.goalText = '';
//   this.itemCount = this.goals.length;
//   this._data.changeGoal(this.goals);
// }

// removeItem(i) {
//   this.goals.splice(i, 1);
//   this._data.changeGoal(this.goals);
// }
}