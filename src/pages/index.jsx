import { Divider } from "@nextui-org/react";
import NavigationBar from "../components/navbar";
import Products from "../components/products";
import About from "../components/about";
import Footer from "../components/footer";

export default function Index() {
  return (
    <div>
      <NavigationBar />
      <div className="my-[2rem] flex items-center justify-center">
        <div id="about">
          <About />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-0 z-[-1] h-[7%] bg-gradient-to-t from-background to-transparent sm:h-[15%]" />

        <div className="sm: relative z-0 pt-[7%]">
          <div className="bg-background">
            <div className="mt-[7rem]">
              <div
                id="products"
                className="my-8 flex items-center justify-center space-x-2 sm:px-[225px]"
              >
                <Divider className="w-[7rem] bg-primary sm:w-[20rem]" />
                <h1
                  className="text-center font-mono text-primary"
                  color="secondary"
                >
                  Products
                </h1>
                <Divider className="w-[7rem] bg-primary sm:w-[20rem]" />
              </div>
              <Products />
              <div
                id="contact"
                className="my-8 mt-[7rem] flex items-center justify-center space-x-2 sm:px-[225px]"
              >
                <Divider className="w-[7rem] bg-primary sm:w-[20rem]" />
                <h1
                  className="text-center font-mono text-primary"
                  color="secondary"
                >
                  Contact
                </h1>
                <Divider className="w-[7rem] bg-primary sm:w-[20rem]" />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
