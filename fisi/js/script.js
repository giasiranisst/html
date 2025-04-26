toolBtns = document.querySelectorAll(".tool"),
sizeSlider = document.querySelector("#size-slider"),
colorBtns = document.querySelectorAll(".base-colors .option"),
strokeBtns = document.querySelectorAll(".stroke-colors .stroke-option"),
colorPicker = document.querySelector("#color-picker"),
strokePicker = document.querySelector("#stroke-picker"),
clearCanvas = document.querySelector(".clear-canvas"),
saveImg = document.querySelector(".save-img");
fileinput = document.querySelector("#file_input");
textInput = document.querySelector("#textInput");

var container = document.getElementById('whitepage');

var stage = new Konva.Stage({
    container: 'whitepage',
    width: container.offsetWidth,
    height: container.offsetHeight
});

var layer = new Konva.Layer();
stage.add(layer);

let backgroundRect = null;
createOrUpdateBackgroundRect(stage, layer, 'white');


var transformer = new Konva.Transformer();   
layer.add(transformer);

window.addEventListener('load', resizeStage);
window.addEventListener('resize', function() {
    setTimeout(resizeStage, 100);
});

function resizeStage() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    // Υπολογισμός scaling σε σχέση με αρχικές διαστάσεις
    const scaleX = containerWidth / stage.width();
    const scaleY = containerHeight / stage.height();
    const scale = Math.min(scaleX, scaleY);
  
    stage.width(containerWidth);
    stage.height(containerHeight);
    stage.scale({ x: scale, y: scale });
  
    if (backgroundRect) {
      backgroundRect.size({
        width: containerWidth / scale,
        height: containerHeight / scale
      });
    }
  
    stage.draw();
  }
  


  resizeStage();
let inputPosition = {x:0, y:0};
let fillColor = { checked: true}
let isDrawing = false;
let selectedTool = 'brush';
let selectedColor = "rgb(255,255,255)";
let selectedStroke = "#000";
let brushWidth = 5;
let layer_temp = null;

let nodes = [];

let startX, startY, currentX, currentY;
let shape, lastShape;
// event listeners


// tools
toolBtns.forEach(btn => {
    btn.addEventListener("click", () => { 
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
   }) ;

});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); // Passing slider value as brushSize

// color
colorBtns.forEach(btn => {
    btn.addEventListener("click", () => { 
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
    });
});

colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

// stroke
strokeBtns.forEach(btn2 => {
    btn2.addEventListener("click", () => { 
        document.querySelector(".stroke-options .selected").classList.remove("selected");
        btn2.classList.add("selected");
        selectedStroke = window.getComputedStyle(btn2).getPropertyValue("background-color");
    });
});

strokePicker.addEventListener("change", () => {
    strokePicker.parentElement.style.background = strokePicker.value;
    strokePicker.parentElement.click();
});

stage.on('click', (e) => { 
    transformer.nodes([]);
});

clearCanvas.addEventListener("click", () => {
nodes.forEach(n => {
    n.remove();
});
createOrUpdateBackgroundRect(stage, layer, 'white');
 layer.add(transformer);
 transformer.nodes([]);

 layer.draw();

 nodes = [];
});

// save
saveImg.addEventListener("click", () => {
    try {
        const tr_nodes = transformer.nodes();
        transformer.nodes([]);
        layer.draw();

        var background = new Konva.Rect({
            x: 0,
            y: 0,
            width: stage.width(),
            height: stage.height(),
            fill: 'white',
        });
        layer.add(background);
        background.moveToBottom();
        layer.draw();

        stage.toDataURL({
            callback(dataUrl) {
                const link = document.createElement('a');
                link.download = 'Ζωγραφική_Φύση.jpg';
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                delete link;
            },
            mimeType: 'image/jpg',
            quality: 1,
            pixelRatio: 2  
        });
        background.destroy();
        layer.draw();

        transformer.nodes(tr_nodes);
    } catch (e) {
        console.error('Σφάλμα:', e);
    }
});

// **********************************************************

