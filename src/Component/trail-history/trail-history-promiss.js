import { getFormattedDate } from "../../Utils/Utils";

export const CompareChanges = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const changes = [];
      const excludedKeys = ['updatedBy', 'createdAt', 'createdBy', '_id', 'siteIds'];

      const isHexString = (value) => {
        return typeof value === "string" && /^[a-f0-9]{24}$/i.test(value);
      };

      const formatTimestamp = (value) => {
        return getFormattedDate(value, ['date', 'month', 'year', 'hour', 'minute', 'second']);
      };

      const compareObjects = (oldObj, newObj, parentKey = "") => {
        const objChanges = [];

        const keys = new Set([...Object.keys(oldObj || {}), ...Object.keys(newObj || {})]);

        keys.forEach((key) => {
          if (excludedKeys.includes(key)) {
            return; // Skip excluded keys
          }

          const oldValue = oldObj?.[key];
          const newValue = newObj?.[key];
          const currentKey = parentKey ? `${parentKey}.${key}` : key;

          const isTimestamp = typeof oldValue === "number" && typeof newValue === "number";

          if (key === "productIds" && Array.isArray(oldValue) && Array.isArray(newValue)) {
            // Compare productIds array
            oldValue.forEach((oldItem, index) => {
              const newItem = newValue[index];

              if (newItem) {
                const productName = oldItem?.productId?.productName || "Unknown Product";

                if (oldItem.quantity !== newItem.quantity) {
                  objChanges.push(
                    `${productName} quantity changed from ${oldItem.quantity} to ${newItem.quantity}`
                  );
                }

                if (oldItem.status !== newItem.status) {
                  objChanges.push(
                    `${productName} status changed from ${oldItem.status} to ${newItem.status}`
                  );
                }
              }
            });
          } else if (
            typeof oldValue === "object" &&
            oldValue !== null &&
            typeof newValue === "object" &&
            newValue !== null
          ) {
            // Recursive comparison for nested objects
            objChanges.push(...compareObjects(oldValue, newValue, currentKey));
          } else if (oldValue !== newValue) {
            // Remove hex strings from values
            const formattedOldValue = isHexString(oldValue)
              ? "Removed Hex String"
              : isTimestamp
              ? formatTimestamp(oldValue)
              : oldValue;

            const formattedNewValue = isHexString(newValue)
              ? "Removed Hex String"
              : isTimestamp
              ? formatTimestamp(newValue)
              : newValue;

            // Handle other changes
            objChanges.push(
              `${currentKey} changed from ${formattedOldValue} to ${formattedNewValue}`
            );
          }
        });

        return objChanges;
      };

      for (let i = 1; i < data.length; i++) {
        const oldObj = data[i - 1];
        const newObj = data[i];
        const objChanges = compareObjects(oldObj, newObj);

        if (objChanges.length > 0) {
          const formattedUpdatedAt = newObj.updatedAt
            ? formatTimestamp(newObj.updatedAt)
            : "No timestamp available";

          changes.push({
            id: newObj._id,
            updatedBy: newObj.updatedBy || "Unknown",
            updatedAt: formattedUpdatedAt,
            updatedAtTimestamp: newObj.updatedAt,
            changes: objChanges,
          });
        }
      }

      // Sort changes by updatedBy
      changes.sort((a, b) => (a.updatedBy > b.updatedBy ? 1 : a.updatedBy < b.updatedBy ? -1 : 0));

      resolve(changes);
    } catch (error) {
      reject(`Error comparing changes: ${error.message}`);
    }
  });
};
