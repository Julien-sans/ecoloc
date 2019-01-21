const express = require('express');

const app = express()

const activites = [
    {
        id: 1,
        title: 'Fabriquer ses produits d\'entretien',
        date: 'Lundi 21 janvier 2019',
        heureDebut: '18h30',
        heureFin: '20h00',
        association : 'Elément\'terre',
        description: 'Atelier pour apprendre à réaliser vous même vos produits d\'entretien écologiques et économiques.',
        prix: '10 euros/personne',
        lieu: 'à définir',
        infos: 'inscription sur http://cpieterrestoulousaines.org/ecologie-pratique'
    }
]

app.get('/api/activites', (req, res) => {
    res.json(activites);
})

app.listen(8000);