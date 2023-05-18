window.history.forward();
function storeValue(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        $.cookies.set(key, value);
    }
}
function getStoredValue(key) {
    if (localStorage) {
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}
var mode = getStoredValue('cs_score');
var mode1 = getStoredValue('you_score');
document.getElementById("computer_score").innerHTML=localStorage.getItem("cs_score")
document.getElementById("your_score").innerHTML=localStorage.getItem("you_score")

// Image Border and IMG Control
function image_border_maker(y,c){
    if(y==1){
        document.getElementById("y_img_border").style=" border: 15px solid #0074B6;"
        document.getElementById("my_img").src="rock.png"
    }
    if(y==2){
        
        document.getElementById("y_img_border").style="border: 15px solid #BD00FF;"
        document.getElementById("my_img").src="scissor.png"
    }
    if(y==3){
        document.getElementById("y_img_border").style="border:15px solid #FFA943"
        document.getElementById("my_img").src="paper.png"
    }
    if(c==1){
        document.getElementById("c_img_border").style=" border: 15px solid #0074B6;"
        document.getElementById("cs_img").src="rock.png"
    }
    if(c==2){
        document.getElementById("c_img_border").style="border: 15px solid #BD00FF;"
        
        document.getElementById("cs_img").src="scissor.png"
    }
    if(c==3){
        document.getElementById("c_img_border").style="border:15px solid #FFA943"
        document.getElementById("cs_img").src="paper.png"
    }
}


//result logic section

function choices(your_choice)
{
    result_section()
    console.log("Your Choice: ",Number(your_choice))
    let computer_choice=Math.floor(Math.random() * 3) + 1;
    console.log("Computer Choice:",Number(computer_choice)) 

    if(your_choice==computer_choice)
    {
        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="TIE GAME"
        console.log('TIE GAME')
        document.getElementById("your_outer_border").style="border:0;"
        document.getElementById("your_mid_border").style="border:0;"
        document.getElementById("your_inner_border").style="border:0;"
        document.getElementById("outer_border").style="border:0;"
        document.getElementById("mid_border").style="border:0;"
        document.getElementById("inner_border").style="border:0;"
         
    }

    if(your_choice==1 && computer_choice==2){

        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU WIN"
        let current_score=Number(document.getElementById("your_score").innerHTML)
        current_score=current_score+1
        document.getElementById("your_score").innerHTML=current_score
        
        your_border_control()
        document.getElementById("next-btn").style="display:inline-block;"
        storeValue('you_score',current_score);
    }

    if(your_choice==1 && computer_choice==3){
        
       image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU LOST"
        let current_score=Number(document.getElementById("computer_score").innerHTML)
        current_score=current_score+1
        document.getElementById("computer_score").innerHTML=current_score
        cs_border_control()
        storeValue('cs_score',current_score);
    }

    if(your_choice==2 && computer_choice==3){
        
        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU WIN"
        let current_score=Number(document.getElementById("your_score").innerHTML)
        current_score=current_score+1
        document.getElementById("your_score").innerHTML=current_score
        your_border_control()
        document.getElementById("next-btn").style="display:inline-block;"
        storeValue('you_score',current_score);
    }


    if(computer_choice==1 && your_choice==2){

        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU LOST"
        let current_score=Number(document.getElementById("computer_score").innerHTML)
        current_score=current_score+1
        document.getElementById("computer_score").innerHTML=current_score
        cs_border_control()
        storeValue('cs_score',current_score);
    }

    if(computer_choice==1 && your_choice==3){

        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU WIN"
        let current_score=Number(document.getElementById("your_score").innerHTML)
        current_score=current_score+1
        document.getElementById("your_score").innerHTML=current_score
        your_border_control()     
        document.getElementById("next-btn").style="display: inline-block;"
        storeValue('you_score',current_score);
    }

    if(computer_choice==2 && your_choice==3){

        image_border_maker(your_choice,computer_choice)

        document.getElementById("win_text").innerHTML="YOU LOST"
        let current_score=Number(document.getElementById("computer_score").innerHTML)
        current_score=current_score+1
        document.getElementById("computer_score").innerHTML=current_score
        cs_border_control()
        storeValue('cs_score',current_score);
    }

    function your_border_control(){
        document.getElementById("outer_border").style="border:0;"
        document.getElementById("mid_border").style="border:0;"
        document.getElementById("inner_border").style="border:0;"
        document.getElementById("your_outer_border").style="border: 15px solid #2E9A2563; border-radius: 50%;"
        document.getElementById("your_mid_border").style="border: 15px solid #1DA82B; border-radius: 50%;"
        document.getElementById("your_inner_border").style="border: 30px solid #2E9A25; border-radius: 50%;"
    }


    function cs_border_control(){
        document.getElementById("your_outer_border").style="border:0;"
        document.getElementById("your_mid_border").style="border:0;"
        document.getElementById("your_inner_border").style="border:0;"
        document.getElementById("outer_border").style="border: 15px solid #2E9A2563; border-radius: 50%;"
        document.getElementById("mid_border").style="border: 15px solid #1DA82B; border-radius: 50%;"
        document.getElementById("inner_border").style="border: 30px solid #2E9A25; border-radius: 50%;"
    }

}


//hide the choice section
function result_section(){
    document.getElementById("choice_section").style="display:none;"
    document.getElementById("result_part").style="display:flex;"
}

//these fuction will call when user will click specific button

function play_again(){
    document.getElementById("next-btn").style="display: none;"
    document.getElementById("choice_section").style="display:block;"
    document.getElementById("result_part").style="display:none;"
}

function show_rules(){
    document.getElementById("rules").style="display:block;"
    document.getElementById("cross_btn").style="display:block;"
}
function rules(){
    console.log(localStorage.getItem("cs_score"))
    document.getElementById("rules").style="display:none;"
    document.getElementById("cross_btn").style="display:none;"
}

function next()
{
    storeValue('cs_score',0);
    storeValue('you_score',0);
    window.history.forward();
    location.href = "next.html";
}