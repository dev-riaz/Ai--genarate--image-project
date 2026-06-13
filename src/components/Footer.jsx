import image1 from "@/assets/logo (1).png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr className="border border-gray-300 mt-3"/>
      <div>
        <footer className="footer sm:footer-horizontal bg-white text-base-content p-4">
          <div className="">
            <h1 className="flex justify-between items-center gap-4">
              <Image src={image1} height={40} width={40} alt="logo"></Image>
              pixgen
            </h1>
            <p>
              Create production-ready AI visuals in
              <br /> seconds. Built for speed, scale, and <br /> creativity.
            </p>
          </div>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Generate</a>
            <a className="link link-hover">Gallery</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms</a>
          </nav>
          <nav>
            <h6 className="footer-title">Start creating</h6>
            <a className="link link-hover">
              TGenerate your first AI image today.
            </a>
            <Link href={"/"}>
              <button className="btn ">Get Started</button>
            </Link>
          </nav>
        </footer>
        <hr className="border-gray-200" />
        <footer className="bg-white p-4">
          <aside className="flex justify-between items-center">
            <p>© {new Date().getFullYear()}pixgen - All right reserved</p>
            <p className="space-x-2">
              <Link href={"/"}>Privacy</Link>
              <Link href={"/"}>Terms</Link>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
