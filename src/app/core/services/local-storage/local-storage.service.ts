import { Injectable } from '@angular/core';
import { SessionI } from '../../interfaces/session.interface';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor() {}

  save(data: SessionI): void {
    const parsed = JSON.stringify(data);
    console.log({ parsed });    
    localStorage.setItem('session', parsed);
  }

  retrieve(): SessionI | null {
    const string = localStorage.getItem('session');
    if (string) {
      return JSON.parse(string);
    }
    return null;
  }

}
