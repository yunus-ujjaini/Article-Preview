var mobcard=document.getElementById("share-content-mob");
mobcard.classList.add("hidemobcard");
function toggleCard(){
    console.log("called");
    let card=document.getElementById("share-content");
    let icon=document.getElementById("share-icon");
    if(card.classList.contains("share-card-open")==true)
    {
        card.classList.remove("share-card-open");
        icon.classList.remove("share-icon-focussed");
    }
    else{
        card.classList.add("share-card-open");
        icon.classList.add("share-icon-focussed");
    }

    let actioncard=document.getElementById("action");
    if(mobcard.classList.contains("hidemobcard")==true)
    {
        mobcard.classList.remove("hidemobcard");
        actioncard.classList.add("hidemobcomp");
    }
    else{
        mobcard.classList.add("hidemobcard");
        actioncard.classList.remove("hidemobcomp");
    }

}
