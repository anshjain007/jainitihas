import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomeComponent ,runGuardsAndResolvers: 'always' },
        { path: 'gallery', component: GalleryComponent ,runGuardsAndResolvers: 'always' },
        { path: 'books', component: BooksComponent ,runGuardsAndResolvers: 'always' },
        { path: 'blog', component: BlogComponent ,runGuardsAndResolvers: 'always' },
        { path: 'blogDetails/:id', component: BlogDetailComponent ,runGuardsAndResolvers: 'always' },
        { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
      ],
    },
    { path: '**', redirectTo: 'home' } // Wildcard route for 404 handling


  ];
  
