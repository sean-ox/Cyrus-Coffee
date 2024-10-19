import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col items-center justify-center py-2 sm:flex-row">
        <div className="flex items-center justify-center py-0">
          <div
            className="my-4"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "5rem",
              width: "5rem",
            }}
          />
        </div>
        <h1 className="text-center font-mono text-xl text-background">
          cyrus
          <span className="text-black">coffee</span>
        </h1>
      </div>
      <div className="flex items-center justify-center py-2">
        <p className="px-2 text-start font-mono text-xl text-background sm:px-[17rem] sm:text-center">
          Jl. Kh. Agus Salim, Krajan, Umbulsari, Kec. Umbulsari, Kabupaten
          Jember, Jawa Timur 68166. +62 853-3859-0091 +62 851-8314-1099
          cyruscoffeeid@gmail.com
        </p>
      </div>
      <h1 className="mt-3 text-center font-mono text-xl text-background">
        Follow Us
      </h1>
      <div className="flex items-center justify-center gap-7 bg-secondary p-[1rem]">
        <a
          href="https://www.instagram.com/cyruscoffee.id/"
          target="blank"
          className="flex cursor-pointer flex-col items-center justify-center hover:text-primary"
        >
          <div className="rounded-full border-2 border-background p-2">
            <FiInstagram />
          </div>
          Instagram
        </a>
        <a
          href="https://wa.me/6285338590091?text=Hello%20Cyrus"
          className="flex cursor-pointer flex-col items-center justify-center hover:text-primary"
        >
          <div className="rounded-full border-2 border-background p-2">
            <FiPhone />
          </div>
          WhattApp
        </a>
        <a className="flex cursor-pointer flex-col items-center justify-center hover:text-primary">
          <div className="rounded-full border-2 border-background p-2">
            <FiFacebook />
          </div>
          Facebook
        </a>
      </div>
      <h1 className="text-center font-medium text-background">
        CopyRight © 2024 cyruscoffee.id All Right Reserved
      </h1>
    </div>
  );
}
