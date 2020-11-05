import { ProductZoomComponent } from './components/pages/product-details/product-zoom/product-zoom.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ProductService } from './components/pages/products1/product.service';
import { ProductDialogComponent } from './components/pages/product-dialog/product-dialog.component';
import { CartService } from './components/pages/cart/cart.service';
import { ArticleListComponent } from './components/pages/articleList/articleList.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { HeaderFourComponent } from './components/layouts/header-four/header-four.component';
import { OnepageNavbarComponent } from './components/layouts/onepage-navbar/onepage-navbar.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { AboutOneComponent } from './components/pages/about-one/about-one.component';
import { AboutTwoComponent } from './components/pages/about-two/about-two.component';
import { PreventionComponent } from './components/pages/prevention/prevention.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { SpreadComponent } from './components/pages/spread/spread.component';
import { OutbreakComponent } from './components/pages/outbreak/outbreak.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsComponent } from './components/pages/products1/products.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LiveTrackerComponent } from './components/pages/live-tracker/live-tracker.component';
import { LiveDataComponent } from './components/layouts/live-data/live-data.component';
import { ArticleComponent } from './components/pages/article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule} from '@angular/material/button';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatSelectModule} from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderByPipe } from './components/pages/pipes/order-by.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './components/pages/product/product.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    HeaderOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    OnepageNavbarComponent,
    HomeSixComponent,
    AboutOneComponent,
    AboutTwoComponent,
    PreventionComponent,
    DoctorsComponent,
    AppointmentComponent,
    SpreadComponent,
    OutbreakComponent,
    FaqComponent,
    ContactComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogDetailsComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    ErrorComponent,
    ComingSoonComponent,
    ArticleListComponent,
    ArticleComponent,
    ProductComponent,
    // LiveTrackerComponent,
    // LiveDataComponent
    OrderByPipe,
    ProductDialogComponent,
    ProductZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxPaginationModule,
    SwiperModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [MatIconModule],
  providers: [CartService, ProductService, OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
