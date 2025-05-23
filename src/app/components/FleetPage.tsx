import Image from "next/image";
import React from "react";
import KingAIR200 from "../../../public/images/KingAIR200.png";
import KingAIRF90 from "../../../public/images/KingAIRF90.png";
import KingAIRB200 from "../../../public/images/KingAIRB200.png";
import KingAIRB200GT from "../../../public/images/KingAIRB200GT.png";
import CitationBravo from "../../../public/images/CitationBravo.png";
import GulfStreamG150 from "../../../public/images/Gulfstreamg150.png";
import GulfStreamG150_2 from "../../../public/images/GulfStream(2).png";
import GulfStreamG150_3 from "../../../public/images/d_g150_a_print_445_RT_1300_575_70-1024x453-removebg-preview.png";
import Cesnna from "../../../public/images/Cessna_560XL_Citation_XLS-removebg-preview.png";

const aircraftData = [
  {
    name: "King Air 200",
    tailNumber: "N30GT",
    seats: 6,
    range: "1400NM",
    image: KingAIR200,
  },
  {
    name: "King Air F90",
    tailNumber: "N30GT",
    seats: 6,
    range: "1400NM",
    image: KingAIRF90,
  },
  {
    name: "King Air B200",
    tailNumber: "N30GT",
    seats: 6,
    range: "1400NM",
    image: KingAIRB200,
  },
  {
    name: "King Air B200GT",
    tailNumber: "N30GT",
    seats: 6,
    range: "1400NM",
    image: KingAIRB200GT,
  },
];

const lightjets = [
    {
        name: "Citation Bravo",
        tailNumber: "N550ML",
        seats: 7,
        range: "1400NM",
        image: CitationBravo,
    },
    {
        name: "Gulfstream G150",
        tailNumber: "N8821C",
        seats: 6,
        range: "1400NM",
        image: GulfStreamG150,
    },
    {
        name: "Gulfstream G150",
        tailNumber: "N518KH",
        seats: 6,
        range: "1400NM",
        image: GulfStreamG150_2,
    },
    {
        name: "Gulfstream G150",
        tailNumber: "N360AV",
        seats: 6,
        range: "1400NM",
        image: GulfStreamG150_3,
    },
    {
        name: "Cesnna Citation CE560 Ultra",
        tailNumber: "561CC",
        seats: 6,
        range: "1400NM",
        image: Cesnna,
    }
]

const AircraftCard = ({ aircraft }: { aircraft: typeof aircraftData[0] }) => (
  <div className="flex justify-center">
    <Image src={aircraft.image} alt={aircraft.name} className="w-[100px] h-[100px] sm:w-xs sm:h-auto " />
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl sm:text-4xl font-bold italic font-staatliches">{aircraft.name}</h1>
      <div className="bg-[#000f1c] p-4 lg:p-12 -translate-x-8 relative w-[120%] [clip-path:polygon(10%_0%,85%_0%,75%_100%,0%_100%)]">
        <div className="-skew-x-4 w-full">
        <h1 className="text-lg italic font-semibold">
          Tailnumber: <span className="text-neutral-400">{aircraft.tailNumber}</span>
        </h1>
        <h1 className="text-lg italic">Seats: {aircraft.seats}</h1>
        <h1 className="text-lg italic">Range: {aircraft.range}</h1>
        </div>
      </div>
    </div>
  </div>
);

const AircraftCardRight = ({ aircraft }: { aircraft: typeof aircraftData[0] }) => (
  <div className="flex justify-center">
    <Image src={aircraft.image} alt={aircraft.name} className="w-[100px] h-[100px] sm:w-xs sm:h-auto " />
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl sm:text-4xl font-bold italic font-staatliches">{aircraft.name}</h1>
      <div className="bg-[#1d354b] p-4 lg:p-12 -translate-x-8 relative w-[120%] [clip-path:polygon(10%_0%,85%_0%,75%_100%,0%_100%)]">
        <div className="-skew-x-4 w-full">
        <h1 className="text-lg italic font-semibold">
          Tailnumber: <span className="text-neutral-400">{aircraft.tailNumber}</span>
        </h1>
        <h1 className="text-lg italic">Seats: {aircraft.seats}</h1>
        <h1 className="text-lg italic">Range: {aircraft.range}</h1>
        </div>
      </div>
    </div>
  </div>
);

const FleetPage = () => {
  return (
    <section id="fleetpage" className="min-h-screen overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full">
          <div className="grid grid-cols-2 h-full">
            {/* Turboprops Column */}
            <div className="bg-[#163659] opacity-95 min-h-screen">
              <div className="flex flex-col">
                <h1 className="italic text-4xl lg:text-6xl font-bold text-center font-staatliches">
                  <span className="text-6xl lg:text-9xl">T</span>URBO PROPS
                </h1>
                <div className="flex flex-col gap-10 mt-10">
                  {aircraftData.map((aircraft, index) => (
                    <AircraftCard key={index} aircraft={aircraft} />
                  ))}
                </div>
              </div>
            </div>

            {/* Jets Column */}
            <div className="bg-[#395a84] opacity-95 min-h-screen">
              <h1 className="italic text-4xl lg:text-6xl font-bold text-center font-staatliches">
                <span className="text-6xl lg:text-9xl">L</span>IGHT | MIDSIZE JETS
              </h1>
              <div className="flex flex-col gap-10 mt-10">
                  {lightjets.map((aircraft, index) => (
                    <AircraftCardRight key={index} aircraft={aircraft} />
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetPage;
