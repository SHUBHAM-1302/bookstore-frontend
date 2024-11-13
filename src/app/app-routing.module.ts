import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { BookListComponent } from './bookList/bookList.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: BookListComponent },

                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
