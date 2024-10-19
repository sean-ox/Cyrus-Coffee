export default function About() {
  return (
    <div className="my-[8rem] flex flex-col justify-start rounded-lg px-2 sm:px-[17rem]">
      <div className="font-mono text-2xl text-red-700">
        <h3 className="rounded-lg px-2 py-1 font-semibold shadow-black">
          Premium Quality
        </h3>
      </div>
      <div className="w-25rem text-5xl font-semibold sm:w-full">
        <h1 className="rounded-lg shadow-black">
          Indonesia Coffee Supplier and Wholesaler
        </h1>
      </div>
      <div className="mt-4 text-lg">
        <p>
          We supply premium coffee beans in bulk, with shipping available to any
          destination worldwide. Our carefully selected beans come from renowned
          coffee-growing regions, offering a range of unique flavor profiles. We
          also provide customized packaging solutions that reflect your brand's
          identity, ensuring your product stands out on the shelves.
        </p>
      </div>
    </div>
  );
}
