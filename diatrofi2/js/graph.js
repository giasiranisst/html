const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function () {
    const inputs = document.querySelectorAll(".image-container input");
    inputs.forEach(input => {
        input.style.paddingBottom = "10px";
    });

    html2canvas(document.querySelector(".image-container"), {
        onrendered: function (canvas) {
            let image = canvas.toDataURL("image/png");
            let link = document.createElement('a');
            link.href = image;
            link.download = 'Δέντρο αναγκών.png';
            link.click();

            inputs.forEach(input => {
                input.style.paddingBottom = "5px";
            });
        }
    });
});


function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
}