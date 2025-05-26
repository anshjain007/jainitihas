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
      name: 'Rishabhanatha',
      images: [
        'assets/tirthankars/adinath/01.jpg',
        'assets/tirthankars/adinath/02.jpg',
        'assets/tirthankars/adinath/03.jpg',
      ]
    },
    {
      id: 2,
      name: 'bahubali',
      images: [
        'assets/tirthankars/bahubali/01.jpg',
        'assets/tirthankars/bahubali/02.jpg',
      ]
    },
    {
      id: 3,
      name: 'mahavir',
      images: [
        'assets/tirthankars/mahavir/01.jpg',
        'assets/tirthankars/mahavir/02.jpg',
      ]
    },
    // Add remaining Tirthankars here similarly
  ];

  constructor() {}

  getTirthankars(): Tirthankar[] {
    return this.tirthankars;
  }
}
