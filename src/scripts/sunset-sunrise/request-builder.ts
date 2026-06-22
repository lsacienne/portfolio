import { ResponseCache } from "../utils";
import { D1, DateKeyTypeConverter, DateString } from "./types";

export namespace SunsetSunrise {
  const baseURL = "https://api.sunrise-sunset.org/json";

  export interface GetParameter {
    lng: number;
    lat: number;
    date?: Date | DateString;
    callback?: string;
    formatted?: D1;
    tzid?: string;
  }

  export type OKGetResponse = {
    results: {
      sunrise: string;
      sunset: string;
      solar_noon: string;
      day_length: number | "string";
      civil_twilight_begin: string;
      civil_twilight_end: string;
      nautical_twilight_begin: string;
      nautical_twilight_end: string;
      astronomical_twilight_begin: string;
      astronomical_twilight_end: string;
    };
    status: "OK";
    tzid: string;
  };

  export type GetResponse =
    | OKGetResponse
    | {
        results: "";
        status:
          | "INVALID_REQUEST"
          | "INVALID_DATE"
          | "UNKNOWN_ERROR"
          | "INVALID_TZID";
      };

  export class RequestBuilder {
    private readonly dateConverter = new DateKeyTypeConverter();
    private readonly cachedResponses: ResponseCache<
      Date | DateString,
      GetResponse
    >;
    constructor(private baseURL: string = baseURL) {
      this.cachedResponses = new ResponseCache(this.dateConverter);
    }

    private getDateAsString(
      rawDate: Date | DateString | undefined,
    ): string | undefined {
      let date: string | undefined;
      if (rawDate !== undefined) {
        date = this.dateConverter.keyToString(rawDate);
      }
      return date;
    }

    private buildURLParams(parameters: GetParameter): Record<string, string> {
      const urlParams: Record<string, string> = {
        lng: `${parameters.lng}`,
        lat: `${parameters.lat}`,
      };
      const dateString = this.getDateAsString(parameters.date);
      if (dateString !== undefined) {
        urlParams["date"] = dateString;
      }
      if (parameters.callback !== undefined) {
        urlParams["callback"] = parameters.callback;
      }
      if (parameters.formatted !== undefined) {
        urlParams["formatted"] = `${parameters.formatted}`;
      }
      if (parameters.tzid !== undefined) {
        urlParams["tzid"] = parameters.tzid;
      }
      return urlParams;
    }

    buildRequest(parameters: GetParameter) {
      const urlParams: Record<string, string> = this.buildURLParams(parameters);
      const options: RequestInit = {
        method: "GET",
        body: new URLSearchParams(urlParams),
      };
      return new Request(this.baseURL, options);
    }

    async getResult(parameters: GetParameter): Promise<GetResponse> {
      if (this.cachedResponses.size > 0) {
        const date = parameters.date ?? new Date();
        const cachedResponse = this.cachedResponses.get(date);
        if (cachedResponse !== undefined) return cachedResponse;
      }
      const request = this.buildRequest(parameters);
      const response = await fetch(request);
      return response.json() as Promise<GetResponse>;
    }
  }
}
