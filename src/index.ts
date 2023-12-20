import { load } from "cheerio";

type ToolTips = {
  id: string;
  value: number;
};

export type Contributions = {
  [key: string]: number;
};

const parseTooltips = (html: string): Array<ToolTips> => {
  const $ = load(html);
  return $("tool-tip")
    .map((_, element) => {
      const forValue = $(element).attr("for");
      const value = $(element).text().trim().split(" ")[0];
      if (value && forValue) return { id: forValue, value: value === "No" ? 0 : parseInt(value, 10) };
    })
    .get();
};

const parseContributionsHtml = (html: string) => {
  const $ = load(html);
  const tooltips = parseTooltips(html);
  const contributions: Contributions = {};

  $("td").each((_, element) => {
    const id = $(element).attr("id");
    const dataDate = $(element).attr("data-date");
    const tooltip = tooltips.find((t) => t.id === id);
    if (tooltip && dataDate) contributions[dataDate] = tooltip.value;
  });

  return contributions;
};

export const getContributions = (githubName: string): Promise<Contributions> => {
  return new Promise((resolve, reject) => {
    const url = `https://github.com/users/${githubName}/contributions`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        resolve(parseContributionsHtml(html));
      })
      .catch((error) => {
        reject(`Error fetching contributions for ${githubName}: ${error.message}`);
      });
  });
};
