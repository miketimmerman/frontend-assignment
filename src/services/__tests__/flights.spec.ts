import { getFlights } from "@/services/flights";
import { describe, it, expect, vi, beforeEach } from "vitest";
import flights from "@/../public/flights.json";

describe("getFlights", () => {
  beforeEach(() => {
    const flightsMock = { ...flights }; // create a copy of the flights data
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(flightsMock),
    });
  });

  it("should return no flights when there is no match", async () => {
    const response = await getFlights("amsterdam");
    expect(response.flights).toHaveLength(0);
  });

  it("should return 5 flights with default limit", async () => {
    const response = await getFlights("lon");
    expect(response.flights).toHaveLength(5);
  });

  it("should return 6 flights with default limit", async () => {
    const response = await getFlights("lon", 10);
    expect(response.flights).toHaveLength(6);
  });
});
