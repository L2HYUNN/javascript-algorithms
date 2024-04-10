const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "/test.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : dir;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n));

  const CCTV_WATCHING_DIRECTION = [
    [],
    ["left", "right", "top", "bottom"],
    [
      ["left", "right"],
      ["top", "bottom"],
    ],
    [
      ["top", "right"],
      ["right", "bottom"],
      ["bottom", "left"],
      ["left", "top"],
    ],
    [
      ["left", "top", "right"],
      ["top", "right", "bottom"],
      ["right", "bottom", "left"],
      ["bottom", "left", "top"],
    ],
    [["left", "top", "right", "bottom"]],
  ];

  const office = makeOffice();

  const cctvInfo = getCCTVInfo(office);
  const cctvCombination = getCCTVCombination(cctvInfo);

  let minDarkArea = Infinity;

  cctvCombination.forEach((combination) => {
    const office = makeOffice();

    combination.forEach(({ cctvDirection, cctvLocation }) => {
      if (typeof cctvDirection === "object") {
        cctvDirection.forEach((direction) => {
          paintSecurityArea(direction, cctvLocation, N, M, office);
        });
      } else {
        paintSecurityArea(cctvDirection, cctvLocation, N, M, office);
      }
    });

    minDarkArea = Math.min(minDarkArea, calculateDarkAreaCount(N, M, office));
  });

  return minDarkArea;

  function makeOffice() {
    return input.map((line) => {
      return line.split(" ").map((n) => parseInt(n));
    });
  }

  function getCCTVInfo(office) {
    const cctvInfo = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (0 < office[i][j] && office[i][j] <= 5) {
          cctvInfo.push({ cctvNumber: office[i][j], cctvLocation: [i, j] });
        }
      }
    }

    return cctvInfo;
  }

  function getCCTVCombination(cctvInfo) {
    const result = [];

    function backtrack(index, path) {
      if (index === cctvInfo.length) {
        result.push([...path]);
        return;
      }

      const cctv = cctvInfo[index];
      const cctvDirections = CCTV_WATCHING_DIRECTION[cctv.cctvNumber];

      for (let cctvDirection of cctvDirections) {
        path.push({ cctvDirection, cctvLocation: cctv.cctvLocation });
        backtrack(index + 1, path);
        path.pop();
      }
    }

    backtrack(0, []);

    return result;
  }

  function paintSecurityArea(cctvDirection, currentLocation, N, M, office) {
    if (cctvDirection === "left") {
      if (currentLocation[1] === 0) {
        return;
      }

      for (let i = currentLocation[1] - 1; i >= 0; i--) {
        const searchLocation = office[currentLocation[0]][i];

        if (searchLocation === 6) {
          break;
        }

        if (0 < searchLocation && searchLocation < 6) {
          continue;
        }

        office[currentLocation[0]][i] = "#";
      }
    }

    if (cctvDirection === "right") {
      if (currentLocation[1] === M - 1) {
        return;
      }

      for (let i = currentLocation[1] + 1; i < M; i++) {
        const searchLocation = office[currentLocation[0]][i];

        if (searchLocation === 6) {
          break;
        }

        if (0 < searchLocation && searchLocation < 6) {
          continue;
        }

        office[currentLocation[0]][i] = "#";
      }
    }

    if (cctvDirection === "top") {
      if (currentLocation[0] === 0) {
        return;
      }

      for (let i = currentLocation[0] - 1; i >= 0; i--) {
        const searchLocation = office[i][currentLocation[1]];

        if (searchLocation === 6) {
          break;
        }

        if (0 < searchLocation && searchLocation < 6) {
          continue;
        }

        office[i][currentLocation[1]] = "#";
      }
    }

    if (cctvDirection === "bottom") {
      if (currentLocation[0] === N - 1) {
        return;
      }

      for (let i = currentLocation[0] + 1; i < N; i++) {
        const searchLocation = office[i][currentLocation[1]];

        if (searchLocation === 6) {
          break;
        }

        if (0 < searchLocation && searchLocation < 6) {
          continue;
        }

        office[i][currentLocation[1]] = "#";
      }
    }
  }

  function calculateDarkAreaCount(N, M, office) {
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (office[i][j] === 0) {
          count++;
        }
      }
    }

    return count;
  }
}

console.log(solution(input));
