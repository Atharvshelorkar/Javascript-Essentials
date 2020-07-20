do{
    var selection = parseInt(window.prompt("Please enter greater than 100", ""), 10);
}while(isNaN(selection) || selection < 100 || selection < 1);