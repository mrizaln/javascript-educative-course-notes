const weather = prompt("What's the weather like?");

switch (weather) {
    case "sunny":
        console.log("T-shirt time!");
        break;
    case "windy":
        console.log("Windbreaker life.");
        break;
    case "rainy":
        console.log("Bring that umbrella!");
        break;
    case "snowy":
        console.log("Winter is coming! Just stay inside!");
        break;
    default:
        console.log("Not a valid weather type");
}