import { Component } from '@angular/core';
import { DataEx1Service } from './data-ex1.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 // template: '<h1>Template with one line</h1>',
  template: `
  			<h1 [class.red]="titleClass">Template with multiple lines</h1>
  			<h1 [ngClass] = "titleClasses">Template with multiple lines</h1>
  			<h1 [style.color] = "true?'green': 'yellow'">Template with multiple lines</h1>
  			<h1 [ngStyle] = "titleStyles">Template with multiple lines</h1>
  			
  			<ul>
  				<li *ngFor="let arr of myArr" >{{arr}}</li>
  			</ul>

  			<ul>
  				<li *ngIf="myArr" >It exists</li>
  			</ul>
  			<ul>
  				<li *ngIf="myArr == 'hey'" >Hey</li>
  			</ul>
  			<ul>
  				<li *ngIf="myArr == 'hey'; else template1" >Yes, I do</li>
  			</ul>
  			<ul>
  				<li *ngIf="myArr == 'hey' then template2; else template1" ></li>
  			</ul>
  			<ng-template #template2>Yes, I do </ng-template>
  			<ng-template #template1>No, I do not</ng-template>
  			<button [disabled] = 'buttonStatus == enabled'>Mybutton</button>
  			<button (mouseenter)="myEvent($event)">Mybutton</button>
 
  			<p>{{someProperty}}</p>
  			<p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>


  `,
  //styleUrls: ['./app.component.css']
  styles: [`
  	h1{
  		text-decoration: underline
  	}
  	p{
  		color:purple;
  	}
  	p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  	.red{
  		color:red;
  	}
  `],
  animations: [
   // Define animations here.
	 trigger('myAwesomeAnimation', [
	        state('small', style({
	            transform: 'scale(1)',
	        })),
	        state('large', style({
	            transform: 'scale(1.2)',
	        })),
	        transition('small <=> large', animate('300ms ease-in', keyframes([
	          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
	          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
	          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
	        ])))
	    ])
  ]
})
export class AppComponent {
  title:string = 'app';
  enabled:string = 'true';
  myArr:string[] = ['Ross','Rachel','Monica'];
  buttonStatus:string = 'enabled';
  myEvent(event){
  	console.log(event);
  }
  titleClasses = {'red': true}
  titleClass = 'red';
  titleStyles = {'color':'orange', 'font-size':'4em'};

  constructor(private dataService: DataEx1Service){}

  someProperty:string = '';
  	ngOnInit(){
  		console.log(this.dataService.cars);
  		this.someProperty = this.dataService.myDataFunctionInServiceEx1();
  	}

  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }


}
