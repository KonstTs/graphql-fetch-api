/* tslint:disable */


export const mergeObjects = (_a:object, _b:object, strings=true) => {
    const deepMerge = (a, b, fn) => [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce((nu, key) => ({ ...nu, [key]: fn(key, a[key], b[key]) }), {});
  
    const mergerFn = (key, a, b) => {
      if (Array.isArray(a) && Array.isArray(b)) return a.concat(b);
      if (typeof a === 'object' && typeof b === 'object') return deepMerge(a, b, mergerFn);
      if (typeof a === 'string' && typeof b === 'string') return strings ? [a, b].join(' ') : b;
      return b ?? a;
    };
  
    return deepMerge(_a, _b, mergerFn);
  }

export const extractProp = (key, {[key]: extracted, ...rest}) => rest;