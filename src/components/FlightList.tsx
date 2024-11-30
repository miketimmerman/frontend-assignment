import { Flight } from "@/types/flight";
import Card from "./ui/Card";
import { format } from "date-fns/format";
import ChevronRight from "./icons/ChevronRight";

type FlightListProps = {
  flights: Flight[];
};

const FlightList = ({ flights }: FlightListProps) => (
  <div className="flex flex-col gap-4">
    {flights.map((flight) => (
      <a
        href={`https://www.schiphol.nl${flight.url}`}
        key={flight.flightIdentifier}
        className="group"
      >
        <Card>
          <div className="flex flex-row justify-between gap-4">
            <div className="w-full">
              <div className="text-xl font-bold group-hover:underline mb-2">
                {flight.airport}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="font-bold">Vluchtnummer</p>
                  <p>{flight.flightNumber}</p>
                </div>
                <div>
                  <p className="font-bold">Datum</p>
                  <p>{format(new Date(flight.date), "dd-MM-yyyy")}</p>
                </div>
                <div>
                  <p className="font-bold">Vetrektijd</p>
                  <p>
                    {flight.expectedTime}{" "}
                    {flight.originalTime !== flight.expectedTime && (
                      <span className="text-schiphol-grey-500 line-through">
                        {flight.originalTime}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end group-hover:translate-x-1 transition-transform duration-300">
              <ChevronRight />
            </div>
          </div>
        </Card>
      </a>
    ))}
  </div>
);

export default FlightList;
