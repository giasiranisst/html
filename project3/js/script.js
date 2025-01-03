const container = document.querySelector(".container"),
      dropdown = document.getElementById("dropdownMenu"),
      infoText = container.querySelector(".info-text");

let id = 0;

const categoryList = document.getElementById("letter-list").children;

let counter = 0;
for (let i = 0; i < categoryList.length; i++) {
  if (categoryList[i].tagName === 'LI') {
    ((counter) => {
      categoryList[i].addEventListener("click", () => wordList(counter, i));
    })(counter);
    counter++;
  }
}

wordList(0, 0);

function initialize(section, pos) {
  for (let i = 0; i < categoryList.length; i++) {
    if (categoryList[i].tagName === 'LI') {
        categoryList[i].setAttribute('class','');
    }
  }
  categoryList[pos].setAttribute('class','active');
  id = section;

  const content = document.getElementById('content');   
  content.innerHTML = "";
}

function wordList(section, pos) {
  initialize(section, pos);
  const dropDownList = document.getElementById("dropdownMenu");

  dropDownList.textContent = "";
  const option = document.createElement("option");
  option.innerHTML = '<option selected disabled value="">Διαλέγουμε τη λέξη που μας ενδιαφέρει και γνωρίζουμε τη σημασία της</option>';
  dropDownList.appendChild(option);
  Object.keys(dictionary[section][0]).forEach(key => {
        const option = document.createElement("option");
        option.textContent = key;
        dropDownList.appendChild(option);
    })
  }

function search() {

   container.classList.remove("active");
   infoText.style.color = "#000";

    var word = dropdown.options[dropdown.selectedIndex].text;

    infoText.innerHTML = "";

    if (!dictionary[id][0][word]) {
        infoText.innerHTML = ``
    }
    else {
          dropdown.options[0].setAttribute('disabled', true);
          container.classList.add("active"); 
          document.getElementById('content').innerHTML="";   

          mean_example(dictionary[id][0][word], 'meaning', 'Επεξήγηση');
          mean_example(dictionary[id][0][word], 'example', 'Παράδειγμα');
     }
}

function mean_example(word, clss, str, with_num) {
    const newLi = document.createElement('li');
    newLi.setAttribute('class', clss);

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'details');

    const newP = document.createElement('p');
    newP.textContent = str;
    newDiv.appendChild(newP);

    if (typeof word[clss] === 'object') {
      const len = word[clss].length;

      for (var k = 0; k < len; k++) {
        const newSpan = document.createElement('span');
        if (k + 1 == len)
            newSpan.innerHTML = word[clss][k];
        else
            newSpan.innerHTML = word[clss][k] + "<br>";

        newDiv.appendChild(newSpan);
      }
    }
    else {
          const newSpan = document.createElement('span');
          newSpan.innerHTML = word[clss];
          newDiv.appendChild(newSpan);
    } 

    newLi.appendChild(newDiv);
    content.appendChild(newLi);
}