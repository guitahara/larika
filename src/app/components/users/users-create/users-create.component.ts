import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { UsersService } from 'app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  user: User = new User();
  
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.usersService.post(this.user).subscribe();
    this.router.navigate(['/users'])
  }

}
