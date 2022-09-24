import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  public linktheme=  document.getElementById('theme')

  constructor() { }

  ngOnInit(): void {
    this.checkCurrentTheme()
  }
  changeTheme(theme:string){
   const url = `./assets/css/colors/${theme}.css`


   this.linktheme?.setAttribute("href",url)

  localStorage.setItem('theme',url)

  }
  checkCurrentTheme(){
    const link =document.querySelectorAll('.selector')
    link.forEach(elem =>{
     elem.classList.remove('working')
    })
  }
}
