export type Flight = {
  airport: string;
  date: string;
  expectedTime: string;
  flightIdentifier: string;
  flightNumber: string;
  originalTime: string;
  score: string;
  url: string;
};

export type FlightsResponse = {
  flights: Flight[];
};
