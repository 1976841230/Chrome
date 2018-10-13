$(function () {
    console.log("Test");
    var html = "<div class=\"left\">\n"
               + "    <textarea></textarea>\n"
               + "</div>\n"
               + "<div class=\"right\">\n"
               + "</div>";
    $("div.Layout-main div:nth-child(3)").hide();
    $("body").append(html);
    $("body").on("keyup","div.left textarea", function () {
        convert();
    });
});
function convert() {
    var text = $("div.left textarea").val();
    var converter = new showdown.Converter();
    var html = converter.makeHtml(text);
    $("div.right").html(html);
}