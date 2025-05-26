import { Component, OnInit, HostListener } from '@angular/core';
import { AppTranslateService, Language } from './../../services/app-translate.service';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  public itIsGeorgianVersion = false;

  isOpenFirst: boolean = false;
  isOpenSecond: boolean = false;
  isOpenThird: boolean = false;

  dropDown() {
    this.isOpenFirst = !this.isOpenFirst;
    if (this.isOpenFirst === true) {
      this.isOpenSecond = false;
      this.isOpenThird = false;
    }
  }

  dropDownSecond() {
    this.isOpenSecond = !this.isOpenSecond;
    if (this.isOpenSecond === true) {
      this.isOpenFirst = false;
      this.isOpenThird = false;
    }
  }

  dropDownThird() {
    this.isOpenThird = !this.isOpenThird;
    if (this.isOpenThird === true) {
      this.isOpenFirst = false;
      this.isOpenSecond = false;
    }
  }

  //Share
  private readonly shareUrl = 'https://www.borjomisummit.ge/'; // შენი ვების ლინკი აქ ჩასვი

  shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl)}`;
    window.open(url, 'facebook-share', 'width=600,height=400');
  }

  shareOnTwitter() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.shareUrl)}`;
    window.open(url, 'twitter-share', 'width=600,height=300');
  }

  //translate, vanilla
  constructor(private appTranslateService: AppTranslateService, public popupService: PopupService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadLanguage(lang: string) {
    this.appTranslateService.changeLanguage(lang as Language);
  }

  getAgendaLink(): string {
    const currentLanguage = this.appTranslateService.language;

    if (currentLanguage === Language.KA) {
      return 'https://www.borjomisummit.ge/test/agenda/agendageo.pdf';
    } else {
      return 'https://www.borjomisummit.ge/test/agenda/agenda.pdf';
    }
  }

  //vanilla
  isJeffMorganPopupOpen = false;
  isJimBarborakPopupOpen = false;
  isMichaelFinleyPopupOpen = false;
  isMichaelSuttonPopupOpen = false;
  isElizabethMessudPopupOpen = false;
  isErikIllesPopupOpen = false;
  isErinHicksPopupOpen = false;
  isDavitKobakhidzePopupOpen = false;
  isNinoAntadzePopupOpen = false;
  isAnzorGogotidzePopupOpen = false;
  isKarloAmirgulashviliPopupOpen = false;
  isMakaBitsadzePopupOpen = false;
  isVanoVashakmadzePopupOpen = false;
  isPaataShanshiashviliPopupOpen = false;
  isProfPopupOpen = false;
  isOlenaSlobodianPopupOpen = false;
  isMustafaGonanPopupOpen = false;
  isdataKobakhidzePopupOpen = false;
  isDuncanGrossartPopupOpen = false;
  isZurabGurgenidzePopupOpen = false;
  isTobyAykroydPopupOpen = false;
  isJessicaGrahamPopupOpen = false;
  isOleksandrKuseliukPopupOpen = false;
  isStavrevskaPanajotovaPopupOpen = false;
  isAnastasiaDrapaliukPopupOpen = false;
  isFedirHamorPopupOpen = false;
  isFirthGriffithPopupOpen = false;
  isPaulStephensPopupOpen = false;
  isNatoSultanishviliPopupOpen = false;
  isTamarKhakhiashviliPopupOpen = false;
  isJensWunderlichPopupOpen = false;
  isOpenSliderPopupOpen = false;
  isOpenSliderSecondPopupOpen = false;
  isOpenSliderThirdPopupOpen = false;
  isOpenSliderFourthPopupOpen = false;
  isOpenSliderFivethPopupOpen = false;

  openPopup(popupType: string) {
    if (popupType === 'JeffMorgan') {
      this.isJeffMorganPopupOpen = true;
    } else if (popupType === 'JeffMorgan') {
      this.isJeffMorganPopupOpen = true;
    } else if (popupType === 'JimBarborak') {
      this.isJimBarborakPopupOpen = true;
    } else if (popupType === 'MichaelFinley') {
      this.isMichaelFinleyPopupOpen = true;
    } else if (popupType === 'MichaelSutton') {
      this.isMichaelSuttonPopupOpen = true;
    } else if (popupType === 'ElizabethMessud') {
      this.isElizabethMessudPopupOpen = true;
    } else if (popupType === 'ErikIlles') {
      this.isErikIllesPopupOpen = true;
    } else if (popupType === 'ErinHicks') {
      this.isErinHicksPopupOpen = true;
    } else if (popupType === 'DavitKobakhidze') {
      this.isDavitKobakhidzePopupOpen = true;
    } else if (popupType === 'NinoAntadze') {
      this.isNinoAntadzePopupOpen = true;
    } else if (popupType === 'AnzorGogotidze') {
      this.isAnzorGogotidzePopupOpen = true;
    } else if (popupType === 'KarloAmirgulashvili') {
      this.isKarloAmirgulashviliPopupOpen = true;
    } else if (popupType === 'MakaBitsadze') {
      this.isMakaBitsadzePopupOpen = true;
    } else if (popupType === 'VanoVashakmadze') {
      this.isVanoVashakmadzePopupOpen = true;
    } else if (popupType === 'PaataShanshiashvili') {
      this.isPaataShanshiashviliPopupOpen = true;
    } else if (popupType === 'Prof') {
      this.isProfPopupOpen = true;
    } else if (popupType === 'OlenaSlobodian') {
      this.isOlenaSlobodianPopupOpen = true;
    } else if (popupType === 'MustafaGonan') {
      this.isMustafaGonanPopupOpen = true;
    } else if (popupType === 'dataKobakhidze') {
      this.isdataKobakhidzePopupOpen = true;
    } else if (popupType === 'DuncanGrossart') {
      this.isDuncanGrossartPopupOpen = true;
    } else if (popupType === 'ZurabGurgenidze') {
      this.isZurabGurgenidzePopupOpen = true;
    } else if (popupType === 'TobyAykroyd') {
      this.isTobyAykroydPopupOpen = true;
    } else if (popupType === 'JessicaGraham') {
      this.isJessicaGrahamPopupOpen = true;
    } else if (popupType === 'OleksandrKuseliuk') {
      this.isOleksandrKuseliukPopupOpen = true;
    } else if (popupType === 'StavrevskaPanajotova') {
      this.isStavrevskaPanajotovaPopupOpen = true;
    } else if (popupType === 'AnastasiaDrapaliuk') {
      this.isAnastasiaDrapaliukPopupOpen = true;
    } else if (popupType === 'FedirHamor') {
      this.isFedirHamorPopupOpen = true;
    } else if (popupType === 'FirthGriffith') {
      this.isFirthGriffithPopupOpen = true;
    } else if (popupType === 'PaulStephens') {
      this.isPaulStephensPopupOpen = true;
    } else if (popupType === 'NatoSultanishvili') {
      this.isNatoSultanishviliPopupOpen = true;
    } else if (popupType === 'TamarKhakhiashvili') {
      this.isTamarKhakhiashviliPopupOpen = true;
    } else if (popupType === 'JensWunderlich') {
      this.isJensWunderlichPopupOpen = true;
    }
    else if (popupType === 'openSlider') {
      this.isOpenSliderPopupOpen = true;
    }
    else if (popupType === 'openSliderSecond') {
      this.isOpenSliderSecondPopupOpen = true;
    }
    else if (popupType === 'openSliderThird') {
      this.isOpenSliderThirdPopupOpen = true;
    }
    else if (popupType === 'openSliderFourth') {
      this.isOpenSliderFourthPopupOpen = true;
    }
    else if (popupType === 'openSliderFiveth') {
      this.isOpenSliderFivethPopupOpen = true;
    }

  }

  closePopup(popupType: string) {
    if (popupType === 'JeffMorgan') {
      this.isJeffMorganPopupOpen = false;
    } else if (popupType === 'JeffMorgan') {
      this.isJeffMorganPopupOpen = false;
    } else if (popupType === 'JimBarborak') {
      this.isJimBarborakPopupOpen = false;
    } else if (popupType === 'MichaelFinley') {
      this.isMichaelFinleyPopupOpen = false;
    } else if (popupType === 'MichaelSutton') {
      this.isMichaelSuttonPopupOpen = false;
    } else if (popupType === 'ElizabethMessud') {
      this.isElizabethMessudPopupOpen = false;
    } else if (popupType === 'ErikIlles') {
      this.isErikIllesPopupOpen = false;
    } else if (popupType === 'ErinHicks') {
      this.isErinHicksPopupOpen = false;
    } else if (popupType === 'DavitKobakhidze') {
      this.isDavitKobakhidzePopupOpen = false;
    } else if (popupType === 'NinoAntadze') {
      this.isNinoAntadzePopupOpen = false;
    } else if (popupType === 'AnzorGogotidze') {
      this.isAnzorGogotidzePopupOpen = false;
    } else if (popupType === 'KarloAmirgulashvili') {
      this.isKarloAmirgulashviliPopupOpen = false;
    } else if (popupType === 'MakaBitsadze') {
      this.isMakaBitsadzePopupOpen = false;
    } else if (popupType === 'VanoVashakmadze') {
      this.isVanoVashakmadzePopupOpen = false;
    } else if (popupType === 'PaataShanshiashvili') {
      this.isPaataShanshiashviliPopupOpen = false;
    } else if (popupType === 'Prof') {
      this.isProfPopupOpen = false;
    } else if (popupType === 'OlenaSlobodian') {
      this.isOlenaSlobodianPopupOpen = false;
    } else if (popupType === 'MustafaGonan') {
      this.isMustafaGonanPopupOpen = false;
    } else if (popupType === 'dataKobakhidze') {
      this.isdataKobakhidzePopupOpen = false;
    } else if (popupType === 'DuncanGrossart') {
      this.isDuncanGrossartPopupOpen = false;
    } else if (popupType === 'ZurabGurgenidze') {
      this.isZurabGurgenidzePopupOpen = false;
    } else if (popupType === 'TobyAykroyd') {
      this.isTobyAykroydPopupOpen = false;
    } else if (popupType === 'JessicaGraham') {
      this.isJessicaGrahamPopupOpen = false;
    } else if (popupType === 'OleksandrKuseliuk') {
      this.isOleksandrKuseliukPopupOpen = false;
    } else if (popupType === 'StavrevskaPanajotova') {
      this.isStavrevskaPanajotovaPopupOpen = false;
    } else if (popupType === 'AnastasiaDrapaliuk') {
      this.isAnastasiaDrapaliukPopupOpen = false;
    } else if (popupType === 'FedirHamor') {
      this.isFedirHamorPopupOpen = false;
    } else if (popupType === 'FirthGriffith') {
      this.isFirthGriffithPopupOpen = false;
    } else if (popupType === 'PaulStephens') {
      this.isPaulStephensPopupOpen = false;
    } else if (popupType === 'NatoSultanishvili') {
      this.isNatoSultanishviliPopupOpen = false;
    } else if (popupType === 'TamarKhakhiashvili') {
      this.isTamarKhakhiashviliPopupOpen = false;
    } else if (popupType === 'JensWunderlich') {
      this.isJensWunderlichPopupOpen = false;
    }
    else if (popupType === 'openSlider') {
      this.isOpenSliderPopupOpen = false;
    }
    else if (popupType === 'openSliderSecond') {
      this.isOpenSliderSecondPopupOpen = false;
    }
    else if (popupType === 'openSliderThird') {
      this.isOpenSliderThirdPopupOpen = false;
    }
    else if (popupType === 'openSliderFourth') {
      this.isOpenSliderFourthPopupOpen = false;
    }
    else if (popupType === 'openSliderFiveth') {
      this.isOpenSliderFivethPopupOpen = false;
    }

  }


  //scrollUp button
  showScrollButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (window.scrollY > 20) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}


