const container = document.querySelector(".container"),
  dropdown = document.getElementById("dropdownMenu"),
  infoText = container.querySelector(".info-text");

const dictionary = {
  "Ποδόσφαιρο": {
    "meaning": [`Παίζουν 2 ομάδες με 11 παίκτες ή παίκτριες. Κλωτσάνε την <span class='clickable' data-term='μπάλα-ποδοσφαίρου'>μπάλα</span> για να μπει στο <span class='clickable' data-term='τέρμα'>τέρμα</span> της αντίπαλης ομάδας.`],
    "image": "img/1_Soccer.gif",
    "alt": "Ένας παίκτης κερδίζει την μπάλα, την κλωτσά με τα πόδια στον αέρα προς έναν συμπαίκτη του που πετυχαίνει γκολ με κεφαλιά.",
    "audio1": "audio/podosfero.mp3",
    "audio2": "audio/perigrafi podosfero.mp3"
  },
  "Μπάσκετ": {
    "meaning": ["Παίζουν 2 ομάδες με 5 παίκτες ή παίκτριες. Προσπαθούν να ρίξουν με τα χέρια την <span class='clickable' data-term='μπάλα-μπάσκετ'>μπάλα</span> στο <span class='clickable' data-term='καλάθι'>καλάθι</span> της αντίπαλης ομάδας."],
    "image": "img/1_basketball.gif",
    "alt": "2 ομάδες παίζουν μπάσκετ. Ένας παίκτης τρέχει, πηδά και βάζει καλάθι. ",
    "audio1": "audio/basket.mp3",
    "audio2": "audio/perigrafi basket.mp3"
  },
  "Βόλεϊ": {
    "meaning": ["Παίζουν 2 ομάδες με 6 παίκτες ή παίκτριες που τις χωρίζει ένα ψηλό <span class='clickable' data-term='ψηλό-δίχτυ'> δίχτυ</span>. Προσπαθούν να ρίξουν με τα χέρια την <span class='clickable' data-term='μπάλα-βολει'>μπάλα</span> στον χώρο της άλλης ομάδας."],
    "image": "img/1_Volleyball.gif",
    "alt": "Οι παίκτριες 2 ομάδων πηδούν ψηλά με σηκωμένα τα χέρια για να πετάξουν την μπάλα πάνω από το δίχτυ που τις χωρίζει. ",
    "audio1": "audio/volei.mp3",
    "audio2": "audio/perigrafi volei.mp3"
  },
  "Τένις": {
    "meaning": ["Παίζουν 2 (ή 4) παίκτες ή παίκτριες που τους χωρίζει ένα χαμηλό <span class='clickable' data-term='χαμηλό-δίχτυ'>δίχτυ</span>. Ρίχνουν το <span class='clickable' data-term='μπαλάκι'>μπαλάκι</span> στον χώρο του αντιπάλου ή της αντιπάλου χτυπώντας δυνατά με τη <span class='clickable' data-term='ρακέτα'>ρακέτα</span>. "],
    "image": "img/1_Tennis.gif",
    "alt": "Στο γήπεδο του τένις, ο ένας παίκτης, με τη ρακέτα του, χτυπά με δύναμη το μπαλάκι που περνά πάνω από το δίχτυ. ",
    "audio1": "audio/tenis.mp3",
    "audio2": "audio/perigrafi tenis.mp3"
  },
  "Πινγκ πονγκ": {
    "meaning": ["Παίζουν 2 (ή 4) παίκτες ή παίκτριες με μικρό ελαφρύ <span class='clickable' data-term='μπαλακι-πινγκ'>μπαλάκι</span> πάνω σε ειδικό <span class='clickable' data-term='τραπέζι-πινγκ'>τραπέζι</span> χωρισμένο στη μέση με δίχτυ. Ρίχνουν το μπαλάκι στον χώρο του αντιπάλου ή της αντιπάλου χτυπώντας δυνατά με μια μικρή <span class='clickable' data-term='ρακέτα-πινγκ'> ρακέτα</span>."],
    "image": "img/1_ping pong.gif",
    "alt": "2 παίκτες, απέναντι ο ένας στον άλλο, στις άκρες του ειδικού τραπεζιού, χτυπούν το μπαλάκι με τις ρακέτες τους.",
    "audio1": "audio/ping pong.mp3",
    "audio2": "audio/peigrafi ping pong.mp3"
  },
  "Πόλο": {
    "meaning": ["Παίζουν 2 ομάδες με 7 παίκτες μέσα στο νερό, σε πισίνα. Προσπαθούν κολυμπώντας να ρίξουν με τα χέρια την <span class='clickable' data-term='μπάλα-πολο'>μπάλα</span> στο <span class='clickable' data-term='τέρμα-πολο'>τέρμα</span> της αντίπαλης ομάδας."],
    "image": "img/1_waterpolo.gif",
    "alt": "Στην πισίνα, μια παίκτρια, κολυμπώντας, πετά την μπάλα στο τέρμα. Η τερματοφύλακας δεν καταφέρνει να την πιάσει. Γκολ!",
    "audio1": "audio/polo.mp3",
    "audio2": "audio/perigrafi polo.mp3"
  },
  "Κρίκετ": {
    "meaning": ["Παίζουν δύο ομάδες με 11 παίκτες ή παίκτριες η καθεμία. Ένα μέλος της ομάδας ρίχνει την <span class='clickable' data-term='μπάλα-kriket'>μπάλα</span> και ένα άλλο προσπαθεί να τη χτυπήσει με ένα ξύλινο <span class='clickable' data-term='ρόπαλο'>ρόπαλο</span>. Αν τη χτυπήσει, τρέχει μπρος-πίσω σε ένα μικρό κομμάτι του γηπέδου για να κερδίσει πόντους."],
    "image": "img/1_cricket.gif",
    "alt": "Στο γήπεδο του κρίκετ, ένας παίκτης πετά την μπάλα και ένας άλλος τη χτυπά με το ρόπαλο. Ο πρώτος παίκτης πανηγυρίζει.",
    "audio1": "audio/kriket.mp3",
    "audio2": "audio/perigrafi kriket.mp3"
  },
  "Μπόουλινγκ": {
    "meaning": ["Οι παίκτες και οι παίκτριες ρίχνουν μια βαριά <span class='clickable' data-term='μπάλα-bowling'>μπάλα</span> σε έναν μακρύ διάδρομο. Προσπαθούν να ρίξουν όσο περισσότερες <span class='clickable' data-term='κορύνες'>κορύνες</span> μπορούν, που είναι στημένες στο τέλος του διαδρόμου."],
    "image": "img/1_Bowling.gif",
    "alt": "Ένα παιδί ρίχνει με δύναμη την μπάλα του μπόουλινγκ στον γυαλιστερό διάδρομο για να χτυπήσει τις κορύνες.",
    "audio1": "audio/bowling.mp3",
    "audio2": "audio/perigrafi bowling.mp3"
  },
  "Πετάνκ": {
    "meaning": ["Παίζουν δύο άτομα ή δύο ομάδες. Οι παίκτες και οι παίκτριες ρίχνουν <span class='clickable' data-term='μεταλλικές-μπάλες'>μεταλλικές μπάλες</span>, προσπαθώντας να τις φέρουν όσο πιο κοντά γίνεται σε μια μικρή <span class='clickable' data-term='ξύλινη-μπάλα'>ξύλινη μπάλα</span>, που λέγεται «γουρουνάκι»."],
    "image": "img/1_petranque.gif",
    "alt": "Ένας παίκτης ρίχνει προσεκτικά την μπάλα του πετάνκ στον χώρο του παιχνιδιού, στην άμμο.",
    "audio1": "audio/petanque.mp3",
    "audio2": "audio/perigrafi petanque.mp3"
  },
  "Ράγκμπι": {
    "meaning": ["Παίζουν 2 ομάδες με 7, 13 ή 15 παίκτες ή παίκτριες η καθεμία. Μοιάζει με το ποδόσφαιρο, αλλά η <span class='clickable' data-term='μπάλα-rugby'>μπάλα</span> δεν είναι στρογγυλή, θυμίζει πεπόνι. Ένα μέλος της ομάδας προσπαθεί να τρέξει σε όλο το <span class='clickable' data-term='γήπεδο-rugby'>γήπεδο</span> με την μπάλα στα χέρια, να φτάσει στο αντίπαλο τέρμα και να την ακουμπήσει εκεί."],
    "image": "img/1_rugby.gif",
    "alt": "Όλοι οι παίκτες προσπαθούν να πιάσουν την μπάλα. Ένας παίκτης την κερδίζει, την κλωτσά σε συμπαίκτη του που την πιάνει με τα χέρια.",
    "audio1": "audio/ragby.mp3",
    "audio2": "audio/perigrafi ragby.mp3"
  },
  "Χάντμπολ": {
    "meaning": ["Παίζουν δύο ομάδες με 7 παίκτες ή παίκτριες η καθεμία. Οι παίκτες δεν κλωτσούν την <span class='clickable' data-term='μπάλα-handball'>μπάλα</span>, τη μεταφέρουν με τα χέρια. Προσπαθούν να τη ρίξουν στο <span class='clickable' data-term='τέρμα-handball'>τέρμα</span> της αντίπαλης ομάδας για να πετύχουν γκολ."],
    "image": "img/1_handball.gif",
    "alt": "2 ομάδες τρέχουν στο γήπεδο του χάντμπολ. Μια παίκτρια, με το χέρι, ρίχνει με δύναμη την μπάλα στο τέρμα.",
    "audio1": "audio/handball.mp3",
    "audio2": "audio/perigrafi handball.mp3"
  },
  "Χόκεϊ στον πάγο": {
    "meaning": ["Παίζουν δύο ομάδες με 6 παίκτες ή παίκτριες η καθεμία. Οι παίκτες φορούν <span class='clickable' data-term='παγοπέδιλα'>παγοπέδιλα</span> και κινούνται πάνω στον πάγο. Με ένα ειδικό <span class='clickable' data-term='μπαστούνι'>μπαστούνι</span> σπρώχνουν έναν μικρό <span class='clickable' data-term='δίσκος'>δίσκο</span>, που λέγεται «πακ», για να τον στείλουν μέσα στο τέρμα της άλλης ομάδας."],
    "image": "img/1_Hockey.gif",
    "alt": "Παίκτες από 2 ομάδες κινούνται γρήγορα πάνω στον πάγο χτυπώντας με τα μπαστούνια τους τον δίσκο. Προσπαθούν να βάλουν τέρμα.",
    "audio1": "audio/hockey ston pago.mp3",
    "audio2": "audio/perigrafi hockey ston pago.mp3"
  },
};

