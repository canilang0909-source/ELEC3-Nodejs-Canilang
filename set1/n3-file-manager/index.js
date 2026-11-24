
/*
Full Name: Harold Canilang
Section: IV-BSIT-A
Activity Code: n3-file-manager
Date: November 20, 2026
*/


const fs = require("fs");
const path = require("path");

// Make a folder kung saan ise-save ung mga files
const folderPath = path.join(__dirname, "files");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// Kunin ung mga command at ung mga information na nilagay sa terminal
const command = process.argv[2];
const fileName = process.argv[3];
const fileContent = process.argv[4];

// CREATE FILE
if (command === "create") {
    const filePath = path.join(folderPath, fileName);

    // Gagawa ng bagong file then ilagay ung content dito
    fs.writeFileSync(filePath, fileContent);
    console.log("File created successfully!");

}

// READ FILE
else if (command === "read") {
    const filePath = path.join(folderPath, fileName);

    // I-check muna kung existing ung file bago basahin
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf8");
        console.log(fileData);
    } else {
        console.log("File does not exist!");
    }

}

// UPDATE FILE
else if (command === "update") {
    const filePath = path.join(folderPath, fileName);

    // I-check kung existing ung file bago magdagdag ng content
    if (fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, fileContent);
        console.log("File updated successfully!");
    } else {
        console.log("File does not exist!");
    }

}

// DELETE FILE
else if (command === "delete") {
    const filePath = path.join(folderPath, fileName);

    // I-check kung existing ung file bago burahin
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("File deleted successfully!");
    } else {
        console.log("File does not exist!");
    }

}

// LIST FILES
else if (command === "list") {

    // Kunin mo lahat ng files na nasa loob ng folder
    const fileList = fs.readdirSync(folderPath);

    if (fileList.length === 0) {
        console.log("No files found!");
    }

    // I-display ung information ng bawat file
    fileList.forEach(fileName => {
        const filePath = path.join(folderPath, fileName);
        const fileData = fs.readFileSync(filePath, "utf8");

        console.log("----------------------");
        console.log("Full Path:", filePath);
        console.log("File Name:", path.basename(fileName));
        console.log("Extension:", path.extname(fileName));
        console.log("Contents:", fileData);
    });

}

// Kapag hindi valid ung command, ito lalabas
else {
    console.log("Invalid command!");
}
