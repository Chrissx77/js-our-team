const arrayTeam = [
    {
        "Name": "Wayne",
        "Surname": "Barnett",
        "Role": "Founder & CEO",
        "Image": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "Name": "Angela",
        "Surname": "Caroll",
        "Role": "Chief Editor",
        "Image": "angela-caroll-chief-editor.jpg"
    },

    {
        "Name": "Walter",
        "Surname": "Gordon",
        "Role": "Office Manager",
        "Image": "walter-gordon-office-manager.jpg"
    },

    {
        "Name": "Angela",
        "Surname": "Lopez",
        "Role": "Social Media Manager",
        "Image": "angela-lopez-social-media-manager.jpg"
    },

    {
        "Name": "Scott",
        "Surname": "Estrada",
        "Role": "Developer",
        "Image": "scott-estrada-developer"
    },

    {
        "Name": "Barbara",
        "Surname": "Ramos",
        "Role": "Graphic Designer",
        "Image": "wayne-barnett-founder-ceo.jpg"
    }
]

console.log(arrayTeam);
const team = document.getElementById("team");

for(let i = 0; i < arrayTeam.length; i++){
    let nome = arrayTeam[i].Name;
    let ruolo = arrayTeam[i].Role;
    let foto = arrayTeam[i].Image;

    let dev = {
        "nome": nome,
        "ruolo": ruolo,
        "foto": foto
    }
    // console.log(nome +": " + ruolo+ ", " + foto);
    console.log(dev);
    team.innerHTML += `${dev.nome}, ${dev.ruolo}, ${dev.foto} ->>> `;

}