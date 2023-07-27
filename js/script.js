function preloader() {
    const imagesList = [
        "./img/1.3.jpg",
        "./img/1.5.jpg",
        "./img/pexels-photo-2017354.jpeg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

// Images ready to be used and getting all buttons in a NODE LIST of buttons (array like structure)
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

const btns = document.querySelectorAll('.switch-button');

//Complete your resource-object that will store the dynamic content. 

const resources = {
    one: {
        headingContent: "Bulk Purchasing Programs",
        bodyText: "Organize bulk purchasing programs for solar panels, electric vehicles, or other green energy technologies. Buying in bulk can result in cost savings for participants.",
        imgUrl: "./img/1.3.jpg",
        imgAlt: "Bulk Purchasing Programs"
    },
    two: {
        headingContent: "Energy Efficiency Programs",
        bodyText: "Improving energy efficiency is a crucial aspect of making green energy more affordable. By encouraging individuals to reduce their energy consumption through energy-saving practices and technologies, they can lower their overall energy bills and make room in their budgets for investing in green energy solutions. Governments and utility companies can promote energy efficiency by offering energy audits, educational campaigns, and financial incentives for adopting energy-efficient appliances and practices.",
        imgUrl: "./img/1.5.jpg",
        imgAlt: "Energy Efficiency Programs"
    },
    three: {
        headingContent: "Energy Education and Awareness",
        bodyText: "Educate the public about the benefits of green energy and how it can save money in the long run. Many people may be hesitant to invest upfront without understanding the long-term financial advantages.",
        imgUrl: "./img/pexels-photo-2017354.jpeg",
        imgAlt: "Community-Based Initiatives"
    }
};

/* The one button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 
The one content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */

document.querySelector('.content').innerHTML = `
<img src="${resources.one.imgUrl}" alt="${resources.one.imgAlt}">
<h1>${resources.one.headingContent}</h1>
<p>${resources.one.bodyText}</p>`;

/* Start your handleSelection function here. */

function handleSelection(event) {
    event.preventDefault();
    console.log(event.target.parentElement.classList);
    let currentButton = event.target.parentElement.classList;
    let content = document.querySelector('.content');
    document.querySelector('a#active').removeAttribute('id');
    if (currentButton.contains('one')) {
        content.innerHTML = `
        <img src="${resources.one.imgUrl}" alt="${resources.one.imgAlt}">
        <h1>${resources.one.headingContent}</h1>
        <p>${resources.one.bodyText}</p>`;
        document.querySelector('a.one').setAttribute('id', 'active');
    } else if (currentButton.contains('two')) {
        content.innerHTML = `<img src="${resources.two.imgUrl}" alt="${resources.two.imgAlt}">
        <h1>${resources.two.headingContent}</h1>
        <p>${resources.two.bodyText}</p>`;
        document.querySelector('a.two').setAttribute('id', 'active');
    } else if (currentButton.contains('three')) {
        content.innerHTML = `
        <img src="${resources.three.imgUrl}" alt="${resources.three.imgAlt}">
        <h1>${resources.three.headingContent}</h1>
        <p>${resources.three.bodyText}</p>`;
        document.querySelector('a.three').setAttribute('id', 'active');
    }
}

// Call the function handlesSelection on click of each anchor tag inside the switch-buttons div
console.log(btns);
for (let btn of btns) {
    btn.setAttribute('onClick', 'handleSelection(event)');
}
