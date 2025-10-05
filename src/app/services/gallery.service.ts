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
        'assets/tirthankars/adinath/04.jpg',
        'assets/tirthankars/adinath/05.jpg',
        'assets/tirthankars/adinath/06.jpg',
        'assets/tirthankars/adinath/07.jpg',
        'assets/tirthankars/adinath/08.jpg',
        'assets/tirthankars/adinath/09.jpg',
        'assets/tirthankars/adinath/10.jpg',
        'assets/tirthankars/adinath/11.jpg'

      ]
    },
    {
      id: 2,
      name: 'Bahubali',
      images: [
        'assets/tirthankars/bahubali/01.jpg',
        'assets/tirthankars/bahubali/02.jpg',
      ]
    },
    {
      id: 3,
      name: 'Mahavira',
      images: [
        'assets/tirthankars/mahavir/01.jpg',
        'assets/tirthankars/mahavir/02.jpg',
      ]
    },
    // Add remaining Tirthankars here similarly
  ];

  constructor() { }

  getTirthankars(): Tirthankar[] {
    return this.tirthankars;
  }
}
