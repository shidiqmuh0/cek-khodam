import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

function getRandomAnimal(animals: string[]): string {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

app.post('/khodam', (req: Request, res: Response) => {
    const { nama } = req.body;
    const binatang: string[] = [
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

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

app.listen(3000, () => {
    console.log('Server ready on port 3000.');
});

export default app;
