const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      infoText = container.querySelector(".info-text");

const dictionary = {
        "αναπηρική κοινότητα": {
          "definition": "Το σύνολο των ατόμων που έχουν μια μορφή αναπηρίας.",
          "example": "Η αναπηρική κοινότητα πρέπει να έχει το δικαίωμα να εκφράζει την άποψή της για θέματα που την αφορούν."
        },
        "απολογητικός/ή/ό": {
          "definition": "Αυτός που με τον τρόπο που μιλά προσπαθεί να δικαιολογήσει τον εαυτό του για τις πράξεις του και να ζητήσει συγγνώμη.",
          "example": "Ο Κώστας, μετά την άσχημη συμπεριφορά του, μίλησε με απολογητικό τρόπο στη μητέρα του. "
        },
        "η εκστρατεία": {
          "definition": "Η ομαδική προσπάθεια με σκοπό να καταφέρει η ομάδα ένα συγκεκριμένο στόχο.",
          "example": "Κάθε χρόνο γίνεται μια εκστρατεία ενημέρωσης σε σχέση με τον αυτισμό, ώστε να ενημερωθεί ο κόσμος για το θέμα αυτό."
        }, 
        "η έλλειψη": {
          "definition": "Η απουσία.",
          "example": "Υπάρχει έλλειψη νερού, γιατί φέτος δεν έβρεξε αρκετά. (κυριολεξία) <br><br>Υπάρχει έλλειψη ησυχίας, γιατί η μουσική είναι πολύ δυνατή και ενοχλητική. (μεταφορά)"
        },
        "η έμφαση": {
          "definition": "Η σημασία",
          "example": "Δίνω έμφαση στο να γράφω συγυρισμένα, για να μπορούν οι άλλοι να διαβάσουν τα κείμενά μου."
        },
        "η ενσυναίσθηση": {
          "definition": "Το να μπορείς να μπαίνεις στη θέση του άλλου και να κατανοείς τις πράξεις και τα συναισθήματά του.",
          "example": "Πριν μιλήσουμε άσχημα σε κάποιο, καλό είναι να έχουμε την ενσυναίσθηση να σκεφτούμε πώς θα αισθανθεί."
        },
        "επίτηδες": {
          "definition": "Κάνω κάτι με πρόθεση και όχι άθελά μου, όχι χωρίς να το θέλω.",
          "example": "Eπίτηδες έσπρωξες τον συμμαθητή σου, γιατί ήσουν θυμωμένος και πληγωμένος, αλλά αυτό δεν ήταν σωστό."
        },
        "ετοιμόρροπος/η/ο": {
          "definition": "Ένα κτήριο το οποίο είναι έτοιμο να καταρρεύσει, να καταστραφεί.",
          "example": "Αυτή η πολυκατοικία είναι ετοιμόρροπη, τόσο παλιά που είναι. (κυριολεξία)<br><br>Η ψυχή μου είναι ετοιμόρροπη από τη μεγάλη λύπη. (μεταφορά)"
        },
        "ισοπεδωμένος/η/ο": {
          "definition": "Αυτός/ή/ό που πέφτει κάτω και γίνεται ένα με τη γη.",
          "example": "Το ξενοδοχείο, μετά τον βομβαρδισμό, είναι ισοπεδωμένο."
        },
        "η καμπάνια": {
          "definition": "Εκστρατεία, δηλαδή ομαδική προσπάθεια ενημέρωσης.",
          "example": "Φέτος, πραγματοποιήθηκε καμπάνια για την προστασία του δικαιώματος όλων των παιδιών στην εκπαίδευση από διάφορες εθελοντικές οργανώσεις."
        },
        "μεταναστεύω": {
          "definition": "Φεύγω από τη χώρα που μένω και πάω να ζήσω σε κάποια άλλη, λόγω πολέμου, ανεργίας, φυσικών καταστροφών.",
          "example": "Μετά τον Β’ παγκόσμιο πόλεμο, αρκετοί άνθρωποι από την Ελλάδαμετανάστευσαν σε άλλες χώρες, για να εργαστούν και να ξεκινήσουν μια καινούρια ζωή."
        },
        "η συμπερίληψη": {
          "definition": "Να περιλαμβάνεσαι κάπου π.χ. σε ένα σύνολο.",
          "example": "Είναι σημαντικό η καινούρια μαθήτρια να λάβει μέρος στο παιχνίδι, για να μη νιώσει μόνη της και να αισθανθεί συμπερίληψη στο σύνολο της τάξης."
        },
        "η συσχέτιση": {
          "definition": "Η σύνδεση ή και η σχέση που μπορεί να υπάρχει ανάμεσα σε πράγματα, γεγονότα ή πρόσωπα.",
          "example": "Ο Γιώργος είναι αρκετά ντροπαλός και αυτό τον δυσκολεύει να έχει πετύχει εύκολα συσχέτιση με καινούρια πρόσωπα και να κάνει νέους φίλους."
        },
        "παραβλέπω": {
          "definition": "Δε λαμβάνω υπόψη, αδιαφορώ.",
          "example": "O δάσκαλος παρέβλεψε ότι έχω ταλέντο στη ζωγραφική, δίνοντας σημασία μόνο στο ότι δεν είμαι καλός στα μαθηματικά."
        },
        "η προσκόλληση": {
          "definition": "Το να νιώθεις ότι έχεις συνεχώς την ανάγκη να βρίσκεσαι κοντά σε  συγκεκριμένα πρόσωπα ή αντικείμενα.",
          "example": "Το κορίτσι αυτό είχε προσκόλληση με ένα παιδικό της παιχνίδι, με αποτέλεσμα να στεναχωρηθεί πάρα πολύ, όταν το παιχνίδι έσπασε."
        },
        "η ρουτίνα": {
          "definition": "Καθημερινές ή πολύ συχνές συνήθειες.",
          "example": "Eίναι μέσα στη ρουτίνα μου ένας απογευματινός περίπατος στο πάρκο."
        },
        "το υστέρημα": {
          "definition": "Αυτό που λείπει π.χ. φαγητό ή χρήματα.",
          "example": "Πολύς κόσμος προσφέρει στον συνάνθρωπό του ό,τι μπορεί από το υστέρημά του."
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
        document.querySelector(".example span").innerHTML = dictionary[word].example;
    }
}