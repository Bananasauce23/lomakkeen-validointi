document.getElementById("laheta").addEventListener("click", tarkista)

function tarkista(){
    event.preventDefault()
    let kayttajaID = document.getElementById("kayttajaID").value
    let salasana = document.getElementById("salasana").value
    let maa = document.getElementById("maa").value
    let postinumero = document.getElementById("postinumero").value
    let sahkoposti = document.getElementById("sahkoposti").value
    let valittuSukupuoli = document.querySelector('input[name="sukupuoli"]:checked')
    let valittuKieli = document.querySelector('input[name="kieli"]:checked')

    let virheID = document.getElementById("virheID")
    let virheSalasana = document.getElementById("virheSalasana")
    let virheNimi = document.getElementById("virheNimi")
    let virheOsoite = document.getElementById("virheOsoite")
    let virheMaa = document.getElementById("virheMaa")
    let virhePosti = document.getElementById("virhePosti")
    let virheSposti = document.getElementById("virheSposti")
    let virheSukupuoli = document.getElementById("virheSukupuoli")
    let virheKieli = document.getElementById("virheKieli")

    virheID.innerHTML = ""
    virheSalasana.innerHTML = ""
    virheNimi.innerHTML = ""
    virheOsoite.innerHTML = ""
    virheMaa.innerHTML = ""
    virhePosti.innerHTML = ""
    virheSposti.innerHTML = ""
    virheSukupuoli.innerHTML = ""
    virheKieli.innerHTML = ""

    tarvittavat = false

    let erikoismerkit = ["!", "@", "£", "$", "€", "&", "%", "#"]

    if (kayttajaID.length < 6){
        virheID.innerHTML = "Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä."
    }

    if (/[A-Z]/.test(salasana)){
        if (/[0-9]/.test(salasana)){
            for (merkki in salasana){
                if (merkki in erikoismerkit){
                    tarvittavat = true
                }
            }
        }
    }

    if (salasana.length < 6){
        if (tarvittavat == false)
            virheSalasana.innerHTML = "Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja joku erikoismerkeistä !@£$€&%#."
        else{
            virheSalasana.innerHTML = "Salasanan tulee olla vähintään 6 merkkiä pitkä."
        }
    }

    if (tarvittavat == false && salasana.length >= 6){
        virheSalasana.innerHTML = "Salasanan tulee sisältää vähintään yksi numero, yksi iso kirjain ja joku erikoismerkeistä !@£$€&%#."
    }

    if (document.getElementById("nimi").value.length == ""){
        virheNimi.innerHTML = "Kirjoita nimi."
    }

    if (document.getElementById("osoite").value.length == ""){
        virheOsoite.innerHTML = "Kirjoita osoite."
    }

    if (maa == "valitse"){
        virheMaa.innerHTML = "Valitse maa."
    }

    if (postinumero.length != 5 || isNaN(postinumero)){
        virhePosti.innerHTML = "Postinumeron tulee olla 5 numeroa pitkä."
    }

    if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(sahkoposti) == false){
        virheSposti.innerHTML = "Sähköpostiosoite ei ole oikean muotoinen."
    }

    if (sahkoposti == ""){
        virheSposti.innerHTML = "Kirjoita sähköpostiosoite."
    }

    if (valittuSukupuoli == null){
        virheSukupuoli.innerHTML = "Valitse sukupuoli."
    }

    if (valittuKieli == null){
        virheKieli.innerHTML = "Valitse kieli."
    }
}