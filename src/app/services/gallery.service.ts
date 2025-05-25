import { Injectable } from '@angular/core';

export interface Tirthankar {
  id: number;
  name: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private tirthankars: Tirthankar[] = [
    {
      id: 1,
      name: 'Rishabhanatha (Adinath)',
      images: [
        'assets/tirthankars/1/1.jpg',
        'assets/tirthankars/1/2.jpg',
        'assets/tirthankars/1/3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Ajitanatha',
      images: [
        'assets/tirthankars/2/1.jpg',
        'assets/tirthankars/2/2.jpg'
      ]
    },
    {
      id: 3,
      name: 'Sambhavanatha',
      images: [
        'assets/tirthankars/3/1.jpg',
        'assets/tirthankars/3/2.jpg'
      ]
    },
    {
      id: 4,
      name: 'Abhinandananatha',
      images: [
        'assets/tirthankars/4/1.jpg'
      ]
    }
    // 👉 Add remaining Tirthankars here similarly
  ];

  constructor() {}

  getAllTirthankars(): Tirthankar[] {
    return this.tirthankars;
  }

  getImagesByTirthankarId(id: number): string[] {
    const tirthankar = this.tirthankars.find(t => t.id === id);
    return tirthankar ? tirthankar.images : [];
  }

  getTirthankarById(id: number): Tirthankar | undefined {
    return this.tirthankars.find(t => t.id === id);
  }

   getGalleryImages(): string[] {
    return [
      'assets/images/gallery/01.jpg',
      'assets/images/gallery/02.jpg',
      'assets/images/gallery/03.jpg',
      'assets/images/gallery/04.jpg',
      'assets/images/gallery/05.jpg',
      'assets/images/gallery/06.jpg',
      'assets/images/gallery/07.jpg',
      'assets/images/gallery/08.jpg',
      'assets/images/gallery/10.jpg'
    ];
  }
}
