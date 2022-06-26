import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-non-auth',
  templateUrl: './non-auth.component.html',
  styleUrls: ['./non-auth.component.css']
})
export class NonAuthComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
