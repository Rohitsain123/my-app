import Image from "next/image";
import React from "react";

function Scale() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] relative">
        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full"
            src={"/assetes/img/png/line2.png"}
            width={1440}
            height={400}
            alt={"line"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] md:px-[120px] lg:px-[180px] pt-[60px] lg:pt-[80px] pb-[60px] lg:pb-[140px]">
          <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336]">
            Dentals - Scale & Polish
          </h5>
          <p className="text-sm md:text-base lg:text-lg mt-[25px]">
            Dental health is a vital aspect of your pet's overall well-being.
            Just like humans, pets can experience dental problems, including
            plaque buildup, gum disease, and tooth decay. At Nebula Vets, we
            prioritize dental care and offer comprehensive dental services to
            ensure your pet's oral health remains in top condition.
          </p>{" "}
          <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] mt-[35px]">
            When to schedule a dental consultation
          </h5>
          <p className="text-sm md:text-base lg:text-lg mt-[25px]">
            If you notice any signs of dental problems in your pet, such as bad
            breath, red or swollen gums, difficulty eating, or loose teeth, it's
            essential to seek professional dental care. Schedule a dental
            consultation at Nebula Vets to have our skilled team assess your
            pet's dental health and recommend the most appropriate treatment
            options.
          </p>{" "}
          <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] mt-[35px]">
            Post Dental Care
          </h5>
          <p className="text-sm md:text-base lg:text-lg mt-[25px]">
            Most pets recover quickly after a dental. A little tiredness, and
            some post-anesthesia anxiety is normal. You can feed your pet the
            evening of their procedure; soft food for 14 days is recommended if
            any dental extractions were performed. If your pet had any
            extractions performed, we will send them home with pain relief to
            keep them comfortable.
          </p>
        </div>
      </div>
    </>
  );
}

export default Scale;
