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
import { PlaylistComponent } from './components/playlist/playlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselComponent } from './carousel/carousel.component';
// import { CarouselModule } from './carousel/carousel.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { Carousel2Module } from './carousel2/carousel2.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    GalleryComponent,
    ProjectComponent,
    AboutComponent,
    ExperienceComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule, 
    MatProgressBarModule,
    MatTableModule,
    MatSliderModule,
    Carousel2Module
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
