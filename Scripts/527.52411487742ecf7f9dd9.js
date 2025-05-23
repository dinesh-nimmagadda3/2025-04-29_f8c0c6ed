/*! For license information please see 527.52411487742ecf7f9dd9.js.LICENSE.txt */
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [527],
  {
    2355: () => {
      (window.webpackJsonp = window.webpackJsonp || []).push([
        ["core"],
        {
          "../../node_modules/lodash.intersection/index.js": function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              "/* WEBPACK VAR INJECTION */(function(global) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]';\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\n/**\n * A specialized version of `_.includes` for arrays without support for\n * specifying an index to search from.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludes(array, value) {\n  var length = array ? array.length : 0;\n  return !!length && baseIndexOf(array, value, 0) > -1;\n}\n\n/**\n * This function is like `arrayIncludes` except that it accepts a comparator.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @param {Function} comparator The comparator invoked per element.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludesWith(array, value, comparator) {\n  var index = -1,\n      length = array ? array.length : 0;\n\n  while (++index < length) {\n    if (comparator(value, array[index])) {\n      return true;\n    }\n  }\n  return false;\n}\n\n/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array ? array.length : 0,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  if (value !== value) {\n    return baseFindIndex(array, baseIsNaN, fromIndex);\n  }\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\n/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\n/**\n * Checks if a cache value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\n/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\n/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype,\n    funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map'),\n    nativeCreate = getNative(Object, 'create');\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n}\n\n/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  return this.has(key) && delete this.__data__[key];\n}\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);\n}\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n}\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  return true;\n}\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries ? entries.length : 0;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  return getMapData(this, key)['delete'](key);\n}\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  getMapData(this, key).set(key, value);\n  return this;\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values ? values.length : 0;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\n/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of methods like `_.intersection`, without support\n * for iteratee shorthands, that accepts an array of arrays to inspect.\n *\n * @private\n * @param {Array} arrays The arrays to inspect.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of shared values.\n */\nfunction baseIntersection(arrays, iteratee, comparator) {\n  var includes = comparator ? arrayIncludesWith : arrayIncludes,\n      length = arrays[0].length,\n      othLength = arrays.length,\n      othIndex = othLength,\n      caches = Array(othLength),\n      maxLength = Infinity,\n      result = [];\n\n  while (othIndex--) {\n    var array = arrays[othIndex];\n    if (othIndex && iteratee) {\n      array = arrayMap(array, baseUnary(iteratee));\n    }\n    maxLength = nativeMin(array.length, maxLength);\n    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))\n      ? new SetCache(othIndex && array)\n      : undefined;\n  }\n  array = arrays[0];\n\n  var index = -1,\n      seen = caches[0];\n\n  outer:\n  while (++index < length && result.length < maxLength) {\n    var value = array[index],\n        computed = iteratee ? iteratee(value) : value;\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (!(seen\n          ? cacheHas(seen, computed)\n          : includes(result, computed, comparator)\n        )) {\n      othIndex = othLength;\n      while (--othIndex) {\n        var cache = caches[othIndex];\n        if (!(cache\n              ? cacheHas(cache, computed)\n              : includes(arrays[othIndex], computed, comparator))\n            ) {\n          continue outer;\n        }\n      }\n      if (seen) {\n        seen.push(computed);\n      }\n      result.push(value);\n    }\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = array;\n    return apply(func, this, otherArgs);\n  };\n}\n\n/**\n * Casts `value` to an empty array if it's not an array like object.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Array|Object} Returns the cast array-like object.\n */\nfunction castArrayLikeObject(value) {\n  return isArrayLikeObject(value) ? value : [];\n}\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\n/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to process.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\n/**\n * Creates an array of unique values that are included in all given arrays\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons. The order of result values is determined by the\n * order they occur in the first array.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {...Array} [arrays] The arrays to inspect.\n * @returns {Array} Returns the new array of intersecting values.\n * @example\n *\n * _.intersection([2, 1], [2, 3]);\n * // => [2]\n */\nvar intersection = baseRest(function(arrays) {\n  var mapped = arrayMap(arrays, castArrayLikeObject);\n  return (mapped.length && mapped[0] === arrays[0])\n    ? baseIntersection(mapped)\n    : [];\n});\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8-9 which returns 'object' for typed array and other constructors.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = intersection;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/animation-manager/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:////home/runner/work/client/client/node_modules/lodash.intersection/index.js?"
            );
          },
          "./node_modules/webpack/buildin/global.js": function (
            module,
            exports
          ) {
            eval(
              'var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?'
            );
          },
          "./src/Animation.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ "lodash.clonedeep");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline */ "./src/Timeline.js");\n/* harmony import */ var _AnimationInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationInstance */ "./src/AnimationInstance.js");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\n\n\n\nclass Animation {\n  constructor(manager, descriptor) {\n    var _this$effect;\n    _defineProperty(this, "compositionType", _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].ATOMIC);\n    _defineProperty(this, "subAnimations", []);\n    _defineProperty(this, "originalEffect", null);\n    _defineProperty(this, "copyOf", null);\n    _defineProperty(this, "descriptor", null);\n    _defineProperty(this, "manager", null);\n    _defineProperty(this, "autoDuration", true);\n    const descriptorWithDefaults = {\n      ...descriptor,\n      options: {\n        ..._constants__WEBPACK_IMPORTED_MODULE_0__["MASTER_DEFAULT_OPTIONS"],\n        ...descriptor.options\n      }\n    };\n    this.descriptor = descriptorWithDefaults;\n    this.manager = manager;\n    this.setEffect(descriptor.effect);\n    const effectDefaults = ((_this$effect = this.effect) === null || _this$effect === void 0 ? void 0 : _this$effect.defaultOptions) || {};\n    this.descriptor = {\n      ...descriptor,\n      options: {\n        ..._constants__WEBPACK_IMPORTED_MODULE_0__["MASTER_DEFAULT_OPTIONS"],\n        ...effectDefaults,\n        ...descriptor.options\n      }\n    };\n  }\n  clone() {\n    const clone = this.manager.createAnimation(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(this.getDescriptor()));\n    Animation._copy(this, clone);\n    return clone;\n  }\n  getOptions() {\n    return {\n      ...this.descriptor.options\n    };\n  }\n  getOriginal() {\n    if (!this.copyOf) {\n      return this;\n    } else {\n      return this.copyOf.getOriginal();\n    }\n  }\n  getDelay() {\n    return this.getOptions().delay;\n  }\n  getDuration() {\n    const ownDuration = this.getOptions().duration;\n    if (this._isAtomic || ownDuration !== \'auto\') {\n      return ownDuration;\n    } else {\n      if (this.compositionType === _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].JOIN) {\n        return this.subAnimations.reduce((dur, anim) => dur + anim.getDuration() + anim.getOptions().delay, 0);\n      }\n      if (this.compositionType === _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].MIX) {\n        return this.subAnimations.reduce((maxDur, anim) => Math.max(maxDur, anim.getDuration() + anim.getOptions().delay), 0);\n      }\n    }\n  }\n  getTrigger() {\n    return this.descriptor.trigger;\n  }\n  getDescriptor() {\n    if (this._isAtomic) {\n      const cleanDescriptor = {\n        ...this.descriptor,\n        options: Object.fromEntries(Object.entries(this.getOptions()).filter(_ref => {\n          let [key, val] = _ref;\n          const effectDefault = (this.effect.defaultOptions || {})[key];\n          const masterDefault = _constants__WEBPACK_IMPORTED_MODULE_0__["MASTER_DEFAULT_OPTIONS"][key];\n          return effectDefault === undefined ? val !== masterDefault : val !== effectDefault;\n        }))\n      };\n      if (!Object.keys(cleanDescriptor.options).length) {\n        delete cleanDescriptor.options;\n      }\n      return cleanDescriptor;\n    } else {\n      return {\n        [this.compositionType]: this.subAnimations.map(sub => sub.getDescriptor())\n      };\n    }\n  }\n  writeDescriptorToElement(targetElement) {\n    this.manager._writeDescriptorsToElement(targetElement, [this]);\n  }\n  apply(elementOrSelector) {\n    let quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(elementOrSelector)) {\n      return this._getMultiInstanceAPI(Array.from(document.querySelectorAll(elementOrSelector)).reduce((instances, element) => {\n        instances.push(this.apply(element));\n        return instances;\n      }, []));\n    } else {\n      const existing = this.manager.getInstancesByElement(elementOrSelector).filter(existingInstance => {\n        return existingInstance.getAnimation().getTrigger() === this.getTrigger();\n      });\n      existing.forEach(inst => {\n        inst.remove();\n        this.manager._removeInstance(inst);\n      });\n      const instance = new _AnimationInstance__WEBPACK_IMPORTED_MODULE_4__["AnimationInstance"](this, elementOrSelector, this.manager.EngineClass);\n      this._registerInstance(instance, quiet);\n      return instance;\n    }\n  }\n  createVariation(descriptor) {\n    const variation = this.manager.createAnimation({\n      ...this.descriptor,\n      ...descriptor,\n      options: {\n        ...this.getOptions()\n      }\n    });\n    variation.setOptions(descriptor.options || {});\n    variation.compositionType = this.compositionType;\n    variation.subAnimations = [...this.subAnimations];\n    return variation;\n  }\n  setEffect(effect) {\n    var _this$manager$_getEff;\n    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(effect) || Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(effect)) {\n      this.originalEffect = effect;\n    }\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(effect) && this.descriptor) {\n      this.descriptor.effect = effect;\n    }\n    this.effect = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(effect) ? this.manager._getEffect(effect, {\n      ...(((_this$manager$_getEff = this.manager._getEffect(effect)) === null || _this$manager$_getEff === void 0 ? void 0 : _this$manager$_getEff.defaultOptions) || {}),\n      ...this.getOptions()\n    }) : effect;\n    if (reset) {\n      this.resetAllInstances();\n    }\n    return this;\n  }\n  getEffect() {\n    return this.descriptor.effect && Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(this.descriptor.effect) ? this.descriptor.effect : this.originalEffect;\n  }\n  setTrigger(trigger) {\n    this.descriptor.trigger = trigger;\n    this._updateTimeline();\n    return this;\n  }\n  setOptions(options) {\n    let autoReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    if (options.duration === \'auto\' && this._isAtomic) {\n      options = {\n        ...options,\n        duration: this.getDuration()\n      };\n    }\n    if (options.duration !== \'auto\' && !this._isAtomic) {\n      this.autoDuration = false;\n    }\n    this.descriptor.options = {\n      ...this.descriptor.options,\n      ...options\n    };\n    this._updateInstances();\n    this._updateTimeline();\n    if (autoReset) {\n      this.resetAllInstances();\n    }\n    return this;\n  }\n  resetAllInstances() {\n    this.manager.getInstancesByAnimation(this).forEach(inst => {\n      inst.reset();\n    });\n  }\n  contains(animation) {\n    return this.subAnimations.includes(animation) || this.subAnimations.some(anim => anim.contains(animation));\n  }\n  reverse() {\n    this.setOptions({\n      reverse: !this.getOptions().reverse\n    });\n    return this;\n  }\n  setName(name) {\n    this.descriptor.name = name;\n    this._updateTimeline();\n    return this;\n  }\n  getName() {\n    return this.descriptor.name || (this._isAtomic ? this.originalEffect : this.compositionType);\n  }\n  setDelay(delay) {\n    this.setOptions({\n      delay\n    });\n    return this;\n  }\n  setDuration(duration) {\n    this.setOptions({\n      duration\n    });\n    return this;\n  }\n  join(animations) {\n    let replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    return this._compose(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].JOIN, animations, replace);\n  }\n  mix(animations) {\n    let replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    return this._compose(_constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].MIX, animations, replace);\n  }\n  getChild(child) {\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["isString"])(child)) {\n      return this.subAnimations.find(anim => anim.getName() === child);\n    } else if (this.subAnimations[child]) {\n      return this.subAnimations[child];\n    }\n  }\n  getOption(option) {\n    return this.descriptor.options[option] || null;\n  }\n  getSub(sub) {\n    let child = this.getChild(sub);\n    if (child) {\n      return child;\n    }\n    child = this.subAnimations.find(anim => anim.getSub(sub));\n    if (child) {\n      return child.getSub(sub);\n    }\n  }\n  insertChildAfter(childToInsert, insertAfter) {\n    const index = this.subAnimations.indexOf(insertAfter);\n    if (index !== -1) {\n      this.insertChild(childToInsert, index + 1);\n      return true;\n    }\n  }\n  insertChild(child, index) {\n    if (this._isAtomic) {\n      return;\n    }\n    if (child instanceof Animation) {\n      this.subAnimations.splice(index, 0, child);\n      this.resetAllInstances();\n    } else {\n      const anim = this.manager.createAnimation(child);\n      if (anim) {\n        this.subAnimations.splice(index, 0, anim);\n        this.resetAllInstances();\n      }\n    }\n  }\n  removeChild(childAnimation) {\n    if (this.contains(childAnimation)) {\n      if (this.subAnimations.includes(childAnimation)) {\n        this.subAnimations.splice(this.subAnimations.indexOf(childAnimation), 1);\n      } else {\n        this.subAnimations.find(child => child.contains(childAnimation)).removeChild(childAnimation);\n      }\n      if (this.subAnimations.length === 1) {\n        this._replace(this.subAnimations[0]);\n      } else {\n        this.setDuration(this.getDuration() - childAnimation.getDuration());\n      }\n      this.resetAllInstances();\n      return true;\n    } else {\n      const child = this.getChild(childAnimation);\n      if (child) {\n        this.removeChild(child);\n      }\n    }\n  }\n  getController() {\n    if (this.manager._getExtra(\'getController\', true)) {\n      return this.manager._getExtra(\'getController\')(this);\n    }\n  }\n  showComposition() {\n    if (this.manager._getExtra(\'showComposition\', true)) {\n      this.manager._getExtra(\'showComposition\')(this);\n    }\n  }\n  _updateTimeline() {\n    if (this.manager._getExtra(\'updateTimeline\')) {\n      this.manager._getExtra(\'updateTimeline\')(this);\n    }\n  }\n  _registerInstance(createdInstance) {\n    let quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    this.manager._addInstance(createdInstance, quiet);\n  }\n  _getTimeline() {\n    let rawTimeline;\n    const options = {\n      ...(this.effect.defaultOptions || {}),\n      ...this.getOptions()\n    };\n    if (this.effect.timeline) {\n      if (this.effect.timeline instanceof _Timeline__WEBPACK_IMPORTED_MODULE_3__["Timeline"]) {\n        rawTimeline = this.effect.timeline.rawTimeline;\n      } else {\n        rawTimeline = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getValue"])(this.effect.timeline, options);\n      }\n    } else if (this.effect.tween) {\n      rawTimeline = _Timeline__WEBPACK_IMPORTED_MODULE_3__["Timeline"].fromTween(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getValue"])(this.effect.tween, options)).rawTimeline;\n    }\n    if (!rawTimeline) {\n      return null;\n    } else {\n      const tl = new _Timeline__WEBPACK_IMPORTED_MODULE_3__["Timeline"](rawTimeline);\n      if (this.getOptions().arrive) {\n        tl.subtractTransform(tl.getLastValues().transform);\n      }\n      return this.getOptions().reverse ? tl.reverse() : tl;\n    }\n  }\n  _getMultiInstanceAPI(instances) {\n    return Object.getOwnPropertyNames(_AnimationInstance__WEBPACK_IMPORTED_MODULE_4__["AnimationInstance"].prototype).reduce((api, method) => {\n      if (method !== \'constructor\' && !method.startsWith(\'_\') && method !== \'getAnimation\') {\n        api[method] = function () {\n          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n          }\n          return instances.map(inst => {\n            return inst[method](...args);\n          });\n        };\n      }\n      return api;\n    }, {\n      getAnimation: () => this\n    });\n  }\n  _replaceDescriptor(descriptor) {\n    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    this.descriptor = descriptor;\n    this.setEffect(this.descriptor.effect, reset);\n    return this;\n  }\n  _replace(animation) {\n    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    this._replaceDescriptor(animation.descriptor);\n    Animation._copy(animation, this);\n    if (reset) {\n      this.resetAllInstances();\n    }\n    return this;\n  }\n  _recompose() {\n    let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    if (!this._isAtomic) {\n      this.subAnimations.forEach(sub => sub._recompose());\n      const composition = this.manager._compose(this.compositionType, this.subAnimations, {\n        trigger: overrides.trigger || this.getTrigger(),\n        name: overrides.name || this.getName(),\n        options: {\n          ...this.getOptions(),\n          ...overrides.options\n        }\n      });\n      this._replace(composition, false);\n    } else {\n      if (this.copyOf) {\n        this._replaceDescriptor({\n          ...this.getOriginal().descriptor,\n          ...this.descriptor,\n          options: {\n            ...this.getOriginal().getOptions(),\n            ...this.getOptions()\n          }\n        });\n      } else {\n        this._resetEffect();\n      }\n    }\n    this._updateTimeline();\n    return this;\n  }\n  _compose(composeType, animations) {\n    let replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    animations = Animation._getAnimationsArray(this.manager, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getAsArray"])(animations));\n    if (this.compositionType === composeType) {\n      if (replace) {\n        this.subAnimations.push(...animations);\n        return this._recompose();\n      } else {\n        const clone = this.clone();\n        clone.subAnimations.push(...animations);\n        return clone._recompose();\n      }\n    }\n    const composed = this.manager._compose(composeType, [this.clone(), ...animations]);\n    composed.setDuration(this.autoDuration ? \'auto\' : this.getDuration());\n    if (replace) {\n      this._replace(composed);\n      return this;\n    } else {\n      return composed;\n    }\n  }\n  _updateInstances() {\n    this.manager.getInstancesByAnimation(this).forEach(inst => {\n      inst._update();\n    });\n  }\n  _resetEffect() {\n    let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    if (this.originalEffect) {\n      this.setEffect(this.originalEffect, reset);\n    }\n  }\n  get _isAtomic() {\n    return this.compositionType === _constants__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_COMPOSITION_TYPE"].ATOMIC;\n  }\n  static _getAnimationsArray(manager, array) {\n    return array.map(anim => {\n      if (!(anim instanceof Animation)) {\n        return manager.createAnimation(anim);\n      } else {\n        return anim;\n      }\n    });\n  }\n  static _copy(source, target) {\n    target.compositionType = source.compositionType;\n    target.subAnimations = [...source.subAnimations];\n    target.originalEffect = source.originalEffect;\n    target.autoDuration = source.autoDuration;\n    target.copyOf = source;\n  }\n}\n\n//# sourceURL=webpack:///./src/Animation.js?'
            );
          },
          "./src/AnimationInstance.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationInstance", function() { return AnimationInstance; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");\n/* harmony import */ var _StyleManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleManipulator */ "./src/StyleManipulator.js");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\nclass AnimationInstance {\n  constructor(animation, targetElement, EngineClass) {\n    _defineProperty(this, "didPlay", false);\n    _defineProperty(this, "onFinishCallbacks", []);\n    this.animation = animation;\n    this.targetElement = targetElement;\n    this._saveTargetElementOriginalStyle();\n    if (!this.getAnimation()._getTimeline()) {\n      throw \'No timeline!\';\n    }\n    this.engine = new EngineClass(this);\n  }\n  getAnimation() {\n    return this.animation;\n  }\n  reset() {\n    this._recompose();\n  }\n  preview() {\n    this.didPlay = false;\n    this.seek(0);\n    this.play();\n  }\n  play() {\n    if (this.delayTimeout) {\n      clearTimeout(this.delayTimeout);\n    }\n    const play = () => {\n      if (this.getAnimation().getOptions().relative) {\n        this._update();\n      }\n      this.didPlay = true;\n      this.engine.play();\n    };\n    if (!this.didPlay && this.getAnimation().getOptions().delay) {\n      this.didPlay = true;\n      this.delayTimeout = setTimeout(() => {\n        play();\n      }, this.getAnimation().getOptions().delay * 1000);\n    } else {\n      play();\n    }\n  }\n  pause() {\n    this.engine.pause();\n  }\n  pauseOnIterationEnd() {\n    this.endAtNextLoop = true;\n  }\n  seek(time) {\n    this.engine.seek(time);\n  }\n  seekToEnd() {\n    this.seek(this.getAnimation().getDuration());\n  }\n  getTime() {\n    return this.engine.getTime();\n  }\n  isPlaying() {\n    return this.engine.isPlaying();\n  }\n  remove() {\n    if (this.delayTimeout) {\n      clearTimeout(this.delayTimeout);\n    }\n    this.pause();\n    this.cleanElement();\n    this.engine.kill();\n    this.getAnimation().manager._removeInstance(this);\n  }\n  separate() {\n    this._replaceAnimation(this.getAnimation().clone());\n    return this;\n  }\n  writeDescriptorToElement() {\n    this.getAnimation().writeDescriptorToElement(this.targetElement);\n  }\n  cleanElement() {\n    this._restoreElementStyle();\n    this.engine.cleanElement();\n  }\n  whenFinished(callback) {\n    if (this.isPlaying()) {\n      this.onFinishCallbacks.push(callback);\n    } else {\n      callback();\n    }\n  }\n  _onEnd() {\n    if (!this.engine._shouldLoop()) {\n      [...this.onFinishCallbacks].forEach(cb => {\n        cb();\n        this.onFinishCallbacks.splice(this.onFinishCallbacks.indexOf(cb), 1);\n      });\n    }\n  }\n  _recompose() {\n    let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    let keepTotalLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    this.getAnimation()._recompose(overrides, keepTotalLength);\n    this._replaceAnimation(this.getAnimation());\n  }\n  _saveTargetElementOriginalStyle() {\n    this.originalElementStyle = this.targetElement.getAttribute(\'style\');\n    this.targetElement.originalElementStyle = this.originalElementStyle;\n    this.targetElement.scrollParent = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getScrollParent"])(this.targetElement);\n  }\n  _seekToViewportPosition() {\n    if (this.getAnimation().manager.libOptions.jitAnimation && !Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isElementInViewport"])(this.targetElement, 0, true)) {\n      this.seekToEnd();\n    } else {\n      const isDocumentLevelScroll = this.targetElement.scrollParent === Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getDocumentScrollingElement"])();\n      const fullViewportHeight = isDocumentLevelScroll ? window.innerHeight : this.targetElement.scrollParent.clientHeight;\n      const targetRect = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getElementOriginalBoundingRect"])(this.targetElement);\n      const scrollParentRect = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getElementOriginalBoundingRect"])(this.targetElement.scrollParent);\n      const targetY = isDocumentLevelScroll ? targetRect.top : targetRect.top - scrollParentRect.top;\n      const thresholds = {\n        ...this.getAnimation().getOptions().viewportThresholds\n      };\n      [\'top\', \'bottom\'].forEach(prop => {\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isString"])(thresholds[prop]) && thresholds[prop].endsWith(\'%\')) {\n          thresholds[prop] = parseFloat(thresholds[prop]) / 100 * fullViewportHeight;\n        }\n      });\n      const viewportHeight = fullViewportHeight - thresholds.top - thresholds.bottom;\n      const finalTargetY = Math.max(0, targetY - thresholds.top);\n      const progress = Math.max(0, Math.min(1, (viewportHeight - finalTargetY) / viewportHeight));\n      const t = progress * this.getAnimation().getDuration();\n      this.seek(t);\n    }\n  }\n  _seekByMouseProximity(evt) {\n    const targetRect = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getElementOriginalBoundingRect"])(this.targetElement);\n    const targetCenter = {\n      x: (targetRect.right + targetRect.left) / 2,\n      y: (targetRect.top + targetRect.bottom) / 2\n    };\n    const dist = Math.sqrt(Math.pow(targetCenter.x - evt.clientX, 2) + Math.pow(targetCenter.y - evt.clientY, 2));\n    const threshold = this.getAnimation().getOptions().proximityThreshold;\n    const t = (1 - dist / threshold) * this.getAnimation().getDuration();\n    this.seek(dist < threshold ? t : 0);\n  }\n  _getTimeline() {\n    const tl = this.getAnimation()._getTimeline();\n    if (this.getAnimation().getOptions().relative) {\n      const style = new _StyleManipulator__WEBPACK_IMPORTED_MODULE_1__["StyleManipulator"](this.targetElement.getAttribute(\'style\'));\n      tl.addTransform(style.toObject(false).transform);\n    }\n    return tl;\n  }\n  _update() {\n    this.engine.update();\n  }\n  _onUpdate() {\n    this._syncInnerAnimations();\n  }\n  _syncInnerAnimations() {\n    const manager = this.getAnimation().manager;\n    const innerInstances = manager._filterInstances(inst => {\n      return inst.targetElement !== this.targetElement && this.targetElement.contains(inst.targetElement);\n    });\n    innerInstances.forEach(inst => {\n      manager._syncInstance(inst);\n    });\n  }\n  _onIteration() {\n    if (this.endAtNextLoop) {\n      this.pause();\n      delete this.endAtNextLoop;\n    }\n  }\n  _replaceAnimation(newAnimation) {\n    this.didPlay = false;\n    this.remove();\n    this.getAnimation().manager._removeInstance(this);\n    const alteredInstance = newAnimation.apply(this.targetElement, true);\n    this.getAnimation().manager._replaceInstance(alteredInstance, this);\n    this.engine = alteredInstance.engine;\n    this.engine.instance = this;\n    this.animation = newAnimation;\n    this.getAnimation().manager._activate();\n  }\n  _restoreElementStyle() {\n    if (this.originalElementStyle) {\n      this.targetElement.setAttribute(\'style\', this.originalElementStyle);\n    } else {\n      this.targetElement.removeAttribute(\'style\');\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/AnimationInstance.js?'
            );
          },
          "./src/Dispatcher.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\n\nconst PASSIVE = {\n  passive: true\n};\nclass Dispatcher {\n  constructor(manager) {\n    _defineProperty(this, "_onScroll", evt => {\n      if (this.manager.disabled) {\n        return;\n      }\n      this._activateEntranceAnimationsInViewport();\n      this._driveViewportDrivenAnimations(evt);\n    });\n    _defineProperty(this, "_onMouseOver", evt => {\n      if (this.manager.disabled) {\n        return;\n      }\n      this.manager._runAnimations(this.manager._getHoverInstancesForElement(evt.target));\n    });\n    _defineProperty(this, "_onMouseOut", evt => {\n      if (this.manager.disabled) {\n        return;\n      }\n      this.manager._stopAnimations(this.manager._getHoverInstancesForElement(evt.target));\n    });\n    _defineProperty(this, "_onMouseMove", evt => {\n      if (this.manager.disabled) {\n        return;\n      }\n      const animations = this.manager.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_0__["Driver"].MOUSE_PROXIMITY);\n      animations.forEach(inst => {\n        inst._seekByMouseProximity(evt);\n      });\n    });\n    this.manager = manager;\n    this.registerListeners();\n    this.scrollListeners = [];\n  }\n  registerListeners() {\n    window.addEventListener(\'scroll\', this._onScroll, PASSIVE);\n    window.addEventListener(\'resize\', this._onScroll, PASSIVE);\n    window.addEventListener(\'mouseover\', this._onMouseOver, PASSIVE);\n    window.addEventListener(\'mouseout\', this._onMouseOut, PASSIVE);\n    window.addEventListener(\'mousemove\', this._onMouseMove, PASSIVE);\n  }\n  removeListeners() {\n    window.removeEventListener(\'scroll\', this._onScroll, PASSIVE);\n    window.removeEventListener(\'resize\', this._onScroll, PASSIVE);\n    window.removeEventListener(\'mouseover\', this._onMouseOver, PASSIVE);\n    window.removeEventListener(\'mouseout\', this._onMouseOut, PASSIVE);\n    window.removeEventListener(\'mousemove\', this._onMouseMove, PASSIVE);\n  }\n  addScrollListener(targetElement) {\n    const scrollParent = targetElement.scrollParent;\n    if (scrollParent === Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDocumentScrollingElement"])()) {\n      return;\n    }\n    this.scrollListeners.push({\n      targetElement,\n      scrollParent\n    });\n    scrollParent.addEventListener(\'scroll\', this._onScroll, PASSIVE);\n  }\n  removeScrollListener(targetElement) {\n    const found = this.scrollListeners.find(sl => sl.targetElement === targetElement);\n    if (found) {\n      const scrollParent = found.scrollParent;\n      this.scrollListeners.splice(this.scrollListeners.indexOf(found), 1);\n      if (!this.scrollListeners.find(sl => sl.scrollParent === scrollParent)) {\n        scrollParent.removeEventListener(\'scroll\', this._onScroll, PASSIVE);\n      }\n    }\n  }\n  _activateEntranceAnimationsInViewport() {\n    let instances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    const entranceInstances = instances || this.manager.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_0__["Trigger"].ENTRANCE);\n    entranceInstances.forEach(inst => {\n      if (!inst.didPlay) {\n        if (this.manager.libOptions.jitAnimation) {\n          inst.visibilityPriority = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(inst.visibilityPriority) ? inst.targetElement.style.getPropertyPriority(\'visibility\') : inst.visibilityPriority;\n          inst.targetElement.style.visibility = \'hidden\';\n          inst.seekToEnd();\n        } else {\n          inst.seek(0);\n        }\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isElementInViewport"])(inst.targetElement, 0, true)) {\n          if (this.manager.libOptions.jitAnimation) {\n            inst.seek(0);\n            inst.targetElement.style.setProperty(\'visibility\', \'visible\', inst.visibilityPriority);\n          }\n          if (entranceInstances.length > 20) {\n            requestAnimationFrame(() => inst.play());\n          } else {\n            inst.play();\n          }\n        }\n      }\n    });\n  }\n  _driveViewportDrivenAnimations(evt) {\n    const viewportDrivenInstances = this.manager.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_0__["Driver"].VIEWPORT).filter(inst => {\n      if (inst.targetElement.scrollParent === Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDocumentScrollingElement"])() && [document, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDocumentScrollingElement"])(), window].includes(evt.target)) {\n        return this.manager.libOptions.jitAnimation || Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isElementInViewport"])(inst.targetElement, 0, true);\n      } else {\n        return inst.targetElement.scrollParent === evt.target;\n      }\n    });\n    viewportDrivenInstances.forEach(inst => {\n      inst._seekToViewportPosition();\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/Dispatcher.js?'
            );
          },
          "./src/DudaAnimationManager.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DudaAnimationManager", function() { return DudaAnimationManager; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation */ "./src/Animation.js");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n/* harmony import */ var _built_in_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./built-in-effects */ "./src/built-in-effects.js");\n/* harmony import */ var _Dispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dispatcher */ "./src/Dispatcher.js");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timeline */ "./src/Timeline.js");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\n\n\n\n\nclass DudaAnimationManager {\n  constructor() {\n    let libOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    _defineProperty(this, "EngineClass", null);\n    _defineProperty(this, "effects", {});\n    _defineProperty(this, "animationInstances", []);\n    _defineProperty(this, "disabled", false);\n    this.setEngine(DudaAnimationManager.SceneEngine ? \'scenejs\' : \'animejs\');\n    Object(_built_in_effects__WEBPACK_IMPORTED_MODULE_3__["registerEffects"])(this);\n    this.libOptions = libOptions;\n    this.dispatcher = new _Dispatcher__WEBPACK_IMPORTED_MODULE_4__["Dispatcher"](this);\n    this._scanDomForAnimations();\n    this._activate();\n  }\n  setEngine(engine) {\n    const engineClass = DudaAnimationManager[engine === _constants__WEBPACK_IMPORTED_MODULE_2__["Engine"].SCENE ? \'SceneEngine\' : engine === _constants__WEBPACK_IMPORTED_MODULE_2__["Engine"].ANIME ? \'AnimeEngine\' : null];\n    if (engineClass) {\n      this.EngineClass = engineClass;\n    } else {\n      throw new Error(\'Failed to load engine\');\n    }\n  }\n  reset() {\n    [...this.animationInstances].forEach(inst => {\n      inst.reset();\n    });\n  }\n  defineEffect(name, descriptor) {\n    this.effects[name] = descriptor;\n  }\n  getAllEffectNames() {\n    return Object.keys(this.effects);\n  }\n  getOptionsForEffect(effectName) {\n    let showAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    const effect = this._getEffect(effectName);\n    if (showAll) {\n      return effect.defaultOptions || {};\n    }\n    return Object.fromEntries(Object.entries(effect.defaultOptions || {}).filter(_ref => {\n      let [optionName] = _ref;\n      return !_constants__WEBPACK_IMPORTED_MODULE_2__["MASTER_DEFAULT_OPTIONS"][optionName];\n    }));\n  }\n  getInstancesByElement(element) {\n    return this._filterInstances(inst => {\n      return inst.targetElement === element;\n    });\n  }\n  mix(animations) {\n    let overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    return this._compose(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].MIX, animations, overrides);\n  }\n  join(animations) {\n    let overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    return this._compose(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].JOIN, animations, overrides);\n  }\n  animate(elementOrSelector) {\n    return animationOrDescriptor => {\n      if (animationOrDescriptor instanceof _Animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]) {\n        return animationOrDescriptor.apply(elementOrSelector);\n      } else {\n        return this.createAnimation(animationOrDescriptor).apply(elementOrSelector);\n      }\n    };\n  }\n  createAnimation(structure) {\n    const recursiveCompose = root => {\n      const method = obj => obj[_constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].JOIN] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].JOIN : obj[_constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].MIX] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].MIX : null;\n      if (method(root)) {\n        return this[method(root)](root[method(root)].map(entry => {\n          if (entry instanceof _Animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]) {\n            return entry;\n          } else if (method(entry)) {\n            return recursiveCompose(entry);\n          } else {\n            return new _Animation__WEBPACK_IMPORTED_MODULE_1__["Animation"](this, entry);\n          }\n        }));\n      } else if (root.effect) {\n        return new _Animation__WEBPACK_IMPORTED_MODULE_1__["Animation"](this, root);\n      } else {\n        throw new Error(\'Illegal composition structure\');\n      }\n    };\n    return recursiveCompose(structure);\n  }\n  composeTimelines(compositionObject) {\n    let compositionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_COMPOSITION_TYPE"].MIX;\n    const animations = Object.entries(compositionObject).map(_ref2 => {\n      let [effect, options] = _ref2;\n      return this.createAnimation({\n        effect,\n        options\n      });\n    });\n    return this.createAnimation({\n      [compositionType]: animations\n    })._getTimeline().rawTimeline;\n  }\n  cleanDOM() {\n    this.animationInstances.forEach(inst => inst.cleanElement());\n  }\n  disable() {\n    this.disabled = true;\n    this.cleanDOM();\n  }\n  enable() {\n    this.disabled = false;\n    this.animationInstances.filter(inst => inst.getAnimation().getTrigger() !== _constants__WEBPACK_IMPORTED_MODULE_2__["Trigger"].ENTRANCE).forEach(inst => inst.reset());\n  }\n  removeAll() {\n    [...this.animationInstances].forEach(inst => inst.remove());\n  }\n  destroy() {\n    this.removeAll();\n    this.dispatcher.removeListeners();\n  }\n  getInstancesByAnimation(animation) {\n    return this._filterInstances(inst => {\n      return inst.getAnimation() === animation || inst.getAnimation().contains(animation) || inst.getAnimation().copyOf === animation;\n    });\n  }\n  getInstancesByTrigger(trigger) {\n    return this._filterInstances(inst => {\n      return inst.getAnimation().getTrigger() === trigger;\n    });\n  }\n  getInstancesByEffect(effect) {\n    return this._filterInstances(inst => {\n      return inst.getAnimation().descriptor.effect === effect;\n    });\n  }\n  _writeDescriptorsToElement(targetElement) {\n    let add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    const allDescriptors = this.getInstancesByElement(targetElement).map(instance => instance.getAnimation()).filter(anim => !add.includes(anim)).concat(add).map(anim => anim.getDescriptor());\n    targetElement.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_DATA_ATTR"], btoa(JSON.stringify(allDescriptors)));\n  }\n  _filterInstances(filter) {\n    return this.animationInstances.filter(filter);\n  }\n  _addInstance(instance) {\n    let quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (!this.animationInstances.includes(instance)) {\n      this.animationInstances.push(instance);\n      if (!quiet) {\n        this._activate();\n      }\n      this.dispatcher.addScrollListener(instance.targetElement);\n    }\n  }\n  _compose(type, animations) {\n    var _overrides$options, _overrides$options2;\n    let overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    animations = _Animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]._getAnimationsArray(this, Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getAsArray"])(animations));\n    const trigger = overrides.trigger || animations[0].getTrigger();\n    const timelines = animations.map(anim => {\n      const normalTimeline = anim._getTimeline().normalize();\n      return normalTimeline.transform({\n        duration: anim.getDuration(),\n        delay: anim.getOptions().delay\n      });\n    });\n    const composedTimeline = _Timeline__WEBPACK_IMPORTED_MODULE_5__["Timeline"][type](timelines);\n    const arrive = ((_overrides$options = overrides.options) === null || _overrides$options === void 0 ? void 0 : _overrides$options.arrive) || animations[0].getOptions().arrive;\n    if (arrive) {\n      composedTimeline.subtractTransform(composedTimeline.getLastValues().transform);\n    }\n    const composedAnimation = this.createAnimation({\n      trigger,\n      name: overrides.name,\n      effect: {\n        timeline: composedTimeline.removeOffset()\n      },\n      options: {\n        duration: composedTimeline.getDuration(),\n        delay: composedTimeline.getOffset(),\n        viewportThresholds: animations[0].getOptions().viewportThresholds,\n        ...overrides.options\n      }\n    });\n    composedAnimation.compositionType = type;\n    composedAnimation.subAnimations = [...animations];\n    composedAnimation.setDuration(((_overrides$options2 = overrides.options) === null || _overrides$options2 === void 0 ? void 0 : _overrides$options2.duration) || \'auto\');\n    return composedAnimation;\n  }\n  _getExtra(extra) {\n    let displayError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    const extrasRoot = window[Symbol.for(\'DAM.EXTRAS\')];\n    const resolved = extrasRoot && extrasRoot[extra] ? extrasRoot[extra] : null;\n    if (!resolved && displayError) {\n      console.error(\'extras module is needed for \', extra);\n    }\n    return resolved;\n  }\n  _activate() {\n    this.dispatcher._activateEntranceAnimationsInViewport();\n    this._activateAlwaysRunningAnimations();\n    this._initViewportAnimations();\n    this._initHoverAnimations();\n  }\n  _syncInstance(inst) {\n    if (inst.getAnimation().getTrigger() === _constants__WEBPACK_IMPORTED_MODULE_2__["Trigger"].ENTRANCE) {\n      this.dispatcher._activateEntranceAnimationsInViewport([inst]);\n    } else if (inst.getAnimation().getTrigger() === _constants__WEBPACK_IMPORTED_MODULE_2__["Driver"].VIEWPORT) {\n      inst._seekToViewportPosition();\n    }\n  }\n  _removeInstance(instance) {\n    let replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    const index = this.animationInstances.indexOf(instance);\n    if (index >= 0) {\n      const args = [index, 1];\n      if (replacer) {\n        args.push(replacer);\n      }\n      this.animationInstances.splice(...args);\n      this.dispatcher.removeScrollListener(instance.targetElement);\n      if (replacer) {\n        this.dispatcher.addScrollListener(replacer.targetElement);\n      }\n    }\n  }\n  _replaceInstance(instance, replacer) {\n    this._removeInstance(instance, replacer);\n  }\n  _getHoverInstancesForElement(elem) {\n    return this.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_2__["Trigger"].HOVER).filter(inst => {\n      return inst.targetElement === elem;\n    });\n  }\n  _initHoverAnimations() {\n    const hoverInstances = this.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_2__["Trigger"].HOVER);\n    hoverInstances.forEach(inst => inst.seek(0));\n  }\n  _initViewportAnimations() {\n    if (this.disabled) {\n      return;\n    }\n    const viewportInstances = this.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_2__["Driver"].VIEWPORT);\n    viewportInstances.forEach(inst => inst._seekToViewportPosition());\n  }\n  _activateAlwaysRunningAnimations() {\n    const alwaysActivatedAnimatedElements = this.getInstancesByTrigger(_constants__WEBPACK_IMPORTED_MODULE_2__["Trigger"].ALWAYS);\n    this._runAnimations(alwaysActivatedAnimatedElements);\n  }\n  _scanDomForAnimations() {\n    const animatedElements = document.querySelectorAll("[".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_DATA_ATTR"], "]"));\n    animatedElements.forEach(elem => {\n      const descriptors = JSON.parse(atob(elem.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_DATA_ATTR"])));\n      descriptors.forEach(descriptor => {\n        let animation;\n        animation = this.createAnimation(descriptor);\n        this._addInstance(animation.apply(elem));\n      });\n    });\n  }\n  _runAnimations(instances) {\n    instances.forEach(inst => {\n      inst.play();\n    });\n  }\n  _stopAnimations(instances) {\n    instances.forEach(inst => {\n      inst.pauseOnIterationEnd();\n    });\n  }\n  _getEffect(effect) {\n    let effectOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isString"])(effect)) {\n      const found = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getValue"])(this.effects[effect], effectOptions);\n      if (!found) {\n        throw new Error(\'Unknown effect: \' + effect);\n      }\n      return found;\n    }\n    return effect;\n  }\n}\n_defineProperty(DudaAnimationManager, "SceneEngine", null);\n_defineProperty(DudaAnimationManager, "AnimeEngine", null);\n\n//# sourceURL=webpack:///./src/DudaAnimationManager.js?'
            );
          },
          "./src/Engine.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n\nclass Engine {\n  constructor(instance) {\n    this.instance = instance;\n  }\n  play() {}\n  pause() {}\n  seek( /*time*/\n  ) {}\n  getTime() {}\n  isPlaying() {}\n  kill() {}\n  _shouldLoop() {\n    return [_constants__WEBPACK_IMPORTED_MODULE_0__["Trigger"].ALWAYS, _constants__WEBPACK_IMPORTED_MODULE_0__["Trigger"].HOVER].includes(this.getAnimation().getTrigger()) || this.getAnimation().getOptions().loop;\n  }\n  cleanElement() {}\n  getAnimation() {\n    return this.instance.getAnimation();\n  }\n  getTargetElement() {\n    return this.instance.targetElement;\n  }\n  update() {}\n}\n\n//# sourceURL=webpack:///./src/Engine.js?'
            );
          },
          "./src/StyleManipulator.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyleManipulator\", function() { return StyleManipulator; });\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.trim */ \"lodash.trim\");\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nclass StyleManipulator {\n  constructor() {\n    let styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n    let clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    _defineProperty(this, \"strState\", null);\n    if (!StyleManipulator.sharedElement) {\n      StyleManipulator.sharedElement = document.createElement('div');\n    }\n    this.elem.setAttribute('style', styleStr);\n    if (clean) {\n      this._cleanStyle();\n    }\n  }\n  get elem() {\n    if (StyleManipulator.current !== this) {\n      if (StyleManipulator.current) {\n        StyleManipulator.current.strState = StyleManipulator.sharedElement.getAttribute('style');\n      }\n      StyleManipulator.sharedElement.setAttribute('style', this.strState);\n      StyleManipulator.current = this;\n    }\n    return StyleManipulator.sharedElement;\n  }\n  static fromObject(obj) {\n    let clean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    const mapper = (o, builder, sep) => Object.entries(o).map(_ref => {\n      let [key, val] = _ref;\n      if (key === 'transform' && Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(val)) {\n        return \"\".concat(key, \": \").concat(mapper(val, (key, val) => \"\".concat(key, \"(\").concat(val, \")\"), ' '));\n      }\n      return builder(key, val);\n    }).join(sep);\n    return new StyleManipulator(mapper(obj, (key, val) => \"\".concat(key, \": \").concat(val), '; '), clean);\n  }\n  toString() {\n    return this.elem.getAttribute('style');\n  }\n  toObject() {\n    let objectifyTransform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    const style = this.elem.style;\n    const obj = {};\n    for (let i = 0; i < style.length; i++) {\n      obj[style[i]] = style[style[i]];\n    }\n    return Object.entries(obj).reduce((convertedProps, _ref2) => {\n      let [key, val] = _ref2;\n      if (key === 'transform' && objectifyTransform) {\n        convertedProps.transform = StyleManipulator._objectifyTransformString(val);\n      } else {\n        convertedProps[key] = val;\n      }\n      return convertedProps;\n    }, {});\n  }\n  static _objectifyTransformString(transformString) {\n    const object = {};\n    const commands = transformString.split(') ');\n    commands.forEach(command => {\n      if (command.trim()) {\n        const [cmd, params] = command.split('(').map(v => lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(v, '() '));\n        object[cmd] = params;\n      }\n    });\n    return object;\n  }\n  getProperties() {\n    return Object.keys(this.toObject(false));\n  }\n  hasProperty(prop) {\n    return this.getProperties().includes(prop);\n  }\n  getTransformProperties() {\n    var _this$toObject;\n    return Object.keys(((_this$toObject = this.toObject()) === null || _this$toObject === void 0 ? void 0 : _this$toObject.transform) || {});\n  }\n  getTransformString() {\n    return this.toObject(false).transform || '';\n  }\n  extend(otherStyle) {\n    let overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    otherStyle = otherStyle instanceof StyleManipulator ? otherStyle : new StyleManipulator(otherStyle);\n    const otherObject = otherStyle.toObject();\n    Object.entries(otherObject).forEach(_ref3 => {\n      let [attr, value] = _ref3;\n      if (attr === 'transform') {\n        const mergedTransformObject = this._mergeTransform(otherObject.transform, overwrite);\n        this.elem.style.transform = Object.entries(mergedTransformObject).sort(StyleManipulator.transformSorter).map(_ref4 => {\n          let [transAttr, transVal] = _ref4;\n          return \"\".concat(transAttr, \"(\").concat(transVal, \")\");\n        }).join(' ');\n      } else {\n        if (overwrite && this.elem.style[attr] !== undefined) {\n          this.elem.style[attr] = value;\n        }\n      }\n    });\n    return this;\n  }\n  addTransform(transform) {\n    if (!transform) {\n      return this;\n    }\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(transform)) {\n      transform = new StyleManipulator(\"transform: \".concat(transform)).toObject().transform;\n    }\n    const newTransform = Object.entries(transform).sort(StyleManipulator.transformSorter).reduce((transformedTransform, _ref5) => {\n      let [prop, val] = _ref5;\n      if (!transformedTransform[prop]) {\n        transformedTransform[prop] = val;\n      } else {\n        const valuesData = StyleManipulator._extractTransformParams(val);\n        const currentValuesData = StyleManipulator._extractTransformParams(transformedTransform[prop]);\n        transformedTransform[prop] = valuesData.map((valData, index) => {\n          if (valData.unit === currentValuesData[index].unit || !currentValuesData[index].unit || !valData.unit) {\n            let newVal;\n            if (prop === 'rotate3d' && index < 3) {\n              if (currentValuesData[index].number !== valData.number) {\n                console.error('trying to add rotation on different axis');\n              } else {\n                newVal = currentValuesData[index].number;\n              }\n            } else {\n              newVal = prop.startsWith('scale') ? currentValuesData[index].number * valData.number : currentValuesData[index].number + valData.number;\n            }\n            return \"\".concat(newVal).concat(valData.unit || currentValuesData[index].unit);\n          } else {\n            throw 'unit mismatch: ' + currentValuesData[index].unit + ' | ' + valData.unit;\n          }\n        }).join(', ');\n      }\n      return transformedTransform;\n    }, this.toObject().transform || {});\n    this.elem.style.transform = '';\n    this.extend(StyleManipulator.fromObject({\n      transform: newTransform\n    }));\n    return this;\n  }\n  static _transformObjectToString(transObject) {\n    return Object.entries(transObject).sort(StyleManipulator.transformSorter).map(_ref6 => {\n      let [f, p] = _ref6;\n      return \"\".concat(f, \"(\").concat(p, \")\");\n    }).join(' ');\n  }\n  static sortTransform(transString) {\n    return StyleManipulator._transformObjectToString(new StyleManipulator(\"transform: \".concat(transString)).toObject().transform);\n  }\n  static getNegativeTransform(transformString) {\n    if (!transformString) {\n      return transformString;\n    }\n    const transObj = this._objectifyTransformString(transformString);\n    return Object.entries(transObj).map(_ref7 => {\n      let [transProp, val] = _ref7;\n      const params = this._extractTransformParams(val);\n      const newValue = params.map((param, index) => {\n        if (transProp.startsWith('scale')) {\n          return String(1 / param.number);\n        }\n        if (transProp === 'rotate3d' && index !== 3) {\n          return \"\".concat(param.number).concat(param.unit);\n        } else {\n          return \"\".concat(-param.number).concat(param.unit);\n        }\n      }).join(', ');\n      return \"\".concat(transProp, \"(\").concat(newValue, \")\");\n    }).join(' ');\n  }\n  static _extractTransformParams(val) {\n    const unitsRegex = /[^0-9-.]/;\n    return val.split(',').map(v => v.trim()).map(v => ({\n      raw: v,\n      number: parseFloat(v),\n      unit: v.match(unitsRegex) ? v.substr(v.match(unitsRegex).index) : ''\n    }));\n  }\n  static transformSorter(_ref8, _ref9) {\n    let [transAttr1] = _ref8;\n    let [transAttr2] = _ref9;\n    const check = type => {\n      if (transAttr1.startsWith(type) && !transAttr2.startsWith(type)) {\n        return -1;\n      } else if (!transAttr1.startsWith(type) && transAttr2.startsWith(type)) {\n        return 1;\n      } else {\n        return 0;\n      }\n    };\n    return check('translate') || check('scale') || 0;\n  }\n  _mergeTransform(transObject) {\n    let overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    return Object.entries(transObject).reduce((merge, _ref10) => {\n      let [attr, val] = _ref10;\n      const TSR = ['translate', 'scale', 'rotate'];\n      if (TSR.some(p => [p + 'X', p + 'Y', p + 'Z'].includes(attr))) {\n        const type = attr.slice(0, -1);\n        if (!merge[type] || overwrite) {\n          merge[attr] = val;\n        }\n      } else if (TSR.includes(attr)) {\n        const mergeKeys = Object.keys(merge);\n        if (!TSR.some(p => mergeKeys.some(mk => mk.startsWith(p))) || overwrite) {\n          merge[attr] = val;\n        }\n      } else if (merge[attr] === undefined || overwrite) {\n        merge[attr] = val;\n      }\n      return merge;\n    }, {\n      ...this.toObject().transform\n    });\n  }\n  _cleanStyle() {\n    const object = this.toObject();\n    if (!object.transform) {\n      return;\n    }\n    const current = {\n      translate: {},\n      scale: {},\n      rotate: {}\n    };\n    const XYZ = ['X', 'Y', 'Z'];\n    Object.entries(object.transform).forEach(_ref11 => {\n      let [transProp, value] = _ref11;\n      const type = Object.keys(current).find(p => transProp.startsWith(p));\n      if (type) {\n        if (type === transProp || transProp === type + '3d' && type !== 'rotate') {\n          const params = StyleManipulator._extractTransformParams(value);\n          params.forEach((p, i) => {\n            const oldVal = current[type][XYZ[i].toLowerCase()];\n            if (oldVal) {\n              if (oldVal.unit === p.unit || !p.unit && !p.number || !oldVal.unit && !oldVal.number) {\n                if (type === 'scale') {\n                  current[type][XYZ[i].toLowerCase()].number *= p.number;\n                } else {\n                  current[type][XYZ[i].toLowerCase()].number += p.number;\n                }\n              } else {\n                console.error('Transform conflict!', transProp);\n              }\n            } else {\n              current[type][XYZ[i].toLowerCase()] = p;\n            }\n          });\n        } else if (transProp === 'rotate3d') {\n          current.rotate['3d'] = value;\n        } else {\n          XYZ.forEach(axis => {\n            if (transProp === type + axis) {\n              const oldVal = current[type][axis.toLowerCase()];\n              const newVal = StyleManipulator._extractTransformParams(value)[0];\n              if (oldVal) {\n                if (oldVal.unit === newVal.unit || !oldVal.unit && !oldVal.number || !newVal.unit && !newVal.number) {\n                  if (type === 'scale') {\n                    current[type][axis.toLowerCase()].number *= newVal.number;\n                  } else {\n                    current[type][axis.toLowerCase()].number += newVal.number;\n                  }\n                } else {\n                  console.error('Transform conflict!', transProp);\n                }\n              } else {\n                current[type][axis.toLowerCase()] = newVal;\n              }\n            }\n          });\n        }\n      }\n    });\n    Object.keys(current).forEach(type => {\n      if (Object.keys(current[type]).length) {\n        object.transform = Object.fromEntries(Object.entries(object.transform).filter(_ref12 => {\n          let [key] = _ref12;\n          return !key.startsWith(type);\n        }));\n        const n = Object.keys(current[type]).length;\n        if (n > 1 || type === 'rotate' && !current[type]['3d']) {\n          object.transform[type + (n === 3 ? '3d' : '')] = XYZ.map(axis => {\n            const val = current[type][axis.toLowerCase()];\n            if (val) {\n              return String(val.number + val.unit);\n            }\n          }).filter(v => !!v).join(', ');\n        } else {\n          XYZ.forEach(axis => {\n            const val = current[type][axis.toLowerCase()];\n            if (val) {\n              object.transform[type + axis] = val.number + val.unit;\n            }\n          });\n        }\n      }\n      if (current.rotate['3d']) {\n        object.transform.rotate3d = current.rotate['3d'];\n      }\n    });\n    this.elem.style.transform = StyleManipulator._transformObjectToString(object.transform);\n  }\n}\n_defineProperty(StyleManipulator, \"sharedElement\", null);\n_defineProperty(StyleManipulator, \"current\", null);\n\n//# sourceURL=webpack:///./src/StyleManipulator.js?"
            );
          },
          "./src/Timeline.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");\n/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.intersection */ "../../node_modules/lodash.intersection/index.js");\n/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleManipulator */ "./src/StyleManipulator.js");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");\n\n\n\n\nclass Timeline {\n  constructor(rawTimeline) {\n    this.rawTimeline = rawTimeline;\n  }\n  getPropertiesAt(timeKey) {\n    var _this$getEntries$find;\n    return (_this$getEntries$find = this.getEntries().find(_ref => {\n      let [entryTimeKey] = _ref;\n      return entryTimeKey === timeKey;\n    })) === null || _this$getEntries$find === void 0 ? void 0 : _this$getEntries$find[1];\n  }\n  getPropertyAt(timeKey, propName) {\n    var _this$getPropertiesAt;\n    return (_this$getPropertiesAt = this.getPropertiesAt(timeKey)) === null || _this$getPropertiesAt === void 0 ? void 0 : _this$getPropertiesAt[propName];\n  }\n  getStyleManipulatorAt(timeKey) {\n    return _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(this.getPropertiesAt(timeKey));\n  }\n  getPropertyNamesAt(timeKey) {\n    return this.getStyleManipulatorAt(timeKey).getProperties();\n  }\n  getTransformPropertyNamesAt(timeKey) {\n    return this.getStyleManipulatorAt(timeKey).getTransformProperties();\n  }\n  getAllPropertyNames() {\n    let transform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    const method = transform ? \'getTransformPropertyNamesAt\' : \'getPropertyNamesAt\';\n    return this.getTimeKeys().map(timeKey => this[method](timeKey)).reduce((allProps, current) => {\n      current.forEach(prop => {\n        if (!allProps.includes(prop)) {\n          allProps.push(prop);\n        }\n      });\n      return allProps;\n    }, []);\n  }\n  getAllTransformPropertyNames() {\n    return this.getAllPropertyNames(true);\n  }\n  getFirstValues() {\n    return this._getFirstOrLastValue(true);\n  }\n  getLastValues() {\n    return this._getFirstOrLastValue(false);\n  }\n  _getFirstOrLastValue() {\n    let first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    return this.getTimeKeys().reduce((values, timeKey) => {\n      this.getPropertyNamesAt(timeKey).forEach(propName => {\n        if ((Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(values[propName]) || !first) && propName !== \'transform\') {\n          values[propName] = this.getPropertyAt(timeKey, propName);\n        }\n      });\n      const transform = this.getPropertyAt(timeKey, \'transform\');\n      const trans1 = first ? {\n        transform\n      } : {\n        transform: values.transform || \'\'\n      };\n      const trans2 = !first ? {\n        transform\n      } : {\n        transform: values.transform || \'\'\n      };\n      if (transform) {\n        values.transform = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(trans1).extend(_StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(trans2)).toObject(false).transform;\n      }\n      return values;\n    }, {});\n  }\n  static fromTween(tween) {\n    return new Timeline({\n      0: tween.start,\n      100: tween.end\n    });\n  }\n  normalize() {\n    const offset = this.getOffset();\n    const duration = this.getDuration();\n    const durationRatio = 100 / duration;\n    this.rawTimeline = this.getEntries().reduce((newTimeline, _ref2) => {\n      let [timeKey, propsObject] = _ref2;\n      const newKey = String(((parseFloat(timeKey) - offset) * durationRatio).toFixed(2));\n      newTimeline[newKey] = propsObject;\n      return newTimeline;\n    }, {});\n    return this;\n  }\n  getTimeKeys() {\n    return Object.keys(this.rawTimeline).map(key => parseFloat(key)).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);\n  }\n  getEntries() {\n    return Object.entries(this.rawTimeline).map(_ref3 => {\n      let [key, val] = _ref3;\n      return [parseFloat(key), val];\n    }).sort((_ref4, _ref5) => {\n      let [key1] = _ref4;\n      let [key2] = _ref5;\n      return key1 < key2 ? -1 : key1 > key2 ? 1 : 0;\n    });\n  }\n  getDuration() {\n    const timeKeys = this.getTimeKeys();\n    return timeKeys.slice(-1)[0] - timeKeys[0];\n  }\n  getTotalDuration() {\n    return this.getTimeKeys().slice(-1)[0];\n  }\n  getOffset() {\n    return this.getTimeKeys()[0];\n  }\n  transform(_ref6) {\n    let {\n      duration = null,\n      delay = 0\n    } = _ref6;\n    if (duration) {\n      this.changeDuration(duration);\n    }\n    this.addOffset(delay);\n    return this;\n  }\n  changeDuration(duration) {\n    const offset = this.getOffset();\n    const oldDuration = this.getDuration();\n    const durationRatio = duration / oldDuration;\n    this.rawTimeline = this.getEntries().reduce((newTimeline, _ref7) => {\n      let [timeKey, propsObject] = _ref7;\n      const newKey = String(((parseFloat(timeKey) - offset) * durationRatio + offset).toFixed(2));\n      newTimeline[newKey] = propsObject;\n      return newTimeline;\n    }, {});\n    return this;\n  }\n  addOffset(delay) {\n    this.rawTimeline = this.getEntries().reduce((newTimeline, _ref8) => {\n      let [timeKey, propsObject] = _ref8;\n      const newKey = (parseFloat(timeKey) + delay).toFixed(2);\n      newTimeline[newKey] = propsObject;\n      return newTimeline;\n    }, {});\n    return this;\n  }\n  removeOffset() {\n    const offset = this.getOffset();\n    this.rawTimeline = this.getEntries().reduce((newTimeline, _ref9) => {\n      let [timeKey, propsObject] = _ref9;\n      const newKey = String((parseFloat(timeKey) - offset).toFixed(2));\n      newTimeline[newKey] = propsObject;\n      return newTimeline;\n    }, {});\n    return this;\n  }\n  reverse() {\n    const offset = this.getOffset();\n    const duration = this.getDuration();\n    this.rawTimeline = this.getEntries().reverse().reduce((newTimeline, _ref10) => {\n      let [timeKey, propsObject] = _ref10;\n      const newKey = String((duration - (parseFloat(timeKey) - offset)).toFixed(2));\n      newTimeline[newKey] = propsObject;\n      return newTimeline;\n    }, {});\n    return this;\n  }\n  addTransform(transformString) {\n    if (!transformString) {\n      return this;\n    }\n    this.rawTimeline = this.getEntries().reduce((transformed, _ref11) => {\n      let [timeKey, propsObject] = _ref11;\n      const style = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(propsObject);\n      style.addTransform(transformString);\n      transformed[timeKey.toFixed(2)] = style.toObject(false);\n      return transformed;\n    }, {});\n    return this;\n  }\n  subtractTransform(transformString) {\n    return this.addTransform(_StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].getNegativeTransform(transformString));\n  }\n  static join(timelines) {\n    let joinTime = 0;\n    let firstKey = timelines[0].getTimeKeys()[0];\n    let lastTimeline = null;\n    return new Timeline(timelines.reduce((joined, timeline) => {\n      const startStyle = timelines[0].getStyleManipulatorAt(firstKey);\n      const firstInTimeline = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(timeline.getFirstValues());\n      joined[firstKey.toFixed(2)] = startStyle.extend(firstInTimeline, false).toObject(false);\n      if (lastTimeline) {\n        const lastValues = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(lastTimeline.getLastValues()).toObject();\n        const sm = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(lastValues);\n        timeline.addTransform(sm.getTransformString());\n      }\n      timeline.getEntries().forEach(_ref12 => {\n        let [timeKey, propsObject] = _ref12;\n        const newKey = String((joinTime + parseFloat(timeKey)).toFixed(2));\n        if (joined[newKey]) {\n          const prevStyle = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(joined[newKey]);\n          const newStyle = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].fromObject(propsObject);\n          joined[newKey] = prevStyle.extend(newStyle).toObject(false);\n        } else {\n          joined[newKey] = propsObject;\n        }\n      });\n      joinTime += timeline.getTimeKeys().slice(-1)[0];\n      lastTimeline = timeline;\n      return joined;\n    }, {}));\n  }\n  static mix(timelines) {\n    const composition = {};\n    timelines.forEach(timeline => {\n      if (timeline.getOffset()) {\n        timeline.rawTimeline[\'0.00\'] = timeline.getFirstValues();\n      }\n      timeline.getEntries().forEach(_ref13 => {\n        let [timeKey, propsObject] = _ref13;\n        if (!composition[timeKey]) {\n          composition[timeKey] = propsObject;\n        } else {\n          const merge = {\n            ...composition[timeKey]\n          };\n          Object.entries(propsObject).forEach(_ref14 => {\n            let [property, value] = _ref14;\n            if (!merge[property]) {\n              merge[property] = value;\n            } else {\n              if (property === \'transform\') {\n                const existingTransformProps = _constants__WEBPACK_IMPORTED_MODULE_0__["SUPPORTED_TRANSFORM_PROPERTIES"].filter(tProp => {\n                  return merge.transform.includes(tProp);\n                });\n                const newTransformProps = _constants__WEBPACK_IMPORTED_MODULE_0__["SUPPORTED_TRANSFORM_PROPERTIES"].filter(tProp => {\n                  return value.includes(tProp);\n                });\n                const intersects = lodash_intersection__WEBPACK_IMPORTED_MODULE_1___default()(existingTransformProps, newTransformProps);\n                if (intersects.length) {\n                  console.error(\'Conflict in transform property animation:\', ...intersects);\n                } else {\n                  merge.transform += \' \' + value;\n                  merge.transform = _StyleManipulator__WEBPACK_IMPORTED_MODULE_2__["StyleManipulator"].sortTransform(merge.transform);\n                }\n              } else {\n                console.error(\'Conflict in property animation:\', property);\n                merge[property] = value;\n              }\n            }\n          });\n          composition[timeKey] = merge;\n          /*\n              composition[timeKey] = StyleManipulator\n                  .fromObject(composition[timeKey])\n                  .extend(StyleManipulator.fromObject(propsObject))\n                  .toObject(false);\n          */\n        }\n      });\n    });\n    return new Timeline(composition);\n  }\n}\n\n//# sourceURL=webpack:///./src/Timeline.js?'
            );
          },
          "./src/built-in-effects.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerEffects\", function() { return registerEffects; });\nfunction registerEffects(dam) {\n  // core reusable effects\n\n  // move\n\n  dam.defineEffect('translate-2d', {\n    defaultOptions: {\n      startX: 0,\n      startY: 0,\n      endX: 100,\n      endY: 100,\n      use3d: false,\n      unit: 'px'\n    },\n    tween: options => {\n      const prop = options.use3d ? 'translate3d' : 'translate';\n      const unit = options.unit;\n      return {\n        start: {\n          transform: \"\".concat(prop, \"(\").concat(options.startX).concat(unit, \",\").concat(options.startY).concat(unit).concat(options.use3d ? ',0' : '', \")\")\n        },\n        end: {\n          transform: \"\".concat(prop, \"(\").concat(options.endX).concat(unit, \",\").concat(options.endY).concat(unit).concat(options.use3d ? ',0' : '', \")\")\n        }\n      };\n    }\n  });\n  dam.defineEffect('move', {\n    defaultOptions: {\n      to: 'right'\n    },\n    timeline: options => {\n      const amount = 1000 * options.intensity;\n      const isDir = dir => options.to === dir;\n      return dam.composeTimelines({\n        'translate-2d': {\n          startX: 0,\n          startY: 0,\n          endX: (isDir('right') ? 1 : isDir('left') ? -1 : 0) * amount,\n          endY: (isDir('down') ? 1 : isDir('up') ? -1 : 0) * amount\n        }\n      });\n    }\n  });\n  dam.defineEffect('slide-in', {\n    defaultOptions: {\n      from: 'left'\n    },\n    timeline: options => {\n      return dam.composeTimelines({\n        'move': {\n          intensity: options.intensity,\n          to: options.from,\n          reverse: true\n        }\n      });\n    }\n  });\n  dam.defineEffect('slide-out', {\n    timeline: options => dam.composeTimelines({\n      'slide-in': {\n        ...options,\n        reverse: true\n      }\n    })\n  });\n\n  // rotate\n\n  dam.defineEffect('rotate-2d', {\n    defaultOptions: {\n      to: 'right',\n      start: 0,\n      end: 90,\n      use3d: false\n    },\n    tween: options => {\n      const end = options.to === 'right' ? options.end : -options.end;\n      const get = val => options.use3d ? \"rotate3d(0,0,1,\".concat(val).concat(val === 0 ? '' : 'deg', \")\") : \"rotate(\".concat(val).concat(val === 0 ? '' : 'deg', \")\");\n      return {\n        start: {\n          'transform': get(options.start)\n        },\n        end: {\n          'transform': get(end)\n        }\n      };\n    }\n  });\n  dam.defineEffect('rotate', dam._getEffect('rotate-2d'));\n  dam.defineEffect('rotate-in', {\n    defaultOptions: {\n      from: 'left'\n    },\n    timeline: options => dam.composeTimelines({\n      'rotate-2d': {\n        start: (options.from === 'left' ? -1 : 1) * 200 * options.intensity,\n        end: 0\n      }\n    })\n  });\n  dam.defineEffect('rotate-out', {\n    timeline: options => dam.composeTimelines({\n      'rotate-in': {\n        ...options,\n        reverse: true\n      }\n    })\n  });\n\n  // scale\n\n  dam.defineEffect('scale', {\n    defaultOptions: {\n      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',\n      from: 0,\n      to: 1\n    },\n    tween: _ref => {\n      let {\n        from,\n        to\n      } = _ref;\n      return {\n        start: {\n          'transform': \"scale(\".concat(from, \",\").concat(from, \")\")\n        },\n        end: {\n          'transform': \"scale(\".concat(to, \", \").concat(to, \")\")\n        }\n      };\n    }\n  });\n  dam.defineEffect('zoom-in', {\n    defaultOptions: {\n      from: 1\n    },\n    timeline: options => dam.composeTimelines({\n      'scale': {\n        from: options.from,\n        to: options.from + 2 * options.intensity\n      }\n    })\n  });\n  dam.defineEffect('zoom-out', {\n    timeline: options => dam.composeTimelines({\n      'zoom-in': {\n        ...options,\n        reverse: true\n      }\n    })\n  });\n\n  // fade\n\n  dam.defineEffect('fade', {\n    defaultOptions: {\n      from: 1,\n      to: 0\n    },\n    tween: _ref2 => {\n      let {\n        from,\n        to\n      } = _ref2;\n      return {\n        start: {\n          'opacity': from\n        },\n        end: {\n          'opacity': to\n        }\n      };\n    }\n  });\n  dam.defineEffect('fade-in', {\n    defaultOptions: {\n      from: 0\n    },\n    timeline: options => dam.composeTimelines({\n      'fade': {\n        from: options.from,\n        to: options.to || options.from + (1 - options.from) * options.intensity\n      }\n    })\n  });\n  dam.defineEffect('fade-out', {\n    defaultOptions: {\n      from: 1\n    },\n    timeline: options => dam.composeTimelines({\n      'fade': {\n        from: options.from,\n        to: options.to || options.from * (1 - options.intensity)\n      }\n    })\n  });\n\n  // color\n\n  dam.defineEffect('color-switch', {\n    defaultOptions: {\n      fromColor: '#000',\n      toColor: '#00F'\n    },\n    tween: _ref3 => {\n      let {\n        fromColor,\n        toColor\n      } = _ref3;\n      return {\n        start: {\n          color: fromColor\n        },\n        end: {\n          color: toColor\n        }\n      };\n    }\n  });\n  dam.defineEffect('bg-color-switch', {\n    defaultOptions: {\n      fromColor: '#000',\n      toColor: '#00F'\n    },\n    tween: _ref4 => {\n      let {\n        fromColor,\n        toColor\n      } = _ref4;\n      return {\n        start: {\n          'background-color': fromColor\n        },\n        end: {\n          'background-color': toColor\n        }\n      };\n    }\n  });\n\n  // complex effects\n\n  dam.defineEffect('bounce-in', {\n    defaultOptions: {\n      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',\n      from: 'left'\n    },\n    timeline: options => {\n      const sign = ['left', 'up'].includes(options.from) ? -1 : 1;\n      const axis = ['left', 'right'].includes(options.from) ? 'x' : 'y';\n      const xyVals = val => axis === 'y' ? \"0, \".concat(val * options.intensity * sign, \"px\") : \"\".concat(val * options.intensity * sign, \"px, 0\");\n      return {\n        0: {\n          transform: \"translate3d(\".concat(xyVals(3000), \", 0) scaleX(\").concat(1 + 2 * options.intensity, \")\")\n        },\n        60: {\n          transform: \"translate3d(\".concat(xyVals(-25), \", 0) scaleX(1)\")\n        },\n        75: {\n          transform: \"translate3d(\".concat(xyVals(10), \", 0) scaleX(\", 0.98, \")\")\n        },\n        100: {\n          transform: 'translate3d(0, 0, 0) scaleX(1)'\n        }\n      };\n    }\n  });\n  dam.defineEffect('bounce', {\n    defaultOptions: {\n      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'\n    },\n    timeline: _ref5 => {\n      let {\n        intensity\n      } = _ref5;\n      const round = num => Math.round((num + Number.EPSILON) * 100) / 100;\n      const scale1 = round(1 - 0.7 * intensity);\n      const scale2 = round(1 + 0.1 * intensity);\n      const scale3 = round(1 - 0.1 * intensity);\n      const scale4 = round(1 + 0.03 * intensity);\n      const scale5 = round(1 - 0.03 * intensity);\n      return {\n        0: {\n          transform: \"scale3d(\".concat(scale1, \", \").concat(scale1, \", \").concat(scale1, \")\")\n        },\n        20: {\n          transform: \"scale3d(\".concat(scale2, \", \").concat(scale2, \", \").concat(scale2, \")\")\n        },\n        40: {\n          transform: \"scale3d(\".concat(scale3, \", \").concat(scale3, \", \").concat(scale3, \")\")\n        },\n        60: {\n          transform: \"scale3d(\".concat(scale4, \", \").concat(scale4, \", \").concat(scale4, \")\")\n        },\n        80: {\n          transform: \"scale3d(\".concat(scale5, \", \").concat(scale5, \", \").concat(scale5, \")\")\n        },\n        100: {\n          transform: 'scale3d(1, 1, 1)'\n        }\n      };\n    }\n  });\n  dam.defineEffect('jello', {\n    defaultOptions: {\n      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'\n    },\n    timeline: _ref6 => {\n      let {\n        intensity\n      } = _ref6;\n      return {\n        '0': {\n          transform: \"skewX(\".concat(-12.5 * intensity, \"deg) skewY(\").concat(-12.5 * intensity, \"deg)\")\n        },\n        '16.66': {\n          transform: \"skewX(\".concat(6.25 * intensity, \"deg) skewY(\").concat(6.25 * intensity, \"deg)\")\n        },\n        '33.33': {\n          transform: \"skewX(\".concat(-3.125 * intensity, \"deg) skewY(\").concat(-3.125 * intensity, \"deg)\")\n        },\n        '50': {\n          transform: \"skewX(\".concat(1.5625 * intensity, \"deg) skewY(\").concat(1.5625 * intensity, \"deg)\")\n        },\n        '66.66': {\n          transform: \"skewX(\".concat(-0.78125 * intensity, \"deg) skewY(\").concat(-0.78125 * intensity, \"deg)\")\n        },\n        '83.33': {\n          transform: \"skewX(\".concat(0.390625 * intensity, \"deg) skewY(\").concat(0.390625 * intensity, \"deg)\")\n        },\n        '100.00': {\n          transform: 'skewX(0deg) skewY(0deg)'\n        }\n      };\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/built-in-effects.js?"
            );
          },
          "./src/constants.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Trigger\", function() { return Trigger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Driver\", function() { return Driver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANIMATION_COMPOSITION_TYPE\", function() { return ANIMATION_COMPOSITION_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANIM_DATA_ATTR\", function() { return ANIM_DATA_ATTR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MASTER_DEFAULT_OPTIONS\", function() { return MASTER_DEFAULT_OPTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUPPORTED_TRANSFORM_PROPERTIES\", function() { return SUPPORTED_TRANSFORM_PROPERTIES; });\nconst Engine = {\n  SCENE: 'scenejs',\n  ANIME: 'animejs'\n};\nconst Trigger = {\n  ENTRANCE: 'entrance',\n  ALWAYS: 'always',\n  HOVER: 'hover'\n};\nconst Driver = {\n  MOUSE_PROXIMITY: 'mouse-proximity',\n  VIEWPORT: 'viewport'\n};\nconst ANIMATION_COMPOSITION_TYPE = {\n  ATOMIC: 'atomic',\n  MIX: 'mix',\n  JOIN: 'join'\n};\nconst ANIM_DATA_ATTR = 'data-anim-descriptor';\nconst MASTER_DEFAULT_OPTIONS = {\n  intensity: 1,\n  duration: 1,\n  delay: 0,\n  yoyo: false,\n  loop: false,\n  reverse: false,\n  arrive: false,\n  easing: 'cubic-bezier(0.42, 0, 0.58, 1)',\n  relative: false,\n  proximityThreshold: 1000,\n  viewportThresholds: {\n    top: 0,\n    bottom: 0\n  }\n};\nconst SUPPORTED_TRANSFORM_PROPERTIES = ['translate', 'translate3d', 'translateX', 'translateY', 'translateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'];\n\n//# sourceURL=webpack:///./src/constants.js?"
            );
          },
          "./src/helpers.js": function (
            module,
            __webpack_exports__,
            __webpack_require__
          ) {
            "use strict";
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementInViewport\", function() { return isElementInViewport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScrollParent\", function() { return getScrollParent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDocumentScrollingElement\", function() { return getDocumentScrollingElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElementOriginalBoundingRect\", function() { return getElementOriginalBoundingRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUniqueName\", function() { return getUniqueName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsArray\", function() { return getAsArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValue\", function() { return getValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\nfunction isElementInViewport(element) {\n  let proximity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  let ignoreSides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  try {\n    const win = element.ownerDocument.defaultView;\n    const rect = getElementOriginalBoundingRect(element);\n    const isInViewportHorizontally = -rect.width < rect.left + proximity && rect.left - proximity <= win.innerWidth;\n    const isInViewportVertically = -rect.height < rect.top + proximity && rect.top - proximity <= win.innerHeight;\n    return (ignoreSides || isInViewportHorizontally) && isInViewportVertically;\n  } catch (err) {\n    return false;\n  }\n}\nfunction getScrollParent(element) {\n  let includeHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  let style = getComputedStyle(element);\n  const excludeStaticParent = style.position === 'absolute';\n  const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;\n  if (style.position === 'fixed') return getDocumentScrollingElement();\n  for (let parent = element; parent = parent.parentElement;) {\n    style = getComputedStyle(parent);\n    if (excludeStaticParent && style.position === 'static') {\n      continue;\n    }\n    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {\n      let scrollable = true;\n      if (parent.scrollTop === 0) {\n        parent.scrollTop = 1;\n        if (parent.scrollTop === 0) {\n          scrollable = false;\n        } else {\n          parent.scrollTop = 0;\n        }\n      }\n      if (scrollable) {\n        return parent === document.body ? getDocumentScrollingElement() : parent;\n      }\n    }\n  }\n  return getDocumentScrollingElement();\n}\nfunction getDocumentScrollingElement() {\n  return document.scrollingElement || document.documentElement || document.body;\n}\nfunction getElementOriginalBoundingRect(elem) {\n  if (!isUndefined(elem.originalElementStyle)) {\n    const tempStyle = elem.getAttribute('style');\n    elem.setAttribute('style', elem.originalElementStyle);\n    const rect = elem.getBoundingClientRect();\n    if (tempStyle === 'null') {\n      elem.removeAttribute('style');\n    } else {\n      elem.setAttribute('style', tempStyle);\n    }\n    return rect;\n  }\n  return elem.getBoundingClientRect();\n}\nfunction getUniqueName(name, isUnique) {\n  if (!isUnique(name)) {\n    let _name = name + '-2';\n    for (let i = 3; !isUnique(_name); i++) {\n      _name = name + \"-\".concat(i);\n    }\n    return _name;\n  }\n  return name;\n}\nfunction getAsArray(item) {\n  return Array.isArray(item) ? item : [item];\n}\nconst getType = value => Object.prototype.toString.call(value).match(/^\\[object\\s(.*)\\]$/)[1];\nconst isFunction = value => getType(value) === 'Function';\nconst isString = value => getType(value) === 'String';\nfunction isObject(value) {\n  const type = typeof value;\n  return value != null && (type === 'object' || type === 'function');\n}\nconst getValue = (valOrFunc, arg) => {\n  return isFunction(valOrFunc) ? getValue(valOrFunc(arg), arg) : valOrFunc;\n};\nconst isUndefined = val => val === undefined;\n\n//# sourceURL=webpack:///./src/helpers.js?"
            );
          },
        },
      ]);
    },
    8486: (module, __unused_webpack_exports, __webpack_require__) => {
      var factory;
      window,
        (factory = function (
          __WEBPACK_EXTERNAL_MODULE_lodash_clonedeep__,
          __WEBPACK_EXTERNAL_MODULE_lodash_trim__,
          __WEBPACK_EXTERNAL_MODULE_scenejs__
        ) {
          return (function (e) {
            function n(n) {
              for (
                var r, s, o = n[0], c = n[1], l = n[2], f = 0, m = [];
                f < o.length;
                f++
              )
                (s = o[f]),
                  Object.prototype.hasOwnProperty.call(i, s) &&
                    i[s] &&
                    m.push(i[s][0]),
                  (i[s] = 0);
              for (r in c)
                Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
              for (u && u(n); m.length; ) m.shift()();
              return a.push.apply(a, l || []), t();
            }
            function t() {
              for (var e, n = 0; n < a.length; n++) {
                for (var t = a[n], r = !0, o = 1; o < t.length; o++) {
                  var c = t[o];
                  0 !== i[c] && (r = !1);
                }
                r && (a.splice(n--, 1), (e = s((s.s = t[0]))));
              }
              return e;
            }
            var r = {},
              i = { scene: 0 },
              a = [];
            function s(n) {
              if (r[n]) return r[n].exports;
              var t = (r[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(t.exports, t, t.exports, s), (t.l = !0), t.exports
              );
            }
            (s.m = e),
              (s.c = r),
              (s.d = function (e, n, t) {
                s.o(e, n) ||
                  Object.defineProperty(e, n, { enumerable: !0, get: t });
              }),
              (s.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (s.t = function (e, n) {
                if ((1 & n && (e = s(e)), 8 & n)) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule)
                  return e;
                var t = Object.create(null);
                if (
                  (s.r(t),
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & n && "string" != typeof e)
                )
                  for (var r in e)
                    s.d(
                      t,
                      r,
                      function (n) {
                        return e[n];
                      }.bind(null, r)
                    );
                return t;
              }),
              (s.n = function (e) {
                var n =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return s.d(n, "a", n), n;
              }),
              (s.o = function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
              }),
              (s.p = "");
            var o = (window.webpackJsonp = window.webpackJsonp || []),
              c = o.push.bind(o);
            (o.push = n), (o = o.slice());
            for (var l = 0; l < o.length; l++) n(o[l]);
            var u = c;
            return a.push(["./src/index-scene.js", "core"]), t();
          })({
            "./src/SceneEngine.js": function (
              module,
              __webpack_exports__,
              __webpack_require__
            ) {
              "use strict";
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneEngine", function() { return SceneEngine; });\n/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine */ "./src/Engine.js");\n/* harmony import */ var scenejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scenejs */ "scenejs");\n/* harmony import */ var scenejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scenejs__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\nclass SceneEngine extends _Engine__WEBPACK_IMPORTED_MODULE_0__["Engine"] {\n  static getUniqueID() {\n    return (Date.now().toString(36).substr(-3) + Math.random().toString(36).substr(2, 5)).toUpperCase();\n  }\n  constructor(instance) {\n    super(instance);\n    _defineProperty(this, "onIteration", () => {\n      this.instance._onIteration();\n    });\n    _defineProperty(this, "onTimeUpdate", () => {\n      this.instance._onUpdate();\n    });\n    _defineProperty(this, "onEnded", () => {\n      this.seek(this.getAnimation().getDuration());\n      this._resetCSSAnim();\n      this._removeClass();\n      this._removeStyleSheet();\n      this.instance._onEnd();\n    });\n    this.create();\n  }\n  create() {\n    if (this.isPlaying()) {\n      this.pause();\n    }\n    const timeline = this.instance._getTimeline();\n    this.cleanElement();\n    this.className = \'running-animation-\' + SceneEngine.getUniqueID();\n    this._addClass();\n    const options = this.getAnimation().getOptions();\n    this.ref = new scenejs__WEBPACK_IMPORTED_MODULE_1___default.a({\n      [".".concat(this.className)]: timeline.rawTimeline\n    }, {\n      selector: true,\n      id: this.className,\n      easing: options.easing,\n      direction: options.yoyo ? \'alternate\' : \'normal\',\n      duration: this.getAnimation().getDuration(),\n      iterationCount: this._shouldLoop() ? \'infinite\' : 1\n    });\n    this.ref.on(\'timeupdate\', this.onTimeUpdate);\n    this.ref.on(\'iteration\', this.onIteration);\n    this.ref.on(\'ended\', this.onEnded);\n  }\n  update() {\n    this.create();\n  }\n  play() {\n    if (this.isPlaying()) {\n      return;\n    } else if (this.getTime() === this.getAnimation().getDuration()) {\n      this.seek(0);\n    }\n    this._addClass();\n    this._resetCSSAnim();\n    if (this._canPlayCSS()) {\n      this.ref.playCSS();\n    } else {\n      this.ref.play();\n    }\n  }\n  _canPlayCSS() {\n    return this.getAnimation()._isAtomic && !this._shouldLoop() && !SceneEngine.cssAnimationDisabled;\n  }\n  static disableCSSAnimation() {\n    this.cssAnimationDisabled = true;\n  }\n  static enableCSSAnimation() {\n    this.cssAnimationDisabled = false;\n  }\n  pause() {\n    if (this._canPlayCSS()) {\n      this.ref.pauseCSS();\n    } else {\n      this.ref.pause();\n    }\n  }\n  _resetCSSAnim() {\n    let restore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    const targetElement = this.getTargetElement();\n    [\'startAnimation\', \'pauseAnimation\'].forEach(className => {\n      if (targetElement.classList.contains(className)) {\n        targetElement.classList.remove(className);\n      }\n    });\n    if (restore) {\n      this.instance._restoreElementStyle();\n    }\n  }\n  _removeStyleSheet() {\n    if (!this.ref) return;\n    const styleSheet = document.querySelector("#__SCENEJS_STYLE_".concat(this.ref.getId()));\n    if (styleSheet) {\n      styleSheet.remove();\n    }\n  }\n  seek(time) {\n    this._resetCSSAnim();\n    this.ref.setTime(time);\n  }\n  getTime() {\n    return this.ref.getTime();\n  }\n  isPlaying() {\n    return this.ref && this.ref.getPlayState() === \'running\';\n  }\n  kill() {\n    this._resetCSSAnim(true);\n    this._removeClass();\n    this._removeStyleSheet();\n  }\n  _addClass() {\n    const targetElement = this.getTargetElement();\n    if (!targetElement.classList.contains(this.className)) {\n      targetElement.classList.add(this.className);\n    }\n  }\n  cleanElement() {\n    this._resetCSSAnim(true);\n    this._removeClass();\n    this._removeStyleSheet();\n  }\n  _removeClass() {\n    const targetElement = this.getTargetElement();\n    if (targetElement.classList.contains(this.className)) {\n      targetElement.classList.remove(this.className);\n      if (!targetElement.classList.length) {\n        targetElement.removeAttribute(\'class\');\n      }\n    }\n  }\n}\n_defineProperty(SceneEngine, "cssAnimationDisabled", true);\n\n//# sourceURL=webpack:///./src/SceneEngine.js?'
              );
            },
            "./src/index-scene.js": function (
              module,
              __webpack_exports__,
              __webpack_require__
            ) {
              "use strict";
              eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SceneEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneEngine */ "./src/SceneEngine.js");\n/* harmony import */ var _DudaAnimationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DudaAnimationManager */ "./src/DudaAnimationManager.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DudaAnimationManager", function() { return _DudaAnimationManager__WEBPACK_IMPORTED_MODULE_1__["DudaAnimationManager"]; });\n\n\n\n_DudaAnimationManager__WEBPACK_IMPORTED_MODULE_1__["DudaAnimationManager"].SceneEngine = _SceneEngine__WEBPACK_IMPORTED_MODULE_0__["SceneEngine"];\n\n\n//# sourceURL=webpack:///./src/index-scene.js?'
              );
            },
            "lodash.clonedeep": function (module, exports) {
              eval(
                "module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_clonedeep__;\n\n//# sourceURL=webpack:///external_%22lodash.clonedeep%22?"
              );
            },
            "lodash.trim": function (module, exports) {
              eval(
                "module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;\n\n//# sourceURL=webpack:///external_%22lodash.trim%22?"
              );
            },
            scenejs: function (module, exports) {
              eval(
                "module.exports = __WEBPACK_EXTERNAL_MODULE_scenejs__;\n\n//# sourceURL=webpack:///external_%22scenejs%22?"
              );
            },
          });
        }),
        (module.exports = factory(
          __webpack_require__(7193),
          __webpack_require__(5814),
          __webpack_require__(5398)
        ));
    },
    3254: (e, n, t) => {
      "use strict";
      t.d(n, { QM: () => o, z1: () => p, a1: () => h, oe: () => d });
      var r = t(5617);
      const i = {
          DESKTOP: "desktop",
          TABLET: "tablet",
          MOBILE: "mobile",
          ALL: "all",
        },
        { str: a } = r.localization,
        s = { ENTRANCE: "entrance", VIEWPORT: "viewport" },
        o = "data-anim-extended",
        c = Object.values(s);
      function l(e) {
        try {
          return a(e);
        } catch (e) {
          return "";
        }
      }
      function u(e) {
        return (
          void 0 === e && (e = 1),
          { effect: "fade-in", options: { intensity: 1, duration: e } }
        );
      }
      function f(e, n) {
        return void 0 === n && (n = 1), { mix: [u(n), e] };
      }
      function m(e) {
        let { from: n, ...t } = e;
        const r = 100 * (t.intensity || 1);
        return {
          effect: "translate-2d",
          options: {
            use3d: !0,
            unit: "%",
            startX:
              "up" === n || "down" === n ? 0 : r * ("right" === n ? 1 : -1),
            endX: 0,
            startY: "up" === n || "down" === n ? r * ("up" === n ? 1 : -1) : 0,
            endY: 0,
          },
        };
      }
      function _(e) {
        const n = e?.intensity || 1;
        return f(
          {
            effect: "scale",
            options: { from: n <= 1 ? 0.3 + 0.7 * (1 - n) : 0.3 / n, to: 1 },
          },
          0.5
        );
      }
      const p = [
        {
          presetKey: "none",
          triggers: c,
          name: l("ui.none"),
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "fadeInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Fade_in"),
          reversibleName: l("ui.animations.new.presets.combo.Fade"),
          damDescriptor: (e) =>
            "in-place" === e.dir
              ? u(e.duration)
              : (function (e) {
                  let { dir: n, ...t } = e;
                  return f(m({ from: n, ...t }));
                })(e),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "in-place",
                  label: l("ui.animations.new.directions.In_place"),
                },
                {
                  value: "right",
                  label: l("ui.animations.new.directions.From_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_right.reversed"
                  ),
                },
                {
                  value: "left",
                  label: l("ui.animations.new.directions.From_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_left.reversed"
                  ),
                },
                {
                  value: "up",
                  label: l("ui.animations.new.directions.From_bottom"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom.reversed"
                  ),
                },
                {
                  value: "down",
                  label: l("ui.animations.new.directions.From_top"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "fadeIn",
          triggers: c,
          name: l("ui.animations.new.presets.Fade_in"),
          equivalent: {
            presetKey: "fadeInCombo",
            options: { dir: "in-place" },
          },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "fadeInRight",
          triggers: c,
          name: l("ui.animations.new.presets.Fade_in_from_Right"),
          equivalent: { presetKey: "fadeInCombo", options: { dir: "right" } },
        },
        {
          presetKey: "fadeInLeft",
          triggers: c,
          name: l("ui.animations.new.presets.Fade_in_from_Left"),
          equivalent: { presetKey: "fadeInCombo", options: { dir: "left" } },
        },
        {
          presetKey: "fadeInUp",
          triggers: c,
          name: l("ui.animations.new.presets.Fade_in_from_Bottom"),
          equivalent: { presetKey: "fadeInCombo", options: { dir: "up" } },
        },
        {
          presetKey: "slideInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Slide_in"),
          reversibleName: l("ui.animations.new.presets.combo.Slide"),
          damDescriptor: (e) => m({ from: e.dir, ...e }),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "right",
                  label: l("ui.animations.new.directions.From_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_right.reversed"
                  ),
                },
                {
                  value: "left",
                  label: l("ui.animations.new.directions.From_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_left.reversed"
                  ),
                },
                {
                  value: "up",
                  label: l("ui.animations.new.directions.From_bottom"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom.reversed"
                  ),
                },
                {
                  value: "down",
                  label: l("ui.animations.new.directions.From_top"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "slideInRight",
          triggers: c,
          name: l("ui.animations.new.presets.Slide_in_from_right"),
          equivalent: { presetKey: "slideInCombo", options: { dir: "right" } },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "slideInLeft",
          triggers: c,
          name: l("ui.animations.new.presets.Slide_in_from_left"),
          equivalent: { presetKey: "slideInCombo", options: { dir: "left" } },
        },
        {
          presetKey: "slideInDown",
          triggers: c,
          name: l("ui.animations.new.presets.Slide_in_from_top"),
          equivalent: { presetKey: "slideInCombo", options: { dir: "down" } },
        },
        {
          presetKey: "slideInUp",
          triggers: c,
          name: l("ui.animations.new.presets.Slide_in_from_bottom"),
          equivalent: { presetKey: "slideInCombo", options: { dir: "up" } },
        },
        {
          presetKey: "bounceInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Bounce_in"),
          reversibleName: l("ui.animations.new.presets.combo.bounce"),
          damDescriptor: (e) =>
            (function (e) {
              let { dir: n, ...t } = e;
              return f(
                {
                  effect: "in-place" === n ? "bounce" : "bounce-in",
                  options: {
                    from: "in-place" === n ? "" : n,
                    intensity: t.intensity || 1,
                    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                  },
                },
                0.6
              );
            })(e),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "in-place",
                  label: l("ui.animations.new.directions.In_place"),
                },
                {
                  value: "right",
                  label: l("ui.animations.new.directions.From_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_right.reversed"
                  ),
                },
                {
                  value: "left",
                  label: l("ui.animations.new.directions.From_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_left.reversed"
                  ),
                },
                {
                  value: "down",
                  label: l("ui.animations.new.directions.From_bottom"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom.reversed"
                  ),
                },
                {
                  value: "up",
                  label: l("ui.animations.new.directions.From_top"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "bounceIn",
          triggers: c,
          name: l("ui.animations.new.presets.Bounce_In"),
          equivalent: {
            presetKey: "bounceInCombo",
            options: { dir: "in-place" },
          },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "bounceInRight",
          triggers: c,
          name: l("ui.animations.new.presets.Bounce_in_from_Right"),
          equivalent: { presetKey: "bounceInCombo", options: { dir: "right" } },
        },
        {
          presetKey: "bounceInLeft",
          triggers: c,
          name: l("ui.animations.new.presets.Bounce_in_from_Left"),
          equivalent: { presetKey: "bounceInCombo", options: { dir: "left" } },
        },
        {
          presetKey: "rotateInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Rotate_in"),
          reversibleName: l("ui.animations.new.presets.combo.Rotate"),
          damDescriptor: (e) =>
            (function (e) {
              let n, t;
              switch (e.dir) {
                case "topRight":
                  (n = -45), (t = "left bottom");
                  break;
                case "topLeft":
                  (n = 45), (t = "right bottom");
                  break;
                case "bottomRight":
                  (n = 45), (t = "left bottom");
                  break;
                case "bottomLeft":
                  (n = -90), (t = "right bottom");
                  break;
                default:
                  (n = -200), (t = "center");
              }
              return (function (e, n) {
                return (
                  void 0 === n && (n = "center"),
                  f({
                    effect: {
                      timeline: {
                        0: {
                          transform: `rotate3d(0, 0, 1, ${e}deg)`,
                          "transform-origin": `${n}`,
                        },
                        100: { transform: "rotate3d(0, 0, 1, 0deg)" },
                      },
                    },
                  })
                );
              })(n * (e.intensity || 1), t);
            })(e),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "in-place",
                  label: l("ui.animations.new.directions.In_place"),
                },
                {
                  value: "topRight",
                  label: l("ui.animations.new.directions.From_top_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top_right.reversed"
                  ),
                },
                {
                  value: "topLeft",
                  label: l("ui.animations.new.directions.From_top_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top_left.reversed"
                  ),
                },
                {
                  value: "bottomRight",
                  label: l("ui.animations.new.directions.From_bottom_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom_right.reversed"
                  ),
                },
                {
                  value: "bottomLeft",
                  label: l("ui.animations.new.directions.From_bottom_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom_left.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "rotateIn",
          triggers: c,
          name: l("ui.animations.new.presets.RotateIn"),
          equivalent: {
            presetKey: "rotateInCombo",
            options: { dir: "in-place" },
          },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "rotateInDownLeft",
          triggers: c,
          name: l("ui.animations.new.presets.Rotate_in_from_top_right"),
          equivalent: {
            presetKey: "rotateInCombo",
            options: { dir: "topRight" },
          },
        },
        {
          presetKey: "rotateInDownRight",
          triggers: c,
          name: l("ui.animations.new.presets.Rotate_in_from_top_left"),
          equivalent: {
            presetKey: "rotateInCombo",
            options: { dir: "topLeft" },
          },
        },
        {
          presetKey: "rotateInUpLeft",
          triggers: c,
          name: l("ui.animations.new.presets.Rotate_in_from_bottom_right"),
          equivalent: {
            presetKey: "rotateInCombo",
            options: { dir: "bottomRight" },
          },
        },
        {
          presetKey: "rotateInUpRight",
          triggers: c,
          name: l("ui.animations.new.presets.Rotate_in_from_bottom_left"),
          equivalent: {
            presetKey: "rotateInCombo",
            options: { dir: "bottomLeft" },
          },
        },
        {
          presetKey: "rollInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Roll_in"),
          reversibleName: l("ui.animations.new.presets.combo.Roll"),
          damDescriptor: (e) =>
            (function (e) {
              const n = e?.intensity || 1,
                t = "right" === e.dir ? 1 : -1;
              return f({
                effect: {
                  timeline: {
                    0: {
                      transform: `translate3d(${
                        100 * t * n
                      }%, 0px, 0px) rotate3d(0, 0, 1, ${120 * t * n}deg)`,
                    },
                    100: {
                      transform:
                        "translate3d(0%, 0px, 0px)  rotate3d(0, 0, 1, 0deg)",
                    },
                  },
                },
              });
            })(e),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "right",
                  label: l("ui.animations.new.directions.From_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_right.reversed"
                  ),
                },
                {
                  value: "left",
                  label: l("ui.animations.new.directions.From_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_left.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "rollInFromRight",
          triggers: c,
          name: l("ui.animations.new.presets.Roll_in_from_right"),
          equivalent: { presetKey: "rollInCombo", options: { dir: "right" } },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "rollInFromLeft",
          name: l("ui.animations.new.presets.Roll_in_from_left"),
          equivalent: { presetKey: "rollInCombo", options: { dir: "left" } },
        },
        {
          presetKey: "zoomIn",
          triggers: c,
          name: l("ui.animations.new.presets.Zoom_In"),
          equivalent: {
            presetKey: "zoomInCombo",
            options: { dir: "in-place" },
          },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "zoomInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.Zoom_In"),
          reversibleName: l("ui.animations.new.presets.combo.Zoom"),
          damDescriptor: (e) =>
            "in-place" === e.dir
              ? _(e)
              : (function (e) {
                  let { dir: n, ...t } = e;
                  return (r = m({ from: n, ...t })), { mix: [_(), r] };
                  var r;
                })(e),
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                {
                  value: "in-place",
                  label: l("ui.animations.new.directions.In_place"),
                },
                {
                  value: "right",
                  label: l("ui.animations.new.directions.From_right"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_right.reversed"
                  ),
                },
                {
                  value: "left",
                  label: l("ui.animations.new.directions.From_left"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_left.reversed"
                  ),
                },
                {
                  value: "up",
                  label: l("ui.animations.new.directions.From_bottom"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_bottom.reversed"
                  ),
                },
                {
                  value: "down",
                  label: l("ui.animations.new.directions.From_top"),
                  reversedLabel: l(
                    "ui.animations.new.directions.From_top.reversed"
                  ),
                },
              ],
            },
          ],
        },
        {
          presetKey: "flipInHorizontally",
          triggers: c,
          name: l("ui.animations.new.presets.Flip_in_horizontally"),
          equivalent: { presetKey: "flipInCombo", options: { dir: "X" } },
          visibleOnQuickMenu: !0,
        },
        {
          presetKey: "flipInCombo",
          triggers: c,
          name: l("ui.animations.new.presets.combo.flip_in"),
          reversibleName: l("ui.animations.new.presets.combo.Flip"),
          damDescriptor: (e) =>
            (function (e) {
              const n = e.intensity || 1,
                t = e.dir,
                r = ["Y" === t, "X" === t, !1]
                  .map((e) => (e ? 1 : 0))
                  .join(","),
                i = 90 * n;
              return f(
                {
                  effect: {
                    timeline: {
                      0: { transform: `rotate3d(${r}, -${i}deg)` },
                      33: { transform: `rotate3d(${r}, -${i / 3}deg)` },
                      66: { transform: `rotate3d(${r}, -${i / 9}deg)` },
                      100: { transform: `rotate3d(${r}, 0deg)` },
                    },
                  },
                },
                0.6
              );
            })(e),
          defaultValues: { viewportThresholds: { bottom: 40 } },
          additionalOptions: [
            {
              optionName: "dir",
              optionLabel: l("ui.animations.new.presets.label.Direction"),
              values: [
                { value: "X", label: l("ui.animations.new.directions.flipX") },
                { value: "Y", label: l("ui.animations.new.directions.flipY") },
              ],
            },
          ],
        },
        {
          presetKey: "flash",
          name: l("ui.animations.new.presets.combo.flash"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1;
            let t = Math.max(3, Math.floor(5 * n));
            t % 2 == 0 && t++;
            const r = 100 / (t - 1),
              i = {};
            let a = 1;
            for (let e = 0; e < t; e++)
              (i[e === t - 1 ? 100 : e * r] = { opacity: a }), (a ^= 1);
            return { effect: { timeline: i } };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "pulse",
          name: l("ui.animations.new.presets.combo.pulse"),
          damDescriptor: function (e) {
            const n = 1 + 0.03 * (e?.intensity || 1);
            return {
              effect: {
                timeline: {
                  0: { transform: "scale3d(1, 1, 1)" },
                  50: { transform: `scale3d(${n}, ${n}, ${n})` },
                  100: { transform: "scale3d(1, 1, 1)" },
                },
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "rubberBand",
          name: l("ui.animations.new.presets.combo.rubberBand"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1;
            return {
              effect: {
                timeline: [
                  { stepTime: 0, scaleDiff: [0, 0, 0] },
                  { stepTime: 30, scaleDiff: [0.25, -0.25, 0] },
                  { stepTime: 40, scaleDiff: [-0.25, 0.25, 0] },
                  { stepTime: 50, scaleDiff: [0.15, -0.15, 0] },
                  { stepTime: 65, scaleDiff: [-0.05, 0.05, 0] },
                  { stepTime: 75, scaleDiff: [0.05, -0.05, 0] },
                  { stepTime: 100, scaleDiff: [0, 0, 0] },
                ].reduce((e, t) => {
                  const r = t.scaleDiff.map((e) => e * n + 1).join(",");
                  return (e[t.stepTime] = { transform: `scale3d(${r})` }), e;
                }, {}),
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "shake",
          name: l("ui.animations.new.presets.combo.shake"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1,
              t = [
                { translateX: 0 },
                { translateX: -10 },
                { translateX: 10 },
                { translateX: -10 },
                { translateX: 10 },
                { translateX: -10 },
                { translateX: 10 },
                { translateX: -10 },
                { translateX: 10 },
                { translateX: -10 },
                { translateX: 0 },
              ],
              r = 100 / (t.length - 1);
            return {
              effect: {
                timeline: t.reduce(
                  (e, t, i) => (
                    (e[i * r] = {
                      transform: `translate3d(${t.translateX * n}px, 0, 0)`,
                    }),
                    e
                  ),
                  {}
                ),
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "swing",
          name: l("ui.animations.new.presets.combo.swing"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1;
            return {
              effect: {
                timeline: [
                  { rotate: 0, startTime: 0 },
                  { rotate: 15, startTime: 20 },
                  { rotate: -10, startTime: 40 },
                  { rotate: 5, startTime: 60 },
                  { rotate: -5, startTime: 80 },
                  { rotate: 0, startTime: 100 },
                ].reduce(
                  (e, t) => (
                    (e[t.startTime] = {
                      transform: `rotate3d(0, 0, 1, ${t.rotate * n}deg)`,
                    }),
                    e
                  ),
                  {}
                ),
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "tada",
          name: l("ui.animations.new.presets.combo.tada"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1,
              t = [
                { rotate: 0 },
                { scaleSign: "-", rotate: -3 },
                { scaleSign: "-", rotate: -3 },
                { scaleSign: "+", rotate: 3 },
                { scaleSign: "+", rotate: -3 },
                { scaleSign: "+", rotate: 3 },
                { scaleSign: "+", rotate: -3 },
                { scaleSign: "+", rotate: 3 },
                { scaleSign: "+", rotate: -3 },
                { scaleSign: "+", rotate: 3 },
                { scaleSign: 1, rotate: 0 },
              ],
              r = 100 / (t.length - 1);
            return {
              effect: {
                timeline: t.reduce((e, t, i) => {
                  let a = 1;
                  switch (t.scaleSign) {
                    case "-":
                      a -= n / 10;
                      break;
                    case "+":
                      a += n / 10;
                  }
                  const s = `scale3d(${a}, ${a}, ${a})`,
                    o = `rotate3d(0, 0, 1, ${t.rotate * n}deg)`;
                  return (e[r * i] = { transform: `${s} ${o}` }), e;
                }, {}),
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
        {
          presetKey: "wobble",
          name: l("ui.animations.new.presets.combo.wobble"),
          damDescriptor: function (e) {
            const n = e?.intensity || 1;
            return {
              effect: {
                timeline: [
                  { xTranslate: 0, rotate: 0, startTime: 0 },
                  { xTranslate: -25, rotate: -5, startTime: 15 },
                  { xTranslate: 20, rotate: 3, startTime: 30 },
                  { xTranslate: -15, rotate: -3, startTime: 45 },
                  { xTranslate: 10, rotate: 2, startTime: 60 },
                  { xTranslate: -5, rotate: -1, startTime: 75 },
                  { xTranslate: 0, rotate: 0, startTime: 100 },
                ].reduce(
                  (e, t) => (
                    (e[t.startTime] = {
                      transform: `translate3d(${
                        t.xTranslate * n
                      }%, 0px, 0px) rotate3d(0, 0, 1, ${t.rotate * n}deg)`,
                    }),
                    e
                  ),
                  {}
                ),
              },
            };
          },
          triggers: [s.ENTRANCE],
        },
      ];
      function h(e) {
        return (n = e.getAttribute(o)) ? JSON.parse(atob(n)) : null;
        var n;
      }
      function d(e, n) {
        const t = e?.[n] || e?.[n === i.TABLET ? i.DESKTOP : n] || {},
          r = { ...t };
        return (
          delete r.animation,
          delete r.trigger,
          { animation: t.animation, trigger: t.trigger, options: r }
        );
      }
    },
    7193: (e, n, t) => {
      e = t.nmd(e);
      var r = "__lodash_hash_undefined__",
        i = 9007199254740991,
        a = "[object Arguments]",
        s = "[object Boolean]",
        o = "[object Date]",
        c = "[object Function]",
        l = "[object GeneratorFunction]",
        u = "[object Map]",
        f = "[object Number]",
        m = "[object Object]",
        _ = "[object Promise]",
        p = "[object RegExp]",
        h = "[object Set]",
        d = "[object String]",
        g = "[object Symbol]",
        v = "[object WeakMap]",
        y = "[object ArrayBuffer]",
        b = "[object DataView]",
        E = "[object Float32Array]",
        O = "[object Float64Array]",
        w = "[object Int8Array]",
        T = "[object Int16Array]",
        A = "[object Int32Array]",
        P = "[object Uint8Array]",
        M = "[object Uint8ClampedArray]",
        I = "[object Uint16Array]",
        D = "[object Uint32Array]",
        S = /\w*$/,
        j = /^\[object .+?Constructor\]$/,
        k = /^(?:0|[1-9]\d*)$/,
        x = {};
      (x[a] =
        x["[object Array]"] =
        x[y] =
        x[b] =
        x[s] =
        x[o] =
        x[E] =
        x[O] =
        x[w] =
        x[T] =
        x[A] =
        x[u] =
        x[f] =
        x[m] =
        x[p] =
        x[h] =
        x[d] =
        x[g] =
        x[P] =
        x[M] =
        x[I] =
        x[D] =
          !0),
        (x["[object Error]"] = x[c] = x[v] = !1);
      var C = "object" == typeof t.g && t.g && t.g.Object === Object && t.g,
        R = "object" == typeof self && self && self.Object === Object && self,
        L = C || R || Function("return this")(),
        K = n && !n.nodeType && n,
        N = K && e && !e.nodeType && e,
        U = N && N.exports === K;
      function F(e, n) {
        return e.set(n[0], n[1]), e;
      }
      function B(e, n) {
        return e.add(n), e;
      }
      function W(e, n, t, r) {
        var i = -1,
          a = e ? e.length : 0;
        for (r && a && (t = e[++i]); ++i < a; ) t = n(t, e[i], i, e);
        return t;
      }
      function q(e) {
        var n = !1;
        if (null != e && "function" != typeof e.toString)
          try {
            n = !!(e + "");
          } catch (e) {}
        return n;
      }
      function V(e) {
        var n = -1,
          t = Array(e.size);
        return (
          e.forEach(function (e, r) {
            t[++n] = [r, e];
          }),
          t
        );
      }
      function $(e, n) {
        return function (t) {
          return e(n(t));
        };
      }
      function X(e) {
        var n = -1,
          t = Array(e.size);
        return (
          e.forEach(function (e) {
            t[++n] = e;
          }),
          t
        );
      }
      var H,
        Y = Array.prototype,
        z = Function.prototype,
        J = Object.prototype,
        Z = L["__core-js_shared__"],
        G = (H = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + H
          : "",
        Q = z.toString,
        ee = J.hasOwnProperty,
        ne = J.toString,
        te = RegExp(
          "^" +
            Q.call(ee)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        re = U ? L.Buffer : void 0,
        ie = L.Symbol,
        ae = L.Uint8Array,
        se = $(Object.getPrototypeOf, Object),
        oe = Object.create,
        ce = J.propertyIsEnumerable,
        le = Y.splice,
        ue = Object.getOwnPropertySymbols,
        fe = re ? re.isBuffer : void 0,
        me = $(Object.keys, Object),
        _e = Le(L, "DataView"),
        pe = Le(L, "Map"),
        he = Le(L, "Promise"),
        de = Le(L, "Set"),
        ge = Le(L, "WeakMap"),
        ve = Le(Object, "create"),
        ye = Be(_e),
        be = Be(pe),
        Ee = Be(he),
        Oe = Be(de),
        we = Be(ge),
        Te = ie ? ie.prototype : void 0,
        Ae = Te ? Te.valueOf : void 0;
      function Pe(e) {
        var n = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function Me(e) {
        var n = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function Ie(e) {
        var n = -1,
          t = e ? e.length : 0;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function De(e) {
        this.__data__ = new Me(e);
      }
      function Se(e, n, t) {
        var r = e[n];
        (ee.call(e, n) && We(r, t) && (void 0 !== t || n in e)) || (e[n] = t);
      }
      function je(e, n) {
        for (var t = e.length; t--; ) if (We(e[t][0], n)) return t;
        return -1;
      }
      function ke(e, n, t, r, i, _, v) {
        var j;
        if ((r && (j = _ ? r(e, i, _, v) : r(e)), void 0 !== j)) return j;
        if (!He(e)) return e;
        var k = qe(e);
        if (k) {
          if (
            ((j = (function (e) {
              var n = e.length,
                t = e.constructor(n);
              return (
                n &&
                  "string" == typeof e[0] &&
                  ee.call(e, "index") &&
                  ((t.index = e.index), (t.input = e.input)),
                t
              );
            })(e)),
            !n)
          )
            return (function (e, n) {
              var t = -1,
                r = e.length;
              for (n || (n = Array(r)); ++t < r; ) n[t] = e[t];
              return n;
            })(e, j);
        } else {
          var C = Ne(e),
            R = C == c || C == l;
          if ($e(e))
            return (function (e, n) {
              if (n) return e.slice();
              var t = new e.constructor(e.length);
              return e.copy(t), t;
            })(e, n);
          if (C == m || C == a || (R && !_)) {
            if (q(e)) return _ ? e : {};
            if (
              ((j = (function (e) {
                return "function" != typeof e.constructor || Fe(e)
                  ? {}
                  : He((n = se(e)))
                  ? oe(n)
                  : {};
                var n;
              })(R ? {} : e)),
              !n)
            )
              return (function (e, n) {
                return Ce(e, Ke(e), n);
              })(
                e,
                (function (e, n) {
                  return e && Ce(n, Ye(n), e);
                })(j, e)
              );
          } else {
            if (!x[C]) return _ ? e : {};
            j = (function (e, n, t, r) {
              var i,
                a = e.constructor;
              switch (n) {
                case y:
                  return xe(e);
                case s:
                case o:
                  return new a(+e);
                case b:
                  return (function (e, n) {
                    var t = n ? xe(e.buffer) : e.buffer;
                    return new e.constructor(t, e.byteOffset, e.byteLength);
                  })(e, r);
                case E:
                case O:
                case w:
                case T:
                case A:
                case P:
                case M:
                case I:
                case D:
                  return (function (e, n) {
                    var t = n ? xe(e.buffer) : e.buffer;
                    return new e.constructor(t, e.byteOffset, e.length);
                  })(e, r);
                case u:
                  return (function (e, n, t) {
                    return W(n ? t(V(e), !0) : V(e), F, new e.constructor());
                  })(e, r, t);
                case f:
                case d:
                  return new a(e);
                case p:
                  return (function (e) {
                    var n = new e.constructor(e.source, S.exec(e));
                    return (n.lastIndex = e.lastIndex), n;
                  })(e);
                case h:
                  return (function (e, n, t) {
                    return W(n ? t(X(e), !0) : X(e), B, new e.constructor());
                  })(e, r, t);
                case g:
                  return (i = e), Ae ? Object(Ae.call(i)) : {};
              }
            })(e, C, ke, n);
          }
        }
        v || (v = new De());
        var L = v.get(e);
        if (L) return L;
        if ((v.set(e, j), !k))
          var K = t
            ? (function (e) {
                return (function (e, n, t) {
                  var r = n(e);
                  return qe(e)
                    ? r
                    : (function (e, n) {
                        for (var t = -1, r = n.length, i = e.length; ++t < r; )
                          e[i + t] = n[t];
                        return e;
                      })(r, t(e));
                })(e, Ye, Ke);
              })(e)
            : Ye(e);
        return (
          (function (e, n) {
            for (
              var t = -1, r = e ? e.length : 0;
              ++t < r && !1 !== n(e[t], t);

            );
          })(K || e, function (i, a) {
            K && (i = e[(a = i)]), Se(j, a, ke(i, n, t, r, a, e, v));
          }),
          j
        );
      }
      function xe(e) {
        var n = new e.constructor(e.byteLength);
        return new ae(n).set(new ae(e)), n;
      }
      function Ce(e, n, t, r) {
        t || (t = {});
        for (var i = -1, a = n.length; ++i < a; ) {
          var s = n[i],
            o = r ? r(t[s], e[s], s, t, e) : void 0;
          Se(t, s, void 0 === o ? e[s] : o);
        }
        return t;
      }
      function Re(e, n) {
        var t,
          r,
          i = e.__data__;
        return (
          "string" == (r = typeof (t = n)) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== t
            : null === t
        )
          ? i["string" == typeof n ? "string" : "hash"]
          : i.map;
      }
      function Le(e, n) {
        var t = (function (e, n) {
          return null == e ? void 0 : e[n];
        })(e, n);
        return (function (e) {
          return (
            !(!He(e) || ((n = e), G && G in n)) &&
            (Xe(e) || q(e) ? te : j).test(Be(e))
          );
          var n;
        })(t)
          ? t
          : void 0;
      }
      (Pe.prototype.clear = function () {
        this.__data__ = ve ? ve(null) : {};
      }),
        (Pe.prototype.delete = function (e) {
          return this.has(e) && delete this.__data__[e];
        }),
        (Pe.prototype.get = function (e) {
          var n = this.__data__;
          if (ve) {
            var t = n[e];
            return t === r ? void 0 : t;
          }
          return ee.call(n, e) ? n[e] : void 0;
        }),
        (Pe.prototype.has = function (e) {
          var n = this.__data__;
          return ve ? void 0 !== n[e] : ee.call(n, e);
        }),
        (Pe.prototype.set = function (e, n) {
          return (this.__data__[e] = ve && void 0 === n ? r : n), this;
        }),
        (Me.prototype.clear = function () {
          this.__data__ = [];
        }),
        (Me.prototype.delete = function (e) {
          var n = this.__data__,
            t = je(n, e);
          return !(
            t < 0 || (t == n.length - 1 ? n.pop() : le.call(n, t, 1), 0)
          );
        }),
        (Me.prototype.get = function (e) {
          var n = this.__data__,
            t = je(n, e);
          return t < 0 ? void 0 : n[t][1];
        }),
        (Me.prototype.has = function (e) {
          return je(this.__data__, e) > -1;
        }),
        (Me.prototype.set = function (e, n) {
          var t = this.__data__,
            r = je(t, e);
          return r < 0 ? t.push([e, n]) : (t[r][1] = n), this;
        }),
        (Ie.prototype.clear = function () {
          this.__data__ = {
            hash: new Pe(),
            map: new (pe || Me)(),
            string: new Pe(),
          };
        }),
        (Ie.prototype.delete = function (e) {
          return Re(this, e).delete(e);
        }),
        (Ie.prototype.get = function (e) {
          return Re(this, e).get(e);
        }),
        (Ie.prototype.has = function (e) {
          return Re(this, e).has(e);
        }),
        (Ie.prototype.set = function (e, n) {
          return Re(this, e).set(e, n), this;
        }),
        (De.prototype.clear = function () {
          this.__data__ = new Me();
        }),
        (De.prototype.delete = function (e) {
          return this.__data__.delete(e);
        }),
        (De.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (De.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (De.prototype.set = function (e, n) {
          var t = this.__data__;
          if (t instanceof Me) {
            var r = t.__data__;
            if (!pe || r.length < 199) return r.push([e, n]), this;
            t = this.__data__ = new Ie(r);
          }
          return t.set(e, n), this;
        });
      var Ke = ue
          ? $(ue, Object)
          : function () {
              return [];
            },
        Ne = function (e) {
          return ne.call(e);
        };
      function Ue(e, n) {
        return (
          !!(n = null == n ? i : n) &&
          ("number" == typeof e || k.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        );
      }
      function Fe(e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || J);
      }
      function Be(e) {
        if (null != e) {
          try {
            return Q.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function We(e, n) {
        return e === n || (e != e && n != n);
      }
      ((_e && Ne(new _e(new ArrayBuffer(1))) != b) ||
        (pe && Ne(new pe()) != u) ||
        (he && Ne(he.resolve()) != _) ||
        (de && Ne(new de()) != h) ||
        (ge && Ne(new ge()) != v)) &&
        (Ne = function (e) {
          var n = ne.call(e),
            t = n == m ? e.constructor : void 0,
            r = t ? Be(t) : void 0;
          if (r)
            switch (r) {
              case ye:
                return b;
              case be:
                return u;
              case Ee:
                return _;
              case Oe:
                return h;
              case we:
                return v;
            }
          return n;
        });
      var qe = Array.isArray;
      function Ve(e) {
        return (
          null != e &&
          (function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
          })(e.length) &&
          !Xe(e)
        );
      }
      var $e =
        fe ||
        function () {
          return !1;
        };
      function Xe(e) {
        var n = He(e) ? ne.call(e) : "";
        return n == c || n == l;
      }
      function He(e) {
        var n = typeof e;
        return !!e && ("object" == n || "function" == n);
      }
      function Ye(e) {
        return Ve(e)
          ? (function (e, n) {
              var t =
                  qe(e) ||
                  (function (e) {
                    return (
                      (function (e) {
                        return (
                          (function (e) {
                            return !!e && "object" == typeof e;
                          })(e) && Ve(e)
                        );
                      })(e) &&
                      ee.call(e, "callee") &&
                      (!ce.call(e, "callee") || ne.call(e) == a)
                    );
                  })(e)
                    ? (function (e, n) {
                        for (var t = -1, r = Array(e); ++t < e; ) r[t] = n(t);
                        return r;
                      })(e.length, String)
                    : [],
                r = t.length,
                i = !!r;
              for (var s in e)
                (!n && !ee.call(e, s)) ||
                  (i && ("length" == s || Ue(s, r))) ||
                  t.push(s);
              return t;
            })(e)
          : (function (e) {
              if (!Fe(e)) return me(e);
              var n = [];
              for (var t in Object(e))
                ee.call(e, t) && "constructor" != t && n.push(t);
              return n;
            })(e);
      }
      e.exports = function (e) {
        return ke(e, !0, !0);
      };
    },
    5814: (e, n, t) => {
      var r = /^\s+|\s+$/g,
        i = "\\ud800-\\udfff",
        a = "\\u0300-\\u036f\\ufe20-\\ufe23",
        s = "\\u20d0-\\u20f0",
        o = "\\ufe0e\\ufe0f",
        c = "[" + i + "]",
        l = "[" + a + s + "]",
        u = "\\ud83c[\\udffb-\\udfff]",
        f = "[^" + i + "]",
        m = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        _ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        p = "\\u200d",
        h = "(?:" + l + "|" + u + ")?",
        d = "[" + o + "]?",
        g =
          d + h + "(?:" + p + "(?:" + [f, m, _].join("|") + ")" + d + h + ")*",
        v = "(?:" + [f + l + "?", l, m, _, c].join("|") + ")",
        y = RegExp(u + "(?=" + u + ")|" + v + g, "g"),
        b = RegExp("[" + p + i + a + s + o + "]"),
        E = "object" == typeof t.g && t.g && t.g.Object === Object && t.g,
        O = "object" == typeof self && self && self.Object === Object && self,
        w = E || O || Function("return this")();
      function T(e, n, t) {
        if (n != n)
          return (function (e, n, t, r) {
            for (var i = e.length, a = t + -1; ++a < i; )
              if (n(e[a], a, e)) return a;
            return -1;
          })(e, A, t);
        for (var r = t - 1, i = e.length; ++r < i; ) if (e[r] === n) return r;
        return -1;
      }
      function A(e) {
        return e != e;
      }
      function P(e) {
        return (function (e) {
          return b.test(e);
        })(e)
          ? (function (e) {
              return e.match(y) || [];
            })(e)
          : (function (e) {
              return e.split("");
            })(e);
      }
      var M = Object.prototype.toString,
        I = w.Symbol,
        D = I ? I.prototype : void 0,
        S = D ? D.toString : void 0;
      function j(e) {
        if ("string" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                "[object Symbol]" == M.call(e))
            );
          })(e)
        )
          return S ? S.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
      }
      e.exports = function (e, n, t) {
        var i;
        if ((e = null == (i = e) ? "" : j(i)) && (t || void 0 === n))
          return e.replace(r, "");
        if (!e || !(n = j(n))) return e;
        var a = P(e),
          s = P(n),
          o = (function (e, n) {
            for (var t = -1, r = e.length; ++t < r && T(n, e[t], 0) > -1; );
            return t;
          })(a, s),
          c =
            (function (e, n) {
              for (var t = e.length; t-- && T(n, e[t], 0) > -1; );
              return t;
            })(a, s) + 1;
        return (function (e, n, t) {
          var r = e.length;
          return (
            (t = void 0 === t ? r : t),
            !n && t >= r
              ? e
              : (function (e, n, t) {
                  var r = -1,
                    i = e.length;
                  n < 0 && (n = -n > i ? 0 : i + n),
                    (t = t > i ? i : t) < 0 && (t += i),
                    (i = n > t ? 0 : (t - n) >>> 0),
                    (n >>>= 0);
                  for (var a = Array(i); ++r < i; ) a[r] = e[r + n];
                  return a;
                })(e, n, t)
          );
        })(a, o, c).join("");
      };
    },
    5398: (e, n, t) => {
      "use strict";
      t.r(n),
        t.d(n, {
          Animator: () => kn,
          EASE: () => pe,
          EASE_IN: () => he,
          EASE_IN_OUT: () => ge,
          EASE_OUT: () => de,
          EVENTS: () => tn,
          FIXED: () => we,
          Frame: () => Nn,
          LINEAR: () => _e,
          NAME_SEPARATOR: () => en,
          OPTIONS: () => nn,
          ROLES: () => Ee,
          STEP_END: () => me,
          STEP_START: () => fe,
          SceneItem: () => Vn,
          animate: () => Xn,
          animateItem: () => Hn,
          bezier: () => ce,
          default: () => Yn,
          isRole: () => yn,
          setAlias: () => un,
          setRole: () => fn,
          steps: () => le,
        });
      var r = "rgb",
        i = "rgba",
        a = "hsl",
        s = "hsla",
        o = [r, i, a, s],
        c = "function",
        l = "property",
        u = "array",
        f = "object",
        m = "string",
        _ = "number",
        p = "undefined",
        h = typeof window !== p,
        d = typeof document !== p && document,
        g = ["webkit", "ms", "moz", "o"],
        v = function (e) {
          if (!d) return "";
          var n = (d.body || d.documentElement).style,
            t = g.length;
          if (typeof n[e] !== p) return e;
          for (var r = 0; r < t; ++r) {
            var i = "-" + g[r] + "-" + e;
            if (typeof n[i] !== p) return i;
          }
          return "";
        },
        y = v("transform"),
        b = v("filter"),
        E = v("animation"),
        O = E.replace("animation", "keyframes"),
        w = [
          { open: "(", close: ")" },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
          { open: '\\"', close: '\\"' },
          { open: "\\'", close: "\\'" },
        ];
      function T(e, n, t, r) {
        return (e * r + n * t) / (t + r);
      }
      function A(e) {
        return typeof e === p;
      }
      function P(e) {
        return e && typeof e === f;
      }
      function M(e) {
        return Array.isArray(e);
      }
      function I(e) {
        return typeof e === m;
      }
      function D(e) {
        return typeof e === c;
      }
      function S(e, n, t, r, i) {
        return j(e, n, t)
          ? t
          : (function (e, n, t, r, i) {
              for (
                var a,
                  s = function (t) {
                    var s = n[t].trim();
                    if (s === e.close && !j(e, n, t)) return { value: t };
                    var o = t,
                      c = B(i, function (e) {
                        return e.open === s;
                      });
                    if ((c && (o = S(c, n, t, r, i)), -1 === o))
                      return (a = t), "break";
                    a = t = o;
                  },
                  o = t;
                o < r;
                ++o
              ) {
                var c = s(o);
                if (((o = a), "object" == typeof c)) return c.value;
                if ("break" === c) break;
              }
              return -1;
            })(e, n, t + 1, r, i);
      }
      function j(e, n, t) {
        if (!e.ignore) return null;
        var r = n.slice(Math.max(t - 3, 0), t + 3).join("");
        return new RegExp(e.ignore).exec(r);
      }
      function k(e, n) {
        var t = I(n) ? { separator: n } : n,
          r = t.separator,
          i = void 0 === r ? "," : r,
          a = t.isSeparateFirst,
          s = t.isSeparateOnlyOpenClose,
          o = t.isSeparateOpenClose,
          c = void 0 === o ? s : o,
          l = t.openCloseCharacters,
          u = void 0 === l ? w : l,
          f = u
            .map(function (e) {
              var n = e.open,
                t = e.close;
              return n === t ? n : n + "|" + t;
            })
            .join("|"),
          m = new RegExp("(\\s*" + i + "\\s*|" + f + "|\\s+)", "g"),
          _ = e.split(m).filter(function (e) {
            return e && "undefined" !== e;
          }),
          p = _.length,
          h = [],
          d = [];
        function g() {
          return !!d.length && (h.push(d.join("")), (d = []), !0);
        }
        for (
          var v,
            y = function (n) {
              var t = _[n].trim(),
                r = n,
                o = B(u, function (e) {
                  return e.open === t;
                }),
                l = B(u, function (e) {
                  return e.close === t;
                });
              if (o) {
                if (-1 !== (r = S(o, _, n, p, u)) && c)
                  return g() && a
                    ? ((v = n), "break")
                    : (h.push(_.slice(n, r + 1).join("")),
                      (n = r),
                      a ? ((v = n), "break") : ((v = n), "continue"));
              } else {
                if (l && !j(l, _, n)) {
                  var f = (function () {
                    for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                      e += arguments[n].length;
                    var r = Array(e),
                      i = 0;
                    for (n = 0; n < t; n++)
                      for (
                        var a = arguments[n], s = 0, o = a.length;
                        s < o;
                        s++, i++
                      )
                        r[i] = a[s];
                    return r;
                  })(u);
                  return (
                    f.splice(u.indexOf(l), 1),
                    {
                      value: k(e, {
                        separator: i,
                        isSeparateFirst: a,
                        isSeparateOnlyOpenClose: s,
                        isSeparateOpenClose: c,
                        openCloseCharacters: f,
                      }),
                    }
                  );
                }
                if (
                  (function (e, n) {
                    return (
                      (("" === n || " " == n) && ("" === e || " " == e)) ||
                      e === n
                    );
                  })(t, i) &&
                  !s
                )
                  return g(), a ? ((v = n), "break") : ((v = n), "continue");
              }
              -1 === r && (r = p - 1),
                d.push(_.slice(n, r + 1).join("")),
                (v = n = r);
            },
            b = 0;
          b < p;
          ++b
        ) {
          var E = y(b);
          if (((b = v), "object" == typeof E)) return E.value;
          if ("break" === E) break;
        }
        return d.length && h.push(d.join("")), h;
      }
      function x(e) {
        return k(e, ",");
      }
      function C(e) {
        var n = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(e);
        return !n || n.length < 4
          ? {}
          : { prefix: n[1], value: n[2], suffix: n[3] };
      }
      function R(e) {
        var n = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(e);
        if (!n) return { prefix: "", unit: "", value: NaN };
        var t = n[1],
          r = n[2];
        return { prefix: t, unit: n[3], value: parseFloat(r) };
      }
      function L(e) {
        return e.replace(/[\s-_]+([^\s-_])/g, function (e, n) {
          return n.toUpperCase();
        });
      }
      function K(e, n) {
        return (
          void 0 === n && (n = "-"),
          e.replace(/([a-z])([A-Z])/g, function (e, t, r) {
            return "" + t + n + r.toLowerCase();
          })
        );
      }
      function N(e) {
        return [].slice.call(e);
      }
      function U() {
        return Date.now ? Date.now() : new Date().getTime();
      }
      function F(e, n, t) {
        void 0 === t && (t = -1);
        for (var r = e.length, i = 0; i < r; ++i) if (n(e[i], i, e)) return i;
        return t;
      }
      function B(e, n, t) {
        var r = F(e, n);
        return r > -1 ? e[r] : t;
      }
      var W = (function () {
          var e = U(),
            n =
              h &&
              (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame);
          return n
            ? n.bind(window)
            : function (n) {
                var t = U();
                return setTimeout(function () {
                  n(t - e);
                }, 1e3 / 60);
              };
        })(),
        q = (function () {
          var e =
            h &&
            (window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              window.msCancelAnimationFrame);
          return e
            ? e.bind(window)
            : function (e) {
                clearTimeout(e);
              };
        })();
      function V(e) {
        return Object.keys(e);
      }
      function $(e, n) {
        void 0 === n && (n = []),
          e.sort(function (e, t) {
            var r = n.indexOf(e),
              i = n.indexOf(t);
            return -1 === i && -1 === r
              ? 0
              : -1 === r
              ? 1
              : -1 === i
              ? -1
              : r - i;
          });
      }
      function X(e) {
        var n = (function (e) {
            return e.replace("#", "");
          })(e),
          t = parseInt(n.substring(0, 2), 16),
          r = parseInt(n.substring(2, 4), 16),
          i = parseInt(n.substring(4, 6), 16),
          a = parseInt(n.substring(6, 8), 16) / 255;
        return isNaN(a) && (a = 1), [t, r, i, a];
      }
      function H(e) {
        if ("#" === e.charAt(0))
          return 4 === e.length || 5 === e.length
            ? X(
                [
                  "#",
                  (_ = (m = e).charAt(1)),
                  _,
                  (p = m.charAt(2)),
                  p,
                  (h = m.charAt(3)),
                  h,
                  (d = m.charAt(4)),
                  d,
                ].join("")
              )
            : X(e);
        if (-1 !== e.indexOf("(")) {
          var n = C(e),
            t = n.prefix,
            o = n.value;
          if (!t || !o) return;
          var c = x(o),
            l = [0, 0, 0, 1],
            u = c.length;
          switch (t) {
            case r:
            case i:
              for (var f = 0; f < u; ++f) l[f] = parseFloat(c[f]);
              return l;
            case a:
            case s:
              for (f = 0; f < u; ++f)
                -1 !== c[f].indexOf("%")
                  ? (l[f] = parseFloat(c[f]) / 100)
                  : (l[f] = parseFloat(c[f]));
              return (function (e) {
                var n,
                  t = e[0],
                  r = e[1],
                  i = e[2];
                t < 0 && (t += 360 * Math.floor((Math.abs(t) + 360) / 360)),
                  (t %= 360);
                var a,
                  s = (1 - Math.abs(2 * i - 1)) * r,
                  o = s * (1 - Math.abs(((t / 60) % 2) - 1)),
                  c = i - s / 2;
                return (
                  (a =
                    t < 60
                      ? [s, o, 0]
                      : t < 120
                      ? [o, s, 0]
                      : t < 180
                      ? [0, s, o]
                      : t < 240
                      ? [0, o, s]
                      : t < 300
                      ? [o, 0, s]
                      : t < 360
                      ? [s, 0, o]
                      : [0, 0, 0]),
                  [
                    Math.round(255 * (a[0] + c)),
                    Math.round(255 * (a[1] + c)),
                    Math.round(255 * (a[2] + c)),
                    null !== (n = e[3]) && void 0 !== n ? n : 1,
                  ]
                );
              })(l);
          }
        }
        var m, _, p, h, d;
      }
      function Y(e, n) {
        return d
          ? n
            ? d.querySelectorAll(e)
            : d.querySelector(e)
          : n
          ? []
          : null;
      }
      function z(e, n) {
        e.classList ? e.classList.add(n) : (e.className += " " + n);
      }
      function J(e, n) {
        if (e.classList) e.classList.remove(n);
        else {
          var t = new RegExp("(\\s|^)" + n + "(\\s|$)");
          e.className = e.className.replace(t, " ");
        }
      }
      function Z(e, n, t, r) {
        e.addEventListener(n, t, r);
      }
      function G(e, n, t, r) {
        e.removeEventListener(n, t, r);
      }
      function Q(e) {
        return (null == e ? void 0 : e.ownerDocument) || d;
      }
      var ee = function () {
        return (
          (ee =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var i in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              return e;
            }),
          ee.apply(this, arguments)
        );
      };
      const ne = (function () {
          function e() {
            this._events = {};
          }
          var n = e.prototype;
          return (
            (n.on = function (e, n) {
              if (P(e)) for (var t in e) this.on(t, e[t]);
              else this._addEvent(e, n, {});
              return this;
            }),
            (n.off = function (e, n) {
              if (e)
                if (P(e)) for (var t in e) this.off(t);
                else if (n) {
                  var r = this._events[e];
                  if (r) {
                    var i = F(r, function (e) {
                      return e.listener === n;
                    });
                    i > -1 && r.splice(i, 1);
                  }
                } else this._events[e] = [];
              else this._events = {};
              return this;
            }),
            (n.once = function (e, n) {
              var t = this;
              return (
                n && this._addEvent(e, n, { once: !0 }),
                new Promise(function (n) {
                  t._addEvent(e, n, { once: !0 });
                })
              );
            }),
            (n.emit = function (e, n) {
              var t = this;
              void 0 === n && (n = {});
              var r = this._events[e];
              if (!e || !r) return !0;
              var i = !1;
              return (
                (n.eventType = e),
                (n.stop = function () {
                  i = !0;
                }),
                (n.currentTarget = this),
                (function () {
                  for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                    e += arguments[n].length;
                  var r = Array(e),
                    i = 0;
                  for (n = 0; n < t; n++)
                    for (
                      var a = arguments[n], s = 0, o = a.length;
                      s < o;
                      s++, i++
                    )
                      r[i] = a[s];
                  return r;
                })(r).forEach(function (r) {
                  r.listener(n), r.once && t.off(e, r.listener);
                }),
                !i
              );
            }),
            (n.trigger = function (e, n) {
              return void 0 === n && (n = {}), this.emit(e, n);
            }),
            (n._addEvent = function (e, n, t) {
              var r = this._events;
              (r[e] = r[e] || []), r[e].push(ee({ listener: n }, t));
            }),
            e
          );
        })(),
        te = (function () {
          function e(e) {
            (this.separator = e), (this.orderMap = {});
          }
          var n = e.prototype;
          return (
            (n.getFullName = function (e) {
              return e.join(this.separator);
            }),
            (n.get = function (e) {
              return this.orderMap[this.getFullName(e)];
            }),
            (n.gets = function (e, n) {
              void 0 === n && (n = !0);
              var t = [],
                r = this;
              return (
                (function e(n, i) {
                  var a = r.get(n);
                  if (a)
                    return (
                      a.forEach(function (r) {
                        var a = i.concat([r]),
                          s = e(n.concat([r]), a);
                        (s && s.length) || t.push(i.concat([r]));
                      }),
                      a
                    );
                })(e, n ? e : []),
                t
              );
            }),
            (n.set = function (e, n) {
              var t = this;
              return (
                e.forEach(function (n, r) {
                  t.addName(e.slice(0, r), n);
                }),
                (this.orderMap[this.getFullName(e)] = n),
                n
              );
            }),
            (n.add = function (e) {
              var n = e.length;
              return n ? this.addName(e.slice(0, -1), e[n - 1]) : [];
            }),
            (n.addName = function (e, n) {
              var t = this.get(e) || this.set(e, []);
              return -1 === t.indexOf(n) && t.push(n), t;
            }),
            (n.findIndex = function (e, n) {
              var t = this.orderMap[this.getFullName(e)];
              return t ? t.indexOf(n) : -1;
            }),
            (n.remove = function (e) {
              var n = this.getFullName(e),
                t = this.orderMap;
              for (var r in t) 0 === r.indexOf(n) && delete t[r];
              var i = e.length;
              if (i) {
                var a = e.slice(0, -1),
                  s = e[i - 1];
                this.splice(a, this.findIndex(a, s), 1);
              }
              return this;
            }),
            (n.filter = function (n, t, r) {
              void 0 === r && (r = !0);
              var i = this.gets(n, r).filter(t),
                a = new e(this.separator),
                s = r ? [] : n;
              return (
                i.forEach(function (e) {
                  a.add(s.concat(e));
                }),
                a
              );
            }),
            (n.splice = function (e, n, t) {
              for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i];
              var a = this.get(e) || this.set(e, []);
              return a.splice.apply(a, [n, t].concat(r)), this;
            }),
            (n.clear = function () {
              this.orderMap = {};
            }),
            (n.setObject = function (e) {
              var n = this.orderMap;
              for (var t in e) n[t] = e[t].slice();
            }),
            (n.getObject = function () {
              var e = {},
                n = this.orderMap;
              for (var t in n) e[t] = n[t].slice();
              return e;
            }),
            (n.clone = function () {
              var n = new e(this.separator);
              return n.setObject(n.orderMap), n;
            }),
            e
          );
        })();
      const re = function (e) {
        var n =
          "rCS" +
          (function (e) {
            for (var n = 5381, t = e.length; t; )
              n = (33 * n) ^ e.charCodeAt(--t);
            return n >>> 0;
          })(e).toString(36);
        return {
          className: n,
          inject: function (t, r) {
            void 0 === r && (r = {});
            var i = (function (e) {
                if (e && e.getRootNode) {
                  var n = e.getRootNode();
                  if (11 === n.nodeType) return n;
                }
              })(t),
              a = (i || t.ownerDocument || document).querySelector(
                'style[data-styled-id="'.concat(n, '"]')
              );
            if (a) {
              var s = parseFloat(a.getAttribute("data-styled-count")) || 0;
              a.setAttribute("data-styled-count", "".concat(s + 1));
            } else
              a = (function (e, n, t, r, i) {
                var a = Q(r),
                  s = a.createElement("style");
                return (
                  s.setAttribute("type", "text/css"),
                  s.setAttribute("data-styled-id", e),
                  s.setAttribute("data-styled-count", "1"),
                  t.nonce && s.setAttribute("nonce", t.nonce),
                  (s.innerHTML = (function (e, n, t) {
                    return t.original
                      ? n
                      : n.replace(
                          /([^};{\s}][^};{]*|^\s*){/gm,
                          function (n, t) {
                            var r = t.trim();
                            return (
                              (r ? x(r) : [""])
                                .map(function (n) {
                                  var t = n.trim();
                                  return 0 === t.indexOf("@")
                                    ? t
                                    : t.indexOf(":global") > -1
                                    ? t.replace(/\:global/g, "")
                                    : t.indexOf(":host") > -1
                                    ? "".concat(
                                        t.replace(/\:host/g, ".".concat(e))
                                      )
                                    : t
                                    ? ".".concat(e, " ").concat(t)
                                    : ".".concat(e);
                                })
                                .join(", ") + " {"
                            );
                          }
                        );
                  })(e, n, t)),
                  (i || a.head || a.body).appendChild(s),
                  s
                );
              })(n, e, r, t, i);
            return {
              destroy: function () {
                var e,
                  n = parseFloat(a.getAttribute("data-styled-count")) || 0;
                n <= 1
                  ? (a.remove
                      ? a.remove()
                      : null === (e = a.parentNode) ||
                        void 0 === e ||
                        e.removeChild(a),
                    (a = null))
                  : a.setAttribute("data-styled-count", "".concat(n - 1));
              },
            };
          },
        };
      };
      var ie = function (e, n) {
        return (
          (ie =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, n) {
                e.__proto__ = n;
              }) ||
            function (e, n) {
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }),
          ie(e, n)
        );
      };
      function ae(e, n) {
        function t() {
          this.constructor = e;
        }
        ie(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((t.prototype = n.prototype), new t()));
      }
      function se() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++)
          e += arguments[n].length;
        var r = Array(e),
          i = 0;
        for (n = 0; n < t; n++)
          for (var a = arguments[n], s = 0, o = a.length; s < o; s++, i++)
            r[i] = a[s];
        return r;
      }
      function oe(e, n, t) {
        var r = 1 - t;
        return t * t * t + 3 * t * t * r * n + 3 * t * r * r * e;
      }
      function ce(e, n, t, r) {
        var i = function (i) {
          var a,
            s,
            o,
            c = (function (e, n, t) {
              for (var r = t, i = 1; Math.abs(i) > 0.001; ) {
                if (((i = oe(e, n, r) - t), Math.abs(i) < 0.001)) return r;
                r -= i / 2;
              }
              return r;
            })(e, t, ((a = i), (s = 0), (o = 1), Math.max(s, Math.min(a, o))));
          return oe(n, r, c);
        };
        return (
          (i.easingName =
            "cubic-bezier(" + e + "," + n + "," + t + "," + r + ")"),
          i
        );
      }
      function le(e, n) {
        var t = function (t) {
          var r = 1 / e;
          return t >= 1 ? 1 : ("start" === n ? r : 0) + Math.floor(t / r) * r;
        };
        return (t.easingName = "steps(" + e + ", " + n + ")"), t;
      }
      var ue,
        fe = le(1, "start"),
        me = le(1, "end"),
        _e = ce(0, 0, 1, 1),
        pe = ce(0.25, 0.1, 0.25, 1),
        he = ce(0.42, 0, 1, 1),
        de = ce(0, 0, 0.58, 1),
        ge = ce(0.42, 0, 0.58, 1),
        ve = "__SCENEJS_",
        ye = "data-scene-id",
        be = "animation-timing-function",
        Ee = { transform: {}, filter: {}, attribute: {}, html: !0 },
        Oe = { easing: [be] },
        we = (((ue = {})[be] = !0), (ue.contents = !0), (ue.html = !0), ue),
        Te = 1e6,
        Ae = 1e-6,
        Pe = "duration",
        Me = "fillMode",
        Ie = "direction",
        De = "iterationCount",
        Se = "delay",
        je = "easing",
        ke = "playSpeed",
        xe = "easingName",
        Ce = "paused",
        Re = "ended",
        Le = "timeupdate",
        Ke = "play",
        Ne = "running",
        Ue = "iteration",
        Fe = "startAnimation",
        Be = "pauseAnimation",
        We = "alternate",
        qe = "reverse",
        Ve = "alternate-reverse",
        $e = "infinite",
        Xe = "playState",
        He = "playCSS",
        Ye = "prevTime",
        ze = "tickTime",
        Je = "currentTime",
        Ze = "selector",
        Ge = "transform",
        Qe = {
          linear: _e,
          ease: pe,
          "ease-in": he,
          "ease-out": de,
          "ease-in-out": ge,
          "step-start": fe,
          "step-end": me,
        },
        en = "_///_",
        nn = [Pe, Me, Ie, De, Se, je, ke],
        tn = [Ce, Re, Le, "animate", Ke, Ue],
        rn = (function () {
          function e(e, n) {
            (this.prefix = ""),
              (this.suffix = ""),
              (this.model = ""),
              (this.type = ""),
              (this.separator = ","),
              n && this.setOptions(n),
              (this.value = I(e) ? e.split(this.separator) : e);
          }
          var n = e.prototype;
          return (
            (n.setOptions = function (e) {
              for (var n in e) this[n] = e[n];
              return this;
            }),
            (n.size = function () {
              return this.value.length;
            }),
            (n.get = function (e) {
              return this.value[e];
            }),
            (n.set = function (e, n) {
              return (this.value[e] = n), this;
            }),
            (n.clone = function () {
              var n = this,
                t = n.separator,
                r = n.prefix,
                i = n.suffix,
                a = n.model,
                s = n.type;
              return new e(
                this.value.map(function (n) {
                  return n instanceof e ? n.clone() : n;
                }),
                { separator: t, prefix: r, suffix: i, model: a, type: s }
              );
            }),
            (n.toValue = function () {
              return this.prefix + this.join() + this.suffix;
            }),
            (n.join = function () {
              return this.value
                .map(function (n) {
                  return n instanceof e ? n.toValue() : n;
                })
                .join(this.separator);
            }),
            (n.forEach = function (e) {
              return this.value.forEach(e), this;
            }),
            e
          );
        })();
      function an(e) {
        var n = i;
        return (
          3 === e.length && (e[3] = 1),
          new rn(e, {
            model: n,
            separator: ",",
            type: "color",
            prefix: n + "(",
            suffix: ")",
          })
        );
      }
      function sn(e, n) {
        return new rn(e, { type: "array", separator: n });
      }
      function on(e, n) {
        if (!I(e)) return M(e) ? sn(e, ",") : e;
        var t = x(e);
        return t.length > 1
          ? sn(
              t.map(function (e) {
                return on(e);
              }),
              ","
            )
          : (t = k(e, "")).length > 1
          ? sn(
              t.map(function (e) {
                return on(e);
              }),
              " "
            )
          : (t = /^(['"])([^'"]*)(['"])$/g.exec(e)) && t[1] === t[3]
          ? new rn([on(t[2])], { prefix: t[1], suffix: t[1] })
          : -1 !== e.indexOf("(")
          ? (function (e) {
              var n = C(e),
                t = n.prefix,
                r = n.value,
                i = n.suffix;
              if (void 0 === r) return e;
              if (o.indexOf(t) > -1) return an(H(e));
              var a = on(r, t),
                s = [r],
                c = ",",
                l = t + "(",
                u = ")" + i;
              return (
                a instanceof rn &&
                  ((c = a.separator),
                  (s = a.value),
                  (l += a.prefix),
                  (u = a.suffix + u)),
                new rn(s, { separator: c, model: t, prefix: l, suffix: u })
              );
            })(e)
          : "#" === e.charAt(0) && "url" !== n
          ? (function (e) {
              var n = H(e);
              return n ? an(n) : e;
            })(e)
          : e;
      }
      function cn(e, n) {
        void 0 === n && (n = {});
        var t = e.model;
        if (t) {
          e.setOptions({ model: "", suffix: "", prefix: "" });
          var r = e.size() > 1 ? e : e.get(0);
          n[t] = r;
        } else
          e.forEach(function (e) {
            cn(e, n);
          });
        return n;
      }
      function ln(e) {
        return e instanceof rn;
      }
      function un(e, n) {
        Oe[e] = n;
      }
      function fn(e, n, t) {
        for (var r = e.length, i = Ee, a = we, s = 0; s < r - 1; ++s)
          !i[e[s]] && (i[e[s]] = {}),
            (i = i[e[s]]),
            t && (!a[e[s]] && (a[e[s]] = {}), (a = a[e[s]]));
        t && (a[e[r - 1]] = !0), (i[e[r - 1]] = !!n || {});
      }
      function mn(e) {
        var n = typeof e;
        if (n === f) {
          if (M(e)) return u;
          if (ln(e)) return l;
        } else if (n === m || n === _) return "value";
        return n;
      }
      function _n(e) {
        return P(e) && e.constructor === Object;
      }
      function pn(e, n) {
        var t = [];
        if (_n(e))
          for (var r in e) n.push(r), (t = t.concat(pn(e[r], n))), n.pop();
        else t.push(n.slice());
        return t;
      }
      function hn(e, n) {
        for (var t in n)
          _n(n[t]) ? (P(e[t]) || (e[t] = {}), hn(e[t], n[t])) : (e[t] = !0);
        return e;
      }
      function dn(e) {
        return Math.round(e * Te) / Te;
      }
      function gn(e, n, t) {
        void 0 === t && (t = e.length);
        for (var r = n, i = 0; i < t; ++i) {
          if (!P(r) || null == r) return;
          r = r[e[i]];
        }
        return r;
      }
      function vn(e, n, t) {
        var r = n.length,
          i = e;
        if (0 === r) return !1;
        for (var a = 0; a < r; ++a) {
          if (!0 === i) return !1;
          if (!(i = i[n[a]]) || (!t && !0 === i)) return !1;
        }
        return !0;
      }
      function yn(e, n) {
        return vn(Ee, e, n);
      }
      function bn(e) {
        return vn(we, e, !0);
      }
      function En(e, n) {
        e.state[He] = n;
      }
      function On(e) {
        return e.state[He] && e.isPaused();
      }
      function wn(e) {
        return !e.isEnded() && e.state[He];
      }
      function Tn(e) {
        for (;;) {
          var n = "" + Math.floor(1e7 * Math.random());
          if (!h || !e) return n;
          if (!Y('[data-scene-id="' + n + '"]')) return n;
        }
      }
      function An(e) {
        return e.getId() || e.setId(Tn(!1)).getId();
      }
      function Pn(e) {
        return ("" + e).match(/[0-9a-zA-Z]+/g).join("");
      }
      function Mn(e, n, t, r) {
        if ((void 0 === r && (r = {}), E && e.getPlayState() !== Ne)) {
          var i = t || Fe;
          if (On(e)) e.addPlayClass(!0, i, r);
          else {
            e.isEnded() && e.setTime(0), n && e.exportCSS({ className: i });
            var a = e.addPlayClass(!1, i, r);
            if (!a) return;
            !(function (e, n) {
              var t = e.state,
                r = e.getDuration(),
                i = !r || !isFinite(r),
                a = function () {
                  En(e, !1), e.finish();
                },
                s = function () {
                  e.trigger(Ke),
                    Z(n, "animationcancel", a),
                    Z(n, "animationend", a),
                    Z(n, "animationiteration", o);
                };
              e.once(Re, function () {
                G(n, "animationcancel", a),
                  G(n, "animationend", a),
                  G(n, "animationiteration", o),
                  G(n, "animationstart", s);
              });
              var o = function (n) {
                var a = n.elapsedTime,
                  s = i ? 0 : a / r;
                (t[Je] = a), e.setIteration(s);
              };
              Z(n, "animationstart", s);
            })(e, a),
              En(e, !0);
          }
          e.setPlayState(Ne);
        }
      }
      function In(e) {
        var n;
        if (I(e))
          if (e in Qe) n = Qe[e];
          else {
            var t = on(e);
            if (I(t)) return 0;
            if ("cubic-bezier" === t.model)
              n = ce(
                (e = t.value.map(function (e) {
                  return parseFloat(e);
                }))[0],
                e[1],
                e[2],
                e[3]
              );
            else {
              if ("steps" !== t.model) return 0;
              n = le(parseFloat(t.value[0]), t.value[1]);
            }
          }
        else n = M(e) ? ce(e[0], e[1], e[2], e[3]) : e;
        return n;
      }
      function Dn(e, n, t) {
        return (
          t === qe ||
          (n !== $e && e === n && n % 1 == 0
            ? t === (e % 2 >= 1 ? Ve : We)
            : t === (e % 2 >= 1 ? We : Ve))
        );
      }
      var Sn = ["id", De, Se, Me, Ie, ke, Pe, ke, "iterationTime", Xe],
        jn = se(Sn, [je, xe]),
        kn = (function (e) {
          function n(n) {
            var t = e.call(this) || this;
            return (
              (t.timerId = 0),
              (t.state = {
                id: "",
                easing: 0,
                easingName: "linear",
                iterationCount: 1,
                delay: 0,
                fillMode: "forwards",
                direction: "normal",
                playSpeed: 1,
                currentTime: 0,
                iterationTime: -1,
                iteration: 0,
                tickTime: 0,
                prevTime: 0,
                playState: Ce,
                duration: 0,
              }),
              t.setOptions(n),
              t
            );
          }
          ae(n, e);
          var t,
            r,
            i,
            a = n.prototype;
          return (
            (a.setEasing = function (e) {
              var n = In(e),
                t = (n && n[xe]) || "linear",
                r = this.state;
              return (r[je] = n), (r[xe] = t), this;
            }),
            (a.setOptions = function (e) {
              for (var n in (void 0 === e && (e = {}), e)) {
                var t = e[n];
                n !== je
                  ? n !== Pe
                    ? nn.indexOf(n) > -1 && (this.state[n] = t)
                    : t && this.setDuration(t)
                  : this.setEasing(t);
              }
              return this;
            }),
            (a.getTotalDuration = function () {
              return this.getActiveDuration(!0);
            }),
            (a.getActiveDuration = function (e) {
              var n = this.state,
                t = n[De];
              return t === $e
                ? 1 / 0
                : (e ? n[Se] : 0) + this.getDuration() * t;
            }),
            (a.isEnded = function () {
              return (
                (0 === this.state[ze] && this.state[Xe] === Ce) ||
                !(this.getTime() < this.getActiveDuration())
              );
            }),
            (a.isPaused = function () {
              return this.state[Xe] === Ce;
            }),
            (a.start = function (e) {
              void 0 === e && (e = this.state[Se]);
              var n = this.state;
              return (n[Xe] = Ne), n[ze] >= e && (this.trigger(Ke), !0);
            }),
            (a.play = function (e) {
              var n = this,
                t = this.state,
                r = t[Se],
                i = this.getTime();
              return (
                (t[Xe] = Ne),
                this.isEnded() &&
                  (0 === i || i >= this.getActiveDuration()) &&
                  this.setTime(-r, !0),
                (this.timerId = W(function (r) {
                  (t[Ye] = r), n.tick(r, e);
                })),
                this.start(),
                this
              );
            }),
            (a.pause = function () {
              var e = this.state;
              return (
                e[Xe] !== Ce && ((e[Xe] = Ce), this.trigger(Ce)),
                q(this.timerId),
                this
              );
            }),
            (a.finish = function () {
              return this.setTime(0), (this.state[ze] = 0), this.end(), this;
            }),
            (a.end = function () {
              return this.pause(), this.trigger(Re), this;
            }),
            (a.setTime = function (e, n, t) {
              var r = this.getActiveDuration(),
                i = this.state,
                a = i[ze],
                s = i[Se],
                o = n ? e : this.getUnitTime(e);
              if (
                ((i[ze] = s + o),
                o < 0 ? (o = 0) : o > r && (o = r),
                (i[Je] = o),
                this.calculate(),
                n && !t)
              ) {
                var c = i[ze];
                if ((a < s && e >= 0 && this.start(0), c < a || this.isEnded()))
                  return void this.end();
              }
              return (
                this.isDelay() ||
                  this.trigger(Le, {
                    currentTime: o,
                    time: this.getIterationTime(),
                    iterationCount: i[Ue],
                  }),
                this
              );
            }),
            (a.getTime = function () {
              return this.state[Je];
            }),
            (a.getUnitTime = function (e) {
              if (I(e)) {
                var n = this.getDuration() || 100;
                if ("from" === e) return 0;
                if ("to" === e) return n;
                var t = R(e),
                  r = t.unit,
                  i = t.value;
                return "%" === r
                  ? (!this.getDuration() && this.setDuration(n),
                    dn((parseFloat(e) / 100) * n))
                  : ">" === r
                  ? i + Ae
                  : i;
              }
              return dn(e);
            }),
            (a.isDelay = function () {
              var e = this.state,
                n = e[Se],
                t = e[ze];
              return n > 0 && t < n;
            }),
            (a.setIteration = function (e) {
              var n = this.state,
                t = Math.floor(e),
                r = n[De] === $e ? 1 / 0 : n[De];
              return (
                n[Ue] < t &&
                  t < r &&
                  this.trigger(Ue, { currentTime: n[Je], iterationCount: t }),
                (n[Ue] = e),
                this
              );
            }),
            (a.calculate = function () {
              var e = this.state,
                n = e[De],
                t = e[Me],
                r = e[Ie],
                i = this.getDuration(),
                a = this.getTime(),
                s = 0 === i ? 0 : a / i,
                o = i ? a % i : 0;
              if (!i) return this.setIterationTime(0), this;
              this.setIteration(s);
              var c = Dn(s, n, r),
                l = isFinite(i);
              return (
                l && c && (o = i - o),
                l &&
                  n !== $e &&
                  s >= n &&
                  ((o =
                    i * ("both" === t || "forwards" === t ? n % 1 || 1 : 0)),
                  c && (o = i - o)),
                this.setIterationTime(o),
                this
              );
            }),
            (a.tick = function (e, n) {
              var t = this;
              if (!this.isPaused()) {
                var r = this.state,
                  i = r[ke],
                  a = r[Ye],
                  s = r[Se],
                  o = r[ze] + (Math.min(1e3, e - a) / 1e3) * i;
                (r[Ye] = e),
                  this.setTime(o - s, !0),
                  n && 1e3 * n < e && this.pause(),
                  r[Xe] !== Ce &&
                    (this.timerId = W(function (e) {
                      t.tick(e, n);
                    }));
              }
            }),
            (n = (function (e, n, t, r) {
              var i,
                a = arguments.length,
                s =
                  a < 3
                    ? n
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(n, t))
                    : r;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                s = Reflect.decorate(e, n, t, r);
              else
                for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) &&
                    (s = (a < 3 ? i(s) : a > 3 ? i(n, t, s) : i(n, t)) || s);
              return a > 3 && s && Object.defineProperty(n, t, s), s;
            })(
              [
                ((t = jn),
                (r = Sn),
                (i = "state"),
                function (e) {
                  var n = e.prototype;
                  t.forEach(function (e) {
                    n[L("get " + e)] = function () {
                      return this[i][e];
                    };
                  }),
                    r.forEach(function (e) {
                      n[L("set " + e)] = function (n) {
                        return (this[i][e] = n), this;
                      };
                    });
                }),
              ],
              n
            )),
            n
          );
        })(ne);
      function xn(e, n) {
        if ((void 0 === n && (n = []), !e)) return "";
        var t = [],
          r = V(e);
        return (
          $(r, n),
          r.forEach(function (n) {
            t.push(n.replace(/\d$/g, "") + "(" + e[n] + ")");
          }),
          t.join(" ")
        );
      }
      function Cn(e, n) {
        return void 0 === n && (n = !1), Rn({}, e, n);
      }
      function Rn(e, n, t) {
        for (var r in (void 0 === t && (t = !1), n)) {
          var i = n[r],
            a = mn(i);
          a === l
            ? (e[r] = t ? i.toValue() : i.clone())
            : a === c
            ? (e[r] = t ? Kn([r], i) : i)
            : a === u
            ? (e[r] = i.slice())
            : a === f
            ? P(e[r]) && !ln(e[r])
              ? Rn(e[r], i, t)
              : (e[r] = Cn(i, t))
            : (e[r] = n[r]);
        }
        return e;
      }
      function Ln(e) {
        return e[0] in Oe ? Oe[e[0]] : e;
      }
      function Kn(e, n) {
        var t = mn(n);
        if (t === l) return n.toValue();
        if (t === c) {
          if (e[0] !== be) return Kn(e, n());
        } else if (t === f) return Cn(n, !0);
        return n;
      }
      var Nn = (function () {
        function e(e) {
          void 0 === e && (e = {}),
            (this.properties = {}),
            (this.orderMap = new te(en)),
            (this.properties = {}),
            this.set(e);
        }
        var n = e.prototype;
        return (
          (n.get = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = this.raw.apply(this, e);
            return Kn(Ln(e), t);
          }),
          (n.getOrders = function (e) {
            return this.orderMap.get(e);
          }),
          (n.setOrders = function (e, n) {
            return this.orderMap.set(e, n);
          }),
          (n.getOrderObject = function () {
            return this.orderMap.getObject();
          }),
          (n.setOrderObject = function (e) {
            this.orderMap.setObject(e);
          }),
          (n.getKeys = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = this.raw.apply(this, e),
              r = mn(t) === f ? V(t) : [];
            return $(r, this.orderMap.get(e)), r;
          }),
          (n.gets = function () {
            for (var e = this, n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t];
            var r = this.get.apply(this, n);
            return this.getKeys.apply(this, n).map(function (t) {
              return {
                key: t,
                value: r[t],
                children: e.gets.apply(e, se(n, [t])),
              };
            });
          }),
          (n.raw = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return gn(Ln(e), this.properties);
          }),
          (n.remove = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = Ln(e),
              r = t.length;
            if (!r) return this;
            this.orderMap.remove(t);
            var i = gn(t, this.properties, r - 1);
            return P(i) && delete i[t[r - 1]], this;
          }),
          (n.set = function () {
            for (var n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t];
            var r = this,
              i = n.length,
              a = n.slice(0, -1),
              s = n[i - 1],
              o = a[0];
            if (1 === i && s instanceof e) r.merge(s);
            else if (o in Oe) r._set(Oe[o], s);
            else if (2 === i && M(o)) r._set(o, s);
            else if (ln(s))
              yn(a) ? r.set.apply(r, se(a, [cn(s)])) : r._set(a, s);
            else if (M(s)) r._set(a, s);
            else if (P(s))
              for (var c in (!r.has.apply(r, a) && yn(a) && r._set(a, {}), s))
                r.set.apply(r, se(a, [c, s[c]]));
            else if (I(s)) {
              if (yn(a, !0)) {
                if (bn(a) || !yn(a)) this._set(a, s);
                else {
                  var l = on(s);
                  P(l) && r.set.apply(r, se(a, [l]));
                }
                return this;
              }
              var u = (function (e) {
                  for (
                    var n = k(e, ";"), t = {}, r = n.length, i = r, a = 0;
                    a < r;
                    ++a
                  ) {
                    var s = k(n[a], ":");
                    s.length < 2 || !s[1]
                      ? --i
                      : (t[s[0].trim()] = on(s[1].trim()));
                  }
                  return { styles: t, length: i };
                })(s),
                f = u.styles,
                m = u.length;
              for (var c in f) r.set.apply(r, se(a, [c, f[c]]));
              if (m) return this;
              r._set(a, s);
            } else r._set(a, s);
            return r;
          }),
          (n.getNames = function () {
            return pn(this.properties, []);
          }),
          (n.has = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = Ln(e),
              r = t.length;
            return !!r && !A(gn(t, this.properties, r));
          }),
          (n.clone = function () {
            var n = new e();
            return n.setOrderObject(this.orderMap.orderMap), n.merge(this);
          }),
          (n.merge = function (e) {
            var n = this.properties,
              t = e.properties;
            return t && Rn(n, t), this;
          }),
          (n.toCSSObject = function () {
            var e = this.get(),
              n = {};
            for (var t in e)
              if (!yn([t], !0)) {
                var r = e[t];
                t === be
                  ? (n[be.replace("animation", E)] =
                      (I(r) ? r : r[xe]) || "initial")
                  : (n[t] = r);
              }
            var i = xn(e[Ge], this.orderMap.get([Ge])),
              a = xn(e.filter, this.orderMap.get([b]));
            return y && i && (n[y] = i), b && a && (n[b] = a), n;
          }),
          (n.toCSS = function () {
            var e = this.toCSSObject(),
              n = [],
              t = V(e);
            return (
              $(t, this.orderMap.get([])),
              t.forEach(function (t) {
                n.push(t + ":" + e[t] + ";");
              }),
              n.join("")
            );
          }),
          (n.clear = function () {
            return (this.properties = {}), this.orderMap.clear(), this;
          }),
          (n._set = function (e, n) {
            for (var t = this.properties, r = e.length, i = 0; i < r - 1; ++i) {
              var a = e[i];
              !(a in t) && (t[a] = {}), (t = t[a]);
            }
            if (r) {
              var s = e[r - 1];
              this.orderMap.add(e),
                (t[s] =
                  1 === r && s === be ? In(n) : I(n) && !bn(e) ? on(n, s) : n);
            }
          }),
          e
        );
      })();
      function Un(e, n, t, r) {
        var i = n.length;
        return e.map(function (e, a) {
          return a >= i ? e : Fn(e, n[a], t, r);
        });
      }
      function Fn(e, n, t, r) {
        if (0 === r) return n;
        if (0 === t || t + r === 0) return e;
        var i = mn(e),
          a = mn(n),
          s = i === c,
          o = a === c;
        if (s || o)
          return function () {
            return Fn(s ? on(e()) : e, o ? on(n()) : n, t, r);
          };
        if (i !== a) return e;
        if (i === l)
          return (function (e, n, t, r) {
            var i = e.type;
            if ("color" === i)
              return (function (e, n, t, r) {
                var i = e.value,
                  a = n.value,
                  s = e.model;
                if (s !== n.model) return Fn(e.toValue(), n.toValue(), t, r);
                3 === i.length && (i[3] = 1), 3 === a.length && (a[3] = 1);
                for (var o = Un(i, a, t, r), c = s, l = 0; l < 3; ++l)
                  o[l] = parseInt(o[l], 10);
                return new rn(o, {
                  type: "color",
                  model: c,
                  prefix: c + "(",
                  suffix: ")",
                });
              })(e, n, t, r);
            var a = Un(e.value, n.value, t, r);
            return new rn(a, {
              type: i,
              separator: e.separator || n.separator,
              prefix: e.prefix || n.prefix,
              suffix: e.suffix || n.suffix,
              model: e.model || n.model,
            });
          })(e, n, t, r);
        if (i === u) return Un(e, n, t, r);
        if ("value" !== i) return e;
        var f,
          m = R("" + e),
          _ = R("" + n);
        if (isNaN(m.value) || isNaN(_.value)) return e;
        f = T(m.value, _.value, t, r);
        var p = m.prefix || _.prefix,
          h = m.unit || _.unit;
        return p || h ? p + f + h : f;
      }
      function Bn(e, n) {
        for (var t = e.length, r = 0; r < t; ++r) {
          if (e[r] === n) return [r, r];
          if (e[r] > n) return [r > 0 ? r - 1 : 0, r];
        }
        return [t - 1, t - 1];
      }
      function Wn(e) {
        var n = [];
        for (var t in e) n.push(E + "-" + K(t) + ":" + e[t] + ";");
        return n.join("");
      }
      function qn(e, n, t) {
        var r = e[e.length - 1];
        (!r || r[0] !== n || r[1] !== t) && e.push([dn(n), dn(t)]);
      }
      var Vn = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (
              (r.times = []),
              (r.items = {}),
              (r.nameMap = new te(en)),
              (r.elements = []),
              (r.needUpdate = !0),
              r.load(n, t),
              r
            );
          }
          ae(n, e);
          var t = n.prototype;
          return (
            (t.getDuration = function () {
              var e = this.times,
                n = e.length;
              return (0 === n ? 0 : e[n - 1]) || this.state[Pe];
            }),
            (t.size = function () {
              return this.times.length;
            }),
            (t.setDuration = function (e) {
              if (!e) return this;
              var n = this.getDuration();
              if (n > 0) {
                var t = e / n,
                  r = this.times,
                  i = this.items,
                  a = {};
                (this.times = r.map(function (e) {
                  var n = dn(e * t);
                  return (a[n] = i[e]), n;
                })),
                  (this.items = a);
              } else this.newFrame(e);
              return this;
            }),
            (t.setId = function (e) {
              var n = this.state,
                t = this.elements,
                r = t.length;
              if (((n.id = e || Tn(!!r)), r && !n[Ze])) {
                var i = Pn(this.getId());
                (n[Ze] = "[" + ye + '="' + i + '"]'),
                  t.forEach(function (e) {
                    e.setAttribute(ye, i);
                  });
              }
              return this;
            }),
            (t.set = function (e) {
              for (var t = this, r = [], i = 1; i < arguments.length; i++)
                r[i - 1] = arguments[i];
              if (e instanceof n) return this.set(0, e);
              if (M(e))
                for (var a = e.length, s = 0; s < a; ++s) {
                  var o =
                    1 === a ? 0 : this.getUnitTime((s / (a - 1)) * 100 + "%");
                  this.set(o, e[s]);
                }
              else if (P(e)) {
                var c = function (n) {
                  var r = e[n];
                  x(n).forEach(function (e) {
                    var n = t.getUnitTime(e);
                    isNaN(n)
                      ? pn(r, [e]).forEach(function (e) {
                          for (
                            var n,
                              i = gn(e.slice(1), r),
                              a = M(i) ? i : [gn(e, t.target), i],
                              s = a.length,
                              o = 0;
                            o < s;
                            ++o
                          )
                            (n = t.newFrame(
                              (o / (s - 1)) * 100 + "%"
                            )).set.apply(n, se(e, [a[o]]));
                        })
                      : t.set(n, r);
                  });
                };
                for (var o in e) c(o);
              } else if (!A(e)) {
                var l = r[0];
                x(e + "").forEach(function (e) {
                  var i = t.getUnitTime(e);
                  if (l instanceof n) {
                    var a = l.getDelay(),
                      s = l.toObject(!t.hasFrame(i + a)),
                      o = l.getDuration(),
                      c = l.getDirection().indexOf("reverse") > -1;
                    for (var u in s) {
                      var f = c ? o - parseFloat(u) : parseFloat(u);
                      t.set(i + f, s[u]);
                    }
                  } else if (1 === r.length && M(l))
                    l.forEach(function (e) {
                      t.set(i, e);
                    });
                  else {
                    var m = t.newFrame(i);
                    m.set.apply(m, r);
                  }
                });
              }
              return (this.needUpdate = !0), this;
            }),
            (t.get = function (e) {
              for (var n = [], t = 1; t < arguments.length; t++)
                n[t - 1] = arguments[t];
              var r = this.getFrame(e);
              return r && r.get.apply(r, n);
            }),
            (t.getOrders = function (e) {
              return this.needUpdate && this.update(), this.nameMap.get(e);
            }),
            (t.setOrders = function (e, n) {
              this.needUpdate && this.update();
              var t = this.nameMap.set(e, n);
              return this.updateFrameOrders(), t;
            }),
            (t.getOrderObject = function () {
              return this.nameMap.getObject();
            }),
            (t.setOrderObject = function (e) {
              this.nameMap.setObject(e), this.updateFrameOrders();
            }),
            (t.remove = function (e) {
              for (var n = [], t = 1; t < arguments.length; t++)
                n[t - 1] = arguments[t];
              if (n.length) {
                var r = this.getFrame(e);
                r && r.remove.apply(r, n);
              } else this.removeFrame(e);
              return (this.needUpdate = !0), this;
            }),
            (t.append = function (e) {
              return (
                e instanceof n
                  ? this.set(this.getDuration(), e)
                  : this.append(new n(e)),
                this
              );
            }),
            (t.prepend = function (e) {
              if (e instanceof n) {
                var t = e.getDuration() + e.getDelay(),
                  r = this.getFrame(0);
                this.removeFrame(0),
                  this.unshift(t),
                  this.set(0, e),
                  this.set(t + Ae, r);
              } else this.prepend(new n(e));
              return this;
            }),
            (t.unshift = function (e) {
              var n = this.times,
                t = this.items,
                r = {};
              return (
                (this.times = n.map(function (n) {
                  var i = dn(e + n);
                  return (r[i] = t[n]), i;
                })),
                (this.items = r),
                this
              );
            }),
            (t.toObject = function (e) {
              void 0 === e && (e = !0);
              var n = {},
                t = this.getDelay();
              return (
                this.forEach(function (r, i) {
                  n[(i || e ? 0 : Ae) + t + i] = r.clone();
                }),
                n
              );
            }),
            (t.setSelector = function (e) {
              return (
                D(e) ? this.setElement(e(this.getId())) : this.setElement(e),
                this
              );
            }),
            (t.getElements = function () {
              return this.elements;
            }),
            (t.setElements = function (e) {
              return this.setElement(e);
            }),
            (t.setElement = function (e) {
              var n = this.state,
                t = [];
              if (!e) return this;
              if (!0 === e || I(e)) {
                var r = !0 === e ? "" + n.id : e,
                  i = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(r);
                (t = N(Y(i ? i[1] : r, !0))), (n[Ze] = r);
              } else t = e instanceof Element ? [e] : N(e);
              return t.length
                ? ((this.elements = t),
                  this.setId(this.getId()),
                  (this.target = t[0].style),
                  (this.targetFunc = function (e) {
                    var r = e.get("attribute");
                    if (r) {
                      var i = function (e) {
                        t.forEach(function (n) {
                          n.setAttribute(e, r[e]);
                        });
                      };
                      for (var a in r) i(a);
                    }
                    if (e.has("html")) {
                      var s = e.get("html");
                      t.forEach(function (e) {
                        e.innerHTML = s;
                      });
                    }
                    var o = e.toCSS();
                    if (n.cssText !== o)
                      return (
                        (n.cssText = o),
                        t.forEach(function (e) {
                          e.style.cssText += o;
                        }),
                        e
                      );
                  }),
                  this)
                : this;
            }),
            (t.setTarget = function (e) {
              return (
                (this.target = e),
                (this.targetFunc = function (n) {
                  var t = n.get();
                  for (var r in t) e[r] = t[r];
                }),
                this
              );
            }),
            (t.setCSS = function (e, n) {
              return (
                void 0 === n && (n = []),
                this.set(
                  e,
                  (function (e, n) {
                    if (!e || !n || !n.length) return {};
                    var t;
                    if (e instanceof Element) t = e;
                    else {
                      if (!e.length) return {};
                      t = e[0];
                    }
                    for (
                      var r = {},
                        i = (function (e) {
                          var n;
                          return (
                            (null ===
                              (n = null == e ? void 0 : e.ownerDocument) ||
                            void 0 === n
                              ? void 0
                              : n.defaultView) || window
                          );
                        })(t).getComputedStyle(t),
                        a = n.length,
                        s = 0;
                      s < a;
                      ++s
                    )
                      r[n[s]] = i[n[s]];
                    return r;
                  })(this.elements, n)
                ),
                this
              );
            }),
            (t.setTime = function (n, t, r, i) {
              e.prototype.setTime.call(this, n, t, r);
              var a = this.getIterationTime(),
                s = this.getEasing() || i,
                o = this.getNowFrame(a, s),
                c = this.getTime();
              return (
                (this.temp = o),
                this.trigger("animate", { frame: o, currentTime: c, time: a }),
                this.targetFunc && this.targetFunc(o),
                this
              );
            }),
            (t.update = function () {
              var e = this.nameMap,
                n = {};
              this.forEach(function (e) {
                hn(n, e.properties);
              });
              var t = new te(en);
              return (
                (function n(r, i) {
                  var a = V(r);
                  $(a, e.get(i)),
                    t.set(i, a),
                    a.forEach(function (e) {
                      var t = r[e];
                      P(t) && n(t, se(i, [e]));
                    });
                })(n, []),
                (this.nameMap = t),
                this.forEach(function (e) {
                  e.setOrderObject(t.orderMap);
                }),
                (this.needUpdate = !1),
                this
              );
            }),
            (t.newFrame = function (e) {
              var n = this.getFrame(e);
              return n || ((n = new Nn()), this.setFrame(e, n), n);
            }),
            (t.setFrame = function (e, n) {
              var t = this.getUnitTime(e);
              return (
                (this.items[t] = n),
                (function (e, n) {
                  for (var t = e.length, r = 0; r < t; ++r)
                    if (n < e[r]) return void e.splice(r, 0, n);
                  e[t] = n;
                })(this.times, t),
                (this.needUpdate = !0),
                this
              );
            }),
            (t.getFrame = function (e) {
              return this.items[this.getUnitTime(e)];
            }),
            (t.removeFrame = function (e) {
              var n = this.getUnitTime(e),
                t = this.items,
                r = this.times.indexOf(n);
              return (
                delete t[n],
                r > -1 && this.times.splice(r, 1),
                (this.needUpdate = !0),
                this
              );
            }),
            (t.hasFrame = function (e) {
              return this.getUnitTime(e) in this.items;
            }),
            (t.hasName = function (e) {
              return this.needUpdate && this.update(), !!this.nameMap.get(e);
            }),
            (t.mergeFrame = function (e, n) {
              return n && this.newFrame(e).merge(n), this;
            }),
            (t.getNowFrame = function (e, n, t) {
              var r = this;
              this.needUpdate && this.update();
              var i = new Nn(),
                a = Bn(this.times, e),
                s = a[0],
                o = a[1],
                c = this.getEasing() || n,
                l = this.nameMap;
              if (this.hasName([be])) {
                var u = this.getNowValue(e, [be], s, o, !1, 0, !0);
                D(u) && (c = u);
              }
              if (t) {
                var f = this.getFrame(e),
                  m = f.orderMap.filter([], function (e) {
                    return f.has.apply(f, e);
                  });
                for (var _ in Ee) {
                  var p = l.get([_]);
                  m.get([_]) && p && m.set([_], p);
                }
                l = m;
              }
              var h = l.gets([]);
              return (
                i.setOrderObject(l.orderMap),
                h.forEach(function (n) {
                  var a = r.getNowValue(e, n, s, o, t, c, bn(n));
                  A(a) || i.set(n, a);
                }),
                i
              );
            }),
            (t.load = function (e, n) {
              var t;
              if (
                (void 0 === e && (e = {}),
                void 0 === n && (n = e.options),
                n && this.setOptions(n),
                M(e))
              )
                this.set(e);
              else if (e.keyframes) this.set(e.keyframes);
              else
                for (var r in e)
                  "options" !== r && this.set((((t = {})[r] = e[r]), t));
              return n && n[Pe] && this.setDuration(n[Pe]), this;
            }),
            (t.clone = function () {
              var e = new n();
              return (
                e.setOptions(this.state),
                e.setOrderObject(this.nameMap.orderMap),
                this.forEach(function (n, t) {
                  e.setFrame(t, n.clone());
                }),
                e
              );
            }),
            (t.forEach = function (e) {
              var n = this.times,
                t = this.items;
              return (
                n.forEach(function (n) {
                  e(t[n], n, t);
                }),
                this
              );
            }),
            (t.setOptions = function (n) {
              void 0 === n && (n = {}), e.prototype.setOptions.call(this, n);
              var t = n.id,
                r = n.selector,
                i = n.elements,
                a = n.element,
                s = n.target;
              return (
                t && this.setId(t),
                s
                  ? this.setTarget(s)
                  : r
                  ? this.setSelector(r)
                  : (i || a) && this.setElement(i || a),
                this
              );
            }),
            (t.toCSS = function (e, n, t) {
              void 0 === e && (e = { className: Fe }),
                void 0 === n && (n = this.getDuration()),
                void 0 === t && (t = []);
              var r = this.state,
                i = r[Ze];
              if (!i) return "";
              var a = this.getDuration();
              (r[Pe] = a), t.push(r);
              var s = N(t).reverse(),
                o = Pn(An(this)),
                c = t[0],
                l = F(
                  s,
                  function (e) {
                    return e[De] === $e || !isFinite(e[Pe]);
                  },
                  t.length - 1
                ),
                u = s.slice(0, l),
                f =
                  n ||
                  u.reduce(function (e, n) {
                    return (n[Se] + e * n[De]) / n[ke];
                  }, a),
                m = s.slice(l).reduce(function (e, n) {
                  return (e + n[Se]) / n[ke];
                }, 0),
                _ = B(
                  s,
                  function (e) {
                    return e[je] && e[xe];
                  },
                  r
                )[xe],
                p = s[l][De],
                h = c[Me],
                d = s[l][Ie],
                g = Wn({
                  fillMode: h,
                  direction: d,
                  iterationCount: p,
                  delay: m + "s",
                  name: ve + "KEYFRAMES_" + o,
                  duration: f / c[ke] + "s",
                  timingFunction: _,
                }),
                v = x(i).map(function (e) {
                  var n = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(e);
                  return n ? [n[1], n[2]] : [e, ""];
                }),
                y = e.className,
                b = e.selector;
              return (
                "\n    " +
                ((D(b) ? b(this, i) : b) ||
                  v.map(function (e) {
                    var n = e[0],
                      t = e[1];
                    return n + "." + y + t;
                  })) +
                " {" +
                g +
                "}\n    " +
                v.map(function (e) {
                  var n = e[0],
                    t = e[1];
                  return n + "." + Be + t;
                }) +
                " {" +
                E +
                "-play-state: paused;}\n    @" +
                O +
                " " +
                ve +
                "KEYFRAMES_" +
                o +
                "{" +
                this._toKeyframes(f, u, d) +
                "}"
              );
            }),
            (t.exportCSS = function (e, n, t) {
              if (!this.elements.length) return "";
              var r = this.toCSS(e, n, t);
              return (
                (t && !A(t[De])) ||
                  (this.styledInjector &&
                    (this.styledInjector.destroy(),
                    (this.styledInjector = null)),
                  (this.styled = re(r)),
                  (this.styledInjector = this.styled.inject(
                    this.getAnimationElement(),
                    { original: !0 }
                  ))),
                this
              );
            }),
            (t.pause = function () {
              return (
                e.prototype.pause.call(this), On(this) && this.pauseCSS(), this
              );
            }),
            (t.pauseCSS = function () {
              return (
                this.elements.forEach(function (e) {
                  z(e, Be);
                }),
                this
              );
            }),
            (t.endCSS = function () {
              return (
                this.elements.forEach(function (e) {
                  J(e, Be), J(e, Fe);
                }),
                En(this, !1),
                this
              );
            }),
            (t.end = function () {
              return (
                wn(this) && this.endCSS(), e.prototype.end.call(this), this
              );
            }),
            (t.playCSS = function (e, n, t) {
              return (
                void 0 === e && (e = !0),
                void 0 === t && (t = {}),
                Mn(this, e, n, t),
                this
              );
            }),
            (t.getAnimationElement = function () {
              return this.elements[0];
            }),
            (t.addPlayClass = function (e, n, t) {
              void 0 === t && (t = {});
              var r = this.elements,
                i = r.length,
                a = Wn(t);
              if (i)
                return (
                  e
                    ? r.forEach(function (e) {
                        J(e, Be);
                      })
                    : (r.forEach(function (e) {
                        (e.style.cssText += a),
                          (function (e, n) {
                            return e.classList
                              ? e.classList.contains(n)
                              : !!e.className.match(
                                  new RegExp("(\\s|^)" + n + "(\\s|$)")
                                );
                          })(e, Fe) && J(e, Fe);
                      }),
                      r.forEach(function (e) {
                        e.clientWidth;
                      }),
                      r.forEach(function (e) {
                        z(e, Fe);
                      })),
                  r[0]
                );
            }),
            (t.clear = function () {
              return (
                (this.times = []),
                (this.items = {}),
                (this.nameMap = new te(en)),
                this.styledInjector && this.styledInjector.destroy(),
                (this.styled = null),
                (this.styledInjector = null),
                (this.temp = null),
                (this.needUpdate = !0),
                this
              );
            }),
            (t.getNowValue = function (e, n, t, r, i, a, s) {
              var o,
                c,
                l,
                u,
                f = this.times,
                m = f.length,
                _ = A(t),
                p = A(r);
              if (_ || p) {
                var h = Bn(f, e);
                _ && (t = h[0]), p && (r = h[1]);
              }
              for (var d = t; d >= 0; --d)
                if ((v = this.getFrame(f[d])).has.apply(v, n)) {
                  (o = f[d]), (l = v);
                  break;
                }
              var g = l && l.raw.apply(l, n);
              if (i && !yn([n[0]])) return o === e ? g : void 0;
              if (s) return g;
              for (d = r; d < m; ++d) {
                var v;
                if ((v = this.getFrame(f[d])).has.apply(v, n)) {
                  (c = f[d]), (u = v);
                  break;
                }
              }
              var y = u && u.raw.apply(u, n);
              return !l || A(g)
                ? y
                : !u || A(y) || g === y
                ? g
                : (function (e, n, t, r, i, a) {
                    if (e === n) return r;
                    if (e === t) return i;
                    if (!a) return Fn(r, i, e - n, t - e);
                    var s = a((e - n) / (t - n));
                    return Fn(r, i, s, 1 - s);
                  })(e, Math.max(o, 0), c, g, y, a);
            }),
            (t._toKeyframes = function (e, n, t) {
              var r = this,
                i = {},
                a = this.times.slice();
              if (!a.length) return "";
              var s = this.getDuration();
              !this.getFrame(0) && a.unshift(0), !this.getFrame(s) && a.push(s);
              var o = (function (e, n) {
                  var t = e.map(function (e) {
                      return [e, e];
                    }),
                    r = [];
                  return (
                    n.forEach(function (e) {
                      for (
                        var n = e[De],
                          i = e[Se],
                          a = e[ke],
                          s = e[Ie],
                          o = Math.ceil(n),
                          c = t[t.length - 1][0],
                          l = t.length,
                          u = c * n,
                          f = 0;
                        f < o;
                        ++f
                      )
                        for (
                          var m =
                              s === qe ||
                              (s === We && f % 2) ||
                              (s === Ve && !(f % 2)),
                            _ = 0;
                          _ < l;
                          ++_
                        ) {
                          var p = t[m ? l - _ - 1 : _],
                            h = p[1],
                            d = c * f + (m ? c - p[0] : p[0]),
                            g = t[m ? l - _ : _ - 1];
                          if (d > u) {
                            if (0 !== _) {
                              var v = c * f + (m ? c - g[0] : g[0]),
                                y = T(g[1], h, u - v, d - u);
                              qn(r, (i + c * n) / a, y);
                            }
                            break;
                          }
                          if (
                            d === u &&
                            r.length &&
                            r[r.length - 1][0] === u + i
                          )
                            break;
                          qn(r, (i + d) / a, h);
                        }
                      i && r.unshift([0, r[0][1]]), (t = r), (r = []);
                    }),
                    t
                  );
                })(a, n),
                c = o[o.length - 1];
              c[0] < e && qn(o, e, c[1]);
              var l = -1;
              return o
                .map(function (n) {
                  var a = n[0],
                    o = n[1];
                  i[o] ||
                    (i[o] = (
                      r.hasFrame(o) && 0 !== o && o !== s
                        ? r.getNowFrame(o, 0, !0)
                        : r.getNowFrame(o)
                    ).toCSS());
                  var c = (a / e) * 100;
                  return (
                    c - l < Ae && (c += Ae),
                    (l = c),
                    Math.min(c, 100) +
                      "%{\n                " +
                      (0 !== a || Dn(0, 1, t) ? i[o] : "") +
                      "\n            }"
                  );
                })
                .join("");
            }),
            (t.updateFrameOrders = function () {
              var e = this.nameMap.orderMap;
              this.forEach(function (n) {
                n.setOrderObject(e);
              });
            }),
            n
          );
        })(kn),
        $n = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (r.items = {}), (r.orderMap = new te(en)), r.load(n, t), r;
          }
          ae(n, e);
          var t = n.prototype;
          return (
            (t.getDuration = function () {
              var e = 0;
              return (
                this.forEach(function (n) {
                  e = Math.max(e, n.getTotalDuration() / n.getPlaySpeed());
                }),
                e || this.state[Pe]
              );
            }),
            (t.setDuration = function (n) {
              this.items;
              var t = this.getDuration();
              if (0 === n || !isFinite(t)) return this;
              if (0 === t)
                this.forEach(function (e) {
                  e.setDuration(n);
                });
              else {
                var r = n / t;
                this.forEach(function (e) {
                  e.setDelay(e.getDelay() * r),
                    e.setDuration(e.getDuration() * r);
                });
              }
              return e.prototype.setDuration.call(this, n), this;
            }),
            (t.getItem = function (e) {
              return this.items[e];
            }),
            (t.newItem = function (e, n) {
              if ((void 0 === n && (n = {}), this.items[e]))
                return this.items[e];
              var t = new Vn();
              return this.setItem(e, t), t.setOptions(n), t;
            }),
            (t.removeItem = function (e) {
              return delete this.items[e], this.orderMap.remove([e]), this;
            }),
            (t.setItem = function (e, n) {
              return (
                n.setId(e), (this.items[e] = n), this.orderMap.add([e]), this
              );
            }),
            (t.setTime = function (n, t, r, i) {
              e.prototype.setTime.call(this, n, t, r);
              var a = this.getIterationTime(),
                s = this.getEasing() || i,
                o = {};
              return (
                this.forEach(function (e) {
                  e.setTime(a * e.getPlaySpeed() - e.getDelay(), t, !0, s),
                    (o[e.getId()] = e.temp);
                }),
                (this.temp = o),
                this.trigger("animate", {
                  frames: o,
                  currentTime: this.getTime(),
                  time: a,
                }),
                this
              );
            }),
            (t.forEach = function (e) {
              var n = this.items;
              return (
                this.getOrders().forEach(function (t, r) {
                  e(n[t], t, r, n);
                }),
                this
              );
            }),
            (t.toCSS = function (e, n, t) {
              void 0 === n && (n = this.getDuration()),
                void 0 === t && (t = []);
              var r = n && isFinite(n) ? n : 0,
                i = [],
                a = this.state;
              return (
                (a[Pe] = this.getDuration()),
                this.forEach(function (n) {
                  i.push(n.toCSS(e, r, t.concat(a)));
                }),
                i.join("")
              );
            }),
            (t.exportCSS = function (e, n, t) {
              var r = this.toCSS(e, n, t);
              return (
                (t && t.length) ||
                  (this.styledInjector &&
                    (this.styledInjector.destroy(),
                    (this.styledInjector = null)),
                  (this.styled = re(r)),
                  (this.styledInjector = this.styled.inject(
                    this.getAnimationElement(),
                    { original: !0 }
                  ))),
                this
              );
            }),
            (t.append = function (e) {
              e.setDelay(e.getDelay() + this.getDuration()),
                this.setItem(An(e), e);
            }),
            (t.pauseCSS = function () {
              return this.forEach(function (e) {
                e.pauseCSS();
              });
            }),
            (t.pause = function () {
              return (
                e.prototype.pause.call(this),
                On(this) && this.pauseCSS(),
                this.forEach(function (e) {
                  e.pause();
                }),
                this
              );
            }),
            (t.endCSS = function () {
              this.forEach(function (e) {
                e.endCSS();
              }),
                En(this, !1);
            }),
            (t.end = function () {
              return (
                wn(this) && this.endCSS(), e.prototype.end.call(this), this
              );
            }),
            (t.getOrders = function () {
              return this.orderMap.get([]) || [];
            }),
            (t.setOrders = function (e) {
              return this.orderMap.set([], e);
            }),
            (t.getAnimationElement = function () {
              var e;
              return (
                this.forEach(function (n) {
                  var t = n.getAnimationElement();
                  !e && (e = t);
                }),
                e
              );
            }),
            (t.addPlayClass = function (e, n, t) {
              var r;
              return (
                void 0 === t && (t = {}),
                this.forEach(function (i) {
                  var a = i.addPlayClass(e, n, t);
                  !r && (r = a);
                }),
                r
              );
            }),
            (t.playCSS = function (e, n, t) {
              return (
                void 0 === e && (e = !0),
                void 0 === t && (t = {}),
                Mn(this, e, n, t),
                this
              );
            }),
            (t.set = function (e) {
              return this.load(e), this;
            }),
            (t.clear = function () {
              this.finish(),
                (this.items = {}),
                (this.orderMap = new te(en)),
                this.styledInjector && this.styledInjector.destroy(),
                (this.styled = null),
                (this.styledInjector = null);
            }),
            (t.load = function (e, t) {
              if (
                (void 0 === e && (e = {}), void 0 === t && (t = e.options), !e)
              )
                return this;
              var r = (t && t[Ze]) || this.state[Ze];
              for (var i in e)
                if ("options" !== i) {
                  var a = e[i],
                    s = void 0;
                  if (a instanceof n || a instanceof Vn)
                    this.setItem(i, a), (s = a);
                  else {
                    if (D(a) && r) {
                      for (
                        var o = h ? Y("" + (D(r) ? r(i) : i), !0) : [],
                          c = o.length,
                          l = new n(),
                          u = 0;
                        u < c;
                        ++u
                      )
                        l.newItem(u).setId().setElement(o[u]).load(a(u, o[u]));
                      this.setItem(i, l);
                      continue;
                    }
                    (s = this.newItem(i)).load(a);
                  }
                  r && s.setSelector(r);
                }
              this.setOptions(t);
            }),
            (t.setOptions = function (n) {
              void 0 === n && (n = {}), e.prototype.setOptions.call(this, n);
              var t = n.selector;
              return t && (this.state[Ze] = t), this;
            }),
            (t.setSelector = function (e) {
              var n = this.state,
                t = e || n[Ze];
              n[Ze] = t;
              var r = D(e);
              return (
                t &&
                  this.forEach(function (n, i) {
                    n.setSelector(r ? e(i) : t);
                  }),
                this
              );
            }),
            (t.start = function (n) {
              void 0 === n && (n = this.state[Se]);
              var t = e.prototype.start.call(this, n);
              return (
                t
                  ? this.forEach(function (e) {
                      e.start(0);
                    })
                  : this.forEach(function (e) {
                      e.setPlayState(Ne);
                    }),
                t
              );
            }),
            (n.VERSION = "1.5.0"),
            n
          );
        })(kn);
      function Xn(e, n) {
        return new $n(e, n).play();
      }
      function Hn(e, n) {
        return new Vn(e, n).play();
      }
      const Yn = $n;
    },
  },
]);
