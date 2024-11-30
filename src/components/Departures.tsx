import { useState } from "react";
import { useDepartures } from "@/hooks/useDepartures";
import Input from "./ui/Input";
import FlightList from "./FlightList";
import Button from "./ui/Button";
import { ChevronUp, ChevronDown } from "lucide-react";

const Departures = () => {
  const { search, state, flights, setSearch } = useDepartures();
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  return (
    <div className="container mx-auto px-4 flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-schiphol-blue my-10 text-center">
        Departures
      </h1>
      <div className=" flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Bijvoorbeeld Amsterdam"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className="sm:w-48 shrink-0 [&:disabled]:bg-gray-400 [&:disabled]:cursor-not-allowed flex items-center justify-between gap-2"
          disabled={state !== "success"}
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
        >
          Sorteer{" "}
          {sortDirection === "asc" ? (
            <>
              oplopend <ChevronUp />
            </>
          ) : (
            <>
              aflopend <ChevronDown />
            </>
          )}
        </Button>
      </div>
      {state === "loading" && <p>Informatie wordt opgehaald...</p>}
      {state === "notFound" && <p>Geen resultaten gevonden</p>}
      {state === "success" && (
        <FlightList flights={flights} sortDirection={sortDirection} />
      )}
    </div>
  );
};

export default Departures;
