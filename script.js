setInterval(() => {
    let date = new Date();
    let formatDate = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
    let h1 = document.body.children[0].firstElementChild.firstElementChild;
    // console.log(h1)
    h1.innerHTML = formatDate;
    // console.log(h1.nextElementSibling)
    let secDate = date.toDateString();
    h1.nextElementSibling.innerHTML = secDate;
}, 1000);