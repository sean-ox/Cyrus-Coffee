import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import trust from "../assets/trust.png";
import quality from "../assets/quality.png";
import coffee from "../assets/coffee.png";
import percent from "../assets/percent.png";

export default function Products() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center px-2">
      <Card
        isBlurred
        variant="bordered"
        className="radius-2xl w-full p-4 text-primary sm:max-w-2xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center px-4">
            <Image
              alt="charcoal"
              className="w-full object-cover"
              height={200}
              width={200}
              src="https://images.unsplash.com/photo-1586104617501-1aed59cffb0a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="mt-2 max-w-2xl text-center">
            <h1 className="font-sans text-4xl">Best Supplier of Coffee</h1>
            <p className="mt-4">
              Welcome to cyrus coffee a chosen robusta coffee provider that
              gives the finest taste from tall quality coffee beans. We center
              on providing robusta coffee that's prepared to the leading
              measures to preserve freshness and true taste. With a commitment
              to supporting the nearby coffee industry, we work
              straightforwardly with trusted coffee agriculturists to guarantee
              each coffee bean we offer is collected and prepared with care. Our
              items are appropriate for coffee trade individuals, wholesalers,
              and coffee significant others who need to appreciate the sensation
              of premium coffee from a solid source. Find our coffee variations
              and taste the distinction!
            </p>
          </div>
        </div>
        <CardFooter className="flex justify-end">
          <Button variant="ghost" color="secondary" radius="lg" size="sm">
            show more
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-4 flex flex-col justify-center gap-[9rem] p-4 text-xl text-default sm:w-[64rem] sm:flex-row sm:gap-[10rem]">
        <div
          style={{
            backgroundImage: `url(${trust})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "7rem",
            width: "7rem",
          }}
        >
          <div className="mt-[7rem] flex flex-col items-center justify-center">
            <p className="text-center font-semibold">Trusted</p>
            <p className="text-center text-sm">
              Our partners are verified and reliable.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${coffee})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "7rem",
            width: "7rem",
          }}
        >
          <div className="mt-[7rem] flex flex-col items-center justify-center">
            <p className="text-center font-semibold">Coffee Beans</p>
            <p className="text-center text-sm">
              Sourced from the finest farms.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${quality})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "7rem",
            width: "7rem",
          }}
        >
          <div className="mt-[7rem] flex flex-col items-center justify-center">
            <p className="text-center font-semibold">Best Quality</p>
            <p className="text-center text-sm">
              Exceptional taste and aroma in every cup.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${percent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "7rem",
            width: "7rem",
          }}
        >
          <div className="mt-[7rem] flex flex-col items-center justify-center">
            <p className="text-center font-semibold">100% Satisfaction</p>
            <p className="text-center text-sm">
              Your happiness is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
