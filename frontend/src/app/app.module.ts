import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_SANITIZER, TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from '@modules/header/header.module';
import { of } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HeaderModule
  ],
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