stage.on('mousedown touchstart', (e) => {
    isDrawing = false;
    const pos = stage.getPointerPosition();
    lastTool = selectedTool;

    if (selectedTool === "selectiontool") {
        const shape = layer.getIntersection(pos);
        if (shape && shape !== stage) {
            shape.startDrag();
            layer.draw();
        }
    }
    if (selectedTool === '' || selectedTool === 'selectiontool') {

        return;   
    }

    isDrawing = true;
    transformer.nodes([]);
    if (selectedTool === "eraser" || selectedTool === "brush") {
        lastShape = new Konva.Line({
            stroke: selectedTool === 'brush' ? selectedStroke : "#fff",
            strokeWidth: brushWidth,
        //    globalCompositeOperation: selectedTool === 'brush' ? 'source-over' : 'destination-out',
            lineCap: 'round',
            lineJoin: 'round',
            points: [pos.x, pos.y, pos.x, pos.y],
            listening: selectedTool === 'brush'
          });
        layer.add(lastShape);
    }   
    else if (selectedTool === "filltool") {
        isDrawing = false;
        fillWithColor(e);
    }
    else if (selectedTool === "texttool") {
        isDrawing = false;
        Swal.fire({
            title: "Πληκτρολόγησε το κείμενό σου",
            input: "text",
            inputPlaceholder: "Πληκτρολόγησέ εδώ...",
            inputAttributes: {
              "aria-label": "Πληκτρολόγησέ εδώ..."
            },
            inputValue: "",
            showCancelButton: false,
            showClass:{ popup: 'swal2-show'},
            hideClass:{ popup: 'swal2-hide'},
          }).then((newvalue) => {

          if (newvalue.value !== null && newvalue.value !== undefined && newvalue.value.trim() !== "") {
            inputPosition = pos;
             const textNode = new Konva.Text({
                    x: inputPosition.x,
                    y: inputPosition.y-10,
                    text: newvalue.value,
                    fontSize: 20,
                    draggable: false
                });   
                nodes.push(textNode);
                textNode.on('mouseover', function (e) {
                    if (selectedTool === 'selectiontool') { 
                        e.evt.stopPropagation();
          
                        selectedNode = e.target;
                        transformer.nodes([e.target]);
                        layer.draw();
                        selectedShape = e.target;
                    }
                });

                layer.add(textNode);
                layer.draw();
         }
        })
    }
    else {
        if (layer_temp === null) {
             layer_temp = new Konva.Layer();
             stage.add(layer_temp);
        }
        startX = pos.x;
        startY = pos.y;
    }
});

stage.on('mousemove touchmove', (e) => {
    if (isDrawing && selectedTool !== "selectiontool") {
        
        if (selectedTool === "eraser" || selectedTool === "brush") {
            // prevent scrolling on touch devices
            e.evt.preventDefault();

            if (lastShape  !== undefined) {
                const pos = stage.getPointerPosition();
                var newPoints = lastShape.points().concat([pos.x, pos.y]);
                lastShape.points(newPoints);
                nodes.push(lastShape)
            }
        } else {
            const pos = stage.getPointerPosition();
            currentX = pos.x;
            currentY = pos.y;

            if (lastTool !== "selectiontool")
                drawShape();
    }
  }
});

stage.on('mouseup touchend', (e) => {
    if (isDrawing && selectedTool !== "selectiontool") {
       
        isDrawing = false;

        if (selectedTool !== "eraser" && selectedTool !== "brush") {
            layer.add(shape);
            nodes.push(shape);
            stage.add(layer);
            layer_temp.destroy();

            stage.draw();
        }
    }
});


