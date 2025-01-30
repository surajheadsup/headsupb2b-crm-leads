export const GenerateMessage = (key, types) => {
    // Define message templates
    const messageType = {
        'required': `${toTitleCase(key)} is required.`,
        'empty': `${toTitleCase(key)} should not be empty.`,
        'null': `${toTitleCase(key)} should not be null.`,
        'number': `${toTitleCase(key)} should be a number.`
    };

    // Function to convert camelCase to Title Case
    function toTitleCase(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' '); // Capitalize each word
    }

    // Map types to their respective messages or unknown type message
    const messages = types.map(type => messageType[type] || `Unknown type: ${type}`);

    // Join messages with newline characters
    return messages.join('\n');
}