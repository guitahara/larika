import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  loading: Boolean = false;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false
    });
  }

}
