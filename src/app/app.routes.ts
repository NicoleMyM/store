import { Routes } from '@angular/router';

import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./domains/shared/components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./domains/products/pages/list/list.component')
            },
            {//add export default in the component if you dont use .then
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent)          
    }
];
