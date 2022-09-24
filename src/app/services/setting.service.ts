import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public linktheme=  document.getElementById('theme')

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css'
    this.linktheme?.setAttribute("href",url)

    }
}
