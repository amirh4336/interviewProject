import ShowCase from "./showCase";

const ShowCaseSection = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 bg-[#f0f0f0] p-4 md:grid-cols-4">
      <div className="container mx-auto space-y-4 py-8">
        <ShowCase
          title="T-Shirt Printing"
          imageSrc="/placeholder.svg?height=150&width=150"
        />
        <ShowCase
          title="Mug Printing"
          imageSrc="/placeholder.svg?height=150&width=150"
        />
        <ShowCase
          title="Flag Printing"
          imageSrc="/placeholder.svg?height=150&width=150"
        />
        <ShowCase
          title="USB Engraving"
          imageSrc="/placeholder.svg?height=150&width=150"
        />
      </div>
    </div>
  );
};

export default ShowCaseSection;
