import { Component, OnInit } from '@angular/core';
import { GalleryService, Tirthankar } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  tirthankars: Tirthankar[] = [];
  selectedTirthankar: Tirthankar | null = null;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.tirthankars = this.galleryService.getTirthankars();
  }

  selectTirthankar(tirthankar: Tirthankar) {
    this.selectedTirthankar = tirthankar;
  }

  backToFolders() {
    this.selectedTirthankar = null;
  }
}
