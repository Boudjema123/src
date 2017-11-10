import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService} from '../data.service';
import { ComposantsComponent} from 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string='Add item';
  goalText: string='my first life goal';
  goals=[];
  constructor(private _data : DataService) { }

  ngOnInit() {
    this.itemCount=this.goals.length;
    this._data.goal.subscribe(res => this.goals=res);
    this._data.changeGoal(this.goals);
   }
   addItem(){
     this.goals.push(this.goalText);
     this.goalText='';
     this.itemCount=this.goals.length;
     this._data.changeGoal(this.goals);
     
   }
}