let audio2 = null;

function search() {
  container.classList.remove("active");
  infoText.style.color = "#000";

  var word = dropdown.options[dropdown.selectedIndex].text;

  infoText.innerHTML = `Αναζήτηση του λήμματος <span>"${word}"</span>`;

  if (!dictionary[word]) {
    infoText.innerHTML = ``
  }
  else {
    container.classList.add("active");
    const content = document.getElementById('content');
    content.innerHTML = "";

    const len = dictionary[word]['meaning'].length;
    const with_num = len > 1;
    for (var k = 0; k < len; k++) {
      mean_example(dictionary[word], k, 'meaning', 'Περιγραφή', with_num, dictionary[word]['audio2']);
    }
    if (dictionary[word]['image'].length > 0) {
      const newLi = document.createElement('li');
      newLi.setAttribute('class', 'wimage');

      const newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'details image');

      const newImg = document.createElement('img');
      newImg.setAttribute('src', dictionary[word]['image']);
      newImg.setAttribute('alt', dictionary[word]['alt']);

      newDiv.appendChild(newImg);
      newLi.appendChild(newDiv);
      content.appendChild(newLi);

      stopSound();

      const audio = new Audio(dictionary[word]['audio1']);
      audio.play();
    }
  }
}

function mean_example(word, k, clss, str, with_num, sound) {
  const newLi = document.createElement('li');
  newLi.setAttribute('class', clss);

  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'details');

  const newP = document.createElement('p');
  const newSpan = document.createElement('span');

  const num = (with_num) ? String(k + 1) : "";
  newP.textContent = str + " " + num;
  newSpan.innerHTML = word[clss][k];

  const img = document.createElement('img');
  img.setAttribute('class', 'description');
  img.setAttribute('aria-label', 'Ακουσε την περιγραφή.');
  img.setAttribute('src', 'img/speaker.svg');
  img.onclick = () => {
    stopSound();
    audio2 = new Audio(sound);
    audio2.play();
  };

  newDiv.appendChild(newP);
  newDiv.appendChild(img);

  newDiv.appendChild(newSpan);

  newLi.appendChild(newDiv);
  content.appendChild(newLi);
}

