//@ts-check
const playwright = require('playwright');
const path = require('path');
const fs = require('fs');
(async function() {
     const [chromium, webkit, firefox] = await Promise.all([
        gatherChromiumCSS(),
        gatherWebkitCSS(),
        gatherFirefoxCSS()
    ]);
    const intersection = [];
    for (const key of chromium) {
        if (webkit.has(key) && firefox.has(key))
            intersection.push(key);
    }
    intersection.sort();
    fs.writeFileSync(path.join(__dirname, 'index.json'), JSON.stringify(intersection), 'utf8');

    const readmePath = path.join(__dirname, 'README.md');
    const readme = fs.readFileSync(readmePath, 'utf8');
    const beginning = readme.substring(0, readme.indexOf('<!-- gen list -->')  + '<!-- gen list -->'.length);
    const readmeWithList = beginning + '\n' + intersection.map(keyToMarkdown).join('\n');
    fs.writeFileSync(readmePath, readmeWithList, 'utf8');
})();

function keyToMarkdown(cssKey) {
    // css properties for svg attributes have different MDN links
    const svgKeys = new Set([ 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'cx', 'cy', 'dominant-baseline', 'fill', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'lighting-color', 'marker', 'marker-end', 'marker-mid', 'marker-start', 'r', 'rx', 'ry', 'shape-rendering', 'stop-color', 'stop-opacity', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'vector-effect', 'x', 'y']);
    const isSVG = svgKeys.has(cssKey);
    const keyWithoutPrefix = cssKey.startsWith('-webkit-') ? cssKey.substring('-webkit-'.length) : cssKey;
    return ` - [${cssKey}](https://developer.mozilla.org/docs/Web/${isSVG ? 'SVG/Attribute' : 'CSS'}/${keyWithoutPrefix})`;
}

async function gatherChromiumCSS() {
    const browser = await playwright.chromium.launch();
    const [page] = await browser.defaultContext().pages();
    const result = await page.evaluate(() => {
        const cssKeys = Object.keys(document.body.style).map(key => {
            const split = key.split(/(?=[A-Z])/).join('-').toLowerCase();
            if (split.startsWith('webkit'))
                return '-' + split;
            return split;
        });
        return cssKeys.filter(key => {
            return CSS.supports(key, 'initial');
        });
    });
    await browser.close();
    return new Set(result);
}

async function gatherFirefoxCSS() {
    const browser = await playwright.firefox.launch({headless: true});
    const [page] = await browser.defaultContext().pages();
    const result = await page.evaluate(() => {
        return Object.keys(document.body.style['__proto__']).filter(key => {
            return key === key.toLowerCase() && CSS.supports(key, 'initial');
        });
    });
    await browser.close();
    return new Set(result);
}

async function gatherWebkitCSS() {
    const browser = await playwright.webkit.launch();
    const [page] = await browser.defaultContext().pages();
    const result = await page.evaluate(() => {
        const cssKeys = Object.keys(document.body.style).map(key => {
            const split = key.split(/(?=[A-Z])/).join('-').toLowerCase();
            if (split.startsWith('webkit'))
                return '-' + split;
            return split;
        });
        return cssKeys.filter(key => {
            return CSS.supports(key, 'initial');
        });
    });
    await browser.close();
    return new Set(result);
}