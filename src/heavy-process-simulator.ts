export class ArrayProcessor {
    createArray(length: number): number[] {
        return Array.from({ length }, (_, i) => i);
    }

    shuffleArray(array: number[]): number[] {
        return array.sort(this.compareRandom);
    }

    compareRandom(): number {
        return Math.random() - 0.5;
    }

    sortArray(array: number[]): number[] {
        return array.sort(this.compareNumbers);
    }

    compareNumbers(a: number, b: number): number {
        return a - b;
    }

    groupArray(array: number[]): { [key: number]: number[] } {
        return array.reduce(this.groupReducer, {});
    }

    groupReducer(
        grouped: { [key: number]: number[] },
        num: number
    ): { [key: number]: number[] } {
        const key = num % 10;
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(num);
        return grouped;
    }
}

export class OperationSimulator {
    private arrayProcessor: ArrayProcessor;

    constructor(arrayProcessor: ArrayProcessor) {
        this.arrayProcessor = arrayProcessor;
    }

    simulateHeavyOperation(duration: number): void {
        const start = Date.now();
        while (Date.now() - start < duration) {
            const arr = this.arrayProcessor.createArray(1000);
            const shuffled = this.arrayProcessor.shuffleArray(arr);
            const sorted = this.arrayProcessor.sortArray(shuffled);
            const grouped = this.arrayProcessor.groupArray(sorted);

            this.nestedLoops(grouped);
        }
    }

    nestedLoops(grouped: { [key: number]: number[] }): void {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                for (let k = 0; k < 10; k++) {
                    this.performOperation(grouped);
                }
            }
        }
    }

    performOperation(grouped: { [key: number]: number[] }): void {
        for (const group of Object.values(grouped)) {
            this.sumGroup(group);
        }
    }

    sumGroup(group: number[]): void {
        let sum = 0;

        for (const n of group) {
            sum += n;
        }
    }
}
