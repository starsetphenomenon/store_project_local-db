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

app.post('/updateItemReviews', function (request, response) {
    try {
        return new Promise((resolve, reject) => {
            fs.readFile('data.json', 'utf8', (err, db) => {
                if (err) {
                    reject(err)
                } else {
                    try {
                        resolve(JSON.parse(db));
                    } catch (err) {
                        reject(err)
                    }
                }
            })
        }).then(data => {
            let newData = data.filter(item => +item.id !== +request.body.id);
            let item = data.find(item => +item.id === +request.body.id);
            item.reviews = [
                ...item.reviews,
                request.body.review
            ];
            newData.unshift(item)
            fs.writeFileSync('./data.json', JSON.stringify(newData, null, 2), 'utf8');
            console.log('Items db successfully was updated...');
            response.send(newData);
        });
    } catch (error) {
        console.log('An error has occurred ', error);
    }
});