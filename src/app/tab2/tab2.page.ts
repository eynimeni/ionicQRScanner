import { Component } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Chat} from "../models/chat.model";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public currentChat: Chat;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storageService: StorageService) {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(async () => {
      const chatId = this.activatedRoute.snapshot.queryParams.id;
      if (chatId) {
        const availableChats = await this.storageService.get();
        this.currentChat = availableChats.find(p => p.id === chatId);
      }
    });
  }



}
