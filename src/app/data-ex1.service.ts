import { Injectable } from '@angular/core';

@Injectable()
export class DataEx1Service {

  constructor() { }

  cars = ['Ford', 'Chevrolet', 'Buick'];

  myDataFunctionInServiceEx1(){
  	return 'This is my data form service 1!';
  }
}
