
const group1Images = [
    'img/psifiaka1-01.jpg', 
    'img/psifiaka1-02.jpg', 
    'img/psifiaka1-03.jpg',
    'img/psifiaka1-04.jpg', 
    'img/psifiaka1-05.jpg', 
    'img/psifiaka1-06.jpg', 
    'img/psifiaka1-07.jpg', 
    'img/psifiaka1-08.jpg', 
];

const group1Alts = [
'Φίδι',
'Άλογο',
'Αρκούδα',
'Λαγός',
'Χελώνα',
'Αετός',
'Παπαγάλος',
'Ελέφαντας'
];


let lastIndex1 = -1;  

function loadRandomImages() {
    const img1 = document.getElementById('image1');
    img1.classList.add('hidden');

    setTimeout(() => {
        let i;
        do {
            i = Math.floor(Math.random() * group1Images.length);
        } while (i === lastIndex1 && group1Images.length > 1);

        img1.src = group1Images[i];
        img1.alt = group1Alts[i];
        lastIndex1 = i;

        img1.classList.remove('hidden');
    }, 500);
}

    window.onload = loadRandomImages;