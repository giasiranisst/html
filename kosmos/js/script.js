const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      p_example1 = container.querySelector(".example1 p"),
      li_example2 = container.querySelector(".example2"),
      infoText = container.querySelector(".info-text");

const dictionary = {
        "το ανάστημα": {
          "definition": "κορμοστασιά , μπόι (κυριολεξία), δύναμη της ψυχής (μεταφορά)",
          "example1": "Έχει μεγάλο ανάστημα, γιατί αν και μικρή σε ηλικία είναι αρκετά ψηλή. (κυριολεξία)",
          "example2": "Σήκωσε ανάστημα και αντιμετώπισε τον εχθρό του κατάματα. (μεταφορά)",
          "image": "img/ΑΝΑΣΤΗΜΑ.jpg"
        },
        "ο αντίκτυπος": {
          "definition": "το αποτέλεσμα μιας πράξης, θετικής ή αρνητικής.",
          "example1": "Η ανακύκλωση έχει θετικό αντίκτυπο στο φυσικό περιβάλλον.",
          "example2": "",
          "image": "img/ANTIKTYPOS.jpg"
        },
        "ο/η ακτιβιστής/στρια": {
          "definition": "ο/η ενεργός πολίτης που δρα για τα διάφορα θέματα που προβληματίζουν μια κοινωνία π.χ. για τη φτώχεια, την ισότητα των δύο φύλων, την καταστροφή του περιβάλλοντος, κτλ. ",
          "example1": "Η Μαλάλα Γιουσαφζάι είναι μια ακτιβίστρια που αγωνίζεται για το δικαίωμα όλων των παιδιών στην εκπαίδευση.",
          "example2": "",
          "image": "img/AKTIBISTIS.jpg"
        },
        "βιώσιμος/η/ο": {
          "definition": "που μπορεί να διατηρηθεί στη ζωή (κυριολεξία) ή που μπορεί να έχει διάρκεια (μεταφορά).",
          "example1": "Το σπίτι αυτό είναι αρκετά βιώσιμο, εφόσον έχει τα απαραίτητα για να κατοικήσει μια οικογένεια σε αυτό.",
          "example2": "",
          "image": "img/empty.jpg"
        },
        "δημόσιος/α/ο": {
          "definition": " κάποιος που προορίζεται για τον λαό και δεν ανήκει σε κάποιον ιδιώτη.",
          "example1": "Οι δρόμοι είναι δημόσιοι και όχι ιδιωτικοί, αφού μπορεί να τους χρησιμοποιεί ο καθένας μας.",
          "example2": "",
          "image": "img/empty.jpg"
        },
        "έμφυτος/η/ο": {
          "definition": "ένα χαρακτηριστικό γνώρισμα που κάποιος το έχει από τη φύση του χωρίς να του το έχει διδάξει κάποιος.",
          "example1": "Η αδελφή μου έχει έμφυτο ταλέντο στο τραγούδι, χωρίς να έχει πάει ποτέ στο ωδείο.",
          "example2": "",
          "image": "img/empty.jpg"
        },
        "εκπληρώνω": {
          "definition": "κάνω κάτι πραγματικότητα.",
          "example1": "Εκπλήρωσα τον στόχο μου να τα πάω καλά στο διαγώνισμα.",
          "example2": "",
          "image": "img/empty.jpg"
        },
        "επεκτείνω": {
          "definition": "μεγαλώνω κάτι.",
          "example1": "Επέκτεινα το σπίτι μου, διότι αποφάσισα να κτίσω ακόμη δύο δωμάτια. (κυριολεξία).",
          "example2": "Επέκτεινα τις γνώσεις μου στους ηλεκτρονικούς υπολογιστές, κάνοντας κάποια επιπλέον μαθήματα. (μεταφορά).",
          "image": "img/empty.jpg"
        },
        "επιβαρυμένος/η/ο": {
          "definition": "κάτι που χειροτερεύει.",
          "example1": "Η υγεία μας είναι επιβαρυμένη από τον μολυσμένο αέρα, λόγω των καυσερίων.",
          "example2": "",
          "image": "img/EPIBARIMENOS.jpg"
        },
        "η νάρκη": {
          "definition": "ειδικό εκρηκτικό μηχάνημα (συσκευή) με εγκιβωτισμένη εκρηκτική ύλη, που χρησιμοποιείται ως αμυντικό ή επιθετικό όπλο, σε περίπτωση πολέμου.",
          "example1": "Αρκετοί στρατιώτες χάνουν μέλη από το σώμα τους ή και τη ζωή τους την ίδια, γιατί πατάνε νάρκες.",
          "example2": "",
          "image": "img/NARKH.jpg"
        },
        "η παιδική εργασία": {
          "definition": "η εκμετάλλευση των παιδιών σε συνθήκες δουλείας και σκλαβιάς που τους αφαιρεί το δικαίωμα στην εκπαίδευση, στην υγεία και στην ασφάλεια και είναι παράνομη.",
          "example1": "Πολλά παιδιά σε όλο τον κόσμο στερούνται το δικαιώμα στην εκπαίδευση λόγω της παιδικής εργασίας, αφού αναγκάζονται να δουλεύουν για να στηρίξουν οικονομικά την οικογένειά τους.",
          "example2": "",
          "image": "img/PAIDIKI ERGASIA.jpg"
        },
        "το τάγμα": {
          "definition": "μονάδα του στρατού που πολεμά στην ξηρά.",
          "example1": "Το δέκατο τάγμα πεζικού πέτυχε μια μεγάλη νίκη ενάντια στον εχθρό.",
          "example2": "",
          "image": "img/TAGMA.jpg"
        },
        "η ταχυμεταφορά": {
          "definition": "η γρήγορη μεταφορά και διανομή δεμάτων και άλλων προϊόντων.",
          "example1": "Πλέον, αρκετά καταστήματα χρησιμοποιούν εταιρείες ταχυμεταφοράς για να στείλουν γρήγορα τα προϊόντα τους στους πελάτες που παραγγέλνουν μέσω διαδικτύου. ",
          "example2": "",
          "image": "img/TAXYMETAFORA.jpg"
        }
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
        document.querySelector(".example1 span").innerText = dictionary[word].example1;
        if (dictionary[word].example2.length == 0) {
            li_example2.innerHTML = '';
            li_example2.style.padding=0;
            li_example2.style.margin=0;
            li_example2.style.border=0;
            p_example1.textContent = "Παράδειγμα";
        }
        else {
              li_example2.style.padding="0 0 17px 0";
              li_example2.style.margin="0 0 14px 0";
              li_example2.style.borderBottom="1px solid #ccc";
              const new_div = document.createElement('div');
              new_div.setAttribute('class', 'details');
              const new_p = document.createElement('p');
              p_example1.textContent = "Παράδειγμα 1";
              new_p.textContent = 'Παράδειγμα 2';
              const new_span = document.createElement('span');
              new_span.textContent = dictionary[word].example2;

              new_div.appendChild(new_p);
              new_div.appendChild(new_span);
              li_example2.appendChild(new_div);

        }
        document.querySelector(".wimage img").src = dictionary[word].image;
        document.querySelector(".wimage img").style.width='70%';
        document.querySelector(".wimage img").style.height = '30%';
        document.querySelector(".wimage img").alt = word;
    }
}
