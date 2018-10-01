let contacts = [{
        name: "Farwa",
        imgURL: "download.png",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `1234567890`,
        email: `farwa@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Zehra",
        imgURL: "download.png",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `1234567890`,
        email: `zehra@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Ayesha",
        imgURL:"download.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `1234567890`,
        email: `ayesha@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Alina",
        imgURL: "download.png",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `1234567890`,
        email: `alina@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Aliya",
        imgURL:"download.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `1234567890`,
        email: `aliya@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Zakia",
        imgURL:"download.png",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `1234567890`,
        email: `zakia@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Razia",
        imgURL: "download.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `1234567890`,
        email: `razia@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "Samina",
        imgURL: "download.png",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `1234567890`,
        email: `samina@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    },

    {
        name: "sara",
        imgURL:"download.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `1234567890`,
        email: `sara@gmail.com`,
        'chat-message': `Hello there, i am using whatsapp`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">
        </div>
        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>
    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector("h4").style = `display: none`;
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}