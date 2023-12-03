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

console.log(arrayTeam);
// const team = document.getElementById("team");
const container = document.querySelector(".container");

for(let i = 0; i < arrayTeam.length; i++){
    let nome = arrayTeam[i].Name;
    let cognome = arrayTeam[i].Surname;
    let ruolo = arrayTeam[i].Role;
    let foto = arrayTeam[i].Image;

    let card = document.createElement("div");
    // card.classList.add("card");
    // console.log(card);
    // container.append(card);

    let photo = document.createElement("div");
    let image = document.createElement("img");
    // image.classList.add("image");
    // image.src = foto;
    // photo.append(image);
    // card.append(photo);
    
    let name = document.createElement("div");
    // name.classList.add("name", "surname");
    // name.append(nome + " " + cognome);
    // card.append(name);
    
    let role = document.createElement("div");
    // role.classList.add("role");
    // role.append(ruolo)
    // card.append(role);


    createObjectCard(card, photo, image, foto, name, nome, cognome, role, ruolo);

}


function createObjectCard(scheda,foto, immagine, selfie, nome, nomeDev, cognomeDev, ruolo, ruoloDev ){
    scheda.classList.add("card");
    console.log(scheda);
    container.append(scheda);

    immagine.classList.add("image");
    immagine.src = selfie;
    foto.append(immagine);
    scheda.append(foto);

    nome.classList.add("name", "surname");
    nome.append(nomeDev + " " + cognomeDev);
    scheda.append(nome);

    ruolo.classList.add("role");
    ruolo.append(ruoloDev)
    scheda.append(ruolo);

}