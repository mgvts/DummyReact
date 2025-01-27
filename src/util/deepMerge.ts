export function deepMergeObjects<T>(target: T, source: Partial<T>): T {
    const merged = { ...target };

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const targetValue = target[key];
            const sourceValue = source[key];

            if (isObject(targetValue) && isObject(sourceValue)) {
                // @ts-ignore
                merged[key] = deepMergeObjects(targetValue, sourceValue);
            } else {
                // @ts-ignore
                merged[key] = sourceValue;
            }
        }
    }

    return merged;
}

function isObject(value: any): value is Record<string, any> {
    return value !== null && typeof value === 'object';
}