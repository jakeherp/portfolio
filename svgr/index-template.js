// SVGR Index file template
const path = require('path');

function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map((filePath) => {
		const basename = path.basename(filePath, path.extname(filePath));
		return `export * from './${basename}'`;
	});
	return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