// **************************************************************
// fill
function fillWithColor(e) {

    if (e.target._id === 1) {
        createOrUpdateBackgroundRect(stage, layer, selectedColor);
        return;
    }

    const pos = stage.getPointerPosition();
    const konvaShape = layer.getIntersection(pos);
    const shapeType = konvaShape.getClassName();

    if (!konvaShape || (shapeType === 'Rect' && konvaShape.attrs.name)) return;

    let imageData;

    // triangle
    if (shapeType === 'Line' && konvaShape.closed()) {
        const points = konvaShape.points();
        const clickPoint = { x: pos.x - konvaShape.x(), y: pos.y - konvaShape.y() };
        const strokeWidth = konvaShape.strokeWidth();
        const tolerance = strokeWidth / 2; 

        if (pointInTriangle(clickPoint, points[0], points[1], points[2], points[3], points[4], points[5])) {
            if (pointNearLineSegment(clickPoint, points[0], points[1], points[2], points[3], tolerance) ||
                pointNearLineSegment(clickPoint, points[2], points[3], points[4], points[5], tolerance) ||
                pointNearLineSegment(clickPoint, points[4], points[5], points[0], points[1], tolerance)) {
                konvaShape.stroke(selectedColor);
            } else {
                if (sameColors(parseColor(konvaShape.fill()), parseColor(konvaShape.stroke()))) {
                    konvaShape.fill(selectedColor);
                    konvaShape.stroke(selectedColor);
                } else {
                    konvaShape.fill(selectedColor);
                }
            }
        }
        layer.draw();
        return;
     } if (shapeType === 'Image') {
        imageData = getImageDataFromKonvaShape(konvaShape);
    } else if (shapeType === 'Rect' && konvaShape.fillPatternImage()) {
        imageData = getImageDataFromKonvaShape(konvaShape);
    } else if ((shapeType === 'Rect' || shapeType === 'Circle') && !konvaShape.fillPatternImage()) {
        if (sameColors(parseColor(konvaShape.fill()), parseColor(konvaShape.stroke()))) {
            konvaShape.fill(selectedColor);
            konvaShape.stroke(selectedColor);
        } else {
            if (shapeType === 'Rect') {
                const tolerance = konvaShape.strokeWidth()-2;
                const sizeWithoutborder = {x1: konvaShape.x() + tolerance,
                                     y1: konvaShape.y() + tolerance,
                                     x2: konvaShape.x()+konvaShape.width() - tolerance,
                                     y2: konvaShape.y()+konvaShape.height() - tolerance
                }
                if (pos.x >= sizeWithoutborder.x1 && pos.x <= sizeWithoutborder.x2 && pos.y >= sizeWithoutborder.y1 && pos.y <= sizeWithoutborder.y2) {
                    konvaShape.fill(selectedColor);
                } else {
                    konvaShape.stroke(selectedColor);
                }
            } else {
                const clickPoint = { x: pos.x - konvaShape.x(), y: pos.y - konvaShape.y() };
                const distanceFromCenter = Math.sqrt(clickPoint.x * clickPoint.x + clickPoint.y * clickPoint.y);
        
                if (distanceFromCenter <= konvaShape.radius() + konvaShape.strokeWidth() / 2 &&
                    distanceFromCenter >= konvaShape.radius() - konvaShape.strokeWidth() / 2) {
                    konvaShape.stroke(selectedColor);
                } else {
                    konvaShape.fill(selectedColor);
                    }
                }
            }
        layer.draw();
        return;
    }  else {
            konvaShape.stroke(selectedColor);
            layer.draw();
            return;
        }

    if (!imageData) return;

    const x = Math.round(pos.x - konvaShape.x());
    const y = Math.round(pos.y - konvaShape.y());
    const tolerance = 68;
    const data = imageData.data;
    const targetColor = getColorAtPixel(data, x, y, imageData.width);
    const newColor = parseColor(selectedColor);

    if (!colorsMatch(targetColor, newColor, tolerance)) {
        floodFill(data, imageData.width, imageData.height, x, y, targetColor, newColor, tolerance);
        const context = getCanvasContextFromKonvaImage(konvaShape);
        context.putImageData(imageData, 0, 0);
        if (shapeType === 'Image') {
            konvaShape.image(context.canvas);
        } else if (shapeType === 'Rect' && konvaShape.fillPatternImage()) {
            konvaShape.fillPatternImage(context.canvas);
        }
        layer.draw();
    }
}

function pointInTriangle(pt, x1, y1, x2, y2, x3, y3) {
    const d1 = sign(pt, { x: x1, y: y1 }, { x: x2, y: y2 });
    const d2 = sign(pt, { x: x2, y: y2 }, { x: x3, y: y3 });
    const d3 = sign(pt, { x: x3, y: y3 }, { x: x1, y: y1 });

    const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(hasNeg && hasPos);
}

function sign(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function pointNearLineSegment(pt, x1, y1, x2, y2, tolerance) {
    const lengthSquared = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (lengthSquared === 0) return false;

    const t = ((pt.x - x1) * (x2 - x1) + (pt.y - y1) * (y2 - y1)) / lengthSquared;
    if (t < 0 || t > 1) return false;

    const projection = { x: x1 + t * (x2 - x1), y: y1 + t * (y2 - y1) };
    const distance = Math.sqrt((pt.x - projection.x) * (pt.x - projection.x) + (pt.y - projection.y) * (pt.y - projection.y));

    return distance <= tolerance;
}

function createOrUpdateBackgroundRect(stage, layer, color) {
    if (!backgroundRect) {
        backgroundRect = new Konva.Rect({
            x: 0,
            y: 0,
            width: stage.width(),
            height: stage.height(),
            fill: color,
            listening: false,  
        });
        layer.add(backgroundRect);
        layer.draw();
    } else {
        backgroundRect.fill(color);
        layer.draw();
    }
}

function parseColor(color) {
    if (color.startsWith('#')) {
        return hexToRgb(color);
    } else if (color.startsWith('rgb')) {
        return strToRgb(color);
    } 
}

function hexToRgb(hex) {

    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b, a:255 };
}

function strToRgb(color) {
    [r,g,b]= color.match(/\d+/g).map(Number);
    return { r, g, b, a:255 };
}


