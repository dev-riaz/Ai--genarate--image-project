import Card from "./sheard/Card";

const TopGenerations = async () => {
  const res = await fetch(
    "https://ai-genarate-image-project.vercel.app/data.json",
  );
  const data = await res.json();
  const photos=data.slice(0,8)
  console.log(data);

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold">Top Generations</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo}></Card>
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
