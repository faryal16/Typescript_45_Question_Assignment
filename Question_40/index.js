//Q# 40 Album: Write a function called make_album()
function make_album(artist_name, album_title, tracks) {
    //Object describing a music album. 
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling function with three diffrent values and creat variable
var album1 = make_album("jagjit singh", "AEENA");
console.log(album1);
var album2 = make_album("Muhammad Rafi", "Madhubala", 2);
console.log(album2);
var album3 = make_album("Lata", "sad songs", 3);
console.log(album3);
