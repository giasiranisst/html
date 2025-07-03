const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      infoText = container.querySelector(".info-text");

const dictionary = {
        "Ποδόσφαιρο": {
          "meaning": ["Παίζουν 2 ομάδες με 11 παίκτες ή παίκτριες. Κλωτσάνε τη μπάλα για να μπει στο τέρμα της αντίπαλης ομάδας."],
          "image": "img/footb.jpg"
        },
        "Μπάσκετ": {
          "meaning": ["Παίζουν 2 ομάδες με 5 παίκτες ή παίκτριες. Προσπαθούν να ρίξουν με τα χέρια τη μπάλα στο καλάθι της αντίπαλης ομάδας."],
          "image": "img/basket.jpg"
        },
        "Βόλεϊ": {
          "meaning": ["Παίζουν 2 ομάδες με 6 παίκτες ή παίκτριες που τις χωρίζει ένα ψηλό δίχτυ. Προσπαθούν να ρίξουν με τα χέρια την μπάλα στον χώρο της άλλης ομάδας."],
          "image": "img/volley.jpg"
        },
        "Τένις": {
          "meaning": ["Παίζουν 2 (ή 4) παίκτες ή παίκτριες που τους χωρίζει ένα χαμηλό δίχτυ. Ρίχνουν το μπαλάκι στον χώρο του αντιπάλου ή της αντιπάλου χτυπώντας δυνατά με τη ρακέτα. "],
          "image": "img/tennis.jpg"
        },
        "Πιγκ πογκ": {
          "meaning": ["Παίζουν 2 (ή 4) παίκτες ή παίκτριες με μικρό ελαφρύ μπαλάκι πάνω σε ειδικό τραπέζι χωρισμένο στη μέση με δίχτυ. Ρίχνουν το μπαλάκι στον χώρο του αντιπάλου ή της αντιπάλου χτυπώντας δυνατά με μια μικρή ρακέτα."],
          "image": "img/ping pong.jpg"
        },
        "Πόλο": {
          "meaning": ["Παίζουν 2 ομάδες με 7 παίκτες μέσα στο νερό, σε πισίνα. Προσπαθούν κολυμπώντας να ρίξουν με τα χέρια την μπάλα στο τέρμα της αντίπαλης ομάδας."],
          "image": "img/water.jpg"
        },
      };

function search() {
   container.classList.remove("active");
   infoText.style.color = "#000";

    var word = dropdown.options[dropdown.selectedIndex].text;

    infoText.innerHTML = `Αναζήτηση του γράμματος <span>"${word}"</span>`;

    if (!dictionary[word]) {
        infoText.innerHTML = ``
    }
    else {
          container.classList.add("active"); 
          const content = document.getElementById('content');   
          content.innerHTML = "";
          keys = Object.keys(dictionary);

          const len = dictionary[word]['meaning'].length;
          const with_num = len > 1; 
          for (var k = 0; k < len; k++) {
                  mean_example(dictionary[word], k, 'meaning', 'Περιγραφή', with_num);
          }
          if (dictionary[word]['image'].length > 0) {
              const newLi = document.createElement('li');
              newLi.setAttribute('class', 'wimage');
    
              const newDiv = document.createElement('div');
              newDiv.setAttribute('class', 'details image');
    
              const newImg = document.createElement('img');
              newImg.setAttribute('src', dictionary[word]['image']);
              newImg.setAttribute('alt', word);
    
              newDiv.appendChild(newImg);
              newLi.appendChild(newDiv);
              content.appendChild(newLi);
          }      
     }
}

function mean_example(word, k, clss, str, with_num) {
    const newLi = document.createElement('li');
    newLi.setAttribute('class', clss);

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'details');

    const newP = document.createElement('p');
    const newSpan = document.createElement('span');

    const num = (with_num) ? String(k+1) : "";
    newP.textContent = str + " " + num;
    newSpan.textContent = word[clss][k];

    newDiv.appendChild(newP);
    newDiv.appendChild(newSpan);

    newLi.appendChild(newDiv);
    content.appendChild(newLi);
}