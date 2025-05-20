// for triangle area
function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleBase = parseFloat(triangleBaseInput.value);
    const triangleHeight = parseFloat(triangleHeightInput.value);
    const area = (triangleBase * triangleHeight) / 2;
    // display the triangle area
    const triangleAreaOutput = document.getElementById('triangle-area');
    triangleAreaOutput.innerText = area;
}



// For rectangle area
function calculateRectangleArea(){
    const rectangleBaseInput = document.getElementById('rectangle-Base');
    const rectangleHeightInput = document.getElementById('rectangle-Height');
    const rectangleBase = parseFloat(rectangleBaseInput.value);
    const rectangleHeight = parseFloat(rectangleHeightInput.value);
    const rectangleArea = rectangleBase * rectangleHeight;
    // display the rectangle area
    const rectangleAreaOutput = document.getElementById('rectangle-area');
    rectangleAreaOutput.innerText = rectangleArea;
    
}

// for parallelogram area

function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-Base');
    const parallelogramHeightInput = document.getElementById('parallelogram-Height');
    const parallelogramBase = parseFloat(parallelogramBaseInput.value);
    const parallelogramHeight = parseFloat(parallelogramHeightInput.value);
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    // display the parallelogram area
    const parallelogramAreaOutput = document.getElementById('parallelogram-area');
    parallelogramAreaOutput.innerText = parallelogramArea;
}

// for Rhombus area

function calculateRhombusArea(){
    const rhombusBaseInput = document.getElementById('rhombus-Base');
    const rhombusHeightInput = document.getElementById('rhombus-Height');
    const rhombusBase = parseFloat(rhombusBaseInput.value);
    const rhombusHeight = parseFloat(rhombusHeightInput.value);
    const rhombusArea = (rhombusBase * rhombusHeight) / 2;
    // display the rhombus area
    const rhombusAreaOutput = document.getElementById('rhombus-area');
    rhombusAreaOutput.innerText = rhombusArea;
}

// for pentagon area
function calculatePentagonArea(){
    const pentagonBaseInput = document.getElementById('pentagon-Base');
    const pentagonHeightInput = document.getElementById('pentagon-Height');
    const pentagonBase = parseFloat(pentagonBaseInput.value);
    const pentagonHeight = parseFloat(pentagonHeightInput.value);
    const pentagonArea = (pentagonBase * pentagonHeight) / 2;
    // display the pentagon area
    const pentagonAreaOutput = document.getElementById('pentagon-area');
    pentagonAreaOutput.innerText = pentagonArea;
}

// for ellipse area 
function calculateEllipseArea(){
    const ellipseBaseInput = document.getElementById('ellipse-Base');
    const ellipseHeightInput = document.getElementById('ellipse-Height');
    const ellipseBase = parseFloat(ellipseBaseInput.value);
    const ellipseHeight = parseFloat(ellipseHeightInput.value);
    const ellipseArea = Math.PI * (ellipseBase) * (ellipseHeight);
    // display the ellipse area
    const ellipseAreaOutput = document.getElementById('ellipse-area');
    ellipseAreaOutput.innerText = ellipseArea;
}