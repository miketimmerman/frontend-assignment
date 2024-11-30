import { useDepartures } from "@/hooks/useDepartures";
import Input from "./ui/Input";

const Departures = () => {
  // TODO add debounce
  const { search, flights, setSearch } = useDepartures();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-schiphol-blue my-10 text-center">
        Departures
      </h1>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      {/* TODO add not found message */}
      <pre>{JSON.stringify(flights, null, 2)}</pre>
    </div>
  );
};

export default Departures;
