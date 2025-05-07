import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogs = [
    {
      "id": 1,
      "title": "Shree 1008 Kesariya Ji Jain Trith",
      "image": "../../assets/blog/kesariyaji1.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras. The serenity of the temple, coupled with the intricate artistry of its architecture, offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.",
      "read_more_link": "blog-single.html"
    },
    {
      "id": 2,
      "title": "Shree 1008 Antariksh Parshwanath Jain Tirth",
      "image": "../../assets/blog/antariksh1.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Situated in a serene and spiritual landscape, Shree 1008 Antariksh Parshwanath Jain Tirth is a divine abode of faith and enlightenment. Dedicated to Lord Parshwanath, this tirth is revered for its peaceful environment and deep spiritual aura. Devotees from far and wide come here to seek inner peace, practice meditation, and honor the sacred teachings of Jainism. The temple’s architecture and its tranquil ambiance inspire reflection on the values of compassion, discipline, and liberation.",
      "read_more_link": "blog-single"
    },
    {
      "id": 3,
      "title": "Shree 1008 Kesariya Ji Jain Trith",
      "image": "../../assets/blog/kesariyaji1.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras. The serenity of the temple, coupled with the intricate artistry of its architecture, offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.",
      "read_more_link": "blog-single.html"
    }
  ];


}


