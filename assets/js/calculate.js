// get input field value
function inputfield(input){
    const inputValue=document.getElementById(input);
    const inputValueString=inputValue.value;
    const inputValueNumber=parseFloat(inputValueString);
    // return console.log(typeof(inputValueNumber));
    inputValue.value='';
    return inputValueNumber;
}
// set html value
function setElementText(elementId,area){
    const element=document.getElementById(elementId);
     element.innerText=area;
}
// calculate for Triangle
function calculateTriangle(){
    const basevalue=inputfield('baseField');
    const hightvalue=inputfield('hightField')
    const triangleArea=.5*basevalue*hightvalue;
    setElementText('triangleElementArea',triangleArea);
}

// calculate for Rectangle
function calculateRectangle(){
    const Width =inputfield('rectangleWidth');
    const height =inputfield('rectangleHeight');
    const rectangleArea=Width*height;
    setElementText('rectangleElementArea',rectangleArea)
}

// calculate for Parallelogram
function parallelogramArea(){
    const basevalue=inputfield('ParallelogramBase');
    const hightvalue=inputfield('ParallelogramHight')
    const ParallelogramArea=.5*basevalue*hightvalue;
    setElementText('parallelogramElementArea',ParallelogramArea);
}
// calculate for Parallelogram
function EllipseArea(){
    const major=inputfield('majorlength');
    const minor=inputfield('minorlength')
    const ellipsArea=3.1416*major*minor;
    const ellipsareatofixed=ellipsArea.toFixed(2)

    setElementText('EllipseElementArea',ellipsareatofixed);
}