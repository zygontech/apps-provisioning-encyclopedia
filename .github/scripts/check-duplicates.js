const fs = require("fs");
const csv = require("csv-parser");

const filePath = "database.csv";
const nameCounts = {};

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (row) => {
    const appName = row["Name"].trim().toLowerCase();
    nameCounts[appName] = (nameCounts[appName] || 0) + 1;
  })
  .on("end", () => {
    const duplicates = Object.entries(nameCounts).filter(
      ([name, count]) => count > 1
    );

    if (duplicates.length > 0) {
      console.error("❌ Duplicate app names found in database.csv:");
      duplicates.forEach(([name, count]) =>
        console.error(`- "${name}" appears ${count} times`)
      );
      process.exit(1); // Fail the GitHub action
    } else {
      console.log("✅ No duplicate app names found.");
    }
  });
