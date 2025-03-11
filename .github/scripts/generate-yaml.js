const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const yaml = require("js-yaml");

// Ensure _apps directory exists
const appsDir = path.join(__dirname, "../../_apps");
if (!fs.existsSync(appsDir)) {
  fs.mkdirSync(appsDir, { recursive: true });
}

// Read the CSV file
const results = [];
fs.createReadStream("../../database.csv")
  .pipe(csv())
  .on("data", (row) => {
    const fileName = row["Name"].toLowerCase().replace(/\s+/g, "-") + ".yml";
    const filePath = path.join(appsDir, fileName);

    // Convert Sources column into an array
    if (row["Sources"]) {
      row["Sources"] = row["Sources"].split(",").map((url) => url.trim());
    }

    // Convert row to YAML format
    const yamlContent = yaml.dump(row, { lineWidth: 120 });

    // Write YAML file
    fs.writeFileSync(filePath, yamlContent, "utf8");
    console.log(`Generated: ${filePath}`);
  })
  .on("end", () => {
    console.log("CSV processing complete.");
  });
