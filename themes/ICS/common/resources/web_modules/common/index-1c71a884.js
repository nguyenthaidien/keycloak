import { c as e } from "./_commonjsHelpers-b1deedd1.js";
function o() {}
var r = e(function (e) {
  e.exports = (function () {
    function e(e, o, r, n, t, a) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((p.name = "Invariant Violation"), p);
      }
    }
    function r() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: r,
      element: e,
      instanceOf: r,
      node: e,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
    };
    return (n.checkPropTypes = o), (n.PropTypes = n), n;
  })();
});
r.array,
  r.bool,
  r.func,
  r.number,
  r.object,
  r.string,
  r.symbol,
  r.any,
  r.arrayOf,
  r.element,
  r.instanceOf,
  r.node,
  r.objectOf,
  r.oneOf,
  r.oneOfType,
  r.shape,
  r.exact,
  r.checkPropTypes,
  r.PropTypes;
export { r as p };
//# sourceMappingURL=index-1c71a884.js.map
