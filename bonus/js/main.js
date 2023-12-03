const arrayTeam = [
    {
        "Name": "Wayne",
        "Surname": "Barnett",
        "Role": "Founder & CEO",
        "Image": "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "Name": "Angela",
        "Surname": "Caroll",
        "Role": "Chief Editor",
        "Image": "img/angela-caroll-chief-editor.jpg"
    },

    {
        "Name": "Walter",
        "Surname": "Gordon",
        "Role": "Office Manager",
        "Image": "img/walter-gordon-office-manager.jpg"
    },

    {
        "Name": "Angela",
        "Surname": "Lopez",
        "Role": "Social Media Manager",
        "Image": "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "Name": "Scott",
        "Surname": "Estrada",
        "Role": "Developer",
        "Image": "img/scott-estrada-developer.jpg"
    },

    {
        "Name": "Barbara",
        "Surname": "Ramos",
        "Role": "Graphic Designer",
        "Image": "img/barbara-ramos-graphic-designer.jpg"
    }
]

const container = document.querySelector(".container");

for (let i = 0; i < arrayTeam.length; i++) {
    let foto = arrayTeam[i].Image;
    let nome = arrayTeam[i].Name;
    let cognome = arrayTeam[i].Surname;
    let ruolo = arrayTeam[i].Role;

    createObjectCard(foto, nome, cognome, ruolo);
}


function createObjectCard(selfie, nomeDev, cognomeDev, ruoloDev) {
    let card = document.createElement("div");
    let photo = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("div");
    let role = document.createElement("div");

    card.classList.add("card");
    console.log(card);
    container.append(card);

    image.classList.add("image");
    image.src = selfie;
    photo.append(image);
    card.append(photo);

    name.classList.add("name", "surname");
    name.append(nomeDev + " " + cognomeDev);
    card.append(name);

    role.classList.add("role");
    role.append(ruoloDev)
    card.append(role);
}