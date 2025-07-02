const Open = {
    name: 'open',
    title: 'Ανοιγμα',
    innerHTML: '<svg viewBox="0 0 479.254 479.254"> <path d="M441.028,120.746H206.309v-20.062c0-21.081-17.154-38.235-38.234-38.235H38.226C17.147,62.449,0,79.604,0,100.685V378.57 c0,21.08,17.147,38.234,38.226,38.234h402.803c21.079,0,38.226-17.154,38.226-38.234V158.982 C479.254,137.901,462.107,120.746,441.028,120.746z M38.226,94.727h129.85c3.286,0,5.957,2.672,5.957,5.958v36.2 c0,8.914,7.227,16.139,16.138,16.139h250.858c3.278,0,5.948,2.672,5.948,5.959v29.108h-414.7v-87.406 C32.277,97.398,34.948,94.727,38.226,94.727z M441.028,384.528H38.226c-3.278,0-5.949-2.673-5.949-5.958V220.368h414.7V378.57 C446.977,381.855,444.306,384.528,441.028,384.528z"/></svg>',
    buttonClass: 'se-openbtn',
};

const Export = {
    name: 'export',
    title: 'Εξαγωγή σε docx',
    innerHTML: '<svg width="64px" height="64px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M127.29 16.43a2.42 2.42 0 0 0-1.87-.91h-24.79c-1.14 0-2.12.8-2.33 1.92l-9.58 48.68l-13.47-48.86c-.08-.29-.22-.54-.39-.77c-.01-.01-.01-.04-.03-.05c-.03-.04-.08-.05-.11-.09c-.17-.2-.37-.36-.6-.49c-.08-.04-.15-.09-.23-.12c-.29-.13-.6-.22-.94-.22H55.04c-.33 0-.65.09-.94.22c-.08.04-.15.08-.23.12c-.23.13-.43.29-.6.49c-.04.04-.08.05-.11.09c-.01.02-.01.04-.03.05c-.17.23-.31.49-.39.77L39.29 66.12L29.7 17.44a2.386 2.386 0 0 0-2.33-1.92H2.59c-.73 0-1.43.34-1.87.91c-.46.57-.62 1.33-.45 2.03l24.79 100.45c.01.03.04.06.04.1c.06.19.13.36.23.53c.03.05.05.1.09.15c.02.03.03.06.06.09c.12.16.25.29.41.42c.02.02.05.03.08.05c.16.12.34.22.53.29c.05.02.11.04.17.06c.22.07.46.12.7.12h19.78c.33 0 .63-.08.92-.21c.08-.04.15-.08.23-.12c.2-.12.39-.26.55-.44c.04-.04.1-.06.14-.1c.02-.03.02-.06.04-.09c.19-.25.34-.52.42-.83L64 62.33l14.55 56.61c.08.31.23.58.42.83c.02.03.02.06.05.09c.03.04.09.06.13.1c.16.18.34.32.55.44c.08.04.15.09.23.12c.29.12.59.21.92.21h19.78c.24 0 .47-.05.7-.12c.06-.02.11-.04.18-.06c.18-.07.36-.17.53-.29c.03-.02.05-.03.08-.05c.15-.12.29-.26.41-.42c.02-.03.03-.06.06-.09c.03-.05.05-.1.09-.15c.09-.17.17-.34.23-.53c.01-.03.04-.06.04-.1l24.79-100.45c.16-.71 0-1.47-.45-2.04z" fill="#40C0E7"></path></g></svg>',
    buttonClass: 'se-exportbtn',
};

const startText = `
<ol contenteditable='false'>
     <li><span style='font-weight: bold;color:blue;'>🔊 Τι κάνει ο Ίαν;</span><br>Ο Ίαν <div contenteditable='true' style='display:inline-block;  color:brown;'>____________</div> με ένα πατίνι στο αέρα.</li><br>
	 <li><span style='font-weight: bold;color:blue;'>🔊 Ποιος πετά με ένα πατίνι στον αέρα;</span><br><div contenteditable='true' style='display:inline-block;  color:brown;'>____________</div> πετά με ένα πατίνι στον αέρα.</li>   <br>   
	 <li><span style='font-weight: bold;color:blue;'>🔊 Πού πετά ο Ίαν;</span><br>Ο Ίαν πετά <div contenteditable='true' style='display:inline-block;  color:brown;'>____________</div> με ένα πατίνι.</li><br>
	 <li><span style='font-weight: bold;color:blue;'>🔊 Πώς πετά ο Ίαν;</span><br>Ο Ίαν πετά στον αέρα <div contenteditable='true' style='display:inline-block;  color:brown;'>____________</div>.</li>
	 </ol>
`;

document.addEventListener('click', function (e) {
  const sound = e.target.innerText;
  if (sound.includes('Τι')) {
    playSound('sound1');
  } else if (sound.includes('Ποιος')) {
    playSound('sound2');
  } else if (sound.includes('Πού')) {
    playSound('sound3');
  } else if (sound.includes('Πώς')) {
    playSound('sound4');
  }
});

