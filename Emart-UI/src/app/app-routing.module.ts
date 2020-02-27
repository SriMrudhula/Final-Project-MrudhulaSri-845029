import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewPofileComponent } from './Buyer/view-pofile/view-pofile.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductsComponent } from './Buyer/buy-products/buy-products.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { Category } from './Models/category';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewCategoriesComponent } from './Admin/view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './Admin/view-sub-categories/view-sub-categories.component';


const routes: Routes = [
  {path:'Seller',component:SellerLandingPageComponent,children:[
        {path:'Add-Item',component:AddItemsComponent},
        {path:'View-Items',component:ViewItemsComponent},
         {path:'View-Profile',component:ViewProfileComponent},
        {path:'view-Reports',component:ViewReportsComponent}
      ]},
  {path:'Buyer',component:BuyerLandingPageComponent,children:[
        {path:'Buy-Product',component:BuyProductsComponent},
        {path:'Purchase-History',component:PurchaseHistoryComponent},
        {path:'Search',component:SearchComponent},
        {path:'View-Cart',component:ViewCartComponent},
        {path:'View-Profile',component:ViewPofileComponent}
  ]},
  {path:'Admin',component:AdminLandingPageComponent,children:[
         {path:'Add-Category',component:AddCategoryComponent},
         {path:'Add-Subcategory',component:AddSubcategoryComponent},
         {path:'View-Category',component:ViewCategoriesComponent},
         {path:'View-Subcategory',component:ViewSubCategoriesComponent},
         {path:'Block-Unblock-Buyer',component:BlockUnblockBuyerComponent},
         {path:'Block-Unblock-Seller',component:BlockUnblockSellerComponent},
         {path:'Daily-Reports',component:DailyReportsComponent}
  ]},
  {path:'Home',component:HomeComponent,children:[
  {path:'Login',component:LoginComponent},
  {path:'Register-Seller',component:RegisterSellerComponent},
  {path:'Register-Buyer',component:RegisterBuyerComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
