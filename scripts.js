document.getElementById('downloadPDF').addEventListener('click', function () {
    const element = document.getElementById('contenedor-principal'); // Asegúrate de que el contenedor correcto esté seleccionado

    // Configuración personalizada para evitar cortes en el PDF
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5], // Márgenes (en pulgadas)
        filename:     'hoja_de_vida.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true }, // Escalado para mayor calidad
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }, // Tamaño Carta (8.5 x 11 in)
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] } // Evita cortes
    };

    // Generar PDF
    html2pdf().from(element).set(opt).save();
});


// Deshabilitar clic derecho
document.addEventListener('contextmenu', event => event.preventDefault());

// Deshabilitar teclas específicas (F12, Ctrl+Shift+I)
document.onkeydown = function (e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};


// function downloadPDF() {
//     const element = document.getElementById('contenedor-principal');

//     const options = {
//         margin: 0,
//         filename: 'Curriculum_.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' }
//     };

//     html2pdf().set(options).from(element).save();
// }

