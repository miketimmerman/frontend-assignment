import type { Flight, FlightsResponse } from "@/types/flight";

export const getFlights = async (
  search: string,
  limit = 5
): Promise<FlightsResponse> => {
  // fetch flights data
  const res = await fetch("/flights.json");
  const data = await res.json();

  // filter flights by search
  data.flights = data.flights.filter((flight: Flight) =>
    flight.airport.toLowerCase().includes(search.toLowerCase())
  );

  // limit the number of flights
  data.flights = data.flights.slice(0, limit);

  return data;
};
