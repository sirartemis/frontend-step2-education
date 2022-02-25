const shortenTheString = (string, max) => (string.length > max && string.slice(0, max).concat('...')) || string;
export default shortenTheString;
