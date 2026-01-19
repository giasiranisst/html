
const group1Images = {
    "Χιονάτη": {
        "article": "H",
        "verb": "έχει",
        "image": 'img/group1/03.jpg',
        "alt": "Η Χιονάτη παίζει με μήλα που πετά ψηλά. Φοράει μια μακριά φαρδιά φούστα."
    },
    "Ηρακλής": {
        "article": "O",
        "verb": "δείχνει",
        "image": 'img/group1/09.jpg',
        "alt": "Ο Ηρακλής με το ρόπαλό του πολεμάει με ένα αρχαίο τέρας, τη Λερναία Ύδρα. Φοράει δέρμα λιονταριού."
    },
    "Πινόκιο": {
        "article": "O",
        "verb": "κοιτάει",
        "image": 'img/group1/07.jpg',
        "alt": "Ο Πινόκιο, μια ξύλινη κούκλα με μακριά σουβλερή μύτη, χαμογελάει. Φοράει σορτσάκι και ένα μικρό καπέλο."
    },
    "Ζορό": {
        "article": "O",
        "verb": "κρατάει",
        "image": 'img/group1/01.jpg',
        "alt": "Ο Ζορό, ένας ήρωας από το Μεξικό, πάνω στο άλογό του. Φοράει μαύρα ρούχα, καπέλο και μάσκα. Το άλογο στέκεται στα 2 πόδια."
    },
    "Σταχτοπούτα": {
        "article": "Η",
        "verb": "κρύβει",
        "image": 'img/group1/05.jpg',
        "alt": "Η Σταχτοπούτα με φτωχά, μπαλωμένα ρούχα. Δίπλα της είναι μια μεγάλη κολοκύθα. Κρατάει ένα καινούργιο γοβάκι (παπούτσι με τακούνι)."
    },
    "Σούπερμαν": {
        "article": "Ο",
        "verb": "πιάνει",
        "image": 'img/group1/06.jpg',
        "alt": "Ο Σούπερμαν, ένας πολύ δυνατός ήρωας, πετά πάνω από μια μεγάλη πόλη. Φοράει κολλητά ρούχα και κάπα."
    },
    "δράκος": {
        "article": "Ο",
        "verb": "παίζει με",
        "image": 'img/group1/04.jpg',
        "alt": "Ένας δράκος με φτερά, 4 πόδια και δυνατή ουρά. Από το στόμα βγάζει φωτιά."
    },
    "γίγαντας": {
        "article": "Ο",
        "verb": "ζωγραφίζει",
        "image": 'img/group1/08.jpg',
        "alt": "Ένας γίγαντας με μούσι και κατσαρά μαλλιά περπατά στο δάσος. Μεταφέρει στον ώμο του ένα παιδί. Κρατά μια μεγάλη κανάτα."
    },
    "Κοκκινοσκουφίτσα": {
        "article": "Η",
        "verb": "βάζει μέσα στο καλάθι",
        "image": 'img/group1/02.jpg',
        "alt": "Η Κοκκινοσκουφίτσα συναντά τον λύκο μέσα στο δάσος. Φοράει κόκκινη κάπα με κουκούλα."
    },
}

const group2Images = [
    'img/group2/psifiaka2-1.jpg',
    'img/group2/psifiaka2-2.jpg',
    'img/group2/psifiaka2-3.jpg',
    'img/group2/psifiaka2-4.jpg',
    'img/group2/psifiaka2-5.jpg',
    'img/group2/psifiaka2-6.jpg',
    'img/group2/psifiaka2-7.jpg',
    'img/group2/psifiaka2-8.jpg',
    'img/group2/psifiaka2-9.jpg',
    'img/group2/psifiaka2-10.jpg',
    'img/group2/psifiaka2-11.jpg',
    'img/group2/psifiaka2-12.jpg',
];

const group2Alts = [
    'Ένα πατίνι με μικρές ρόδες και τιμόνι.',
    'Ένα ξύλινο μεγάλο ρόπαλο.',
    'Ένα κόκκινο μπαλόνι.',
    'Ένα μήλο.',
    'Μία γόμα.',
    'Ένα μεγάλο ψαλίδι.',
    'Ένα ποδήλατο για παιδιά.',
    'Ένα βιβλίο ανοιχτό.',
    'Μία μαργαρίτα.',
    'Μια μαύρη μάσκα για το πάνω μέρος του προσώπου.',
    'Μια ομπρέλα.',
    'Ένα κόκκινο καπέλο.'
];


const group1Keys = Object.keys(group1Images);
const group2Indices = Array.from({ length: group2Images.length }, (_, i) => i);

let shuffledGroup1Keys = [...group1Keys];
let shuffledGroup2Indices = [...group2Indices];

let index1 = 0;
let index2 = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(shuffledGroup1Keys);
shuffleArray(shuffledGroup2Indices);

let lastSelectedGroup1 = null;
let lastSelectedGroup2 = null;

function getNextShuffledNumber(group) {
    if (group === 1) {
        if (index1 >= shuffledGroup1Keys.length) {
            shuffleArray(shuffledGroup1Keys);
            index1 = 0;
        }
        let next = shuffledGroup1Keys[index1++];

        if (next === lastSelectedGroup1 && shuffledGroup1Keys.length > 1) {
            if (index1 >= shuffledGroup1Keys.length) {
                shuffleArray(shuffledGroup1Keys);
                index1 = 0;
            }
            next = shuffledGroup1Keys[index1++];
        }
        lastSelectedGroup1 = next;
        return next;
    } else {
        if (index2 >= shuffledGroup2Indices.length) {
            shuffleArray(shuffledGroup2Indices);
            index2 = 0;
        }
        let next = shuffledGroup2Indices[index2++];

        if (next === lastSelectedGroup2 && shuffledGroup2Indices.length > 1) {
            if (index2 >= shuffledGroup2Indices.length) {
                shuffleArray(shuffledGroup2Indices);
                index2 = 0;
            }
            next = shuffledGroup2Indices[index2++];
        }
        lastSelectedGroup2 = next;
        return next;
    }
}
function loadRandomImages() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const article = document.getElementById('article');
    const verb = document.getElementById('verb');

    img1.classList.add('hidden');
    img2.classList.add('hidden');

    const randomKey1 = getNextShuffledNumber(1);
    const randomIndex2 = getNextShuffledNumber(2);

    let imagesLoaded = 0;

    function checkIfBothLoaded() {
        imagesLoaded++;
        if (imagesLoaded === 2) {
            article.innerText = group1Images[randomKey1].article;
            verb.innerText = group1Images[randomKey1].verb;
        }
    }

    img1.onload = () => {
        img1.classList.remove('hidden');
        checkIfBothLoaded();
    };

    img2.onload = () => {
        img2.classList.remove('hidden');
        checkIfBothLoaded();
    };

    img1.src = group1Images[randomKey1].image;
    img1.alt =  group1Images[randomKey1].alt;

    img2.src = group2Images[randomIndex2];
    img2.alt = group2Alts[randomIndex2];
}



window.onload = loadRandomImages;