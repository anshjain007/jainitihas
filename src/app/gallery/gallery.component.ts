import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryImages: string[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryImages = this.galleryService.getGalleryImages();
  }
}
