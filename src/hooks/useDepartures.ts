import { useState } from "react";

import { getFlights } from "@/services/flights";
import { useEffect } from "react";
import { Flight } from "@/types/flight";

export const useDepartures = () => {
  const [search, setSearch] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [state, setState] = useState<
    "loading" | "idle" | "success" | "notFound"
  >("idle");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      setState("loading");
      getFlights(debouncedSearch).then((data) => {
        // set flights data
        setFlights(data.flights);
        // set state based on if there are flights or not
        setState(data.flights.length > 0 ? "success" : "notFound");
      });
    } else {
      // reset flights data
      setFlights([]);
      // reset state
      setState("idle");
    }
  }, [debouncedSearch]);

  return { search, state, flights, setSearch };
};
