const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

let seconds = timeNodes.map(node => node.dataset.time)
                       .map(timeCode  => {
                         let [min, sec] = timeCode.split(':').map(parseFloat);
                         return min * 60 + sec;
                       }).reduce((total, secs) => total + secs);

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
let minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total time: ${hours}h ${minutes}m ${secondsLeft}s`);