const editor = SUNEDITOR.create('editor', {
    "modules": ['dialog'],
    "plugins": [Open, Export],
    "mode": "classic",
    "rtl": false,
    "katex": "window.katex",
    "width": "99%",
    "minWidth": "30%",
    "maxWidth": "100%",
    "height": "calc(100vh - 360px)", 
    "minHeight": "200px",  
    "maxHeight": "calc(100vh - 50px)",  
    "charCounter" : true,
    "videoFileInput": false,
    "tabDisable": false,
    "placeholder": "Γράψε εδώ...",
    "autofocus": true,
    "font": ['sans-serif','Arial', 'Roboto', 'Noto Sans', 'Helvetica', 'Segoe UI', 'Ubuntu' ],
    "defaultStyle": "font-family: Arial, Roboto, 'Noto Sans', Helvetica, 'Segoe UI', Ubuntu, sans-serif; font-size: 18px;",
	"value": startText,

    "buttonList": [
        [
            "open",
            "save",
            "undo",
            "redo",
            "font",
            "fontSize",
            "formatBlock",
            "blockquote",
            "bold",
            "underline",
            "italic",
            "fontColor",
            "hiliteColor",
            "textStyle",
            "outdent",
            "indent",
            "align",
            "horizontalRule",
            "list",
            "lineHeight",
            "table",
            "link",
            "image",
            "fullScreen",
            "preview",
            "print",
            "export",
        ]
    ], 
     callBackSave: async function(contents, core) {

        var fileName = window.prompt('Δώσε όνομα στην εργασία σου:', 'Η εργασία μου');
        if (!fileName) {
            return; 
        }

        fileName = fileName + ".html";
        var doc = await convertImagesToBase64(contents);
        const blob = new Blob([doc], {type: 'text/html' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName; 

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        },   
			
    "lang": {
        code: 'el',
        toolbar: {
            default: 'Προεπιλογή',
            save: 'Αποθήκευση',
            open: 'Άνοιγμα',
            font: 'Γραμματοσειρά',
            formats: 'Στυλ',
            fontSize: 'Μέγεθος',
            bold: 'Έντονο',
            underline: 'Υπογράμμιση',
            italic: 'Πλάγια',
            fontColor: 'Χρώμα Γραμματοσειράς',
            hiliteColor: 'Χρώμα επισήμανσης κειμένου',
            indent: 'Αύξηση εσοχής',
            outdent: 'Μείωση εσοχής',
            align: 'Στοίχιση',
            alignLeft: 'Στοίχιση αριστερά',
            alignRight: 'Στοίχιση δεξιά',
            alignCenter: 'Στοίχιση στο κέντρο',
            alignJustify: 'Πλήρης στοίχιση',
            list: 'Λίστα',
            orderList: 'Αρίθμηση',
            unorderList: 'Κουκκίδες',
            horizontalRule: 'Οριζόντια γραμμή',
            hr_solid: 'Συμπαγής',
            hr_dotted: 'Με κουκκίδα',
            hr_dashed: 'Με παύλα',
            table: 'Πίνακας',
            link: 'Σύνδεση',
            image: 'Εικόνα',
            fullScreen: 'Πλήρης οθόνη',
            undo: 'Αναίρεση',
            redo: 'Επανάληψη',
            preview: 'Προεπισκόπηση',
            print: 'Εκτύπωση',
            tag_div: 'Κανονικό',
            tag_h: 'Κεφαλίδα',
            tag_blockquote: 'Σχόλιο',
            tag_pre: 'Κώδικας',
            template: 'Template',
            tag_p: 'Παράγραφος',
            lineHeight: 'Ύψος γραμμής',
            paragraphStyle: 'Στυλ παραγράφου',
            textStyle: 'Στυλ κειμένου',
            imageGallery: 'Γκαλερί εικόνων',
            dir_ltr: 'Αριστρερά προς δεξιά',
            dir_rtl: 'Δεξιά προς αριστερά',
            mention: 'Αναφορά',
            export: 'Εξαγωγή σε docx'
        },
        dialogBox: {
            linkBox: {
                title: 'Εισαγωγή συνδέσμου',
                url: 'URL σε σύνδεσμο',
                text: 'Κείμενο',
                newWindowCheck: 'Άνοιγμα σε νέο παράθυρο',
                downloadLinkCheck: 'Κατέβασμα συνδέσμου',
                bookmark: 'Σελιδοδείκτης'
            },
            imageBox: {
                title: 'Εισαγωγή εικόνας',
                file: 'Επιλογή από αρχείο',
                url: 'URL εικόνας',
                altText: 'Περιγραφή εικόνας'
            },
            videoBox: {
                title: 'Insert Video',
                file: 'Select from files',
                url: 'Media embed URL, YouTube/Vimeo'
            },
            audioBox: {
                title: 'Insert Audio',
                file: 'Select from files',
                url: 'Audio URL'
            },
            browser: {
                tags: 'Tags',
                search: 'Search',
            },
            caption: 'Εισαγωγή περιγραφήε',
            close: 'Κλείσιμο',
            submitButton: 'Υποβολή',
            revertButton: 'Επαναφορά',
            proportion: 'Διατήρηση αναλογιών',
            basic: 'Βασικό',
            left: 'Αριστερά',
            right: 'Δεξιά',
            center: 'Κέντρο',
            width: 'Πλάτος',
            height: 'Ύψος',
            size: 'Μέγεθος',
            ratio: 'Αναλογία'
        },
        controller: {
            edit: 'Διόρθωση',
            unlink: 'Αποσύνδεση',
            remove: 'Αφαίρεση',
            insertRowAbove: 'Εισαγωγή γραμμής επάνω',
            insertRowBelow: 'Εισαγωγή γραμμής κάτω',
            deleteRow: 'Διαγραφή γραμμής',
            insertColumnBefore: 'Εισαγωγή στήλης επάνω',
            insertColumnAfter: 'Εισαγωγή στήλης κάτω',
            deleteColumn: 'Διαγραφή στήλης',
            fixedColumnWidth: 'Σταθερό πλάτος στήλης',
            resize100: 'Αλλαγή μεγέθους 100%',
            resize75: 'Αλλαγή μεγέθους 75%',
            resize50: 'Αλλαγή μεγέθους 50%',
            resize25: 'Αλλαγή μεγέθους 25%',
            autoSize: 'Αυτόματο μέθεθος',
            mirrorHorizontal: 'Ανασστροφή, Οριζόντια',
            mirrorVertical: 'Αναστροφή, Κάθετα',
            rotateLeft: 'Περιστροφή αριστερά',
            rotateRight: 'Περιστροφή δεξιά',
            maxSize: 'Μέγιστο μέγεθος',
            minSize: 'Ελάχιστο μέγεθος',
            tableHeader: 'Κεφαλίδα πίνακα',
            mergeCells: 'Συγχώνευση κελιών',
            splitCells: 'Διαίρεση κελιού',
            HorizontalSplit: 'Οριζόντια διαίρεση',
            VerticalSplit: 'Κάθετη διαίρεση'
        },
        menu: {
            spaced: 'Διάστημα',
            bordered: 'Περίγραμμα',
            neon: 'Νέον',
            translucent: 'Ημιδιαφανές',
            shadow: 'Σκιά',
            code: 'Κώδικας'
        }
    }
});
const originalUndo = editor.core.history.undo;

editor.core.history.undo = function () {

	if (this.getCurrentIndex() > 1){
		originalUndo.apply(this, arguments);
	}		// Εκτελεί το κανονικό undo
	else {
		editor.setContents(startText);
		editor.core.history.reset();
	}
};

const exportButton = document.querySelector('.se-exportbtn');

exportButton.addEventListener('click', async function() {
    var fileName = window.prompt('Εξαγωγή σε Docx. Δώσε όνομα στην εργασία σου:', 'Η εργασία μου');
    if (!fileName) {
        return;
    }
    fileName = fileName + ".docx";

    try {
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>"+fileName+"</title></head><body>";
        var postHtml = "</body></html>";
        var contents = editor.getContents();
        var doc = await convertImagesToBase64(contents);
        var converted = htmlDocx.asBlob(preHtml + doc + postHtml);
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(converted);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Error generating .docx file", error);
    }
});

async function convertImagesToBase64(contents) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(contents, 'text/html');

    var regularImages = doc.querySelectorAll("img");
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    for (let imgElement of regularImages) {
            await new Promise((resolve, reject) => {
            var img = new Image();
                img.crossOrigin = 'Anonymous';

            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                try {
                    var dataURL = canvas.toDataURL('image/png');
                    imgElement.setAttribute('src', dataURL);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            };
            img.onerror = function() {
                reject(new Error("Σφάλμα φόρτωσης εικόνας: " + imgElement.src));
            };
            img.src = imgElement.src;
        });
    }

    canvas.remove();
    return doc.body.innerHTML;
};

const openButton = document.querySelector('.se-openbtn');
openButton.addEventListener('click', function() {

    var input = $(document.createElement('input')); 
    input.attr("type", "file");
    input.attr("accept", ".txt, .html, .htm");
    input.attr("multiple", false);

 
    input.on('change', function(e) {
        var selectedFile = e.target.files[0];

        if (selectedFile) {
            var reader = new FileReader();

            reader.onload = function(event) {
                var fileContent = event.target.result;
                editor.setContents(fileContent);
            };
        }
        reader.readAsText(selectedFile);
    });

    input.trigger('click');
    return false;
});


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const editorDialogs = document.querySelectorAll("input, span, textarea, label, a, button");

    editorDialogs.forEach((input) => {
      if (!input.hasAttribute("aria-label")) {
        let placeholder = input.getAttribute("placeholder") || input.name || "Editor input";
        input.setAttribute("aria-label", placeholder);
      }
    });
  }, 1000); 
});

function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  }

