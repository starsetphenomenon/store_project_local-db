import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import fs from 'fs';

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () => {
    console.log('We live on ' + PORT);
});


app.get('/dataBase', function (request, response) {
    try {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            response.send(data);
        })
    } catch (error) {
        console.log('An error has occurred ', error);
    } 
});

app.post('/updateItem', function (request, response) {
    try {
        fs.writeFileSync('./data.json', JSON.stringify(request.body, null, 2), 'utf8');
        console.log('Items db successfully was updated...');
    } catch (error) {
        console.log('An error has occurred ', error);
    }
    response.send(request.body);
});