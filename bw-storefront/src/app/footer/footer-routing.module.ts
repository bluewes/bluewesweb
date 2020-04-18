import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { MrpComponent } from './mrp/mrp.component';

const routes: Routes = [
    { path: 'vendor', component: VendorConnectComponent },
    { path: 'wallet-tc', component: WalletTcComponent },
    { path: 'wallet-faq', component: WalletFaqComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'electronics', component: ElectronicsComponent },
    { path: 'fashion', component: FashionComponent },
    { path: 'groceries', component: GroceriesComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'terms-conditions', component: TermsConditionsComponent },
    { path: 'affiliate', component: AffiliateComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'bigbasket', component: BigbasketComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent },
    { path: 'mrp', component: MrpComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterRoutingModule { }
