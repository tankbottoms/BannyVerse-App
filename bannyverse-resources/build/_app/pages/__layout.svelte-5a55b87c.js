import {
	S as r,
	i as _,
	s as u,
	F as f,
	e as c,
	c as m,
	a as p,
	d as i,
	b as d,
	g as h,
	G as $,
	H as v,
	I as g,
	q as y,
	o as b
} from '../chunks/index-f52b3be9.js';
function q(n) {
	let s, a;
	const o = n[1].default,
		t = f(o, n, n[0], null);
	return {
		c() {
			(s = c('main')), t && t.c(), this.h();
		},
		l(e) {
			s = m(e, 'MAIN', { class: !0 });
			var l = p(s);
			t && t.l(l), l.forEach(i), this.h();
		},
		h() {
			d(s, 'class', 'svelte-1l5lemn');
		},
		m(e, l) {
			h(e, s, l), t && t.m(s, null), (a = !0);
		},
		p(e, [l]) {
			t && t.p && (!a || l & 1) && $(t, o, e, e[0], a ? g(o, e[0], l, null) : v(e[0]), null);
		},
		i(e) {
			a || (y(t, e), (a = !0));
		},
		o(e) {
			b(t, e), (a = !1);
		},
		d(e) {
			e && i(s), t && t.d(e);
		}
	};
}
function I(n, s, a) {
	let { $$slots: o = {}, $$scope: t } = s;
	return (
		(n.$$set = (e) => {
			'$$scope' in e && a(0, (t = e.$$scope));
		}),
		[t, o]
	);
}
class A extends r {
	constructor(s) {
		super(), _(this, s, I, q, u, {});
	}
}
export { A as default };
