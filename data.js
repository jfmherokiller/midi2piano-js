(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],2:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],7:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":15}],10:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],11:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],12:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],13:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],14:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":18,"./assertThisInitialized":3}],15:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],16:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":1,"./iterableToArrayLimit":11,"./nonIterableRest":12}],17:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":10,"./nonIterableSpread":13}],18:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],19:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":20}],20:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":21}],21:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);

},{}],22:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/typeof'), require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/possibleConstructorReturn'), require('@babel/runtime/helpers/getPrototypeOf'), require('@babel/runtime/helpers/inherits'), require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/assertThisInitialized'), require('@babel/runtime/helpers/defineProperty'), require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/typeof', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/possibleConstructorReturn', '@babel/runtime/helpers/getPrototypeOf', '@babel/runtime/helpers/inherits', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/assertThisInitialized', '@babel/runtime/helpers/defineProperty', 'tslib'], factory) :
    (global = global || self, factory(global.standardizedAudioContext = {}, global._typeof, global._classCallCheck, global._slicedToArray, global._createClass, global._possibleConstructorReturn, global._getPrototypeOf, global._inherits, global._regeneratorRuntime, global._asyncToGenerator, global._toConsumableArray, global._assertThisInitialized, global._defineProperty, global.tslib_1));
}(this, function (exports, _typeof, _classCallCheck, _slicedToArray, _createClass, _possibleConstructorReturn, _getPrototypeOf, _inherits, _regeneratorRuntime, _asyncToGenerator, _toConsumableArray, _assertThisInitialized, _defineProperty, tslib_1) { 'use strict';

    _typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;
    _classCallCheck = _classCallCheck && _classCallCheck.hasOwnProperty('default') ? _classCallCheck['default'] : _classCallCheck;
    _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;
    _createClass = _createClass && _createClass.hasOwnProperty('default') ? _createClass['default'] : _createClass;
    _possibleConstructorReturn = _possibleConstructorReturn && _possibleConstructorReturn.hasOwnProperty('default') ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
    _getPrototypeOf = _getPrototypeOf && _getPrototypeOf.hasOwnProperty('default') ? _getPrototypeOf['default'] : _getPrototypeOf;
    _inherits = _inherits && _inherits.hasOwnProperty('default') ? _inherits['default'] : _inherits;
    _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
    _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;
    _toConsumableArray = _toConsumableArray && _toConsumableArray.hasOwnProperty('default') ? _toConsumableArray['default'] : _toConsumableArray;
    _assertThisInitialized = _assertThisInitialized && _assertThisInitialized.hasOwnProperty('default') ? _assertThisInitialized['default'] : _assertThisInitialized;
    _defineProperty = _defineProperty && _defineProperty.hasOwnProperty('default') ? _defineProperty['default'] : _defineProperty;

    /*!
     * modernizr v3.6.0
     * Build https://modernizr.com/download?-promises-typedarrays-webaudio-dontmin
     *
     * Copyright (c)
     *  Faruk Ates
     *  Paul Irish
     *  Alex Sexton
     *  Ryan Seddon
     *  Patrick Kettner
     *  Stu Cox
     *  Richard Herrera

     * MIT License
     */
    var browsernizr = (function (window) {
      var tests = [];
      /**
       *
       * ModernizrProto is the constructor for Modernizr
       *
       * @class
       * @access public
       */

      var ModernizrProto = {
        // The current version, dummy
        _version: '3.6.0',
        // Any settings that don't work as separate modules
        // can go in here as configuration.
        _config: {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        // Queue of tests
        _q: [],
        // Stub these for people who are listening
        on: function on(test, cb) {
          // I don't really think people should do this, but we can
          // safe guard it a bit.
          // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
          // This is in case people listen to synchronous tests. I would leave it out,
          // but the code to *disallow* sync tests in the real version of this
          // function is actually larger than this.
          var self = this;
          setTimeout(function () {
            cb(self[test]);
          }, 0);
        },
        addTest: function addTest(name, fn, options) {
          tests.push({
            name: name,
            fn: fn,
            options: options
          });
        },
        addAsyncTest: function addAsyncTest(fn) {
          tests.push({
            name: null,
            fn: fn
          });
        }
      }; // Fake some of Object.create so we can force non test results to be non "own" properties.

      var Modernizr = function Modernizr() {};

      Modernizr.prototype = ModernizrProto; // Leak modernizr globally when you `require` it rather than force it here.
      // Overwrite name so constructor name is nicer :D

      Modernizr = new Modernizr();
      var classes = [];
      /**
       * is returns a boolean if the typeof an obj is exactly type.
       *
       * @access private
       * @function is
       * @param {*} obj - A thing we want to check the type of
       * @param {string} type - A string to compare the typeof against
       * @returns {boolean}
       */

      function is(obj, type) {
        return _typeof(obj) === type;
      }
      /**
       * Run through all tests and detect their support in the current UA.
       *
       * @access private
       */

      function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;

        for (var featureIdx in tests) {
          if (tests.hasOwnProperty(featureIdx)) {
            featureNames = [];
            feature = tests[featureIdx]; // run the test, throw the return value into the Modernizr,
            // then based on that boolean, define an appropriate className
            // and push it into an array of classes we'll join later.
            //
            // If there is no name, it's an 'async' test that is run,
            // but not directly added to the object. That should
            // be done with a post-run addTest call.

            if (feature.name) {
              featureNames.push(feature.name.toLowerCase());

              if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                // Add all the aliases into the names list
                for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                  featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                }
              }
            } // Run the test, or use the raw value if it's not a function


            result = is(feature.fn, 'function') ? feature.fn() : feature.fn; // Set each of the names on the Modernizr object

            for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
              featureName = featureNames[nameIdx]; // Support dot properties as sub tests. We don't do checking to make sure
              // that the implied parent tests have been added. You must call them in
              // order (either in the test, or make the parent test a dependency).
              //
              // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
              // hashtag famous last words

              featureNameSplit = featureName.split('.');

              if (featureNameSplit.length === 1) {
                Modernizr[featureNameSplit[0]] = result;
              } else {
                // cast to a Boolean, if not one already
                if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                  Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
                }

                Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
              }

              classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
            }
          }
        }
      }
      /*!
      {
        "name": "ES6 Promises",
        "property": "promises",
        "caniuse": "promises",
        "polyfills": ["es6promises"],
        "authors": ["Krister Kari", "Jake Archibald"],
        "tags": ["es6"],
        "notes": [{
          "name": "The ES6 promises spec",
          "href": "https://github.com/domenic/promises-unwrapping"
        },{
          "name": "Chromium dashboard - ES6 Promises",
          "href": "https://www.chromestatus.com/features/5681726336532480"
        },{
          "name": "JavaScript Promises: There and back again - HTML5 Rocks",
          "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
        }]
      }
      !*/

      /* DOC
      Check if browser implements ECMAScript 6 Promises per specification.
      */

      Modernizr.addTest('promises', function () {
        return 'Promise' in window && // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        'resolve' in window.Promise && 'reject' in window.Promise && 'all' in window.Promise && 'race' in window.Promise && // Older version of the spec had a resolver object
        // as the arg rather than a function
        function () {
          var resolve;
          new window.Promise(function (r) {
            resolve = r;
          });
          return typeof resolve === 'function';
        }();
      });
      /*!
      {
        "name": "Typed arrays",
        "property": "typedarrays",
        "caniuse": "typedarrays",
        "tags": ["js"],
        "authors": ["Stanley Stuart (@fivetanley)"],
        "notes": [{
          "name": "MDN documentation",
          "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
        },{
          "name": "Kronos spec",
          "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
        }],
        "polyfills": ["joshuabell-polyfill"]
      }
      !*/

      /* DOC
      Detects support for native binary data manipulation via Typed Arrays in JavaScript.
      
      Does not check for DataView support; use `Modernizr.dataview` for that.
      */
      // Should fail in:
      // Internet Explorer <= 9
      // Firefox <= 3.6
      // Chrome <= 6.0
      // iOS Safari < 4.2
      // Safari < 5.1
      // Opera < 11.6
      // Opera Mini, <= 7.0
      // Android Browser < 4.0
      // Blackberry Browser < 10.0

      Modernizr.addTest('typedarrays', 'ArrayBuffer' in window);
      /*!
      {
        "name": "Web Audio API",
        "property": "webaudio",
        "caniuse": "audio-api",
        "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
        "tags": ["audio", "media"],
        "builderAliases": ["audio_webaudio_api"],
        "authors": ["Addy Osmani"],
        "notes": [{
          "name": "W3 Specification",
          "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
        }]
      }
      !*/

      /* DOC
      Detects the older non standard webaudio API, (as opposed to the standards based AudioContext API)
      */

      Modernizr.addTest('webaudio', function () {
        var prefixed = 'webkitAudioContext' in window;
        var unprefixed = 'AudioContext' in window;

        if (Modernizr._config.usePrefixes) {
          return prefixed || unprefixed;
        }

        return unprefixed;
      }); // Run each test

      testRunner();
      delete ModernizrProto.addTest;
      delete ModernizrProto.addAsyncTest; // Run the things that are supposed to run after the tests

      for (var i = 0; i < Modernizr._q.length; i++) {
        Modernizr._q[i]();
      } // Leak Modernizr namespace


      return Modernizr;
    })(window);

    var createAbortError = function createAbortError() {
      try {
        return new DOMException('', 'AbortError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 20;
        err.name = 'AbortError';
        return err;
      }
    };

    var AUDIO_NODE_STORE = new WeakMap();
    var AUDIO_GRAPHS = new WeakMap();
    var AUDIO_PARAM_STORE = new WeakMap();
    var BACKUP_NATIVE_CONTEXT_STORE = new WeakMap();
    var CONTEXT_STORE = new WeakMap();
    var DETACHED_ARRAY_BUFFERS = new WeakSet(); // This clunky name is borrowed from the spec. :-)

    var NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS = new WeakMap();
    var NODE_TO_PROCESSOR_MAPS = new WeakMap();
    var TEST_RESULTS = new WeakMap();

    var evaluateSource = function evaluateSource(source) {
      return new Promise(function (resolve, reject) {
        var head = document.head;

        if (head === null) {
          reject(new SyntaxError());
        } else {
          var script = document.createElement('script'); // @todo Safari doesn't like URLs with a type of 'application/javascript; charset=utf-8'.

          var blob = new Blob([source], {
            type: 'application/javascript'
          });
          var url = URL.createObjectURL(blob);
          var originalOnErrorHandler = window.onerror;

          var removeErrorEventListenerAndRevokeUrl = function removeErrorEventListenerAndRevokeUrl() {
            window.onerror = originalOnErrorHandler;
            URL.revokeObjectURL(url);
          };

          window.onerror = function (message, src, lineno, colno, error) {
            // @todo Edge thinks the source is the one of the html document.
            if (src === url || src === location.href && lineno === 1 && colno === 1) {
              removeErrorEventListenerAndRevokeUrl();
              reject(error);
              return false;
            }

            if (originalOnErrorHandler !== null) {
              return originalOnErrorHandler(message, src, lineno, colno, error);
            }
          };

          script.onerror = function () {
            removeErrorEventListenerAndRevokeUrl();
            reject(new SyntaxError());
          };

          script.onload = function () {
            removeErrorEventListenerAndRevokeUrl();
            resolve();
          };

          script.src = url;
          script.type = 'module';
          head.appendChild(script);
        }
      });
    };

    var createInvalidStateError = function createInvalidStateError() {
      try {
        return new DOMException('', 'InvalidStateError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 11;
        err.name = 'InvalidStateError';
        return err;
      }
    };

    var getNativeContext = function getNativeContext(context) {
      var nativeContext = CONTEXT_STORE.get(context);

      if (nativeContext === undefined) {
        throw createInvalidStateError();
      }

      return nativeContext;
    };

    var handler = {
      construct: function construct() {
        return handler;
      }
    };
    var isConstructible = function isConstructible(constructible) {
      try {
        var proxy = new Proxy(constructible, handler);
        new proxy(); // tslint:disable-line:no-unused-expression
      } catch (_a) {
        return false;
      }

      return true;
    };

    /*
     * This massive regex tries to cover all the following cases.
     *
     * import './path';
     * import defaultImport from './path';
     * import { namedImport } from './path';
     * import { namedImport as renamendImport } from './path';
     * import * as namespaceImport from './path';
     * import defaultImport, { namedImport } from './path';
     * import defaultImport, { namedImport as renamendImport } from './path';
     * import defaultImport, * as namespaceImport from './path';
     */
    var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/; // tslint:disable-line:max-line-length

    var splitImportStatements = function splitImportStatements(source, url) {
      var importStatements = [];
      var sourceWithoutImportStatements = source.replace(/^[\s]+/, '');
      var result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);

      while (result !== null) {
        var unresolvedUrl = result[1].slice(1, -1);
        var importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, '').replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
        importStatements.push(importStatementWithResolvedUrl);
        sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, '');
        result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
      }

      return [importStatements.join(';'), sourceWithoutImportStatements];
    };

    var verifyParameterDescriptors = function verifyParameterDescriptors(parameterDescriptors) {
      if (parameterDescriptors !== undefined && !Array.isArray(parameterDescriptors)) {
        throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
      }
    };

    var verifyProcessorCtor = function verifyProcessorCtor(processorCtor) {
      if (!isConstructible(processorCtor)) {
        throw new TypeError('The given value for processorCtor should be a constructor.');
      }

      if (processorCtor.prototype === null || _typeof(processorCtor.prototype) !== 'object') {
        throw new TypeError('The given value for processorCtor should have a prototype.');
      }

      if (typeof processorCtor.prototype.process !== 'function') {
        throw new TypeError('The given value for processorCtor should have a callable process() function.');
      }
    };

    var ongoingRequests = new WeakMap();
    var resolvedRequests = new WeakMap();
    var createAddAudioWorkletModule = function createAddAudioWorkletModule(createAbortError, createNotSupportedError, fetchSource, getBackupNativeContext) {
      return function (context, moduleURL) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          credentials: 'omit'
        };
        var nativeContext = getNativeContext(context);
        var absoluteUrl = new URL(moduleURL, location.href).toString(); // Bug #59: Only Chrome & Opera do implement the audioWorklet property.

        if (nativeContext.audioWorklet !== undefined) {
          return fetchSource(moduleURL).then(function (source) {
            var _splitImportStatement = splitImportStatements(source, absoluteUrl),
                _splitImportStatement2 = _slicedToArray(_splitImportStatement, 2),
                importStatements = _splitImportStatement2[0],
                sourceWithoutImportStatements = _splitImportStatement2[1];
            /*
             * Bug #86: Chrome Canary does not invoke the process() function if the corresponding AudioWorkletNode has no output.
             *
             * This is the unminified version of the code used below:
             *
             * ```js
             * `${ importStatements };
             * ((registerProcessor) => {${ sourceWithoutImportStatements }
             * })((name, processorCtor) => registerProcessor(name, class extends processorCtor {
             *
             *     constructor (options) {
             *         const { hasNoOutput, ...otherParameterData } = options.parameterData;
             *
             *         if (hasNoOutput === 1) {
             *             super({ ...options, numberOfOutputs: 0, outputChannelCount: [ ], parameterData: otherParameterData });
             *
             *             this._hasNoOutput = true;
             *         } else {
             *             super(options);
             *
             *             this._hasNoOutput = false;
             *         }
             *     }
             *
             *     process (inputs, outputs, parameters) {
             *         return super.process(inputs, (this._hasNoOutput) ? [ ] : outputs, parameters);
             *     }
             *
             * }))`
             * ```
             */


            var wrappedSource = "".concat(importStatements, ";(registerProcessor=>{").concat(sourceWithoutImportStatements, "\n})((n,p)=>registerProcessor(n,class extends p{constructor(o){const{hasNoOutput,...q}=o.parameterData;if(hasNoOutput===1){super({...o,numberOfOutputs:0,outputChannelCount:[],parameterData:q});this._h=true}else{super(o);this._h=false}}process(i,o,p){return super.process(i,(this._h)?[]:o,p)}}))"); // tslint:disable-line:max-line-length

            var blob = new Blob([wrappedSource], {
              type: 'application/javascript; charset=utf-8'
            });
            var url = URL.createObjectURL(blob);
            var backupNativeContext = getBackupNativeContext(nativeContext);
            var nativeContextOrBackupNativeContext = backupNativeContext !== null ? backupNativeContext : nativeContext;
            return nativeContextOrBackupNativeContext.audioWorklet.addModule(url, options).then(function () {
              return URL.revokeObjectURL(url);
            }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
            .catch(function (err) {
              URL.revokeObjectURL(url);
              throw err; // tslint:disable-line:rxjs-throw-error
            });
          });
        } else {
          var resolvedRequestsOfContext = resolvedRequests.get(context);

          if (resolvedRequestsOfContext !== undefined && resolvedRequestsOfContext.has(moduleURL)) {
            return Promise.resolve();
          }

          var ongoingRequestsOfContext = ongoingRequests.get(context);

          if (ongoingRequestsOfContext !== undefined) {
            var promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);

            if (promiseOfOngoingRequest !== undefined) {
              return promiseOfOngoingRequest;
            }
          }

          var promise = fetchSource(moduleURL).then(function (source) {
            var _splitImportStatement3 = splitImportStatements(source, absoluteUrl),
                _splitImportStatement4 = _slicedToArray(_splitImportStatement3, 2),
                importStatements = _splitImportStatement4[0],
                sourceWithoutImportStatements = _splitImportStatement4[1];
            /*
             * This is the unminified version of the code used below:
             *
             * ```js
             * ${ importStatements };
             * ((a, b) => {
             *     (a[b] = a[b] || [ ]).push(
             *         (AudioWorkletProcessor, currentFrame, currentTime, global, egisterProcessor, sampleRate, self, window) => {
             *             ${ sourceWithoutImportStatements }
             *         }
             *     );
             * })(window, '_AWGS');
             * ```
             */
            // tslint:disable-next-line:max-line-length


            var wrappedSource = "".concat(importStatements, ";((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,currentFrame,currentTime,global,registerProcessor,sampleRate,self,window)=>{").concat(sourceWithoutImportStatements, "\n})})(window,'_AWGS')"); // @todo Evaluating the given source code is a possible security problem.

            return evaluateSource(wrappedSource);
          }).then(function () {
            var globalScope = Object.create(null, {
              currentFrame: {
                get: function get() {
                  return nativeContext.currentTime * nativeContext.sampleRate;
                }
              },
              currentTime: {
                get: function get() {
                  return nativeContext.currentTime;
                }
              },
              sampleRate: {
                get: function get() {
                  return nativeContext.sampleRate;
                }
              }
            });

            var evaluateAudioWorkletGlobalScope = window._AWGS.pop();

            if (evaluateAudioWorkletGlobalScope === undefined) {
              throw new SyntaxError();
            }

            evaluateAudioWorkletGlobalScope(function AudioWorkletProcessor() {
              _classCallCheck(this, AudioWorkletProcessor);
            }, globalScope.currentFrame, globalScope.currentTime, undefined, function (name, processorCtor) {
              if (name.trim() === '') {
                throw createNotSupportedError();
              }

              var nodeNameToProcessorDefinitionMap = NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.get(nativeContext);

              if (nodeNameToProcessorDefinitionMap !== undefined) {
                if (nodeNameToProcessorDefinitionMap.has(name)) {
                  throw createNotSupportedError();
                }

                verifyProcessorCtor(processorCtor);
                verifyParameterDescriptors(processorCtor.parameterDescriptors);
                nodeNameToProcessorDefinitionMap.set(name, processorCtor);
              } else {
                verifyProcessorCtor(processorCtor);
                verifyParameterDescriptors(processorCtor.parameterDescriptors);
                NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.set(nativeContext, new Map([[name, processorCtor]]));
              }
            }, globalScope.sampleRate, undefined, undefined);
          }).catch(function (err) {
            if (err.name === 'SyntaxError') {
              throw createAbortError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          });

          if (ongoingRequestsOfContext === undefined) {
            ongoingRequests.set(context, new Map([[moduleURL, promise]]));
          } else {
            ongoingRequestsOfContext.set(moduleURL, promise);
          }

          promise.then(function () {
            var rslvdRqstsFCntxt = resolvedRequests.get(context);

            if (rslvdRqstsFCntxt === undefined) {
              resolvedRequests.set(context, new Set([moduleURL]));
            } else {
              rslvdRqstsFCntxt.add(moduleURL);
            }
          }).catch(function () {}) // tslint:disable-line:no-empty
          // @todo Use finally when it becomes available in all supported browsers.
          .then(function () {
            var ngngRqstsFCntxt = ongoingRequests.get(context);

            if (ngngRqstsFCntxt !== undefined) {
              ngngRqstsFCntxt.delete(moduleURL);
            }
          });
          return promise;
        }
      };
    };

    var DEFAULT_OPTIONS = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      fftSize: 2048,
      maxDecibels: -30,
      minDecibels: -100,
      smoothingTimeConstant: 0.8
    };
    var createAnalyserNodeConstructor = function createAnalyserNodeConstructor(createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AnalyserNode, _noneAudioDestination);

          function AnalyserNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;

            _classCallCheck(this, AnalyserNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS, options);
            var nativeAnalyserNode = createNativeAnalyserNode(nativeContext, mergedOptions);
            var analyserNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createAnalyserNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AnalyserNode).call(this, context, nativeAnalyserNode, analyserNodeRenderer));
            _this._nativeAnalyserNode = nativeAnalyserNode;
            return _this;
          }

          _createClass(AnalyserNode, [{
            key: "getByteFrequencyData",
            value: function getByteFrequencyData(array) {
              this._nativeAnalyserNode.getByteFrequencyData(array);
            }
          }, {
            key: "getByteTimeDomainData",
            value: function getByteTimeDomainData(array) {
              this._nativeAnalyserNode.getByteTimeDomainData(array);
            }
          }, {
            key: "getFloatFrequencyData",
            value: function getFloatFrequencyData(array) {
              this._nativeAnalyserNode.getFloatFrequencyData(array);
            }
          }, {
            key: "getFloatTimeDomainData",
            value: function getFloatTimeDomainData(array) {
              this._nativeAnalyserNode.getFloatTimeDomainData(array);
            }
          }, {
            key: "fftSize",
            get: function get() {
              return this._nativeAnalyserNode.fftSize;
            },
            set: function set(value) {
              this._nativeAnalyserNode.fftSize = value;
            }
          }, {
            key: "frequencyBinCount",
            get: function get() {
              return this._nativeAnalyserNode.frequencyBinCount;
            }
          }, {
            key: "maxDecibels",
            get: function get() {
              return this._nativeAnalyserNode.maxDecibels;
            },
            set: function set(value) {
              // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
              var maxDecibels = this._nativeAnalyserNode.maxDecibels;
              this._nativeAnalyserNode.maxDecibels = value;

              if (!(value > this._nativeAnalyserNode.minDecibels)) {
                this._nativeAnalyserNode.maxDecibels = maxDecibels;
                throw createIndexSizeError();
              }
            }
          }, {
            key: "minDecibels",
            get: function get() {
              return this._nativeAnalyserNode.minDecibels;
            },
            set: function set(value) {
              // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
              var minDecibels = this._nativeAnalyserNode.minDecibels;
              this._nativeAnalyserNode.minDecibels = value;

              if (!(this._nativeAnalyserNode.maxDecibels > value)) {
                this._nativeAnalyserNode.minDecibels = minDecibels;
                throw createIndexSizeError();
              }
            }
          }, {
            key: "smoothingTimeConstant",
            get: function get() {
              return this._nativeAnalyserNode.smoothingTimeConstant;
            },
            set: function set(value) {
              this._nativeAnalyserNode.smoothingTimeConstant = value;
            }
          }]);

          return AnalyserNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var getNativeAudioNode = function getNativeAudioNode(audioNode) {
      var nativeAudioNode = AUDIO_NODE_STORE.get(audioNode);

      if (nativeAudioNode === undefined) {
        throw new Error('The associated nativeAudioNode is missing.');
      }

      return nativeAudioNode;
    };

    var isOwnedByContext = function isOwnedByContext(nativeAudioNode, nativeContext) {
      return nativeAudioNode.context === nativeContext;
    };

    function getAudioGraph(anyContext) {
      var audioGraph = AUDIO_GRAPHS.get(anyContext);

      if (audioGraph === undefined) {
        throw new Error('Missing the audio graph of the given context.');
      }

      return audioGraph;
    }

    var getAudioNodeConnections = function getAudioNodeConnections(anyAudioNode) {
      // The builtin types define the context property as BaseAudioContext which is why it needs to be casted here.
      var audioGraph = getAudioGraph(anyAudioNode.context);
      var audioNodeConnections = audioGraph.nodes.get(anyAudioNode);

      if (audioNodeConnections === undefined) {
        throw new Error('Missing the connections of the given AudioNode in the audio graph.');
      }

      return audioNodeConnections;
    };

    var getAudioNodeRenderer = function getAudioNodeRenderer(anyAudioNode) {
      var audioNodeConnections = getAudioNodeConnections(anyAudioNode);

      if (audioNodeConnections.renderer === null) {
        throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
      }

      return audioNodeConnections.renderer;
    };

    var renderInputsOfAudioNode = function renderInputsOfAudioNode(audioNode, nativeOfflineAudioContext, nativeAudioNode) {
      var audioNodeConnections = getAudioNodeConnections(audioNode);
      return Promise.all(audioNodeConnections.inputs.map(function (connections, input) {
        return Array.from(connections.values()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              source = _ref2[0],
              output = _ref2[1];

          return getAudioNodeRenderer(source).render(source, nativeOfflineAudioContext).then(function (node) {
            return node.connect(nativeAudioNode, output, input);
          });
        });
      }).reduce(function (allRenderingPromises, renderingPromises) {
        return [].concat(_toConsumableArray(allRenderingPromises), _toConsumableArray(renderingPromises));
      }, []));
    };

    var createAnalyserNodeRendererFactory = function createAnalyserNodeRendererFactory(createNativeAnalyserNode) {
      return function () {
        var nativeAnalyserNodePromise = null;

        var createAnalyserNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAnalyserNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAnalyserNode = getNativeAudioNode(proxy); // If the initially used nativeAnalyserNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAnalyserNode.channelCount,
                        channelCountMode: nativeAnalyserNode.channelCountMode,
                        channelInterpretation: nativeAnalyserNode.channelInterpretation,
                        fftSize: nativeAnalyserNode.fftSize,
                        maxDecibels: nativeAnalyserNode.maxDecibels,
                        minDecibels: nativeAnalyserNode.minDecibels,
                        smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
                      };
                      nativeAnalyserNode = createNativeAnalyserNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAnalyserNode);

                  case 4:
                    return _context.abrupt("return", nativeAnalyserNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createAnalyserNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAnalyserNodePromise === null) {
              nativeAnalyserNodePromise = createAnalyserNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAnalyserNodePromise;
          }
        };
      };
    };

    var ONGOING_TESTS = new Map();

    function cacheTestResult(tester, test) {
      var cachedTestResult = TEST_RESULTS.get(tester);

      if (cachedTestResult !== undefined) {
        return cachedTestResult;
      }

      var ongoingTest = ONGOING_TESTS.get(tester);

      if (ongoingTest !== undefined) {
        return ongoingTest;
      }

      var synchronousTestResult = test();

      if (synchronousTestResult instanceof Promise) {
        ONGOING_TESTS.set(tester, synchronousTestResult);
        return synchronousTestResult.then(function (finalTestResult) {
          ONGOING_TESTS.delete(tester);
          TEST_RESULTS.set(tester, finalTestResult);
          return finalTestResult;
        });
      }

      TEST_RESULTS.set(tester, synchronousTestResult);
      return synchronousTestResult;
    }

    var testAudioBufferCopyChannelMethodsSubarraySupport = function testAudioBufferCopyChannelMethodsSubarraySupport(nativeAudioBuffer) {
      var source = new Float32Array(2);

      try {
        /*
         * Only Firefox does not fully support the copyFromChannel() and copyToChannel() methods. Therefore testing one of those
         * methods is enough to know if the other one it supported as well.
         */
        nativeAudioBuffer.copyToChannel(source, 0, nativeAudioBuffer.length - 1);
      } catch (_a) {
        return false;
      }

      return true;
    };

    var createIndexSizeError = function createIndexSizeError() {
      try {
        return new DOMException('', 'IndexSizeError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 1;
        err.name = 'IndexSizeError';
        return err;
      }
    };

    var wrapAudioBufferCopyChannelMethods = function wrapAudioBufferCopyChannelMethods(audioBuffer) {
      audioBuffer.copyFromChannel = function (destination, channelNumber) {
        var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
          throw createIndexSizeError();
        }

        var channelData = audioBuffer.getChannelData(channelNumber);
        var channelLength = channelData.length;
        var destinationLength = destination.length;

        for (var i = 0; i + startInChannel < channelLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + startInChannel];
        }
      };

      audioBuffer.copyToChannel = function (source, channelNumber) {
        var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
          throw createIndexSizeError();
        }

        var channelData = audioBuffer.getChannelData(channelNumber);
        var channelLength = channelData.length;
        var sourceLength = source.length;

        for (var i = 0; i + startInChannel < channelLength && i < sourceLength; i += 1) {
          channelData[i + startInChannel] = source[i];
        }
      };
    };

    var wrapAudioBufferCopyChannelMethodsSubarray = function wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer) {
      audioBuffer.copyFromChannel = function (copyFromChannel) {
        return function (destination, channelNumber) {
          var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
            throw createIndexSizeError();
          }

          if (startInChannel < audioBuffer.length && audioBuffer.length - startInChannel < destination.length) {
            return copyFromChannel.call(audioBuffer, destination.subarray(0, audioBuffer.length - startInChannel), channelNumber, startInChannel);
          }

          return copyFromChannel.call(audioBuffer, destination, channelNumber, startInChannel);
        };
      }(audioBuffer.copyFromChannel);

      audioBuffer.copyToChannel = function (copyToChannel) {
        return function (source, channelNumber) {
          var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
            throw createIndexSizeError();
          }

          if (startInChannel < audioBuffer.length && audioBuffer.length - startInChannel < source.length) {
            return copyToChannel.call(audioBuffer, source.subarray(0, audioBuffer.length - startInChannel), channelNumber, startInChannel);
          }

          return copyToChannel.call(audioBuffer, source, channelNumber, startInChannel);
        };
      }(audioBuffer.copyToChannel);
    };

    var wrapAudioBufferGetChannelDataMethod = function wrapAudioBufferGetChannelDataMethod(audioBuffer) {
      audioBuffer.getChannelData = function (getChannelData) {
        return function (channel) {
          try {
            return getChannelData.call(audioBuffer, channel);
          } catch (err) {
            if (err.code === 12) {
              throw createIndexSizeError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          }
        };
      }(audioBuffer.getChannelData);
    };

    var DEFAULT_OPTIONS$1 = {
      numberOfChannels: 1
    };
    var createAudioBufferConstructor = function createAudioBufferConstructor(createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, testNativeAudioBufferConstructorSupport) {
      var nativeOfflineAudioContext = null;
      return (
        /*#__PURE__*/
        function () {
          function AudioBuffer(options) {
            _classCallCheck(this, AudioBuffer);

            if (nativeOfflineAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$1, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            if (nativeOfflineAudioContext === null) {
              nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
            }
            /*
             * Bug #99: Firefox does not throw a NotSupportedError when the numberOfChannels is zero. But it only does it when using the
             * factory function. But since Firefox also supports the constructor everything should be fine.
             */


            var audioBuffer = nativeAudioBufferConstructor !== null && cacheTestResult(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor({
              length: length,
              numberOfChannels: numberOfChannels,
              sampleRate: sampleRate
            }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate); // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
            // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.

            if (typeof audioBuffer.copyFromChannel !== 'function') {
              wrapAudioBufferCopyChannelMethods(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer); // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
            } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
              return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
            })) {
              wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
            } // Bug #99: Safari does not throw an error when the numberOfChannels is zero.


            if (audioBuffer.numberOfChannels === 0) {
              throw createNotSupportedError();
            }
            /*
             * This does violate all good pratices but it is necessary to allow this AudioBuffer to be used with native
             * (Offline)AudioContexts.
             */


            return audioBuffer;
          } // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.


          _createClass(AudioBuffer, [{
            key: "copyFromChannel",
            value: function copyFromChannel(_1, _2) {
            } // tslint:disable-line:no-empty
            // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.

          }, {
            key: "copyToChannel",
            value: function copyToChannel(_1, _2) {
            } // tslint:disable-line:no-empty
            // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.

          }, {
            key: "getChannelData",
            value: function getChannelData(_) {
              return new Float32Array(0);
            }
          }]);

          return AudioBuffer;
        }()
      );
    };

    var MOST_NEGATIVE_SINGLE_FLOAT = -3.4028234663852886e38;
    var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

    var wrapEventListener = function wrapEventListener(target, eventListener) {
      if (typeof eventListener === 'function') {
        return function (event) {
          var descriptor = {
            value: target
          };
          Object.defineProperties(event, {
            currentTarget: descriptor,
            target: descriptor
          });
          return eventListener.call(target, event);
        };
      }

      return eventListener;
    };

    var DEFAULT_OPTIONS$2 = {
      buffer: null,
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      playbackRate: 1
    };
    var createAudioBufferSourceNodeConstructor = function createAudioBufferSourceNodeConstructor(createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AudioBufferSourceNode, _noneAudioDestination);

          function AudioBufferSourceNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$2;

            _classCallCheck(this, AudioBufferSourceNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$2, options);
            var nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioBufferSourceNode).call(this, context, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer));
            _this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
            _this._detune = createAudioParam(context, isOffline, nativeAudioBufferSourceNode.detune);
            _this._isBufferNullified = false;
            _this._isBufferSet = false;
            _this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
            _this._onended = null; // Bug #73: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._playbackRate = createAudioParam(context, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(AudioBufferSourceNode, [{
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var duration = arguments.length > 2 ? arguments[2] : undefined;

              this._nativeAudioBufferSourceNode.start(when, offset, duration);

              if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.start = duration === undefined ? [when, offset] : [when, offset, duration];
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeAudioBufferSourceNode.stop(when);

              if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.stop = when;
              }
            }
          }, {
            key: "buffer",
            get: function get() {
              if (this._isBufferNullified) {
                return null;
              }

              return this._nativeAudioBufferSourceNode.buffer;
            },
            set: function set(value) {
              // Bug #71: Edge does not allow to set the buffer to null.
              try {
                this._nativeAudioBufferSourceNode.buffer = value;
              } catch (err) {
                if (value !== null || err.code !== 17) {
                  throw err; // tslint:disable-line:rxjs-throw-error
                } // @todo Create a new internal nativeAudioBufferSourceNode.


                this._isBufferNullified = this._nativeAudioBufferSourceNode.buffer !== null;
              } // Bug #72: Only Chrome, Edge & Opera do not allow to reassign the buffer yet.


              if (value !== null) {
                if (this._isBufferSet) {
                  throw createInvalidStateError();
                }

                this._isBufferSet = true;
              }
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeAudioBufferSourceNode.onended = wrappedListener;
              var nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
              this._onended = nativeOnEnded === wrappedListener ? value : nativeOnEnded;
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "loop",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loop;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loop = value;
            }
          }, {
            key: "loopEnd",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loopEnd;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loopEnd = value;
            }
          }, {
            key: "loopStart",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loopStart;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loopStart = value;
            }
          }, {
            key: "playbackRate",
            get: function get() {
              return this._playbackRate;
            }
          }]);

          return AudioBufferSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createAudioBufferSourceNodeRendererFactory = function createAudioBufferSourceNodeRendererFactory(createNativeAudioBufferSourceNode) {
      return function () {
        var nativeAudioBufferSourceNodePromise = null;
        var start = null;
        var stop = null;

        var createAudioBufferSourceNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioBufferSourceNode, options, _nativeAudioBufferSou;

            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioBufferSourceNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeAudioBufferSourceNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (!isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext)) {
                      options = {
                        buffer: nativeAudioBufferSourceNode.buffer,
                        channelCount: nativeAudioBufferSourceNode.channelCount,
                        channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
                        channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
                        detune: 0,
                        loop: nativeAudioBufferSourceNode.loop,
                        loopEnd: nativeAudioBufferSourceNode.loopEnd,
                        loopStart: nativeAudioBufferSourceNode.loopStart,
                        playbackRate: nativeAudioBufferSourceNode.playbackRate.value
                      };
                      nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, options);

                      if (start !== null) {
                        (_nativeAudioBufferSou = nativeAudioBufferSourceNode).start.apply(_nativeAudioBufferSou, _toConsumableArray(start));
                      }

                      if (stop !== null) {
                        nativeAudioBufferSourceNode.stop(stop);
                      }
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioBufferSourceNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createAudioBufferSourceNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioBufferSourceNodePromise === null) {
              nativeAudioBufferSourceNodePromise = createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioBufferSourceNodePromise;
          }
        };
      };
    };

    var isValidLatencyHint = function isValidLatencyHint(latencyHint) {
      return latencyHint === undefined || typeof latencyHint === 'number' || typeof latencyHint === 'string' && (latencyHint === 'balanced' || latencyHint === 'interactive' || latencyHint === 'playback');
    };

    var createAudioContextConstructor = function createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioSourceNodeConstructor, nativeAudioContextConstructor) {
      return (
        /*#__PURE__*/
        function (_baseAudioContextCons) {
          _inherits(AudioContext, _baseAudioContextCons);

          function AudioContext() {
            var _this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, AudioContext);

            if (nativeAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var nativeAudioContext = new nativeAudioContextConstructor(options); // Bug #131 Safari returns null when there are four other AudioContexts running already.

            if (nativeAudioContext === null) {
              throw createUnknownError();
            } // Bug #51 Only Chrome and Opera throw an error if the given latencyHint is invalid.


            if (!isValidLatencyHint(options.latencyHint)) {
              throw new TypeError("The provided value '".concat(options.latencyHint, "' is not a valid enum value of type AudioContextLatencyCategory."));
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioContext).call(this, nativeAudioContext, nativeAudioContext.destination.channelCount));
            var latencyHint = options.latencyHint;
            var sampleRate = nativeAudioContext.sampleRate; // @todo The values for 'balanced', 'interactive' and 'playback' are just copied from Chrome's implementation.

            _this._baseLatency = typeof nativeAudioContext.baseLatency === 'number' ? nativeAudioContext.baseLatency : latencyHint === 'balanced' ? 512 / sampleRate : latencyHint === 'interactive' || latencyHint === undefined ? 256 / sampleRate : latencyHint === 'playback' ? 1024 / sampleRate :
            /*
             * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
             * ScriptProcessorNode.
             */
            Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
            _this._nativeAudioContext = nativeAudioContext;
            _this._state = null;
            /*
             * Bug #34: Chrome and Opera pretend to be running right away, but fire an onstatechange event when the state actually changes
             * to 'running'.
             */

            if (nativeAudioContext.state === 'running') {
              _this._state = 'suspended';

              var revokeState = function revokeState() {
                if (_this._state === 'suspended') {
                  _this._state = null;
                }

                nativeAudioContext.removeEventListener('statechange', revokeState);
              };

              nativeAudioContext.addEventListener('statechange', revokeState);
            }

            return _this;
          }

          _createClass(AudioContext, [{
            key: "close",
            value: function close() {
              // Bug #35: Firefox does not throw an error if the AudioContext was closed before.
              if (this.state === 'closed') {
                return this._nativeAudioContext.close().then(function () {
                  throw createInvalidStateError();
                });
              } // Bug #34: If the state was set to suspended before it should be revoked now.


              if (this._state === 'suspended') {
                this._state = null;
              }

              return this._nativeAudioContext.close();
              /*
               * Bug #50: Deleting the AudioGraph is currently not possible anymore.
               * ...then(() => deleteAudioGraph(this, this._nativeAudioContext));
               */
            }
          }, {
            key: "createMediaElementSource",
            value: function createMediaElementSource(mediaElement) {
              return new mediaElementAudioSourceNodeConstructor(this, {
                mediaElement: mediaElement
              });
            }
          }, {
            key: "createMediaStreamSource",
            value: function createMediaStreamSource(mediaStream) {
              return new mediaStreamAudioSourceNodeConstructor(this, {
                mediaStream: mediaStream
              });
            }
          }, {
            key: "resume",
            value: function resume() {
              var _this2 = this;

              if (this._state === 'suspended') {
                return new Promise(function (resolve, reject) {
                  var resolvePromise = function resolvePromise() {
                    _this2._nativeAudioContext.removeEventListener('statechange', resolvePromise);

                    if (_this2._nativeAudioContext.state === 'running') {
                      resolve();
                    } else {
                      _this2.resume().then(resolve, reject);
                    }
                  };

                  _this2._nativeAudioContext.addEventListener('statechange', resolvePromise);
                });
              }

              return this._nativeAudioContext.resume().catch(function (err) {
                // Bug #55: Chrome, Edge and Opera do throw an InvalidAccessError instead of an InvalidStateError.
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined || err.code === 15) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "suspend",
            value: function suspend() {
              return this._nativeAudioContext.suspend().catch(function (err) {
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "baseLatency",
            get: function get() {
              return this._baseLatency;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state !== null ? this._state : this._nativeAudioContext.state;
            }
          }]);

          return AudioContext;
        }(baseAudioContextConstructor)
      );
    };

    var createAudioDestinationNodeConstructor = function createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNode, isNativeOfflineAudioContext) {
      return (
        /*#__PURE__*/
        function (_audioNodeConstructor) {
          _inherits(AudioDestinationNode, _audioNodeConstructor);

          function AudioDestinationNode(context, channelCount) {
            var _this;

            _classCallCheck(this, AudioDestinationNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
            var audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer() : null;
            var audioGraph = {
              audioWorkletGlobalScope: null,
              nodes: new WeakMap(),
              params: new WeakMap()
            };
            AUDIO_GRAPHS.set(context, audioGraph);
            AUDIO_GRAPHS.set(nativeContext, audioGraph);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioDestinationNode).call(this, context, nativeAudioDestinationNode, audioDestinationNodeRenderer));
            _this._isNodeOfNativeOfflineAudioContext = isOffline;
            _this._nativeAudioDestinationNode = nativeAudioDestinationNode;
            return _this;
          }

          _createClass(AudioDestinationNode, [{
            key: "channelCount",
            get: function get() {
              return this._nativeAudioDestinationNode.channelCount;
            },
            set: function set(value) {
              // Bug #52: Chrome, Edge, Opera & Safari do not throw an exception at all.
              // Bug #54: Firefox does throw an IndexSizeError.
              if (this._isNodeOfNativeOfflineAudioContext) {
                throw createInvalidStateError();
              } // Bug #47: The AudioDestinationNode in Edge and Safari do not initialize the maxChannelCount property correctly.


              if (value > this._nativeAudioDestinationNode.maxChannelCount) {
                throw createIndexSizeError();
              }

              this._nativeAudioDestinationNode.channelCount = value;
            }
          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeAudioDestinationNode.channelCountMode;
            },
            set: function set(value) {
              // Bug #53: No browser does throw an exception yet.
              if (this._isNodeOfNativeOfflineAudioContext) {
                throw createInvalidStateError();
              }

              this._nativeAudioDestinationNode.channelCountMode = value;
            }
          }, {
            key: "maxChannelCount",
            get: function get() {
              return this._nativeAudioDestinationNode.maxChannelCount;
            }
          }]);

          return AudioDestinationNode;
        }(audioNodeConstructor)
      );
    };

    var createAudioDestinationNodeRenderer = function createAudioDestinationNodeRenderer() {
      var nativeAudioDestinationNodePromise = null;

      var createAudioDestinationNode =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
          var nativeAudioDestinationNode;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
                  _context.next = 3;
                  return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);

                case 3:
                  return _context.abrupt("return", nativeAudioDestinationNode);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function createAudioDestinationNode(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();

      return {
        render: function render(proxy, nativeOfflineAudioContext) {
          if (nativeAudioDestinationNodePromise === null) {
            nativeAudioDestinationNodePromise = createAudioDestinationNode(proxy, nativeOfflineAudioContext);
          }

          return nativeAudioDestinationNodePromise;
        }
      };
    };

    var createAudioListenerFactory = function createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, isNativeOfflineAudioContext) {
      return function (context, nativeContext) {
        var nativeListener = nativeContext.listener; // Bug #117: Only Chrome & Opera support the new interface already.

        var createFakeAudioParams = function createFakeAudioParams() {
          var channelMergerNode = createNativeChannelMergerNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 9
          });
          var isOffline = isNativeOfflineAudioContext(nativeContext);
          var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 9, 0);

          var createFakeAudioParam = function createFakeAudioParam(input, value) {
            var constantSourceNode = createNativeConstantSourceNode(nativeContext, {
              channelCount: 1,
              channelCountMode: 'explicit',
              channelInterpretation: 'discrete',
              offset: value
            });
            constantSourceNode.connect(channelMergerNode, 0, input); // @todo This should be stopped when the context is closed.

            constantSourceNode.start();
            Object.defineProperty(constantSourceNode.offset, 'defaultValue', {
              get: function get() {
                return value;
              }
            });
            /*
             * Bug #62 & #74: Edge & Safari do not support ConstantSourceNodes and do not export the correct values for maxValue and
             * minValue for GainNodes.
             */

            return createAudioParam(context, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          };

          var lastOrientation = [0, 0, -1, 0, 1, 0];
          var lastPosition = [0, 0, 0];

          scriptProcessorNode.onaudioprocess = function (_ref) {
            var inputBuffer = _ref.inputBuffer;
            var orientation = [inputBuffer.getChannelData(0)[0], inputBuffer.getChannelData(1)[0], inputBuffer.getChannelData(2)[0], inputBuffer.getChannelData(3)[0], inputBuffer.getChannelData(4)[0], inputBuffer.getChannelData(5)[0]];

            if (orientation.some(function (value, index) {
              return value !== lastOrientation[index];
            })) {
              nativeListener.setOrientation.apply(nativeListener, orientation); // tslint:disable-line:deprecation

              lastOrientation = orientation;
            }

            var positon = [inputBuffer.getChannelData(6)[0], inputBuffer.getChannelData(7)[0], inputBuffer.getChannelData(8)[0]];

            if (positon.some(function (value, index) {
              return value !== lastPosition[index];
            })) {
              nativeListener.setPosition.apply(nativeListener, positon); // tslint:disable-line:deprecation

              lastPosition = positon;
            }
          };

          channelMergerNode.connect(scriptProcessorNode);
          return {
            forwardX: createFakeAudioParam(0, 0),
            forwardY: createFakeAudioParam(1, 0),
            forwardZ: createFakeAudioParam(2, -1),
            positionX: createFakeAudioParam(6, 0),
            positionY: createFakeAudioParam(7, 0),
            positionZ: createFakeAudioParam(8, 0),
            upX: createFakeAudioParam(3, 0),
            upY: createFakeAudioParam(4, 1),
            upZ: createFakeAudioParam(5, 0)
          };
        };

        var _ref2 = nativeListener.forwardX === undefined ? createFakeAudioParams() : nativeListener,
            forwardX = _ref2.forwardX,
            forwardY = _ref2.forwardY,
            forwardZ = _ref2.forwardZ,
            positionX = _ref2.positionX,
            positionY = _ref2.positionY,
            positionZ = _ref2.positionZ,
            upX = _ref2.upX,
            upY = _ref2.upY,
            upZ = _ref2.upZ;

        return {
          get forwardX() {
            return forwardX;
          },

          get forwardY() {
            return forwardY;
          },

          get forwardZ() {
            return forwardZ;
          },

          get positionX() {
            return positionX;
          },

          get positionY() {
            return positionY;
          },

          get positionZ() {
            return positionZ;
          },

          get upX() {
            return upX;
          },

          get upY() {
            return upY;
          },

          get upZ() {
            return upZ;
          }

        };
      };
    };

    var EventTarget =
    /*#__PURE__*/
    function () {
      function EventTarget(_nativeEventTarget) {
        _classCallCheck(this, EventTarget);

        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = new WeakMap();
      }

      _createClass(EventTarget, [{
        key: "addEventListener",
        value: function addEventListener(type, listener, // @todo EventListenerOrEventListenerObject | null = null,
        options) {
          var wrappedEventListener = this._listeners.get(listener);

          if (wrappedEventListener === undefined) {
            wrappedEventListener = wrapEventListener(this, listener);

            if (typeof listener === 'function') {
              this._listeners.set(listener, wrappedEventListener);
            }
          }

          return this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
          return this._nativeEventTarget.dispatchEvent(event);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(type, listener, // @todo EventListenerOrEventListenerObject | null = null,
        options) {
          var wrappedEventListener = this._listeners.get(listener);

          return this._nativeEventTarget.removeEventListener(type, wrappedEventListener === undefined ? null : wrappedEventListener, options);
        }
      }]);

      return EventTarget;
    }();

    var isAudioNode = function isAudioNode(audioNodeOrAudioParam) {
      return audioNodeOrAudioParam.context !== undefined;
    };

    function getAudioParamConnections(anyContext, audioParam) {
      var audioGraph = getAudioGraph(anyContext);
      var audioParamConnections = audioGraph.params.get(audioParam);

      if (audioParamConnections === undefined) {
        throw new Error('Missing the connections of the given AudioParam in the audio graph.');
      }

      return audioParamConnections;
    }

    var getNativeAudioParam = function getNativeAudioParam(audioParam) {
      var nativeAudioParam = AUDIO_PARAM_STORE.get(audioParam);

      if (nativeAudioParam === undefined) {
        throw new Error('The associated nativeAudioParam is missing.');
      }

      return nativeAudioParam;
    };

    var testAudioNodeDisconnectMethodSupport = function testAudioNodeDisconnectMethodSupport(nativeAudioContext) {
      return new Promise(function (resolve) {
        var analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        var dummy = nativeAudioContext.createGain(); // Bug #95: Safari does not play one sample buffers.

        var ones = nativeAudioContext.createBuffer(1, 2, 44100);
        var channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        var source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer);
        analyzer.connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);

        analyzer.onaudioprocess = function (event) {
          var chnnlDt = event.inputBuffer.getChannelData(0);

          if (Array.prototype.some.call(chnnlDt, function (sample) {
            return sample === 1;
          })) {
            resolve(true);
          } else {
            resolve(false);
          }

          source.stop();
          analyzer.onaudioprocess = null; // tslint:disable-line:deprecation

          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };

        source.start();
      });
    };

    var wrapAudioNodeDisconnectMethod = function wrapAudioNodeDisconnectMethod(nativeAudioNode) {
      var destinations = new Map();

      nativeAudioNode.connect = function (connect) {
        return function (destination) {
          var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          destinations.set(destination, {
            input: input,
            output: output
          });

          if (destination instanceof AudioNode) {
            // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
            return connect.call(nativeAudioNode, destination, output, input);
          }

          return connect.call(nativeAudioNode, destination, output);
        };
      }(nativeAudioNode.connect);

      nativeAudioNode.disconnect = function (disconnect) {
        return function (outputOrDestination, _output, _input) {
          disconnect.apply(nativeAudioNode);

          if (outputOrDestination === undefined) {
            destinations.clear();
          } else if (destinations.has(outputOrDestination)) {
            destinations.delete(outputOrDestination);
            destinations.forEach(function (_ref, dstntn) {
              var input = _ref.input,
                  output = _ref.output;
              nativeAudioNode.connect(dstntn, input, output);
            });
          }
        };
      }(nativeAudioNode.disconnect);
    };

    var addAudioNode = function addAudioNode(context, audioNode, audioNoderRender, nativeAudioNode) {
      var audioGraph = getAudioGraph(context);
      var inputs = [];

      for (var i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        inputs.push(new Set());
      }

      var audioNodeConnections = {
        inputs: inputs,
        outputs: new Set(),
        renderer: audioNoderRender
      };
      audioGraph.nodes.set(audioNode, audioNodeConnections);
      audioGraph.nodes.set(nativeAudioNode, audioNodeConnections);
    };

    var addConnectionToAudioNode = function addConnectionToAudioNode(source, destination, output, input) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var audioNodeConnectionsOfDestination = getAudioNodeConnections(destination);
      audioNodeConnectionsOfSource.outputs.add([destination, output, input]);
      audioNodeConnectionsOfDestination.inputs[input].add([source, output]);
    };

    var addConnectionToAudioParam = function addConnectionToAudioParam(source, destination, output) {
      var audioNodeConnections = getAudioNodeConnections(source);
      var audioParamConnections = getAudioParamConnections(source.context, destination);
      audioNodeConnections.outputs.add([destination, output]);
      audioParamConnections.inputs.add([source, output]);
    };

    var deleteInputsOfAudioNode = function deleteInputsOfAudioNode(source, destination, output, input) {
      var _getAudioNodeConnecti = getAudioNodeConnections(destination),
          inputs = _getAudioNodeConnecti.inputs;

      var length = inputs.length;

      for (var i = 0; i < length; i += 1) {
        if (input === undefined || input === i) {
          var connectionsToInput = inputs[i];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = connectionsToInput.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var connection = _step.value;

              if (connection[0] === source && (output === undefined || connection[1] === output)) {
                connectionsToInput.delete(connection);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
    };

    var deleteInputsOfAudioParam = function deleteInputsOfAudioParam(source, destination, output) {
      var audioParamConnections = getAudioParamConnections(source.context, destination);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = audioParamConnections.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var connection = _step2.value;

          if (connection[0] === source && (output === undefined || connection[1] === output)) {
            audioParamConnections.inputs.delete(connection);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };

    var deleteOutputsOfAudioNode = function deleteOutputsOfAudioNode(source, destination, output, input) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = audioNodeConnectionsOfSource.outputs.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var connection = _step3.value;

          if (connection[0] === destination && (output === undefined || connection[1] === output) && (input === undefined || connection[2] === input)) {
            audioNodeConnectionsOfSource.outputs.delete(connection);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };

    var deleteAnyConnection = function deleteAnyConnection(source) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = audioNodeConnectionsOfSource.outputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _slicedToArray(_step4.value, 1),
              destination = _step4$value[0];

          if (isAudioNode(destination)) {
            deleteInputsOfAudioNode(source, destination);
          } else {
            deleteInputsOfAudioParam(source, destination);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      audioNodeConnectionsOfSource.outputs.clear();
    };

    var deleteConnectionAtOutput = function deleteConnectionAtOutput(source, output) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      Array.from(audioNodeConnectionsOfSource.outputs).filter(function (connection) {
        return connection[1] === output;
      }).forEach(function (connection) {
        var _connection = _slicedToArray(connection, 1),
            destination = _connection[0];

        if (isAudioNode(destination)) {
          deleteInputsOfAudioNode(source, destination, connection[1], connection[2]);
        } else {
          deleteInputsOfAudioParam(source, destination, connection[1]);
        }

        audioNodeConnectionsOfSource.outputs.delete(connection);
      });
    };

    var deleteConnectionToDestination = function deleteConnectionToDestination(source, destination, output, input) {
      deleteOutputsOfAudioNode(source, destination, output, input);

      if (isAudioNode(destination)) {
        deleteInputsOfAudioNode(source, destination, output, input);
      } else {
        deleteInputsOfAudioParam(source, destination, output);
      }
    };

    var createAudioNodeConstructor = function createAudioNodeConstructor(createInvalidAccessError, isNativeOfflineAudioContext) {
      return (
        /*#__PURE__*/
        function (_EventTarget) {
          _inherits(AudioNode, _EventTarget);

          function AudioNode(context, nativeAudioNode, audioNodeRenderer) {
            var _this;

            _classCallCheck(this, AudioNode);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioNode).call(this, nativeAudioNode));
            _this._context = context;
            _this._nativeAudioNode = nativeAudioNode;
            var nativeContext = getNativeContext(context); // Bug #12: Firefox and Safari do not support to disconnect a specific destination.
            // @todo Make sure this is not used with an OfflineAudioContext.

            if (!isNativeOfflineAudioContext(nativeContext) && true !== cacheTestResult(testAudioNodeDisconnectMethodSupport, function () {
              return testAudioNodeDisconnectMethodSupport(nativeContext);
            })) {
              wrapAudioNodeDisconnectMethod(nativeAudioNode);
            }

            AUDIO_NODE_STORE.set(_assertThisInitialized(_this), nativeAudioNode);
            addAudioNode(context, _assertThisInitialized(_this), audioNodeRenderer, nativeAudioNode);
            return _this;
          }

          _createClass(AudioNode, [{
            key: "connect",
            value: function connect(destination) {
              var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var nativeContext = getNativeContext(this._context);

              if (isAudioNode(destination)) {
                var nativeDestinationNode = getNativeAudioNode(destination);
                var inputs = nativeDestinationNode.inputs;

                try {
                  if (inputs !== undefined) {
                    this._nativeAudioNode.connect(inputs[input], output, 0);
                  } else {
                    this._nativeAudioNode.connect(nativeDestinationNode, output, input);
                  } // @todo Calling connect() is only needed to throw possible errors when the nativeContext is an OfflineAudioContext.


                  if (isNativeOfflineAudioContext(nativeContext)) {
                    if (inputs !== undefined) {
                      this._nativeAudioNode.disconnect(inputs[input], output, 0);
                    } else {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output, input);
                    }
                  }
                } catch (err) {
                  // Bug #41: Only Chrome, Firefox and Opera throw the correct exception by now.
                  if (err.code === 12) {
                    throw createInvalidAccessError();
                  }

                  throw err; // tslint:disable-line:rxjs-throw-error
                }

                addConnectionToAudioNode(this, destination, output, input);
                return destination;
              }

              var nativeAudioParam = getNativeAudioParam(destination);

              try {
                this._nativeAudioNode.connect(nativeAudioParam, output); // @todo Calling connect() is only needed to throw possible errors when the nativeContext is an OfflineAudioContext.


                if (isNativeOfflineAudioContext(nativeContext)) {
                  this._nativeAudioNode.disconnect(nativeAudioParam, output);
                }
              } catch (err) {
                // Bug #58: Only Firefox does throw an InvalidStateError yet.
                if (err.code === 12) {
                  throw createInvalidAccessError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              }

              addConnectionToAudioParam(this, destination, output);
            }
          }, {
            key: "disconnect",
            value: function disconnect(destinationOrOutput, output, input) {
              var nativeContext = getNativeContext(this._context);

              if (!isNativeOfflineAudioContext(nativeContext)) {
                if (destinationOrOutput === undefined) {
                  this._nativeAudioNode.disconnect();
                } else if (typeof destinationOrOutput === 'number') {
                  this._nativeAudioNode.disconnect(destinationOrOutput);
                } else if (isAudioNode(destinationOrOutput)) {
                  var nativeDestinationNode = getNativeAudioNode(destinationOrOutput);

                  if (nativeDestinationNode.inputs !== undefined) {
                    var inputs = nativeDestinationNode.inputs;
                    var numberOfInputs = inputs.length;

                    for (var i = 0; i < numberOfInputs; i += 1) {
                      if (input === undefined || input === i) {
                        if (output === undefined) {
                          this._nativeAudioNode.disconnect(inputs[i]);
                        } else {
                          this._nativeAudioNode.disconnect(inputs[i], output);
                        }
                      }
                    }
                  } else {
                    if (output === undefined) {
                      this._nativeAudioNode.disconnect(nativeDestinationNode);
                    } else if (input === undefined) {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output);
                    } else {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output, input);
                    }
                  }
                } else {
                  var nativeAudioParam = getNativeAudioParam(destinationOrOutput);

                  if (output === undefined) {
                    this._nativeAudioNode.disconnect(nativeAudioParam);
                  } else {
                    this._nativeAudioNode.disconnect(nativeAudioParam, output);
                  }
                }
              }

              if (destinationOrOutput === undefined) {
                deleteAnyConnection(this);
              } else if (typeof destinationOrOutput === 'number') {
                deleteConnectionAtOutput(this, destinationOrOutput);
              } else {
                deleteConnectionToDestination(this, destinationOrOutput, output, input);
              }
            }
          }, {
            key: "channelCount",
            get: function get() {
              return this._nativeAudioNode.channelCount;
            },
            set: function set(value) {
              this._nativeAudioNode.channelCount = value;
            }
          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeAudioNode.channelCountMode;
            },
            set: function set(value) {
              this._nativeAudioNode.channelCountMode = value;
            }
          }, {
            key: "channelInterpretation",
            get: function get() {
              return this._nativeAudioNode.channelInterpretation;
            },
            set: function set(value) {
              this._nativeAudioNode.channelInterpretation = value;
            }
          }, {
            key: "context",
            get: function get() {
              return this._context;
            }
          }, {
            key: "numberOfInputs",
            get: function get() {
              return this._nativeAudioNode.numberOfInputs;
            }
          }, {
            key: "numberOfOutputs",
            get: function get() {
              return this._nativeAudioNode.numberOfOutputs;
            }
          }]);

          return AudioNode;
        }(EventTarget)
      );
    };

    var addAudioParam = function addAudioParam(context, audioParam, audioParamRenderer) {
      var audioGraph = getAudioGraph(context);
      audioGraph.params.set(audioParam, {
        inputs: new Set(),
        renderer: audioParamRenderer
      });
    };

    var createAudioParamFactory = function createAudioParamFactory(createAudioParamRenderer) {
      return function (context, isAudioParamOfOfflineAudioContext, nativeAudioParam) {
        var maxValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var minValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer() : null;
        var audioParam = {
          get defaultValue() {
            return nativeAudioParam.defaultValue;
          },

          get maxValue() {
            return maxValue === null ? nativeAudioParam.maxValue : maxValue;
          },

          get minValue() {
            return minValue === null ? nativeAudioParam.minValue : minValue;
          },

          get value() {
            return nativeAudioParam.value;
          },

          set value(value) {
            nativeAudioParam.value = value; // Bug #98: Edge, Firefox & Safari do not yet treat the value setter like a call to setValueAtTime().

            audioParam.setValueAtTime(value, context.currentTime);
          },

          cancelScheduledValues: function cancelScheduledValues(cancelTime) {
            nativeAudioParam.cancelScheduledValues(cancelTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                cancelTime: cancelTime,
                type: 'cancelScheduledValues'
              });
            }

            return audioParam;
          },
          exponentialRampToValueAtTime: function exponentialRampToValueAtTime(value, endTime) {
            nativeAudioParam.exponentialRampToValueAtTime(value, endTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                endTime: endTime,
                type: 'exponentialRampToValue',
                value: value
              });
            }

            return audioParam;
          },
          linearRampToValueAtTime: function linearRampToValueAtTime(value, endTime) {
            nativeAudioParam.linearRampToValueAtTime(value, endTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                endTime: endTime,
                type: 'linearRampToValue',
                value: value
              });
            }

            return audioParam;
          },
          setTargetAtTime: function setTargetAtTime(target, startTime, timeConstant) {
            nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                startTime: startTime,
                target: target,
                timeConstant: timeConstant,
                type: 'setTarget'
              });
            }

            return audioParam;
          },
          setValueAtTime: function setValueAtTime(value, startTime) {
            nativeAudioParam.setValueAtTime(value, startTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                startTime: startTime,
                type: 'setValue',
                value: value
              });
            }

            return audioParam;
          },
          setValueCurveAtTime: function setValueCurveAtTime(values, startTime, duration) {
            nativeAudioParam.setValueCurveAtTime(values, startTime, duration);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                duration: duration,
                startTime: startTime,
                type: 'setValueCurve',
                values: values
              });
            }

            return audioParam;
          }
        };
        AUDIO_PARAM_STORE.set(audioParam, nativeAudioParam);
        addAudioParam(context, audioParam, audioParamRenderer);
        return audioParam;
      };
    };

    var createAudioParamRenderer = function createAudioParamRenderer() {
      var automations = [];
      return {
        record: function record(automation) {
          automations.push(automation);
        },
        replay: function replay(audioParam) {
          for (var _i = 0; _i < automations.length; _i++) {
            var automation = automations[_i];

            if (automation.type === 'cancelScheduledValues') {
              var cancelTime = automation.cancelTime;
              audioParam.cancelScheduledValues(cancelTime);
            } else if (automation.type === 'exponentialRampToValue') {
              var endTime = automation.endTime,
                  value = automation.value;
              audioParam.exponentialRampToValueAtTime(value, endTime);
            } else if (automation.type === 'linearRampToValue') {
              var _endTime = automation.endTime,
                  _value = automation.value;
              audioParam.linearRampToValueAtTime(_value, _endTime);
            } else if (automation.type === 'setTarget') {
              var startTime = automation.startTime,
                  target = automation.target,
                  timeConstant = automation.timeConstant;
              audioParam.setTargetAtTime(target, startTime, timeConstant);
            } else if (automation.type === 'setValue') {
              var _startTime = automation.startTime,
                  _value2 = automation.value;
              audioParam.setValueAtTime(_value2, _startTime);
            } else if (automation.type === 'setValueCurve') {
              var duration = automation.duration,
                  _startTime2 = automation.startTime,
                  values = automation.values;
              /*
               * @todo TypeScript can't combine the call signatures of setValueCurveAtTime() of IAudioParam and TNativeAudioParam as
               * their return types are incompatible.
               */

              audioParam.setValueCurveAtTime(values, _startTime2, duration);
            } else {
              throw new Error("Can't apply an unknown automation.");
            }
          }
        }
      };
    };

    var ReadOnlyMap =
    /*#__PURE__*/
    function () {
      function ReadOnlyMap(parameters) {
        _classCallCheck(this, ReadOnlyMap);

        this._map = new Map(parameters);
      }

      _createClass(ReadOnlyMap, [{
        key: "entries",
        value: function entries() {
          return this._map.entries();
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          var _this = this;

          var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this._map.forEach(function (value, key) {
            return callback.call(thisArg, value, key, _this);
          });
        }
      }, {
        key: "get",
        value: function get(name) {
          return this._map.get(name);
        }
      }, {
        key: "has",
        value: function has(name) {
          return this._map.has(name);
        }
      }, {
        key: "keys",
        value: function keys() {
          return this._map.keys();
        }
      }, {
        key: "values",
        value: function values() {
          return this._map.values();
        }
      }, {
        key: "size",
        get: function get() {
          return this._map.size;
        }
      }]);

      return ReadOnlyMap;
    }();

    var DEFAULT_OPTIONS$3 = {
      channelCount: 2,
      // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: undefined,
      parameterData: {},
      processorOptions: null
    };

    var createChannelCount = function createChannelCount(length) {
      var channelCount = [];

      for (var i = 0; i < length; i += 1) {
        channelCount.push(1);
      }

      return channelCount;
    };

    var sanitizedOptions = function sanitizedOptions(options) {
      return Object.assign({}, options, {
        outputChannelCount: options.outputChannelCount !== undefined ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ?
        /*
         * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
         * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
         * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
         */
        [options.channelCount] : createChannelCount(options.numberOfOutputs),
        // Bug #66: The default value of processorOptions should be null, but Chrome Canary doesn't like it.
        processorOptions: options.processorOptions === null ? {} : options.processorOptions
      });
    };

    var createAudioWorkletNodeConstructor = function createAudioWorkletNodeConstructor(createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, gainNodeConstructor, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AudioWorkletNode, _noneAudioDestination);

          function AudioWorkletNode(context, name) {
            var _this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS$3;

            _classCallCheck(this, AudioWorkletNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var mergedOptions = sanitizedOptions(Object.assign({}, DEFAULT_OPTIONS$3, options));
            var nodeNameToProcessorDefinitionMap = NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.get(nativeContext);
            var processorDefinition = nodeNameToProcessorDefinitionMap === undefined ? undefined : nodeNameToProcessorDefinitionMap.get(name);
            var nativeAudioWorkletNode = createNativeAudioWorkletNode(nativeContext, isOffline ? null : context.baseLatency, nativeAudioWorkletNodeConstructor, name, processorDefinition, mergedOptions);
            var audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer(name, mergedOptions, processorDefinition) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioWorkletNode).call(this, context, nativeAudioWorkletNode, audioWorkletNodeRenderer));
            var parameters = [];
            nativeAudioWorkletNode.parameters.forEach(function (nativeAudioParam, nm) {
              var audioParam = createAudioParam(context, isOffline, nativeAudioParam);
              parameters.push([nm, audioParam]);
            });
            _this._nativeAudioWorkletNode = nativeAudioWorkletNode; // Bug #86 & #87: Every browser but Firefox needs to get an unused output which should not be exposed.

            _this._numberOfOutputs = options.numberOfOutputs === 0 ? 0 : _this._nativeAudioWorkletNode.numberOfOutputs;
            _this._onprocessorerror = null;
            _this._parameters = new ReadOnlyMap(parameters);
            /*
             * Bug #86 & #87: Every browser but Firefox needs an output to be connected.
             *
             * Bug #50: Only Safari does yet allow to create AudioNodes on a closed AudioContext. Therefore this is currently faked by
             * using another AudioContext. And that is the reason why this will fail in case of a closed AudioContext.
             */

            if (context.state !== 'closed') {
              var gainNode = new gainNodeConstructor(context, {
                gain: 0
              });

              try {
                _this.connect(gainNode).connect(context.destination);
              } catch (err) {
                if (err.name !== 'IndexSizeError') {
                  throw err; // tslint:disable-line:rxjs-throw-error
                }
              }
            }

            return _this;
          }

          _createClass(AudioWorkletNode, [{
            key: "numberOfOutputs",
            get: function get() {
              return this._numberOfOutputs;
            }
          }, {
            key: "onprocessorerror",
            get: function get() {
              return this._onprocessorerror;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
              var nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
              this._onprocessorerror = nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
            }
          }, {
            key: "parameters",
            get: function get() {
              if (this._parameters === null) {
                // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                return this._nativeAudioWorkletNode.parameters;
              }

              return this._parameters;
            }
          }, {
            key: "port",
            get: function get() {
              return this._nativeAudioWorkletNode.port;
            }
          }]);

          return AudioWorkletNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var renderInputsOfAudioParam = function renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam) {
      var audioParamConnections = getAudioParamConnections(context, audioParam);
      return Promise.all(Array.from(audioParamConnections.inputs).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            source = _ref2[0],
            output = _ref2[1];

        var audioNodeRenderer = getAudioNodeRenderer(source);
        return audioNodeRenderer.render(source, nativeOfflineAudioContext).then(function (node) {
          return node.connect(nativeAudioParam, output);
        });
      }));
    };

    var connectAudioParam = function connectAudioParam(context, nativeOfflineAudioContext, audioParam) {
      var nativeAudioParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getNativeAudioParam(audioParam);
      return renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };

    function copyFromChannel(audioBuffer, // @todo There is currently no way to define something like { [ key: number | string ]: Float32Array }
    parent, key, channelNumber, startInChannel) {
      if (typeof audioBuffer.copyFromChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength === 0) {
          parent[key] = new Float32Array(128);
        }

        audioBuffer.copyFromChannel(parent[key], channelNumber, startInChannel); // Bug #5: Safari does not support copyFromChannel().
      } else {
        var channelData = audioBuffer.getChannelData(channelNumber); // The byteLength will be 0 when the ArrayBuffer was transferred.

        if (parent[key].byteLength === 0) {
          parent[key] = channelData.slice(startInChannel, startInChannel + 128);
        } else {
          var slicedInput = new Float32Array(channelData.buffer, startInChannel * Float32Array.BYTES_PER_ELEMENT, 128);
          parent[key].set(slicedInput);
        }
      }
    }

    var copyToChannel = function copyToChannel(audioBuffer, parent, key, channelNumber, startInChannel) {
      if (typeof audioBuffer.copyToChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
          audioBuffer.copyToChannel(parent[key], channelNumber, startInChannel);
        } // Bug #5: Safari does not support copyToChannel().

      } else {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
          audioBuffer.getChannelData(channelNumber).set(parent[key], startInChannel);
        }
      }
    };

    var createNestedArrays = function createNestedArrays(x, y) {
      var arrays = [];

      for (var i = 0; i < x; i += 1) {
        var array = [];
        var length = typeof y === 'number' ? y : y[i];

        for (var j = 0; j < length; j += 1) {
          array.push(new Float32Array(128));
        }

        arrays.push(array);
      }

      return arrays;
    };

    var getAudioWorkletProcessor = function getAudioWorkletProcessor(nativeOfflineAudioContext, proxy) {
      var nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeOfflineAudioContext);

      if (nodeToProcessorMap === undefined) {
        throw new Error('Missing the processor map for the given OfflineAudioContext.');
      }

      var nativeAudioWorkletNode = getNativeAudioNode(proxy);
      var audioWorkletProcessorPromise = nodeToProcessorMap.get(nativeAudioWorkletNode);

      if (audioWorkletProcessorPromise === undefined) {
        throw new Error('Missing the promise for the given AudioWorkletNode.');
      }

      return audioWorkletProcessorPromise;
    };

    function getAudioParamRenderer(anyContext, audioParam) {
      var audioParamConnections = getAudioParamConnections(anyContext, audioParam);

      if (audioParamConnections.renderer === null) {
        throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
      }

      return audioParamConnections.renderer;
    }

    var renderAutomation = function renderAutomation(context, nativeOfflineAudioContext, audioParam, nativeAudioParam) {
      var audioParamRenderer = getAudioParamRenderer(context, audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };

    var processBuffer =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(proxy, renderedBuffer, nativeOfflineAudioContext, options, processorDefinition) {
        var length, numberOfInputChannels, numberOfOutputChannels, processedBuffer, audioNodeConnections, audioWorkletProcessor, inputs, outputs, parameters, _loop, i, _ret;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                length = renderedBuffer.length;
                numberOfInputChannels = options.channelCount * options.numberOfInputs;
                numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
                  return sum + value;
                }, 0);
                processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, renderedBuffer.sampleRate);

                if (!(processorDefinition === undefined)) {
                  _context.next = 6;
                  break;
                }

                throw new Error();

              case 6:
                audioNodeConnections = getAudioNodeConnections(proxy);
                _context.next = 9;
                return getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);

              case 9:
                audioWorkletProcessor = _context.sent;
                inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
                outputs = createNestedArrays(options.numberOfOutputs, options.outputChannelCount);
                parameters = Array.from(proxy.parameters.keys()).reduce(function (prmtrs, name) {
                  return Object.assign({}, prmtrs, _defineProperty({}, name, new Float32Array(128)));
                }, {});

                _loop = function _loop(i) {
                  for (var j = 0; j < options.numberOfInputs; j += 1) {
                    for (var k = 0; k < options.channelCount; k += 1) {
                      copyFromChannel(renderedBuffer, inputs[j], k, k, i);
                    }
                  }

                  if (processorDefinition.parameterDescriptors !== undefined) {
                    processorDefinition.parameterDescriptors.forEach(function (_ref2, index) {
                      var name = _ref2.name;
                      copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
                    });
                  }

                  for (var _j = 0; _j < options.numberOfInputs; _j += 1) {
                    for (var _k = 0; _k < options.outputChannelCount[_j]; _k += 1) {
                      // The byteLength will be 0 when the ArrayBuffer was transferred.
                      if (outputs[_j][_k].byteLength === 0) {
                        outputs[_j][_k] = new Float32Array(128);
                      }
                    }
                  }

                  try {
                    var potentiallyEmptyInputs = inputs.map(function (input, index) {
                      if (audioNodeConnections.inputs[index].size === 0) {
                        return [new Float32Array(0)];
                      }

                      return input;
                    });
                    var activeSourceFlag = audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters);

                    if (processedBuffer !== null) {
                      for (var _j2 = 0, outputChannelSplitterNodeOutput = 0; _j2 < options.numberOfOutputs; _j2 += 1) {
                        for (var _k2 = 0; _k2 < options.outputChannelCount[_j2]; _k2 += 1) {
                          copyToChannel(processedBuffer, outputs[_j2], _k2, outputChannelSplitterNodeOutput + _k2, i);
                        }

                        outputChannelSplitterNodeOutput += options.outputChannelCount[_j2];
                      }
                    }

                    if (!activeSourceFlag) {
                      return "break";
                    }
                  } catch (_a) {
                    proxy.dispatchEvent(new ErrorEvent('processorerror'));
                    return "break";
                  }
                };

                i = 0;

              case 15:
                if (!(i < length)) {
                  _context.next = 22;
                  break;
                }

                _ret = _loop(i);

                if (!(_ret === "break")) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("break", 22);

              case 19:
                i += 128;
                _context.next = 15;
                break;

              case 22:
                return _context.abrupt("return", processedBuffer);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function processBuffer(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var createAudioWorkletNodeRendererFactory = function createAudioWorkletNodeRendererFactory(connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, disconnectMultipleOutputs, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext) {
      return function (name, options, processorDefinition) {
        var nativeAudioNodePromise = null;

        var createNativeAudioNode =
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee4(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, numberOfInputChannels, numberOfParameters, partialOfflineAudioContext, gainNodes, inputChannelSplitterNodes, i, constantSourceNodes, inputChannelMergerNode, _i, j, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, index, constantSourceNode, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, nm, audioParam, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value;

            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // Bug #61: Only Chrome & Opera have an implementation of the AudioWorkletNode yet.

                    if (!(nativeAudioWorkletNodeConstructor === null)) {
                      _context4.next = 38;
                      break;
                    }

                    if (!(processorDefinition === undefined)) {
                      _context4.next = 4;
                      break;
                    }

                    throw new Error('Missing the processor definition.');

                  case 4:
                    if (!(nativeOfflineAudioContextConstructor === null)) {
                      _context4.next = 6;
                      break;
                    }

                    throw new Error('Missing the native (Offline)AudioContext constructor.');

                  case 6:
                    // Bug #47: The AudioDestinationNode in Edge and Safari gets not initialized correctly.
                    numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
                    numberOfParameters = processorDefinition.parameterDescriptors === undefined ? 0 : processorDefinition.parameterDescriptors.length;
                    partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(numberOfInputChannels + numberOfParameters, // Ceil the length to the next full render quantum.
                    // Bug #17: Safari does not yet expose the length.
                    Math.ceil(proxy.context.length / 128) * 128, nativeOfflineAudioContext.sampleRate);
                    gainNodes = [];
                    inputChannelSplitterNodes = [];

                    for (i = 0; i < options.numberOfInputs; i += 1) {
                      gainNodes.push(createNativeGainNode(partialOfflineAudioContext, {
                        channelCount: options.channelCount,
                        channelCountMode: options.channelCountMode,
                        channelInterpretation: options.channelInterpretation,
                        gain: 1
                      }));
                      inputChannelSplitterNodes.push(createNativeChannelSplitterNode(partialOfflineAudioContext, {
                        channelCount: options.channelCount,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: options.channelCount
                      }));
                    }

                    _context4.next = 14;
                    return Promise.all(Array.from(proxy.parameters.values()).map(
                    /*#__PURE__*/
                    function () {
                      var _ref4 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee2(audioParam) {
                        var constantSourceNode;
                        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                constantSourceNode = createNativeConstantSourceNode(partialOfflineAudioContext, {
                                  channelCount: 1,
                                  channelCountMode: 'explicit',
                                  channelInterpretation: 'discrete',
                                  offset: audioParam.value
                                });
                                _context2.next = 3;
                                return renderAutomation(proxy.context, partialOfflineAudioContext, audioParam, constantSourceNode.offset);

                              case 3:
                                return _context2.abrupt("return", constantSourceNode);

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x8) {
                        return _ref4.apply(this, arguments);
                      };
                    }()));

                  case 14:
                    constantSourceNodes = _context4.sent;
                    inputChannelMergerNode = createNativeChannelMergerNode(partialOfflineAudioContext, {
                      channelCount: 1,
                      channelCountMode: 'explicit',
                      channelInterpretation: 'speakers',
                      numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
                    });

                    for (_i = 0; _i < options.numberOfInputs; _i += 1) {
                      gainNodes[_i].connect(inputChannelSplitterNodes[_i]);

                      for (j = 0; j < options.channelCount; j += 1) {
                        inputChannelSplitterNodes[_i].connect(inputChannelMergerNode, j, _i * options.channelCount + j);
                      }
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context4.prev = 20;

                    for (_iterator = constantSourceNodes.entries()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      _step$value = _slicedToArray(_step.value, 2), index = _step$value[0], constantSourceNode = _step$value[1];
                      constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                      constantSourceNode.start(0);
                    }

                    _context4.next = 28;
                    break;

                  case 24:
                    _context4.prev = 24;
                    _context4.t0 = _context4["catch"](20);
                    _didIteratorError = true;
                    _iteratorError = _context4.t0;

                  case 28:
                    _context4.prev = 28;
                    _context4.prev = 29;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 31:
                    _context4.prev = 31;

                    if (!_didIteratorError) {
                      _context4.next = 34;
                      break;
                    }

                    throw _iteratorError;

                  case 34:
                    return _context4.finish(31);

                  case 35:
                    return _context4.finish(28);

                  case 36:
                    inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
                    return _context4.abrupt("return", Promise.all(gainNodes.map(function (gainNode) {
                      return renderInputsOfAudioNode(proxy, partialOfflineAudioContext, gainNode);
                    })).then(function () {
                      return renderNativeOfflineAudioContext(partialOfflineAudioContext);
                    }).then(
                    /*#__PURE__*/
                    function () {
                      var _ref5 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee3(renderedBuffer) {
                        var audioBufferSourceNode, numberOfOutputChannels, outputChannelSplitterNode, outputChannelMergerNodes, _i2, processedBuffer, _i3, outputChannelSplitterNodeOutput, outputChannelMergerNode, _j3, outputAudioNodes;

                        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext);
                                numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
                                  return sum + value;
                                }, 0);
                                outputChannelSplitterNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, {
                                  channelCount: Math.max(1, numberOfOutputChannels),
                                  channelCountMode: 'explicit',
                                  channelInterpretation: 'discrete',
                                  numberOfOutputs: Math.max(1, numberOfOutputChannels)
                                });
                                outputChannelMergerNodes = [];

                                for (_i2 = 0; _i2 < proxy.numberOfOutputs; _i2 += 1) {
                                  outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeOfflineAudioContext, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: options.outputChannelCount[_i2]
                                  }));
                                }

                                _context3.next = 7;
                                return processBuffer(proxy, renderedBuffer, nativeOfflineAudioContext, options, processorDefinition);

                              case 7:
                                processedBuffer = _context3.sent;

                                if (processedBuffer !== null) {
                                  audioBufferSourceNode.buffer = processedBuffer;
                                  audioBufferSourceNode.start(0);
                                }

                                audioBufferSourceNode.connect(outputChannelSplitterNode);

                                for (_i3 = 0, outputChannelSplitterNodeOutput = 0; _i3 < proxy.numberOfOutputs; _i3 += 1) {
                                  outputChannelMergerNode = outputChannelMergerNodes[_i3];

                                  for (_j3 = 0; _j3 < options.outputChannelCount[_i3]; _j3 += 1) {
                                    outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + _j3, _j3);
                                  }

                                  outputChannelSplitterNodeOutput += options.outputChannelCount[_i3];
                                } // Bug #87: Expose at least one output to make this node connectable.


                                outputAudioNodes = options.numberOfOutputs === 0 ? [outputChannelSplitterNode] : outputChannelMergerNodes;

                                audioBufferSourceNode.connect = function () {
                                  return connectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
                                };

                                audioBufferSourceNode.disconnect = function () {
                                  return disconnectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
                                };

                                return _context3.abrupt("return", audioBufferSourceNode);

                              case 15:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }));

                      return function (_x9) {
                        return _ref5.apply(this, arguments);
                      };
                    }()));

                  case 38:
                    if (isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      _context4.next = 68;
                      break;
                    }

                    nativeAudioNode = new nativeAudioWorkletNodeConstructor(nativeOfflineAudioContext, name);
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context4.prev = 43;
                    _iterator2 = proxy.parameters.entries()[Symbol.iterator]();

                  case 45:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context4.next = 52;
                      break;
                    }

                    _step2$value = _slicedToArray(_step2.value, 2), nm = _step2$value[0], audioParam = _step2$value[1];
                    _context4.next = 49;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, audioParam, // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                    nativeAudioNode.parameters.get(nm));

                  case 49:
                    _iteratorNormalCompletion2 = true;
                    _context4.next = 45;
                    break;

                  case 52:
                    _context4.next = 58;
                    break;

                  case 54:
                    _context4.prev = 54;
                    _context4.t1 = _context4["catch"](43);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context4.t1;

                  case 58:
                    _context4.prev = 58;
                    _context4.prev = 59;

                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }

                  case 61:
                    _context4.prev = 61;

                    if (!_didIteratorError2) {
                      _context4.next = 64;
                      break;
                    }

                    throw _iteratorError2;

                  case 64:
                    return _context4.finish(61);

                  case 65:
                    return _context4.finish(58);

                  case 66:
                    _context4.next = 94;
                    break;

                  case 68:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context4.prev = 71;
                    _iterator3 = proxy.parameters.entries()[Symbol.iterator]();

                  case 73:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                      _context4.next = 80;
                      break;
                    }

                    _step3$value = _slicedToArray(_step3.value, 2), nm = _step3$value[0], audioParam = _step3$value[1];
                    _context4.next = 77;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, audioParam, // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                    nativeAudioNode.parameters.get(nm));

                  case 77:
                    _iteratorNormalCompletion3 = true;
                    _context4.next = 73;
                    break;

                  case 80:
                    _context4.next = 86;
                    break;

                  case 82:
                    _context4.prev = 82;
                    _context4.t2 = _context4["catch"](71);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context4.t2;

                  case 86:
                    _context4.prev = 86;
                    _context4.prev = 87;

                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }

                  case 89:
                    _context4.prev = 89;

                    if (!_didIteratorError3) {
                      _context4.next = 92;
                      break;
                    }

                    throw _iteratorError3;

                  case 92:
                    return _context4.finish(89);

                  case 93:
                    return _context4.finish(86);

                  case 94:
                    _context4.next = 96;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 96:
                    return _context4.abrupt("return", nativeAudioNode);

                  case 97:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[20, 24, 28, 36], [29,, 31, 35], [43, 54, 58, 66], [59,, 61, 65], [71, 82, 86, 94], [87,, 89, 93]]);
          }));

          return function createNativeAudioNode(_x6, _x7) {
            return _ref3.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createNativeAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var createBaseAudioContextConstructor = function createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, _decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(BaseAudioContext, _minimalBaseAudioCont);

          function BaseAudioContext(_nativeContext, numberOfChannels) {
            var _this;

            _classCallCheck(this, BaseAudioContext);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseAudioContext).call(this, _nativeContext, numberOfChannels));
            _this._nativeContext = _nativeContext;
            _this._audioWorklet = addAudioWorkletModule === undefined ? undefined : {
              addModule: function addModule(moduleURL, options) {
                return addAudioWorkletModule(_assertThisInitialized(_this), moduleURL, options);
              }
            };
            return _this;
          }

          _createClass(BaseAudioContext, [{
            key: "createAnalyser",
            value: function createAnalyser() {
              return new analyserNodeConstructor(this);
            }
          }, {
            key: "createBiquadFilter",
            value: function createBiquadFilter() {
              return new biquadFilterNodeConstructor(this);
            }
          }, {
            key: "createBuffer",
            value: function createBuffer(numberOfChannels, length, sampleRate) {
              return new audioBufferConstructor({
                length: length,
                numberOfChannels: numberOfChannels,
                sampleRate: sampleRate
              });
            }
          }, {
            key: "createBufferSource",
            value: function createBufferSource() {
              return new audioBufferSourceNodeConstructor(this);
            }
          }, {
            key: "createChannelMerger",
            value: function createChannelMerger() {
              var numberOfInputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
              return new channelMergerNodeConstructor(this, {
                numberOfInputs: numberOfInputs
              });
            }
          }, {
            key: "createChannelSplitter",
            value: function createChannelSplitter() {
              var numberOfOutputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
              return new channelSplitterNodeConstructor(this, {
                numberOfOutputs: numberOfOutputs
              });
            }
          }, {
            key: "createConstantSource",
            value: function createConstantSource() {
              return new constantSourceNodeConstructor(this);
            }
          }, {
            key: "createConvolver",
            value: function createConvolver() {
              return new convolverNodeConstructor(this);
            }
          }, {
            key: "createDelay",
            value: function createDelay() {
              var maxDelayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return new delayNodeConstructor(this, {
                maxDelayTime: maxDelayTime
              });
            }
          }, {
            key: "createDynamicsCompressor",
            value: function createDynamicsCompressor() {
              return new dynamicsCompressorNodeConstructor(this);
            }
          }, {
            key: "createGain",
            value: function createGain() {
              return new gainNodeConstructor(this);
            }
          }, {
            key: "createIIRFilter",
            value: function createIIRFilter(feedforward, feedback) {
              return new iIRFilterNodeConstructor(this, {
                feedback: feedback,
                feedforward: feedforward
              });
            }
          }, {
            key: "createOscillator",
            value: function createOscillator() {
              return new oscillatorNodeConstructor(this);
            }
          }, {
            key: "createPanner",
            value: function createPanner() {
              return new pannerNodeConstructor(this);
            }
          }, {
            key: "createPeriodicWave",
            value: function createPeriodicWave(real, imag) {
              var constraints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                disableNormalization: false
              };
              return new periodicWaveConstructor(this, Object.assign({}, constraints, {
                imag: imag,
                real: real
              }));
            }
          }, {
            key: "createStereoPanner",
            value: function createStereoPanner() {
              return new stereoPannerNodeConstructor(this);
            }
          }, {
            key: "createWaveShaper",
            value: function createWaveShaper() {
              return new waveShaperNodeConstructor(this);
            }
          }, {
            key: "decodeAudioData",
            value: function decodeAudioData(audioData, successCallback, errorCallback) {
              return _decodeAudioData(this._nativeContext, audioData).then(function (audioBuffer) {
                if (typeof successCallback === 'function') {
                  successCallback(audioBuffer);
                }

                return audioBuffer;
              }).catch(function (err) {
                if (typeof errorCallback === 'function') {
                  errorCallback(err);
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "audioWorklet",
            get: function get() {
              return this._audioWorklet;
            }
          }]);

          return BaseAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var DEFAULT_OPTIONS$4 = {
      Q: 1,
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      frequency: 350,
      gain: 0,
      type: 'lowpass'
    };
    var createBiquadFilterNodeConstructor = function createBiquadFilterNodeConstructor(createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(BiquadFilterNode, _noneAudioDestination);

          function BiquadFilterNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$4;

            _classCallCheck(this, BiquadFilterNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$4, options);
            var nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(BiquadFilterNode).call(this, context, nativeBiquadFilterNode, biquadFilterNodeRenderer)); // Bug #80: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._Q = createAudioParam(context, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #78: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._detune = createAudioParam(context, isOffline, nativeBiquadFilterNode.detune, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #77: Chrome, Edge, Firefox, Opera & Safari do not export the correct values for maxValue and minValue.

            _this._frequency = createAudioParam(context, isOffline, nativeBiquadFilterNode.frequency, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #79: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._gain = createAudioParam(context, isOffline, nativeBiquadFilterNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._nativeBiquadFilterNode = nativeBiquadFilterNode;
            return _this;
          }

          _createClass(BiquadFilterNode, [{
            key: "getFrequencyResponse",
            value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
              this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse); // Bug #68: Only Chrome & Opera do throw an error if the parameters differ in their length.


              if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
                throw createInvalidAccessError();
              }
            }
          }, {
            key: "Q",
            get: function get() {
              return this._Q;
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "frequency",
            get: function get() {
              return this._frequency;
            }
          }, {
            key: "gain",
            get: function get() {
              return this._gain;
            }
          }, {
            key: "type",
            get: function get() {
              return this._nativeBiquadFilterNode.type;
            },
            set: function set(value) {
              this._nativeBiquadFilterNode.type = value;
            }
          }]);

          return BiquadFilterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createBiquadFilterNodeRendererFactory = function createBiquadFilterNodeRendererFactory(createNativeBiquadFilterNode) {
      return function () {
        var nativeBiquadFilterNodePromise = null;

        var createBiquadFilterNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeBiquadFilterNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeBiquadFilterNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeBiquadFilterNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext)) {
                      _context.next = 14;
                      break;
                    }

                    options = {
                      Q: nativeBiquadFilterNode.Q.value,
                      channelCount: nativeBiquadFilterNode.channelCount,
                      channelCountMode: nativeBiquadFilterNode.channelCountMode,
                      channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
                      detune: nativeBiquadFilterNode.detune.value,
                      frequency: nativeBiquadFilterNode.frequency.value,
                      gain: nativeBiquadFilterNode.gain.value,
                      type: nativeBiquadFilterNode.type
                    };
                    nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);

                  case 12:
                    _context.next = 22;
                    break;

                  case 14:
                    _context.next = 16;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.Q);

                  case 16:
                    _context.next = 18;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.detune);

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.frequency);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.gain);

                  case 22:
                    _context.next = 24;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);

                  case 24:
                    return _context.abrupt("return", nativeBiquadFilterNode);

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createBiquadFilterNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeBiquadFilterNodePromise === null) {
              nativeBiquadFilterNodePromise = createBiquadFilterNode(proxy, nativeOfflineAudioContext);
            }

            return nativeBiquadFilterNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$5 = {
      channelCount: 1,
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      numberOfInputs: 6
    };
    var createChannelMergerNodeConstructor = function createChannelMergerNodeConstructor(createChannelMergerNodeRenderer, createNativeChannelMergerNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ChannelMergerNode, _noneAudioDestination);

          function ChannelMergerNode(context) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$5;

            _classCallCheck(this, ChannelMergerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$5, options);
            var nativeChannelMergerNode = createNativeChannelMergerNode(nativeContext, mergedOptions);
            var channelMergerNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelMergerNodeRenderer() : null;
            return _possibleConstructorReturn(this, _getPrototypeOf(ChannelMergerNode).call(this, context, nativeChannelMergerNode, channelMergerNodeRenderer));
          }

          return ChannelMergerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createChannelMergerNodeRendererFactory = function createChannelMergerNodeRendererFactory(createNativeChannelMergerNode) {
      return function () {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAudioNode.channelCount,
                        channelCountMode: nativeAudioNode.channelCountMode,
                        channelInterpretation: nativeAudioNode.channelInterpretation,
                        numberOfInputs: nativeAudioNode.numberOfInputs
                      };
                      nativeAudioNode = createNativeChannelMergerNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$6 = {
      channelCount: 6,
      channelCountMode: 'explicit',
      channelInterpretation: 'discrete',
      numberOfOutputs: 6
    };

    var sanitizedOptions$1 = function sanitizedOptions(options) {
      return Object.assign({}, options, {
        channelCount: options.numberOfOutputs
      });
    };

    var createChannelSplitterNodeConstructor = function createChannelSplitterNodeConstructor(createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ChannelSplitterNode, _noneAudioDestination);

          function ChannelSplitterNode(context) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$6;

            _classCallCheck(this, ChannelSplitterNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = sanitizedOptions$1(Object.assign({}, DEFAULT_OPTIONS$6, options));
            var nativeChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, mergedOptions);
            var channelSplitterNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelSplitterNodeRenderer() : null;
            return _possibleConstructorReturn(this, _getPrototypeOf(ChannelSplitterNode).call(this, context, nativeChannelSplitterNode, channelSplitterNodeRenderer));
          }

          return ChannelSplitterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createChannelSplitterNodeRendererFactory = function createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode) {
      return function () {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAudioNode.channelCount,
                        channelCountMode: nativeAudioNode.channelCountMode,
                        channelInterpretation: nativeAudioNode.channelInterpretation,
                        numberOfOutputs: nativeAudioNode.numberOfOutputs
                      };
                      nativeAudioNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var isNativeAudioNode = function isNativeAudioNode(nativeAudioNodeOrAudioParam) {
      return nativeAudioNodeOrAudioParam.context !== undefined;
    };

    var createConnectMultipleOutputs = function createConnectMultipleOutputs(createIndexSizeError) {
      return function (outputAudioNodes, destinationAudioNodeOrAudioParam) {
        var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var outputAudioNode = outputAudioNodes[output];

        if (outputAudioNode === undefined) {
          throw createIndexSizeError();
        }

        if (isNativeAudioNode(destinationAudioNodeOrAudioParam)) {
          return outputAudioNode.connect(destinationAudioNodeOrAudioParam, 0, input);
        }

        return outputAudioNode.connect(destinationAudioNodeOrAudioParam, 0);
      };
    };

    var DEFAULT_OPTIONS$7 = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      offset: 1
    };
    var createConstantSourceNodeConstructor = function createConstantSourceNodeConstructor(createAudioParam, createConstantSourceNodeRendererFactory, createNativeConstantSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ConstantSourceNode, _noneAudioDestination);

          function ConstantSourceNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$7;

            _classCallCheck(this, ConstantSourceNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$7, options);
            var nativeConstantSourceNode = createNativeConstantSourceNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(ConstantSourceNode).call(this, context, nativeConstantSourceNode, constantSourceNodeRenderer));
            _this._constantSourceNodeRenderer = constantSourceNodeRenderer;
            _this._nativeConstantSourceNode = nativeConstantSourceNode;
            /*
             * Bug #62 & #74: Edge & Safari do not support ConstantSourceNodes and do not export the correct values for maxValue and
             * minValue for GainNodes.
             */

            _this._offset = createAudioParam(context, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._onended = null;
            return _this;
          }

          _createClass(ConstantSourceNode, [{
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeConstantSourceNode.start(when);

              if (this._constantSourceNodeRenderer !== null) {
                this._constantSourceNodeRenderer.start = when;
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeConstantSourceNode.stop(when);

              if (this._constantSourceNodeRenderer !== null) {
                this._constantSourceNodeRenderer.stop = when;
              }
            }
          }, {
            key: "offset",
            get: function get() {
              return this._offset;
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeConstantSourceNode.onended = wrappedListener;
              var nativeOnEnded = this._nativeConstantSourceNode.onended;
              this._onended = nativeOnEnded === wrappedListener ? value : nativeOnEnded;
            }
          }]);

          return ConstantSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createConstantSourceNodeRendererFactory = function createConstantSourceNodeRendererFactory(createNativeConstantSourceNode) {
      return function () {
        var nativeConstantSourceNodePromise = null;
        var start = null;
        var stop = null;

        var createConstantSourceNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeConstantSourceNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeConstantSourceNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeConstantSourceNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext)) {
                      _context.next = 10;
                      break;
                    }

                    options = {
                      channelCount: nativeConstantSourceNode.channelCount,
                      channelCountMode: nativeConstantSourceNode.channelCountMode,
                      channelInterpretation: nativeConstantSourceNode.channelInterpretation,
                      offset: nativeConstantSourceNode.offset.value
                    };
                    nativeConstantSourceNode = createNativeConstantSourceNode(nativeOfflineAudioContext, options);

                    if (start !== null) {
                      nativeConstantSourceNode.start(start);
                    }

                    if (stop !== null) {
                      nativeConstantSourceNode.stop(stop);
                    }

                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);

                  case 8:
                    _context.next = 12;
                    break;

                  case 10:
                    _context.next = 12;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.offset);

                  case 12:
                    _context.next = 14;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);

                  case 14:
                    return _context.abrupt("return", nativeConstantSourceNode);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createConstantSourceNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeConstantSourceNodePromise === null) {
              nativeConstantSourceNodePromise = createConstantSourceNode(proxy, nativeOfflineAudioContext);
            }

            return nativeConstantSourceNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$8 = {
      buffer: null,
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      disableNormalization: false
    };
    var createConvolverNodeConstructor = function createConvolverNodeConstructor(createConvolverNodeRenderer, createNativeConvolverNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ConvolverNode, _noneAudioDestination);

          function ConvolverNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$8;

            _classCallCheck(this, ConvolverNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$8, options);
            var nativeConvolverNode = createNativeConvolverNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var convolverNodeRenderer = isOffline ? createConvolverNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(ConvolverNode).call(this, context, nativeConvolverNode, convolverNodeRenderer));
            _this._isBufferNullified = false;
            _this._nativeConvolverNode = nativeConvolverNode;
            return _this;
          }

          _createClass(ConvolverNode, [{
            key: "buffer",
            get: function get() {
              if (this._isBufferNullified) {
                return null;
              }

              return this._nativeConvolverNode.buffer;
            },
            set: function set(value) {
              this._nativeConvolverNode.buffer = value; // Bug #115: Safari does not allow to set the buffer to null.
              // @todo Create a new internal nativeConvolverNode.

              this._isBufferNullified = value === null && this._nativeConvolverNode.buffer !== null;
            }
          }, {
            key: "normalize",
            get: function get() {
              return this._nativeConvolverNode.normalize;
            },
            set: function set(value) {
              this._nativeConvolverNode.normalize = value;
            }
          }]);

          return ConvolverNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createConvolverNodeRendererFactory = function createConvolverNodeRendererFactory(createNativeConvolverNode) {
      return function () {
        var nativeConvolverNodePromise = null;

        var createConvolverNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeConvolverNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeConvolverNode = getNativeAudioNode(proxy); // If the initially used nativeConvolverNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext)) {
                      options = {
                        buffer: nativeConvolverNode.buffer,
                        channelCount: nativeConvolverNode.channelCount,
                        channelCountMode: nativeConvolverNode.channelCountMode,
                        channelInterpretation: nativeConvolverNode.channelInterpretation,
                        disableNormalization: !nativeConvolverNode.normalize
                      };
                      nativeConvolverNode = createNativeConvolverNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode);

                  case 4:
                    return _context.abrupt("return", nativeConvolverNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createConvolverNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeConvolverNodePromise === null) {
              nativeConvolverNodePromise = createConvolverNode(proxy, nativeOfflineAudioContext);
            }

            return nativeConvolverNodePromise;
          }
        };
      };
    };

    var createCreateNativeOfflineAudioContext = function createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor) {
      return function (numberOfChannels, length, sampleRate) {
        if (nativeOfflineAudioContextConstructor === null) {
          throw new Error(); // @todo
        }

        try {
          return new nativeOfflineAudioContextConstructor(numberOfChannels, length, sampleRate);
        } catch (err) {
          // Bug #143, #144 & #146: Safari throws a SyntaxError when numberOfChannels, length or sampleRate are invalid.
          // Bug #143: Edge throws a SyntaxError when numberOfChannels or length are invalid.
          // Bug #145: Edge throws an IndexSizeError when sampleRate is zero.
          if (err.name === 'IndexSizeError' || err.name === 'SyntaxError') {
            throw createNotSupportedError();
          }

          throw err; // tslint:disable-line:rxjs-throw-error
        }
      };
    };

    var createDataCloneError = function createDataCloneError() {
      try {
        return new DOMException('', 'DataCloneError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 25;
        err.name = 'DataCloneError';
        return err;
      }
    };

    var detachArrayBuffer = function detachArrayBuffer(arrayBuffer) {
      var _ref = new MessageChannel(),
          port1 = _ref.port1;

      port1.postMessage(arrayBuffer, [arrayBuffer]);
    };

    var createDecodeAudioData = function createDecodeAudioData(createDataCloneError, createEncodingError, nativeOfflineAudioContextConstructor, isNativeContext, isNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport, testPromiseSupport) {
      return function (anyContext, audioData) {
        var nativeContext = isNativeContext(anyContext) ? anyContext : getNativeContext(anyContext); // Bug #43: Only Chrome and Opera do throw a DataCloneError.

        if (DETACHED_ARRAY_BUFFERS.has(audioData)) {
          var err = createDataCloneError();
          return Promise.reject(err);
        } // The audioData parameter maybe of a type which can't be added to a WeakSet.


        try {
          DETACHED_ARRAY_BUFFERS.add(audioData);
        } catch (_a) {} // Ignore errors.
        // Bug #21: Safari does not support promises yet.


        if (cacheTestResult(testPromiseSupport, function () {
          return testPromiseSupport(nativeContext);
        })) {
          // Bug #101: Edge does not decode something on a closed OfflineAudioContext.
          var nativeContextOrBackupNativeContext = nativeContext.state === 'closed' && nativeOfflineAudioContextConstructor !== null && isNativeOfflineAudioContext(nativeContext) ? new nativeOfflineAudioContextConstructor(1, 1, nativeContext.sampleRate) : nativeContext;
          var promise = nativeContextOrBackupNativeContext.decodeAudioData(audioData).catch(function (err) {
            // Bug #27: Edge is rejecting invalid arrayBuffers with a DOMException.
            if (err instanceof DOMException && err.name === 'NotSupportedError') {
              throw new TypeError();
            }

            throw err;
          });
          return promise.then(function (audioBuffer) {
            // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
            if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
              return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
            })) {
              wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
            }

            return audioBuffer;
          });
        } // Bug #21: Safari does not return a Promise yet.


        return new Promise(function (resolve, reject) {
          var complete = function complete() {
            // Bug #133: Safari does neuter the ArrayBuffer.
            try {
              detachArrayBuffer(audioData);
            } catch (
            /* Ignore errors. */
            _a) {
              /* Ignore errors. */
            }
          };

          var fail = function fail(err) {
            reject(err);
            complete();
          }; // Bug #26: Safari throws a synchronous error.


          try {
            // Bug #1: Safari requires a successCallback.
            nativeContext.decodeAudioData(audioData, function (audioBuffer) {
              // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
              // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
              if (typeof audioBuffer.copyFromChannel !== 'function') {
                wrapAudioBufferCopyChannelMethods(audioBuffer);
                wrapAudioBufferGetChannelDataMethod(audioBuffer);
              }

              complete();
              resolve(audioBuffer);
            }, function (err) {
              // Bug #4: Safari returns null instead of an error.
              if (err === null) {
                fail(createEncodingError());
              } else {
                fail(err);
              }
            });
          } catch (err) {
            fail(err);
          }
        });
      };
    };

    var DEFAULT_OPTIONS$9 = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      delayTime: 0,
      maxDelayTime: 1
    };
    var createDelayNodeConstructor = function createDelayNodeConstructor(createAudioParam, createDelayNodeRenderer, createNativeDelayNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(DelayNode, _noneAudioDestination);

          function DelayNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$9;

            _classCallCheck(this, DelayNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$9, options);
            var nativeDelayNode = createNativeDelayNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var delayNodeRenderer = isOffline ? createDelayNodeRenderer(mergedOptions.maxDelayTime) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(DelayNode).call(this, context, nativeDelayNode, delayNodeRenderer)); // @todo Edge does not export the correct values for maxValue and minValue.

            _this._delayTime = createAudioParam(context, isOffline, nativeDelayNode.delayTime, mergedOptions.maxDelayTime, 0);
            return _this;
          }

          _createClass(DelayNode, [{
            key: "delayTime",
            get: function get() {
              return this._delayTime;
            }
          }]);

          return DelayNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createDelayNodeRendererFactory = function createDelayNodeRendererFactory(createNativeDelayNode) {
      return function (maxDelayTime) {
        var nativeDelayNodePromise = null;

        var createDelayNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeDelayNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeDelayNode = getNativeAudioNode(proxy); // If the initially used nativeDelayNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeDelayNode.channelCount,
                      channelCountMode: nativeDelayNode.channelCountMode,
                      channelInterpretation: nativeDelayNode.channelInterpretation,
                      delayTime: nativeDelayNode.delayTime.value,
                      maxDelayTime: maxDelayTime
                    };
                    nativeDelayNode = createNativeDelayNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.delayTime);

                  case 10:
                    _context.next = 12;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDelayNode);

                  case 12:
                    return _context.abrupt("return", nativeDelayNode);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createDelayNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeDelayNodePromise === null) {
              nativeDelayNodePromise = createDelayNode(proxy, nativeOfflineAudioContext);
            }

            return nativeDelayNodePromise;
          }
        };
      };
    };

    var getOutputAudioNodeAtIndex = function getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output) {
      var outputAudioNode = outputAudioNodes[output];

      if (outputAudioNode === undefined) {
        throw createIndexSizeError();
      }

      return outputAudioNode;
    };

    var createDisconnectMultipleOutputs = function createDisconnectMultipleOutputs(createIndexSizeError) {
      return function (outputAudioNodes) {
        var outputOrDestinationAudioNodeOrAudioParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        if (outputOrDestinationAudioNodeOrAudioParam === undefined) {
          return outputAudioNodes.forEach(function (outputAudioNode) {
            return outputAudioNode.disconnect();
          });
        }

        if (typeof outputOrDestinationAudioNodeOrAudioParam === 'number') {
          return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, outputOrDestinationAudioNodeOrAudioParam).disconnect();
        }

        if (isNativeAudioNode(outputOrDestinationAudioNodeOrAudioParam)) {
          if (output === undefined) {
            return outputAudioNodes.forEach(function (outputAudioNode) {
              return outputAudioNode.disconnect(outputOrDestinationAudioNodeOrAudioParam);
            });
          }

          if (input === undefined) {
            return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0);
          }

          return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0, input);
        }

        if (output === undefined) {
          return outputAudioNodes.forEach(function (outputAudioNode) {
            return outputAudioNode.disconnect(outputOrDestinationAudioNodeOrAudioParam);
          });
        }

        return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0);
      };
    };

    var DEFAULT_OPTIONS$a = {
      attack: 0.003,
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      knee: 30,
      ratio: 12,
      release: 0.25,
      threshold: -24
    };
    var createDynamicsCompressorNodeConstructor = function createDynamicsCompressorNodeConstructor(createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(DynamicsCompressorNode, _noneAudioDestination);

          function DynamicsCompressorNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$a;

            _classCallCheck(this, DynamicsCompressorNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$a, options);
            var nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicsCompressorNode).call(this, context, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer)); // Bug #110: Edge does not export the correct values for maxValue and minValue.

            _this._attack = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.attack, 1, 0);
            _this._knee = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.knee, 40, 0);
            _this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
            _this._ratio = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.ratio, 20, 1);
            _this._release = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.release, 1, 0);
            _this._threshold = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.threshold, 0, -100);
            return _this;
          }

          _createClass(DynamicsCompressorNode, [{
            key: "attack",
            get: function get() {
              return this._attack;
            }
            /*
             * Bug #108: Only Chrome and Opera disallow a channelCount of three and above yet which is why the getter and setter needs to be
             * overwritten here.
             */

          }, {
            key: "channelCount",
            get: function get() {
              return this._nativeDynamicsCompressorNode.channelCount;
            },
            set: function set(value) {
              var previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
              this._nativeDynamicsCompressorNode.channelCount = value;

              if (value > 2) {
                this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
                throw createNotSupportedError();
              }
            }
            /*
             * Bug #109: Only Chrome and Opera disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
             * overwritten here.
             */

          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeDynamicsCompressorNode.channelCountMode;
            },
            set: function set(value) {
              var previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
              this._nativeDynamicsCompressorNode.channelCountMode = value;

              if (value === 'max') {
                this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
                throw createNotSupportedError();
              }
            }
          }, {
            key: "knee",
            get: function get() {
              return this._knee;
            }
          }, {
            key: "ratio",
            get: function get() {
              return this._ratio;
            }
          }, {
            key: "reduction",
            get: function get() {
              // Bug #111: Safari returns an AudioParam instead of a number.
              if (typeof this._nativeDynamicsCompressorNode.reduction.value === 'number') {
                return this._nativeDynamicsCompressorNode.reduction.value;
              }

              return this._nativeDynamicsCompressorNode.reduction;
            }
          }, {
            key: "release",
            get: function get() {
              return this._release;
            }
          }, {
            key: "threshold",
            get: function get() {
              return this._threshold;
            }
          }]);

          return DynamicsCompressorNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createDynamicsCompressorNodeRendererFactory = function createDynamicsCompressorNodeRendererFactory(createNativeDynamicsCompressorNode) {
      return function () {
        var nativeDynamicsCompressorNodePromise = null;

        var createDynamicsCompressorNodes =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeDynamicsCompressorNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeDynamicsCompressorNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeDynamicsCompressorNode was not constructed on the same OfflineAudioContext it needs to be
                     * created again.
                     */

                    if (isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext)) {
                      _context.next = 16;
                      break;
                    }

                    options = {
                      attack: nativeDynamicsCompressorNode.attack.value,
                      channelCount: nativeDynamicsCompressorNode.channelCount,
                      channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
                      channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
                      knee: nativeDynamicsCompressorNode.knee.value,
                      ratio: nativeDynamicsCompressorNode.ratio.value,
                      release: nativeDynamicsCompressorNode.release.value,
                      threshold: nativeDynamicsCompressorNode.threshold.value
                    };
                    nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);

                  case 12:
                    _context.next = 14;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);

                  case 14:
                    _context.next = 26;
                    break;

                  case 16:
                    _context.next = 18;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.attack);

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.knee);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.ratio);

                  case 22:
                    _context.next = 24;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.release);

                  case 24:
                    _context.next = 26;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.threshold);

                  case 26:
                    _context.next = 28;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);

                  case 28:
                    return _context.abrupt("return", nativeDynamicsCompressorNode);

                  case 29:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createDynamicsCompressorNodes(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeDynamicsCompressorNodePromise === null) {
              nativeDynamicsCompressorNodePromise = createDynamicsCompressorNodes(proxy, nativeOfflineAudioContext);
            }

            return nativeDynamicsCompressorNodePromise;
          }
        };
      };
    };

    var createEncodingError = function createEncodingError() {
      try {
        return new DOMException('', 'EncodingError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 0;
        err.name = 'EncodingError';
        return err;
      }
    };

    var createFetchSource = function createFetchSource(createAbortError) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(url) {
            var response;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return fetch(url);

                  case 3:
                    response = _context.sent;

                    if (!response.ok) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", response.text());

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);

                  case 10:
                    throw createAbortError();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 8]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };

    var DEFAULT_OPTIONS$b = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      gain: 1
    };
    var createGainNodeConstructor = function createGainNodeConstructor(createAudioParam, createGainNodeRenderer, createNativeGainNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(GainNode, _noneAudioDestination);

          function GainNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$b;

            _classCallCheck(this, GainNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$b, options);
            var nativeGainNode = createNativeGainNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var gainNodeRenderer = isOffline ? createGainNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(GainNode).call(this, context, nativeGainNode, gainNodeRenderer)); // Bug #74: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._gain = createAudioParam(context, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(GainNode, [{
            key: "gain",
            get: function get() {
              return this._gain;
            }
          }]);

          return GainNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createGainNodeRendererFactory = function createGainNodeRendererFactory(createNativeGainNode) {
      return function () {
        var nativeGainNodePromise = null;

        var createGainNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeGainNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeGainNode = getNativeAudioNode(proxy); // If the initially used nativeGainNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeGainNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeGainNode.channelCount,
                      channelCountMode: nativeGainNode.channelCountMode,
                      channelInterpretation: nativeGainNode.channelInterpretation,
                      gain: nativeGainNode.gain.value
                    };
                    nativeGainNode = createNativeGainNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.gain);

                  case 10:
                    _context.next = 12;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeGainNode);

                  case 12:
                    return _context.abrupt("return", nativeGainNode);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createGainNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeGainNodePromise === null) {
              nativeGainNodePromise = createGainNode(proxy, nativeOfflineAudioContext);
            }

            return nativeGainNodePromise;
          }
        };
      };
    };

    var createGetBackupNativeContext = function createGetBackupNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor, nativeOfflineAudioContextConstructor) {
      return function (nativeContext) {
        /*
         * Bug #50: Only Safari does currently allow to create AudioNodes on a closed context yet which is why there needs to be no
         * backupNativeContext in that case.
         */
        if (nativeContext.state === 'closed' && !window.hasOwnProperty('webkitAudioContext')) {
          if (isNativeOfflineAudioContext(nativeContext)) {
            var backupNativeContext = BACKUP_NATIVE_CONTEXT_STORE.get(nativeContext);

            if (backupNativeContext !== undefined) {
              return backupNativeContext;
            }

            if (nativeOfflineAudioContextConstructor !== null) {
              // @todo Copy the attached AudioWorkletProcessors and other settings.
              var bckpNtveCntxt = new nativeOfflineAudioContextConstructor(1, 1, 44100);
              BACKUP_NATIVE_CONTEXT_STORE.set(nativeContext, bckpNtveCntxt);
              return bckpNtveCntxt;
            }
          } else {
            var _backupNativeContext = BACKUP_NATIVE_CONTEXT_STORE.get(nativeContext);

            if (_backupNativeContext !== undefined) {
              return _backupNativeContext;
            }

            if (nativeAudioContextConstructor !== null) {
              // @todo Copy the attached AudioWorkletProcessors and other settings.
              var _bckpNtveCntxt = new nativeAudioContextConstructor();

              BACKUP_NATIVE_CONTEXT_STORE.set(nativeContext, _bckpNtveCntxt);
              return _bckpNtveCntxt;
            }
          }
        }

        return null;
      };
    };

    var createInvalidAccessError = function createInvalidAccessError() {
      try {
        return new DOMException('', 'InvalidAccessError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 15;
        err.name = 'InvalidAccessError';
        return err;
      }
    };

    var wrapIIRFilterNodeGetFrequencyResponseMethod = function wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode) {
      nativeIIRFilterNode.getFrequencyResponse = function (getFrequencyResponse) {
        return function (frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError();
          }

          return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
        };
      }(nativeIIRFilterNode.getFrequencyResponse);
    };

    var DEFAULT_OPTIONS$c = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createIIRFilterNodeConstructor = function createIIRFilterNodeConstructor(createNativeIIRFilterNode, createIIRFilterNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(IIRFilterNode, _noneAudioDestination);

          function IIRFilterNode(context, options) {
            var _this;

            _classCallCheck(this, IIRFilterNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$c, options);
            var nativeIIRFilterNode = createNativeIIRFilterNode(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
            var iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer(mergedOptions.feedback, mergedOptions.feedforward) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(IIRFilterNode).call(this, context, nativeIIRFilterNode, iirFilterNodeRenderer)); // Bug #23 & #24: FirefoxDeveloper does not throw an InvalidAccessError.
            // @todo Write a test which allows other browsers to remain unpatched.

            wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
            _this._nativeIIRFilterNode = nativeIIRFilterNode;
            return _this;
          }

          _createClass(IIRFilterNode, [{
            key: "getFrequencyResponse",
            value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
              return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
            }
          }]);

          return IIRFilterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    // This implementation as shamelessly inspired by source code of
    // tslint:disable-next-line:max-line-length
    // {@link https://chromium.googlesource.com/chromium/src.git/+/master/third_party/WebKit/Source/platform/audio/IIRFilter.cpp|Chromium's IIRFilter}.
    var filterBuffer = function filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) {
      var inputLength = input.length;
      var i = bufferIndex;

      for (var j = 0; j < inputLength; j += 1) {
        var y = feedforward[0] * input[j];

        for (var k = 1; k < minLength; k += 1) {
          var x = i - k & bufferLength - 1; // tslint:disable-line:no-bitwise

          y += feedforward[k] * xBuffer[x];
          y -= feedback[k] * yBuffer[x];
        }

        for (var _k = minLength; _k < feedforwardLength; _k += 1) {
          y += feedforward[_k] * xBuffer[i - _k & bufferLength - 1]; // tslint:disable-line:no-bitwise
        }

        for (var _k2 = minLength; _k2 < feedbackLength; _k2 += 1) {
          y -= feedback[_k2] * yBuffer[i - _k2 & bufferLength - 1]; // tslint:disable-line:no-bitwise
        }

        xBuffer[i] = input[j];
        yBuffer[i] = y;
        i = i + 1 & bufferLength - 1; // tslint:disable-line:no-bitwise

        output[j] = y;
      }

      return i;
    };

    var filterFullBuffer = function filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) {
      var feedbackLength = feedback.length;
      var feedforwardLength = feedforward.length;
      var minLength = Math.min(feedbackLength, feedforwardLength);

      if (feedback[0] !== 1) {
        for (var i = 0; i < feedbackLength; i += 1) {
          feedforward[i] /= feedback[0];
        }

        for (var _i = 1; _i < feedforwardLength; _i += 1) {
          feedback[_i] /= feedback[0];
        }
      }

      var bufferLength = 32;
      var xBuffer = new Float32Array(bufferLength);
      var yBuffer = new Float32Array(bufferLength);
      var filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
      var numberOfChannels = renderedBuffer.numberOfChannels;

      for (var _i2 = 0; _i2 < numberOfChannels; _i2 += 1) {
        var input = renderedBuffer.getChannelData(_i2);
        var output = filteredBuffer.getChannelData(_i2); // @todo Add a test which checks support for TypedArray.prototype.fill().

        xBuffer.fill(0);
        yBuffer.fill(0);
        filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
      }

      return filteredBuffer;
    };

    var createIIRFilterNodeRendererFactory = function createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, createNativeAudioNode, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext) {
      return function (feedback, feedforward) {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, partialOfflineAudioContext, renderedBuffer, audioBufferSourceNode;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy);

                    if (!(nativeOfflineAudioContextConstructor === null)) {
                      _context.next = 3;
                      break;
                    }

                    throw new Error();

                  case 3:
                    if (!(nativeOfflineAudioContext.createIIRFilter === undefined)) {
                      _context.next = 16;
                      break;
                    }

                    partialOfflineAudioContext = new nativeOfflineAudioContextConstructor( // Bug #47: The AudioDestinationNode in Edge and Safari gets not initialized correctly.
                    proxy.context.destination.channelCount, // Bug #17: Safari does not yet expose the length.
                    proxy.context.length, nativeOfflineAudioContext.sampleRate);
                    _context.next = 7;
                    return renderInputsOfAudioNode(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);

                  case 7:
                    _context.next = 9;
                    return renderNativeOfflineAudioContext(partialOfflineAudioContext);

                  case 9:
                    renderedBuffer = _context.sent;
                    audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext);
                    audioBufferSourceNode.buffer = filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
                    audioBufferSourceNode.start(0);
                    return _context.abrupt("return", audioBufferSourceNode);

                  case 16:
                    // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.
                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      nativeAudioNode = createNativeAudioNode(nativeOfflineAudioContext, function (ntvCntxt) {
                        return ntvCntxt.createIIRFilter(feedforward, feedback);
                      });
                    }

                    _context.next = 19;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 19:
                    return _context.abrupt("return", nativeAudioNode);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var createIsNativeContext = function createIsNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor) {
      return function (anyContext) {
        if (nativeAudioContextConstructor === null) {
          throw new Error('The native AudioContext constructor is missing.');
        }

        return anyContext instanceof nativeAudioContextConstructor || isNativeOfflineAudioContext(anyContext);
      };
    };

    var createIsNativeOfflineAudioContext = function createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor) {
      return function (anyContext) {
        if (nativeOfflineAudioContextConstructor === null) {
          throw new Error('The native OfflineAudioContext constructor is missing.');
        }

        return anyContext instanceof nativeOfflineAudioContextConstructor;
      };
    };

    var createIsSecureContext = function createIsSecureContext(window) {
      return window !== null && window.isSecureContext;
    };

    var createIsSupportedPromise = function createIsSupportedPromise(browsernizr, testAudioContextCloseMethodSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextOptionsSupport, testAudioWorkletProcessorNoOutputsSupport, testChannelMergerNodeSupport, testChannelSplitterNodeChannelCountSupport, testConstantSourceNodeAccurateSchedulingSupport, testConvolverNodeBufferReassignabilitySupport, testIsSecureContextSupport, testStereoPannerNodeDefaultValueSupport, testTransferablesSupport) {
      if (browsernizr.promises && browsernizr.typedarrays && browsernizr.webaudio && cacheTestResult(testAudioContextCloseMethodSupport, testAudioContextCloseMethodSupport) && cacheTestResult(testAudioContextOptionsSupport, testAudioContextOptionsSupport) && cacheTestResult(testChannelSplitterNodeChannelCountSupport, testChannelSplitterNodeChannelCountSupport) && cacheTestResult(testConstantSourceNodeAccurateSchedulingSupport, testConstantSourceNodeAccurateSchedulingSupport) && cacheTestResult(testConvolverNodeBufferReassignabilitySupport, testConvolverNodeBufferReassignabilitySupport) && cacheTestResult(testIsSecureContextSupport, testIsSecureContextSupport)) {
        return Promise.all([cacheTestResult(testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport), cacheTestResult(testAudioWorkletProcessorNoOutputsSupport, testAudioWorkletProcessorNoOutputsSupport), cacheTestResult(testChannelMergerNodeSupport, testChannelMergerNodeSupport), cacheTestResult(testStereoPannerNodeDefaultValueSupport, testStereoPannerNodeDefaultValueSupport), cacheTestResult(testTransferablesSupport, testTransferablesSupport)]).then(function (results) {
          return results.every(function (result) {
            return result;
          });
        });
      }

      return Promise.resolve(false);
    };

    var getNativeAudioContext = function getNativeAudioContext(audioContext) {
      var nativeContext = CONTEXT_STORE.get(audioContext);

      if (nativeContext === undefined) {
        throw createInvalidStateError();
      }

      return nativeContext;
    };

    var DEFAULT_OPTIONS$d = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createMediaElementAudioSourceNodeConstructor = function createMediaElementAudioSourceNodeConstructor(createNativeMediaElementAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(MediaElementAudioSourceNode, _noneAudioDestination);

          function MediaElementAudioSourceNode(context, options) {
            var _this;

            _classCallCheck(this, MediaElementAudioSourceNode);

            var nativeContext = getNativeAudioContext(context);

            if (isNativeOfflineAudioContext(nativeContext)) {
              throw createNotSupportedError();
            }

            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$d, options);
            var nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode(nativeContext, mergedOptions);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaElementAudioSourceNode).call(this, context, nativeMediaElementAudioSourceNode, null)); // Bug #63: Edge & Firefox do not expose the mediaElement yet.

            _this._mediaElement = mergedOptions.mediaElement;
            _this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
            return _this;
          }

          _createClass(MediaElementAudioSourceNode, [{
            key: "mediaElement",
            get: function get() {
              return this._nativeMediaElementAudioSourceNode.mediaElement === undefined ? this._mediaElement : this._nativeMediaElementAudioSourceNode.mediaElement;
            }
          }]);

          return MediaElementAudioSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var DEFAULT_OPTIONS$e = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createMediaStreamAudioSourceNodeConstructor = function createMediaStreamAudioSourceNodeConstructor(createNativeMediaStreamAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(MediaStreamAudioSourceNode, _noneAudioDestination);

          function MediaStreamAudioSourceNode(context, options) {
            var _this;

            _classCallCheck(this, MediaStreamAudioSourceNode);

            var nativeContext = getNativeAudioContext(context);

            if (isNativeOfflineAudioContext(nativeContext)) {
              throw createNotSupportedError();
            }

            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$e, options);
            var nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode(nativeContext, mergedOptions);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaStreamAudioSourceNode).call(this, context, nativeMediaStreamAudioSourceNode, null)); // Bug #63: Edge & Firefox do not expose the mediaStream yet.

            _this._mediaStream = mergedOptions.mediaStream;
            _this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
            return _this;
          }

          _createClass(MediaStreamAudioSourceNode, [{
            key: "mediaStream",
            get: function get() {
              return this._nativeMediaStreamAudioSourceNode.mediaStream === undefined ? this._mediaStream : this._nativeMediaStreamAudioSourceNode.mediaStream;
            }
          }]);

          return MediaStreamAudioSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createMinimalAudioContextConstructor = function createMinimalAudioContextConstructor(createInvalidStateError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(MinimalAudioContext, _minimalBaseAudioCont);

          function MinimalAudioContext() {
            var _this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MinimalAudioContext);

            if (nativeAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var nativeAudioContext = new nativeAudioContextConstructor(options); // Bug #131 Safari returns null when there are four other AudioContexts running already.

            if (nativeAudioContext === null) {
              throw createUnknownError();
            } // Bug #51 Only Chrome and Opera throw an error if the given latencyHint is invalid.


            if (!isValidLatencyHint(options.latencyHint)) {
              throw new TypeError("The provided value '".concat(options.latencyHint, "' is not a valid enum value of type AudioContextLatencyCategory."));
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalAudioContext).call(this, nativeAudioContext, nativeAudioContext.destination.channelCount));
            var latencyHint = options.latencyHint;
            var sampleRate = nativeAudioContext.sampleRate; // @todo The values for 'balanced', 'interactive' and 'playback' are just copied from Chrome's implementation.

            _this._baseLatency = typeof nativeAudioContext.baseLatency === 'number' ? nativeAudioContext.baseLatency : latencyHint === 'balanced' ? 512 / sampleRate : latencyHint === 'interactive' || latencyHint === undefined ? 256 / sampleRate : latencyHint === 'playback' ? 1024 / sampleRate :
            /*
             * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
             * ScriptProcessorNode.
             */
            Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
            _this._nativeAudioContext = nativeAudioContext;
            _this._state = null;
            /*
             * Bug #34: Chrome and Opera pretend to be running right away, but fire an onstatechange event when the state actually
             * changes to 'running'.
             */

            if (nativeAudioContext.state === 'running') {
              _this._state = 'suspended';

              var revokeState = function revokeState() {
                if (_this._state === 'suspended') {
                  _this._state = null;
                }

                nativeAudioContext.removeEventListener('statechange', revokeState);
              };

              nativeAudioContext.addEventListener('statechange', revokeState);
            }

            return _this;
          }

          _createClass(MinimalAudioContext, [{
            key: "close",
            value: function close() {
              // Bug #35: Firefox does not throw an error if the AudioContext was closed before.
              if (this.state === 'closed') {
                return this._nativeAudioContext.close().then(function () {
                  throw createInvalidStateError();
                });
              } // Bug #34: If the state was set to suspended before it should be revoked now.


              if (this._state === 'suspended') {
                this._state = null;
              }

              return this._nativeAudioContext.close();
              /*
               * Bug #50: Deleting the AudioGraph is currently not possible anymore.
               * ...then(() => deleteAudioGraph(this, this._nativeAudioContext));
               */
            }
          }, {
            key: "resume",
            value: function resume() {
              var _this2 = this;

              if (this._state === 'suspended') {
                return new Promise(function (resolve, reject) {
                  var resolvePromise = function resolvePromise() {
                    _this2._nativeAudioContext.removeEventListener('statechange', resolvePromise);

                    if (_this2._nativeAudioContext.state === 'running') {
                      resolve();
                    } else {
                      _this2.resume().then(resolve, reject);
                    }
                  };

                  _this2._nativeAudioContext.addEventListener('statechange', resolvePromise);
                });
              }

              return this._nativeAudioContext.resume().catch(function (err) {
                // Bug #55: Chrome, Edge and Opera do throw an InvalidAccessError instead of an InvalidStateError.
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined || err.code === 15) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "suspend",
            value: function suspend() {
              return this._nativeAudioContext.suspend().catch(function (err) {
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "baseLatency",
            get: function get() {
              return this._baseLatency;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state !== null ? this._state : this._nativeAudioContext.state;
            }
          }]);

          return MinimalAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var createMinimalBaseAudioContextConstructor = function createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener) {
      return (
        /*#__PURE__*/
        function (_EventTarget) {
          _inherits(MinimalBaseAudioContext, _EventTarget);

          function MinimalBaseAudioContext(_nativeContext, numberOfChannels) {
            var _this;

            _classCallCheck(this, MinimalBaseAudioContext);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalBaseAudioContext).call(this, _nativeContext));
            _this._nativeContext = _nativeContext;
            CONTEXT_STORE.set(_assertThisInitialized(_this), _nativeContext); // Bug #93: Edge will set the sampleRate of an AudioContext to zero when it is closed.

            var sampleRate = _nativeContext.sampleRate;
            Object.defineProperty(_nativeContext, 'sampleRate', {
              get: function get() {
                return sampleRate;
              }
            });
            _this._destination = new audioDestinationNodeConstructor(_assertThisInitialized(_this), numberOfChannels);
            _this._listener = createAudioListener(_assertThisInitialized(_this), _nativeContext);
            _this._onstatechange = null;
            return _this;
          }

          _createClass(MinimalBaseAudioContext, [{
            key: "currentTime",
            get: function get() {
              return this._nativeContext.currentTime;
            }
          }, {
            key: "destination",
            get: function get() {
              return this._destination;
            }
          }, {
            key: "listener",
            get: function get() {
              return this._listener;
            }
          }, {
            key: "onstatechange",
            get: function get() {
              return this._onstatechange;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeContext.onstatechange = wrappedListener;
              var nativeOnStateChange = this._nativeContext.onstatechange;
              this._onstatechange = nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
            }
          }, {
            key: "sampleRate",
            get: function get() {
              return this._nativeContext.sampleRate;
            }
          }, {
            key: "state",
            get: function get() {
              return this._nativeContext.state;
            }
          }]);

          return MinimalBaseAudioContext;
        }(EventTarget)
      );
    };

    var testPromiseSupport = function testPromiseSupport(nativeContext) {
      // This 12 numbers represent the 48 bytes of an empty WAVE file with a single sample.
      var uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);

      try {
        // Bug #1: Safari requires a successCallback.
        var promise = nativeContext.decodeAudioData(uint32Array.buffer, function () {// Ignore the success callback.
        });

        if (promise === undefined) {
          return false;
        }

        promise.catch(function () {// Ignore rejected errors.
        });
        return true;
      } catch (_a) {// Ignore errors.
      }

      return false;
    };

    var DEFAULT_OPTIONS$f = {
      numberOfChannels: 1
    };
    var createMinimalOfflineAudioContextConstructor = function createMinimalOfflineAudioContextConstructor(createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, _startRendering) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(MinimalOfflineAudioContext, _minimalBaseAudioCont);

          function MinimalOfflineAudioContext(options) {
            var _this;

            _classCallCheck(this, MinimalOfflineAudioContext);

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$f, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            var nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate); // #21 Safari does not support promises and therefore would fire the statechange event before the promise can be resolved.

            if (!cacheTestResult(testPromiseSupport, function () {
              return testPromiseSupport(nativeOfflineAudioContext);
            })) {
              nativeOfflineAudioContext.addEventListener('statechange', function () {
                var i = 0;

                var delayStateChangeEvent = function delayStateChangeEvent(event) {
                  if (_this._state === 'running') {
                    if (i > 0) {
                      nativeOfflineAudioContext.removeEventListener('statechange', delayStateChangeEvent);
                      event.stopImmediatePropagation();

                      _this._waitForThePromiseToSettle(event);
                    } else {
                      i += 1;
                    }
                  }
                };

                return delayStateChangeEvent;
              }());
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalOfflineAudioContext).call(this, nativeOfflineAudioContext, numberOfChannels));
            _this._length = length;
            _this._nativeOfflineAudioContext = nativeOfflineAudioContext;
            _this._state = null;
            return _this;
          }

          _createClass(MinimalOfflineAudioContext, [{
            key: "startRendering",
            value: function startRendering() {
              var _this2 = this;

              /*
               * Bug #9 & #59: It is theoretically possible that startRendering() will first render a partialOfflineAudioContext. Therefore
               * the state of the nativeOfflineAudioContext might no transition to running immediately.
               */
              if (this._state === 'running') {
                return Promise.reject(createInvalidStateError());
              }

              this._state = 'running';
              return _startRendering(this.destination, this._nativeOfflineAudioContext).then(function (audioBuffer) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                return audioBuffer;
              }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
              .catch(function (err) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "_waitForThePromiseToSettle",
            value: function _waitForThePromiseToSettle(event) {
              var _this3 = this;

              if (this._state === null) {
                this._nativeOfflineAudioContext.dispatchEvent(event);
              } else {
                setTimeout(function () {
                  return _this3._waitForThePromiseToSettle(event);
                });
              }
            }
          }, {
            key: "length",
            get: function get() {
              // Bug #17: Safari does not yet expose the length.
              if (this._nativeOfflineAudioContext.length === undefined) {
                return this._length;
              }

              return this._nativeOfflineAudioContext.length;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
            }
          }]);

          return MinimalOfflineAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var assignNativeAudioNodeOption = function assignNativeAudioNodeOption(nativeAudioNode, options, option) {
      var value = options[option];

      if (value !== undefined && value !== nativeAudioNode[option]) {
        nativeAudioNode[option] = value;
      }
    };

    var assignNativeAudioNodeOptions = function assignNativeAudioNodeOptions(nativeAudioNode, options) {
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCount');
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCountMode');
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelInterpretation');
    };

    var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = function testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode) {
      return typeof nativeAnalyserNode.getFloatTimeDomainData === 'function';
    };

    var wrapAnalyserNodeGetFloatTimeDomainDataMethod = function wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode) {
      nativeAnalyserNode.getFloatTimeDomainData = function (array) {
        var byteTimeDomainData = new Uint8Array(array.length);
        nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
        var length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);

        for (var i = 0; i < length; i += 1) {
          array[i] = (byteTimeDomainData[i] - 128) * 0.0078125;
        }

        return array;
      };
    };

    var createNativeAnalyserNodeFactory = function createNativeAnalyserNodeFactory(createIndexSizeError, createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeAnalyserNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createAnalyser();
        }); // Bug #37: Firefox does not create an AnalyserNode with the default properties.

        assignNativeAudioNodeOptions(nativeAnalyserNode, options); // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.

        if (!(options.maxDecibels > options.minDecibels)) {
          throw createIndexSizeError();
        }

        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'fftSize');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'maxDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'minDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'smoothingTimeConstant'); // Bug #36: Safari does not support getFloatTimeDomainData() yet.

        if (!cacheTestResult(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, function () {
          return testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode);
        })) {
          wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
        }

        return nativeAnalyserNode;
      };
    };

    var createNativeAudioBufferConstructor = function createNativeAudioBufferConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('AudioBuffer')) {
        // @todo TypeScript doesn't know yet about the AudioBuffer constructor.
        return window.AudioBuffer;
      }

      return null;
    };

    var assignNativeAudioNodeAudioParamValue = function assignNativeAudioNodeAudioParamValue(nativeAudioNode, options, audioParam) {
      var value = options[audioParam];

      if (value !== undefined && value !== nativeAudioNode[audioParam].value) {
        nativeAudioNode[audioParam].value = value;
      }
    };

    var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = function wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode) {
      nativeAudioBufferSourceNode.start = function (start) {
        var isScheduled = false;
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 ? arguments[2] : undefined;

          if (isScheduled) {
            throw createInvalidStateError();
          }

          start.call(nativeAudioBufferSourceNode, when, offset, duration);
          isScheduled = true;
        };
      }(nativeAudioBufferSourceNode.start);
    };

    var wrapAudioBufferSourceNodeStartMethodDurationParameter = function wrapAudioBufferSourceNodeStartMethodDurationParameter(nativeAudioScheduledSourceNode, nativeContext) {
      var endTime = Number.POSITIVE_INFINITY;
      var stopTime = Number.POSITIVE_INFINITY;

      nativeAudioScheduledSourceNode.start = function (start, stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
          start.call(nativeAudioScheduledSourceNode, when, offset);

          if (duration >= 0 && duration < Number.POSITIVE_INFINITY) {
            var actualStartTime = Math.max(when, nativeContext.currentTime); // @todo The playbackRate could of course also have been automated and is not always fixed.

            var durationInBufferTime = duration / nativeAudioScheduledSourceNode.playbackRate.value;
            endTime = actualStartTime + durationInBufferTime;
            stop.call(nativeAudioScheduledSourceNode, Math.min(endTime, stopTime));
          }
        };
      }(nativeAudioScheduledSourceNode.start, nativeAudioScheduledSourceNode.stop);

      nativeAudioScheduledSourceNode.stop = function (stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          stopTime = Math.max(when, nativeContext.currentTime);
          stop.call(nativeAudioScheduledSourceNode, Math.min(endTime, stopTime));
        };
      }(nativeAudioScheduledSourceNode.stop);
    };

    var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = function wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioScheduledSourceNode) {
      nativeAudioScheduledSourceNode.start = function (start) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof duration === 'number' && duration < 0 || offset < 0 || when < 0) {
            throw new RangeError("The parameters can't be negative.");
          } // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.


          start.call(nativeAudioScheduledSourceNode, when, offset, duration);
        };
      }(nativeAudioScheduledSourceNode.start);
    };

    var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = function wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioScheduledSourceNode) {
      nativeAudioScheduledSourceNode.stop = function (stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (when < 0) {
            throw new RangeError("The parameter can't be negative.");
          }

          stop.call(nativeAudioScheduledSourceNode, when);
        };
      }(nativeAudioScheduledSourceNode.stop);
    };

    var createNativeAudioBufferSourceNodeFactory = function createNativeAudioBufferSourceNodeFactory(createNativeAudioNode, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodDurationParameterSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) {
      return function (nativeContext) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
        assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, 'playbackRate'); // Bug #71: Edge does not allow to set the buffer to null.

        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'buffer'); // @todo assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'detune');

        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loop');
        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loopEnd');
        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loopStart'); // Bug #69: Safari does allow calls to start() of an already scheduled AudioBufferSourceNode.

        if (!cacheTestResult(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, function () {
          return testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
        } // Bug #92: Edge does not respect the duration parameter yet.


        if (!cacheTestResult(testAudioBufferSourceNodeStartMethodDurationParameterSupport, testAudioBufferSourceNodeStartMethodDurationParameterSupport)) {
          wrapAudioBufferSourceNodeStartMethodDurationParameter(nativeAudioBufferSourceNode, nativeContext);
        } // Bug #44: Only Chrome, Firefox & Opera throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
        } // Bug #19: Safari does not ignore calls to stop() of an already stopped AudioBufferSourceNode.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, function () {
          return testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeAudioBufferSourceNode, nativeContext);
        } // Bug #44: Only Firefox does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
        }

        return nativeAudioBufferSourceNode;
      };
    };

    var createNativeAudioContextConstructor = function createNativeAudioContextConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('AudioContext')) {
        return window.AudioContext;
      }

      return window.hasOwnProperty('webkitAudioContext') ? window.webkitAudioContext : null;
    };

    var createNativeAudioDestinationNode = function createNativeAudioDestinationNode(nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) {
      var nativeAudioDestinationNode = nativeContext.destination; // Bug #132: Edge & Safari do not have the correct channelCount.

      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        nativeAudioDestinationNode.channelCount = channelCount;
      } // Bug #83: Edge & Safari do not have the correct channelCountMode.


      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== 'explicit') {
        nativeAudioDestinationNode.channelCountMode = 'explicit';
      } // Bug #47: The AudioDestinationNode in Edge and Safari does not initialize the maxChannelCount property correctly.


      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, 'maxChannelCount', {
          get: function get() {
            return nativeAudioDestinationNode.channelCount;
          }
        });
      }

      return nativeAudioDestinationNode;
    };

    var createNativeAudioNodeFactory = function createNativeAudioNodeFactory(getBackupNativeContext) {
      return function (nativeContext, factoryFunction) {
        // Bug #50: Only Safari does currently allow to create AudioNodes on a closed context yet.
        var backupNativeContext = getBackupNativeContext(nativeContext);

        if (backupNativeContext !== null) {
          return factoryFunction(backupNativeContext);
        }

        return factoryFunction(nativeContext);
      };
    };

    var createNativeAudioWorkletNodeConstructor = function createNativeAudioWorkletNodeConstructor(window) {
      if (window === null) {
        return null;
      } // @todo TypeScript doesn't know yet about the AudioWorkletNode constructor.


      return window.hasOwnProperty('AudioWorkletNode') ? window.AudioWorkletNode : null;
    };

    var testClonabilityOfAudioWorkletNodeOptions = function testClonabilityOfAudioWorkletNodeOptions(audioWorkletNodeOptions) {
      var _ref = new MessageChannel(),
          port1 = _ref.port1;

      try {
        // This will throw an error if the audioWorkletNodeOptions are not clonable.
        port1.postMessage(audioWorkletNodeOptions);
      } finally {
        port1.close();
      }
    };

    var createNativeAudioWorkletNodeFactory = function createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeAudioWorkletNodeFaker, createNotSupportedError, isNativeOfflineAudioContext) {
      return function (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor, name, processorDefinition, options) {
        if (nativeAudioWorkletNodeConstructor !== null) {
          try {
            // Bug #86: Chrome Canary does not invoke the process() function if the corresponding AudioWorkletNode has no output.
            var nativeAudioWorkletNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
              return isNativeOfflineAudioContext(ntvCntxt) && options.numberOfInputs !== 0 && options.numberOfOutputs === 0 ? new nativeAudioWorkletNodeConstructor(ntvCntxt, name, Object.assign({}, options, {
                numberOfOutputs: 1,
                outputChannelCount: [1],
                parameterData: Object.assign({}, options.parameterData, {
                  hasNoOutput: 1
                })
              })) : new nativeAudioWorkletNodeConstructor(ntvCntxt, name, options);
            });
            /*
             * Bug #61: Overwriting the property accessors is necessary as long as some browsers have no native implementation to
             * achieve a consistent behavior.
             */

            Object.defineProperties(nativeAudioWorkletNode, {
              channelCount: {
                get: function get() {
                  return options.channelCount;
                },
                set: function set() {
                  throw createInvalidStateError();
                }
              },
              channelCountMode: {
                get: function get() {
                  return 'explicit';
                },
                set: function set() {
                  throw createInvalidStateError();
                }
              }
            });
            return nativeAudioWorkletNode;
          } catch (err) {
            // Bug #60: Chrome Canary throws an InvalidStateError instead of a NotSupportedError.
            if (err.code === 11) {
              throw createNotSupportedError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          }
        } // Bug #61: Only Chrome & Opera have an implementation of the AudioWorkletNode yet.


        if (processorDefinition === undefined) {
          throw createNotSupportedError();
        }

        testClonabilityOfAudioWorkletNodeOptions(options);
        return createNativeAudioWorkletNodeFaker(nativeContext, baseLatency, processorDefinition, options);
      };
    };

    var computeBufferSize = function computeBufferSize(baseLatency, sampleRate) {
      if (baseLatency === null) {
        return 512;
      }

      return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
    };

    var cloneAudioWorkletNodeOptions = function cloneAudioWorkletNodeOptions(audioWorkletNodeOptions) {
      return new Promise(function (resolve, reject) {
        var _ref = new MessageChannel(),
            port1 = _ref.port1,
            port2 = _ref.port2;

        port1.onmessage = function (_ref2) {
          var data = _ref2.data;
          port1.close();
          port2.close();
          resolve(data);
        };

        port1.onmessageerror = function (_ref3) {
          var data = _ref3.data;
          port1.close();
          port2.close();
          reject(data);
        }; // This will throw an error if the audioWorkletNodeOptions are not clonable.


        port2.postMessage(audioWorkletNodeOptions);
      });
    };

    var createAudioWorkletProcessorPromise =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(processorDefinition, audioWorkletNodeOptions) {
        var clonedAudioWorkletNodeOptions;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);

              case 2:
                clonedAudioWorkletNodeOptions = _context.sent;
                return _context.abrupt("return", new processorDefinition(clonedAudioWorkletNodeOptions));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function createAudioWorkletProcessorPromise(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var createAudioWorkletProcessor = function createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNode, processorDefinition, audioWorkletNodeOptions) {
      var nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);

      if (nodeToProcessorMap === undefined) {
        nodeToProcessorMap = new WeakMap();
        NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
      }

      var audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorDefinition, audioWorkletNodeOptions);
      nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
      return audioWorkletProcessorPromise;
    };

    var createNativeAudioWorkletNodeFakerFactory = function createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs) {
      return function (nativeContext, baseLatency, processorDefinition, options) {
        if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
          throw createNotSupportedError();
        }

        if (options.outputChannelCount !== undefined) {
          if (options.outputChannelCount.length !== options.numberOfOutputs) {
            throw createIndexSizeError();
          } // @todo Check if any of the channelCount values is greater than the implementation's maximum number of channels.


          if (options.outputChannelCount.some(function (channelCount) {
            return channelCount < 1;
          })) {
            throw createNotSupportedError();
          }
        } // Bug #61: This is not part of the standard but required for the faker to work.


        if (options.channelCountMode !== 'explicit') {
          throw createNotSupportedError();
        }

        var numberOfInputChannels = options.channelCount * options.numberOfInputs;
        var numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
          return sum + value;
        }, 0);
        var numberOfParameters = processorDefinition.parameterDescriptors === undefined ? 0 : processorDefinition.parameterDescriptors.length; // Bug #61: This is not part of the standard but required for the faker to work.

        if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
          throw createNotSupportedError();
        }

        var messageChannel = new MessageChannel();
        var gainNodes = [];
        var inputChannelSplitterNodes = [];

        for (var i = 0; i < options.numberOfInputs; i += 1) {
          gainNodes.push(createNativeGainNode(nativeContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          }));
          inputChannelSplitterNodes.push(createNativeChannelSplitterNode(nativeContext, {
            channelCount: options.channelCount,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: options.channelCount
          }));
        }

        var constantSourceNodes = [];

        if (processorDefinition.parameterDescriptors !== undefined) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var _step$value = _step.value,
                  defaultValue = _step$value.defaultValue,
                  maxValue = _step$value.maxValue,
                  minValue = _step$value.minValue;
              var constantSourceNode = createNativeConstantSourceNode(nativeContext, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                offset: defaultValue === undefined ? 0 : defaultValue
              });
              Object.defineProperties(constantSourceNode.offset, {
                defaultValue: {
                  get: function get() {
                    return defaultValue === undefined ? 0 : defaultValue;
                  }
                },
                maxValue: {
                  get: function get() {
                    return maxValue === undefined ? MOST_POSITIVE_SINGLE_FLOAT : maxValue;
                  }
                },
                minValue: {
                  get: function get() {
                    return minValue === undefined ? MOST_NEGATIVE_SINGLE_FLOAT : minValue;
                  }
                }
              });
              constantSourceNodes.push(constantSourceNode);
            };

            for (var _iterator = processorDefinition.parameterDescriptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        var inputChannelMergerNode = createNativeChannelMergerNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
        });
        var bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, numberOfInputChannels + numberOfParameters, // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels));
        var outputChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
          channelCount: Math.max(1, numberOfOutputChannels),
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          numberOfOutputs: Math.max(1, numberOfOutputChannels)
        });
        var outputChannelMergerNodes = [];

        for (var _i = 0; _i < options.numberOfOutputs; _i += 1) {
          outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: options.outputChannelCount[_i]
          }));
        }

        for (var _i2 = 0; _i2 < options.numberOfInputs; _i2 += 1) {
          gainNodes[_i2].connect(inputChannelSplitterNodes[_i2]);

          for (var j = 0; j < options.channelCount; j += 1) {
            inputChannelSplitterNodes[_i2].connect(inputChannelMergerNode, j, _i2 * options.channelCount + j);
          }
        }

        var parameterMap = new ReadOnlyMap(processorDefinition.parameterDescriptors === undefined ? [] : processorDefinition.parameterDescriptors.map(function (_ref, index) {
          var name = _ref.name;
          var constantSourceNode = constantSourceNodes[index];
          constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
          constantSourceNode.start(0);
          return [name, constantSourceNode.offset];
        }));
        inputChannelMergerNode.connect(scriptProcessorNode);

        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.connect(outputChannelSplitterNode);
        }

        for (var _i3 = 0, outputChannelSplitterNodeOutput = 0; _i3 < options.numberOfOutputs; _i3 += 1) {
          var outputChannelMergerNode = outputChannelMergerNodes[_i3];

          for (var _j = 0; _j < options.outputChannelCount[_i3]; _j += 1) {
            outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + _j, _j);
          }

          outputChannelSplitterNodeOutput += options.outputChannelCount[_i3];
        }

        var onprocessorerror = null; // Bug #87: Expose at least one output to make this node connectable.

        var outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
        var nativeAudioWorkletNodeFaker = {
          get bufferSize() {
            return bufferSize;
          },

          get channelCount() {
            return options.channelCount;
          },

          set channelCount(_) {
            // Bug #61: This is not part of the standard but required for the faker to work.
            throw createInvalidStateError();
          },

          get channelCountMode() {
            return options.channelCountMode;
          },

          set channelCountMode(_) {
            // Bug #61: This is not part of the standard but required for the faker to work.
            throw createInvalidStateError();
          },

          get channelInterpretation() {
            return gainNodes[0].channelInterpretation;
          },

          set channelInterpretation(value) {
            for (var _i4 = 0; _i4 < gainNodes.length; _i4++) {
              var gainNode = gainNodes[_i4];
              gainNode.channelInterpretation = value;
            }
          },

          get context() {
            return gainNodes[0].context;
          },

          get inputs() {
            return gainNodes;
          },

          get numberOfInputs() {
            return options.numberOfInputs;
          },

          get numberOfOutputs() {
            return options.numberOfOutputs;
          },

          get onprocessorerror() {
            return onprocessorerror;
          },

          set onprocessorerror(value) {
            if (typeof onprocessorerror === 'function') {
              nativeAudioWorkletNodeFaker.removeEventListener('processorerror', onprocessorerror);
            }

            onprocessorerror = typeof value === 'function' ? value : null;

            if (typeof onprocessorerror === 'function') {
              nativeAudioWorkletNodeFaker.addEventListener('processorerror', onprocessorerror);
            }
          },

          get parameters() {
            return parameterMap;
          },

          get port() {
            return messageChannel.port2;
          },

          addEventListener: function addEventListener() {
            return gainNodes[0].addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          connect: function connect() {
            return connectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          disconnect: function disconnect() {
            return disconnectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return gainNodes[0].dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return gainNodes[0].removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        processorDefinition.prototype.port = messageChannel.port1;
        var audioWorkletProcessor = null;
        var audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorDefinition, options);
        audioWorkletProcessorPromise.then(function (dWrkltPrcssr) {
          return audioWorkletProcessor = dWrkltPrcssr;
        });
        var inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
        var outputs = createNestedArrays(options.numberOfOutputs, options.outputChannelCount);
        var parameters = processorDefinition.parameterDescriptors === undefined ? [] : processorDefinition.parameterDescriptors.reduce(function (prmtrs, _ref2) {
          var name = _ref2.name;
          return Object.assign({}, prmtrs, _defineProperty({}, name, new Float32Array(128)));
        }, {});
        var isActive = true;

        scriptProcessorNode.onaudioprocess = function (_ref3) {
          var inputBuffer = _ref3.inputBuffer,
              outputBuffer = _ref3.outputBuffer;

          if (audioWorkletProcessor !== null) {
            var _loop2 = function _loop2(_i5) {
              for (var _j2 = 0; _j2 < options.numberOfInputs; _j2 += 1) {
                for (var k = 0; k < options.channelCount; k += 1) {
                  copyFromChannel(inputBuffer, inputs[_j2], k, k, _i5);
                }
              }

              if (processorDefinition.parameterDescriptors !== undefined) {
                processorDefinition.parameterDescriptors.forEach(function (_ref4, index) {
                  var name = _ref4.name;
                  copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, _i5);
                });
              }

              for (var _j3 = 0; _j3 < options.numberOfInputs; _j3 += 1) {
                for (var _k = 0; _k < options.outputChannelCount[_j3]; _k += 1) {
                  // The byteLength will be 0 when the ArrayBuffer was transferred.
                  if (outputs[_j3][_k].byteLength === 0) {
                    outputs[_j3][_k] = new Float32Array(128);
                  }
                }
              }

              try {
                var audioNodeConnections = getAudioNodeConnections(nativeAudioWorkletNodeFaker);
                var potentiallyEmptyInputs = inputs.map(function (input, index) {
                  if (audioNodeConnections.inputs[index].size === 0) {
                    return [new Float32Array(0)];
                  }

                  return input;
                });
                var activeSourceFlag = audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters);
                isActive = activeSourceFlag;

                for (var _j4 = 0, _outputChannelSplitterNodeOutput = 0; _j4 < options.numberOfOutputs; _j4 += 1) {
                  for (var _k2 = 0; _k2 < options.outputChannelCount[_j4]; _k2 += 1) {
                    copyToChannel(outputBuffer, outputs[_j4], _k2, _outputChannelSplitterNodeOutput + _k2, _i5);
                  }

                  _outputChannelSplitterNodeOutput += options.outputChannelCount[_j4];
                }
              } catch (_a) {
                isActive = false;
                nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent('processorerror'));
              }

              if (!isActive) {
                scriptProcessorNode.onaudioprocess = null; // tslint:disable-line:deprecation

                return "break";
              }
            };

            for (var _i5 = 0; _i5 < bufferSize; _i5 += 128) {
              var _ret = _loop2(_i5);

              if (_ret === "break") break;
            }
          }
        };

        return nativeAudioWorkletNodeFaker;
      };
    };

    var createNativeBiquadFilterNodeFactory = function createNativeBiquadFilterNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeBiquadFilterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBiquadFilter();
        });
        assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'Q');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'detune');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'frequency');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'gain');
        assignNativeAudioNodeOption(nativeBiquadFilterNode, options, 'type');
        return nativeBiquadFilterNode;
      };
    };

    var createNativeChannelMergerNodeFactory = function createNativeChannelMergerNodeFactory(createNativeAudioNode, wrapChannelMergerNode) {
      return function (nativeContext, options) {
        var nativeChannelMergerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createChannelMerger(options.numberOfInputs);
        });
        assignNativeAudioNodeOptions(nativeChannelMergerNode, options); // Bug #15: Safari does not return the default properties.

        if (nativeChannelMergerNode.channelCount !== 1 && nativeChannelMergerNode.channelCountMode !== 'explicit') {
          wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
        } // Bug #16: Firefox does not throw an error when setting a different channelCount or channelCountMode.


        try {
          nativeChannelMergerNode.channelCount = options.numberOfInputs === undefined ? 6 : options.numberOfInputs;
          wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
        } catch (
        /* Ignore errors. */
        _a) {}
        /* Ignore errors. */
        // tslint:disable-line:no-empty


        return nativeChannelMergerNode;
      };
    };

    var wrapChannelSplitterNode = function wrapChannelSplitterNode(channelSplitterNode) {
      var channelCount = channelSplitterNode.numberOfOutputs; // Bug #97: Safari does not throw an error when attempting to change the channelCount to something other than its initial value.

      Object.defineProperty(channelSplitterNode, 'channelCount', {
        get: function get() {
          return channelCount;
        },
        set: function set(value) {
          if (value !== channelCount) {
            throw createInvalidStateError();
          }
        }
      });
      /*
       * Bug #30: Only Chrome, Firefox & Opera throw an error when attempting to change the channelCountMode to something other than
       * explicit.
       */

      Object.defineProperty(channelSplitterNode, 'channelCountMode', {
        get: function get() {
          return 'explicit';
        },
        set: function set(value) {
          if (value !== 'explicit') {
            throw createInvalidStateError();
          }
        }
      });
      /*
       * Bug #32: Only Chrome, Firefox & Opera throws an error when attempting to change the channelInterpretation to something other than
       * discrete.
       */

      Object.defineProperty(channelSplitterNode, 'channelInterpretation', {
        get: function get() {
          return 'discrete';
        },
        set: function set(value) {
          if (value !== 'discrete') {
            throw createInvalidStateError();
          }
        }
      });
    };

    var createNativeChannelSplitterNodeFactory = function createNativeChannelSplitterNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeChannelSplitterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createChannelSplitter(options.numberOfOutputs);
        }); // Bug #96: Safari does not have the correct channelCount.
        // Bug #29: Edge & Safari do not have the correct channelCountMode.
        // Bug #31: Edge & Safari do not have the correct channelInterpretation.

        assignNativeAudioNodeOptions(nativeChannelSplitterNode, options); // Bug #29, #30, #31, #32, #96 & #97: Only Chrome, Firefox & Opera partially support the spec yet.

        wrapChannelSplitterNode(nativeChannelSplitterNode);
        return nativeChannelSplitterNode;
      };
    };

    var createNativeConstantSourceNodeFactory = function createNativeConstantSourceNodeFactory(createNativeAudioNode, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport) {
      return function (nativeContext, options) {
        // Bug #62: Edge & Safari do not support ConstantSourceNodes.
        if (nativeContext.createConstantSource === undefined) {
          return createNativeConstantSourceNodeFaker(nativeContext, options);
        }

        var nativeConstantSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createConstantSource();
        });
        assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
        assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, 'offset'); // Bug #44: Only Chrome, Firefox & Opera throw a RangeError yet.

        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
        } // Bug #44: Only Firefox does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
        }

        return nativeConstantSourceNode;
      };
    };

    var interceptConnections = function interceptConnections(original, interceptor) {
      original.connect = function (destination) {
        var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (destination instanceof AudioNode) {
          // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
          interceptor.connect.call(interceptor, destination, output, input); // Bug #11: Safari does not support chaining yet.

          return destination;
        } // @todo TypeScript does still assume that connect() returns void.


        return interceptor.connect.call(interceptor, destination, output);
      };

      original.disconnect = function () {
        // @todo TypeScript cannot infer all the signatures yet.
        interceptor.disconnect.apply(interceptor, arguments);
      };

      return original;
    };

    var createNativeConstantSourceNodeFakerFactory = function createNativeConstantSourceNodeFakerFactory(createNativeAudioBufferSourceNode, createNativeGainNode) {
      return function (nativeContext, _a) {
        var offset = _a.offset,
            audioNodeOptions = tslib_1.__rest(_a, ["offset"]);

        var audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext);
        /*
         * @todo Edge will throw a NotSupportedError when calling createBuffer() on a closed context. That's why the audioBuffer is created
         * after the audioBufferSourceNode in this case. If the context is closed createNativeAudioBufferSourceNode() will throw the
         * expected error and createBuffer() never gets called.
         */

        var audioBuffer = nativeContext.createBuffer(1, 2, nativeContext.sampleRate);
        var gainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: offset
        })); // Bug #5: Safari does not support copyFromChannel() and copyToChannel().

        var channelData = audioBuffer.getChannelData(0); // Bug #95: Safari does not play or loop one sample buffers.

        channelData[0] = 1;
        channelData[1] = 1;
        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.loop = true;
        audioBufferSourceNode.connect(gainNode);
        var nativeConstantSourceNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return gainNode.channelCount;
          },

          set channelCount(value) {
            gainNode.channelCount = value;
          },

          get channelCountMode() {
            return gainNode.channelCountMode;
          },

          set channelCountMode(value) {
            gainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return gainNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            gainNode.channelInterpretation = value;
          },

          get context() {
            return gainNode.context;
          },

          get inputs() {
            return undefined;
          },

          get numberOfInputs() {
            return audioBufferSourceNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return gainNode.numberOfOutputs;
          },

          get offset() {
            return gainNode.gain;
          },

          get onended() {
            return audioBufferSourceNode.onended;
          },

          set onended(value) {
            audioBufferSourceNode.onended = value;
          },

          addEventListener: function addEventListener() {
            return audioBufferSourceNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return audioBufferSourceNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return audioBufferSourceNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          start: function start() {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            audioBufferSourceNode.start.call(audioBufferSourceNode, when);
          },
          stop: function stop() {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
          }
        };
        return interceptConnections(nativeConstantSourceNodeFaker, gainNode);
      };
    };

    var createNativeConvolverNodeFactory = function createNativeConvolverNodeFactory(createNativeAudioNode, createNotSupportedError) {
      return function (nativeContext, options) {
        var nativeConvolverNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createConvolver();
        });
        assignNativeAudioNodeOptions(nativeConvolverNode, options);
        assignNativeAudioNodeOption(nativeConvolverNode, options, 'buffer');

        if (options.disableNormalization === nativeConvolverNode.normalize) {
          nativeConvolverNode.normalize = !options.disableNormalization;
        } // Bug #113: Edge & Safari allow to change the channelCount


        if (options.channelCount !== 2) {
          throw createNotSupportedError();
        }

        Object.defineProperty(nativeConvolverNode, 'channelCount', {
          get: function get() {
            return options.channelCount;
          },
          set: function set(value) {
            if (value !== options.channelCount) {
              throw createNotSupportedError();
            }
          }
        }); // Bug #114: Edge & Safari allow to change the channelCountMode

        if (options.channelCountMode !== 'clamped-max') {
          throw createNotSupportedError();
        }

        Object.defineProperty(nativeConvolverNode, 'channelCountMode', {
          get: function get() {
            return options.channelCountMode;
          },
          set: function set(value) {
            if (value !== options.channelCountMode) {
              throw createNotSupportedError();
            }
          }
        });
        return nativeConvolverNode;
      };
    };

    var createNativeDelayNodeFactory = function createNativeDelayNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeDelayNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createDelay(options.maxDelayTime);
        });
        assignNativeAudioNodeOptions(nativeDelayNode, options);
        assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, 'delayTime');
        return nativeDelayNode;
      };
    };

    var createNativeDynamicsCompressorNodeFactory = function createNativeDynamicsCompressorNodeFactory(createNativeAudioNode, createNotSupportedError) {
      return function (nativeContext, options) {
        var nativeDynamicsCompressorNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createDynamicsCompressor();
        });
        assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options); // Bug #108: Only Chrome and Opera disallow a channelCount of three and above yet.

        if (options.channelCount > 2) {
          throw createNotSupportedError();
        } // Bug #109: Only Chrome and Opera disallow a channelCountMode of 'max'.


        if (options.channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'attack');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'knee');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'ratio');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'release');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'threshold');
        return nativeDynamicsCompressorNode;
      };
    };

    var createNativeGainNodeFactory = function createNativeGainNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeGainNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createGain();
        });
        assignNativeAudioNodeOptions(nativeGainNode, options);
        assignNativeAudioNodeAudioParamValue(nativeGainNode, options, 'gain');
        return nativeGainNode;
      };
    };

    var createNativeIIRFilterNodeFactory = function createNativeIIRFilterNodeFactory(createNativeAudioNode, createNativeIIRFilterNodeFaker) {
      return function (nativeContext, baseLatency, options) {
        // Bug #9: Safari does not support IIRFilterNodes.
        if (nativeContext.createIIRFilter === undefined) {
          return createNativeIIRFilterNodeFaker(nativeContext, baseLatency, options);
        }

        var nativeIIRFilterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createIIRFilter(options.feedforward, options.feedback);
        });
        assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
        return nativeIIRFilterNode;
      };
    };

    function divide(a, b) {
      var denominator = b[0] * b[0] + b[1] * b[1];
      return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
    }

    function multiply(a, b) {
      return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    }

    function evaluatePolynomial(coefficient, z) {
      var result = [0, 0];

      for (var i = coefficient.length - 1; i >= 0; i -= 1) {
        result = multiply(result, z);
        result[0] += coefficient[i];
      }

      return result;
    }

    var createNativeIIRFilterNodeFakerFactory = function createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError) {
      return function (nativeContext, baseLatency, _ref) {
        var channelCount = _ref.channelCount,
            channelCountMode = _ref.channelCountMode,
            channelInterpretation = _ref.channelInterpretation,
            feedback = _ref.feedback,
            feedforward = _ref.feedforward;
        var bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
        var feedbackLength = feedback.length;
        var feedforwardLength = feedforward.length;
        var minLength = Math.min(feedbackLength, feedforwardLength);

        if (feedback.length === 0 || feedback.length > 20) {
          throw createNotSupportedError();
        }

        if (feedback[0] === 0) {
          throw createInvalidStateError();
        }

        if (feedforward.length === 0 || feedforward.length > 20) {
          throw createNotSupportedError();
        }

        if (feedforward[0] === 0) {
          throw createInvalidStateError();
        }

        if (feedback[0] !== 1) {
          for (var i = 0; i < feedforwardLength; i += 1) {
            feedforward[i] /= feedback[0];
          }

          for (var _i = 1; _i < feedbackLength; _i += 1) {
            feedback[_i] /= feedback[0];
          }
        }

        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, channelCount, channelCount);
        scriptProcessorNode.channelCount = channelCount;
        scriptProcessorNode.channelCountMode = channelCountMode;
        scriptProcessorNode.channelInterpretation = channelInterpretation;
        var bufferLength = 32;
        var bufferIndexes = [];
        var xBuffers = [];
        var yBuffers = [];

        for (var _i2 = 0; _i2 < channelCount; _i2 += 1) {
          bufferIndexes.push(0);
          var xBuffer = new Float32Array(bufferLength);
          var yBuffer = new Float32Array(bufferLength); // @todo Add a test which checks support for TypedArray.prototype.fill().

          xBuffer.fill(0);
          yBuffer.fill(0);
          xBuffers.push(xBuffer);
          yBuffers.push(yBuffer);
        }

        scriptProcessorNode.onaudioprocess = function (event) {
          var inputBuffer = event.inputBuffer;
          var outputBuffer = event.outputBuffer;
          var numberOfChannels = inputBuffer.numberOfChannels;

          for (var _i3 = 0; _i3 < numberOfChannels; _i3 += 1) {
            var input = inputBuffer.getChannelData(_i3);
            var output = outputBuffer.getChannelData(_i3);
            bufferIndexes[_i3] = filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffers[_i3], yBuffers[_i3], bufferIndexes[_i3], bufferLength, input, output);
          }
        };

        var nyquist = nativeContext.sampleRate / 2;
        var nativeIIRFilterNodeFaker = {
          get bufferSize() {
            return bufferSize;
          },

          get channelCount() {
            return scriptProcessorNode.channelCount;
          },

          set channelCount(value) {
            scriptProcessorNode.channelCount = value;
          },

          get channelCountMode() {
            return scriptProcessorNode.channelCountMode;
          },

          set channelCountMode(value) {
            scriptProcessorNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return scriptProcessorNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            scriptProcessorNode.channelInterpretation = value;
          },

          get context() {
            return scriptProcessorNode.context;
          },

          get inputs() {
            return [scriptProcessorNode];
          },

          get numberOfInputs() {
            return scriptProcessorNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return scriptProcessorNode.numberOfOutputs;
          },

          addEventListener: function addEventListener() {
            // @todo Dissallow adding an audioprocess listener.
            return scriptProcessorNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return scriptProcessorNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          getFrequencyResponse: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
            if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
              throw createInvalidAccessError();
            }

            var length = frequencyHz.length;

            for (var _i4 = 0; _i4 < length; _i4 += 1) {
              var omega = -Math.PI * (frequencyHz[_i4] / nyquist);
              var z = [Math.cos(omega), Math.sin(omega)];
              var numerator = evaluatePolynomial(feedforward, z);
              var denominator = evaluatePolynomial(feedback, z);
              var response = divide(numerator, denominator);
              magResponse[_i4] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
              phaseResponse[_i4] = Math.atan2(response[1], response[0]);
            }
          },
          removeEventListener: function removeEventListener() {
            return scriptProcessorNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
      };
    };

    var createNativeMediaElementAudioSourceNodeFactory = function createNativeMediaElementAudioSourceNodeFactory(createNativeAudioNode) {
      return function (nativeAudioContext, options) {
        return createNativeAudioNode(nativeAudioContext, function (ntvDCntxt) {
          return ntvDCntxt.createMediaElementSource(options.mediaElement);
        });
      };
    };

    var createNativeMediaStreamAudioSourceNodeFactory = function createNativeMediaStreamAudioSourceNodeFactory(createInvalidStateError, createNativeAudioNode) {
      return function (nativeAudioContext, _ref) {
        var mediaStream = _ref.mediaStream;
        var nativeMediaElementAudioSourceNode = createNativeAudioNode(nativeAudioContext, function (ntvDCntxt) {
          return ntvDCntxt.createMediaStreamSource(mediaStream);
        }); // Bug #120: Firefox does not throw an error if the mediaStream has no audio track.

        var audioTracks = mediaStream.getAudioTracks();

        if (audioTracks.length === 0) {
          throw createInvalidStateError();
        }

        return nativeMediaElementAudioSourceNode;
      };
    };

    var createNativeOfflineAudioContextConstructor = function createNativeOfflineAudioContextConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('OfflineAudioContext')) {
        return window.OfflineAudioContext;
      }

      return window.hasOwnProperty('webkitOfflineAudioContext') ? window.webkitOfflineAudioContext : null;
    };

    var createNativeOscillatorNodeFactory = function createNativeOscillatorNodeFactory(createNativeAudioNode, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) {
      return function (nativeContext, options) {
        var nativeOscillatorNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });
        assignNativeAudioNodeOptions(nativeOscillatorNode, options);
        assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, 'detune');
        assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, 'frequency');

        if (options.periodicWave !== undefined) {
          nativeOscillatorNode.setPeriodicWave(options.periodicWave);
        } else {
          assignNativeAudioNodeOption(nativeOscillatorNode, options, 'type');
        } // Bug #44: Only Chrome & Opera throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
        } // Bug #19: Safari does not ignore calls to stop() of an already stopped AudioBufferSourceNode.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, function () {
          return testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeOscillatorNode, nativeContext);
        } // Bug #44: No browser does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
        }

        return nativeOscillatorNode;
      };
    };

    var createNativePannerNodeFactory = function createNativePannerNodeFactory(createNativeAudioNode, createNativePannerNodeFaker) {
      return function (nativeContext, options) {
        var nativePannerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createPanner();
        }); // Bug #124: Edge & Safari do not support modifying the orientation and the position with AudioParams.

        if (nativePannerNode.orientationX === undefined) {
          return createNativePannerNodeFaker(nativeContext, options);
        }

        assignNativeAudioNodeOptions(nativePannerNode, options);
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationZ');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionZ');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneInnerAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterGain');
        assignNativeAudioNodeOption(nativePannerNode, options, 'distanceModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'maxDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'panningModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'refDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'rolloffFactor');
        return nativePannerNode;
      };
    };

    var createNativePannerNodeFakerFactory = function createNativePannerNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError) {
      return function (nativeContext, _a) {
        var coneInnerAngle = _a.coneInnerAngle,
            coneOuterAngle = _a.coneOuterAngle,
            coneOuterGain = _a.coneOuterGain,
            distanceModel = _a.distanceModel,
            maxDistance = _a.maxDistance,
            orientationX = _a.orientationX,
            orientationY = _a.orientationY,
            orientationZ = _a.orientationZ,
            panningModel = _a.panningModel,
            positionX = _a.positionX,
            positionY = _a.positionY,
            positionZ = _a.positionZ,
            refDistance = _a.refDistance,
            rolloffFactor = _a.rolloffFactor,
            audioNodeOptions = tslib_1.__rest(_a, ["coneInnerAngle", "coneOuterAngle", "coneOuterGain", "distanceModel", "maxDistance", "orientationX", "orientationY", "orientationZ", "panningModel", "positionX", "positionY", "positionZ", "refDistance", "rolloffFactor"]);

        var pannerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createPanner();
        }); // Bug #125: Safari does not throw an error yet.

        if (audioNodeOptions.channelCount > 2) {
          throw createNotSupportedError();
        } // Bug #126: Safari does not throw an error yet.


        if (audioNodeOptions.channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
        var SINGLE_CHANNEL_OPTIONS = {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete'
        };
        var channelMergerNode = createNativeChannelMergerNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          numberOfInputs: 6
        });
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var orientationXGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 1
        }));
        var orientationYGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var orientationZGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionXGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionYGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionZGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 6, 0);
        var waveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          curve: new Float32Array([1, 1]),
          oversample: 'none'
        }));
        var lastOrientation = [1, 0, 0];
        var lastPosition = [0, 0, 0];

        scriptProcessorNode.onaudioprocess = function (_ref) {
          var inputBuffer = _ref.inputBuffer;
          var orientation = [inputBuffer.getChannelData(0)[0], inputBuffer.getChannelData(1)[0], inputBuffer.getChannelData(2)[0]];

          if (orientation.some(function (value, index) {
            return value !== lastOrientation[index];
          })) {
            pannerNode.setOrientation.apply(pannerNode, orientation); // tslint:disable-line:deprecation

            lastOrientation = orientation;
          }

          var positon = [inputBuffer.getChannelData(6)[0], inputBuffer.getChannelData(7)[0], inputBuffer.getChannelData(8)[0]];

          if (positon.some(function (value, index) {
            return value !== lastPosition[index];
          })) {
            pannerNode.setPosition.apply(pannerNode, positon); // tslint:disable-line:deprecation

            lastPosition = positon;
          }
        };

        inputGainNode.connect(pannerNode); // Bug #119: Safari does not fully support the WaveShaperNode.

        inputGainNode.connect(waveShaperNode.inputs === undefined ? waveShaperNode : waveShaperNode.inputs[0]);
        waveShaperNode.connect(orientationXGainNode);
        waveShaperNode.connect(orientationYGainNode);
        waveShaperNode.connect(orientationZGainNode);
        waveShaperNode.connect(positionXGainNode);
        waveShaperNode.connect(positionYGainNode);
        waveShaperNode.connect(positionZGainNode);
        orientationXGainNode.connect(channelMergerNode);
        orientationYGainNode.connect(channelMergerNode);
        orientationZGainNode.connect(channelMergerNode);
        positionXGainNode.connect(channelMergerNode);
        positionYGainNode.connect(channelMergerNode);
        positionZGainNode.connect(channelMergerNode);
        channelMergerNode.connect(scriptProcessorNode);
        Object.defineProperty(orientationYGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(orientationZGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionXGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionYGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionZGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        var nativePannerNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return pannerNode.channelCount;
          },

          set channelCount(value) {
            // Bug #125: Safari does not throw an error yet.
            if (value > 2) {
              throw createNotSupportedError();
            }

            inputGainNode.channelCount = value;
            pannerNode.channelCount = value;
          },

          get channelCountMode() {
            return pannerNode.channelCountMode;
          },

          set channelCountMode(value) {
            // Bug #126: Safari does not throw an error yet.
            if (value === 'max') {
              throw createNotSupportedError();
            }

            inputGainNode.channelCountMode = value;
            pannerNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return pannerNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
            pannerNode.channelInterpretation = value;
          },

          get coneInnerAngle() {
            return pannerNode.coneInnerAngle;
          },

          set coneInnerAngle(value) {
            pannerNode.coneInnerAngle = value;
          },

          get coneOuterAngle() {
            return pannerNode.coneOuterAngle;
          },

          set coneOuterAngle(value) {
            pannerNode.coneOuterAngle = value;
          },

          get coneOuterGain() {
            return pannerNode.coneOuterGain;
          },

          set coneOuterGain(value) {
            // Bug #127: Edge & Safari do not throw an InvalidStateError yet.
            if (value < 0 || value > 1) {
              throw createInvalidStateError();
            }

            pannerNode.coneOuterGain = value;
          },

          get context() {
            return pannerNode.context;
          },

          get distanceModel() {
            return pannerNode.distanceModel;
          },

          set distanceModel(value) {
            pannerNode.distanceModel = value;
          },

          get inputs() {
            return [inputGainNode];
          },

          get maxDistance() {
            return pannerNode.maxDistance;
          },

          set maxDistance(value) {
            // Bug #128: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.maxDistance = value;
          },

          get numberOfInputs() {
            return pannerNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return pannerNode.numberOfOutputs;
          },

          get orientationX() {
            return orientationXGainNode.gain;
          },

          get orientationY() {
            return orientationYGainNode.gain;
          },

          get orientationZ() {
            return orientationZGainNode.gain;
          },

          get panningModel() {
            return pannerNode.panningModel;
          },

          set panningModel(value) {
            pannerNode.panningModel = value; // Bug #123: Edge does not support HRTF as panningModel.

            if (pannerNode.panningModel !== value && value === 'HRTF') {
              throw createNotSupportedError();
            }
          },

          get positionX() {
            return positionXGainNode.gain;
          },

          get positionY() {
            return positionYGainNode.gain;
          },

          get positionZ() {
            return positionZGainNode.gain;
          },

          get refDistance() {
            return pannerNode.refDistance;
          },

          set refDistance(value) {
            // Bug #129: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.refDistance = value;
          },

          get rolloffFactor() {
            return pannerNode.rolloffFactor;
          },

          set rolloffFactor(value) {
            // Bug #130: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.rolloffFactor = value;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };

        if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
          nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
        }

        if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
          nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
        }

        if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
          nativePannerNodeFaker.coneOuterGain = coneOuterGain;
        }

        if (distanceModel !== nativePannerNodeFaker.distanceModel) {
          nativePannerNodeFaker.distanceModel = distanceModel;
        }

        if (maxDistance !== nativePannerNodeFaker.maxDistance) {
          nativePannerNodeFaker.maxDistance = maxDistance;
        }

        if (orientationX !== nativePannerNodeFaker.orientationX.value) {
          nativePannerNodeFaker.orientationX.value = orientationX;
        }

        if (orientationY !== nativePannerNodeFaker.orientationY.value) {
          nativePannerNodeFaker.orientationY.value = orientationY;
        }

        if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
          nativePannerNodeFaker.orientationZ.value = orientationZ;
        }

        if (panningModel !== nativePannerNodeFaker.panningModel) {
          nativePannerNodeFaker.panningModel = panningModel;
        }

        if (positionX !== nativePannerNodeFaker.positionX.value) {
          nativePannerNodeFaker.positionX.value = positionX;
        }

        if (positionY !== nativePannerNodeFaker.positionY.value) {
          nativePannerNodeFaker.positionY.value = positionY;
        }

        if (positionZ !== nativePannerNodeFaker.positionZ.value) {
          nativePannerNodeFaker.positionZ.value = positionZ;
        }

        if (refDistance !== nativePannerNodeFaker.refDistance) {
          nativePannerNodeFaker.refDistance = refDistance;
        }

        if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
          nativePannerNodeFaker.rolloffFactor = rolloffFactor;
        }

        return interceptConnections(nativePannerNodeFaker, pannerNode);
      };
    };

    var createNativePeriodicWaveFactory = function createNativePeriodicWaveFactory(getBackupNativeContext) {
      return function (nativeContext, _ref) {
        var disableNormalization = _ref.disableNormalization,
            imag = _ref.imag,
            real = _ref.real;
        // Bug #50: Only Safari does currently allow to create AudioNodes (and other objects) on a closed context yet.
        var backupNativeContext = getBackupNativeContext(nativeContext); // @todo Edge, Firefox & Safari do only accept Float32Arrays.

        var wrappedImag = new Float32Array(imag);
        var wrappedReal = new Float32Array(real);

        if (backupNativeContext !== null) {
          return backupNativeContext.createPeriodicWave(wrappedReal, wrappedImag, {
            disableNormalization: disableNormalization
          });
        }

        return nativeContext.createPeriodicWave(wrappedReal, wrappedImag, {
          disableNormalization: disableNormalization
        });
      };
    };

    var createNativeScriptProcessorNodeFactory = function createNativeScriptProcessorNodeFactory(createNativeAudioNode) {
      return function (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) {
        return createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
        });
      };
    };

    var createNativeStereoPannerNodeFactory = function createNativeStereoPannerNodeFactory(createNativeAudioNode, createNativeStereoPannerNodeFaker, createNotSupportedError) {
      return function (nativeContext, options) {
        return createNativeAudioNode(nativeContext, function (ntvCntxt) {
          var channelCountMode = options.channelCountMode;
          /*
           * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
           * which supports it and therefore it can't be supported at all.
           */

          if (channelCountMode === 'clamped-max') {
            throw createNotSupportedError();
          } // Bug #105: Safari does not support the StereoPannerNode.


          if (nativeContext.createStereoPanner === undefined) {
            return createNativeStereoPannerNodeFaker(nativeContext, options);
          }

          var nativeStereoPannerNode = ntvCntxt.createStereoPanner();
          assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
          assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, 'pan');
          /*
           * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
           * which supports it and therefore it can't be supported at all.
           */

          Object.defineProperty(nativeStereoPannerNode, 'channelCountMode', {
            get: function get() {
              return channelCountMode;
            },
            set: function set(value) {
              if (value !== channelCountMode) {
                throw createNotSupportedError();
              }
            }
          });
          return nativeStereoPannerNode;
        });
      };
    };

    var createNativeStereoPannerNodeFakerFactory = function createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError) {
      // The curve has a size of 14bit plus 1 value to have an exact representation for zero. This value has been determined experimentally.
      var CURVE_SIZE = 16385;
      var DC_CURVE = new Float32Array([1, 1]);
      var HALF_PI = Math.PI / 2;
      var SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete'
      };
      var SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
        oversample: 'none'
      });

      var buildInternalGraphForMono = function buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode) {
        var leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightWaveShaperCurve = new Float32Array(CURVE_SIZE);

        for (var i = 0; i < CURVE_SIZE; i += 1) {
          var x = i / (CURVE_SIZE - 1) * HALF_PI;
          leftWaveShaperCurve[i] = Math.cos(x);
          rightWaveShaperCurve[i] = Math.sin(x);
        }

        var leftGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftWaveShaperCurve
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var panWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: DC_CURVE
        }));
        var rightGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightWaveShaperCurve
        }));
        inputGainNode.connect(leftGainNode);
        inputGainNode.connect(panWaveShaperNode.inputs[0]);
        inputGainNode.connect(rightGainNode);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftWaveShaperNode.inputs[0]);
        panGainNode.connect(rightWaveShaperNode.inputs[0]);
        leftWaveShaperNode.connect(leftGainNode.gain);
        rightWaveShaperNode.connect(rightGainNode.gain);
        leftGainNode.connect(channelMergerNode, 0, 0);
        rightGainNode.connect(channelMergerNode, 0, 1);
        return [leftGainNode, rightGainNode];
      };

      var buildInternalGraphForStereo = function buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode) {
        var leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var centerIndex = Math.floor(CURVE_SIZE / 2);

        for (var i = 0; i < CURVE_SIZE; i += 1) {
          if (i > centerIndex) {
            var x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
            leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
            leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
            rightInputForLeftOutputWaveShaperCurve[i] = 0;
            rightInputForRightOutputWaveShaperCurve[i] = 1;
          } else {
            var _x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;

            leftInputForLeftOutputWaveShaperCurve[i] = 1;
            leftInputForRightOutputWaveShaperCurve[i] = 0;
            rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(_x);
            rightInputForRightOutputWaveShaperCurve[i] = Math.sin(_x);
          }
        }

        var channelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
          channelCount: 2,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          numberOfOutputs: 2
        });
        var leftInputForLeftOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftInputForLeftOutputWaveShaperCurve
        }));
        var leftInputForRightOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftInputForRightOutputWaveShaperCurve
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var panWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: DC_CURVE
        }));
        var rightInputForLeftOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightInputForLeftOutputWaveShaperCurve
        }));
        var rightInputForRightOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightInputForRightOutputWaveShaperCurve
        }));
        inputGainNode.connect(channelSplitterNode);
        inputGainNode.connect(panWaveShaperNode.inputs[0]);
        channelSplitterNode.connect(leftInputForLeftOutputGainNode, 1);
        channelSplitterNode.connect(leftInputForRightOutputGainNode, 1);
        channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
        channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs[0]);
        leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
        leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
        rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
        rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
        leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        return [leftInputForLeftOutputGainNode, rightInputForLeftOutputGainNode, leftInputForRightOutputGainNode, rightInputForRightOutputGainNode];
      };

      var buildInternalGraph = function buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) {
        if (channelCount === 1) {
          return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        } else if (channelCount === 2) {
          return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        }

        throw createNotSupportedError();
      };

      return function (nativeContext, _a) {
        var channelCount = _a.channelCount,
            channelCountMode = _a.channelCountMode,
            pan = _a.pan,
            audioNodeOptions = tslib_1.__rest(_a, ["channelCount", "channelCountMode", "pan"]);

        if (channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        var channelMergerNode = createNativeChannelMergerNode(nativeContext, Object.assign({}, audioNodeOptions, {
          channelCount: 1,
          channelCountMode: channelCountMode,
          numberOfInputs: 2
        }));
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          channelCount: channelCount,
          channelCountMode: channelCountMode,
          gain: 1
        }));
        var panGainNode = createNativeGainNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          gain: pan
        });
        var outputNodes = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
        Object.defineProperty(panGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        var nativeStereoPannerNodeFakerFactory = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return inputGainNode.channelCount;
          },

          set channelCount(value) {
            if (inputGainNode.channelCount !== value) {
              inputGainNode.disconnect();
              outputNodes.forEach(function (outputNode) {
                return outputNode.disconnect();
              });
              outputNodes = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode);
            }

            inputGainNode.channelCount = value;
          },

          get channelCountMode() {
            return inputGainNode.channelCountMode;
          },

          set channelCountMode(value) {
            if (value === 'clamped-max' || value === 'max') {
              throw createNotSupportedError();
            }

            inputGainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return inputGainNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
          },

          get context() {
            return inputGainNode.context;
          },

          get inputs() {
            return [inputGainNode];
          },

          get numberOfInputs() {
            return inputGainNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return inputGainNode.numberOfOutputs;
          },

          get pan() {
            return panGainNode.gain;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        return interceptConnections(nativeStereoPannerNodeFakerFactory, channelMergerNode);
      };
    };

    var createNativeWaveShaperNodeFactory = function createNativeWaveShaperNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeWaveShaperNodeFaker) {
      return function (nativeContext, options) {
        var nativeWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });

        try {
          // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
          // Bug #119: Safari does not correctly map the values. Bug #102 is only used to detect Safari in this case.
          nativeWaveShaperNode.curve = new Float32Array([1]);
          return createNativeWaveShaperNodeFaker(nativeContext, options);
        } catch (
        /* Ignore errors. */
        _a) {
          /* Ignore errors. */
        }

        assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
        var curve = options.curve; // Bug #104: Chrome will throw an InvalidAccessError when the curve has less than two samples.

        if (curve !== null && curve.length < 2) {
          throw createInvalidStateError();
        }

        assignNativeAudioNodeOption(nativeWaveShaperNode, options, 'curve');
        assignNativeAudioNodeOption(nativeWaveShaperNode, options, 'oversample');
        return nativeWaveShaperNode;
      };
    };

    var createNativeWaveShaperNodeFakerFactory = function createNativeWaveShaperNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeGainNode) {
      return function (nativeContext, _a) {
        var curve = _a.curve,
            oversample = _a.oversample,
            audioNodeOptions = tslib_1.__rest(_a, ["curve", "oversample"]);

        var negativeWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });
        var positiveWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });
        assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
        assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var invertGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: -1
        }));
        var outputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var revertGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: -1
        }));
        inputGainNode.connect(negativeWaveShaperNode);
        negativeWaveShaperNode.connect(outputGainNode);
        inputGainNode.connect(invertGainNode);
        invertGainNode.connect(positiveWaveShaperNode);
        positiveWaveShaperNode.connect(revertGainNode);
        revertGainNode.connect(outputGainNode);
        var unmodifiedCurve = null;
        var nativeWaveShaperNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return negativeWaveShaperNode.channelCount;
          },

          set channelCount(value) {
            inputGainNode.channelCount = value;
            invertGainNode.channelCount = value;
            negativeWaveShaperNode.channelCount = value;
            outputGainNode.channelCount = value;
            positiveWaveShaperNode.channelCount = value;
            revertGainNode.channelCount = value;
          },

          get channelCountMode() {
            return negativeWaveShaperNode.channelCountMode;
          },

          set channelCountMode(value) {
            inputGainNode.channelCountMode = value;
            invertGainNode.channelCountMode = value;
            negativeWaveShaperNode.channelCountMode = value;
            outputGainNode.channelCountMode = value;
            positiveWaveShaperNode.channelCountMode = value;
            revertGainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return negativeWaveShaperNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
            invertGainNode.channelInterpretation = value;
            negativeWaveShaperNode.channelInterpretation = value;
            outputGainNode.channelInterpretation = value;
            positiveWaveShaperNode.channelInterpretation = value;
            revertGainNode.channelInterpretation = value;
          },

          get context() {
            return negativeWaveShaperNode.context;
          },

          get curve() {
            return unmodifiedCurve;
          },

          set curve(value) {
            // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
            if (curve !== null && curve.length < 2) {
              throw createInvalidStateError();
            }

            if (value === null) {
              negativeWaveShaperNode.curve = value;
              positiveWaveShaperNode.curve = value;
            } else {
              var curveLength = value.length;
              var negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
              var positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
              negativeCurve[0] = value[0];
              positiveCurve[0] = -value[curveLength - 1];
              var length = Math.ceil((curveLength + 1) / 2);
              var centerIndex = (curveLength + 1) / 2 - 1;

              for (var i = 1; i < length; i += 1) {
                var theoreticIndex = i / length * centerIndex;
                var lowerIndex = Math.floor(theoreticIndex);
                var upperIndex = Math.ceil(theoreticIndex);
                negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
                positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
              }

              negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
              negativeWaveShaperNode.curve = negativeCurve;
              positiveWaveShaperNode.curve = positiveCurve;
            }

            unmodifiedCurve = value;
          },

          get inputs() {
            return [inputGainNode];
          },

          get numberOfInputs() {
            return negativeWaveShaperNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return negativeWaveShaperNode.numberOfOutputs;
          },

          get oversample() {
            return negativeWaveShaperNode.oversample;
          },

          set oversample(value) {
            negativeWaveShaperNode.oversample = value;
            positiveWaveShaperNode.oversample = value;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };

        if (curve !== nativeWaveShaperNodeFaker.curve) {
          nativeWaveShaperNodeFaker.curve = curve;
        }

        if (oversample !== nativeWaveShaperNodeFaker.oversample) {
          nativeWaveShaperNodeFaker.oversample = oversample;
        }

        return interceptConnections(nativeWaveShaperNodeFaker, outputGainNode);
      };
    };

    var createNoneAudioDestinationNodeConstructor = function createNoneAudioDestinationNodeConstructor(audioNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_audioNodeConstructor) {
          _inherits(NoneAudioDestinationNode, _audioNodeConstructor);

          function NoneAudioDestinationNode(context, nativeAudioNode, audioNodeRenderer) {
            _classCallCheck(this, NoneAudioDestinationNode);

            return _possibleConstructorReturn(this, _getPrototypeOf(NoneAudioDestinationNode).call(this, context, nativeAudioNode, audioNodeRenderer));
          }

          return NoneAudioDestinationNode;
        }(audioNodeConstructor)
      );
    };

    var createNotSupportedError = function createNotSupportedError() {
      try {
        return new DOMException('', 'NotSupportedError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 9;
        err.name = 'NotSupportedError';
        return err;
      }
    };

    var DEFAULT_OPTIONS$g = {
      numberOfChannels: 1
    };
    var createOfflineAudioContextConstructor = function createOfflineAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNativeOfflineAudioContext, _startRendering) {
      return (
        /*#__PURE__*/
        function (_baseAudioContextCons) {
          _inherits(OfflineAudioContext, _baseAudioContextCons);

          function OfflineAudioContext(a, b, c) {
            var _this;

            _classCallCheck(this, OfflineAudioContext);

            var options;

            if (typeof a === 'number' && b !== undefined && c !== undefined) {
              options = {
                length: b,
                numberOfChannels: a,
                sampleRate: c
              };
            } else if (_typeof(a) === 'object') {
              options = a;
            } else {
              throw new Error('The given parameters are not valid.');
            }

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$g, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            var nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate); // #21 Safari does not support promises and therefore would fire the statechange event before the promise can be resolved.

            if (!cacheTestResult(testPromiseSupport, function () {
              return testPromiseSupport(nativeOfflineAudioContext);
            })) {
              nativeOfflineAudioContext.addEventListener('statechange', function () {
                var i = 0;

                var delayStateChangeEvent = function delayStateChangeEvent(event) {
                  if (_this._state === 'running') {
                    if (i > 0) {
                      nativeOfflineAudioContext.removeEventListener('statechange', delayStateChangeEvent);
                      event.stopImmediatePropagation();

                      _this._waitForThePromiseToSettle(event);
                    } else {
                      i += 1;
                    }
                  }
                };

                return delayStateChangeEvent;
              }());
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(OfflineAudioContext).call(this, nativeOfflineAudioContext, numberOfChannels));
            _this._length = length;
            _this._nativeOfflineAudioContext = nativeOfflineAudioContext;
            _this._state = null;
            return _this;
          }

          _createClass(OfflineAudioContext, [{
            key: "startRendering",
            value: function startRendering() {
              var _this2 = this;

              /*
               * Bug #9 & #59: It is theoretically possible that startRendering() will first render a partialOfflineAudioContext. Therefore
               * the state of the nativeOfflineAudioContext might no transition to running immediately.
               */
              if (this._state === 'running') {
                return Promise.reject(createInvalidStateError());
              }

              this._state = 'running';
              return _startRendering(this.destination, this._nativeOfflineAudioContext).then(function (audioBuffer) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                return audioBuffer;
              }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
              .catch(function (err) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "_waitForThePromiseToSettle",
            value: function _waitForThePromiseToSettle(event) {
              var _this3 = this;

              if (this._state === null) {
                this._nativeOfflineAudioContext.dispatchEvent(event);
              } else {
                setTimeout(function () {
                  return _this3._waitForThePromiseToSettle(event);
                });
              }
            }
          }, {
            key: "length",
            get: function get() {
              // Bug #17: Safari does not yet expose the length.
              if (this._nativeOfflineAudioContext.length === undefined) {
                return this._length;
              }

              return this._nativeOfflineAudioContext.length;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
            }
          }]);

          return OfflineAudioContext;
        }(baseAudioContextConstructor)
      );
    };

    var DEFAULT_OPTIONS$h = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      frequency: 440,
      type: 'sine'
    };
    var createOscillatorNodeConstructor = function createOscillatorNodeConstructor(createAudioParam, createInvalidStateError, createNativeOscillatorNode, createOscillatorNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(OscillatorNode, _noneAudioDestination);

          function OscillatorNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$h;

            _classCallCheck(this, OscillatorNode);

            var absoluteValue = 1200 * Math.log2(context.sampleRate);
            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$h, options);
            var nativeOscillatorNode = createNativeOscillatorNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer() : null;
            var nyquist = context.sampleRate / 2;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(OscillatorNode).call(this, context, nativeOscillatorNode, oscillatorNodeRenderer)); // Bug #81: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._detune = createAudioParam(context, isOffline, nativeOscillatorNode.detune, absoluteValue, -absoluteValue); // Bug #76: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._frequency = createAudioParam(context, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
            _this._nativeOscillatorNode = nativeOscillatorNode;
            _this._onended = null;
            _this._oscillatorNodeRenderer = oscillatorNodeRenderer;

            if (_this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== undefined) {
              _this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
            }

            return _this;
          }

          _createClass(OscillatorNode, [{
            key: "setPeriodicWave",
            value: function setPeriodicWave(periodicWave) {
              this._nativeOscillatorNode.setPeriodicWave(periodicWave);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.periodicWave = periodicWave;
              }
            }
          }, {
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeOscillatorNode.start(when);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.start = when;
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeOscillatorNode.stop(when);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.stop = when;
              }
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "frequency",
            get: function get() {
              return this._frequency;
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeOscillatorNode.onended = wrappedListener;
              var nativeOnStateChange = this._nativeOscillatorNode.onended;
              this._onended = nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
            }
          }, {
            key: "type",
            get: function get() {
              return this._nativeOscillatorNode.type;
            },
            set: function set(value) {
              this._nativeOscillatorNode.type = value; // Bug #57: Edge will not throw an error when assigning the type to 'custom'. But it still will change the value.

              if (value === 'custom') {
                throw createInvalidStateError();
              }

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.periodicWave = null;
              }
            }
          }]);

          return OscillatorNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createOscillatorNodeRendererFactory = function createOscillatorNodeRendererFactory(createNativeOscillatorNode) {
      return function () {
        var nativeOscillatorNodePromise = null;
        var periodicWave = null;
        var start = null;
        var stop = null;

        var createOscillatorNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeOscillatorNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeOscillatorNode = getNativeAudioNode(proxy); // If the initially used nativeOscillatorNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext)) {
                      _context.next = 13;
                      break;
                    }

                    options = {
                      channelCount: nativeOscillatorNode.channelCount,
                      channelCountMode: nativeOscillatorNode.channelCountMode,
                      channelInterpretation: nativeOscillatorNode.channelInterpretation,
                      detune: nativeOscillatorNode.detune.value,
                      frequency: nativeOscillatorNode.frequency.value,
                      type: nativeOscillatorNode.type
                    };

                    if (periodicWave !== null) {
                      options.periodicWave = periodicWave;
                    }

                    nativeOscillatorNode = createNativeOscillatorNode(nativeOfflineAudioContext, options);

                    if (start !== null) {
                      nativeOscillatorNode.start(start);
                    }

                    if (stop !== null) {
                      nativeOscillatorNode.stop(stop);
                    }

                    _context.next = 9;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);

                  case 9:
                    _context.next = 11;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);

                  case 11:
                    _context.next = 17;
                    break;

                  case 13:
                    _context.next = 15;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.detune);

                  case 15:
                    _context.next = 17;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.frequency);

                  case 17:
                    _context.next = 19;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeOscillatorNode);

                  case 19:
                    return _context.abrupt("return", nativeOscillatorNode);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createOscillatorNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set periodicWave(value) {
            periodicWave = value;
          },

          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeOscillatorNodePromise === null) {
              nativeOscillatorNodePromise = createOscillatorNode(proxy, nativeOfflineAudioContext);
            }

            return nativeOscillatorNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$i = {
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      coneInnerAngle: 360,
      coneOuterAngle: 360,
      coneOuterGain: 0,
      distanceModel: 'inverse',
      maxDistance: 10000,
      orientationX: 1,
      orientationY: 0,
      orientationZ: 0,
      panningModel: 'equalpower',
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      refDistance: 1,
      rolloffFactor: 1
    };
    var createPannerNodeConstructor = function createPannerNodeConstructor(createAudioParam, createNativePannerNode, createPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(PannerNode, _noneAudioDestination);

          function PannerNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$i;

            _classCallCheck(this, PannerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$i, options);
            var nativePannerNode = createNativePannerNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var pannerNodeRenderer = isOffline ? createPannerNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(PannerNode).call(this, context, nativePannerNode, pannerNodeRenderer));
            _this._nativePannerNode = nativePannerNode; // Bug #74: Edge & Safari do not export the correct values for maxValue and minValue for GainNodes.

            _this._orientationX = createAudioParam(context, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._orientationY = createAudioParam(context, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._orientationZ = createAudioParam(context, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionX = createAudioParam(context, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionY = createAudioParam(context, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionZ = createAudioParam(context, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(PannerNode, [{
            key: "coneInnerAngle",
            get: function get() {
              return this._nativePannerNode.coneInnerAngle;
            },
            set: function set(value) {
              this._nativePannerNode.coneInnerAngle = value;
            }
          }, {
            key: "coneOuterAngle",
            get: function get() {
              return this._nativePannerNode.coneOuterAngle;
            },
            set: function set(value) {
              this._nativePannerNode.coneOuterAngle = value;
            }
          }, {
            key: "coneOuterGain",
            get: function get() {
              return this._nativePannerNode.coneOuterGain;
            },
            set: function set(value) {
              this._nativePannerNode.coneOuterGain = value;
            }
          }, {
            key: "distanceModel",
            get: function get() {
              return this._nativePannerNode.distanceModel;
            },
            set: function set(value) {
              this._nativePannerNode.distanceModel = value;
            }
          }, {
            key: "maxDistance",
            get: function get() {
              return this._nativePannerNode.maxDistance;
            },
            set: function set(value) {
              this._nativePannerNode.maxDistance = value;
            }
          }, {
            key: "orientationX",
            get: function get() {
              return this._orientationX;
            }
          }, {
            key: "orientationY",
            get: function get() {
              return this._orientationY;
            }
          }, {
            key: "orientationZ",
            get: function get() {
              return this._orientationZ;
            }
          }, {
            key: "panningModel",
            get: function get() {
              return this._nativePannerNode.panningModel;
            },
            set: function set(value) {
              this._nativePannerNode.panningModel = value;
            }
          }, {
            key: "positionX",
            get: function get() {
              return this._positionX;
            }
          }, {
            key: "positionY",
            get: function get() {
              return this._positionY;
            }
          }, {
            key: "positionZ",
            get: function get() {
              return this._positionZ;
            }
          }, {
            key: "refDistance",
            get: function get() {
              return this._nativePannerNode.refDistance;
            },
            set: function set(value) {
              this._nativePannerNode.refDistance = value;
            }
          }, {
            key: "rolloffFactor",
            get: function get() {
              return this._nativePannerNode.rolloffFactor;
            },
            set: function set(value) {
              this._nativePannerNode.rolloffFactor = value;
            }
          }]);

          return PannerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createPannerNodeRendererFactory = function createPannerNodeRendererFactory(createNativePannerNode) {
      return function () {
        var nativePannerNodePromise = null;

        var createPannerNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativePannerNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativePannerNode = getNativeAudioNode(proxy); // If the initially used nativePannerNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativePannerNode, nativeOfflineAudioContext)) {
                      _context.next = 18;
                      break;
                    }

                    options = {
                      channelCount: nativePannerNode.channelCount,
                      channelCountMode: nativePannerNode.channelCountMode,
                      channelInterpretation: nativePannerNode.channelInterpretation,
                      coneInnerAngle: nativePannerNode.coneInnerAngle,
                      coneOuterAngle: nativePannerNode.coneOuterAngle,
                      coneOuterGain: nativePannerNode.coneOuterGain,
                      distanceModel: nativePannerNode.distanceModel,
                      maxDistance: nativePannerNode.maxDistance,
                      orientationX: nativePannerNode.orientationX.value,
                      orientationY: nativePannerNode.orientationY.value,
                      orientationZ: nativePannerNode.orientationZ.value,
                      panningModel: nativePannerNode.panningModel,
                      positionX: nativePannerNode.positionX.value,
                      positionY: nativePannerNode.positionY.value,
                      positionZ: nativePannerNode.positionZ.value,
                      refDistance: nativePannerNode.refDistance,
                      rolloffFactor: nativePannerNode.rolloffFactor
                    };
                    nativePannerNode = createNativePannerNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);

                  case 12:
                    _context.next = 14;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);

                  case 14:
                    _context.next = 16;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);

                  case 16:
                    _context.next = 30;
                    break;

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationX);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationY);

                  case 22:
                    _context.next = 24;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationZ);

                  case 24:
                    _context.next = 26;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionX);

                  case 26:
                    _context.next = 28;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionY);

                  case 28:
                    _context.next = 30;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionZ);

                  case 30:
                    if (!(nativePannerNode.inputs !== undefined)) {
                      _context.next = 35;
                      break;
                    }

                    _context.next = 33;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);

                  case 33:
                    _context.next = 37;
                    break;

                  case 35:
                    _context.next = 37;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode);

                  case 37:
                    return _context.abrupt("return", nativePannerNode);

                  case 38:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createPannerNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativePannerNodePromise === null) {
              nativePannerNodePromise = createPannerNode(proxy, nativeOfflineAudioContext);
            }

            return nativePannerNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$j = {
      disableNormalization: false
    };
    var createPeriodicWaveConstructor = function createPeriodicWaveConstructor(createNativePeriodicWave) {
      return function PeriodicWave(context, options) {
        _classCallCheck(this, PeriodicWave);

        var nativeContext = getNativeContext(context);
        var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$j, options); // This does violate all good pratices but it is used here to simplify the handling of periodic waves.

        return createNativePeriodicWave(nativeContext, mergedOptions);
      };
    };

    var createRenderNativeOfflineAudioContext = function createRenderNativeOfflineAudioContext(createNativeGainNode) {
      return function (nativeOfflineAudioContext) {
        // Bug #21: Safari does not support promises yet.
        if (cacheTestResult(testPromiseSupport, function () {
          return testPromiseSupport(nativeOfflineAudioContext);
        })) {
          return nativeOfflineAudioContext.startRendering();
        }

        return new Promise(function (resolve) {
          // Bug #48: Safari does not render an OfflineAudioContext without any connected node.
          var gainNode = createNativeGainNode(nativeOfflineAudioContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
          });

          nativeOfflineAudioContext.oncomplete = function (event) {
            gainNode.disconnect();
            resolve(event.renderedBuffer);
          };

          gainNode.connect(nativeOfflineAudioContext.destination);
          nativeOfflineAudioContext.startRendering();
        });
      };
    };

    var createStartRendering = function createStartRendering(renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport) {
      return function (destination, nativeOfflineAudioContext) {
        return getAudioNodeRenderer(destination).render(destination, nativeOfflineAudioContext).then(function () {
          return renderNativeOfflineAudioContext(nativeOfflineAudioContext);
        }).then(function (audioBuffer) {
          // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
          // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
          if (typeof audioBuffer.copyFromChannel !== 'function') {
            wrapAudioBufferCopyChannelMethods(audioBuffer);
            wrapAudioBufferGetChannelDataMethod(audioBuffer); // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
          } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
            return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
          })) {
            wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
          }

          return audioBuffer;
        });
      };
    };

    var DEFAULT_OPTIONS$k = {
      channelCount: 2,

      /*
       * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
       * behavior.
       */
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      pan: 0
    };
    var createStereoPannerNodeConstructor = function createStereoPannerNodeConstructor(createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(StereoPannerNode, _noneAudioDestination);

          function StereoPannerNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$k;

            _classCallCheck(this, StereoPannerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$k, options);
            var nativeStereoPannerNode = createNativeStereoPannerNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(StereoPannerNode).call(this, context, nativeStereoPannerNode, stereoPannerNodeRenderer)); // Bug #106: Edge does not export a maxValue and minValue property.

            _this._pan = createAudioParam(context, isOffline, nativeStereoPannerNode.pan, 1, -1);
            return _this;
          }

          _createClass(StereoPannerNode, [{
            key: "pan",
            get: function get() {
              return this._pan;
            }
          }]);

          return StereoPannerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createStereoPannerNodeRendererFactory = function createStereoPannerNodeRendererFactory(createNativeStereoPannerNode) {
      return function () {
        var nativeStereoPannerNodePromise = null;

        var createStereoPannerNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeStereoPannerNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeStereoPannerNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeStereoPannerNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeStereoPannerNode.channelCount,
                      channelCountMode: nativeStereoPannerNode.channelCountMode,
                      channelInterpretation: nativeStereoPannerNode.channelInterpretation,
                      pan: nativeStereoPannerNode.pan.value
                    };
                    nativeStereoPannerNode = createNativeStereoPannerNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.pan);

                  case 10:
                    if (!(nativeStereoPannerNode.inputs !== undefined)) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 13;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);

                  case 13:
                    _context.next = 17;
                    break;

                  case 15:
                    _context.next = 17;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);

                  case 17:
                    return _context.abrupt("return", nativeStereoPannerNode);

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createStereoPannerNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeStereoPannerNodePromise === null) {
              nativeStereoPannerNodePromise = createStereoPannerNode(proxy, nativeOfflineAudioContext);
            }

            return nativeStereoPannerNodePromise;
          }
        };
      };
    };

    // Bug #33: Edge & Safari expose an AudioBuffer but it can't be used as a constructor.
    var createTestAudioBufferConstructorSupport = function createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor) {
      return function () {
        if (nativeAudioBufferConstructor === null) {
          return false;
        }

        try {
          new nativeAudioBufferConstructor({
            length: 1,
            sampleRate: 44100
          }); // tslint:disable-line:no-unused-expression
        } catch (_a) {
          return false;
        }

        return true;
      };
    };

    var createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = function createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        nativeAudioBufferSourceNode.start();

        try {
          nativeAudioBufferSourceNode.start();
        } catch (_a) {
          return true;
        }

        return false;
      };
    };

    // Bug #92: Edge does not respect the duration parameter yet.
    var createTestAudioBufferSourceNodeStartMethodDurationParameterSupport = function createTestAudioBufferSourceNodeStartMethodDurationParameterSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var audioBuffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
        var audioBufferSourceNode = offlineAudioContext.createBufferSource();
        audioBuffer.getChannelData(0)[0] = 1;
        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.start(0, 0, 0);
        audioBufferSourceNode.connect(offlineAudioContext.destination); // Bug #21: Safari does not support promises yet.

        return new Promise(function (resolve) {
          offlineAudioContext.oncomplete = function (_ref) {
            var renderedBuffer = _ref.renderedBuffer;
            // Bug #5: Safari does not support copyFromChannel().
            resolve(renderedBuffer.getChannelData(0)[0] === 0);
          };

          offlineAudioContext.startRendering();
        });
      };
    };

    var createTestAudioContextCloseMethodSupport = function createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return false;
        } // Try to check the prototype before constructing the AudioContext.


        if (nativeAudioContextConstructor.prototype !== undefined && nativeAudioContextConstructor.prototype.close !== undefined) {
          return true;
        }

        var audioContext = new nativeAudioContextConstructor();
        var isAudioContextClosable = audioContext.close !== undefined;

        try {
          audioContext.close();
        } catch (_a) {// Ignore errors.
        }

        return isAudioContextClosable;
      };
    };

    /**
     * Edge up to version 14, Firefox up to version 52, Safari up to version 9 and maybe other browsers
     * did not refuse to decode invalid parameters with a TypeError.
     */
    var createTestAudioContextDecodeAudioDataMethodTypeErrorSupport = function createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100); // Bug #21: Safari does not support promises yet.

        return new Promise(function (resolve) {
          var isPending = true;

          var resolvePromise = function resolvePromise(err) {
            if (isPending) {
              isPending = false;
              offlineAudioContext.startRendering();
              resolve(err instanceof TypeError);
            }
          };

          offlineAudioContext // Bug #1: Safari requires a successCallback.
          .decodeAudioData(null, function () {// Ignore the success callback.
          }, resolvePromise) // Bug #6 Chrome does not call the errorCallback
          .catch(resolvePromise);
        });
      };
    };

    var createTestAudioContextOptionsSupport = function createTestAudioContextOptionsSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return false;
        }

        var audioContext;

        try {
          audioContext = new nativeAudioContextConstructor({
            latencyHint: 'balanced'
          });
        } catch (_a) {
          return false;
        }

        audioContext.close();
        return true;
      };
    };

    var createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport = function createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });

        try {
          nativeAudioBufferSourceNode.start(-1);
        } catch (err) {
          return err instanceof RangeError;
        }

        return false;
      };
    };

    var createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = function createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
        nativeAudioBufferSourceNode.start();
        nativeAudioBufferSourceNode.stop();

        try {
          nativeAudioBufferSourceNode.stop();
          return true;
        } catch (_a) {
          return false;
        }
      };
    };

    var createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport = function createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });

        try {
          nativeAudioBufferSourceNode.stop(-1);
        } catch (err) {
          return err instanceof RangeError;
        }

        return false;
      };
    };

    /**
     * Chrome version 66 and 67 did not call the process() function of an AudioWorkletProcessor if it had no outputs. AudioWorklet support was
     * enabled by default in version 66.
     */
    var createTestAudioWorkletProcessorNoOutputsSupport = function createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor) {
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          var blob, offlineAudioContext, url, isCallingProcess, gainNode, audioWorkletNode;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(nativeAudioWorkletNodeConstructor === null)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", true);

                case 2:
                  if (!(nativeOfflineAudioContextConstructor === null)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 4:
                  blob = new Blob(['class A extends AudioWorkletProcessor{process(){this.port.postMessage(0)}}registerProcessor("a",A)'], {
                    type: 'application/javascript; charset=utf-8'
                  });
                  offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 3200);
                  url = URL.createObjectURL(blob);
                  isCallingProcess = false;
                  _context.prev = 8;
                  _context.next = 11;
                  return offlineAudioContext.audioWorklet.addModule(url);

                case 11:
                  gainNode = offlineAudioContext.createGain();
                  audioWorkletNode = new nativeAudioWorkletNodeConstructor(offlineAudioContext, 'a', {
                    numberOfOutputs: 0
                  });

                  audioWorkletNode.port.onmessage = function () {
                    return isCallingProcess = true;
                  };

                  gainNode.connect(audioWorkletNode);
                  _context.next = 17;
                  return offlineAudioContext.startRendering();

                case 17:
                  _context.next = 21;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](8);

                case 21:
                  _context.prev = 21;
                  URL.revokeObjectURL(url);
                  return _context.finish(21);

                case 24:
                  return _context.abrupt("return", isCallingProcess);

                case 25:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[8, 19, 21, 24]]);
        }))
      );
    };

    /**
     * Firefox up to version 44 had a bug which resulted in a misbehaving ChannelMergerNode. If one of
     * its channels would be unconnected the remaining channels were somehow upmixed to spread the
     * signal across all available channels.
     */
    var createTestChannelMergerNodeSupport = function createTestChannelMergerNodeSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var audioContext = new nativeAudioContextConstructor();
        var audioBuffer = audioContext.createBuffer(2, 2, audioContext.sampleRate);
        var audioBufferSourceNode = audioContext.createBufferSource();
        var channelMergerNode = audioContext.createChannelMerger(2);
        var scriptProcessorNode = audioContext.createScriptProcessor(256);
        return new Promise(function (resolve) {
          var startTime; // Bug #95: Safari does not play/loop one sample buffers.

          audioBuffer.getChannelData(0)[0] = 1;
          audioBuffer.getChannelData(0)[1] = 1;
          audioBuffer.getChannelData(1)[0] = 1;
          audioBuffer.getChannelData(1)[1] = 1;
          audioBufferSourceNode.buffer = audioBuffer;
          audioBufferSourceNode.loop = true;

          scriptProcessorNode.onaudioprocess = function (event) {
            var channelData = event.inputBuffer.getChannelData(1);
            var length = channelData.length;

            for (var i = 0; i < length; i += 1) {
              if (channelData[i] !== 0) {
                resolve(false);
                return;
              }
            }

            if (startTime + 1 / audioContext.sampleRate < event.playbackTime) {
              resolve(true);
            }
          };

          audioBufferSourceNode.connect(channelMergerNode, 0, 0);
          channelMergerNode.connect(scriptProcessorNode);
          scriptProcessorNode.connect(audioContext.destination);
          startTime = audioContext.currentTime;
          audioBufferSourceNode.start(startTime);
        }).then(function (result) {
          audioBufferSourceNode.stop();
          audioBufferSourceNode.disconnect();
          channelMergerNode.disconnect();
          scriptProcessorNode.disconnect();
          audioContext.close();
          return result;
        });
      };
    };

    /**
     * Firefox up to version 61 had a bug which caused the ChannelSplitterNode to expose a wrong channelCount property.
     */
    var createTestChannelSplitterNodeChannelCountSupport = function createTestChannelSplitterNodeChannelCountSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var channelSplitterNode = offlineAudioContext.createChannelSplitter(4);
        return channelSplitterNode.channelCount === 4;
      };
    };

    var createTestConstantSourceNodeAccurateSchedulingSupport = function createTestConstantSourceNodeAccurateSchedulingSupport(createNativeAudioNode, nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var nativeConstantSourceNode = createNativeAudioNode(nativeOfflineAudioContext, function (ntvCntxt) {
          return ntvCntxt.createConstantSource();
        });
        /*
         * @todo This is using bug #75 to detect bug #70. That works because both bugs were unique to
         * the implementation of Firefox right now, but it could probably be done in a better way.
         */

        return nativeConstantSourceNode.offset.maxValue !== Number.POSITIVE_INFINITY;
      };
    };

    // Opera up to version 57 did not allow to reassign the buffer of a ConvolverNode.
    var createTestConvolverNodeBufferReassignabilitySupport = function createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 3200);
        var nativeConvolverNode = offlineAudioContext.createConvolver();
        nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);

        try {
          nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
        } catch (_a) {
          return false;
        }

        return true;
      };
    };

    var createTestIsSecureContextSupport = function createTestIsSecureContextSupport(window) {
      return function () {
        return window !== null && window.hasOwnProperty('isSecureContext');
      };
    };

    /**
     * Firefox up to version 62 did not kick off the processing of the StereoPannerNode if the value of pan was zero.
     */
    var createTestStereoPannerNodeDefaultValueSupport = function createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        /*
         * Bug #105: Safari does not support the StereoPannerNode. Therefore the returned value should normally be false but the faker does
         * support the tested behaviour.
         */

        if (nativeOfflineAudioContext.createStereoPanner === undefined) {
          return Promise.resolve(true);
        }

        var constantSourceNode = nativeOfflineAudioContext.createConstantSource();
        var stereoPanner = nativeOfflineAudioContext.createStereoPanner();
        constantSourceNode.channelCount = 1;
        constantSourceNode.offset.value = 1;
        stereoPanner.channelCount = 1;
        constantSourceNode.start();
        constantSourceNode.connect(stereoPanner).connect(nativeOfflineAudioContext.destination);
        return nativeOfflineAudioContext.startRendering().then(function (buffer) {
          return buffer.getChannelData(0)[0] !== 1;
        });
      };
    };

    var createUnknownError = function createUnknownError() {
      try {
        return new DOMException('', 'UnknownError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.name = 'UnknownError';
        return err;
      }
    };

    var DEFAULT_OPTIONS$l = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      curve: null,
      oversample: 'none'
    };
    var createWaveShaperNodeConstructor = function createWaveShaperNodeConstructor(createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(WaveShaperNode, _noneAudioDestination);

          function WaveShaperNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$l;

            _classCallCheck(this, WaveShaperNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$l, options);
            var nativeWaveShaperNode = createNativeWaveShaperNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(WaveShaperNode).call(this, context, nativeWaveShaperNode, waveShaperNodeRenderer));
            _this._isCurveNullified = false;
            _this._nativeWaveShaperNode = nativeWaveShaperNode;
            return _this;
          }

          _createClass(WaveShaperNode, [{
            key: "curve",
            get: function get() {
              if (this._isCurveNullified) {
                return null;
              }

              return this._nativeWaveShaperNode.curve;
            },
            set: function set(value) {
              // Bug #103: Safari does not allow to set the curve to null.
              if (value === null) {
                this._isCurveNullified = true;
                this._nativeWaveShaperNode.curve = new Float32Array([0, 0]); // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
                // Bug #104: Chrome will throw an InvalidAccessError when the curve has less than two samples.
              } else if (value.length < 2) {
                throw createInvalidStateError();
              } else {
                this._isCurveNullified = false;
                this._nativeWaveShaperNode.curve = value;
              }
            }
          }, {
            key: "oversample",
            get: function get() {
              return this._nativeWaveShaperNode.oversample;
            },
            set: function set(value) {
              this._nativeWaveShaperNode.oversample = value;
            }
          }]);

          return WaveShaperNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createWaveShaperNodeRendererFactory = function createWaveShaperNodeRendererFactory(createNativeWaveShaperNode) {
      return function () {
        var nativeWaveShaperNodePromise = null;

        var createWaveShaperNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeWaveShaperNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeWaveShaperNode = getNativeAudioNode(proxy); // If the initially used nativeWaveShaperNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeWaveShaperNode.channelCount,
                        channelCountMode: nativeWaveShaperNode.channelCountMode,
                        channelInterpretation: nativeWaveShaperNode.channelInterpretation,
                        curve: nativeWaveShaperNode.curve,
                        oversample: nativeWaveShaperNode.oversample
                      };
                      nativeWaveShaperNode = createNativeWaveShaperNode(nativeOfflineAudioContext, options);
                    }

                    if (!(nativeWaveShaperNode.inputs !== undefined)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);

                  case 5:
                    _context.next = 9;
                    break;

                  case 7:
                    _context.next = 9;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);

                  case 9:
                    return _context.abrupt("return", nativeWaveShaperNode);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function createWaveShaperNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeWaveShaperNodePromise === null) {
              nativeWaveShaperNodePromise = createWaveShaperNode(proxy, nativeOfflineAudioContext);
            }

            return nativeWaveShaperNodePromise;
          }
        };
      };
    };

    var createWindow = function createWindow() {
      return typeof window === 'undefined' ? null : window;
    };

    var createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = function createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(createNativeAudioNode) {
      return function (nativeAudioScheduledSourceNode, nativeContext) {
        var nativeGainNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createGain();
        });
        nativeAudioScheduledSourceNode.connect(nativeGainNode);

        var disconnectGainNode = function (disconnect) {
          return function () {
            // @todo TypeScript cannot infer the overloaded signature with 1 argument yet.
            disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
            nativeAudioScheduledSourceNode.removeEventListener('ended', disconnectGainNode);
          };
        }(nativeAudioScheduledSourceNode.disconnect);

        nativeAudioScheduledSourceNode.addEventListener('ended', disconnectGainNode);
        interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);

        nativeAudioScheduledSourceNode.stop = function (stop) {
          var isStopped = false;
          return function () {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (isStopped) {
              try {
                stop.call(nativeAudioScheduledSourceNode, when);
              } catch (_a) {
                nativeGainNode.gain.setValueAtTime(0, when);
              }
            } else {
              stop.call(nativeAudioScheduledSourceNode, when);
              isStopped = true;
            }
          };
        }(nativeAudioScheduledSourceNode.stop);
      };
    };

    var createWrapChannelMergerNode = function createWrapChannelMergerNode(createInvalidStateError, createNativeAudioNode) {
      return function (nativeContext, channelMergerNode) {
        var audioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        channelMergerNode.channelCount = 1;
        channelMergerNode.channelCountMode = 'explicit'; // Bug #20: Safari requires a connection of any kind to treat the input signal correctly.

        var length = channelMergerNode.numberOfInputs;

        for (var i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }

        Object.defineProperty(channelMergerNode, 'channelCount', {
          get: function get() {
            return 1;
          },
          set: function set() {
            throw createInvalidStateError();
          }
        });
        Object.defineProperty(channelMergerNode, 'channelCountMode', {
          get: function get() {
            return 'explicit';
          },
          set: function set() {
            throw createInvalidStateError();
          }
        });
      };
    };

    // Safari at version 11 did not support transferables.
    var testTransferablesSupport = function testTransferablesSupport() {
      return new Promise(function (resolve) {
        var arrayBuffer = new ArrayBuffer(0);

        var _ref = new MessageChannel(),
            port1 = _ref.port1,
            port2 = _ref.port2;

        port1.onmessage = function (_ref2) {
          var data = _ref2.data;
          return resolve(data !== null);
        };

        port2.postMessage(arrayBuffer, [arrayBuffer]);
      });
    };

    var window$1 = createWindow();
    var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window$1);
    var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
    var nativeAudioContextConstructor = createNativeAudioContextConstructor(window$1);
    var getBackupNativeContext = createGetBackupNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor, nativeOfflineAudioContextConstructor);
    var createNativeAudioNode = createNativeAudioNodeFactory(getBackupNativeContext);
    var createNativeAnalyserNode = createNativeAnalyserNodeFactory(createIndexSizeError, createNativeAudioNode);
    var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode);
    var audioNodeConstructor = createAudioNodeConstructor(createInvalidAccessError, isNativeOfflineAudioContext);
    var noneAudioDestinationNodeConstructor = createNoneAudioDestinationNodeConstructor(audioNodeConstructor);
    var analyserNodeConstructor = createAnalyserNodeConstructor(createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window$1);
    var audioBufferConstructor = createAudioBufferConstructor(createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor));
    var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport(createNativeAudioNode);
    var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(createNativeAudioNode);
    var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport(createNativeAudioNode);
    var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(createNativeAudioNode);
    var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(createNativeAudioNode, createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(createNativeAudioNode), createTestAudioBufferSourceNodeStartMethodDurationParameterSupport(nativeOfflineAudioContextConstructor), testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
    var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(createNativeAudioBufferSourceNode);
    var createAudioParam = createAudioParamFactory(createAudioParamRenderer);
    var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNode, isNativeOfflineAudioContext);
    var createNativeBiquadFilterNode = createNativeBiquadFilterNodeFactory(createNativeAudioNode);
    var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(createNativeBiquadFilterNode);
    var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, createNativeAudioNode);
    var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(createNativeAudioNode, wrapChannelMergerNode);
    var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode);
    var channelMergerNodeConstructor = createChannelMergerNodeConstructor(createChannelMergerNodeRenderer, createNativeChannelMergerNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeChannelSplitterNode = createNativeChannelSplitterNodeFactory(createNativeAudioNode);
    var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode);
    var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeGainNode = createNativeGainNodeFactory(createNativeAudioNode);
    var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(createNativeAudioBufferSourceNode, createNativeGainNode);
    var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(createNativeAudioNode, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
    var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(createNativeConstantSourceNode);
    var constantSourceNodeConstructor = createConstantSourceNodeConstructor(createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeConvolverNode = createNativeConvolverNodeFactory(createNativeAudioNode, createNotSupportedError);
    var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode);
    var convolverNodeConstructor = createConvolverNodeConstructor(createConvolverNodeRenderer, createNativeConvolverNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeDelayNode = createNativeDelayNodeFactory(createNativeAudioNode);
    var createDelayNodeRenderer = createDelayNodeRendererFactory(createNativeDelayNode);
    var delayNodeConstructor = createDelayNodeConstructor(createAudioParam, createDelayNodeRenderer, createNativeDelayNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNativeAudioNode, createNotSupportedError);
    var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(createNativeDynamicsCompressorNode);
    var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createGainNodeRenderer = createGainNodeRendererFactory(createNativeGainNode);
    var gainNodeConstructor = createGainNodeConstructor(createAudioParam, createGainNodeRenderer, createNativeGainNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeScriptProcessorNode = createNativeScriptProcessorNodeFactory(createNativeAudioNode);
    var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
    var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(createNativeGainNode);
    var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, createNativeAudioNode, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext);
    var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeAudioNode, createNativeIIRFilterNodeFaker);
    var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(createNativeIIRFilterNode, createIIRFilterNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, isNativeOfflineAudioContext);
    var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener);
    var createNativeOscillatorNode = createNativeOscillatorNodeFactory(createNativeAudioNode, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
    var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(createNativeOscillatorNode);
    var oscillatorNodeConstructor = createOscillatorNodeConstructor(createAudioParam, createInvalidStateError, createNativeOscillatorNode, createOscillatorNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeGainNode);
    var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeWaveShaperNodeFaker);
    var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError);
    var createNativePannerNode = createNativePannerNodeFactory(createNativeAudioNode, createNativePannerNodeFaker);
    var createPannerNodeRenderer = createPannerNodeRendererFactory(createNativePannerNode);
    var pannerNodeConstructor = createPannerNodeConstructor(createAudioParam, createNativePannerNode, createPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativePeriodicWave = createNativePeriodicWaveFactory(getBackupNativeContext);
    var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave);
    var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError);
    var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(createNativeAudioNode, nativeStereoPannerNodeFakerFactory, createNotSupportedError);
    var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(createNativeStereoPannerNode);
    var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode);
    var waveShaperNodeConstructor = createWaveShaperNodeConstructor(createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var isSecureContext = createIsSecureContext(window$1); // The addAudioWorkletModule() function is only available in a SecureContext.

    var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(createAbortError, createNotSupportedError, createFetchSource(createAbortError), getBackupNativeContext) : undefined;
    var isNativeContext = createIsNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor);
    var decodeAudioData = createDecodeAudioData(createDataCloneError, createEncodingError, nativeOfflineAudioContextConstructor, isNativeContext, isNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport, testPromiseSupport);
    var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
    var createNativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNodeFactory(createNativeAudioNode);
    var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(createNativeMediaElementAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNodeFactory(createInvalidStateError, createNativeAudioNode);
    var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(createNativeMediaStreamAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioSourceNodeConstructor, nativeAudioContextConstructor);
    var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
    var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
    var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs);
    var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeAudioWorkletNodeFaker, createNotSupportedError, isNativeOfflineAudioContext);
    var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window$1);
    var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, disconnectMultipleOutputs, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext); // The AudioWorkletNode constructor is only available in a SecureContext.

    var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, gainNodeConstructor, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, noneAudioDestinationNodeConstructor) : undefined;
    var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
    var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
    var startRendering = createStartRendering(renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport);
    var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
    var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
    var isSupported = function isSupported() {
      return createIsSupportedPromise(browsernizr, createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor), createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor), createTestAudioContextOptionsSupport(nativeAudioContextConstructor), createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor), createTestChannelMergerNodeSupport(nativeAudioContextConstructor), createTestChannelSplitterNodeChannelCountSupport(nativeOfflineAudioContextConstructor), createTestConstantSourceNodeAccurateSchedulingSupport(createNativeAudioNode, nativeOfflineAudioContextConstructor), createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor), createTestIsSecureContextSupport(window$1), createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor), testTransferablesSupport);
    };

    exports.AnalyserNode = analyserNodeConstructor;
    exports.AudioBuffer = audioBufferConstructor;
    exports.AudioBufferSourceNode = audioBufferSourceNodeConstructor;
    exports.addAudioWorkletModule = addAudioWorkletModule;
    exports.decodeAudioData = decodeAudioData;
    exports.AudioContext = audioContextConstructor;
    exports.AudioWorkletNode = audioWorkletNodeConstructor;
    exports.BiquadFilterNode = biquadFilterNodeConstructor;
    exports.ChannelMergerNode = channelMergerNodeConstructor;
    exports.ChannelSplitterNode = channelSplitterNodeConstructor;
    exports.ConvolverNode = convolverNodeConstructor;
    exports.ConstantSourceNode = constantSourceNodeConstructor;
    exports.DelayNode = delayNodeConstructor;
    exports.DynamicsCompressorNode = dynamicsCompressorNodeConstructor;
    exports.GainNode = gainNodeConstructor;
    exports.IIRFilterNode = iIRFilterNodeConstructor;
    exports.MediaElementAudioSourceNode = mediaElementAudioSourceNodeConstructor;
    exports.MediaStreamAudioSourceNode = mediaStreamAudioSourceNodeConstructor;
    exports.MinimalAudioContext = minimalAudioContextConstructor;
    exports.MinimalOfflineAudioContext = minimalOfflineAudioContextConstructor;
    exports.OfflineAudioContext = offlineAudioContextConstructor;
    exports.OscillatorNode = oscillatorNodeConstructor;
    exports.PannerNode = pannerNodeConstructor;
    exports.PeriodicWave = periodicWaveConstructor;
    exports.StereoPannerNode = stereoPannerNodeConstructor;
    exports.WaveShaperNode = waveShaperNodeConstructor;
    exports.isSupported = isSupported;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

},{"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":6,"@babel/runtime/helpers/defineProperty":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/helpers/slicedToArray":16,"@babel/runtime/helpers/toConsumableArray":17,"@babel/runtime/helpers/typeof":18,"@babel/runtime/regenerator":19,"tslib":23}],23:[function(require,module,exports){
(function (global){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],24:[function(require,module,exports){
'use strict'
console.log('WebAudioFont Channel v1.04');
function WebAudioFontChannel(audioContext) {
	this.audioContext = audioContext;
	this.bandEqualizer = function (from, frequency) {
		var filter = this.audioContext.createBiquadFilter();
		filter.frequency.setTargetAtTime(frequency,0,0.0001);
		filter.type = "peaking";
		filter.gain.setTargetAtTime(0,0,0.0001);
		filter.Q.setTargetAtTime(1.0,0,0.0001);
		from.connect(filter);
		return filter;
	};
	this.input = this.audioContext.createDynamicsCompressor();
	this.input.threshold.setValueAtTime(-3,0);// = -3; //-50
	this.input.knee.setValueAtTime(30,0); //40
	this.input.ratio.setValueAtTime(12,0); //12
	//this.input.reduction.value = -20; //-20
	this.input.attack.setValueAtTime(0.05,0); //0
	this.input.release.setValueAtTime(0.08,0); //0.25
	this.band32 = this.bandEqualizer(this.input, 32);
	this.band64 = this.bandEqualizer(this.band32, 64);
	this.band128 = this.bandEqualizer(this.band64, 128);
	this.band256 = this.bandEqualizer(this.band128, 256);
	this.band512 = this.bandEqualizer(this.band256, 512);
	this.band1k = this.bandEqualizer(this.band512, 1024);
	this.band2k = this.bandEqualizer(this.band1k, 2048);
	this.band4k = this.bandEqualizer(this.band2k, 4096);
	this.band8k = this.bandEqualizer(this.band4k, 8192);
	this.band16k = this.bandEqualizer(this.band8k, 16384);
	this.output = audioContext.createGain();
	this.band16k.connect(this.output);
	return this;
}
if (typeof module === 'object' && module.exports) {
	module.exports = WebAudioFontChannel;
}
if (typeof window !== 'undefined') {
	window.WebAudioFontChannel = WebAudioFontChannel;
}

},{}],25:[function(require,module,exports){
'use strict'
console.log('WebAudioFont Loader v1.27');

function WebAudioFontLoader(player) {
	this.player = player;
	this.cached = [];
	this.startLoad = function(audioContext, filePath, variableName) {
		if (window[variableName]) {
			return;
		}
		for (var i = 0; i < this.cached.length; i++) {
			if (this.cached[i].variableName == variableName) {
				return;
			}
		}
		this.cached.push({
			filePath: filePath,
			variableName: variableName
		});
		var r = document.createElement('script');
		r.setAttribute("type", "text/javascript");
		r.setAttribute("src", filePath);
		document.getElementsByTagName("head")[0].appendChild(r);
		this.decodeAfterLoading(audioContext, variableName);
	};
	this.decodeAfterLoading = function(audioContext, variableName) {
		var me = this;
		this.waitOrFinish(variableName, function() {
			me.player.adjustPreset(audioContext, window[variableName]);
		});
	};
	this.waitOrFinish = function(variableName, onFinish) {
		if (window[variableName]) {
			onFinish();
		} else {
			var me = this;
			setTimeout(function() {
				me.waitOrFinish(variableName, onFinish);
			}, 111);
		}
	};
	this.loaded = function(variableName) {
		if (!(window[variableName])) {
			return false;
		}
		var preset = window[variableName];
		for (var i = 0; i < preset.zones.length; i++) {
			if (!(preset.zones[i].buffer)) {
				return false;
			}
		}
		return true;
	};
	this.progress = function() {
		if (this.cached.length > 0) {
			for (var k = 0; k < this.cached.length; k++) {
				if (!this.loaded(this.cached[k].variableName)) {
					return k / this.cached.length;
				}
			}
			return 1;
		} else {
			return 1;
		}
	};
	this.waitLoad = function(onFinish) {
		var me = this;
		if (this.progress() >= 1) {
			onFinish();
		} else {
			setTimeout(function() {
				me.waitLoad(onFinish);
			}, 333);
		}
	};
	this.instrumentTitles = function() {
		if (!(this.instrumentNamesArray)) {
			var insNames = [];
			insNames[0] = "Acoustic Grand Piano: Piano";
			insNames[1] = "Bright Acoustic Piano: Piano";
			insNames[2] = "Electric Grand Piano: Piano";
			insNames[3] = "Honky-tonk Piano: Piano";
			insNames[4] = "Electric Piano 1: Piano";
			insNames[5] = "Electric Piano 2: Piano";
			insNames[6] = "Harpsichord: Piano";
			insNames[7] = "Clavinet: Piano";
			insNames[8] = "Celesta: Chromatic Percussion";
			insNames[9] = "Glockenspiel: Chromatic Percussion";
			insNames[10] = "Music Box: Chromatic Percussion";
			insNames[11] = "Vibraphone: Chromatic Percussion";
			insNames[12] = "Marimba: Chromatic Percussion";
			insNames[13] = "Xylophone: Chromatic Percussion";
			insNames[14] = "Tubular Bells: Chromatic Percussion";
			insNames[15] = "Dulcimer: Chromatic Percussion";
			insNames[16] = "Drawbar Organ: Organ";
			insNames[17] = "Percussive Organ: Organ";
			insNames[18] = "Rock Organ: Organ";
			insNames[19] = "Church Organ: Organ";
			insNames[20] = "Reed Organ: Organ";
			insNames[21] = "Accordion: Organ";
			insNames[22] = "Harmonica: Organ";
			insNames[23] = "Tango Accordion: Organ";
			insNames[24] = "Acoustic Guitar (nylon): Guitar";
			insNames[25] = "Acoustic Guitar (steel): Guitar";
			insNames[26] = "Electric Guitar (jazz): Guitar";
			insNames[27] = "Electric Guitar (clean): Guitar";
			insNames[28] = "Electric Guitar (muted): Guitar";
			insNames[29] = "Overdriven Guitar: Guitar";
			insNames[30] = "Distortion Guitar: Guitar";
			insNames[31] = "Guitar Harmonics: Guitar";
			insNames[32] = "Acoustic Bass: Bass";
			insNames[33] = "Electric Bass (finger): Bass";
			insNames[34] = "Electric Bass (pick): Bass";
			insNames[35] = "Fretless Bass: Bass";
			insNames[36] = "Slap Bass 1: Bass";
			insNames[37] = "Slap Bass 2: Bass";
			insNames[38] = "Synth Bass 1: Bass";
			insNames[39] = "Synth Bass 2: Bass";
			insNames[40] = "Violin: Strings";
			insNames[41] = "Viola: Strings";
			insNames[42] = "Cello: Strings";
			insNames[43] = "Contrabass: Strings";
			insNames[44] = "Tremolo Strings: Strings";
			insNames[45] = "Pizzicato Strings: Strings";
			insNames[46] = "Orchestral Harp: Strings";
			insNames[47] = "Timpani: Strings";
			insNames[48] = "String Ensemble 1: Ensemble";
			insNames[49] = "String Ensemble 2: Ensemble";
			insNames[50] = "Synth Strings 1: Ensemble";
			insNames[51] = "Synth Strings 2: Ensemble";
			insNames[52] = "Choir Aahs: Ensemble";
			insNames[53] = "Voice Oohs: Ensemble";
			insNames[54] = "Synth Choir: Ensemble";
			insNames[55] = "Orchestra Hit: Ensemble";
			insNames[56] = "Trumpet: Brass";
			insNames[57] = "Trombone: Brass";
			insNames[58] = "Tuba: Brass";
			insNames[59] = "Muted Trumpet: Brass";
			insNames[60] = "French Horn: Brass";
			insNames[61] = "Brass Section: Brass";
			insNames[62] = "Synth Brass 1: Brass";
			insNames[63] = "Synth Brass 2: Brass";
			insNames[64] = "Soprano Sax: Reed";
			insNames[65] = "Alto Sax: Reed";
			insNames[66] = "Tenor Sax: Reed";
			insNames[67] = "Baritone Sax: Reed";
			insNames[68] = "Oboe: Reed";
			insNames[69] = "English Horn: Reed";
			insNames[70] = "Bassoon: Reed";
			insNames[71] = "Clarinet: Reed";
			insNames[72] = "Piccolo: Pipe";
			insNames[73] = "Flute: Pipe";
			insNames[74] = "Recorder: Pipe";
			insNames[75] = "Pan Flute: Pipe";
			insNames[76] = "Blown bottle: Pipe";
			insNames[77] = "Shakuhachi: Pipe";
			insNames[78] = "Whistle: Pipe";
			insNames[79] = "Ocarina: Pipe";
			insNames[80] = "Lead 1 (square): Synth Lead";
			insNames[81] = "Lead 2 (sawtooth): Synth Lead";
			insNames[82] = "Lead 3 (calliope): Synth Lead";
			insNames[83] = "Lead 4 (chiff): Synth Lead";
			insNames[84] = "Lead 5 (charang): Synth Lead";
			insNames[85] = "Lead 6 (voice): Synth Lead";
			insNames[86] = "Lead 7 (fifths): Synth Lead";
			insNames[87] = "Lead 8 (bass + lead): Synth Lead";
			insNames[88] = "Pad 1 (new age): Synth Pad";
			insNames[89] = "Pad 2 (warm): Synth Pad";
			insNames[90] = "Pad 3 (polysynth): Synth Pad";
			insNames[91] = "Pad 4 (choir): Synth Pad";
			insNames[92] = "Pad 5 (bowed): Synth Pad";
			insNames[93] = "Pad 6 (metallic): Synth Pad";
			insNames[94] = "Pad 7 (halo): Synth Pad";
			insNames[95] = "Pad 8 (sweep): Synth Pad";
			insNames[96] = "FX 1 (rain): Synth Effects";
			insNames[97] = "FX 2 (soundtrack): Synth Effects";
			insNames[98] = "FX 3 (crystal): Synth Effects";
			insNames[99] = "FX 4 (atmosphere): Synth Effects";
			insNames[100] = "FX 5 (brightness): Synth Effects";
			insNames[101] = "FX 6 (goblins): Synth Effects";
			insNames[102] = "FX 7 (echoes): Synth Effects";
			insNames[103] = "FX 8 (sci-fi): Synth Effects";
			insNames[104] = "Sitar: Ethnic";
			insNames[105] = "Banjo: Ethnic";
			insNames[106] = "Shamisen: Ethnic";
			insNames[107] = "Koto: Ethnic";
			insNames[108] = "Kalimba: Ethnic";
			insNames[109] = "Bagpipe: Ethnic";
			insNames[110] = "Fiddle: Ethnic";
			insNames[111] = "Shanai: Ethnic";
			insNames[112] = "Tinkle Bell: Percussive";
			insNames[113] = "Agogo: Percussive";
			insNames[114] = "Steel Drums: Percussive";
			insNames[115] = "Woodblock: Percussive";
			insNames[116] = "Taiko Drum: Percussive";
			insNames[117] = "Melodic Tom: Percussive";
			insNames[118] = "Synth Drum: Percussive";
			insNames[119] = "Reverse Cymbal: Percussive";
			insNames[120] = "Guitar Fret Noise: Sound effects";
			insNames[121] = "Breath Noise: Sound effects";
			insNames[122] = "Seashore: Sound effects";
			insNames[123] = "Bird Tweet: Sound effects";
			insNames[124] = "Telephone Ring: Sound effects";
			insNames[125] = "Helicopter: Sound effects";
			insNames[126] = "Applause: Sound effects";
			insNames[127] = "Gunshot: Sound effects";
			this.instrumentNamesArray = insNames;
		}
		return this.instrumentNamesArray;
	};
	this.instrumentKeys = function() {
		if (!(this.instrumentKeyArray)) {
			this.instrumentKeyArray = [
				'0000_Aspirin_sf2_file', '0000_Chaos_sf2_file', '0000_FluidR3_GM_sf2_file', '0000_GeneralUserGS_sf2_file', '0000_JCLive_sf2_file', '0000_SBLive_sf2', '0000_SoundBlasterOld_sf2', '0001_FluidR3_GM_sf2_file', '0001_GeneralUserGS_sf2_file', '0002_GeneralUserGS_sf2_file', '0003_GeneralUserGS_sf2_file', '0010_Aspirin_sf2_file', '0010_Chaos_sf2_file', '0010_FluidR3_GM_sf2_file', '0010_GeneralUserGS_sf2_file', '0010_JCLive_sf2_file', '0010_SBLive_sf2', '0010_SoundBlasterOld_sf2', '0011_Aspirin_sf2_file', '0011_FluidR3_GM_sf2_file', '0011_GeneralUserGS_sf2_file', '0012_GeneralUserGS_sf2_file', '0020_Aspirin_sf2_file', '0020_Chaos_sf2_file', '0020_FluidR3_GM_sf2_file', '0020_GeneralUserGS_sf2_file', '0020_JCLive_sf2_file', '0020_SBLive_sf2', '0020_SoundBlasterOld_sf2', '0021_Aspirin_sf2_file', '0021_GeneralUserGS_sf2_file', '0022_Aspirin_sf2_file', '0030_Aspirin_sf2_file', '0030_Chaos_sf2_file', '0030_FluidR3_GM_sf2_file', '0030_GeneralUserGS_sf2_file', '0030_JCLive_sf2_file', '0030_SBLive_sf2', '0030_SoundBlasterOld_sf2', '0031_Aspirin_sf2_file', '0031_FluidR3_GM_sf2_file', '0031_GeneralUserGS_sf2_file', '0031_SoundBlasterOld_sf2', '0040_Aspirin_sf2_file', '0040_Chaos_sf2_file', '0040_FluidR3_GM_sf2_file', '0040_GeneralUserGS_sf2_file', '0040_JCLive_sf2_file', '0040_SBLive_sf2', '0040_SoundBlasterOld_sf2', '0041_FluidR3_GM_sf2_file', '0041_GeneralUserGS_sf2_file', '0041_SoundBlasterOld_sf2', '0042_GeneralUserGS_sf2_file', '0043_GeneralUserGS_sf2_file', '0044_GeneralUserGS_sf2_file', '0045_GeneralUserGS_sf2_file', '0046_GeneralUserGS_sf2_file', '0050_Aspirin_sf2_file', '0050_Chaos_sf2_file', '0050_FluidR3_GM_sf2_file', '0050_GeneralUserGS_sf2_file', '0050_JCLive_sf2_file', '0050_SBLive_sf2', '0050_SoundBlasterOld_sf2', '0051_FluidR3_GM_sf2_file', '0051_GeneralUserGS_sf2_file', '0052_GeneralUserGS_sf2_file', '0053_GeneralUserGS_sf2_file', '0054_GeneralUserGS_sf2_file', '0060_Aspirin_sf2_file', '0060_Chaos_sf2_file', '0060_FluidR3_GM_sf2_file', '0060_GeneralUserGS_sf2_file', '0060_JCLive_sf2_file', '0060_SBLive_sf2', '0060_SoundBlasterOld_sf2', '0061_Aspirin_sf2_file', '0061_GeneralUserGS_sf2_file', '0061_SoundBlasterOld_sf2', '0062_GeneralUserGS_sf2_file', '0070_Aspirin_sf2_file', '0070_Chaos_sf2_file', '0070_FluidR3_GM_sf2_file', '0070_GeneralUserGS_sf2_file', '0070_JCLive_sf2_file', '0070_SBLive_sf2', '0070_SoundBlasterOld_sf2', '0071_GeneralUserGS_sf2_file', '0080_Aspirin_sf2_file', '0080_Chaos_sf2_file', '0080_FluidR3_GM_sf2_file', '0080_GeneralUserGS_sf2_file', '0080_JCLive_sf2_file', '0080_SBLive_sf2', '0080_SoundBlasterOld_sf2', '0081_FluidR3_GM_sf2_file', '0081_GeneralUserGS_sf2_file', '0081_SoundBlasterOld_sf2', '0090_Aspirin_sf2_file', '0090_Chaos_sf2_file', '0090_FluidR3_GM_sf2_file', '0090_GeneralUserGS_sf2_file', '0090_JCLive_sf2_file', '0090_SBLive_sf2', '0090_SoundBlasterOld_sf2', '0091_SoundBlasterOld_sf2', '0100_Aspirin_sf2_file', '0100_Chaos_sf2_file', '0100_FluidR3_GM_sf2_file', '0100_GeneralUserGS_sf2_file', '0100_JCLive_sf2_file', '0100_SBLive_sf2', '0100_SoundBlasterOld_sf2', '0101_GeneralUserGS_sf2_file', '0101_SoundBlasterOld_sf2', '0110_Aspirin_sf2_file', '0110_Chaos_sf2_file', '0110_FluidR3_GM_sf2_file', '0110_GeneralUserGS_sf2_file', '0110_JCLive_sf2_file', '0110_SBLive_sf2', '0110_SoundBlasterOld_sf2', '0111_FluidR3_GM_sf2_file', '0120_Aspirin_sf2_file', '0120_Chaos_sf2_file', '0120_FluidR3_GM_sf2_file', '0120_GeneralUserGS_sf2_file', '0120_JCLive_sf2_file', '0120_SBLive_sf2', '0120_SoundBlasterOld_sf2', '0121_FluidR3_GM_sf2_file', '0121_GeneralUserGS_sf2_file', '0130_Aspirin_sf2_file', '0130_Chaos_sf2_file', '0130_FluidR3_GM_sf2_file', '0130_GeneralUserGS_sf2_file', '0130_JCLive_sf2_file', '0130_SBLive_sf2', '0130_SoundBlasterOld_sf2', '0131_FluidR3_GM_sf2_file', '0140_Aspirin_sf2_file', '0140_Chaos_sf2_file', '0140_FluidR3_GM_sf2_file', '0140_GeneralUserGS_sf2_file', '0140_JCLive_sf2_file', '0140_SBLive_sf2', '0140_SoundBlasterOld_sf2', '0141_FluidR3_GM_sf2_file', '0141_GeneralUserGS_sf2_file', '0142_GeneralUserGS_sf2_file', '0143_GeneralUserGS_sf2_file', '0150_Aspirin_sf2_file', '0150_Chaos_sf2_file', '0150_FluidR3_GM_sf2_file', '0150_GeneralUserGS_sf2_file', '0150_JCLive_sf2_file', '0150_SBLive_sf2', '0150_SoundBlasterOld_sf2', '0151_FluidR3_GM_sf2_file', '0160_Aspirin_sf2_file', '0160_Chaos_sf2_file', '0160_FluidR3_GM_sf2_file', '0160_GeneralUserGS_sf2_file', '0160_JCLive_sf2_file', '0160_SBLive_sf2', '0160_SoundBlasterOld_sf2', '0161_Aspirin_sf2_file', '0161_FluidR3_GM_sf2_file', '0161_SoundBlasterOld_sf2', '0170_Aspirin_sf2_file', '0170_Chaos_sf2_file', '0170_FluidR3_GM_sf2_file', '0170_GeneralUserGS_sf2_file', '0170_JCLive_sf2_file', '0170_SBLive_sf2', '0170_SoundBlasterOld_sf2', '0171_FluidR3_GM_sf2_file', '0171_GeneralUserGS_sf2_file', '0172_FluidR3_GM_sf2_file', '0180_Aspirin_sf2_file', '0180_Chaos_sf2_file', '0180_FluidR3_GM_sf2_file', '0180_GeneralUserGS_sf2_file', '0180_JCLive_sf2_file', '0180_SBLive_sf2', '0180_SoundBlasterOld_sf2', '0181_Aspirin_sf2_file', '0181_GeneralUserGS_sf2_file', '0181_SoundBlasterOld_sf2', '0190_Aspirin_sf2_file', '0190_Chaos_sf2_file', '0190_FluidR3_GM_sf2_file', '0190_GeneralUserGS_sf2_file', '0190_JCLive_sf2_file', '0190_SBLive_sf2', '0190_SoundBlasterOld_sf2', '0191_Aspirin_sf2_file', '0191_GeneralUserGS_sf2_file', '0191_SoundBlasterOld_sf2', '0200_Aspirin_sf2_file', '0200_Chaos_sf2_file', '0200_FluidR3_GM_sf2_file', '0200_GeneralUserGS_sf2_file', '0200_JCLive_sf2_file', '0200_SBLive_sf2', '0200_SoundBlasterOld_sf2', '0201_Aspirin_sf2_file', '0201_FluidR3_GM_sf2_file', '0201_GeneralUserGS_sf2_file', '0201_SoundBlasterOld_sf2', '0210_Aspirin_sf2_file', '0210_Chaos_sf2_file', '0210_FluidR3_GM_sf2_file', '0210_GeneralUserGS_sf2_file', '0210_JCLive_sf2_file', '0210_SBLive_sf2', '0210_SoundBlasterOld_sf2', '0211_Aspirin_sf2_file', '0211_FluidR3_GM_sf2_file', '0211_GeneralUserGS_sf2_file', '0211_SoundBlasterOld_sf2', '0212_GeneralUserGS_sf2_file', '0220_Aspirin_sf2_file', '0220_Chaos_sf2_file', '0220_FluidR3_GM_sf2_file', '0220_GeneralUserGS_sf2_file', '0220_JCLive_sf2_file', '0220_SBLive_sf2', '0220_SoundBlasterOld_sf2', '0221_FluidR3_GM_sf2_file', '0230_Aspirin_sf2_file', '0230_Chaos_sf2_file', '0230_FluidR3_GM_sf2_file', '0230_GeneralUserGS_sf2_file', '0230_JCLive_sf2_file', '0230_SBLive_sf2', '0230_SoundBlasterOld_sf2', '0231_FluidR3_GM_sf2_file', '0231_GeneralUserGS_sf2_file', '0231_JCLive_sf2_file', '0231_SoundBlasterOld_sf2', '0232_FluidR3_GM_sf2_file', '0233_FluidR3_GM_sf2_file', '0240_Aspirin_sf2_file', '0240_Chaos_sf2_file', '0240_FluidR3_GM_sf2_file', '0240_GeneralUserGS_sf2_file', '0240_JCLive_sf2_file', '0240_LK_Godin_Nylon_SF2_file', '0240_SBLive_sf2', '0240_SoundBlasterOld_sf2', '0241_GeneralUserGS_sf2_file', '0241_JCLive_sf2_file', '0242_JCLive_sf2_file', '0243_JCLive_sf2_file', '0250_Acoustic_Guitar_sf2_file', '0250_Aspirin_sf2_file', '0250_Chaos_sf2_file', '0250_FluidR3_GM_sf2_file', '0250_GeneralUserGS_sf2_file', '0250_JCLive_sf2_file', '0250_LK_AcousticSteel_SF2_file', '0250_SBLive_sf2', '0250_SoundBlasterOld_sf2', '0251_Acoustic_Guitar_sf2_file', '0251_GeneralUserGS_sf2_file', '0252_Acoustic_Guitar_sf2_file', '0252_GeneralUserGS_sf2_file', '0253_Acoustic_Guitar_sf2_file', '0253_GeneralUserGS_sf2_file', '0254_Acoustic_Guitar_sf2_file', '0254_GeneralUserGS_sf2_file', '0255_GeneralUserGS_sf2_file', '0260_Aspirin_sf2_file', '0260_Chaos_sf2_file', '0260_FluidR3_GM_sf2_file', '0260_GeneralUserGS_sf2_file', '0260_JCLive_sf2_file', '0260_SBLive_sf2', '0260_SoundBlasterOld_sf2', '0260_Stratocaster_sf2_file', '0261_GeneralUserGS_sf2_file', '0261_SoundBlasterOld_sf2', '0261_Stratocaster_sf2_file', '0262_Stratocaster_sf2_file', '0270_Aspirin_sf2_file', '0270_Chaos_sf2_file', '0270_FluidR3_GM_sf2_file', '0270_GeneralUserGS_sf2_file', '0270_Gibson_Les_Paul_sf2_file', '0270_JCLive_sf2_file', '0270_SBAWE32_sf2_file', '0270_SBLive_sf2', '0270_SoundBlasterOld_sf2', '0270_Stratocaster_sf2_file', '0271_GeneralUserGS_sf2_file', '0271_Stratocaster_sf2_file', '0272_Stratocaster_sf2_file', '0280_Aspirin_sf2_file', '0280_Chaos_sf2_file', '0280_FluidR3_GM_sf2_file', '0280_GeneralUserGS_sf2_file', '0280_JCLive_sf2_file', '0280_LesPaul_sf2', '0280_LesPaul_sf2_file', '0280_SBAWE32_sf2_file', '0280_SBLive_sf2', '0280_SoundBlasterOld_sf2', '0281_Aspirin_sf2_file', '0281_FluidR3_GM_sf2_file', '0281_GeneralUserGS_sf2_file', '0282_FluidR3_GM_sf2_file', '0282_GeneralUserGS_sf2_file', '0283_GeneralUserGS_sf2_file', '0290_Aspirin_sf2_file', '0290_Chaos_sf2_file', '0290_FluidR3_GM_sf2_file', '0290_GeneralUserGS_sf2_file', '0290_JCLive_sf2_file', '0290_LesPaul_sf2', '0290_LesPaul_sf2_file', '0290_SBAWE32_sf2_file', '0290_SBLive_sf2', '0290_SoundBlasterOld_sf2', '0291_Aspirin_sf2_file', '0291_LesPaul_sf2', '0291_LesPaul_sf2_file', '0291_SBAWE32_sf2_file', '0291_SoundBlasterOld_sf2', '0292_Aspirin_sf2_file', '0292_LesPaul_sf2', '0292_LesPaul_sf2_file', '0300_Aspirin_sf2_file', '0300_Chaos_sf2_file', '0300_FluidR3_GM_sf2_file', '0300_GeneralUserGS_sf2_file', '0300_JCLive_sf2_file', '0300_LesPaul_sf2', '0300_LesPaul_sf2_file', '0300_SBAWE32_sf2_file', '0300_SBLive_sf2', '0300_SoundBlasterOld_sf2', '0301_Aspirin_sf2_file', '0301_FluidR3_GM_sf2_file', '0301_GeneralUserGS_sf2_file', '0301_JCLive_sf2_file', '0301_LesPaul_sf2', '0301_LesPaul_sf2_file', '0302_Aspirin_sf2_file', '0302_GeneralUserGS_sf2_file', '0302_JCLive_sf2_file', '0303_Aspirin_sf2_file', '0304_Aspirin_sf2_file', '0310_Aspirin_sf2_file', '0310_Chaos_sf2_file', '0310_FluidR3_GM_sf2_file', '0310_GeneralUserGS_sf2_file', '0310_JCLive_sf2_file', '0310_LesPaul_sf2', '0310_LesPaul_sf2_file', '0310_SBAWE32_sf2_file', '0310_SBLive_sf2', '0310_SoundBlasterOld_sf2', '0311_FluidR3_GM_sf2_file', '0311_GeneralUserGS_sf2_file', '0320_Aspirin_sf2_file', '0320_Chaos_sf2_file', '0320_FluidR3_GM_sf2_file', '0320_GeneralUserGS_sf2_file', '0320_JCLive_sf2_file', '0320_SBLive_sf2', '0320_SoundBlasterOld_sf2', '0321_GeneralUserGS_sf2_file', '0322_GeneralUserGS_sf2_file', '0330_Aspirin_sf2_file', '0330_Chaos_sf2_file', '0330_FluidR3_GM_sf2_file', '0330_GeneralUserGS_sf2_file', '0330_JCLive_sf2_file', '0330_SBLive_sf2', '0330_SoundBlasterOld_sf2', '0331_GeneralUserGS_sf2_file', '0332_GeneralUserGS_sf2_file', '0340_Aspirin_sf2_file', '0340_Chaos_sf2_file', '0340_FluidR3_GM_sf2_file', '0340_GeneralUserGS_sf2_file', '0340_JCLive_sf2_file', '0340_SBLive_sf2', '0340_SoundBlasterOld_sf2', '0341_Aspirin_sf2_file', '0341_GeneralUserGS_sf2_file', '0350_Aspirin_sf2_file', '0350_Chaos_sf2_file', '0350_FluidR3_GM_sf2_file', '0350_GeneralUserGS_sf2_file', '0350_JCLive_sf2_file', '0350_SBLive_sf2', '0350_SoundBlasterOld_sf2', '0351_GeneralUserGS_sf2_file', '0360_Aspirin_sf2_file', '0360_Chaos_sf2_file', '0360_FluidR3_GM_sf2_file', '0360_GeneralUserGS_sf2_file', '0360_JCLive_sf2_file', '0360_SBLive_sf2', '0360_SoundBlasterOld_sf2', '0361_GeneralUserGS_sf2_file', '0370_Aspirin_sf2_file', '0370_Chaos_sf2_file', '0370_FluidR3_GM_sf2_file', '0370_GeneralUserGS_sf2_file', '0370_JCLive_sf2_file', '0370_SBLive_sf2', '0370_SoundBlasterOld_sf2', '0371_GeneralUserGS_sf2_file', '0372_GeneralUserGS_sf2_file', '0380_Aspirin_sf2_file', '0380_Chaos_sf2_file', '0380_FluidR3_GM_sf2_file', '0380_GeneralUserGS_sf2_file', '0380_JCLive_sf2_file', '0380_SBLive_sf2', '0380_SoundBlasterOld_sf2', '0381_FluidR3_GM_sf2_file', '0381_GeneralUserGS_sf2_file', '0382_FluidR3_GM_sf2_file', '0382_GeneralUserGS_sf2_file', '0383_GeneralUserGS_sf2_file', '0384_GeneralUserGS_sf2_file', '0385_GeneralUserGS_sf2_file', '0386_GeneralUserGS_sf2_file', '0387_GeneralUserGS_sf2_file', '0390_Aspirin_sf2_file', '0390_Chaos_sf2_file', '0390_FluidR3_GM_sf2_file', '0390_GeneralUserGS_sf2_file', '0390_JCLive_sf2_file', '0390_SBLive_sf2', '0390_SoundBlasterOld_sf2', '0391_FluidR3_GM_sf2_file', '0391_GeneralUserGS_sf2_file', '0391_SoundBlasterOld_sf2', '0392_FluidR3_GM_sf2_file', '0392_GeneralUserGS_sf2_file', '0393_GeneralUserGS_sf2_file', '0400_Aspirin_sf2_file', '0400_Chaos_sf2_file', '0400_FluidR3_GM_sf2_file', '0400_GeneralUserGS_sf2_file', '0400_JCLive_sf2_file', '0400_SBLive_sf2', '0400_SoundBlasterOld_sf2', '0401_Aspirin_sf2_file', '0401_FluidR3_GM_sf2_file', '0401_GeneralUserGS_sf2_file', '0402_GeneralUserGS_sf2_file', '0410_Aspirin_sf2_file', '0410_Chaos_sf2_file', '0410_FluidR3_GM_sf2_file', '0410_GeneralUserGS_sf2_file', '0410_JCLive_sf2_file', '0410_SBLive_sf2', '0410_SoundBlasterOld_sf2', '0411_FluidR3_GM_sf2_file', '0420_Aspirin_sf2_file', '0420_Chaos_sf2_file', '0420_FluidR3_GM_sf2_file', '0420_GeneralUserGS_sf2_file', '0420_JCLive_sf2_file', '0420_SBLive_sf2', '0420_SoundBlasterOld_sf2', '0421_FluidR3_GM_sf2_file', '0421_GeneralUserGS_sf2_file', '0430_Aspirin_sf2_file', '0430_Chaos_sf2_file', '0430_FluidR3_GM_sf2_file', '0430_GeneralUserGS_sf2_file', '0430_JCLive_sf2_file', '0430_SBLive_sf2', '0430_SoundBlasterOld_sf2', '0431_FluidR3_GM_sf2_file', '0440_Aspirin_sf2_file', '0440_Chaos_sf2_file', '0440_FluidR3_GM_sf2_file', '0440_GeneralUserGS_sf2_file', '0440_JCLive_sf2_file', '0440_SBLive_sf2', '0440_SoundBlasterOld_sf2', '0441_GeneralUserGS_sf2_file', '0442_GeneralUserGS_sf2_file', '0450_Aspirin_sf2_file', '0450_Chaos_sf2_file', '0450_FluidR3_GM_sf2_file', '0450_GeneralUserGS_sf2_file', '0450_JCLive_sf2_file', '0450_SBLive_sf2', '0450_SoundBlasterOld_sf2', '0451_FluidR3_GM_sf2_file', '0460_Aspirin_sf2_file', '0460_Chaos_sf2_file', '0460_FluidR3_GM_sf2_file', '0460_GeneralUserGS_sf2_file', '0460_JCLive_sf2_file', '0460_SBLive_sf2', '0460_SoundBlasterOld_sf2', '0461_FluidR3_GM_sf2_file', '0470_Aspirin_sf2_file', '0470_Chaos_sf2_file', '0470_FluidR3_GM_sf2_file', '0470_GeneralUserGS_sf2_file', '0470_JCLive_sf2_file', '0470_SBLive_sf2', '0470_SoundBlasterOld_sf2', '0471_FluidR3_GM_sf2_file', '0471_GeneralUserGS_sf2_file', '0480_Aspirin_sf2_file', '0480_Chaos_sf2_file', '0480_FluidR3_GM_sf2_file', '0480_GeneralUserGS_sf2_file', '0480_JCLive_sf2_file', '0480_SBLive_sf2', '0480_SoundBlasterOld_sf2', '04810_GeneralUserGS_sf2_file', '04811_GeneralUserGS_sf2_file', '04812_GeneralUserGS_sf2_file', '04813_GeneralUserGS_sf2_file', '04814_GeneralUserGS_sf2_file', '04815_GeneralUserGS_sf2_file', '04816_GeneralUserGS_sf2_file', '04817_GeneralUserGS_sf2_file', '0481_Aspirin_sf2_file', '0481_FluidR3_GM_sf2_file', '0481_GeneralUserGS_sf2_file', '0482_Aspirin_sf2_file', '0482_GeneralUserGS_sf2_file', '0483_GeneralUserGS_sf2_file', '0484_GeneralUserGS_sf2_file', '0485_GeneralUserGS_sf2_file', '0486_GeneralUserGS_sf2_file', '0487_GeneralUserGS_sf2_file', '0488_GeneralUserGS_sf2_file', '0489_GeneralUserGS_sf2_file', '0490_Aspirin_sf2_file', '0490_Chaos_sf2_file', '0490_FluidR3_GM_sf2_file', '0490_GeneralUserGS_sf2_file', '0490_JCLive_sf2_file', '0490_SBLive_sf2', '0490_SoundBlasterOld_sf2', '0491_GeneralUserGS_sf2_file', '0492_GeneralUserGS_sf2_file', '0500_Aspirin_sf2_file', '0500_Chaos_sf2_file', '0500_FluidR3_GM_sf2_file', '0500_GeneralUserGS_sf2_file', '0500_JCLive_sf2_file', '0500_SBLive_sf2', '0500_SoundBlasterOld_sf2', '0501_FluidR3_GM_sf2_file', '0501_GeneralUserGS_sf2_file', '0502_FluidR3_GM_sf2_file', '0502_GeneralUserGS_sf2_file', '0503_FluidR3_GM_sf2_file', '0504_FluidR3_GM_sf2_file', '0505_FluidR3_GM_sf2_file', '0510_Aspirin_sf2_file', '0510_Chaos_sf2_file', '0510_FluidR3_GM_sf2_file', '0510_GeneralUserGS_sf2_file', '0510_JCLive_sf2_file', '0510_SBLive_sf2', '0510_SoundBlasterOld_sf2', '0511_GeneralUserGS_sf2_file', '0511_SoundBlasterOld_sf2', '0520_Aspirin_sf2_file', '0520_Chaos_sf2_file', '0520_FluidR3_GM_sf2_file', '0520_GeneralUserGS_sf2_file', '0520_JCLive_sf2_file', '0520_SBLive_sf2', '0520_Soul_Ahhs_sf2_file', '0520_SoundBlasterOld_sf2', '0521_FluidR3_GM_sf2_file', '0521_Soul_Ahhs_sf2_file', '0521_SoundBlasterOld_sf2', '0522_Soul_Ahhs_sf2_file', '0530_Aspirin_sf2_file', '0530_Chaos_sf2_file', '0530_FluidR3_GM_sf2_file', '0530_GeneralUserGS_sf2_file', '0530_JCLive_sf2_file', '0530_SBLive_sf2', '0530_Soul_Ahhs_sf2_file', '0530_SoundBlasterOld_sf2', '0531_FluidR3_GM_sf2_file', '0531_GeneralUserGS_sf2_file', '0531_JCLive_sf2_file', '0531_SoundBlasterOld_sf2', '0540_Aspirin_sf2_file', '0540_Chaos_sf2_file', '0540_FluidR3_GM_sf2_file', '0540_GeneralUserGS_sf2_file', '0540_JCLive_sf2_file', '0540_SBLive_sf2', '0540_SoundBlasterOld_sf2', '0541_FluidR3_GM_sf2_file', '0550_Aspirin_sf2_file', '0550_Chaos_sf2_file', '0550_FluidR3_GM_sf2_file', '0550_GeneralUserGS_sf2_file', '0550_JCLive_sf2_file', '0550_SBLive_sf2', '0550_SoundBlasterOld_sf2', '0551_Aspirin_sf2_file', '0551_FluidR3_GM_sf2_file', '0560_Aspirin_sf2_file', '0560_Chaos_sf2_file', '0560_FluidR3_GM_sf2_file', '0560_GeneralUserGS_sf2_file', '0560_JCLive_sf2_file', '0560_SBLive_sf2', '0560_SoundBlasterOld_sf2', '0570_Aspirin_sf2_file', '0570_Chaos_sf2_file', '0570_FluidR3_GM_sf2_file', '0570_GeneralUserGS_sf2_file', '0570_JCLive_sf2_file', '0570_SBLive_sf2', '0570_SoundBlasterOld_sf2', '0571_GeneralUserGS_sf2_file', '0580_Aspirin_sf2_file', '0580_Chaos_sf2_file', '0580_FluidR3_GM_sf2_file', '0580_GeneralUserGS_sf2_file', '0580_JCLive_sf2_file', '0580_SBLive_sf2', '0580_SoundBlasterOld_sf2', '0581_GeneralUserGS_sf2_file', '0590_Aspirin_sf2_file', '0590_Chaos_sf2_file', '0590_FluidR3_GM_sf2_file', '0590_GeneralUserGS_sf2_file', '0590_JCLive_sf2_file', '0590_SBLive_sf2', '0590_SoundBlasterOld_sf2', '0591_GeneralUserGS_sf2_file', '0600_Aspirin_sf2_file', '0600_Chaos_sf2_file', '0600_FluidR3_GM_sf2_file', '0600_GeneralUserGS_sf2_file', '0600_JCLive_sf2_file', '0600_SBLive_sf2', '0600_SoundBlasterOld_sf2', '0601_FluidR3_GM_sf2_file', '0601_GeneralUserGS_sf2_file', '0602_GeneralUserGS_sf2_file', '0603_GeneralUserGS_sf2_file', '0610_Aspirin_sf2_file', '0610_Chaos_sf2_file', '0610_FluidR3_GM_sf2_file', '0610_GeneralUserGS_sf2_file', '0610_JCLive_sf2_file', '0610_SBLive_sf2', '0610_SoundBlasterOld_sf2', '0611_GeneralUserGS_sf2_file', '0612_GeneralUserGS_sf2_file', '0613_GeneralUserGS_sf2_file', '0614_GeneralUserGS_sf2_file', '0615_GeneralUserGS_sf2_file', '0620_Aspirin_sf2_file', '0620_Chaos_sf2_file', '0620_FluidR3_GM_sf2_file', '0620_GeneralUserGS_sf2_file', '0620_JCLive_sf2_file', '0620_SBLive_sf2', '0620_SoundBlasterOld_sf2', '0621_Aspirin_sf2_file', '0621_FluidR3_GM_sf2_file', '0621_GeneralUserGS_sf2_file', '0622_FluidR3_GM_sf2_file', '0622_GeneralUserGS_sf2_file', '0630_Aspirin_sf2_file', '0630_Chaos_sf2_file', '0630_FluidR3_GM_sf2_file', '0630_GeneralUserGS_sf2_file', '0630_JCLive_sf2_file', '0630_SBLive_sf2', '0630_SoundBlasterOld_sf2', '0631_Aspirin_sf2_file', '0631_FluidR3_GM_sf2_file', '0631_GeneralUserGS_sf2_file', '0632_FluidR3_GM_sf2_file', '0633_FluidR3_GM_sf2_file', '0640_Aspirin_sf2_file', '0640_Chaos_sf2_file', '0640_FluidR3_GM_sf2_file', '0640_GeneralUserGS_sf2_file', '0640_JCLive_sf2_file', '0640_SBLive_sf2', '0640_SoundBlasterOld_sf2', '0641_FluidR3_GM_sf2_file', '0650_Aspirin_sf2_file', '0650_Chaos_sf2_file', '0650_FluidR3_GM_sf2_file', '0650_GeneralUserGS_sf2_file', '0650_JCLive_sf2_file', '0650_SBLive_sf2', '0650_SoundBlasterOld_sf2', '0651_Aspirin_sf2_file', '0651_FluidR3_GM_sf2_file', '0660_Aspirin_sf2_file', '0660_Chaos_sf2_file', '0660_FluidR3_GM_sf2_file', '0660_GeneralUserGS_sf2_file', '0660_JCLive_sf2_file', '0660_SBLive_sf2', '0660_SoundBlasterOld_sf2', '0661_FluidR3_GM_sf2_file', '0661_GeneralUserGS_sf2_file', '0670_Aspirin_sf2_file', '0670_Chaos_sf2_file', '0670_FluidR3_GM_sf2_file', '0670_GeneralUserGS_sf2_file', '0670_JCLive_sf2_file', '0670_SBLive_sf2', '0670_SoundBlasterOld_sf2', '0671_FluidR3_GM_sf2_file', '0680_Aspirin_sf2_file', '0680_Chaos_sf2_file', '0680_FluidR3_GM_sf2_file', '0680_GeneralUserGS_sf2_file', '0680_JCLive_sf2_file', '0680_SBLive_sf2', '0680_SoundBlasterOld_sf2', '0681_FluidR3_GM_sf2_file', '0690_Aspirin_sf2_file', '0690_Chaos_sf2_file', '0690_FluidR3_GM_sf2_file', '0690_GeneralUserGS_sf2_file', '0690_JCLive_sf2_file', '0690_SBLive_sf2', '0690_SoundBlasterOld_sf2', '0691_FluidR3_GM_sf2_file', '0700_Aspirin_sf2_file', '0700_Chaos_sf2_file', '0700_FluidR3_GM_sf2_file', '0700_GeneralUserGS_sf2_file', '0700_JCLive_sf2_file', '0700_SBLive_sf2', '0700_SoundBlasterOld_sf2', '0701_FluidR3_GM_sf2_file', '0701_GeneralUserGS_sf2_file', '0710_Aspirin_sf2_file', '0710_Chaos_sf2_file', '0710_FluidR3_GM_sf2_file', '0710_GeneralUserGS_sf2_file', '0710_JCLive_sf2_file', '0710_SBLive_sf2', '0710_SoundBlasterOld_sf2', '0711_FluidR3_GM_sf2_file', '0720_Aspirin_sf2_file', '0720_Chaos_sf2_file', '0720_FluidR3_GM_sf2_file', '0720_GeneralUserGS_sf2_file', '0720_JCLive_sf2_file', '0720_SBLive_sf2', '0720_SoundBlasterOld_sf2', '0721_FluidR3_GM_sf2_file', '0721_SoundBlasterOld_sf2', '0730_Aspirin_sf2_file', '0730_Chaos_sf2_file', '0730_FluidR3_GM_sf2_file', '0730_GeneralUserGS_sf2_file', '0730_JCLive_sf2_file', '0730_SBLive_sf2', '0730_SoundBlasterOld_sf2', '0731_Aspirin_sf2_file', '0731_FluidR3_GM_sf2_file', '0731_SoundBlasterOld_sf2', '0740_Aspirin_sf2_file', '0740_Chaos_sf2_file', '0740_FluidR3_GM_sf2_file', '0740_GeneralUserGS_sf2_file', '0740_JCLive_sf2_file', '0740_SBLive_sf2', '0740_SoundBlasterOld_sf2', '0741_GeneralUserGS_sf2_file', '0750_Aspirin_sf2_file', '0750_Chaos_sf2_file', '0750_FluidR3_GM_sf2_file', '0750_GeneralUserGS_sf2_file', '0750_JCLive_sf2_file', '0750_SBLive_sf2', '0750_SoundBlasterOld_sf2', '0751_Aspirin_sf2_file', '0751_FluidR3_GM_sf2_file', '0751_GeneralUserGS_sf2_file', '0751_SoundBlasterOld_sf2', '0760_Aspirin_sf2_file', '0760_Chaos_sf2_file', '0760_FluidR3_GM_sf2_file', '0760_GeneralUserGS_sf2_file', '0760_JCLive_sf2_file', '0760_SBLive_sf2', '0760_SoundBlasterOld_sf2', '0761_FluidR3_GM_sf2_file', '0761_GeneralUserGS_sf2_file', '0761_SoundBlasterOld_sf2', '0762_GeneralUserGS_sf2_file', '0770_Aspirin_sf2_file', '0770_Chaos_sf2_file', '0770_FluidR3_GM_sf2_file', '0770_GeneralUserGS_sf2_file', '0770_JCLive_sf2_file', '0770_SBLive_sf2', '0770_SoundBlasterOld_sf2', '0771_FluidR3_GM_sf2_file', '0771_GeneralUserGS_sf2_file', '0772_GeneralUserGS_sf2_file', '0780_Aspirin_sf2_file', '0780_Chaos_sf2_file', '0780_FluidR3_GM_sf2_file', '0780_GeneralUserGS_sf2_file', '0780_JCLive_sf2_file', '0780_SBLive_sf2', '0780_SoundBlasterOld_sf2', '0781_GeneralUserGS_sf2_file', '0790_Aspirin_sf2_file', '0790_Chaos_sf2_file', '0790_FluidR3_GM_sf2_file', '0790_GeneralUserGS_sf2_file', '0790_JCLive_sf2_file', '0790_SBLive_sf2', '0790_SoundBlasterOld_sf2', '0791_GeneralUserGS_sf2_file', '0800_Aspirin_sf2_file', '0800_Chaos_sf2_file', '0800_FluidR3_GM_sf2_file', '0800_GeneralUserGS_sf2_file', '0800_JCLive_sf2_file', '0800_SBLive_sf2', '0800_SoundBlasterOld_sf2', '0801_FluidR3_GM_sf2_file', '0801_GeneralUserGS_sf2_file', '0810_Aspirin_sf2_file', '0810_Chaos_sf2_file', '0810_FluidR3_GM_sf2_file', '0810_GeneralUserGS_sf2_file', '0810_JCLive_sf2_file', '0810_SBLive_sf2', '0810_SoundBlasterOld_sf2', '0811_Aspirin_sf2_file', '0811_GeneralUserGS_sf2_file', '0811_SoundBlasterOld_sf2', '0820_Aspirin_sf2_file', '0820_Chaos_sf2_file', '0820_FluidR3_GM_sf2_file', '0820_GeneralUserGS_sf2_file', '0820_JCLive_sf2_file', '0820_SBLive_sf2', '0820_SoundBlasterOld_sf2', '0821_FluidR3_GM_sf2_file', '0821_GeneralUserGS_sf2_file', '0821_SoundBlasterOld_sf2', '0822_GeneralUserGS_sf2_file', '0823_GeneralUserGS_sf2_file', '0830_Aspirin_sf2_file', '0830_Chaos_sf2_file', '0830_FluidR3_GM_sf2_file', '0830_GeneralUserGS_sf2_file', '0830_JCLive_sf2_file', '0830_SBLive_sf2', '0830_SoundBlasterOld_sf2', '0831_FluidR3_GM_sf2_file', '0831_GeneralUserGS_sf2_file', '0831_SoundBlasterOld_sf2', '0840_Aspirin_sf2_file', '0840_Chaos_sf2_file', '0840_FluidR3_GM_sf2_file', '0840_GeneralUserGS_sf2_file', '0840_JCLive_sf2_file', '0840_SBLive_sf2', '0840_SoundBlasterOld_sf2', '0841_Aspirin_sf2_file', '0841_Chaos_sf2_file', '0841_FluidR3_GM_sf2_file', '0841_GeneralUserGS_sf2_file', '0841_JCLive_sf2_file', '0841_SoundBlasterOld_sf2', '0842_FluidR3_GM_sf2_file', '0850_Aspirin_sf2_file', '0850_Chaos_sf2_file', '0850_FluidR3_GM_sf2_file', '0850_GeneralUserGS_sf2_file', '0850_JCLive_sf2_file', '0850_SBLive_sf2', '0850_SoundBlasterOld_sf2', '0851_FluidR3_GM_sf2_file', '0851_GeneralUserGS_sf2_file', '0851_JCLive_sf2_file', '0851_SoundBlasterOld_sf2', '0860_Aspirin_sf2_file', '0860_Chaos_sf2_file', '0860_FluidR3_GM_sf2_file', '0860_GeneralUserGS_sf2_file', '0860_JCLive_sf2_file', '0860_SBLive_sf2', '0860_SoundBlasterOld_sf2', '0861_Aspirin_sf2_file', '0861_FluidR3_GM_sf2_file', '0861_SoundBlasterOld_sf2', '0870_Aspirin_sf2_file', '0870_Chaos_sf2_file', '0870_FluidR3_GM_sf2_file', '0870_GeneralUserGS_sf2_file', '0870_JCLive_sf2_file', '0870_SBLive_sf2', '0870_SoundBlasterOld_sf2', '0871_GeneralUserGS_sf2_file', '0872_GeneralUserGS_sf2_file', '0873_GeneralUserGS_sf2_file', '0880_Aspirin_sf2_file', '0880_Chaos_sf2_file', '0880_FluidR3_GM_sf2_file', '0880_GeneralUserGS_sf2_file', '0880_JCLive_sf2_file', '0880_SBLive_sf2', '0880_SoundBlasterOld_sf2', '0881_Aspirin_sf2_file', '0881_FluidR3_GM_sf2_file', '0881_GeneralUserGS_sf2_file', '0881_SoundBlasterOld_sf2', '0882_Aspirin_sf2_file', '0882_FluidR3_GM_sf2_file', '0882_GeneralUserGS_sf2_file', '0883_GeneralUserGS_sf2_file', '0884_GeneralUserGS_sf2_file', '0885_GeneralUserGS_sf2_file', '0886_GeneralUserGS_sf2_file', '0887_GeneralUserGS_sf2_file', '0888_GeneralUserGS_sf2_file', '0889_GeneralUserGS_sf2_file', '0890_Aspirin_sf2_file', '0890_Chaos_sf2_file', '0890_FluidR3_GM_sf2_file', '0890_GeneralUserGS_sf2_file', '0890_JCLive_sf2_file', '0890_SBLive_sf2', '0890_SoundBlasterOld_sf2', '0891_Aspirin_sf2_file', '0891_FluidR3_GM_sf2_file', '0891_GeneralUserGS_sf2_file', '0900_Aspirin_sf2_file', '0900_Chaos_sf2_file', '0900_FluidR3_GM_sf2_file', '0900_GeneralUserGS_sf2_file', '0900_JCLive_sf2_file', '0900_SBLive_sf2', '0900_SoundBlasterOld_sf2', '0901_Aspirin_sf2_file', '0901_FluidR3_GM_sf2_file', '0901_GeneralUserGS_sf2_file', '0901_SoundBlasterOld_sf2', '0910_Aspirin_sf2_file', '0910_Chaos_sf2_file', '0910_FluidR3_GM_sf2_file', '0910_GeneralUserGS_sf2_file', '0910_JCLive_sf2_file', '0910_SBLive_sf2', '0910_SoundBlasterOld_sf2', '0911_Aspirin_sf2_file', '0911_GeneralUserGS_sf2_file', '0911_JCLive_sf2_file', '0911_SoundBlasterOld_sf2', '0920_Aspirin_sf2_file', '0920_Chaos_sf2_file', '0920_FluidR3_GM_sf2_file', '0920_GeneralUserGS_sf2_file', '0920_JCLive_sf2_file', '0920_SBLive_sf2', '0920_SoundBlasterOld_sf2', '0921_Aspirin_sf2_file', '0921_GeneralUserGS_sf2_file', '0921_SoundBlasterOld_sf2', '0930_Aspirin_sf2_file', '0930_Chaos_sf2_file', '0930_FluidR3_GM_sf2_file', '0930_GeneralUserGS_sf2_file', '0930_JCLive_sf2_file', '0930_SBLive_sf2', '0930_SoundBlasterOld_sf2', '0931_Aspirin_sf2_file', '0931_FluidR3_GM_sf2_file', '0931_GeneralUserGS_sf2_file', '0931_SoundBlasterOld_sf2', '0940_Aspirin_sf2_file', '0940_Chaos_sf2_file', '0940_FluidR3_GM_sf2_file', '0940_GeneralUserGS_sf2_file', '0940_JCLive_sf2_file', '0940_SBLive_sf2', '0940_SoundBlasterOld_sf2', '0941_Aspirin_sf2_file', '0941_FluidR3_GM_sf2_file', '0941_GeneralUserGS_sf2_file', '0941_JCLive_sf2_file', '0950_Aspirin_sf2_file', '0950_Chaos_sf2_file', '0950_FluidR3_GM_sf2_file', '0950_GeneralUserGS_sf2_file', '0950_JCLive_sf2_file', '0950_SBLive_sf2', '0950_SoundBlasterOld_sf2', '0951_FluidR3_GM_sf2_file', '0951_GeneralUserGS_sf2_file', '0960_Aspirin_sf2_file', '0960_Chaos_sf2_file', '0960_FluidR3_GM_sf2_file', '0960_GeneralUserGS_sf2_file', '0960_JCLive_sf2_file', '0960_SBLive_sf2', '0960_SoundBlasterOld_sf2', '0961_Aspirin_sf2_file', '0961_FluidR3_GM_sf2_file', '0961_GeneralUserGS_sf2_file', '0961_SoundBlasterOld_sf2', '0962_GeneralUserGS_sf2_file', '0970_Aspirin_sf2_file', '0970_Chaos_sf2_file', '0970_FluidR3_GM_sf2_file', '0970_GeneralUserGS_sf2_file', '0970_JCLive_sf2_file', '0970_SBLive_sf2', '0970_SoundBlasterOld_sf2', '0971_FluidR3_GM_sf2_file', '0971_GeneralUserGS_sf2_file', '0971_SoundBlasterOld_sf2', '0980_Aspirin_sf2_file', '0980_Chaos_sf2_file', '0980_FluidR3_GM_sf2_file', '0980_GeneralUserGS_sf2_file', '0980_JCLive_sf2_file', '0980_SBLive_sf2', '0980_SoundBlasterOld_sf2', '0981_Aspirin_sf2_file', '0981_FluidR3_GM_sf2_file', '0981_GeneralUserGS_sf2_file', '0981_SoundBlasterOld_sf2', '0982_GeneralUserGS_sf2_file', '0983_GeneralUserGS_sf2_file', '0984_GeneralUserGS_sf2_file', '0990_Aspirin_sf2_file', '0990_Chaos_sf2_file', '0990_FluidR3_GM_sf2_file', '0990_GeneralUserGS_sf2_file', '0990_JCLive_sf2_file', '0990_SBLive_sf2', '0990_SoundBlasterOld_sf2', '0991_Aspirin_sf2_file', '0991_FluidR3_GM_sf2_file', '0991_GeneralUserGS_sf2_file', '0991_JCLive_sf2_file', '0991_SoundBlasterOld_sf2', '0992_FluidR3_GM_sf2_file', '0992_JCLive_sf2_file', '0993_JCLive_sf2_file', '0994_JCLive_sf2_file', '1000_Aspirin_sf2_file', '1000_Chaos_sf2_file', '1000_FluidR3_GM_sf2_file', '1000_GeneralUserGS_sf2_file', '1000_JCLive_sf2_file', '1000_SBLive_sf2', '1000_SoundBlasterOld_sf2', '1001_Aspirin_sf2_file', '1001_FluidR3_GM_sf2_file', '1001_GeneralUserGS_sf2_file', '1001_JCLive_sf2_file', '1001_SoundBlasterOld_sf2', '1002_Aspirin_sf2_file', '1002_FluidR3_GM_sf2_file', '1002_GeneralUserGS_sf2_file', '1010_Aspirin_sf2_file', '1010_Chaos_sf2_file', '1010_FluidR3_GM_sf2_file', '1010_GeneralUserGS_sf2_file', '1010_JCLive_sf2_file', '1010_SBLive_sf2', '1010_SoundBlasterOld_sf2', '1011_Aspirin_sf2_file', '1011_FluidR3_GM_sf2_file', '1011_JCLive_sf2_file', '1012_Aspirin_sf2_file', '1020_Aspirin_sf2_file', '1020_Chaos_sf2_file', '1020_FluidR3_GM_sf2_file', '1020_GeneralUserGS_sf2_file', '1020_JCLive_sf2_file', '1020_SBLive_sf2', '1020_SoundBlasterOld_sf2', '1021_Aspirin_sf2_file', '1021_FluidR3_GM_sf2_file', '1021_GeneralUserGS_sf2_file', '1021_JCLive_sf2_file', '1021_SoundBlasterOld_sf2', '1022_GeneralUserGS_sf2_file', '1030_Aspirin_sf2_file', '1030_Chaos_sf2_file', '1030_FluidR3_GM_sf2_file', '1030_GeneralUserGS_sf2_file', '1030_JCLive_sf2_file', '1030_SBLive_sf2', '1030_SoundBlasterOld_sf2', '1031_Aspirin_sf2_file', '1031_FluidR3_GM_sf2_file', '1031_GeneralUserGS_sf2_file', '1031_SoundBlasterOld_sf2', '1032_FluidR3_GM_sf2_file', '1040_Aspirin_sf2_file', '1040_Chaos_sf2_file', '1040_FluidR3_GM_sf2_file', '1040_GeneralUserGS_sf2_file', '1040_JCLive_sf2_file', '1040_SBLive_sf2', '1040_SoundBlasterOld_sf2', '1041_FluidR3_GM_sf2_file', '1041_GeneralUserGS_sf2_file', '1050_Aspirin_sf2_file', '1050_Chaos_sf2_file', '1050_FluidR3_GM_sf2_file', '1050_GeneralUserGS_sf2_file', '1050_JCLive_sf2_file', '1050_SBLive_sf2', '1050_SoundBlasterOld_sf2', '1051_GeneralUserGS_sf2_file', '1060_Aspirin_sf2_file', '1060_Chaos_sf2_file', '1060_FluidR3_GM_sf2_file', '1060_GeneralUserGS_sf2_file', '1060_JCLive_sf2_file', '1060_SBLive_sf2', '1060_SoundBlasterOld_sf2', '1061_FluidR3_GM_sf2_file', '1061_GeneralUserGS_sf2_file', '1061_SoundBlasterOld_sf2', '1070_Aspirin_sf2_file', '1070_Chaos_sf2_file', '1070_FluidR3_GM_sf2_file', '1070_GeneralUserGS_sf2_file', '1070_JCLive_sf2_file', '1070_SBLive_sf2', '1070_SoundBlasterOld_sf2', '1071_FluidR3_GM_sf2_file', '1071_GeneralUserGS_sf2_file', '1072_GeneralUserGS_sf2_file', '1073_GeneralUserGS_sf2_file', '1080_Aspirin_sf2_file', '1080_Chaos_sf2_file', '1080_FluidR3_GM_sf2_file', '1080_GeneralUserGS_sf2_file', '1080_JCLive_sf2_file', '1080_SBLive_sf2', '1080_SoundBlasterOld_sf2', '1081_SoundBlasterOld_sf2', '1090_Aspirin_sf2_file', '1090_Chaos_sf2_file', '1090_FluidR3_GM_sf2_file', '1090_GeneralUserGS_sf2_file', '1090_JCLive_sf2_file', '1090_SBLive_sf2', '1090_SoundBlasterOld_sf2', '1091_SoundBlasterOld_sf2', '1100_Aspirin_sf2_file', '1100_Chaos_sf2_file', '1100_FluidR3_GM_sf2_file', '1100_GeneralUserGS_sf2_file', '1100_JCLive_sf2_file', '1100_SBLive_sf2', '1100_SoundBlasterOld_sf2', '1101_Aspirin_sf2_file', '1101_FluidR3_GM_sf2_file', '1101_GeneralUserGS_sf2_file', '1102_GeneralUserGS_sf2_file', '1110_Aspirin_sf2_file', '1110_Chaos_sf2_file', '1110_FluidR3_GM_sf2_file', '1110_GeneralUserGS_sf2_file', '1110_JCLive_sf2_file', '1110_SBLive_sf2', '1110_SoundBlasterOld_sf2', '1120_Aspirin_sf2_file', '1120_Chaos_sf2_file', '1120_FluidR3_GM_sf2_file', '1120_GeneralUserGS_sf2_file', '1120_JCLive_sf2_file', '1120_SBLive_sf2', '1120_SoundBlasterOld_sf2', '1121_SoundBlasterOld_sf2', '1130_Aspirin_sf2_file', '1130_Chaos_sf2_file', '1130_FluidR3_GM_sf2_file', '1130_GeneralUserGS_sf2_file', '1130_JCLive_sf2_file', '1130_SBLive_sf2', '1130_SoundBlasterOld_sf2', '1131_FluidR3_GM_sf2_file', '1131_SoundBlasterOld_sf2', '1140_Aspirin_sf2_file', '1140_Chaos_sf2_file', '1140_FluidR3_GM_sf2_file', '1140_GeneralUserGS_sf2_file', '1140_JCLive_sf2_file', '1140_SBLive_sf2', '1140_SoundBlasterOld_sf2', '1141_FluidR3_GM_sf2_file', '1150_Aspirin_sf2_file', '1150_Chaos_sf2_file', '1150_FluidR3_GM_sf2_file', '1150_GeneralUserGS_sf2_file', '1150_JCLive_sf2_file', '1150_SBLive_sf2', '1150_SoundBlasterOld_sf2', '1151_FluidR3_GM_sf2_file', '1151_GeneralUserGS_sf2_file', '1152_FluidR3_GM_sf2_file', '1152_GeneralUserGS_sf2_file', '1160_Aspirin_sf2_file', '1160_Chaos_sf2_file', '1160_FluidR3_GM_sf2_file', '1160_GeneralUserGS_sf2_file', '1160_JCLive_sf2_file', '1160_SBLive_sf2', '1160_SoundBlasterOld_sf2', '1161_FluidR3_GM_sf2_file', '1161_GeneralUserGS_sf2_file', '1161_SoundBlasterOld_sf2', '1162_FluidR3_GM_sf2_file', '1162_GeneralUserGS_sf2_file', '1163_FluidR3_GM_sf2_file', '1170_Aspirin_sf2_file', '1170_Chaos_sf2_file', '1170_FluidR3_GM_sf2_file', '1170_GeneralUserGS_sf2_file', '1170_JCLive_sf2_file', '1170_SBLive_sf2', '1170_SoundBlasterOld_sf2', '1171_FluidR3_GM_sf2_file', '1171_GeneralUserGS_sf2_file', '1172_FluidR3_GM_sf2_file', '1173_FluidR3_GM_sf2_file', '1180_Aspirin_sf2_file', '1180_Chaos_sf2_file', '1180_FluidR3_GM_sf2_file', '1180_GeneralUserGS_sf2_file', '1180_JCLive_sf2_file', '1180_SBLive_sf2', '1180_SoundBlasterOld_sf2', '1181_FluidR3_GM_sf2_file', '1181_GeneralUserGS_sf2_file', '1181_SoundBlasterOld_sf2', '1190_Aspirin_sf2_file', '1190_Chaos_sf2_file', '1190_FluidR3_GM_sf2_file', '1190_GeneralUserGS_sf2_file', '1190_JCLive_sf2_file', '1190_SBLive_sf2', '1190_SoundBlasterOld_sf2', '1191_GeneralUserGS_sf2_file', '1192_GeneralUserGS_sf2_file', '1193_GeneralUserGS_sf2_file', '1194_GeneralUserGS_sf2_file', '1200_Aspirin_sf2_file', '1200_Chaos_sf2_file', '1200_FluidR3_GM_sf2_file', '1200_GeneralUserGS_sf2_file', '1200_JCLive_sf2_file', '1200_SBLive_sf2', '1200_SoundBlasterOld_sf2', '1201_Aspirin_sf2_file', '1201_GeneralUserGS_sf2_file', '1202_GeneralUserGS_sf2_file', '1210_Aspirin_sf2_file', '1210_Chaos_sf2_file', '1210_FluidR3_GM_sf2_file', '1210_GeneralUserGS_sf2_file', '1210_JCLive_sf2_file', '1210_SBLive_sf2', '1210_SoundBlasterOld_sf2', '1211_Aspirin_sf2_file', '1211_GeneralUserGS_sf2_file', '1212_GeneralUserGS_sf2_file', '1220_Aspirin_sf2_file', '1220_Chaos_sf2_file', '1220_FluidR3_GM_sf2_file', '1220_GeneralUserGS_sf2_file', '1220_JCLive_sf2_file', '1220_SBLive_sf2', '1220_SoundBlasterOld_sf2', '1221_Aspirin_sf2_file', '1221_GeneralUserGS_sf2_file', '1221_JCLive_sf2_file', '1222_Aspirin_sf2_file', '1222_GeneralUserGS_sf2_file', '1223_Aspirin_sf2_file', '1223_GeneralUserGS_sf2_file', '1224_Aspirin_sf2_file', '1224_GeneralUserGS_sf2_file', '1225_GeneralUserGS_sf2_file', '1226_GeneralUserGS_sf2_file', '1230_Aspirin_sf2_file', '1230_Chaos_sf2_file', '1230_FluidR3_GM_sf2_file', '1230_GeneralUserGS_sf2_file', '1230_JCLive_sf2_file', '1230_SBLive_sf2', '1230_SoundBlasterOld_sf2', '1231_Aspirin_sf2_file', '1231_GeneralUserGS_sf2_file', '1232_Aspirin_sf2_file', '1232_GeneralUserGS_sf2_file', '1233_GeneralUserGS_sf2_file', '1234_GeneralUserGS_sf2_file', '1240_Aspirin_sf2_file', '1240_Chaos_sf2_file', '1240_FluidR3_GM_sf2_file', '1240_GeneralUserGS_sf2_file', '1240_JCLive_sf2_file', '1240_SBLive_sf2', '1240_SoundBlasterOld_sf2', '1241_Aspirin_sf2_file', '1241_GeneralUserGS_sf2_file', '1242_Aspirin_sf2_file', '1242_GeneralUserGS_sf2_file', '1243_Aspirin_sf2_file', '1243_GeneralUserGS_sf2_file', '1244_Aspirin_sf2_file', '1244_GeneralUserGS_sf2_file', '1250_Aspirin_sf2_file', '1250_Chaos_sf2_file', '1250_FluidR3_GM_sf2_file', '1250_GeneralUserGS_sf2_file', '1250_JCLive_sf2_file', '1250_SBLive_sf2', '1250_SoundBlasterOld_sf2', '1251_Aspirin_sf2_file', '1251_FluidR3_GM_sf2_file', '1251_GeneralUserGS_sf2_file', '1252_Aspirin_sf2_file', '1252_FluidR3_GM_sf2_file', '1252_GeneralUserGS_sf2_file', '1253_Aspirin_sf2_file', '1253_GeneralUserGS_sf2_file', '1254_Aspirin_sf2_file', '1254_GeneralUserGS_sf2_file', '1255_Aspirin_sf2_file', '1255_GeneralUserGS_sf2_file', '1256_Aspirin_sf2_file', '1256_GeneralUserGS_sf2_file', '1257_Aspirin_sf2_file', '1257_GeneralUserGS_sf2_file', '1258_Aspirin_sf2_file', '1258_GeneralUserGS_sf2_file', '1259_GeneralUserGS_sf2_file', '1260_Aspirin_sf2_file', '1260_Chaos_sf2_file', '1260_FluidR3_GM_sf2_file', '1260_GeneralUserGS_sf2_file', '1260_JCLive_sf2_file', '1260_SBLive_sf2', '1260_SoundBlasterOld_sf2', '1261_Aspirin_sf2_file', '1261_GeneralUserGS_sf2_file', '1262_Aspirin_sf2_file', '1262_GeneralUserGS_sf2_file', '1263_Aspirin_sf2_file', '1263_GeneralUserGS_sf2_file', '1264_Aspirin_sf2_file', '1264_GeneralUserGS_sf2_file', '1265_Aspirin_sf2_file', '1265_GeneralUserGS_sf2_file', '1270_Aspirin_sf2_file', '1270_Chaos_sf2_file', '1270_FluidR3_GM_sf2_file', '1270_GeneralUserGS_sf2_file', '1270_JCLive_sf2_file', '1270_SBLive_sf2', '1270_SoundBlasterOld_sf2', '1271_Aspirin_sf2_file', '1271_GeneralUserGS_sf2_file', '1272_Aspirin_sf2_file', '1272_GeneralUserGS_sf2_file', '1273_GeneralUserGS_sf2_file', '1274_GeneralUserGS_sf2_file'
			];
		}
		return this.instrumentKeyArray;
	};
	this.instrumentInfo = function(n) {
		var key = this.instrumentKeys()[n];
		var p = 1 * key.substr(0, 3);
		return {
			variable: '_tone_' + key,
			url: 'https://surikov.github.io/webaudiofontdata/sound/' + key + '.js',
			title: this.instrumentTitles()[p]
		};
	};
	this.findInstrument = function(program) {
		if (!(this.choosenInfos)) {
			this.choosenInfos=[
				[1, 2] //Accoustic Grand Piano
				, [2, 14] //Bright Accoustic Piano
				, [3, 25] //Electric Grand Piano
				, [4, 37] //Honky-Tonk Piano
				, [5, 48] //Electric Pino 1
				, [6, 58] //Electric Piano 2
				, [7, 70] //HarpsiChord Piano
				, [8, 83] //Cravinet
				, [9, 91] //Celesta
				, [10, 99] //Glockenspiel
				, [11, 107] //Music Box
				, [12, 118] //Vibraphone
				, [13, 127] // Marimba
				, [14, 136] // Xylophone
				, [15, 144] // Tubular Bells
				, [16, 152] // Dulcimer
				, [17, 164] // Drawbar Organ
				, [18, 170] // Percussive Organ
				, [19, 183] //Rock Organ
				, [20, 194] // Church Organ
				, [21, 205] //Reed Organ
				, [22, 215] //Accordion
				, [23, 228] //
				, [24, 241] //
				, [25, 254] //
				, [26, 263] //
				, [27, 277] //
				, [28, 296] //
				, [29, 308] //
				, [30, 319] //
				, [31, 350] //
				, [32, 356] //
				, [33, 369] //
				, [34, 379] //
				, [35, 385] //
				, [36, 399] // Fretless Bass
				, [37, 403] // Slap Bass 1
				, [38, 412] // Slap Bass 2
				, [39, 421] // Synth Bass 1
				, [40, 438] // Synth Bass 2
				, [41, 452] // Violin
				, [42, 461] // Viola
				, [43, 467] // Cello
				, [44, 477] // Contrabass
				, [45, 488] // Tremolo Strings
				, [46, 493] // Pizzicato Strings
				, [47, 501] // Orchestral Harp
				, [48, 511] // Timpani
				, [49, 518] // String Ensemble 1
				, [50, 547] //String Ensemble 2
			];
		}
		/*
		for (var i = 0; i < this.choosenInfos.length; i++) {
			if (program+1 == this.choosenInfos[i][0]) {
				return this.choosenInfos[i][1]-1;
			}
		}
		*/
		for (var i = 0; i < this.instrumentKeys().length; i++) {
			if (program == 1 * this.instrumentKeys()[i].substring(0, 3)) {
				return i;
			}
		}
		console.log('program', program, 'not found');
		return 0;
	};
	this.drumTitles = function() {
		if (!(this.drumNamesArray)) {
			var drumNames = [];
			drumNames[35] = "Bass Drum 2";
			drumNames[36] = "Bass Drum 1";
			drumNames[37] = "Side Stick/Rimshot";
			drumNames[38] = "Snare Drum 1";
			drumNames[39] = "Hand Clap";
			drumNames[40] = "Snare Drum 2";
			drumNames[41] = "Low Tom 2";
			drumNames[42] = "Closed Hi-hat";
			drumNames[43] = "Low Tom 1";
			drumNames[44] = "Pedal Hi-hat";
			drumNames[45] = "Mid Tom 2";
			drumNames[46] = "Open Hi-hat";
			drumNames[47] = "Mid Tom 1";
			drumNames[48] = "High Tom 2";
			drumNames[49] = "Crash Cymbal 1";
			drumNames[50] = "High Tom 1";
			drumNames[51] = "Ride Cymbal 1";
			drumNames[52] = "Chinese Cymbal";
			drumNames[53] = "Ride Bell";
			drumNames[54] = "Tambourine";
			drumNames[55] = "Splash Cymbal";
			drumNames[56] = "Cowbell";
			drumNames[57] = "Crash Cymbal 2";
			drumNames[58] = "Vibra Slap";
			drumNames[59] = "Ride Cymbal 2";
			drumNames[60] = "High Bongo";
			drumNames[61] = "Low Bongo";
			drumNames[62] = "Mute High Conga";
			drumNames[63] = "Open High Conga";
			drumNames[64] = "Low Conga";
			drumNames[65] = "High Timbale";
			drumNames[66] = "Low Timbale";
			drumNames[67] = "High Agogo";
			drumNames[68] = "Low Agogo";
			drumNames[69] = "Cabasa";
			drumNames[70] = "Maracas";
			drumNames[71] = "Short Whistle";
			drumNames[72] = "Long Whistle";
			drumNames[73] = "Short Guiro";
			drumNames[74] = "Long Guiro";
			drumNames[75] = "Claves";
			drumNames[76] = "High Wood Block";
			drumNames[77] = "Low Wood Block";
			drumNames[78] = "Mute Cuica";
			drumNames[79] = "Open Cuica";
			drumNames[80] = "Mute Triangle";
			drumNames[81] = "Open Triangle";
			this.drumNamesArray = drumNames;
		}
		return this.drumNamesArray;
	};
	this.drumKeys = function() {
		if (!(this.drumKeyArray)) {
			this.drumKeyArray = [
				'35_0_SBLive_sf2', '35_12_JCLive_sf2_file', '35_16_JCLive_sf2_file', '35_18_JCLive_sf2_file', '35_4_Chaos_sf2_file', '36_0_SBLive_sf2', '36_12_JCLive_sf2_file', '36_16_JCLive_sf2_file', '36_18_JCLive_sf2_file', '36_4_Chaos_sf2_file', '37_0_SBLive_sf2', '37_12_JCLive_sf2_file', '37_16_JCLive_sf2_file', '37_18_JCLive_sf2_file', '37_4_Chaos_sf2_file', '38_0_SBLive_sf2', '38_12_JCLive_sf2_file', '38_16_JCLive_sf2_file', '38_18_JCLive_sf2_file', '38_4_Chaos_sf2_file', '39_0_SBLive_sf2', '39_12_JCLive_sf2_file', '39_16_JCLive_sf2_file', '39_18_JCLive_sf2_file', '39_4_Chaos_sf2_file', '40_0_SBLive_sf2', '40_12_JCLive_sf2_file', '40_16_JCLive_sf2_file', '40_18_JCLive_sf2_file', '40_4_Chaos_sf2_file', '41_0_SBLive_sf2', '41_12_JCLive_sf2_file', '41_16_JCLive_sf2_file', '41_18_JCLive_sf2_file', '41_4_Chaos_sf2_file', '42_0_SBLive_sf2', '42_12_JCLive_sf2_file', '42_16_JCLive_sf2_file', '42_18_JCLive_sf2_file', '42_4_Chaos_sf2_file', '43_0_SBLive_sf2', '43_12_JCLive_sf2_file', '43_16_JCLive_sf2_file', '43_18_JCLive_sf2_file', '43_4_Chaos_sf2_file', '44_0_SBLive_sf2', '44_12_JCLive_sf2_file', '44_16_JCLive_sf2_file', '44_18_JCLive_sf2_file', '44_4_Chaos_sf2_file', '45_0_SBLive_sf2', '45_12_JCLive_sf2_file', '45_16_JCLive_sf2_file', '45_18_JCLive_sf2_file', '45_4_Chaos_sf2_file', '46_0_SBLive_sf2', '46_12_JCLive_sf2_file', '46_16_JCLive_sf2_file', '46_18_JCLive_sf2_file', '46_4_Chaos_sf2_file', '47_0_SBLive_sf2', '47_12_JCLive_sf2_file', '47_16_JCLive_sf2_file', '47_18_JCLive_sf2_file', '47_4_Chaos_sf2_file', '48_0_SBLive_sf2', '48_12_JCLive_sf2_file', '48_16_JCLive_sf2_file', '48_18_JCLive_sf2_file', '48_4_Chaos_sf2_file', '49_0_SBLive_sf2', '49_12_JCLive_sf2_file', '49_16_JCLive_sf2_file', '49_18_JCLive_sf2_file', '49_4_Chaos_sf2_file', '50_0_SBLive_sf2', '50_12_JCLive_sf2_file', '50_16_JCLive_sf2_file', '50_18_JCLive_sf2_file', '50_4_Chaos_sf2_file', '51_0_SBLive_sf2', '51_12_JCLive_sf2_file', '51_16_JCLive_sf2_file', '51_18_JCLive_sf2_file', '51_4_Chaos_sf2_file', '52_0_SBLive_sf2', '52_12_JCLive_sf2_file', '52_16_JCLive_sf2_file', '52_18_JCLive_sf2_file', '52_4_Chaos_sf2_file', '53_0_SBLive_sf2', '53_12_JCLive_sf2_file', '53_16_JCLive_sf2_file', '53_18_JCLive_sf2_file', '53_4_Chaos_sf2_file', '54_0_SBLive_sf2', '54_12_JCLive_sf2_file', '54_16_JCLive_sf2_file', '54_18_JCLive_sf2_file', '54_4_Chaos_sf2_file', '55_0_SBLive_sf2', '55_12_JCLive_sf2_file', '55_16_JCLive_sf2_file', '55_18_JCLive_sf2_file', '55_4_Chaos_sf2_file', '56_0_SBLive_sf2', '56_12_JCLive_sf2_file', '56_16_JCLive_sf2_file', '56_18_JCLive_sf2_file', '56_4_Chaos_sf2_file', '57_0_SBLive_sf2', '57_12_JCLive_sf2_file', '57_16_JCLive_sf2_file', '57_18_JCLive_sf2_file', '57_4_Chaos_sf2_file', '58_0_SBLive_sf2', '58_12_JCLive_sf2_file', '58_16_JCLive_sf2_file', '58_18_JCLive_sf2_file', '58_4_Chaos_sf2_file', '59_0_SBLive_sf2', '59_12_JCLive_sf2_file', '59_16_JCLive_sf2_file', '59_18_JCLive_sf2_file', '59_4_Chaos_sf2_file', '60_0_SBLive_sf2', '60_12_JCLive_sf2_file', '60_16_JCLive_sf2_file', '60_18_JCLive_sf2_file', '60_4_Chaos_sf2_file', '61_0_SBLive_sf2', '61_12_JCLive_sf2_file', '61_16_JCLive_sf2_file', '61_18_JCLive_sf2_file', '61_4_Chaos_sf2_file', '62_0_SBLive_sf2', '62_12_JCLive_sf2_file', '62_16_JCLive_sf2_file', '62_18_JCLive_sf2_file', '62_4_Chaos_sf2_file', '63_0_SBLive_sf2', '63_12_JCLive_sf2_file', '63_16_JCLive_sf2_file', '63_18_JCLive_sf2_file', '63_4_Chaos_sf2_file', '64_0_SBLive_sf2', '64_12_JCLive_sf2_file', '64_16_JCLive_sf2_file', '64_18_JCLive_sf2_file', '64_4_Chaos_sf2_file', '65_0_SBLive_sf2', '65_12_JCLive_sf2_file', '65_16_JCLive_sf2_file', '65_18_JCLive_sf2_file', '65_4_Chaos_sf2_file', '66_0_SBLive_sf2', '66_12_JCLive_sf2_file', '66_16_JCLive_sf2_file', '66_18_JCLive_sf2_file', '66_4_Chaos_sf2_file', '67_0_SBLive_sf2', '67_12_JCLive_sf2_file', '67_16_JCLive_sf2_file', '67_18_JCLive_sf2_file', '67_4_Chaos_sf2_file', '68_0_SBLive_sf2', '68_12_JCLive_sf2_file', '68_16_JCLive_sf2_file', '68_18_JCLive_sf2_file', '68_4_Chaos_sf2_file', '69_0_SBLive_sf2', '69_12_JCLive_sf2_file', '69_16_JCLive_sf2_file', '69_18_JCLive_sf2_file', '69_4_Chaos_sf2_file', '70_0_SBLive_sf2', '70_12_JCLive_sf2_file', '70_16_JCLive_sf2_file', '70_18_JCLive_sf2_file', '70_4_Chaos_sf2_file', '71_0_SBLive_sf2', '71_12_JCLive_sf2_file', '71_16_JCLive_sf2_file', '71_18_JCLive_sf2_file', '71_4_Chaos_sf2_file', '72_0_SBLive_sf2', '72_12_JCLive_sf2_file', '72_16_JCLive_sf2_file', '72_18_JCLive_sf2_file', '72_4_Chaos_sf2_file', '73_0_SBLive_sf2', '73_12_JCLive_sf2_file', '73_16_JCLive_sf2_file', '73_18_JCLive_sf2_file', '73_4_Chaos_sf2_file', '74_0_SBLive_sf2', '74_12_JCLive_sf2_file', '74_16_JCLive_sf2_file', '74_18_JCLive_sf2_file', '74_4_Chaos_sf2_file', '75_0_SBLive_sf2', '75_12_JCLive_sf2_file', '75_16_JCLive_sf2_file', '75_18_JCLive_sf2_file', '75_4_Chaos_sf2_file', '76_0_SBLive_sf2', '76_12_JCLive_sf2_file', '76_16_JCLive_sf2_file', '76_18_JCLive_sf2_file', '76_4_Chaos_sf2_file', '77_0_SBLive_sf2', '77_12_JCLive_sf2_file', '77_16_JCLive_sf2_file', '77_18_JCLive_sf2_file', '77_4_Chaos_sf2_file', '78_0_SBLive_sf2', '78_12_JCLive_sf2_file', '78_16_JCLive_sf2_file', '78_18_JCLive_sf2_file', '78_4_Chaos_sf2_file', '79_0_SBLive_sf2', '79_12_JCLive_sf2_file', '79_16_JCLive_sf2_file', '79_18_JCLive_sf2_file', '79_4_Chaos_sf2_file', '80_0_SBLive_sf2', '80_12_JCLive_sf2_file', '80_16_JCLive_sf2_file', '80_18_JCLive_sf2_file', '80_4_Chaos_sf2_file', '81_0_SBLive_sf2', '81_12_JCLive_sf2_file', '81_16_JCLive_sf2_file', '81_18_JCLive_sf2_file', '81_4_Chaos_sf2_file'

			];
		}
		return this.drumKeyArray;
	};
	this.drumInfo = function(n) {
		var key = this.drumKeys()[n];
		var p = 1 * key.substr(0, 2);
		return {
			variable: '_drum_' + key,
			url: 'https://surikov.github.io/webaudiofontdata/sound/128' + key + '.js',
			pitch: p,
			title: this.drumTitles()[p]
		};
	};
	this.findDrum = function(nn) {
		for (var i = 0; i < this.drumKeys().length; i++) {
			if (nn == 1 * this.drumKeys()[i].substring(0, 2)) {
				return i;
			}
		}
		return 0;
	}
	return this;
}
if (typeof module === 'object' && module.exports) {
	module.exports = WebAudioFontLoader;
}
if (typeof window !== 'undefined') {
	window.WebAudioFontLoader = WebAudioFontLoader;
}
},{}],26:[function(require,module,exports){
'use strict'
console.log('WebAudioFont Player v2.80');
var WebAudioFontLoader = require('./loader');
var WebAudioFontChannel = require('./channel');
var WebAudioFontReverberator = require('./reverberator')
function WebAudioFontPlayer() {
	this.envelopes = [];
	this.loader = new WebAudioFontLoader(this);
	this.onCacheFinish = null;
	this.onCacheProgress = null;
	this.afterTime = 0.05;
	this.nearZero = 0.000001;
	this.createChannel = function (audioContext) {
		return new WebAudioFontChannel(audioContext);
	};
	this.createReverberator = function (audioContext) {
		return new WebAudioFontReverberator(audioContext);
	};
	this.limitVolume = function (volume) {
		if (volume) {
			volume = 1.0 * volume;
		} else {
			volume = 0.5;
		}
		return volume;
	};
	this.queueChord = function (audioContext, target, preset, when, pitches, duration, volume, slides) {
		volume = this.limitVolume(volume);
		for (var i = 0; i < pitches.length; i++) {
			this.queueWaveTable(audioContext, target, preset, when, pitches[i], duration, volume - Math.random() * 0.01, slides);
		}
	};
	this.queueStrumUp = function (audioContext, target, preset, when, pitches, duration, volume, slides) {
		pitches.sort(function (a, b) {
			return b - a;
		});
		this.queueStrum(audioContext, target, preset, when, pitches, duration, volume, slides);
	};
	this.queueStrumDown = function (audioContext, target, preset, when, pitches, duration, volume, slides) {
		pitches.sort(function (a, b) {
			return a - b;
		});
		this.queueStrum(audioContext, target, preset, when, pitches, duration, volume, slides);
	};
	this.queueStrum = function (audioContext, target, preset, when, pitches, duration, volume, slides) {
		volume = this.limitVolume(volume);
		if (when < audioContext.currentTime) {
			when = audioContext.currentTime;
		}
		for (var i = 0; i < pitches.length; i++) {
			this.queueWaveTable(audioContext, target, preset, when + i * 0.01, pitches[i], duration, volume - Math.random() * 0.01, slides);
			volume = 0.9 * volume;
		}
	};
	this.queueSnap = function (audioContext, target, preset, when, pitches, duration, volume, slides) {
		volume = this.limitVolume(volume);
		volume = 1.5 * (volume || 1.0);
		duration = 0.05;
		this.queueChord(audioContext, target, preset, when, pitches, duration, volume, slides);
	};
	this.queueWaveTable = function (audioContext, target, preset, when, pitch, duration, volume, slides) {
		if (audioContext.state == 'suspended') {
			console.log('audioContext.resume');
			audioContext.resume();
		}
		volume = this.limitVolume(volume);
		var zone = this.findZone(audioContext, preset, pitch);
		if (!(zone.buffer)) {
			console.log('empty buffer ', zone);
			return;
		}
		var baseDetune = zone.originalPitch - 100.0 * zone.coarseTune - zone.fineTune;
		var playbackRate = 1.0 * Math.pow(2, (100.0 * pitch - baseDetune) / 1200.0);
		var sampleRatio = zone.sampleRate / audioContext.sampleRate;
		var startWhen = when;
		if (startWhen < audioContext.currentTime) {
			startWhen = audioContext.currentTime;
		}
		var waveDuration = duration + this.afterTime;
		var loop = true;
		if (zone.loopStart < 1 || zone.loopStart >= zone.loopEnd) {
			loop = false;
		}
		if (!loop) {
			if (waveDuration > zone.buffer.duration / playbackRate) {
				waveDuration = zone.buffer.duration / playbackRate;
			}
		}
		var envelope = this.findEnvelope(audioContext, target, startWhen, waveDuration);
		this.setupEnvelope(audioContext, envelope, zone, volume, startWhen, waveDuration, duration);
		envelope.audioBufferSourceNode = audioContext.createBufferSource();
		envelope.audioBufferSourceNode.playbackRate.setValueAtTime(playbackRate, 0);
		if (slides) {
			if (slides.length > 0) {
				envelope.audioBufferSourceNode.playbackRate.setValueAtTime(playbackRate, when);
				for (var i = 0; i < slides.length; i++) {
					var newPlaybackRate = 1.0 * Math.pow(2, (100.0 * slides[i].pitch - baseDetune) / 1200.0);
					var newWhen = when + slides[i].when;
					envelope.audioBufferSourceNode.playbackRate.linearRampToValueAtTime(newPlaybackRate, newWhen);
				}
			}
		}
		envelope.audioBufferSourceNode.buffer = zone.buffer;
		if (loop) {
			envelope.audioBufferSourceNode.loop = true;
			envelope.audioBufferSourceNode.loopStart = zone.loopStart / zone.sampleRate + zone.delay;
			envelope.audioBufferSourceNode.loopEnd = zone.loopEnd / zone.sampleRate + zone.delay;
		} else {
			envelope.audioBufferSourceNode.loop = false;
		}
		envelope.audioBufferSourceNode.connect(envelope);
		envelope.audioBufferSourceNode.start(startWhen, zone.delay);
		envelope.audioBufferSourceNode.stop(startWhen + waveDuration);
		envelope.when = startWhen;
		envelope.duration = waveDuration;
		envelope.pitch = pitch;
		envelope.preset = preset;
		return envelope;
	};
	this.noZeroVolume = function (n) {
		if (n > this.nearZero) {
			return n;
		} else {
			return this.nearZero;
		}
	};
	this.setupEnvelope = function (audioContext, envelope, zone, volume, when, sampleDuration, noteDuration) {
		envelope.gain.setValueAtTime(this.noZeroVolume(0), audioContext.currentTime);
		var lastTime = 0;
		var lastVolume = 0;
		var duration = noteDuration;
		var ahdsr = zone.ahdsr;
		if (sampleDuration < duration + this.afterTime) {
			duration = sampleDuration - this.afterTime;
		}
		if (ahdsr) {
			if (!(ahdsr.length > 0)) {
				ahdsr = [{
						duration: 0,
						volume: 1
					}, {
						duration: 0.5,
						volume: 1
					}, {
						duration: 1.5,
						volume: 0.5
					}, {
						duration: 3,
						volume: 0
					}
				];
			}
		} else {
			ahdsr = [{
					duration: 0,
					volume: 1
				}, {
					duration: duration,
					volume: 1
				}
			];
		}
		envelope.gain.cancelScheduledValues(when);
		envelope.gain.setValueAtTime(this.noZeroVolume(ahdsr[0].volume * volume), when);
		for (var i = 0; i < ahdsr.length; i++) {
			if (ahdsr[i].duration > 0) {
				if (ahdsr[i].duration + lastTime > duration) {
					var r = 1 - (ahdsr[i].duration + lastTime - duration) / ahdsr[i].duration;
					var n = lastVolume - r * (lastVolume - ahdsr[i].volume);
					envelope.gain.linearRampToValueAtTime(this.noZeroVolume(volume * n), when + duration);
					break;
				}
				lastTime = lastTime + ahdsr[i].duration;
				lastVolume = ahdsr[i].volume;
				envelope.gain.linearRampToValueAtTime(this.noZeroVolume(volume * lastVolume), when + lastTime);
			}
		}
		envelope.gain.linearRampToValueAtTime(this.noZeroVolume(0), when + duration + this.afterTime);
	};
	this.numValue = function (aValue, defValue) {
		if (typeof aValue === "number") {
			return aValue;
		} else {
			return defValue;
		}
	};
	this.findEnvelope = function (audioContext, target, when, duration) {
		var envelope = null;
		for (var i = 0; i < this.envelopes.length; i++) {
			var e = this.envelopes[i];
			if (e.target == target && audioContext.currentTime > e.when + e.duration + 0.001) {
				try {
					e.audioBufferSourceNode.disconnect();
					e.audioBufferSourceNode.stop(0);
					e.audioBufferSourceNode = null;
				} catch (x) {
					//audioBufferSourceNode is dead already
				}
				envelope = e;
				break;
			}
		}
		if (!(envelope)) {
			envelope = audioContext.createGain();
			envelope.target = target;
			envelope.connect(target);
			envelope.cancel = function () {
				if (envelope.when + envelope.duration > audioContext.currentTime) {
					envelope.gain.cancelScheduledValues(0);
					envelope.gain.setTargetAtTime(0.00001, audioContext.currentTime, 0.1);
					envelope.when = audioContext.currentTime + 0.00001;
					envelope.duration = 0;
				}
			};
			this.envelopes.push(envelope);
		}
		return envelope;
	};
	this.adjustPreset = function (audioContext, preset) {
		for (var i = 0; i < preset.zones.length; i++) {
			this.adjustZone(audioContext, preset.zones[i]);
		}
	};
	this.adjustZone = function (audioContext, zone) {
		if (zone.buffer) {
			//
		} else {
			zone.delay = 0;
			if (zone.sample) {
				var decoded = atob(zone.sample);
				zone.buffer = audioContext.createBuffer(1, decoded.length / 2, zone.sampleRate);
				var float32Array = zone.buffer.getChannelData(0);
				var b1,
				b2,
				n;
				for (var i = 0; i < decoded.length / 2; i++) {
					b1 = decoded.charCodeAt(i * 2);
					b2 = decoded.charCodeAt(i * 2 + 1);
					if (b1 < 0) {
						b1 = 256 + b1;
					}
					if (b2 < 0) {
						b2 = 256 + b2;
					}
					n = b2 * 256 + b1;
					if (n >= 65536 / 2) {
						n = n - 65536;
					}
					float32Array[i] = n / 65536.0;
				}
			} else {
				if (zone.file) {
					var datalen = zone.file.length;
					var arraybuffer = new ArrayBuffer(datalen);
					var view = new Uint8Array(arraybuffer);
					var decoded = atob(zone.file);
					var b;
					for (var i = 0; i < decoded.length; i++) {
						b = decoded.charCodeAt(i);
						view[i] = b;
					}
					audioContext.decodeAudioData(arraybuffer, function (audioBuffer) {
						zone.buffer = audioBuffer;
					});
				}
			}
			zone.loopStart = this.numValue(zone.loopStart, 0);
			zone.loopEnd = this.numValue(zone.loopEnd, 0);
			zone.coarseTune = this.numValue(zone.coarseTune, 0);
			zone.fineTune = this.numValue(zone.fineTune, 0);
			zone.originalPitch = this.numValue(zone.originalPitch, 6000);
			zone.sampleRate = this.numValue(zone.sampleRate, 44100);
			zone.sustain = this.numValue(zone.originalPitch, 0);
		}
	};
	this.findZone = function (audioContext, preset, pitch) {
		var zone = null;
		for (var i = preset.zones.length - 1; i >= 0; i--) {
			zone = preset.zones[i];
			if (zone.keyRangeLow <= pitch && zone.keyRangeHigh + 1 >= pitch) {
				break;
			}
		}
		try {
			this.adjustZone(audioContext, zone);
		} catch (ex) {
			console.log('adjustZone', ex);
		}
		return zone;
	};
	this.cancelQueue = function (audioContext) {
		for (var i = 0; i < this.envelopes.length; i++) {
			var e = this.envelopes[i];
			e.gain.cancelScheduledValues(0);
			e.gain.setValueAtTime(this.nearZero, audioContext.currentTime);
			e.when = -1;
			try {
				e.audioBufferSourceNode.disconnect();
			} catch (ex) {
				console.log(ex);
			}
		}
	};
	return this;
}
if (typeof module === 'object' && module.exports) {
	module.exports = WebAudioFontPlayer;
}
if (typeof window !== 'undefined') {
	window.WebAudioFontPlayer = WebAudioFontPlayer;
}

},{"./channel":24,"./loader":25,"./reverberator":27}],27:[function(require,module,exports){
'use strict'
console.log('WebAudioFont Reverberator v1.08');
function WebAudioFontReverberator(audioContext) {
	var me = this;
	this.audioContext = audioContext;
	this.input = this.audioContext.createBiquadFilter();
	this.input.type = "lowpass";
	this.input.frequency.setTargetAtTime(18000,0,0.0001);
	this.convolver = null;
	this.output = audioContext.createGain();
	this.dry = audioContext.createGain();
	this.dry.gain.setTargetAtTime(0.9,0,0.0001);
	this.dry.connect(this.output);
	this.wet = audioContext.createGain();
	this.wet.gain.setTargetAtTime(0.5,0,0.0001);
	this.input.connect(this.dry);
	this.input.connect(this.wet);
	var irr="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";//http://www.openairlib.net/
	var datalen = irr.length / 2;
	this.irrArrayBuffer = new ArrayBuffer(datalen);
	var view = new Uint8Array(this.irrArrayBuffer);
	var decoded = atob(irr);
	var b;
	for (var i = 0; i < decoded.length; i++) {
		b = decoded.charCodeAt(i);
		view[i] = b;
	}
	this.audioContext.decodeAudioData(this.irrArrayBuffer, function (audioBuffer) {
		me.convolver = audioContext.createConvolver();
		me.convolver.buffer = audioBuffer;
		me.wet.connect(me.convolver);
		me.convolver.connect(me.output);
		console.log('convolver audioBuffer',audioBuffer);
	});
	return this;
}
if (typeof module === 'object' && module.exports) {
	module.exports = WebAudioFontReverberator;
}
if (typeof window !== 'undefined') {
	window.WebAudioFontReverberator = WebAudioFontReverberator;
}

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MidiHeader {
    constructor(formatype, trackCount, ticksPerBeat) {
        this.formatType = formatype;
        this.trackCount = trackCount;
        this.ticksPerBeat = ticksPerBeat;
    }
}
class Chunk {
    constructor(newid, newlength, newdata) {
        this.id = newid;
        this.length = newlength;
        this.data = newdata;
    }
}
class Midifile {
    constructor(data) {
        this.tracks = [];
        let ticksPerBeat;
        this.stream = new StringStream(data);
        const headerChunk = Midifile.readChunk(this.stream);
        if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
            throw "Bad .mid file - header not found";
        }
        const headerStream = new StringStream(headerChunk.data);
        const formatType = headerStream.readInt16();
        const trackCount = headerStream.readInt16();
        const timeDivision = headerStream.readInt16();
        if (timeDivision & 0x8000) {
            throw "Expressing time division in SMTPE frames is not supported yet";
        }
        else {
            ticksPerBeat = timeDivision;
        }
        this.header = new MidiHeader(formatType, trackCount, ticksPerBeat);
        for (let i = 0; i < this.header.trackCount; i++) {
            this.tracks[i] = new Array();
            let trackChunk = Midifile.readChunk(this.stream);
            if (trackChunk.id !== "MTrk") {
                throw "Unexpected chunk - expected MTrk, got " + trackChunk.id;
            }
            let trackStream = new StringStream(trackChunk.data);
            while (!trackStream.eof()) {
                const event = this.readEvent(trackStream);
                this.tracks[i].push(event);
                //console.log(event);
            }
        }
    }
    static readChunk(stream) {
        const id = stream.read(4);
        const length = stream.readInt32();
        return new Chunk(id, length, stream.read(length));
    }
    readEvent(stream) {
        const event = ({});
        event.deltaTime = stream.readVarInt();
        let eventTypeByte = stream.readInt8();
        if ((eventTypeByte & 0xf0) === 0xf0) {
            /* system / meta event */
            let length;
            if (eventTypeByte === 0xff) {
                /* meta event */
                event.type = "meta";
                const subtypeByte = stream.readInt8();
                length = stream.readVarInt();
                switch (subtypeByte) {
                    case 0x00:
                        event.subtype = "sequenceNumber";
                        if (length !== 2)
                            throw "Expected length for sequenceNumber event is 2, got " + length;
                        event.number = stream.readInt16();
                        return event;
                    case 0x01:
                        event.subtype = "text";
                        event.text = stream.read(length);
                        return event;
                    case 0x02:
                        event.subtype = "copyrightNotice";
                        event.text = stream.read(length);
                        return event;
                    case 0x03:
                        event.subtype = "trackName";
                        event.text = stream.read(length);
                        return event;
                    case 0x04:
                        event.subtype = "instrumentName";
                        event.text = stream.read(length);
                        return event;
                    case 0x05:
                        event.subtype = "lyrics";
                        event.text = stream.read(length);
                        return event;
                    case 0x06:
                        event.subtype = "marker";
                        event.text = stream.read(length);
                        return event;
                    case 0x07:
                        event.subtype = "cuePoint";
                        event.text = stream.read(length);
                        return event;
                    case 0x20:
                        event.subtype = "midiChannelPrefix";
                        if (length !== 1)
                            throw "Expected length for midiChannelPrefix event is 1, got " + length;
                        event.channel = stream.readInt8();
                        return event;
                    case 0x2f:
                        event.subtype = "endOfTrack";
                        if (length !== 0)
                            throw "Expected length for endOfTrack event is 0, got " + length;
                        return event;
                    case 0x51:
                        event.subtype = "setTempo";
                        if (length !== 3)
                            throw "Expected length for setTempo event is 3, got " + length;
                        event.microsecondsPerBeat = ((stream.readInt8() << 16)
                            + (stream.readInt8() << 8)
                            + stream.readInt8());
                        return event;
                    case 0x54:
                        event.subtype = "smpteOffset";
                        if (length !== 5)
                            throw "Expected length for smpteOffset event is 5, got " + length;
                        const hourByte = stream.readInt8();
                        event.frameRate = {
                            0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30
                        }[hourByte & 0x60];
                        event.hour = hourByte & 0x1f;
                        event.min = stream.readInt8();
                        event.sec = stream.readInt8();
                        event.frame = stream.readInt8();
                        event.subframe = stream.readInt8();
                        return event;
                    case 0x58:
                        event.subtype = "timeSignature";
                        if (length !== 4)
                            throw "Expected length for timeSignature event is 4, got " + length;
                        event.numerator = stream.readInt8();
                        event.denominator = Math.pow(2, stream.readInt8());
                        event.metronome = stream.readInt8();
                        event.thirtyseconds = stream.readInt8();
                        return event;
                    case 0x59:
                        event.subtype = "keySignature";
                        if (length !== 2)
                            throw "Expected length for keySignature event is 2, got " + length;
                        event.key = stream.readInt8(true);
                        event.scale = stream.readInt8();
                        return event;
                    case 0x7f:
                        event.subtype = "sequencerSpecific";
                        event.data = stream.read(length);
                        return event;
                    default:
                        // console.log("Unrecognised meta event subtype: " + subtypeByte);
                        event.subtype = "unknown";
                        event.data = stream.read(length);
                        return event;
                }
                //event.data = stream.read(length);
                //return event;
            }
            else if (eventTypeByte === 0xf0) {
                event.type = "sysEx";
                length = stream.readVarInt();
                event.data = stream.read(length);
                return event;
            }
            else if (eventTypeByte === 0xf7) {
                event.type = "dividedSysEx";
                length = stream.readVarInt();
                event.data = stream.read(length);
                return event;
            }
            else {
                throw "Unrecognised MIDI event type byte: " + eventTypeByte;
            }
        }
        else {
            /* channel event */
            let param1;
            if ((eventTypeByte & 0x80) === 0) {
                /* running status - reuse lastEventTypeByte as the event type.
                    eventTypeByte is actually the first parameter
                */
                param1 = eventTypeByte;
                eventTypeByte = this.lastEventTypeByte;
            }
            else {
                param1 = stream.readInt8();
                this.lastEventTypeByte = eventTypeByte;
            }
            const eventType = eventTypeByte >> 4;
            event.channel = eventTypeByte & 0x0f;
            event.type = "channel";
            switch (eventType) {
                case 0x08:
                    event.subtype = "noteOff";
                    event.noteNumber = param1;
                    event.velocity = stream.readInt8();
                    return event;
                case 0x09:
                    event.noteNumber = param1;
                    event.velocity = stream.readInt8();
                    if (event.velocity === 0) {
                        event.subtype = "noteOff";
                    }
                    else {
                        event.subtype = "noteOn";
                    }
                    return event;
                case 0x0a:
                    event.subtype = "noteAftertouch";
                    event.noteNumber = param1;
                    event.amount = stream.readInt8();
                    return event;
                case 0x0b:
                    event.subtype = "controller";
                    event.controllerType = param1;
                    event.value = stream.readInt8();
                    return event;
                case 0x0c:
                    event.subtype = "programChange";
                    event.programNumber = param1;
                    return event;
                case 0x0d:
                    event.subtype = "channelAftertouch";
                    event.amount = param1;
                    return event;
                case 0x0e:
                    event.subtype = "pitchBend";
                    event.value = param1 + (stream.readInt8() << 7);
                    return event;
                default:
                    throw `Unrecognised MIDI event type: ${eventType}`;
                /*
                console.log("Unrecognised MIDI event type: " + eventType);
                stream.readInt8();
                event.subtype = 'unknown';
                return event;
                */
            }
        }
    }
}
exports.Midifile = Midifile;
/* Wrapper for accessing strings through sequential reads */
class StringStream {
    constructor(inputstring) {
        this.position = 0;
        this.str = inputstring;
    }
    read(length) {
        const result = this.str.substr(this.position, length);
        this.position += length;
        return result;
    }
    /* read a big-endian 32-bit integer */
    readInt32() {
        const result = ((this.str.charCodeAt(this.position) << 24)
            + (this.str.charCodeAt(this.position + 1) << 16)
            + (this.str.charCodeAt(this.position + 2) << 8)
            + this.str.charCodeAt(this.position + 3));
        this.position += 4;
        return result;
    }
    /* read a big-endian 16-bit integer */
    readInt16() {
        const result = ((this.str.charCodeAt(this.position) << 8)
            + this.str.charCodeAt(this.position + 1));
        this.position += 2;
        return result;
    }
    /* read an 8-bit integer */
    readInt8(signed) {
        let result = this.str.charCodeAt(this.position);
        if (signed && result > 127) {
            result -= 256;
        }
        this.position += 1;
        return result;
    }
    eof() {
        return this.position >= this.str.length;
    }
    /* read a MIDI-style variable-length integer
        (big-endian value in groups of 7 bits,
        with top bit set to signify that another byte follows)
    */
    readVarInt() {
        let result = 0;
        while (true) {
            const b = this.readInt8();
            if (b & 0x80) {
                result += (b & 0x7f);
                result <<= 7;
            }
            else {
                /* b is the last byte */
                return result + b;
            }
        }
    }
}

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelCommand;
(function (ChannelCommand) {
    /// <summary>
    /// Represents the note-off command type.
    /// </summary>
    ChannelCommand[ChannelCommand["NoteOff"] = 128] = "NoteOff";
    /// <summary>
    /// Represents the note-on command type.
    /// </summary>
    ChannelCommand[ChannelCommand["NoteOn"] = 144] = "NoteOn";
    /// <summary>
    /// Represents the poly pressure (aftertouch) command type.
    /// </summary>
    ChannelCommand[ChannelCommand["PolyPressure"] = 160] = "PolyPressure";
    /// <summary>
    /// Represents the controller command type.
    /// </summary>
    ChannelCommand[ChannelCommand["Controller"] = 176] = "Controller";
    /// <summary>
    /// Represents the program change command type.
    /// </summary>
    ChannelCommand[ChannelCommand["ProgramChange"] = 192] = "ProgramChange";
    /// <summary>
    /// Represents the channel pressure (aftertouch) command
    /// type.
    /// </summary>
    ChannelCommand[ChannelCommand["ChannelPressure"] = 208] = "ChannelPressure";
    /// <summary>
    /// Represents the pitch wheel command type.
    /// </summary>
    ChannelCommand[ChannelCommand["PitchWheel"] = 224] = "PitchWheel";
})(ChannelCommand || (ChannelCommand = {}));
exports.ChannelCommand = ChannelCommand;
var NoteNames;
(function (NoteNames) {
    NoteNames[NoteNames["C"] = 0] = "C";
    NoteNames[NoteNames["D"] = 2] = "D";
    NoteNames[NoteNames["E"] = 4] = "E";
    NoteNames[NoteNames["F"] = 5] = "F";
    NoteNames[NoteNames["G"] = 7] = "G";
    NoteNames[NoteNames["A"] = 9] = "A";
    NoteNames[NoteNames["B"] = 11] = "B";
})(NoteNames || (NoteNames = {}));
exports.NoteNames = NoteNames;
var GeneralMidiInstrument;
(function (GeneralMidiInstrument) {
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGrandPiano"] = 0] = "AcousticGrandPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["BrightAcousticPiano"] = 1] = "BrightAcousticPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGrandPiano"] = 2] = "ElectricGrandPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["HonkyTonkPiano"] = 3] = "HonkyTonkPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricPiano1"] = 4] = "ElectricPiano1";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricPiano2"] = 5] = "ElectricPiano2";
    GeneralMidiInstrument[GeneralMidiInstrument["Harpsichord"] = 6] = "Harpsichord";
    GeneralMidiInstrument[GeneralMidiInstrument["Clavinet"] = 7] = "Clavinet";
    GeneralMidiInstrument[GeneralMidiInstrument["Celesta"] = 8] = "Celesta";
    GeneralMidiInstrument[GeneralMidiInstrument["Glockenspiel"] = 9] = "Glockenspiel";
    GeneralMidiInstrument[GeneralMidiInstrument["MusicBox"] = 10] = "MusicBox";
    GeneralMidiInstrument[GeneralMidiInstrument["Vibraphone"] = 11] = "Vibraphone";
    GeneralMidiInstrument[GeneralMidiInstrument["Marimba"] = 12] = "Marimba";
    GeneralMidiInstrument[GeneralMidiInstrument["Xylophone"] = 13] = "Xylophone";
    GeneralMidiInstrument[GeneralMidiInstrument["TubularBells"] = 14] = "TubularBells";
    GeneralMidiInstrument[GeneralMidiInstrument["Dulcimer"] = 15] = "Dulcimer";
    GeneralMidiInstrument[GeneralMidiInstrument["DrawbarOrgan"] = 16] = "DrawbarOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["PercussiveOrgan"] = 17] = "PercussiveOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["RockOrgan"] = 18] = "RockOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["ChurchOrgan"] = 19] = "ChurchOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["ReedOrgan"] = 20] = "ReedOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["Accordion"] = 21] = "Accordion";
    GeneralMidiInstrument[GeneralMidiInstrument["Harmonica"] = 22] = "Harmonica";
    GeneralMidiInstrument[GeneralMidiInstrument["TangoAccordion"] = 23] = "TangoAccordion";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGuitarNylon"] = 24] = "AcousticGuitarNylon";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGuitarSteel"] = 25] = "AcousticGuitarSteel";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarJazz"] = 26] = "ElectricGuitarJazz";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarClean"] = 27] = "ElectricGuitarClean";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarMuted"] = 28] = "ElectricGuitarMuted";
    GeneralMidiInstrument[GeneralMidiInstrument["OverdrivenGuitar"] = 29] = "OverdrivenGuitar";
    GeneralMidiInstrument[GeneralMidiInstrument["DistortionGuitar"] = 30] = "DistortionGuitar";
    GeneralMidiInstrument[GeneralMidiInstrument["GuitarHarmonics"] = 31] = "GuitarHarmonics";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticBass"] = 32] = "AcousticBass";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricBassFinger"] = 33] = "ElectricBassFinger";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricBassPick"] = 34] = "ElectricBassPick";
    GeneralMidiInstrument[GeneralMidiInstrument["FretlessBass"] = 35] = "FretlessBass";
    GeneralMidiInstrument[GeneralMidiInstrument["SlapBass1"] = 36] = "SlapBass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SlapBass2"] = 37] = "SlapBass2";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBass1"] = 38] = "SynthBass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBass2"] = 39] = "SynthBass2";
    GeneralMidiInstrument[GeneralMidiInstrument["Violin"] = 40] = "Violin";
    GeneralMidiInstrument[GeneralMidiInstrument["Viola"] = 41] = "Viola";
    GeneralMidiInstrument[GeneralMidiInstrument["Cello"] = 42] = "Cello";
    GeneralMidiInstrument[GeneralMidiInstrument["Contrabass"] = 43] = "Contrabass";
    GeneralMidiInstrument[GeneralMidiInstrument["TremoloStrings"] = 44] = "TremoloStrings";
    GeneralMidiInstrument[GeneralMidiInstrument["PizzicatoStrings"] = 45] = "PizzicatoStrings";
    GeneralMidiInstrument[GeneralMidiInstrument["OrchestralHarp"] = 46] = "OrchestralHarp";
    GeneralMidiInstrument[GeneralMidiInstrument["Timpani"] = 47] = "Timpani";
    GeneralMidiInstrument[GeneralMidiInstrument["StringEnsemble1"] = 48] = "StringEnsemble1";
    GeneralMidiInstrument[GeneralMidiInstrument["StringEnsemble2"] = 49] = "StringEnsemble2";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthStrings1"] = 50] = "SynthStrings1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthStrings2"] = 51] = "SynthStrings2";
    GeneralMidiInstrument[GeneralMidiInstrument["ChoirAahs"] = 52] = "ChoirAahs";
    GeneralMidiInstrument[GeneralMidiInstrument["VoiceOohs"] = 53] = "VoiceOohs";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthVoice"] = 54] = "SynthVoice";
    GeneralMidiInstrument[GeneralMidiInstrument["OrchestraHit"] = 55] = "OrchestraHit";
    GeneralMidiInstrument[GeneralMidiInstrument["Trumpet"] = 56] = "Trumpet";
    GeneralMidiInstrument[GeneralMidiInstrument["Trombone"] = 57] = "Trombone";
    GeneralMidiInstrument[GeneralMidiInstrument["Tuba"] = 58] = "Tuba";
    GeneralMidiInstrument[GeneralMidiInstrument["MutedTrumpet"] = 59] = "MutedTrumpet";
    GeneralMidiInstrument[GeneralMidiInstrument["FrenchHorn"] = 60] = "FrenchHorn";
    GeneralMidiInstrument[GeneralMidiInstrument["BrassSection"] = 61] = "BrassSection";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBrass1"] = 62] = "SynthBrass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBrass2"] = 63] = "SynthBrass2";
    GeneralMidiInstrument[GeneralMidiInstrument["SopranoSax"] = 64] = "SopranoSax";
    GeneralMidiInstrument[GeneralMidiInstrument["AltoSax"] = 65] = "AltoSax";
    GeneralMidiInstrument[GeneralMidiInstrument["TenorSax"] = 66] = "TenorSax";
    GeneralMidiInstrument[GeneralMidiInstrument["BaritoneSax"] = 67] = "BaritoneSax";
    GeneralMidiInstrument[GeneralMidiInstrument["Oboe"] = 68] = "Oboe";
    GeneralMidiInstrument[GeneralMidiInstrument["EnglishHorn"] = 69] = "EnglishHorn";
    GeneralMidiInstrument[GeneralMidiInstrument["Bassoon"] = 70] = "Bassoon";
    GeneralMidiInstrument[GeneralMidiInstrument["Clarinet"] = 71] = "Clarinet";
    GeneralMidiInstrument[GeneralMidiInstrument["Piccolo"] = 72] = "Piccolo";
    GeneralMidiInstrument[GeneralMidiInstrument["Flute"] = 73] = "Flute";
    GeneralMidiInstrument[GeneralMidiInstrument["Recorder"] = 74] = "Recorder";
    GeneralMidiInstrument[GeneralMidiInstrument["PanFlute"] = 75] = "PanFlute";
    GeneralMidiInstrument[GeneralMidiInstrument["BlownBottle"] = 76] = "BlownBottle";
    GeneralMidiInstrument[GeneralMidiInstrument["Shakuhachi"] = 77] = "Shakuhachi";
    GeneralMidiInstrument[GeneralMidiInstrument["Whistle"] = 78] = "Whistle";
    GeneralMidiInstrument[GeneralMidiInstrument["Ocarina"] = 79] = "Ocarina";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead1Square"] = 80] = "Lead1Square";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead2Sawtooth"] = 81] = "Lead2Sawtooth";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead3Calliope"] = 82] = "Lead3Calliope";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead4Chiff"] = 83] = "Lead4Chiff";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead5Charang"] = 84] = "Lead5Charang";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead6Voice"] = 85] = "Lead6Voice";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead7Fifths"] = 86] = "Lead7Fifths";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead8BassAndLead"] = 87] = "Lead8BassAndLead";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad1NewAge"] = 88] = "Pad1NewAge";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad2Warm"] = 89] = "Pad2Warm";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad3Polysynth"] = 90] = "Pad3Polysynth";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad4Choir"] = 91] = "Pad4Choir";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad5Bowed"] = 92] = "Pad5Bowed";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad6Metallic"] = 93] = "Pad6Metallic";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad7Halo"] = 94] = "Pad7Halo";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad8Sweep"] = 95] = "Pad8Sweep";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx1Rain"] = 96] = "Fx1Rain";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx2Soundtrack"] = 97] = "Fx2Soundtrack";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx3Crystal"] = 98] = "Fx3Crystal";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx4Atmosphere"] = 99] = "Fx4Atmosphere";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx5Brightness"] = 100] = "Fx5Brightness";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx6Goblins"] = 101] = "Fx6Goblins";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx7Echoes"] = 102] = "Fx7Echoes";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx8SciFi"] = 103] = "Fx8SciFi";
    GeneralMidiInstrument[GeneralMidiInstrument["Sitar"] = 104] = "Sitar";
    GeneralMidiInstrument[GeneralMidiInstrument["Banjo"] = 105] = "Banjo";
    GeneralMidiInstrument[GeneralMidiInstrument["Shamisen"] = 106] = "Shamisen";
    GeneralMidiInstrument[GeneralMidiInstrument["Koto"] = 107] = "Koto";
    GeneralMidiInstrument[GeneralMidiInstrument["Kalimba"] = 108] = "Kalimba";
    GeneralMidiInstrument[GeneralMidiInstrument["BagPipe"] = 109] = "BagPipe";
    GeneralMidiInstrument[GeneralMidiInstrument["Fiddle"] = 110] = "Fiddle";
    GeneralMidiInstrument[GeneralMidiInstrument["Shanai"] = 111] = "Shanai";
    GeneralMidiInstrument[GeneralMidiInstrument["TinkleBell"] = 112] = "TinkleBell";
    GeneralMidiInstrument[GeneralMidiInstrument["Agogo"] = 113] = "Agogo";
    GeneralMidiInstrument[GeneralMidiInstrument["SteelDrums"] = 114] = "SteelDrums";
    GeneralMidiInstrument[GeneralMidiInstrument["Woodblock"] = 115] = "Woodblock";
    GeneralMidiInstrument[GeneralMidiInstrument["TaikoDrum"] = 116] = "TaikoDrum";
    GeneralMidiInstrument[GeneralMidiInstrument["MelodicTom"] = 117] = "MelodicTom";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthDrum"] = 118] = "SynthDrum";
    GeneralMidiInstrument[GeneralMidiInstrument["ReverseCymbal"] = 119] = "ReverseCymbal";
    GeneralMidiInstrument[GeneralMidiInstrument["GuitarFretNoise"] = 120] = "GuitarFretNoise";
    GeneralMidiInstrument[GeneralMidiInstrument["BreathNoise"] = 121] = "BreathNoise";
    GeneralMidiInstrument[GeneralMidiInstrument["Seashore"] = 122] = "Seashore";
    GeneralMidiInstrument[GeneralMidiInstrument["BirdTweet"] = 123] = "BirdTweet";
    GeneralMidiInstrument[GeneralMidiInstrument["TelephoneRing"] = 124] = "TelephoneRing";
    GeneralMidiInstrument[GeneralMidiInstrument["Helicopter"] = 125] = "Helicopter";
    GeneralMidiInstrument[GeneralMidiInstrument["Applause"] = 126] = "Applause";
    GeneralMidiInstrument[GeneralMidiInstrument["Gunshot"] = 127] = "Gunshot";
})(GeneralMidiInstrument || (GeneralMidiInstrument = {}));
exports.GeneralMidiInstrument = GeneralMidiInstrument;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Channel"] = 0] = "Channel";
    MessageType[MessageType["SystemExclusive"] = 1] = "SystemExclusive";
    MessageType[MessageType["SystemCommon"] = 2] = "SystemCommon";
    MessageType[MessageType["SystemRealtime"] = 3] = "SystemRealtime";
    MessageType[MessageType["Meta"] = 4] = "Meta";
    MessageType[MessageType["Short"] = 5] = "Short";
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;
/// <summary>
/// Defines constants for controller types.
/// </summary>
var ControllerType;
(function (ControllerType) {
    /// <summary>
    /// The Bank Select coarse.
    /// </summary>
    ControllerType[ControllerType["BankSelect"] = 0] = "BankSelect";
    /// <summary>
    /// The Modulation Wheel coarse.
    /// </summary>
    ControllerType[ControllerType["ModulationWheel"] = 1] = "ModulationWheel";
    /// <summary>
    /// The Breath Control coarse.
    /// </summary>
    ControllerType[ControllerType["BreathControl"] = 2] = "BreathControl";
    /// <summary>
    /// The Foot Pedal coarse.
    /// </summary>
    ControllerType[ControllerType["FootPedal"] = 4] = "FootPedal";
    /// <summary>
    /// The Portamento Time coarse.
    /// </summary>
    ControllerType[ControllerType["PortamentoTime"] = 5] = "PortamentoTime";
    /// <summary>
    /// The Data Entry Slider coarse.
    /// </summary>
    ControllerType[ControllerType["DataEntrySlider"] = 6] = "DataEntrySlider";
    /// <summary>
    /// The Volume coarse.
    /// </summary>
    ControllerType[ControllerType["Volume"] = 7] = "Volume";
    /// <summary>
    /// The Balance coarse.
    /// </summary>
    ControllerType[ControllerType["Balance"] = 8] = "Balance";
    /// <summary>
    /// The Pan position coarse.
    /// </summary>
    ControllerType[ControllerType["Pan"] = 10] = "Pan";
    /// <summary>
    /// The Expression coarse.
    /// </summary>
    ControllerType[ControllerType["Expression"] = 11] = "Expression";
    /// <summary>
    /// The Effect Control 1 coarse.
    /// </summary>
    ControllerType[ControllerType["EffectControl1"] = 12] = "EffectControl1";
    /// <summary>
    /// The Effect Control 2 coarse.
    /// </summary>
    ControllerType[ControllerType["EffectControl2"] = 13] = "EffectControl2";
    /// <summary>
    /// The General Puprose Slider 1
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider1"] = 16] = "GeneralPurposeSlider1";
    /// <summary>
    /// The General Puprose Slider 2
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider2"] = 17] = "GeneralPurposeSlider2";
    /// <summary>
    /// The General Puprose Slider 3
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider3"] = 18] = "GeneralPurposeSlider3";
    /// <summary>
    /// The General Puprose Slider 4
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider4"] = 19] = "GeneralPurposeSlider4";
    /// <summary>
    /// The Bank Select fine.
    /// </summary>
    ControllerType[ControllerType["BankSelectFine"] = 32] = "BankSelectFine";
    /// <summary>
    /// The Modulation Wheel fine.
    /// </summary>
    ControllerType[ControllerType["ModulationWheelFine"] = 33] = "ModulationWheelFine";
    /// <summary>
    /// The Breath Control fine.
    /// </summary>
    ControllerType[ControllerType["BreathControlFine"] = 34] = "BreathControlFine";
    /// <summary>
    /// The Foot Pedal fine.
    /// </summary>
    ControllerType[ControllerType["FootPedalFine"] = 36] = "FootPedalFine";
    /// <summary>
    /// The Portamento Time fine.
    /// </summary>
    ControllerType[ControllerType["PortamentoTimeFine"] = 37] = "PortamentoTimeFine";
    /// <summary>
    /// The Data Entry Slider fine.
    /// </summary>
    ControllerType[ControllerType["DataEntrySliderFine"] = 38] = "DataEntrySliderFine";
    /// <summary>
    /// The Volume fine.
    /// </summary>
    ControllerType[ControllerType["VolumeFine"] = 39] = "VolumeFine";
    /// <summary>
    /// The Balance fine.
    /// </summary>
    ControllerType[ControllerType["BalanceFine"] = 40] = "BalanceFine";
    /// <summary>
    /// The Pan position fine.
    /// </summary>
    ControllerType[ControllerType["PanFine"] = 42] = "PanFine";
    /// <summary>
    /// The Expression fine.
    /// </summary>
    ControllerType[ControllerType["ExpressionFine"] = 43] = "ExpressionFine";
    /// <summary>
    /// The Effect Control 1 fine.
    /// </summary>
    ControllerType[ControllerType["EffectControl1Fine"] = 44] = "EffectControl1Fine";
    /// <summary>
    /// The Effect Control 2 fine.
    /// </summary>
    ControllerType[ControllerType["EffectControl2Fine"] = 45] = "EffectControl2Fine";
    /// <summary>
    /// The Hold Pedal 1.
    /// </summary>
    ControllerType[ControllerType["HoldPedal1"] = 64] = "HoldPedal1";
    /// <summary>
    /// The Portamento.
    /// </summary>
    ControllerType[ControllerType["Portamento"] = 65] = "Portamento";
    /// <summary>
    /// The Sustenuto Pedal.
    /// </summary>
    ControllerType[ControllerType["SustenutoPedal"] = 66] = "SustenutoPedal";
    /// <summary>
    /// The Soft Pedal.
    /// </summary>
    ControllerType[ControllerType["SoftPedal"] = 67] = "SoftPedal";
    /// <summary>
    /// The Legato Pedal.
    /// </summary>
    ControllerType[ControllerType["LegatoPedal"] = 68] = "LegatoPedal";
    /// <summary>
    /// The Hold Pedal 2.
    /// </summary>
    ControllerType[ControllerType["HoldPedal2"] = 69] = "HoldPedal2";
    /// <summary>
    /// The Sound Variation.
    /// </summary>
    ControllerType[ControllerType["SoundVariation"] = 70] = "SoundVariation";
    /// <summary>
    /// The Sound Timbre.
    /// </summary>
    ControllerType[ControllerType["SoundTimbre"] = 71] = "SoundTimbre";
    /// <summary>
    /// The Sound Release Time.
    /// </summary>
    ControllerType[ControllerType["SoundReleaseTime"] = 72] = "SoundReleaseTime";
    /// <summary>
    /// The Sound Attack Time.
    /// </summary>
    ControllerType[ControllerType["SoundAttackTime"] = 73] = "SoundAttackTime";
    /// <summary>
    /// The Sound Brightness.
    /// </summary>
    ControllerType[ControllerType["SoundBrightness"] = 74] = "SoundBrightness";
    /// <summary>
    /// The Sound Control 6.
    /// </summary>
    ControllerType[ControllerType["SoundControl6"] = 75] = "SoundControl6";
    /// <summary>
    /// The Sound Control 7.
    /// </summary>
    ControllerType[ControllerType["SoundControl7"] = 76] = "SoundControl7";
    /// <summary>
    /// The Sound Control 8.
    /// </summary>
    ControllerType[ControllerType["SoundControl8"] = 77] = "SoundControl8";
    /// <summary>
    /// The Sound Control 9.
    /// </summary>
    ControllerType[ControllerType["SoundControl9"] = 78] = "SoundControl9";
    /// <summary>
    /// The Sound Control 10.
    /// </summary>
    ControllerType[ControllerType["SoundControl10"] = 79] = "SoundControl10";
    /// <summary>
    /// The General Purpose Button 1.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton1"] = 80] = "GeneralPurposeButton1";
    /// <summary>
    /// The General Purpose Button 2.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton2"] = 81] = "GeneralPurposeButton2";
    /// <summary>
    /// The General Purpose Button 3.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton3"] = 82] = "GeneralPurposeButton3";
    /// <summary>
    /// The General Purpose Button 4.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton4"] = 83] = "GeneralPurposeButton4";
    /// <summary>
    /// The Effects Level.
    /// </summary>
    ControllerType[ControllerType["EffectsLevel"] = 91] = "EffectsLevel";
    /// <summary>
    /// The Tremelo Level.
    /// </summary>
    ControllerType[ControllerType["TremeloLevel"] = 92] = "TremeloLevel";
    /// <summary>
    /// The Chorus Level.
    /// </summary>
    ControllerType[ControllerType["ChorusLevel"] = 93] = "ChorusLevel";
    /// <summary>
    /// The Celeste Level.
    /// </summary>
    ControllerType[ControllerType["CelesteLevel"] = 94] = "CelesteLevel";
    /// <summary>
    /// The Phaser Level.
    /// </summary>
    ControllerType[ControllerType["PhaserLevel"] = 95] = "PhaserLevel";
    /// <summary>
    /// The Data Button Increment.
    /// </summary>
    ControllerType[ControllerType["DataButtonIncrement"] = 96] = "DataButtonIncrement";
    /// <summary>
    /// The Data Button Decrement.
    /// </summary>
    ControllerType[ControllerType["DataButtonDecrement"] = 97] = "DataButtonDecrement";
    /// <summary>
    /// The NonRegistered Parameter Fine.
    /// </summary>
    ControllerType[ControllerType["NonRegisteredParameterFine"] = 98] = "NonRegisteredParameterFine";
    /// <summary>
    /// The NonRegistered Parameter Coarse.
    /// </summary>
    ControllerType[ControllerType["NonRegisteredParameterCoarse"] = 99] = "NonRegisteredParameterCoarse";
    /// <summary>
    /// The Registered Parameter Fine.
    /// </summary>
    ControllerType[ControllerType["RegisteredParameterFine"] = 100] = "RegisteredParameterFine";
    /// <summary>
    /// The Registered Parameter Coarse.
    /// </summary>
    ControllerType[ControllerType["RegisteredParameterCoarse"] = 101] = "RegisteredParameterCoarse";
    /// <summary>
    /// The All Sound Off.
    /// </summary>
    ControllerType[ControllerType["AllSoundOff"] = 120] = "AllSoundOff";
    /// <summary>
    /// The All Controllers Off.
    /// </summary>
    ControllerType[ControllerType["AllControllersOff"] = 121] = "AllControllersOff";
    /// <summary>
    /// The Local Keyboard.
    /// </summary>
    ControllerType[ControllerType["LocalKeyboard"] = 122] = "LocalKeyboard";
    /// <summary>
    /// The All Notes Off.
    /// </summary>
    ControllerType[ControllerType["AllNotesOff"] = 123] = "AllNotesOff";
    /// <summary>
    /// The Omni Mode Off.
    /// </summary>
    ControllerType[ControllerType["OmniModeOff"] = 124] = "OmniModeOff";
    /// <summary>
    /// The Omni Mode On.
    /// </summary>
    ControllerType[ControllerType["OmniModeOn"] = 125] = "OmniModeOn";
    /// <summary>
    /// The Mono Operation.
    /// </summary>
    ControllerType[ControllerType["MonoOperation"] = 126] = "MonoOperation";
    /// <summary>
    /// The Poly Operation.
    /// </summary>
    ControllerType[ControllerType["PolyOperation"] = 127] = "PolyOperation";
})(ControllerType || (ControllerType = {}));
exports.ControllerType = ControllerType;
/// <summary>
/// Represents MetaMessage types.
/// </summary>
var MetaType;
(function (MetaType) {
    /// <summary>
    /// Represents sequencer number type.
    /// </summary>
    MetaType[MetaType["SequenceNumber"] = 0] = "SequenceNumber";
    /// <summary>
    /// Represents the text type.
    /// </summary>
    MetaType[MetaType["Text"] = 1] = "Text";
    /// <summary>
    /// Represents the copyright type.
    /// </summary>
    MetaType[MetaType["Copyright"] = 2] = "Copyright";
    /// <summary>
    /// Represents the track name type.
    /// </summary>
    MetaType[MetaType["TrackName"] = 3] = "TrackName";
    /// <summary>
    /// Represents the instrument name type.
    /// </summary>
    MetaType[MetaType["InstrumentName"] = 4] = "InstrumentName";
    /// <summary>
    /// Represents the lyric type.
    /// </summary>
    MetaType[MetaType["Lyric"] = 5] = "Lyric";
    /// <summary>
    /// Represents the marker type.
    /// </summary>
    MetaType[MetaType["Marker"] = 6] = "Marker";
    /// <summary>
    /// Represents the cue point type.
    /// </summary>
    MetaType[MetaType["CuePoint"] = 7] = "CuePoint";
    /// <summary>
    /// Represents the program name type.
    /// </summary>
    MetaType[MetaType["ProgramName"] = 8] = "ProgramName";
    /// <summary>
    /// Represents the device name type.
    /// </summary>
    MetaType[MetaType["DeviceName"] = 9] = "DeviceName";
    /// <summary>
    /// Represents then end of track type.
    /// </summary>
    MetaType[MetaType["EndOfTrack"] = 47] = "EndOfTrack";
    /// <summary>
    /// Represents the tempo type.
    /// </summary>
    MetaType[MetaType["Tempo"] = 81] = "Tempo";
    /// <summary>
    /// Represents the Smpte offset type.
    /// </summary>
    MetaType[MetaType["SmpteOffset"] = 84] = "SmpteOffset";
    /// <summary>
    /// Represents the time signature type.
    /// </summary>
    MetaType[MetaType["TimeSignature"] = 88] = "TimeSignature";
    /// <summary>
    /// Represents the key signature type.
    /// </summary>
    MetaType[MetaType["KeySignature"] = 89] = "KeySignature";
    /// <summary>
    /// Represents the proprietary event type.
    /// </summary>
    MetaType[MetaType["ProprietaryEvent"] = 127] = "ProprietaryEvent";
})(MetaType || (MetaType = {}));
exports.MetaType = MetaType;

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processing_1 = require("./processing");
const MidiFile_1 = require("./MidiFile");
const standardized_audio_context_1 = require("standardized-audio-context");
let WebAudioFontPlayer = require("webaudiofont");
window.onload = () => {
    document.getElementById("file").addEventListener("change", readFile, false);
    let midiplayer = new MidiPlayer2();
    midiplayer.setupWindowVar();
    function readFile(evt) {
        let files = evt.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            midiplayer.realLoader(reader.result);
            processing_1.parsethefile(reader.result);
        });
        reader.readAsBinaryString(file);
    }
};
class MidiPlayer2 {
    constructor() {
        this.audioContext = null;
        this.player = null;
        this.reverberator = null;
        this.songStart = 0;
        this.input = null;
        this.currentSongTime = 0;
        this.nextStepTime = 0;
        this.nextPositionTime = 0;
        this.loadedsong = null;
        this.stopped = true;
    }
    setupWindowVar() {
        window["go"] = this.go;
    }
    go() {
        document.getElementById('tmr').innerHTML = 'starting...';
        try {
            this.startPlay(this.loadedsong);
            document.getElementById('tmr').innerHTML = 'playing...';
        }
        catch (expt) {
            document.getElementById('tmr').innerHTML = 'error ' + expt;
        }
    }
    startPlay(song) {
        this.currentSongTime = 0;
        this.songStart = this.audioContext.currentTime;
        this.nextStepTime = this.audioContext.currentTime;
        const stepDuration = 44 / 1000;
        this.tick(song, stepDuration);
    }
    tick(song, stepDuration) {
        let mythis = this;
        if (this.audioContext.currentTime > this.nextStepTime - stepDuration) {
            MidiPlayer2.sendNotes(song, this.songStart, this.currentSongTime, this.currentSongTime + stepDuration, this.audioContext, this.input, this.player);
            this.currentSongTime = this.currentSongTime + stepDuration;
            this.nextStepTime = this.nextStepTime + stepDuration;
            if (this.currentSongTime > song.duration) {
                this.currentSongTime = this.currentSongTime - song.duration;
                MidiPlayer2.sendNotes(song, this.songStart, 0, this.currentSongTime, this.audioContext, this.input, this.player);
                this.songStart = this.songStart + song.duration;
            }
        }
        if (this.nextPositionTime < this.audioContext.currentTime) {
            const o = document.getElementById('position');
            o.value = (100 * this.currentSongTime / song.duration).toString();
            document.getElementById('tmr').innerHTML = '' + Math.round(100 * this.currentSongTime / song.duration) + '%';
            this.nextPositionTime = this.audioContext.currentTime + 3;
        }
        if (!this.stopped) {
            window.requestAnimationFrame(function (t) {
                mythis.tick(song, stepDuration);
            });
        }
    }
    static sendNotes(song, songStart, start, end, audioContext, input, player) {
        for (let t = 0; t < song.tracks.length; t++) {
            const track = song.tracks[t];
            for (let i = 0; i < track.notes.length; i++) {
                if (track.notes[i].when >= start && track.notes[i].when < end) {
                    let when = songStart + track.notes[i].when;
                    let duration = track.notes[i].duration;
                    if (duration > 3) {
                        duration = 3;
                    }
                    let instr = track.info.variable;
                    let v = track.volume / 7;
                    player.queueWaveTable(audioContext, input, window[instr], when, track.notes[i].pitch, duration, v, track.notes[i].slides);
                }
            }
        }
        for (let b = 0; b < song.beats.length; b++) {
            const beat = song.beats[b];
            for (let i = 0; i < beat.notes.length; i++) {
                if (beat.notes[i].when >= start && beat.notes[i].when < end) {
                    let when = songStart + beat.notes[i].when;
                    let duration = 1.5;
                    let instr = beat.info.variable;
                    let v = beat.volume / 2;
                    player.queueWaveTable(audioContext, input, window[instr], when, beat.n, duration, v);
                }
            }
        }
    }
    startLoad(song) {
        console.log(song);
        const AudioContextFunc = standardized_audio_context_1.AudioContext;
        this.audioContext = new AudioContextFunc();
        this.player = new WebAudioFontPlayer();
        this.reverberator = this.player.createReverberator(this.audioContext);
        this.reverberator.output.connect(this.audioContext.destination);
        this.input = this.reverberator.input;
        for (let i = 0; i < song.tracks.length; i++) {
            let nn = this.player.loader.findInstrument(song.tracks[i].program);
            let info = this.player.loader.instrumentInfo(nn);
            song.tracks[i].info = info;
            song.tracks[i].id = nn;
            this.player.loader.startLoad(this.audioContext, info.url, info.variable);
        }
        for (let i = 0; i < song.beats.length; i++) {
            let nn = this.player.loader.findDrum(song.beats[i].n);
            let info = this.player.loader.drumInfo(nn);
            song.beats[i].info = info;
            song.beats[i].id = nn;
            this.player.loader.startLoad(this.audioContext, info.url, info.variable);
        }
        let mythis = this;
        this.player.loader.waitLoad(function () {
            console.log('buildControls');
            mythis.buildControls(song);
        });
    }
    buildControls(song) {
        let mythis = this;
        this.audioContext.resume();
        const o = document.getElementById('cntls');
        let html = `<h2 id="wrng">Refresh browser page to load another song</h2>`;
        html = `${html}<p id="tmr"><button id="playButton">Play</button></p>`;
        html = `${html}<p><input id="position" type="range" min="0" max="100" value="0" step="1" /></p>`;
        html = html + '<h3>Channels</h3>';
        for (let i = 0; i < song.tracks.length; i++) {
            let v = 100 * song.tracks[i].volume;
            html = html + '<p>' + this.chooserIns(song.tracks[i].id, i) + '<input id="channel' + i + '" type="range" min="0" max="100" value="' + v + '" step="1" /></p>';
        }
        html = html + '<h3>Drums</h3>';
        for (let i = 0; i < song.beats.length; i++) {
            let v = 100 * song.beats[i].volume;
            html = html + '<p>' + this.chooserDrum(song.beats[i].id, i) + '<input id="drum' + i + '" type="range" min="0" max="100" value="' + v + '" step="1" /></p>';
        }
        o.innerHTML = html;
        console.log('Loaded');
        const pos = document.getElementById('position');
        pos.oninput = function (e) {
            if (mythis.loadedsong) {
                mythis.player.cancelQueue(mythis.audioContext);
                const next = song.duration * parseInt(pos.value) / 100;
                mythis.songStart = mythis.songStart - (next - mythis.currentSongTime);
                mythis.currentSongTime = next;
            }
        };
        document.getElementById("playButton").addEventListener("click", function () {
            mythis.go();
        });
        console.log('Tracks');
        for (let i = 0; i < song.tracks.length; i++) {
            this.setVolumeAction(i, song);
        }
        console.log('Drums');
        for (let i = 0; i < song.beats.length; i++) {
            this.setDrVolAction(i, song);
        }
        this.loadedsong = song;
    }
    setVolumeAction(i, song) {
        let mythis = this;
        const vlm = document.getElementById('channel' + i);
        vlm.oninput = function (e) {
            mythis.player.cancelQueue(mythis.audioContext);
            let v = parseInt(vlm.value) / 100;
            if (v < 0.000001) {
                v = 0.000001;
            }
            song.tracks[i].volume = v;
        };
        const sl = document.getElementById('selins' + i);
        sl.onchange = function (e) {
            const nn = sl.value;
            const info = mythis.player.loader.instrumentInfo(nn);
            mythis.player.loader.startLoad(mythis.audioContext, info.url, info.variable);
            mythis.player.loader.waitLoad(function () {
                console.log('loaded');
                song.tracks[i].info = info;
                song.tracks[i].id = nn;
            });
        };
    }
    setDrVolAction(i, song) {
        let mythis = this;
        const vlm = document.getElementById('drum' + i);
        vlm.oninput = function (e) {
            mythis.player.cancelQueue(mythis.audioContext);
            let v = parseInt(vlm.value) / 100;
            if (v < 0.000001) {
                v = 0.000001;
            }
            song.beats[i].volume = v;
        };
        const sl = document.getElementById('seldrm' + i);
        sl.onchange = function (e) {
            const nn = sl.value;
            const info = mythis.player.loader.drumInfo(nn);
            mythis.player.loader.startLoad(mythis.audioContext, info.url, info.variable);
            mythis.player.loader.waitLoad(function () {
                console.log('loaded');
                song.beats[i].info = info;
                song.beats[i].id = nn;
            });
        };
    }
    chooserIns(n, track) {
        let html = `<select id="selins${track}">`;
        for (let i = 0; i < this.player.loader.instrumentKeys().length; i++) {
            let sel = '';
            if (i == n) {
                sel = ' selected';
            }
            html = `${html}<option value="${i}" ${sel}>${i}: ${this.player.loader.instrumentInfo(i).title}</option>`;
        }
        html = html + '</select>';
        return html;
    }
    chooserDrum(n, beat) {
        let html = '<select id="seldrm' + beat + '">';
        for (let i = 0; i < this.player.loader.drumKeys().length; i++) {
            let sel = '';
            if (i == n) {
                sel = ' selected';
            }
            html = html + '<option value="' + i + '"' + sel + '>' + i + ': ' + this.player.loader.drumInfo(i).title + '</option>';
        }
        html = html + '</select>';
        return html;
    }
    handleFileSelect(event) {
        let mythis = this;
        console.log(event);
        const file = event.target.files[0];
        console.log(file);
        const fileReader = new FileReader();
        fileReader.onload = function (progressEvent) {
            console.log(progressEvent);
            const arrayBuffer = progressEvent.target.result;
            console.log(arrayBuffer);
            const midiFile = new MidiFile_1.Midifile(arrayBuffer);
            mythis.startLoad(midiFile);
        };
        fileReader.readAsArrayBuffer(file);
    }
    realLoader(MidiData) {
        this.stopped = true;
        let mythis = this;
        setTimeout(function () {
            if (mythis.player != null) {
                mythis.audioContext = null;
                mythis.player = null;
                mythis.reverberator = null;
                mythis.songStart = 0;
                mythis.input = null;
                mythis.currentSongTime = 0;
                mythis.nextStepTime = 0;
                mythis.nextPositionTime = 0;
                mythis.loadedsong = null;
                // @ts-ignore
                document.getElementById('cntls').children.remove();
            }
            setTimeout(() => {
                let midiFile = new MIDIFile(MidiPlayer2.str2ab(MidiData));
                let song = midiFile.parseSong();
                mythis.stopped = false;
                mythis.startLoad(song);
            }, 2000);
        }, 1000);
    }
    static str2ab(str) {
        let buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        let bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
}

},{"./MidiFile":28,"./processing":32,"standardized-audio-context":22,"webaudiofont":26}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using System;
// using System.Collections.Generic;
// using System.ComponentModel;
// using System.Data;
// using System.Drawing;
// using System.Linq;
// using System.Text;
// using System.Windows.Forms;
//
// using Sanford.Multimedia;
// using Sanford.Multimedia.Midi;
const MidiFile_1 = require("./MidiFile");
const utilityfunctions_1 = require("./utilityfunctions");
const PIanoEnums_1 = require("./PIanoEnums");
class PNote {
    constructor(length, note) {
        this.Length = length;
        this.Note = note;
    }
}
PNote.Default = new PNote(0, "");
class Form1_port {
    constructor(InterMaxChars, InterMaxLines) {
        this.MaxCharsPerLine = InterMaxChars;
        this.MaxLines = InterMaxLines;
    }
    importMIDIToolStripMenuItem_Click_Port(midiString) {
        this.notes = [];
        let curNote = PNote.Default;
        // first, we pull midi data
        let RealS = new MidiFile_1.Midifile(midiString);
        this.tempo = utilityfunctions_1.GetTempo(RealS);
        // quickly see if there's a piano track first
        // and get the tempo as well
        let Onetrack = RealS.tracks.filter(function (track) {
            return track.find(function (event) {
                return event.subtype == "noteOn";
            });
        })[0];
        //sort by delta time
        // Onetrack = Onetrack.sort(function (left: IEvent, right: IEvent) {
        //     if (left.deltaTime < right.deltaTime) return -1;
        //     if (left.deltaTime > right.deltaTime) return 1;
        //     return 0;
        // });
        //set all to first Channel
        //Onetrack = Onetrack.map(function (value: IEvent) {
        //    value.channel = 1;
        //    return value;
        //);
        //filter to note on events
        //Onetrack = Onetrack.filter(element => element.subtype == "noteOn");
        //Onetrack = this.RemoveDuplicateNotes(Onetrack);
        //generate the pnoteList
        let delta = 0;
        for (let note of Onetrack) {
            delta += note.deltaTime;
            if (note.subtype === "noteOn") {
                if (curNote.Note != "") {
                    curNote.Length = (delta / 1000);
                    delta = 0;
                    let newNote = Object.assign({}, curNote);
                    this.notes.push(newNote);
                }
                curNote.Note = Form1_port.note2Piano(note.noteNumber);
            }
        }
        this.PerformNoteCompression();
        this.NearlyDoneBits();
        this.GenerateOutput();
    }
    PerformNoteCompression() {
        // compress redundant accidentals/octaves
        let notemods = [];
        let noteocts = [];
        for (let i = 0; i < 7; i++) {
            notemods[i] = 'n';
            noteocts[i] = 3;
        }
        for (let i = 0; i < this.notes.length; i++) {
            let noteStr = this.notes[i].Note;
            let cur_note = noteStr.charCodeAt(0) - 0x41;
            let mod = noteStr[1];
            let oct = parseInt(noteStr.substring(2));
            noteStr = noteStr.substring(0, 1);
            if (mod != notemods[cur_note]) {
                noteStr += mod;
                notemods[cur_note] = mod;
            }
            if (oct != noteocts[cur_note]) {
                noteStr += oct.toString();
                noteocts[cur_note] = oct;
            }
            this.notes[i] = new PNote(this.notes[i].Length, noteStr);
        }
    }
    static note2Piano(n) {
        let arg;
        let octave;
        let name = PIanoEnums_1.NoteNames[(n % 12)];
        if (name == null) {
            name = PIanoEnums_1.NoteNames[((n + 1) % 12)];
            arg = "b";
        }
        else {
            arg = "n";
        }
        octave = Math.floor((n / 12 - 1)).toString();
        return name + arg + octave;
    }
    RemoveDuplicateNotes(NoteArray) {
        function filterFunction(NoteElement, NoteIndex) {
            return NoteIndex === NoteArray.findIndex(FIndIndexFunction);
            function FIndIndexFunction(Note) {
                let DeltaTimeCheck = Note.deltaTime === NoteElement.deltaTime;
                let NoteNumCheck = Note.noteNumber === NoteElement.noteNumber;
                let NoteVelCheck = Note.velocity === NoteElement.velocity;
                return (DeltaTimeCheck && NoteNumCheck && NoteVelCheck);
            }
        }
        return NoteArray.filter(filterFunction);
    }
    NearlyDoneBits() {
        // now, we find what the "beat" length should be,
        // by counting numbers of times for each length, and finding statistical mode
        let scores = new Map();
        for (let note of this.notes) {
            if (note.Length != 0)
                if (scores.has(note.Length))
                    scores.set(note.Length, scores.get(note.Length) + 1);
                else
                    scores.set(note.Length, 1);
        }
        let winner = 1;
        let score = 0;
        for (let kv of scores) {
            if (kv[1] > score) {
                winner = kv[0];
                score = kv[1];
            }
        }
        // realign all of them to match beat length
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i] = new PNote((this.notes[i].Length / winner), this.notes[i].Note);
        }
        // compress chords down
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].Length == 0) {
                if (i < this.notes.length - 1) {
                    this.notes[i + 1] = new PNote(this.notes[i + 1].Length, this.notes[i].Note + "-" + this.notes[i + 1].Note);
                    this.notes.splice(i, 1);
                    i--;
                }
            }
        }
        // add in time
        for (let i = 0; i < this.notes.length; i++) {
            let len = this.notes[i].Length;
            if (len != 1) {
                this.notes[i] = new PNote(len, this.notes[i].Note + "/" + (1 / len).toFixed(2));
            }
            else {
                this.notes[i] = new PNote(len, this.notes[i].Note + "");
            }
        }
    }
    GenerateOutput() {
        // now, output!
        let line = "";
        let output = "";
        let lineCount = 1;
        for (let n of this.notes) {
            if (line.length + n.Note.length + 1 > (this.MaxCharsPerLine + 1)) {
                output += line.substring(0, line.length - 1) + "\r\n";
                line = "";
                if (lineCount == this.MaxLines)
                    break;
                lineCount++;
            }
            line += n.Note + ",";
        }
        if (line.length > 0)
            output += line.substring(0, line.length - 1);
        this.OutputTxt = "BPM: " + this.tempo.toString() + "\r\n" + output;
    }
}
exports.Form1_port = Form1_port;

},{"./MidiFile":28,"./PIanoEnums":29,"./utilityfunctions":33}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const midi2piano_port_1 = require("./midi2piano-port");
function parsethefile(midi) {
    let MaxCharsPerLine = parseInt(document.getElementById("charPerLine").value);
    let MaxLines = parseInt(document.getElementById("MaxLines").value);
    let fileStuff = new midi2piano_port_1.Form1_port();
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let OutputPanel = document.getElementById("PianoOutput");
    OutputPanel.value = fileStuff.OutputTxt;
    console.log("AAAAAAA");
}
exports.parsethefile = parsethefile;

},{"./midi2piano-port":31}],33:[function(require,module,exports){
"use strict";
/**
 * Created by jfmmeyers on 9/14/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getTempo(midi) {
    let tempo = midi.tracks[0].filter(x => x.microsecondsPerBeat != null)[0].microsecondsPerBeat;
    tempo = 60000000 / tempo;
    tempo = Math.round(tempo);
    return tempo * 10;
}
exports.GetTempo = getTempo;

},{}]},{},[30]);
