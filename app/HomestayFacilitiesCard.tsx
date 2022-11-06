"use client";

import { FaSwimmingPool } from "react-icons/fa";
import { GiBarbecue, GiElevator } from "react-icons/gi";
import classNames from "classnames";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomestayFacilitiesCard({ data }: any) {
  const [idFacility, setIdFacility] = useState<any>();

  useEffect(() => {
    setIdFacility(data[0].id);
  }, []);

  return (
    <>
      <div className="flex justify-evenly">
        {data?.map((facility: any) => (
          <button
            onClick={() => setIdFacility(facility.id)}
            key={facility.id}
            className={classNames(
              idFacility === facility.id
                ? " text-primary"
                : "text-zinc-500 hover:text-zinc-400",
              "group flex flex-col justify-center items-center text-xl mb-10 w-36 h-max font-bold transition"
            )}
          >
            <div
              className={classNames(
                idFacility === facility.id
                  ? " bg-white "
                  : "bg-zinc-300 group-hover:bg-zinc-200 transition",
                "rounded-2xl w-20 h-20 flex justify-center items-center mb-2"
              )}
            >
              {facility?.titleFacility === "Swimming Pool" && (
                <FaSwimmingPool
                  className={classNames(
                    idFacility === facility.id
                      ? " text-primary "
                      : "text-zinc-800",
                    "w-14 h-14"
                  )}
                />
              )}
              {facility?.titleFacility === "Barbeque Pit" && (
                <GiBarbecue
                  className={classNames(
                    idFacility === facility.id
                      ? " text-primary "
                      : "text-zinc-800",
                    "w-14 h-14"
                  )}
                />
              )}
              {facility?.titleFacility === "Elevator" && (
                <GiElevator
                  className={classNames(
                    idFacility === facility.id
                      ? " text-primary "
                      : "text-zinc-800",
                    "w-14 h-14"
                  )}
                />
              )}
            </div>
            {facility?.titleFacility}
          </button>
        ))}
      </div>
      {data?.map((facility: any) => {
        return (
          <div
            key={facility.id}
            className={classNames(
              idFacility !== facility.id && "hidden",
              " w-auto h-[24rem] relative overflow-hidden"
            )}
          >
            <Image
              fill={true}
              className=" object-cover"
              src={facility.image.url}
              blurDataURL={facility.image.blurhash}
              placeholder={"blur"}
              alt={facility.image.title}
            />
          </div>
        );
      })}
    </>
  );
}
