let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let play = document.getElementById("play-icon");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let songImage = document.querySelector(".song-img");
let songName = document.querySelector(".song-name");
let movieName = document.querySelector(".movie-name");
let songTime = document.querySelector(".song-time");
let songleftTime = document.querySelector(".song-lefttime");
let like = document.querySelector("#like-icon");
let likeMessage = document.querySelector(".message");


audio.onloadedmetadata = function(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}


//song names
const Songs = ["Inkem Inkem","Nijanga Nenena","Ninnila","Oke Oka Lokam", "Samajavaragamana"]
const Singers=["Sid Sriram","Karthik","Armaan Malik","Sid Sriram","Sid Sriram"]

//keep track of songs
let songsIndex = 1;


console.log(movieName.innerHTML=`${Singers[songsIndex]}`)
//initially load song
loadSong(Songs[songsIndex])

function loadSong(song){
    songName.innerHTML=`${song}`
    movieName.innerHTML=`${Singers[songsIndex]}`
    songImage.src =  `songsInfo/${song}.jpg`
    console.log(songImage.src)
    audio.src = `songsInfo/${song}.mpeg`
    console.log(audio.src)
}

play.addEventListener("click",playPause)

function playPause(){
    if(play.classList.contains("fa-pause")){
        audio.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play");
    }else{
        audio.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause");
    }
   
}


if(audio.play()){
    setInterval(()=>{
        let timeMin = Math.floor(audio.currentTime/60);
        let timeSec= Math.floor(audio.currentTime%60)
        let timeLeftMin = Math.floor(audio.duration/60);
        let timeLeftSec= Math.floor(audio.duration%60)

        songTime.innerHTML=`${timeMin}:${timeSec}`;
        songleftTime.innerHTML=`${timeLeftMin}:${timeLeftSec}`;

        progress.value = audio.currentTime;
     if( audio.currentTime==audio.duration){
        nextSong()
     }
    },1000);
}

progress.onchange = function(){
    audio.play();
    audio.currentTime = progress.value;
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
}


// change song events
previous.addEventListener('click',prevSong)
next.addEventListener('click',nextSong)

function prevSong(){
    songsIndex--;
    if(songsIndex<0){
        songsIndex=Songs.length-1
    }
    loadSong(Songs[songsIndex])
    playPause()
    audio.play()
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
}

function nextSong(){
    songsIndex++;
    if(songsIndex>Songs.length-1){
        songsIndex=0
    }
    loadSong(Songs[songsIndex])
    playPause()
    audio.play()
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
}
  let col="white";
 

like.addEventListener('click',()=>{

    if(col=="white"){
       document.querySelector("#like-icon").style.color="#1B1A55";
       col="blue";
       likeMessage.innerHTML="added to liked songs"
      setTimeout(()=>{
        likeMessage.style.visibility="visible"
        setTimeout(()=>{
            likeMessage.style.visibility="hidden"
        },1000)
      },200)
      
      
    }else{
        document.querySelector("#like-icon").style.color="white";
        col="white";
        likeMessage.innerHTML="removed from liked songs"
        setTimeout(()=>{
            likeMessage.style.visibility="visible"
            setTimeout(()=>{
                likeMessage.style.visibility="hidden"
            },1000)
          },200)
           
    }
})
