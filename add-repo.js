const fs = require("fs");

const packageJson = require("./package.json");

if (!packageJson.repository) {
	packageJson.repository = {
		type: "git",
		url: "https://github.com/Kedinha/DevFood.git",
	};
	fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
	console.log("repository field added to package.json");
} else {
	console.log("repository field already exists in package.json");
}
