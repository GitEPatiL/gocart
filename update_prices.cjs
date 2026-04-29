const fs = require('fs');
let data = fs.readFileSync('src/assets/assets.js', 'utf8');

data = data.replace(/mrp:\s*(\d+)/g, (match, p1) => `mrp: ${Math.round(parseFloat(p1) * 83)}`);
data = data.replace(/price:\s*(\d+)/g, (match, p1) => `price: ${Math.round(parseFloat(p1) * 83)}`);
data = data.replace(/total:\s*([\d\.]+)/g, (match, p1) => `total: ${Math.round(parseFloat(p1) * 83)}`);
data = data.replace(/revenue:\s*"([\d\.]+)"/g, (match, p1) => `revenue: "${Math.round(parseFloat(p1) * 83)}"`);
data = data.replace(/totalEarnings:\s*(\d+)/g, (match, p1) => `totalEarnings: ${Math.round(parseFloat(p1) * 83)}`);

fs.writeFileSync('src/assets/assets.js', data);
console.log('Prices updated successfully in assets.js');
