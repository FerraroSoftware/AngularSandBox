import  { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
   
   user: User 
   // {
      // MOVE THIS TO INTERFACE
      // firstName: string,
      // lastName: string,
      // age: number,
      // address: {
      //    street: string,
      //    city: string,
      //    state: string
      // }
   // }

   constructor() { 
      // All of this should really be done in the ngOnInit for best practice 
      // this.user = {
      //    firstName: 'Mike',
      //    lastName: 'Ferrari',
      //    age: 26,
      //    address: {
      //       street: '234 main st',
      //       city: 'orlando',
      //       state: 'fl'
      //    }
      // }

   }

   ngOnInit() { 
      // Ajax and services calls go here
      this.user = {
         firstName: 'Mike',
         lastName: 'Ferrari',
         age: 26,
         address: {
            street: '234 main st',
            city: 'orlando',
            state: 'fl'
         }
      }
   }

   // Properties 
   // firstName = 'Mike';
   // lastName = 'Ferrari';
   // age = 26;
   // address = {
   //    street: '50 main st',
   //    city: 'orlando',
   //    state: 'FL'
   // }
   // firstName: string;
   // lastName: string;
   // age: number;
   // address;
   
   // foo: any;
   // hasKids: boolean;
   // numberArray: number[];
   // stringArray: string[];
   // anyArray: any[];
   // myTuple: [string, number, boolean];
   // unusable: void;
   // u: undefined;
   // n: null;


   // constructor() { 
      // this.firstName = 'Mikey';
      // this.lastName = 'Ferrari';
      // this.age = 26;
      // this.address = {
      //    street: '50 main st',
      //    city: 'orlando',
      //    state: 'FL'
      // }

      // this.foo = true;
      // this.hasKids = false;
      // this.numberArray = [1,2,3];
      // this.stringArray = ['helo', 'world'];
      // this.anyArray = ['hey', 5, true];
      // this.myTuple = ['hey', 1, false];
      // this.unusable = undefined;
      // this.u = undefined;
      // this.n = null;
      // console.log(this.addNumbers(2,3)); 

      // this.sayHello();
      // console.log(this.age);
      // this.hasBirthday();
      // console.log(this.age);
   // }

   // ngOnInit() { 
   //    // Ajax and services calls go here
   // }

   // sayHello(){
   //    console.log(`Hello ${this.firstName}`);
   // }

   // hasBirthday() {
   //    this.age += 1;
   // }

   // showAge(){
   //    return this.age;
   // }

   // addNumbers(num1: number, num2:number):number {
   //    return num1 + num2
   // }
}

// MOVING THIS TO MODELS/USER.TS so we dont have to repeat 
// interface User {
//    firstName: string,
//    lastName: string,
//    age: number,
//    address: {
//       street: string,
//       city: string,
//       state: string
//    }
// } 