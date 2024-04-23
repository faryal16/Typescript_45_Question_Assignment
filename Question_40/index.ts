//Q# 40 Album: Write a function called make_album()

function make_album(artist_name: string , album_title: string , tracks?:number) {
    //Object describing a music album. 
let album: {artist: string, title:string , tracks?:Number}={
   artist:artist_name,
   title:album_title,
};
if(tracks !== undefined){
    album.tracks = tracks;
}
return album;
}
//calling function with three diffrent values and creat variable

let album1= make_album("jagjit singh", "AEENA")
console.log(album1)

let album2= make_album("Muhammad Rafi", "Madhubala" ,2 );
console.log(album2)

let album3 = make_album("Lata" , "sad songs", 3);
console.log(album3)