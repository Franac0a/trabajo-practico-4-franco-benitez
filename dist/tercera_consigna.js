// a) Tipo literal
let orderStatus;
orderStatus = "shipped";
// b) Enum
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    console.log(`[${level}] - ${message}`);
}
logMessage(LogLevel.Info, "Mensaje informativo");
logMessage(LogLevel.Warning, "Mensaje de alerta");
logMessage(LogLevel.Error, "Mensaje de error");
export {};
//# sourceMappingURL=tercera_consigna.js.map