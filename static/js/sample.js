// document.getElementById("hey-ready")




function enterage() {
    var birthYear = prompt("enter you birth year?... good friend...");
    var result = (2023 - birthYear) * 365
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('Your are age in days ' + result);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(result);
}

function reset() {
    document.getElementById('ageInDays').remove();
}



function gecat() {
    var image = document.createElement('img');
    var url = "https://thecatapi.com/api/images/get?format=src&type=gif&size-small";
    var div = document.getElementById('flex-cat');
    image.src = url;
    div.appendChild(image);
}




function rpcgame(yourChoice) {
    // console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = radomChoicenum();
    var bot = NumtoObject(botChoice);
    console.log(bot);
    results = decideWinner(humanChoice, bot);
    console.log(results);
    message = finalMessage(results);
    console.log(message);


    var frontend = frontendfun(humanChoice, bot, message);


}




function radomChoicenum() {
    return Math.floor(Math.random() * 3);
}

function NumtoObject(number) {
    var name = ['rock', 'paper', 'scissor']
    return name[number];
}


function decideWinner(yourchoice, botchoice) {

    var RpsDatabase = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 },
    }

    var userScore = RpsDatabase[yourchoice][botchoice];
    var computerScore = RpsDatabase[botchoice][yourchoice];
    return [userScore, computerScore];

}






function finalMessage([yourchoice, botchoice]) {

    console.log('inside the finalfunction ', yourchoice);
    if (yourchoice === 1) {
        return { 'message': 'You won!!!!!', 'color': 'green' };
    }
    else if (yourchoice === 0.5) {
        return { 'message': 'Match draw', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You LOST ~~~~~', 'color': 'red' };
    }
}





function frontendfun(ychoice, bchoice, mess) {
    var imageurls = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    // removing for result
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    //start putting results in frontend
    // var imageAtt= document.createElement('img');
    HURL = imageurls[ychoice];
    BURL = imageurls[bchoice];
    console.log("bot-url " + BURL);
    console.log('message inside func', mess);
    var jd = mess;
    var mes = jd.message;

    var col = jd['color'];   // var col=jd.color;     both are work........
    console.log("color " + col);
    var humanDiv = document.createElement('div');
    var BotDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    // var h1=document.createElement('h1');
    messageDiv.innerHTML = "<h1 style='color:" + col + "'>" + mes + "</h1>"
    // var text= document.createTextNode(mes);
    // h1.setAttribute('id','message');
    // h1.appendChild(text);
    // h1.setAttribute('style','color',col);
    humanDiv.innerHTML = "<img src='" + HURL + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >";
    // BotDiv.innerHTML="<img src='"+ BURL +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >";
    BotDiv.innerHTML = "<img src='" + BURL + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1) ;' >";
    var div = document.getElementById('flex-box-image-div');
    div.appendChild(humanDiv);
    div.appendChild(messageDiv);
    div.appendChild(BotDiv);

    // var div= document.getElementById('flex-cat');
    // image.src=url;
    // div.appendChild(image);
    // var h1= document.createElement('h1');
    // var text=h1.createTextNode(mes);
    // var div1=document.getElementById('flex-box-image');
    // imageAtt.src=URL;
    // div1.appendChild(imageAtt);
    // div1.appendChild(text);

}




// challege-4 button color change

var all_buttons = document.getElementsByTagName('button');
var copy_buttons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copy_buttons.push(all_buttons[i].classList[1]);
}
console.log(copy_buttons);


////main function for changing button colors:
function buttoncolorChange(optionsfromForm) {
    if (optionsfromForm.value === 'red') {

        ButtonRed();
    }
    else if (optionsfromForm.value === 'green') {
        console.log(optionsfromForm.value);
        ButtonGreen();
    }
    else if (optionsfromForm.value === 'reset') {
        ButtonReset();
    }
    else if (optionsfromForm.value === 'random') {
        ButtonRandom();
    }
}



function ButtonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function ButtonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
        // console.log(all_buttons[i].classList[1]);
    }
}


function ButtonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_buttons[i]);
    }
}


