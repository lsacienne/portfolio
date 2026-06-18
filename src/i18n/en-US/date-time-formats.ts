import { DatetimeFormat } from "../date-time-formats";

export const datetimeFormats: DatetimeFormat = {
  homeGreeting: {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  },
  githubLastModified: {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  },
};
