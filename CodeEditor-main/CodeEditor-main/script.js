function runcode(){
    const htmlcode = document.getElementById("html-code").value;
    const csscode = document.getElementById("css-code").value;
    const jscode = document.getElementById("js-code").value;
    const output = document.getElementById("output")
    output.contentDocument.body.innerHTML = htmlcode +"<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
}