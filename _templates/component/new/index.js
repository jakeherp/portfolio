const hasValidFirstCharacter = (string, isUppercase = false) => {
	if (isUppercase) {
		return string.match(/^[A-Z]/);
	}

	return string.match(/^[a-z]/);
};

module.exports = {
	prompt: ({ prompter }) =>
		prompter
			.prompt([
				{
					type: 'input',
					name: 'blockName',
					message: "What's the block name for your component? (e.g. Footer)",
					validate: (blockName) => {
						if (!hasValidFirstCharacter(blockName, true)) {
							return 'Block name must start with an uppercase letter!';
						}

						return true;
					},
				},
				{
					type: 'select',
					name: 'atomicType',
					message: 'What type of component is it?',
					choices: ['atom', 'molecule', 'organism', 'template'],
					validate: () => true,
				},
				{
					type: 'input',
					name: 'elementName',
					message: "What's the element name of your component? (e.g. div)",
					validate: (elementName) => {
						if (!elementName) return true;

						if (!hasValidFirstCharacter(elementName)) {
							return 'Element name must start with a lowercase letter!';
						}

						return true;
					},
				},
			])
			.then(({ blockName, atomicType, elementName }) =>
				Promise.resolve({
					directoryPath: `src/components/${atomicType}s/${blockName}`,
					filename: blockName,
					className: blockName,
					atomicType,
					elementName,
				})
			),
};
