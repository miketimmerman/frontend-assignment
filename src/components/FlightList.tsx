import { Flight } from "@/types/flight";
import Card from "./ui/Card";

type FlightListProps = {
  flights: Flight[];
};

const FlightList = ({ flights }: FlightListProps) => (
  <div className="flex flex-col gap-4">
    {flights.map((flight) => (
      <Card key={flight.flightIdentifier}>
        <div className="text-xl font-bold">{flight.airport}</div>
        <div className="grid grid-cols-4">
          <div>
            <p className="font-bold">Vluchtnummer</p>
            <p>{flight.flightNumber}</p>
          </div>
          <div>
            <p className="font-bold">Datum</p>
            <p>{flight.date}</p>
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
      </Card>
    ))}
  </div>
);

export default FlightList;
