
const fs = require("fs");

fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
    if (err) throw err;
    console.log("File written successfully!");

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
});
