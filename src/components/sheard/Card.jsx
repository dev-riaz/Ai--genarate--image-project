import Image from "next/image";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";

const Card = ({ photo }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-5">
        <Image
          src={photo.imageUrl}
          height={100}
          width={200}
          alt="card image"
          className="w-full h-60 object-cover"
        ></Image>
        <div className="space-y-3">
          <h2 className="mt-3 font-semibold">{photo.title}</h2>
          <div className="flex gap-4 items-center">
            <button className="btn">
              <FcLike />
              {photo.likes}
            </button>
            <button className="btn">
              <MdOutlineFileDownload />
              {photo.downloads}
            </button>
          </div>
          <div className="">
            <Link href={`/all-photos/${photo.id}`}>
              
              <button className="btn w-full rounded-full bg-white">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
