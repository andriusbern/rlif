! function(t, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.fornac = n() : t.fornac = n() }(this, function() {
    return function(t) {
        function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports } var e = {}; return n.m = t, n.c = e, n.p = "", n(0) }([function(t, n, e) { "use strict";

        function o(t) { return t && t.__esModule ? t : { "default": t } }

        function a(t, n) {
            function e(t) { return Math.sqrt(t[0] * t[0] + t[1] * t[1]) }

            function o(t) { var n = t,
                    r = t.prevNode,
                    i = 6; if (null !== r && t.linked) { var o = [-(n.x - r.x), -(n.y - r.y)];
                    o = [o[0] / e(o), o[1] / e(o)]; var a = [-o[1], o[0]],
                        u = [t.radius * o[0], t.radius * o[1]],
                        s = "M" + (u[0] + i * (o[0] + a[0]) / 2) + "," + (u[1] + i * (o[1] + a[1]) / 2) + "L" + u[0] + "," + u[1] + "L" + (u[0] + i * (o[0] - a[0]) / 2) + "," + (u[1] + i * (o[1] - a[1]) / 2);
                    c["default"].select(this).attr("d", s) } }

            function a(t) { return "basepair" == t.linkType || "backbone" == t.linkType || "pseudoknot" == t.linkType || "label_link" == t.linkType || "external" == t.linkType || "chain_chain" == t.linkType }

            function s(t, n, e) { if (t.hasOwnProperty(n.num)) { var r = parseFloat(t[n.num]); return isNaN(r) ? t[n.num] : e(r) } return "white" }

            function l() {}

            function d() { L && (mpos = c["default"].mouse(O.node()), D.attr("x1", L.x).attr("y1", L.y).attr("x2", mpos[0]).attr("y2", mpos[1])) }

            function g() { L && D.attr("class", "drag_line_hidden"), m() }

            function v() { var t = Y.selectAll("g.gnode").selectAll(".outline_node");
                t.each(function(t) { t.selected = !1, t.previouslySelected = !1 }), t.classed("selected", !1) }

            function y() { O.attr("transform", "translate(" + c["default"].event.translate + ") scale(" + c["default"].event.scale + ")") }

            function m() { L = null, T = null, A = null }

            function x(t) { var n = Y.selectAll("g.gnode"); return F ? n.filter(function(t) { return t.selected }) : n.filter(function(t) { return t.selected }) }

            function b(t) { if (c["default"].event.sourceEvent.stopPropagation(), !t.selected && !F) { var n = Y.selectAll("g.gnode").selectAll(".outline_node");
                    n.classed("selected", function(t) { return t.selected = S.options.applyForce && (t.previouslySelected = !1) }) }
                c["default"].select(this).select(".outline_node").classed("selected", function(n) { return t.previouslySelected = t.selected, t.selected = S.options.applyForce && !0 }); var e = x(t);
                e.each(function(t) { t.fixed |= 2 }) }

            function k(t) { var n = x(t);
                n.each(function(t) { t.x += c["default"].event.dx, t.y += c["default"].event.dy, t.px += c["default"].event.dx, t.py += c["default"].event.dy }), S.resumeForce(), c["default"].event.sourceEvent.preventDefault() }

            function M(t) { var n = x(t);
                n.each(function(t) { t.fixed &= -7 }) }

            function _(t) { var n = t.radius + 16,
                    e = t.x - n,
                    r = t.x + n,
                    i = t.y - n,
                    o = t.y + n; return function(n, a, u, s, l) { if (n.point && n.point !== t) { var c = t.x - n.point.x,
                            f = t.y - n.point.y,
                            h = Math.sqrt(c * c + f * f),
                            p = t.radius + n.point.radius;
                        h < p && (h = (h - p) / h * .1, t.x -= c *= h, t.y -= f *= h, n.point.x += c, n.point.y += f) } return a > r || s < e || u > o || l < i } }

            function w() { if (!S.deaf && !X) { switch (c["default"].event.keyCode) {
                        case 16:
                            X = !0; break;
                        case 17:
                            F = !0; break;
                        case 67:
                            S.centerView() }(X || F) && (q.call(S.zoomer).on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null), O.selectAll("g.gnode").on("mousedown.drag", null)), F && (I.select(".background").style("cursor", "crosshair"), I.call(S.brusher)) } }

            function N() { X = !1, F = !1, I.call(S.brusher).on("mousedown.brush", null).on("touchstart.brush", null).on("touchmove.brush", null).on("touchend.brush", null), I.select(".background").style("cursor", "auto"), q.call(S.zoomer), O.selectAll("g.gnode").call(j) } var S = this; if (S.options = { displayAllLinks: !1, labelInterval: 10, applyForce: !0, chargeDistance: 110, friction: .35, middleCharge: -30, otherCharge: -30, linkDistanceMultiplier: 15, initialSize: null, layout: "standard-polygonal", allowPanningAndZooming: !0, transitionDuration: 500, resizeSvgOnResize: !0 }, arguments.length > 1)
                for (var E in n) S.options.hasOwnProperty(E) && (S.options[E] = n[E]);
            null !== S.options.initialSize ? (S.options.svgW = S.options.initialSize[0], S.options.svgH = S.options.initialSize[1]) : (S.options.svgW = 800, S.options.svgH = 800); var A = (c["default"].scale.category20(), null),
                L = null,
                T = null,
                C = c["default"].scale.linear().domain([0, S.options.svgW]).range([0, S.options.svgW]),
                P = c["default"].scale.linear().domain([0, S.options.svgH]).range([0, S.options.svgH]),
                R = S.graph = { nodes: [], links: [] };
            S.linkStrengths = { pseudoknot: 0, proteinChain: 0, chainChain: 0, intermolecule: 10, external: 0, other: 10 }, S.displayParameters = { displayBackground: "true", displayNumbering: "true", displayNodeOutline: "true", displayNodeLabel: "true", displayLinks: "true", displayPseudoknotLinks: "true", displayProteinLinks: "true" }, S.colorScheme = "structure", S.customColors = {}, S.animation = S.options.applyForce, S.deaf = !1, S.rnas = {}, S.extraLinks = [], Array.prototype.equals = function(t) { if (!t) return !1; if (this.length != t.length) return !1; for (var n = 0, e = this.length; n < e; n++)
                    if (this[n] instanceof Array && t[n] instanceof Array) { if (!this[n].equals(t[n])) return !1 } else if (this[n] != t[n]) return !1; return !0 }, S.createInitialLayout = function(t, n) { var e = { sequence: "", name: "empty", positions: [], labelInterval: S.options.labelInterval, avoidOthers: !0, uids: [], circularizeExternal: !0 }; if (2 == arguments.length)
                    for (var r in n) e.hasOwnProperty(r) && (e[r] = n[r]); var i = new u.RNAGraph(e.sequence, t, e.name);
                i.circularizeExternal = e.circularizeExternal; var o = i.recalculateElements(); if (0 === e.positions.length)
                    if ("naview" == S.options.layout) { var a = new p.NAView,
                            s = a.naview_xy_coordinates(i.pairtable);
                        e.positions = []; for (var l = 0; l < s.nbase; l++) e.positions.push([s.x[l], s.y[l]]) } else e.positions = (0, f.simpleXyCoordinates)(o.pairtable);
                return o = o.elementsToJson().addUids(e.uids).addPositions("nucleotide", e.positions).addLabels(1, e.labelInterval).reinforceStems().reinforceLoops().connectFakeNodes().reassignLinkUids().breakNodesToFakeNodes() }, S.addRNA = function(t, n) { var e = S.createInitialLayout(t, n); if (1 === arguments.length && (n = {}), "extraLinks" in n) { var r = S.addExternalLinks(e, n.extraLinks);
                    S.extraLinks = S.extraLinks.concat(r) } return "avoidOthers" in n ? S.addRNAJSON(e, n.avoidOthers) : S.addRNAJSON(e, !0), e }, S.addExternalLinks = function(t, n) { for (var e = [], r = 0; r < n.length; r++) { var i = { linkType: "external", value: 1, uid: generateUUID(), source: null, target: null }; if ("[object Array]" === Object.prototype.toString.call(n[r][0])) { for (var o = 0; o < t.nodes.length; o++)
                            if ("nucs" in t.nodes[o] && t.nodes[o].nucs.equals(n[r][0])) { i.source = t.nodes[o]; break } } else
                        for (var o = 0; o < t.nodes.length; o++) t.nodes[o].num == n[r][0] && (i.source = t.nodes[o]); if ("[object Array]" === Object.prototype.toString.call(n[r][1]))
                        for (var o = 0; o < t.nodes.length; o++) "nucs" in t.nodes[o] && t.nodes[o].nucs.equals(n[r][1]) && (i.target = t.nodes[o]);
                    else
                        for (var o = 0; o < t.nodes.length; o++) t.nodes[o].num == n[r][1] && (i.target = t.nodes[o]);
                    null != i.source && null != i.target ? e.push(i) : console.log("ERROR: source or target of new link not found:", i, n[r]) } return e }, S.addRNAJSON = function(t, n) { var e, r; return n && (e = S.graph.nodes.length > 0 ? c["default"].max(S.graph.nodes.map(function(t) { return t.x })) : 0, r = c["default"].min(t.nodes.map(function(t) { return t.x })), t.nodes.forEach(function(t) { t.x += e - r + 20, t.px += e - r })), t.nodes.forEach(function(n) { n.rna = t }), S.rnas[t.uid] = t, S.recalculateGraph(), S.update(), S.centerView(), t }, S.transitionRNA = function(t, n) {
                function e(t, n) { 0 === t.size() && setTimeout(n, i); var e = 0;
                    t.each(function() {++e }).each("end", function() {--e || n.apply(this, arguments) }) }

                function r() { S.createNewLinks(f.enter());
                    S.graph.links = f.data(), S.updateStyle(), "undefined" != typeof n && n() } var i = S.options.transitionDuration,
                    u = S.graph.nodes.filter(function(t) { return "nucleotide" == t.nodeType }).map(function(t) { return t.uid }),
                    s = { uids: u },
                    l = S.createInitialLayout(t, s),
                    c = Y.selectAll("g.gnode").data(l.nodes, H),
                    i = S.options.transitionDuration;
                0 === i ? c.attr("transform", function(t) { return "translate(" + [t.x, t.y] + ")" }) : c.transition().attr("transform", function(t) { return "translate(" + [t.x, t.y] + ")" }).duration(i); var f = U.selectAll("line.link").data(l.links.filter(a), B),
                    h = S.createNewNodes(c.enter()).attr("transform", function(t) { return "undefined" != typeof t.x && "undefined" != typeof t.y ? "translate(" + [0, 0] + ")" : "" }); if (0 === i ? c.exit().remove() : c.exit().transition().attr("transform", function(t) { return "undefined" != typeof t.x && "undefined" != typeof t.y ? "translate(" + [0, 0] + ")" : "" }), c.select("path").each(o), S.graph.nodes = c.data(), S.updateStyle(), S.centerView(i), f.exit().remove(), 0 === i) { f.attr("x1", function(t) { return t.source.x }).attr("y1", function(t) { return t.source.y }).attr("x2", function(t) { return t.target.x }).attr("y2", function(t) { return t.target.y });
                    S.createNewLinks(f.enter());
                    S.graph.links = f.data(), S.updateStyle() } else f.transition().attr("x1", function(t) { return t.source.x }).attr("y1", function(t) { return t.source.y }).attr("x2", function(t) { return t.target.x }).attr("y2", function(t) { return t.target.y }).duration(i).call(e, r);
                0 === i ? h.attr("transform", function(t) { return "undefined" != typeof t.x && "undefined" != typeof t.y ? "translate(" + [t.x, t.y] + ")" : "" }) : h.transition().attr("transform", function(t) { return "undefined" != typeof t.x && "undefined" != typeof t.y ? "translate(" + [t.x, t.y] + ")" : "" }) }, S.recalculateGraph = function() { S.graph.nodes = [], S.graph.links = []; for (var t in S.rnas) S.graph.nodes = S.graph.nodes.concat(S.rnas[t].nodes), S.graph.links = S.graph.links.concat(S.rnas[t].links); for (var n = {}, e = 0; e < S.graph.nodes.length; e++) n[S.graph.nodes[e].uid] = S.graph.nodes[e]; for (S.graph.links.forEach(function(t) { t.source = n[t.source.uid], t.target = n[t.target.uid] }), e = 0; e < S.extraLinks.length; e++) { if (S.extraLinks[e].target.uid in n || console.log("not there:", S.extraLinks[e]), S.extraLinks[e].source = n[S.extraLinks[e].source.uid], S.extraLinks[e].target = n[S.extraLinks[e].target.uid], "intermolecule" == S.extraLinks[e].linkType) { fakeLinks = S.graph.links.filter(function(t) { return (t.source == S.extraLinks[e].source || t.source == S.extraLinks[e].target || t.target == S.extraLinks[e].source || t.target == S.extraLinks[e].source) && "fake" == t.linkType }); for (var r = 0; r < fakeLinks.length; r++) { var i = S.graph.links.indexOf(fakeLinks[r]);
                            S.graph.links.splice(i, 1) } }
                    R.links.push(S.extraLinks[e]) } }, S.addNodes = function(t) { t.links.forEach(function(n) { "number" == typeof n.source && (n.source = t.nodes[n.source]), "number" == typeof n.target && (n.target = t.nodes[n.target]) }), S.graph.nodes.length > 0 ? (maxX = c["default"].max(S.graph.nodes.map(function(t) { return t.x })), maxY = c["default"].max(S.graph.nodes.map(function(t) { return t.y }))) : (maxX = 0, maxY = 0), t.nodes.forEach(function(t) { t.rna.uid in S.rnas || (S.rnas[t.rna.uid] = t.rna), t.x += maxX, t.px += maxX }), r = new u.RNAGraph("", ""), r.nodes = t.nodes, r.links = t.links, S.recalculateGraph(), S.update(), S.centerView() }, S.addCustomColors = function(t) { S.customColors = t }, S.addCustomColorsText = function(t) { var n = new h.ColorScheme(t);
                S.customColors = n.colorsJson, S.changeColorScheme("custom") }, S.clearNodes = function() { S.graph.nodes = [], S.graph.links = [], S.rnas = {}, S.extraLinks = [], S.update() }, S.toJSON = function() { var t = { rnas: S.rnas, extraLinks: S.extraLinks },
                    n = JSON.stringify(t, function(t, n) { return "rna" == t ? void 0 : n }, "\t"); return n }, S.fromJSON = function(t) { var n, e; try { var i = JSON.parse(t);
                    n = i.rnas, e = i.extraLinks } catch (o) { throw o } for (var a in n) "rna" == n[a].type ? (r = new u.RNAGraph, r.seq = n[a].seq, r.dotbracket = n[a].dotbracket, r.circular = n[a].circular, r.pairtable = n[a].pairtable, r.uid = n[a].uid, r.structName = n[a].structName, r.nodes = n[a].nodes, r.links = n[a].links, r.rnaLength = n[a].rnaLength, r.elements = n[a].elements, r.nucsToNodes = n[a].nucsToNodes, r.pseudoknotPairs = n[a].pseudoknotPairs) : (r = new ProteinGraph, r.size = n[a].size, r.nodes = n[a].nodes, r.uid = n[a].uid), S.addRNAJSON(r, !1);
                e.forEach(function(t) { S.extraLinks.push(t) }), S.recalculateGraph(), S.update() }, S.setSize = function() { if (null == S.options.initialSize) { var n = c["default"].select(t).node().offsetHeight,
                        e = c["default"].select(t).node().offsetWidth;
                    S.options.svgW = e, S.options.svgH = n, C.range([0, e]).domain([0, e]), P.range([0, n]).domain([0, n]), S.zoomer.x(C).y(P), S.brusher.x(C).y(P), S.centerView(), S.options.resizeSvgOnResize && z.attr("width", e).attr("height", n) } }, S.setOutlineColor = function(t) { var n = Y.selectAll("g.gnode").select("[node_type=nucleotide]");
                n.style("fill", t) }, S.changeColorScheme = function(t) { var n = Y.selectAll("[node_type=protein]");
                n.classed("protein", !0).attr("r", function(t) { return t.radius }); var e = (Y.selectAll("g.gnode"), Y.selectAll("g.gnode").selectAll("circle"), Y.selectAll("g.gnode").select("[node_type=nucleotide]")); if (S.colorScheme = t, "sequence" == t) { var r = c["default"].scale.ordinal().range(["#dbdb8d", "#98df8a", "#ff9896", "#aec7e8", "#aec7e8"]).domain(["A", "C", "G", "U", "T"]);
                    e.style("fill", function(t) { return r(t.name) }) } else if ("structure" == t) { var r = c["default"].scale.category10().domain(["s", "m", "i", "e", "t", "h", "x"]).range(["lightgreen", "#ff9896", "#dbdb8d", "lightsalmon", "lightcyan", "lightblue", "transparent"]);
                    e.style("fill", function(t) { return r(t.elemType) }) } else if ("positions" == t) e.style("fill", function(t) { var n = c["default"].scale.linear().range(["#98df8a", "#dbdb8d", "#ff9896"]).interpolate(c["default"].interpolateLab).domain([1, 1 + (t.rna.rnaLength - 1) / 2, t.rna.rnaLength]); return n(t.num) });
                else if ("custom" == t) { if ("undefined" != typeof S.customColors && "domain" in S.customColors && "range" in S.customColors) var r = c["default"].scale.linear().interpolate(c["default"].interpolateLab).domain(S.customColors.domain).range(S.customColors.range);
                    e.style("fill", function(t) { if ("undefined" == typeof S.customColors || !S.customColors.hasOwnProperty("colorValues")) return "white"; if (S.customColors.colorValues.hasOwnProperty(t.structName) && S.customColors.colorValues[t.structName].hasOwnProperty(t.num)) { var n = S.customColors.colorValues[t.structName]; return s(n, t, r) } if (S.customColors.colorValues.hasOwnProperty("")) { var e = S.customColors.colorValues[""]; return s(e, t, r) } return "white" }) } }, window.addEventListener("resize", S.setSize, !1), S.zoomer = c["default"].behavior.zoom().scaleExtent([.1, 10]).x(C).y(P).on("zoomstart", v).on("zoom", y), c["default"].select(t).select("svg").remove(); var z = c["default"].select(t).attr("tabindex", 1).on("keydown.brush", w).on("keyup.brush", N).each(function() { this.focus() }).append("svg:svg").attr("width", S.options.svgW).attr("height", S.options.svgH).attr("id", "plotting-area");
            S.options.svg = z; var q = z.append("svg:g").on("mousemove", d).on("mousedown", l).on("mouseup", g);
            S.options.allowPanningAndZooming && q.call(S.zoomer); var I = q.append("g").datum(function() { return { selected: !1, previouslySelected: !1 } }).attr("class", "brush"),
                O = q.append("svg:g"),
                U = O.append("svg:g"),
                Y = O.append("svg:g");
            S.brusher = c["default"].svg.brush().x(C).y(P).on("brushstart", function(t) { var n = Y.selectAll("g.gnode").selectAll(".outline_node");
                n.each(function(t) { t.previouslySelected = F && t.selected }) }).on("brush", function() { var t = Y.selectAll("g.gnode").selectAll(".outline_node"),
                    n = c["default"].event.target.extent();
                t.classed("selected", function(t) { return t.selected = S.options.applyForce && t.previouslySelected ^ (n[0][0] <= t.x && t.x < n[1][0] && n[0][1] <= t.y && t.y < n[1][1]) }) }).on("brushend", function() { c["default"].event.target.clear(), c["default"].select(this).call(c["default"].event.target) }), I.call(S.brusher).on("mousedown.brush", null).on("touchstart.brush", null).on("touchmove.brush", null).on("touchend.brush", null), I.select(".background").style("cursor", "auto"), S.getBoundingBoxTransform = function() { if (0 === S.graph.nodes.length) return { translate: [0, 0], scale: 1 }; var t = c["default"].min(S.graph.nodes.map(function(t) { return t.x })),
                    n = c["default"].min(S.graph.nodes.map(function(t) { return t.y })),
                    e = c["default"].max(S.graph.nodes.map(function(t) { return t.x })),
                    r = c["default"].max(S.graph.nodes.map(function(t) { return t.y })),
                    i = e - t,
                    o = r - n,
                    a = S.options.svgW / (i + 1),
                    u = S.options.svgH / (o + 1),
                    s = .8 * Math.min(a, u),
                    l = i * s,
                    f = o * s,
                    h = -t * s + (S.options.svgW - l) / 2,
                    p = -n * s + (S.options.svgH - f) / 2; return { translate: [h, p], scale: s } }, S.centerView = function(t) { 0 === arguments.length && (t = 0); var n = S.getBoundingBoxTransform();
                null !== n && (O.transition().attr("transform", "translate(" + n.translate + ") scale(" + n.scale + ")").duration(t), S.zoomer.translate(n.translate), S.zoomer.scale(n.scale)) }, S.force = c["default"].layout.force().charge(function(t) { return "middle" == t.nodeType ? S.options.middleCharge : S.options.otherCharge }).friction(S.options.friction).linkDistance(function(t) { return S.options.linkDistanceMultiplier * t.value }).linkStrength(function(t) { return t.linkType in S.linkStrengths ? S.linkStrengths[t.linkType] : S.linkStrengths.other }).gravity(0).nodes(S.graph.nodes).links(S.graph.links).chargeDistance(S.options.chargeDistance).size([S.options.svgW, S.options.svgH]); var D = O.append("line").attr("class", "drag_line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0),
                X = !1,
                F = !1;
            S.resumeForce = function() { S.animation && S.force.resume() }; var j = c["default"].behavior.drag().on("dragstart", b).on("drag", k).on("dragend", M);
            c["default"].select(t).on("keydown", w).on("keyup", N).on("contextmenu", function() { c["default"].event.preventDefault() }); var B = function(t) { return t.uid },
                H = function(t) { var n = t.uid; return n },
                V = function(t) { var n = t.getPositions("nucleotide"),
                        e = t.getPositions("label"),
                        r = t.getUids();
                    t.recalculateElements().elementsToJson().addPseudoknots().addPositions("nucleotide", n).addUids(r).addLabels(1, S.options.labelInterval).addPositions("label", e).reinforceStems().reinforceLoops().updateLinkUids() },
                G = function(t) { if (index = S.graph.links.indexOf(t), index > -1) { if (t.source.rna == t.target.rna) { var n = t.source.rna;
                            n.addPseudoknots(), n.pairtable[t.source.num] = 0, n.pairtable[t.target.num] = 0, V(n) } else extraLinkIndex = S.extraLinks.indexOf(t), S.extraLinks.splice(extraLinkIndex, 1);
                        S.recalculateGraph() }
                    S.update() },
                J = function(t) { if (X) { var n = { backbone: !0, fake: !0, fake_fake: !0, label_link: !0 };
                        t.linkType in n || G(t) } };
            S.addLink = function(t) { t.source.rna == t.target.rna ? (r = t.source.rna, r.pairtable[t.source.num] = t.target.num, r.pairtable[t.target.num] = t.source.num, V(r)) : (t.linkType = "intermolecule", S.extraLinks.push(t)), S.recalculateGraph(), S.update() }; var Z = function(t) { if (!c["default"].event.defaultPrevented) { if (!F) { var n = Y.selectAll("g.gnode").selectAll(".outline_node");
                            n.classed("selected", function(t) { return t.selected = S.options.applyForce && (t.previouslySelected = !1) }) }
                        c["default"].select(this).select("circle").classed("selected", t.selected = S.options.applyForce && !t.previouslySelected) } },
                W = function(t) { if (L) { if (T = t, T == L) return void m(); var n = { source: L, target: T, linkType: "basepair", value: 1, uid: generateUUID() }; for (i = 0; i < S.graph.links.length; i++) { if (!(S.graph.links[i].source != L && S.graph.links[i].target != L && S.graph.links[i].source != T && S.graph.links[i].target != T || "basepair" != S.graph.links[i].linkType && "pseudoknot" != S.graph.links[i].linkType)) return; if ((S.graph.links[i].source == T && S.graph.links[i].target == L || S.graph.links[i].source == L && S.graph.links[i].target == T) && "backbone" == S.graph.links[i].linkType) return } if ("middle" == T.nodeType || "middle" == L.nodeType || "label" == T.nodeType || "label" == L.nodeType) return;
                        S.addLink(n) } },
                $ = function(t) { if (!t.selected && !F) { var n = Y.selectAll("g.gnode").selectAll(".outline_node");
                        n.classed("selected", function(t) { return t.selected = t.previouslySelected = !1 }) }
                    c["default"].select(this).classed("selected", function(n) { return t.previouslySelected = t.selected, t.selected = S.options.applyForce && !0 }), X && (L = t, D.attr("class", "drag_line").attr("x1", L.x).attr("y1", L.y).attr("x2", L.x).attr("y2", L.y)) };
            S.startAnimation = function() { S.animation = !0, O.selectAll("g.gnode").call(j), S.force.start() }, S.stopAnimation = function() { S.animation = !1, O.selectAll("g.gnode").on("mousedown.drag", null), S.force.stop() }, S.setFriction = function(t) { S.force.friction(t), S.resumeForce() }, S.setCharge = function(t) { S.force.charge(t), S.resumeForce() }, S.setGravity = function(t) { S.force.gravity(t), S.resumeForce() }, S.setPseudoknotStrength = function(t) { S.linkStrengths.pseudoknot = t, S.update() }, S.displayBackground = function(t) { S.displayParameters.displayBackground = t, S.updateStyle() }, S.displayNumbering = function(t) { S.displayParameters.displayNumbering = t, S.updateStyle() }, S.displayNodeOutline = function(t) { S.displayParameters.displayNodeOutline = t, S.updateStyle() }, S.displayNodeLabel = function(t) { S.displayParameters.displayNodeLabel = t, S.updateStyle() }, S.displayLinks = function(t) { S.displayParameters.displayLinks = t, S.updateStyle() }, S.displayPseudoknotLinks = function(t) { S.displayParameters.displayPseudoknotLinks = t, S.updateStyle() }, S.displayProteinLinks = function(t) { S.displayParameters.displayProteinLinks = t, S.updateStyle() }, S.updateStyle = function() { Y.selectAll("[node_type=label]").classed("transparent", !S.displayParameters.displayNumbering), Y.selectAll("[label_type=label]").classed("transparent", !S.displayParameters.displayNumbering), U.selectAll("[linkType=label_link]").classed("transparent", !S.displayParameters.displayNumbering), z.selectAll("circle").classed("hidden_outline", !S.displayParameters.displayNodeOutline), Y.selectAll("[label_type=nucleotide]").classed("transparent", !S.displayParameters.displayNodeLabel), z.selectAll("[link_type=real],[link_type=basepair],[link_type=backbone],[link_type=pseudoknot],[link_type=protein_chain],[link_type=chain_chain],[link_type=external]").classed("transparent", !S.displayParameters.displayLinks), z.selectAll("[link_type=pseudoknot]").classed("transparent", !S.displayParameters.displayPseudoknotLinks), z.selectAll("[link_type=protein_chain]").classed("transparent", !S.displayParameters.displayProteinLinks), U.selectAll("[link_type=fake]").classed("transparent", !S.options.displayAllLinks), U.selectAll("[link_type=fake_fake]").classed("transparent", !S.options.displayAllLinks) }, S.createNewLinks = function(t) { var n = t.append("svg:line"); return n.append("svg:title").text(B), n.classed("link", !0).attr("x1", function(t) { return t.source.x }).attr("y1", function(t) { return t.source.y }).attr("x2", function(t) { return t.target.x }).attr("y2", function(t) { return t.target.y }).attr("link_type", function(t) { return t.linkType }).attr("class", function(t) { return c["default"].select(this).attr("class") + " " + t.linkType }).attr("pointer-events", function(t) { return "fake" == t.linkType ? "none" : "all" }), n }, S.createNewNodes = function(t) { t = t.append("g").classed("noselect", !0).classed("gnode", !0).attr("struct_name", function(t) { return t.structName }).attr("transform", function(t) { return "undefined" != typeof t.x && "undefined" != typeof t.y ? "translate(" + [t.x, t.y] + ")" : "" }).each(function(t) { t.selected = t.previouslySelected = !1 }), t.call(j).on("mousedown", $).on("mousedrag", function(t) {}).on("mouseup", W).attr("num", function(t) { return "n" + t.num }).attr("rnum", function(t) { return "n" + (t.rna.rnaLength - t.num + 1) }).on("click", Z).transition().duration(750).ease("elastic"); var n = t.filter(function(t) { return "label" == t.nodeType || "protein" == t.nodeType }),
                    e = t.filter(function(t) { return "nucleotide" == t.nodeType });
                n.append("svg:circle").attr("class", "outline_node").attr("r", function(t) { return t.radius + 1 }), e.append("svg:circle").attr("class", "outline_node").attr("r", function(t) { return t.radius + 1 }), n.append("svg:circle").attr("class", "node").classed("label", function(t) { return "label" == t.nodeType }).attr("r", function(t) { return "middle" == t.nodeType ? 0 : t.radius }).attr("node_type", function(t) { return t.nodeType }).attr("node_num", function(t) { return t.num }), e.append("svg:circle").attr("class", "node").attr("node_type", function(t) { return t.nodeType }).attr("node_num", function(t) { return t.num }).attr("r", function(t) { return t.radius }).append("svg:title").text(function(t) { return "nucleotide" == t.nodeType ? t.structName + ":" + t.num : "" }), e.append("svg:path").attr("class", "node").attr("node_type", function(t) { return t.nodeType }).attr("node_num", function(t) { return t.num }).append("svg:title").text(function(t) { return "nucleotide" == t.nodeType ? t.structName + ":" + t.num : "" }); var r = t.append("text").text(function(t) { return t.name }).attr("text-anchor", "middle").attr("font-size", 8).attr("font-weight", "bold").attr("y", 2.5).attr("class", "node-label").attr("label_type", function(t) { return t.nodeType }); return r.append("svg:title").text(function(t) { return "nucleotide" == t.nodeType ? t.structName + ":" + t.num : "" }), t };
            S.update = function() { S.force.nodes(S.graph.nodes).links(S.graph.links), S.animation && S.force.start(); var t = U.selectAll("line.link").data(S.graph.links.filter(a), B);
                t.attr("class", "").classed("link", !0).attr("link_type", function(t) { return t.linkType }).attr("class", function(t) { return c["default"].select(this).attr("class") + " " + t.linkType }); var n = t.enter();
                S.createNewLinks(n), t.exit().remove(); var e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    r = (c["default"].scale.category10().domain(e), Y.selectAll("g.gnode").data(S.graph.nodes, H)),
                    i = r.enter();
                S.createNewNodes(i), r.exit().remove(); var u, s = S.graph.nodes.filter(function(t) { return "nucleotide" == t.nodeType || "label" == t.nodeType });
                u = S.displayFakeLinks ? t : U.selectAll("[link_type=real],[link_type=pseudoknot],[link_type=protein_chain],[link_type=chain_chain],[link_type=label_link],[link_type=backbone],[link_type=basepair],[link_type=intermolecule],[link_type=external]");
                r.selectAll("path").each(o), u.on("click", J), S.force.on("tick", function() { for (var t = c["default"].geom.quadtree(s), n = 0, e = s.length; ++n < e;) t.visit(_(s[n]));
                    u.attr("x1", function(t) { return t.source.x }).attr("y1", function(t) { return t.source.y }).attr("x2", function(t) { return t.target.x }).attr("y2", function(t) { return t.target.y }), r.attr("transform", function(t) { return "translate(" + [t.x, t.y] + ")" }), r.select("path").each(o) }), S.force.on("end", function() { r.selectAll("[node_type=nucleotide]").filter(function(t, n) { return 0 == n }).each(function(t, n) { console.log("pos", t.num, t.x, t.y) }); for (var t in S.rnas)
                        for (var n = 1; n < S.rnas[t].pairtable[0]; n++) console.log("pt", n, S.rnas[t].pairtable[n]) }), S.changeColorScheme(S.colorScheme), S.animation && S.force.start(), S.updateStyle() }, S.setSize() }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.rnaPlot = n.RNAGraph = void 0; var u = e(1);
        Object.defineProperty(n, "RNAGraph", { enumerable: !0, get: function() { return u.RNAGraph } }); var s = e(3);
        Object.defineProperty(n, "rnaPlot", { enumerable: !0, get: function() { return s.rnaPlot } }), n.FornaContainer = a, e(15); var l = e(17),
            c = o(l),
            f = e(4),
            h = e(2),
            p = e(5) }, function(t, n, e) {
        "use strict";

        function r() { var t = (new Date).getTime(),
                n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) { var e = (t + 16 * Math.random()) % 16 | 0; return t = Math.floor(t / 16), ("x" == n ? e : 3 & e | 8).toString(16) }); return n }

        function i(t, n, e) { var i = this;
            i.type = "protein", i.size = n, i.nodes = [{ name: "P", num: 1, radius: 3 * Math.sqrt(n), rna: i, nodeType: "protein", structName: t, elemType: "p", size: n, uid: r() }], i.links = [], i.uid = r(), i.addUids = function(t) { for (var n = 0; n < t.length; n++) i.nodes[n].uid = t[n]; return i }, i.getUids = function() { uids = []; for (var t = 0; t < i.dotbracket.length; t++) uids.push(i.nodes[t].uid); return uids } }

        function o(t, n, e, i) {
            var o = this;
            o.type = "rna", o.circularizeExternal = !1, 0 === arguments.length ? (o.seq = "", o.dotbracket = "", o.structName = "") : (o.seq = t, o.dotbracket = n, o.structName = e), arguments.length < 4 && (i = 1), o.circular = !1, o.dotbracket.length > 0 && "*" == o.dotbracket[o.dotbracket.length - 1] && (o.dotbracket = o.dotbracket.slice(0, o.dotbracket.length - 1), o.circular = !0), o.uid = r(), o.elements = [], o.pseudoknotPairs = [], o.nucsToNodes = {}, o.addUids = function(t) { for (var n = o.nodes.filter(function(t) { return "nucleotide" == t.nodeType }), e = 0; e < t.length && e < n.length; e++) n[e].uid = t[e]; return o }, o.computePairtable = function() { o.pairtable = u.rnaUtilities.dotbracketToPairtable(o.dotbracket) }, o.removeBreaks = function(t) { for (var n = [], e = -1;
                    (e = t.indexOf("&")) >= 0;) n.push(e), t = t.substring(0, e) + "oo" + t.substring(e + 1, t.length); return { targetString: t, breaks: n } };
            var a = o.removeBreaks(o.dotbracket);
            o.dotbracket = a.targetString, o.dotBracketBreaks = a.breaks, a = o.removeBreaks(o.seq), o.seq = a.targetString, o.seqBreaks = a.breaks, o.calculateStartNumberArray = function() { o.startNumberArray = []; for (var t = 0; t < o.dotbracket.length; t++) o.startNumberArray.push(i), "o" == o.dotbracket[t] && (i = -t) }, o.calculateStartNumberArray(), o.rnaLength = o.dotbracket.length, (0, u.arraysEqual)(o.dotBracketBreaks, o.seqBreaks) || (console.log("WARNING: Sequence and structure breaks not equal"), console.log("WARNING: Using the breaks in the structure")), o.computePairtable(), o.addPositions = function(t, n) { for (var e = o.nodes.filter(function(n) { return n.nodeType == t }), r = 0; r < e.length; r++) e[r].x = n[r][0], e[r].px = n[r][0], e[r].y = n[r][1], e[r].py = n[r][1]; return o }, o.breakNodesToFakeNodes = function() { for (var t = o.nodes.filter(function(t) { return "nucleotide" == t.nodeType }), n = 0; n < t.length; n++) "o" == o.dotbracket[n] && (t[n].nodeType = "middle"); for (var n = 0; n < o.elements.length; n++) { for (var e = !1, r = 0; r < o.elements[n][2].length; r++) o.dotBracketBreaks.indexOf(o.elements[n][2][r]) >= 0 && (e = !0);
                    e ? o.elements[n][2].map(function(t) { 0 != t && (o.nodes[t - 1].elemType = "e") }) : o.elements[n][2].map(function(t) { 0 != t && (o.nodes[t - 1].elemType = o.elements[n][0]) }) } return o }, o.getPositions = function(t) { for (var n = [], e = o.nodes.filter(function(n) { return n.nodeType == t }), r = 0; r < e.length; r++) n.push([e[r].x, e[r].y]); return n }, o.getUids = function() { for (var t = [], n = 0; n < o.dotbracket.length; n++) t.push(o.nodes[n].uid); return t }, o.reinforceStems = function() { for (var t = o.pairtable, n = o.elements.filter(function(t) { return "s" == t[0] && t[2].length >= 4 }), e = 0; e < n.length; e++)
                    for (var r = n[e][2], i = r.slice(0, r.length / 2), a = 0; a < i.length - 1; a++) o.addFakeNode([i[a], i[a + 1], t[i[a + 1]], t[i[a]]]); return o }, o.reinforceLoops = function() { for (var t = function(t) { return 0 !== t && t <= o.dotbracket.length }, n = 0; n < o.elements.length; n++)
                    if ("s" != o.elements[n][0] && (o.circularizeExternal || "e" != o.elements[n][0])) { var e = o.elements[n][2].filter(t); if ("e" == o.elements[n][0]) { var i = { name: "", num: -3, radius: 0, rna: o, nodeType: "middle", elemType: "f", nucs: [], x: o.nodes[o.rnaLength - 1].x, y: o.nodes[o.rnaLength - 1].y, px: o.nodes[o.rnaLength - 1].px, py: o.nodes[o.rnaLength - 1].py, uid: r() },
                                a = { name: "", num: -2, radius: 0, rna: o, nodeType: "middle", elemType: "f", nucs: [], x: o.nodes[0].x, y: o.nodes[0].y, px: o.nodes[0].px, py: o.nodes[0].py, uid: r() };
                            e.push(o.nodes.length + 1), e.push(o.nodes.length + 2), o.nodes.push(i), o.nodes.push(a) }
                        o.addFakeNode(e) }
                return o }, o.updateLinkUids = function() { for (var t = 0; t < o.links.length; t++) o.links[t].uid = o.links[t].source.uid + o.links[t].target.uid; return o }, o.addFakeNode = function(t) { for (var n = 18, e = 6.283 / (2 * t.length), i = n / (2 * Math.tan(e)), a = "", u = 0; u < t.length; u++) a += o.nodes[t[u] - 1].uid; var s = { name: "", num: -1, radius: i, rna: o, nodeType: "middle", elemType: "f", nucs: t, uid: a };
                o.nodes.push(s); var l = 0,
                    c = 0,
                    f = 0;
                e = 3.14159 * (t.length - 2) / (2 * t.length), i = .5 / Math.cos(e); for (var h = 0; h < t.length; h++)
                    if (!(0 === t[h] || t[h] > o.dotbracket.length)) { o.links.push({ source: o.nodes[t[h] - 1], target: o.nodes[o.nodes.length - 1], linkType: "fake", value: i, uid: r() }), t.length > 4 && o.links.push({ source: o.nodes[t[h] - 1], target: o.nodes[t[(h + Math.floor(t.length / 2)) % t.length] - 1], linkType: "fake", value: 2 * i, uid: r() }); var p = 3.14159 * (t.length - 2) / t.length,
                            d = 2 * Math.cos(1.570795 - p / 2);
                        o.links.push({ source: o.nodes[t[h] - 1], target: o.nodes[t[(h + 2) % t.length] - 1], linkType: "fake", value: d }); var g = o.nodes[t[h] - 1]; "x" in g && (l += g.x, c += g.y, f += 1) }
                return f > 0 && (s.x = l / f, s.y = c / f, s.px = s.x, s.py = s.y), o }, o.connectFakeNodes = function() { for (var t = 18, n = function(t) { return "middle" == t.nodeType }, e = {}, r = o.nodes.filter(n), i = new Set, a = 1; a <= o.nodes.length; a++) e[a] = []; for (var a = 0; a < r.length; a++)
                    for (var u = r[a], s = 0; s < u.nucs.length; s++) { for (var l = u.nucs[s], c = 0; c < e[l].length; c++)
                            if (!i.has(JSON.stringify([e[l][c].uid, u.uid].sort()))) { var f = e[l][c].radius + u.radius;
                                o.links.push({ source: e[l][c], target: u, value: f / t, linkType: "fake_fake" }), i.add(JSON.stringify([e[l][c].uid, u.uid].sort())) }
                        e[l].push(u) }
                return o }, o.addExtraLinks = function(t) { if ("undefined" == typeof t) return o; for (var n = 0; n < t.length; n++) { var e = o.getNodeFromNucleotides(t[n].from),
                        i = o.getNodeFromNucleotides(t[n].to),
                        a = { source: e, target: i, linkType: "extra", extraLinkType: t[n].linkType, uid: r() };
                    o.links.push(a) } return o }, o.elementsToJson = function() {
                var t = o.pairtable;
                o.elements;
                o.nodes = [], o.links = [];
                var n = {};
                o.elements.sort();
                for (var e = 0; e < o.elements.length; e++)
                    for (var i = o.elements[e][2], a = 0; a < i.length; a++) n[i[a]] = o.elements[e][0];
                for (var e = 1; e <= t[0]; e++) { var u = o.seq[e - 1];
                    (o.dotBracketBreaks.indexOf(e - 1) >= 0 || o.dotBracketBreaks.indexOf(e - 2) >= 0) && (u = ""), o.nodes.push({ name: u, num: e + o.startNumberArray[e - 1] - 1, radius: 5, rna: o, nodeType: "nucleotide", structName: o.structName, elemType: n[e], uid: r(), linked: !1 }) }
                for (var e = 0; e < o.nodes.length; e++) 0 === e ? o.nodes[e].prevNode = null : o.nodes[e].prevNode = o.nodes[e - 1], e == o.nodes.length - 1 ? o.nodes[e].nextNode = null : o.nodes[e].nextNode = o.nodes[e + 1];
                for (var e = 1; e <= t[0]; e++) 0 !== t[e] && o.links.push({
                    source: o.nodes[e - 1],
                    target: o.nodes[t[e] - 1],
                    linkType: "basepair",
                    value: 1,
                    uid: r()
                }), e > 1 && o.dotBracketBreaks.indexOf(e - 1) === -1 && o.dotBracketBreaks.indexOf(e - 2) == -1 && o.dotBracketBreaks.indexOf(e - 3) == -1 && (o.links.push({ source: o.nodes[e - 2], target: o.nodes[e - 1], linkType: "backbone", value: 1, uid: r() }), o.nodes[e - 1].linked = !0);
                for (var e = 0; e < o.pseudoknotPairs.length; e++) o.links.push({ source: o.nodes[o.pseudoknotPairs[e][0] - 1], target: o.nodes[o.pseudoknotPairs[e][1] - 1], linkType: "pseudoknot", value: 1, uid: r() });
                return o.circular && o.links.push({ source: o.nodes[0], target: o.nodes[o.rnaLength - 1], linkType: "backbone", value: 1, uid: r() }), o
            }, o.ptToElements = function(t, n, e, r) { var i = [],
                    a = [e - 1],
                    u = [r + 1]; if (e > r) return []; for (; 0 === t[e]; e++) a.push(e); for (; 0 === t[r]; r--) u.push(r); if (e > r) { if (a.push(e), 0 === n) return [
                        ["e", n, a.sort(s)]
                    ]; for (var l = !1, c = [], f = [], h = 0; h < a.length; h++) l ? f.push(a[h]) : c.push(a[h]), o.dotBracketBreaks.indexOf(a[h]) >= 0 && (l = !0); return l ? [
                        ["h", n, a.sort(s)]
                    ] : [
                        ["h", n, a.sort(s)]
                    ] } if (t[e] != r) { var p = a,
                        h = e; for (p.push(h); h <= r;) { for (i = i.concat(o.ptToElements(t, n, h, t[h])), p.push(t[h]), h = t[h] + 1; 0 === t[h] && h <= r; h++) p.push(h);
                        p.push(h) } return p.pop(), p = p.concat(u), p.length > 0 && (0 === n ? i.push(["e", n, p.sort(s)]) : i.push(["m", n, p.sort(s)])), i } if (t[e] === r) { a.push(e), u.push(r); var d = a.concat(u);
                    d.length > 4 && (0 === n ? i.push(["e", n, a.concat(u).sort(s)]) : i.push(["i", n, a.concat(u).sort(s)])) } for (var g = []; t[e] === r && e < r;) g.push(e), g.push(r), e += 1, r -= 1, n += 1; return a = [e - 1], u = [r + 1], i.push(["s", n, g.sort(s)]), i.concat(o.ptToElements(t, n, e, r)) }, o.addLabels = function(t, n) { if (0 === arguments.length && (t = 1, n = 10), 1 === arguments.length && (n = 10), 0 === n) return o;
                n <= 0 && console.log("The label interval entered in invalid:", n); for (var e = 1; e <= o.pairtable[0]; e++)
                    if (e % n === 0) { var i, a, u, s, l, c, f = o.nodes[e - 1];
                        1 == o.rnaLength ? (c = [f.x - 15, f.y], l = [f.x - 15, f.y]) : (u = 1 == e ? o.nodes[o.rnaLength - 1] : o.nodes[e - 2], s = e == o.rnaLength ? o.nodes[0] : o.nodes[e], 0 !== o.pairtable[s.num] && 0 !== o.pairtable[u.num] && 0 !== o.pairtable[f.num] && (u = s = o.nodes[o.pairtable[f.num] - 1]), 0 === o.pairtable[f.num] || 0 !== o.pairtable[s.num] && 0 !== o.pairtable[u.num] ? (c = [s.x - f.x, s.y - f.y], l = [u.x - f.x, u.y - f.y]) : (c = [f.x - s.x, f.y - s.y], l = [f.x - u.x, f.y - u.y])); var h = [c[0] + l[0], c[1] + l[1]],
                            p = Math.sqrt(h[0] * h[0] + h[1] * h[1]),
                            d = [h[0] / p, h[1] / p],
                            g = [-15 * d[0], -15 * d[1]],
                            i = o.nodes[e - 1].x + g[0],
                            a = o.nodes[e - 1].y + g[1],
                            v = { name: e + o.startNumberArray[e - 1] - 1, num: -1, radius: 6, rna: o, nodeType: "label", structName: o.structName, elemType: "l", x: i, y: a, px: i, py: a, uid: r() },
                            y = { source: o.nodes[e - 1], target: v, value: 1, linkType: "label_link", uid: r() };
                        o.nodes.push(v), o.links.push(y) }
                return o }, o.recalculateElements = function() { if (o.removePseudoknots(), o.elements = o.ptToElements(o.pairtable, 0, 1, o.dotbracket.length), o.circular && (externalLoop = o.elements.filter(function(t) { if ("e" == t[0]) return !0 }), externalLoop.length > 0)) { eloop = externalLoop[0], nucs = eloop[2].sort(s), prev = nucs[0], hloop = !0, numGreater = 0; for (var t = 1; t < nucs.length; t++) nucs[t] - prev > 1 && (numGreater += 1), prev = nucs[t];
                    1 == numGreater ? eloop[0] = "h" : 2 == numGreater ? eloop[0] = "i" : eloop[0] = "m" } return o }, o.reassignLinkUids = function() { for (var t, t = 0; t < o.links.length; t++) o.links[t].uid = o.links[t].source.uid + o.links[t].target.uid; return o }, o.removePseudoknots = function() { return o.pairtable.length > 1 && (o.pseudoknotPairs = o.pseudoknotPairs.concat(u.rnaUtilities.removePseudoknotsFromPairtable(o.pairtable))), o }, o.addPseudoknots = function() { for (var t = o.pairtable, n = o.pseudoknotPairs, e = 0; e < n.length; e++) t[n[e][0]] = n[e][1], t[n[e][1]] = n[e][0]; return o.pseudoknotPairs = [], o }, o.addName = function(t) { return "undefined" == typeof t ? (o.name = "", o) : (o.name = t, o) }, o.rnaLength > 0 && o.recalculateElements()
        }

        function a(t) { for (var n = {}, e = [], a = [], u = 0; u < t.molecules.length; u++) { var s, l = t.molecules[u]; "rna" == l.type ? (s = new o(l.seq, l.ss, l.header), s.circularizeExternal = !0, s.elementsToJson().addPositions("nucleotide", l.positions).addLabels().reinforceStems().reinforceLoops()) : "protein" == l.type && (s = new i(l.header, l.size)), s.addUids(l.uids); for (var c = 0; c < s.nodes.length; c++) n[s.nodes[c].uid] = s.nodes[c];
                e.push(s) } for (var u = 0; u < t.extraLinks.length; u++) link = t.extraLinks[u], link.source = n[link.source], link.target = n[link.target], link.uid = r(), a.push(link); return { graphs: e, extraLinks: a } }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.ProteinGraph = i, n.RNAGraph = o, n.moleculesToJson = a;
        var u = e(2),
            s = function(t, n) { return t - n };
        "undefined" == typeof String.prototype.trim && (String.prototype.trim = function() { return String(this).replace(/^\s+|\s+$/g, "") })
    }, function(t, n, e) {! function(n, e) { t.exports = e() }(this, function() { return function(t) {
                function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports } var e = {}; return n.m = t, n.c = e, n.p = "", n(0) }([function(t, n, e) { t.exports = e(1) }, function(t, n) { "use strict";

                function e(t, n) { if (t === n) return !0; if (null === t || null === n) return !1; if (t.length != n.length) return !1; for (var e = 0; e < t.length; ++e)
                        if (t[e] !== n[e]) return !1;
                    return !0 }

                function r() { var t = this;
                    t.bracketLeft = "([{<ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), t.bracketRight = ")]}>abcdefghijklmnopqrstuvwxyz".split(""), t.inverseBrackets = function(t) { for (var n = {}, e = 0; e < t.length; e++) n[t[e]] = e; return n }, t.maximumMatching = function(t) { for (var n = t[0], e = 0, r = new Array(n + 1), i = 0; n >= i; i++) { r[i] = new Array(n + 1); for (var o = i; n >= o; o++) r[i][o] = 0 } for (var a = 0, i = n - e - 1; i > 0; i--)
                            for (var o = i + e + 1; n >= o; o++) { a = r[i][o - 1]; for (var u = o - e - 1; u >= i; u--) t[u] === o && (a = Math.max(a, (u > i ? r[i][u - 1] : 0) + 1 + (o - u - 1 > 0 ? r[u + 1][o - 1] : 0)));
                                r[i][o] = a }
                        return a = r[1][n], r }, t.backtrackMaximumMatching = function(n, e) { var r = Array.apply(null, Array(n.length)).map(function() { return 0 }); return t.mmBt(n, r, e, 1, n.length - 1), r }, t.mmBt = function(n, e, r, i, o) { var a = n[i][o],
                            u = 0; if (!(u > o - i - 1)) { if (n[i][o - 1] == a) return void t.mmBt(n, e, r, i, o - 1); for (var s = o - u - 1; s >= i; s--)
                                if (r[o] === s) { var l = s > i ? n[i][s - 1] : 0,
                                        c = o - s - 1 > 0 ? n[s + 1][o - 1] : 0; if (l + c + 1 == a) return e[s] = o, e[o] = s, s > i && t.mmBt(n, e, r, i, s - 1), void t.mmBt(n, e, r, s + 1, o - 1) }
                            console.log("FAILED!!!" + i + "," + o + ": backtracking failed!") } }, t.dotbracketToPairtable = function(n) { var e = Array.apply(null, new Array(n.length + 1)).map(Number.prototype.valueOf, 0);
                        e[0] = n.length; for (var r = {}, i = 0; i < t.bracketLeft.length; i++) r[i] = []; for (var o = t.inverseBrackets(t.bracketLeft), a = t.inverseBrackets(t.bracketRight), i = 0; i < n.length; i++) { var u = n[i],
                                s = i + 1; if ("." == u || "o" == u) e[s] = 0;
                            else if (u in o) r[o[u]].push(s);
                            else { if (!(u in a)) throw "Unknown symbol in dotbracket string"; var l = r[a[u]].pop();
                                e[s] = l, e[l] = s } } for (var c in r)
                            if (r[c].length > 0) throw "Unmatched base at position " + r[c][0];
                        return e }, t.insertIntoStack = function(t, n, e) { for (var r = 0; t[r].length > 0 && t[r][t[r].length - 1] < e;) r += 1; return t[r].push(e), r }, t.deleteFromStack = function(t, n) { for (var e = 0; 0 === t[e].length || t[e][t[e].length - 1] != n;) e += 1; return t[e].pop(), e }, t.pairtableToDotbracket = function(n) { for (var e = {}, r = 0; r < n[0]; r++) e[r] = []; for (var r, i = {}, o = "", r = 1; r < n[0] + 1; r++) { if (0 !== n[r] && n[r] in i) throw "Invalid pairtable contains duplicate entries";
                            i[n[r]] = !0, o += 0 === n[r] ? "." : n[r] > r ? t.bracketLeft[t.insertIntoStack(e, r, n[r])] : t.bracketRight[t.deleteFromStack(e, r)] } return o }, t.findUnmatched = function(n, e, r) { for (var i, o = [], a = [], u = e, s = r, i = e; r >= i; i++) 0 !== n[i] && (n[i] < e || n[i] > r) && a.push([i, n[i]]); for (var i = u; s >= i; i++) { for (; 0 === n[i] && s >= i;) i++; for (r = n[i]; n[i] === r;) i++, r--;
                            o = o.concat(t.findUnmatched(n, i, r)) } return a.length > 0 && o.push(a), o }, t.removePseudoknotsFromPairtable = function(n) { for (var e = t.maximumMatching(n), r = t.backtrackMaximumMatching(e, n), i = [], o = 1; o < n.length; o++) n[o] < o || r[o] != n[o] && (i.push([o, n[o]]), n[n[o]] = 0, n[o] = 0); return i }, t.ptToElements = function(n, e, r, i, a) { var u = [],
                            s = [r - 1],
                            l = [i + 1]; if (arguments.length < 5 && (a = []), r > i) return []; for (; 0 === n[r]; r++) s.push(r); for (; 0 === n[i]; i--) l.push(i); if (r > i) { if (s.push(r), 0 === e) return [
                                ["e", e, s.sort(o)]
                            ]; for (var c = !1, f = [], h = [], p = 0; p < s.length; p++) c ? h.push(s[p]) : f.push(s[p]), a.indexOf(s[p]) >= 0 && (c = !0); return c ? [
                                ["h", e, s.sort(o)]
                            ] : [
                                ["h", e, s.sort(o)]
                            ] } if (n[r] != i) { var d = s,
                                p = r; for (d.push(p); i >= p;) { for (u = u.concat(t.ptToElements(n, e, p, n[p], a)), d.push(n[p]), p = n[p] + 1; 0 === n[p] && i >= p; p++) d.push(p);
                                d.push(p) } return d.pop(), d = d.concat(l), d.length > 0 && (0 === e ? u.push(["e", e, d.sort(o)]) : u.push(["m", e, d.sort(o)])), u } if (n[r] === i) { s.push(r), l.push(i); var g = s.concat(l);
                            g.length > 4 && (0 === e ? u.push(["e", e, s.concat(l).sort(o)]) : u.push(["i", e, s.concat(l).sort(o)])) } for (var v = []; n[r] === i && i > r;) v.push(r), v.push(i), r += 1, i -= 1, e += 1; return s = [r - 1], l = [i + 1], u.push(["s", e, v.sort(o)]), u.concat(t.ptToElements(n, e, r, i, a)) } }

                function i(t) { var n = this; return n.colorsText = t, n.parseRange = function(t) { for (var n = t.split(","), e = [], r = 0; r < n.length; r++) { var i = n[r].split("-"); if (1 == i.length) e.push(parseInt(i[0]));
                            else if (2 == i.length)
                                for (var o = parseInt(i[0]), a = parseInt(i[1]), u = o; a >= u; u++) e.push(u);
                            else console.log("Malformed range (too many dashes):", t) } return e }, n.parseColorText = function(t) { for (var e = t.split("\n"), r = "", i = 1, o = { colorValues: { "": {} }, range: ["white", "steelblue"] }, a = [], u = 0; u < e.length; u++)
                            if (">" != e[u][0])
                                for (var s = e[u].trim().split(/[\s]+/), l = 0; l < s.length; l++)
                                    if (isNaN(s[l])) { if (0 === s[l].search("range")) { var c = s[l].split("="),
                                                f = c[1].split(":");
                                            o.range = [f[0], f[1]]; continue } if (0 == s[l].search("domain")) { var h = s[l].split("="),
                                                f = h[1].split(":");
                                            o.domain = [f[0], f[1]]; continue } for (var p = s[l].split(":"), d = n.parseRange(p[0]), g = p[1], v = 0; v < d.length; v++) isNaN(g) ? o.colorValues[r][d[v]] = g : (o.colorValues[r][d[v]] = +g, a.push(Number(g))) } else o.colorValues[r][i] = Number(s[l]), i += 1, a.push(Number(s[l]));
                        else r = e[u].trim().slice(1), i = 1, o.colorValues[r] = {}; return "domain" in o || (o.domain = [Math.min.apply(null, a), Math.max.apply(null, a)]), n.colorsJson = o, n }, n.normalizeColors = function() { var t; for (var e in n.colorsJson) { var r = Number.MAX_VALUE,
                                i = Number.MIN_VALUE; for (var o in n.colorsJson.colorValues[e]) t = n.colorsJson.colorValues[e][o], "number" == typeof t && (r > t && (r = t), t > i && (i = t)); for (o in n.colorsJson.colorValues[e]) t = n.colorsJson.colorValues[e][o], "number" == typeof t && (n.colorsJson.colorValues[e][o] = (t - r) / (i - r)) } return n }, n.parseColorText(n.colorsText), n }
                Object.defineProperty(n, "__esModule", { value: !0 }), n.arraysEqual = e, n.RNAUtilities = r, n.ColorScheme = i; var o = function(t, n) { return t - n };
                n.rnaUtilities = new r }]) }) }, function(t, n, e) { "use strict";

        function r() {
            function t(t, n) {
                function e(t, n, e) { var r = (t.range()[1] - t.range()[0]) / (t.domain()[1] - t.domain()[0]),
                        i = (n[1] - n[0]) * r,
                        o = (e[1] - e[0] - i) / 2; return { scaleFactor: r, scale: d3.scale.linear().domain(n).range([e[0] + o, e[1] - o]) } } var r = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2],
                    i = d3.extent(t),
                    o = d3.extent(n),
                    a = 30; "" != r && (o[1] += a), i[0] -= f.nucleotideRadius + f.rnaEdgePadding, o[0] -= f.nucleotideRadius + f.rnaEdgePadding, i[1] += f.nucleotideRadius + f.rnaEdgePadding, o[1] += f.nucleotideRadius + f.rnaEdgePadding; var u, s = i[1] - i[0],
                    h = o[1] - o[0],
                    p = s - f.width,
                    d = h - f.height;
                p > d ? (l = d3.scale.linear().domain(i).range([0, f.width]), u = e(l, o, [0, f.height]), c = u.scale) : (c = d3.scale.linear().domain(o).range([0, f.height]), u = e(c, i, [0, f.width]), l = u.scale);
                l.range()[0] - l.domain()[0], c.range()[0] - c.domain()[0]; return "translate(" + -(l.domain()[0] * u.scaleFactor - l.range()[0]) + "," + -(c.domain()[0] * u.scaleFactor - c.range()[0]) + ")scale(" + u.scaleFactor + ")" }

            function n(t, n) { var e = t.selectAll(".rna-base").data(n).enter().append("svg:g").attr("transform", function(t) { return "translate(" + t.x + "," + t.y + ")" });
                e.append("svg:circle").attr("r", f.nucleotideRadius).classed("rna-base", !0); if (f.showNucleotideLabels) { e.append("svg:text").text(function(t) { return t.name }).attr("text-anchor", "middle").attr("dominant-baseline", "central").classed("nucleotide-label", !0).append("svg:title").text(function(t) { return t.struct_name + ":" + t.num }) } }

            function e(t, n) { var e = t.selectAll(".rnaLabel").data(n).enter().append("svg:g").attr("transform", function(t) { return "translate(" + t.x + "," + t.y + ")" });
                e.append("svg:text").text(function(t) { return t.name }).attr("text-anchor", "middle").attr("font-weight", "bold").attr("dominant-baseline", "central").classed("number-label", !0) }

            function r(t, n) { t.append("svg:text").attr("transform", "translate(" + l.invert(f.width / 2) + "," + c.invert(f.height) + ")").attr("dy", -10).classed("rna-name", !0).text(n) }

            function a(t, n) { var e = {},
                    r = [];
                n = n.filter(function(t) { return "correct" == t.linkType || "incorrect" == t.linkType || "extra" == t.linkType }), t.selectAll("[link-type=extra]").remove(); for (var i = 0; i < n.length; i++) null !== n[i].source && null !== n[i].target && (e[n[i].source.uid] = n[i].source, e[n[i].target.uid] = n[i].target, r.push({ source: n[i].source.uid, target: n[i].target.uid, linkType: n[i].linkType, extraLinkType: n[i].extraLinkType })); for (var o = d3.ForceEdgeBundling().nodes(e).edges(r).compatibility_threshold(.8).step_size(.2), a = o(), u = d3.svg.line().x(function(t) { return t.x }).y(function(t) { return t.y }).interpolate("linear"), i = 0; i < a.length; i++) { var s = a[i];
                    t.append("path").attr("d", u(s)).style("fill", "none").attr("link-type", function(t) { return r[i].linkType }).attr("extra-link-type", function(t) { return r[i].extraLinkType }).style("stroke-opacity", .4) } }

            function u(t, n) { n = n.filter(function(t) { return null !== t.source && null !== t.target });
                t.selectAll(".rna-link").data(n).enter().append("svg:line").attr("x1", function(t) { return t.source.x }).attr("x2", function(t) { return t.target.x }).attr("y1", function(t) { return t.source.y }).attr("y2", function(t) { return t.target.y }).attr("link-type", function(t) { return t.linkType }).attr("extra-link-type", function(t) { return t.extraLinkType }).classed("rna-link", !0) }

            function s(s) { s.each(function(s) { var l = new i.RNAGraph(s.sequence, s.structure, s.name).recalculateElements().elementsToJson().addName(s.name);
                    s.rnaGraph = l; for (var c = new o.NAView, h = c.naview_xy_coordinates(l.pairtable), p = [], d = 0; d < h.nbase; d++) p.push([h.x[d], h.y[d]]);
                    l.addPositions("nucleotide", p).reinforceStems().reinforceLoops().addExtraLinks(s.extraLinks).addLabels(f.startNucleotideNumber, f.labelInterval); var g = t(l.nodes.map(function(t) { return t.x }), l.nodes.map(function(t) { return t.y })),
                        v = d3.select(this).append("g").attr("transform", g),
                        y = l.nodes.filter(function(t) { return "nucleotide" == t.nodeType }),
                        m = l.nodes.filter(function(t) { return "label" == t.nodeType }),
                        x = l.links;
                    u(v, x), n(v, y), e(v, m), r(v, s.name), f.bundleExternalLinks && a(v, x) }) } var l, c, f = { width: 400, height: 400, nucleotideRadius: 5, rnaEdgePadding: 0, labelInterval: 0, showNucleotideLabels: !0, startNucleotideNumber: 1, bundleExternalLinks: !1 }; return s.width = function(t) { return arguments.length ? (f.width = t, s) : f.width }, s.height = function(t) { return arguments.length ? (f.height = t, s) : f.height }, s.showNucleotideLabels = function(t) { return arguments.length ? (f.showNucleotideLabels = t, s) : f.showNucleotideLabels }, s.rnaEdgePadding = function(t) { return arguments.length ? (f.rnaEdgePadding = t, s) : f.rnaEdgePadding }, s.nucleotideRadius = function(t) { return arguments.length ? (f.nucleotideRadius = t, s) : f.nucleotideRadius }, s.labelInterval = function(t) { return arguments.length ? (f.labelInterval = t, s) : f.labelInterval }, s.showNucleotideLabels = function(t) { return arguments.length ? (f.showNucleotideLabels = t, s) : f.showNucleotideLabels }, s.startNucleotideNumber = function(t) { return arguments.length ? (f.startNucleotideNumber = t, s) : f.startNucleotideNumber }, s.bundleExternalLinks = function(t) { return arguments.length ? (f.bundleExternalLinks = t, s) : f.bundleExternalLinks }, s }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.rnaPlot = r; var i = (e(4), e(1)),
            o = e(5);
        e(2);
        e(11), "undefined" == typeof String.prototype.trim && (String.prototype.trim = function() { return String(this).replace(/^\s+|\s+$/g, "") }) }, function(t, n) { "use strict";

        function e(t) { var n, e, r, i = 0,
                o = 100,
                a = 100,
                u = 15,
                s = [],
                l = [];
            e = t[0]; var c = Array.apply(null, new Array(e + 5)).map(Number.prototype.valueOf, 0),
                f = Array.apply(null, new Array(16 + Math.floor(e / 5))).map(Number.prototype.valueOf, 0),
                h = Array.apply(null, new Array(16 + Math.floor(e / 5))).map(Number.prototype.valueOf, 0),
                p = 0,
                d = 0,
                g = Math.PI / 2,
                v = function m(t, n, e) { var r, i, o, a, u, s, l, v, y, x, b, k, M = 2,
                        _ = 0,
                        w = 0,
                        N = Array.apply(null, new Array(3 + 2 * Math.floor((n - t) / 5))).map(Number.prototype.valueOf, 0); for (r = t - 1, n++; t != n;)
                        if (i = e[t], i && 0 != t) { M += 2, o = t, a = i, N[++_] = o, N[++_] = a, t = i + 1, u = o, s = a, v = 0;
                            do o++, a--, v++; while (e[o] == a && e[o] > o); if (l = v - 2, v >= 2 && (c[u + 1 + l] += g, c[s - 1 - l] += g, c[u] += g, c[s] += g, v > 2))
                                for (; l >= 1; l--) c[u + l] = Math.PI, c[s - l] = Math.PI;
                            h[++d] = v, o <= a && m(o, a, e) } else t++, M++, w++;
                    for (k = Math.PI * (M - 2) / M, N[++_] = n, y = r < 0 ? 0 : r, x = 1; x <= _; x++) { for (b = N[x] - y, l = 0; l <= b; l++) c[y + l] += k; if (x > _) break;
                        y = N[++x] }
                    f[++p] = w };
            v(0, e + 1, t), f[p] -= 2, r = i, s[0] = o, l[0] = a; var y = []; for (y.push([s[0], l[0]]), n = 1; n < e; n++) s[n] = s[n - 1] + u * Math.cos(r), l[n] = l[n - 1] + u * Math.sin(r), y.push([s[n], l[n]]), r += Math.PI - c[n + 1]; return y }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.simpleXyCoordinates = e }, function(t, n, e) { "use strict";

        function r() { this.ANUM = 9999, this.MAXITER = 500, this.bases = [], this.nbase = null, this.nregion = null, this.loop_count = null, this.root = new c.Loop, this.loops = [], this.regions = [], this.rlphead = new a.Radloop, this.lencut = .8, this.RADIUS_REDUCTION_FACTOR = 1.4, this.angleinc = null, this._h = null, this.HELIX_FACTOR = .6, this.BACKBONE_DISTANCE = 27 }

        function i() { var t = new c.Loop,
                n = null,
                e = null; for (n = 0; n < this.loop_count; n++) { for (t = this.loops[n], e = 0; e < this.loop_count; e++) this.loops[e].setMark(!1);
                t.setDepth(o(t)) } }

        function o(t) { var n = null,
                e = null,
                r = null; if (t.getNconnection() <= 1) return 0; if (t.isMark()) return -1;
            t.setMark(!0), n = 0, e = 0; for (var i = 0; null != t.getConnection(i); i++) r = o(t.getConnection(i).getLoop()), r >= 0 && (1 == ++n ? e = r : e > r && (e = r)); return t.setMark(!1), e + 1 }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.NAView = r; var a = e(6),
            u = e(7),
            s = e(9),
            l = e(10),
            c = e(8);
        r.prototype.naview_xy_coordinates = function(t) { var n = [],
                e = []; if (0 === t.length || 0 === t[0]) return 0; var r;
            this.nbase = t[0], this.bases = []; for (var i = 0; i < this.nbase + 1; i++) this.bases.push(new l.Base);
            this.regions = []; for (var i = 0; i < this.nbase + 1; i++) this.regions.push(new s.Region);
            this.read_in_bases(t), this.rlphead = null, this.find_regions(), this.loop_count = 0, this.loops = []; for (var i = 0; i < this.nbase + 1; i++) this.loops.push(new c.Loop); for (this.construct_loop(0), this.find_central_loop(), this.traverse_loop(this.root, null), r = 0; r < this.nbase; r++) n.push(100 + this.BACKBONE_DISTANCE * this.bases[r + 1].getX()), e.push(100 + this.BACKBONE_DISTANCE * this.bases[r + 1].getY()); return { nbase: this.nbase, x: n, y: e } }, r.prototype.read_in_bases = function(t) { var n = null,
                e = null; for (this.bases.push(new l.Base), this.bases[0].setMate(0), this.bases[0].setExtracted(!1), this.bases[0].setX(this.ANUM), this.bases[0].setY(this.ANUM), e = 0, n = 1; n <= this.nbase; n++) this.bases.push(new l.Base), this.bases[n].setExtracted(!1), this.bases[n].setX(this.ANUM), this.bases[n].setY(this.ANUM), this.bases[n].setMate(t[n]), t[n] > n && e++;
            0 == e && (this.bases[1].setMate(this.nbase), this.bases[this.nbase].setMate(1)) }, r.prototype.find_regions = function() { var t = null,
                n = null,
                e = null;
            e = this.nbase + 1; var r = []; for (t = 0; t < e; t++) r.push(!1); for (this.nregion = 0, t = 0; t <= this.nbase; t++)
                if (0 != (n = this.bases[t].getMate()) && !r[t]) { for (this.regions[this.nregion].setStart1(t), this.regions[this.nregion].setEnd2(n), r[t] = !0, r[n] = !0, this.bases[t].setRegion(this.regions[this.nregion]), this.bases[n].setRegion(this.regions[this.nregion]), t++, n--; t < n && this.bases[t].getMate() == n; t++, n--) r[n] = !0, r[t] = !0, this.bases[t].setRegion(this.regions[this.nregion]), this.bases[n].setRegion(this.regions[this.nregion]);
                    this.regions[this.nregion].setEnd1(--t), this.regions[this.nregion].setStart2(n + 1), this.nregion++ } }, r.prototype.construct_loop = function(t) { var n = null,
                e = null,
                r = new c.Loop,
                i = new c.Loop,
                o = new u.Connection,
                l = new s.Region,
                f = new a.Radloop; for (r = this.loops[this.loop_count++], r.setNconnection(0), r.setDepth(0), r.setNumber(this.loop_count), r.setRadius(0), f = this.rlphead; null != f; f = f.getNext()) f.getLoopnumber() == this.loop_count && r.setRadius(f.getRadius());
            n = t;
            do 0 != (e = this.bases[n].getMate()) && (l = this.bases[n].getRegion(), this.bases[l.getStart1()].isExtracted() || (n == l.getStart1() ? (this.bases[l.getStart1()].setExtracted(!0), this.bases[l.getEnd1()].setExtracted(!0), this.bases[l.getStart2()].setExtracted(!0), this.bases[l.getEnd2()].setExtracted(!0), i = this.construct_loop(l.getEnd1() < this.nbase ? l.getEnd1() + 1 : 0)) : n == l.getStart2() ? (this.bases[l.getStart2()].setExtracted(!0), this.bases[l.getEnd2()].setExtracted(!0), this.bases[l.getStart1()].setExtracted(!0), this.bases[l.getEnd1()].setExtracted(!0), i = this.construct_loop(l.getEnd2() < this.nbase ? l.getEnd2() + 1 : 0)) : console.log("Something went terribly wrong ...."), r.setNconnection(r.getNconnection() + 1), o = new u.Connection, r.setConnection(r.getNconnection() - 1, o), r.setConnection(r.getNconnection(), null), o.setLoop(i), o.setRegion(l), n == l.getStart1() ? (o.setStart(l.getStart1()), o.setEnd(l.getEnd2())) : (o.setStart(l.getStart2()), o.setEnd(l.getEnd1())), o.setExtruded(!1), o.setBroken(!1), i.setNconnection(i.getNconnection() + 1), o = new u.Connection, i.setConnection(i.getNconnection() - 1, o), i.setConnection(i.getNconnection(), null), o.setLoop(r), o.setRegion(l), n == l.getStart1() ? (o.setStart(l.getStart2()), o.setEnd(l.getEnd1())) : (o.setStart(l.getStart1()), o.setEnd(l.getEnd2())), o.setExtruded(!1), o.setBroken(!1)), n = e), ++n > this.nbase && (n = 0); while (n != t); return r }, r.prototype.find_central_loop = function() { var t = new c.Loop,
                n = null,
                e = null,
                r = null; for (i.bind(this)(), n = 0, e = -1, r = 0; r < this.loop_count; r++) t = this.loops[r], t.getNconnection() > n ? (e = t.getDepth(), n = t.getNconnection(), this.root = t) : t.getDepth() > e && t.getNconnection() == n && (e = t.getDepth(), this.root = t) }, r.prototype.traverse_loop = function(t, n) { var e, r, i, o, a, u, s, l, c, f, h, p, d, g, v, y, m, x, b, k, M, _, w, N, S, E, A, L, T, C, P, R, z, q, I, O, U, Y, D, X, F, j, B, H, V, G, J, Z, W, $, K, Q, tt, nt, et, rt, it, ot, at, ut, st, lt, ct, ft, ht, pt, dt, gt, vt, yt, mt, xt = 0;
            s = 2 * Math.PI / (this.nbase + 1), b = null, P = -1; var bt = 0; for (N = 0; null != (m = t.getConnection(bt)); bt++, N++) e = -Math.sin(s * m.getStart()), r = Math.cos(s * m.getStart()), i = -Math.sin(s * m.getEnd()), o = Math.cos(s * m.getEnd()), a = o - r, u = e - i, l = Math.sqrt(a * a + u * u), m.setXrad(a / l), m.setYrad(u / l), m.setAngle(Math.atan2(u, a)), m.getAngle() < 0 && m.setAngle(m.getAngle() + 2 * Math.PI), null != n && n.getRegion() == m.getRegion() && (b = m, P = N);
            t: for (;;) { this.determine_radius(t, this.lencut), c = t.getRadius() / this.RADIUS_REDUCTION_FACTOR, null == n ? f = h = 0 : (p = (this.bases[b.getStart()].getX() + this.bases[b.getEnd()].getX()) / 2, d = (this.bases[b.getStart()].getY() + this.bases[b.getEnd()].getY()) / 2, f = p - c * b.getXrad(), h = d - c * b.getYrad()), L = P == -1 ? 0 : P, m = t.getConnection(L), A = 0, R = !1;
                do
                    if (_ = L - 1, _ < 0 && (_ = t.getNconnection() - 1), k = t.getConnection(_), this.connected_connection(k, m) ? (L = _, m = k) : R = !0, ++A > t.getNconnection()) { for (E = -1, N = 0; N < t.getNconnection(); N++) _ = N + 1, _ >= t.getNconnection() && (_ = 0), m = t.getConnection(N), x = t.getConnection(_), dt = x.getAngle() - m.getAngle(), dt < 0 && (dt += 2 * Math.PI), dt > E && (E = dt, xt = N);
                        T = xt, L = xt + 1, L >= t.getNconnection() && (L = 0), m = t.getConnection(T), m.setBroken(!0), R = !0 } while (!R);
                for (z = !1, J = L; !z;) { for (A = 0, R = !1, T = L, q = !1; !R;)
                        if (m = t.getConnection(T), T == P && (q = !0), _ = T + 1, _ >= t.getNconnection() && (_ = 0), x = t.getConnection(_), this.connected_connection(m, x)) { if (++A >= t.getNconnection()) break;
                            T = _ } else R = !0;
                    for (C = this.find_ic_middle(L, T, n, b, t), N = Z = W = C, R = !1, K = 0; !R;) N = K < 0 ? Z : 0 == K ? C : W, N >= 0 && (m = t.getConnection(N), null != n && b == m || (0 == K ? (g = m.getAngle() - Math.asin(.5 / c), v = m.getAngle() + Math.asin(.5 / c), this.bases[m.getStart()].setX(f + c * Math.cos(g)), this.bases[m.getStart()].setY(h + c * Math.sin(g)), this.bases[m.getEnd()].setX(f + c * Math.cos(v)), this.bases[m.getEnd()].setY(h + c * Math.sin(v))) : K < 0 ? (_ = N + 1, _ >= t.getNconnection() && (_ = 0), m = t.getConnection(N), x = t.getConnection(_), rt = m.getXrad(), it = m.getYrad(), dt = (m.getAngle() + x.getAngle()) / 2, m.getAngle() > x.getAngle() && (dt -= Math.PI), ut = Math.cos(dt), st = Math.sin(dt), ft = st, ht = -ut, S = x.getAngle() - m.getAngle(), S < 0 && (S += 2 * Math.PI), pt = m.isExtruded() ? S <= Math.PI / 2 ? 2 : 1.5 : 1, this.bases[m.getEnd()].setX(this.bases[x.getStart()].getX() + pt * ft), this.bases[m.getEnd()].setY(this.bases[x.getStart()].getY() + pt * ht), this.bases[m.getStart()].setX(this.bases[m.getEnd()].getX() + it), this.bases[m.getStart()].setY(this.bases[m.getEnd()].getY() - rt)) : (_ = N - 1, _ < 0 && (_ = t.getNconnection() - 1), m = t.getConnection(_), x = t.getConnection(N), ot = x.getXrad(), at = x.getYrad(), dt = (m.getAngle() + x.getAngle()) / 2, m.getAngle() > x.getAngle() && (dt -= Math.PI), ut = Math.cos(dt), st = Math.sin(dt), ft = -st, ht = ut, S = x.getAngle() - m.getAngle(), S < 0 && (S += 2 * Math.PI), pt = m.isExtruded() ? S <= Math.PI / 2 ? 2 : 1.5 : 1, this.bases[x.getStart()].setX(this.bases[m.getEnd()].getX() + pt * ft), this.bases[x.getStart()].setY(this.bases[m.getEnd()].getY() + pt * ht), this.bases[x.getEnd()].setX(this.bases[x.getStart()].getX() - at), this.bases[x.getEnd()].setY(this.bases[x.getStart()].getY() + ot)))), K < 0 ? (W == T ? W = -1 : W >= 0 && ++W >= t.getNconnection() && (W = 0), K = 1) : (Z == L ? Z = -1 : Z >= 0 && --Z < 0 && (Z = t.getNconnection() - 1), K = -1), R = Z == -1 && W == -1; if ($ = T + 1, $ >= t.getNconnection() && ($ = 0), T != L && (L != J || $ != J))
                        if (m = t.getConnection(L), x = t.getConnection(T), tt = this.bases[x.getEnd()].getX() - this.bases[m.getStart()].getX(), nt = this.bases[x.getEnd()].getY() - this.bases[m.getStart()].getY(), O = this.bases[m.getStart()].getX() + tt / 2, U = this.bases[m.getStart()].getY() + nt / 2, et = Math.sqrt(tt * tt + nt * nt), X = tt / et, F = nt / et, j = f - O, B = h - U, et = Math.sqrt(tt * tt + nt * nt), j /= et, B /= et, H = j * X + B * F, Y = H * X - j, D = H * F - B, et = Math.sqrt(Y * Y + D * D), Y /= et, D /= et, tt = this.bases[m.getStart()].getX() - f, nt = this.bases[m.getStart()].getY() - h, dt = Math.atan2(nt, tt), dt < 0 && (dt += 2 * Math.PI), tt = this.bases[x.getEnd()].getX() - f, nt = this.bases[x.getEnd()].getY() - h, gt = Math.atan2(nt, tt), gt < 0 && (gt += 2 * Math.PI), gt < dt && (gt += 2 * Math.PI), I = gt - dt > Math.PI ? -1 : 1, V = f + I * c * Y, G = h + I * c * D, q) f -= V - O, h -= G - U;
                        else
                            for (N = L; m = t.getConnection(N), M = m.getStart(), this.bases[M].setX(this.bases[M].getX() + V - O), this.bases[M].setY(this.bases[M].getY() + G - U), M = m.getEnd(), this.bases[M].setX(this.bases[M].getX() + V - O), this.bases[M].setY(this.bases[M].getY() + G - U), N != T;) ++N >= t.getNconnection() && (N = 0);
                    L = $, z = L == J } for (N = 0; N < t.getNconnection(); N++) { if (m = t.getConnection(N), _ = N + 1, _ >= t.getNconnection() && (_ = 0), x = t.getConnection(_), tt = this.bases[m.getEnd()].getX() - f, nt = this.bases[m.getEnd()].getY() - h, ct = Math.sqrt(tt * tt + nt * nt), dt = Math.atan2(nt, tt), dt < 0 && (dt += 2 * Math.PI), tt = this.bases[x.getStart()].getX() - f, nt = this.bases[x.getStart()].getY() - h, lt = Math.sqrt(tt * tt + nt * nt), gt = Math.atan2(nt, tt), gt < 0 && (gt += 2 * Math.PI), gt < dt && (gt += 2 * Math.PI), Q = gt - dt, mt = x.getAngle() - m.getAngle(), mt <= 0 && (mt += 2 * Math.PI), Math.abs(Q - mt) > Math.PI)
                        if (m.isExtruded()) console.log("Warning from traverse_loop. Loop " + t.getNumber() + " has crossed regions\n");
                        else if (x.getStart() - m.getEnd() != 1) { m.setExtruded(!0); continue t } if (m.isExtruded()) this.construct_extruded_segment(m, x);
                    else
                        for (w = x.getStart() - m.getEnd(), w < 0 && (w += this.nbase + 1), s = Q / w, _ = 1; _ < w; _++) M = m.getEnd() + _, M > this.nbase && (M -= this.nbase + 1), y = dt + _ * s, et = ct + (lt - ct) * (y - dt) / Q, this.bases[M].setX(f + et * Math.cos(y)), this.bases[M].setY(h + et * Math.sin(y)) } break }
            for (N = 0; N < t.getNconnection(); N++) P != N && (m = t.getConnection(N), this.generate_region(m), this.traverse_loop(m.getLoop(), m)); for (w = 0, vt = 0, yt = 0, N = 0; N < t.getNconnection(); N++)
                if (_ = N + 1, _ >= t.getNconnection() && (_ = 0), m = t.getConnection(N), x = t.getConnection(_), w += 2, vt += this.bases[m.getStart()].getX() + this.bases[m.getEnd()].getX(), yt += this.bases[m.getStart()].getY() + this.bases[m.getEnd()].getY(), !m.isExtruded())
                    for (_ = m.getEnd() + 1; _ != x.getStart(); _++) _ > this.nbase && (_ -= this.nbase + 1), w++, vt += this.bases[_].getX(), yt += this.bases[_].getY();
            t.setX(vt / w), t.setY(yt / w) }, r.prototype.determine_radius = function(t, n) { var e, r, i, o, a, s, l, c, f, h, p, d = 0,
                g = new u.Connection,
                v = new u.Connection,
                y = .7071068;
            do { for (e = 1e10, a = 0, o = 0, c = 0; c < t.getNconnection(); c++) g = t.getConnection(c), f = c + 1, f >= t.getNconnection() && (f = 0), v = t.getConnection(f), h = g.getEnd(), p = v.getStart(), p < h && (p += this.nbase + 1), i = v.getAngle() - g.getAngle(), i <= 0 && (i += 2 * Math.PI), r = g.isExtruded() ? i <= Math.PI / 2 ? 2 : 1.5 : p - h, o += i * (1 / r + 1), a += i * i / r, l = i / r, l < e && !g.isExtruded() && r > 1 && (e = l, d = c);
                s = o / a, s < y && (s = y), e * s < n && t.getConnection(d).setExtruded(!0) } while (e * s < n);
            t.getRadius() > 0 ? s = t.getRadius() : t.setRadius(s) }, r.prototype.find_ic_middle = function(t, n, e, r, i) { var o, a, u, s, l; for (o = 0, a = -1, u = t, l = !1; !l;) o++ > 2 * i.getNconnection() && console.log("Infinite loop in 'find_ic_middle'"), null != e && i.getConnection(u) == r && (a = u), l = u == n, ++u >= i.getNconnection() && (u = 0); if (a == -1) { for (s = 1, u = t; s < (o + 1) / 2; s++) ++u >= i.getNconnection() && (u = 0);
                a = u } return a }, r.prototype.construct_extruded_segment = function(t, n) { var e, r, i, o, a, u, s, l, c, f, h, p, d, g, v, y, m, x; if (e = t.getAngle(), i = r = n.getAngle(), i < e && (i += 2 * Math.PI), o = (e + i) / 2, d = t.getEnd(), g = n.getStart(), v = g - d, v < 0 && (v += this.nbase + 1), h = n.getAngle() - t.getAngle(), h < 0 && (h += 2 * Math.PI), 2 == v) this.construct_circle_segment(d, g);
            else { a = this.bases[g].getX() - this.bases[d].getX(), u = this.bases[g].getY() - this.bases[d].getY(), f = Math.sqrt(a * a + u * u), a /= f, u /= f, f >= 1.5 && h <= Math.PI / 2 && (y = d + 1, y > this.nbase && (y -= this.nbase + 1), m = g - 1, m < 0 && (m += this.nbase + 1), this.bases[y].setX(this.bases[d].getX() + .5 * a), this.bases[y].setY(this.bases[d].getY() + .5 * u), this.bases[m].setX(this.bases[g].getX() - .5 * a), this.bases[m].setY(this.bases[g].getY() - .5 * u), d = y, g = m);
                do x = !1, this.construct_circle_segment(d, g), y = d + 1, y > this.nbase && (y -= this.nbase + 1), a = this.bases[y].getX() - this.bases[d].getX(), u = this.bases[y].getY() - this.bases[d].getY(), s = Math.atan2(u, a), s < 0 && (s += 2 * Math.PI), p = s - e, p < 0 && (p += 2 * Math.PI), p > Math.PI && (x = !0), m = g - 1, m < 0 && (m += this.nbase + 1), a = this.bases[m].getX() - this.bases[g].getX(), u = this.bases[m].getY() - this.bases[g].getY(), l = Math.atan2(u, a), l < 0 && (l += 2 * Math.PI), p = r - l, p < 0 && (p += 2 * Math.PI), p > Math.PI && (x = !0), x && (c = this.minf2(o, e + .5), this.bases[y].setX(this.bases[d].getX() + Math.cos(c)), this.bases[y].setY(this.bases[d].getY() + Math.sin(c)), d = y, c = this.maxf2(o, i - .5), this.bases[m].setX(this.bases[g].getX() + Math.cos(c)), this.bases[m].setY(this.bases[g].getY() + Math.sin(c)), g = m, v -= 2); while (x && v > 1) } }, r.prototype.construct_circle_segment = function(t, n) { var e, r, i, o, a, u, s, l, c, f, h, p, d, g, v; if (e = this.bases[n].getX() - this.bases[t].getX(), r = this.bases[n].getY() - this.bases[t].getY(), i = Math.sqrt(e * e + r * r), d = n - t, d < 0 && (d += this.nbase + 1), i >= d)
                for (e /= i, r /= i, g = 1; g < d; g++) v = t + g, v > this.nbase && (v -= this.nbase + 1), this.bases[v].setX(this.bases[t].getX() + e * g / d), this.bases[v].setY(this.bases[t].getY() + r * g / d);
            else
                for (this.find_center_for_arc(d - 1, i), e /= i, r /= i, o = this.bases[t].getX() + e * i / 2, a = this.bases[t].getY() + r * i / 2, u = r, s = -e, l = o + this._h * u, c = a + this._h * s, f = this.bases[t].getX() - l, h = this.bases[t].getY() - c, i = Math.sqrt(f * f + h * h), p = Math.atan2(h, f), g = 1; g < d; g++) v = t + g, v > this.nbase && (v -= this.nbase + 1), this.bases[v].setX(l + i * Math.cos(p + g * this.angleinc)), this.bases[v].setY(c + i * Math.sin(p + g * this.angleinc)) }, r.prototype.find_center_for_arc = function(t, n) { var e, r, i, o, a, u, s, l, c;
            r = (t + 1) / Math.PI, i = -r - n / (t + 1.000001 - n), n < 1 && (i = 0), c = 0;
            do e = (r + i) / 2, o = Math.sqrt(e * e + n * n / 4), a = 1 - .5 / (o * o), Math.abs(a) > 1 && console.log("Unexpected large magnitude discriminant = " + a + " " + o), u = Math.acos(a), l = Math.acos(e / o), s = u * (t + 1) + 2 * l - 2 * Math.PI, s > 0 ? i = e : r = e; while (Math.abs(s) > 1e-4 && ++c < this.MAXITER);
            c >= this.MAXITER && (noIterationFailureYet && (console.log("Iteration failed in find_center_for_arc"), noIterationFailureYet = !1), e = 0, u = 0), this._h = e, this.angleinc = u }, r.prototype.generate_region = function(t) { var n, e, r, i, o, a; for (a = t.getRegion(), n = 0, t.getStart() == a.getStart1() ? (e = a.getStart1(), r = a.getEnd1()) : (e = a.getStart2(), r = a.getEnd2()), (this.bases[t.getStart()].getX() > this.ANUM - 100 || this.bases[t.getEnd()].getX() > this.ANUM - 100) && console.log("Bad region passed to generate_region. Coordinates not defined."), i = e + 1; i <= r; i++) n++, this.bases[i].setX(this.bases[t.getStart()].getX() + this.HELIX_FACTOR * n * t.getXrad()), this.bases[i].setY(this.bases[t.getStart()].getY() + this.HELIX_FACTOR * n * t.getYrad()), o = this.bases[i].getMate(), this.bases[o].setX(this.bases[t.getEnd()].getX() + this.HELIX_FACTOR * n * t.getXrad()), this.bases[o].setY(this.bases[t.getEnd()].getY() + this.HELIX_FACTOR * n * t.getYrad()) }, r.prototype.minf2 = function(t, n) { return t < n ? t : n }, r.prototype.maxf2 = function(t, n) { return t > n ? t : n }, r.prototype.connected_connection = function(t, n) { return !!t.isExtruded() || t.getEnd() + 1 == n.getStart() } }, function(t, n) { "use strict";

        function e() { this.radius = null, this.loopnumber = null, this.next = null, this.prev = null }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Radloop = e, e.prototype.getRadius = function() { return this.radius }, e.prototype.setRadius = function(t) { this.radius = t }, e.prototype.getLoopnumber = function() { return this.loopnumber }, e.prototype.setLoopnumber = function(t) { this.loopnumber = t }, e.prototype.getNext = function() { return this.next }, e.prototype.setNext = function(t) { this.next = t }, e.prototype.getPrev = function() { return this.prev }, e.prototype.setPrev = function(t) { this.prev = t } }, function(t, n, e) {
        "use strict";

        function r() {
            this.loop = new i.Loop, this.region = new o.Region, this.start = null, this.end = null, this.xrad = null, this.yrad = null,
                this.angle = null, this.extruded = null, this.broken = null, this._isNull = !1
        }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Connection = r;
        var i = e(8),
            o = e(9);
        r.prototype.isNull = function() { return this._isNull }, r.prototype.setNull = function(t) { this._isNull = t }, r.prototype.getLoop = function() { return this.loop }, r.prototype.setLoop = function(t) { this.loop = t }, r.prototype.getRegion = function() { return this.region }, r.prototype.setRegion = function(t) { this.region = t }, r.prototype.getStart = function() { return this.start }, r.prototype.setStart = function(t) { this.start = t }, r.prototype.getEnd = function() { return this.end }, r.prototype.setEnd = function(t) { this.end = t }, r.prototype.getXrad = function() { return this.xrad }, r.prototype.setXrad = function(t) { this.xrad = t }, r.prototype.getYrad = function() { return this.yrad }, r.prototype.setYrad = function(t) { this.yrad = t }, r.prototype.getAngle = function() { return this.angle }, r.prototype.setAngle = function(t) { this.angle = t }, r.prototype.isExtruded = function() { return this.extruded }, r.prototype.setExtruded = function(t) { this.extruded = t }, r.prototype.isBroken = function() { return this.broken }, r.prototype.setBroken = function(t) { this.broken = t }
    }, function(t, n, e) { "use strict";

        function r() { this.nconnection = null, this.connections = [], this._connections = [], this.number = null, this.depth = null, this.mark = null, this.x = null, this.y = null, this.radius = null }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Loop = r; var i = e(7);
        r.prototype.getNconnection = function() { return this.nconnection }, r.prototype.setNconnection = function(t) { this.nconnection = t }, r.prototype.setConnection = function(t, n) { null != n ? this._connections[t] = n : (this._connections[t] || (this._connections[t] = new i.Connection), this._connections[t].setNull(!0)) }, r.prototype.getConnection = function(t) { var n = e(7);
            this._connections[t] || (this._connections[t] = new n); var r = this._connections[t]; return r.isNull() ? null : r }, r.prototype.addConnection = function(t, n) { this._connections.push(n) }, r.prototype.getNumber = function() { return this.number }, r.prototype.setNumber = function(t) { this.number = t }, r.prototype.getDepth = function() { return this.depth }, r.prototype.setDepth = function(t) { this.depth = t }, r.prototype.isMark = function() { return this.mark }, r.prototype.setMark = function(t) { this.mark = t }, r.prototype.getX = function() { return this.x }, r.prototype.setX = function(t) { this.x = t }, r.prototype.getY = function() { return this.y }, r.prototype.setY = function(t) { this.y = t }, r.prototype.getRadius = function() { return this.radius }, r.prototype.setRadius = function(t) { this.radius = t } }, function(t, n) { "use strict";

        function e() { this._start1 = null, this._end1 = null, this._start2 = null, this._end2 = null }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Region = e, e.prototype.getStart1 = function() { return this._start1 }, e.prototype.setStart1 = function(t) { this._start1 = t }, e.prototype.getEnd1 = function() { return this._end1 }, e.prototype.setEnd1 = function(t) { this._end1 = t }, e.prototype.getStart2 = function() { return this._start2 }, e.prototype.setStart2 = function(t) { this._start2 = t }, e.prototype.getEnd2 = function() { return this._end2 }, e.prototype.setEnd2 = function(t) { this._end2 = t } }, function(t, n, e) { "use strict";

        function r() { this.mate = null, this.x = null, this.y = null, this.extracted = null, this.region = new i.Region }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Base = r; var i = e(9);
        r.prototype.getMate = function() { return this.mate }, r.prototype.setMate = function(t) { this.mate = t }, r.prototype.getX = function() { return this.x }, r.prototype.setX = function(t) { this.x = t }, r.prototype.getY = function() { return this.y }, r.prototype.setY = function(t) { this.y = t }, r.prototype.isExtracted = function() { return this.extracted }, r.prototype.setExtracted = function(t) { this.extracted = t }, r.prototype.getRegion = function() { return this.region }, r.prototype.setRegion = function(t) { this.region = t } }, function(t, n, e) { var r = e(12); "string" == typeof r && (r = [
            [t.id, r, ""]
        ]);
        e(14)(r, {});
        r.locals && (t.exports = r.locals) }, function(t, n, e) { n = t.exports = e(13)(), n.push([t.id, '.structure-background-rect {\n    stroke: black;\n    stroke-width: 5;\n    fill: transparent;\n}\n\ncircle.rna-base {\n  stroke: #ccc;\n  stroke-width: 1px;\n  opacity: 1;\n  fill: white;\n}\n\ncircle.rna-base.label {\n    stroke: transparent;\n    stroke-width: 0;\n    fill: white;\n}\n\nline.link {\n  stroke: #999;\n  stroke-opacity: 0.8;\n  stroke-width: 2;\n}\n\nline.rna-link {\n  stroke: #999;\n  stroke-opacity: 0.8;\n  stroke-width: 2;\n}\n\n.overlay {\n    fill: transparent;\n}\n\n.rna-name {\n    text-anchor: middle;\n    dy: -10;\n    font-family: Tahoma, Geneva, sans-serif;\n    font-size: 8pt;\n}\n\nline.rna-link[link-type="backbone"] {\n    stroke: transparent;\n}\n\nline.rna-link[link-type="basepair"] {\n    stroke: transparent;\n}\n\nline.rna-link[link-type="fake"] {\n    stroke: transparent;\n}\n\nline.rna-link[link-type="extra"] {\n    stroke: grey;\n}\n\nline.rna-link[extra-link-type="correct"] {\n    stroke: green;\n}\n\nline.rna-link[extra-link-type="incorrect"] {\n    stroke: green;\n}\n\n\npath {\n    stroke: grey;\n  stroke-width: 2;\n}\n\npath[extra-link-type="correct"] {\n    stroke: green;\n}\n\npath[extra-link-type="incorrect"] {\n    stroke: red;\n}\n\n\nline.basepair {\n  stroke: red;\n}\n\nline.intermolecule {\n  stroke: blue;\n}\n\nline.chain_chain {\n  stroke-dasharray: 3,3;\n}\n\nline.fake {\n  stroke: green;\n}\n\n.transparent {\n    fill: transparent;\n    stroke-width: 0;\n    stroke-opacity: 0;\n    opacity: 0;\n}\n\n.d3-tip {\n    line-height: 1;\n    font-weight: bold;\n    padding: 6px;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    border-radius: 4px;\n    pointer-events: none;\n          }\n\ntext.nucleotide-label {\n    font-size: 5.5pt;\n    font-weight: bold;\n    font-family: Tahoma, Geneva, sans-serif;\n    color: rgb(100,100,100);\n    pointer-events: none;\n}\n\ntext.number-label {\n    font-size: 5.5pt;\n    font-weight: bold;\n    font-family: Tahoma, Geneva, sans-serif;\n    color: rgb(100,100,100);\n    pointer-events: none;\n}\n\ntext {\n    pointer-events: none;\n}\n\ng.gnode {\n\n}\n\n.brush .extent {\n  fill-opacity: .1;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.noselect {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n', ""]) }, function(t, n) { t.exports = function() { var t = []; return t.toString = function() { for (var t = [], n = 0; n < this.length; n++) { var e = this[n];
                    e[2] ? t.push("@media " + e[2] + "{" + e[1] + "}") : t.push(e[1]) } return t.join("") }, t.i = function(n, e) { "string" == typeof n && (n = [
                    [null, n, ""]
                ]); for (var r = {}, i = 0; i < this.length; i++) { var o = this[i][0]; "number" == typeof o && (r[o] = !0) } for (i = 0; i < n.length; i++) { var a = n[i]; "number" == typeof a[0] && r[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = "(" + a[2] + ") and (" + e + ")"), t.push(a)) } }, t } }, function(t, n, e) {
        function r(t, n) { for (var e = 0; e < t.length; e++) { var r = t[e],
                    i = p[r.id]; if (i) { i.refs++; for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]); for (; o < r.parts.length; o++) i.parts.push(l(r.parts[o], n)) } else { for (var a = [], o = 0; o < r.parts.length; o++) a.push(l(r.parts[o], n));
                    p[r.id] = { id: r.id, refs: 1, parts: a } } } }

        function i(t) { for (var n = [], e = {}, r = 0; r < t.length; r++) { var i = t[r],
                    o = i[0],
                    a = i[1],
                    u = i[2],
                    s = i[3],
                    l = { css: a, media: u, sourceMap: s };
                e[o] ? e[o].parts.push(l) : n.push(e[o] = { id: o, parts: [l] }) } return n }

        function o(t, n) { var e = v(),
                r = x[x.length - 1]; if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), x.push(n);
            else { if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                e.appendChild(n) } }

        function a(t) { t.parentNode.removeChild(t); var n = x.indexOf(t);
            n >= 0 && x.splice(n, 1) }

        function u(t) { var n = document.createElement("style"); return n.type = "text/css", o(t, n), n }

        function s(t) { var n = document.createElement("link"); return n.rel = "stylesheet", o(t, n), n }

        function l(t, n) { var e, r, i; if (n.singleton) { var o = m++;
                e = y || (y = u(n)), r = c.bind(null, e, o, !1), i = c.bind(null, e, o, !0) } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = s(n), r = h.bind(null, e), i = function() { a(e), e.href && URL.revokeObjectURL(e.href) }) : (e = u(n), r = f.bind(null, e), i = function() { a(e) }); return r(t),
                function(n) { if (n) { if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                        r(t = n) } else i() } }

        function c(t, n, e, r) { var i = e ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = b(n, i);
            else { var o = document.createTextNode(i),
                    a = t.childNodes;
                a[n] && t.removeChild(a[n]), a.length ? t.insertBefore(o, a[n]) : t.appendChild(o) } }

        function f(t, n) { var e = n.css,
                r = n.media; if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = e;
            else { for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e)) } }

        function h(t, n) { var e = n.css,
                r = n.sourceMap;
            r && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"); var i = new Blob([e], { type: "text/css" }),
                o = t.href;
            t.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o) } var p = {},
            d = function(t) { var n; return function() { return "undefined" == typeof n && (n = t.apply(this, arguments)), n } },
            g = d(function() { return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase()) }),
            v = d(function() { return document.head || document.getElementsByTagName("head")[0] }),
            y = null,
            m = 0,
            x = [];
        t.exports = function(t, n) { n = n || {}, "undefined" == typeof n.singleton && (n.singleton = g()), "undefined" == typeof n.insertAt && (n.insertAt = "bottom"); var e = i(t); return r(e, n),
                function(t) { for (var o = [], a = 0; a < e.length; a++) { var u = e[a],
                            s = p[u.id];
                        s.refs--, o.push(s) } if (t) { var l = i(t);
                        r(l, n) } for (var a = 0; a < o.length; a++) { var s = o[a]; if (0 === s.refs) { for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete p[s.id] } } } }; var b = function() { var t = []; return function(n, e) { return t[n] = e, t.filter(Boolean).join("\n") } }() }, function(t, n, e) { var r = e(16); "string" == typeof r && (r = [
            [t.id, r, ""]
        ]);
        e(14)(r, {});
        r.locals && (t.exports = r.locals) }, function(t, n, e) { n = t.exports = e(13)(), n.push([t.id, "svg {\n  display: block;\n  min-width: 100%;\n  width: 100%;\n  min-height: 100%;\n}\n\ncircle.node {\n  stroke: #ccc;\n  stroke-width: 1px;\n  opacity: 1;\n  fill: white;\n}\n\npolygon.node {\n  stroke: #ccc;\n  stroke-width: 1px;\n  opacity: 1;\n  fill: white;\n}\n\ncircle.node.label {\n    stroke: transparent;\n    stroke-width: 0;\n    fill: white;\n    display: inline;\n}\n\ncircle.outline_node {\n    stroke-width: 1px;\n    fill: red;\n}\n\ncircle.protein {\n    fill: gray;\n    fill-opacity: 0.5;\n    stroke-width: 4;\n}\n\ncircle.hidden_outline {\n    stroke-width: 0px;\n}\n\n\nline.link {\n  stroke: #999;\n  stroke-opacity: 0.8;\n  stroke-width: 2;\n}\n\nline.pseudoknot {\n    stroke: red;\n}\n\nline.basepair {\n  stroke: red;\n}\n\nline.intermolecule {\n  stroke: blue;\n}\n\nline.chain_chain {\n  stroke-dasharray: 3,3;\n}\n\nline.fake {\n  stroke: green;\n}\n\n.transparent {\n    fill: transparent;\n    stroke-width: 0;\n    stroke-opacity: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.drag_line {\n  stroke: #999;\n  stroke-width: 2;\n  pointer-events: none;\n}\n\n.drag_line_hidden {\n  stroke: #999;\n  stroke-width: 0;\n  pointer-events: none;\n}\n\n.d3-tip {\n    line-height: 1;\n    font-weight: bold;\n    padding: 6px;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    border-radius: 4px;\n    pointer-events: none;\n          }\n\ntext.node-label {\n    font-weight: bold;\n    font-family: Tahoma, Geneva, sans-serif;\n    color: rgb(100,100,100);\n    pointer-events: none;\n}\n\ntext {\n    pointer-events: none;\n}\n\ng.gnode {\n\n}\n\ncircle.outline_node.selected {\n    visibility: visible;\n}\n\ncircle.outline_node {\n    visibility: hidden;\n}\n\n.brush .extent {\n  fill-opacity: .1;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.noselect {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n", ""]) }, function(t, n, e) {
        var r, i;
        ! function() {
            function o(t) { return t && (t.ownerDocument || t.document || t).documentElement }

            function a(t) { return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView) }

            function u(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

            function s(t) { return null === t ? NaN : +t }

            function l(t) { return !isNaN(t) }

            function c(t) { return { left: function(n, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) { var o = r + i >>> 1;
                            t(n[o], e) < 0 ? r = o + 1 : i = o } return r }, right: function(n, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) { var o = r + i >>> 1;
                            t(n[o], e) > 0 ? i = o : r = o + 1 } return r } } }

            function f(t) { return t.length }

            function h(t) { for (var n = 1; t * n % 1;) n *= 10; return n }

            function p(t, n) { for (var e in n) Object.defineProperty(t.prototype, e, { value: n[e], enumerable: !1 }) }

            function d() { this._ = Object.create(null) }

            function g(t) { return (t += "") === Sa || t[0] === Ea ? Ea + t : t }

            function v(t) { return (t += "")[0] === Ea ? t.slice(1) : t }

            function y(t) { return g(t) in this._ }

            function m(t) { return (t = g(t)) in this._ && delete this._[t] }

            function x() { var t = []; for (var n in this._) t.push(v(n)); return t }

            function b() { var t = 0; for (var n in this._) ++t; return t }

            function k() { for (var t in this._) return !1; return !0 }

            function M() { this._ = Object.create(null) }

            function _(t) { return t }

            function w(t, n, e) { return function() { var r = e.apply(n, arguments); return r === n ? t : r } }

            function N(t, n) { if (n in t) return n;
                n = n.charAt(0).toUpperCase() + n.slice(1); for (var e = 0, r = Aa.length; e < r; ++e) { var i = Aa[e] + n; if (i in t) return i } }

            function S() {}

            function E() {}

            function A(t) {
                function n() { for (var n, r = e, i = -1, o = r.length; ++i < o;)(n = r[i].on) && n.apply(this, arguments); return t } var e = [],
                    r = new d; return n.on = function(n, i) { var o, a = r.get(n); return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, o = e.indexOf(a)).concat(e.slice(o + 1)), r.remove(n)), i && e.push(r.set(n, { on: i })), t) }, n }

            function L() { pa.event.preventDefault() }

            function T() { for (var t, n = pa.event; t = n.sourceEvent;) n = t; return n }

            function C(t) { for (var n = new E, e = 0, r = arguments.length; ++e < r;) n[arguments[e]] = A(n); return n.of = function(e, r) { return function(i) { try { var o = i.sourceEvent = pa.event;
                            i.target = t, pa.event = i, n[i.type].apply(e, r) } finally { pa.event = o } } }, n }

            function P(t) { return Ta(t, za), t }

            function R(t) { return "function" == typeof t ? t : function() { return Ca(t, this) } }

            function z(t) { return "function" == typeof t ? t : function() { return Pa(t, this) } }

            function q(t, n) {
                function e() { this.removeAttribute(t) }

                function r() { this.removeAttributeNS(t.space, t.local) }

                function i() { this.setAttribute(t, n) }

                function o() { this.setAttributeNS(t.space, t.local, n) }

                function a() { var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e) }

                function u() { var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e) } return t = pa.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? u : a : t.local ? o : i }

            function I(t) { return t.trim().replace(/\s+/g, " ") }

            function O(t) { return new RegExp("(?:^|\\s+)" + pa.requote(t) + "(?:\\s+|$)", "g") }

            function U(t) { return (t + "").trim().split(/^|\s+/) }

            function Y(t, n) {
                function e() { for (var e = -1; ++e < i;) t[e](this, n) }

                function r() { for (var e = -1, r = n.apply(this, arguments); ++e < i;) t[e](this, r) }
                t = U(t).map(D); var i = t.length; return "function" == typeof n ? r : e }

            function D(t) { var n = O(t); return function(e, r) { if (i = e.classList) return r ? i.add(t) : i.remove(t); var i = e.getAttribute("class") || "";
                    r ? (n.lastIndex = 0, n.test(i) || e.setAttribute("class", I(i + " " + t))) : e.setAttribute("class", I(i.replace(n, " "))) } }

            function X(t, n, e) {
                function r() { this.style.removeProperty(t) }

                function i() { this.style.setProperty(t, n, e) }

                function o() { var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e) } return null == n ? r : "function" == typeof n ? o : i }

            function F(t, n) {
                function e() { delete this[t] }

                function r() { this[t] = n }

                function i() { var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e } return null == n ? e : "function" == typeof n ? i : r }

            function j(t) {
                function n() { var n = this.ownerDocument,
                        e = this.namespaceURI; return e === qa && n.documentElement.namespaceURI === qa ? n.createElement(t) : n.createElementNS(e, t) }

                function e() { return this.ownerDocument.createElementNS(t.space, t.local) } return "function" == typeof t ? t : (t = pa.ns.qualify(t)).local ? e : n }

            function B() { var t = this.parentNode;
                t && t.removeChild(this) }

            function H(t) { return { __data__: t } }

            function V(t) { return function() { return Ra(this, t) } }

            function G(t) { return arguments.length || (t = u),
                    function(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e } }

            function J(t, n) { for (var e = 0, r = t.length; e < r; e++)
                    for (var i, o = t[e], a = 0, u = o.length; a < u; a++)(i = o[a]) && n(i, a, e); return t }

            function Z(t) { return Ta(t, Oa), t }

            function W(t) { var n, e; return function(r, i, o) { var a, u = t[o].update,
                        s = u.length; for (o != e && (e = o, n = 0), i >= n && (n = i + 1); !(a = u[n]) && ++n < s;); return a } }

            function $(t, n, e) {
                function r() { var n = this[a];
                    n && (this.removeEventListener(t, n, n.$), delete this[a]) }

                function i() { var i = s(n, ga(arguments));
                    r.call(this), this.addEventListener(t, this[a] = i, i.$ = e), i._ = n }

                function o() { var n, e = new RegExp("^__on([^.]+)" + pa.requote(t) + "$"); for (var r in this)
                        if (n = r.match(e)) { var i = this[r];
                            this.removeEventListener(n[1], i, i.$), delete this[r] } } var a = "__on" + t,
                    u = t.indexOf("."),
                    s = K;
                u > 0 && (t = t.slice(0, u)); var l = Ua.get(t); return l && (t = l, s = Q), u ? n ? i : r : n ? S : o }

            function K(t, n) { return function(e) { var r = pa.event;
                    pa.event = e, n[0] = this.__data__; try { t.apply(this, n) } finally { pa.event = r } } }

            function Q(t, n) { var e = K(t, n); return function(t) { var n = this,
                        r = t.relatedTarget;
                    r && (r === n || 8 & r.compareDocumentPosition(n)) || e.call(n, t) } }

            function tt(t) { var n = ".dragsuppress-" + ++Da,
                    e = "click" + n,
                    r = pa.select(a(t)).on("touchmove" + n, L).on("dragstart" + n, L).on("selectstart" + n, L); if (null == Ya && (Ya = !("onselectstart" in t) && N(t.style, "userSelect")), Ya) { var i = o(t).style,
                        u = i[Ya];
                    i[Ya] = "none" } return function(t) { if (r.on(n, null), Ya && (i[Ya] = u), t) { var o = function() { r.on(e, null) };
                        r.on(e, function() { L(), o() }, !0), setTimeout(o, 0) } } }

            function nt(t, n) { n.changedTouches && (n = n.changedTouches[0]); var e = t.ownerSVGElement || t; if (e.createSVGPoint) { var r = e.createSVGPoint(); if (Xa < 0) { var i = a(t); if (i.scrollX || i.scrollY) { e = pa.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important"); var o = e[0][0].getScreenCTM();
                            Xa = !(o.f || o.e), e.remove() } } return Xa ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y] } var u = t.getBoundingClientRect(); return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop] }

            function et() { return pa.event.changedTouches[0].identifier }

            function rt(t) { return t > 0 ? 1 : t < 0 ? -1 : 0 }

            function it(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]) }

            function ot(t) { return t > 1 ? 0 : t < -1 ? Ba : Math.acos(t) }

            function at(t) { return t > 1 ? Ga : t < -1 ? -Ga : Math.asin(t) }

            function ut(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }

            function st(t) { return ((t = Math.exp(t)) + 1 / t) / 2 }

            function lt(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1) }

            function ct(t) { return (t = Math.sin(t / 2)) * t }

            function ft() {}

            function ht(t, n, e) { return this instanceof ht ? (this.h = +t, this.s = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof ht ? new ht(t.h, t.s, t.l) : St("" + t, Et, ht) : new ht(t, n, e) }

            function pt(t, n, e) {
                function r(t) { return t > 360 ? t -= 360 : t < 0 && (t += 360), t < 60 ? o + (a - o) * t / 60 : t < 180 ? a : t < 240 ? o + (a - o) * (240 - t) / 60 : o }

                function i(t) { return Math.round(255 * r(t)) } var o, a; return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : n < 0 ? 0 : n > 1 ? 1 : n, e = e < 0 ? 0 : e > 1 ? 1 : e, a = e <= .5 ? e * (1 + n) : e + n - e * n, o = 2 * e - a, new Mt(i(t + 120), i(t), i(t - 120)) }

            function dt(t, n, e) { return this instanceof dt ? (this.h = +t, this.c = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof dt ? new dt(t.h, t.c, t.l) : t instanceof vt ? mt(t.l, t.a, t.b) : mt((t = At((t = pa.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new dt(t, n, e) }

            function gt(t, n, e) { return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new vt(e, Math.cos(t *= Ja) * n, Math.sin(t) * n) }

            function vt(t, n, e) { return this instanceof vt ? (this.l = +t, this.a = +n, void(this.b = +e)) : arguments.length < 2 ? t instanceof vt ? new vt(t.l, t.a, t.b) : t instanceof dt ? gt(t.h, t.c, t.l) : At((t = Mt(t)).r, t.g, t.b) : new vt(t, n, e) }

            function yt(t, n, e) { var r = (t + 16) / 116,
                    i = r + n / 500,
                    o = r - e / 200; return i = xt(i) * ou, r = xt(r) * au, o = xt(o) * uu, new Mt(kt(3.2404542 * i - 1.5371385 * r - .4985314 * o), kt(-.969266 * i + 1.8760108 * r + .041556 * o), kt(.0556434 * i - .2040259 * r + 1.0572252 * o)) }

            function mt(t, n, e) { return t > 0 ? new dt(Math.atan2(e, n) * Za, Math.sqrt(n * n + e * e), t) : new dt(NaN, NaN, t) }

            function xt(t) { return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037 }

            function bt(t) { return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29 }

            function kt(t) { return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)) }

            function Mt(t, n, e) { return this instanceof Mt ? (this.r = ~~t, this.g = ~~n, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof Mt ? new Mt(t.r, t.g, t.b) : St("" + t, Mt, pt) : new Mt(t, n, e) }

            function _t(t) { return new Mt(t >> 16, t >> 8 & 255, 255 & t) }

            function wt(t) { return _t(t) + "" }

            function Nt(t) { return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16) }

            function St(t, n, e) { var r, i, o, a = 0,
                    u = 0,
                    s = 0; if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                    case "hsl":
                        return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                    case "rgb":
                        return n(Tt(i[0]), Tt(i[1]), Tt(i[2])) }
                return (o = cu.get(t)) ? n(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a = a >> 4 | a, u = 240 & o, u = u >> 4 | u, s = 15 & o, s = s << 4 | s) : 7 === t.length && (a = (16711680 & o) >> 16, u = (65280 & o) >> 8, s = 255 & o)), n(a, u, s)) }

            function Et(t, n, e) { var r, i, o = Math.min(t /= 255, n /= 255, e /= 255),
                    a = Math.max(t, n, e),
                    u = a - o,
                    s = (a + o) / 2; return u ? (i = s < .5 ? u / (a + o) : u / (2 - a - o), r = t == a ? (n - e) / u + (n < e ? 6 : 0) : n == a ? (e - t) / u + 2 : (t - n) / u + 4, r *= 60) : (r = NaN, i = s > 0 && s < 1 ? 0 : r), new ht(r, i, s) }

            function At(t, n, e) { t = Lt(t), n = Lt(n), e = Lt(e); var r = bt((.4124564 * t + .3575761 * n + .1804375 * e) / ou),
                    i = bt((.2126729 * t + .7151522 * n + .072175 * e) / au),
                    o = bt((.0193339 * t + .119192 * n + .9503041 * e) / uu); return vt(116 * i - 16, 500 * (r - i), 200 * (i - o)) }

            function Lt(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

            function Tt(t) { var n = parseFloat(t); return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n }

            function Ct(t) { return "function" == typeof t ? t : function() { return t } }

            function Pt(t) { return function(n, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Rt(n, e, t, r) } }

            function Rt(t, n, e, r) {
                function i() { var t, n = s.status; if (!n && qt(s) || n >= 200 && n < 300 || 304 === n) { try { t = e.call(o, s) } catch (r) { return void a.error.call(o, r) }
                        a.load.call(o, t) } else a.error.call(o, s) } var o = {},
                    a = pa.dispatch("beforesend", "progress", "load", "error"),
                    u = {},
                    s = new XMLHttpRequest,
                    l = null; return !this.XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = i : s.onreadystatechange = function() { s.readyState > 3 && i() }, s.onprogress = function(t) { var n = pa.event;
                    pa.event = t; try { a.progress.call(o, s) } finally { pa.event = n } }, o.header = function(t, n) { return t = (t + "").toLowerCase(), arguments.length < 2 ? u[t] : (null == n ? delete u[t] : u[t] = n + "", o) }, o.mimeType = function(t) { return arguments.length ? (n = null == t ? null : t + "", o) : n }, o.responseType = function(t) { return arguments.length ? (l = t, o) : l }, o.response = function(t) { return e = t, o }, ["get", "post"].forEach(function(t) { o[t] = function() { return o.send.apply(o, [t].concat(ga(arguments))) } }), o.send = function(e, r, i) { if (2 === arguments.length && "function" == typeof r && (i = r, r = null), s.open(e, t, !0), null == n || "accept" in u || (u.accept = n + ",*/*"), s.setRequestHeader)
                        for (var c in u) s.setRequestHeader(c, u[c]); return null != n && s.overrideMimeType && s.overrideMimeType(n), null != l && (s.responseType = l), null != i && o.on("error", i).on("load", function(t) { i(null, t) }), a.beforesend.call(o, s), s.send(null == r ? null : r), o }, o.abort = function() { return s.abort(), o }, pa.rebind(o, a, "on"), null == r ? o : o.get(zt(r)) }

            function zt(t) { return 1 === t.length ? function(n, e) { t(null == n ? e : null) } : t }

            function qt(t) { var n = t.responseType; return n && "text" !== n ? t.response : t.responseText }

            function It(t, n, e) { var r = arguments.length;
                r < 2 && (n = 0), r < 3 && (e = Date.now()); var i = e + n,
                    o = { c: t, t: i, n: null }; return hu ? hu.n = o : fu = o, hu = o, pu || (du = clearTimeout(du), pu = 1, gu(Ot)), o }

            function Ot() { var t = Ut(),
                    n = Yt() - t;
                n > 24 ? (isFinite(n) && (clearTimeout(du), du = setTimeout(Ot, n)), pu = 0) : (pu = 1, gu(Ot)) }

            function Ut() { for (var t = Date.now(), n = fu; n;) t >= n.t && n.c(t - n.t) && (n.c = null), n = n.n; return t }

            function Yt() { for (var t, n = fu, e = 1 / 0; n;) n.c ? (n.t < e && (e = n.t), n = (t = n).n) : n = t ? t.n = n.n : fu = n.n; return hu = t, e }

            function Dt(t, n) { return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1) }

            function Xt(t, n) { var e = Math.pow(10, 3 * Na(8 - n)); return { scale: n > 8 ? function(t) { return t / e } : function(t) { return t * e }, symbol: t } }

            function Ft(t) { var n = t.decimal,
                    e = t.thousands,
                    r = t.grouping,
                    i = t.currency,
                    o = r && e ? function(t, n) { for (var i = t.length, o = [], a = 0, u = r[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), o.push(t.substring(i -= u, i + u)), !((s += u + 1) > n));) u = r[a = (a + 1) % r.length]; return o.reverse().join(e) } : _; return function(t) { var e = yu.exec(t),
                        r = e[1] || " ",
                        a = e[2] || ">",
                        u = e[3] || "-",
                        s = e[4] || "",
                        l = e[5],
                        c = +e[6],
                        f = e[7],
                        h = e[8],
                        p = e[9],
                        d = 1,
                        g = "",
                        v = "",
                        y = !1,
                        m = !0; switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === a) && (l = r = "0", a = "="), p) {
                        case "n":
                            f = !0, p = "g"; break;
                        case "%":
                            d = 100, v = "%", p = "f"; break;
                        case "p":
                            d = 100, v = "%", p = "r"; break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            "#" === s && (g = "0" + p.toLowerCase());
                        case "c":
                            m = !1;
                        case "d":
                            y = !0, h = 0; break;
                        case "s":
                            d = -1, p = "r" } "$" === s && (g = i[0], v = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = mu.get(p) || jt; var x = l && f; return function(t) { var e = v; if (y && t % 1) return ""; var i = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === u ? "" : u; if (d < 0) { var s = pa.formatPrefix(t, h);
                            t = s.scale(t), e = s.symbol + v } else t *= d;
                        t = p(t, h); var b, k, M = t.lastIndexOf("."); if (M < 0) { var _ = m ? t.lastIndexOf("e") : -1;
                            _ < 0 ? (b = t, k = "") : (b = t.substring(0, _), k = t.substring(_)) } else b = t.substring(0, M), k = n + t.substring(M + 1);!l && f && (b = o(b, 1 / 0)); var w = g.length + b.length + k.length + (x ? 0 : i.length),
                            N = w < c ? new Array(w = c - w + 1).join(r) : ""; return x && (b = o(N + b, N.length ? c - k.length : 1 / 0)), i += g, t = b + k, ("<" === a ? i + t + N : ">" === a ? N + i + t : "^" === a ? N.substring(0, w >>= 1) + i + t + N.substring(w) : i + (x ? t : N + t)) + e } } }

            function jt(t) { return t + "" }

            function Bt() { this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]) }

            function Ht(t, n, e) {
                function r(n) { var e = t(n),
                        r = o(e, 1); return n - e < r - n ? e : r }

                function i(e) { return n(e = t(new bu(e - 1)), 1), e }

                function o(t, e) { return n(t = new bu((+t)), e), t }

                function a(t, r, o) { var a = i(t),
                        u = []; if (o > 1)
                        for (; a < r;) e(a) % o || u.push(new Date((+a))), n(a, 1);
                    else
                        for (; a < r;) u.push(new Date((+a))), n(a, 1); return u }

                function u(t, n, e) { try { bu = Bt; var r = new Bt; return r._ = t, a(r, n, e) } finally { bu = Date } }
                t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a; var s = t.utc = Vt(t); return s.floor = s, s.round = Vt(r), s.ceil = Vt(i), s.offset = Vt(o), s.range = u, t }

            function Vt(t) { return function(n, e) { try { bu = Bt; var r = new Bt; return r._ = n, t(r, e)._ } finally { bu = Date } } }

            function Gt(t) {
                function n(t) {
                    function n(n) { for (var e, i, o, a = [], u = -1, s = 0; ++u < r;) 37 === t.charCodeAt(u) && (a.push(t.slice(s, u)), null != (i = Mu[e = t.charAt(++u)]) && (e = t.charAt(++u)), (o = A[e]) && (e = o(n, null == i ? "e" === e ? " " : "0" : i)), a.push(e), s = u + 1); return a.push(t.slice(s, u)), a.join("") } var r = t.length; return n.parse = function(n) { var r = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null },
                            i = e(r, t, n, 0); if (i != n.length) return null; "p" in r && (r.H = r.H % 12 + 12 * r.p); var o = null != r.Z && bu !== Bt,
                            a = new(o ? Bt : bu); return "j" in r ? a.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), o ? a._ : a }, n.toString = function() { return t }, n }

                function e(t, n, e, r) { for (var i, o, a, u = 0, s = n.length, l = e.length; u < s;) { if (r >= l) return -1; if (i = n.charCodeAt(u++), 37 === i) { if (a = n.charAt(u++), o = L[a in Mu ? n.charAt(u++) : a], !o || (r = o(t, e, r)) < 0) return -1 } else if (i != e.charCodeAt(r++)) return -1 } return r }

                function r(t, n, e) { M.lastIndex = 0; var r = M.exec(n.slice(e)); return r ? (t.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1 }

                function i(t, n, e) { b.lastIndex = 0; var r = b.exec(n.slice(e)); return r ? (t.w = k.get(r[0].toLowerCase()), e + r[0].length) : -1 }

                function o(t, n, e) { S.lastIndex = 0; var r = S.exec(n.slice(e)); return r ? (t.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1 }

                function a(t, n, e) { w.lastIndex = 0; var r = w.exec(n.slice(e)); return r ? (t.m = N.get(r[0].toLowerCase()), e + r[0].length) : -1 }

                function u(t, n, r) { return e(t, A.c.toString(), n, r) }

                function s(t, n, r) { return e(t, A.x.toString(), n, r) }

                function l(t, n, r) { return e(t, A.X.toString(), n, r) }

                function c(t, n, e) { var r = x.get(n.slice(e, e += 2).toLowerCase()); return null == r ? -1 : (t.p = r, e) } var f = t.dateTime,
                    h = t.date,
                    p = t.time,
                    d = t.periods,
                    g = t.days,
                    v = t.shortDays,
                    y = t.months,
                    m = t.shortMonths;
                n.utc = function(t) {
                    function e(t) { try { bu = Bt; var n = new bu; return n._ = t, r(n) } finally { bu = Date } } var r = n(t); return e.parse = function(t) { try { bu = Bt; var n = r.parse(t); return n && n._ } finally { bu = Date } }, e.toString = r.toString, e }, n.multi = n.utc.multi = dn; var x = pa.map(),
                    b = Zt(g),
                    k = Wt(g),
                    M = Zt(v),
                    _ = Wt(v),
                    w = Zt(y),
                    N = Wt(y),
                    S = Zt(m),
                    E = Wt(m);
                d.forEach(function(t, n) { x.set(t.toLowerCase(), n) }); var A = { a: function(t) { return v[t.getDay()] }, A: function(t) { return g[t.getDay()] }, b: function(t) { return m[t.getMonth()] }, B: function(t) { return y[t.getMonth()] }, c: n(f), d: function(t, n) { return Jt(t.getDate(), n, 2) }, e: function(t, n) { return Jt(t.getDate(), n, 2) }, H: function(t, n) { return Jt(t.getHours(), n, 2) }, I: function(t, n) { return Jt(t.getHours() % 12 || 12, n, 2) }, j: function(t, n) { return Jt(1 + xu.dayOfYear(t), n, 3) }, L: function(t, n) { return Jt(t.getMilliseconds(), n, 3) }, m: function(t, n) { return Jt(t.getMonth() + 1, n, 2) }, M: function(t, n) { return Jt(t.getMinutes(), n, 2) }, p: function(t) { return d[+(t.getHours() >= 12)] }, S: function(t, n) { return Jt(t.getSeconds(), n, 2) }, U: function(t, n) { return Jt(xu.sundayOfYear(t), n, 2) }, w: function(t) { return t.getDay() }, W: function(t, n) { return Jt(xu.mondayOfYear(t), n, 2) }, x: n(h), X: n(p), y: function(t, n) { return Jt(t.getFullYear() % 100, n, 2) }, Y: function(t, n) { return Jt(t.getFullYear() % 1e4, n, 4) }, Z: hn, "%": function() { return "%" } },
                    L = { a: r, A: i, b: o, B: a, c: u, d: an, e: an, H: sn, I: sn, j: un, L: fn, m: on, M: ln, p: c, S: cn, U: Kt, w: $t, W: Qt, x: s, X: l, y: nn, Y: tn, Z: en, "%": pn }; return n }

            function Jt(t, n, e) { var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    o = i.length; return r + (o < e ? new Array(e - o + 1).join(n) + i : i) }

            function Zt(t) { return new RegExp("^(?:" + t.map(pa.requote).join("|") + ")", "i") }

            function Wt(t) { for (var n = new d, e = -1, r = t.length; ++e < r;) n.set(t[e].toLowerCase(), e); return n }

            function $t(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 1)); return r ? (t.w = +r[0], e + r[0].length) : -1 }

            function Kt(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e)); return r ? (t.U = +r[0], e + r[0].length) : -1 }

            function Qt(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e)); return r ? (t.W = +r[0], e + r[0].length) : -1 }

            function tn(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 4)); return r ? (t.y = +r[0], e + r[0].length) : -1 }

            function nn(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.y = rn(+r[0]), e + r[0].length) : -1 }

            function en(t, n, e) { return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5)) ? (t.Z = -n, e + 5) : -1 }

            function rn(t) { return t + (t > 68 ? 1900 : 2e3) }

            function on(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.m = r[0] - 1, e + r[0].length) : -1 }

            function an(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.d = +r[0], e + r[0].length) : -1 }

            function un(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 3)); return r ? (t.j = +r[0], e + r[0].length) : -1 }

            function sn(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.H = +r[0], e + r[0].length) : -1 }

            function ln(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.M = +r[0], e + r[0].length) : -1 }

            function cn(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 2)); return r ? (t.S = +r[0], e + r[0].length) : -1 }

            function fn(t, n, e) { _u.lastIndex = 0; var r = _u.exec(n.slice(e, e + 3)); return r ? (t.L = +r[0], e + r[0].length) : -1 }

            function hn(t) { var n = t.getTimezoneOffset(),
                    e = n > 0 ? "-" : "+",
                    r = Na(n) / 60 | 0,
                    i = Na(n) % 60; return e + Jt(r, "0", 2) + Jt(i, "0", 2) }

            function pn(t, n, e) { wu.lastIndex = 0; var r = wu.exec(n.slice(e, e + 1)); return r ? e + r[0].length : -1 }

            function dn(t) { for (var n = t.length, e = -1; ++e < n;) t[e][0] = this(t[e][0]); return function(n) { for (var e = 0, r = t[e]; !r[1](n);) r = t[++e]; return r[0](n) } }

            function gn() {}

            function vn(t, n, e) { var r = e.s = t + n,
                    i = r - t,
                    o = r - i;
                e.t = t - o + (n - i) }

            function yn(t, n) { t && Au.hasOwnProperty(t.type) && Au[t.type](t, n) }

            function mn(t, n, e) { var r, i = -1,
                    o = t.length - e; for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
                n.lineEnd() }

            function xn(t, n) { var e = -1,
                    r = t.length; for (n.polygonStart(); ++e < r;) mn(t[e], n, 1);
                n.polygonEnd() }

            function bn() {
                function t(t, n) {
                    t *= Ja, n = n * Ja / 2 + Ba / 4;
                    var e = t - r,
                        a = e >= 0 ? 1 : -1,
                        u = a * e,
                        s = Math.cos(n),
                        l = Math.sin(n),
                        c = o * l,
                        f = i * s + c * Math.cos(u),
                        h = c * a * Math.sin(u);
                    Tu.add(Math.atan2(h, f)), r = t, i = s, o = l
                }
                var n, e, r, i, o;
                Cu.point = function(a, u) { Cu.point = t, r = (n = a) * Ja, i = Math.cos(u = (e = u) * Ja / 2 + Ba / 4), o = Math.sin(u) }, Cu.lineEnd = function() { t(n, e) }
            }

            function kn(t) { var n = t[0],
                    e = t[1],
                    r = Math.cos(e); return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)] }

            function Mn(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] }

            function _n(t, n) { return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]] }

            function wn(t, n) { t[0] += n[0], t[1] += n[1], t[2] += n[2] }

            function Nn(t, n) { return [t[0] * n, t[1] * n, t[2] * n] }

            function Sn(t) { var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n }

            function En(t) { return [Math.atan2(t[1], t[0]), at(t[2])] }

            function An(t, n) { return Na(t[0] - n[0]) < Fa && Na(t[1] - n[1]) < Fa }

            function Ln(t, n) { t *= Ja; var e = Math.cos(n *= Ja);
                Tn(e * Math.cos(t), e * Math.sin(t), Math.sin(n)) }

            function Tn(t, n, e) {++Pu, zu += (t - zu) / Pu, qu += (n - qu) / Pu, Iu += (e - Iu) / Pu }

            function Cn() {
                function t(t, i) { t *= Ja; var o = Math.cos(i *= Ja),
                        a = o * Math.cos(t),
                        u = o * Math.sin(t),
                        s = Math.sin(i),
                        l = Math.atan2(Math.sqrt((l = e * s - r * u) * l + (l = r * a - n * s) * l + (l = n * u - e * a) * l), n * a + e * u + r * s);
                    Ru += l, Ou += l * (n + (n = a)), Uu += l * (e + (e = u)), Yu += l * (r + (r = s)), Tn(n, e, r) } var n, e, r;
                ju.point = function(i, o) { i *= Ja; var a = Math.cos(o *= Ja);
                    n = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(o), ju.point = t, Tn(n, e, r) } }

            function Pn() { ju.point = Ln }

            function Rn() {
                function t(t, n) { t *= Ja; var e = Math.cos(n *= Ja),
                        a = e * Math.cos(t),
                        u = e * Math.sin(t),
                        s = Math.sin(n),
                        l = i * s - o * u,
                        c = o * a - r * s,
                        f = r * u - i * a,
                        h = Math.sqrt(l * l + c * c + f * f),
                        p = r * a + i * u + o * s,
                        d = h && -ot(p) / h,
                        g = Math.atan2(h, p);
                    Du += d * l, Xu += d * c, Fu += d * f, Ru += g, Ou += g * (r + (r = a)), Uu += g * (i + (i = u)), Yu += g * (o + (o = s)), Tn(r, i, o) } var n, e, r, i, o;
                ju.point = function(a, u) { n = a, e = u, ju.point = t, a *= Ja; var s = Math.cos(u *= Ja);
                    r = s * Math.cos(a), i = s * Math.sin(a), o = Math.sin(u), Tn(r, i, o) }, ju.lineEnd = function() { t(n, e), ju.lineEnd = Pn, ju.point = Ln } }

            function zn(t, n) {
                function e(e, r) { return e = t(e, r), n(e[0], e[1]) } return t.invert && n.invert && (e.invert = function(e, r) { return e = n.invert(e, r), e && t.invert(e[0], e[1]) }), e }

            function qn() { return !0 }

            function In(t, n, e, r, i) { var o = [],
                    a = []; if (t.forEach(function(t) { if (!((n = t.length - 1) <= 0)) { var n, e = t[0],
                                r = t[n]; if (An(e, r)) { i.lineStart(); for (var u = 0; u < n; ++u) i.point((e = t[u])[0], e[1]); return void i.lineEnd() } var s = new Un(e, t, null, (!0)),
                                l = new Un(e, null, s, (!1));
                            s.o = l, o.push(s), a.push(l), s = new Un(r, t, null, (!1)), l = new Un(r, null, s, (!0)), s.o = l, o.push(s), a.push(l) } }), a.sort(n), On(o), On(a), o.length) { for (var u = 0, s = e, l = a.length; u < l; ++u) a[u].e = s = !s; for (var c, f, h = o[0];;) { for (var p = h, d = !0; p.v;)
                            if ((p = p.n) === h) return;
                        c = p.z, i.lineStart();
                        do { if (p.v = p.o.v = !0, p.e) { if (d)
                                    for (var u = 0, l = c.length; u < l; ++u) i.point((f = c[u])[0], f[1]);
                                else r(p.x, p.n.x, 1, i);
                                p = p.n } else { if (d) { c = p.p.z; for (var u = c.length - 1; u >= 0; --u) i.point((f = c[u])[0], f[1]) } else r(p.x, p.p.x, -1, i);
                                p = p.p }
                            p = p.o, c = p.z, d = !d } while (!p.v);
                        i.lineEnd() } } }

            function On(t) { if (n = t.length) { for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i } }

            function Un(t, n, e, r) { this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null }

            function Yn(t, n, e, r) { return function(i, o) {
                    function a(n, e) { var r = i(n, e);
                        t(n = r[0], e = r[1]) && o.point(n, e) }

                    function u(t, n) { var e = i(t, n);
                        v.point(e[0], e[1]) }

                    function s() { m.point = u, v.lineStart() }

                    function l() { m.point = a, v.lineEnd() }

                    function c(t, n) { g.push([t, n]); var e = i(t, n);
                        b.point(e[0], e[1]) }

                    function f() { b.lineStart(), g = [] }

                    function h() { c(g[0][0], g[0][1]), b.lineEnd(); var t, n = b.clean(),
                            e = x.buffer(),
                            r = e.length; if (g.pop(), d.push(g), g = null, r)
                            if (1 & n) { t = e[0]; var i, r = t.length - 1,
                                    a = -1; if (r > 0) { for (k || (o.polygonStart(), k = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
                                    o.lineEnd() } } else r > 1 && 2 & n && e.push(e.pop().concat(e.shift())), p.push(e.filter(Dn)) } var p, d, g, v = n(o),
                        y = i.invert(r[0], r[1]),
                        m = { point: a, lineStart: s, lineEnd: l, polygonStart: function() { m.point = c, m.lineStart = f, m.lineEnd = h, p = [], d = [] }, polygonEnd: function() { m.point = a, m.lineStart = s, m.lineEnd = l, p = pa.merge(p); var t = Vn(y, d);
                                p.length ? (k || (o.polygonStart(), k = !0), In(p, Fn, t, e, o)) : t && (k || (o.polygonStart(), k = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), k && (o.polygonEnd(), k = !1), p = d = null }, sphere: function() { o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd() } },
                        x = Xn(),
                        b = n(x),
                        k = !1; return m } }

            function Dn(t) { return t.length > 1 }

            function Xn() { var t, n = []; return { lineStart: function() { n.push(t = []) }, point: function(n, e) { t.push([n, e]) }, lineEnd: S, buffer: function() { var e = n; return n = [], t = null, e }, rejoin: function() { n.length > 1 && n.push(n.pop().concat(n.shift())) } } }

            function Fn(t, n) { return ((t = t.x)[0] < 0 ? t[1] - Ga - Fa : Ga - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Ga - Fa : Ga - n[1]) }

            function jn(t) { var n, e = NaN,
                    r = NaN,
                    i = NaN; return { lineStart: function() { t.lineStart(), n = 1 }, point: function(o, a) { var u = o > 0 ? Ba : -Ba,
                            s = Na(o - e);
                        Na(s - Ba) < Fa ? (t.point(e, r = (r + a) / 2 > 0 ? Ga : -Ga), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && s >= Ba && (Na(e - i) < Fa && (e -= i * Fa), Na(o - u) < Fa && (o -= u * Fa), r = Bn(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u }, lineEnd: function() { t.lineEnd(), e = r = NaN }, clean: function() { return 2 - n } } }

            function Bn(t, n, e, r) { var i, o, a = Math.sin(t - e); return Na(a) > Fa ? Math.atan((Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * o * a)) : (n + r) / 2 }

            function Hn(t, n, e, r) { var i; if (null == t) i = e * Ga, r.point(-Ba, i), r.point(0, i), r.point(Ba, i), r.point(Ba, 0), r.point(Ba, -i), r.point(0, -i), r.point(-Ba, -i), r.point(-Ba, 0), r.point(-Ba, i);
                else if (Na(t[0] - n[0]) > Fa) { var o = t[0] < n[0] ? Ba : -Ba;
                    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i) } else r.point(n[0], n[1]) }

            function Vn(t, n) { var e = t[0],
                    r = t[1],
                    i = [Math.sin(e), -Math.cos(e), 0],
                    o = 0,
                    a = 0;
                Tu.reset(); for (var u = 0, s = n.length; u < s; ++u) { var l = n[u],
                        c = l.length; if (c)
                        for (var f = l[0], h = f[0], p = f[1] / 2 + Ba / 4, d = Math.sin(p), g = Math.cos(p), v = 1;;) { v === c && (v = 0), t = l[v]; var y = t[0],
                                m = t[1] / 2 + Ba / 4,
                                x = Math.sin(m),
                                b = Math.cos(m),
                                k = y - h,
                                M = k >= 0 ? 1 : -1,
                                _ = M * k,
                                w = _ > Ba,
                                N = d * x; if (Tu.add(Math.atan2(N * M * Math.sin(_), g * b + N * Math.cos(_))), o += w ? k + M * Ha : k, w ^ h >= e ^ y >= e) { var S = _n(kn(f), kn(t));
                                Sn(S); var E = _n(i, S);
                                Sn(E); var A = (w ^ k >= 0 ? -1 : 1) * at(E[2]);
                                (r > A || r === A && (S[0] || S[1])) && (a += w ^ k >= 0 ? 1 : -1) } if (!v++) break;
                            h = y, d = x, g = b, f = t } } return (o < -Fa || o < Fa && Tu < -Fa) ^ 1 & a }

            function Gn(t) {
                function n(t, n) { return Math.cos(t) * Math.cos(n) > o }

                function e(t) { var e, o, s, l, c; return { lineStart: function() { l = s = !1, c = 1 }, point: function(f, h) { var p, d = [f, h],
                                g = n(f, h),
                                v = a ? g ? 0 : i(f, h) : g ? i(f + (f < 0 ? Ba : -Ba), h) : 0; if (!e && (l = s = g) && t.lineStart(), g !== s && (p = r(e, d), (An(e, p) || An(d, p)) && (d[0] += Fa, d[1] += Fa, g = n(d[0], d[1]))), g !== s) c = 0, g ? (t.lineStart(), p = r(d, e), t.point(p[0], p[1])) : (p = r(e, d), t.point(p[0], p[1]), t.lineEnd()), e = p;
                            else if (u && e && a ^ g) { var y;
                                v & o || !(y = r(d, e, !0)) || (c = 0, a ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1]))) }!g || e && An(e, d) || t.point(d[0], d[1]), e = d, s = g, o = v }, lineEnd: function() { s && t.lineEnd(), e = null }, clean: function() { return c | (l && s) << 1 } } }

                function r(t, n, e) { var r = kn(t),
                        i = kn(n),
                        a = [1, 0, 0],
                        u = _n(r, i),
                        s = Mn(u, u),
                        l = u[0],
                        c = s - l * l; if (!c) return !e && t; var f = o * s / c,
                        h = -o * l / c,
                        p = _n(a, u),
                        d = Nn(a, f),
                        g = Nn(u, h);
                    wn(d, g); var v = p,
                        y = Mn(d, v),
                        m = Mn(v, v),
                        x = y * y - m * (Mn(d, d) - 1); if (!(x < 0)) { var b = Math.sqrt(x),
                            k = Nn(v, (-y - b) / m); if (wn(k, d), k = En(k), !e) return k; var M, _ = t[0],
                            w = n[0],
                            N = t[1],
                            S = n[1];
                        w < _ && (M = _, _ = w, w = M); var E = w - _,
                            A = Na(E - Ba) < Fa,
                            L = A || E < Fa; if (!A && S < N && (M = N, N = S, S = M), L ? A ? N + S > 0 ^ k[1] < (Na(k[0] - _) < Fa ? N : S) : N <= k[1] && k[1] <= S : E > Ba ^ (_ <= k[0] && k[0] <= w)) { var T = Nn(v, (-y + b) / m); return wn(T, d), [k, En(T)] } } }

                function i(n, e) { var r = a ? t : Ba - t,
                        i = 0; return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i } var o = Math.cos(t),
                    a = o > 0,
                    u = Na(o) > Fa,
                    s = be(t, 6 * Ja); return Yn(n, e, s, a ? [0, -t] : [-Ba, t - Ba]) }

            function Jn(t, n, e, r) { return function(i) { var o, a = i.a,
                        u = i.b,
                        s = a.x,
                        l = a.y,
                        c = u.x,
                        f = u.y,
                        h = 0,
                        p = 1,
                        d = c - s,
                        g = f - l; if (o = t - s, d || !(o > 0)) { if (o /= d, d < 0) { if (o < h) return;
                            o < p && (p = o) } else if (d > 0) { if (o > p) return;
                            o > h && (h = o) } if (o = e - s, d || !(o < 0)) { if (o /= d, d < 0) { if (o > p) return;
                                o > h && (h = o) } else if (d > 0) { if (o < h) return;
                                o < p && (p = o) } if (o = n - l, g || !(o > 0)) { if (o /= g, g < 0) { if (o < h) return;
                                    o < p && (p = o) } else if (g > 0) { if (o > p) return;
                                    o > h && (h = o) } if (o = r - l, g || !(o < 0)) { if (o /= g, g < 0) { if (o > p) return;
                                        o > h && (h = o) } else if (g > 0) { if (o < h) return;
                                        o < p && (p = o) } return h > 0 && (i.a = { x: s + h * d, y: l + h * g }), p < 1 && (i.b = { x: s + p * d, y: l + p * g }), i } } } } } }

            function Zn(t, n, e, r) {
                function i(r, i) { return Na(r[0] - t) < Fa ? i > 0 ? 0 : 3 : Na(r[0] - e) < Fa ? i > 0 ? 2 : 1 : Na(r[1] - n) < Fa ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2 }

                function o(t, n) { return a(t.x, n.x) }

                function a(t, n) { var e = i(t, 1),
                        r = i(n, 1); return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0] } return function(u) {
                    function s(t) { for (var n = 0, e = v.length, r = t[1], i = 0; i < e; ++i)
                            for (var o, a = 1, u = v[i], s = u.length, l = u[0]; a < s; ++a) o = u[a], l[1] <= r ? o[1] > r && it(l, o, t) > 0 && ++n : o[1] <= r && it(l, o, t) < 0 && --n, l = o; return 0 !== n }

                    function l(o, u, s, l) { var c = 0,
                            f = 0; if (null == o || (c = i(o, s)) !== (f = i(u, s)) || a(o, u) < 0 ^ s > 0) { do l.point(0 === c || 3 === c ? t : e, c > 1 ? r : n); while ((c = (c + s + 4) % 4) !== f) } else l.point(u[0], u[1]) }

                    function c(i, o) { return t <= i && i <= e && n <= o && o <= r }

                    function f(t, n) { c(t, n) && u.point(t, n) }

                    function h() { L.point = d, v && v.push(y = []), w = !0, _ = !1, k = M = NaN }

                    function p() { g && (d(m, x), b && _ && E.rejoin(), g.push(E.buffer())), L.point = f, _ && u.lineEnd() }

                    function d(t, n) { t = Math.max(-Hu, Math.min(Hu, t)), n = Math.max(-Hu, Math.min(Hu, n)); var e = c(t, n); if (v && y.push([t, n]), w) m = t, x = n, b = e, w = !1, e && (u.lineStart(), u.point(t, n));
                        else if (e && _) u.point(t, n);
                        else { var r = { a: { x: k, y: M }, b: { x: t, y: n } };
                            A(r) ? (_ || (u.lineStart(), u.point(r.a.x, r.a.y)), u.point(r.b.x, r.b.y), e || u.lineEnd(), N = !1) : e && (u.lineStart(), u.point(t, n), N = !1) }
                        k = t, M = n, _ = e } var g, v, y, m, x, b, k, M, _, w, N, S = u,
                        E = Xn(),
                        A = Jn(t, n, e, r),
                        L = { point: f, lineStart: h, lineEnd: p, polygonStart: function() { u = E, g = [], v = [], N = !0 }, polygonEnd: function() { u = S, g = pa.merge(g); var n = s([t, r]),
                                    e = N && n,
                                    i = g.length;
                                (e || i) && (u.polygonStart(), e && (u.lineStart(), l(null, null, 1, u), u.lineEnd()), i && In(g, o, n, l, u), u.polygonEnd()), g = v = y = null } }; return L } }

            function Wn(t) { var n = 0,
                    e = Ba / 3,
                    r = he(t),
                    i = r(n, e); return i.parallels = function(t) { return arguments.length ? r(n = t[0] * Ba / 180, e = t[1] * Ba / 180) : [n / Ba * 180, e / Ba * 180] }, i }

            function $n(t, n) {
                function e(t, n) { var e = Math.sqrt(o - 2 * i * Math.sin(n)) / i; return [e * Math.sin(t *= i), a - e * Math.cos(t)] } var r = Math.sin(t),
                    i = (r + Math.sin(n)) / 2,
                    o = 1 + r * (2 * i - r),
                    a = Math.sqrt(o) / i; return e.invert = function(t, n) { var e = a - n; return [Math.atan2(t, e) / i, at((o - (t * t + e * e) * i * i) / (2 * i))] }, e }

            function Kn() {
                function t(t, n) { Gu += i * t - r * n, r = t, i = n } var n, e, r, i;
                Ku.point = function(o, a) { Ku.point = t, n = r = o, e = i = a }, Ku.lineEnd = function() { t(n, e) } }

            function Qn(t, n) { t < Ju && (Ju = t), t > Wu && (Wu = t), n < Zu && (Zu = n), n > $u && ($u = n) }

            function te() {
                function t(t, n) { a.push("M", t, ",", n, o) }

                function n(t, n) { a.push("M", t, ",", n), u.point = e }

                function e(t, n) { a.push("L", t, ",", n) }

                function r() { u.point = t }

                function i() { a.push("Z") } var o = ne(4.5),
                    a = [],
                    u = { point: t, lineStart: function() { u.point = n }, lineEnd: r, polygonStart: function() { u.lineEnd = i }, polygonEnd: function() { u.lineEnd = r, u.point = t }, pointRadius: function(t) { return o = ne(t), u }, result: function() { if (a.length) { var t = a.join(""); return a = [], t } } }; return u }

            function ne(t) { return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z" }

            function ee(t, n) { zu += t, qu += n, ++Iu }

            function re() {
                function t(t, r) { var i = t - n,
                        o = r - e,
                        a = Math.sqrt(i * i + o * o);
                    Ou += a * (n + t) / 2, Uu += a * (e + r) / 2, Yu += a, ee(n = t, e = r) } var n, e;
                ts.point = function(r, i) { ts.point = t, ee(n = r, e = i) } }

            function ie() { ts.point = ee }

            function oe() {
                function t(t, n) { var e = t - r,
                        o = n - i,
                        a = Math.sqrt(e * e + o * o);
                    Ou += a * (r + t) / 2, Uu += a * (i + n) / 2, Yu += a, a = i * t - r * n, Du += a * (r + t), Xu += a * (i + n), Fu += 3 * a, ee(r = t, i = n) } var n, e, r, i;
                ts.point = function(o, a) { ts.point = t, ee(n = r = o, e = i = a) }, ts.lineEnd = function() { t(n, e) } }

            function ae(t) {
                function n(n, e) { t.moveTo(n + a, e), t.arc(n, e, a, 0, Ha) }

                function e(n, e) { t.moveTo(n, e), u.point = r }

                function r(n, e) { t.lineTo(n, e) }

                function i() { u.point = n }

                function o() { t.closePath() } var a = 4.5,
                    u = { point: n, lineStart: function() { u.point = e }, lineEnd: i, polygonStart: function() { u.lineEnd = o }, polygonEnd: function() { u.lineEnd = i, u.point = n }, pointRadius: function(t) { return a = t, u }, result: S }; return u }

            function ue(t) {
                function n(t) { return (u ? r : e)(t) }

                function e(n) { return ce(n, function(e, r) { e = t(e, r), n.point(e[0], e[1]) }) }

                function r(n) {
                    function e(e, r) { e = t(e, r), n.point(e[0], e[1]) }

                    function r() { x = NaN, w.point = o, n.lineStart() }

                    function o(e, r) { var o = kn([e, r]),
                            a = t(e, r);
                        i(x, b, m, k, M, _, x = a[0], b = a[1], m = e, k = o[0], M = o[1], _ = o[2], u, n), n.point(x, b) }

                    function a() { w.point = e, n.lineEnd() }

                    function s() { r(), w.point = l, w.lineEnd = c }

                    function l(t, n) { o(f = t, h = n), p = x, d = b, g = k, v = M, y = _, w.point = o }

                    function c() { i(x, b, m, k, M, _, p, d, f, g, v, y, u, n), w.lineEnd = a, a() } var f, h, p, d, g, v, y, m, x, b, k, M, _, w = { point: e, lineStart: r, lineEnd: a, polygonStart: function() { n.polygonStart(), w.lineStart = s }, polygonEnd: function() { n.polygonEnd(), w.lineStart = r } }; return w }

                function i(n, e, r, u, s, l, c, f, h, p, d, g, v, y) { var m = c - n,
                        x = f - e,
                        b = m * m + x * x; if (b > 4 * o && v--) { var k = u + p,
                            M = s + d,
                            _ = l + g,
                            w = Math.sqrt(k * k + M * M + _ * _),
                            N = Math.asin(_ /= w),
                            S = Na(Na(_) - 1) < Fa || Na(r - h) < Fa ? (r + h) / 2 : Math.atan2(M, k),
                            E = t(S, N),
                            A = E[0],
                            L = E[1],
                            T = A - n,
                            C = L - e,
                            P = x * T - m * C;
                        (P * P / b > o || Na((m * T + x * C) / b - .5) > .3 || u * p + s * d + l * g < a) && (i(n, e, r, u, s, l, A, L, S, k /= w, M /= w, _, v, y), y.point(A, L), i(A, L, S, k, M, _, c, f, h, p, d, g, v, y)) } } var o = .5,
                    a = Math.cos(30 * Ja),
                    u = 16; return n.precision = function(t) { return arguments.length ? (u = (o = t * t) > 0 && 16, n) : Math.sqrt(o) }, n }

            function se(t) { var n = ue(function(n, e) { return t([n * Za, e * Za]) }); return function(t) { return pe(n(t)) } }

            function le(t) { this.stream = t }

            function ce(t, n) { return { point: n, sphere: function() { t.sphere() }, lineStart: function() { t.lineStart() }, lineEnd: function() { t.lineEnd() }, polygonStart: function() { t.polygonStart() }, polygonEnd: function() { t.polygonEnd() } } }

            function fe(t) { return he(function() { return t })() }

            function he(t) {
                function n(t) { return t = u(t[0] * Ja, t[1] * Ja), [t[0] * h + s, l - t[1] * h] }

                function e(t) { return t = u.invert((t[0] - s) / h, (l - t[1]) / h), t && [t[0] * Za, t[1] * Za] }

                function r() { u = zn(a = ve(y, m, x), o); var t = o(g, v); return s = p - t[0] * h, l = d + t[1] * h, i() }

                function i() { return c && (c.valid = !1, c = null), n } var o, a, u, s, l, c, f = ue(function(t, n) { return t = o(t, n), [t[0] * h + s, l - t[1] * h] }),
                    h = 150,
                    p = 480,
                    d = 250,
                    g = 0,
                    v = 0,
                    y = 0,
                    m = 0,
                    x = 0,
                    b = Bu,
                    k = _,
                    M = null,
                    w = null; return n.stream = function(t) { return c && (c.valid = !1), c = pe(b(a, f(k(t)))), c.valid = !0, c }, n.clipAngle = function(t) { return arguments.length ? (b = null == t ? (M = t, Bu) : Gn((M = +t) * Ja), i()) : M }, n.clipExtent = function(t) { return arguments.length ? (w = t, k = t ? Zn(t[0][0], t[0][1], t[1][0], t[1][1]) : _, i()) : w }, n.scale = function(t) { return arguments.length ? (h = +t, r()) : h }, n.translate = function(t) { return arguments.length ? (p = +t[0], d = +t[1], r()) : [p, d] }, n.center = function(t) { return arguments.length ? (g = t[0] % 360 * Ja, v = t[1] % 360 * Ja, r()) : [g * Za, v * Za] }, n.rotate = function(t) { return arguments.length ? (y = t[0] % 360 * Ja, m = t[1] % 360 * Ja, x = t.length > 2 ? t[2] % 360 * Ja : 0, r()) : [y * Za, m * Za, x * Za] }, pa.rebind(n, f, "precision"),
                    function() { return o = t.apply(this, arguments), n.invert = o.invert && e, r() } }

            function pe(t) { return ce(t, function(n, e) { t.point(n * Ja, e * Ja) }) }

            function de(t, n) { return [t, n] }

            function ge(t, n) { return [t > Ba ? t - Ha : t < -Ba ? t + Ha : t, n] }

            function ve(t, n, e) { return t ? n || e ? zn(me(t), xe(n, e)) : me(t) : n || e ? xe(n, e) : ge }

            function ye(t) { return function(n, e) { return n += t, [n > Ba ? n - Ha : n < -Ba ? n + Ha : n, e] } }

            function me(t) { var n = ye(t); return n.invert = ye(-t), n }

            function xe(t, n) {
                function e(t, n) { var e = Math.cos(n),
                        u = Math.cos(t) * e,
                        s = Math.sin(t) * e,
                        l = Math.sin(n),
                        c = l * r + u * i; return [Math.atan2(s * o - c * a, u * r - l * i), at(c * o + s * a)] } var r = Math.cos(t),
                    i = Math.sin(t),
                    o = Math.cos(n),
                    a = Math.sin(n); return e.invert = function(t, n) { var e = Math.cos(n),
                        u = Math.cos(t) * e,
                        s = Math.sin(t) * e,
                        l = Math.sin(n),
                        c = l * o - s * a; return [Math.atan2(s * o + l * a, u * r + c * i), at(c * r - u * i)] }, e }

            function be(t, n) { var e = Math.cos(t),
                    r = Math.sin(t); return function(i, o, a, u) { var s = a * n;
                    null != i ? (i = ke(e, i), o = ke(e, o), (a > 0 ? i < o : i > o) && (i += a * Ha)) : (i = t + a * Ha, o = t - .5 * s); for (var l, c = i; a > 0 ? c > o : c < o; c -= s) u.point((l = En([e, -r * Math.cos(c), -r * Math.sin(c)]))[0], l[1]) } }

            function ke(t, n) { var e = kn(n);
                e[0] -= t, Sn(e); var r = ot(-e[1]); return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Fa) % (2 * Math.PI) }

            function Me(t, n, e) { var r = pa.range(t, n - Fa, e).concat(n); return function(t) { return r.map(function(n) { return [t, n] }) } }

            function _e(t, n, e) { var r = pa.range(t, n - Fa, e).concat(n); return function(t) { return r.map(function(n) { return [n, t] }) } }

            function we(t) { return t.source }

            function Ne(t) { return t.target }

            function Se(t, n, e, r) { var i = Math.cos(n),
                    o = Math.sin(n),
                    a = Math.cos(r),
                    u = Math.sin(r),
                    s = i * Math.cos(t),
                    l = i * Math.sin(t),
                    c = a * Math.cos(e),
                    f = a * Math.sin(e),
                    h = 2 * Math.asin(Math.sqrt(ct(r - n) + i * a * ct(e - t))),
                    p = 1 / Math.sin(h),
                    d = h ? function(t) { var n = Math.sin(t *= h) * p,
                            e = Math.sin(h - t) * p,
                            r = e * s + n * c,
                            i = e * l + n * f,
                            a = e * o + n * u; return [Math.atan2(i, r) * Za, Math.atan2(a, Math.sqrt(r * r + i * i)) * Za] } : function() { return [t * Za, n * Za] }; return d.distance = h, d }

            function Ee() {
                function t(t, i) { var o = Math.sin(i *= Ja),
                        a = Math.cos(i),
                        u = Na((t *= Ja) - n),
                        s = Math.cos(u);
                    ns += Math.atan2(Math.sqrt((u = a * Math.sin(u)) * u + (u = r * o - e * a * s) * u), e * o + r * a * s), n = t, e = o, r = a } var n, e, r;
                es.point = function(i, o) { n = i * Ja, e = Math.sin(o *= Ja), r = Math.cos(o), es.point = t }, es.lineEnd = function() { es.point = es.lineEnd = S } }

            function Ae(t, n) {
                function e(n, e) { var r = Math.cos(n),
                        i = Math.cos(e),
                        o = t(r * i); return [o * i * Math.sin(n), o * Math.sin(e)] } return e.invert = function(t, e) { var r = Math.sqrt(t * t + e * e),
                        i = n(r),
                        o = Math.sin(i),
                        a = Math.cos(i); return [Math.atan2(t * o, r * a), Math.asin(r && e * o / r)] }, e }

            function Le(t, n) {
                function e(t, n) { a > 0 ? n < -Ga + Fa && (n = -Ga + Fa) : n > Ga - Fa && (n = Ga - Fa); var e = a / Math.pow(i(n), o); return [e * Math.sin(o * t), a - e * Math.cos(o * t)] } var r = Math.cos(t),
                    i = function(t) { return Math.tan(Ba / 4 + t / 2) },
                    o = t === n ? Math.sin(t) : Math.log(r / Math.cos(n)) / Math.log(i(n) / i(t)),
                    a = r * Math.pow(i(t), o) / o; return o ? (e.invert = function(t, n) { var e = a - n,
                        r = rt(o) * Math.sqrt(t * t + e * e); return [Math.atan2(t, e) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - Ga] }, e) : Ce }

            function Te(t, n) {
                function e(t, n) { var e = o - n; return [e * Math.sin(i * t), o - e * Math.cos(i * t)] } var r = Math.cos(t),
                    i = t === n ? Math.sin(t) : (r - Math.cos(n)) / (n - t),
                    o = r / i + t; return Na(i) < Fa ? de : (e.invert = function(t, n) { var e = o - n; return [Math.atan2(t, e) / i, o - rt(i) * Math.sqrt(t * t + e * e)] }, e) }

            function Ce(t, n) { return [t, Math.log(Math.tan(Ba / 4 + n / 2))] }

            function Pe(t) { var n, e = fe(t),
                    r = e.scale,
                    i = e.translate,
                    o = e.clipExtent; return e.scale = function() { var t = r.apply(e, arguments); return t === e ? n ? e.clipExtent(null) : e : t }, e.translate = function() { var t = i.apply(e, arguments); return t === e ? n ? e.clipExtent(null) : e : t }, e.clipExtent = function(t) { var a = o.apply(e, arguments); if (a === e) { if (n = null == t) { var u = Ba * r(),
                                s = i();
                            o([
                                [s[0] - u, s[1] - u],
                                [s[0] + u, s[1] + u]
                            ]) } } else n && (a = null); return a }, e.clipExtent(null) }

            function Re(t, n) { return [Math.log(Math.tan(Ba / 4 + n / 2)), -t] }

            function ze(t) { return t[0] }

            function qe(t) { return t[1] }

            function Ie(t) { for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; i++) { for (; r > 1 && it(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
                    e[r++] = i } return e.slice(0, r) }

            function Oe(t, n) { return t[0] - n[0] || t[1] - n[1] }

            function Ue(t, n, e) { return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0]) }

            function Ye(t, n, e, r) { var i = t[0],
                    o = e[0],
                    a = n[0] - i,
                    u = r[0] - o,
                    s = t[1],
                    l = e[1],
                    c = n[1] - s,
                    f = r[1] - l,
                    h = (u * (s - l) - f * (i - o)) / (f * a - u * c); return [i + h * a, s + h * c] }

            function De(t) { var n = t[0],
                    e = t[t.length - 1]; return !(n[0] - e[0] || n[1] - e[1]) }

            function Xe() { sr(this), this.edge = this.site = this.circle = null }

            function Fe(t) { var n = ds.pop() || new Xe; return n.site = t, n }

            function je(t) { Qe(t), fs.remove(t), ds.push(t), sr(t) }

            function Be(t) { var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = { x: e, y: r },
                    o = t.P,
                    a = t.N,
                    u = [t];
                je(t); for (var s = o; s.circle && Na(e - s.circle.x) < Fa && Na(r - s.circle.cy) < Fa;) o = s.P, u.unshift(s), je(s), s = o;
                u.unshift(s), Qe(s); for (var l = a; l.circle && Na(e - l.circle.x) < Fa && Na(r - l.circle.cy) < Fa;) a = l.N, u.push(l), je(l), l = a;
                u.push(l), Qe(l); var c, f = u.length; for (c = 1; c < f; ++c) l = u[c], s = u[c - 1], or(l.edge, s.site, l.site, i);
                s = u[0], l = u[f - 1], l.edge = rr(s.site, l.site, null, i), Ke(s), Ke(l) }

            function He(t) { for (var n, e, r, i, o = t.x, a = t.y, u = fs._; u;)
                    if (r = Ve(u, a) - o, r > Fa) u = u.L;
                    else { if (i = o - Ge(u, a), !(i > Fa)) { r > -Fa ? (n = u.P, e = u) : i > -Fa ? (n = u, e = u.N) : n = e = u; break } if (!u.R) { n = u; break }
                        u = u.R }
                var s = Fe(t); if (fs.insert(n, s), n || e) { if (n === e) return Qe(n), e = Fe(n.site), fs.insert(s, e), s.edge = e.edge = rr(n.site, s.site), Ke(n), void Ke(e); if (!e) return void(s.edge = rr(n.site, s.site));
                    Qe(n), Qe(e); var l = n.site,
                        c = l.x,
                        f = l.y,
                        h = t.x - c,
                        p = t.y - f,
                        d = e.site,
                        g = d.x - c,
                        v = d.y - f,
                        y = 2 * (h * v - p * g),
                        m = h * h + p * p,
                        x = g * g + v * v,
                        b = { x: (v * m - p * x) / y + c, y: (h * x - g * m) / y + f };
                    or(e.edge, l, d, b), s.edge = rr(l, t, null, b), e.edge = rr(t, d, null, b), Ke(n), Ke(e) } }

            function Ve(t, n) { var e = t.site,
                    r = e.x,
                    i = e.y,
                    o = i - n; if (!o) return r; var a = t.P; if (!a) return -(1 / 0);
                e = a.site; var u = e.x,
                    s = e.y,
                    l = s - n; if (!l) return u; var c = u - r,
                    f = 1 / o - 1 / l,
                    h = c / l; return f ? (-h + Math.sqrt(h * h - 2 * f * (c * c / (-2 * l) - s + l / 2 + i - o / 2))) / f + r : (r + u) / 2 }

            function Ge(t, n) { var e = t.N; if (e) return Ve(e, n); var r = t.site; return r.y === n ? r.x : 1 / 0 }

            function Je(t) { this.site = t, this.edges = [] }

            function Ze(t) { for (var n, e, r, i, o, a, u, s, l, c, f = t[0][0], h = t[1][0], p = t[0][1], d = t[1][1], g = cs, v = g.length; v--;)
                    if (o = g[v], o && o.prepare())
                        for (u = o.edges, s = u.length, a = 0; a < s;) c = u[a].end(), r = c.x, i = c.y, l = u[++a % s].start(), n = l.x, e = l.y, (Na(r - n) > Fa || Na(i - e) > Fa) && (u.splice(a, 0, new ar(ir(o.site, c, Na(r - f) < Fa && d - i > Fa ? { x: f, y: Na(n - f) < Fa ? e : d } : Na(i - d) < Fa && h - r > Fa ? { x: Na(e - d) < Fa ? n : h, y: d } : Na(r - h) < Fa && i - p > Fa ? { x: h, y: Na(n - h) < Fa ? e : p } : Na(i - p) < Fa && r - f > Fa ? { x: Na(e - p) < Fa ? n : f, y: p } : null), o.site, null)), ++s) }

            function We(t, n) { return n.angle - t.angle }

            function $e() { sr(this), this.x = this.y = this.arc = this.site = this.cy = null }

            function Ke(t) { var n = t.P,
                    e = t.N; if (n && e) { var r = n.site,
                        i = t.site,
                        o = e.site; if (r !== o) { var a = i.x,
                            u = i.y,
                            s = r.x - a,
                            l = r.y - u,
                            c = o.x - a,
                            f = o.y - u,
                            h = 2 * (s * f - l * c); if (!(h >= -ja)) { var p = s * s + l * l,
                                d = c * c + f * f,
                                g = (f * p - l * d) / h,
                                v = (s * d - c * p) / h,
                                f = v + u,
                                y = gs.pop() || new $e;
                            y.arc = t, y.site = i, y.x = g + a, y.y = f + Math.sqrt(g * g + v * v), y.cy = f, t.circle = y; for (var m = null, x = ps._; x;)
                                if (y.y < x.y || y.y === x.y && y.x <= x.x) { if (!x.L) { m = x.P; break }
                                    x = x.L } else { if (!x.R) { m = x; break }
                                    x = x.R }
                            ps.insert(m, y), m || (hs = y) } } } }

            function Qe(t) { var n = t.circle;
                n && (n.P || (hs = n.N), ps.remove(n), gs.push(n), sr(n), t.circle = null) }

            function tr(t) { for (var n, e = ls, r = Jn(t[0][0], t[0][1], t[1][0], t[1][1]), i = e.length; i--;) n = e[i], (!nr(n, t) || !r(n) || Na(n.a.x - n.b.x) < Fa && Na(n.a.y - n.b.y) < Fa) && (n.a = n.b = null, e.splice(i, 1)) }

            function nr(t, n) { var e = t.b; if (e) return !0; var r, i, o = t.a,
                    a = n[0][0],
                    u = n[1][0],
                    s = n[0][1],
                    l = n[1][1],
                    c = t.l,
                    f = t.r,
                    h = c.x,
                    p = c.y,
                    d = f.x,
                    g = f.y,
                    v = (h + d) / 2,
                    y = (p + g) / 2; if (g === p) { if (v < a || v >= u) return; if (h > d) { if (o) { if (o.y >= l) return } else o = { x: v, y: s };
                        e = { x: v, y: l } } else { if (o) { if (o.y < s) return } else o = { x: v, y: l };
                        e = { x: v, y: s } } } else if (r = (h - d) / (g - p), i = y - r * v, r < -1 || r > 1)
                    if (h > d) { if (o) { if (o.y >= l) return } else o = { x: (s - i) / r, y: s };
                        e = { x: (l - i) / r, y: l } } else { if (o) { if (o.y < s) return } else o = { x: (l - i) / r, y: l };
                        e = { x: (s - i) / r, y: s } }
                else if (p < g) { if (o) { if (o.x >= u) return } else o = { x: a, y: r * a + i };
                    e = { x: u, y: r * u + i } } else { if (o) { if (o.x < a) return } else o = { x: u, y: r * u + i };
                    e = { x: a, y: r * a + i } } return t.a = o, t.b = e, !0 }

            function er(t, n) { this.l = t, this.r = n, this.a = this.b = null }

            function rr(t, n, e, r) { var i = new er(t, n); return ls.push(i), e && or(i, t, n, e), r && or(i, n, t, r), cs[t.i].edges.push(new ar(i, t, n)), cs[n.i].edges.push(new ar(i, n, t)), i }

            function ir(t, n, e) { var r = new er(t, null); return r.a = n, r.b = e, ls.push(r), r }

            function or(t, n, e, r) { t.a || t.b ? t.l === e ? t.b = r : t.a = r : (t.a = r, t.l = n, t.r = e) }

            function ar(t, n, e) { var r = t.a,
                    i = t.b;
                this.edge = t, this.site = n, this.angle = e ? Math.atan2(e.y - n.y, e.x - n.x) : t.l === n ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y) }

            function ur() { this._ = null }

            function sr(t) { t.U = t.C = t.L = t.R = t.P = t.N = null }

            function lr(t, n) { var e = n,
                    r = n.R,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e }

            function cr(t, n) { var e = n,
                    r = n.L,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e }

            function fr(t) { for (; t.L;) t = t.L; return t }

            function hr(t, n) { var e, r, i, o = t.sort(pr).pop(); for (ls = [], cs = new Array(t.length), fs = new ur, ps = new ur;;)
                    if (i = hs, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x)) o.x === e && o.y === r || (cs[o.i] = new Je(o), He(o), e = o.x, r = o.y), o = t.pop();
                    else { if (!i) break;
                        Be(i.arc) }
                n && (tr(n), Ze(n)); var a = { cells: cs, edges: ls }; return fs = ps = ls = cs = null, a }

            function pr(t, n) { return n.y - t.y || n.x - t.x }

            function dr(t, n, e) { return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y) }

            function gr(t) { return t.x }

            function vr(t) { return t.y }

            function yr() { return { leaf: !0, nodes: [], point: null, x: null, y: null } }

            function mr(t, n, e, r, i, o) { if (!t(n, e, r, i, o)) { var a = .5 * (e + i),
                        u = .5 * (r + o),
                        s = n.nodes;
                    s[0] && mr(t, s[0], e, r, a, u), s[1] && mr(t, s[1], a, r, i, u), s[2] && mr(t, s[2], e, u, a, o), s[3] && mr(t, s[3], a, u, i, o) } }

            function xr(t, n, e, r, i, o, a) { var u, s = 1 / 0; return function l(t, c, f, h, p) { if (!(c > o || f > a || h < r || p < i)) { if (d = t.point) { var d, g = n - t.x,
                                v = e - t.y,
                                y = g * g + v * v; if (y < s) { var m = Math.sqrt(s = y);
                                r = n - m, i = e - m, o = n + m, a = e + m, u = d } } for (var x = t.nodes, b = .5 * (c + h), k = .5 * (f + p), M = n >= b, _ = e >= k, w = _ << 1 | M, N = w + 4; w < N; ++w)
                            if (t = x[3 & w]) switch (3 & w) {
                                case 0:
                                    l(t, c, f, b, k); break;
                                case 1:
                                    l(t, b, f, h, k); break;
                                case 2:
                                    l(t, c, k, b, p); break;
                                case 3:
                                    l(t, b, k, h, p) } } }(t, r, i, o, a), u }

            function br(t, n) { t = pa.rgb(t), n = pa.rgb(n); var e = t.r,
                    r = t.g,
                    i = t.b,
                    o = n.r - e,
                    a = n.g - r,
                    u = n.b - i; return function(t) { return "#" + Nt(Math.round(e + o * t)) + Nt(Math.round(r + a * t)) + Nt(Math.round(i + u * t)) } }

            function kr(t, n) { var e, r = {},
                    i = {}; for (e in t) e in n ? r[e] = wr(t[e], n[e]) : i[e] = t[e]; for (e in n) e in t || (i[e] = n[e]); return function(t) { for (e in r) i[e] = r[e](t); return i } }

            function Mr(t, n) { return t = +t, n = +n,
                    function(e) { return t * (1 - e) + n * e } }

            function _r(t, n) { var e, r, i, o = ys.lastIndex = ms.lastIndex = 0,
                    a = -1,
                    u = [],
                    s = []; for (t += "", n += "";
                    (e = ys.exec(t)) && (r = ms.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({ i: a, x: Mr(e, r) })), o = ms.lastIndex; return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? (n = s[0].x, function(t) { return n(t) + "" }) : function() { return n } : (n = s.length, function(t) { for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t); return u.join("") }) }

            function wr(t, n) { for (var e, r = pa.interpolators.length; --r >= 0 && !(e = pa.interpolators[r](t, n));); return e }

            function Nr(t, n) { var e, r = [],
                    i = [],
                    o = t.length,
                    a = n.length,
                    u = Math.min(t.length, n.length); for (e = 0; e < u; ++e) r.push(wr(t[e], n[e])); for (; e < o; ++e) i[e] = t[e]; for (; e < a; ++e) i[e] = n[e]; return function(t) { for (e = 0; e < u; ++e) i[e] = r[e](t); return i } }

            function Sr(t) { return function(n) { return n <= 0 ? 0 : n >= 1 ? 1 : t(n) } }

            function Er(t) { return function(n) { return 1 - t(1 - n) } }

            function Ar(t) { return function(n) { return .5 * (n < .5 ? t(2 * n) : 2 - t(2 - 2 * n)) } }

            function Lr(t) { return t * t }

            function Tr(t) { return t * t * t }

            function Cr(t) { if (t <= 0) return 0; if (t >= 1) return 1; var n = t * t,
                    e = n * t; return 4 * (t < .5 ? e : 3 * (t - n) + e - .75) }

            function Pr(t) { return function(n) { return Math.pow(n, t) } }

            function Rr(t) { return 1 - Math.cos(t * Ga) }

            function zr(t) { return Math.pow(2, 10 * (t - 1)) }

            function qr(t) { return 1 - Math.sqrt(1 - t * t) }

            function Ir(t, n) { var e; return arguments.length < 2 && (n = .45), arguments.length ? e = n / Ha * Math.asin(1 / t) : (t = 1, e = n / 4),
                    function(r) { return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - e) * Ha / n) } }

            function Or(t) { return t || (t = 1.70158),
                    function(n) { return n * n * ((t + 1) * n - t) } }

            function Ur(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }

            function Yr(t, n) { t = pa.hcl(t), n = pa.hcl(n); var e = t.h,
                    r = t.c,
                    i = t.l,
                    o = n.h - e,
                    a = n.c - r,
                    u = n.l - i; return isNaN(a) && (a = 0, r = isNaN(r) ? n.c : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function(t) { return gt(e + o * t, r + a * t, i + u * t) + "" } }

            function Dr(t, n) { t = pa.hsl(t), n = pa.hsl(n); var e = t.h,
                    r = t.s,
                    i = t.l,
                    o = n.h - e,
                    a = n.s - r,
                    u = n.l - i; return isNaN(a) && (a = 0, r = isNaN(r) ? n.s : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360),
                    function(t) { return pt(e + o * t, r + a * t, i + u * t) + "" } }

            function Xr(t, n) { t = pa.lab(t), n = pa.lab(n); var e = t.l,
                    r = t.a,
                    i = t.b,
                    o = n.l - e,
                    a = n.a - r,
                    u = n.b - i; return function(t) { return yt(e + o * t, r + a * t, i + u * t) + "" } }

            function Fr(t, n) { return n -= t,
                    function(e) { return Math.round(t + n * e) } }

            function jr(t) { var n = [t.a, t.b],
                    e = [t.c, t.d],
                    r = Hr(n),
                    i = Br(n, e),
                    o = Hr(Vr(e, n, -i)) || 0;
                n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Za, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * Za : 0 }

            function Br(t, n) { return t[0] * n[0] + t[1] * n[1] }

            function Hr(t) { var n = Math.sqrt(Br(t, t)); return n && (t[0] /= n, t[1] /= n), n }

            function Vr(t, n, e) { return t[0] += e * n[0], t[1] += e * n[1], t }

            function Gr(t) { return t.length ? t.pop() + "," : "" }

            function Jr(t, n, e, r) { if (t[0] !== n[0] || t[1] !== n[1]) { var i = e.push("translate(", null, ",", null, ")");
                    r.push({ i: i - 4, x: Mr(t[0], n[0]) }, { i: i - 2, x: Mr(t[1], n[1]) }) } else(n[0] || n[1]) && e.push("translate(" + n + ")") }

            function Zr(t, n, e, r) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), r.push({ i: e.push(Gr(e) + "rotate(", null, ")") - 2, x: Mr(t, n) })) : n && e.push(Gr(e) + "rotate(" + n + ")") }

            function Wr(t, n, e, r) { t !== n ? r.push({ i: e.push(Gr(e) + "skewX(", null, ")") - 2, x: Mr(t, n) }) : n && e.push(Gr(e) + "skewX(" + n + ")") }

            function $r(t, n, e, r) { if (t[0] !== n[0] || t[1] !== n[1]) { var i = e.push(Gr(e) + "scale(", null, ",", null, ")");
                    r.push({ i: i - 4, x: Mr(t[0], n[0]) }, { i: i - 2, x: Mr(t[1], n[1]) }) } else 1 === n[0] && 1 === n[1] || e.push(Gr(e) + "scale(" + n + ")") }

            function Kr(t, n) { var e = [],
                    r = []; return t = pa.transform(t), n = pa.transform(n), Jr(t.translate, n.translate, e, r), Zr(t.rotate, n.rotate, e, r), Wr(t.skew, n.skew, e, r), $r(t.scale, n.scale, e, r), t = n = null,
                    function(t) { for (var n, i = -1, o = r.length; ++i < o;) e[(n = r[i]).i] = n.x(t); return e.join("") } }

            function Qr(t, n) { return n = (n -= t = +t) || 1 / n,
                    function(e) { return (e - t) / n } }

            function ti(t, n) { return n = (n -= t = +t) || 1 / n,
                    function(e) { return Math.max(0, Math.min(1, (e - t) / n)) } }

            function ni(t) { for (var n = t.source, e = t.target, r = ri(n, e), i = [n]; n !== r;) n = n.parent, i.push(n); for (var o = i.length; e !== r;) i.splice(o, 0, e), e = e.parent; return i }

            function ei(t) { for (var n = [], e = t.parent; null != e;) n.push(t), t = e, e = e.parent; return n.push(t), n }

            function ri(t, n) { if (t === n) return t; for (var e = ei(t), r = ei(n), i = e.pop(), o = r.pop(), a = null; i === o;) a = i, i = e.pop(), o = r.pop(); return a }

            function ii(t) { t.fixed |= 2 }

            function oi(t) { t.fixed &= -7 }

            function ai(t) { t.fixed |= 4, t.px = t.x, t.py = t.y }

            function ui(t) { t.fixed &= -5 }

            function si(t, n, e) { var r = 0,
                    i = 0; if (t.charge = 0, !t.leaf)
                    for (var o, a = t.nodes, u = a.length, s = -1; ++s < u;) o = a[s], null != o && (si(o, n, e), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy); if (t.point) { t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5); var l = n * e[t.point.index];
                    t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y }
                t.cx = r / t.charge, t.cy = i / t.charge }

            function li(t, n) { return pa.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = gi, t }

            function ci(t, n) { for (var e = [t]; null != (t = e.pop());)
                    if (n(t), (i = t.children) && (r = i.length))
                        for (var r, i; --r >= 0;) e.push(i[r]) }

            function fi(t, n) { for (var e = [t], r = []; null != (t = e.pop());)
                    if (r.push(t), (o = t.children) && (i = o.length))
                        for (var i, o, a = -1; ++a < i;) e.push(o[a]);
                for (; null != (t = r.pop());) n(t) }

            function hi(t) { return t.children }

            function pi(t) { return t.value }

            function di(t, n) { return n.value - t.value }

            function gi(t) { return pa.merge(t.map(function(t) { return (t.children || []).map(function(n) { return { source: t, target: n } }) })) }

            function vi(t) { return t.x }

            function yi(t) { return t.y }

            function mi(t, n, e) { t.y0 = n, t.y = e }

            function xi(t) { return pa.range(t.length) }

            function bi(t) { for (var n = -1, e = t[0].length, r = []; ++n < e;) r[n] = 0; return r }

            function ki(t) { for (var n, e = 1, r = 0, i = t[0][1], o = t.length; e < o; ++e)(n = t[e][1]) > i && (r = e, i = n); return r }

            function Mi(t) { return t.reduce(_i, 0) }

            function _i(t, n) { return t + n[1] }

            function wi(t, n) { return Ni(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1)) }

            function Ni(t, n) { for (var e = -1, r = +t[0], i = (t[1] - r) / n, o = []; ++e <= n;) o[e] = i * e + r; return o }

            function Si(t) { return [pa.min(t), pa.max(t)] }

            function Ei(t, n) { return t.value - n.value }

            function Ai(t, n) { var e = t._pack_next;
                t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n }

            function Li(t, n) { t._pack_next = n, n._pack_prev = t }

            function Ti(t, n) { var e = n.x - t.x,
                    r = n.y - t.y,
                    i = t.r + n.r; return .999 * i * i > e * e + r * r }

            function Ci(t) {
                function n(t) { c = Math.min(t.x - t.r, c), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p) } if ((e = t.children) && (l = e.length)) { var e, r, i, o, a, u, s, l, c = 1 / 0,
                        f = -(1 / 0),
                        h = 1 / 0,
                        p = -(1 / 0); if (e.forEach(Pi), r = e[0], r.x = -r.r, r.y = 0, n(r), l > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), l > 2))
                        for (o = e[2], qi(r, i, o), n(o), Ai(r, o), r._pack_prev = o, Ai(o, i), i = r._pack_next, a = 3; a < l; a++) { qi(r, i, o = e[a]); var d = 0,
                                g = 1,
                                v = 1; for (u = i._pack_next; u !== i; u = u._pack_next, g++)
                                if (Ti(u, o)) { d = 1; break }
                            if (1 == d)
                                for (s = r._pack_prev; s !== u._pack_prev && !Ti(s, o); s = s._pack_prev, v++);
                            d ? (g < v || g == v && i.r < r.r ? Li(r, i = u) : Li(r = s, i), a--) : (Ai(r, o), i = o, n(o)) }
                    var y = (c + f) / 2,
                        m = (h + p) / 2,
                        x = 0; for (a = 0; a < l; a++) o = e[a], o.x -= y, o.y -= m, x = Math.max(x, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
                    t.r = x, e.forEach(Ri) } }

            function Pi(t) { t._pack_next = t._pack_prev = t }

            function Ri(t) { delete t._pack_next, delete t._pack_prev }

            function zi(t, n, e, r) { var i = t.children; if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)
                    for (var o = -1, a = i.length; ++o < a;) zi(i[o], n, e, r) }

            function qi(t, n, e) { var r = t.r + e.r,
                    i = n.x - t.x,
                    o = n.y - t.y; if (r && (i || o)) { var a = n.r + e.r,
                        u = i * i + o * o;
                    a *= a, r *= r; var s = .5 + (r - a) / (2 * u),
                        l = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
                    e.x = t.x + s * i + l * o, e.y = t.y + s * o - l * i } else e.x = t.x + r, e.y = t.y }

            function Ii(t, n) { return t.parent == n.parent ? 1 : 2 }

            function Oi(t) { var n = t.children; return n.length ? n[0] : t.t }

            function Ui(t) { var n, e = t.children; return (n = e.length) ? e[n - 1] : t.t }

            function Yi(t, n, e) { var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e }

            function Di(t) { for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c) }

            function Xi(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }

            function Fi(t) { return 1 + pa.max(t, function(t) { return t.y }) }

            function ji(t) { return t.reduce(function(t, n) { return t + n.x }, 0) / t.length }

            function Bi(t) { var n = t.children; return n && n.length ? Bi(n[0]) : t }

            function Hi(t) { var n, e = t.children; return e && (n = e.length) ? Hi(e[n - 1]) : t }

            function Vi(t) { return { x: t.x, y: t.y, dx: t.dx, dy: t.dy } }

            function Gi(t, n) { var e = t.x + n[3],
                    r = t.y + n[0],
                    i = t.dx - n[1] - n[3],
                    o = t.dy - n[0] - n[2]; return i < 0 && (e += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), { x: e, y: r, dx: i, dy: o } }

            function Ji(t) { var n = t[0],
                    e = t[t.length - 1]; return n < e ? [n, e] : [e, n] }

            function Zi(t) { return t.rangeExtent ? t.rangeExtent() : Ji(t.range()) }

            function Wi(t, n, e, r) { var i = e(t[0], t[1]),
                    o = r(n[0], n[1]); return function(t) { return o(i(t)) } }

            function $i(t, n) { var e, r = 0,
                    i = t.length - 1,
                    o = t[r],
                    a = t[i]; return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t }

            function Ki(t) { return t ? { floor: function(n) { return Math.floor(n / t) * t }, ceil: function(n) { return Math.ceil(n / t) * t } } : Ls }

            function Qi(t, n, e, r) { var i = [],
                    o = [],
                    a = 0,
                    u = Math.min(t.length, n.length) - 1; for (t[u] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a <= u;) i.push(e(t[a - 1], t[a])), o.push(r(n[a - 1], n[a])); return function(n) { var e = pa.bisect(t, n, 1, u) - 1; return o[e](i[e](n)) } }

            function to(t, n, e, r) {
                function i() { var i = Math.min(t.length, n.length) > 2 ? Qi : Wi,
                        s = r ? ti : Qr; return a = i(t, n, s, e), u = i(n, t, s, wr), o }

                function o(t) { return a(t) } var a, u; return o.invert = function(t) { return u(t) }, o.domain = function(n) { return arguments.length ? (t = n.map(Number), i()) : t }, o.range = function(t) { return arguments.length ? (n = t, i()) : n }, o.rangeRound = function(t) { return o.range(t).interpolate(Fr) }, o.clamp = function(t) { return arguments.length ? (r = t, i()) : r }, o.interpolate = function(t) { return arguments.length ? (e = t, i()) : e }, o.ticks = function(n) { return io(t, n) }, o.tickFormat = function(n, e) { return oo(t, n, e) }, o.nice = function(n) { return eo(t, n), i() }, o.copy = function() { return to(t, n, e, r) }, i() }

            function no(t, n) { return pa.rebind(t, n, "range", "rangeRound", "interpolate", "clamp") }

            function eo(t, n) { return $i(t, Ki(ro(t, n)[2])), $i(t, Ki(ro(t, n)[2])), t }

            function ro(t, n) { null == n && (n = 10); var e = Ji(t),
                    r = e[1] - e[0],
                    i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
                    o = n / r * i; return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e }

            function io(t, n) { return pa.range.apply(pa, ro(t, n)) }

            function oo(t, n, e) { var r = ro(t, n); if (e) { var i = yu.exec(e); if (i.shift(), "s" === i[8]) { var o = pa.formatPrefix(Math.max(Na(r[0]), Na(r[1]))); return i[7] || (i[7] = "." + ao(o.scale(r[2]))), i[8] = "f", e = pa.format(i.join("")),
                            function(t) { return e(o.scale(t)) + o.symbol } }
                    i[7] || (i[7] = "." + uo(i[8], r)), e = i.join("") } else e = ",." + ao(r[2]) + "f"; return pa.format(e) }

            function ao(t) { return -Math.floor(Math.log(t) / Math.LN10 + .01) }

            function uo(t, n) { var e = ao(n[2]); return t in Ts ? Math.abs(e - ao(Math.max(Na(n[0]), Na(n[1])))) + +("e" !== t) : e - 2 * ("%" === t) }

            function so(t, n, e, r) {
                function i(t) { return (e ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(n) }

                function o(t) { return e ? Math.pow(n, t) : -Math.pow(n, -t) }

                function a(n) { return t(i(n)) } return a.invert = function(n) { return o(t.invert(n)) }, a.domain = function(n) { return arguments.length ? (e = n[0] >= 0, t.domain((r = n.map(Number)).map(i)), a) : r }, a.base = function(e) { return arguments.length ? (n = +e, t.domain(r.map(i)), a) : n }, a.nice = function() { var n = $i(r.map(i), e ? Math : Ps); return t.domain(n), r = n.map(o), a }, a.ticks = function() { var t = Ji(r),
                        a = [],
                        u = t[0],
                        s = t[1],
                        l = Math.floor(i(u)),
                        c = Math.ceil(i(s)),
                        f = n % 1 ? 2 : n; if (isFinite(c - l)) { if (e) { for (; l < c; l++)
                                for (var h = 1; h < f; h++) a.push(o(l) * h);
                            a.push(o(l)) } else
                            for (a.push(o(l)); l++ < c;)
                                for (var h = f - 1; h > 0; h--) a.push(o(l) * h); for (l = 0; a[l] < u; l++); for (c = a.length; a[c - 1] > s; c--);
                        a = a.slice(l, c) } return a }, a.tickFormat = function(t, e) { if (!arguments.length) return Cs;
                    arguments.length < 2 ? e = Cs : "function" != typeof e && (e = pa.format(e)); var r = Math.max(1, n * t / a.ticks().length); return function(t) { var a = t / o(Math.round(i(t))); return a * n < n - .5 && (a *= n), a <= r ? e(t) : "" } }, a.copy = function() { return so(t.copy(), n, e, r) }, no(a, t) }

            function lo(t, n, e) {
                function r(n) { return t(i(n)) } var i = co(n),
                    o = co(1 / n); return r.invert = function(n) { return o(t.invert(n)) }, r.domain = function(n) { return arguments.length ? (t.domain((e = n.map(Number)).map(i)), r) : e }, r.ticks = function(t) { return io(e, t) }, r.tickFormat = function(t, n) { return oo(e, t, n) }, r.nice = function(t) { return r.domain(eo(e, t)) }, r.exponent = function(a) { return arguments.length ? (i = co(n = a), o = co(1 / n), t.domain(e.map(i)), r) : n }, r.copy = function() { return lo(t.copy(), n, e) }, no(r, t) }

            function co(t) { return function(n) { return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t) } }

            function fo(t, n) {
                function e(e) { return o[((i.get(e) || ("range" === n.t ? i.set(e, t.push(e)) : NaN)) - 1) % o.length] }

                function r(n, e) { return pa.range(t.length).map(function(t) { return n + e * t }) } var i, o, a; return e.domain = function(r) { if (!arguments.length) return t;
                    t = [], i = new d; for (var o, a = -1, u = r.length; ++a < u;) i.has(o = r[a]) || i.set(o, t.push(o)); return e[n.t].apply(e, n.a) }, e.range = function(t) { return arguments.length ? (o = t, a = 0, n = { t: "range", a: arguments }, e) : o }, e.rangePoints = function(i, u) { arguments.length < 2 && (u = 0); var s = i[0],
                        l = i[1],
                        c = t.length < 2 ? (s = (s + l) / 2, 0) : (l - s) / (t.length - 1 + u); return o = r(s + c * u / 2, c), a = 0, n = { t: "rangePoints", a: arguments }, e }, e.rangeRoundPoints = function(i, u) { arguments.length < 2 && (u = 0); var s = i[0],
                        l = i[1],
                        c = t.length < 2 ? (s = l = Math.round((s + l) / 2), 0) : (l - s) / (t.length - 1 + u) | 0; return o = r(s + Math.round(c * u / 2 + (l - s - (t.length - 1 + u) * c) / 2), c), a = 0, n = { t: "rangeRoundPoints", a: arguments }, e }, e.rangeBands = function(i, u, s) { arguments.length < 2 && (u = 0), arguments.length < 3 && (s = u); var l = i[1] < i[0],
                        c = i[l - 0],
                        f = i[1 - l],
                        h = (f - c) / (t.length - u + 2 * s); return o = r(c + h * s, h), l && o.reverse(), a = h * (1 - u), n = { t: "rangeBands", a: arguments }, e }, e.rangeRoundBands = function(i, u, s) { arguments.length < 2 && (u = 0), arguments.length < 3 && (s = u); var l = i[1] < i[0],
                        c = i[l - 0],
                        f = i[1 - l],
                        h = Math.floor((f - c) / (t.length - u + 2 * s)); return o = r(c + Math.round((f - c - (t.length - u) * h) / 2), h), l && o.reverse(), a = Math.round(h * (1 - u)), n = { t: "rangeRoundBands", a: arguments }, e }, e.rangeBand = function() { return a }, e.rangeExtent = function() { return Ji(n.a[0]) }, e.copy = function() { return fo(t, n) }, e.domain(t) }

            function ho(t, n) {
                function e() { var e = 0,
                        o = n.length; for (i = []; ++e < o;) i[e - 1] = pa.quantile(t, e / o); return r }

                function r(t) { if (!isNaN(t = +t)) return n[pa.bisect(i, t)] } var i; return r.domain = function(n) { return arguments.length ? (t = n.map(s).filter(l).sort(u), e()) : t }, r.range = function(t) { return arguments.length ? (n = t, e()) : n }, r.quantiles = function() { return i }, r.invertExtent = function(e) { return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? i[e - 1] : t[0], e < i.length ? i[e] : t[t.length - 1]] }, r.copy = function() { return ho(t, n) }, e() }

            function po(t, n, e) {
                function r(n) { return e[Math.max(0, Math.min(a, Math.floor(o * (n - t))))] }

                function i() { return o = e.length / (n - t), a = e.length - 1, r } var o, a; return r.domain = function(e) { return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n] }, r.range = function(t) { return arguments.length ? (e = t, i()) : e }, r.invertExtent = function(n) { return n = e.indexOf(n), n = n < 0 ? NaN : n / o + t, [n, n + 1 / o] }, r.copy = function() { return po(t, n, e) }, i() }

            function go(t, n) {
                function e(e) { if (e <= e) return n[pa.bisect(t, e)] } return e.domain = function(n) { return arguments.length ? (t = n, e) : t }, e.range = function(t) { return arguments.length ? (n = t, e) : n }, e.invertExtent = function(e) { return e = n.indexOf(e), [t[e - 1], t[e]] }, e.copy = function() { return go(t, n) }, e }

            function vo(t) {
                function n(t) { return +t } return n.invert = n, n.domain = n.range = function(e) { return arguments.length ? (t = e.map(n), n) : t }, n.ticks = function(n) { return io(t, n) }, n.tickFormat = function(n, e) { return oo(t, n, e) }, n.copy = function() { return vo(t) }, n }

            function yo() { return 0 }

            function mo(t) { return t.innerRadius }

            function xo(t) { return t.outerRadius }

            function bo(t) { return t.startAngle }

            function ko(t) { return t.endAngle }

            function Mo(t) { return t && t.padAngle }

            function _o(t, n, e, r) { return (t - e) * n - (n - r) * t > 0 ? 0 : 1 }

            function wo(t, n, e, r, i) { var o = t[0] - n[0],
                    a = t[1] - n[1],
                    u = (i ? r : -r) / Math.sqrt(o * o + a * a),
                    s = u * a,
                    l = -u * o,
                    c = t[0] + s,
                    f = t[1] + l,
                    h = n[0] + s,
                    p = n[1] + l,
                    d = (c + h) / 2,
                    g = (f + p) / 2,
                    v = h - c,
                    y = p - f,
                    m = v * v + y * y,
                    x = e - r,
                    b = c * p - h * f,
                    k = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * m - b * b)),
                    M = (b * y - v * k) / m,
                    _ = (-b * v - y * k) / m,
                    w = (b * y + v * k) / m,
                    N = (-b * v + y * k) / m,
                    S = M - d,
                    E = _ - g,
                    A = w - d,
                    L = N - g; return S * S + E * E > A * A + L * L && (M = w, _ = N), [
                    [M - s, _ - l],
                    [M * e / x, _ * e / x]
                ] }

            function No(t) {
                function n(n) {
                    function a() { l.push("M", o(t(c), u)) } for (var s, l = [], c = [], f = -1, h = n.length, p = Ct(e), d = Ct(r); ++f < h;) i.call(this, s = n[f], f) ? c.push([+p.call(this, s, f), +d.call(this, s, f)]) : c.length && (a(), c = []); return c.length && a(), l.length ? l.join("") : null } var e = ze,
                    r = qe,
                    i = qn,
                    o = So,
                    a = o.key,
                    u = .7; return n.x = function(t) { return arguments.length ? (e = t, n) : e }, n.y = function(t) { return arguments.length ? (r = t, n) : r }, n.defined = function(t) { return arguments.length ? (i = t, n) : i }, n.interpolate = function(t) { return arguments.length ? (a = "function" == typeof t ? o = t : (o = Us.get(t) || So).key, n) : a }, n.tension = function(t) { return arguments.length ? (u = t, n) : u }, n }

            function So(t) { return t.length > 1 ? t.join("L") : t + "Z" }

            function Eo(t) { return t.join("L") + "Z" }

            function Ao(t) { for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]); return e > 1 && i.push("H", r[0]), i.join("") }

            function Lo(t) { for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("V", (r = t[n])[1], "H", r[0]); return i.join("") }

            function To(t) { for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r = t[n])[0], "V", r[1]); return i.join("") }

            function Co(t, n) { return t.length < 4 ? So(t) : t[1] + zo(t.slice(1, -1), qo(t, n)) }

            function Po(t, n) { return t.length < 3 ? Eo(t) : t[0] + zo((t.push(t[0]), t), qo([t[t.length - 2]].concat(t, [t[1]]), n)) }

            function Ro(t, n) { return t.length < 3 ? So(t) : t[0] + zo(t, qo(t, n)) }

            function zo(t, n) { if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return So(t); var e = t.length != n.length,
                    r = "",
                    i = t[0],
                    o = t[1],
                    a = n[0],
                    u = a,
                    s = 1; if (e && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), n.length > 1) { u = n[1], o = t[s], s++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1]; for (var l = 2; l < n.length; l++, s++) o = t[s], u = n[l], r += "S" + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1] } if (e) { var c = t[s];
                    r += "Q" + (o[0] + 2 * u[0] / 3) + "," + (o[1] + 2 * u[1] / 3) + "," + c[0] + "," + c[1] } return r }

            function qo(t, n) { for (var e, r = [], i = (1 - n) / 2, o = t[0], a = t[1], u = 1, s = t.length; ++u < s;) e = o, o = a, a = t[u], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]); return r }

            function Io(t) { if (t.length < 3) return So(t); var n = 1,
                    e = t.length,
                    r = t[0],
                    i = r[0],
                    o = r[1],
                    a = [i, i, i, (r = t[1])[0]],
                    u = [o, o, o, r[1]],
                    s = [i, ",", o, "L", Do(Xs, a), ",", Do(Xs, u)]; for (t.push(t[e - 1]); ++n <= e;) r = t[n], a.shift(), a.push(r[0]), u.shift(), u.push(r[1]), Xo(s, a, u); return t.pop(), s.push("L", r), s.join("") }

            function Oo(t) { if (t.length < 4) return So(t); for (var n, e = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) n = t[r], o.push(n[0]), a.push(n[1]); for (e.push(Do(Xs, o) + "," + Do(Xs, a)), --r; ++r < i;) n = t[r], o.shift(), o.push(n[0]), a.shift(), a.push(n[1]), Xo(e, o, a); return e.join("") }

            function Uo(t) { for (var n, e, r = -1, i = t.length, o = i + 4, a = [], u = []; ++r < 4;) e = t[r % i], a.push(e[0]), u.push(e[1]); for (n = [Do(Xs, a), ",", Do(Xs, u)], --r; ++r < o;) e = t[r % i], a.shift(), a.push(e[0]), u.shift(), u.push(e[1]), Xo(n, a, u); return n.join("") }

            function Yo(t, n) { var e = t.length - 1; if (e)
                    for (var r, i, o = t[0][0], a = t[0][1], u = t[e][0] - o, s = t[e][1] - a, l = -1; ++l <= e;) r = t[l], i = l / e, r[0] = n * r[0] + (1 - n) * (o + i * u), r[1] = n * r[1] + (1 - n) * (a + i * s); return Io(t) }

            function Do(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3] }

            function Xo(t, n, e) { t.push("C", Do(Ys, n), ",", Do(Ys, e), ",", Do(Ds, n), ",", Do(Ds, e), ",", Do(Xs, n), ",", Do(Xs, e)) }

            function Fo(t, n) { return (n[1] - t[1]) / (n[0] - t[0]) }

            function jo(t) { for (var n = 0, e = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = Fo(i, o); ++n < e;) r[n] = (a + (a = Fo(i = o, o = t[n + 1]))) / 2; return r[n] = a, r }

            function Bo(t) { for (var n, e, r, i, o = [], a = jo(t), u = -1, s = t.length - 1; ++u < s;) n = Fo(t[u], t[u + 1]), Na(n) < Fa ? a[u] = a[u + 1] = 0 : (e = a[u] / n, r = a[u + 1] / n, i = e * e + r * r, i > 9 && (i = 3 * n / Math.sqrt(i), a[u] = i * e, a[u + 1] = i * r)); for (u = -1; ++u <= s;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])), o.push([i || 0, a[u] * i || 0]); return o }

            function Ho(t) { return t.length < 3 ? So(t) : t[0] + zo(t, Bo(t)) }

            function Vo(t) { for (var n, e, r, i = -1, o = t.length; ++i < o;) n = t[i], e = n[0], r = n[1] - Ga, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r); return t }

            function Go(t) {
                function n(n) {
                    function s() { g.push("M", u(t(y), f), c, l(t(v.reverse()), f), "Z") } for (var h, p, d, g = [], v = [], y = [], m = -1, x = n.length, b = Ct(e), k = Ct(i), M = e === r ? function() { return p } : Ct(r), _ = i === o ? function() { return d } : Ct(o); ++m < x;) a.call(this, h = n[m], m) ? (v.push([p = +b.call(this, h, m), d = +k.call(this, h, m)]), y.push([+M.call(this, h, m), +_.call(this, h, m)])) : v.length && (s(), v = [], y = []); return v.length && s(), g.length ? g.join("") : null } var e = ze,
                    r = ze,
                    i = 0,
                    o = qe,
                    a = qn,
                    u = So,
                    s = u.key,
                    l = u,
                    c = "L",
                    f = .7; return n.x = function(t) { return arguments.length ? (e = r = t, n) : r }, n.x0 = function(t) { return arguments.length ? (e = t, n) : e }, n.x1 = function(t) { return arguments.length ? (r = t, n) : r }, n.y = function(t) { return arguments.length ? (i = o = t, n) : o }, n.y0 = function(t) { return arguments.length ? (i = t, n) : i }, n.y1 = function(t) { return arguments.length ? (o = t, n) : o }, n.defined = function(t) { return arguments.length ? (a = t, n) : a }, n.interpolate = function(t) { return arguments.length ? (s = "function" == typeof t ? u = t : (u = Us.get(t) || So).key, l = u.reverse || u, c = u.closed ? "M" : "L", n) : s }, n.tension = function(t) { return arguments.length ? (f = t, n) : f }, n }

            function Jo(t) { return t.radius }

            function Zo(t) { return [t.x, t.y] }

            function Wo(t) { return function() { var n = t.apply(this, arguments),
                        e = n[0],
                        r = n[1] - Ga; return [e * Math.cos(r), e * Math.sin(r)] } }

            function $o() { return 64 }

            function Ko() { return "circle" }

            function Qo(t) { var n = Math.sqrt(t / Ba); return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z" }

            function ta(t) { return function() { var n, e, r;
                    (n = this[t]) && (r = n[e = n.active]) && (r.timer.c = null, r.timer.t = NaN, --n.count ? delete n[e] : delete this[t], n.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index)) } }

            function na(t, n, e) { return Ta(t, Js), t.namespace = n, t.id = e, t }

            function ea(t, n, e, r) { var i = t.id,
                    o = t.namespace; return J(t, "function" == typeof e ? function(t, a, u) { t[o][i].tween.set(n, r(e.call(t, t.__data__, a, u))) } : (e = r(e), function(t) { t[o][i].tween.set(n, e) })) }

            function ra(t) { return null == t && (t = ""),
                    function() { this.textContent = t } }

            function ia(t) { return null == t ? "__transition__" : "__transition_" + t + "__" }

            function oa(t, n, e, r, i) {
                function o(t) { var n = g.delay; return l.t = n + s, n <= t ? a(t - n) : void(l.c = a) }

                function a(e) { var i = p.active,
                        o = p[i];
                    o && (o.timer.c = null, o.timer.t = NaN, --p.count, delete p[i], o.event && o.event.interrupt.call(t, t.__data__, o.index)); for (var a in p)
                        if (+a < r) { var d = p[a];
                            d.timer.c = null, d.timer.t = NaN, --p.count, delete p[a] }
                    l.c = u, It(function() { return l.c && u(e || 1) && (l.c = null, l.t = NaN), 1 }, 0, s), p.active = r, g.event && g.event.start.call(t, t.__data__, n), h = [], g.tween.forEach(function(e, r) {
                        (r = r.call(t, t.__data__, n)) && h.push(r) }), f = g.ease, c = g.duration }

                function u(i) { for (var o = i / c, a = f(o), u = h.length; u > 0;) h[--u].call(t, a); if (o >= 1) return g.event && g.event.end.call(t, t.__data__, n), --p.count ? delete p[r] : delete t[e], 1 } var s, l, c, f, h, p = t[e] || (t[e] = { active: 0, count: 0 }),
                    g = p[r];
                g || (s = i.time, l = It(o, 0, s), g = p[r] = { tween: new d, time: s, timer: l, delay: i.delay, duration: i.duration, ease: i.ease, index: n }, i = null, ++p.count) }

            function aa(t, n, e) { t.attr("transform", function(t) { var r = n(t); return "translate(" + (isFinite(r) ? r : e(t)) + ",0)" }) }

            function ua(t, n, e) { t.attr("transform", function(t) { var r = n(t); return "translate(0," + (isFinite(r) ? r : e(t)) + ")" }) }

            function sa(t) { return t.toISOString() }

            function la(t, n, e) {
                function r(n) { return t(n) }

                function i(t, e) { var r = t[1] - t[0],
                        i = r / e,
                        o = pa.bisect(rl, i); return o == rl.length ? [n.year, ro(t.map(function(t) { return t / 31536e6 }), e)[2]] : o ? n[i / rl[o - 1] < rl[o] / i ? o - 1 : o] : [al, ro(t, e)[2]] } return r.invert = function(n) { return ca(t.invert(n)) }, r.domain = function(n) { return arguments.length ? (t.domain(n), r) : t.domain().map(ca) }, r.nice = function(t, n) {
                    function e(e) { return !isNaN(e) && !t.range(e, ca(+e + 1), n).length } var o = r.domain(),
                        a = Ji(o),
                        u = null == t ? i(a, 10) : "number" == typeof t && i(a, t); return u && (t = u[0], n = u[1]), r.domain($i(o, n > 1 ? { floor: function(n) { for (; e(n = t.floor(n));) n = ca(n - 1); return n }, ceil: function(n) { for (; e(n = t.ceil(n));) n = ca(+n + 1); return n } } : t)) }, r.ticks = function(t, n) { var e = Ji(r.domain()),
                        o = null == t ? i(e, 10) : "number" == typeof t ? i(e, t) : !t.range && [{ range: t }, n]; return o && (t = o[0], n = o[1]), t.range(e[0], ca(+e[1] + 1), n < 1 ? 1 : n) }, r.tickFormat = function() { return e }, r.copy = function() { return la(t.copy(), n, e) }, no(r, t) }

            function ca(t) { return new Date(t) }

            function fa(t) { return JSON.parse(t.responseText) }

            function ha(t) { var n = va.createRange(); return n.selectNode(va.body), n.createContextualFragment(t.responseText) }
            var pa = { version: "3.5.17" },
                da = [].slice,
                ga = function(t) { return da.call(t) },
                va = this.document;
            if (va) try { ga(va.documentElement.childNodes)[0].nodeType } catch (ya) { ga = function(t) { for (var n = t.length, e = new Array(n); n--;) e[n] = t[n]; return e } }
            if (Date.now || (Date.now = function() { return +new Date }), va) try { va.createElement("DIV").style.setProperty("opacity", 0, "") } catch (ma) { var xa = this.Element.prototype,
                    ba = xa.setAttribute,
                    ka = xa.setAttributeNS,
                    Ma = this.CSSStyleDeclaration.prototype,
                    _a = Ma.setProperty;
                xa.setAttribute = function(t, n) { ba.call(this, t, n + "") }, xa.setAttributeNS = function(t, n, e) { ka.call(this, t, n, e + "") }, Ma.setProperty = function(t, n, e) { _a.call(this, t, n + "", e) } }
            pa.ascending = u, pa.descending = function(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }, pa.min = function(t, n) { var e, r, i = -1,
                    o = t.length; if (1 === arguments.length) { for (; ++i < o;)
                        if (null != (r = t[i]) && r >= r) { e = r; break }
                    for (; ++i < o;) null != (r = t[i]) && e > r && (e = r) } else { for (; ++i < o;)
                        if (null != (r = n.call(t, t[i], i)) && r >= r) { e = r; break }
                    for (; ++i < o;) null != (r = n.call(t, t[i], i)) && e > r && (e = r) } return e }, pa.max = function(t, n) { var e, r, i = -1,
                    o = t.length; if (1 === arguments.length) { for (; ++i < o;)
                        if (null != (r = t[i]) && r >= r) { e = r; break }
                    for (; ++i < o;) null != (r = t[i]) && r > e && (e = r) } else { for (; ++i < o;)
                        if (null != (r = n.call(t, t[i], i)) && r >= r) { e = r; break }
                    for (; ++i < o;) null != (r = n.call(t, t[i], i)) && r > e && (e = r) } return e }, pa.extent = function(t, n) { var e, r, i, o = -1,
                    a = t.length; if (1 === arguments.length) { for (; ++o < a;)
                        if (null != (r = t[o]) && r >= r) { e = i = r; break }
                    for (; ++o < a;) null != (r = t[o]) && (e > r && (e = r), i < r && (i = r)) } else { for (; ++o < a;)
                        if (null != (r = n.call(t, t[o], o)) && r >= r) { e = i = r; break }
                    for (; ++o < a;) null != (r = n.call(t, t[o], o)) && (e > r && (e = r), i < r && (i = r)) } return [e, i] }, pa.sum = function(t, n) { var e, r = 0,
                    i = t.length,
                    o = -1; if (1 === arguments.length)
                    for (; ++o < i;) l(e = +t[o]) && (r += e);
                else
                    for (; ++o < i;) l(e = +n.call(t, t[o], o)) && (r += e); return r }, pa.mean = function(t, n) { var e, r = 0,
                    i = t.length,
                    o = -1,
                    a = i; if (1 === arguments.length)
                    for (; ++o < i;) l(e = s(t[o])) ? r += e : --a;
                else
                    for (; ++o < i;) l(e = s(n.call(t, t[o], o))) ? r += e : --a; if (a) return r / a }, pa.quantile = function(t, n) { var e = (t.length - 1) * n + 1,
                    r = Math.floor(e),
                    i = +t[r - 1],
                    o = e - r; return o ? i + o * (t[r] - i) : i }, pa.median = function(t, n) { var e, r = [],
                    i = t.length,
                    o = -1; if (1 === arguments.length)
                    for (; ++o < i;) l(e = s(t[o])) && r.push(e);
                else
                    for (; ++o < i;) l(e = s(n.call(t, t[o], o))) && r.push(e); if (r.length) return pa.quantile(r.sort(u), .5) }, pa.variance = function(t, n) { var e, r, i = t.length,
                    o = 0,
                    a = 0,
                    u = -1,
                    c = 0; if (1 === arguments.length)
                    for (; ++u < i;) l(e = s(t[u])) && (r = e - o, o += r / ++c, a += r * (e - o));
                else
                    for (; ++u < i;) l(e = s(n.call(t, t[u], u))) && (r = e - o, o += r / ++c, a += r * (e - o)); if (c > 1) return a / (c - 1) }, pa.deviation = function() { var t = pa.variance.apply(this, arguments); return t ? Math.sqrt(t) : t };
            var wa = c(u);
            pa.bisectLeft = wa.left, pa.bisect = pa.bisectRight = wa.right, pa.bisector = function(t) { return c(1 === t.length ? function(n, e) { return u(t(n), e) } : t) }, pa.shuffle = function(t, n, e) {
                (o = arguments.length) < 3 && (e = t.length, o < 2 && (n = 0)); for (var r, i, o = e - n; o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r; return t }, pa.permute = function(t, n) { for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]]; return r }, pa.pairs = function(t) { for (var n, e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = [n = i, i = t[++e]]; return o }, pa.transpose = function(t) { if (!(i = t.length)) return []; for (var n = -1, e = pa.min(t, f), r = new Array(e); ++n < e;)
                    for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n]; return r }, pa.zip = function() { return pa.transpose(arguments) }, pa.keys = function(t) { var n = []; for (var e in t) n.push(e); return n }, pa.values = function(t) { var n = []; for (var e in t) n.push(t[e]); return n }, pa.entries = function(t) { var n = []; for (var e in t) n.push({ key: e, value: t[e] }); return n }, pa.merge = function(t) { for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length; for (e = new Array(a); --i >= 0;)
                    for (r = t[i], n = r.length; --n >= 0;) e[--a] = r[n]; return e };
            var Na = Math.abs;
            pa.range = function(t, n, e) { if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e === 1 / 0) throw new Error("infinite range"); var r, i = [],
                    o = h(Na(e)),
                    a = -1; if (t *= o, n *= o, e *= o, e < 0)
                    for (;
                        (r = t + e * ++a) > n;) i.push(r / o);
                else
                    for (;
                        (r = t + e * ++a) < n;) i.push(r / o); return i }, pa.map = function(t, n) { var e = new d; if (t instanceof d) t.forEach(function(t, n) { e.set(t, n) });
                else if (Array.isArray(t)) { var r, i = -1,
                        o = t.length; if (1 === arguments.length)
                        for (; ++i < o;) e.set(i, t[i]);
                    else
                        for (; ++i < o;) e.set(n.call(t, r = t[i], i), r) } else
                    for (var a in t) e.set(a, t[a]); return e };
            var Sa = "__proto__",
                Ea = "\0";
            p(d, { has: y, get: function(t) { return this._[g(t)] }, set: function(t, n) { return this._[g(t)] = n }, remove: m, keys: x, values: function() { var t = []; for (var n in this._) t.push(this._[n]); return t }, entries: function() { var t = []; for (var n in this._) t.push({ key: v(n), value: this._[n] }); return t }, size: b, empty: k, forEach: function(t) { for (var n in this._) t.call(this, v(n), this._[n]) } }), pa.nest = function() {
                function t(n, a, u) { if (u >= o.length) return r ? r.call(i, a) : e ? a.sort(e) : a; for (var s, l, c, f, h = -1, p = a.length, g = o[u++], v = new d; ++h < p;)(f = v.get(s = g(l = a[h]))) ? f.push(l) : v.set(s, [l]); return n ? (l = n(), c = function(e, r) { l.set(e, t(n, r, u)) }) : (l = {}, c = function(e, r) { l[e] = t(n, r, u) }), v.forEach(c), l }

                function n(t, e) { if (e >= o.length) return t; var r = [],
                        i = a[e++]; return t.forEach(function(t, i) { r.push({ key: t, values: n(i, e) }) }), i ? r.sort(function(t, n) { return i(t.key, n.key) }) : r } var e, r, i = {},
                    o = [],
                    a = []; return i.map = function(n, e) { return t(e, n, 0) }, i.entries = function(e) { return n(t(pa.map, e, 0), 0) }, i.key = function(t) { return o.push(t), i }, i.sortKeys = function(t) { return a[o.length - 1] = t, i }, i.sortValues = function(t) { return e = t, i }, i.rollup = function(t) { return r = t, i }, i }, pa.set = function(t) { var n = new M; if (t)
                    for (var e = 0, r = t.length; e < r; ++e) n.add(t[e]); return n }, p(M, { has: y, add: function(t) { return this._[g(t += "")] = !0, t }, remove: m, values: x, size: b, empty: k, forEach: function(t) { for (var n in this._) t.call(this, v(n)) } }), pa.behavior = {}, pa.rebind = function(t, n) { for (var e, r = 1, i = arguments.length; ++r < i;) t[e = arguments[r]] = w(t, n, n[e]); return t };
            var Aa = ["webkit", "ms", "moz", "Moz", "o", "O"];
            pa.dispatch = function() { for (var t = new E, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = A(t); return t }, E.prototype.on = function(t, n) { var e = t.indexOf("."),
                    r = ""; if (e >= 0 && (r = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n); if (2 === arguments.length) { if (null == n)
                        for (t in this) this.hasOwnProperty(t) && this[t].on(r, null); return this } }, pa.event = null, pa.requote = function(t) { return t.replace(La, "\\$&") };
            var La = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                Ta = {}.__proto__ ? function(t, n) { t.__proto__ = n } : function(t, n) { for (var e in n) t[e] = n[e] },
                Ca = function(t, n) { return n.querySelector(t) },
                Pa = function(t, n) { return n.querySelectorAll(t) },
                Ra = function(t, n) { var e = t.matches || t[N(t, "matchesSelector")]; return (Ra = function(t, n) { return e.call(t, n) })(t, n) };
            "function" == typeof Sizzle && (Ca = function(t, n) { return Sizzle(t, n)[0] || null }, Pa = Sizzle, Ra = Sizzle.matchesSelector), pa.selection = function() { return pa.select(va.documentElement) };
            var za = pa.selection.prototype = [];
            za.select = function(t) { var n, e, r, i, o = [];
                t = R(t); for (var a = -1, u = this.length; ++a < u;) { o.push(n = []), n.parentNode = (r = this[a]).parentNode; for (var s = -1, l = r.length; ++s < l;)(i = r[s]) ? (n.push(e = t.call(i, i.__data__, s, a)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null) } return P(o) }, za.selectAll = function(t) { var n, e, r = [];
                t = z(t); for (var i = -1, o = this.length; ++i < o;)
                    for (var a = this[i], u = -1, s = a.length; ++u < s;)(e = a[u]) && (r.push(n = ga(t.call(e, e.__data__, u, i))), n.parentNode = e); return P(r) };
            var qa = "http://www.w3.org/1999/xhtml",
                Ia = { svg: "http://www.w3.org/2000/svg", xhtml: qa, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
            pa.ns = { prefix: Ia, qualify: function(t) { var n = t.indexOf(":"),
                        e = t; return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), Ia.hasOwnProperty(e) ? { space: Ia[e], local: t } : t } }, za.attr = function(t, n) { if (arguments.length < 2) { if ("string" == typeof t) { var e = this.node(); return t = pa.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t) } for (n in t) this.each(q(n, t[n])); return this } return this.each(q(t, n)) }, za.classed = function(t, n) { if (arguments.length < 2) { if ("string" == typeof t) { var e = this.node(),
                            r = (t = U(t)).length,
                            i = -1; if (n = e.classList) { for (; ++i < r;)
                                if (!n.contains(t[i])) return !1 } else
                            for (n = e.getAttribute("class"); ++i < r;)
                                if (!O(t[i]).test(n)) return !1; return !0 } for (n in t) this.each(Y(n, t[n])); return this } return this.each(Y(t, n)) }, za.style = function(t, n, e) { var r = arguments.length; if (r < 3) { if ("string" != typeof t) { r < 2 && (n = ""); for (e in t) this.each(X(e, t[e], n)); return this } if (r < 2) { var i = this.node(); return a(i).getComputedStyle(i, null).getPropertyValue(t) }
                    e = "" } return this.each(X(t, n, e)) }, za.property = function(t, n) { if (arguments.length < 2) { if ("string" == typeof t) return this.node()[t]; for (n in t) this.each(F(n, t[n])); return this } return this.each(F(t, n)) }, za.text = function(t) { return arguments.length ? this.each("function" == typeof t ? function() { var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n } : null == t ? function() { this.textContent = "" } : function() { this.textContent = t }) : this.node().textContent }, za.html = function(t) { return arguments.length ? this.each("function" == typeof t ? function() { var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n } : null == t ? function() { this.innerHTML = "" } : function() { this.innerHTML = t }) : this.node().innerHTML }, za.append = function(t) { return t = j(t), this.select(function() { return this.appendChild(t.apply(this, arguments)) }) }, za.insert = function(t, n) { return t = j(t), n = R(n), this.select(function() { return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null) }) }, za.remove = function() { return this.each(B) }, za.data = function(t, n) {
                function e(t, e) { var r, i, o, a = t.length,
                        c = e.length,
                        f = Math.min(a, c),
                        h = new Array(c),
                        p = new Array(c),
                        g = new Array(a); if (n) { var v, y = new d,
                            m = new Array(a); for (r = -1; ++r < a;)(i = t[r]) && (y.has(v = n.call(i, i.__data__, r)) ? g[r] = i : y.set(v, i), m[r] = v); for (r = -1; ++r < c;)(i = y.get(v = n.call(e, o = e[r], r))) ? i !== !0 && (h[r] = i, i.__data__ = o) : p[r] = H(o), y.set(v, !0); for (r = -1; ++r < a;) r in m && y.get(m[r]) !== !0 && (g[r] = t[r]) } else { for (r = -1; ++r < f;) i = t[r], o = e[r], i ? (i.__data__ = o, h[r] = i) : p[r] = H(o); for (; r < c; ++r) p[r] = H(e[r]); for (; r < a; ++r) g[r] = t[r] }
                    p.update = h, p.parentNode = h.parentNode = g.parentNode = t.parentNode, u.push(p), s.push(h), l.push(g) } var r, i, o = -1,
                    a = this.length; if (!arguments.length) { for (t = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (t[o] = i.__data__); return t } var u = Z([]),
                    s = P([]),
                    l = P([]); if ("function" == typeof t)
                    for (; ++o < a;) e(r = this[o], t.call(r, r.parentNode.__data__, o));
                else
                    for (; ++o < a;) e(r = this[o], t); return s.enter = function() { return u }, s.exit = function() { return l }, s }, za.datum = function(t) { return arguments.length ? this.property("__data__", t) : this.property("__data__") }, za.filter = function(t) { var n, e, r, i = []; "function" != typeof t && (t = V(t)); for (var o = 0, a = this.length; o < a; o++) { i.push(n = []), n.parentNode = (e = this[o]).parentNode; for (var u = 0, s = e.length; u < s; u++)(r = e[u]) && t.call(r, r.__data__, u, o) && n.push(r) } return P(i) }, za.order = function() { for (var t = -1, n = this.length; ++t < n;)
                    for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e); return this }, za.sort = function(t) { t = G.apply(this, arguments); for (var n = -1, e = this.length; ++n < e;) this[n].sort(t); return this.order() }, za.each = function(t) { return J(this, function(n, e, r) { t.call(n, n.__data__, e, r) }) }, za.call = function(t) { var n = ga(arguments); return t.apply(n[0] = this, n), this }, za.empty = function() { return !this.node() }, za.node = function() { for (var t = 0, n = this.length; t < n; t++)
                    for (var e = this[t], r = 0, i = e.length; r < i; r++) { var o = e[r]; if (o) return o }
                return null }, za.size = function() { var t = 0; return J(this, function() {++t }), t };
            var Oa = [];
            pa.selection.enter = Z, pa.selection.enter.prototype = Oa, Oa.append = za.append, Oa.empty = za.empty, Oa.node = za.node, Oa.call = za.call, Oa.size = za.size, Oa.select = function(t) { for (var n, e, r, i, o, a = [], u = -1, s = this.length; ++u < s;) { r = (i = this[u]).update, a.push(n = []), n.parentNode = i.parentNode; for (var l = -1, c = i.length; ++l < c;)(o = i[l]) ? (n.push(r[l] = e = t.call(i.parentNode, o.__data__, l, u)), e.__data__ = o.__data__) : n.push(null) } return P(a) }, Oa.insert = function(t, n) { return arguments.length < 2 && (n = W(this)), za.insert.call(this, t, n) }, pa.select = function(t) { var n; return "string" == typeof t ? (n = [Ca(t, va)], n.parentNode = va.documentElement) : (n = [t], n.parentNode = o(t)), P([n]) }, pa.selectAll = function(t) { var n; return "string" == typeof t ? (n = ga(Pa(t, va)), n.parentNode = va.documentElement) : (n = ga(t), n.parentNode = null), P([n]) }, za.on = function(t, n, e) { var r = arguments.length; if (r < 3) { if ("string" != typeof t) { r < 2 && (n = !1); for (e in t) this.each($(e, t[e], n)); return this } if (r < 2) return (r = this.node()["__on" + t]) && r._;
                    e = !1 } return this.each($(t, n, e)) };
            var Ua = pa.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
            va && Ua.forEach(function(t) { "on" + t in va && Ua.remove(t) });
            var Ya, Da = 0;
            pa.mouse = function(t) { return nt(t, T()) };
            var Xa = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            pa.touch = function(t, n, e) { if (arguments.length < 3 && (e = n, n = T().changedTouches), n)
                    for (var r, i = 0, o = n.length; i < o; ++i)
                        if ((r = n[i]).identifier === e) return nt(t, r) }, pa.behavior.drag = function() {
                function t() { this.on("mousedown.drag", i).on("touchstart.drag", o) }

                function n(t, n, i, o, a) { return function() {
                        function u() { var t, e, r = n(h, g);
                            r && (t = r[0] - x[0], e = r[1] - x[1], d |= t | e, x = r, p({ type: "drag", x: r[0] + l[0], y: r[1] + l[1], dx: t, dy: e })) }

                        function s() { n(h, g) && (y.on(o + v, null).on(a + v, null), m(d), p({ type: "dragend" })) } var l, c = this,
                            f = pa.event.target.correspondingElement || pa.event.target,
                            h = c.parentNode,
                            p = e.of(c, arguments),
                            d = 0,
                            g = t(),
                            v = ".drag" + (null == g ? "" : "-" + g),
                            y = pa.select(i(f)).on(o + v, u).on(a + v, s),
                            m = tt(f),
                            x = n(h, g);
                        r ? (l = r.apply(c, arguments), l = [l.x - x[0], l.y - x[1]]) : l = [0, 0], p({ type: "dragstart" }) } } var e = C(t, "drag", "dragstart", "dragend"),
                    r = null,
                    i = n(S, pa.mouse, a, "mousemove", "mouseup"),
                    o = n(et, pa.touch, _, "touchmove", "touchend"); return t.origin = function(n) { return arguments.length ? (r = n, t) : r }, pa.rebind(t, e, "on") }, pa.touches = function(t, n) { return arguments.length < 2 && (n = T().touches), n ? ga(n).map(function(n) { var e = nt(t, n); return e.identifier = n.identifier, e }) : [] };
            var Fa = 1e-6,
                ja = Fa * Fa,
                Ba = Math.PI,
                Ha = 2 * Ba,
                Va = Ha - Fa,
                Ga = Ba / 2,
                Ja = Ba / 180,
                Za = 180 / Ba,
                Wa = Math.SQRT2,
                $a = 2,
                Ka = 4;
            pa.interpolateZoom = function(t, n) { var e, r, i = t[0],
                    o = t[1],
                    a = t[2],
                    u = n[0],
                    s = n[1],
                    l = n[2],
                    c = u - i,
                    f = s - o,
                    h = c * c + f * f; if (h < ja) r = Math.log(l / a) / Wa, e = function(t) { return [i + t * c, o + t * f, a * Math.exp(Wa * t * r)] };
                else { var p = Math.sqrt(h),
                        d = (l * l - a * a + Ka * h) / (2 * a * $a * p),
                        g = (l * l - a * a - Ka * h) / (2 * l * $a * p),
                        v = Math.log(Math.sqrt(d * d + 1) - d),
                        y = Math.log(Math.sqrt(g * g + 1) - g);
                    r = (y - v) / Wa, e = function(t) { var n = t * r,
                            e = st(v),
                            u = a / ($a * p) * (e * lt(Wa * n + v) - ut(v)); return [i + u * c, o + u * f, a * e / st(Wa * n + v)] } } return e.duration = 1e3 * r, e }, pa.behavior.zoom = function() {
                function t(t) { t.on(T, f).on(tu + ".zoom", p).on("dblclick.zoom", d).on(z, h) }

                function n(t) { return [(t[0] - w.x) / w.k, (t[1] - w.y) / w.k] }

                function e(t) { return [t[0] * w.k + w.x, t[1] * w.k + w.y] }

                function r(t) { w.k = Math.max(S[0], Math.min(S[1], t)) }

                function i(t, n) { n = e(n), w.x += t[0] - n[0], w.y += t[1] - n[1] }

                function o(n, e, o, a) { n.__chart__ = { x: w.x, y: w.y, k: w.k }, r(Math.pow(2, a)), i(v = e, o), n = pa.select(n), E > 0 && (n = n.transition().duration(E)), n.call(t.event) }

                function u() { k && k.domain(b.range().map(function(t) { return (t - w.x) / w.k }).map(b.invert)), _ && _.domain(M.range().map(function(t) { return (t - w.y) / w.k }).map(M.invert)) }

                function s(t) { A++ || t({ type: "zoomstart" }) }

                function l(t) { u(), t({ type: "zoom", scale: w.k, translate: [w.x, w.y] }) }

                function c(t) {--A || (t({ type: "zoomend" }), v = null) }

                function f() {
                    function t() { u = 1, i(pa.mouse(r), h), l(o) }

                    function e() { f.on(P, null).on(R, null), p(u), c(o) } var r = this,
                        o = q.of(r, arguments),
                        u = 0,
                        f = pa.select(a(r)).on(P, t).on(R, e),
                        h = n(pa.mouse(r)),
                        p = tt(r);
                    Gs.call(r), s(o) }

                function h() {
                    function t() { var t = pa.touches(d); return p = w.k, t.forEach(function(t) { t.identifier in v && (v[t.identifier] = n(t)) }), t }

                    function e() { var n = pa.event.target;
                        pa.select(n).on(b, a).on(k, u), M.push(n); for (var e = pa.event.changedTouches, r = 0, i = e.length; r < i; ++r) v[e[r].identifier] = null; var s = t(),
                            l = Date.now(); if (1 === s.length) { if (l - x < 500) { var c = s[0];
                                o(d, c, v[c.identifier], Math.floor(Math.log(w.k) / Math.LN2) + 1), L() }
                            x = l } else if (s.length > 1) { var c = s[0],
                                f = s[1],
                                h = c[0] - f[0],
                                p = c[1] - f[1];
                            y = h * h + p * p } }

                    function a() {
                        var t, n, e, o, a = pa.touches(d);
                        Gs.call(d);
                        for (var u = 0, s = a.length; u < s; ++u, o = null)
                            if (e = a[u], o = v[e.identifier]) { if (n) break;
                                t = e, n = o }
                        if (o) {
                            var c = (c = e[0] - t[0]) * c + (c = e[1] - t[1]) * c,
                                f = y && Math.sqrt(c / y);
                            t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], n = [(n[0] + o[0]) / 2, (n[1] + o[1]) / 2],
                                r(f * p)
                        }
                        x = null, i(t, n), l(g)
                    }

                    function u() { if (pa.event.touches.length) { for (var n = pa.event.changedTouches, e = 0, r = n.length; e < r; ++e) delete v[n[e].identifier]; for (var i in v) return void t() }
                        pa.selectAll(M).on(m, null), _.on(T, f).on(z, h), N(), c(g) }
                    var p, d = this,
                        g = q.of(d, arguments),
                        v = {},
                        y = 0,
                        m = ".zoom-" + pa.event.changedTouches[0].identifier,
                        b = "touchmove" + m,
                        k = "touchend" + m,
                        M = [],
                        _ = pa.select(d),
                        N = tt(d);
                    e(), s(g), _.on(T, null).on(z, e)
                }

                function p() { var t = q.of(this, arguments);
                    m ? clearTimeout(m) : (Gs.call(this), g = n(v = y || pa.mouse(this)), s(t)), m = setTimeout(function() { m = null, c(t) }, 50), L(), r(Math.pow(2, .002 * Qa()) * w.k), i(v, g), l(t) }

                function d() { var t = pa.mouse(this),
                        e = Math.log(w.k) / Math.LN2;
                    o(this, t, n(t), pa.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1) }
                var g, v, y, m, x, b, k, M, _, w = { x: 0, y: 0, k: 1 },
                    N = [960, 500],
                    S = nu,
                    E = 250,
                    A = 0,
                    T = "mousedown.zoom",
                    P = "mousemove.zoom",
                    R = "mouseup.zoom",
                    z = "touchstart.zoom",
                    q = C(t, "zoomstart", "zoom", "zoomend");
                return tu || (tu = "onwheel" in va ? (Qa = function() { return -pa.event.deltaY * (pa.event.deltaMode ? 120 : 1) }, "wheel") : "onmousewheel" in va ? (Qa = function() { return pa.event.wheelDelta }, "mousewheel") : (Qa = function() { return -pa.event.detail }, "MozMousePixelScroll")), t.event = function(t) { t.each(function() { var t = q.of(this, arguments),
                            n = w;
                        Hs ? pa.select(this).transition().each("start.zoom", function() { w = this.__chart__ || { x: 0, y: 0, k: 1 }, s(t) }).tween("zoom:zoom", function() { var e = N[0],
                                r = N[1],
                                i = v ? v[0] : e / 2,
                                o = v ? v[1] : r / 2,
                                a = pa.interpolateZoom([(i - w.x) / w.k, (o - w.y) / w.k, e / w.k], [(i - n.x) / n.k, (o - n.y) / n.k, e / n.k]); return function(n) { var r = a(n),
                                    u = e / r[2];
                                this.__chart__ = w = { x: i - r[0] * u, y: o - r[1] * u, k: u }, l(t) } }).each("interrupt.zoom", function() { c(t) }).each("end.zoom", function() { c(t) }) : (this.__chart__ = w, s(t), l(t), c(t)) }) }, t.translate = function(n) { return arguments.length ? (w = { x: +n[0], y: +n[1], k: w.k }, u(), t) : [w.x, w.y] }, t.scale = function(n) { return arguments.length ? (w = { x: w.x, y: w.y, k: null }, r(+n), u(), t) : w.k }, t.scaleExtent = function(n) { return arguments.length ? (S = null == n ? nu : [+n[0], +n[1]], t) : S }, t.center = function(n) { return arguments.length ? (y = n && [+n[0], +n[1]], t) : y }, t.size = function(n) { return arguments.length ? (N = n && [+n[0], +n[1]], t) : N }, t.duration = function(n) { return arguments.length ? (E = +n, t) : E }, t.x = function(n) { return arguments.length ? (k = n, b = n.copy(), w = { x: 0, y: 0, k: 1 }, t) : k }, t.y = function(n) { return arguments.length ? (_ = n, M = n.copy(), w = { x: 0, y: 0, k: 1 }, t) : _ }, pa.rebind(t, q, "on")
            };
            var Qa, tu, nu = [0, 1 / 0];
            pa.color = ft, ft.prototype.toString = function() { return this.rgb() + "" }, pa.hsl = ht;
            var eu = ht.prototype = new ft;
            eu.brighter = function(t) { return t = Math.pow(.7, arguments.length ? t : 1), new ht(this.h, this.s, this.l / t) }, eu.darker = function(t) { return t = Math.pow(.7, arguments.length ? t : 1), new ht(this.h, this.s, t * this.l) }, eu.rgb = function() { return pt(this.h, this.s, this.l) }, pa.hcl = dt;
            var ru = dt.prototype = new ft;
            ru.brighter = function(t) { return new dt(this.h, this.c, Math.min(100, this.l + iu * (arguments.length ? t : 1))) }, ru.darker = function(t) { return new dt(this.h, this.c, Math.max(0, this.l - iu * (arguments.length ? t : 1))) }, ru.rgb = function() { return gt(this.h, this.c, this.l).rgb() }, pa.lab = vt;
            var iu = 18,
                ou = .95047,
                au = 1,
                uu = 1.08883,
                su = vt.prototype = new ft;
            su.brighter = function(t) { return new vt(Math.min(100, this.l + iu * (arguments.length ? t : 1)), this.a, this.b) }, su.darker = function(t) { return new vt(Math.max(0, this.l - iu * (arguments.length ? t : 1)), this.a, this.b) }, su.rgb = function() { return yt(this.l, this.a, this.b) }, pa.rgb = Mt;
            var lu = Mt.prototype = new ft;
            lu.brighter = function(t) { t = Math.pow(.7, arguments.length ? t : 1); var n = this.r,
                    e = this.g,
                    r = this.b,
                    i = 30; return n || e || r ? (n && n < i && (n = i), e && e < i && (e = i), r && r < i && (r = i), new Mt(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, r / t))) : new Mt(i, i, i) }, lu.darker = function(t) { return t = Math.pow(.7, arguments.length ? t : 1), new Mt(t * this.r, t * this.g, t * this.b) }, lu.hsl = function() { return Et(this.r, this.g, this.b) }, lu.toString = function() { return "#" + Nt(this.r) + Nt(this.g) + Nt(this.b) };
            var cu = pa.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 });
            cu.forEach(function(t, n) { cu.set(t, _t(n)) }), pa.functor = Ct, pa.xhr = Pt(_), pa.dsv = function(t, n) {
                function e(t, e, o) { arguments.length < 3 && (o = e, e = null); var a = Rt(t, n, null == e ? r : i(e), o); return a.row = function(t) { return arguments.length ? a.response(null == (e = t) ? r : i(t)) : e }, a }

                function r(t) { return e.parse(t.responseText) }

                function i(t) { return function(n) { return e.parse(n.responseText, t) } }

                function o(n) { return n.map(a).join(t) }

                function a(t) { return u.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t } var u = new RegExp('["' + t + "\n]"),
                    s = t.charCodeAt(0); return e.parse = function(t, n) { var r; return e.parseRows(t, function(t, e) { if (r) return r(t, e - 1); var i = new Function("d", "return {" + t.map(function(t, n) { return JSON.stringify(t) + ": d[" + n + "]" }).join(",") + "}");
                        r = n ? function(t, e) { return n(i(t), e) } : i }) }, e.parseRows = function(t, n) {
                    function e() { if (c >= l) return a; if (i) return i = !1, o; var n = c; if (34 === t.charCodeAt(n)) { for (var e = n; e++ < l;)
                                if (34 === t.charCodeAt(e)) { if (34 !== t.charCodeAt(e + 1)) break;++e }
                            c = e + 2; var r = t.charCodeAt(e + 1); return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++c) : 10 === r && (i = !0), t.slice(n + 1, e).replace(/""/g, '"') } for (; c < l;) { var r = t.charCodeAt(c++),
                                u = 1; if (10 === r) i = !0;
                            else if (13 === r) i = !0, 10 === t.charCodeAt(c) && (++c, ++u);
                            else if (r !== s) continue; return t.slice(n, c - u) } return t.slice(n) } for (var r, i, o = {}, a = {}, u = [], l = t.length, c = 0, f = 0;
                        (r = e()) !== a;) { for (var h = []; r !== o && r !== a;) h.push(r), r = e();
                        n && null == (h = n(h, f++)) || u.push(h) } return u }, e.format = function(n) { if (Array.isArray(n[0])) return e.formatRows(n); var r = new M,
                        i = []; return n.forEach(function(t) { for (var n in t) r.has(n) || i.push(r.add(n)) }), [i.map(a).join(t)].concat(n.map(function(n) { return i.map(function(t) { return a(n[t]) }).join(t) })).join("\n") }, e.formatRows = function(t) { return t.map(o).join("\n") }, e }, pa.csv = pa.dsv(",", "text/csv"), pa.tsv = pa.dsv("\t", "text/tab-separated-values");
            var fu, hu, pu, du, gu = this[N(this, "requestAnimationFrame")] || function(t) { setTimeout(t, 17) };
            pa.timer = function() { It.apply(this, arguments) }, pa.timer.flush = function() { Ut(), Yt() }, pa.round = function(t, n) { return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t) };
            var vu = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Xt);
            pa.formatPrefix = function(t, n) { var e = 0; return (t = +t) && (t < 0 && (t *= -1), n && (t = pa.round(t, Dt(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), vu[8 + e / 3] };
            var yu = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                mu = pa.map({ b: function(t) { return t.toString(2) }, c: function(t) { return String.fromCharCode(t) }, o: function(t) { return t.toString(8) }, x: function(t) { return t.toString(16) }, X: function(t) { return t.toString(16).toUpperCase() }, g: function(t, n) { return t.toPrecision(n) }, e: function(t, n) { return t.toExponential(n) }, f: function(t, n) { return t.toFixed(n) }, r: function(t, n) { return (t = pa.round(t, Dt(t, n))).toFixed(Math.max(0, Math.min(20, Dt(t * (1 + 1e-15), n)))) } }),
                xu = pa.time = {},
                bu = Date;
            Bt.prototype = { getDate: function() { return this._.getUTCDate() }, getDay: function() { return this._.getUTCDay() }, getFullYear: function() { return this._.getUTCFullYear() }, getHours: function() { return this._.getUTCHours() }, getMilliseconds: function() { return this._.getUTCMilliseconds() }, getMinutes: function() { return this._.getUTCMinutes() }, getMonth: function() { return this._.getUTCMonth() }, getSeconds: function() { return this._.getUTCSeconds() }, getTime: function() { return this._.getTime() }, getTimezoneOffset: function() { return 0 }, valueOf: function() { return this._.valueOf() }, setDate: function() { ku.setUTCDate.apply(this._, arguments) }, setDay: function() { ku.setUTCDay.apply(this._, arguments) }, setFullYear: function() { ku.setUTCFullYear.apply(this._, arguments) }, setHours: function() { ku.setUTCHours.apply(this._, arguments) }, setMilliseconds: function() { ku.setUTCMilliseconds.apply(this._, arguments) }, setMinutes: function() { ku.setUTCMinutes.apply(this._, arguments) }, setMonth: function() { ku.setUTCMonth.apply(this._, arguments) }, setSeconds: function() { ku.setUTCSeconds.apply(this._, arguments) }, setTime: function() { ku.setTime.apply(this._, arguments) } };
            var ku = Date.prototype;
            xu.year = Ht(function(t) { return t = xu.day(t), t.setMonth(0, 1), t }, function(t, n) { t.setFullYear(t.getFullYear() + n) }, function(t) { return t.getFullYear() }), xu.years = xu.year.range, xu.years.utc = xu.year.utc.range, xu.day = Ht(function(t) { var n = new bu(2e3, 0); return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n }, function(t, n) { t.setDate(t.getDate() + n) }, function(t) { return t.getDate() - 1 }), xu.days = xu.day.range, xu.days.utc = xu.day.utc.range, xu.dayOfYear = function(t) { var n = xu.year(t); return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5) }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, n) { n = 7 - n; var e = xu[t] = Ht(function(t) { return (t = xu.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t }, function(t, n) { t.setDate(t.getDate() + 7 * Math.floor(n)) }, function(t) { var e = xu.year(t).getDay(); return Math.floor((xu.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n) });
                xu[t + "s"] = e.range, xu[t + "s"].utc = e.utc.range, xu[t + "OfYear"] = function(t) { var e = xu.year(t).getDay(); return Math.floor((xu.dayOfYear(t) + (e + n) % 7) / 7) } }), xu.week = xu.sunday, xu.weeks = xu.sunday.range, xu.weeks.utc = xu.sunday.utc.range, xu.weekOfYear = xu.sundayOfYear;
            var Mu = { "-": "", _: " ", 0: "0" },
                _u = /^\s*\d+/,
                wu = /^%/;
            pa.locale = function(t) { return { numberFormat: Ft(t), timeFormat: Gt(t) } };
            var Nu = pa.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
            pa.format = Nu.numberFormat, pa.geo = {}, gn.prototype = { s: 0, t: 0, add: function(t) { vn(t, this.t, Su), vn(Su.s, this.s, this), this.s ? this.t += Su.t : this.s = Su.t }, reset: function() { this.s = this.t = 0 }, valueOf: function() { return this.s } };
            var Su = new gn;
            pa.geo.stream = function(t, n) { t && Eu.hasOwnProperty(t.type) ? Eu[t.type](t, n) : yn(t, n) };
            var Eu = { Feature: function(t, n) { yn(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;) yn(e[r].geometry, n) } },
                Au = { Sphere: function(t, n) { n.sphere() }, Point: function(t, n) { t = t.coordinates, n.point(t[0], t[1], t[2]) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2]) }, LineString: function(t, n) { mn(t.coordinates, n, 0) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) mn(e[r], n, 0) }, Polygon: function(t, n) { xn(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) xn(e[r], n) }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;) yn(e[r], n) } };
            pa.geo.area = function(t) { return Lu = 0, pa.geo.stream(t, Cu), Lu };
            var Lu, Tu = new gn,
                Cu = { sphere: function() { Lu += 4 * Ba }, point: S, lineStart: S, lineEnd: S, polygonStart: function() { Tu.reset(), Cu.lineStart = bn }, polygonEnd: function() { var t = 2 * Tu;
                        Lu += t < 0 ? 4 * Ba + t : t, Cu.lineStart = Cu.lineEnd = Cu.point = S } };
            pa.geo.bounds = function() {
                function t(t, n) { x.push(b = [c = t, h = t]), n < f && (f = n), n > p && (p = n) }

                function n(n, e) { var r = kn([n * Ja, e * Ja]); if (y) { var i = _n(y, r),
                            o = [i[1], -i[0], 0],
                            a = _n(o, i);
                        Sn(a), a = En(a); var s = n - d,
                            l = s > 0 ? 1 : -1,
                            g = a[0] * Za * l,
                            v = Na(s) > 180; if (v ^ (l * d < g && g < l * n)) { var m = a[1] * Za;
                            m > p && (p = m) } else if (g = (g + 360) % 360 - 180, v ^ (l * d < g && g < l * n)) { var m = -a[1] * Za;
                            m < f && (f = m) } else e < f && (f = e), e > p && (p = e);
                        v ? n < d ? u(c, n) > u(c, h) && (h = n) : u(n, h) > u(c, h) && (c = n) : h >= c ? (n < c && (c = n), n > h && (h = n)) : n > d ? u(c, n) > u(c, h) && (h = n) : u(n, h) > u(c, h) && (c = n) } else t(n, e);
                    y = r, d = n }

                function e() { k.point = n }

                function r() { b[0] = c, b[1] = h, k.point = t, y = null }

                function i(t, e) { if (y) { var r = t - d;
                        m += Na(r) > 180 ? r + (r > 0 ? 360 : -360) : r } else g = t, v = e;
                    Cu.point(t, e), n(t, e) }

                function o() { Cu.lineStart() }

                function a() { i(g, v), Cu.lineEnd(), Na(m) > Fa && (c = -(h = 180)), b[0] = c, b[1] = h, y = null }

                function u(t, n) { return (n -= t) < 0 ? n + 360 : n }

                function s(t, n) { return t[0] - n[0] }

                function l(t, n) { return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t } var c, f, h, p, d, g, v, y, m, x, b, k = { point: t, lineStart: e, lineEnd: r, polygonStart: function() { k.point = i, k.lineStart = o, k.lineEnd = a, m = 0, Cu.polygonStart() }, polygonEnd: function() { Cu.polygonEnd(), k.point = t, k.lineStart = e, k.lineEnd = r, Tu < 0 ? (c = -(h = 180), f = -(p = 90)) : m > Fa ? p = 90 : m < -Fa && (f = -90), b[0] = c, b[1] = h } }; return function(t) { p = h = -(c = f = 1 / 0), x = [], pa.geo.stream(t, k); var n = x.length; if (n) { x.sort(s); for (var e, r = 1, i = x[0], o = [i]; r < n; ++r) e = x[r], l(e[0], i) || l(e[1], i) ? (u(i[0], e[1]) > u(i[0], i[1]) && (i[1] = e[1]), u(e[0], i[1]) > u(i[0], i[1]) && (i[0] = e[0])) : o.push(i = e); for (var a, e, d = -(1 / 0), n = o.length - 1, r = 0, i = o[n]; r <= n; i = e, ++r) e = o[r], (a = u(i[1], e[0])) > d && (d = a, c = e[0], h = i[1]) } return x = b = null, c === 1 / 0 || f === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [c, f],
                        [h, p]
                    ] } }(), pa.geo.centroid = function(t) { Pu = Ru = zu = qu = Iu = Ou = Uu = Yu = Du = Xu = Fu = 0, pa.geo.stream(t, ju); var n = Du,
                    e = Xu,
                    r = Fu,
                    i = n * n + e * e + r * r; return i < ja && (n = Ou, e = Uu, r = Yu, Ru < Fa && (n = zu, e = qu, r = Iu), i = n * n + e * e + r * r, i < ja) ? [NaN, NaN] : [Math.atan2(e, n) * Za, at(r / Math.sqrt(i)) * Za] };
            var Pu, Ru, zu, qu, Iu, Ou, Uu, Yu, Du, Xu, Fu, ju = { sphere: S, point: Ln, lineStart: Cn, lineEnd: Pn, polygonStart: function() { ju.lineStart = Rn }, polygonEnd: function() { ju.lineStart = Cn } },
                Bu = Yn(qn, jn, Hn, [-Ba, -Ba / 2]),
                Hu = 1e9;
            pa.geo.clipExtent = function() { var t, n, e, r, i, o, a = { stream: function(t) { return i && (i.valid = !1), i = o(t), i.valid = !0, i }, extent: function(u) { return arguments.length ? (o = Zn(t = +u[0][0], n = +u[0][1], e = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), a) : [
                            [t, n],
                            [e, r]
                        ] } }; return a.extent([
                    [0, 0],
                    [960, 500]
                ]) }, (pa.geo.conicEqualArea = function() { return Wn($n) }).raw = $n, pa.geo.albers = function() { return pa.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070) }, pa.geo.albersUsa = function() {
                function t(t) { var o = t[0],
                        a = t[1]; return n = null, e(o, a), n || (r(o, a), n) || i(o, a), n } var n, e, r, i, o = pa.geo.albers(),
                    a = pa.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    u = pa.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    s = { point: function(t, e) { n = [t, e] } }; return t.invert = function(t) { var n = o.scale(),
                        e = o.translate(),
                        r = (t[0] - e[0]) / n,
                        i = (t[1] - e[1]) / n; return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? u : o).invert(t) }, t.stream = function(t) { var n = o.stream(t),
                        e = a.stream(t),
                        r = u.stream(t); return { point: function(t, i) { n.point(t, i), e.point(t, i), r.point(t, i) }, sphere: function() { n.sphere(), e.sphere(), r.sphere() }, lineStart: function() { n.lineStart(), e.lineStart(), r.lineStart() }, lineEnd: function() { n.lineEnd(), e.lineEnd(), r.lineEnd() }, polygonStart: function() { n.polygonStart(), e.polygonStart(), r.polygonStart() }, polygonEnd: function() { n.polygonEnd(), e.polygonEnd(), r.polygonEnd() } } }, t.precision = function(n) { return arguments.length ? (o.precision(n), a.precision(n), u.precision(n), t) : o.precision() }, t.scale = function(n) { return arguments.length ? (o.scale(n), a.scale(.35 * n), u.scale(n), t.translate(o.translate())) : o.scale() }, t.translate = function(n) { if (!arguments.length) return o.translate(); var l = o.scale(),
                        c = +n[0],
                        f = +n[1]; return e = o.translate(n).clipExtent([
                        [c - .455 * l, f - .238 * l],
                        [c + .455 * l, f + .238 * l]
                    ]).stream(s).point, r = a.translate([c - .307 * l, f + .201 * l]).clipExtent([
                        [c - .425 * l + Fa, f + .12 * l + Fa],
                        [c - .214 * l - Fa, f + .234 * l - Fa]
                    ]).stream(s).point, i = u.translate([c - .205 * l, f + .212 * l]).clipExtent([
                        [c - .214 * l + Fa, f + .166 * l + Fa],
                        [c - .115 * l - Fa, f + .234 * l - Fa]
                    ]).stream(s).point, t }, t.scale(1070) };
            var Vu, Gu, Ju, Zu, Wu, $u, Ku = { point: S, lineStart: S, lineEnd: S, polygonStart: function() { Gu = 0, Ku.lineStart = Kn }, polygonEnd: function() { Ku.lineStart = Ku.lineEnd = Ku.point = S, Vu += Na(Gu / 2) } },
                Qu = { point: Qn, lineStart: S, lineEnd: S, polygonStart: S, polygonEnd: S },
                ts = { point: ee, lineStart: re, lineEnd: ie, polygonStart: function() { ts.lineStart = oe }, polygonEnd: function() { ts.point = ee, ts.lineStart = re, ts.lineEnd = ie } };
            pa.geo.path = function() {
                function t(t) { return t && ("function" == typeof u && o.pointRadius(+u.apply(this, arguments)), a && a.valid || (a = i(o)), pa.geo.stream(t, a)), o.result() }

                function n() { return a = null, t } var e, r, i, o, a, u = 4.5; return t.area = function(t) { return Vu = 0, pa.geo.stream(t, i(Ku)), Vu }, t.centroid = function(t) { return zu = qu = Iu = Ou = Uu = Yu = Du = Xu = Fu = 0, pa.geo.stream(t, i(ts)), Fu ? [Du / Fu, Xu / Fu] : Yu ? [Ou / Yu, Uu / Yu] : Iu ? [zu / Iu, qu / Iu] : [NaN, NaN] }, t.bounds = function(t) { return Wu = $u = -(Ju = Zu = 1 / 0), pa.geo.stream(t, i(Qu)), [
                        [Ju, Zu],
                        [Wu, $u]
                    ] }, t.projection = function(t) { return arguments.length ? (i = (e = t) ? t.stream || se(t) : _, n()) : e }, t.context = function(t) { return arguments.length ? (o = null == (r = t) ? new te : new ae(t), "function" != typeof u && o.pointRadius(u), n()) : r }, t.pointRadius = function(n) { return arguments.length ? (u = "function" == typeof n ? n : (o.pointRadius(+n), +n), t) : u }, t.projection(pa.geo.albersUsa()).context(null) }, pa.geo.transform = function(t) { return { stream: function(n) { var e = new le(n); for (var r in t) e[r] = t[r]; return e } } }, le.prototype = { point: function(t, n) { this.stream.point(t, n) }, sphere: function() { this.stream.sphere() }, lineStart: function() { this.stream.lineStart() }, lineEnd: function() { this.stream.lineEnd() }, polygonStart: function() { this.stream.polygonStart() }, polygonEnd: function() { this.stream.polygonEnd() } }, pa.geo.projection = fe, pa.geo.projectionMutator = he, (pa.geo.equirectangular = function() { return fe(de) }).raw = de.invert = de, pa.geo.rotation = function(t) {
                function n(n) { return n = t(n[0] * Ja, n[1] * Ja), n[0] *= Za, n[1] *= Za, n } return t = ve(t[0] % 360 * Ja, t[1] * Ja, t.length > 2 ? t[2] * Ja : 0), n.invert = function(n) { return n = t.invert(n[0] * Ja, n[1] * Ja), n[0] *= Za, n[1] *= Za, n }, n }, ge.invert = de, pa.geo.circle = function() {
                function t() { var t = "function" == typeof r ? r.apply(this, arguments) : r,
                        n = ve(-t[0] * Ja, -t[1] * Ja, 0).invert,
                        i = []; return e(null, null, 1, { point: function(t, e) { i.push(t = n(t, e)), t[0] *= Za, t[1] *= Za } }), { type: "Polygon", coordinates: [i] } } var n, e, r = [0, 0],
                    i = 6; return t.origin = function(n) { return arguments.length ? (r = n, t) : r }, t.angle = function(r) { return arguments.length ? (e = be((n = +r) * Ja, i * Ja), t) : n }, t.precision = function(r) { return arguments.length ? (e = be(n * Ja, (i = +r) * Ja), t) : i }, t.angle(90) }, pa.geo.distance = function(t, n) { var e, r = (n[0] - t[0]) * Ja,
                    i = t[1] * Ja,
                    o = n[1] * Ja,
                    a = Math.sin(r),
                    u = Math.cos(r),
                    s = Math.sin(i),
                    l = Math.cos(i),
                    c = Math.sin(o),
                    f = Math.cos(o); return Math.atan2(Math.sqrt((e = f * a) * e + (e = l * c - s * f * u) * e), s * c + l * f * u) }, pa.geo.graticule = function() {
                function t() { return { type: "MultiLineString", coordinates: n() } }

                function n() { return pa.range(Math.ceil(o / v) * v, i, v).map(h).concat(pa.range(Math.ceil(l / y) * y, s, y).map(p)).concat(pa.range(Math.ceil(r / d) * d, e, d).filter(function(t) { return Na(t % v) > Fa }).map(c)).concat(pa.range(Math.ceil(u / g) * g, a, g).filter(function(t) { return Na(t % y) > Fa }).map(f)) } var e, r, i, o, a, u, s, l, c, f, h, p, d = 10,
                    g = d,
                    v = 90,
                    y = 360,
                    m = 2.5; return t.lines = function() { return n().map(function(t) { return { type: "LineString", coordinates: t } }) }, t.outline = function() { return { type: "Polygon", coordinates: [h(o).concat(p(s).slice(1), h(i).reverse().slice(1), p(l).reverse().slice(1))] } }, t.extent = function(n) { return arguments.length ? t.majorExtent(n).minorExtent(n) : t.minorExtent() }, t.majorExtent = function(n) { return arguments.length ? (o = +n[0][0], i = +n[1][0], l = +n[0][1], s = +n[1][1], o > i && (n = o, o = i, i = n), l > s && (n = l, l = s, s = n), t.precision(m)) : [
                        [o, l],
                        [i, s]
                    ] }, t.minorExtent = function(n) { return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), u > a && (n = u, u = a, a = n), t.precision(m)) : [
                        [r, u],
                        [e, a]
                    ] }, t.step = function(n) { return arguments.length ? t.majorStep(n).minorStep(n) : t.minorStep() }, t.majorStep = function(n) { return arguments.length ? (v = +n[0], y = +n[1], t) : [v, y] }, t.minorStep = function(n) { return arguments.length ? (d = +n[0], g = +n[1], t) : [d, g] }, t.precision = function(n) { return arguments.length ? (m = +n, c = Me(u, a, 90), f = _e(r, e, m), h = Me(l, s, 90), p = _e(o, i, m), t) : m }, t.majorExtent([
                    [-180, -90 + Fa],
                    [180, 90 - Fa]
                ]).minorExtent([
                    [-180, -80 - Fa],
                    [180, 80 + Fa]
                ]) }, pa.geo.greatArc = function() {
                function t() { return { type: "LineString", coordinates: [n || r.apply(this, arguments), e || i.apply(this, arguments)] } } var n, e, r = we,
                    i = Ne; return t.distance = function() { return pa.geo.distance(n || r.apply(this, arguments), e || i.apply(this, arguments)) }, t.source = function(e) { return arguments.length ? (r = e, n = "function" == typeof e ? null : e, t) : r }, t.target = function(n) { return arguments.length ? (i = n, e = "function" == typeof n ? null : n, t) : i }, t.precision = function() { return arguments.length ? t : 0 }, t }, pa.geo.interpolate = function(t, n) { return Se(t[0] * Ja, t[1] * Ja, n[0] * Ja, n[1] * Ja) }, pa.geo.length = function(t) { return ns = 0, pa.geo.stream(t, es), ns };
            var ns, es = { sphere: S, point: S, lineStart: Ee, lineEnd: S, polygonStart: S, polygonEnd: S },
                rs = Ae(function(t) { return Math.sqrt(2 / (1 + t)) }, function(t) { return 2 * Math.asin(t / 2) });
            (pa.geo.azimuthalEqualArea = function() { return fe(rs) }).raw = rs;
            var is = Ae(function(t) { var n = Math.acos(t); return n && n / Math.sin(n) }, _);
            (pa.geo.azimuthalEquidistant = function() { return fe(is) }).raw = is, (pa.geo.conicConformal = function() { return Wn(Le) }).raw = Le, (pa.geo.conicEquidistant = function() { return Wn(Te) }).raw = Te;
            var os = Ae(function(t) { return 1 / t }, Math.atan);
            (pa.geo.gnomonic = function() { return fe(os) }).raw = os, Ce.invert = function(t, n) { return [t, 2 * Math.atan(Math.exp(n)) - Ga] }, (pa.geo.mercator = function() { return Pe(Ce) }).raw = Ce;
            var as = Ae(function() { return 1 }, Math.asin);
            (pa.geo.orthographic = function() { return fe(as) }).raw = as;
            var us = Ae(function(t) { return 1 / (1 + t) }, function(t) { return 2 * Math.atan(t) });
            (pa.geo.stereographic = function() { return fe(us) }).raw = us, Re.invert = function(t, n) { return [-n, 2 * Math.atan(Math.exp(t)) - Ga] }, (pa.geo.transverseMercator = function() { var t = Pe(Re),
                    n = t.center,
                    e = t.rotate; return t.center = function(t) { return t ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]]) }, t.rotate = function(t) { return t ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90]) }, e([0, 0, 90]) }).raw = Re, pa.geom = {}, pa.geom.hull = function(t) {
                function n(t) { if (t.length < 3) return []; var n, i = Ct(e),
                        o = Ct(r),
                        a = t.length,
                        u = [],
                        s = []; for (n = 0; n < a; n++) u.push([+i.call(this, t[n], n), +o.call(this, t[n], n), n]); for (u.sort(Oe), n = 0; n < a; n++) s.push([u[n][0], -u[n][1]]); var l = Ie(u),
                        c = Ie(s),
                        f = c[0] === l[0],
                        h = c[c.length - 1] === l[l.length - 1],
                        p = []; for (n = l.length - 1; n >= 0; --n) p.push(t[u[l[n]][2]]); for (n = +f; n < c.length - h; ++n) p.push(t[u[c[n]][2]]); return p } var e = ze,
                    r = qe; return arguments.length ? n(t) : (n.x = function(t) { return arguments.length ? (e = t, n) : e }, n.y = function(t) { return arguments.length ? (r = t, n) : r }, n) }, pa.geom.polygon = function(t) { return Ta(t, ss), t };
            var ss = pa.geom.polygon.prototype = [];
            ss.area = function() { for (var t, n = -1, e = this.length, r = this[e - 1], i = 0; ++n < e;) t = r, r = this[n], i += t[1] * r[0] - t[0] * r[1]; return .5 * i }, ss.centroid = function(t) { var n, e, r = -1,
                    i = this.length,
                    o = 0,
                    a = 0,
                    u = this[i - 1]; for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) n = u, u = this[r], e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e; return [o * t, a * t] }, ss.clip = function(t) { for (var n, e, r, i, o, a, u = De(t), s = -1, l = this.length - De(this), c = this[l - 1]; ++s < l;) { for (n = t.slice(), t.length = 0, i = this[s], o = n[(r = n.length - u) - 1], e = -1; ++e < r;) a = n[e], Ue(a, c, i) ? (Ue(o, c, i) || t.push(Ye(o, a, c, i)), t.push(a)) : Ue(o, c, i) && t.push(Ye(o, a, c, i)), o = a;
                    u && t.push(t[0]), c = i } return t };
            var ls, cs, fs, hs, ps, ds = [],
                gs = [];
            Je.prototype.prepare = function() { for (var t, n = this.edges, e = n.length; e--;) t = n[e].edge, t.b && t.a || n.splice(e, 1); return n.sort(We), n.length }, ar.prototype = { start: function() { return this.edge.l === this.site ? this.edge.a : this.edge.b }, end: function() { return this.edge.l === this.site ? this.edge.b : this.edge.a } }, ur.prototype = { insert: function(t, n) { var e, r, i; if (t) { if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) { for (t = t.R; t.L;) t = t.L;
                            t.L = n } else t.R = n;
                        e = t } else this._ ? (t = fr(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null); for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (lr(this, e), t = e, e = t.U), e.C = !1, r.C = !0, cr(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (cr(this, e), t = e, e = t.U), e.C = !1, r.C = !0, lr(this, r))), e = t.U;
                    this._.C = !1 }, remove: function(t) { t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null; var n, e, r, i = t.U,
                        o = t.L,
                        a = t.R; if (e = o ? a ? fr(a) : o : a, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && a ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== a ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = a, a.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) { if (t && t.C) return void(t.C = !1);
                        do { if (t === this._) break; if (t === i.L) { if (n = i.R, n.C && (n.C = !1, i.C = !0, lr(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) { n.R && n.R.C || (n.L.C = !1, n.C = !0, cr(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, lr(this, i), t = this._; break } } else if (n = i.L, n.C && (n.C = !1, i.C = !0, cr(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) { n.L && n.L.C || (n.R.C = !1, n.C = !0, lr(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, cr(this, i), t = this._; break }
                            n.C = !0, t = i, i = i.U } while (!t.C);
                        t && (t.C = !1) } } }, pa.geom.voronoi = function(t) {
                function n(t) { var n = new Array(t.length),
                        r = u[0][0],
                        i = u[0][1],
                        o = u[1][0],
                        a = u[1][1]; return hr(e(t), u).cells.forEach(function(e, u) { var s = e.edges,
                            l = e.site,
                            c = n[u] = s.length ? s.map(function(t) { var n = t.start(); return [n.x, n.y] }) : l.x >= r && l.x <= o && l.y >= i && l.y <= a ? [
                                [r, a],
                                [o, a],
                                [o, i],
                                [r, i]
                            ] : [];
                        c.point = t[u] }), n }

                function e(t) { return t.map(function(t, n) { return { x: Math.round(o(t, n) / Fa) * Fa, y: Math.round(a(t, n) / Fa) * Fa, i: n } }) } var r = ze,
                    i = qe,
                    o = r,
                    a = i,
                    u = vs; return t ? n(t) : (n.links = function(t) { return hr(e(t)).edges.filter(function(t) { return t.l && t.r }).map(function(n) { return { source: t[n.l.i], target: t[n.r.i] } }) }, n.triangles = function(t) { var n = []; return hr(e(t)).cells.forEach(function(e, r) { for (var i, o, a = e.site, u = e.edges.sort(We), s = -1, l = u.length, c = u[l - 1].edge, f = c.l === a ? c.r : c.l; ++s < l;) i = c, o = f, c = u[s].edge, f = c.l === a ? c.r : c.l, r < o.i && r < f.i && dr(a, o, f) < 0 && n.push([t[r], t[o.i], t[f.i]]) }), n }, n.x = function(t) { return arguments.length ? (o = Ct(r = t), n) : r }, n.y = function(t) { return arguments.length ? (a = Ct(i = t), n) : i }, n.clipExtent = function(t) { return arguments.length ? (u = null == t ? vs : t, n) : u === vs ? null : u }, n.size = function(t) { return arguments.length ? n.clipExtent(t && [
                        [0, 0], t
                    ]) : u === vs ? null : u && u[1] }, n) };
            var vs = [
                [-1e6, -1e6],
                [1e6, 1e6]
            ];
            pa.geom.delaunay = function(t) { return pa.geom.voronoi().triangles(t) }, pa.geom.quadtree = function(t, n, e, r, i) {
                function o(t) {
                    function o(t, n, e, r, i, o, a, u) { if (!isNaN(e) && !isNaN(r))
                            if (t.leaf) { var s = t.x,
                                    c = t.y; if (null != s)
                                    if (Na(s - e) + Na(c - r) < .01) l(t, n, e, r, i, o, a, u);
                                    else { var f = t.point;
                                        t.x = t.y = t.point = null, l(t, f, s, c, i, o, a, u), l(t, n, e, r, i, o, a, u) }
                                else t.x = e, t.y = r, t.point = n } else l(t, n, e, r, i, o, a, u) }

                    function l(t, n, e, r, i, a, u, s) { var l = .5 * (i + u),
                            c = .5 * (a + s),
                            f = e >= l,
                            h = r >= c,
                            p = h << 1 | f;
                        t.leaf = !1, t = t.nodes[p] || (t.nodes[p] = yr()), f ? i = l : u = l, h ? a = c : s = c, o(t, n, e, r, i, a, u, s) } var c, f, h, p, d, g, v, y, m, x = Ct(u),
                        b = Ct(s); if (null != n) g = n, v = e, y = r, m = i;
                    else if (y = m = -(g = v = 1 / 0), f = [], h = [], d = t.length, a)
                        for (p = 0; p < d; ++p) c = t[p], c.x < g && (g = c.x), c.y < v && (v = c.y), c.x > y && (y = c.x), c.y > m && (m = c.y), f.push(c.x), h.push(c.y);
                    else
                        for (p = 0; p < d; ++p) { var k = +x(c = t[p], p),
                                M = +b(c, p);
                            k < g && (g = k), M < v && (v = M), k > y && (y = k), M > m && (m = M), f.push(k), h.push(M) }
                    var _ = y - g,
                        w = m - v;
                    _ > w ? m = v + _ : y = g + w; var N = yr(); if (N.add = function(t) { o(N, t, +x(t, ++p), +b(t, p), g, v, y, m) }, N.visit = function(t) { mr(t, N, g, v, y, m) }, N.find = function(t) { return xr(N, t[0], t[1], g, v, y, m) }, p = -1, null == n) { for (; ++p < d;) o(N, t[p], f[p], h[p], g, v, y, m);--p } else t.forEach(N.add); return f = h = t = c = null, N } var a, u = ze,
                    s = qe; return (a = arguments.length) ? (u = gr, s = vr, 3 === a && (i = e, r = n, e = n = 0), o(t)) : (o.x = function(t) { return arguments.length ? (u = t, o) : u }, o.y = function(t) { return arguments.length ? (s = t, o) : s }, o.extent = function(t) { return arguments.length ? (null == t ? n = e = r = i = null : (n = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == n ? null : [
                        [n, e],
                        [r, i]
                    ] }, o.size = function(t) { return arguments.length ? (null == t ? n = e = r = i = null : (n = e = 0, r = +t[0], i = +t[1]), o) : null == n ? null : [r - n, i - e] }, o) }, pa.interpolateRgb = br, pa.interpolateObject = kr, pa.interpolateNumber = Mr, pa.interpolateString = _r;
            var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                ms = new RegExp(ys.source, "g");
            pa.interpolate = wr, pa.interpolators = [function(t, n) { var e = typeof n; return ("string" === e ? cu.has(n.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(n) ? br : _r : n instanceof ft ? br : Array.isArray(n) ? Nr : "object" === e && isNaN(n) ? kr : Mr)(t, n) }], pa.interpolateArray = Nr;
            var xs = function() { return _ },
                bs = pa.map({ linear: xs, poly: Pr, quad: function() { return Lr }, cubic: function() { return Tr }, sin: function() { return Rr }, exp: function() { return zr }, circle: function() { return qr }, elastic: Ir, back: Or, bounce: function() { return Ur } }),
                ks = pa.map({ "in": _, out: Er, "in-out": Ar, "out-in": function(t) { return Ar(Er(t)) } });
            pa.ease = function(t) { var n = t.indexOf("-"),
                    e = n >= 0 ? t.slice(0, n) : t,
                    r = n >= 0 ? t.slice(n + 1) : "in"; return e = bs.get(e) || xs, r = ks.get(r) || _, Sr(r(e.apply(null, da.call(arguments, 1)))) }, pa.interpolateHcl = Yr, pa.interpolateHsl = Dr, pa.interpolateLab = Xr, pa.interpolateRound = Fr, pa.transform = function(t) { var n = va.createElementNS(pa.ns.prefix.svg, "g"); return (pa.transform = function(t) { if (null != t) { n.setAttribute("transform", t); var e = n.transform.baseVal.consolidate() } return new jr(e ? e.matrix : Ms) })(t) }, jr.prototype.toString = function() { return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")" };
            var Ms = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
            pa.interpolateTransform = Kr, pa.layout = {}, pa.layout.bundle = function() { return function(t) { for (var n = [], e = -1, r = t.length; ++e < r;) n.push(ni(t[e])); return n } }, pa.layout.chord = function() {
                function t() { var t, l, f, h, p, d = {},
                        g = [],
                        v = pa.range(o),
                        y = []; for (e = [], r = [], t = 0, h = -1; ++h < o;) { for (l = 0, p = -1; ++p < o;) l += i[h][p];
                        g.push(l), y.push(pa.range(o)), t += l } for (a && v.sort(function(t, n) { return a(g[t], g[n]) }), u && y.forEach(function(t, n) { t.sort(function(t, e) { return u(i[n][t], i[n][e]) }) }), t = (Ha - c * o) / t, l = 0, h = -1; ++h < o;) { for (f = l, p = -1; ++p < o;) { var m = v[h],
                                x = y[m][p],
                                b = i[m][x],
                                k = l,
                                M = l += b * t;
                            d[m + "-" + x] = { index: m, subindex: x, startAngle: k, endAngle: M, value: b } }
                        r[m] = { index: m, startAngle: f, endAngle: l, value: g[m] }, l += c } for (h = -1; ++h < o;)
                        for (p = h - 1; ++p < o;) { var _ = d[h + "-" + p],
                                w = d[p + "-" + h];
                            (_.value || w.value) && e.push(_.value < w.value ? { source: w, target: _ } : { source: _, target: w }) }
                    s && n() }

                function n() { e.sort(function(t, n) { return s((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2) }) }
                var e, r, i, o, a, u, s, l = {},
                    c = 0;
                return l.matrix = function(t) { return arguments.length ? (o = (i = t) && i.length, e = r = null, l) : i }, l.padding = function(t) { return arguments.length ? (c = t, e = r = null, l) : c }, l.sortGroups = function(t) { return arguments.length ? (a = t, e = r = null, l) : a }, l.sortSubgroups = function(t) {
                    return arguments.length ? (u = t, e = null, l) : u
                }, l.sortChords = function(t) { return arguments.length ? (s = t, e && n(), l) : s }, l.chords = function() { return e || t(), e }, l.groups = function() { return r || t(), r }, l
            }, pa.layout.force = function() {
                function t(t) { return function(n, e, r, i) { if (n.point !== t) { var o = n.cx - t.x,
                                a = n.cy - t.y,
                                u = i - e,
                                s = o * o + a * a; if (u * u / y < s) { if (s < g) { var l = n.charge / s;
                                    t.px -= o * l, t.py -= a * l } return !0 } if (n.point && s && s < g) { var l = n.pointCharge / s;
                                t.px -= o * l, t.py -= a * l } } return !n.charge } }

                function n(t) { t.px = pa.event.x, t.py = pa.event.y, s.resume() } var e, r, i, o, a, u, s = {},
                    l = pa.dispatch("start", "tick", "end"),
                    c = [1, 1],
                    f = .9,
                    h = _s,
                    p = ws,
                    d = -30,
                    g = Ns,
                    v = .1,
                    y = .64,
                    m = [],
                    x = []; return s.tick = function() { if ((i *= .99) < .005) return e = null, l.end({ type: "end", alpha: i = 0 }), !0; var n, r, s, h, p, g, y, b, k, M = m.length,
                        _ = x.length; for (r = 0; r < _; ++r) s = x[r], h = s.source, p = s.target, b = p.x - h.x, k = p.y - h.y, (g = b * b + k * k) && (g = i * a[r] * ((g = Math.sqrt(g)) - o[r]) / g, b *= g, k *= g, p.x -= b * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= k * y, h.x += b * (y = 1 - y), h.y += k * y); if ((y = i * v) && (b = c[0] / 2, k = c[1] / 2, r = -1, y))
                        for (; ++r < M;) s = m[r], s.x += (b - s.x) * y, s.y += (k - s.y) * y; if (d)
                        for (si(n = pa.geom.quadtree(m), i, u), r = -1; ++r < M;)(s = m[r]).fixed || n.visit(t(s)); for (r = -1; ++r < M;) s = m[r], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * f, s.y -= (s.py - (s.py = s.y)) * f);
                    l.tick({ type: "tick", alpha: i }) }, s.nodes = function(t) { return arguments.length ? (m = t, s) : m }, s.links = function(t) { return arguments.length ? (x = t, s) : x }, s.size = function(t) { return arguments.length ? (c = t, s) : c }, s.linkDistance = function(t) { return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h }, s.distance = s.linkDistance, s.linkStrength = function(t) { return arguments.length ? (p = "function" == typeof t ? t : +t, s) : p }, s.friction = function(t) { return arguments.length ? (f = +t, s) : f }, s.charge = function(t) { return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d }, s.chargeDistance = function(t) { return arguments.length ? (g = t * t, s) : Math.sqrt(g) }, s.gravity = function(t) { return arguments.length ? (v = +t, s) : v }, s.theta = function(t) { return arguments.length ? (y = t * t, s) : Math.sqrt(y) }, s.alpha = function(t) { return arguments.length ? (t = +t, i ? t > 0 ? i = t : (e.c = null, e.t = NaN, e = null, l.end({ type: "end", alpha: i = 0 })) : t > 0 && (l.start({ type: "start", alpha: i = t }), e = It(s.tick)), s) : i }, s.start = function() {
                    function t(t, r) { if (!e) { for (e = new Array(i), s = 0; s < i; ++s) e[s] = []; for (s = 0; s < l; ++s) { var o = x[s];
                                e[o.source.index].push(o.target), e[o.target.index].push(o.source) } } for (var a, u = e[n], s = -1, c = u.length; ++s < c;)
                            if (!isNaN(a = u[s][t])) return a;
                        return Math.random() * r } var n, e, r, i = m.length,
                        l = x.length,
                        f = c[0],
                        g = c[1]; for (n = 0; n < i; ++n)(r = m[n]).index = n, r.weight = 0; for (n = 0; n < l; ++n) r = x[n], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight; for (n = 0; n < i; ++n) r = m[n], isNaN(r.x) && (r.x = t("x", f)), isNaN(r.y) && (r.y = t("y", g)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y); if (o = [], "function" == typeof h)
                        for (n = 0; n < l; ++n) o[n] = +h.call(this, x[n], n);
                    else
                        for (n = 0; n < l; ++n) o[n] = h; if (a = [], "function" == typeof p)
                        for (n = 0; n < l; ++n) a[n] = +p.call(this, x[n], n);
                    else
                        for (n = 0; n < l; ++n) a[n] = p; if (u = [], "function" == typeof d)
                        for (n = 0; n < i; ++n) u[n] = +d.call(this, m[n], n);
                    else
                        for (n = 0; n < i; ++n) u[n] = d; return s.resume() }, s.resume = function() { return s.alpha(.1) }, s.stop = function() { return s.alpha(0) }, s.drag = function() { return r || (r = pa.behavior.drag().origin(_).on("dragstart.force", ii).on("drag.force", n).on("dragend.force", oi)), arguments.length ? void this.on("mouseover.force", ai).on("mouseout.force", ui).call(r) : r }, pa.rebind(s, l, "on") };
            var _s = 20,
                ws = 1,
                Ns = 1 / 0;
            pa.layout.hierarchy = function() {
                function t(i) { var o, a = [i],
                        u = []; for (i.depth = 0; null != (o = a.pop());)
                        if (u.push(o), (l = e.call(t, o, o.depth)) && (s = l.length)) { for (var s, l, c; --s >= 0;) a.push(c = l[s]), c.parent = o, c.depth = o.depth + 1;
                            r && (o.value = 0), o.children = l } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
                    return fi(i, function(t) { var e, i;
                        n && (e = t.children) && e.sort(n), r && (i = t.parent) && (i.value += t.value) }), u } var n = di,
                    e = hi,
                    r = pi; return t.sort = function(e) { return arguments.length ? (n = e, t) : n }, t.children = function(n) { return arguments.length ? (e = n, t) : e }, t.value = function(n) { return arguments.length ? (r = n, t) : r }, t.revalue = function(n) { return r && (ci(n, function(t) { t.children && (t.value = 0) }), fi(n, function(n) { var e;
                        n.children || (n.value = +r.call(t, n, n.depth) || 0), (e = n.parent) && (e.value += n.value) })), n }, t }, pa.layout.partition = function() {
                function t(n, e, r, i) { var o = n.children; if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, o && (a = o.length)) { var a, u, s, l = -1; for (r = n.value ? r / n.value : 0; ++l < a;) t(u = o[l], e, s = u.value * r, i), e += s } }

                function n(t) { var e = t.children,
                        r = 0; if (e && (i = e.length))
                        for (var i, o = -1; ++o < i;) r = Math.max(r, n(e[o])); return 1 + r }

                function e(e, o) { var a = r.call(this, e, o); return t(a[0], 0, i[0], i[1] / n(a[0])), a } var r = pa.layout.hierarchy(),
                    i = [1, 1]; return e.size = function(t) { return arguments.length ? (i = t, e) : i }, li(e, r) }, pa.layout.pie = function() {
                function t(a) { var u, s = a.length,
                        l = a.map(function(e, r) { return +n.call(t, e, r) }),
                        c = +("function" == typeof r ? r.apply(this, arguments) : r),
                        f = ("function" == typeof i ? i.apply(this, arguments) : i) - c,
                        h = Math.min(Math.abs(f) / s, +("function" == typeof o ? o.apply(this, arguments) : o)),
                        p = h * (f < 0 ? -1 : 1),
                        d = pa.sum(l),
                        g = d ? (f - s * p) / d : 0,
                        v = pa.range(s),
                        y = []; return null != e && v.sort(e === Ss ? function(t, n) { return l[n] - l[t] } : function(t, n) { return e(a[t], a[n]) }), v.forEach(function(t) { y[t] = { data: a[t], value: u = l[t], startAngle: c, endAngle: c += u * g + p, padAngle: h } }), y } var n = Number,
                    e = Ss,
                    r = 0,
                    i = Ha,
                    o = 0; return t.value = function(e) { return arguments.length ? (n = e, t) : n }, t.sort = function(n) { return arguments.length ? (e = n, t) : e }, t.startAngle = function(n) { return arguments.length ? (r = n, t) : r }, t.endAngle = function(n) { return arguments.length ? (i = n, t) : i }, t.padAngle = function(n) { return arguments.length ? (o = n, t) : o }, t };
            var Ss = {};
            pa.layout.stack = function() {
                function t(u, s) { if (!(h = u.length)) return u; var l = u.map(function(e, r) { return n.call(t, e, r) }),
                        c = l.map(function(n) { return n.map(function(n, e) { return [o.call(t, n, e), a.call(t, n, e)] }) }),
                        f = e.call(t, c, s);
                    l = pa.permute(l, f), c = pa.permute(c, f); var h, p, d, g, v = r.call(t, c, s),
                        y = l[0].length; for (d = 0; d < y; ++d)
                        for (i.call(t, l[0][d], g = v[d], c[0][d][1]), p = 1; p < h; ++p) i.call(t, l[p][d], g += c[p - 1][d][1], c[p][d][1]); return u } var n = _,
                    e = xi,
                    r = bi,
                    i = mi,
                    o = vi,
                    a = yi; return t.values = function(e) { return arguments.length ? (n = e, t) : n }, t.order = function(n) { return arguments.length ? (e = "function" == typeof n ? n : Es.get(n) || xi, t) : e }, t.offset = function(n) { return arguments.length ? (r = "function" == typeof n ? n : As.get(n) || bi, t) : r }, t.x = function(n) { return arguments.length ? (o = n, t) : o }, t.y = function(n) { return arguments.length ? (a = n, t) : a }, t.out = function(n) { return arguments.length ? (i = n, t) : i }, t };
            var Es = pa.map({ "inside-out": function(t) { var n, e, r = t.length,
                            i = t.map(ki),
                            o = t.map(Mi),
                            a = pa.range(r).sort(function(t, n) { return i[t] - i[n] }),
                            u = 0,
                            s = 0,
                            l = [],
                            c = []; for (n = 0; n < r; ++n) e = a[n], u < s ? (u += o[e], l.push(e)) : (s += o[e], c.push(e)); return c.reverse().concat(l) }, reverse: function(t) { return pa.range(t.length).reverse() }, "default": xi }),
                As = pa.map({ silhouette: function(t) { var n, e, r, i = t.length,
                            o = t[0].length,
                            a = [],
                            u = 0,
                            s = []; for (e = 0; e < o; ++e) { for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                            r > u && (u = r), a.push(r) } for (e = 0; e < o; ++e) s[e] = (u - a[e]) / 2; return s }, wiggle: function(t) { var n, e, r, i, o, a, u, s, l, c = t.length,
                            f = t[0],
                            h = f.length,
                            p = []; for (p[0] = s = l = 0, e = 1; e < h; ++e) { for (n = 0, i = 0; n < c; ++n) i += t[n][e][1]; for (n = 0, o = 0, u = f[e][0] - f[e - 1][0]; n < c; ++n) { for (r = 0, a = (t[n][e][1] - t[n][e - 1][1]) / (2 * u); r < n; ++r) a += (t[r][e][1] - t[r][e - 1][1]) / u;
                                o += a * t[n][e][1] }
                            p[e] = s -= i ? o / i * u : 0, s < l && (l = s) } for (e = 0; e < h; ++e) p[e] -= l; return p }, expand: function(t) { var n, e, r, i = t.length,
                            o = t[0].length,
                            a = 1 / i,
                            u = []; for (e = 0; e < o; ++e) { for (n = 0, r = 0; n < i; n++) r += t[n][e][1]; if (r)
                                for (n = 0; n < i; n++) t[n][e][1] /= r;
                            else
                                for (n = 0; n < i; n++) t[n][e][1] = a } for (e = 0; e < o; ++e) u[e] = 0; return u }, zero: bi });
            pa.layout.histogram = function() {
                function t(t, o) { for (var a, u, s = [], l = t.map(e, this), c = r.call(this, l, o), f = i.call(this, c, l, o), o = -1, h = l.length, p = f.length - 1, d = n ? 1 : 1 / h; ++o < p;) a = s[o] = [], a.dx = f[o + 1] - (a.x = f[o]), a.y = 0; if (p > 0)
                        for (o = -1; ++o < h;) u = l[o], u >= c[0] && u <= c[1] && (a = s[pa.bisect(f, u, 1, p) - 1], a.y += d, a.push(t[o])); return s } var n = !0,
                    e = Number,
                    r = Si,
                    i = wi; return t.value = function(n) { return arguments.length ? (e = n, t) : e }, t.range = function(n) { return arguments.length ? (r = Ct(n), t) : r }, t.bins = function(n) { return arguments.length ? (i = "number" == typeof n ? function(t) { return Ni(t, n) } : Ct(n), t) : i }, t.frequency = function(e) { return arguments.length ? (n = !!e, t) : n }, t }, pa.layout.pack = function() {
                function t(t, o) { var a = e.call(this, t, o),
                        u = a[0],
                        s = i[0],
                        l = i[1],
                        c = null == n ? Math.sqrt : "function" == typeof n ? n : function() { return n }; if (u.x = u.y = 0, fi(u, function(t) { t.r = +c(t.value) }), fi(u, Ci), r) { var f = r * (n ? 1 : Math.max(2 * u.r / s, 2 * u.r / l)) / 2;
                        fi(u, function(t) { t.r += f }), fi(u, Ci), fi(u, function(t) { t.r -= f }) } return zi(u, s / 2, l / 2, n ? 1 : 1 / Math.max(2 * u.r / s, 2 * u.r / l)), a } var n, e = pa.layout.hierarchy().sort(Ei),
                    r = 0,
                    i = [1, 1]; return t.size = function(n) { return arguments.length ? (i = n, t) : i }, t.radius = function(e) { return arguments.length ? (n = null == e || "function" == typeof e ? e : +e, t) : n }, t.padding = function(n) { return arguments.length ? (r = +n, t) : r }, li(t, e) }, pa.layout.tree = function() {
                function t(t, i) { var c = a.call(this, t, i),
                        f = c[0],
                        h = n(f); if (fi(h, e), h.parent.m = -h.z, ci(h, r), l) ci(f, o);
                    else { var p = f,
                            d = f,
                            g = f;
                        ci(f, function(t) { t.x < p.x && (p = t), t.x > d.x && (d = t), t.depth > g.depth && (g = t) }); var v = u(p, d) / 2 - p.x,
                            y = s[0] / (d.x + u(d, p) / 2 + v),
                            m = s[1] / (g.depth || 1);
                        ci(f, function(t) { t.x = (t.x + v) * y, t.y = t.depth * m }) } return c }

                function n(t) { for (var n, e = { A: null, children: [t] }, r = [e]; null != (n = r.pop());)
                        for (var i, o = n.children, a = 0, u = o.length; a < u; ++a) r.push((o[a] = i = { _: o[a], parent: n, children: (i = o[a].children) && i.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: a }).a = i); return e.children[0] }

                function e(t) { var n = t.children,
                        e = t.parent.children,
                        r = t.i ? e[t.i - 1] : null; if (n.length) { Di(t); var o = (n[0].z + n[n.length - 1].z) / 2;
                        r ? (t.z = r.z + u(t._, r._), t.m = t.z - o) : t.z = o } else r && (t.z = r.z + u(t._, r._));
                    t.parent.A = i(t, r, t.parent.A || e[0]) }

                function r(t) { t._.x = t.z + t.parent.m, t.m += t.parent.m }

                function i(t, n, e) { if (n) { for (var r, i = t, o = t, a = n, s = i.parent.children[0], l = i.m, c = o.m, f = a.m, h = s.m; a = Ui(a), i = Oi(i), a && i;) s = Oi(s), o = Ui(o), o.a = t, r = a.z + f - i.z - l + u(a._, i._), r > 0 && (Yi(Xi(a, t, e), t, r), l += r, c += r), f += a.m, l += i.m, h += s.m, c += o.m;
                        a && !Ui(o) && (o.t = a, o.m += f - c), i && !Oi(s) && (s.t = i, s.m += l - h, e = t) } return e }

                function o(t) { t.x *= s[0], t.y = t.depth * s[1] } var a = pa.layout.hierarchy().sort(null).value(null),
                    u = Ii,
                    s = [1, 1],
                    l = null; return t.separation = function(n) { return arguments.length ? (u = n, t) : u }, t.size = function(n) { return arguments.length ? (l = null == (s = n) ? o : null, t) : l ? null : s }, t.nodeSize = function(n) { return arguments.length ? (l = null == (s = n) ? null : o, t) : l ? s : null }, li(t, a) }, pa.layout.cluster = function() {
                function t(t, o) { var a, u = n.call(this, t, o),
                        s = u[0],
                        l = 0;
                    fi(s, function(t) { var n = t.children;
                        n && n.length ? (t.x = ji(n), t.y = Fi(n)) : (t.x = a ? l += e(t, a) : 0, t.y = 0, a = t) }); var c = Bi(s),
                        f = Hi(s),
                        h = c.x - e(c, f) / 2,
                        p = f.x + e(f, c) / 2; return fi(s, i ? function(t) { t.x = (t.x - s.x) * r[0], t.y = (s.y - t.y) * r[1] } : function(t) { t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (s.y ? t.y / s.y : 1)) * r[1] }), u } var n = pa.layout.hierarchy().sort(null).value(null),
                    e = Ii,
                    r = [1, 1],
                    i = !1; return t.separation = function(n) { return arguments.length ? (e = n, t) : e }, t.size = function(n) { return arguments.length ? (i = null == (r = n), t) : i ? null : r }, t.nodeSize = function(n) { return arguments.length ? (i = null != (r = n), t) : i ? r : null }, li(t, n) }, pa.layout.treemap = function() {
                function t(t, n) { for (var e, r, i = -1, o = t.length; ++i < o;) r = (e = t[i]).value * (n < 0 ? 0 : n), e.area = isNaN(r) || r <= 0 ? 0 : r }

                function n(e) { var o = e.children; if (o && o.length) { var a, u, s, l = f(e),
                            c = [],
                            h = o.slice(),
                            d = 1 / 0,
                            g = "slice" === p ? l.dx : "dice" === p ? l.dy : "slice-dice" === p ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy); for (t(h, l.dx * l.dy / e.value), c.area = 0;
                            (s = h.length) > 0;) c.push(a = h[s - 1]), c.area += a.area, "squarify" !== p || (u = r(c, g)) <= d ? (h.pop(), d = u) : (c.area -= c.pop().area, i(c, g, l, !1), g = Math.min(l.dx, l.dy), c.length = c.area = 0, d = 1 / 0);
                        c.length && (i(c, g, l, !0), c.length = c.area = 0), o.forEach(n) } }

                function e(n) { var r = n.children; if (r && r.length) { var o, a = f(n),
                            u = r.slice(),
                            s = []; for (t(u, a.dx * a.dy / n.value), s.area = 0; o = u.pop();) s.push(o), s.area += o.area, null != o.z && (i(s, o.z ? a.dx : a.dy, a, !u.length), s.length = s.area = 0);
                        r.forEach(e) } }

                function r(t, n) { for (var e, r = t.area, i = 0, o = 1 / 0, a = -1, u = t.length; ++a < u;)(e = t[a].area) && (e < o && (o = e), e > i && (i = e)); return r *= r, n *= n, r ? Math.max(n * i * d / r, r / (n * o * d)) : 1 / 0 }

                function i(t, n, e, r) { var i, o = -1,
                        a = t.length,
                        u = e.x,
                        l = e.y,
                        c = n ? s(t.area / n) : 0; if (n == e.dx) { for ((r || c > e.dy) && (c = e.dy); ++o < a;) i = t[o], i.x = u, i.y = l, i.dy = c, u += i.dx = Math.min(e.x + e.dx - u, c ? s(i.area / c) : 0);
                        i.z = !0, i.dx += e.x + e.dx - u, e.y += c, e.dy -= c } else { for ((r || c > e.dx) && (c = e.dx); ++o < a;) i = t[o], i.x = u, i.y = l, i.dx = c, l += i.dy = Math.min(e.y + e.dy - l, c ? s(i.area / c) : 0);
                        i.z = !1, i.dy += e.y + e.dy - l, e.x += c, e.dx -= c } }

                function o(r) { var i = a || u(r),
                        o = i[0]; return o.x = o.y = 0, o.value ? (o.dx = l[0], o.dy = l[1]) : o.dx = o.dy = 0, a && u.revalue(o), t([o], o.dx * o.dy / o.value), (a ? e : n)(o), h && (a = i), i } var a, u = pa.layout.hierarchy(),
                    s = Math.round,
                    l = [1, 1],
                    c = null,
                    f = Vi,
                    h = !1,
                    p = "squarify",
                    d = .5 * (1 + Math.sqrt(5)); return o.size = function(t) { return arguments.length ? (l = t, o) : l }, o.padding = function(t) {
                    function n(n) { var e = t.call(o, n, n.depth); return null == e ? Vi(n) : Gi(n, "number" == typeof e ? [e, e, e, e] : e) }

                    function e(n) { return Gi(n, t) } if (!arguments.length) return c; var r; return f = null == (c = t) ? Vi : "function" == (r = typeof t) ? n : "number" === r ? (t = [t, t, t, t], e) : e, o }, o.round = function(t) { return arguments.length ? (s = t ? Math.round : Number, o) : s != Number }, o.sticky = function(t) { return arguments.length ? (h = t, a = null, o) : h }, o.ratio = function(t) { return arguments.length ? (d = t, o) : d }, o.mode = function(t) { return arguments.length ? (p = t + "", o) : p }, li(o, u) }, pa.random = { normal: function(t, n) { var e = arguments.length; return e < 2 && (n = 1), e < 1 && (t = 0),
                        function() { var e, r, i;
                            do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1); return t + n * e * Math.sqrt(-2 * Math.log(i) / i) } }, logNormal: function() { var t = pa.random.normal.apply(pa, arguments); return function() { return Math.exp(t()) } }, bates: function(t) { var n = pa.random.irwinHall(t); return function() { return n() / t } }, irwinHall: function(t) { return function() { for (var n = 0, e = 0; e < t; e++) n += Math.random(); return n } } }, pa.scale = {};
            var Ls = { floor: _, ceil: _ };
            pa.scale.linear = function() { return to([0, 1], [0, 1], wr, !1) };
            var Ts = { s: 1, g: 1, p: 1, r: 1, e: 1 };
            pa.scale.log = function() { return so(pa.scale.linear().domain([0, 1]), 10, !0, [1, 10]) };
            var Cs = pa.format(".0e"),
                Ps = { floor: function(t) { return -Math.ceil(-t) }, ceil: function(t) { return -Math.floor(-t) } };
            pa.scale.pow = function() { return lo(pa.scale.linear(), 1, [0, 1]) }, pa.scale.sqrt = function() { return pa.scale.pow().exponent(.5) }, pa.scale.ordinal = function() { return fo([], { t: "range", a: [
                        []
                    ] }) }, pa.scale.category10 = function() { return pa.scale.ordinal().range(Rs) }, pa.scale.category20 = function() { return pa.scale.ordinal().range(zs) }, pa.scale.category20b = function() { return pa.scale.ordinal().range(qs) }, pa.scale.category20c = function() { return pa.scale.ordinal().range(Is) };
            var Rs = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(wt),
                zs = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(wt),
                qs = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(wt),
                Is = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(wt);
            pa.scale.quantile = function() { return ho([], []) }, pa.scale.quantize = function() { return po(0, 1, [0, 1]) }, pa.scale.threshold = function() { return go([.5], [0, 1]) }, pa.scale.identity = function() { return vo([0, 1]) }, pa.svg = {}, pa.svg.arc = function() {
                function t() { var t = Math.max(0, +e.apply(this, arguments)),
                        l = Math.max(0, +r.apply(this, arguments)),
                        c = a.apply(this, arguments) - Ga,
                        f = u.apply(this, arguments) - Ga,
                        h = Math.abs(f - c),
                        p = c > f ? 0 : 1; if (l < t && (d = l, l = t, t = d), h >= Va) return n(l, p) + (t ? n(t, 1 - p) : "") + "Z"; var d, g, v, y, m, x, b, k, M, _, w, N, S = 0,
                        E = 0,
                        A = []; if ((y = (+s.apply(this, arguments) || 0) / 2) && (v = o === Os ? Math.sqrt(t * t + l * l) : +o.apply(this, arguments), p || (E *= -1), l && (E = at(v / l * Math.sin(y))), t && (S = at(v / t * Math.sin(y)))), l) { m = l * Math.cos(c + E), x = l * Math.sin(c + E), b = l * Math.cos(f - E), k = l * Math.sin(f - E); var L = Math.abs(f - c - 2 * E) <= Ba ? 0 : 1; if (E && _o(m, x, b, k) === p ^ L) { var T = (c + f) / 2;
                            m = l * Math.cos(T), x = l * Math.sin(T), b = k = null } } else m = x = 0; if (t) { M = t * Math.cos(f - S), _ = t * Math.sin(f - S), w = t * Math.cos(c + S), N = t * Math.sin(c + S); var C = Math.abs(c - f + 2 * S) <= Ba ? 0 : 1; if (S && _o(M, _, w, N) === 1 - p ^ C) { var P = (c + f) / 2;
                            M = t * Math.cos(P), _ = t * Math.sin(P), w = N = null } } else M = _ = 0; if (h > Fa && (d = Math.min(Math.abs(l - t) / 2, +i.apply(this, arguments))) > .001) { g = t < l ^ p ? 0 : 1; var R = d,
                            z = d; if (h < Ba) { var q = null == w ? [M, _] : null == b ? [m, x] : Ye([m, x], [w, N], [b, k], [M, _]),
                                I = m - q[0],
                                O = x - q[1],
                                U = b - q[0],
                                Y = k - q[1],
                                D = 1 / Math.sin(Math.acos((I * U + O * Y) / (Math.sqrt(I * I + O * O) * Math.sqrt(U * U + Y * Y))) / 2),
                                X = Math.sqrt(q[0] * q[0] + q[1] * q[1]);
                            z = Math.min(d, (t - X) / (D - 1)), R = Math.min(d, (l - X) / (D + 1)) } if (null != b) { var F = wo(null == w ? [M, _] : [w, N], [m, x], l, R, p),
                                j = wo([b, k], [M, _], l, R, p);
                            d === R ? A.push("M", F[0], "A", R, ",", R, " 0 0,", g, " ", F[1], "A", l, ",", l, " 0 ", 1 - p ^ _o(F[1][0], F[1][1], j[1][0], j[1][1]), ",", p, " ", j[1], "A", R, ",", R, " 0 0,", g, " ", j[0]) : A.push("M", F[0], "A", R, ",", R, " 0 1,", g, " ", j[0]) } else A.push("M", m, ",", x); if (null != w) { var B = wo([m, x], [w, N], t, -z, p),
                                H = wo([M, _], null == b ? [m, x] : [b, k], t, -z, p);
                            d === z ? A.push("L", H[0], "A", z, ",", z, " 0 0,", g, " ", H[1], "A", t, ",", t, " 0 ", p ^ _o(H[1][0], H[1][1], B[1][0], B[1][1]), ",", 1 - p, " ", B[1], "A", z, ",", z, " 0 0,", g, " ", B[0]) : A.push("L", H[0], "A", z, ",", z, " 0 0,", g, " ", B[0]) } else A.push("L", M, ",", _) } else A.push("M", m, ",", x), null != b && A.push("A", l, ",", l, " 0 ", L, ",", p, " ", b, ",", k), A.push("L", M, ",", _), null != w && A.push("A", t, ",", t, " 0 ", C, ",", 1 - p, " ", w, ",", N); return A.push("Z"), A.join("") }

                function n(t, n) { return "M0," + t + "A" + t + "," + t + " 0 1," + n + " 0," + -t + "A" + t + "," + t + " 0 1," + n + " 0," + t } var e = mo,
                    r = xo,
                    i = yo,
                    o = Os,
                    a = bo,
                    u = ko,
                    s = Mo; return t.innerRadius = function(n) { return arguments.length ? (e = Ct(n), t) : e }, t.outerRadius = function(n) { return arguments.length ? (r = Ct(n), t) : r }, t.cornerRadius = function(n) { return arguments.length ? (i = Ct(n), t) : i }, t.padRadius = function(n) { return arguments.length ? (o = n == Os ? Os : Ct(n), t) : o }, t.startAngle = function(n) { return arguments.length ? (a = Ct(n), t) : a }, t.endAngle = function(n) { return arguments.length ? (u = Ct(n), t) : u }, t.padAngle = function(n) { return arguments.length ? (s = Ct(n), t) : s }, t.centroid = function() { var t = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                        n = (+a.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Ga; return [Math.cos(n) * t, Math.sin(n) * t] }, t };
            var Os = "auto";
            pa.svg.line = function() { return No(_) };
            var Us = pa.map({ linear: So, "linear-closed": Eo, step: Ao, "step-before": Lo, "step-after": To, basis: Io, "basis-open": Oo, "basis-closed": Uo, bundle: Yo, cardinal: Ro, "cardinal-open": Co, "cardinal-closed": Po, monotone: Ho });
            Us.forEach(function(t, n) { n.key = t, n.closed = /-closed$/.test(t) });
            var Ys = [0, 2 / 3, 1 / 3, 0],
                Ds = [0, 1 / 3, 2 / 3, 0],
                Xs = [0, 1 / 6, 2 / 3, 1 / 6];
            pa.svg.line.radial = function() { var t = No(Vo); return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t }, Lo.reverse = To, To.reverse = Lo, pa.svg.area = function() { return Go(_) }, pa.svg.area.radial = function() { var t = Go(Vo); return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t }, pa.svg.chord = function() {
                function t(t, u) { var s = n(this, o, t, u),
                        l = n(this, a, t, u); return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (e(s, l) ? i(s.r, s.p1, s.r, s.p0) : i(s.r, s.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + i(l.r, l.p1, s.r, s.p0)) + "Z" }

                function n(t, n, e, r) { var i = n.call(t, e, r),
                        o = u.call(t, i, r),
                        a = s.call(t, i, r) - Ga,
                        c = l.call(t, i, r) - Ga; return { r: o, a0: a, a1: c, p0: [o * Math.cos(a), o * Math.sin(a)], p1: [o * Math.cos(c), o * Math.sin(c)] } }

                function e(t, n) { return t.a0 == n.a0 && t.a1 == n.a1 }

                function r(t, n, e) { return "A" + t + "," + t + " 0 " + +(e > Ba) + ",1 " + n }

                function i(t, n, e, r) { return "Q 0,0 " + r } var o = we,
                    a = Ne,
                    u = Jo,
                    s = bo,
                    l = ko; return t.radius = function(n) { return arguments.length ? (u = Ct(n), t) : u }, t.source = function(n) { return arguments.length ? (o = Ct(n), t) : o }, t.target = function(n) { return arguments.length ? (a = Ct(n), t) : a }, t.startAngle = function(n) { return arguments.length ? (s = Ct(n), t) : s }, t.endAngle = function(n) { return arguments.length ? (l = Ct(n), t) : l }, t }, pa.svg.diagonal = function() {
                function t(t, i) { var o = n.call(this, t, i),
                        a = e.call(this, t, i),
                        u = (o.y + a.y) / 2,
                        s = [o, { x: o.x, y: u }, { x: a.x, y: u }, a]; return s = s.map(r), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3] } var n = we,
                    e = Ne,
                    r = Zo; return t.source = function(e) { return arguments.length ? (n = Ct(e), t) : n }, t.target = function(n) { return arguments.length ? (e = Ct(n), t) : e }, t.projection = function(n) { return arguments.length ? (r = n, t) : r }, t }, pa.svg.diagonal.radial = function() { var t = pa.svg.diagonal(),
                    n = Zo,
                    e = t.projection; return t.projection = function(t) { return arguments.length ? e(Wo(n = t)) : n }, t }, pa.svg.symbol = function() {
                function t(t, r) { return (Fs.get(n.call(this, t, r)) || Qo)(e.call(this, t, r)) } var n = Ko,
                    e = $o; return t.type = function(e) { return arguments.length ? (n = Ct(e), t) : n }, t.size = function(n) { return arguments.length ? (e = Ct(n), t) : e }, t };
            var Fs = pa.map({ circle: Qo, cross: function(t) { var n = Math.sqrt(t / 5) / 2; return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z" }, diamond: function(t) { var n = Math.sqrt(t / (2 * Bs)),
                        e = n * Bs; return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z" }, square: function(t) { var n = Math.sqrt(t) / 2; return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z" }, "triangle-down": function(t) { var n = Math.sqrt(t / js),
                        e = n * js / 2; return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z" }, "triangle-up": function(t) { var n = Math.sqrt(t / js),
                        e = n * js / 2; return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z" } });
            pa.svg.symbolTypes = Fs.keys();
            var js = Math.sqrt(3),
                Bs = Math.tan(30 * Ja);
            za.transition = function(t) { for (var n, e, r = Hs || ++Zs, i = ia(t), o = [], a = Vs || { time: Date.now(), ease: Cr, delay: 0, duration: 250 }, u = -1, s = this.length; ++u < s;) { o.push(n = []); for (var l = this[u], c = -1, f = l.length; ++c < f;)(e = l[c]) && oa(e, c, i, r, a), n.push(e) } return na(o, i, r) }, za.interrupt = function(t) { return this.each(null == t ? Gs : ta(ia(t))) };
            var Hs, Vs, Gs = ta(ia()),
                Js = [],
                Zs = 0;
            Js.call = za.call, Js.empty = za.empty, Js.node = za.node, Js.size = za.size, pa.transition = function(t, n) { return t && t.transition ? Hs ? t.transition(n) : t : pa.selection().transition(t) }, pa.transition.prototype = Js, Js.select = function(t) { var n, e, r, i = this.id,
                    o = this.namespace,
                    a = [];
                t = R(t); for (var u = -1, s = this.length; ++u < s;) { a.push(n = []); for (var l = this[u], c = -1, f = l.length; ++c < f;)(r = l[c]) && (e = t.call(r, r.__data__, c, u)) ? ("__data__" in r && (e.__data__ = r.__data__), oa(e, c, o, i, r[o][i]), n.push(e)) : n.push(null) } return na(a, o, i) }, Js.selectAll = function(t) { var n, e, r, i, o, a = this.id,
                    u = this.namespace,
                    s = [];
                t = z(t); for (var l = -1, c = this.length; ++l < c;)
                    for (var f = this[l], h = -1, p = f.length; ++h < p;)
                        if (r = f[h]) { o = r[u][a], e = t.call(r, r.__data__, h, l), s.push(n = []); for (var d = -1, g = e.length; ++d < g;)(i = e[d]) && oa(i, d, u, a, o), n.push(i) }
                return na(s, u, a) }, Js.filter = function(t) { var n, e, r, i = []; "function" != typeof t && (t = V(t)); for (var o = 0, a = this.length; o < a; o++) { i.push(n = []); for (var e = this[o], u = 0, s = e.length; u < s; u++)(r = e[u]) && t.call(r, r.__data__, u, o) && n.push(r) } return na(i, this.namespace, this.id) }, Js.tween = function(t, n) { var e = this.id,
                    r = this.namespace; return arguments.length < 2 ? this.node()[r][e].tween.get(t) : J(this, null == n ? function(n) { n[r][e].tween.remove(t) } : function(i) { i[r][e].tween.set(t, n) }) }, Js.attr = function(t, n) {
                function e() { this.removeAttribute(u) }

                function r() { this.removeAttributeNS(u.space, u.local) }

                function i(t) { return null == t ? e : (t += "", function() { var n, e = this.getAttribute(u); return e !== t && (n = a(e, t), function(t) { this.setAttribute(u, n(t)) }) }) }

                function o(t) { return null == t ? r : (t += "", function() { var n, e = this.getAttributeNS(u.space, u.local); return e !== t && (n = a(e, t), function(t) { this.setAttributeNS(u.space, u.local, n(t)) }) }) } if (arguments.length < 2) { for (n in t) this.attr(n, t[n]); return this } var a = "transform" == t ? Kr : wr,
                    u = pa.ns.qualify(t); return ea(this, "attr." + t, n, u.local ? o : i) }, Js.attrTween = function(t, n) {
                function e(t, e) { var r = n.call(this, t, e, this.getAttribute(i)); return r && function(t) { this.setAttribute(i, r(t)) } }

                function r(t, e) { var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local)); return r && function(t) { this.setAttributeNS(i.space, i.local, r(t)) } } var i = pa.ns.qualify(t); return this.tween("attr." + t, i.local ? r : e) }, Js.style = function(t, n, e) {
                function r() { this.style.removeProperty(t) }

                function i(n) { return null == n ? r : (n += "", function() { var r, i = a(this).getComputedStyle(this, null).getPropertyValue(t); return i !== n && (r = wr(i, n), function(n) { this.style.setProperty(t, r(n), e) }) }) } var o = arguments.length; if (o < 3) { if ("string" != typeof t) { o < 2 && (n = ""); for (e in t) this.style(e, t[e], n); return this }
                    e = "" } return ea(this, "style." + t, n, i) }, Js.styleTween = function(t, n, e) {
                function r(r, i) { var o = n.call(this, r, i, a(this).getComputedStyle(this, null).getPropertyValue(t)); return o && function(n) { this.style.setProperty(t, o(n), e) } } return arguments.length < 3 && (e = ""), this.tween("style." + t, r) }, Js.text = function(t) { return ea(this, "text", t, ra) }, Js.remove = function() { var t = this.namespace; return this.each("end.transition", function() { var n;
                    this[t].count < 2 && (n = this.parentNode) && n.removeChild(this) }) }, Js.ease = function(t) { var n = this.id,
                    e = this.namespace; return arguments.length < 1 ? this.node()[e][n].ease : ("function" != typeof t && (t = pa.ease.apply(pa, arguments)), J(this, function(r) { r[e][n].ease = t })) }, Js.delay = function(t) { var n = this.id,
                    e = this.namespace; return arguments.length < 1 ? this.node()[e][n].delay : J(this, "function" == typeof t ? function(r, i, o) { r[e][n].delay = +t.call(r, r.__data__, i, o) } : (t = +t, function(r) { r[e][n].delay = t })) }, Js.duration = function(t) { var n = this.id,
                    e = this.namespace; return arguments.length < 1 ? this.node()[e][n].duration : J(this, "function" == typeof t ? function(r, i, o) { r[e][n].duration = Math.max(1, t.call(r, r.__data__, i, o)) } : (t = Math.max(1, t), function(r) { r[e][n].duration = t })) }, Js.each = function(t, n) { var e = this.id,
                    r = this.namespace; if (arguments.length < 2) { var i = Vs,
                        o = Hs; try { Hs = e, J(this, function(n, i, o) { Vs = n[r][e], t.call(n, n.__data__, i, o) }) } finally { Vs = i, Hs = o } } else J(this, function(i) { var o = i[r][e];
                    (o.event || (o.event = pa.dispatch("start", "end", "interrupt"))).on(t, n) }); return this }, Js.transition = function() { for (var t, n, e, r, i = this.id, o = ++Zs, a = this.namespace, u = [], s = 0, l = this.length; s < l; s++) { u.push(t = []); for (var n = this[s], c = 0, f = n.length; c < f; c++)(e = n[c]) && (r = e[a][i], oa(e, c, a, o, { time: r.time, ease: r.ease, delay: r.delay + r.duration, duration: r.duration })), t.push(e) } return na(u, a, o) }, pa.svg.axis = function() {
                function t(t) { t.each(function() { var t, l = pa.select(this),
                            c = this.__chart__ || e,
                            f = this.__chart__ = e.copy(),
                            h = null == s ? f.ticks ? f.ticks.apply(f, u) : f.domain() : s,
                            p = null == n ? f.tickFormat ? f.tickFormat.apply(f, u) : _ : n,
                            d = l.selectAll(".tick").data(h, f),
                            g = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Fa),
                            v = pa.transition(d.exit()).style("opacity", Fa).remove(),
                            y = pa.transition(d.order()).style("opacity", 1),
                            m = Math.max(i, 0) + a,
                            x = Zi(f),
                            b = l.selectAll(".domain").data([0]),
                            k = (b.enter().append("path").attr("class", "domain"), pa.transition(b));
                        g.append("line"), g.append("text"); var M, w, N, S, E = g.select("line"),
                            A = y.select("line"),
                            L = d.select("text").text(p),
                            T = g.select("text"),
                            C = y.select("text"),
                            P = "top" === r || "left" === r ? -1 : 1; if ("bottom" === r || "top" === r ? (t = aa, M = "x", N = "y", w = "x2", S = "y2", L.attr("dy", P < 0 ? "0em" : ".71em").style("text-anchor", "middle"), k.attr("d", "M" + x[0] + "," + P * o + "V0H" + x[1] + "V" + P * o)) : (t = ua, M = "y", N = "x", w = "y2", S = "x2", L.attr("dy", ".32em").style("text-anchor", P < 0 ? "end" : "start"), k.attr("d", "M" + P * o + "," + x[0] + "H0V" + x[1] + "H" + P * o)), E.attr(S, P * i), T.attr(N, P * m), A.attr(w, 0).attr(S, P * i), C.attr(M, 0).attr(N, P * m), f.rangeBand) { var R = f,
                                z = R.rangeBand() / 2;
                            c = f = function(t) { return R(t) + z } } else c.rangeBand ? c = f : v.call(t, f, c);
                        g.call(t, c, f), y.call(t, f, f) }) } var n, e = pa.scale.linear(),
                    r = Ws,
                    i = 6,
                    o = 6,
                    a = 3,
                    u = [10],
                    s = null; return t.scale = function(n) { return arguments.length ? (e = n, t) : e }, t.orient = function(n) { return arguments.length ? (r = n in $s ? n + "" : Ws, t) : r }, t.ticks = function() { return arguments.length ? (u = ga(arguments), t) : u }, t.tickValues = function(n) { return arguments.length ? (s = n, t) : s }, t.tickFormat = function(e) { return arguments.length ? (n = e, t) : n }, t.tickSize = function(n) { var e = arguments.length; return e ? (i = +n, o = +arguments[e - 1], t) : i }, t.innerTickSize = function(n) { return arguments.length ? (i = +n, t) : i }, t.outerTickSize = function(n) { return arguments.length ? (o = +n, t) : o }, t.tickPadding = function(n) { return arguments.length ? (a = +n, t) : a }, t.tickSubdivide = function() { return arguments.length && t }, t };
            var Ws = "bottom",
                $s = { top: 1, right: 1, bottom: 1, left: 1 };
            pa.svg.brush = function() {
                function t(o) { o.each(function() { var o = pa.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
                            a = o.selectAll(".background").data([0]);
                        a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move"); var u = o.selectAll(".resize").data(g, _);
                        u.exit().remove(), u.enter().append("g").attr("class", function(t) { return "resize " + t }).style("cursor", function(t) { return Ks[t] }).append("rect").attr("x", function(t) { return /[ew]$/.test(t) ? -3 : null }).attr("y", function(t) { return /^[ns]/.test(t) ? -3 : null }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), u.style("display", t.empty() ? "none" : null); var s, f = pa.transition(o),
                            h = pa.transition(a);
                        l && (s = Zi(l), h.attr("x", s[0]).attr("width", s[1] - s[0]), e(f)), c && (s = Zi(c), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), n(f) }) }

                function n(t) { t.selectAll(".resize").attr("transform", function(t) { return "translate(" + f[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")" }) }

                function e(t) { t.select(".extent").attr("x", f[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0]) }

                function r(t) { t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]) }

                function i() {
                    function i() { 32 == pa.event.keyCode && (A || (x = null, C[0] -= f[1], C[1] -= h[1], A = 2), L()) }

                    function g() { 32 == pa.event.keyCode && 2 == A && (C[0] += f[1], C[1] += h[1], A = 0, L()) }

                    function v() { var t = pa.mouse(k),
                            i = !1;
                        b && (t[0] += b[0], t[1] += b[1]), A || (pa.event.altKey ? (x || (x = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), C[0] = f[+(t[0] < x[0])], C[1] = h[+(t[1] < x[1])]) : x = null), S && y(t, l, 0) && (e(w), i = !0), E && y(t, c, 1) && (r(w), i = !0), i && (n(w), _({ type: "brush", mode: A ? "move" : "resize" })) }

                    function y(t, n, e) { var r, i, a = Zi(n),
                            s = a[0],
                            l = a[1],
                            c = C[e],
                            g = e ? h : f,
                            v = g[1] - g[0]; if (A && (s -= c, l -= v + c), r = (e ? d : p) ? Math.max(s, Math.min(l, t[e])) : t[e], A ? i = (r += c) + v : (x && (c = Math.max(s, Math.min(l, 2 * x[e] - r))), c < r ? (i = r, r = c) : i = c), g[0] != r || g[1] != i) return e ? u = null : o = null, g[0] = r, g[1] = i, !0 }

                    function m() { v(), w.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), pa.select("body").style("cursor", null), P.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), T(), _({ type: "brushend" }) } var x, b, k = this,
                        M = pa.select(pa.event.target),
                        _ = s.of(k, arguments),
                        w = pa.select(k),
                        N = M.datum(),
                        S = !/^(n|s)$/.test(N) && l,
                        E = !/^(e|w)$/.test(N) && c,
                        A = M.classed("extent"),
                        T = tt(k),
                        C = pa.mouse(k),
                        P = pa.select(a(k)).on("keydown.brush", i).on("keyup.brush", g); if (pa.event.changedTouches ? P.on("touchmove.brush", v).on("touchend.brush", m) : P.on("mousemove.brush", v).on("mouseup.brush", m), w.interrupt().selectAll("*").interrupt(), A) C[0] = f[0] - C[0], C[1] = h[0] - C[1];
                    else if (N) { var R = +/w$/.test(N),
                            z = +/^n/.test(N);
                        b = [f[1 - R] - C[0], h[1 - z] - C[1]], C[0] = f[R], C[1] = h[z] } else pa.event.altKey && (x = C.slice());
                    w.style("pointer-events", "none").selectAll(".resize").style("display", null), pa.select("body").style("cursor", M.style("cursor")), _({ type: "brushstart" }), v() }
                var o, u, s = C(t, "brushstart", "brush", "brushend"),
                    l = null,
                    c = null,
                    f = [0, 0],
                    h = [0, 0],
                    p = !0,
                    d = !0,
                    g = Qs[0];
                return t.event = function(t) { t.each(function() { var t = s.of(this, arguments),
                            n = { x: f, y: h, i: o, j: u },
                            e = this.__chart__ || n;
                        this.__chart__ = n, Hs ? pa.select(this).transition().each("start.brush", function() { o = e.i, u = e.j, f = e.x, h = e.y, t({ type: "brushstart" }) }).tween("brush:brush", function() { var e = Nr(f, n.x),
                                r = Nr(h, n.y); return o = u = null,
                                function(i) { f = n.x = e(i), h = n.y = r(i), t({ type: "brush", mode: "resize" }) } }).each("end.brush", function() { o = n.i, u = n.j, t({ type: "brush", mode: "resize" }), t({ type: "brushend" }) }) : (t({ type: "brushstart" }), t({ type: "brush", mode: "resize" }), t({ type: "brushend" })) }) }, t.x = function(n) { return arguments.length ? (l = n, g = Qs[!l << 1 | !c], t) : l }, t.y = function(n) { return arguments.length ? (c = n, g = Qs[!l << 1 | !c], t) : c }, t.clamp = function(n) { return arguments.length ? (l && c ? (p = !!n[0], d = !!n[1]) : l ? p = !!n : c && (d = !!n), t) : l && c ? [p, d] : l ? p : c ? d : null }, t.extent = function(n) {
                    var e, r, i, a, s;
                    return arguments.length ? (l && (e = n[0], r = n[1], c && (e = e[0], r = r[0]), o = [e, r], l.invert && (e = l(e), r = l(r)),
                        r < e && (s = e, e = r, r = s), e == f[0] && r == f[1] || (f = [e, r])), c && (i = n[0], a = n[1], l && (i = i[1], a = a[1]), u = [i, a], c.invert && (i = c(i), a = c(a)), a < i && (s = i, i = a, a = s), i == h[0] && a == h[1] || (h = [i, a])), t) : (l && (o ? (e = o[0], r = o[1]) : (e = f[0], r = f[1], l.invert && (e = l.invert(e), r = l.invert(r)), r < e && (s = e, e = r, r = s))), c && (u ? (i = u[0], a = u[1]) : (i = h[0], a = h[1], c.invert && (i = c.invert(i), a = c.invert(a)), a < i && (s = i, i = a, a = s))), l && c ? [
                        [e, i],
                        [r, a]
                    ] : l ? [e, r] : c && [i, a])
                }, t.clear = function() { return t.empty() || (f = [0, 0], h = [0, 0], o = u = null), t }, t.empty = function() { return !!l && f[0] == f[1] || !!c && h[0] == h[1] }, pa.rebind(t, s, "on")
            };
            var Ks = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
                Qs = [
                    ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                    ["e", "w"],
                    ["n", "s"],
                    []
                ],
                tl = xu.format = Nu.timeFormat,
                nl = tl.utc,
                el = nl("%Y-%m-%dT%H:%M:%S.%LZ");
            tl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? sa : el, sa.parse = function(t) { var n = new Date(t); return isNaN(n) ? null : n }, sa.toString = el.toString, xu.second = Ht(function(t) { return new bu(1e3 * Math.floor(t / 1e3)) }, function(t, n) { t.setTime(t.getTime() + 1e3 * Math.floor(n)) }, function(t) { return t.getSeconds() }), xu.seconds = xu.second.range, xu.seconds.utc = xu.second.utc.range, xu.minute = Ht(function(t) { return new bu(6e4 * Math.floor(t / 6e4)) }, function(t, n) { t.setTime(t.getTime() + 6e4 * Math.floor(n)) }, function(t) { return t.getMinutes() }), xu.minutes = xu.minute.range, xu.minutes.utc = xu.minute.utc.range, xu.hour = Ht(function(t) { var n = t.getTimezoneOffset() / 60; return new bu(36e5 * (Math.floor(t / 36e5 - n) + n)) }, function(t, n) { t.setTime(t.getTime() + 36e5 * Math.floor(n)) }, function(t) { return t.getHours() }), xu.hours = xu.hour.range, xu.hours.utc = xu.hour.utc.range, xu.month = Ht(function(t) { return t = xu.day(t), t.setDate(1), t }, function(t, n) { t.setMonth(t.getMonth() + n) }, function(t) { return t.getMonth() }), xu.months = xu.month.range, xu.months.utc = xu.month.utc.range;
            var rl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                il = [
                    [xu.second, 1],
                    [xu.second, 5],
                    [xu.second, 15],
                    [xu.second, 30],
                    [xu.minute, 1],
                    [xu.minute, 5],
                    [xu.minute, 15],
                    [xu.minute, 30],
                    [xu.hour, 1],
                    [xu.hour, 3],
                    [xu.hour, 6],
                    [xu.hour, 12],
                    [xu.day, 1],
                    [xu.day, 2],
                    [xu.week, 1],
                    [xu.month, 1],
                    [xu.month, 3],
                    [xu.year, 1]
                ],
                ol = tl.multi([
                    [".%L", function(t) { return t.getMilliseconds() }],
                    [":%S", function(t) { return t.getSeconds() }],
                    ["%I:%M", function(t) { return t.getMinutes() }],
                    ["%I %p", function(t) { return t.getHours() }],
                    ["%a %d", function(t) { return t.getDay() && 1 != t.getDate() }],
                    ["%b %d", function(t) { return 1 != t.getDate() }],
                    ["%B", function(t) { return t.getMonth() }],
                    ["%Y", qn]
                ]),
                al = { range: function(t, n, e) { return pa.range(Math.ceil(t / e) * e, +n, e).map(ca) }, floor: _, ceil: _ };
            il.year = xu.year, xu.scale = function() { return la(pa.scale.linear(), il, ol) };
            var ul = il.map(function(t) { return [t[0].utc, t[1]] }),
                sl = nl.multi([
                    [".%L", function(t) { return t.getUTCMilliseconds() }],
                    [":%S", function(t) { return t.getUTCSeconds() }],
                    ["%I:%M", function(t) { return t.getUTCMinutes() }],
                    ["%I %p", function(t) { return t.getUTCHours() }],
                    ["%a %d", function(t) { return t.getUTCDay() && 1 != t.getUTCDate() }],
                    ["%b %d", function(t) { return 1 != t.getUTCDate() }],
                    ["%B", function(t) { return t.getUTCMonth() }],
                    ["%Y", qn]
                ]);
            ul.year = xu.year.utc, xu.scale.utc = function() { return la(pa.scale.linear(), ul, sl) }, pa.text = Pt(function(t) { return t.responseText }), pa.json = function(t, n) { return Rt(t, "application/json", fa, n) }, pa.html = function(t, n) { return Rt(t, "text/html", ha, n) }, pa.xml = Pt(function(t) { return t.responseXML }), this.d3 = pa, r = pa, i = "function" == typeof r ? r.call(n, e, n, t) : r, !(void 0 !== i && (t.exports = i))
        }()
    }])
});