import { Injectable } from '@angular/core';
import {Chat} from "../models/chat.model";
import {Storage} from "@ionic/storage-angular"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private deviceStorage: Storage;

  private storageKey = 'chats'

  constructor(private storage: Storage) {
  }

  public save(chats: Array<Chat>): Promise<void> {
    return this.storage.set(this.storageKey,chats);
  }

  public get(): Promise<Array<Chat>> {
    return this.deviceStorage.get(this.storageKey);
  }

  public async init() {
    this.deviceStorage = await this.storage.create();
    const dummyChat: Chat = {
      id: 'id'
      , messages:
        [{text: "test",
          user: {id:"user", name: "John/Jane Doe"},
          timestamp: new Date()}
        ]}
    await this.save([dummyChat])
  }
}
