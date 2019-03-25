import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormsModule, FormGroup, Validators } from '@angular/forms';
//import { SignupModule } from './signup/signup.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { MrsshopModule } from './mrsshop/mrsshop.module';
import { from } from 'rxjs';
import { UserService } from './shared/services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthInterceptor } from './shared/guard/auth.interceptor';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelModule } from './model/model.module';
//import { StoreModule } from './store/store.module';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './shared/guard/admin.guard';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
       ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
          },
      }),
      MrsshopModule,
      ModelModule,
      AdminModule,
      AppRoutingModule,
      ToastrModule.forRoot()
    ],
  declarations: [AppComponent, ForbiddenComponent],
  providers: [AuthGuard, UserService, AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}
