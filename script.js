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