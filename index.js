const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function getRandomAnimal(animals) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

app.post('/khodam', (req, res) => {
    const { nama } = req.body;
    const binatang = [
        "Singa", "Gajah", "Kuda", "Elang", "Harimau", "Serigala", "Kucing", 
        "Anjing", "Beruang", "Rusa", "Ikan Paus", "Lumba-lumba", "Buaya", 
        "Kuda Nil", "Jerapah", "Naga", "Phoenix", "Unicorn", "Kraken", 
        "Griffin", "Minotaur", "Sphinx", "Cerberus", "Chimera", 
        "Basilisk", "Leviathan", "Pegasus", "Harpy", "Wyvern", "Manticore"
    ];
    const randomAnimal = getRandomAnimal(binatang);

    res.json({
        message: `Khodam ${nama}`,
        binatang: randomAnimal
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});


module.exports = app;