const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      infoText = container.querySelector(".info-text");

const dictionary = {
        "Ανεμοδούρα": {
          "definition": "Ο δείκτης ανέμου",
          "example": "Σε πολλά σπίτια μπορεί κανείς να δει ανεμοδούρες που δείχνουν τη φορά του ανέμου. ",
          "image": "img/ΑΝΕΜΟΔΟΥΡΑ.jpg"
        },
        "Ασβέστιο": {
          "definition": "Μέταλλο, βασικό στοιχείο των οστών, το βρίσκουμε στα γαλακτοκομικά. ",
          "example": "Τα παιδιά πρέπει κάθε μέρα να καταναλώνουν τουλάχιστον 2 με 3 μερίδες γαλακτοκομικών, για να πάρουν αρκετό ασβέστιο.",
          "image": "img/ΑΣΒΕΣΤΙΟ.jpg"
        },
        "Δρασκελιά": {
          "definition": "Βήμα με μεγάλο άνοιγμα των ποδιών.",
          "example": "Οι αθλητές των 100 μέτρων δρόμου έχουν μεγάλη δρασκελιά.",
          "image": "img/ΔΡΑΣΚΕΛΙΑ.jpg"
        },
        "Ενυδάτωση": {
          "definition": "Αποκατάσταση ποσότητας νερού στον οργανισμό.",
          "example": "Η ενυδάτωση είναι πολύ σημαντική μετά την άσκηση, ειδικά αν έχουμε ιδρώσει πολύ.",
          "image": "img/ΕΝΥΔΑΤΩΣΗ.jpg"
        },
        "Οδύνη": {
          "definition": "Ο ψυχικός πόνος.",
          "example": "Η μεγαλύτερη οδύνη μετά τον τραυματισμό του ήταν ότι έπρεπε να εγκαταλείψει για πάντα τον αθλητισμό. ",
          "image": "img/ΟΔΥΝΗ.jpg"
        },
        "Ρινγκ": {
          "definition": "Εξέδρα για τη διεξαγωγή αγώνα πυγμαχίας ή πάλης.",
          "example": "Οι αθλητές ανέβηκαν στο ρινγκ, έτοιμοι να παλέψουν μεταξύ τους.",
          "image": "img/ΡΙΝΓΚ.jpg"
        },
        "Σνακ": {
          "definition": "Λίγο φαγητό ανάμεσα από γεύματα.",
          "example": "Όταν θέλουμε ένα σνακ, είναι καλό να προτιμάμε φρούτα και όχι γλυκά. ",
          "image": "img/ΣΝΑΚ.jpg"
        },
        "Τρικλίζω (ή τρεκλίζω)": {
          "definition": "Περπατάω κρατώντας με δυσκολία την ισορροπία μου, παραπατάω.",
          "example": "Ο μαραθωνοδρόμος τερμάτισε τρικλίζοντας. ",
          "image": "img/ΤΡΙΚΛΙΖΩ.jpeg"
        },
        "Υδατάνθρακες": {
          "definition": "Βασική πηγή ενέργειας του οργανισμού, βρίσκεται σε τροφές όπως το ρύζι, τα ζυμαρικά και το ψωμί. ",
          "example": "Σε μια ισορροπημένη διατροφή δεν πρέπει να καταναλώνουμε μόνο υδατάνθρακες.",
          "image": "img/ΥΔΑΤΑΝΘΡΑΚΕΣ.jpg"
        },
        "Υπερήλικας": {
          "definition": "Πολύ ηλικιωμένο άτομο.",
          "example": "Ρωτήσαμε έναν υπερήλικα ποιο είναι το μυστικό του που έζησε τόσα χρόνια και μας είπε η καλή διατροφή. ",
          "image": "img/ΥΠΕΡΗΛΙΚΑΣ.jpg"
        },
      };

function search() {
    container.classList.remove("active");
   infoText.style.color = "#000";

    var word = dropdown.options[dropdown.selectedIndex].text;

    infoText.innerHTML = `Αναζήτηση της λέξης <span>"${word}"</span>`;

    if (!dictionary[word]) {
        infoText.innerHTML = `Δεν μπόρεσα να βρω τη λέξη <span>"${word}"</span>. Παρακαλώ, δοκίμασε να ψάξεις μια άλλη λέξη!`
    }
    else {
        container.classList.add("active");    
        document.querySelector(".meaning span").innerText = dictionary[word].definition;
        document.querySelector(".example span").innerText = dictionary[word].example;
        document.querySelector(".wimage img").src = dictionary[word].image;
        document.querySelector(".wimage img").alt = word;
    }
}
