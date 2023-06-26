// Function to generate the PDF
function exportToPDF() {
    const element = document.documentElement; // Get the HTML element to export

    html2pdf()
        .from(element)
        .save("CV Andres Montes (Español).pdf");
}

// Add a click event listener to the button
document.getElementById("exportButton").addEventListener("click", exportToPDF);

