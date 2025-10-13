function countResultsByType(results) {
  return results.reduce(
    ([pass, fail, skip], result) => {
      if (result === "PASS") pass++;
      else if (result === "FAIL") fail++;
      else skip++;
      return [pass, fail, skip];
    },
    [0, 0, 0]
  );
}

function averageTimeForPassed(results, times) {
  const [total, count] = results.reduce(
    ([sum, num], result, i) => {
      if (result === "PASS") {
        sum += times[i];
        num++;
      }
      return [sum, num];
    },
    [0, 0]
  );
  return count > 0 ? total / count : 0;
}

function findSlowestTest(names, times) {
  if (times.length === 0) return "";
  const slowestIndex = times.reduce(
    (maxIdx, t, i) => (t > times[maxIdx] ? i : maxIdx),
    0
  );
  return names[slowestIndex];
}

console.log(
  "Counts:",
  countResultsByType(["PASS", "FAIL", "PASS", "SKIP", "FAIL"])
);
console.log(
  "Avg time for PASS:",
  averageTimeForPassed(["PASS", "FAIL", "PASS"], [200, 800, 400]).toFixed(1)
);
console.log(
  "Slowest test:",
  findSlowestTest(["login", "payment", "report"], [200, 900, 700])
);
