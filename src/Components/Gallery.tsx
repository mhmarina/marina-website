const _URL_ = "src/assets/artAssets/";
let images = [
  "bluelight.png",
  "breathtaking.png",
  "curlss.png",
  "doodle1.png",
  "doodle2.png",
  "duckfeeding.png",
  "epicgirl.png",
  "girl.png",
  "IMG_0274_Original.jpg",
  "IMG_0535.jpeg",
  "IMG_0684.jpeg",
  "IMG_4094.jpg",
  "IMG_4622.PNG",
  "IMG_4722.jpg",
  "IMG_5302.PNG",
  "IMG_5324.jpg",
  "IMG_5386.jpg",
  "IMG_6008.PNG",
  "IMG_6654.jpg",
  "IMG_7119.JPG",
  "jinxx.png",
  "miafeyy.png",
  "paintingpractice.png",
  "starfire light.png",
  "wings.png",
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
        <img src={`${_URL_}${image}`} loading="lazy" />
      ))}
    </div>
  );
}

export default Gallery;
