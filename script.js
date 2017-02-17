

function startQuiz(){
      console.log("In the javaScript");
      window.location.assign('quiz.html');

}
    
        var pos=0, question, opt1, opt2, opt3, ans, options, correctAnsCount=0, check;

        var questions = [
            [ "What does HTML stand for?", "Hyper Text Markup Language",  "Home Tool Markup Language",  "Hyperlinks and Text Markup Language", "A"], 
            
            [ "Who is making the Web standards?",  "The World Wide Web Consortium",  "Microsoft",  "Google",  "A"], 
            
            [ "Which event occurs when the user clicks on an HTML element?", "onchange", "onclick", "onmouseover","B"], 
            
            [ "How do you declare a JavaScript variable?",  "v carName;", "var carName;","variable carName;","B"], 

            [ "Which operator is used to assign a value to a variable?", "*", ".","=","C"], 
            
            [ "What does CSS stand for?", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets","B"],  

            [ "How do you select elements with class name - test?", " #test", "test", ".test","C"], 
            
            ["Which property is used to change the font of an element?", "font", "font-family", "Both font-family and font can be used","B"], 
                            
            [ "Which property is used to change the background color?", "background-color","color","bgcolor","A"], 
           
            [" Which CSS property controls the text size?", "font-size","text-size","font-style","A"]

     ];

     console.log(questions[0][0]);

     function dispQuestion(){
        
        if(pos < questions.length){
            console.log(pos);

            addcss();

            document.getElementById("testStatus").innerHTML = "Question " + (pos+1) + " of " + questions.length;
            question = questions[pos][0];
            opt1     = questions[pos][1];
            opt2     = questions[pos][2];
            opt3     = questions[pos][3];

            console.log(question);

            document.getElementById("queStyle").innerHTML ='<h1 class = "queStyle">' +"Q.  "+ question + '</h1>';
            document.getElementById("o1").innerHTML = '<input type = "radio" name = "option" value = "A" class = "opStyle" />' + "   " + opt1 + '<br/>';
            document.getElementById("o2").innerHTML = '<input type = "radio" name = "option" value = "B" class = "opStyle" />' + "   " + opt2 + '<br/>';
            document.getElementById("o3").innerHTML = '<input type = "radio" name = "option" value = "C" class = "opStyle" />' + "   " + opt3 + '<br/>';

            document.getElementById("submitBtnStyle").innerHTML ='<input type = "Submit" id="btn" value = "Submit Answer" onclick = "checkAnswer();"/>';

        }
        else{
            
            document.getElementById("testStatus").innerHTML = '<center><h3>Test Completed............</h3></center>';
           
    
            if(correctAnsCount < (questions.length * 0.4)){
                
                document.getElementById("test").innerHTML = '<center><h3 id = "fail">Your result is fail...</h3></center>';
            }
            else{
                 document.getElementById("test").innerHTML = '<center><h3 id = "pass" >You got <b> ' + correctAnsCount + '</b>  out of <b>' + 
                 questions.length + '</b>  answers correct.<br><br>Congratulations............ you pass the test...</h3></center>';
            }

            pos = 0;
            correctAnsCount = 0;
            return false;

        }
   


    }


    function checkAnswer(){
   
        //for loop coding to read checked radio button value

        options = document.getElementsByName("option");

        console.log(options);

        for (var i = 0; i < options.length; i++) {
            if(options[i].checked){
                ans = options[i].value;
                check = true;
                break;
            }
        }

  console.log(ans);

  console.log(questions[pos][4]);

            if(check){
                if(ans == questions[pos][4]){
            
                correctAnsCount++;

                console.log(correctAnsCount);
            }

            pos++;
            check = false;
            console.log(pos);

            dispQuestion();

       
            }
            else{
                alert("Choose any one option");
            }
       

    }




    function addcss(){

        var style   = document.createElement( 'link' );
        style.rel   = 'stylesheet';
        style.type  = 'text/css';
        style.href  = '/style.css';
        document.getElementsByTagName( 'head' )[0].appendChild( style );
    }

     





