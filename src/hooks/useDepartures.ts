import { useState } from "react";

import { getFlights } from "@/services/flights";
import { useEffect } from "react";
import { Flight } from "@/types/flight";

export const useDepartures = () => {
  const [search, setSearch] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [state, setState] = useState<"loading" | "idle" | "notFound">("idle");

  useEffect(() => {
    if (search.length >= 3) {
      setState("loading");
      getFlights(search).then((data) => {
        // set flights data
        setFlights(data.flights);

        setState(data.flights.length > 0 ? "idle" : "notFound");
      });
    } else {
      // reset flights data
      setFlights([]);
      setState("idle");
    }
  }, [search]);

  return { search, state, flights, setSearch };
};
