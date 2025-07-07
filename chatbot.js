function IsEnter()
{
    var TextBox_val = document.getElementById("InputBox").value;

    if(TextBox_val != "")
    {
        if(Event.keyCode == 13)
            main();
    }
}

function main()
{
    var TextBox_val = document.getElementById("InputBox").value;
    var ResponseText_val = document.getElementById("ResponseText").value;

    var FormatInput = TextBox_val.toLowerCase().trim();

    
    if (FormatInput.includes("hii") || FormatInput.includes("hello"))
        ResponseText_val.innerHTML = "hello!";

    else if (FormatInput.includes("how are you"))
        ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

    else
        ResponseText_val.innerHTML = "Sorry, I can't understand you ";
}
