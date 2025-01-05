const config = {
    securityLevel:'loose',
      theme: 'base',
      startOnLoad: true,
      };
     mermaid.initialize(config);

    function editNode(config, id) {
      var merm = document.getElementById("mermaid-chart");
     // var graphid = merm.outerText.split("\n"); 

     var graphid = [];

     document.querySelectorAll('.nodeLabel').forEach((label) => {
            graphid.push(label.textContent);
     });
      
      graphid = split_nodes(graphid);

      const without_quotes = graphid[id].substring(
        graphid[id].indexOf("`") + 1,
        graphid[id].lastIndexOf("`"));

        if (without_quotes !== '') {
            graphid[id] = without_quotes;
        }
      
      (async () => {
        const { value: newvalue } = await Swal.fire({
        title: "Πληκτρολόγησε τη λέξη",
        input: "text",
        inputPlaceholder: "Πληκτρολόγησέ εδώ...",
        inputAttributes: {
          "aria-label": "Πληκτρολόγησέ εδώ..."
        },
        inputValue: graphid[id],
        showCancelButton: false,
        showClass:{ popup: 'swal2-show'},
        hideClass:{ popup: 'swal2-hide'},
      })
    
      if (newvalue !== null && newvalue !== undefined && newvalue.trim() !== "") {
        graphid[id] = preparestr(newvalue);     
     } else {
       graphid[id] = '_______';
     }
   
    
      merm.removeAttribute('data-processed');
      merm.innerHTML = 
      `
          flowchart TD;
    A(Βαθμοί επιθέτων)
         A====> B1(Συγκριτικός)
         A====> B2(Υπερθετικός)
         A==> B3(Θετικός)
         B1--- C1[` + graphid[4] + `]
         B1--- C2[` + graphid[5] + `]
         B1--- C3[` + graphid[6] + `]
         B1--- C4[` + graphid[7] + `]

         B2--- C5[` + graphid[8] + `]
         B2--- C6[` + graphid[9] + `]
         B2--- C7[` + graphid[10] + `]
         B2--- C8[` + graphid[11] + `]

         B3--- C9[` + graphid[12] + `]
         B3--- C10[` + graphid[13] + `]
         B3--- C11[` + graphid[14] + `]
         B3--- C12[` + graphid[15] + `]

    style A color:#fff,fill:#6600ff,stroke:#333,stroke-width:0px,font-size:9pt;
    style B1 color:#fff,fill:#ff8000,stroke-width:2px;
    style B2 color:#fff,fill:#00b300,stroke-width:2px;
    style B3 color:#fff,fill:#179bcf,stroke-width:2px;

    click C1 "javascript:editNode(config, 4)"
    click C2 "javascript:editNode(config, 5)"
    click C3 "javascript:editNode(config, 6)"
    click C4 "javascript:editNode(config, 7)"

    click C5 "javascript:editNode(config, 8)"
    click C6 "javascript:editNode(config, 9)"
    click C7 "javascript:editNode(config, 10)"
    click C8 "javascript:editNode(config, 11)"

    click C9 "javascript:editNode(config, 12)"
    click C10 "javascript:editNode(config, 13)"
    click C11 "javascript:editNode(config, 14)"
    click C12 "javascript:editNode(config, 15)"

    style C1 color:#000,fill:#ffa64d,stroke-width:2px;
    style C2 color:#000,fill:#ffa64d,stroke-width:2px;
    style C3 color:#000,fill:#ffa64d,stroke-width:2px;
    style C4 color:#000,fill:#ffa64d,stroke-width:2px;

    style C5 color:#000,fill:#00cc00,stroke-width:2px;
    style C6 color:#000,fill:#00cc00,stroke-width:2px;
    style C7 color:#000,fill:#00cc00,stroke-width:2px;
    style C8 color:#000,fill:#00cc00,stroke-width:2px;

    style C9 color:#000,fill:#47bceb,stroke-width:2px;
    style C10 color:#000,fill:#47bceb,stroke-width:2px;
    style C11 color:#000,fill:#47bceb,stroke-width:2px;
    style C12 color:#000,fill:#47bceb,stroke-width:2px;
`; 

      mermaid.init(config, ".mermaid");
})();

};  

  function preparestr(s){

   var specialChars = "@\`'\"();~<>+=-[]\\/{}|";

    for (var i = 0; i < specialChars.length; i++) {
      s = s.replace(new RegExp("\\" + specialChars[i], "gi"), "");
    }

    return s.trim();

  }
              


  function split_nodes(graphid) {
    for (var i=0; i < graphid.length; i++) {
         if (i <= graphid.length-2 && (graphid[i] === '' && graphid[i+1] !== '' && graphid[i+2]==='')) {
              graphid[i+1] = '"`' + graphid[i+1] +'`"'; 
          }
    }
    graphid = graphid.filter(a => a!="");

    return graphid;
  }

 function saveDiagramAsImage() {
  var svgElement = document.querySelector('#mermaid-chart svg');

  var svgRect = svgElement.getBoundingClientRect();
  var scaleFactor = window.devicePixelRatio || 1;

  var canvas = document.createElement('canvas');
  
  canvas.width = (svgRect.width + svgRect.width * 0.4) * scaleFactor;
  canvas.height = (svgRect.height + svgRect.height * 0.4) * scaleFactor;

  var ctx = canvas.getContext('2d');

  ctx.scale(scaleFactor, scaleFactor);

  var svgData = new XMLSerializer().serializeToString(svgElement);
  var svgURL = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);

  var img = new Image();
  img.onload = function() {
      ctx.drawImage(img, 0, 0, svgRect.width + svgRect.width * 0.4, svgRect.height + svgRect.height * 0.4);

      var link = document.createElement('a');
      link.download = 'Βαθμοί επιθέτων.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
  };
  img.src = svgURL;
}

// button event listener 
document.getElementById('saveButton').addEventListener('click', saveDiagramAsImage);
