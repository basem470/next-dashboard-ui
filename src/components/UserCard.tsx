import Image from "next/image";
import React from "react";

interface props<T> {
  type: T;
  date?: Date;
  amount?: number;
}
const UserCard = ({
  type,
  date = new Date(),
  amount = 1250,
}: props<string>) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 even:bg-yellow-300 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          {date.toLocaleDateString()}
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{amount.toLocaleString()}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type + "s"}
      </h2>
    </div>
  );
};

export default UserCard;
