const itemLoad = [
    {
        id: 1,
        toptext: 'WPM',
        bodytext: 0,
        bodyUnit: "",
        isActive: false
    },
    {
        id: 2,
        toptext: 'CPM',
        bodytext: 0,
        bodyUnit: "",
        isActive: false
    },
    {
        id: 3,
        toptext: 'Errors',
        bodytext: 0,
        bodyUnit: "",
        isActive: true
    },
    {
        id: 4,
        toptext: 'Time',
        bodytext: 60,
        bodyUnit: "s",
        isActive: true
    },
    {
        id: 5,
        toptext: '%Accuracy',
        bodytext: 100,
        bodyUnit:"",
        isActive: true
    }
];
const dummyText = [
    {
        id: 1,
        inptext: 'Click on the area below to start the game',
    },
    {
        id: 2,
        inptext: 'The journey of a thousand miles begins with one step.',
    },
    {
        id: 3,
        inptext: 'Click on restart to start a new game.',
    }
];
function displayHeader() {
    var itemsEl = document.getElementById('items');
    var initDummyTextEl = document.getElementById('dummy-text');
    const WPMData= itemLoad.filter((item)=>item.toptext=='WPM' && item.isActive);
    const CPMData= itemLoad.filter((item)=>item.toptext=='CPM' && item.isActive);
    const errorData= itemLoad.filter((item)=>item.toptext=='Errors' && item.isActive);
    const timeData= itemLoad.filter((item)=>item.toptext=='Time' && item.isActive);
    const accuracyData= itemLoad.filter((item)=>item.toptext=='%Accuracy' && item.isActive);
    const initialDummyText = dummyText[0];

    if (WPMData.length>0){
        WPMData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','WPM1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-WPM');
        itemName.innerText= item.toptext;

        var wpmBody= document.createElement('p');
        wpmBody.setAttribute('id','WPM-body');
        wpmBody.innerText= item.bodytext+item.bodyUnit;;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(wpmBody);
        itemsEl.appendChild(itemCard);

        })
    }
    if (CPMData.length > 0) {
        CPMData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','CPM1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-CPM');
        itemName.innerText= item.toptext;

        var cpmBody= document.createElement('p');
        cpmBody.setAttribute('id','CPM-body');
        cpmBody.innerText= item.bodytext+item.bodyUnit;;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(cpmBody);
        itemsEl.appendChild(itemCard);

        })
    }
    if (errorData.length > 0) {
        errorData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','errors1');
        if(WPMData.length == 0 && CPMData.length == 0) {
            itemCard.style.marginLeft = '200px';
        }
        
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-error');
        itemName.innerText= item.toptext;

        var errorBody= document.createElement('p');
        errorBody.setAttribute('id','errorbody');
        errorBody.innerText= item.bodytext+item.bodyUnit;;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(errorBody);
        itemsEl.appendChild(itemCard);

        })
    }
    
    if(timeData.length > 0) {
        timeData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','time1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','itemtime');
        itemName.innerText= item.toptext;

        var timeBody= document.createElement('p');
        timeBody.setAttribute('id','timebody');
        timeBody.innerText= item.bodytext+item.bodyUnit;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(timeBody);
        itemsEl.appendChild(itemCard);

        })
    }

    if(accuracyData.length > 0) {
        accuracyData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','accuracy1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-accuracy');
        itemName.innerText= item.toptext;

        var accuracyBody= document.createElement('p');
        accuracyBody.setAttribute('id','accuracybody');
        accuracyBody.innerText= item.bodytext+item.bodyUnit;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(accuracyBody);
        itemsEl.appendChild(itemCard);

        })
    }
    
    initDummyTextEl.innerText = initialDummyText.inptext;
}
displayHeader();
document.getElementById('input-text-id').addEventListener('click',initGame);
document.getElementById('restart-btn').addEventListener('click',restartGame);

function getWPMCPM(inpstr) {
    const WPMData= itemLoad.filter(item => item.toptext == "WPM");
    const CPMData= itemLoad.filter(item => item.toptext == "CPM");
    WPMData.isActive = true;
    CPMData.isActive = true;
    errors1.style.marginLeft = '0px';

    var wordCount = inpstr.split(' ').length;
    if (WPMData.length>0){
        WPMData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','WPM1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-WPM');
        itemName.innerText= item.toptext;

        var wpmBody= document.createElement('p');
        wpmBody.setAttribute('id','WPM-body');
        wpmBody.innerText= wordCount;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(wpmBody);
        errors1.before(itemCard);
        })
    }
    if (CPMData.length > 0) {
        CPMData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','CPM1');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-CPM');
        itemName.innerText= item.toptext;

        var cpmBody= document.createElement('p');
        cpmBody.setAttribute('id','CPM-body');
        cpmBody.innerText= inpstr.length;

        cardTop.appendChild(itemName);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(cpmBody);
        errors1.before(itemCard);
        })
    }
}

var clicked = false;
function initGame() {
    if(!clicked){
        clicked = true;
        startGame();
        startTimer();
    } else {
        alert("Currently game is in-progress!!");
    }
}

function validateText(inpstr) {
    var errorCount = 0;
    var correctCharCounts = 0;
    var accuracyRes = 100;
    ansString = dummyText[1].inptext;
    for(let i=0;i<inpstr.length;i++){
        if(inpstr[i] != ansString[i]) {
            errorCount += 1;
        }
    }
    correctCharCounts = inpstr.length - errorCount;
    if(inpstr.length > 0){
        accuracyRes = Math.ceil((correctCharCounts / inpstr.length) * 100);
    }
    accuracybody.innerText = accuracyRes;
    errorbody.innerText = errorCount;
}

function startTimer() {
    var curTime = 60;
    var x = setInterval(function () {
        curTime -= 1;
        if(curTime < 0){
            getWPMCPM(document.getElementById('input-text-id').value);
            document.getElementById('dummy-text').innerText = dummyText[2].inptext;
            document.getElementById('input-text-id').disabled = true;
            clearInterval(x);
            return;
        }
        validateText(document.getElementById('input-text-id').value);        
        timebody.innerText = curTime+"s";
    }, 1000);
}

function startGame() {
    var initDummyTextEl = document.getElementById('dummy-text');
    const initialDummyText = dummyText[1];
    initDummyTextEl.innerText = initialDummyText.inptext;
}
function restartGame() {
    location.reload();
}