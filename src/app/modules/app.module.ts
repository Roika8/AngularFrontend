//Libraries
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

//Componenet
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { FavoriteCheckComponent } from '../Static/favorite-check/favorite-check.component';
import { NavbarComponent } from '../Static/navbar/navbar.component';
import { UploadFromLocalComponent } from '../Pages/upload-from-local/upload-from-local.component';
import { UploadFromApiComponent } from '../Pages/upload-from-api/upload-from-api.component';
import { UploadFromWebcamComponent } from '../Pages/upload-from-webcam/upload-from-webcam.component';
import { MainPageComponent } from '../Pages/main-page/main-page.component';
import { SettingsComponent } from '../Pages/settings/settings.component';
import { PrivateModeComponent } from '../Pages/private-mode/private-mode.component';
import { ImageSetupComponent } from '../Pages/image-setup/image-setup.component';
import { ImageUpdateComponent } from '../Pages/image-update/image-update.component';
import { StarterComponent } from '../Pages/starter/starter.component';
import { AboutComponent } from '../Pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { PrivateCheckComponent } from '../Static/private-check/private-check.component';
import { InputComponent } from '../Static/input/input.component';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { ImageSetupService } from '../Services/Image-setup/image-setup.service';
import { ImageService } from '../Services/images/image.service';
import { FavoriteModeComponent } from '../Pages/favorite-mode/favorite-mode.component';
import { PexelPhotoSearchService } from '../Services/Pexel-photo-search/pexel-photo-search.service'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DialogComponent } from '../Static/dialog/dialog.component';
import { ImagesViewComponent } from '../Static/images-view/images-view.component';
import { CardsViewComponent } from '../Static/cards-view/cards-view.component';
import { CarouselComponent } from '../Static/carousel/carousel.component';
import { ListViewComponent } from '../Static/list-view/list-view.component';
import { LocationMapComponent } from '../Static/location-map/location-map.component';
import { MapDialogComponent } from '../Static/map-dialog/map-dialog.component';
import { EditImageDialogComponent } from '../Static/edit-image-dialog/edit-image-dialog.component';
import { CategoriesSearchComponent } from '../Static/categories-search/categories-search.component';
@NgModule({
  declarations: [
    AppComponent,
    FavoriteCheckComponent,
    NavbarComponent,
    UploadFromLocalComponent,
    UploadFromApiComponent,
    UploadFromWebcamComponent,
    MainPageComponent,
    SettingsComponent,
    PrivateModeComponent,
    ImageSetupComponent,
    ImageUpdateComponent,
    StarterComponent,
    AboutComponent,
    PrivateCheckComponent,
    InputComponent,
    FavoriteModeComponent,
    DialogComponent,
    ImagesViewComponent,
    CardsViewComponent,
    CarouselComponent,
    ListViewComponent,
    LocationMapComponent,
    MapDialogComponent,
    EditImageDialogComponent,
    CategoriesSearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'starter', component: StarterComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'image-setup', component: ImageSetupComponent },
      { path: 'image-update', component: ImageUpdateComponent },
      { path: 'private-mode', component: PrivateModeComponent },
      { path: 'upload-from-api', component: UploadFromApiComponent },
      { path: 'upload-from-local', component: UploadFromLocalComponent },
      { path: 'upload-from-webcam', component: UploadFromWebcamComponent },
      { path: 'favorite-mode', component: FavoriteModeComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    WebcamModule,
    HttpClientModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAaYz3tnw0bgN3Asw4Dr6UfHWKSAIezZHg'
    })

  ],
  providers: [ImageSetupService, ImageService, PexelPhotoSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
