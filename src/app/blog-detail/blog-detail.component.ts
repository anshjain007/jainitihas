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
 <h2>History of Kesariya ji Atishay Kshetra</h2>
 <p><b> Rishabhdev temple is situated 65 km away on
National Highway No. 8, south of Udaipur
district of Rajasthan. This temple is also called
Kesariyaji because a lot of saffron is offered on
the original idol main deity</b></p>
<img src="../../assets/blog/kesariyaji/temple1.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">

<h2>Idol of Rishbhdev : A Marvel of Sculpture</h2>

<p> <b>The black stone idol of the main deity, first
Tirthankar 1008 Lord Rishabhdev is 3½ feet
(108 Cm) tall sitting in Padmasana. Three
Chattras are adorned on the head of the idol
and on the back of the head there is an ashta
metal entourage with divine aura. On both sides
of them two Tirthankaras are depicted in
Khadgasana Kayotsarga (Digamber)posture</b>. On
both sides of the head of the Lord four artists of
the music group are depicted playing Musical
instruments , who are dancing with
engrossment in devotion to the Lord. On both
sides of the head there are images of Attendent
performing Kalashabhishek of Rishabhdev The black stone idol of the main deity, first
Tirthankar 1008 Lord Rishabhdev is 3½ feet
(108 Cm) tall sitting in Padmasana. Three
Chattras are adorned on the head of the idol
and on the back of the head there is an ashta
metal entourage with divine aura.<b> On both sides
of them two Tirthankaras are depicted in
Khadgasana Kayotsarga (Digamber)posture.</b> On
both sides of the head of the Lord four artists of
the music group are depicted playing Musical
instruments , who are dancing with
engrossment in devotion to the Lord. On both
sides of the head there are images of Attendent
performing Kalashabhishek of Rishabhdev </p>

<img src="../../assets/blog/kesariyaji/mainidol1.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">

<br><br>
<h2>The Significance of 16 Dreams in
Main Deity</h2>
<img src="../../assets/blog/kesariyaji/16dream.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">

<p> The middle of the first row, Rishabhdev's mother
Marudevi is seated with her Raja Nabhirai ,sharing
the details of the <b>16 auspicious dreams</b> she had
seen the previous night.<b> There are engravings of
16 dreams on both sides of them. The 16 dreams
prove that the statue is of Digambar tradition.
There is a description of 14 dreams in the
Shwetambar tradition.</b>
Below the strip of <b>16 dreams</b>, ten symbols are
engraved, including lions, representing the Lord's
power and authority, and Airavat elephants,
signifying the throne's name Gajapeeth.Shachi Indrani is seated in a lalitasan posture in
the middle of the row. After the birth of the Lord,
the child Lord was brought out of the maternity
home <b>( As Per Digamber Scriptures)</b> and made the
world aware, due to which Shachi was given a
prominent place.At the base of the throne, two
bulls represent Lord Rishabhdev, while Sarvanha
Yaksha is shown holding Dharmachakra,
highlighting the significance of spirituality and
knowledge. These intricate carvings demonstrate
the artistic skill and attention to detail of the
artisans.<b>
Around the temple there are 52 Jinalaya with
1100 pillars and with shikharas (spires). In the
west there is a Sahasrakuta Jinalaya with 1008
idols </b></p>


<h2>Inscriptions of Kesariya ji</h2>



<p> <b>7 inscriptions</b> have been found in this temple
which belong to<b> Digambar Kasth Sangha</b></p>


<br> <br>
<p><b>(1)Inscription no. 1 - Renovation of Khela
Mandap</b></p>

<p>The <b> inscription</b> on the northern wall of the
Temple's Khela Mandap reveals that the temple's
Garbhgruha, shikhara and <b>Khela Mandap were
renovated in Samvat 1431 on Vaishakh Shukla
Tritiya Wednesday (1374) by Shah Hardas,</b> his wife
Haru Putra Pooja and Kota on the advice of
Kashtha Sangh Bhattarak Dharmakirti.</p>

