import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { } 

  // Method to set an object to local storage
  setObject(key: string, value: any):Observable<boolean> {
    try{
      const jsonString = JSON.stringify(value);    
      localStorage.setItem(key, jsonString);
      return of(true);
    }
    catch(error){
      console.error('Error saving to localStorage', error);
      return of(false);
    }      
    
  }

  // Method to get an object from local storage
  getObject(key: string): any {
    const jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : null;
  }

  // Method to remove an item from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Method to clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}
