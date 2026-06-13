import Card from "@/components/sheard/Card";

const AllPhotoPage = async () => {
  const res = await fetch(
    "https://ai-genarate-image-project.vercel.app/data.json",
  );
  const data = await res.json();
  
  return (
    <div>
      <h1 className="mt-4 text-2xl font-bold">All Photos</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-5">
        {data.map((photo) => (
          <Card key={photo.id} photo={photo}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