<p><b>(2)Inscription no. 2 - Swayambhu Stotra</b></p>

<p> On the northern wall of the Khela Mandap,<b>The first
verse of Laghu Swayambhu Stotra of Digambar
Jain tradition is written in Sanskrit language in this
inscription.</b> In which Adinath Bhagwan has been
praised.</p>

<p><b>(3)Inscription no. 3 - Nine Chowkis and Sabha
Mandap</b></p>

<p>On the Southern wall of the Khela Mandap,According to this, the construction of
nine chowkis and assembly hall was done on
<b>Vikram Samvat 1572 (AD 1515) Vaishakh Sudi
Panchami Monday, in the kingdom of Bhattarak
Yashkirti, in the village of Dhuleev,</b> Fadiya
Kohiya, his wife Bharmi, his son Hisa, his wife
Hisalde, his sons Kana, brother-in-law, Ranga
brother Vendas, his wife Lachhi brother Sawa, his
wife Panchi, his son Natha, Narpal Kashtha Sangh
Vach caste Kashyap gotra, Fadiya Hisa
constructed the Sabha Mapndap and nine
chowkis by spending one thousand rupees eight
hundred and fifty rupees</p>

<p><b>(4)Inscription no. 4 - Construction of Temple's
Rampart</b></p>

<p>Chhatriyas are built on both sides of the rampart
built around the temple. According to the
description of the inscription on the northern
wall of the rampart,<b> on the advice of Yashkirti, a
disciple of Moolsangi Digamber Bhattarak
Chandrakirti, Kamaleshwar gotriya Gandhi
Vijaychandra of Humad caste ( This cast is seen
in only Digambar Jain) of Sagwara built the
rampart in 1863 (AD 1806).</b>

In the southern Jain temples, there is a room
with a mandap in which the temple equipment is
kept. In front of it is <b> the throne of the Kashtha
Sangh Bhattaraka. Near the throne is a
Chaityalay in which there are Digambara idols.
This is the Chaityalay of the Kashtha Sangh
Bhattarakas.</b> Whenever the Bhattarakas go on a
pilgrimage, they take it with them.</p>

<p><b>(5)Inscription no. 5 - The establishment of
Chaturvisati Jin Paduka</b></p>

<img src="../../assets/blog/kesariyaji/inscription.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">

<br><br>
<p>Digamber Bhattaraka Chandrakirti of the Idar
branch of the Moolasangh Balatkargan had
established a Chaturvisati Jina Paduka in 1832.
The text of this present inscription is as follows: -
<b>स्वस्ति श्री संवत् 1832 (सन् 1775) शा के 1687 प्रवर्तमा न
शुभका रक कल्या णसे कृष्ण पक्ष तृती या शुभस्त ति थि शुक्रवा सरे श्री
खगेदेशे धुलेव ग्रा मे श्री ऋषभदेव चैत्या लये श्री मूलसंघ सरस्वती गच्छे
बला त्का रगण श्री कुंद-कुंदा चा र्यन्वये भट्टा रक श्री सकलकी र्ति तत्पट्टे
भुवनकी र्ति तदनुक्रमणे भट्टा रक श्री क्षेमकी र्ति तत्पट्टे श्री नरेंद्रकी र्ति
तत्पट्टे भट्टा रक श्री वि जय की र्ति तत्पट्टे भट्टा रक नेमि चंद्र तत्पट्टे भट्टा रक
श्री 108 चन्द्रकी र्ति प्रति ष्ठि ते।</b></p>

<p><b>(6)Inscription no. 6 - Pratistha performed by
Digamber Bhattaraks over the ages.</b></p>

