import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";

const photoDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(
    "https://ai-genarate-image-project.vercel.app/data.json",
  );
  const data = await res.json();
  console.log(data);

  const photos = data.find((p) => p.id == id);
  console.log(photos);
  if (!photos) {
    return <div>Photo not found</div>;
  }
  return (
    <>
    <h1 className="mt-4 text-2xl font-bold">Photo Details Page</h1>
      <div className="w-8/12 mx-auto flex justify-between border p-4 gap-4 my-8">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={photos.imageUrl}
            width={400}
            height={200}
            alt={photos.title}
            className="w-full h-100 rounded-2xl"
          />
        </div>

        {/* Details */}
        <div className="mt-6 space-y-2">
          <h1 className="text-2xl font-bold">{photos.title}</h1>

          <p className="text-gray-600">{photos.prompt}</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <p>
              <b>Category:</b> {photos.category}
            </p>
            <p>
              <b>Model:</b> {photos.model}
            </p>
            <p>
              <b>Resolution:</b> {photos.resolution}
            </p>
            <p className="flex items-center gap-3 ">
              <b>Likes:</b> <FcLike /> {photos.likes}
            </p>
            <p className="flex items-center gap-3 ">
              <b>Downloads:</b> <MdOutlineFileDownload />
              {photos.downloads}
            </p>
            <p>
              <b>Created:</b> {new Date(photos.createdAt).toDateString()}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex gap-2 flex-wrap">
            {photos.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end items-end my-4">
            <Link href={"/all-photos"}>
              <button className="btn bg-black text-white">
                Back
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default photoDetailsPage;
