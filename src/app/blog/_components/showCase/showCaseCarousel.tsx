import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ShowCase from "./showCase";

const ShowCaseCarousel = () => {
  return (
    <div className="relative w-[calc(100%-180px)]">
      <Carousel
        opts={{
          dragFree: true,
          direction: "rtl",
          align: "center",
        }}
      >
        <CarouselContent className="-ml-4">
          {[...Array(10)].map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5 "
            >
              <ShowCase title="رول آپ" imageSrc="/placeholder.svg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="left-0  h-[52px] w-[40px] rounded-[3px] bg-white [&_svg]:size-10" />
        <CarouselPrevious className="right-[-12px] h-[52px] w-[40px] rounded-[3px] bg-white [&_svg]:size-10" />
      </Carousel>
    </div>
  );
};

export default ShowCaseCarousel;
