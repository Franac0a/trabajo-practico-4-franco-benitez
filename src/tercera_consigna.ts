// a) Tipo literal

let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";

// b) Enum

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] - ${message}`);
}

logMessage(LogLevel.Info, "Mensaje informativo");
logMessage(LogLevel.Warning, "Mensaje de alerta");
logMessage(LogLevel.Error, "Mensaje de error");
