import { useState } from "react";

import { getFlights } from "@/services/flights";
import { useEffect } from "react";
import { Flight } from "@/types/flight";

export const useDepartures = () => {
  const [search, setSearch] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    if (search.length >= 3) {
      getFlights(search).then((data) => {
        // set flights data
        setFlights(data.flights);
      });
    } else {
      // reset flights data
      setFlights([]);
    }
  }, [search]);

  return { search, flights, setSearch };
};
