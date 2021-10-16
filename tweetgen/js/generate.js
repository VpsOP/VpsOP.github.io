var dataURL;

$(document).ready(function () {
    $(".generate-btn-container").show();

    // For debug purposes : Remove after testing

    // $("#night-mode-btn").click();
    // $(".generate-btn").click();
});


function getValueOfPercent(number, precent) {
    value = ((precent / 100) * number);
    return value;
}

console.log();

$(".generate-btn").click(function () { 

    var capture = document.getElementById("preview-container");
    var offset = $("#preview-container").offset();
    // console.log(offset["top"], offset["left"]);

    var scroll = $("#preview-container");
    console.log(scroll);
    


    var bgColor = "";
    switch ($("#tweetContainer").attr("theme")) {
        case "dim":
            bgColor = "#15202b";
            break;
        case "dark":
            bgColor = "#000000";
            break;
        case "light":
        default:
            bgColor = "#ffffff";
    }

    var height = $("#preview-container").height();
    var width = $("#preview-container").width();


    html2canvas(capture, {
        allowTaint: true,
        // x: offset["left"] + getValueOfPercent(offset["left"], 0.8956916099773243) + getValueOfPercent(offset["left"], 0.068), // offset["left"]
        y: offset["top"],
        width: width,
        height: height,
        scale: 1,
        // backgroundColor: bgColor,
        scrollX: 0,
        scrollY: 0,
        logging: false,
    }).then(function (canvas) {

        dataURL = canvas.toDataURL();
        $("#generated-img").attr("src", dataURL);
    })
    $("canvas").remove();


    setTimeout(() => {
        $(".download-btn-container").fadeIn("fast");
    }, 600);
    
});

$(".download-btn").click(function () { 
    var link = document.createElement("a"); 

    document.body.appendChild(link);

    $("body a").attr("href", dataURL);
    $("body a").attr("download", "FakeTweet");

    link.click();
    document.body.removeChild(link);

});