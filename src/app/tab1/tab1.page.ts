import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Chat} from "../models/chat.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public chats: Array<Chat> = [];

  constructor(private storageService: StorageService, private router: Router) {
    this.loadChats();
  }

  private async loadChats(): Promise<void> {
    this.chats = await this.storageService.get();
  }

  public navigateTo(chatId: string): void {
    this.router.navigate(['/tabs/tab2'], {queryParams: { id : chatId}
    })
  }

}
