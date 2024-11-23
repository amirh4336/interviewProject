"use client";

import Image from "next/image";

const ShowCase = ({
  title,
  date,
  imageSrc,
}: {
  title: string;
  date: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default ShowCase;
