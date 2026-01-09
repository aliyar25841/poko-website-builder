export const removeUndefinedProps = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));

// Convert [{key: value}, {key: value}] to {key: value}
export const ensureKeyValObject = (objOrArr) =>
  Array.isArray(objOrArr)
    ? Object.fromEntries(objOrArr.map((i) => [i.key, i.value]))
    : objOrArr || {};

// Get nested value from object by digging through it on every reduce step
// export const getNestedValue = (obj, path, defaultValue = undefined) =>
//   path.split('.').reduce((acc, key) => (acc?.[key] ?? defaultValue), obj)

// NOTE: More robust version of getNestedValue, also handling paths like 'a.b[2].c'
export const getNestedValue = (obj, path, defaultValue = undefined) => {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

// Try and match more specific selectors first, then bare one, then globals
export const trialPathsConst = [
  "item",
  "item.data",
  "item.page",
  "item.data.page",
  "",
  "data",
  "page",
  "data.page",
  "globalSettings",
  "data.globalSettings",
];

export const tryMatchNestedVariable = (
  deepObj,
  path,
  trialPaths = trialPathsConst,
) => {
  let value = undefined;
  for (const tp of trialPaths) {
    if (value !== undefined) break;
    value = getNestedValue(deepObj, `${tp ? tp + "." : ""}${path}`);
  }
  return value;
};

export function flattenObject(obj) {
  const flattened = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value, key));
      } else {
        flattened[key] = value;
      }
    }
  }

  return flattened;
}
