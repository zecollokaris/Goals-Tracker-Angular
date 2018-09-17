import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'
import { GoalService } from '../goals/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    goals: Goal[];
  constructor(goalService: GoalService) {
  this.goals = goalService.getGoals()
    }



    toogleDetails(index){
        this.goals[index].showDescription=!this.goals[index].showDescription;
    }
    
    

    deleteGoal(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if (toDelete) {
                this.goals.splice(index, 1)
            }
        }
    }

    addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)
    }

  ngOnInit() {
  }
 
}

 