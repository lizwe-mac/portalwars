let username= document.querySelector('.username')
let name= document.querySelector('.name')
let clan= document.querySelector('.clan')
let honour= document.querySelector('.honour')
let challenges= document.querySelector('.challenges')
let language= document.querySelector('.language')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let main = document.querySelector('#main')
let login_section = document.querySelector('.login-section')
let header = document.querySelector('header')
console.log("****************")

btn.addEventListener('click',run)
btn2.addEventListener('click',run)

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

function run(){
    let user_input = document.querySelector('#user_input').value;
    let user_input2 = document.querySelector('.user_input2').value;
    document.querySelector('.link').href=`https://www.codewars.com/users/${user_input.toLowerCase()}`
    
    console.log(user_input)
    if(user_input===null || user_input===''){
        document.querySelector('.errormsg').innerText='Enter valid username'
        return
    }
    else{
        css(main, {
            'display':'flex',
            'flex-wrap':'wrap'
        })
        css(header, {
            'display':'flex'
        })
        css(login_section, {
            'display':'none'
        })
        console.log("here".repeat(5))
        document.querySelector('.errormsg').innerText=''

const url = `https://www.codewars.com/api/v1/users/${user_input.toLowerCase()}`
console.log(url)
fetch(url)
  .then( response => response.json() )
  .then( json => displayResults(json) )
  .catch( error => console.error(`Error fetching data: ${error.message}`) );


function displayResults(json){
    user_input2.innerText=''
    user_input.innerText=''
    console.log(json)
    console.table(Object.entries(json.ranks.languages))
    username.innerText=json.username
    
    name.innerText=json.name
    clan.innerText=json.clan
    honour.innerText=json.honor
    challenges.innerText=json.codeChallenges.totalCompleted;
    Object.entries(json.ranks.languages).forEach( ([key, value])=> {
        language.innerText=`${key.toUpperCase()}: `
        let html = ''
        Object.entries(value).forEach(([key, value]) =>{
            html += `<li>${key}: ${value}</li>`
        })

        document.querySelector('.properties').innerHTML=html
    }

    )
    
}
}
}