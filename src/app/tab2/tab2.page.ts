import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Chat} from "../models/chat.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public currentChat: Chat;

  constructor(private router: Router) {
  this.router.events.pipe(filter(e => e instanceof NavigationStart),
    map(()=>{
      const currentState = this.router.getCurrentNavigation();
      return currentState.extras.state;
  })).subscribe((data )=> this.currentChat = data?.data)
    console.log(this.currentChat)
  }

}
