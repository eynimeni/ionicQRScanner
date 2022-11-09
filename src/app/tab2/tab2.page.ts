import { Component } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Chat} from "../models/chat.model";
import {StorageService} from "../services/storage.service";
import {BarcodeScanner} from "@capacitor-community/barcode-scanner";

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

  public testDisplay = false;
  public scan() {
    this.testDisplay = !this.testDisplay;

    const startScan = async () => {
      BarcodeScanner.hideBackground(); // make background of WebView transparent

      const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

      // if the result has content
      if (result.hasContent) {
        console.log(result.content); // log the raw scanned content
        const chatParts = result.content.split(':');
        if(chatParts && chatParts.length === 2){
          console.log(chatParts[1]);
        }
      }
    }
  }



}
