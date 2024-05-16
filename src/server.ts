import express from "express"
import { ArrayProcessor, OperationSimulator } from './heavy-process-simulator';

const app = express();
const port = 3000;

app.get('/process-simulator', (req, res) => {
    console.log('Starting heavy operation...');
    const arrayProcessor = new ArrayProcessor();
    const operationSimulator = new OperationSimulator(arrayProcessor);
    operationSimulator.simulateHeavyOperation(7000);
    console.log('Operation completed.');

    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
