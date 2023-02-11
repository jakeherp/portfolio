// SVGR single component template

const template = (variables, { tpl }) => {
	return tpl`
		${variables.imports};

		${variables.interfaces};

		export const ${variables.componentName.replace('Svg', '')} = (${
		variables.props
	}) => (
			${variables.jsx}
		);
	`;
};

module.exports = template;