function stopSound() {
  if (audio2) {
    audio2.pause();
    audio2.currentTime = 0;
  }
}


const dictionary2 = {
  "μπάλα-ποδοσφαίρου": {
    explanation: "Μπάλα ποδοσφαίρου.",
    image: "img/balla podosfairou.jpg",
    alt: "Δερμάτινη μπάλα ποδοσφαίρου μπροστά από τα πόδια ενός ποδοσφαιριστή."
  },
  "τέρμα": {
    explanation: "Τέρμα ποδοσφαίρου.",
    image: "img/terma.jpg",
    alt: "Το τέρμα μοιάζει με ένα πολύ φαρδύ Π από ίσια ξύλα όπου είναι στερεωμένο δίχτυ. Μια παίκτρια κλωτσάει την μπάλα προς το τέρμα."
  },
  "μπάλα-μπάσκετ": {
    explanation: "Μπάλα του μπάσκετ.",
    image: "img/balla basket.jpg",
    alt:"Ένας παίκτης κρατά μια μπάλα του μπάσκετ. Απέναντί του ένας άλλος παίκτης σε αναπηρικό καροτσάκι."
  },
  "καλάθι": {
    explanation: "Καλάθι του μπάσκετ.",
    image: "img/kalathi basket.jpg",
    alt: "Ένα μεταλλικό στεφάνι από το οποίο κρέμεται ένα δίχτυ. Πάνω από το καλάθι, μια μπάλα του μπάσκετ."
  },
  "μπάλα-βολει": {
    explanation: "Μπάλα του βόλεϊ.",
    image: "img/balla volley.jpg",
    alt: "Μπάλα του βόλεϊ από δέρμα. Έχει βάρος λίγο μεγαλύτερο από ένα μπουκαλάκι νερού."
  },
  "ψηλό-δίχτυ": {
    explanation: "Δίχτυ του βόλεϊ.",
    image: "img/dixty volley.jpg",
    alt: "Μια παίκτρια σηκώνει ψηλά το χέρι για να φτάσει ψηλά στο δίχτυ."
  },
  "χαμηλό-δίχτυ": {
    explanation: "Δίχτυ του τένις.",
    image: "img/dixty tennis.jpg",
    alt: "Το χαμηλό δίχτυ του τένις χωρίζει το γήπεδο στη μέση. Μπροστά στο δίκτυ ένα κορίτσι κρατά ρακέτα και χτυπά ένα μπαλάκι."
  },
  "μπαλάκι": {
    explanation: "Μπαλάκι του τένις.",
    image: "img/ballaki tennis.jpg",
    alt: "Ένα μπαλάκι του τένις στο γήπεδο. "
  },
  "ρακέτα": {
    explanation: "Ρακέτα του τένις.",
    image: "img/raketa tennis.jpg",
    alt: "Μια ρακέτα για τένις. Έχει μακρύ χερούλι που καταλήγει σε ένα στρογγυλό μέρος με σκληρό δίκτυ.    "
  },
  "ρακέτα-πινγκ": {
    explanation: "Ρακέτα του πινγκ πονγκ.",
    image: "img/raketes ping pong.jpg",
    alt: "2 ξύλινες ρακέτες για πινγκ πονγκ. Επάνω τους είναι ένα μπαλάκι."
  },
  "τραπέζι-πινγκ": {
    explanation: "Τραπέζι του πινγκ πονγκ.",
    image: "img/trapezi.jpg",
    alt: "Ένα τραπέζι για πινγκ πονγκ χωρισμένο στη μέση από χαμηλό δίχτυ."
  },
  "μπαλακι-πινγκ": {
    explanation: "Μπαλάκι του πινγκ πονγκ.",
    image: "img/ballaki ping pong.jpg",
    alt: "Μπαλάκι για το πινγκ πονγκ πάνω σε μια ρακέτα."
  },
  "μπάλα-πολο": {
    explanation: "Μπάλα του πόλο.",
    image: "img/balla polo.jpg",
    alt: "Ένας παίκτης ετοιμάζεται να ρίξει την μπάλα σε συμπαίκτη του κι ένας άλλος, απέναντί του, προσπαθεί να τον εμποδίσει."
  },
  "τέρμα-πολο": {
    explanation: "Τέρμα του πόλο.",
    image: "img/terma polo.jpg",
    alt: "Στην πισίνα, μια παίκτρια προσπαθεί, κολυμπώντας, να ρίξει την μπάλα στο τέρμα. Το τέρμα είναι ένα δίχτυ πάνω από το νερό. "
  },
  "μπάλα-kriket": {
    explanation: "Μπάλα του κρίκετ.",
    image: "img/kriket_balla.jpg",
    alt: "Μια μπάλα του κρίκετ. Είναι μικρή και δερμάτινη. Την κρατά ένα χέρι που φορά γάντι του κρίκετ."
  },
  "ρόπαλο": {
    explanation: "Ρόπαλο του κρίκετ.",
    image: "img/kriket_ropalo.jpg",
    alt:"Ένα παιδί κρατά ένα ρόπαλο του κρίκετ. Το ρόπαλο είναι ένα χοντρό πλατύ ξύλο."
  },
  "μπάλα-bowling": {
    explanation: "Μπάλα του μπόουλινγκ.",
    image: "img/bowling_balla.jpg",
    alt: "Μια γυαλιστερή μπάλα του μπόουλινγκ. Έχει δύο τρύπες για να βάλει τα δάκτυλά του ο παίκτης, να την κρατήσει και να τη ρίξει."
  },
  "κορύνες": {
    explanation: "Κορύνες του μπόουλινγκ.",
    image: "img/bowling_korines.jpg",
    alt: "10 κορύνες. Μοιάζουν με μπουκάλια και έχουν ύψος περίπου όσο ένα μεγάλο πλαστικό μπουκάλι νερού."
  },
  "μεταλλικές-μπάλες": {
    explanation: "Μεταλλικη μπάλα του πετάνκ.",
    image: "img/petanque_balles.jpg",
    alt: "3 μεταλλικές μπάλες του παιχνιδιού πεντάκ πάνω στην άμμο. "
  },
  "ξύλινη-μπάλα": {
    explanation: "Ξύλινη μπάλα του πετάνκ.",
    image: "img/petanque_mikri balla.jpg",
    alt: "Η μικρή ξύλινη μπάλα του πεντάκ ανάμεσα σε 3 μεταλλικές μπάλες."
  },
  "μπάλα-rugby": {
    explanation: "Μπάλα του ράγκμπι.",
    image: "img/rugby_balla.jpg",
    alt: "Μια μπάλα του ράγκμπι. Είναι δερμάτινη και μακρουλή σαν πεπόνι."
  },
  "γήπεδο-rugby": {
    explanation: "Γήπεδο του ράγκμπι.",
    image: "img/rugby_gipedo.jpg",
    alt: "Γήπεδο του ράγκμπι καλυμμένο από κοντό χορτάρι. Στις 2 άκρες υπάρχουν τα τέρματα. Παίζουν 2 ομάδες."
  },
  "μπάλα-handball": {
    explanation: "Μπάλα του χάντμπολ.",
    image: "img/handball_balla.jpg",
    alt: "Ένα κορίτσι κρατά την μπάλα του χάντμπολ και ετοιμάζεται να τη ρίξει."
  },
  "τέρμα-handball": {
    explanation: "Τέρμα του χάντμπολ.",
    image: "img/handball_terma.jpg",
    alt: "Το τέρμα του χάντμπολ, ένα δίχτυ στηριγμένο σε μεγάλα ξύλα. Ένα παίκτης ρίχνει την μπάλα, ο τερματοφύλακας πηδά μπροστά του."
  },
  "παγοπέδιλα": {
    explanation: "Παγοπέδιλα του χόκεϊ.",
    image: "img/hockey_pagopedila.jpg",
    alt: "Ο παίκτης του χόκεϋ στον πάγο φορά παγοπέδιλα για να γλιστράει χωρίς να πέφτει. Σπρώχνει τον μικρό δίσκο με το μπαστούνι του."
  },
  "μπαστούνι": {
    explanation: "Μπαστούνι του χόκεϊ.",
    image: "img/hockey_bastouni.jpg",
    alt: "Ένας παίκτης κρατά το μπαστούνι του χόκεϊ στον πάγο. Είναι μακρύ και η άκρη που ακουμπά στον πάγο είναι καμπυλωτή και πλατιά."
  },
  "δίσκος": {
    explanation: "Δίσκος του χόκεϊ («πακ»).",
    image: "img/hockey_diskos.jpg",
    alt: "Τρεις μικροί δίσκοι του χόκεϊ στον πάγο. Η άκρη ενός μπαστουνιού σπρώχνει τον ένα δίσκο στον πάγο."
  },
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("clickable")) {
    const term = e.target.dataset.term;
    const entry = dictionary2[term];
    if (entry) {
      const modal_img = document.getElementById("modalImage");

      modal_img.src = entry.image;
      modal_img.setAttribute("alt", entry.alt);

      document.getElementById("modalText").textContent = entry.explanation;
      document.getElementById("modal").classList.add("show");
    }
  }
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("show");
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});