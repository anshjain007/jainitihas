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
      "image": "../../assets/blog/kesariyaji/kesariya-thumb.jpg",
      "date": "06 May 2025",
      "author": "jainItihas",
      "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras.",
      "content": `
  <h2>History of Kesariya Ji Atishay Kshetra</h2>
<p>Rishabhdev temple is situated 65 km away on National Highway No. 8, south of Udaipur district of Rajasthan. This temple is also called Kesariyaji because a lot of saffron is offered on the original idol main deity.</p>
<div class="image-grid">
  <img src="../../assets/blog/kesariyaji/06.jpg" alt="Peaceful surroundings of the Kesariya Ji Jain Temple" class="img-fluid">
  <img src="../../assets/blog/kesariyaji/01.jpg" alt="Peaceful surroundings of the Kesariya Ji Jain Temple" class="img-fluid">
</div>
<h2>Idol of Rishabhdev: A Marvel of Sculpture</h2>
<p>The black stone idol of the main deity, first Tirthankar 1008 Lord Rishabhdev is 3½ feet (108 cm) tall, sitting in Padmasana. Three chhatras are adorned on the head of the idol. On both sides of them, two Tirthankaras are depicted in Khadgasana Kayotsarga posture. On both sides of the head of the Lord, four artists of the music group are depicted playing musical instruments, dancing with engrossment in devotion to the Lord. On both sides of the head, there are images of attendants performing Kalashabhishek of Rishabhdev.</p>

<p>Apart from the two Tirthankaras in standing position, there are statues of 21 Tirthankaras sitting in Padmasana posture on both sides till the top. Including the original god, the number of Tirthankaras is complete with 24.</p>



<div class="image-grid">
  <img src="../../assets/blog/kesariyaji/15.jpg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
  <img src="../../assets/blog/kesariyaji/16.jpg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
  <img src="../../assets/blog/kesariyaji/11.jpeg" alt="Intricate carvings and traditional Jain architecture at Kesariya Ji" class="img-fluid">
  <img src="../../assets/blog/kesariyaji/03.jpg" alt="Main structure of Shree 1008 Kesariya Ji Jain Tirth" class="img-fluid">
</div>

<h2>The Significance of 16 Dreams in Main Deity</h2>
<p>In the middle of the first row, Rishabhdev's mother Marudevi is seated with her husband Raja Nabhirai, sharing the details of the 16 auspicious dreams she had seen the previous night. There are engravings of 16 dreams on both sides of them. The 16 dreams prove that the statue is of Digambar tradition. There is a description of 14 dreams in the Shwetambar tradition.</p>

<p>Below the strip of 16 dreams, ten symbols are engraved, including lions, representing the Lord's power and authority, and Airavat elephants, signifying the throne's name Gajapeeth. Shachi Indrani is seated in a lalitasan posture in the middle of the row. After the birth of the Lord, the child Lord was brought out of the maternity home and made the world aware, due to which Shachi was given a prominent place.</p>

<p>At the base of the throne, two bulls represent Lord Rishabhdev, while Sarvanha Yaksha is shown holding Dharmachakra, highlighting the significance of spirituality and knowledge. These intricate carvings demonstrate the artistic skill and attention to detail of the artisans.</p>

<div class="image-grid">
  <img src="../../assets/blog/kesariyaji/05.jpeg" alt="Devotees visiting the Kesariya Ji Tirth" class="img-fluid">
</div>
 `
    }
    ,
    // {
    //   "id": 2,
    //   "title": "Shree 1008 Antariksh  Jain Trith",
    //   "image": "../../assets/blog/antariksh1.jpg",
    //   "date": "06 May 2025",
    //   "author": "jainItihas",
    //   "description": "Nestled amidst tranquil surroundings, the Shree 1008 Kesariya Ji Jain Tirth stands as a beacon of spirituality and devotion. This sacred pilgrimage site reflects centuries of Jain heritage, inviting devotees to immerse themselves in prayers, rituals, and the timeless wisdom of Tirthankaras.",
    //   "content": `
    //     <p>Shree 1008 Kesariya Ji Jain Tirth is a sacred pilgrimage site that holds great significance in Jainism. The temple is designed in a traditional Jain architectural style, and the tranquil environment surrounding the temple allows devotees to engage in deep meditation and reflection.</p>
    //     <img src="../../assets/blog/antariksh1.jpg" alt="Kesariya Ji Temple" class="img-fluid">
    //     <p>The Tirthankaras' teachings inspire all those who visit this holy site to live by the principles of non-violence, compassion, and truth. The serenity of the temple offers a divine experience where the soul finds peace and clarity on the path of non-violence, truth, and liberation.</p>
    //     <img src="../../assets/blog/antariksh1.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">
    //     <p>Visitors to the temple often describe a profound sense of peace and healing as they engage in spiritual practices. The architecture and artistry of the temple are a testament to the rich cultural heritage of Jainism.</p>
    //   `,


    // },
    // Other blog objects...
  ];
  selectedBlog: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedBlog = this.blogs.find(b => b.id === parseInt(id!, 10));
  }
}