<p><b>Fifty-two Jinalayas start on the south side of the
temple. They were constructed from Vikram
Samvat 1611 to 1863.</b> The statues of
Tirthankaras were consecrated in the above
mentioned temples by Bhattarak Shakalkirti, Bh.
Kshemkirti, Bh. Narendrakirti, Bh. Bhimsen, Bh.
Gopsen, Bh. Devendrakirti, Bh. Surendrakirti, Bh.
Laxmisen, Bh. Gyankirti, Bh. Done by Yashkirti</p>

<p><b>(7)Inscription no. 7 - Mention of
Digamberacharya Kund Kund Swami</b></p>

<p>In front of the temple on the eastern side, there
is an elephant carved in the middle. On this there
is an <b>inscription of the year 1711 Vaishakh Shukla
Teej, which mentions Moolsangh
Saraswatigachchh Balatkargan and Kundakunda
Swami Digambar Jain Acharya</b></p>

<h2><b>The Flagstaff Massacre</b></h2>

<p>
  <b>The fame and grandeur of the temple and the management and unbroken authority of this temple</b>
  have been with the Digambar Jains in the long history of about 1200 years. The Digambar Jains
  managed, operated, preserved, and protected it with the teachings of their Bhattarakas.
</p>

<p>
  Due to fame, income, and grandeur, the Shwetambars cast their evil eye on this temple. As
  the Shwetambars became influential in the state (Mewar State), they started encroaching upon this
  pilgrimage with the help of the state. Maharana Mewar took control in 1877, since then
  the Devasthan Department of the Mewar kingdom started managing it. The Shwetambars of the Mewar
  kingdom held high positions. They kept misusing their influence in the temple management.
</p>

<p>
  <b>On 4 May 1927, Vaishakh Shukla Tritiya (Akshay Tritiya),</b> Shwetambar Jains, without the order of
  the Maharana and with the help of the army and administration, tried to put crowns, earrings, and
  eyes on the idols and hoist the flagstaff on the Mulnayak peak. Thousands of Digambars strongly
  opposed this.
</p>

<p>
  Before this, Laxman Singh Mehta (Shwetambar Jain) was appointed Magra Hakim (SDM). Devi Lal Mehta
  (Shwetambar Jain), Hakim Devasthan Rishabhdev—his father-in-law—and Vardi Chand Anchaliya (Officer,
  Devasthan, Dhulev), and Roshanlal Chatur Seth were all Shwetambar Jains. These four conspired and
  tried to put crowns, earrings, and eyes on the flagpole and idols.
</p>

<p>
  Due to this, the <b>Digambar Jain community under the leadership of Pandit Girdhari Lal</b> sought the
  Maharana’s order. He instead ordered to suppress the protest. Subedar Tej Singh led the attack in
  which <b>Pandit Girdhari Lal (Sagar, MP), Shri Deepchand Nagda and Shri Punamchand Nagda (Prasad,
  Udaipur), and Shri Mankchandji (Semari, Udaipur)</b> were martyred inside the temple. <b>150 people
  were injured, out of which 44 were seriously wounded and treated.</b>
</p>

<p>
  The Mewar government was heavily criticized and formed an investigation commission consisting of:<br>
  <b>(1) Shri Tribhuvannath, (2) Kalicharan, (3) Rao Bahadur Rajaji, (4) Babu Madan Mohanlal Ji,</b>
  and <b>(5) Mr. C.G. Tenve</b>.
</p>

<p>
  The commission submitted its report on <b>25 April 1929</b> and found <b>Vardichand Aochalia, Roshanlal
  Chatur, Devilal Mehta, Laxman Singh Mehta (all Shwetambar Jains), and Tej Singh Subedar</b> guilty.
  They were dismissed from government service with fines imposed.
</p>

<p>
  Despite the findings, <b>the Shwetambars closed the temple doors and hoisted the flagpole on 6 May
  1927 without any rituals.</b>
</p>

<p>
  Both communities hired prominent lawyers. <b>Mr. Jinnah and his team represented the Digambars.</b> The
  commission acknowledged that Digambars had performed rituals and hoisted flags on 5 significant
  occasions:
