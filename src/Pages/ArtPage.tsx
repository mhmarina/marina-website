import Gallery from "../Components/Gallery";

const messages: string[] = [
  "not a lot going on at the moment.",
  "rawr :3",
  "this is art.",
  "under construction",
];
const index = Math.floor(Math.random() * messages.length);

function ArtPage() {
  return (
    <div style={{ marginTop: "135px" }}>
      <Gallery />
    </div>
  );
}

export default ArtPage;
