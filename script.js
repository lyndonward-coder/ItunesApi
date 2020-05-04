function run() {
    var artist = document.getElementById('artist').value;
    var number = document.getElementById('number').value;

    $.ajax({
        url: 'http://itunes.apple.com/search?term=' + artist +'&limit=' + number,
        dataType: "json",
        success: process
    });
}

function process(data) {
    console.log(data)

    var songs = data.results;
    var o = "";
    
    for(var p=0;p<songs.length;p++) {
        var q = 1;
        q += p
        o += "<tr>";
        o += "<td>" + q + "</td>";
        o += "<td>" + songs[p].trackName + "</td>";
        o += "<td>" + songs[p].artistName + "</td>";
        o += "<td>" + "<audio src="  + songs[p].previewUrl + " controls>" + "</td>"; 
        o += "<td>" + songs[p].collectionName + "</td>";
        o += "<td>" + "<img src =" + songs[p].artworkUrl30 + ">" + "</td>";
        o += "</tr>";
    }
// song rank
// artist name
// song name
// audio preview
// album name
// album art 
 
    var table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "block";

}