import bluelight from "../assets/artAssets/bluelight.png";
import breathtaking from "../assets/artAssets/breathtaking.png";
import doodle1 from "../assets/artAssets/doodle1.png";
import curls from "../assets/artAssets/curlss.png";
import doodle2 from "../assets/artAssets/doodle2.png";
import duckfeeding from "../assets/artAssets/duckfeeding.png";
import epicgirl from "../assets/artAssets/epicgirl.png";
import girl from "../assets/artAssets/girl.png";
import selfportrait from "../assets/artAssets/selfportrait.jpeg";
import acrylic from "../assets/artAssets/acrylic.jpg";
import sadgirl from "../assets/artAssets/sadgirl.png";
import oil from "../assets/artAssets/oil painting.jpeg";
import img1 from "../assets/artAssets/IMG_0274_Original.jpg";
import img2 from "../assets/artAssets/IMG_0535.jpeg";
import img3 from "../assets/artAssets/IMG_0684.jpeg";
import img4 from "../assets/artAssets/IMG_4094.jpg";
import img5 from "../assets/artAssets/IMG_4722.jpg";
import img7 from "../assets/artAssets/IMG_71191.jpg";
import img11 from "../assets/artAssets/IMG_6654.jpg";
import img12 from "../assets/artAssets/IMG_7120.jpg";
import jinx from "../assets/artAssets/jinxx.png";
import miafey from "../assets/artAssets/miafeyy.png";
import starfire from "../assets/artAssets/starfire light.png";
import wings from "../assets/artAssets/wings.png";
import painting from "../assets/artAssets/painting.jpg";

let images = [
  painting,
  oil,
  selfportrait,
  acrylic,
  sadgirl,
  bluelight,
  breathtaking,
  doodle1,
  doodle2,
  curls,
  duckfeeding,
  epicgirl,
  girl,
  img1,
  img2,
  img3,
  img4,
  img5,
  img7,
  img11,
  img12,
  jinx,
  miafey,
  starfire,
  wings,
];

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
} //Fisher–Yates shuffle, make everything more random

images = shuffle(images);

function Gallery() {
  return (
    <div className="galleryview">
      {images.map((image) => (
        <img src={`${image}`} loading="lazy" />
      ))}
    </div>
  );
}

export default Gallery;
