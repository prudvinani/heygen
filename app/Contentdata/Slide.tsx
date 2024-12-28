import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "react-responsive";

const users = [
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413c0d764027125a80dd_Group%20249.avif",
    name: "user1",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d6522b3d2498c1dd1_Group%20248.avif",
    name: "user2",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d0cc978005c5a5e14_Group%20245.avif",
    name: "user3",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413a7930882266c1dbac_Group%20244.avif",
    name: "user4",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b4972c2e56c78ea71_Group%20243.avif",
    name: "user5",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/670051933909b90173a21035_Group%20242.webp",
    name: "user6",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413a34b82eaf38695bcb_Group%20241.avif",
    name: "user7",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b13a1439543c3f9f2_Group%20247.avif",
    name: "user8",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db41662d24d789691b855e_Group%20246.avif",
    name: "user9",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413bbc46621137cd853c_Group%20240.avif",
    name: "user10",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413ce36b887dca66f43d_Group%20250.avif",
    name: "user11",
  },
  {
    src: "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b0d764027125a8036_Group%20251.avif",
    name: "user12",
  },
];

const Slide = () => {
  const isMediumOrSmall = useMediaQuery({ query: "(max-width: 786px)" });

  return (
    <section>
      <div className="padding_Global w-full h-full pl-6 pr-6">
        <div className="Container_medium mx-auto w-full h-full">
          <div className="padding_section_Medium pt-20 pb-28">
            <div className="HomeReadyWrapper flex flex-col items-center justify-start gap-8">
              <h2 className="lg:text-[3.5rem] font-normal mdd:text-[2.7rem] smm:text-[2rem]">
                Ready to create?
              </h2>
              <a className="px-6 py-2.5 bg-black text-white hover:bg-[#a34cdb] rounded-[2rem] transition duration-300 ease-in-out">
                Get started for free
              </a>
            </div>
            <div className="homereadyFlexWrapper contain-inline-size">
              <SlidingUser1 />
              {isMediumOrSmall && <SlidingUser2 />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SlidingUser1 = () => {
  const usersArr = [...users, ...users];

  return (
    <div className="relative w-full h-full flex mt-16 overflow-hidden">
      <div className="inset-0 z-20 before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:w-1/6 before:h-full before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bg-gradient-to-l after:h-full after:w-1/6 after:from-white after:to-transparent"></div>
      <motion.div
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
        className="flex items-center justify-center gap-5 mix-blend-multiply"
      >
        {usersArr.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.name}
            className="inline-block lgg:max-w-[11.5rem] mdd:max-w-[13.125rem] smm:max-w-[9rem] w-full rounded-[0.5rem] align-middle"
          />
        ))}
      </motion.div>
    </div>
  );
};

const SlidingUser2 = () => {
  const usersArr = [...users, ...users];

  return (
    <div className="relative w-full h-full flex mt-16 overflow-hidden">
      <div className="inset-0 z-20 before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:w-1/6 before:h-full before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bg-gradient-to-l after:h-full after:w-1/6 after:from-white after:to-transparent"></div>
      <motion.div
        animate={{
          x: ["0%", "100%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
        className="flex items-center justify-center gap-5 mix-blend-multiply"
      >
        {usersArr.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.name}
            className="inline-block lgg:max-w-[11.5rem] mdd:max-w-[13.125rem] smm:max-w-[9rem] w-full rounded-[0.5rem] align-middle"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slide;
