import { useDepartures } from "@/hooks/useDepartures";
import { act, renderHook, waitFor } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";
import * as getFlights from "@/services/flights";

describe("useDepartures", () => {
  it("should return not found state", async () => {
    const getFlightsSpy = vi
      .spyOn(getFlights, "getFlights")
      .mockResolvedValue({ flights: [] });
    const { result } = renderHook(() => useDepartures());

    act(() => result.current.setSearch("amsterdam"));

    await waitFor(() => {
      expect(getFlightsSpy).toHaveBeenCalled();
    });

    expect(result.current.state).toBe("notFound");
  });

  it("should return success state", async () => {
    const getFlightsSpy = vi.spyOn(getFlights, "getFlights").mockResolvedValue({
      flights: [
        {
          flightIdentifier: "D20190401KL1221",
          flightNumber: "KL 1221",
          airport: "Sandefjord",
          date: "2022-02-25",
          expectedTime: "21:25",
          originalTime: "21:25",
          url: "/en/departures/flight/D20190401KL1221/",
          score: "58.817875",
        },
      ],
    });
    const { result } = renderHook(() => useDepartures());

    act(() => result.current.setSearch("amsterdam"));

    await waitFor(() => {
      expect(getFlightsSpy).toHaveBeenCalled();
    });

    expect(result.current.state).toBe("success");
  });

  it("should not call service when searchinput is empty", async () => {
    vi.useFakeTimers();
    const getFlightsSpy = vi
      .spyOn(getFlights, "getFlights")
      .mockResolvedValue({ flights: [] });

    const { result } = renderHook(() => useDepartures());
    act(() => result.current.setSearch(""));

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(getFlightsSpy).not.toHaveBeenCalled();
    expect(result.current.state).toBe("idle");
    vi.useRealTimers();
  });

  it("should not call service when searchinput is smaller than 3 characters", async () => {
    vi.useFakeTimers();
    const getFlightsSpy = vi
      .spyOn(getFlights, "getFlights")
      .mockResolvedValue({ flights: [] });

    const { result } = renderHook(() => useDepartures());
    act(() => result.current.setSearch("am"));

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(getFlightsSpy).not.toHaveBeenCalled();
    expect(result.current.state).toBe("idle");
    vi.useRealTimers();
  });
});
