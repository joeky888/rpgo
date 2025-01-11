import {
  configure,
  getAnsiColorFormatter,
  getConsoleSink,
  getLogger,
} from "@logtape/logtape";

await configure({
  sinks: {
    console: getConsoleSink({
      formatter: getAnsiColorFormatter({
        timestamp: "rfc3339",
      }),
    }),
  },
  loggers: [{ category: "", lowestLevel: "debug", sinks: ["console"] }],
});

export const logger = getLogger("");
