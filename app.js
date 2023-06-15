const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

const experiments = [
  {
    name: "experiment-01-a",

    description:
      "This code is a collection of four programs: one that performs mathematical operations, one that manipulates strings, one that manipulates lists, and one that manipulates dictionaries. The programs demonstrate various operations such as addition, subtraction, multiplication, division, printing, appending, popping, deleting, and modifying elements in a list and dictionary.",

    codeLink: "https://codepen.io/Ta-h-a/pen/XWymKGx",
    explanation: `
        <div class="list-group">
        <h3>Program 1 A [i] - Mathematical Operations:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">In this part of the code, we are doing some math using two numbers, let's say 8 and 4. We can think of these numbers as apples.</li>
          <li class="list-group-item">Addition: If we have 8 apples and we add 4 more apples, we will have a total of 12 apples.</li>
          <li class="list-group-item">Subtraction: If we have 8 apples and we take away 4 apples, we will be left with 4 apples.</li>
          <li class="list-group-item">Multiplication: If we have 8 apples and we make 4 groups, with each group having 8 apples, we will have a total of 32 apples.</li>
          <li class="list-group-item">Division: If we want to share 8 apples equally among 4 friends, each friend will get 2 apples.</li>
          <li class="list-group-item">Additionally, we have a few more operations:</li>
          <li class="list-group-item">Absolute Value: It tells us how far a number is from zero. If we ask how far 8 is from zero, it is just 8.</li>
          <li class="list-group-item">Exponentiation: It's like repeated multiplication. If we take 8 and multiply it by itself 4 times, we get a big number called 4096.</li>
        </ul>
      </div><br>
  
      <div class="list-group">
        <h3>Program 1 A [ii] - String Operations:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">In this part of the code, we are working with words or sentences.</li>
          <li class="list-group-item">Initialization: At first, we have a word "Hello" and we say it out loud.</li>
          <li class="list-group-item">Update: Then, we change the word to "Welcome" and say it out loud.</li>
          <li class="list-group-item">Now, let's imagine we have two different sentences:</li>
          <li class="list-group-item">Uppercase Conversion: If we want to say something loudly or emphasize it, we can convert the sentence to uppercase. For example, "welcome to mlbp" becomes "WELCOME TO MLBP".</li>
          <li class="list-group-item">Title Conversion: If we want to write a sentence where each word starts with a capital letter, we convert it to title case. For example, "good morning students" becomes "Good Morning Students".</li>
        </ul>
      </div><br>
  
      <div class="list-group">
        <h3>Program 1 A [iii] - List Operations:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">In this part of the code, we are working with a list, which is like a collection of items.</li>
          <li class="list-group-item">Initialization: We start with a list containing the elements 1, 2, 3, 4, and "Python".</li>
          <li class="list-group-item">Append: We add another element, the number 2, to the list.</li>
          <li class="list-group-item">Pop: We remove an element from the list. In this case, we remove the element "Python".</li>
          <li class="list-group-item">Slicing: We can take a portion of the list. For example, we can take the first two elements of the list or the elements from the last to the third last.</li>
        </ul>
      </div><br>
  
      <div class="list-group">
      <h3>Program 1 A [iv] - Dictionary Operations:</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">In this part of the code, we are working with a dictionary, which is like a collection of key-value pairs.</li>
        <li class="list-group-item">Initialization: We start with a dictionary that has keys 1, 2, 3, and 4, and their corresponding values 2, 3, 4, and "Python".</li>
        <li class="list-group-item">Update: We change the value of the key 1 to "Python".</li>
        <li class="list-group-item">Addition: We add a new key-value pair, key 5 with the value "Shambhavi".</li>
        <li class="list-group-item">Deletion: We remove the key-value pair with the key 1 from the dictionary.</li>
        <li class="list-group-item">Popitem: We remove and return the last key-value pair from the dictionary.</li>
        <li class="list-group-item">Keys: We retrieve all the keys from the dictionary.</li>
        <li class="list-group-item">Values: We retrieve all the values from the dictionary.</li>
      </ul>
    </div><br>
        `,
    videoLink: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C_XRxLPGbUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
    link1: "https://www.geeksforgeeks.org/make-simple-calculator-using-python/",
    link2: "https://www.programiz.com/python-programming/examples/calculator",
  },
  {
    name: "experiment-01-b",
    description:
      "This code demonstrates a basic implementation of a stack data structure using Python. A stack follows the last-in, first-out (LIFO) principle, where elements are added and removed from the top of the stack.",
    codeLink: "https://codepen.io/Ta-h-a/pen/JjeYZPK",
    explanation: `
        <div class="container">
        <div class="row">
          <div class="col">
            <h3>Explanation:</h3>
            <p class="lead">
              The code begins by initializing an empty stack, represented by a Python list called stack. This list will store the elements of the stack. Additionally, the code prompts the user to enter the size limit of the stack, which determines the maximum number of elements it can hold.
            </p>
            <p class="lead">
              Next, the code enters a loop that allows the user to perform three operations: push, pop, or quit.
            </p>
            <p class="lead">
              Push Operation: If the user selects the push operation, the code checks if the length of the stack is equal to the size limit. If it is, it means the stack is full, and the code displays a message indicating that the list is full. Otherwise, the code prompts the user to input an element to be added to the stack. This element is then appended to the end of the stack using the append() method. Finally, the updated stack is displayed.
            </p>
            <p class="lead">
              Pop Operation: If the user chooses the pop operation, the code first checks if the stack is empty. This is done by evaluating the truthiness of the stack list. If it is empty, it means there are no elements in the stack, and the code displays a message indicating that the stack is empty. Otherwise, the code removes the topmost element from the stack using the pop() method, which eliminates the last element of the list. The popped element is stored in a variable called 'e' for reference. The code then displays the removed element and the updated stack.
            </p>
            <p class="lead">
              Quit Operation: If the user selects the quit operation, the loop breaks, and the program terminates.
            </p>
            <p class="lead">
              If the user enters an invalid choice that does not correspond to any of the available operations, the code displays a message indicating that the correct operation should be entered.
            </p>
            <p class="lead">
              Overall, this code allows users to interact with a stack data structure by adding elements to the top of the stack (push), removing elements from the top (pop), or quitting the program. It provides a practical demonstration of how stacks work and can be used as a foundation for more complex stack-based applications.
            </p>
          </div>
        </div>
      </div>
        `,
    videoLink: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aCVpMz7_gn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
    link1:
      "https://www.studytonight.com/data-structures/stack-using-linked-list",
    link2: "https://www.geeksforgeeks.org/stack-data-structure/",
  },
  {
    name: "experiment-02",
    description:
      "checkPair and countFreq. The checkPair function checks an array for a pair of elements that add up to a given target sum. If a valid pair is found, it is displayed as output. The countFreq function counts the frequency of each element in an array and prints the element along with its count.",
    codeLink: "https://codepen.io/Ta-h-a/pen/LYXprLL",
    explanation: `
        <div class="container">
        <div class="row">
          <div class="col">
            <h2>checkPair:</h2>
            <p class="lead">
              The checkPair function takes three parameters: A (the array), size (the size of the array), and x (the target sum).
              It uses a nested loop structure to iterate through all possible pairs of elements in the array.
            </p>
            <p class="lead">
              <strong>Outer loop:</strong> The outer loop, controlled by the variable i, iterates from the first element to the second-to-last element of the array.
            </p>
            <p class="lead">
              <strong>Inner loop:</strong> The inner loop, controlled by the variable j, iterates from the next element after i to the last element of the array.
            </p>
            <p class="lead">
              For each pair of elements, the code checks if their sum is equal to the target sum (x).
              If a pair with the given sum is found, it is displayed as output, indicating that a valid pair exists.
              The function then returns 1 to indicate the presence of a valid pair. If no pair is found, it returns 0.
            </p>
            <h2>countFreq:</h2>
            <p class="lead">
              The countFreq function takes two parameters: arr (the array) and n (the length of the array).
              It initializes a boolean array called visited with False values for each element in the array.
            </p>
            <p class="lead">
              The function iterates through the array using a loop controlled by the variable i.
              For each element in the array, it checks if it has been visited previously. If so, it continues to the next element.
            </p>
            <p class="lead">
              If the element has not been visited, it initializes a counter variable count to 1 and enters a nested loop controlled by the variable j.
              In the nested loop, it compares the element at index i with the remaining elements in the array (starting from i+1).
              If a match is found, it increments the counter count and marks the corresponding element as visited by setting the value in the visited array to True.
            </p>
            <p class="lead">
              Finally, it prints the element and its corresponding frequency (count) as output.
            </p>
            <h2>Main code:</h2>
            <p class="lead">
              An array <code>array</code> and a target sum x are defined.
            </p>
            <p class="lead">
              The checkPair function is called with the array, the length of the array (len(array)), and the target sum as arguments.
              If the function returns 1 (indicating a valid pair exists), it prints a message confirming the presence of a valid pair for the given target sum. Otherwise, it prints a message indicating that no valid pair exists.
            </p>
            <p class="lead">
              Similarly, an array arr is defined, and the countFreq function is called with the array and the length of the array as arguments.
              The function counts the frequency of each element in the array and prints the element along with its count.
            </p>
            <p class="lead">
              Overall, this code provides detailed functionality to check for a pair with a given sum in an array and count the frequencies of elements in an array.
            </p>
          </div>
        </div>
      </div>
      
        `,
    videoLink: `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yzNOhldYSBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
    link1:
      "https://codezup.com/program-to-find-pair-with-the-given-sum-in-an-array/",
    link2:
      "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python",
  },
  {
    name: "experiment-03-a",
    description:
      "The provided code performs a linear search on arrays of increasing lengths and measures the time it takes to complete the search. It then plots the time complexity results, showing how the search time increases linearly with the size of the input array.",

    codeLink: "https://codepen.io/Ta-h-a/pen/XWymYLR",
    explanation: `
    <div class="container">
  <div class="row">
    <div class="col">
      <h2>Importing Libraries:</h2>
      <p class="lead">
        The code begins by importing the necessary libraries:
      </p>
      <ul>
        <li>time: Used to measure execution time.</li>
        <li>numpy (abbreviated as np): Used for generating arrays and performing numerical operations.</li>
        <li>matplotlib.pyplot (abbreviated as plt): Used for plotting the results.</li>
      </ul>
      <h2>linear_Search Function:</h2>
      <p class="lead">
        This function implements a linear search algorithm.
        It takes two parameters: <code>A</code>, which represents the array to search within, and <code>x</code>, which represents the element to search for.
      </p>
      <p class="lead">
        The function uses a for loop to iterate through each element in the array.
        Inside the loop, it checks if the current element (<code>A[i]</code>) matches the target element (<code>x</code>).
        If a match is found, it prints a message indicating the successful search at the position <code>i</code> and returns.
        If the loop completes without finding a match, it prints a message indicating that the search was unsuccessful.
      </p>
      <h2>Generating Array Lengths:</h2>
      <p class="lead">
        An array named <code>element</code> is created using NumPy.
        The array is initialized with values from 1000 to 39000, incrementing by 1000.
        This array represents the lengths of the arrays that will be generated for the search.
      </p>
      <h2>Setting up the Plot:</h2>
      <p class="lead">
        The code sets up the plot using <code>plt.xlabel()</code> and <code>plt.ylabel()</code> functions to label the x-axis and y-axis, respectively.
        The x-axis is labeled as "List length", and the y-axis is labeled as "Time complexity".
      </p>
      <h2>Measuring Time Complexity:</h2>
      <p class="lead">
        The code initializes an empty list named <code>times</code> to store the execution times for the linear search.
        A loop is executed from 1 to 39 (excluding 40), which represents the index range of the <code>element</code> array.
      </p>
      <p class="lead">
        Inside the loop, the following steps are performed:
      </p>
      <ol>
        <li>The start time is recorded using <code>time.time()</code> to measure the initial time.</li>
        <li>An array named <code>a</code> is generated using <code>np.random.randint()</code> with a size that increases by 1000 at each iteration.</li>
        <li>The <code>linear_Search</code> function is called, passing the generated array <code>a</code> and the target element 1 as parameters.</li>
        <li>The end time is recorded using <code>time.time()</code> to measure the final time.</li>
        <li>The execution time (<code>end - start</code>) is appended to the <code>times</code> list.</li>
        <li>The execution time for the current iteration is printed.</li>
      </ol>
      <h2>Plotting the Results:</h2>
      <p class="lead">
        After the loop completes, the code plots the results using <code>plt.plot()</code>.
        The <code>element</code> array is used as the x-axis values, representing the list lengths.
        The <code>times</code> list is used as the y-axis values, representing the corresponding search times.
      </p>
      <p class="lead">
        The plot is labeled as "Linear Search" using the <code>label</code> parameter.
        Gridlines are added to the plot using <code>plt.grid()</code>.
        The legend is displayed using <code>plt.legend()</code>.
        Finally, the plot is shown using <code>plt.show()</code>.
      </p>
      <p class="lead">
        In summary, the code measures the time complexity of a linear search algorithm by performing searches on arrays of increasing lengths.
        It provides insights into how the search time increases linearly with the size of the input array.
        The results are visualized through a plot, which helps in understanding the relationship between the list length and the time taken for the linear search.
      </p>
    </div>
  </div>
</div>
<br>
        `,
    videoLink: `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C46QfTjVCNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
    link1: "https://www.javatpoint.com/linear-search",
    link2: "https://www.programiz.com/dsa/linear-search",
  },
  {
    name: "experiment-03-b",
    description:
      "This code implements three sorting algorithms: selection sort, bubble sort, and insertion sort. It measures the time taken by each algorithm to sort arrays of different lengths and plots the time complexity graph. The code provides a visual comparison of the sorting algorithms based on their performance.",

    codeLink: "https://codepen.io/Ta-h-a/pen/bGQEpPP",
    explanation: `

    <div class="container">
  <div class="row">
    <div class="col">
    <br>
      <h2>Code Explanation: Sorting Algorithms Time Complexity Comparison</h2>
      <hr>
      <h3>Importing Required Libraries</h3>
      <br>
      <p>The code starts by importing the necessary libraries: <code>time</code> for measuring execution time, <code>numpy</code> for generating random arrays, and <code>matplotlib.pyplot</code> for plotting the results.</p>
      
      <h3>Defining Sorting Functions</h3>
      <p>Next, three sorting functions are defined: <code>selectionSort</code>, <code>bubbleSort</code>, and <code>insertionSort</code>. Each function takes an array as input and sorts it using a specific sorting algorithm: selection sort, bubble sort, or insertion sort, respectively.</p>
      
      <div class="card">
        <div class="card-header">
          <h4>Selection Sort</h4>
        </div>
        <div class="card-body">
          <p>The <code>selectionSort</code> function iterates over the array and finds the minimum element in the unsorted portion of the array. It then swaps that minimum element with the first unsorted element.</p>
          <p>The function uses two nested loops. The outer loop iterates from the start of the array to the second-to-last element. The inner loop finds the minimum element in the unsorted portion of the array.</p>
          <p>The function swaps the minimum element with the first unsorted element after each iteration of the outer loop.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h4>Bubble Sort</h4>
        </div>
        <div class="card-body">
          <p>The <code>bubbleSort</code> function implements the bubble sort algorithm. It repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order.</p>
          <p>The function uses two nested loops. The outer loop iterates from the start of the array to the second-to-last element. The inner loop compares adjacent elements and swaps them if necessary.</p>
          <p>The function includes a flag <code>swapped</code> to optimize the algorithm. If no swaps are made during an iteration of the inner loop, it means the array is already sorted, and the function exits early.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h4>Insertion Sort</h4>
        </div>
        <div class="card-body">
          <p>The <code>insertionSort</code> function performs the insertion sort algorithm. It starts with an empty left portion and gradually builds a sorted portion by inserting elements into their correct positions.</p>
          <p>The function uses a loop to iterate over the array from the second element to the last. It compares each element with the elements in the sorted portion and shifts them to the right until finding the correct position to insert the current element.</p>
          <p>The function places the current element in its correct position in the sorted portion after each iteration.</p>
        </div>
      </div>
      
      <h3>Sorting Function List</h3>
      <p>The code defines a list called <code>sorts</code> to store the sorting algorithms. Each algorithm is represented as a dictionary with two keys: <code>"name"</code> and <code>"sort"</code>.</p>
      <ul>
        <li>The <code>"name"</code> key stores the name of the sorting algorithm (e.g., "Selection Sort").</li>
        <li>The <code>"sort"</code> key stores a lambda function that invokes the corresponding sorting function.</li>
      </ul>
    </div>
  </div>
</div>


    <p
class="codepen"
data-height="500"
data-slug-hash="abQdbVG"
data-user="Ta-h-a"
style="
  height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  margin: 1em 0;
  padding: 1em;
"
>
<span
  >See the Pen
  <a href="https://codepen.io/Ta-h-a/pen/abQdbVG"><%= title %></a> by Mohammed
  Taha (<a href="https://codepen.io/Ta-h-a">@Ta-h-a</a>) on
  <a href="https://codepen.io">CodePen</a>.</span
>
</p>
<br>
<br>
    <div class="container">
    <h1>Selection Sort 💀</h1>
    <br>
    
  <div class="row">
    <div class="col">
      <h2>Function Definition:</h2>
      <p class="lead">
        The code starts with the definition of the <code>selectionSort</code> function, which takes an array as input and performs in-place sorting using the selection sort algorithm.
      </p>
      <p class="lead">
        The selection sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning.
      </p>
      <h2>Selection Sort Implementation:</h2>
      <p class="lead">
        The outer loop iterates over each element of the array, from the first to the last element. It is responsible for selecting the minimum element for each iteration.
      </p>
      <p class="lead">
        Within the outer loop, a variable <code>min_index</code> is initialized with the current index <code>i</code>.
      </p>
      <p class="lead">
        The inner loop starts from <code>i+1</code> and iterates through the remaining elements of the array.
      </p>
      <p class="lead">
        In each iteration of the inner loop, it compares the element at index <code>j</code> with the current minimum element at index <code>min_index</code>. If a smaller element is found, the <code>min_index</code> is updated to point to the new minimum element.
      </p>
      <p class="lead">
        After the inner loop finishes, the minimum element of the unsorted part of the array is found, and it is swapped with the element at index <code>i</code>, placing it in the correct sorted position.
      </p>
      <p class="lead">
        This process continues until the entire array is sorted.
      </p>
      <h2>Array Initialization and Sorting:</h2>
      <p class="lead">
        The code initializes an array <code>arr</code> with some random unsorted values <code>[9, 6, 3, 5, 8, 7, 4, 2, 1]</code>.
      </p>
      <p class="lead">
        The <code>selectionSort</code> function is then called with the <code>arr</code> array, which performs the selection sort algorithm on the array in-place, sorting it in ascending order.
      </p>
      <h2>Printing the Sorted Array:</h2>
      <p class="lead">
        After sorting the array, the code prints the sorted array using <code>print(arr)</code>.
      </p>
      <h2>Performance Analysis:</h2>
      <p class="lead">
        The code also includes a performance analysis section that measures the execution time of the selection sort algorithm for different lengths of arrays.
      </p>
      <p class="lead">
        It uses the <code>time</code> module to calculate the execution time.
      </p>
      <p class="lead">
        The <code>numpy</code> library is used to create an array <code>elements</code> representing the different lengths of arrays to be sorted.
      </p>
      <p class="lead">
        The execution time for sorting each array length is measured using a loop, where a random array is generated using <code>numpy.random.randint</code> and then sorted using <code>selectionSort</code>.
      </p>
      <p class="lead">
        The execution time for each length is appended to the <code>times</code> list.
      </p>
      <p class="lead">
        Finally, the execution time for sorting different lengths of arrays is printed, along with a plot that visualizes the time complexity.
      </p>
      <p class="lead">
        In summary, the code demonstrates the selection sort algorithm by sorting an array and provides a performance analysis by measuring the execution time for different lengths of arrays. The selection sort algorithm repeatedly finds the minimum element and places it at the correct position, resulting in a sorted array.
      </p>
    </div>
  </div>
</div>
<br>

<p
class="codepen"
data-height="500"
data-slug-hash="dyQGGBp"
data-user="Ta-h-a"
style="
  height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  margin: 1em 0;
  padding: 1em;
"
>
<span
  >See the Pen
  <a href="https://codepen.io/Ta-h-a/pen/dyQGGBp"><%= title %></a> by Mohammed
  Taha (<a href="https://codepen.io/Ta-h-a">@Ta-h-a</a>) on
  <a href="https://codepen.io">CodePen</a>.</span
>
</p>
<br>
<br>
<br>
<h1>Bubble Sort 🫧</h1>
<br>


<div class="container">
  <div class="row">
    <div class="col">
      <h2>Function Definition:</h2>
      <p class="lead">
        The code starts with the definition of the <code>bubbleSort</code> function, which takes an array as input and performs in-place sorting using the bubble sort algorithm.
      </p>
      <p class="lead">
        The bubble sort algorithm works by repeatedly swapping adjacent elements if they are in the wrong order, until the entire array is sorted.
      </p>
      <h2>Bubble Sort Implementation:</h2>
      <p class="lead">
        The outer loop iterates <code>n-1</code> times, where <code>n</code> is the length of the array. This loop controls the number of passes needed to sort the array.
      </p>
      <p class="lead">
        Within the outer loop, a variable <code>swapped</code> is initialized as <code>False</code> to keep track of whether any swapping occurs in a pass. This helps optimize the algorithm by stopping early if the array is already sorted.
      </p>
      <p class="lead">
        The inner loop starts from the first element and iterates through the remaining unsorted elements.
      </p>
      <p class="lead">
        In each iteration of the inner loop, it compares adjacent elements and swaps them if they are in the wrong order (smaller element comes after a larger element).
      </p>
      <p class="lead">
        If any swapping occurs in a pass, the <code>swapped</code> variable is set to <code>True</code>.
      </p>
      <p class="lead">
        After each pass, the largest element is guaranteed to be at the end of the array, so in the next pass, the inner loop iterates up to <code>n-i-1</code>, reducing the number of comparisons in each pass.
      </p>
      <p class="lead">
        If no swapping occurs in a pass (i.e., <code>swapped</code> remains <code>False</code>), it means the array is already sorted, and the function returns early.
      </p>
      <h2>Array Initialization and Sorting:</h2>
      <p class="lead">
        The code initializes an array <code>a</code> with some random unsorted values using <code>numpy.random.randint</code>.
      </p>
      <p class="lead">
        The <code>bubbleSort</code> function is then called with the <code>a</code> array, which performs the bubble sort algorithm on the array in-place, sorting it in ascending order.
      </p>
      <h2>Printing the Sorted Array:</h2>
      <p class="lead">
        After sorting the array, the code prints the time taken to sort different lengths of arrays.
      </p>
      <h2>Performance Analysis:</h2>
      <p class="lead">
        The code also includes a performance analysis section that measures the execution time of the bubble sort algorithm for different lengths of arrays.
      </p>
      <p class="lead">
        It uses the <code>time</code> module to calculate the execution time.
      </p>
      <p class="lead">
        The <code>numpy</code> library is used to create an array <code>elements</code> representing the different lengths of arrays to be sorted.
      </p>
      <p class="lead">
        The execution time for sorting each array length is measured using a loop, where a random array is generated using <code>numpy.random.randint</code> and then sorted using <code>bubbleSort</code>.
      </p>
      <p class="lead">
        The execution time for each length is appended to the <code>times</code> list.
      </p>
      <p class="lead">
        Finally, the execution time for sorting different lengths of arrays is printed, along with a plot that visualizes the time complexity.
      </p>
      <p class="lead">
        In summary, the code demonstrates the bubble sort algorithm by sorting an array and provides a performance analysis by measuring the execution time for different lengths of arrays. Bubble sort repeatedly compares adjacent elements and swaps them if necessary, gradually moving the larger elements towards the end of the array.
      </p>
    </div>
  </div>
</div>
<br>
<br>


<p
class="codepen"
data-height="500"
data-slug-hash="zYMrqov"
data-user="Ta-h-a"
style="
  height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  margin: 1em 0;
  padding: 1em;
"
>
<span
  >See the Pen
  <a href="https://codepen.io/Ta-h-a/pen/zYMrqov"><%= title %></a> by Mohammed
  Taha (<a href="https://codepen.io/Ta-h-a">@Ta-h-a</a>) on
  <a href="https://codepen.io">CodePen</a>.</span
>
</p>
<br>
<br>
<br>

<h1>Insertion Sort</h1>
<br>


<div class="container">
  <div class="row">
    <div class="col">
      <h2>Function Definition:</h2>
      <p class="lead">
        The code implements the insertion sort algorithm through the <code>insertionSort</code> function, which takes an array as input and sorts the elements in ascending order.
      </p>
      <h2>Main Section:</h2>
      <p class="lead">
        An array <code>arr</code> is initialized with some random values.
      </p>
      <p class="lead">
        The <code>insertionSort</code> function is called with <code>arr</code> as the argument to sort the array in-place.
      </p>
      <p class="lead">
        The sorted array is then printed.
      </p>
      <h2>Measuring Time Complexity:</h2>
      <p class="lead">
        The code continues with a full implementation for measuring the time complexity of the insertion sort algorithm for different input sizes.
      </p>
      <p class="lead">
        The necessary libraries (time, numpy, and matplotlib) are imported.
      </p>
      <p class="lead">
        An array <code>elements</code> is created using numpy to store the different input sizes.
      </p>
      <p class="lead">
        The plot labels for the x-axis and y-axis are set.
      </p>
      <p class="lead">
        A list <code>times</code> is initialized to store the execution times for each input size.
      </p>
      <p class="lead">
        A loop is used to iterate over the different input sizes, ranging from 1,000 to 4,000 in steps of 1,000.
      </p>
      <p class="lead">
        Inside the loop:
      </p>
      <ul class="lead">
        <li>The current input size is used to generate a random array <code>a</code> using the <code>numpy.random.randint()</code> function.</li>
        <li>The <code>insertionSort</code> function is called with <code>a</code> as the argument to sort the array in-place.</li>
        <li>The start and end times are recorded using <code>time.time()</code> to measure the execution time.</li>
        <li>The difference between the end and start times is appended to the <code>times</code> list.</li>
        <li>The execution time for the current input size is printed.</li>
      </ul>
      <p class="lead">
        After the loop, the total execution time for all input sizes is calculated and printed.
      </p>
      <p class="lead">
        Finally, a plot is generated using <code>matplotlib.pyplot</code> to visualize the time complexity. The input sizes (<code>elements</code>) are plotted on the x-axis, and the corresponding execution times (<code>times</code>) are plotted on the y-axis. The plot is displayed using <code>plt.show()</code>.
      </p>
      <p class="lead">
        The purpose of this code is to demonstrate the time complexity of the insertion sort algorithm by measuring its execution time for different input sizes and visualizing the results using a plot.
      </p>
    </div>
  </div>
</div>




        `,
    videoLink: `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9oWd4VJOwr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `,
    link1: "https://www.geeksforgeeks.org/python-program-for-selection-sort/",
    link2: "https://careerkarma.com/blog/selection-sort-python/",
  },
  {
    name: "experiment-04-a",
    description:
    "The given code implements the binary search algorithm. It defines a binarySearch function that takes an array, target element, start index (si), and end index (ei) as parameters. The function recursively performs binary search on the array to find the target element. It compares the target element with the middle element of the current range and narrows down the search range accordingly until the target element is found or the search range is empty.",

  codeLink: "https://codepen.io/Ta-h-a/pen/GRwoqyV",
  explanation: `
  <div class="container">
  <div class="row">
    <div class="col">
      <h2 class="display-4">Binary Search Time Complexity Analysis</h2>
      <h3 class="mt-5">Introduction</h3>
      <p class="lead">Binary search is an efficient algorithm for finding an element in a sorted array. It follows a divide-and-conquer approach, repeatedly dividing the search space in half until the target element is found or the search space is empty. This code implements the binary search algorithm and analyzes its time complexity.</p>

      <h3 class="mt-5">Code Explanation</h3>
      <h4>Main Code</h4>
      <p>The <code>binarySearch</code> function is defined to perform the binary search. It takes an array, target element, start index (si), and end index (ei) as parameters.</p>

      <h4>Binary Search Algorithm</h4>
      <ul>
        <li>Check if the start index <code>si</code> is greater than the end index <code>ei</code>. If true, return -1 indicating that the target element was not found.</li>
        <li>Calculate the middle element index as the average of <code>si</code> and <code>ei</code>, using integer division to obtain the floor value.</li>
        <li>Compare the target element with the middle element of the current range:
          <ul>
            <li>If they are equal, return the middle element index indicating a successful match.</li>
            <li>If the target element is less than the middle element, recursively call <code>binarySearch</code> with the same array, target, <code>si</code>, and <code>middle_element - 1</code> as the new end index. This narrows down the search range to the lower half of the array.</li>
            <li>If the target element is greater than the middle element, recursively call <code>binarySearch</code> with the same array, target, <code>middle_element + 1</code> as the new start index, and <code>ei</code> as the end index. This narrows down the search range to the upper half of the array.</li>
          </ul>
        </li>
      </ul>

      <h3 class="mt-5">Time Complexity Analysis</h3>
      <p>The code measures the time taken by the binary search algorithm for arrays of increasing lengths. It uses the <code>numpy.random.randint</code> function to generate random arrays with sizes ranging from 1,000 to 39,000 elements.</p>
      <p>For each array size:</p>
      <ol>
        <li>Start the timer (<code>start = time.time()</code>).</li>
        <li>Generate a random array of the specified size using <code>numpy.random.randint</code>.</li>
        <li>Perform binary search on the array to find the target element 1, using <code>binarySearch</code>.</li>
        <li>Stop the timer (<code>end = time.time()</code>).</li>
        <li>Calculate the elapsed time by subtracting <code>start</code> from <code>end</code> and append it to the <code>times</code> list.</li>
        <li>Print the time taken for the current array size.</li>
        <li>Repeat the above steps for all array sizes.</li>
        <li>Plot a graph using <code>matplotlib.pyplot</code> to visualize the relationship between the array size and the corresponding time taken.</li>
      </ol>

      <h3 class="mt-5">Conclusion</h3>
      <p>The code demonstrates the implementation and time complexity analysis of the binary search algorithm. The time complexity of binary search is logarithmic, i.e., O(log n), where n is the size of the array. This means that the time taken by the algorithm increases slowly as the array size grows. The plotted graph helps visualize the logarithmic time complexity as the array size increases.</p>
    </div>
  </div>
</div>

      `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/V_T5NuccwRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `,
  link1: "https://chortle.ccsu.edu/java5/Notes/chap53B/ch53B_18.html",
  link2: "https://www.programiz.com/dsa/binary-search",
  },
  {
    name: "experiment-04-b",
    description:
    "The given code implements the binary search algorithm. It defines a binarySearch function that takes an array, target element, start index (si), and end index (ei) as parameters. The function recursively performs binary search on the array to find the target element. It compares the target element with the middle element of the current range and narrows down the search range accordingly until the target element is found or the search range is empty.",

  codeLink: "https://codepen.io/Ta-h-a/pen/GRwoqyV",
  explanation: `
  <div class="container">
  <div class="row">
    <div class="col">
      <h2 class="display-4">Binary Search Time Complexity Analysis</h2>
      <h3 class="mt-5">Introduction</h3>
      <p class="lead">Binary search is an efficient algorithm for finding an element in a sorted array. It follows a divide-and-conquer approach, repeatedly dividing the search space in half until the target element is found or the search space is empty. This code implements the binary search algorithm and analyzes its time complexity.</p>

      <h3 class="mt-5">Code Explanation</h3>
      <h4>Main Code</h4>
      <p>The <code>binarySearch</code> function is defined to perform the binary search. It takes an array, target element, start index (si), and end index (ei) as parameters.</p>

      <h4>Binary Search Algorithm</h4>
      <ul>
        <li>Check if the start index <code>si</code> is greater than the end index <code>ei</code>. If true, return -1 indicating that the target element was not found.</li>
        <li>Calculate the middle element index as the average of <code>si</code> and <code>ei</code>, using integer division to obtain the floor value.</li>
        <li>Compare the target element with the middle element of the current range:
          <ul>
            <li>If they are equal, return the middle element index indicating a successful match.</li>
            <li>If the target element is less than the middle element, recursively call <code>binarySearch</code> with the same array, target, <code>si</code>, and <code>middle_element - 1</code> as the new end index. This narrows down the search range to the lower half of the array.</li>
            <li>If the target element is greater than the middle element, recursively call <code>binarySearch</code> with the same array, target, <code>middle_element + 1</code> as the new start index, and <code>ei</code> as the end index. This narrows down the search range to the upper half of the array.</li>
          </ul>
        </li>
      </ul>

      <h3 class="mt-5">Time Complexity Analysis</h3>
      <p>The code measures the time taken by the binary search algorithm for arrays of increasing lengths. It uses the <code>numpy.random.randint</code> function to generate random arrays with sizes ranging from 1,000 to 39,000 elements.</p>
      <p>For each array size:</p>
      <ol>
        <li>Start the timer (<code>start = time.time()</code>).</li>
        <li>Generate a random array of the specified size using <code>numpy.random.randint</code>.</li>
        <li>Perform binary search on the array to find the target element 1, using <code>binarySearch</code>.</li>
        <li>Stop the timer (<code>end = time.time()</code>).</li>
        <li>Calculate the elapsed time by subtracting <code>start</code> from <code>end</code> and append it to the <code>times</code> list.</li>
        <li>Print the time taken for the current array size.</li>
        <li>Repeat the above steps for all array sizes.</li>
        <li>Plot a graph using <code>matplotlib.pyplot</code> to visualize the relationship between the array size and the corresponding time taken.</li>
      </ol>

      <h3 class="mt-5">Conclusion</h3>
      <p>The code demonstrates the implementation and time complexity analysis of the binary search algorithm. The time complexity of binary search is logarithmic, i.e., O(log n), where n is the size of the array. This means that the time taken by the algorithm increases slowly as the array size grows. The plotted graph helps visualize the logarithmic time complexity as the array size increases.</p>
    </div>
  </div>
</div>

      `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/V_T5NuccwRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `,
  link1: "https://chortle.ccsu.edu/java5/Notes/chap53B/ch53B_18.html",
  link2: "https://www.programiz.com/dsa/binary-search",
  },
  {
    name: "experiment-04-c",
    description:
      "The code calculates the Fibonacci sequence up to a given number `n` and returns the sequence as a list. It uses a `for` loop to generate the Fibonacci numbers and appends them to a list. The function is then called with different values of `n` to print the corresponding Fibonacci sequences.",

    codeLink: "https://codepen.io/Ta-h-a/pen/qBQOyjM",
    explanation: `
  <div class="container">
  <div class="row">
    <div class="col">
      <h2>Function Definition:</h2>
      <p class="lead">
        The code defines a function called <code>fib</code> that calculates the Fibonacci sequence up to the given input <code>n</code>.
      </p>
      <p class="lead">
        The function takes a single parameter <code>n</code>, which represents the number of Fibonacci sequence elements to generate.
        The function will return a list containing the Fibonacci sequence up to the <code>n</code>th element.
      </p>
      <h2>Fibonacci Sequence Initialization:</h2>
      <p class="lead">
        Inside the function, a list named <code>a</code> is initialized with the first two elements of the Fibonacci sequence: <code>[0, 1]</code>.<br>
        <code>a[0]</code> represents the 0th Fibonacci number (0) and <code>a[1]</code> represents the 1st Fibonacci number (1).
      </p>
      <h2>Fibonacci Sequence Calculation:</h2>
      <p class="lead">
        A for loop is used to calculate the remaining Fibonacci numbers up to the <code>n</code>th element.
        The loop starts from 2 and goes up to <code>n+1</code> (inclusive).
      </p>
      <p class="lead">
        In each iteration, the next Fibonacci number is calculated by summing the previous two numbers in the sequence (<code>a[i-1]</code> and <code>a[i-2]</code>).
        The newly calculated Fibonacci number is then appended to the <code>a</code> list using the <code>append</code> method.
      </p>
      <h2>Return the Fibonacci Sequence:</h2>
      <p class="lead">
        Once the loop completes, the function returns the <code>a</code> list, which contains the Fibonacci sequence up to the <code>n</code>th element.
      </p>
      <h2>Testing the Function:</h2>
      <p class="lead">
        The print statements at the end of the code call the <code>fib</code> function with different values of <code>n</code> to test its functionality.
      </p>
      <p class="lead">
        The function is called with <code>n</code> equal to 2, 3, 5, 6, 7, and 8.
        The returned Fibonacci sequences are printed, and the output will be:
      </p>
      <pre>
[0, 1, 1]
[0, 1, 1, 2]
[0, 1, 1, 2, 3, 5]
[0, 1, 1, 2, 3, 5, 8]
[0, 1, 1, 2, 3, 5, 8, 13]
[0, 1, 1, 2, 3, 5, 8, 13, 21]
      </pre>
      <p class="lead">
        In summary, the code defines a function <code>fib</code> that generates the Fibonacci sequence up to a given number <code>n</code>.
        The Fibonacci sequence is calculated using a for loop and stored in a list, which is then returned by the function.
        The code demonstrates the functionality of the <code>fib</code> function by printing Fibonacci sequences for different values of <code>n</code>.
      </p>
    </div>
  </div>
</div>

      `,
    videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7Sv4NmvdHcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `,
    link1: "https://byjus.com/maths/fibonacci-sequence/",
    link2:
      "https://elearningindustry.com/fibonacci-sequence-what-is-and-how-applies-agile-development",
  },
  {
    name: "experiment-05",
    description:
    "The provided code implements a linked list data structure in Python with functions for printing, searching, prepending, and removing nodes. It demonstrates basic operations on a linked list such as traversal, modification, and manipulation of nodes.",

  codeLink: "https://codepen.io/Ta-h-a/pen/WNYrGej",
  explanation: `
  <div class="container">
  <div class="row">
    <div class="col">
      <h2>Code Explanation: Basic Linked List Operations</h2>
      <hr>
      <br>
      <h3>Node Class</h3>
      <p>The <code>Node</code> class represents a single node in the linked list. Each node contains a <code>data</code> attribute to store the value and a <code>next</code> attribute to point to the next node in the list.</p>
      
      <h3>printLL Function</h3>
      <p>The <code>printLL</code> function takes the head of a linked list as input and prints the elements of the linked list in order. It traverses the linked list starting from the head and prints each node's data followed by an arrow (<code>-&gt;</code>). Finally, it prints "None" to indicate the end of the list.</p>
      
      <h3>searching Function</h3>
      <p>The <code>searching</code> function takes the head of a linked list and a data value as input. It searches for the given data in the linked list and returns <code>True</code> if the data is found and <code>False</code> otherwise. It uses a while loop to iterate through the linked list, comparing the data of each node with the target value.</p>
      
      <h3>input Function</h3>
      <p>The <code>input</code> function takes a list as input and constructs a linked list from the elements of the list. It creates a new node for each element and connects the nodes together to form a linked list. It returns the head of the linked list.</p>
      
      <h3>prependingNode Function</h3>
      <p>The <code>prependingNode</code> function takes the head of a linked list and a data value as input. It creates a new node with the given data and inserts it at the beginning of the linked list. If the linked list is empty (head is <code>None</code>), it simply returns the new node as the new head. Otherwise, it sets the <code>next</code> attribute of the new node to the current head and returns the new node as the new head.</p>
      
      <h3>remove Function</h3>
      <p>The <code>remove</code> function takes the head of a linked list and a data value as input. It searches for the node with the given data in the linked list and removes that node from the list. It uses two pointers, <code>curr</code> and <code>prev</code>, to traverse the list. When the node with the target data is found, the <code>prev.next</code> pointer is modified to skip the current node, effectively removing it from the list.</p>
      
      <h3>Usage Example</h3>
      <p>The code demonstrates the usage of the implemented functions:</p>
      <ol>
        <li>It creates a linked list with the elements <code>[1, 2, 3, 4, 5, 6, 7, 8]</code> using the <code>input</code> function and assigns the head to the <code>head</code> variable.</li>
        <li>It prints the initial linked list using the <code>printLL</code> function.</li>
        <li>It searches for the value <code>10</code> in the linked list using the <code>searching</code> function (although it does not capture or use the result).</li>
        <li>It prepends the value <code>5</code> to the linked list using the <code>prependingNode</code> function and updates the <code>head</code> variable.</li>
        <li>It prints the modified linked list after prepending the node.</li>
        <li>It removes the node with the value <code>4</code> from the linked list using the <code>remove</code> function.</li>
        <li>It prints the final linked list after removing the node.</li>
      </ol>
      
      <p>The purpose of this code is to demonstrate the basic operations on a linked list such as printing, searching, inserting at the beginning, and removing nodes.</p>
    </div>
  </div>
</div>


    `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/R9PTBwOzceo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `,
  link1: "https://www.javatpoint.com/ds-linked-list",
  link2:
    "https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/",
  },
  {
    name: "experiment-06",
    description:
    "The provided code defines an iterable class that generates a sequence of numbers from 10 up to a specified limit using the `__iter__` and `__next__` methods. It demonstrates the implementation of a custom iterator in Python.",

  codeLink: "https://codepen.io/Ta-h-a/pen/rNQxMMq",
  explanation: `
  <div class="container">
  <div class="row">
    <div class="col">
      <h2>Code Explanation: Implementing a Custom Iterator</h2>
      <br>
      <h3>Iter Class</h3>
      <p>The <code>Iter</code> class represents the iterator. It has three methods:</p>
      <ol>
        <li><code>__init__(self, limit)</code>: This is the constructor method that initializes the iterator object. It takes a single parameter <code>limit</code>, which specifies the upper limit of the sequence. It assigns the <code>limit</code> to the <code>self.limit</code> attribute.</li>
        <li><code>__iter__(self)</code>: This method is called when the iterator is initialized or reset. It returns the iterator object itself. In this case, it sets the starting value of the sequence to 10 by assigning <code>self.x = 10</code>.</li>
        <li><code>__next__(self)</code>: This method is called to retrieve the next element in the sequence. It returns the next number in the sequence and advances the iterator. If the current number (<code>self.x</code>) exceeds the specified limit (<code>self.limit</code>), it raises a <code>StopIteration</code> exception to signal the end of the iteration. Otherwise, it increments <code>self.x</code> by 1 and returns the current number.</li>
      </ol>
      
      <h3>Iterating Over the Iterator</h3>
      <p>The code demonstrates the usage of the iterator by using it in a <code>for</code> loop:</p>
      <ol>
        <li><code>Iter(13)</code>: An instance of the <code>Iter</code> class is created with a limit of 13. The limit determines the maximum value in the generated sequence.</li>
        <li><code>for i in Iter(13):</code>: The <code>for</code> loop iterates over the <code>Iter</code> object, which automatically calls the <code>__iter__</code> method to initialize the iterator.</li>
        <li><code>print(i)</code>: Inside the loop, each value generated by the iterator is printed. The loop continues until the <code>StopIteration</code> exception is raised, indicating the end of the iteration.</li>
      </ol>
      
      <p>The output of this code will be a sequence of numbers starting from 10 and ending at 13:</p>
      <pre>
10
11
12
13
      </pre>
      
      <p>The purpose of this code is to demonstrate how to implement a custom iterator in Python using the <code>__iter__</code> and <code>__next__</code> methods. It allows you to define your own iteration behavior for custom objects.</p>
    </div>
  </div>
</div>


    `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/j4l2FKEvbHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `,
  link1: "https://cplusplus.com/reference/iterator/",
  link2:
    "https://www.geeksforgeeks.org/implementing-iterator-pattern-of-a-single-linked-list/",
  },
  {
    name: "experiment-07-a",
    description:
    "The provided code implements a doubly linked list data structure in Python with various operations such as pushing elements to the front, appending elements at the end, and inserting elements after a given node. It also includes a method to print the elements of the linked list in both forward and reverse directions. The code demonstrates the usage of the doubly linked list by creating an instance of the class, performing several operations on it, and then printing the resulting linked list.",

  codeLink: "https://codepen.io/Ta-h-a/pen/qBQbaPW",
  explanation: `
  <div class="container">
  <div class="row">
  <div class="col">
  <h2 class="text-center">Code Explanation: Doubly Linked List Implementation in Python</h2>
  <br>
      
      <h3>Node Class</h3>
      <p>The <code>Node</code> class represents a node in a doubly linked list. It has three attributes: <code>data</code> to store the value of the node, <code>next</code> to store a reference to the next node, and <code>prev</code> to store a reference to the previous node. The <code>__init__</code> method initializes the node with the given data and sets <code>next</code> and <code>prev</code> to <code>None</code> by default.</p>
      
      <h3>DoublyLinkedList Class</h3>
      <p>The <code>DoublyLinkedList</code> class represents the doubly linked list and provides various methods to manipulate the list.</p>
      <ul>
        <li>The <code>__init__</code> method initializes the doubly linked list with an empty head (initially set to <code>None</code>).</li>
        <li>The <code>push</code> method inserts a new node at the beginning of the doubly linked list.</li>
        <li>The <code>insertAfter</code> method inserts a new node after a specific node in the doubly linked list.</li>
        <li>The <code>append</code> method inserts a new node at the end of the doubly linked list.</li>
        <li>The <code>print_list</code> method traverses and prints the elements of the doubly linked list.</li>
      </ul>
      
      <h3>Main Code</h3>
      <p>In the main code, an instance of the <code>DoublyLinkedList</code> class is created, named <code>dll</code>.</p>
      <p>Several nodes are added to the list using the <code>push</code> and <code>append</code> methods.</p>
      <p>The <code>insertAfter</code> method is used to insert a new node with data 76 after the second node.</p>
      <p>Finally, the <code>print_list</code> method is called to print the elements of the doubly linked list.</p>
    </div>
  </div>
</div>

    `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/H8-IuKKiQeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `,
  link1: "https://www.geeksforgeeks.org/introduction-to-doubly-linked-lists-in-java/",
  link2:
    "https://www.programiz.com/dsa/doubly-linked-list",
  },
  {
    name: "experiment-07-b",
    description:
    "The provided code implements a doubly linked list data structure in Python with various operations such as pushing elements to the front, appending elements at the end, and inserting elements after a given node. It also includes a method to print the elements of the linked list in both forward and reverse directions. The code demonstrates the usage of the doubly linked list by creating an instance of the class, performing several operations on it, and then printing the resulting linked list.",

  codeLink: "https://codepen.io/Ta-h-a/pen/qBQbaPW",
  explanation: `
  <div class="container">
  <div class="row">
  <div class="col">
  <h2 class="text-center">Code Explanation: Doubly Linked List Implementation in Python</h2>
  <br>
      
      <h3>Node Class</h3>
      <p>The <code>Node</code> class represents a node in a doubly linked list. It has three attributes: <code>data</code> to store the value of the node, <code>next</code> to store a reference to the next node, and <code>prev</code> to store a reference to the previous node. The <code>__init__</code> method initializes the node with the given data and sets <code>next</code> and <code>prev</code> to <code>None</code> by default.</p>
      
      <h3>DoublyLinkedList Class</h3>
      <p>The <code>DoublyLinkedList</code> class represents the doubly linked list and provides various methods to manipulate the list.</p>
      <ul>
        <li>The <code>__init__</code> method initializes the doubly linked list with an empty head (initially set to <code>None</code>).</li>
        <li>The <code>push</code> method inserts a new node at the beginning of the doubly linked list.</li>
        <li>The <code>insertAfter</code> method inserts a new node after a specific node in the doubly linked list.</li>
        <li>The <code>append</code> method inserts a new node at the end of the doubly linked list.</li>
        <li>The <code>print_list</code> method traverses and prints the elements of the doubly linked list.</li>
      </ul>
      
      <h3>Main Code</h3>
      <p>In the main code, an instance of the <code>DoublyLinkedList</code> class is created, named <code>dll</code>.</p>
      <p>Several nodes are added to the list using the <code>push</code> and <code>append</code> methods.</p>
      <p>The <code>insertAfter</code> method is used to insert a new node with data 76 after the second node.</p>
      <p>Finally, the <code>print_list</code> method is called to print the elements of the doubly linked list.</p>
    </div>
  </div>
</div>

    `,
  videoLink: `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/H8-IuKKiQeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `,
  link1: "https://www.geeksforgeeks.org/introduction-to-doubly-linked-lists-in-java/",
  link2:
    "https://www.programiz.com/dsa/doubly-linked-list",
  },
  {
    name: "experiment-08-a",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-08-b",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-09-a",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-09-b",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-10-a",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-10-b",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-11",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-12-a",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-12-b",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
  {
    name: "experiment-13",
    link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
  },
];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/:exp", function (req, res) {
  let exp;
  let reqParam = _.kebabCase(_.lowerCase(req.params.exp));

  for (let i = 0; i < experiments.length; i++) {
    if (experiments[i].name == reqParam) {
      exp = experiments[i];
      exp.dataHash = exp.codeLink.slice(30);
      break;
    }
  }

  if (exp == null) {
    res.send("Enter the experiment which is in the syllabus");
  }

  res.render("experiment", {
    title: _.capitalize(_.lowerCase(req.params.exp)),
    description: exp.description,
    explanation: exp.explanation,
    codeLink: exp.codeLink,
    dataHash: exp.dataHash,
    videoLink: exp.videoLink,
    link1: exp.link1,
    link2: exp.link2,
  });
});

app.post("/", function (req, res) {
  res.redirect("/" + req.body.button);
});

app.listen("3000", function () {
  console.log("Server started on Port 3000");
});
