import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    email: ''
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''
    // }
  }
  // Grabbing users here to use in html
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  // currentClasses = {};
  // currentStyles = {};

  constructor() { }

  ngOnInit(): void {

    // Pretend we are fetching from database for a few seconds to make it more real
    // setTimeout(() => {
    this.users = [
      {
        firstName: 'Mike',
        lastName: 'Ferrari',
        email: 'ferrari@gmail.com',
        // age: 26,
        // address: {
        //   street: '234 main st',
        //   city: 'orlando',
        //   state: 'fl'
        // },
        // image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kait',
        lastName: 'VeeVee',
        email: 'veevee@gmail.com',
        // age: 22,
        // address: {
        //   street: '455 donald st',
        //   city: 'boston',
        //   state: 'ma'
        // },
        // image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        // balance: 142,
        registered: new Date('03/22/2020 08:39:00'),
        hide: true
      },
      {
        firstName: 'Bobbie',
        lastName: 'Fili',
        email: 'fili@gmail.com',
        // age: 50,
        // address: {
        //   street: '231 sander st',
        //   city: 'newyork',
        //   state: 'ny'
        // },
        // image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        // balance: 20,
        registered: new Date('04/01/2020 08:33:00'),
        hide: true
      }
    ];

    this.loaded = true;
    // }, 2000)

    // Life cycle method, ran on init like a constructor 
    console.log('init...');
    // this.users = [
    //   {
    //     firstName: 'Mike',
    //     lastName: 'Ferrari',
    //     age: 26,
    //     address: {
    //        street: '234 main st',
    //        city: 'orlando',
    //        state: 'fl'
    //     }
    //   },
    //   {
    //   firstName: 'Kait',
    //   lastName: 'VeeVee',
    //   age: 22,
    //   address: {
    //      street: '455 donald st',
    //      city: 'boston',
    //      state: 'ma'
    //   }
    //   },
    //   {
    //   firstName: 'Bobbie',
    //   lastName: 'Fili',
    //   age: 50,
    //   address: {
    //     street: '231 sander st',
    //     city: 'newyork',
    //     state: 'ny'
    //   }
    //   }
    // ];
    // Swap the logic so it doesnt show the age and address 
    // this.showExtended = true;

    // this.addUser(
    //   {
    //     firstName: 'Tony',
    //     lastName: 'Montana'
    //     // Lets make these optional, look at users.ts in models 
    //     // age: 21,
    //     // address: {
    //     //   street: '33 sander st',
    //     //   city: 'bronx',
    //     //   state: 'ny'
    //     // }
    //   }
    // );
    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }


  // addUser() {

  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   // push to front of array instead and grab from user
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //     // age: null,
  //     // address: {
  //     //   street: '',
  //     //   city: '',
  //     //   state: ''
  //     // }
  //   }
  // }

  // fireEvent(e) {
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }

  onSumbit(e) {
    console.log(123);
    e.preventDefault();
  }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }
  // toggleHide(user: User) {
  //   // Be able to toggle back and forth
  //   user.hide = !user.hide;
  // }









}
