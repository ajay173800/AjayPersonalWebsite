import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from './carousel/carousel.module';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    GalleryComponent,
    ProjectComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
