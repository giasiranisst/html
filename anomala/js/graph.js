const config = {
    securityLevel:'loose',
      theme: 'base',
      startOnLoad: true,
      };
     mermaid.initialize(config);

    const dropmenu = document.getElementById('noun');

    function showChart() {
            const mermaidChart = document.getElementById('mermaid-chart');
            mermaidChart.removeAttribute('style');
            
            dropmenu.options[0].setAttribute('disabled', true);
            const noun = dropmenu.options[dropmenu.selectedIndex].text;

            var merm = document.getElementById("mermaid-chart");

            merm.removeAttribute('data-processed');
            merm.innerHTML = 
            `
               flowchart TD;
               A(` + noun + `)
               A===> B1(Συγκριτικός)
               A===> B2(Σχετικός υπερθετικός)
               A===> B3(Απόλυτος υπερθετικός)

               B1--- C1[μονολεκτικά]
               B1--- C2[περιφραστικά]
   
               B2--- C3[μονολεκτικά]
               B2--- C4[περιφραστικά]

               B3--- C5[μονολεκτικά]
               B3--- C6[περιφραστικά]

               C1---D1[_____________]
               C2---D2[_____________]
               C3---D3[_____________]
               C4---D4[_____________]
               C5---D5[_____________]
               C6---D6[_____________]

          style A color:#fff,fill:#6600ff,stroke:#333,stroke-width:0px,font-size:9pt;
          style B1 color:#fff,fill:#ff8000,stroke-width:2px;
          style B2 color:#fff,fill:#00b300,stroke-width:2px;
          style B3 color:#fff,fill:#179bcf,stroke-width:2px;
      
          click D1 "javascript:editNode(config, 10)"
          click D2 "javascript:editNode(config, 11)"
          click D3 "javascript:editNode(config, 12)"
          click D4 "javascript:editNode(config, 13)"
      
          click D5 "javascript:editNode(config, 14)"
          click D6 "javascript:editNode(config, 15)"
      
          style C1 color:#000,fill:#ff8000,stroke-width:2px;
          style C2 color:#000,fill:#ff8000,stroke-width:2px;
          style C3 color:#000,fill:#00b300,stroke-width:2px;
          style C4 color:#000,fill:#00b300,stroke-width:2px;
      
          style C5 color:#000,fill:#179bcf,stroke-width:2px;
          style C6 color:#000,fill:#179bcf,stroke-width:2px;

          style D1 color:#000,fill:#F9A825,stroke-width:2px;
          style D2 color:#000,fill:#F9A825,stroke-width:2px;
      
          style D3 color:#000,fill:#76FF03,stroke-width:2px;
          style D4 color:#000,fill:#76FF03,stroke-width:2px;
          style D5 color:#000,fill:#40C4FF,stroke-width:2px;
          style D6 color:#000,fill:#40C4FF,stroke-width:2px;
      `; 
      
            mermaid.init(config, ".mermaid");    
    }

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

      const noun = dropmenu.options[dropmenu.selectedIndex].text;
      merm.removeAttribute('data-processed');
      merm.innerHTML = 
      `        flowchart TD;
               A(` + noun + `)
               A===> B1(Συγκριτικός)
               A===> B2(Σχετικός υπερθετικός)
               A===> B3(Απόλυτος υπερθετικός)

               B1--- C1[μονολεκτικά]
               B1--- C2[περιφραστικά]
   
               B2--- C3[μονολεκτικά]
               B2--- C4[περιφραστικά]

               B3--- C5[μονολεκτικά]
               B3--- C6[περιφραστικά]

               C1---D1[` + graphid[10] + `]
               C2---D2[` + graphid[11] + `]
               C3---D3[` + graphid[12] + `]
               C4---D4[` + graphid[13] + `]
               C5---D5[` + graphid[14] + `]
               C6---D6[` + graphid[15] + `]

          style A color:#fff,fill:#6600ff,stroke:#333,stroke-width:0px,font-size:9pt;
          style B1 color:#fff,fill:#ff8000,stroke-width:2px;
          style B2 color:#fff,fill:#00b300,stroke-width:2px;
          style B3 color:#fff,fill:#179bcf,stroke-width:2px;
      
          click D1 "javascript:editNode(config, 10)"
          click D2 "javascript:editNode(config, 11)"
          click D3 "javascript:editNode(config, 12)"
          click D4 "javascript:editNode(config, 13)"
      
          click D5 "javascript:editNode(config, 14)"
          click D6 "javascript:editNode(config, 15)"
      
          style C1 color:#000,fill:#ff8000,stroke-width:2px;
          style C2 color:#000,fill:#ff8000,stroke-width:2px;
          style C3 color:#000,fill:#00b300,stroke-width:2px;
          style C4 color:#000,fill:#00b300,stroke-width:2px;
      
          style C5 color:#000,fill:#179bcf,stroke-width:2px;
          style C6 color:#000,fill:#179bcf,stroke-width:2px;

          style D1 color:#000,fill:#F9A825,stroke-width:2px;
          style D2 color:#000,fill:#F9A825,stroke-width:2px;
      
          style D3 color:#000,fill:#76FF03,stroke-width:2px;
          style D4 color:#000,fill:#76FF03,stroke-width:2px;
          style D5 color:#000,fill:#40C4FF,stroke-width:2px;
          style D6 color:#000,fill:#40C4FF,stroke-width:2px;
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
      link.download = 'Παραθετικά επιθέτων.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
  };
  img.src = svgURL;
}

// button event listener 
document.getElementById('saveButton').addEventListener('click', saveDiagramAsImage);
