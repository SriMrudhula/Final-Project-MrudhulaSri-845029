import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductsComponent } from './Buyer/buy-products/buy-products.component';
import { ViewPofileComponent } from './Buyer/view-pofile/view-pofile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewCategoriesComponent } from './Admin/view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './Admin/view-sub-categories/view-sub-categories.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductsComponent,
    ViewPofileComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    ViewProfileComponent,
    AdminLandingPageComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    HomeComponent,
    ViewCategoriesComponent,
    ViewSubCategoriesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
