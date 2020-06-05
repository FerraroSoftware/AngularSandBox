import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Grabbing users here to use in html
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;


  constructor() { }

  ngOnInit(): void {

    // Pretend we are fetching from database for a few seconds to make it more real
    // setTimeout(() => {
      this.users = [
        {
          firstName: 'Mike',
          lastName: 'Ferrari',
          age: 26,
          address: {
             street: '234 main st',
             city: 'orlando',
             state: 'fl'
          }
        },
        {
        firstName: 'Kait',
        lastName: 'VeeVee',
        age: 22,
        address: {
           street: '455 donald st',
           city: 'boston',
           state: 'ma'
        }
        },
        {
        firstName: 'Bobbie',
        lastName: 'Fili',
        age: 50,
        address: {
          street: '231 sander st',
          city: 'newyork',
          state: 'ny'
        }
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
    this.showExtended = true;

    this.addUser(
      {
        firstName: 'Tony',
        lastName: 'Montana'
        // Lets make these optional, look at users.ts in models 
        // age: 21,
        // address: {
        //   street: '33 sander st',
        //   city: 'bronx',
        //   state: 'ny'
        // }
      }
    );
  }


  addUser(user: User) {
    this.users.push(user);
  }











}
