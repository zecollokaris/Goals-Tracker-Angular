import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'
import { GoalService } from '../goals/goal.service';
import { AlertsService } from '../alert-service/alerts.service'
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote'
import { QuoteRequestService } from '../quote-http/quote-request.service'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService,QuoteRequestService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
    http:HttpClient;
    goals:Goal[];

    quote:Quote;

    toogleDetails(index){
        this.goals[index].showDescription=!this.goals[index].showDescription;
    }
    
    

    deleteGoal(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if (toDelete){
                 this.goals.splice(index, 1)
                 this.alertService.alertMe("Goal has been deleted")
            }
        }
    }
    
    alertService: AlertsService;

    addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)
    }

    constructor(goalService: GoalService, alertService: AlertsService, private quoteService: QuoteRequestService,http:HttpClient) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;//make the service available to the class.
    this.quote=new Quote("","");
    this.http=http;
    }
 
    ngOnInit() {

        interface ApiResponse {
            quote: string;
            author: string
        }

        this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data=>{
            this.quote= new Quote(data.quote,data.author)
            // Successful API request.
        }, err => {
            this.quote = new Quote("Never, never, never give up.", "winston churchill")
            console.log("Error occured ")
        })
    }

}