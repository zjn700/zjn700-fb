import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FirebaseGlossaryComponent } from './firebase-glossary/firebase-glossary.component';

// import { MainPageComponent } from './main-page/main-page.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { SortedByRiskComponent } from './sorted-by-risk/sorted-by-risk.component';

//import { AUTH_ROUTES } from './users/auth.routes';

const APP_ROUTES: Routes = [
        //{ path: '', redirectTo: '/', pathMatch: 'full' },
        { path: '', redirectTo: '/index', pathMatch: 'full'  },
        { path: 'index', component:  BookComponent },
        { path: 'book',  component:  BookComponent },
        { path: 'fbg',  component:  FirebaseGlossaryComponent },
        // { path: 'shopping', component: ShoppingListComponent, children: [
        //         { path: 'branch', component: BranchComponent },
        //         { path: 'sortedbyrisk', component: SortedByRiskComponent }
        //   ] },
        { path: '**', redirectTo: "/index"  }
        //{ path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
        //{ path: '**', redirectTo: '/', pathMatch: 'full' }

    ]
export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES)