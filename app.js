let btns = document.querySelectorAll('button')
let msgbx = document.querySelector('.a');
let result= document.querySelector('.b');

let scoreuser = 0,score_computer = 0

for(let t of btns)
{
    t.addEventListener("click",toss)
}
function toss(event)
{
    
    let user_selection = event.target.innerText
    let choices = ["Head","tail"]
    let random_index= parseInt(Math.random()*choices.length)
    let random_choices = choices[random_index]
    console.log(random_choices)
if(user_selection.toLowerCase() === random_choices.toLowerCase())
{
    console.log("User Won",user_selection,random_choices)
    result.innerText = "User Won"
    scoreuser++
    msgbx.innerHTML = `user score:${scoreuser } Computer Score:${score_computer}`
}
else{
    console.log("Computer Won", user_selection,random_choices)
    score_computer++
    msgbx.innerHTML="Computer won"

    msgbx.innerHTML = `user score:${scoreuser } Computer Score:${score_computer}`
    result.innerText = "Computer Won"

}
}