function ButtonRandom() {
    console.log(all_buttons);
    var choice = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

    for (let i = 0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randomNumber]);
    }
}








//challange 5 :card game"

let cardGame = {
    'you': { 'ScoreSpan': '#your-point', 'div': '#your-box', 'score': 0 },
    'dealer': { 'ScoreSpan': '#dealer-point', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'loses': 0,
    'draws': 0,
    'isStand': false,
    'turnOver': false,

}

const YOU = cardGame['you'];
console.log(YOU);
const DEALER = cardGame['dealer'];
console.log(DEALER);
// const cards=cardGame['cards'];


//audios////
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/yes-win.wav');
const lossSound = new Audio('static/sounds/aww.mp3');
const drawSound = new Audio('static/sounds/oo.wav');



document.querySelector('#hit').addEventListener('click', cardHit);

document.querySelector('#deal').addEventListener('click', DealHit);

document.querySelector('#stand').addEventListener('click', dealerLogic);

function cardHit() {
    if (cardGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return cardGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/image/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function DealHit() {
    // let winner = computeWinner();
    // showResult(winner);
    // showResult(computeWinner());
    if (cardGame['turnOver'] === true) {


        cardGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        let yourScore = document.querySelector('#your-point');
        let dealerScore = document.querySelector('#dealer-point');



        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
            cardGame['you']['score'] = 0;

        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
            cardGame['dealer']['score'] = 0;
        }


        YOU['score'] = 0;
        DEALER['score'] = 0;
        yourScore.textContent = 0;
        dealerScore.textContent = 0;
        document.querySelector('#your-point').style.color = '#ffffff';
        document.querySelector('#dealer-point').style.color = '#ffffff';

        document.querySelector('#letsplay').textContent = "Let's play";
        document.querySelector('#letsplay').style.color = "black";


        cardGame['turnOver'] = true;
    }

}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + cardGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += cardGame['cardsMap'][card][1];
        }
        else {
            activePlayer['score'] += cardGame['cardsMap'][card][0];
        }
    }
    else {
        activePlayer['score'] += cardGame['cardsMap'][card];
    }
}


function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['ScoreSpan']).textContent = 'BUST!!!';
        document.querySelector(activePlayer['ScoreSpan']).style.color = 'red';

    } else {
        document.querySelector(activePlayer['ScoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    cardGame['isStand'] = true;



    while (DEALER['score'] < 16 && cardGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
       await sleep(1000);
        // showResult();
    }

    cardGame['turnOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    // console.log(cardGame['turnOver']);
}




//update the wins,draws and loses
function computeWinner() {
    let winner;


    if (YOU['score'] <= 21) {
        //condition: higher score than dealer or when dealer busts but you're 21 or under.....

        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            cardGame['wins']++;
            // console.log('YOU WON!!');
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            cardGame['loses']++;
            // console.log('YOU LOST!!');
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) {
            cardGame['draws']++;
            // console.log('MATCH DREW!!!');
        }
        //condition : when you bust but dealer doesn't.....
        else if ( (YOU['score'] > 21 )&& (DEALER['score'] <= 21)) {
            cardGame['loses']++;
            winner = DEALER;
            // console.log('YOU LOST!!!')
           

        }
        //condition: when you AND the dealer busts...
        else if (YOU['score'] > 21 && DEALER['score'] > 21) {
            cardGame['draws']++;
            // console.log('MATCH DREW!!')

        }
    }
    else{
        cardGame['loses']++;
        winner = DEALER;
    }
    console.log(cardGame);
    return winner;
}





function showResult(winner) {
    let message, messageColor;


    if (cardGame['turnOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = cardGame['wins'];
            message = 'You Won!!!!';
            messageColor = 'green';
            winSound.play();
        }
        else if (winner === DEALER) {
            document.querySelector('#loses').textContent = cardGame['loses'];
            message = 'You Lose!!!!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            document.querySelector('#draws').textContent = cardGame['draws'];
            message = 'You Drew';
            messageColor = 'yellow';
            drawSound.play();
        }
        document.querySelector('#letsplay').textContent = message;
        document.querySelector('#letsplay').style.color = messageColor;
    }
}