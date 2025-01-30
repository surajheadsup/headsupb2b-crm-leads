
// export const CompileConfiguration = (configurations, input) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const processConfig = (config, inputData) => {
//         const result = {};

//         Object.keys(config).forEach((mainKey) => {
//           const path = config[mainKey]; // Get the path or object from config

//           if (typeof path === 'object' && path !== null) {
//             // If the path is an object, recursively process it
//             result[mainKey] = processConfig(path, inputData);
//           } else if (typeof path === 'string' && path.length > 0) {
//             // If path is a non-empty string, use it to fetch data from inputData
//             const keys = path.split('.'); // Split the path string to handle nested properties

//             // Use reduce to traverse through inputData to get the final value
//             const inputValues = keys.reduce((acc, key) => {
//               if (acc === undefined || acc === null) return undefined; // Early return if the accumulated value is undefined or null

//               if (key.includes('[') && key.includes(']')) {
//                 // If the key contains array notation (e.g., "iprange[0].ip1")
//                 const match = key.match(/([^\[]+)\[(\d+)\]/);
//                 if (!match) return undefined; // If the match fails, return undefined

//                 const [arrayKey, index] = match.slice(1, 3); // Extract the key and index
//                 if (!acc[arrayKey] || !Array.isArray(acc[arrayKey])) return undefined; // Ensure the accessed property is an array
//                 acc = acc[arrayKey]; // Access the array by key
//                 return acc[parseInt(index, 10)]; // Access the array element by index
//               }

//               return acc[key]; // Regular object access
//             }, inputData);

//             // Assign the value to the result object, or "blank" if undefined
//             result[mainKey] = inputValues !== undefined ? inputValues : path;
//           } else {
//             // If path is not a valid string, assign "blank"
//             result[mainKey] = "blank";
//           }
//         });

//         return result;
//       };

//       let compiledDataArray;
//       if (Array.isArray(configurations)) {
//         // If configurations is an array, use map
//         compiledDataArray = configurations.map((config) => processConfig(config, input));
//       } else if (typeof configurations === 'object' && configurations !== null) {
//         // If configurations is an object, use Object.keys or Object.entries
//         compiledDataArray = processConfig(configurations, input);
//       } else {
//         // If configurations is neither an array nor an object, reject with an error
//         throw new Error('Invalid configurations format. Expected an array or object.');
//       }

//       resolve(compiledDataArray);
//     } catch (error) {
//       // Reject the promise if there's an error
//       console.error('Error compiling configuration:', error);
//       reject(error);
//     }
//   });
// };


export const CompileConfiguration = (configurations, input) => {
  return new Promise((resolve, reject) => {
    try {
      const processConfig = (config, inputData) => {
        const result = {};

        Object.keys(config).forEach((mainKey) => {
          const path = config[mainKey]; // Get the path or object from config

          if (typeof path === 'object' && path !== null) {
            // If the path is an object, recursively process it
            result[mainKey] = processConfig(path, inputData);
          } else if (typeof path === 'string' && path.length > 0) {
            // If path is a non-empty string, use it to fetch data from inputData
            const keys = path.split('.'); // Split the path string to handle nested properties

            // Use reduce to traverse through inputData to get the final value
            const inputValues = keys.reduce((acc, key) => {
              if (acc === undefined || acc === null) return undefined; // Early return if the accumulated value is undefined or null

              if (key.includes('[') && key.includes(']')) {
                // If the key contains array notation (e.g., "iprange[0].ip1")
                const match = key.match(/([^\[]+)\[(\d+)\]/);
                if (!match) return undefined; // If the match fails, return undefined

                const [arrayKey, index] = match.slice(1, 3); // Extract the key and index
                if (!acc[arrayKey] || !Array.isArray(acc[arrayKey])) return undefined; // Ensure the accessed property is an array
                acc = acc[arrayKey]; // Access the array by key
                return acc[parseInt(index, 10)]; // Access the array element by index
              }

              return acc[key]; // Regular object access
            }, inputData);

            // Assign the value to the result object, or set it to "" if the value is undefined
            result[mainKey] = inputValues !== undefined ? inputValues : path;
          } else {
            // If path is not a valid string, assign ""
            result[mainKey] = "blank";
          }
        });

        // Handle conversion of objects to arrays if needed
        Object.keys(result).forEach((key) => {
          if (typeof result[key] === 'object' && result[key] !== null) {
            if (Array.isArray(config[key]) && !Array.isArray(result[key])) {
              result[key] = Object.values(result[key]);
            }
          }
        });

        return result;
      };

      let compiledDataArray;
      if (Array.isArray(configurations)) {
        // If configurations is an array, use map
        compiledDataArray = configurations.map((config) => processConfig(config, input));
      } else if (typeof configurations === 'object' && configurations !== null) {
        // If configurations is an object, use Object.keys or Object.entries
        compiledDataArray = processConfig(configurations, input);
      } else {
        // If configurations is neither an array nor an object, reject with an error
        throw new Error('Invalid configurations format. Expected an array or object.');
      }

      resolve(compiledDataArray);
    } catch (error) {
      // Reject the promise if there's an error
      console.error('Error compiling configuration:', error);
      reject(error);
    }
  });
};
