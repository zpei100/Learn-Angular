import { Component } from '@angular/core';
import { User }  from '../models/User'

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html'
})

export class UserComponent {

  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 main street',
        city: 'Boston city',
        state: 'MA'
      }
    }
  }
}