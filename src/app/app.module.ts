import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderContactsComponent } from './header-contacts/header-contacts.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { VideoBgComponent } from './video-bg/video-bg.component';
import { SectionBgComponent } from './section-bg/section-bg.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { IvyCarouselModule } from "angular-responsive-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContactsComponent,
    HeaderMenuComponent,
    HeaderNavComponent,
    VideoBgComponent,
    SectionBgComponent,
    NewItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [IvyCarouselModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
