## Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answers

getElementById() :- I can Selects one element by its unique ID form document.

getElementsByClassName() :- I can Selects multiple elements by class name from document.

querySelector() :- I can Selects the first element that matches a CSS selector.

querySelectorAll() :- I can  Selects all elements that match a  specified CSS selector.


## Questions

 2. How do you create and insert a new element into the DOM?

## Answers

You to create an element using by use document.createElement(), then appendChild() or append() to insert it into an existing parent element.

## Questions

3. What is Event Bubbling? And how does it work?

## Answers

Event bubbling is when an event starts from the target element and then moves upward through its parent elements.

## who to work
When i click a button inside a div, the click event first happens on the button, then the div, then the body.

## Question
4. What is Event Delegation in JavaScript? Why is it useful?


## Answers
Event delegation means adding one event listener to a parent element instead of adding multiple listeners to  child elements.

It's use Because:

For improves performance and dynamically added elements, reduces duplication and clearer code

## Question

5. What is the difference between preventDefault() and stopPropagation()?

 ## Answers
preventDefault():- It's use to stops the default browser action.

stopPropagation():- It's use to stops the event from bubbling up to parent elements.