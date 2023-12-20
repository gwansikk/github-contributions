// esm-example
import { getContributions } from "../dist/esm/index.esm.js";

const username = "gwansikk";

getContributions(username)
  .then((contributions) => {
    console.log(`GitHub Contributions for ${username}:`, contributions);
  })
  .catch((error) => {
    console.error("Error fetching contributions:", error);
  });