function getImageDataFromKonvaShape(konvaShape) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const shapeType = konvaShape.getClassName();

    konvaShape.setWidth(konvaShape.width() * konvaShape.scaleX());
    konvaShape.setHeight(konvaShape.height() * konvaShape.scaleY());

    konvaShape.setScaleX(1);
    konvaShape.setScaleY(1);

    canvas.width = konvaShape.width() ;
    canvas.height = konvaShape.height();

    if (shapeType === 'Image') {
        context.drawImage(konvaShape.image(), 0, 0, canvas.width, canvas.height);
    } else {
        const tempCanvas = konvaShape.toCanvas();
        context.drawImage(tempCanvas, 0, 0, shapeWidth, shapeHeight);
    }

    return context.getImageData(0, 0, canvas.width, canvas.height);
}


function getCanvasContextFromKonvaImage(konvaImage) {
    const canvas = document.createElement('canvas');
    canvas.width = konvaImage.width();
    canvas.height = konvaImage.height();
    return canvas.getContext('2d');
}

function getColorAtPixel(data, x, y, width) {
    const index = (y * width + x) * 4;
    return {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
        a: data[index + 3]
    };
}

function setPixel(data, x, y, width, color) {
    const index = (y * width + x) * 4;
    data[index] = color.r;
    data[index + 1] = color.g;
    data[index + 2] = color.b;
    data[index + 3] = color.a;
}

function colorsMatch(a, b, tolerance) {
    const dr = a.r - b.r;
    const dg = a.g - b.g;
    const db = a.b - b.b;
    const da = a.a - b.a;
    return (dr * dr + dg * dg + db * db + da * da) <= (tolerance * tolerance);
}

function sameColors(color1, color2){
    return (
        color1.r === color2.r &&
        color1.g === color2.g &&
        color1.b === color2.b &&
        color1.a === color2.a
    );
}

function floodFill(data, width, height, x, y, targetColor, fillColor, tolerance) {
    const stack = [[x, y]];
    const pixel = (x, y) => (y * width + x) * 4;

    while (stack.length) {
        const [currentX, currentY] = stack.pop();
        const index = pixel(currentX, currentY);

        if (!colorsMatch(getColorAtPixel(data, currentX, currentY, width), targetColor, tolerance)) continue;

        data[index] = fillColor.r;
        data[index + 1] = fillColor.g;
        data[index + 2] = fillColor.b;
        data[index + 3] = 255;

        if (currentX > 0) stack.push([currentX - 1, currentY]);
        if (currentX < width - 1) stack.push([currentX + 1, currentY]);
        if (currentY > 0) stack.push([currentX, currentY - 1]);
        if (currentY < height - 1) stack.push([currentX, currentY + 1]);
    }
}

// draw shapes 
const drawShape = () => {
    switch (selectedTool) {
        case "rectangle": 
            shape = new Konva.Rect({
                x: startX,
                y: startY,
                stroke: selectedStroke,
                strokeWidth: brushWidth,
                width: currentX - startX,
                height: currentY - startY,
                fill: fillColor.checked ? selectedColor : "#fff",
                draggable: false
            });
            break;

        case "circle":
            shape = new Konva.Circle({
                x: startX,
                y: startY,
                stroke: selectedStroke,
                strokeWidth: brushWidth,
                radius: Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2)),
                fill: fillColor.checked ? selectedColor : "#fff",
                draggable: false
            });
            break;

        case "triangle":
            const dx = currentX - startX;
            const dy = currentY - startY;

            const length = Math.sqrt(dx * dx + dy * dy);

            const angle = Math.atan2(dy, dx) - Math.PI / 4;

            const endX = startX + length * Math.cos(angle);
            const endY = startY + length * Math.sin(angle);

            shape = new Konva.Line({
                points: [startX, startY, currentX, currentY, endX, endY],
                fill: fillColor.checked ? selectedColor : "#fff",
                stroke: selectedStroke,
                strokeWidth: brushWidth,
                closed: true,
                draggable: false
            });
            break;
        case "line":
            shape = new Konva.Line({
                points: [startX, startY, currentX, currentY],
                stroke: selectedStroke,
                strokeWidth: brushWidth,
                globalCompositeOperation: 'source-over',
                lineCap: 'round',
                lineJoin: 'round',
                draggable: false
            });
            break;
    }

    if (selectedTool != 'texttool') {
    const lastLayer = stage.getChildren()[stage.getChildren().length - 1];
    lastLayer.remove();
    lastLayer.destroy();

    shape.on('mouseover', function (e) {

        if (selectedTool === 'selectiontool') { 
            e.evt.stopPropagation();
            selectedNode = e.target;
            transformer.nodes([e.target]);
            layer.draw();
        }
    });

    layer_temp.add(shape);
    stage.add(layer_temp);
    }
};