</p>

<ul>
  <li><b>Samvat 1431:</b> Renovation of the temple and Khela Mandap</li>
  <li><b>Samvat 1572:</b> Construction of Nauchoki and Sabha Mandap</li>
  <li><b>Samvat 1753:</b> Construction of Neminath Temple</li>
  <li><b>Samvat 1773:</b> Bimba Pratishtha Maha Mahotsav</li>
  <li><b>Samvat 1863:</b> Construction of Parakota and its consecration with extraordinary pomp and splendor</li>
</ul>

<p>
  The final report was submitted on <b>10 April 1935</b> but only published on <b>5 June 1947</b> due to
  pressure from Shwetambar officials. Though the report recognized it as a <b>Digambar Jain temple</b>,
  the term “Digambar” was later removed under pressure.
</p>
<img src="../../assets/blog/kesariyaji/mandap.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">
<br><br>

<h2>Judgments of the Honorable
Supreme Court</h2>

<p>An appeal was filed in the Supreme Court against
the above orders and incidents by the Digambar
Jain community and the Shvetambara Jain
community and the state government. On 14
September 1973, the Supreme Court declared it
a Jain temple.
It was declared and as per the decision of the
Supreme Court dated 4 January 2007 and July
2010, this temple was considered a Jain temple
and its management and control was handed
over to the Jain community </p>
<img src="../../assets/blog/kesariyaji/court.jpeg" alt="Kesariya Ji Jain Tirth" class="img-fluid">
<br><br>

<p style="font-size: 16px; font-family: Arial, sans-serif; margin-top: 30px;">
  <b style="color: red;">Source:</b>
  <a href="https://drive.google.com/file/d/1SXjA8XKF3QZKp8gqaNE29tgBu7gVqHDy/view?usp=drivesdk"
     target="_blank"
     style="color: #1a73e8; text-decoration: none; font-weight: bold;">
    Click here to view the original document on Google Drive
  </a>
</p>




<h2>Effect of Digamber Moolsanghi
Nanditatagaccha on Kesariaji Tirth</h2>

<p>An inscription related to the construction of the
Sabha Mandap and Nochoki of Rishabhdev
Temple in the <b>year 1572 during the reign of
Bhattaraka Yashkirti of Kashtha Sangha
Nanditat Gachch is present in the temple.</b> After
this, there is mention of offering Kalash and
flagpole at the temple here in the year 1686 due
to the teachings of Bhattaraka Rajkirti of the
same tradition. <b>In Samvat 1734, Pratishtha
Mahotsav was held in the Rishabhdev (Kesariya
ji) temple under the guidance of Bhattarak
Bhimsen and Acharya Gopsen. On the idols
number 5, 10 ( Rishabhnath Jinbimb ), 11
(Vasupujya Jinbimb) and 35 related to the
Devkulikas of this temple,</b>it is mentioned that
they were installed by Bhattarak Bhimsen and
Acharya Gopsen.</p>

<img src="../../assets/blog/kesariyaji/idols.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">
<img src="../../assets/blog/kesariyaji/idols2.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">


<h2>Kesariyaji Digamber Jain Temple</h2>

<p><b>Acharya Shree Shantisagarji</b> was initiated as a
kshullak at Kesariyaji in front of the idol of
Rishabhanatha in 1922 CE.

The craftsmanship and sculpture of the<b>temple
proves the Digambaratva of the temple. From
the inscriptions, sculptures and other historical
evidences installed in the temple,</b> this temple
has been built by Digambara Jain Shravaks
under the guidance of Digambara Jain
Bhattarakas</p>

<img src="../../assets/blog/kesariyaji/ending.jpg" alt="Kesariya Ji Jain Tirth" class="img-fluid">

<h2>Words may lie,but Inscriptions reveal
the Truth of this Temple!!</h2>
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
