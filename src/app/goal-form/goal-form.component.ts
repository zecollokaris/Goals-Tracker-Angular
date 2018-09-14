import {Goal} from '../goal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

    newGoal=new Goal(0,"","",new Date());

  constructor() { }

  ngOnInit() {
  }

}
