export class ArrayProcessor {
    createArray(length: number) {
        return Array.from({ length }, (_, i) => i);
    }

    shuffleArray(array: number[]) {
        return array.sort(() => Math.random() - 0.5);
    }

    sortArray(array: number[]) {
        return array.sort((a, b) => a - b);
    }

    groupArray(array: number[]) {
        return array.reduce((grouped: any, num: number) => {
            const key = num % 10;
            if (!grouped[key]) {
                grouped[key] = [];
            }
            grouped[key].push(num);
            return grouped;
        }, {});
    }
}

export class OperationSimulator {
    arrayProcessor: ArrayProcessor;
    constructor(arrayProcessor: any) {
        this.arrayProcessor = arrayProcessor;
    }

    simulateHeavyOperation(duration: number) {
        const start = Date.now();
        while (Date.now() - start < duration) {
            const arr = this.arrayProcessor.createArray(1000);
            const shuffled = this.arrayProcessor.shuffleArray(arr);
            const sorted = this.arrayProcessor.sortArray(shuffled);
            const grouped = this.arrayProcessor.groupArray(sorted);

            this.nestedLoops(grouped);
        }
    }

    nestedLoops(grouped: object) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    this.performOperation(grouped);
                }
            }
        }
    }

    performOperation(grouped: object) {
        Object.values(grouped).forEach((group: any) => {
            group.reduce((sum: number, n: number) => sum + n, 0);
        });
    }
}
