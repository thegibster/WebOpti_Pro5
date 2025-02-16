// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
"use strict";

function logCRP() {
    var t = window.performance.timing,
        var dcl = t.domContentLoadedEventStart - t.domLoading,
            var complete = t.domComplete - t.domLoading;
    var stats = document.getElementById("crp-stats");
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
    logCRP();
});
