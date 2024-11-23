import { Button } from "@/components/ui/button";
import ShowCaseCarousel from "./showCaseCarousel";

const ShowCaseSection = () => {
  return (
    <div className="w-full overflow-hidden bg-[#f0f0f0] p-4 pl-0">
      <div className="!ml-0 mr-auto flex gap-x-[30px]  pb-1 pt-5 md:max-w-[1350px]">
        <div className="mb-3 flex !w-[165px] flex-col justify-between text-center">
          <div>
            <h2 className="pb-[20px] text-xl font-bold">
              محــصــــولات نمایشگــــاهی وهمــــایـــــش
            </h2>
            <p className="text-[12px] font-medium">
              ارائه سفارش محــصــــولات نمایشگــــاهی با استفاده از چاپ دیجیتال
            </p>
          </div>
          <Button
            className="mx-auto w-[150px] rounded-[3px] border-[#cacaca] bg-transparent font-bold"
            variant="outline"
          >
            مشاهده همه
          </Button>
        </div>
        <ShowCaseCarousel />
      </div>
    </div>
  );
};

export default ShowCaseSection;
