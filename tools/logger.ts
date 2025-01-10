import {
  configure,
  getConsoleSink,
  ConsoleSinkOptions,
  getLogger,
  getAnsiColorFormatter,
} from "@logtape/logtape";

// const console_options: ConsoleSinkOptions = {
//   // formatter: {},
// };

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
