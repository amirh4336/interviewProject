"use client";

import { Button } from "@/components/ui/button";
import { Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";

const ShowCase = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc?: string;
}) => {
  return (
    <div className="flex max-w-[300px]  flex-col text-center">
      <div className="group relative h-[280px]  w-full overflow-hidden rounded-[3px] bg-[#dcdddf]">
        <Image
          src={imageSrc ?? "/placeholder.svg"}
          alt={title}
          width={300}
          height={280}
          className="size-full rounded-[3px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/0 transition-all duration-300 ease-in-out group-hover:bg-white/30">
          <div className="flex flex-col gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              variant="outline"
              className="size-[55px] rounded-[3px] border-[#cacaca] bg-transparent p-0 [&_svg]:size-6"
            >
              <ShoppingBasket className=" text-gray-600" />
            </Button>
            <Button
              variant="outline"
              className="size-[55px] rounded-[3px] border-[#cacaca] bg-transparent p-0 [&_svg]:size-6"
            >
              <Search className=" text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
      <h3 className="mt-2 font-normal">{title}</h3>
    </div>
  );
};

export default ShowCase;
