import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blogs = [
    {
      "id": 1,
      "title": "Shree 1008 Kesariya Ji Jain Trith",
      "image": "../../assets/blog/kesariyaji/01.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras.",
      "content": `
    <p>Shree 1008 Kesariya Ji Jain Tirth, one of the most revered and iconic Jain pilgrimage sites, holds deep spiritual and historical significance for Jain devotees. Situated in a serene and picturesque location, the temple is a testament to the rich cultural and religious heritage of Jainism, which spans over thousands of years.</p>


    <p>The temple itself is not just a place of worship but a sanctuary for meditation and reflection. It is believed that the tranquil surroundings of the temple were chosen for their natural spiritual energy, which amplifies the meditative experience and provides devotees with a sense of peace, clarity, and connection to the divine.</p>
     <div class="image-grid">
    <img src="../../assets/blog/kesariyaji/06.jpg" alt="Peaceful surroundings of the Kesariya Ji Jain Temple" class="img-fluid">
    <img src="../../assets/blog/kesariyaji/01.jpg" alt="Peaceful surroundings of the Kesariya Ji Jain Temple" class="img-fluid">
     </div>
    <p>Steeped in the ancient traditions of Jainism, the Shree 1008 Kesariya Ji Jain Tirth is designed in the classical Jain architectural style, a symbol of the religion’s dedication to beauty, symmetry, and divine craftsmanship.</p>
     <div class="image-grid">

    <img src="../../assets/blog/kesariyaji/15.jpg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
    <img src="../../assets/blog/kesariyaji/16.jpg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
    <img src="../../assets/blog/kesariyaji/11.jpeg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
    <img src="../../assets/blog/kesariyaji/03.jpg" alt="Main structure of Shree 1008 Kesariya Ji Jain Tirth" class="img-fluid">
   </div>
    <p>The walls of the temple are adorned with intricate carvings depicting scenes from the lives of the Tirthankaras, sacred symbols, and religious teachings, which reflect the rich artistic heritage of the Jain community.</p>
    
    <p>The Shree 1008 Kesariya Ji Jain Tirth is dedicated to Lord Kesariya Ji, one of the revered Tirthankaras in Jainism, and is believed to be a site of great spiritual power. Over the centuries, it has become a focal point for both religious pilgrims and scholars who come to explore the profound teachings of Jainism.</p>
     <div class="image-grid">
         <img src="../../assets/blog/kesariyaji/05.jpeg" alt="Devotees visiting the Kesariya Ji Tirth" class="img-fluid">

     </div>

    <p>Visitors come not only to pray but also to learn the principles of non-violence (Ahimsa), truth (Satya), compassion (Karuna), and self-discipline. The teachings of Lord Kesariya Ji and other Tirthankaras continue to inspire all who visit.</p>

    <p>The serene environment surrounding the temple, coupled with its spiritual significance, makes it an ideal place for meditation and introspection.</p>


    <p>Many devotees who visit the temple speak of experiencing a deep sense of calm and divine presence. The temple’s atmosphere encourages personal reflection and a deeper understanding of one’s own spiritual journey.</p>
    
    <p>Throughout the years, the Shree 1008 Kesariya Ji Jain Tirth has been a place not only for spiritual reflection but also a hub for cultural and religious gatherings. The temple has hosted numerous religious events, ceremonies, and celebrations, which have brought together the Jain community and helped to preserve the rich traditions and customs associated with Jainism.</p>
    
    <p>In addition to its historical and spiritual importance, the Shree 1008 Kesariya Ji Jain Tirth has become a symbol of hope and healing for many. Many visitors have reported a sense of profound healing, both physical and emotional, as they engage in the rituals and practices at the temple.</p>
  `
    }
    ,
    {
      "id": 2,
      "title": "Shree 1008 Antariksh  Jain Trith",
      "image": "../../assets/blog/antariksh1.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras.",
      "content": `
        <p>Shree 1008 Kesariya Ji Jain Tirth is a sacred pilgrimage site that holds great significance in Jainism. The temple is designed in a traditional Jain architectural style, and the tranquil environment surrounding the temple allows devotees to engage in deep meditation and reflection.</p>
        <img src="../../assets/blog/antariksh1.jpg" alt="Kesariya Ji Temple" class="img-fluid">
        <p>The Tirthankaras' teachings inspire all those who visit this holy site to live by the principles of non-violence, compassion, and truth. The serenity of the temple offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.</p>
        <img src="../../assets/blog/antariksh1.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">
        <p>Visitors to the temple often describe a profound sense of peace and healing as they engage in spiritual practices. The architecture and artistry of the temple are a testament to the rich cultural heritage of Jainism.</p>
      `,


    },
    // Other blog objects...
  ];
  selectedBlog: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedBlog = this.blogs.find(b => b.id === parseInt(id!, 10));
  }
}
