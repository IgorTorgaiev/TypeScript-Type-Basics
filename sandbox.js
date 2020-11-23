// All the work is done in the current file sandbox.ts
// To have duplicated in the sandbox.js you should use the Node.js command prompt
// In node.js we give the command tsc sandbox.ts
// Compiling
var sentence = 'Hello world';
console.log(sentence);
var example = "Though the sentence is put in double commas, there's no mistake";
console.log(example);
// Now, let's work with HTML
var labels = document.querySelectorAll('label');
console.log(labels);
labels.forEach(function (label) {
    console.log(label);
});
// Type Basics
var topic = 'Topic: Type Baics';
console.log(topic);
var result = function (radius) {
    return radius * 1 / 2;
};
console.log(result(8.99));
