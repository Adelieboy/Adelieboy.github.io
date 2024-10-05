var pronouns = ['He', 'She', 'They', 'I', 'You', 'We', 'It'];
var act = ['did', "didn't", 'will', "won't", "once", "shant", "should"];
var action = [""];
var filler = [""];



rngGen(2, 7); // Sentence Size
rngGen(0,pronouns.length -1); //Pronoun Selector
rngGen(0,act.length -1); // Act Selector
rngGen(0,action.length -1); // Action Selector
rngGen(0,filler.length -1); // Filler Selector



//Random Number Generator (with minimum and maximum bounds (inclusive))
function rngGen(min, max) {

    return Math.random() * (max - min) + min;

}