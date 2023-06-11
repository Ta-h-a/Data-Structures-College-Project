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
        videoLink: "https://www.youtube.com/embed/aCVpMz7_gn8",
        link1: 'https://www.geeksforgeeks.org/make-simple-calculator-using-python/',
        link2: 'https://www.programiz.com/python-programming/examples/calculator'
    },
    {
        name: "experiment-01-b",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
    },
    {
        name: "experiment-02",
        link: "https://drive.google.com/file/d/1aXcHFUsWCKe9dfQqBFc6kdbdeAOQ18oj/preview"
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