
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Gaana_Replica/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar =document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName : "Neverland", filePath: "Gaana_Replica/1.mp3", coverPath: "Gaana_Replica/cover1.jpg"},
    {songName : "Symphony", filePath: "Gaana_Replica/2mp3", coverPath: "Gaana_Replica/cover2.jpg"},
    {songName : "Never Enough", filePath: "Gaana_Replica/3.mp3", coverPath: "Gaana_Replica/cover3.jpg"},
    {songName : "2002", filePath: "Gaana_Replica/4.mp3", coverPath: "Gaana_Replica/cover4.jpg"},
    {songName : "Perfect", filePath: "Gaana_Replica/5.mp3", coverPath: "Gaana_Replica/cover5.jpg"},
    {songName : "See You Again", filePath: "Gaana_Replica/6.mp3", coverPath: "Gaana_Replica/cover6.jpg"},
    {songName : "Dandelions", filePath: "Gaana_Replica/7.mp3", coverPath: "Gaana_Replica/cover 7.jpg"},
    {songName : "Work From Home", filePath: "Gaana_Replica/8.mp3", coverPath: "Gaana_Replica/cover8.png"},
    {songName : "Traitor", filePath: "Gaana_Replica/9.mp3", coverPath: "Gaana_Replica/cover9.jpg"},
    {songName : "It Girl", filePath: "Gaana_Replica/10.mp3", coverPath: "Gaana_Replica/cover10.jpg"}, 
]

songItems.forEach((element, i)=>{
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;

})

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();  
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();  
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Gaana_Replica/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Gaana_Replica/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Gaana_Replica/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})