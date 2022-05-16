// https://stackoverflow.com/a/66902484
const linspace = (start, stop, num, endpoint = true) => {
    const div = endpoint ? (num - 1) : num;
    const step = (stop - start) / div;
    return Array.from({length: num}, (_, i) => Math.round((start + step * i * 100) / 100));
}

export { linspace };