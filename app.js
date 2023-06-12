const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const _ = require("lodash")
const app = express()

const experiments = [
    {
        name: "experiment-01-a",
        description: "This code is a collection of four programs: one that performs mathematical operations, one that manipulates strings, one that manipulates lists, and one that manipulates dictionaries. The programs demonstrate various operations such as addition, subtraction, multiplication, division, printing, appending, popping, deleting, and modifying elements in a list and dictionary.",
        codeLink: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview",
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
        link1: 'https://www.geeksforgeeks.org/make-simple-calculator-using-python/',
        link2: 'https://www.programiz.com/python-programming/examples/calculator'
    },
    {
        name: "experiment-01-b",
        description: "This code demonstrates a basic implementation of a stack data structure using Python. A stack follows the last-in, first-out (LIFO) principle, where elements are added and removed from the top of the stack.",
        codeLink: "https://drive.google.com/file/d/1J7GltoJtyNslyBDZZfzywmuuZ701w1Ox/preview",
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
        link1: "https://www.studytonight.com/data-structures/stack-using-linked-list",
        link2: "https://www.geeksforgeeks.org/stack-data-structure/",
    },
    {
        name: "experiment-02",
        description: "checkPair and countFreq. The checkPair function checks an array for a pair of elements that add up to a given target sum. If a valid pair is found, it is displayed as output. The countFreq function counts the frequency of each element in an array and prints the element along with its count.",
        codeLink: "https://drive.google.com/file/d/1Bs4qDlrPPsxlpY1s8fAiidFjIjaK-DmA/preview",
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
        link1: "https://codezup.com/program-to-find-pair-with-the-given-sum-in-an-array/",
        link2: "https://www.tutorialspoint.com/count-frequencies-of-all-elements-in-array-in-python",
    },
    {
        name: "experiment-03-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-03-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-04-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-04-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-04-c",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-05",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-06",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-07-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-07-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-08-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-08-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-09-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-09-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-10-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-10-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-11",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-12-a",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-12-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-13",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    
]

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("home")
})

app.get("/:exp",function(req,res){

    let exp;
    let reqParam = _.kebabCase(_.lowerCase(req.params.exp))

    for (let i=0;i<experiments.length;i++){
        if (experiments[i].name == reqParam){
            exp = experiments[i]
            break
        }
    }

    if (exp==null){
        res.send("Enter the experiment which is in the syllabus")
    }

    res.render("experiment",{
        title: _.capitalize(_.lowerCase(req.params.exp)),
        description: exp.description,
        explanation: exp.explanation,
        codeLink: exp.codeLink,
        videoLink: exp.videoLink,
        link1: exp.link1,
        link2: exp.link2
    })
})



app.post("/",function(req,res){
    res.redirect("/"+req.body.button)    
})


app.listen("3000",function(){
    console.log("Server started on Port 3000");
})