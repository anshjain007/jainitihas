import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogs = [
    {
      id: 1,
      image: "../../assets/blog/kesariyaji1.jpg",
      title: 'Kesariya ji',
      day: '09',
      month: 'Nov',
      // time: '10am - 12pm',
      // location: 'PO Box 16122, Collins Street',
      // comments: 10,
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras. The serenity of the temple, coupled with the intricate artistry of its architecture, offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.",
      "read_more_link": "blog-single.html"

    },
    {
      id: 2,
      image: "../../assets/blog/kesariyaji1.jpg",
      title: 'Kesariya ji',
      day: '09',
      month: 'Nov',
      // time: '10am - 12pm',
      // location: 'PO Box 16122, Collins Street',
      // comments: 10,
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras. The serenity of the temple, coupled with the intricate artistry of its architecture, offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.",
      "read_more_link": "blog-single.html"

    },
    {
      id: 3,
      image: "../../assets/blog/kesariyaji1.jpg",
      title: 'Kesariya ji',
      day: '09',
      month: 'Nov',
      // time: '10am - 12pm',
      // location: 'PO Box 16122, Collins Street',
      // comments: 10,
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras. The serenity of the temple, coupled with the intricate artistry of its architecture, offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.",
      "read_more_link": "blog-single.html"

    },
  ];
  
}
