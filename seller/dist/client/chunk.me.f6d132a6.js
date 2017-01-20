webpackJsonp([3, 6], {
    187: function(e, t, u) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = u(39),
            l = n(a),
            r = u(7),
            f = n(r),
            o = u(8),
            d = n(o),
            s = u(9),
            c = n(s),
            i = u(11),
            _ = n(i),
            p = u(10),
            v = n(p),
            h = u(2),
            m = n(h),
            M = u(256),
            b = n(M),
            y = function(e) {
                function t() {
                    return (0, d.default)(this, t), (0, _.default)(this, (t.__proto__ || (0, f.default)(t)).call(this))
                }
                return (0, v.default)(t, e), (0, c.default)(t, [{
                    key: "render",
                    value: function() {
                        return m.default.createElement("section", {
                            className: b.default.sectionMain
                        }, "我的")
                    }
                }]), t
            }(h.Component);
        t.default = y;
        var k = {
            b: 1
        };
        console.log((0, l.default)({}, k)), e.exports = t.default
    },
    188: function(e, t, u) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = u(7),
            l = n(a),
            r = u(8),
            f = n(r),
            o = u(9),
            d = n(o),
            s = u(11),
            c = n(s),
            i = u(10),
            _ = n(i),
            p = u(2),
            v = n(p),
            h = (u(49), u(187)),
            m = n(h),
            M = u(255),
            b = n(M),
            y = function(e) {
                function t() {
                    return (0, f.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).call(this))
                }
                return (0, _.default)(t, e), (0, d.default)(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props.actions;
                        return v.default.createElement("div", {
                            className: b.default.app
                        }, v.default.createElement(m.default, {
                            actions: e
                        }))
                    }
                }]), t
            }(p.Component);
        t.default = y, e.exports = t.default
    },
    255: 246,
    256: 246
});
