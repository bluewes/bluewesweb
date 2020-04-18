import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorConnectComponent } from './vendor-connect/vendor-connect.component';
import { WalletTcComponent } from './wallet-tc/wallet-tc.component';
import { WalletFaqComponent } from './wallet-faq/wallet-faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { CareersComponent } from './careers/careers.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BigbasketComponent } from './bigbasket/bigbasket.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterRoutingModule } from './footer-routing.module';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { MrpComponent } from './mrp/mrp.component';

@NgModule({
  declarations: [VendorConnectComponent, WalletTcComponent, WalletFaqComponent,
    ContactUsComponent, FaqComponent, ElectronicsComponent, FashionComponent, 
    GroceriesComponent, CareersComponent, TermsConditionsComponent, AffiliateComponent,
     PrivacyPolicyComponent, BigbasketComponent, NewsComponent, AboutUsComponent, CookiePolicyComponent, MrpComponent],
  imports: [
    FooterRoutingModule,
    CommonModule
  ]
})
export class FooterModule { }
