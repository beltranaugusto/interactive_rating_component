
const submit = () => {
    document.querySelector("#step-one").classList.add("hide")
    document.querySelector("#step-two").classList.remove("hide")
}

const ratingButton = (number) => {
    document.querySelector("#rating-text").innerHTML = `You selected ${number} out of 5`;
}



