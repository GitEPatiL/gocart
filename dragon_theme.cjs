const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/indigo-500/g, 'red-600')
        .replace(/indigo-600/g, 'red-700')
        .replace(/blue-500/g, 'orange-600')
        .replace(/blue-600/g, 'orange-700')
        .replace(/\[#78B2FF\]/g, '[#FF4500]') // Hero blue gradient
        .replace(/text-slate-800/g, 'text-red-950')
        .replace(/border-gray-300/g, 'border-red-200');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Deep Theme Updated: ${file}`);
    }
});
