# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @shovon/lotide`

**Require it:**

`const _ = require('@shovon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(assertArraysEqual)`: a function that takes in 2 arrays and returns true if they are equal and false otherwise.
- `function2(assertEqual)`: an updated Assert Equal Function that uses template literals.
- `function3(assertObjectsEqual)`: a function that takes in 2 objects and returns true if they are equal and false otherwise.
- `function4(countLetters)`: a function that takes in a sentence and returns a count of each of the letters in the sentence.
- `function5(countOnly)`: a function that takes in a collection of items and returns a specific subset of those items.
- `function6(eqArrays)`: a function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
- `function7(eqObjects)`: a function that takes in 2 objects and return true if they are equal and false otherwise.
- `function8(findKey)`: a function that takes in an object and callback and returns the first key that meets the criteria specified in callback
- `function9(findKeyByValue)`: a function that takes in an object and a value and returns the first key that corresponds to that value.
- `function10(flatten)`: a function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
- `function11(head)`: a function that takes in an array and returns the first element in the array.
- `function12(letterPositions)`: a function that takes in a string and returns all indices of letter positions in the string.
- `function13(map)`: a function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
- `function14(middle)`: a function that takes in an array and returns middle most element of the array.
- `function15(reverseFunc)`: a function that takes in a string and reverse the string
- `function16(tail)`: a function that takes in an array and returns everything except the first element of the array.
- `function17(takeUntil)`: a function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
- `function18(without)`: a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
