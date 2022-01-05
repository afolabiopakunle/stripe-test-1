import { Component, OnInit } from '@angular/core';
import { ArtCard } from '../art-card.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  artCardsList: ArtCard[] = [
    {
      artist: 'Olusegun Obasanjo',
      artSummary: 'Welcome to the Blockchain Ninja complete Blockchain development course. I’m going to teach you, step-by-step, how to build a Blockchain application from scratch. You don’t need any prior knowledge of Blockchain. My name is Dheeraj Pal and Blockchain developer and',
      artworkURL: 'https://i.pinimg.com/564x/90/78/96/907896db0eb2cb8da7770c53768b0934.jpg',
      artTitle: 'Rainwalk',
      price: 320
    },
    {
      artist: 'Jide Sanwo-olu',
      artSummary: 'UK Tech Nation visa is one of the best visa schemes in the world that is offered to tech talent. During my sudden big transition from San Francisco in 2016 due to the US E2 visa refusal, UK Tech Nation visa allowed me to find a new home, London, which is one of the best tech ecosystems in the',
      artworkURL: 'https://image.shutterstock.com/image-vector/afro-art-craft-batik-paint-260nw-1236816616.jpg',
      artTitle: 'Mirror Me',
      price: 128
    },
    {
      artist: 'Tunde Ednut',
      artSummary: 'Overall, I would say it’s a fairly streamlined and easy process with lots of detailed instruction readily available on the Home Office website and the Tech Nation website, compared to most visas in other countries that are usually complicated. UK Government websites are super organized and their systems',
      artworkURL: 'https://wallpapertag.com/wallpaper/full/9/7/2/589995-full-size-african-art-wallpaper-1920x1200-for-iphone-5.jpg',
      artTitle: 'Cheers to buy',
      price: 245,
    },
    {
      artist: 'Abacha Sani',
      artSummary: 'Whether you go for the Exceptional Talent route or the Exceptional Promise route, it is a two-stage process — 1) obtaining the endorsement from Tech Nation, and 2) applying for the actual visa to Home Office. Once stage 1) is done, you can expect that stage 2) will be completed easily unless ',
      artworkURL: 'https://5.imimg.com/data5/SY/UG/MY-11213044/056-500x500.jpg',
      artTitle: 'East Africa',
      price: 180,
    },
    {
      artist: 'Abacha Sani',
      artSummary: 'As you can see, it’s not a sports game scoring like any other visa. Once you figured that you seem to tick a few boxes, now it’s really your job to position yourself as an “exceptional talent” and paint the picture with your work history, documents, what you have built before, what you are building, etc.',
      artworkURL: 'https://www.africanvibes.com/wp-content/uploads/2021/08/718UdMgkZvL._AC_SL1022_.jpg',
      artTitle: 'East Africa',
      price: 212,
    },
    {
      artist: 'Oman Diyabanjuida',
      artSummary: 'As you can see, it’s not a sports game scoring like any other visa. Once you figured that you seem to tick a few boxes, now it’s really your job to position yourself as an “exceptional talent” and paint the picture with your work history, documents, what you have built before, what you are building, etc.',
      artworkURL: 'https://www.africanvibes.com/wp-content/uploads/2021/08/71dGwtVBr9L._AC_SL1000_.jpg',
      artTitle: 'Simple Pinky',
      price: 350,
    },
    {
      artist: 'Ronke Oluwagbami',
      artSummary: 'The HOMOEART Elephant Canvas Wall Art Prints have stretched canvas prints and are easy to hang in any place in your home or office. Furthermore, each image is mounted with a black hook and stretched with pine wood bars. Also, the vivid colors give more beauty t',
      artworkURL: 'https://www.africanvibes.com/wp-content/uploads/2021/08/81xfNDqEQCL._AC_SL1500_.jpg',
      artTitle: 'Simple Pinky',
      price: 135,
    },
    {
      artist: 'Mathew Ozorumba',
      artSummary: 'The Ambesonne African Curtains, Ceremonial Native Illustration Cultural Art Paint is 84 inches long and 108 inches wide. This set of 2 curtain panels is digitally printed with African art drawings, ideally suited for your home. Its designs are unique; also, it is machine washable. Its colors don’t fade, and ',
      artworkURL: 'https://www.africanvibes.com/wp-content/uploads/2021/08/61tf3hiNaSL._AC_.jpg',
      artTitle: 'Simple Pinky',
      price: 135,
    }
  ]

}
