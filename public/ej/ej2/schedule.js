"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
var index = require("@syncfusion/ej2-schedule");
index.Schedule.Inject(index.Day, index.Week, index.WorkWeek, index.Month, index.Year, index.Agenda, index.MonthAgenda, index.TimelineViews, index.TimelineMonth, index.TimelineYear, index.Resize, index.DragAndDrop, index.ExcelExport, index.ICalendarExport, index.ICalendarImport, index.Print);
__exportStar(require("@syncfusion/ej2-schedule"), exports);