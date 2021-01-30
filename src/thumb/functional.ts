

export function foldl<ACC, VALUE>(values: VALUE[], fn: (acc: ACC,  cur: VALUE) => ACC, initialValue: ACC): ACC {
    let result = initialValue;
    values.forEach(value =>
        result = fn(result, value)
    )
    return result;
}