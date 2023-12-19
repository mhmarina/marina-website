const messages: string[] = [
  "not a lot going on at the moment.",
  "rawr :3",
  "this is art.",
  "under construction",
];
const index = Math.floor(Math.random() * messages.length);

function ArtPage() {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1>{messages[index]}</h1>
    </div>
  );
}

export default ArtPage;
