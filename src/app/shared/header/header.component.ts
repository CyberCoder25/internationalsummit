import { Component } from '@angular/core';
import { AppTranslateService, Language } from './../../services/app-translate.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visible: boolean = true;
  notVisible: boolean = false;

  constructor(private appTranslateService: AppTranslateService) {
  }

  loadLanguage(lang: string) {
    this.visible = !this.visible;
    this.notVisible = !this.notVisible;
    this.appTranslateService.changeLanguage(lang as Language);
  }

  burgerMenuOpen: boolean = false;

  //burgermenu
  toggleBurgerMenu() {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu && window.bootstrap) {
      if (!this.burgerMenuOpen) {
        const bsCollapse = new window.bootstrap.Collapse(menu);
        bsCollapse.show();
        this.burgerMenuOpen = true;
      }
    }
  }

  onBurgerMenuClickOutside() {
    this.closeBurgerMenu();
  }

  onLinkClick() {
    this.closeBurgerMenu();
  }


  closeBurgerMenu() {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu && window.bootstrap) {
      if (this.burgerMenuOpen) {
        const bsCollapse = new window.bootstrap.Collapse(menu);
        bsCollapse.hide();
        this.burgerMenuOpen = false;
      }
    }
  }
}
