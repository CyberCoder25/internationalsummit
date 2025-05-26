import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export enum Language {
  EN = "en",
  KA = "ka"
}

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {
  private readonly language$ = new BehaviorSubject<Language>(Language.KA);
  public readonly languageStream$ = this.language$.asObservable();

  get language() {
    return this.language$.value;
  }

  set language(language: Language) {
    this.language$.next(language);
  }

  constructor(private translate: TranslateService, private title: Title) {
    this.init();
  }

  private init() {
    const language = localStorage.getItem("language") || Language.KA;
    this.changeLanguage(language as Language)
  }

  public isLanguageAccaptable(language: Language) {
    return language === Language.EN || language === Language.KA
  }

  public changeLanguage(language: Language) {
    if (!this.isLanguageAccaptable(language)) {
      language = Language.KA;
    }
    this.translate.use(language);
    localStorage.setItem("language", language);
    this.language = language;
    setTimeout(() => {
      this.title.setTitle(this.getTranslatedValue("title"));

    }, 500);
  }
  public getTranslatedValue(key: string) {
    return this.translate.instant(key);
  }
}
