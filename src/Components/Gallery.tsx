import bluelight from "../assets/artAssets/bluelight.webp";
import breathtaking from "../assets/artAssets/breathtaking.webp";
import doodle1 from "../assets/artAssets/doodle1.webp";
import curls from "../assets/artAssets/curlss.webp";
import doodle2 from "../assets/artAssets/doodle2.webp";
import duckfeeding from "../assets/artAssets/duckfeeding.webp";
import epicgirl from "../assets/artAssets/epicgirl.webp";
import girl from "../assets/artAssets/girl.webp";
import selfportrait from "../assets/artAssets/selfportrait.webp";
import acrylic from "../assets/artAssets/acrylic.webp";
import sadgirl from "../assets/artAssets/sadgirl.webp";
import oil from "../assets/artAssets/oil painting.webp";
import img1 from "../assets/artAssets/IMG_0274_Original.webp";
import img2 from "../assets/artAssets/IMG_0535.webp";
import img3 from "../assets/artAssets/IMG_0684.webp";
import img4 from "../assets/artAssets/IMG_4094.webp";
import img5 from "../assets/artAssets/IMG_4722.webp";
import img7 from "../assets/artAssets/IMG_71191.webp";
import img11 from "../assets/artAssets/IMG_6654.webp";
import img12 from "../assets/artAssets/IMG_7120.webp";
import jinx from "../assets/artAssets/jinxx.webp";
import miafey from "../assets/artAssets/miafeyy.webp";
import starfire from "../assets/artAssets/starfire light.webp";
import wings from "../assets/artAssets/wings.webp";
import painting from "../assets/artAssets/painting.webp";
import "../App.css";

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
