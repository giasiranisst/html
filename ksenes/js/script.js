const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      infoText = container.querySelector(".info-text");

const dictionary = {
        "Ασανσέρ": {
          "source": "Ascenceur (γαλλική λέξη)",
          "greek": "Ανελκυστήρας",
          "image": "img/ΑΣΑΝΣΕΡ.jpg"
        },
        "Γκαζόν": {
          "source": "Gazon (γαλλική λέξη)",
          "greek": "Χαμηλή χλόη",
          "image": "img/ΓΚΑΖΟΝ.jpg"
        },
        "Γκλάμουρ": {
          "source": "Glamour (αγγλική λέξη)",
          "greek": "Αίγλη, γοητεία, μεγαλείο",
          "image": "img/ΓΚΛΑΜΟΥΡ.jpg"
        },
        "Μπουτίκ": {
          "source": "Boutique (γαλλική λέξη)",
          "greek": "Μικρό κατάστημα που πουλάει ρούχα της μόδας",
          "image": "img/ΜΠΟΥΤΙΚ.jpg"
        },
        "Ντοκιμαντέρ": {
          "source": "Documentaire (γαλλική λέξη)",
          "greek": "Ταινία έρευνας",
          "image": "img/ΝΤΟΚΙΜΑΝΤΕΡ.jpg"
        },
        "Παζλ": {
          "source": "Puzzle (αγγλική λέξη)",
          "greek": "Γρίφος",
          "image": "img/ΠΑΖΛ.jpg"
        },
        "Σεφ": {
          "source": "Chef (γαλλική λέξη)",
          "greek": "Αρχιμάγειρας",
          "image": "img/ΣΕΦ.jpg"
        },
        "Σόου": {
          "source": "Show (αγγλική λέξη)",
          "greek": "Θέαμα, επίδειξη",
          "image": "img/ΣΟΟΥ.jpg"
        },
        "Τρέντι": {
          "source": "Trendy (αγγλική λέξη)",
          "greek": "Μοντέρνος",
          "image": "img/ΤΡΕΝΤΙ.jpg"
        },
        "Χόμπι": {
          "source": "Hobby (αγγλική λέξη)",
          "greek": "Απασχόληση",
          "image": "img/ΧΟΜΠΙ.jpg"
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
      document.querySelector(".meaning span").innerText = dictionary[word].source;
      document.querySelector(".example span").innerText = dictionary[word].greek;
      document.querySelector(".wimage img").src = dictionary[word].image;
      document.querySelector(".wimage img").alt = word;
  }
}
