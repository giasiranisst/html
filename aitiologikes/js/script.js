const leftSentences = [
    "Πήρα το χρυσό στους αγώνες,",
    "Πολλοί άνθρωποι εγκαταλείπουν τη χώρα τους,",
    "Ταξίδεψα σε διάφορες χώρες στον κόσμο,",
    "Δεν κατάφερα να πάρω καλό βαθμό στο διαγώνισμα,",
    "Κοιμήθηκα νωρίς το προηγούμενο βράδυ,",
    "Δεν πήγα στην εκδρομή του σχολείου,"
];

const rightSentences = [
    "επειδή δεν μπορούν να βρουν δουλειά.",
    "αφού δεν διάβασα όσο έπρεπε.",
    "γιατί προπονήθηκα πάρα πολύ καλά.",
    "διότι ήθελα να γνωρίσω καινούριους πολιτισμούς.",
    "γιατί αρρώστησα το προηγούμενο βράδυ και δεν ένιωθα καλά.",
    "αφού θα ταξίδευα την επόμενη μέρα και ήθελα να είμαι ξεκούραστος."
];

const correctMatches = [2, 0, 3, 1, 5, 4];

const colors = ['#ff5733', '#FFBF00', '#00FFFF', '#FFFF00', '#00FF00', '#FF69B4'];
let selectedPairs = [];
let pendingPair = null;

document.addEventListener("DOMContentLoaded", () => {
    const leftColumn = document.querySelector(".left-column");
    const rightColumn = document.querySelector(".right-column");

    leftSentences.forEach((sentence, index) => {
        const div = document.createElement("div");
        div.classList.add("sentence");
        div.textContent = sentence;
        div.dataset.index = index;
        div.dataset.side = "left";
        div.onclick = () => selectSentence(div, 'left');
        leftColumn.appendChild(div);
    });

    rightSentences.forEach((sentence, index) => {
        const div = document.createElement("div");
        div.classList.add("sentence");
        div.textContent = sentence;
        div.dataset.index = index;
        div.dataset.side = "right";
        div.onclick = () => selectSentence(div, 'right');
        rightColumn.appendChild(div);
    });
});

function selectSentence(element, side) {
    const isPaired = selectedPairs.find(pair => pair[side] == element.dataset.index);

    if (isPaired) {
        deselectSentence(element, side);
    } else if (pendingPair && pendingPair.element === element) {
        element.style.backgroundColor = '';
        pendingPair = null;
    } else if (pendingPair && pendingPair.side !== side) {
        const color = pendingPair.color;
        element.style.backgroundColor = color;
        selectedPairs.push({
            [side]: element.dataset.index,
            [pendingPair.side]: pendingPair.element.dataset.index,
            color: color
        });
        pendingPair = null; 
    } else if (!pendingPair) {
        const availableColor = getAvailableColor();
        element.style.backgroundColor = availableColor;
        pendingPair = { element, side, color: availableColor };
    }
}

function deselectSentence(element, side) {
    const pairIndex = selectedPairs.findIndex(pair => pair[side] === element.dataset.index);
    if (pairIndex !== -1) {
        const pair = selectedPairs[pairIndex];
        const colorClass = pair.color;

        element.style.backgroundColor = '';
        const oppositeSide = side === 'left' ? 'right' : 'left';
        const oppositeElement = document.querySelector(`.column.${oppositeSide === 'left' ? 'left-column' : 'right-column'} .sentence[data-index="${pair[oppositeSide]}"]`);
        if (oppositeElement) {
            oppositeElement.style.backgroundColor = '';
        }

        selectedPairs.splice(pairIndex, 1);
    } else if (pendingPair && pendingPair.element === element) {
        element.style.backgroundColor = '';
        pendingPair = null;
    }
}

function getAvailableColor() {
    const usedColors = selectedPairs.map(pair => pair.color);
    for (const color of colors) {
        if (!usedColors.includes(color)) {
            return color;
        }
    }
    return colors[selectedPairs.length % colors.length];
}

function checkMatch() {
    let score = 0;

    selectedPairs.forEach(pair => {
        if (pair.left !== null && pair.right !== null && correctMatches[pair.left] == pair.right) {
            score++;
        }
    });
    Swal.fire("Αποτέλεσμα", `Αντιστοίχισες σωστά ${score} από τις ${correctMatches.length} προτάσεις!`);
}

function resetExercise() {
    const sentences = document.querySelectorAll('.sentence');
    sentences.forEach(sentence => {
        sentence.className = 'sentence';
		sentence.style.backgroundColor = '';
    });

    selectedPairs = [];
    pendingPair = null;
}
