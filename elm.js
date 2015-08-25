var Elm = Elm || { Native: {} };
Elm.Agent = Elm.Agent || {};
Elm.Agent.make = function (_elm) {
   "use strict";
   _elm.Agent = _elm.Agent || {};
   if (_elm.Agent.values)
   return _elm.Agent.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Agent",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Types = Elm.Types.make(_elm);
   var changeEdge = F3(function (agent,
   from,
   nid) {
      return function () {
         var _v0 = agent.kind;
         switch (_v0.ctor)
         {case "Bus":
            return $Helpers.getOrFail(A2($Basics._op["++"],
              "Bus can\'t find where to go after node ",
              A2($Basics._op["++"],
              $Basics.toString(nid),
              A2($Basics._op["++"],
              " in ",
              $Basics.toString($Dict.toList(_v0._0))))))(A2($Dict.get,
              {ctor: "_Tuple2"
              ,_0: from
              ,_1: nid},
              _v0._0));
            case "Car":
            return $Maybe.withDefault(10000)(A2($Dict.get,
              nid,
              _v0._0));}
         _U.badCase($moduleName,
         "between lines 20 and 22");
      }();
   });
   var translate = F2(function (agent,
   maxTravelled) {
      return function () {
         var limit = maxTravelled;
         var newPos = A2($Basics.min,
         agent.travelled + agent.speed,
         limit);
         return _U.replace([["travelled"
                            ,newPos]
                           ,["totalDist"
                            ,agent.totalDist + (newPos - agent.travelled)]],
         agent);
      }();
   });
   var move = F5(function (ctx,
   from,
   road,
   agent,
   maxTravelled) {
      return function () {
         var moved = A2(translate,
         agent,
         maxTravelled);
         return _U.cmp(moved.travelled,
         road.length) > 0 ? A2($Types.canMoveThrough,
         agent,
         ctx.node.label) ? function () {
            var remainder = moved.travelled - road.length;
            return {ctor: "_Tuple2"
                   ,_0: {ctor: "_Tuple2"
                        ,_0: ctx.node.id
                        ,_1: A3(changeEdge,
                        agent,
                        from,
                        ctx.node.id)}
                   ,_1: _U.replace([["travelled"
                                    ,remainder]
                                   ,["lastEdge"
                                    ,$Maybe.Just({ctor: "_Tuple2"
                                                 ,_0: from
                                                 ,_1: ctx.node.id})]],
                   agent)};
         }() : {ctor: "_Tuple2"
               ,_0: {ctor: "_Tuple2"
                    ,_0: from
                    ,_1: ctx.node.id}
               ,_1: _U.replace([["travelled"
                                ,road.length]],
               agent)} : {ctor: "_Tuple2"
                         ,_0: {ctor: "_Tuple2"
                              ,_0: from
                              ,_1: ctx.node.id}
                         ,_1: moved};
      }();
   });
   _elm.Agent.values = {_op: _op
                       ,translate: translate
                       ,changeEdge: changeEdge
                       ,move: move};
   return _elm.Agent.values;
};
Elm.Array = Elm.Array || {};
Elm.Array.make = function (_elm) {
   "use strict";
   _elm.Array = _elm.Array || {};
   if (_elm.Array.values)
   return _elm.Array.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Array",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Array = Elm.Native.Array.make(_elm);
   var append = $Native$Array.append;
   var length = $Native$Array.length;
   var isEmpty = function (array) {
      return _U.eq(length(array),
      0);
   };
   var slice = $Native$Array.slice;
   var set = $Native$Array.set;
   var get = F2(function (i,
   array) {
      return _U.cmp(0,
      i) < 1 && _U.cmp(i,
      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
      i,
      array)) : $Maybe.Nothing;
   });
   var push = $Native$Array.push;
   var empty = $Native$Array.empty;
   var filter = F2(function (isOkay,
   arr) {
      return function () {
         var update = F2(function (x,
         xs) {
            return isOkay(x) ? A2($Native$Array.push,
            x,
            xs) : xs;
         });
         return A3($Native$Array.foldl,
         update,
         $Native$Array.empty,
         arr);
      }();
   });
   var foldr = $Native$Array.foldr;
   var foldl = $Native$Array.foldl;
   var indexedMap = $Native$Array.indexedMap;
   var map = $Native$Array.map;
   var toIndexedList = function (array) {
      return A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      _L.range(0,
      $Native$Array.length(array) - 1),
      $Native$Array.toList(array));
   };
   var toList = $Native$Array.toList;
   var fromList = $Native$Array.fromList;
   var initialize = $Native$Array.initialize;
   var repeat = F2(function (n,e) {
      return A2(initialize,
      n,
      $Basics.always(e));
   });
   var Array = {ctor: "Array"};
   _elm.Array.values = {_op: _op
                       ,empty: empty
                       ,repeat: repeat
                       ,initialize: initialize
                       ,fromList: fromList
                       ,isEmpty: isEmpty
                       ,length: length
                       ,push: push
                       ,append: append
                       ,get: get
                       ,set: set
                       ,slice: slice
                       ,toList: toList
                       ,toIndexedList: toIndexedList
                       ,map: map
                       ,indexedMap: indexedMap
                       ,filter: filter
                       ,foldl: foldl
                       ,foldr: foldr};
   return _elm.Array.values;
};
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 595, column 3 to 8");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 573, column 3 to 4");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 567, column 3 to 4");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,max: max
                        ,min: min
                        ,compare: compare
                        ,not: not
                        ,xor: xor
                        ,otherwise: otherwise
                        ,rem: rem
                        ,negate: negate
                        ,abs: abs
                        ,sqrt: sqrt
                        ,clamp: clamp
                        ,logBase: logBase
                        ,e: e
                        ,pi: pi
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,round: round
                        ,floor: floor
                        ,ceiling: ceiling
                        ,truncate: truncate
                        ,toFloat: toFloat
                        ,degrees: degrees
                        ,radians: radians
                        ,turns: turns
                        ,toPolar: toPolar
                        ,fromPolar: fromPolar
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,fst: fst
                        ,snd: snd
                        ,identity: identity
                        ,always: always
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT};
   return _elm.Basics.values;
};
Elm.Bitwise = Elm.Bitwise || {};
Elm.Bitwise.make = function (_elm) {
   "use strict";
   _elm.Bitwise = _elm.Bitwise || {};
   if (_elm.Bitwise.values)
   return _elm.Bitwise.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Bitwise",
   $Native$Bitwise = Elm.Native.Bitwise.make(_elm);
   var shiftRightLogical = $Native$Bitwise.shiftRightLogical;
   var shiftRight = $Native$Bitwise.shiftRightArithmatic;
   var shiftLeft = $Native$Bitwise.shiftLeft;
   var complement = $Native$Bitwise.complement;
   var xor = $Native$Bitwise.xor;
   var or = $Native$Bitwise.or;
   var and = $Native$Bitwise.and;
   _elm.Bitwise.values = {_op: _op
                         ,and: and
                         ,or: or
                         ,xor: xor
                         ,complement: complement
                         ,shiftLeft: shiftLeft
                         ,shiftRight: shiftRight
                         ,shiftRightLogical: shiftRightLogical};
   return _elm.Bitwise.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Char",
   $Basics = Elm.Basics.make(_elm),
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isBetween = F3(function (low,
   high,
   $char) {
      return function () {
         var code = toCode($char);
         return _U.cmp(code,
         toCode(low)) > -1 && _U.cmp(code,
         toCode(high)) < 1;
      }();
   });
   var isUpper = A2(isBetween,
   _U.chr("A"),
   _U.chr("Z"));
   var isLower = A2(isBetween,
   _U.chr("a"),
   _U.chr("z"));
   var isDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("9"));
   var isOctDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("7"));
   var isHexDigit = function ($char) {
      return isDigit($char) || (A3(isBetween,
      _U.chr("a"),
      _U.chr("f"),
      $char) || A3(isBetween,
      _U.chr("A"),
      _U.chr("F"),
      $char));
   };
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 150 and 152"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 114 and 118");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 108");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,rgb: rgb
                       ,rgba: rgba
                       ,hsl: hsl
                       ,hsla: hsla
                       ,greyscale: greyscale
                       ,grayscale: grayscale
                       ,complement: complement
                       ,linear: linear
                       ,radial: radial
                       ,toRgb: toRgb
                       ,toHsl: toHsl
                       ,red: red
                       ,orange: orange
                       ,yellow: yellow
                       ,green: green
                       ,blue: blue
                       ,purple: purple
                       ,brown: brown
                       ,lightRed: lightRed
                       ,lightOrange: lightOrange
                       ,lightYellow: lightYellow
                       ,lightGreen: lightGreen
                       ,lightBlue: lightBlue
                       ,lightPurple: lightPurple
                       ,lightBrown: lightBrown
                       ,darkRed: darkRed
                       ,darkOrange: darkOrange
                       ,darkYellow: darkYellow
                       ,darkGreen: darkGreen
                       ,darkBlue: darkBlue
                       ,darkPurple: darkPurple
                       ,darkBrown: darkBrown
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal
                       ,black: black
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray};
   return _elm.Color.values;
};
Elm.Debug = Elm.Debug || {};
Elm.Debug.make = function (_elm) {
   "use strict";
   _elm.Debug = _elm.Debug || {};
   if (_elm.Debug.values)
   return _elm.Debug.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Debug",
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm);
   var trace = $Native$Debug.tracePath;
   var watchSummary = $Native$Debug.watchSummary;
   var watch = $Native$Debug.watch;
   var crash = $Native$Debug.crash;
   var log = $Native$Debug.log;
   _elm.Debug.values = {_op: _op
                       ,log: log
                       ,crash: crash
                       ,watch: watch
                       ,watchSummary: watchSummary
                       ,trace: trace};
   return _elm.Debug.values;
};
Elm.Dict = Elm.Dict || {};
Elm.Dict.make = function (_elm) {
   "use strict";
   _elm.Dict = _elm.Dict || {};
   if (_elm.Dict.values)
   return _elm.Dict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Dict",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm),
   $String = Elm.String.make(_elm);
   var foldr = F3(function (f,
   acc,
   t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            switch (t._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldr,
              f,
              A3(f,
              t._1,
              t._2,
              A3(foldr,f,acc,t._4)),
              t._3);}
         _U.badCase($moduleName,
         "between lines 417 and 421");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldl,
              f,
              A3(f,
              dict._1,
              dict._2,
              A3(foldl,f,acc,dict._3)),
              dict._4);}
         _U.badCase($moduleName,
         "between lines 406 and 410");
      }();
   });
   var isBBlack = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack": return true;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "BBlack": return true;}
              break;}
         return false;
      }();
   };
   var showFlag = function (f) {
      return function () {
         switch (f.ctor)
         {case "Insert": return "Insert";
            case "Remove": return "Remove";
            case "Same": return "Same";}
         _U.badCase($moduleName,
         "between lines 182 and 185");
      }();
   };
   var Same = {ctor: "Same"};
   var Remove = {ctor: "Remove"};
   var Insert = {ctor: "Insert"};
   var get = F2(function (targetKey,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Maybe.Nothing;}
              break;
            case "RBNode":
            return function () {
                 var _v29 = A2($Basics.compare,
                 targetKey,
                 dict._1);
                 switch (_v29.ctor)
                 {case "EQ":
                    return $Maybe.Just(dict._2);
                    case "GT": return A2(get,
                      targetKey,
                      dict._4);
                    case "LT": return A2(get,
                      targetKey,
                      dict._3);}
                 _U.badCase($moduleName,
                 "between lines 129 and 132");
              }();}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v30 = A2(get,key,dict);
         switch (_v30.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 138 and 140");
      }();
   });
   var max = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("(max Empty) is not defined");
            case "RBNode":
            switch (dict._4.ctor)
              {case "RBEmpty":
                 return {ctor: "_Tuple2"
                        ,_0: dict._1
                        ,_1: dict._2};}
              return max(dict._4);}
         _U.badCase($moduleName,
         "between lines 100 and 108");
      }();
   };
   var min = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Native$Debug.crash("(min Empty) is not defined");}
              break;
            case "RBNode":
            switch (dict._3.ctor)
              {case "RBEmpty":
                 switch (dict._3._0.ctor)
                   {case "LBlack":
                      return {ctor: "_Tuple2"
                             ,_0: dict._1
                             ,_1: dict._2};}
                   break;}
              return min(dict._3);}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var RBEmpty = function (a) {
      return {ctor: "RBEmpty"
             ,_0: a};
   };
   var RBNode = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "RBNode"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var showLColor = function (color) {
      return function () {
         switch (color.ctor)
         {case "LBBlack":
            return "LBBlack";
            case "LBlack": return "LBlack";}
         _U.badCase($moduleName,
         "between lines 70 and 72");
      }();
   };
   var LBBlack = {ctor: "LBBlack"};
   var LBlack = {ctor: "LBlack"};
   var empty = RBEmpty(LBlack);
   var isEmpty = function (dict) {
      return _U.eq(dict,empty);
   };
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              dict._0,
              dict._1,
              A2(f,dict._1,dict._2),
              A2(map,f,dict._3),
              A2(map,f,dict._4));}
         _U.badCase($moduleName,
         "between lines 394 and 399");
      }();
   });
   var showNColor = function (c) {
      return function () {
         switch (c.ctor)
         {case "BBlack": return "BBlack";
            case "Black": return "Black";
            case "NBlack": return "NBlack";
            case "Red": return "Red";}
         _U.badCase($moduleName,
         "between lines 56 and 60");
      }();
   };
   var reportRemBug = F4(function (msg,
   c,
   lgot,
   rgot) {
      return $Native$Debug.crash($String.concat(_L.fromArray(["Internal red-black tree invariant violated, expected "
                                                             ,msg
                                                             ," and got "
                                                             ,showNColor(c)
                                                             ,"/"
                                                             ,lgot
                                                             ,"/"
                                                             ,rgot
                                                             ,"\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>"])));
   });
   var NBlack = {ctor: "NBlack"};
   var BBlack = {ctor: "BBlack"};
   var Black = {ctor: "Black"};
   var ensureBlackRoot = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return dict;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "Black": return dict;
                 case "Red": return A5(RBNode,
                   Black,
                   dict._1,
                   dict._2,
                   dict._3,
                   dict._4);}
              break;}
         _U.badCase($moduleName,
         "between lines 154 and 162");
      }();
   };
   var blackish = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty": return true;
            case "RBNode":
            return _U.eq(t._0,
              Black) || _U.eq(t._0,BBlack);}
         _U.badCase($moduleName,
         "between lines 339 and 341");
      }();
   };
   var blacken = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return RBEmpty(LBlack);
            case "RBNode": return A5(RBNode,
              Black,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 378 and 380");
      }();
   };
   var Red = {ctor: "Red"};
   var moreBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack":
            return $Native$Debug.crash("Can\'t make a double black node more black!");
            case "Black": return BBlack;
            case "NBlack": return Red;
            case "Red": return Black;}
         _U.badCase($moduleName,
         "between lines 244 and 248");
      }();
   };
   var lessBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack": return Black;
            case "Black": return Red;
            case "NBlack":
            return $Native$Debug.crash("Can\'t make a negative black node less black!");
            case "Red": return NBlack;}
         _U.badCase($moduleName,
         "between lines 253 and 257");
      }();
   };
   var lessBlackTree = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              lessBlack(dict._0),
              dict._1,
              dict._2,
              dict._3,
              dict._4);}
         _U.badCase($moduleName,
         "between lines 262 and 264");
      }();
   };
   var redden = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("can\'t make a Leaf red");
            case "RBNode": return A5(RBNode,
              Red,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 386 and 388");
      }();
   };
   var balance_node = function (t) {
      return function () {
         var assemble = function (col) {
            return function (xk) {
               return function (xv) {
                  return function (yk) {
                     return function (yv) {
                        return function (zk) {
                           return function (zv) {
                              return function (a) {
                                 return function (b) {
                                    return function (c) {
                                       return function (d) {
                                          return A5(RBNode,
                                          lessBlack(col),
                                          yk,
                                          yv,
                                          A5(RBNode,Black,xk,xv,a,b),
                                          A5(RBNode,Black,zk,zv,c,d));
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
         return blackish(t) ? function () {
            switch (t.ctor)
            {case "RBNode":
               switch (t._3.ctor)
                 {case "RBNode":
                    switch (t._3._0.ctor)
                      {case "Red":
                         switch (t._3._3.ctor)
                           {case "RBNode":
                              switch (t._3._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4);}
                                break;}
                           switch (t._3._4.ctor)
                           {case "RBNode":
                              switch (t._3._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._4.ctor)
                 {case "RBNode":
                    switch (t._4._0.ctor)
                      {case "Red":
                         switch (t._4._3.ctor)
                           {case "RBNode":
                              switch (t._4._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4);}
                                break;}
                           switch (t._4._4.ctor)
                           {case "RBNode":
                              switch (t._4._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._0.ctor)
                 {case "BBlack":
                    switch (t._4.ctor)
                      {case "RBNode":
                         switch (t._4._0.ctor)
                           {case "NBlack":
                              switch (t._4._3.ctor)
                                {case "RBNode":
                                   switch (t._4._3._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._4._4.ctor)
                                             {case "RBNode":
                                                switch (t._4._4._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._4._3._1,
                                                       t._4._3._2,
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3,
                                                       t._4._3._3),
                                                       A5(balance,
                                                       Black,
                                                       t._4._1,
                                                       t._4._2,
                                                       t._4._3._4,
                                                       redden(t._4._4)));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      switch (t._3.ctor)
                      {case "RBNode":
                         switch (t._3._0.ctor)
                           {case "NBlack":
                              switch (t._3._4.ctor)
                                {case "RBNode":
                                   switch (t._3._4._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._3._3.ctor)
                                             {case "RBNode":
                                                switch (t._3._3._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._3._4._1,
                                                       t._3._4._2,
                                                       A5(balance,
                                                       Black,
                                                       t._3._1,
                                                       t._3._2,
                                                       redden(t._3._3),
                                                       t._3._4._3),
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3._4._4,
                                                       t._4));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      break;}
                 break;}
            return t;
         }() : t;
      }();
   };
   var balance = F5(function (c,
   k,
   v,
   l,
   r) {
      return balance_node(A5(RBNode,
      c,
      k,
      v,
      l,
      r));
   });
   var bubble = F5(function (c,
   k,
   v,
   l,
   r) {
      return isBBlack(l) || isBBlack(r) ? A5(balance,
      moreBlack(c),
      k,
      v,
      lessBlackTree(l),
      lessBlackTree(r)) : A5(RBNode,
      c,
      k,
      v,
      l,
      r);
   });
   var remove_max = F5(function (c,
   k,
   v,
   l,
   r) {
      return function () {
         switch (r.ctor)
         {case "RBEmpty": return A3(rem,
              c,
              l,
              r);
            case "RBNode": return A5(bubble,
              c,
              k,
              v,
              l,
              A5(remove_max,
              r._0,
              r._1,
              r._2,
              r._3,
              r._4));}
         _U.badCase($moduleName,
         "between lines 323 and 328");
      }();
   });
   var rem = F3(function (c,l,r) {
      return function () {
         var _v169 = {ctor: "_Tuple2"
                     ,_0: l
                     ,_1: r};
         switch (_v169.ctor)
         {case "_Tuple2":
            switch (_v169._0.ctor)
              {case "RBEmpty":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           switch (c.ctor)
                           {case "Black":
                              return RBEmpty(LBBlack);
                              case "Red":
                              return RBEmpty(LBlack);}
                           _U.badCase($moduleName,
                           "between lines 282 and 286");
                        }();
                      case "RBNode":
                      return function () {
                           var _v191 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v191.ctor)
                           {case "_Tuple3":
                              switch (_v191._0.ctor)
                                {case "Black":
                                   switch (_v191._1.ctor)
                                     {case "LBlack":
                                        switch (_v191._2.ctor)
                                          {case "Red": return A5(RBNode,
                                               Black,
                                               _v169._1._1,
                                               _v169._1._2,
                                               _v169._1._3,
                                               _v169._1._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/LBlack/Red",
                           c,
                           showLColor(_v169._0._0),
                           showNColor(_v169._1._0));
                        }();}
                   break;
                 case "RBNode":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           var _v195 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v195.ctor)
                           {case "_Tuple3":
                              switch (_v195._0.ctor)
                                {case "Black":
                                   switch (_v195._1.ctor)
                                     {case "Red":
                                        switch (_v195._2.ctor)
                                          {case "LBlack":
                                             return A5(RBNode,
                                               Black,
                                               _v169._0._1,
                                               _v169._0._2,
                                               _v169._0._3,
                                               _v169._0._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/Red/LBlack",
                           c,
                           showNColor(_v169._0._0),
                           showLColor(_v169._1._0));
                        }();
                      case "RBNode":
                      return function () {
                           var l$ = A5(remove_max,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var r = A5(RBNode,
                           _v169._1._0,
                           _v169._1._1,
                           _v169._1._2,
                           _v169._1._3,
                           _v169._1._4);
                           var l = A5(RBNode,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var $ = max(l),
                           k = $._0,
                           v = $._1;
                           return A5(bubble,c,k,v,l$,r);
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 280 and 309");
      }();
   });
   var update = F3(function (k,
   alter,
   dict) {
      return function () {
         var up = function (dict) {
            return function () {
               switch (dict.ctor)
               {case "RBEmpty":
                  switch (dict._0.ctor)
                    {case "LBlack":
                       return function () {
                            var _v206 = alter($Maybe.Nothing);
                            switch (_v206.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: Insert
                                      ,_1: A5(RBNode,
                                      Red,
                                      k,
                                      _v206._0,
                                      empty,
                                      empty)};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: Same
                                      ,_1: empty};}
                            _U.badCase($moduleName,
                            "between lines 194 and 198");
                         }();}
                    break;
                  case "RBNode":
                  return function () {
                       var _v208 = A2($Basics.compare,
                       k,
                       dict._1);
                       switch (_v208.ctor)
                       {case "EQ": return function () {
                               var _v209 = alter($Maybe.Just(dict._2));
                               switch (_v209.ctor)
                               {case "Just":
                                  return {ctor: "_Tuple2"
                                         ,_0: Same
                                         ,_1: A5(RBNode,
                                         dict._0,
                                         dict._1,
                                         _v209._0,
                                         dict._3,
                                         dict._4)};
                                  case "Nothing":
                                  return {ctor: "_Tuple2"
                                         ,_0: Remove
                                         ,_1: A3(rem,
                                         dict._0,
                                         dict._3,
                                         dict._4)};}
                               _U.badCase($moduleName,
                               "between lines 201 and 206");
                            }();
                          case "GT": return function () {
                               var $ = up(dict._4),
                               flag = $._0,
                               newRight = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};}
                                  _U.badCase($moduleName,
                                  "between lines 215 and 220");
                               }();
                            }();
                          case "LT": return function () {
                               var $ = up(dict._3),
                               flag = $._0,
                               newLeft = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};}
                                  _U.badCase($moduleName,
                                  "between lines 208 and 213");
                               }();
                            }();}
                       _U.badCase($moduleName,
                       "between lines 199 and 220");
                    }();}
               _U.badCase($moduleName,
               "between lines 192 and 220");
            }();
         };
         var $ = up(dict),
         flag = $._0,
         updatedDict = $._1;
         return function () {
            switch (flag.ctor)
            {case "Insert":
               return ensureBlackRoot(updatedDict);
               case "Remove":
               return blacken(updatedDict);
               case "Same":
               return updatedDict;}
            _U.badCase($moduleName,
            "between lines 222 and 225");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var singleton = F2(function (key,
   value) {
      return A3(insert,
      key,
      value,
      empty);
   });
   var union = F2(function (t1,
   t2) {
      return A3(foldl,
      insert,
      t2,
      t1);
   });
   var fromList = function (assocs) {
      return A3($List.foldl,
      F2(function (_v214,dict) {
         return function () {
            switch (_v214.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v214._0,
                 _v214._1,
                 dict);}
            _U.badCase($moduleName,
            "on line 466, column 38 to 59");
         }();
      }),
      empty,
      assocs);
   };
   var filter = F2(function (predicate,
   dictionary) {
      return function () {
         var add = F3(function (key,
         value,
         dict) {
            return A2(predicate,
            key,
            value) ? A3(insert,
            key,
            value,
            dict) : dict;
         });
         return A3(foldl,
         add,
         empty,
         dictionary);
      }();
   });
   var intersect = F2(function (t1,
   t2) {
      return A2(filter,
      F2(function (k,_v218) {
         return function () {
            return A2(member,k,t2);
         }();
      }),
      t1);
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v220) {
            return function () {
               switch (_v220.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v220._0)
                             ,_1: _v220._1} : {ctor: "_Tuple2"
                                              ,_0: _v220._0
                                              ,_1: A3(insert,
                                              key,
                                              value,
                                              _v220._1)};}
               _U.badCase($moduleName,
               "between lines 487 and 489");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var diff = F2(function (t1,t2) {
      return A3(foldl,
      F3(function (k,v,t) {
         return A2(remove,k,t);
      }),
      t1,
      t2);
   });
   _elm.Dict.values = {_op: _op
                      ,empty: empty
                      ,singleton: singleton
                      ,insert: insert
                      ,update: update
                      ,isEmpty: isEmpty
                      ,get: get
                      ,remove: remove
                      ,member: member
                      ,filter: filter
                      ,partition: partition
                      ,foldl: foldl
                      ,foldr: foldr
                      ,map: map
                      ,union: union
                      ,intersect: intersect
                      ,diff: diff
                      ,keys: keys
                      ,values: values
                      ,toList: toList
                      ,fromList: fromList};
   return _elm.Dict.values;
};
Elm.DraggableForm = Elm.DraggableForm || {};
Elm.DraggableForm.make = function (_elm) {
   "use strict";
   _elm.DraggableForm = _elm.DraggableForm || {};
   if (_elm.DraggableForm.values)
   return _elm.DraggableForm.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "DraggableForm",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var renderForm = function (draggableForm) {
      return function () {
         var $ = draggableForm.position,
         x = $._0,
         y = $._1;
         var $ = {ctor: "_Tuple2"
                 ,_0: $Basics.toFloat(x)
                 ,_1: $Basics.toFloat(y)},
         x$ = $._0,
         y$ = $._1;
         return A2($Graphics$Collage.move,
         {ctor: "_Tuple2",_0: x$,_1: y$},
         draggableForm.form);
      }();
   };
   var render = function (model) {
      return $List.reverse(A2($List.map,
      renderForm,
      model.forms));
   };
   var groupSort = F2(function (predicate,
   list) {
      return function (_v0) {
         return function () {
            switch (_v0.ctor)
            {case "_Tuple2":
               return A2($List.append,
                 _v0._0,
                 _v0._1);}
            _U.badCase($moduleName,
            "on line 173, column 20 to 35");
         }();
      }(A2($List.partition,
      predicate,
      list));
   });
   var moveForm = F2(function (position,
   form) {
      return _U.replace([["position"
                         ,position]],
      form);
   });
   var updateIf = F3(function (predicate,
   update,
   list) {
      return A2($List.map,
      function (i) {
         return predicate(i) ? update(i) : i;
      },
      list);
   });
   var first = F2(function (predicate,
   list) {
      return $List.head(A2($List.filter,
      predicate,
      list));
   });
   var update = F2(function (action,
   model) {
      return function () {
         switch (action.ctor)
         {case "ChangeSelection":
            return function () {
                 var selectedForm = A2(first,
                 function (f) {
                    return A2(f.isPointInside,
                    f.position,
                    action._0);
                 },
                 model.forms);
                 return function () {
                    switch (selectedForm.ctor)
                    {case "Just":
                       return _U.replace([["forms"
                                          ,A2(groupSort,
                                          function (f) {
                                             return _U.eq(f.id,
                                             selectedForm._0.id);
                                          },
                                          model.forms)]
                                         ,["selectedId"
                                          ,$Maybe.Just(selectedForm._0.id)]],
                         model);
                       case "Nothing": return model;}
                    _U.badCase($moduleName,
                    "between lines 143 and 151");
                 }();
              }();
            case "MoveSelected":
            return function () {
                 var _v9 = model.selectedId;
                 switch (_v9.ctor)
                 {case "Just":
                    return _U.replace([["forms"
                                       ,A3(updateIf,
                                       function (f) {
                                          return _U.eq(f.id,_v9._0);
                                       },
                                       moveForm(action._0),
                                       model.forms)]],
                      model);
                    case "Nothing": return model;}
                 _U.badCase($moduleName,
                 "between lines 133 and 140");
              }();
            case "UnselectAll":
            return _U.replace([["selectedId"
                               ,$Maybe.Nothing]],
              model);}
         _U.badCase($moduleName,
         "between lines 131 and 152");
      }();
   });
   var UnselectAll = {ctor: "UnselectAll"};
   var ChangeSelection = function (a) {
      return {ctor: "ChangeSelection"
             ,_0: a};
   };
   var MoveSelected = function (a) {
      return {ctor: "MoveSelected"
             ,_0: a};
   };
   var insideSquare = F3(function (sideLength,
   center,
   point) {
      return function () {
         var $ = point,
         x$ = $._0,
         y$ = $._1;
         var $ = center,
         x = $._0,
         y = $._1;
         return _U.cmp($Basics.toFloat($Basics.abs(x - x$)),
         sideLength / 2) < 0 && _U.cmp($Basics.toFloat($Basics.abs(y - y$)),
         sideLength / 2) < 0;
      }();
   });
   var createSquare = F4(function (color,
   sideLength,
   initialPosition,
   id) {
      return {_: {}
             ,form: A2($Graphics$Collage.filled,
             color,
             $Graphics$Collage.square(sideLength))
             ,id: id
             ,isPointInside: insideSquare(sideLength)
             ,position: initialPosition};
   });
   var distance = F2(function (_v11,
   _v12) {
      return function () {
         switch (_v12.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v11.ctor)
                 {case "_Tuple2":
                    return $Basics.sqrt($Basics.toFloat(Math.pow(_v11._0 - _v12._0,
                      2) + Math.pow(_v11._1 - _v12._1,
                      2)));}
                 _U.badCase($moduleName,
                 "between lines 77 and 79");
              }();}
         _U.badCase($moduleName,
         "between lines 77 and 79");
      }();
   });
   var insideCircle = F3(function (radius,
   center,
   point) {
      return _U.cmp(A2(distance,
      center,
      point),
      radius) < 0;
   });
   var createCircle = F4(function (color,
   radius,
   initialPosition,
   id) {
      return {_: {}
             ,form: A2($Graphics$Collage.filled,
             color,
             $Graphics$Collage.circle(radius))
             ,id: id
             ,isPointInside: insideCircle(radius)
             ,position: initialPosition};
   });
   var DraggableForm = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,form: a
             ,id: b
             ,isPointInside: c
             ,position: d};
   });
   var Model = F2(function (a,b) {
      return {_: {}
             ,forms: a
             ,selectedId: b};
   });
   _elm.DraggableForm.values = {_op: _op
                               ,render: render
                               ,update: update
                               ,createCircle: createCircle
                               ,createSquare: createSquare
                               ,Model: Model
                               ,DraggableForm: DraggableForm
                               ,MoveSelected: MoveSelected
                               ,ChangeSelection: ChangeSelection
                               ,UnselectAll: UnselectAll};
   return _elm.DraggableForm.values;
};
Elm.Effects = Elm.Effects || {};
Elm.Effects.make = function (_elm) {
   "use strict";
   _elm.Effects = _elm.Effects || {};
   if (_elm.Effects.values)
   return _elm.Effects.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Effects",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Effects = Elm.Native.Effects.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var ignore = function (task) {
      return A2($Task.andThen,
      task,
      $Basics.always($Task.succeed({ctor: "_Tuple0"})));
   };
   var sequence_ = function (tasks) {
      return ignore($Task.sequence(tasks));
   };
   var requestAnimationFrame = $Native$Effects.requestAnimationFrame;
   var toTaskHelp = F3(function (address,
   _v0,
   effect) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 switch (effect.ctor)
                 {case "Batch":
                    return function () {
                         var $ = $List.unzip(A2($List.map,
                         A2(toTaskHelp,address,_v0),
                         effect._0)),
                         tasks = $._0,
                         toMsgLists = $._1;
                         return {ctor: "_Tuple2"
                                ,_0: sequence_(tasks)
                                ,_1: $List.concat(toMsgLists)};
                      }();
                    case "None": return _v0;
                    case "Task":
                    return function () {
                         var reporter = A2($Task.andThen,
                         effect._0,
                         $Signal.send(address));
                         return {ctor: "_Tuple2"
                                ,_0: A2($Task.andThen,
                                _v0._0,
                                $Basics.always(ignore($Task.spawn(reporter))))
                                ,_1: _v0._1};
                      }();
                    case "Tick":
                    return {ctor: "_Tuple2"
                           ,_0: _v0._0
                           ,_1: A2($List._op["::"],
                           effect._0,
                           _v0._1)};}
                 _U.badCase($moduleName,
                 "between lines 184 and 209");
              }();}
         _U.badCase($moduleName,
         "between lines 184 and 209");
      }();
   });
   var toTask = F2(function (address,
   effect) {
      return function () {
         var $ = A3(toTaskHelp,
         address,
         {ctor: "_Tuple2"
         ,_0: $Task.succeed({ctor: "_Tuple0"})
         ,_1: _L.fromArray([])},
         effect),
         combinedTask = $._0,
         tickMessages = $._1;
         var animationReport = function (time) {
            return sequence_($List.map(function (f) {
               return A2($Signal.send,
               address,
               f(time));
            })(tickMessages));
         };
         var animationRequests = requestAnimationFrame(animationReport);
         return A2($Task.andThen,
         combinedTask,
         $Basics.always(animationRequests));
      }();
   });
   var Never = function (a) {
      return {ctor: "Never",_0: a};
   };
   var Batch = function (a) {
      return {ctor: "Batch",_0: a};
   };
   var batch = Batch;
   var None = {ctor: "None"};
   var none = None;
   var Tick = function (a) {
      return {ctor: "Tick",_0: a};
   };
   var tick = Tick;
   var Task = function (a) {
      return {ctor: "Task",_0: a};
   };
   var task = Task;
   var map = F2(function (func,
   effect) {
      return function () {
         switch (effect.ctor)
         {case "Batch":
            return Batch(A2($List.map,
              map(func),
              effect._0));
            case "None": return None;
            case "Task":
            return Task(A2($Task.map,
              func,
              effect._0));
            case "Tick":
            return Tick(function ($) {
                 return func(effect._0($));
              });}
         _U.badCase($moduleName,
         "between lines 136 and 147");
      }();
   });
   _elm.Effects.values = {_op: _op
                         ,none: none
                         ,task: task
                         ,tick: tick
                         ,map: map
                         ,batch: batch
                         ,toTask: toTask};
   return _elm.Effects.values;
};
Elm.EmailTexts = Elm.EmailTexts || {};
Elm.EmailTexts.make = function (_elm) {
   "use strict";
   _elm.EmailTexts = _elm.EmailTexts || {};
   if (_elm.EmailTexts.values)
   return _elm.EmailTexts.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "EmailTexts",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var br = A2($Html.br,
   _L.fromArray([]),
   _L.fromArray([]));
   var emailTexts = $Array.fromList(_L.fromArray([A2($Html.div,
                                                 _L.fromArray([]),
                                                 _L.fromArray([$Html.text("Dear Mrs. Lopez")
                                                              ,br
                                                              ,A2($Html.p,
                                                              _L.fromArray([]),
                                                              _L.fromArray([$Html.text(A2($Basics._op["++"],
                                                              "As per our conversation on the 5th, we here at Super are highly interested in moving into the Tri-cities region.",
                                                              A2($Basics._op["++"],
                                                              "We understand that there has been some, shall we say, regulatory difficulty among the esteemed members of the Tri-cities Municipal Transport ",
                                                              A2($Basics._op["++"],
                                                              "Committee. As a highly-respected member of the transit-management community, you\'ve been a valuable supporter of our efforts to revolutionize ",
                                                              "the world of municipal transport solutions. We know that we can count on you to... be persuasive in the upcoming MTC public meeting."))))]))
                                                              ,br
                                                              ,$Html.text("With gratitude,")
                                                              ,br
                                                              ,$Html.text("Thaddeus Klabbernick")
                                                              ,br
                                                              ,$Html.text("Chief Executive Officer, Super Inc.")]))
                                                 ,A2($Html.div,
                                                 _L.fromArray([]),
                                                 _L.fromArray([$Html.text("Dear Mrs. Lopez")
                                                              ,br
                                                              ,A2($Html.p,
                                                              _L.fromArray([]),
                                                              _L.fromArray([$Html.text("Excellent work so far. Demands for Uber have risen significantly in the Triangulon neighborhood after yesterday\'s bus route redesign. We knew we could count on you. Now, let\'s move on some more-trafficked downtown areas.")]))
                                                              ,br
                                                              ,$Html.text("Thaddeus Klabbernick")
                                                              ,br
                                                              ,$Html.text("Chief Executive Officer, Super Inc.")]))
                                                 ,A2($Html.div,
                                                 _L.fromArray([]),
                                                 _L.fromArray([$Html.text("Dear Mrs. Lopez")
                                                              ,br
                                                              ,A2($Html.p,
                                                              _L.fromArray([]),
                                                              _L.fromArray([$Html.text("Well, that wasn\'t so bad. Let\'s move on to the Eastern Sprawl area. Public transit is already a nightmare here - there\'s only one bus for the whole area. But let\'s see if we can make it more of a nightmare, eh?")]))
                                                              ,br
                                                              ,$Html.text("Thaddeus Klabbernick")
                                                              ,br
                                                              ,$Html.text("Chief Executive Officer, Super Inc.")]))
                                                 ,A2($Html.div,
                                                 _L.fromArray([]),
                                                 _L.fromArray([$Html.text("[The End]")
                                                              ,br
                                                              ,A2($Html.p,
                                                              _L.fromArray([]),
                                                              _L.fromArray([$Html.text("We really wish we had the time and energy to turn this into a full game. Alas.")]))
                                                              ,br
                                                              ,$Html.text("- Alex, Greg, and Tikhon")]))]));
   _elm.EmailTexts.values = {_op: _op
                            ,br: br
                            ,emailTexts: emailTexts};
   return _elm.EmailTexts.values;
};
Elm.Focus = Elm.Focus || {};
Elm.Focus.make = function (_elm) {
   "use strict";
   _elm.Focus = _elm.Focus || {};
   if (_elm.Focus.values)
   return _elm.Focus.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Focus",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   _op["=>"] = F2(function (largerFocus,
   smallerFocus) {
      return {_: {}
             ,get: function (big) {
                return smallerFocus.get(largerFocus.get(big));
             }
             ,update: F2(function (f,big) {
                return A2(largerFocus.update,
                smallerFocus.update(f),
                big);
             })};
   });
   var update = F3(function (focus,
   f,
   big) {
      return A2(focus.update,
      f,
      big);
   });
   var set = F3(function (focus,
   small,
   big) {
      return A2(focus.update,
      $Basics.always(small),
      big);
   });
   var get = F2(function (focus,
   big) {
      return focus.get(big);
   });
   var create = F2(function (get,
   update) {
      return {_: {}
             ,get: get
             ,update: update};
   });
   var Focus = F2(function (a,b) {
      return {_: {}
             ,get: a
             ,update: b};
   });
   _elm.Focus.values = {_op: _op
                       ,get: get
                       ,set: set
                       ,update: update
                       ,create: create
                       ,Focus: Focus};
   return _elm.Focus.values;
};
Elm.GameScreens = Elm.GameScreens || {};
Elm.GameScreens.make = function (_elm) {
   "use strict";
   _elm.GameScreens = _elm.GameScreens || {};
   if (_elm.GameScreens.values)
   return _elm.GameScreens.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "GameScreens",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Levels = Elm.Levels.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Types = Elm.Types.make(_elm);
   var levelParamsList = $Array.fromList(_L.fromArray([{_: {}
                                                       ,changeLimit: 1
                                                       ,coordScalingFactor: 50
                                                       ,globalTransform: {ctor: "_Tuple2"
                                                                         ,_0: -200.0
                                                                         ,_1: -100.0}
                                                       ,level: $Levels.lvl1
                                                       ,scalingFactor: 0.9
                                                       ,stopToNodeMapping: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                                                                        ,_0: "A"
                                                                                                        ,_1: 1}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "B"
                                                                                                        ,_1: 3}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "C"
                                                                                                        ,_1: 5}]))
                                                       ,stops: _L.fromArray(["A"
                                                                            ,"B"
                                                                            ,"C"])
                                                       ,trackedMetrics: _L.fromArray([{_: {}
                                                                                      ,displayName: "Bus Speed"
                                                                                      ,isBadWhen: function (m) {
                                                                                         return _U.cmp(m,
                                                                                         4.2e-2) < 0;
                                                                                      }
                                                                                      ,max: 4.8e-2
                                                                                      ,metricName: "avgBusSpeed"
                                                                                      ,min: 4.0e-2}
                                                                                     ,{_: {}
                                                                                      ,displayName: "Avg Waiting Passengers"
                                                                                      ,isBadWhen: function (m) {
                                                                                         return _U.cmp(m,
                                                                                         15) > 0;
                                                                                      }
                                                                                      ,max: 20
                                                                                      ,metricName: "avgWaiting"
                                                                                      ,min: 10}])}
                                                      ,{_: {}
                                                       ,changeLimit: 1
                                                       ,coordScalingFactor: 50
                                                       ,globalTransform: {ctor: "_Tuple2"
                                                                         ,_0: -200.0
                                                                         ,_1: -100.0}
                                                       ,level: $Levels.lvl2
                                                       ,scalingFactor: 0.9
                                                       ,stopToNodeMapping: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                                                                        ,_0: "A"
                                                                                                        ,_1: 7}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "B"
                                                                                                        ,_1: 3}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "C"
                                                                                                        ,_1: 1}]))
                                                       ,stops: _L.fromArray(["A"
                                                                            ,"B"
                                                                            ,"C"])
                                                       ,trackedMetrics: _L.fromArray([{_: {}
                                                                                      ,displayName: "Avg Waiting Passengers"
                                                                                      ,isBadWhen: function (m) {
                                                                                         return _U.cmp(m,
                                                                                         70) > 0;
                                                                                      }
                                                                                      ,max: 90
                                                                                      ,metricName: "avgWaiting"
                                                                                      ,min: 30}])}
                                                      ,{_: {}
                                                       ,changeLimit: 1
                                                       ,coordScalingFactor: 0.3
                                                       ,globalTransform: {ctor: "_Tuple2"
                                                                         ,_0: 0
                                                                         ,_1: 120.0}
                                                       ,level: $Levels.lvl3
                                                       ,scalingFactor: 0.8
                                                       ,stopToNodeMapping: $Dict.fromList(_L.fromArray([{ctor: "_Tuple2"
                                                                                                        ,_0: "A"
                                                                                                        ,_1: 8}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "B"
                                                                                                        ,_1: 16}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "C"
                                                                                                        ,_1: 25}
                                                                                                       ,{ctor: "_Tuple2"
                                                                                                        ,_0: "D"
                                                                                                        ,_1: 18}]))
                                                       ,stops: _L.fromArray(["A"
                                                                            ,"B"
                                                                            ,"C"
                                                                            ,"D"])
                                                       ,trackedMetrics: _L.fromArray([{_: {}
                                                                                      ,displayName: "Avg Waiting Passengers"
                                                                                      ,isBadWhen: function (m) {
                                                                                         return _U.cmp(m,
                                                                                         143) > 0;
                                                                                      }
                                                                                      ,max: 150
                                                                                      ,metricName: "avgWaiting"
                                                                                      ,min: 100}])}]));
   var LevelParams = F8(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h) {
      return {_: {}
             ,changeLimit: b
             ,coordScalingFactor: g
             ,globalTransform: h
             ,level: a
             ,scalingFactor: f
             ,stopToNodeMapping: d
             ,stops: c
             ,trackedMetrics: e};
   });
   var Level = function (a) {
      return {ctor: "Level",_0: a};
   };
   var Message = function (a) {
      return {ctor: "Message"
             ,_0: a};
   };
   var gameScreens = _L.fromArray([{ctor: "_Tuple2"
                                   ,_0: Message(0)
                                   ,_1: "Email"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Level(0)
                                   ,_1: "Monday Morning MTA Madness"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Message(1)
                                   ,_1: "Email"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Level(1)
                                   ,_1: "Rush Hour"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Message(2)
                                   ,_1: "Email"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Level(2)
                                   ,_1: "A Big Big Map"}
                                  ,{ctor: "_Tuple2"
                                   ,_0: Message(3)
                                   ,_1: "The End"}]);
   _elm.GameScreens.values = {_op: _op
                             ,Message: Message
                             ,Level: Level
                             ,LevelParams: LevelParams
                             ,levelParamsList: levelParamsList
                             ,gameScreens: gameScreens};
   return _elm.GameScreens.values;
};
Elm.Graph = Elm.Graph || {};
Elm.Graph.make = function (_elm) {
   "use strict";
   _elm.Graph = _elm.Graph || {};
   if (_elm.Graph.values)
   return _elm.Graph.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graph",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Focus = Elm.Focus.make(_elm),
   $Graph$Tree = Elm.Graph.Tree.make(_elm),
   $IntDict = Elm.IntDict.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Queue = Elm.Queue.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var ignorePath = F4(function (visit,
   path,
   _v0,
   acc) {
      return function () {
         return function () {
            switch (path.ctor)
            {case "::": return A2(visit,
                 path._0,
                 acc);
               case "[]":
               return $Debug.crash("Graph.ignorePath: No algorithm should ever pass an empty path into this BfsNodeVisitor.");}
            _U.badCase($moduleName,
            "between lines 990 and 994");
         }();
      }();
   });
   var onFinish = F3(function (visitor,
   ctx,
   acc) {
      return {ctor: "_Tuple2"
             ,_0: acc
             ,_1: visitor(ctx)};
   });
   var onDiscovery = F3(function (visitor,
   ctx,
   acc) {
      return {ctor: "_Tuple2"
             ,_0: A2(visitor,ctx,acc)
             ,_1: $Basics.identity};
   });
   var alongIncomingEdges = function (ctx) {
      return $IntDict.keys(ctx.incoming);
   };
   var alongOutgoingEdges = function (ctx) {
      return $IntDict.keys(ctx.outgoing);
   };
   var lookup = function (nodeId) {
      return A2($Focus.create,
      $IntDict.get(nodeId),
      $IntDict.update(nodeId));
   };
   var outgoing = A2($Focus.create,
   function (_) {
      return _.outgoing;
   },
   F2(function (update,record) {
      return _U.replace([["outgoing"
                         ,update(record.outgoing)]],
      record);
   }));
   var incoming = A2($Focus.create,
   function (_) {
      return _.incoming;
   },
   F2(function (update,record) {
      return _U.replace([["incoming"
                         ,update(record.incoming)]],
      record);
   }));
   var node = A2($Focus.create,
   function (_) {
      return _.node;
   },
   F2(function (update,record) {
      return _U.replace([["node"
                         ,update(record.node)]],
      record);
   }));
   var to = A2($Focus.create,
   function (_) {
      return _.to;
   },
   F2(function (update,record) {
      return _U.replace([["to"
                         ,update(record.to)]],
      record);
   }));
   var from = A2($Focus.create,
   function (_) {
      return _.from;
   },
   F2(function (update,record) {
      return _U.replace([["from"
                         ,update(record.from)]],
      record);
   }));
   var label = A2($Focus.create,
   function (_) {
      return _.label;
   },
   F2(function (update,record) {
      return _U.replace([["label"
                         ,update(record.label)]],
      record);
   }));
   var id = A2($Focus.create,
   function (_) {
      return _.id;
   },
   F2(function (update,record) {
      return _U.replace([["id"
                         ,update(record.id)]],
      record);
   }));
   var applyEdgeDiff = F3(function (nodeId,
   diff,
   graphRep) {
      return function () {
         var edgeUpdateToMaybe = function (edgeUpdate) {
            return function () {
               switch (edgeUpdate.ctor)
               {case "Insert":
                  return $Maybe.Just(edgeUpdate._0);
                  case "Remove":
                  return $Maybe.Nothing;}
               _U.badCase($moduleName,
               "between lines 240 and 244");
            }();
         };
         var updateAdjacency = F3(function (edgeFocus,
         updatedId,
         edgeUpdate) {
            return function () {
               var updateLbl = A2($Focus.set,
               edgeFocus,
               edgeUpdateToMaybe(edgeUpdate));
               return A2($IntDict.update,
               updatedId,
               $Maybe.map(updateLbl));
            }();
         });
         var foldl$ = F3(function (f,
         dict,
         acc) {
            return A3($IntDict.foldl,
            f,
            acc,
            dict);
         });
         return A2(foldl$,
         updateAdjacency(A2($Focus._op["=>"],
         outgoing,
         lookup(nodeId))),
         diff.outgoing)(A2(foldl$,
         updateAdjacency(A2($Focus._op["=>"],
         incoming,
         lookup(nodeId))),
         diff.incoming)(graphRep));
      }();
   });
   var emptyDiff = {_: {}
                   ,incoming: $IntDict.empty
                   ,outgoing: $IntDict.empty};
   var EdgeDiff = F2(function (a,
   b) {
      return {_: {}
             ,incoming: a
             ,outgoing: b};
   });
   var Remove = function (a) {
      return {ctor: "Remove"
             ,_0: a};
   };
   var Insert = function (a) {
      return {ctor: "Insert"
             ,_0: a};
   };
   var computeEdgeDiff = F2(function (old,
   $new) {
      return function () {
         var collectUpdates = F3(function (edgeUpdate,
         updatedId,
         label) {
            return function () {
               var replaceUpdate = function (old) {
                  return function () {
                     var _v8 = {ctor: "_Tuple2"
                               ,_0: old
                               ,_1: edgeUpdate(label)};
                     switch (_v8.ctor)
                     {case "_Tuple2":
                        switch (_v8._0.ctor)
                          {case "Just":
                             switch (_v8._0._0.ctor)
                               {case "Insert":
                                  return $Debug.crash("Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!");
                                  case "Remove":
                                  switch (_v8._1.ctor)
                                    {case "Insert":
                                       return $Maybe.Nothing;
                                       case "Remove":
                                       return $Debug.crash("Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!");}
                                    break;}
                               break;
                             case "Nothing":
                             return $Maybe.Just(_v8._1);}
                          break;}
                     _U.badCase($moduleName,
                     "between lines 196 and 207");
                  }();
               };
               return A2($IntDict.update,
               updatedId,
               replaceUpdate);
            }();
         });
         var collect = F3(function (edgeUpdate,
         adj,
         updates) {
            return A3($IntDict.foldl,
            collectUpdates(edgeUpdate),
            updates,
            adj);
         });
         return function () {
            var _v16 = {ctor: "_Tuple2"
                       ,_0: old
                       ,_1: $new};
            switch (_v16.ctor)
            {case "_Tuple2":
               switch (_v16._0.ctor)
                 {case "Just":
                    switch (_v16._1.ctor)
                      {case "Just":
                         return _U.eq(_v16._0._0,
                           _v16._1._0) ? emptyDiff : {_: {}
                                                     ,incoming: A2(collect,
                                                     Insert,
                                                     _v16._1._0.outgoing)(A2(collect,
                                                     Remove,
                                                     _v16._0._0.outgoing)($IntDict.empty))
                                                     ,outgoing: A2(collect,
                                                     Insert,
                                                     _v16._1._0.incoming)(A2(collect,
                                                     Remove,
                                                     _v16._0._0.incoming)($IntDict.empty))};
                         case "Nothing": return {_: {}
                                                ,incoming: A2(collect,
                                                Remove,
                                                _v16._0._0.outgoing)($IntDict.empty)
                                                ,outgoing: A2(collect,
                                                Remove,
                                                _v16._0._0.incoming)($IntDict.empty)};}
                      break;
                    case "Nothing":
                    switch (_v16._1.ctor)
                      {case "Just": return {_: {}
                                           ,incoming: A2(collect,
                                           Insert,
                                           _v16._1._0.outgoing)($IntDict.empty)
                                           ,outgoing: A2(collect,
                                           Insert,
                                           _v16._1._0.incoming)($IntDict.empty)};
                         case "Nothing":
                         return emptyDiff;}
                      break;}
                 break;}
            _U.badCase($moduleName,
            "between lines 213 and 230");
         }();
      }();
   });
   var unGraph = function (graph) {
      return function () {
         switch (graph.ctor)
         {case "Graph": return graph._0;}
         _U.badCase($moduleName,
         "between lines 158 and 161");
      }();
   };
   var edges = function (graph) {
      return function () {
         var foldl$ = F3(function (f,
         dict,
         list) {
            return A3($IntDict.foldl,
            f,
            list,
            dict);
         });
         var prependEdges = F2(function (node1,
         ctx) {
            return A2(foldl$,
            F2(function (node2,e) {
               return F2(function (x,y) {
                  return A2($List._op["::"],
                  x,
                  y);
               })({_: {}
                  ,from: node1
                  ,label: e
                  ,to: node2});
            }),
            ctx.outgoing);
         });
         return A3(foldl$,
         prependEdges,
         unGraph(graph),
         _L.fromArray([]));
      }();
   };
   var Graph = function (a) {
      return {ctor: "Graph",_0: a};
   };
   var empty = Graph($IntDict.empty);
   var isEmpty = function (graph) {
      return _U.eq(graph,empty);
   };
   var graphRep = A2($Focus.create,
   unGraph,
   function (update) {
      return function ($) {
         return Graph(update(unGraph($)));
      };
   });
   var update = F2(function (nodeId,
   updater) {
      return function () {
         var updater$ = function (rep) {
            return function () {
               var filterInvalidEdges = function (ctx) {
                  return $IntDict.filter(F2(function (id,
                  _v24) {
                     return function () {
                        return _U.eq(id,
                        ctx.node.id) || A2($IntDict.member,
                        id,
                        rep);
                     }();
                  }));
               };
               var cleanUpEdges = function (ctx) {
                  return A2($Focus.update,
                  outgoing,
                  filterInvalidEdges(ctx))(A2($Focus.update,
                  incoming,
                  filterInvalidEdges(ctx))(ctx));
               };
               var old = A2($IntDict.get,
               nodeId,
               rep);
               var $new = $Maybe.map(cleanUpEdges)(updater(old));
               var diff = A2(computeEdgeDiff,
               old,
               $new);
               return A2($IntDict.update,
               nodeId,
               $Basics.always($new))(A2(applyEdgeDiff,
               nodeId,
               diff)(rep));
            }();
         };
         return A2($Focus.update,
         graphRep,
         updater$);
      }();
   });
   var insert = F2(function (nodeContext,
   graph) {
      return A3(update,
      nodeContext.node.id,
      $Basics.always($Maybe.Just(nodeContext)),
      graph);
   });
   var remove = F2(function (nodeId,
   graph) {
      return A3(update,
      nodeId,
      $Basics.always($Maybe.Nothing),
      graph);
   });
   var size = function ($) {
      return $IntDict.size($Focus.get(graphRep)($));
   };
   var member = function (nodeId) {
      return function ($) {
         return $IntDict.member(nodeId)($Focus.get(graphRep)($));
      };
   };
   var get = function (nodeId) {
      return $Focus.get(A2($Focus._op["=>"],
      graphRep,
      lookup(nodeId)));
   };
   var inducedSubgraph = F2(function (nodeIds,
   graph) {
      return function () {
         var insertContextById = F2(function (nodeId,
         acc) {
            return function () {
               var _v26 = A2(get,
               nodeId,
               graph);
               switch (_v26.ctor)
               {case "Just": return A2(insert,
                    _v26._0,
                    acc);
                  case "Nothing": return acc;}
               _U.badCase($moduleName,
               "between lines 349 and 354");
            }();
         });
         return A3($List.foldl,
         insertContextById,
         empty,
         nodeIds);
      }();
   });
   var nodeById = function (nodeId) {
      return A2($Focus.create,
      get(nodeId),
      update(nodeId));
   };
   var guidedDfs = F5(function (selectNeighbors,
   visitNode,
   seeds,
   acc,
   graph) {
      return function () {
         var go = F3(function (seeds,
         acc,
         graph) {
            return function () {
               switch (seeds.ctor)
               {case "::": return function () {
                       var _v31 = A2(get,
                       seeds._0,
                       graph);
                       switch (_v31.ctor)
                       {case "Just":
                          return function () {
                               var $ = A2(visitNode,
                               _v31._0,
                               acc),
                               accAfterDiscovery = $._0,
                               finishNode = $._1;
                               var $ = A3(go,
                               selectNeighbors(_v31._0),
                               accAfterDiscovery,
                               A2(remove,seeds._0,graph)),
                               accBeforeFinish = $._0,
                               graph$ = $._1;
                               var accAfterFinish = finishNode(accBeforeFinish);
                               return A3(go,
                               seeds._1,
                               accAfterFinish,
                               graph$);
                            }();
                          case "Nothing": return A3(go,
                            seeds._1,
                            acc,
                            graph);}
                       _U.badCase($moduleName,
                       "between lines 894 and 912");
                    }();
                  case "[]":
                  return {ctor: "_Tuple2"
                         ,_0: acc
                         ,_1: graph};}
               _U.badCase($moduleName,
               "between lines 890 and 912");
            }();
         });
         return A3(go,seeds,acc,graph);
      }();
   });
   var dfsForest = F2(function (seeds,
   graph) {
      return function () {
         var visitNode = F2(function (ctx,
         trees) {
            return {ctor: "_Tuple2"
                   ,_0: _L.fromArray([])
                   ,_1: function (children) {
                      return A2($List._op["::"],
                      A2($Graph$Tree.inner,
                      ctx,
                      children),
                      trees);
                   }};
         });
         return $List.reverse($Basics.fst(A5(guidedDfs,
         alongOutgoingEdges,
         visitNode,
         seeds,
         _L.fromArray([]),
         graph)));
      }();
   });
   var dfsTree = F2(function (seed,
   graph) {
      return function () {
         var _v33 = A2(dfsForest,
         _L.fromArray([seed]),
         graph);
         switch (_v33.ctor)
         {case "::":
            switch (_v33._1.ctor)
              {case "[]": return _v33._0;}
              break;
            case "[]":
            return $Graph$Tree.empty;}
         return $Debug.crash("dfsTree: There can\'t be more than one DFS tree. This invariant is violated, please report this bug.");
      }();
   });
   var guidedBfs = F5(function (selectNeighbors,
   visitNode,
   seeds,
   acc,
   graph) {
      return function () {
         var enqueueMany = F4(function (distance,
         parentPath,
         nodeIds,
         queue) {
            return A2($List.foldl,
            $Queue.push,
            queue)($List.map(function (id) {
               return {ctor: "_Tuple3"
                      ,_0: id
                      ,_1: parentPath
                      ,_2: distance};
            })(nodeIds));
         });
         var go = F3(function (seeds,
         acc,
         graph) {
            return function () {
               var _v36 = $Queue.pop(seeds);
               switch (_v36.ctor)
               {case "Just":
                  switch (_v36._0.ctor)
                    {case "_Tuple2":
                       switch (_v36._0._0.ctor)
                         {case "_Tuple3":
                            return function () {
                                 var _v43 = A2(get,
                                 _v36._0._0._0,
                                 graph);
                                 switch (_v43.ctor)
                                 {case "Just":
                                    return function () {
                                         var path = A2($List._op["::"],
                                         _v43._0,
                                         _v36._0._0._1);
                                         var acc$ = A3(visitNode,
                                         path,
                                         _v36._0._0._2,
                                         acc);
                                         var seeds$$ = A4(enqueueMany,
                                         _v36._0._0._2 + 1,
                                         path,
                                         selectNeighbors(_v43._0),
                                         _v36._0._1);
                                         return A3(go,
                                         seeds$$,
                                         acc$,
                                         A2(remove,_v36._0._0._0,graph));
                                      }();
                                    case "Nothing": return A3(go,
                                      _v36._0._1,
                                      acc,
                                      graph);}
                                 _U.badCase($moduleName,
                                 "between lines 1030 and 1048");
                              }();}
                         break;}
                    break;
                  case "Nothing":
                  return {ctor: "_Tuple2"
                         ,_0: acc
                         ,_1: graph};}
               _U.badCase($moduleName,
               "between lines 1026 and 1048");
            }();
         });
         return A3(go,
         A4(enqueueMany,
         0,
         _L.fromArray([]),
         seeds,
         $Queue.empty),
         acc,
         graph);
      }();
   });
   var nodeIdRange = function (graph) {
      return function () {
         var rep = A2($Focus.get,
         graphRep,
         graph);
         return A2($Maybe.andThen,
         $IntDict.findMin(rep),
         function (_v45) {
            return function () {
               switch (_v45.ctor)
               {case "_Tuple2":
                  return A2($Maybe.andThen,
                    $IntDict.findMax(rep),
                    function (_v49) {
                       return function () {
                          switch (_v49.ctor)
                          {case "_Tuple2":
                             return $Maybe.Just({ctor: "_Tuple2"
                                                ,_0: _v45._0
                                                ,_1: _v49._0});}
                          _U.badCase($moduleName,
                          "on line 426, column 5 to 19");
                       }();
                    });}
               _U.badCase($moduleName,
               "between lines 425 and 426");
            }();
         });
      }();
   };
   var fold = F3(function (f,
   acc,
   graph) {
      return function () {
         var go = F2(function (acc,
         graph$) {
            return function () {
               var maybeContext = A2($Basics.flip,
               $Maybe.andThen,
               function (id) {
                  return A2(get,id,graph);
               })($Maybe.map($Basics.fst)(nodeIdRange(graph$)));
               return function () {
                  switch (maybeContext.ctor)
                  {case "Just": return A2(go,
                       A2(f,maybeContext._0,acc),
                       A2(remove,
                       maybeContext._0.node.id,
                       graph$));
                     case "Nothing": return acc;}
                  _U.badCase($moduleName,
                  "between lines 665 and 670");
               }();
            }();
         });
         return A2(go,acc,graph);
      }();
   });
   var mapContexts = function (f) {
      return A2(fold,
      function (ctx) {
         return insert(f(ctx));
      },
      empty);
   };
   var mapNodes = function (f) {
      return A2(fold,
      function (ctx) {
         return insert(_U.replace([["node"
                                   ,{_: {}
                                    ,id: ctx.node.id
                                    ,label: f(ctx.node.label)}]],
         ctx));
      },
      empty);
   };
   var mapEdges = function (f) {
      return A2(fold,
      function (ctx) {
         return insert(_U.replace([["outgoing"
                                   ,A2($IntDict.map,
                                   F2(function (n,e) {
                                      return f(e);
                                   }),
                                   ctx.outgoing)]
                                  ,["incoming"
                                   ,A2($IntDict.map,
                                   F2(function (n,e) {
                                      return f(e);
                                   }),
                                   ctx.incoming)]],
         ctx));
      },
      empty);
   };
   var heightLevels = function (graph) {
      return function () {
         var subtract = F2(function (a,
         b) {
            return b - a;
         });
         var decrementAndNoteSources = F3(function (id,
         _v55,
         _v56) {
            return function () {
               switch (_v56.ctor)
               {case "_Tuple2":
                  return function () {
                       return function () {
                          var indegrees$ = A3($IntDict.update,
                          id,
                          $Maybe.map(subtract(1)),
                          _v56._1);
                          return function () {
                             var _v61 = A2($IntDict.get,
                             id,
                             indegrees$);
                             switch (_v61.ctor)
                             {case "Just": switch (_v61._0)
                                  {case 0: return function () {
                                          var _v63 = A2(get,id,graph);
                                          switch (_v63.ctor)
                                          {case "Just":
                                             return {ctor: "_Tuple2"
                                                    ,_0: A2($List._op["::"],
                                                    _v63._0,
                                                    _v56._0)
                                                    ,_1: indegrees$};
                                             case "Nothing":
                                             return $Debug.crash("Graph.heightLevels: Could not get a node of a graph which should be there by invariants. Please file a bug report!");}
                                          _U.badCase($moduleName,
                                          "between lines 1115 and 1118");
                                       }();}
                                  break;}
                             return {ctor: "_Tuple2"
                                    ,_0: _v56._0
                                    ,_1: indegrees$};
                          }();
                       }();
                    }();}
               _U.badCase($moduleName,
               "between lines 1110 and 1121");
            }();
         });
         var decrementIndegrees = F3(function (source,
         nextLevel,
         indegrees) {
            return A3($IntDict.foldl,
            decrementAndNoteSources,
            {ctor: "_Tuple2"
            ,_0: nextLevel
            ,_1: indegrees},
            source.outgoing);
         });
         var go = F4(function (currentLevel,
         nextLevel,
         indegrees,
         graph) {
            return function () {
               var _v65 = {ctor: "_Tuple2"
                          ,_0: currentLevel
                          ,_1: nextLevel};
               switch (_v65.ctor)
               {case "_Tuple2":
                  switch (_v65._0.ctor)
                    {case "::": return function () {
                            var $ = A3(decrementIndegrees,
                            _v65._0._0,
                            nextLevel,
                            indegrees),
                            nextLevel$ = $._0,
                            indegrees$ = $._1;
                            return function () {
                               var _v70 = A4(go,
                               _v65._0._1,
                               nextLevel$,
                               indegrees$,
                               A2(remove,
                               _v65._0._0.node.id,
                               graph));
                               switch (_v70.ctor)
                               {case "::":
                                  return A2($List._op["::"],
                                    A2($List._op["::"],
                                    _v65._0._0,
                                    _v70._0),
                                    _v70._1);
                                  case "[]":
                                  return $Debug.crash("Graph.heightLevels: Reached a branch which is impossible by invariants. Please file a bug report!");}
                               _U.badCase($moduleName,
                               "between lines 1134 and 1139");
                            }();
                         }();
                       case "[]": switch (_v65._1.ctor)
                         {case "[]":
                            return _L.fromArray([_L.fromArray([])]);}
                         return A2($List._op["::"],
                         _L.fromArray([]),
                         A4(go,
                         nextLevel,
                         _L.fromArray([]),
                         indegrees,
                         graph));}
                    break;}
               _U.badCase($moduleName,
               "between lines 1125 and 1139");
            }();
         });
         var countIndegrees = A2(fold,
         function (ctx) {
            return A2($IntDict.insert,
            ctx.node.id,
            $IntDict.size(ctx.incoming));
         },
         $IntDict.empty);
         var sources = A3(fold,
         F2(function (ctx,acc) {
            return $IntDict.isEmpty(ctx.incoming) ? A2($List._op["::"],
            ctx,
            acc) : acc;
         }),
         _L.fromArray([]),
         graph);
         return A4(go,
         sources,
         _L.fromArray([]),
         countIndegrees(graph),
         graph);
      }();
   };
   var nodes = function ($) {
      return $List.map(function (_) {
         return _.node;
      })($IntDict.values($Focus.get(graphRep)($)));
   };
   var toString$ = function (graph) {
      return function () {
         var edgeList = edges(graph);
         var nodeList = nodes(graph);
         return A2($Basics._op["++"],
         "Graph.fromNodesAndEdges ",
         A2($Basics._op["++"],
         $Basics.toString(nodeList),
         A2($Basics._op["++"],
         " ",
         $Basics.toString(edgeList))));
      }();
   };
   var nodeIds = function ($) {
      return $IntDict.keys($Focus.get(graphRep)($));
   };
   var dfs = F3(function (visitNode,
   acc,
   graph) {
      return $Basics.fst(A5(guidedDfs,
      alongOutgoingEdges,
      visitNode,
      nodeIds(graph),
      acc,
      graph));
   });
   var bfs = F3(function (visitNode,
   acc,
   graph) {
      return function () {
         var $ = A5(guidedBfs,
         alongOutgoingEdges,
         visitNode,
         nodeIds(graph),
         acc,
         graph),
         acc$ = $._0,
         restGraph$ = $._1;
         return function () {
            var _v73 = nodeIdRange(graph);
            switch (_v73.ctor)
            {case "Just":
               switch (_v73._0.ctor)
                 {case "_Tuple2":
                    return function () {
                         var $ = A5(guidedBfs,
                         alongOutgoingEdges,
                         visitNode,
                         _L.fromArray([_v73._0._0]),
                         acc,
                         graph),
                         acc$ = $._0,
                         restGraph$ = $._1;
                         return A3(bfs,
                         visitNode,
                         acc$,
                         restGraph$);
                      }();}
                 break;
               case "Nothing": return acc;}
            _U.badCase($moduleName,
            "between lines 1063 and 1071");
         }();
      }();
   });
   var topologicalSort = function (graph) {
      return $List.concatMap($Graph$Tree.preOrderList)($List.reverse(dfsForest(nodeIds(graph))(graph)));
   };
   var anyNode = function () {
      var getMinId = function ($) {
         return $Maybe.map($Basics.fst)($IntDict.findMin($Focus.get(graphRep)($)));
      };
      var get = function (graph) {
         return A2($Maybe.andThen,
         getMinId(graph),
         function (id) {
            return A2($Focus.get,
            nodeById(id),
            graph);
         });
      };
      var update = F2(function (upd,
      graph) {
         return function () {
            var nodeId = A2($Maybe.withDefault,
            0,
            getMinId(graph));
            return A3($Focus.update,
            nodeById(nodeId),
            upd,
            graph);
         }();
      });
      return A2($Focus.create,
      get,
      update);
   }();
   var symmetricClosure = function (edgeMerger) {
      return function () {
         var orderedEdgeMerger = F4(function (from,
         to,
         outgoing,
         incoming) {
            return _U.cmp(from,
            to) < 1 ? A4(edgeMerger,
            from,
            to,
            outgoing,
            incoming) : A4(edgeMerger,
            to,
            from,
            incoming,
            outgoing);
         });
         var updateContext = F2(function (nodeId,
         ctx) {
            return function () {
               var edges = A3($IntDict.uniteWith,
               orderedEdgeMerger(nodeId),
               ctx.outgoing,
               ctx.incoming);
               return _U.replace([["outgoing"
                                  ,edges]
                                 ,["incoming",edges]],
               ctx);
            }();
         });
         return A2($Focus.update,
         graphRep,
         $IntDict.map(updateContext));
      }();
   };
   var reverseEdges = function () {
      var updateContext = F2(function (nodeId,
      ctx) {
         return _U.replace([["outgoing"
                            ,ctx.incoming]
                           ,["incoming",ctx.outgoing]],
         ctx);
      });
      return A2($Focus.update,
      graphRep,
      $IntDict.map(updateContext));
   }();
   var stronglyConnectedComponents = function (graph) {
      return function () {
         var timestamps = A3(dfs,
         onFinish(function ($) {
            return F2(function (x,y) {
               return A2($List._op["::"],
               x,
               y);
            })(function (_) {
               return _.id;
            }(function (_) {
               return _.node;
            }($)));
         }),
         _L.fromArray([]),
         graph);
         var forest = A2(dfsForest,
         timestamps,
         reverseEdges(graph));
         var components = A2($List.map,
         function ($) {
            return reverseEdges(A2($List.foldr,
            insert,
            empty)($Graph$Tree.preOrderList($)));
         },
         forest);
         return components;
      }();
   };
   var NodeContext = F3(function (a,
   b,
   c) {
      return {_: {}
             ,incoming: b
             ,node: a
             ,outgoing: c};
   });
   var fromNodesAndEdges = F2(function (nodes,
   edges) {
      return function () {
         var addEdge = F2(function (edge,
         rep) {
            return function () {
               var updateIncoming = function (ctx) {
                  return _U.replace([["incoming"
                                     ,A3($IntDict.insert,
                                     edge.from,
                                     edge.label,
                                     ctx.incoming)]],
                  ctx);
               };
               var updateOutgoing = function (ctx) {
                  return _U.replace([["outgoing"
                                     ,A3($IntDict.insert,
                                     edge.to,
                                     edge.label,
                                     ctx.outgoing)]],
                  ctx);
               };
               return A2($IntDict.update,
               edge.to,
               $Maybe.map(updateIncoming))(A2($IntDict.update,
               edge.from,
               $Maybe.map(updateOutgoing))(rep));
            }();
         });
         var nodeRep = A3($List.foldl,
         function (n) {
            return A2($IntDict.insert,
            n.id,
            A3(NodeContext,
            n,
            $IntDict.empty,
            $IntDict.empty));
         },
         $IntDict.empty,
         nodes);
         return Graph(A3($List.foldl,
         addEdge,
         nodeRep,
         edges));
      }();
   });
   var Edge = F3(function (a,b,c) {
      return {_: {}
             ,from: a
             ,label: c
             ,to: b};
   });
   var Node = F2(function (a,b) {
      return {_: {}
             ,id: a
             ,label: b};
   });
   var fromNodeLabelsAndEdgePairs = F2(function (labels,
   edges) {
      return function () {
         var edges$ = A2($List.map,
         function (_v77) {
            return function () {
               switch (_v77.ctor)
               {case "_Tuple2": return A3(Edge,
                    _v77._0,
                    _v77._1,
                    {ctor: "_Tuple0"});}
               _U.badCase($moduleName,
               "on line 529, column 32 to 46");
            }();
         },
         edges);
         var nodes = $Basics.snd(A2($List.foldl,
         F2(function (lbl,_v81) {
            return function () {
               switch (_v81.ctor)
               {case "_Tuple2":
                  return {ctor: "_Tuple2"
                         ,_0: _v81._0 + 1
                         ,_1: A2($List._op["::"],
                         A2(Node,_v81._0,lbl),
                         _v81._1)};}
               _U.badCase($moduleName,
               "on line 524, column 35 to 63");
            }();
         }),
         {ctor: "_Tuple2"
         ,_0: 0
         ,_1: _L.fromArray([])})(labels));
         return A2(fromNodesAndEdges,
         nodes,
         edges$);
      }();
   });
   _elm.Graph.values = {_op: _op
                       ,empty: empty
                       ,update: update
                       ,insert: insert
                       ,remove: remove
                       ,inducedSubgraph: inducedSubgraph
                       ,isEmpty: isEmpty
                       ,size: size
                       ,member: member
                       ,get: get
                       ,nodeIdRange: nodeIdRange
                       ,nodeIds: nodeIds
                       ,nodes: nodes
                       ,edges: edges
                       ,fromNodesAndEdges: fromNodesAndEdges
                       ,fromNodeLabelsAndEdgePairs: fromNodeLabelsAndEdgePairs
                       ,id: id
                       ,label: label
                       ,from: from
                       ,to: to
                       ,node: node
                       ,incoming: incoming
                       ,outgoing: outgoing
                       ,nodeById: nodeById
                       ,anyNode: anyNode
                       ,fold: fold
                       ,mapContexts: mapContexts
                       ,mapNodes: mapNodes
                       ,mapEdges: mapEdges
                       ,symmetricClosure: symmetricClosure
                       ,reverseEdges: reverseEdges
                       ,alongOutgoingEdges: alongOutgoingEdges
                       ,alongIncomingEdges: alongIncomingEdges
                       ,onDiscovery: onDiscovery
                       ,onFinish: onFinish
                       ,dfs: dfs
                       ,dfsTree: dfsTree
                       ,dfsForest: dfsForest
                       ,guidedDfs: guidedDfs
                       ,ignorePath: ignorePath
                       ,bfs: bfs
                       ,guidedBfs: guidedBfs
                       ,heightLevels: heightLevels
                       ,topologicalSort: topologicalSort
                       ,stronglyConnectedComponents: stronglyConnectedComponents
                       ,toString$: toString$
                       ,Node: Node
                       ,Edge: Edge
                       ,NodeContext: NodeContext};
   return _elm.Graph.values;
};
Elm.Graph = Elm.Graph || {};
Elm.Graph.Tree = Elm.Graph.Tree || {};
Elm.Graph.Tree.make = function (_elm) {
   "use strict";
   _elm.Graph = _elm.Graph || {};
   _elm.Graph.Tree = _elm.Graph.Tree || {};
   if (_elm.Graph.Tree.values)
   return _elm.Graph.Tree.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graph.Tree",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Queue = Elm.Queue.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var pushMany = F2(function (vals,
   queue) {
      return A3($List.foldl,
      $Queue.push,
      queue,
      vals);
   });
   var listForTraversal = F2(function (traversal,
   tree) {
      return function () {
         var acc = $Basics.identity;
         var f = F3(function (label,
         children,
         rest) {
            return function ($) {
               return rest(F2(function (x,
               y) {
                  return A2($List._op["::"],
                  x,
                  y);
               })(label)($));
            };
         });
         return A4(traversal,
         f,
         acc,
         tree,
         _L.fromArray([]));
      }();
   });
   var size = function (tree) {
      return function () {
         switch (tree.ctor)
         {case "MkTree": return tree._0;}
         _U.badCase($moduleName,
         "between lines 155 and 156");
      }();
   };
   var root = function (tree) {
      return function () {
         switch (tree.ctor)
         {case "MkTree": return tree._1;}
         _U.badCase($moduleName,
         "between lines 144 and 145");
      }();
   };
   var height = function (tree) {
      return function () {
         var go = F2(function (h,t) {
            return function () {
               var _v6 = root(t);
               switch (_v6.ctor)
               {case "Just":
                  switch (_v6._0.ctor)
                    {case "_Tuple2":
                       return A2($List.foldl,
                         function ($) {
                            return $Basics.max(go(h + 1)($));
                         },
                         h + 1)(_v6._0._1);}
                    break;
                  case "Nothing": return h;}
               _U.badCase($moduleName,
               "between lines 168 and 174");
            }();
         });
         return A2(go,0,tree);
      }();
   };
   var levelOrder = F3(function (visit,
   acc,
   tree) {
      return function () {
         var go = F2(function (acc,
         toVisit) {
            return function () {
               var _v10 = $Queue.pop(toVisit);
               switch (_v10.ctor)
               {case "Just":
                  switch (_v10._0.ctor)
                    {case "_Tuple2":
                       return function () {
                            var _v14 = root(_v10._0._0);
                            switch (_v14.ctor)
                            {case "Just":
                               switch (_v14._0.ctor)
                                 {case "_Tuple2": return A2(go,
                                      A3(visit,
                                      _v14._0._0,
                                      _v14._0._1,
                                      acc),
                                      A2(pushMany,
                                      _v14._0._1,
                                      _v10._0._1));}
                                 break;
                               case "Nothing": return A2(go,
                                 acc,
                                 _v10._0._1);}
                            _U.badCase($moduleName,
                            "between lines 216 and 220");
                         }();}
                    break;
                  case "Nothing": return acc;}
               _U.badCase($moduleName,
               "between lines 213 and 220");
            }();
         });
         return A2(go,
         acc,
         $Queue.push(tree)($Queue.empty));
      }();
   });
   var levelOrderList = listForTraversal(levelOrder);
   var postOrder = F3(function (visit,
   acc,
   tree) {
      return function () {
         var folder = $Basics.flip(postOrder(visit));
         return function () {
            var _v18 = root(tree);
            switch (_v18.ctor)
            {case "Just":
               switch (_v18._0.ctor)
                 {case "_Tuple2":
                    return A3(visit,
                      _v18._0._0,
                      _v18._0._1,
                      A3($List.foldl,
                      folder,
                      acc,
                      _v18._0._1));}
                 break;
               case "Nothing": return acc;}
            _U.badCase($moduleName,
            "between lines 253 and 256");
         }();
      }();
   });
   var postOrderList = listForTraversal(postOrder);
   var preOrder = F3(function (visit,
   acc,
   tree) {
      return function () {
         var folder = $Basics.flip(preOrder(visit));
         return function () {
            var _v22 = root(tree);
            switch (_v22.ctor)
            {case "Just":
               switch (_v22._0.ctor)
                 {case "_Tuple2":
                    return A3($List.foldl,
                      folder,
                      A3(visit,
                      _v22._0._0,
                      _v22._0._1,
                      acc),
                      _v22._0._1);}
                 break;
               case "Nothing": return acc;}
            _U.badCase($moduleName,
            "between lines 286 and 289");
         }();
      }();
   });
   var preOrderList = listForTraversal(preOrder);
   var MkTree = F2(function (a,b) {
      return {ctor: "MkTree"
             ,_0: a
             ,_1: b};
   });
   var empty = A2(MkTree,
   0,
   $Maybe.Nothing);
   var isEmpty = function (tree) {
      return _U.eq(tree,empty);
   };
   var inner = F2(function (label,
   children) {
      return function () {
         var children$ = A2($List.filter,
         function ($) {
            return $Basics.not(isEmpty($));
         },
         children);
         var size$ = A3($List.foldl,
         function ($) {
            return F2(function (x,y) {
               return x + y;
            })(size($));
         },
         1,
         children$);
         return A2(MkTree,
         size$,
         $Maybe.Just({ctor: "_Tuple2"
                     ,_0: label
                     ,_1: children$}));
      }();
   });
   var leaf = function (val) {
      return A2(inner,
      val,
      _L.fromArray([]));
   };
   var unfoldTree = F2(function (next,
   seed) {
      return function () {
         var $ = next(seed),
         label = $._0,
         seeds = $._1;
         return A2(inner,
         label,
         A2($List.map,
         unfoldTree(next),
         seeds));
      }();
   });
   var unfoldForest = F2(function (next,
   seeds) {
      return A2($List.map,
      unfoldTree(next),
      seeds);
   });
   _elm.Graph.Tree.values = {_op: _op
                            ,empty: empty
                            ,leaf: leaf
                            ,inner: inner
                            ,unfoldTree: unfoldTree
                            ,unfoldForest: unfoldForest
                            ,isEmpty: isEmpty
                            ,root: root
                            ,size: size
                            ,height: height
                            ,levelOrder: levelOrder
                            ,levelOrderList: levelOrderList
                            ,preOrder: preOrder
                            ,preOrderList: preOrderList
                            ,postOrder: postOrder
                            ,postOrderList: postOrderList};
   return _elm.Graph.Tree.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Collage = Elm.Graphics.Collage || {};
Elm.Graphics.Collage.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Collage = _elm.Graphics.Collage || {};
   if (_elm.Graphics.Collage.values)
   return _elm.Graphics.Collage.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Collage",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Graphics$Collage = Elm.Native.Graphics.Collage.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Transform2D = Elm.Transform2D.make(_elm);
   var ngon = F2(function (n,r) {
      return function () {
         var m = $Basics.toFloat(n);
         var t = 2 * $Basics.pi / m;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: r * $Basics.cos(t * i)
                   ,_1: r * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,m - 1));
      }();
   });
   var oval = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         var n = 50;
         var t = 2 * $Basics.pi / n;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: hw * $Basics.cos(t * i)
                   ,_1: hh * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,n - 1));
      }();
   });
   var circle = function (r) {
      return A2(oval,2 * r,2 * r);
   };
   var rect = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         return _L.fromArray([{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: 0 - hh}
                             ,{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: hh}
                             ,{ctor: "_Tuple2",_0: hw,_1: hh}
                             ,{ctor: "_Tuple2"
                              ,_0: hw
                              ,_1: 0 - hh}]);
      }();
   });
   var square = function (n) {
      return A2(rect,n,n);
   };
   var polygon = function (points) {
      return points;
   };
   var segment = F2(function (p1,
   p2) {
      return _L.fromArray([p1,p2]);
   });
   var path = function (ps) {
      return ps;
   };
   var collage = $Native$Graphics$Collage.collage;
   var alpha = F2(function (a,f) {
      return _U.replace([["alpha"
                         ,a]],
      f);
   });
   var rotate = F2(function (t,f) {
      return _U.replace([["theta"
                         ,f.theta + t]],
      f);
   });
   var scale = F2(function (s,f) {
      return _U.replace([["scale"
                         ,f.scale * s]],
      f);
   });
   var moveY = F2(function (y,f) {
      return _U.replace([["y"
                         ,f.y + y]],
      f);
   });
   var moveX = F2(function (x,f) {
      return _U.replace([["x"
                         ,f.x + x]],
      f);
   });
   var move = F2(function (_v0,f) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return _U.replace([["x"
                               ,f.x + _v0._0]
                              ,["y",f.y + _v0._1]],
              f);}
         _U.badCase($moduleName,
         "on line 226, column 3 to 37");
      }();
   });
   var form = function (f) {
      return {_: {}
             ,alpha: 1
             ,form: f
             ,scale: 1
             ,theta: 0
             ,x: 0
             ,y: 0};
   };
   var Fill = function (a) {
      return {ctor: "Fill",_0: a};
   };
   var Line = function (a) {
      return {ctor: "Line",_0: a};
   };
   var FGroup = F2(function (a,b) {
      return {ctor: "FGroup"
             ,_0: a
             ,_1: b};
   });
   var group = function (fs) {
      return form(A2(FGroup,
      $Transform2D.identity,
      fs));
   };
   var groupTransform = F2(function (matrix,
   fs) {
      return form(A2(FGroup,
      matrix,
      fs));
   });
   var FElement = function (a) {
      return {ctor: "FElement"
             ,_0: a};
   };
   var toForm = function (e) {
      return form(FElement(e));
   };
   var FImage = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "FImage"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var sprite = F4(function (w,
   h,
   pos,
   src) {
      return form(A4(FImage,
      w,
      h,
      pos,
      src));
   });
   var FText = function (a) {
      return {ctor: "FText",_0: a};
   };
   var text = function (t) {
      return form(FText(t));
   };
   var FOutlinedText = F2(function (a,
   b) {
      return {ctor: "FOutlinedText"
             ,_0: a
             ,_1: b};
   });
   var outlinedText = F2(function (ls,
   t) {
      return form(A2(FOutlinedText,
      ls,
      t));
   });
   var FShape = F2(function (a,b) {
      return {ctor: "FShape"
             ,_0: a
             ,_1: b};
   });
   var fill = F2(function (style,
   shape) {
      return form(A2(FShape,
      Fill(style),
      shape));
   });
   var outlined = F2(function (style,
   shape) {
      return form(A2(FShape,
      Line(style),
      shape));
   });
   var FPath = F2(function (a,b) {
      return {ctor: "FPath"
             ,_0: a
             ,_1: b};
   });
   var traced = F2(function (style,
   path) {
      return form(A2(FPath,
      style,
      path));
   });
   var LineStyle = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,cap: c
             ,color: a
             ,dashOffset: f
             ,dashing: e
             ,join: d
             ,width: b};
   });
   var Clipped = {ctor: "Clipped"};
   var Sharp = function (a) {
      return {ctor: "Sharp",_0: a};
   };
   var Smooth = {ctor: "Smooth"};
   var Padded = {ctor: "Padded"};
   var Round = {ctor: "Round"};
   var Flat = {ctor: "Flat"};
   var defaultLine = {_: {}
                     ,cap: Flat
                     ,color: $Color.black
                     ,dashOffset: 0
                     ,dashing: _L.fromArray([])
                     ,join: Sharp(10)
                     ,width: 1};
   var solid = function (clr) {
      return _U.replace([["color"
                         ,clr]],
      defaultLine);
   };
   var dashed = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([8,4])]],
      defaultLine);
   };
   var dotted = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([3,3])]],
      defaultLine);
   };
   var Grad = function (a) {
      return {ctor: "Grad",_0: a};
   };
   var gradient = F2(function (grad,
   shape) {
      return A2(fill,
      Grad(grad),
      shape);
   });
   var Texture = function (a) {
      return {ctor: "Texture"
             ,_0: a};
   };
   var textured = F2(function (src,
   shape) {
      return A2(fill,
      Texture(src),
      shape);
   });
   var Solid = function (a) {
      return {ctor: "Solid",_0: a};
   };
   var filled = F2(function (color,
   shape) {
      return A2(fill,
      Solid(color),
      shape);
   });
   var Form = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,alpha: e
             ,form: f
             ,scale: b
             ,theta: a
             ,x: c
             ,y: d};
   });
   _elm.Graphics.Collage.values = {_op: _op
                                  ,collage: collage
                                  ,toForm: toForm
                                  ,filled: filled
                                  ,textured: textured
                                  ,gradient: gradient
                                  ,outlined: outlined
                                  ,traced: traced
                                  ,text: text
                                  ,outlinedText: outlinedText
                                  ,move: move
                                  ,moveX: moveX
                                  ,moveY: moveY
                                  ,scale: scale
                                  ,rotate: rotate
                                  ,alpha: alpha
                                  ,group: group
                                  ,groupTransform: groupTransform
                                  ,rect: rect
                                  ,oval: oval
                                  ,square: square
                                  ,circle: circle
                                  ,ngon: ngon
                                  ,polygon: polygon
                                  ,segment: segment
                                  ,path: path
                                  ,solid: solid
                                  ,dashed: dashed
                                  ,dotted: dotted
                                  ,defaultLine: defaultLine
                                  ,Form: Form
                                  ,LineStyle: LineStyle
                                  ,Flat: Flat
                                  ,Round: Round
                                  ,Padded: Padded
                                  ,Smooth: Smooth
                                  ,Sharp: Sharp
                                  ,Clipped: Clipped};
   return _elm.Graphics.Collage.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm),
   $Text = Elm.Text.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var justified = $Native$Graphics$Element.block("justify");
   var centered = $Native$Graphics$Element.block("center");
   var rightAligned = $Native$Graphics$Element.block("right");
   var leftAligned = $Native$Graphics$Element.block("left");
   var show = function (value) {
      return leftAligned($Text.monospace($Text.fromString($Basics.toString(value))));
   };
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var newElement = $Native$Graphics$Element.newElement;
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         A2($Maybe.withDefault,
         0,
         $List.maximum(ws)),
         A2($Maybe.withDefault,
         0,
         $List.maximum(hs)),
         A2(Flow,DOut,es));
      }();
   };
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var maxOrZero = function (list) {
            return A2($Maybe.withDefault,
            0,
            $List.maximum(list));
         };
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DOut": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DUp": return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 362 and 368");
         }();
      }();
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   _elm.Graphics.Element.values = {_op: _op
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,leftAligned: leftAligned
                                  ,rightAligned: rightAligned
                                  ,centered: centered
                                  ,justified: justified
                                  ,show: show
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,color: color
                                  ,opacity: opacity
                                  ,link: link
                                  ,tag: tag
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,flow: flow
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward
                                  ,layers: layers
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,empty: empty
                                  ,spacer: spacer
                                  ,container: container
                                  ,middle: middle
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middleAt: middleAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,Element: Element
                                  ,Position: Position};
   return _elm.Graphics.Element.values;
};
Elm.Helpers = Elm.Helpers || {};
Elm.Helpers.make = function (_elm) {
   "use strict";
   _elm.Helpers = _elm.Helpers || {};
   if (_elm.Helpers.values)
   return _elm.Helpers.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Helpers",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Types = Elm.Types.make(_elm);
   var moveIthMemberUp = F2(function (i,
   ls) {
      return function () {
         var end = A2($List.drop,
         i + 1,
         ls);
         var beginning = A2($List.take,
         i - 1,
         ls);
         var ar = $Array.fromList(ls);
         var elem = A2($Array.get,i,ar);
         var prevElem = A2($Array.get,
         i - 1,
         ar);
         return function () {
            var _v0 = {ctor: "_Tuple2"
                      ,_0: elem
                      ,_1: prevElem};
            switch (_v0.ctor)
            {case "_Tuple2":
               switch (_v0._0.ctor)
                 {case "Just":
                    switch (_v0._1.ctor)
                      {case "Just":
                         return A2($Basics._op["++"],
                           beginning,
                           A2($Basics._op["++"],
                           _L.fromArray([_v0._0._0]),
                           A2($Basics._op["++"],
                           _L.fromArray([_v0._1._0]),
                           end)));}
                      break;}
                 break;}
            return ls;
         }();
      }();
   });
   var moveIthMemberDown = F2(function (i,
   ls) {
      return function () {
         var end = A2($List.drop,
         i + 2,
         ls);
         var beginning = A2($List.take,
         i,
         ls);
         var ar = $Array.fromList(ls);
         var elem = A2($Array.get,i,ar);
         var nextElem = A2($Array.get,
         i + 1,
         ar);
         return function () {
            var _v5 = {ctor: "_Tuple2"
                      ,_0: elem
                      ,_1: nextElem};
            switch (_v5.ctor)
            {case "_Tuple2":
               switch (_v5._0.ctor)
                 {case "Just":
                    switch (_v5._1.ctor)
                      {case "Just":
                         return A2($Basics._op["++"],
                           beginning,
                           A2($Basics._op["++"],
                           _L.fromArray([_v5._1._0]),
                           A2($Basics._op["++"],
                           _L.fromArray([_v5._0._0]),
                           end)));}
                      break;}
                 break;}
            return ls;
         }();
      }();
   });
   var Dict = F2(function (a,b) {
      return {ctor: "Dict"
             ,_0: a
             ,_1: b};
   });
   var addCoords = F2(function (_v10,
   _v11) {
      return function () {
         switch (_v11.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v10.ctor)
                 {case "_Tuple2":
                    return {ctor: "_Tuple2"
                           ,_0: _v10._0 + _v11._0
                           ,_1: _v10._1 + _v11._1};}
                 _U.badCase($moduleName,
                 "on line 38, column 30 to 42");
              }();}
         _U.badCase($moduleName,
         "on line 38, column 30 to 42");
      }();
   });
   var interpolate = F3(function (p1,
   p2,
   fraction) {
      return {_: {}
             ,x: (1 - fraction) * p1.x + fraction * p2.x
             ,y: (1 - fraction) * p1.y + fraction * p2.y};
   });
   var dist = F2(function (x,y) {
      return $Basics.sqrt(Math.pow(x,
      2) + Math.pow(y,2));
   });
   var watchIf = F3(function (str,
   bool,
   value) {
      return bool ? A2($Debug.watch,
      str,
      value) : value;
   });
   var dropRight = function (lst) {
      return $List.reverse($List.drop(1)($List.reverse(lst)));
   };
   var carRouteFromList = function (x) {
      return function () {
         switch (x.ctor)
         {case "::":
            return $Dict.fromList(A3($List.map2,
              F2(function (v0,v1) {
                 return {ctor: "_Tuple2"
                        ,_0: v0
                        ,_1: v1};
              }),
              dropRight(A2($List._op["::"],
              x._0,
              x._1)),
              x._1));
            case "[]": return $Dict.empty;}
         _U.badCase($moduleName,
         "between lines 78 and 80");
      }();
   };
   var getOrFail = F2(function (ex,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $Debug.crash(ex);}
         _U.badCase($moduleName,
         "between lines 16 and 18");
      }();
   });
   var findAllPaths = F2(function (net,
   startId) {
      return function () {
         var bfsVisitor = F3(function (ctxs,
         depth,
         acc) {
            return function () {
               var nodeIds = A2($List.map,
               function (ctx) {
                  return ctx.node.id;
               },
               ctxs);
               var currentNodeId = getOrFail("unknown nodeId")($List.head(nodeIds));
               return function () {
                  var _v23 = A2($Dict.get,
                  currentNodeId,
                  acc);
                  switch (_v23.ctor)
                  {case "Just":
                     return _U.cmp($List.length(_v23._0),
                       $List.length(nodeIds)) > 0 ? A3($Dict.insert,
                       currentNodeId,
                       $List.reverse(nodeIds),
                       acc) : acc;
                     case "Nothing":
                     return A3($Dict.insert,
                       currentNodeId,
                       $List.reverse(nodeIds),
                       acc);}
                  _U.badCase($moduleName,
                  "between lines 55 and 61");
               }();
            }();
         });
         var $ = A5($Graph.guidedBfs,
         $Graph.alongOutgoingEdges,
         bfsVisitor,
         _L.fromArray([startId]),
         $Dict.empty,
         net),
         results = $._0,
         graph = $._1;
         return results;
      }();
   });
   var findPath = F2(function (net,
   _v25) {
      return function () {
         switch (_v25.ctor)
         {case "_Tuple2":
            return function () {
                 var paths = A2(findAllPaths,
                 net,
                 _v25._0);
                 return getOrFail("couldn\'t find path!")(A2($Dict.get,
                 _v25._1,
                 paths));
              }();}
         _U.badCase($moduleName,
         "between lines 46 and 48");
      }();
   });
   var busRouteFromList = F2(function (x,
   net) {
      return function () {
         switch (x.ctor)
         {case "::": return function () {
                 var pairs = A3($List.map2,
                 F2(function (v0,v1) {
                    return {ctor: "_Tuple2"
                           ,_0: v0
                           ,_1: v1};
                 }),
                 A2($List._op["::"],x._0,x._1),
                 A2($Basics._op["++"],
                 x._1,
                 _L.fromArray([x._0])));
                 var subroutes = A2($List.map,
                 findPath(net),
                 pairs);
                 var combinedList = A2($List.concatMap,
                 $List.drop(1),
                 subroutes);
                 return function () {
                    switch (combinedList.ctor)
                    {case "::":
                       switch (combinedList._1.ctor)
                         {case "::":
                            return $Dict.fromList(A4($List.map3,
                              F3(function (a,b,c) {
                                 return {ctor: "_Tuple2"
                                        ,_0: {ctor: "_Tuple2"
                                             ,_0: a
                                             ,_1: b}
                                        ,_1: c};
                              }),
                              A2($List._op["::"],
                              combinedList._0,
                              A2($List._op["::"],
                              combinedList._1._0,
                              combinedList._1._1)),
                              A2($List._op["::"],
                              combinedList._1._0,
                              A2($Basics._op["++"],
                              combinedList._1._1,
                              _L.fromArray([combinedList._0]))),
                              A2($Basics._op["++"],
                              combinedList._1._1,
                              _L.fromArray([combinedList._0
                                           ,combinedList._1._0]))));}
                         break;}
                    _U.badCase($moduleName,
                    "between lines 73 and 75");
                 }();
              }();
            case "[]": return $Dict.empty;}
         _U.badCase($moduleName,
         "between lines 67 and 75");
      }();
   });
   _elm.Helpers.values = {_op: _op
                         ,getOrFail: getOrFail
                         ,dropRight: dropRight
                         ,watchIf: watchIf
                         ,dist: dist
                         ,interpolate: interpolate
                         ,addCoords: addCoords
                         ,Dict: Dict
                         ,findPath: findPath
                         ,findAllPaths: findAllPaths
                         ,busRouteFromList: busRouteFromList
                         ,carRouteFromList: carRouteFromList
                         ,moveIthMemberDown: moveIthMemberDown
                         ,moveIthMemberUp: moveIthMemberUp};
   return _elm.Helpers.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   if (_elm.Html.values)
   return _elm.Html.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var fromElement = $VirtualDom.fromElement;
   var toElement = $VirtualDom.toElement;
   var text = $VirtualDom.text;
   var node = $VirtualDom.node;
   var body = node("body");
   var section = node("section");
   var nav = node("nav");
   var article = node("article");
   var aside = node("aside");
   var h1 = node("h1");
   var h2 = node("h2");
   var h3 = node("h3");
   var h4 = node("h4");
   var h5 = node("h5");
   var h6 = node("h6");
   var header = node("header");
   var footer = node("footer");
   var address = node("address");
   var main$ = node("main");
   var p = node("p");
   var hr = node("hr");
   var pre = node("pre");
   var blockquote = node("blockquote");
   var ol = node("ol");
   var ul = node("ul");
   var li = node("li");
   var dl = node("dl");
   var dt = node("dt");
   var dd = node("dd");
   var figure = node("figure");
   var figcaption = node("figcaption");
   var div = node("div");
   var a = node("a");
   var em = node("em");
   var strong = node("strong");
   var small = node("small");
   var s = node("s");
   var cite = node("cite");
   var q = node("q");
   var dfn = node("dfn");
   var abbr = node("abbr");
   var time = node("time");
   var code = node("code");
   var $var = node("var");
   var samp = node("samp");
   var kbd = node("kbd");
   var sub = node("sub");
   var sup = node("sup");
   var i = node("i");
   var b = node("b");
   var u = node("u");
   var mark = node("mark");
   var ruby = node("ruby");
   var rt = node("rt");
   var rp = node("rp");
   var bdi = node("bdi");
   var bdo = node("bdo");
   var span = node("span");
   var br = node("br");
   var wbr = node("wbr");
   var ins = node("ins");
   var del = node("del");
   var img = node("img");
   var iframe = node("iframe");
   var embed = node("embed");
   var object = node("object");
   var param = node("param");
   var video = node("video");
   var audio = node("audio");
   var source = node("source");
   var track = node("track");
   var canvas = node("canvas");
   var svg = node("svg");
   var math = node("math");
   var table = node("table");
   var caption = node("caption");
   var colgroup = node("colgroup");
   var col = node("col");
   var tbody = node("tbody");
   var thead = node("thead");
   var tfoot = node("tfoot");
   var tr = node("tr");
   var td = node("td");
   var th = node("th");
   var form = node("form");
   var fieldset = node("fieldset");
   var legend = node("legend");
   var label = node("label");
   var input = node("input");
   var button = node("button");
   var select = node("select");
   var datalist = node("datalist");
   var optgroup = node("optgroup");
   var option = node("option");
   var textarea = node("textarea");
   var keygen = node("keygen");
   var output = node("output");
   var progress = node("progress");
   var meter = node("meter");
   var details = node("details");
   var summary = node("summary");
   var menuitem = node("menuitem");
   var menu = node("menu");
   _elm.Html.values = {_op: _op
                      ,node: node
                      ,text: text
                      ,toElement: toElement
                      ,fromElement: fromElement
                      ,body: body
                      ,section: section
                      ,nav: nav
                      ,article: article
                      ,aside: aside
                      ,h1: h1
                      ,h2: h2
                      ,h3: h3
                      ,h4: h4
                      ,h5: h5
                      ,h6: h6
                      ,header: header
                      ,footer: footer
                      ,address: address
                      ,main$: main$
                      ,p: p
                      ,hr: hr
                      ,pre: pre
                      ,blockquote: blockquote
                      ,ol: ol
                      ,ul: ul
                      ,li: li
                      ,dl: dl
                      ,dt: dt
                      ,dd: dd
                      ,figure: figure
                      ,figcaption: figcaption
                      ,div: div
                      ,a: a
                      ,em: em
                      ,strong: strong
                      ,small: small
                      ,s: s
                      ,cite: cite
                      ,q: q
                      ,dfn: dfn
                      ,abbr: abbr
                      ,time: time
                      ,code: code
                      ,$var: $var
                      ,samp: samp
                      ,kbd: kbd
                      ,sub: sub
                      ,sup: sup
                      ,i: i
                      ,b: b
                      ,u: u
                      ,mark: mark
                      ,ruby: ruby
                      ,rt: rt
                      ,rp: rp
                      ,bdi: bdi
                      ,bdo: bdo
                      ,span: span
                      ,br: br
                      ,wbr: wbr
                      ,ins: ins
                      ,del: del
                      ,img: img
                      ,iframe: iframe
                      ,embed: embed
                      ,object: object
                      ,param: param
                      ,video: video
                      ,audio: audio
                      ,source: source
                      ,track: track
                      ,canvas: canvas
                      ,svg: svg
                      ,math: math
                      ,table: table
                      ,caption: caption
                      ,colgroup: colgroup
                      ,col: col
                      ,tbody: tbody
                      ,thead: thead
                      ,tfoot: tfoot
                      ,tr: tr
                      ,td: td
                      ,th: th
                      ,form: form
                      ,fieldset: fieldset
                      ,legend: legend
                      ,label: label
                      ,input: input
                      ,button: button
                      ,select: select
                      ,datalist: datalist
                      ,optgroup: optgroup
                      ,option: option
                      ,textarea: textarea
                      ,keygen: keygen
                      ,output: output
                      ,progress: progress
                      ,meter: meter
                      ,details: details
                      ,summary: summary
                      ,menuitem: menuitem
                      ,menu: menu};
   return _elm.Html.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Attributes = Elm.Html.Attributes || {};
Elm.Html.Attributes.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Attributes = _elm.Html.Attributes || {};
   if (_elm.Html.Attributes.values)
   return _elm.Html.Attributes.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Attributes",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $String = Elm.String.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var attribute = $VirtualDom.attribute;
   var property = $VirtualDom.property;
   var stringProperty = F2(function (name,
   string) {
      return A2(property,
      name,
      $Json$Encode.string(string));
   });
   var $class = function (name) {
      return A2(stringProperty,
      "className",
      name);
   };
   var id = function (name) {
      return A2(stringProperty,
      "id",
      name);
   };
   var title = function (name) {
      return A2(stringProperty,
      "title",
      name);
   };
   var accesskey = function ($char) {
      return A2(stringProperty,
      "accesskey",
      $String.fromList(_L.fromArray([$char])));
   };
   var contextmenu = function (value) {
      return A2(stringProperty,
      "contextmenu",
      value);
   };
   var dir = function (value) {
      return A2(stringProperty,
      "dir",
      value);
   };
   var draggable = function (value) {
      return A2(stringProperty,
      "draggable",
      value);
   };
   var dropzone = function (value) {
      return A2(stringProperty,
      "dropzone",
      value);
   };
   var itemprop = function (value) {
      return A2(stringProperty,
      "itemprop",
      value);
   };
   var lang = function (value) {
      return A2(stringProperty,
      "lang",
      value);
   };
   var tabindex = function (n) {
      return A2(stringProperty,
      "tabIndex",
      $Basics.toString(n));
   };
   var charset = function (value) {
      return A2(stringProperty,
      "charset",
      value);
   };
   var content = function (value) {
      return A2(stringProperty,
      "content",
      value);
   };
   var httpEquiv = function (value) {
      return A2(stringProperty,
      "httpEquiv",
      value);
   };
   var language = function (value) {
      return A2(stringProperty,
      "language",
      value);
   };
   var src = function (value) {
      return A2(stringProperty,
      "src",
      value);
   };
   var height = function (value) {
      return A2(stringProperty,
      "height",
      $Basics.toString(value));
   };
   var width = function (value) {
      return A2(stringProperty,
      "width",
      $Basics.toString(value));
   };
   var alt = function (value) {
      return A2(stringProperty,
      "alt",
      value);
   };
   var preload = function (value) {
      return A2(stringProperty,
      "preload",
      value);
   };
   var poster = function (value) {
      return A2(stringProperty,
      "poster",
      value);
   };
   var kind = function (value) {
      return A2(stringProperty,
      "kind",
      value);
   };
   var srclang = function (value) {
      return A2(stringProperty,
      "srclang",
      value);
   };
   var sandbox = function (value) {
      return A2(stringProperty,
      "sandbox",
      value);
   };
   var srcdoc = function (value) {
      return A2(stringProperty,
      "srcdoc",
      value);
   };
   var type$ = function (value) {
      return A2(stringProperty,
      "type",
      value);
   };
   var value = function (value) {
      return A2(stringProperty,
      "value",
      value);
   };
   var placeholder = function (value) {
      return A2(stringProperty,
      "placeholder",
      value);
   };
   var accept = function (value) {
      return A2(stringProperty,
      "accept",
      value);
   };
   var acceptCharset = function (value) {
      return A2(stringProperty,
      "acceptCharset",
      value);
   };
   var action = function (value) {
      return A2(stringProperty,
      "action",
      value);
   };
   var autocomplete = function (bool) {
      return A2(stringProperty,
      "autocomplete",
      bool ? "on" : "off");
   };
   var autosave = function (value) {
      return A2(stringProperty,
      "autosave",
      value);
   };
   var enctype = function (value) {
      return A2(stringProperty,
      "enctype",
      value);
   };
   var formaction = function (value) {
      return A2(stringProperty,
      "formaction",
      value);
   };
   var list = function (value) {
      return A2(stringProperty,
      "list",
      value);
   };
   var minlength = function (n) {
      return A2(stringProperty,
      "minLength",
      $Basics.toString(n));
   };
   var maxlength = function (n) {
      return A2(stringProperty,
      "maxLength",
      $Basics.toString(n));
   };
   var method = function (value) {
      return A2(stringProperty,
      "method",
      value);
   };
   var name = function (value) {
      return A2(stringProperty,
      "name",
      value);
   };
   var pattern = function (value) {
      return A2(stringProperty,
      "pattern",
      value);
   };
   var size = function (n) {
      return A2(stringProperty,
      "size",
      $Basics.toString(n));
   };
   var $for = function (value) {
      return A2(stringProperty,
      "htmlFor",
      value);
   };
   var form = function (value) {
      return A2(stringProperty,
      "form",
      value);
   };
   var max = function (value) {
      return A2(stringProperty,
      "max",
      value);
   };
   var min = function (value) {
      return A2(stringProperty,
      "min",
      value);
   };
   var step = function (n) {
      return A2(stringProperty,
      "step",
      n);
   };
   var cols = function (n) {
      return A2(stringProperty,
      "cols",
      $Basics.toString(n));
   };
   var rows = function (n) {
      return A2(stringProperty,
      "rows",
      $Basics.toString(n));
   };
   var wrap = function (value) {
      return A2(stringProperty,
      "wrap",
      value);
   };
   var usemap = function (value) {
      return A2(stringProperty,
      "useMap",
      value);
   };
   var shape = function (value) {
      return A2(stringProperty,
      "shape",
      value);
   };
   var coords = function (value) {
      return A2(stringProperty,
      "coords",
      value);
   };
   var challenge = function (value) {
      return A2(stringProperty,
      "challenge",
      value);
   };
   var keytype = function (value) {
      return A2(stringProperty,
      "keytype",
      value);
   };
   var align = function (value) {
      return A2(stringProperty,
      "align",
      value);
   };
   var cite = function (value) {
      return A2(stringProperty,
      "cite",
      value);
   };
   var href = function (value) {
      return A2(stringProperty,
      "href",
      value);
   };
   var target = function (value) {
      return A2(stringProperty,
      "target",
      value);
   };
   var downloadAs = function (value) {
      return A2(stringProperty,
      "download",
      value);
   };
   var hreflang = function (value) {
      return A2(stringProperty,
      "hreflang",
      value);
   };
   var media = function (value) {
      return A2(stringProperty,
      "media",
      value);
   };
   var ping = function (value) {
      return A2(stringProperty,
      "ping",
      value);
   };
   var rel = function (value) {
      return A2(stringProperty,
      "rel",
      value);
   };
   var datetime = function (value) {
      return A2(stringProperty,
      "datetime",
      value);
   };
   var pubdate = function (value) {
      return A2(stringProperty,
      "pubdate",
      value);
   };
   var start = function (n) {
      return A2(stringProperty,
      "start",
      $Basics.toString(n));
   };
   var colspan = function (n) {
      return A2(stringProperty,
      "colSpan",
      $Basics.toString(n));
   };
   var headers = function (value) {
      return A2(stringProperty,
      "headers",
      value);
   };
   var rowspan = function (n) {
      return A2(stringProperty,
      "rowSpan",
      $Basics.toString(n));
   };
   var scope = function (value) {
      return A2(stringProperty,
      "scope",
      value);
   };
   var manifest = function (value) {
      return A2(stringProperty,
      "manifest",
      value);
   };
   var boolProperty = F2(function (name,
   bool) {
      return A2(property,
      name,
      $Json$Encode.bool(bool));
   });
   var hidden = function (bool) {
      return A2(boolProperty,
      "hidden",
      bool);
   };
   var contenteditable = function (bool) {
      return A2(boolProperty,
      "contentEditable",
      bool);
   };
   var spellcheck = function (bool) {
      return A2(boolProperty,
      "spellcheck",
      bool);
   };
   var async = function (bool) {
      return A2(boolProperty,
      "async",
      bool);
   };
   var defer = function (bool) {
      return A2(boolProperty,
      "defer",
      bool);
   };
   var scoped = function (bool) {
      return A2(boolProperty,
      "scoped",
      bool);
   };
   var autoplay = function (bool) {
      return A2(boolProperty,
      "autoplay",
      bool);
   };
   var controls = function (bool) {
      return A2(boolProperty,
      "controls",
      bool);
   };
   var loop = function (bool) {
      return A2(boolProperty,
      "loop",
      bool);
   };
   var $default = function (bool) {
      return A2(boolProperty,
      "default",
      bool);
   };
   var seamless = function (bool) {
      return A2(boolProperty,
      "seamless",
      bool);
   };
   var checked = function (bool) {
      return A2(boolProperty,
      "checked",
      bool);
   };
   var selected = function (bool) {
      return A2(boolProperty,
      "selected",
      bool);
   };
   var autofocus = function (bool) {
      return A2(boolProperty,
      "autofocus",
      bool);
   };
   var disabled = function (bool) {
      return A2(boolProperty,
      "disabled",
      bool);
   };
   var multiple = function (bool) {
      return A2(boolProperty,
      "multiple",
      bool);
   };
   var novalidate = function (bool) {
      return A2(boolProperty,
      "noValidate",
      bool);
   };
   var readonly = function (bool) {
      return A2(boolProperty,
      "readOnly",
      bool);
   };
   var required = function (bool) {
      return A2(boolProperty,
      "required",
      bool);
   };
   var ismap = function (value) {
      return A2(boolProperty,
      "isMap",
      value);
   };
   var download = function (bool) {
      return A2(boolProperty,
      "download",
      bool);
   };
   var reversed = function (bool) {
      return A2(boolProperty,
      "reversed",
      bool);
   };
   var classList = function (list) {
      return $class($String.join(" ")($List.map($Basics.fst)($List.filter($Basics.snd)(list))));
   };
   var style = function (props) {
      return property("style")($Json$Encode.object($List.map(function (_v0) {
         return function () {
            switch (_v0.ctor)
            {case "_Tuple2":
               return {ctor: "_Tuple2"
                      ,_0: _v0._0
                      ,_1: $Json$Encode.string(_v0._1)};}
            _U.badCase($moduleName,
            "on line 156, column 35 to 57");
         }();
      })(props)));
   };
   var key = function (k) {
      return A2(stringProperty,
      "key",
      k);
   };
   _elm.Html.Attributes.values = {_op: _op
                                 ,key: key
                                 ,style: style
                                 ,$class: $class
                                 ,classList: classList
                                 ,id: id
                                 ,title: title
                                 ,hidden: hidden
                                 ,type$: type$
                                 ,value: value
                                 ,checked: checked
                                 ,placeholder: placeholder
                                 ,selected: selected
                                 ,accept: accept
                                 ,acceptCharset: acceptCharset
                                 ,action: action
                                 ,autocomplete: autocomplete
                                 ,autofocus: autofocus
                                 ,autosave: autosave
                                 ,disabled: disabled
                                 ,enctype: enctype
                                 ,formaction: formaction
                                 ,list: list
                                 ,maxlength: maxlength
                                 ,minlength: minlength
                                 ,method: method
                                 ,multiple: multiple
                                 ,name: name
                                 ,novalidate: novalidate
                                 ,pattern: pattern
                                 ,readonly: readonly
                                 ,required: required
                                 ,size: size
                                 ,$for: $for
                                 ,form: form
                                 ,max: max
                                 ,min: min
                                 ,step: step
                                 ,cols: cols
                                 ,rows: rows
                                 ,wrap: wrap
                                 ,href: href
                                 ,target: target
                                 ,download: download
                                 ,downloadAs: downloadAs
                                 ,hreflang: hreflang
                                 ,media: media
                                 ,ping: ping
                                 ,rel: rel
                                 ,ismap: ismap
                                 ,usemap: usemap
                                 ,shape: shape
                                 ,coords: coords
                                 ,src: src
                                 ,height: height
                                 ,width: width
                                 ,alt: alt
                                 ,autoplay: autoplay
                                 ,controls: controls
                                 ,loop: loop
                                 ,preload: preload
                                 ,poster: poster
                                 ,$default: $default
                                 ,kind: kind
                                 ,srclang: srclang
                                 ,sandbox: sandbox
                                 ,seamless: seamless
                                 ,srcdoc: srcdoc
                                 ,reversed: reversed
                                 ,start: start
                                 ,align: align
                                 ,colspan: colspan
                                 ,rowspan: rowspan
                                 ,headers: headers
                                 ,scope: scope
                                 ,async: async
                                 ,charset: charset
                                 ,content: content
                                 ,defer: defer
                                 ,httpEquiv: httpEquiv
                                 ,language: language
                                 ,scoped: scoped
                                 ,accesskey: accesskey
                                 ,contenteditable: contenteditable
                                 ,contextmenu: contextmenu
                                 ,dir: dir
                                 ,draggable: draggable
                                 ,dropzone: dropzone
                                 ,itemprop: itemprop
                                 ,lang: lang
                                 ,spellcheck: spellcheck
                                 ,tabindex: tabindex
                                 ,challenge: challenge
                                 ,keytype: keytype
                                 ,cite: cite
                                 ,datetime: datetime
                                 ,pubdate: pubdate
                                 ,manifest: manifest
                                 ,property: property
                                 ,attribute: attribute};
   return _elm.Html.Attributes.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.Events = Elm.Html.Events || {};
Elm.Html.Events.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   _elm.Html.Events = _elm.Html.Events || {};
   if (_elm.Html.Events.values)
   return _elm.Html.Events.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Html.Events",
   $Basics = Elm.Basics.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var keyCode = A2($Json$Decode._op[":="],
   "keyCode",
   $Json$Decode.$int);
   var targetChecked = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"checked"]),
   $Json$Decode.bool);
   var targetValue = A2($Json$Decode.at,
   _L.fromArray(["target"
                ,"value"]),
   $Json$Decode.string);
   var defaultOptions = $VirtualDom.defaultOptions;
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $VirtualDom.onWithOptions;
   var on = $VirtualDom.on;
   var messageOn = F3(function (name,
   addr,
   msg) {
      return A3(on,
      name,
      $Json$Decode.value,
      function (_v0) {
         return function () {
            return A2($Signal.message,
            addr,
            msg);
         }();
      });
   });
   var onClick = messageOn("click");
   var onDoubleClick = messageOn("dblclick");
   var onMouseMove = messageOn("mousemove");
   var onMouseDown = messageOn("mousedown");
   var onMouseUp = messageOn("mouseup");
   var onMouseEnter = messageOn("mouseenter");
   var onMouseLeave = messageOn("mouseleave");
   var onMouseOver = messageOn("mouseover");
   var onMouseOut = messageOn("mouseout");
   var onBlur = messageOn("blur");
   var onFocus = messageOn("focus");
   var onSubmit = messageOn("submit");
   var onKey = F3(function (name,
   addr,
   handler) {
      return A3(on,
      name,
      keyCode,
      function (code) {
         return A2($Signal.message,
         addr,
         handler(code));
      });
   });
   var onKeyUp = onKey("keyup");
   var onKeyDown = onKey("keydown");
   var onKeyPress = onKey("keypress");
   _elm.Html.Events.values = {_op: _op
                             ,onBlur: onBlur
                             ,onFocus: onFocus
                             ,onSubmit: onSubmit
                             ,onKeyUp: onKeyUp
                             ,onKeyDown: onKeyDown
                             ,onKeyPress: onKeyPress
                             ,onClick: onClick
                             ,onDoubleClick: onDoubleClick
                             ,onMouseMove: onMouseMove
                             ,onMouseDown: onMouseDown
                             ,onMouseUp: onMouseUp
                             ,onMouseEnter: onMouseEnter
                             ,onMouseLeave: onMouseLeave
                             ,onMouseOver: onMouseOver
                             ,onMouseOut: onMouseOut
                             ,on: on
                             ,onWithOptions: onWithOptions
                             ,defaultOptions: defaultOptions
                             ,targetValue: targetValue
                             ,targetChecked: targetChecked
                             ,keyCode: keyCode
                             ,Options: Options};
   return _elm.Html.Events.values;
};
Elm.IntDict = Elm.IntDict || {};
Elm.IntDict.make = function (_elm) {
   "use strict";
   _elm.IntDict = _elm.IntDict || {};
   if (_elm.IntDict.values)
   return _elm.IntDict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "IntDict",
   $Basics = Elm.Basics.make(_elm),
   $Bitwise = Elm.Bitwise.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var combineBits = F3(function (a,
   b,
   mask) {
      return A2($Bitwise.or,
      A2($Bitwise.and,
      a,
      $Bitwise.complement(mask)),
      A2($Bitwise.and,b,mask));
   });
   var Siblings = function (a) {
      return {ctor: "Siblings"
             ,_0: a};
   };
   var RightChild = function (a) {
      return {ctor: "RightChild"
             ,_0: a};
   };
   var LeftChild = function (a) {
      return {ctor: "LeftChild"
             ,_0: a};
   };
   var Same = {ctor: "Same"};
   var foldr = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty": return acc;
            case "Inner": return A3(foldr,
              f,
              A3(foldr,f,acc,dict._0.right),
              dict._0.left);
            case "Leaf": return A3(f,
              dict._0.key,
              dict._0.value,
              acc);}
         _U.badCase($moduleName,
         "between lines 342 and 347");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var toString$ = function (dict) {
      return A2($Basics._op["++"],
      "IntDict.fromList ",
      $Basics.toString(toList(dict)));
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty": return acc;
            case "Inner": return A3(foldl,
              f,
              A3(foldl,f,acc,dict._0.left),
              dict._0.right);
            case "Leaf": return A3(f,
              dict._0.key,
              dict._0.value,
              acc);}
         _U.badCase($moduleName,
         "between lines 331 and 336");
      }();
   });
   var findMax = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty":
            return $Maybe.Nothing;
            case "Inner":
            return findMax(dict._0.right);
            case "Leaf":
            return $Maybe.Just({ctor: "_Tuple2"
                               ,_0: dict._0.key
                               ,_1: dict._0.value});}
         _U.badCase($moduleName,
         "between lines 299 and 302");
      }();
   };
   var findMin = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty":
            return $Maybe.Nothing;
            case "Inner":
            return findMin(dict._0.left);
            case "Leaf":
            return $Maybe.Just({ctor: "_Tuple2"
                               ,_0: dict._0.key
                               ,_1: dict._0.value});}
         _U.badCase($moduleName,
         "between lines 290 and 293");
      }();
   };
   var size = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty": return 0;
            case "Inner":
            return dict._0.size;
            case "Leaf": return 1;}
         _U.badCase($moduleName,
         "between lines 253 and 257");
      }();
   };
   var isEmpty = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty": return true;}
         return false;
      }();
   };
   var highestBitSet = function (n) {
      return function () {
         var shiftOr = F2(function (n$,
         shift) {
            return A2($Bitwise.or,
            n$,
            A2($Bitwise.shiftRightLogical,
            n$,
            shift));
         });
         var n1 = A2(shiftOr,n,1);
         var n2 = A2(shiftOr,n1,2);
         var n3 = A2(shiftOr,n2,4);
         var n4 = A2(shiftOr,n3,8);
         var n5 = A2(shiftOr,n4,16);
         return A2($Bitwise.and,
         n5,
         $Bitwise.complement(A2($Bitwise.shiftRightLogical,
         n5,
         1)));
      }();
   };
   var signBit = highestBitSet(-1);
   var isBranchingBitSet = F2(function (p,
   n) {
      return function () {
         var n$ = A2($Bitwise.xor,
         n,
         signBit);
         return !_U.eq(A2($Bitwise.and,
         n$,
         p.branchingBit),
         0);
      }();
   });
   var higherBitMask = function (branchingBit) {
      return $Bitwise.complement(branchingBit * 2 - 1);
   };
   var prefixMatches = F2(function (p,
   n) {
      return _U.eq(A2($Bitwise.and,
      n,
      higherBitMask(p.branchingBit)),
      p.prefixBits);
   });
   var get = F2(function (key,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty":
            return $Maybe.Nothing;
            case "Inner":
            return $Basics.not(A2(prefixMatches,
              dict._0.prefix,
              key)) ? $Maybe.Nothing : A2(isBranchingBitSet,
              dict._0.prefix,
              key) ? A2(get,
              key,
              dict._0.right) : A2(get,
              key,
              dict._0.left);
            case "Leaf":
            return _U.eq(dict._0.key,
              key) ? $Maybe.Just(dict._0.value) : $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 272 and 284");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v19 = A2(get,key,dict);
         switch (_v19.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 262 and 264");
      }();
   });
   var lcp = F2(function (x,y) {
      return function () {
         var diff = A2($Bitwise.xor,
         x,
         y);
         var branchingBit = highestBitSet(diff);
         var mask = higherBitMask(branchingBit);
         var prefixBits = A2($Bitwise.and,
         x,
         mask);
         return {_: {}
                ,branchingBit: branchingBit
                ,prefixBits: prefixBits};
      }();
   });
   var determineInnerRelation = F2(function (l,
   r) {
      return function () {
         var parentOf = F2(function (p,
         c) {
            return A2(isBranchingBitSet,
            p.prefix,
            c.prefix.prefixBits) ? RightChild({_: {}
                                              ,p: p
                                              ,r: c}) : LeftChild({_: {}
                                                                  ,l: c
                                                                  ,p: p});
         });
         var rp = r.prefix;
         var lp = l.prefix;
         var mask = highestBitSet(A2($Basics.max,
         lp.branchingBit,
         rp.branchingBit));
         var modifiedRightPrefix = A3(combineBits,
         rp.prefixBits,
         $Bitwise.complement(lp.prefixBits),
         mask);
         var prefix = A2(lcp,
         lp.prefixBits,
         modifiedRightPrefix);
         return _U.eq(l.prefix,
         r.prefix) ? Same : _U.eq(prefix,
         l.prefix) ? A2(parentOf,
         l,
         r) : _U.eq(prefix,
         r.prefix) ? A2(parentOf,
         r,
         l) : A2(isBranchingBitSet,
         prefix,
         rp.prefixBits) ? Siblings({_: {}
                                   ,l: l
                                   ,parentPrefix: prefix
                                   ,r: r}) : Siblings({_: {}
                                                      ,l: r
                                                      ,parentPrefix: prefix
                                                      ,r: l});
      }();
   });
   var isValidKey = function (k) {
      return _U.eq(A2($Bitwise.or,
      k,
      0),
      k);
   };
   var Inner = function (a) {
      return {ctor: "Inner",_0: a};
   };
   var inner = F3(function (p,
   l,
   r) {
      return function () {
         var _v21 = {ctor: "_Tuple2"
                    ,_0: l
                    ,_1: r};
         switch (_v21.ctor)
         {case "_Tuple2":
            switch (_v21._0.ctor)
              {case "Empty": return r;}
              switch (_v21._1.ctor)
              {case "Empty": return l;}
              return Inner({_: {}
                           ,left: l
                           ,prefix: p
                           ,right: r
                           ,size: size(l) + size(r)});}
         _U.badCase($moduleName,
         "between lines 100 and 108");
      }();
   });
   var Leaf = function (a) {
      return {ctor: "Leaf",_0: a};
   };
   var leaf = F2(function (k,v) {
      return Leaf({_: {}
                  ,key: k
                  ,value: v});
   });
   var singleton = F2(function (key,
   value) {
      return A2(leaf,key,value);
   });
   var Empty = {ctor: "Empty"};
   var empty = Empty;
   var update = F3(function (key,
   alter,
   dict) {
      return function () {
         var join = F2(function (_v24,
         _v25) {
            return function () {
               switch (_v25.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v24.ctor)
                       {case "_Tuple2":
                          return function () {
                               var prefix = A2(lcp,
                               _v24._0,
                               _v25._0);
                               return A2(isBranchingBitSet,
                               prefix,
                               _v25._0) ? A3(inner,
                               prefix,
                               _v24._1,
                               _v25._1) : A3(inner,
                               prefix,
                               _v25._1,
                               _v24._1);
                            }();}
                       _U.badCase($moduleName,
                       "between lines 218 and 221");
                    }();}
               _U.badCase($moduleName,
               "between lines 218 and 221");
            }();
         });
         var alteredNode = function (v) {
            return function () {
               var _v32 = alter(v);
               switch (_v32.ctor)
               {case "Just": return A2(leaf,
                    key,
                    _v32._0);
                  case "Nothing": return empty;}
               _U.badCase($moduleName,
               "between lines 213 and 217");
            }();
         };
         return function () {
            switch (dict.ctor)
            {case "Empty":
               return alteredNode($Maybe.Nothing);
               case "Inner":
               return A2(prefixMatches,
                 dict._0.prefix,
                 key) ? A2(isBranchingBitSet,
                 dict._0.prefix,
                 key) ? A3(inner,
                 dict._0.prefix,
                 dict._0.left,
                 A3(update,
                 key,
                 alter,
                 dict._0.right)) : A3(inner,
                 dict._0.prefix,
                 A3(update,
                 key,
                 alter,
                 dict._0.left),
                 dict._0.right) : A2(join,
                 {ctor: "_Tuple2"
                 ,_0: key
                 ,_1: alteredNode($Maybe.Nothing)},
                 {ctor: "_Tuple2"
                 ,_0: dict._0.prefix.prefixBits
                 ,_1: dict});
               case "Leaf":
               return _U.eq(dict._0.key,
                 key) ? alteredNode($Maybe.Just(dict._0.value)) : A2(join,
                 {ctor: "_Tuple2"
                 ,_0: key
                 ,_1: alteredNode($Maybe.Nothing)},
                 {ctor: "_Tuple2"
                 ,_0: dict._0.key
                 ,_1: dict});}
            _U.badCase($moduleName,
            "between lines 223 and 236");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var uniteWith = F3(function (merger,
   d1,
   d2) {
      return function () {
         var mergeWith = F3(function (key,
         left,
         right) {
            return function () {
               var _v37 = {ctor: "_Tuple2"
                          ,_0: left
                          ,_1: right};
               switch (_v37.ctor)
               {case "_Tuple2":
                  switch (_v37._0.ctor)
                    {case "Just":
                       switch (_v37._1.ctor)
                         {case "Just":
                            return $Maybe.Just(A3(merger,
                              key,
                              _v37._0._0,
                              _v37._1._0));}
                         return left;}
                    switch (_v37._1.ctor)
                    {case "Just": return right;}
                    switch (_v37._0.ctor)
                    {case "Nothing":
                       switch (_v37._1.ctor)
                         {case "Nothing":
                            return $Debug.crash("IntDict.uniteWith: mergeWith was called with 2 Nothings. This is a bug in the implementation, please file a bug report!");}
                         break;}
                    break;}
               _U.badCase($moduleName,
               "between lines 406 and 412");
            }();
         });
         return function () {
            var _v43 = {ctor: "_Tuple2"
                       ,_0: d1
                       ,_1: d2};
            switch (_v43.ctor)
            {case "_Tuple2":
               switch (_v43._0.ctor)
                 {case "Empty": return _v43._1;}
                 switch (_v43._1.ctor)
                 {case "Empty": return _v43._0;}
                 switch (_v43._0.ctor)
                 {case "Leaf": return A3(update,
                      _v43._0._0.key,
                      function (r$) {
                         return A3(mergeWith,
                         _v43._0._0.key,
                         $Maybe.Just(_v43._0._0.value),
                         r$);
                      },
                      _v43._1);}
                 switch (_v43._1.ctor)
                 {case "Leaf": return A3(update,
                      _v43._1._0.key,
                      function (l$) {
                         return A3(mergeWith,
                         _v43._1._0.key,
                         l$,
                         $Maybe.Just(_v43._1._0.value));
                      },
                      _v43._0);}
                 switch (_v43._0.ctor)
                 {case "Inner":
                    switch (_v43._1.ctor)
                      {case "Inner":
                         return function () {
                              var _v50 = A2(determineInnerRelation,
                              _v43._0._0,
                              _v43._1._0);
                              switch (_v50.ctor)
                              {case "LeftChild":
                                 return A3(inner,
                                   _v50._0.p.prefix,
                                   A3(uniteWith,
                                   merger,
                                   _v50._0.p.left,
                                   Inner(_v50._0.l)),
                                   _v50._0.p.right);
                                 case "RightChild":
                                 return A3(inner,
                                   _v50._0.p.prefix,
                                   _v50._0.p.left,
                                   A3(uniteWith,
                                   merger,
                                   _v50._0.p.right,
                                   Inner(_v50._0.r)));
                                 case "Same": return A3(inner,
                                   _v43._0._0.prefix,
                                   A3(uniteWith,
                                   merger,
                                   _v43._0._0.left,
                                   _v43._1._0.left),
                                   A3(uniteWith,
                                   merger,
                                   _v43._0._0.right,
                                   _v43._1._0.right));
                                 case "Siblings":
                                 return A3(inner,
                                   _v50._0.parentPrefix,
                                   Inner(_v50._0.l),
                                   Inner(_v50._0.r));}
                              _U.badCase($moduleName,
                              "between lines 417 and 427");
                           }();}
                      break;}
                 break;}
            _U.badCase($moduleName,
            "between lines 412 and 427");
         }();
      }();
   });
   var union = uniteWith(F3(function (key,
   old,
   $new) {
      return old;
   }));
   var filter = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (k,
         v,
         d) {
            return A2(predicate,
            k,
            v) ? A3(insert,k,v,d) : d;
         });
         return A3(foldl,add,empty,dict);
      }();
   });
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "Empty": return empty;
            case "Inner": return A3(inner,
              dict._0.prefix,
              A2(map,f,dict._0.left),
              A2(map,f,dict._0.right));
            case "Leaf": return A2(leaf,
              dict._0.key,
              A2(f,
              dict._0.key,
              dict._0.value));}
         _U.badCase($moduleName,
         "between lines 322 and 325");
      }();
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v57) {
            return function () {
               switch (_v57.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v57._0)
                             ,_1: _v57._1} : {ctor: "_Tuple2"
                                             ,_0: _v57._0
                                             ,_1: A3(insert,
                                             key,
                                             value,
                                             _v57._1)};}
               _U.badCase($moduleName,
               "between lines 356 and 358");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var fromList = function (pairs) {
      return function () {
         var insert$ = F2(function (_v61,
         dict) {
            return function () {
               switch (_v61.ctor)
               {case "_Tuple2":
                  return A3(insert,
                    _v61._0,
                    _v61._1,
                    dict);}
               _U.badCase($moduleName,
               "on line 507, column 31 to 46");
            }();
         });
         return A3($List.foldl,
         insert$,
         empty,
         pairs);
      }();
   };
   var intersect = F2(function (d1,
   d2) {
      return function () {
         var _v65 = {ctor: "_Tuple2"
                    ,_0: d1
                    ,_1: d2};
         switch (_v65.ctor)
         {case "_Tuple2":
            switch (_v65._0.ctor)
              {case "Empty": return Empty;}
              switch (_v65._1.ctor)
              {case "Empty": return Empty;}
              switch (_v65._0.ctor)
              {case "Leaf": return A2(member,
                   _v65._0._0.key,
                   _v65._1) ? d1 : Empty;}
              switch (_v65._1.ctor)
              {case "Leaf":
                 return function () {
                      var _v72 = A2(get,
                      _v65._1._0.key,
                      _v65._0);
                      switch (_v72.ctor)
                      {case "Just": return A2(leaf,
                           _v65._1._0.key,
                           _v72._0);
                         case "Nothing": return Empty;}
                      _U.badCase($moduleName,
                      "between lines 443 and 446");
                   }();}
              switch (_v65._0.ctor)
              {case "Inner":
                 switch (_v65._1.ctor)
                   {case "Inner":
                      return function () {
                           var _v74 = A2(determineInnerRelation,
                           _v65._0._0,
                           _v65._1._0);
                           switch (_v74.ctor)
                           {case "LeftChild":
                              return _U.eq(_v74._0.p,
                                _v65._0._0) ? A2(intersect,
                                _v65._0._0.left,
                                d2) : A2(intersect,
                                d1,
                                _v65._1._0.left);
                              case "RightChild":
                              return _U.eq(_v74._0.p,
                                _v65._0._0) ? A2(intersect,
                                _v65._0._0.right,
                                d2) : A2(intersect,
                                d1,
                                _v65._1._0.right);
                              case "Same": return A3(inner,
                                _v65._0._0.prefix,
                                A2(intersect,
                                _v65._0._0.left,
                                _v65._1._0.left),
                                A2(intersect,
                                _v65._0._0.right,
                                _v65._1._0.right));
                              case "Siblings": return Empty;}
                           _U.badCase($moduleName,
                           "between lines 446 and 457");
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 439 and 457");
      }();
   });
   var diff = F2(function (d1,d2) {
      return function () {
         var _v78 = {ctor: "_Tuple2"
                    ,_0: d1
                    ,_1: d2};
         switch (_v78.ctor)
         {case "_Tuple2":
            switch (_v78._0.ctor)
              {case "Empty": return Empty;}
              switch (_v78._1.ctor)
              {case "Empty": return _v78._0;}
              switch (_v78._0.ctor)
              {case "Leaf": return A2(member,
                   _v78._0._0.key,
                   _v78._1) ? Empty : d1;}
              switch (_v78._1.ctor)
              {case "Leaf": return A2(remove,
                   _v78._1._0.key,
                   _v78._0);}
              switch (_v78._0.ctor)
              {case "Inner":
                 switch (_v78._1.ctor)
                   {case "Inner":
                      return function () {
                           var _v85 = A2(determineInnerRelation,
                           _v78._0._0,
                           _v78._1._0);
                           switch (_v85.ctor)
                           {case "LeftChild":
                              return _U.eq(_v85._0.p,
                                _v78._0._0) ? A3(inner,
                                _v78._0._0.prefix,
                                A2(diff,_v78._0._0.left,d2),
                                _v78._0._0.right) : A2(diff,
                                d1,
                                _v78._1._0.left);
                              case "RightChild":
                              return _U.eq(_v85._0.p,
                                _v78._0._0) ? A3(inner,
                                _v78._0._0.prefix,
                                _v78._0._0.left,
                                A2(diff,
                                _v78._0._0.right,
                                d2)) : A2(diff,
                                d1,
                                _v78._1._0.right);
                              case "Same": return A3(inner,
                                _v78._0._0.prefix,
                                A2(diff,
                                _v78._0._0.left,
                                _v78._1._0.left),
                                A2(diff,
                                _v78._0._0.right,
                                _v78._1._0.right));
                              case "Siblings": return d1;}
                           _U.badCase($moduleName,
                           "between lines 469 and 480");
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 464 and 480");
      }();
   });
   var InnerType = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,left: b
             ,prefix: a
             ,right: c
             ,size: d};
   });
   var KeyPrefix = F2(function (a,
   b) {
      return {_: {}
             ,branchingBit: b
             ,prefixBits: a};
   });
   _elm.IntDict.values = {_op: _op
                         ,isValidKey: isValidKey
                         ,empty: empty
                         ,singleton: singleton
                         ,insert: insert
                         ,update: update
                         ,remove: remove
                         ,isEmpty: isEmpty
                         ,size: size
                         ,member: member
                         ,get: get
                         ,findMin: findMin
                         ,findMax: findMax
                         ,filter: filter
                         ,map: map
                         ,foldl: foldl
                         ,foldr: foldr
                         ,partition: partition
                         ,uniteWith: uniteWith
                         ,union: union
                         ,intersect: intersect
                         ,diff: diff
                         ,keys: keys
                         ,values: values
                         ,toList: toList
                         ,fromList: fromList
                         ,toString$: toString$};
   return _elm.IntDict.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Decode = Elm.Json.Decode || {};
Elm.Json.Decode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Decode = _elm.Json.Decode || {};
   if (_elm.Json.Decode.values)
   return _elm.Json.Decode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Decode",
   $Array = Elm.Array.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Result = Elm.Result.make(_elm);
   var tuple8 = $Native$Json.decodeTuple8;
   var tuple7 = $Native$Json.decodeTuple7;
   var tuple6 = $Native$Json.decodeTuple6;
   var tuple5 = $Native$Json.decodeTuple5;
   var tuple4 = $Native$Json.decodeTuple4;
   var tuple3 = $Native$Json.decodeTuple3;
   var tuple2 = $Native$Json.decodeTuple2;
   var tuple1 = $Native$Json.decodeTuple1;
   var succeed = $Native$Json.succeed;
   var fail = $Native$Json.fail;
   var andThen = $Native$Json.andThen;
   var customDecoder = $Native$Json.customDecoder;
   var decodeValue = $Native$Json.runDecoderValue;
   var value = $Native$Json.decodeValue;
   var maybe = $Native$Json.decodeMaybe;
   var $null = $Native$Json.decodeNull;
   var array = $Native$Json.decodeArray;
   var list = $Native$Json.decodeList;
   var bool = $Native$Json.decodeBool;
   var $int = $Native$Json.decodeInt;
   var $float = $Native$Json.decodeFloat;
   var string = $Native$Json.decodeString;
   var oneOf = $Native$Json.oneOf;
   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
   var object8 = $Native$Json.decodeObject8;
   var object7 = $Native$Json.decodeObject7;
   var object6 = $Native$Json.decodeObject6;
   var object5 = $Native$Json.decodeObject5;
   var object4 = $Native$Json.decodeObject4;
   var object3 = $Native$Json.decodeObject3;
   var object2 = $Native$Json.decodeObject2;
   var object1 = $Native$Json.decodeObject1;
   _op[":="] = $Native$Json.decodeField;
   var at = F2(function (fields,
   decoder) {
      return A3($List.foldr,
      F2(function (x,y) {
         return A2(_op[":="],x,y);
      }),
      decoder,
      fields);
   });
   var decodeString = $Native$Json.runDecoderString;
   var map = $Native$Json.decodeObject1;
   var dict = function (decoder) {
      return A2(map,
      $Dict.fromList,
      keyValuePairs(decoder));
   };
   var Decoder = {ctor: "Decoder"};
   _elm.Json.Decode.values = {_op: _op
                             ,decodeString: decodeString
                             ,decodeValue: decodeValue
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,tuple1: tuple1
                             ,tuple2: tuple2
                             ,tuple3: tuple3
                             ,tuple4: tuple4
                             ,tuple5: tuple5
                             ,tuple6: tuple6
                             ,tuple7: tuple7
                             ,tuple8: tuple8
                             ,at: at
                             ,object1: object1
                             ,object2: object2
                             ,object3: object3
                             ,object4: object4
                             ,object5: object5
                             ,object6: object6
                             ,object7: object7
                             ,object8: object8
                             ,keyValuePairs: keyValuePairs
                             ,dict: dict
                             ,maybe: maybe
                             ,oneOf: oneOf
                             ,map: map
                             ,fail: fail
                             ,succeed: succeed
                             ,andThen: andThen
                             ,value: value
                             ,customDecoder: customDecoder
                             ,Decoder: Decoder};
   return _elm.Json.Decode.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Encode = Elm.Json.Encode || {};
Elm.Json.Encode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Encode = _elm.Json.Encode || {};
   if (_elm.Json.Encode.values)
   return _elm.Json.Encode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Encode",
   $Array = Elm.Array.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm);
   var list = $Native$Json.encodeList;
   var array = $Native$Json.encodeArray;
   var object = $Native$Json.encodeObject;
   var $null = $Native$Json.encodeNull;
   var bool = $Native$Json.identity;
   var $float = $Native$Json.identity;
   var $int = $Native$Json.identity;
   var string = $Native$Json.identity;
   var encode = $Native$Json.encode;
   var Value = {ctor: "Value"};
   _elm.Json.Encode.values = {_op: _op
                             ,encode: encode
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,list: list
                             ,array: array
                             ,object: object
                             ,Value: Value};
   return _elm.Json.Encode.values;
};
Elm.Levels = Elm.Levels || {};
Elm.Levels.make = function (_elm) {
   "use strict";
   _elm.Levels = _elm.Levels || {};
   if (_elm.Levels.values)
   return _elm.Levels.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Levels",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Types = Elm.Types.make(_elm);
   var lvl3 = function (input) {
      return function () {
         var edgesWithoutBuses = _L.fromArray([{_: {}
                                               ,from: 26
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 25}
                                              ,{_: {}
                                               ,from: 25
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 24}
                                              ,{_: {}
                                               ,from: 24
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 21}
                                              ,{_: {}
                                               ,from: 23
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 26}
                                              ,{_: {}
                                               ,from: 22
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 25}
                                              ,{_: {}
                                               ,from: 21
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 18}
                                              ,{_: {}
                                               ,from: 20
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 180.27756377319946}
                                               ,to: 24}
                                              ,{_: {}
                                               ,from: 19
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 141.4213562373095}
                                               ,to: 23}
                                              ,{_: {}
                                               ,from: 19
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 22}
                                              ,{_: {}
                                               ,from: 18
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 13}
                                              ,{_: {}
                                               ,from: 17
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 111.80339887498948}
                                               ,to: 20}
                                              ,{_: {}
                                               ,from: 17
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 111.80339887498948}
                                               ,to: 16}
                                              ,{_: {}
                                               ,from: 16
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 20}
                                              ,{_: {}
                                               ,from: 16
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 180.27756377319946}
                                               ,to: 10}
                                              ,{_: {}
                                               ,from: 16
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 200}
                                               ,to: 8}
                                              ,{_: {}
                                               ,from: 15
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 70.71067811865476}
                                               ,to: 17}
                                              ,{_: {}
                                               ,from: 14
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 19}
                                              ,{_: {}
                                               ,from: 13
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 10}
                                              ,{_: {}
                                               ,from: 12
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 150}
                                               ,to: 7}
                                              ,{_: {}
                                               ,from: 11
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 14}
                                              ,{_: {}
                                               ,from: 11
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 12}
                                              ,{_: {}
                                               ,from: 11
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 180.27756377319946}
                                               ,to: 7}
                                              ,{_: {}
                                               ,from: 11
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 250}
                                               ,to: 3}
                                              ,{_: {}
                                               ,from: 10
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 223}
                                               ,to: 19}
                                              ,{_: {}
                                               ,from: 10
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 11}
                                              ,{_: {}
                                               ,from: 9
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 158.11388300841898}
                                               ,to: 15}
                                              ,{_: {}
                                               ,from: 8
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 250}
                                               ,to: 15}
                                              ,{_: {}
                                               ,from: 8
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 111.80339887498948}
                                               ,to: 10}
                                              ,{_: {}
                                               ,from: 8
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 206.15528128088303}
                                               ,to: 9}
                                              ,{_: {}
                                               ,from: 7
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 180.27756377319946}
                                               ,to: 4}
                                              ,{_: {}
                                               ,from: 6
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 8}
                                              ,{_: {}
                                               ,from: 6
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 5}
                                              ,{_: {}
                                               ,from: 5
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 141.4213562373095}
                                               ,to: 8}
                                              ,{_: {}
                                               ,from: 4
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 250}
                                               ,to: 3}
                                              ,{_: {}
                                               ,from: 3
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 269.2582403567252}
                                               ,to: 10}
                                              ,{_: {}
                                               ,from: 3
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 282.842712474619}
                                               ,to: 8}
                                              ,{_: {}
                                               ,from: 3
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 200}
                                               ,to: 2}
                                              ,{_: {}
                                               ,from: 2
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 6}
                                              ,{_: {}
                                               ,from: 2
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 1}
                                              ,{_: {}
                                               ,from: 1
                                               ,label: {_: {}
                                                       ,agents: _L.fromArray([])
                                                       ,length: 100}
                                               ,to: 5}]);
         var carRoute3 = $Helpers.carRouteFromList(_L.fromArray([3
                                                                ,10
                                                                ,19
                                                                ,23
                                                                ,26]));
         var carRoute1 = $Helpers.carRouteFromList(_L.fromArray([1
                                                                ,5
                                                                ,8
                                                                ,10
                                                                ,11
                                                                ,12]));
         var nodes = _L.fromArray([{_: {}
                                   ,id: 1
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -350,y: -300}
                                           ,kind: $Types.CarSpawner({_: {}
                                                                    ,interval: 20
                                                                    ,nextIn: 0
                                                                    ,route: carRoute1
                                                                    ,speed: 4
                                                                    ,startEdge: {ctor: "_Tuple2"
                                                                                ,_0: 1
                                                                                ,_1: 5}})}}
                                  ,{_: {}
                                   ,id: 2
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -350,y: -200}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 3
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -350,y: 0}
                                           ,kind: $Types.CarSpawner({_: {}
                                                                    ,interval: 20
                                                                    ,nextIn: 0
                                                                    ,route: carRoute3
                                                                    ,speed: 4
                                                                    ,startEdge: {ctor: "_Tuple2"
                                                                                ,_0: 3
                                                                                ,_1: 10}})}}
                                  ,{_: {}
                                   ,id: 4
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -350,y: 250}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 5
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -250,y: -300}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 6
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -250,y: -200}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 7
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -250,y: 100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 8
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -150,y: -200}
                                           ,kind: $Types.BusStop({_: {}
                                                                 ,currentlyWaiting: 0.0
                                                                 ,label: "A"
                                                                 ,waitingDelta: 0.1})}}
                                  ,{_: {}
                                   ,id: 9
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -100,y: -400}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 10
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -100,y: -100}
                                           ,kind: $Types.StopSign({_: {}
                                                                  ,currentDelay: 0.0
                                                                  ,delay: 8})}}
                                  ,{_: {}
                                   ,id: 11
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -100,y: 0}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 12
                                   ,label: {_: {}
                                           ,coords: {_: {},x: -100,y: 100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 13
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 0,y: -100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 14
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 0,y: 0}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 15
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 50,y: -350}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 16
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 50,y: -200}
                                           ,kind: $Types.BusStop({_: {}
                                                                 ,currentlyWaiting: 0.0
                                                                 ,label: "B"
                                                                 ,waitingDelta: 0.1})}}
                                  ,{_: {}
                                   ,id: 17
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 100,y: -300}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 18
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 100,y: -100}
                                           ,kind: $Types.BusStop({_: {}
                                                                 ,currentlyWaiting: 0.0
                                                                 ,label: "D"
                                                                 ,waitingDelta: 0.1})}}
                                  ,{_: {}
                                   ,id: 19
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 100,y: 0}
                                           ,kind: $Types.StopSign({_: {}
                                                                  ,currentDelay: 0.0
                                                                  ,delay: 8})}}
                                  ,{_: {}
                                   ,id: 20
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 150,y: -200}
                                           ,kind: $Types.StopSign({_: {}
                                                                  ,currentDelay: 0.0
                                                                  ,delay: 8})}}
                                  ,{_: {}
                                   ,id: 21
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 200,y: -100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 22
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 200,y: 0}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 23
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 200,y: 100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 24
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 300,y: -100}
                                           ,kind: $Types.Intersection}}
                                  ,{_: {}
                                   ,id: 25
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 300,y: 0}
                                           ,kind: $Types.BusStop({_: {}
                                                                 ,currentlyWaiting: 0.0
                                                                 ,label: "C"
                                                                 ,waitingDelta: 0.1})}}
                                  ,{_: {}
                                   ,id: 26
                                   ,label: {_: {}
                                           ,coords: {_: {},x: 300,y: 100}
                                           ,kind: $Types.Intersection}}]);
         var networkWithoutBuses = A2($Graph.fromNodesAndEdges,
         nodes,
         edgesWithoutBuses);
         var busKind = $Types.Bus(A2($Helpers.busRouteFromList,
         input,
         networkWithoutBuses));
         var bus = {_: {}
                   ,color: $Color.green
                   ,kind: busKind
                   ,lastEdge: $Maybe.Nothing
                   ,speed: 4
                   ,totalDist: 0.0
                   ,travelled: 0.0};
         var edges = _L.fromArray([{_: {}
                                   ,from: 26
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 25}
                                  ,{_: {}
                                   ,from: 25
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 24}
                                  ,{_: {}
                                   ,from: 24
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 21}
                                  ,{_: {}
                                   ,from: 23
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 26}
                                  ,{_: {}
                                   ,from: 22
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 25}
                                  ,{_: {}
                                   ,from: 21
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 18}
                                  ,{_: {}
                                   ,from: 20
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 180.27756377319946}
                                   ,to: 24}
                                  ,{_: {}
                                   ,from: 19
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 141.4213562373095}
                                   ,to: 23}
                                  ,{_: {}
                                   ,from: 19
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 22}
                                  ,{_: {}
                                   ,from: 18
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 13}
                                  ,{_: {}
                                   ,from: 17
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 111.80339887498948}
                                   ,to: 20}
                                  ,{_: {}
                                   ,from: 17
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 111.80339887498948}
                                   ,to: 16}
                                  ,{_: {}
                                   ,from: 16
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 20}
                                  ,{_: {}
                                   ,from: 16
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 180.27756377319946}
                                   ,to: 10}
                                  ,{_: {}
                                   ,from: 16
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 200}
                                   ,to: 8}
                                  ,{_: {}
                                   ,from: 15
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 70.71067811865476}
                                   ,to: 17}
                                  ,{_: {}
                                   ,from: 14
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 19}
                                  ,{_: {}
                                   ,from: 13
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 10}
                                  ,{_: {}
                                   ,from: 12
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 150}
                                   ,to: 7}
                                  ,{_: {}
                                   ,from: 11
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 14}
                                  ,{_: {}
                                   ,from: 11
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 12}
                                  ,{_: {}
                                   ,from: 11
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 180.27756377319946}
                                   ,to: 7}
                                  ,{_: {}
                                   ,from: 11
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 250}
                                   ,to: 3}
                                  ,{_: {}
                                   ,from: 10
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 223}
                                   ,to: 19}
                                  ,{_: {}
                                   ,from: 10
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 11}
                                  ,{_: {}
                                   ,from: 9
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 158.11388300841898}
                                   ,to: 15}
                                  ,{_: {}
                                   ,from: 8
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([bus])
                                           ,length: 250}
                                   ,to: 15}
                                  ,{_: {}
                                   ,from: 8
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 111.80339887498948}
                                   ,to: 10}
                                  ,{_: {}
                                   ,from: 8
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 206.15528128088303}
                                   ,to: 9}
                                  ,{_: {}
                                   ,from: 7
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 180.27756377319946}
                                   ,to: 4}
                                  ,{_: {}
                                   ,from: 6
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 8}
                                  ,{_: {}
                                   ,from: 6
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 5}
                                  ,{_: {}
                                   ,from: 5
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 141.4213562373095}
                                   ,to: 8}
                                  ,{_: {}
                                   ,from: 4
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 250}
                                   ,to: 3}
                                  ,{_: {}
                                   ,from: 3
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 269.2582403567252}
                                   ,to: 10}
                                  ,{_: {}
                                   ,from: 3
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 282.842712474619}
                                   ,to: 8}
                                  ,{_: {}
                                   ,from: 3
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 200}
                                   ,to: 2}
                                  ,{_: {}
                                   ,from: 2
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 6}
                                  ,{_: {}
                                   ,from: 2
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 1}
                                  ,{_: {}
                                   ,from: 1
                                   ,label: {_: {}
                                           ,agents: _L.fromArray([])
                                           ,length: 100}
                                   ,to: 5}]);
         return A2($Graph.fromNodesAndEdges,
         nodes,
         edges);
      }();
   };
   var lvl2 = function (busRoute) {
      return function () {
         var edge = F4(function (from,
         to,
         distance,
         agents) {
            return A3($Graph.Edge,
            from,
            to,
            A2($Types.Road,
            distance,
            agents));
         });
         var edgesWithoutBuses = _L.fromArray([A4(edge,
                                              1,
                                              2,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              2,
                                              4,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              2,
                                              7,
                                              A2($Helpers.dist,1,2),
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              3,
                                              1,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              4,
                                              3,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              4,
                                              6,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              5,
                                              3,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              6,
                                              5,
                                              1.0,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              7,
                                              6,
                                              1.0,
                                              _L.fromArray([]))]);
         var node = F3(function (id,
         _v0,
         kind) {
            return function () {
               switch (_v0.ctor)
               {case "_Tuple2":
                  return A2($Graph.Node,
                    id,
                    A2($Types.Point,
                    A2($Types.Coords,_v0._0,_v0._1),
                    kind));}
               _U.badCase($moduleName,
               "on line 69, column 28 to 60");
            }();
         });
         var carRouteDown = $Helpers.carRouteFromList(_L.fromArray([5
                                                                   ,3
                                                                   ,1]));
         var carRouteUp = $Helpers.carRouteFromList(_L.fromArray([2
                                                                 ,4
                                                                 ,6]));
         var nodes = _L.fromArray([A3(node,
                                  1,
                                  {ctor: "_Tuple2"
                                  ,_0: 0.0
                                  ,_1: 0.0},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "C"
                                                 ,waitingDelta: 0.1}))
                                  ,A3(node,
                                  2,
                                  {ctor: "_Tuple2"
                                  ,_0: 1.0
                                  ,_1: 0.0},
                                  $Types.CarSpawner({_: {}
                                                    ,interval: 20
                                                    ,nextIn: 0
                                                    ,route: carRouteUp
                                                    ,speed: 5.0e-2
                                                    ,startEdge: {ctor: "_Tuple2"
                                                                ,_0: 2
                                                                ,_1: 4}}))
                                  ,A3(node,
                                  3,
                                  {ctor: "_Tuple2"
                                  ,_0: 0.0
                                  ,_1: 1.0},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "B"
                                                 ,waitingDelta: 0.2}))
                                  ,A3(node,
                                  4,
                                  {ctor: "_Tuple2"
                                  ,_0: 1.0
                                  ,_1: 1.0},
                                  $Types.StopSign({_: {}
                                                  ,currentDelay: 0.0
                                                  ,delay: 8}))
                                  ,A3(node,
                                  5,
                                  {ctor: "_Tuple2"
                                  ,_0: 0.0
                                  ,_1: 2.0},
                                  $Types.CarSpawner({_: {}
                                                    ,interval: 20
                                                    ,nextIn: 0
                                                    ,route: carRouteDown
                                                    ,speed: 5.0e-2
                                                    ,startEdge: {ctor: "_Tuple2"
                                                                ,_0: 5
                                                                ,_1: 3}}))
                                  ,A3(node,
                                  6,
                                  {ctor: "_Tuple2"
                                  ,_0: 1.0
                                  ,_1: 2.0},
                                  $Types.Intersection)
                                  ,A3(node,
                                  7,
                                  {ctor: "_Tuple2"
                                  ,_0: 2.0
                                  ,_1: 2.0},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "A"
                                                 ,waitingDelta: 0.1}))]);
         var networkWithoutBuses = A2($Graph.fromNodesAndEdges,
         nodes,
         edgesWithoutBuses);
         var busKind = $Types.Bus(A2($Helpers.busRouteFromList,
         busRoute,
         networkWithoutBuses));
         var bus = {_: {}
                   ,color: $Color.green
                   ,kind: busKind
                   ,lastEdge: $Maybe.Nothing
                   ,speed: 4.0e-2
                   ,totalDist: 0.0
                   ,travelled: 0.0};
         var edges = _L.fromArray([A4(edge,
                                  1,
                                  2,
                                  1.0,
                                  _L.fromArray([bus]))
                                  ,A4(edge,
                                  2,
                                  4,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  2,
                                  7,
                                  A2($Helpers.dist,1,2),
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  3,
                                  1,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  4,
                                  3,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  4,
                                  6,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  5,
                                  3,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  6,
                                  5,
                                  1.0,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  7,
                                  6,
                                  1.0,
                                  _L.fromArray([bus]))]);
         return A2($Graph.fromNodesAndEdges,
         nodes,
         edges);
      }();
   };
   var lvl1 = function (busRoute) {
      return function () {
         var r3 = $Basics.sqrt(3);
         var edge = F4(function (from,
         to,
         distance,
         agents) {
            return A3($Graph.Edge,
            from,
            to,
            A2($Types.Road,
            distance,
            agents));
         });
         var edgesWithoutBuses = _L.fromArray([A4(edge,
                                              1,
                                              2,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              2,
                                              3,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              3,
                                              4,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              4,
                                              5,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              5,
                                              6,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,
                                              6,
                                              1,
                                              r3,
                                              _L.fromArray([]))
                                              ,A4(edge,2,7,1,_L.fromArray([]))
                                              ,A4(edge,4,7,1,_L.fromArray([]))
                                              ,A4(edge,6,7,1,_L.fromArray([]))
                                              ,A4(edge,7,1,2,_L.fromArray([]))
                                              ,A4(edge,7,3,2,_L.fromArray([]))
                                              ,A4(edge,
                                              7,
                                              5,
                                              2,
                                              _L.fromArray([]))]);
         var node = F3(function (id,
         _v4,
         kind) {
            return function () {
               switch (_v4.ctor)
               {case "_Tuple2":
                  return A2($Graph.Node,
                    id,
                    A2($Types.Point,
                    A2($Types.Coords,_v4._0,_v4._1),
                    kind));}
               _U.badCase($moduleName,
               "on line 12, column 28 to 60");
            }();
         });
         var nodes = _L.fromArray([A3(node,
                                  1,
                                  {ctor: "_Tuple2",_0: r3,_1: 3},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "A"
                                                 ,waitingDelta: 0.1}))
                                  ,A3(node,
                                  2,
                                  {ctor: "_Tuple2"
                                  ,_0: r3 / 2
                                  ,_1: 3 / 2},
                                  $Types.Intersection)
                                  ,A3(node,
                                  3,
                                  {ctor: "_Tuple2",_0: 0,_1: 0},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "B"
                                                 ,waitingDelta: 0.1}))
                                  ,A3(node,
                                  4,
                                  {ctor: "_Tuple2",_0: r3,_1: 0},
                                  $Types.Intersection)
                                  ,A3(node,
                                  5,
                                  {ctor: "_Tuple2"
                                  ,_0: 2 * r3
                                  ,_1: 0},
                                  $Types.BusStop({_: {}
                                                 ,currentlyWaiting: 0.0
                                                 ,label: "C"
                                                 ,waitingDelta: 0.1}))
                                  ,A3(node,
                                  6,
                                  {ctor: "_Tuple2"
                                  ,_0: 3 / 2 * r3
                                  ,_1: 3 / 2},
                                  $Types.Intersection)
                                  ,A3(node,
                                  7,
                                  {ctor: "_Tuple2",_0: r3,_1: 1},
                                  $Types.StopSign({_: {}
                                                  ,currentDelay: 0
                                                  ,delay: 8}))]);
         var networkWithoutBuses = A2($Graph.fromNodesAndEdges,
         nodes,
         edgesWithoutBuses);
         var busKind = $Types.Bus(A2($Helpers.busRouteFromList,
         busRoute,
         networkWithoutBuses));
         var bus = {_: {}
                   ,color: $Color.green
                   ,kind: busKind
                   ,lastEdge: $Maybe.Nothing
                   ,speed: 5.0e-2
                   ,totalDist: 0.0
                   ,travelled: 0.0};
         var edges = _L.fromArray([A4(edge,
                                  1,
                                  2,
                                  r3,
                                  _L.fromArray([bus]))
                                  ,A4(edge,
                                  2,
                                  3,
                                  r3,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  3,
                                  4,
                                  r3,
                                  _L.fromArray([bus]))
                                  ,A4(edge,
                                  4,
                                  5,
                                  r3,
                                  _L.fromArray([]))
                                  ,A4(edge,
                                  5,
                                  6,
                                  r3,
                                  _L.fromArray([bus]))
                                  ,A4(edge,
                                  6,
                                  1,
                                  r3,
                                  _L.fromArray([]))
                                  ,A4(edge,2,7,1,_L.fromArray([]))
                                  ,A4(edge,4,7,1,_L.fromArray([]))
                                  ,A4(edge,6,7,1,_L.fromArray([]))
                                  ,A4(edge,7,1,2,_L.fromArray([]))
                                  ,A4(edge,7,3,2,_L.fromArray([]))
                                  ,A4(edge,
                                  7,
                                  5,
                                  2,
                                  _L.fromArray([]))]);
         return A2($Graph.fromNodesAndEdges,
         nodes,
         edges);
      }();
   };
   _elm.Levels.values = {_op: _op
                        ,lvl1: lvl1
                        ,lvl2: lvl2
                        ,lvl3: lvl3};
   return _elm.Levels.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = function (xs) {
      return A2(sortBy,
      $Basics.identity,
      xs);
   };
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var any = $Native$List.any;
   var all = F2(function (pred,
   xs) {
      return $Basics.not(A2(any,
      function ($) {
         return $Basics.not(pred($));
      },
      xs));
   });
   var foldr = $Native$List.foldr;
   var foldl = $Native$List.foldl;
   var length = function (xs) {
      return A3(foldl,
      F2(function (_v0,i) {
         return function () {
            return i + 1;
         }();
      }),
      0,
      xs);
   };
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var maximum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.max,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var minimum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.min,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var member = F2(function (x,
   xs) {
      return A2(any,
      function (a) {
         return _U.eq(a,x);
      },
      xs);
   });
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._1);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 87 and 89");
      }();
   };
   var head = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 75 and 77");
      }();
   };
   _op["::"] = $Native$List.cons;
   var map = F2(function (f,xs) {
      return A3(foldr,
      F2(function (x,acc) {
         return A2(_op["::"],
         f(x),
         acc);
      }),
      _L.fromArray([]),
      xs);
   });
   var filter = F2(function (pred,
   xs) {
      return function () {
         var conditionalCons = F2(function (x,
         xs$) {
            return pred(x) ? A2(_op["::"],
            x,
            xs$) : xs$;
         });
         return A3(foldr,
         conditionalCons,
         _L.fromArray([]),
         xs);
      }();
   });
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v15 = f(mx);
         switch (_v15.ctor)
         {case "Just":
            return A2(_op["::"],_v15._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 179 and 181");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var reverse = function (list) {
      return A3(foldl,
      F2(function (x,y) {
         return A2(_op["::"],x,y);
      }),
      _L.fromArray([]),
      list);
   };
   var scanl = F3(function (f,
   b,
   xs) {
      return function () {
         var scan1 = F2(function (x,
         accAcc) {
            return function () {
               switch (accAcc.ctor)
               {case "::": return A2(_op["::"],
                    A2(f,x,accAcc._0),
                    accAcc);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 148 and 151");
            }();
         });
         return reverse(A3(foldl,
         scan1,
         _L.fromArray([b]),
         xs));
      }();
   });
   var append = F2(function (xs,
   ys) {
      return function () {
         switch (ys.ctor)
         {case "[]": return xs;}
         return A3(foldr,
         F2(function (x,y) {
            return A2(_op["::"],x,y);
         }),
         ys,
         xs);
      }();
   });
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v21) {
            return function () {
               switch (_v21.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v21._0)
                                   ,_1: _v21._1} : {ctor: "_Tuple2"
                                                   ,_0: _v21._0
                                                   ,_1: A2(_op["::"],
                                                   x,
                                                   _v21._1)};}
               _U.badCase($moduleName,
               "between lines 301 and 303");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v25,
         _v26) {
            return function () {
               switch (_v26.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v25.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],
                                 _v25._0,
                                 _v26._0)
                                 ,_1: A2(_op["::"],
                                 _v25._1,
                                 _v26._1)};}
                       _U.badCase($moduleName,
                       "on line 339, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 339, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 350 and 356");
      }();
   });
   _elm.List.values = {_op: _op
                      ,isEmpty: isEmpty
                      ,length: length
                      ,reverse: reverse
                      ,member: member
                      ,head: head
                      ,tail: tail
                      ,filter: filter
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,append: append
                      ,concat: concat
                      ,intersperse: intersperse
                      ,partition: partition
                      ,unzip: unzip
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,filterMap: filterMap
                      ,concatMap: concatMap
                      ,indexedMap: indexedMap
                      ,foldr: foldr
                      ,foldl: foldl
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,all: all
                      ,any: any
                      ,scanl: scanl
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 47");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 66");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 66");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 78");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};
Elm.Model = Elm.Model || {};
Elm.Model.make = function (_elm) {
   "use strict";
   _elm.Model = _elm.Model || {};
   if (_elm.Model.values)
   return _elm.Model.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Model",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $GameScreens = Elm.GameScreens.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $Levels = Elm.Levels.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Time = Elm.Time.make(_elm),
   $Types = Elm.Types.make(_elm);
   var Model = F7(function (a,
   b,
   c,
   d,
   e,
   f,
   g) {
      return {_: {}
             ,counter: f
             ,levelData: b
             ,realtimeMs: e
             ,screen: a
             ,tickRate: g
             ,time: c
             ,timeAdvancing: d};
   });
   var LevelData = function (a) {
      return function (b) {
         return function (c) {
            return function (d) {
               return function (e) {
                  return function (f) {
                     return function (g) {
                        return function (h) {
                           return function (i) {
                              return function (j) {
                                 return function (k) {
                                    return {_: {}
                                           ,activeStopIdx: f
                                           ,changesRemaining: g
                                           ,coordScalingFactor: j
                                           ,globalTransform: k
                                           ,networkGenerator: b
                                           ,scalingFactor: i
                                           ,state: a
                                           ,stopToNodeMapping: e
                                           ,stops: d
                                           ,timeLimit: h
                                           ,trackedMetrics: c};
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
   var MakeActiveStopIndex = function (a) {
      return {ctor: "MakeActiveStopIndex"
             ,_0: a};
   };
   var StopDown = {ctor: "StopDown"};
   var StopUp = {ctor: "StopUp"};
   var EndLevel = {ctor: "EndLevel"};
   var ChangeStopOrder = function (a) {
      return {ctor: "ChangeStopOrder"
             ,_0: a};
   };
   var ToggleAdvancingTime = {ctor: "ToggleAdvancingTime"};
   var ResetState = {ctor: "ResetState"};
   var ResetTime = {ctor: "ResetTime"};
   var TickRealtime = function (a) {
      return {ctor: "TickRealtime"
             ,_0: a};
   };
   var GoToScreen = function (a) {
      return {ctor: "GoToScreen"
             ,_0: a};
   };
   var GameTime = function (a) {
      return {ctor: "GameTime"
             ,_0: a};
   };
   var incrementTime = function (curTime) {
      return function (_v0) {
         return function () {
            switch (_v0.ctor)
            {case "GameTime":
               return GameTime(_v0._0 + 1);}
            _U.badCase($moduleName,
            "on line 27, column 43 to 56");
         }();
      }(curTime);
   };
   var defaultLevelData = {_: {}
                          ,activeStopIdx: $Maybe.Nothing
                          ,changesRemaining: 0
                          ,coordScalingFactor: 1.0
                          ,globalTransform: {ctor: "_Tuple2"
                                            ,_0: 0
                                            ,_1: 0}
                          ,networkGenerator: $Levels.lvl1
                          ,scalingFactor: 1.0
                          ,state: A2($Types.State,
                          $Levels.lvl1(_L.fromArray([1
                                                    ,3
                                                    ,5])),
                          $Dict.empty)
                          ,stopToNodeMapping: $Dict.empty
                          ,stops: _L.fromArray([])
                          ,timeLimit: GameTime(10000)
                          ,trackedMetrics: _L.fromArray([])};
   var levelDataForScreen = function (screen) {
      return function () {
         switch (screen.ctor)
         {case "LevelScreen":
            return function () {
                 var _v5 = A2($Array.get,
                 screen._0,
                 $GameScreens.levelParamsList);
                 switch (_v5.ctor)
                 {case "Just":
                    return function () {
                         var input = A2($List.map,
                         function (s) {
                            return $Helpers.getOrFail(A2($Basics._op["++"],
                            "unknown bus stop ",
                            s))(A2($Dict.get,
                            s,
                            _v5._0.stopToNodeMapping));
                         },
                         _v5._0.stops);
                         var state = A2($Types.State,
                         _v5._0.level(input),
                         $Dict.empty);
                         return _U.replace([["state"
                                            ,state]
                                           ,["networkGenerator"
                                            ,_v5._0.level]
                                           ,["stops",_v5._0.stops]
                                           ,["stopToNodeMapping"
                                            ,_v5._0.stopToNodeMapping]
                                           ,["changesRemaining"
                                            ,_v5._0.changeLimit]
                                           ,["trackedMetrics"
                                            ,_v5._0.trackedMetrics]
                                           ,["scalingFactor"
                                            ,_v5._0.scalingFactor]
                                           ,["coordScalingFactor"
                                            ,_v5._0.coordScalingFactor]
                                           ,["globalTransform"
                                            ,_v5._0.globalTransform]],
                         defaultLevelData);
                      }();
                    case "Nothing":
                    return $Debug.crash(A2($Basics._op["++"],
                      "Level not found: ",
                      $Basics.toString(screen._0)));}
                 _U.badCase($moduleName,
                 "between lines 93 and 107");
              }();}
         return defaultLevelData;
      }();
   };
   var EndLevelScreen = function (a) {
      return {ctor: "EndLevelScreen"
             ,_0: a};
   };
   var MessageScreen = function (a) {
      return {ctor: "MessageScreen"
             ,_0: a};
   };
   var LevelScreen = function (a) {
      return {ctor: "LevelScreen"
             ,_0: a};
   };
   var ChooseLevelScreen = {ctor: "ChooseLevelScreen"};
   var TitleScreen = {ctor: "TitleScreen"};
   var initialModel = {_: {}
                      ,counter: 0
                      ,levelData: defaultLevelData
                      ,realtimeMs: 0
                      ,screen: TitleScreen
                      ,tickRate: 10
                      ,time: GameTime(0)
                      ,timeAdvancing: false};
   _elm.Model.values = {_op: _op
                       ,TitleScreen: TitleScreen
                       ,ChooseLevelScreen: ChooseLevelScreen
                       ,LevelScreen: LevelScreen
                       ,MessageScreen: MessageScreen
                       ,EndLevelScreen: EndLevelScreen
                       ,GameTime: GameTime
                       ,incrementTime: incrementTime
                       ,GoToScreen: GoToScreen
                       ,TickRealtime: TickRealtime
                       ,ResetTime: ResetTime
                       ,ResetState: ResetState
                       ,ToggleAdvancingTime: ToggleAdvancingTime
                       ,ChangeStopOrder: ChangeStopOrder
                       ,EndLevel: EndLevel
                       ,StopUp: StopUp
                       ,StopDown: StopDown
                       ,MakeActiveStopIndex: MakeActiveStopIndex
                       ,LevelData: LevelData
                       ,defaultLevelData: defaultLevelData
                       ,Model: Model
                       ,initialModel: initialModel
                       ,levelDataForScreen: levelDataForScreen};
   return _elm.Model.values;
};
Elm.Native.Array = {};
Elm.Native.Array.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Array = localRuntime.Native.Array || {};
	if (localRuntime.Native.Array.values)
	{
		return localRuntime.Native.Array.values;
	}
	if ('values' in Elm.Native.Array)
	{
		return localRuntime.Native.Array.values = Elm.Native.Array.values;
	}

	var List = Elm.Native.List.make(localRuntime);

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: "_Array",
		height: 0,
		table: new Array()
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				"Index " + i + " is out of range. Check the length of " +
				"your array first or use getMaybe or getWithDefault.");
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height == 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len == 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h == 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: "_Array",
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list == List.Nil)
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = new Array();
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i == M)
			{
				var leaf = {
					ctor: "_Array",
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: "_Array",
				height: 0,
				table: table.splice(0,i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length == 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length == h)
		{
			var node = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length == M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height == 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: "_Array",
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed != null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height == 0
					? List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? 0 : a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to == length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right == 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from == 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left == a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a,b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a,b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node)
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index == 0 || index == a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: "_Array",
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M == 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length)

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length == M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1,0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height == 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: "_Array",
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h == tree.height)
		{
			return tree;
		}

		return {
			ctor: "_Array",
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: "_Array",
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height == 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t == 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length == 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	Elm.Native.Array.values = {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray:toJSArray,
		fromJSArray:fromJSArray
	};

	return localRuntime.Native.Array.values = Elm.Native.Array.values;

}

Elm.Native.Basics = {};
Elm.Native.Basics.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Basics = localRuntime.Native.Basics || {};
	if (localRuntime.Native.Basics.values)
	{
		return localRuntime.Native.Basics.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	function div(a, b)
	{
		return (a/b)|0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error("Cannot perform mod 0. Division by zero error.");
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return Utils.cmp(a,b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return Utils.cmp(a,b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity
	}

	function truncate(n)
	{
		return n|0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
	}

	return localRuntime.Native.Basics.values = {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees:  degrees,
		turns:  turns,
		fromPolar:  fromPolar,
		toPolar:  toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: Utils.compare,

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
};

Elm.Native.Bitwise = {};
Elm.Native.Bitwise.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Bitwise = localRuntime.Native.Bitwise || {};
	if (localRuntime.Native.Bitwise.values)
	{
		return localRuntime.Native.Bitwise.values;
	}

	function and(a,b) { return a & b; }
	function or (a,b) { return a | b; }
	function xor(a,b) { return a ^ b; }
	function not(a) { return ~a; }
	function sll(a,offset) { return a << offset; }
	function sra(a,offset) { return a >> offset; }
	function srl(a,offset) { return a >>> offset; }

	return localRuntime.Native.Bitwise.values = {
		and: F2(and),
		or : F2(or ),
		xor: F2(xor),
		complement: not,
		shiftLeft           : F2(sll),
		shiftRightArithmatic: F2(sra),
		shiftRightLogical   : F2(srl)
	};

};

Elm.Native.Char = {};
Elm.Native.Char.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Char = localRuntime.Native.Char || {};
	if (localRuntime.Native.Char.values)
	{
		return localRuntime.Native.Char.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	return localRuntime.Native.Char.values = {
		fromCode : function(c) { return Utils.chr(String.fromCharCode(c)); },
		toCode   : function(c) { return c.charCodeAt(0); },
		toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
		toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
		toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
	};
};

Elm.Native.Color = {};
Elm.Native.Color.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Color = localRuntime.Native.Color || {};
	if (localRuntime.Native.Color.values)
	{
		return localRuntime.Native.Color.values;
	}

	function toCss(c)
	{
		var format = '';
		var colors = '';
		if (c.ctor === 'RGBA')
		{
			format = 'rgb';
			colors = c._0 + ', ' + c._1 + ', ' + c._2;
		}
		else
		{
			format = 'hsl';
			colors = (c._0 * 180 / Math.PI) + ', ' +
					 (c._1 * 100) + '%, ' +
					 (c._2 * 100) + '%';
		}
		if (c._3 === 1)
		{
			return format + '(' + colors + ')';
		}
		else
		{
			return format + 'a(' + colors + ', ' + c._3 + ')';
		}
	}

	return localRuntime.Native.Color.values = {
		toCss: toCss
	};

};

Elm.Native.Debug = {};
Elm.Native.Debug.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Debug = localRuntime.Native.Debug || {};
	if (localRuntime.Native.Debug.values)
	{
		return localRuntime.Native.Debug.values;
	}

	var toString = Elm.Native.Show.make(localRuntime).toString;

	function log(tag, value)
	{
		var msg = tag + ': ' + toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	function tracePath(tag, form)
	{
		if (localRuntime.debug)
		{
			return localRuntime.debug.trace(tag, form);
		}
		return form;
	}

	function watch(tag, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, value);
		}
		return value;
	}

	function watchSummary(tag, summarize, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, summarize(value));
		}
		return value;
	}

	return localRuntime.Native.Debug.values = {
		crash: crash,
		tracePath: F2(tracePath),
		log: F2(log),
		watch: F2(watch),
		watchSummary:F3(watchSummary),
	};
};

Elm.Native.Effects = {};
Elm.Native.Effects.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Effects = localRuntime.Native.Effects || {};
	if (localRuntime.Native.Effects.values)
	{
		return localRuntime.Native.Effects.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function raf(timeToTask)
	{
		return Task.asyncFunction(function(callback) {
			requestAnimationFrame(function(time) {
				Task.perform(timeToTask(time));
			});
			callback(Task.succeed(Utils.Tuple0));
		});
	}

	return localRuntime.Native.Effects.values = {
		requestAnimationFrame: raf
	};

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Collage = Elm.Native.Graphics.Collage || {};

// definition
Elm.Native.Graphics.Collage.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Collage = localRuntime.Native.Graphics.Collage || {};
	if ('values' in localRuntime.Native.Graphics.Collage)
	{
		return localRuntime.Native.Graphics.Collage.values;
	}

	// okay, we cannot short-ciruit, so now we define everything
	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var NativeElement = Elm.Native.Graphics.Element.make(localRuntime);
	var Transform = Elm.Transform2D.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function setStrokeStyle(ctx, style)
	{
		ctx.lineWidth = style.width;

		var cap = style.cap.ctor;
		ctx.lineCap = cap === 'Flat'
			? 'butt'
			: cap === 'Round'
				? 'round'
				: 'square';

		var join = style.join.ctor;
		ctx.lineJoin = join === 'Smooth'
			? 'round'
			: join === 'Sharp'
				? 'miter'
				: 'bevel';

		ctx.miterLimit = style.join._0 || 10;
		ctx.strokeStyle = Color.toCss(style.color);
	}

	function setFillStyle(ctx, style)
	{
		var sty = style.ctor;
		ctx.fillStyle = sty === 'Solid'
			? Color.toCss(style._0)
			: sty === 'Texture'
				? texture(redo, ctx, style._0)
				: gradient(ctx, style._0);
	}

	function trace(ctx, path)
	{
		var points = List.toArray(path);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		ctx.moveTo(points[i]._0, points[i]._1);
		while (i--)
		{
			ctx.lineTo(points[i]._0, points[i]._1);
		}
		if (path.closed)
		{
			i = points.length - 1;
			ctx.lineTo(points[i]._0, points[i]._1);
		}
	}

	function line(ctx,style,path)
	{
		(style.dashing.ctor === '[]')
			? trace(ctx, path)
			: customLineHelp(ctx, style, path);
		ctx.scale(1,-1);
		ctx.stroke();
	}

	function customLineHelp(ctx, style, path)
	{
		var points = List.toArray(path);
		if (path.closed)
		{
			points.push(points[0]);
		}
		var pattern = List.toArray(style.dashing);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		var x0 = points[i]._0, y0 = points[i]._1;
		var x1=0, y1=0, dx=0, dy=0, remaining=0, nx=0, ny=0;
		var pindex = 0, plen = pattern.length;
		var draw = true, segmentLength = pattern[0];
		ctx.moveTo(x0,y0);
		while (i--)
		{
			x1 = points[i]._0;
			y1 = points[i]._1;
			dx = x1 - x0;
			dy = y1 - y0;
			remaining = Math.sqrt(dx * dx + dy * dy);
			while (segmentLength <= remaining)
			{
				x0 += dx * segmentLength / remaining;
				y0 += dy * segmentLength / remaining;
				ctx[draw ? 'lineTo' : 'moveTo'](x0, y0);
				// update starting position
				dx = x1 - x0;
				dy = y1 - y0;
				remaining = Math.sqrt(dx * dx + dy * dy);
				// update pattern
				draw = !draw;
				pindex = (pindex + 1) % plen;
				segmentLength = pattern[pindex];
			}
			if (remaining > 0)
			{
				ctx[draw ? 'lineTo' : 'moveTo'](x1, y1);
				segmentLength -= remaining;
			}
			x0 = x1;
			y0 = y1;
		}
	}

	function drawLine(ctx, style, path)
	{
		setStrokeStyle(ctx, style);
		return line(ctx, style, path);
	}

	function texture(redo, ctx, src)
	{
		var img = new Image();
		img.src = src;
		img.onload = redo;
		return ctx.createPattern(img, 'repeat');
	}

	function gradient(ctx, grad)
	{
		var g;
		var stops = [];
		if (grad.ctor === 'Linear')
		{
			var p0 = grad._0, p1 = grad._1;
			g = ctx.createLinearGradient(p0._0, -p0._1, p1._0, -p1._1);
			stops = List.toArray(grad._2);
		}
		else
		{
			var p0 = grad._0, p2 = grad._2;
			g = ctx.createRadialGradient(p0._0, -p0._1, grad._1, p2._0, -p2._1, grad._3);
			stops = List.toArray(grad._4);
		}
		var len = stops.length;
		for (var i = 0; i < len; ++i)
		{
			var stop = stops[i];
			g.addColorStop(stop._0, Color.toCss(stop._1));
		}
		return g;
	}

	function drawShape(redo, ctx, style, path)
	{
		trace(ctx, path);
		setFillStyle(ctx, style);
		ctx.scale(1,-1);
		ctx.fill();
	}


	// TEXT RENDERING

	function fillText(redo, ctx, text)
	{
		drawText(ctx, text, ctx.fillText);
	}

	function strokeText(redo, ctx, style, text)
	{
		setStrokeStyle(ctx, style);
		// Use native canvas API for dashes only for text for now
		// Degrades to non-dashed on IE 9 + 10
		if (style.dashing.ctor !== '[]' && ctx.setLineDash)
		{
			var pattern = List.toArray(style.dashing);
			ctx.setLineDash(pattern);
		}
		drawText(ctx, text, ctx.strokeText);
	}

	function drawText(ctx, text, canvasDrawFn)
	{
		var textChunks = chunkText(defaultContext, text);

		var totalWidth = 0;
		var maxHeight = 0;
		var numChunks = textChunks.length;

		ctx.scale(1,-1);

		for (var i = numChunks; i--; )
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			var metrics = ctx.measureText(chunk.text);
			chunk.width = metrics.width;
			totalWidth += chunk.width;
			if (chunk.height > maxHeight)
			{
				maxHeight = chunk.height;
			}
		}

		var x = -totalWidth / 2.0;
		for (var i = 0; i < numChunks; ++i)
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			ctx.fillStyle = chunk.color;
			canvasDrawFn.call(ctx, chunk.text, x, maxHeight / 2);
			x += chunk.width;
		}
	}

	function toFont(props)
	{
		return [
			props['font-style'],
			props['font-variant'],
			props['font-weight'],
			props['font-size'],
			props['font-family']
		].join(' ');
	}


	// Convert the object returned by the text module
	// into something we can use for styling canvas text
	function chunkText(context, text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			var leftChunks = chunkText(context, text._0);
			var rightChunks = chunkText(context, text._1);
			return leftChunks.concat(rightChunks);
		}
		if (tag === 'Text:Text')
		{
			return [{
				text: text._0,
				color: context.color,
				height: context['font-size'].slice(0,-2) | 0,
				font: toFont(context)
			}];
		}
		if (tag === 'Text:Meta')
		{
			var newContext = freshContext(text._0, context);
			return chunkText(newContext, text._1);
		}
	}

	function freshContext(props, ctx)
	{
		return {
			'font-style': props['font-style'] || ctx['font-style'],
			'font-variant': props['font-variant'] || ctx['font-variant'],
			'font-weight': props['font-weight'] || ctx['font-weight'],
			'font-size': props['font-size'] || ctx['font-size'],
			'font-family': props['font-family'] || ctx['font-family'],
			'color': props['color'] || ctx['color']
		};
	}

	var defaultContext = {
		'font-style': 'normal',
		'font-variant': 'normal',
		'font-weight': 'normal',
		'font-size': '12px',
		'font-family': 'sans-serif',
		'color': 'black'
	};


	// IMAGES

	function drawImage(redo, ctx, form)
	{
		var img = new Image();
		img.onload = redo;
		img.src = form._3;
		var w = form._0,
			h = form._1,
			pos = form._2,
			srcX = pos._0,
			srcY = pos._1,
			srcW = w,
			srcH = h,
			destX = -w/2,
			destY = -h/2,
			destW = w,
			destH = h;

		ctx.scale(1,-1);
		ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
	}

	function renderForm(redo, ctx, form)
	{
		ctx.save();

		var x = form.x,
			y = form.y,
			theta = form.theta,
			scale = form.scale;

		if (x !== 0 || y !== 0)
		{
			ctx.translate(x, y);
		}
		if (theta !== 0)
		{
			ctx.rotate(theta);
		}
		if (scale !== 1)
		{
			ctx.scale(scale,scale);
		}
		if (form.alpha !== 1)
		{
			ctx.globalAlpha = ctx.globalAlpha * form.alpha;
		}

		ctx.beginPath();
		var f = form.form;
		switch (f.ctor)
		{
			case 'FPath':
				drawLine(ctx, f._0, f._1);
				break;

			case 'FImage':
				drawImage(redo, ctx, f);
				break;

			case 'FShape':
				if (f._0.ctor === 'Line')
				{
					f._1.closed = true;
					drawLine(ctx, f._0._0, f._1);
				}
				else
				{
					drawShape(redo, ctx, f._0._0, f._1);
				}
				break;

			case 'FText':
				fillText(redo, ctx, f._0);
				break;

			case 'FOutlinedText':
				strokeText(redo, ctx, f._0, f._1);
				break;
		}
		ctx.restore();
	}

	function formToMatrix(form)
	{
	   var scale = form.scale;
	   var matrix = A6( Transform.matrix, scale, 0, 0, scale, form.x, form.y );

	   var theta = form.theta
	   if (theta !== 0)
	   {
		   matrix = A2( Transform.multiply, matrix, Transform.rotation(theta) );
	   }

	   return matrix;
	}

	function str(n)
	{
		if (n < 0.00001 && n > -0.00001)
		{
			return 0;
		}
		return n;
	}

	function makeTransform(w, h, form, matrices)
	{
		var props = form.form._0.props;
		var m = A6( Transform.matrix, 1, 0, 0, -1,
					(w - props.width ) / 2,
					(h - props.height) / 2 );
		var len = matrices.length;
		for (var i = 0; i < len; ++i)
		{
			m = A2( Transform.multiply, m, matrices[i] );
		}
		m = A2( Transform.multiply, m, formToMatrix(form) );

		return 'matrix(' +
			str( m[0]) + ', ' + str( m[3]) + ', ' +
			str(-m[1]) + ', ' + str(-m[4]) + ', ' +
			str( m[2]) + ', ' + str( m[5]) + ')';
	}

	function stepperHelp(list)
	{
		var arr = List.toArray(list);
		var i = 0;
		function peekNext()
		{
			return i < arr.length ? arr[i].form.ctor : '';
		}
		// assumes that there is a next element
		function next()
		{
			var out = arr[i];
			++i;
			return out;
		}
		return {
			peekNext: peekNext,
			next: next
		};
	}

	function formStepper(forms)
	{
		var ps = [stepperHelp(forms)];
		var matrices = [];
		var alphas = [];
		function peekNext()
		{
			var len = ps.length;
			var formType = '';
			for (var i = 0; i < len; ++i )
			{
				if (formType = ps[i].peekNext()) return formType;
			}
			return '';
		}
		// assumes that there is a next element
		function next(ctx)
		{
			while (!ps[0].peekNext())
			{
				ps.shift();
				matrices.pop();
				alphas.shift();
				if (ctx)
				{
					ctx.restore();
				}
			}
			var out = ps[0].next();
			var f = out.form;
			if (f.ctor === 'FGroup')
			{
				ps.unshift(stepperHelp(f._1));
				var m = A2(Transform.multiply, f._0, formToMatrix(out));
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
				matrices.push(m);

				var alpha = (alphas[0] || 1) * out.alpha;
				alphas.unshift(alpha);
				ctx.globalAlpha = alpha;
			}
			return out;
		}
		function transforms()
		{
			return matrices;
		}
		function alpha()
		{
			return alphas[0] || 1;
		}
		return {
			peekNext: peekNext,
			next: next,
			transforms: transforms,
			alpha: alpha
		};
	}

	function makeCanvas(w,h)
	{
		var canvas = NativeElement.createNode('canvas');
		canvas.style.width  = w + 'px';
		canvas.style.height = h + 'px';
		canvas.style.display = "block";
		canvas.style.position = "absolute";
		var ratio = window.devicePixelRatio || 1;
		canvas.width  = w * ratio;
		canvas.height = h * ratio;
		return canvas;
	}

	function render(model)
	{
		var div = NativeElement.createNode('div');
		div.style.overflow = 'hidden';
		div.style.position = 'relative';
		update(div, model, model);
		return div;
	}

	function nodeStepper(w,h,div)
	{
		var kids = div.childNodes;
		var i = 0;
		var ratio = window.devicePixelRatio || 1;

		function transform(transforms, ctx)
		{
			ctx.translate( w / 2 * ratio, h / 2 * ratio );
			ctx.scale( ratio, -ratio );
			var len = transforms.length;
			for (var i = 0; i < len; ++i)
			{
				var m = transforms[i];
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
			}
			return ctx;
		}
		function nextContext(transforms)
		{
			while (i < kids.length)
			{
				var node = kids[i];
				if (node.getContext)
				{
					node.width = w * ratio;
					node.height = h * ratio;
					node.style.width = w + 'px';
					node.style.height = h + 'px';
					++i;
					return transform(transforms, node.getContext('2d'));
				}
				div.removeChild(node);
			}
			var canvas = makeCanvas(w,h);
			div.appendChild(canvas);
			// we have added a new node, so we must step our position
			++i;
			return transform(transforms, canvas.getContext('2d'));
		}
		function addElement(matrices, alpha, form)
		{
			var kid = kids[i];
			var elem = form.form._0;

			var node = (!kid || kid.getContext)
				? NativeElement.render(elem)
				: NativeElement.update(kid, kid.oldElement, elem);

			node.style.position = 'absolute';
			node.style.opacity = alpha * form.alpha * elem.props.opacity;
			NativeElement.addTransform(node.style, makeTransform(w, h, form, matrices));
			node.oldElement = elem;
			++i;
			if (!kid)
			{
				div.appendChild(node);
			}
			else
			{
				div.insertBefore(node, kid);
			}
		}
		function clearRest()
		{
			while (i < kids.length)
			{
				div.removeChild(kids[i]);
			}
		}
		return {
			nextContext: nextContext,
			addElement: addElement,
			clearRest: clearRest
		};
	}


	function update(div, _, model)
	{
		var w = model.w;
		var h = model.h;

		var forms = formStepper(model.forms);
		var nodes = nodeStepper(w,h,div);
		var ctx = null;
		var formType = '';

		while (formType = forms.peekNext())
		{
			// make sure we have context if we need it
			if (ctx === null && formType !== 'FElement')
			{
				ctx = nodes.nextContext(forms.transforms());
				ctx.globalAlpha = forms.alpha();
			}

			var form = forms.next(ctx);
			// if it is FGroup, all updates are made within formStepper when next is called.
			if (formType === 'FElement')
			{
				// update or insert an element, get a new context
				nodes.addElement(forms.transforms(), forms.alpha(), form);
				ctx = null;
			}
			else if (formType !== 'FGroup')
			{
				renderForm(function() { update(div, model, model); }, ctx, form);
			}
		}
		nodes.clearRest();
		return div;
	}


	function collage(w,h,forms)
	{
		return A3(NativeElement.newElement, w, h, {
			ctor: 'Custom',
			type: 'Collage',
			render: render,
			update: update,
			model: {w:w, h:h, forms:forms}
		});
	}

	return localRuntime.Native.Graphics.Collage.values = {
		collage: F3(collage)
	};

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
	if ('values' in localRuntime.Native.Graphics.Element)
	{
		return localRuntime.Native.Graphics.Element.values;
	}

	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Text = Elm.Native.Text.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CREATION

	function createNode(elementType)
	{
		var node = document.createElement(elementType);
		node.style.padding = "0";
		node.style.margin = "0";
		return node;
	}


	function newElement(width, height, elementPrim)
	{
		return {
			_: {},
			element: elementPrim,
			props: {
				_: {},
				id: Utils.guid(),
				width: width,
				height: height,
				opacity: 1,
				color: Maybe.Nothing,
				href: "",
				tag: "",
				hover: Utils.Tuple0,
				click: Utils.Tuple0
			}
		};
	}


	// PROPERTIES

	function setProps(elem, node)
	{
		var props = elem.props;

		var element = elem.element;
		var width = props.width - (element.adjustWidth || 0);
		var height = props.height - (element.adjustHeight || 0);
		node.style.width  = (width |0) + 'px';
		node.style.height = (height|0) + 'px';

		if (props.opacity !== 1)
		{
			node.style.opacity = props.opacity;
		}

		if (props.color.ctor === 'Just')
		{
			node.style.backgroundColor = Color.toCss(props.color._0);
		}

		if (props.tag !== '')
		{
			node.id = props.tag;
		}

		if (props.hover.ctor !== '_Tuple0')
		{
			addHover(node, props.hover);
		}

		if (props.click.ctor !== '_Tuple0')
		{
			addClick(node, props.click);
		}

		if (props.href !== '')
		{
			var anchor = createNode('a');
			anchor.href = props.href;
			anchor.style.display = 'block';
			anchor.style.pointerEvents = 'auto';
			anchor.appendChild(node);
			node = anchor;
		}

		return node;
	}

	function addClick(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_click_handler = handler;
		function trigger(ev)
		{
			e.elm_click_handler(Utils.Tuple0);
			ev.stopPropagation();
		}
		e.elm_click_trigger = trigger;
		e.addEventListener('click', trigger);
	}

	function removeClick(e, handler)
	{
		if (e.elm_click_trigger)
		{
			e.removeEventListener('click', e.elm_click_trigger);
			e.elm_click_trigger = null;
			e.elm_click_handler = null;
		}
	}

	function addHover(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_hover_handler = handler;
		e.elm_hover_count = 0;

		function over(evt)
		{
			if (e.elm_hover_count++ > 0) return;
			e.elm_hover_handler(true);
			evt.stopPropagation();
		}
		function out(evt)
		{
			if (e.contains(evt.toElement || evt.relatedTarget)) return;
			e.elm_hover_count = 0;
			e.elm_hover_handler(false);
			evt.stopPropagation();
		}
		e.elm_hover_over = over;
		e.elm_hover_out = out;
		e.addEventListener('mouseover', over);
		e.addEventListener('mouseout', out);
	}

	function removeHover(e)
	{
		e.elm_hover_handler = null;
		if (e.elm_hover_over)
		{
			e.removeEventListener('mouseover', e.elm_hover_over);
			e.elm_hover_over = null;
		}
		if (e.elm_hover_out)
		{
			e.removeEventListener('mouseout', e.elm_hover_out);
			e.elm_hover_out = null;
		}
	}


	// IMAGES

	function image(props, img)
	{
		switch (img._0.ctor)
		{
			case 'Plain':
				return plainImage(img._3);

			case 'Fitted':
				return fittedImage(props.width, props.height, img._3);

			case 'Cropped':
				return croppedImage(img,props.width,props.height,img._3);

			case 'Tiled':
				return tiledImage(img._3);
		}
	}

	function plainImage(src)
	{
		var img = createNode('img');
		img.src = src;
		img.name = src;
		img.style.display = "block";
		return img;
	}

	function tiledImage(src)
	{
		var div = createNode('div');
		div.style.backgroundImage = 'url(' + src + ')';
		return div;
	}

	function fittedImage(w, h, src)
	{
		var div = createNode('div');
		div.style.background = 'url(' + src + ') no-repeat center';
		div.style.webkitBackgroundSize = 'cover';
		div.style.MozBackgroundSize = 'cover';
		div.style.OBackgroundSize = 'cover';
		div.style.backgroundSize = 'cover';
		return div;
	}

	function croppedImage(elem, w, h, src)
	{
		var pos = elem._0._0;
		var e = createNode('div');
		e.style.overflow = "hidden";

		var img = createNode('img');
		img.onload = function() {
			var sw = w / elem._1, sh = h / elem._2;
			img.style.width = ((this.width * sw)|0) + 'px';
			img.style.height = ((this.height * sh)|0) + 'px';
			img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
			img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
		};
		img.src = src;
		img.name = src;
		e.appendChild(img);
		return e;
	}


	// FLOW

	function goOut(node)
	{
		node.style.position = 'absolute';
		return node;
	}
	function goDown(node)
	{
		return node;
	}
	function goRight(node)
	{
		node.style.styleFloat = 'left';
		node.style.cssFloat = 'left';
		return node;
	}

	var directionTable = {
		DUp    : goDown,
		DDown  : goDown,
		DLeft  : goRight,
		DRight : goRight,
		DIn    : goOut,
		DOut   : goOut
	};
	function needsReversal(dir)
	{
		return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
	}

	function flow(dir,elist)
	{
		var array = List.toArray(elist);
		var container = createNode('div');
		var goDir = directionTable[dir];
		if (goDir == goOut)
		{
			container.style.pointerEvents = 'none';
		}
		if (needsReversal(dir))
		{
			array.reverse();
		}
		var len = array.length;
		for (var i = 0; i < len; ++i)
		{
			container.appendChild(goDir(render(array[i])));
		}
		return container;
	}


	// CONTAINER

	function toPos(pos)
	{
		return pos.ctor === "Absolute"
			? pos._0 + "px"
			: (pos._0 * 100) + "%";
	}

	// must clear right, left, top, bottom, and transform
	// before calling this function
	function setPos(pos,elem,e)
	{
		var element = elem.element;
		var props = elem.props;
		var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
		var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

		e.style.position = 'absolute';
		e.style.margin = 'auto';
		var transform = '';

		switch (pos.horizontal.ctor)
		{
			case 'P':
				e.style.right = toPos(pos.x);
				e.style.removeProperty('left');
				break;

			case 'Z':
				transform = 'translateX(' + ((-w/2)|0) + 'px) ';

			case 'N':
				e.style.left = toPos(pos.x);
				e.style.removeProperty('right');
				break;
		}
		switch (pos.vertical.ctor)
		{
			case 'N':
				e.style.bottom = toPos(pos.y);
				e.style.removeProperty('top');
				break;

			case 'Z':
				transform += 'translateY(' + ((-h/2)|0) + 'px)';

			case 'P':
				e.style.top = toPos(pos.y);
				e.style.removeProperty('bottom');
				break;
		}
		if (transform !== '')
		{
			addTransform(e.style, transform);
		}
		return e;
	}

	function addTransform(style, transform)
	{
		style.transform       = transform;
		style.msTransform     = transform;
		style.MozTransform    = transform;
		style.webkitTransform = transform;
		style.OTransform      = transform;
	}

	function container(pos,elem)
	{
		var e = render(elem);
		setPos(pos, elem, e);
		var div = createNode('div');
		div.style.position = 'relative';
		div.style.overflow = 'hidden';
		div.appendChild(e);
		return div;
	}


	function rawHtml(elem)
	{
		var html = elem.html;
		var guid = elem.guid;
		var align = elem.align;

		var div = createNode('div');
		div.innerHTML = html;
		div.style.visibility = "hidden";
		if (align)
		{
			div.style.textAlign = align;
		}
		div.style.visibility = 'visible';
		div.style.pointerEvents = 'auto';
		return div;
	}


	// RENDER

	function render(elem)
	{
		return setProps(elem, makeElement(elem));
	}
	function makeElement(e)
	{
		var elem = e.element;
		switch(elem.ctor)
		{
			case 'Image':
				return image(e.props, elem);

			case 'Flow':
				return flow(elem._0.ctor, elem._1);

			case 'Container':
				return container(elem._0, elem._1);

			case 'Spacer':
				return createNode('div');

			case 'RawHtml':
				return rawHtml(elem);

			case 'Custom':
				return elem.render(elem.model);
		}
	}

	function updateAndReplace(node, curr, next)
	{
		var newNode = update(node, curr, next);
		if (newNode !== node)
		{
			node.parentNode.replaceChild(newNode, node);
		}
		return newNode;
	}


	// UPDATE

	function update(node, curr, next)
	{
		var rootNode = node;
		if (node.tagName === 'A')
		{
			node = node.firstChild;
		}
		if (curr.props.id === next.props.id)
		{
			updateProps(node, curr, next);
			return rootNode;
		}
		if (curr.element.ctor !== next.element.ctor)
		{
			return render(next);
		}
		var nextE = next.element;
		var currE = curr.element;
		switch(nextE.ctor)
		{
			case "Spacer":
				updateProps(node, curr, next);
				return rootNode;

			case "RawHtml":
				if(currE.html.valueOf() !== nextE.html.valueOf())
				{
					node.innerHTML = nextE.html;
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Image":
				if (nextE._0.ctor === 'Plain')
				{
					if (nextE._3 !== currE._3)
					{
						node.src = nextE._3;
					}
				}
				else if (!Utils.eq(nextE,currE)
					|| next.props.width !== curr.props.width
					|| next.props.height !== curr.props.height)
				{
					return render(next);
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Flow":
				var arr = List.toArray(nextE._1);
				for (var i = arr.length; i--; )
				{
					arr[i] = arr[i].element.ctor;
				}
				if (nextE._0.ctor !== currE._0.ctor)
				{
					return render(next);
				}
				var nexts = List.toArray(nextE._1);
				var kids = node.childNodes;
				if (nexts.length !== kids.length)
				{
					return render(next);
				}
				var currs = List.toArray(currE._1);
				var dir = nextE._0.ctor;
				var goDir = directionTable[dir];
				var toReverse = needsReversal(dir);
				var len = kids.length;
				for (var i = len; i-- ;)
				{
					var subNode = kids[toReverse ? len - i - 1 : i];
					goDir(updateAndReplace(subNode, currs[i], nexts[i]));
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Container":
				var subNode = node.firstChild;
				var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
				setPos(nextE._0, nextE._1, newSubNode);
				updateProps(node, curr, next);
				return rootNode;

			case "Custom":
				if (currE.type === nextE.type)
				{
					var updatedNode = nextE.update(node, currE.model, nextE.model);
					updateProps(updatedNode, curr, next);
					return updatedNode;
				}
				return render(next);
		}
	}

	function updateProps(node, curr, next)
	{
		var nextProps = next.props;
		var currProps = curr.props;

		var element = next.element;
		var width = nextProps.width - (element.adjustWidth || 0);
		var height = nextProps.height - (element.adjustHeight || 0);
		if (width !== currProps.width)
		{
			node.style.width = (width|0) + 'px';
		}
		if (height !== currProps.height)
		{
			node.style.height = (height|0) + 'px';
		}

		if (nextProps.opacity !== currProps.opacity)
		{
			node.style.opacity = nextProps.opacity;
		}

		var nextColor = nextProps.color.ctor === 'Just'
			? Color.toCss(nextProps.color._0)
			: '';
		if (node.style.backgroundColor !== nextColor)
		{
			node.style.backgroundColor = nextColor;
		}

		if (nextProps.tag !== currProps.tag)
		{
			node.id = nextProps.tag;
		}

		if (nextProps.href !== currProps.href)
		{
			if (currProps.href === '')
			{
				// add a surrounding href
				var anchor = createNode('a');
				anchor.href = nextProps.href;
				anchor.style.display = 'block';
				anchor.style.pointerEvents = 'auto';

				node.parentNode.replaceChild(anchor, node);
				anchor.appendChild(node);
			}
			else if (nextProps.href === '')
			{
				// remove the surrounding href
				var anchor = node.parentNode;
				anchor.parentNode.replaceChild(node, anchor);
			}
			else
			{
				// just update the link
				node.parentNode.href = nextProps.href;
			}
		}

		// update click and hover handlers
		var removed = false;

		// update hover handlers
		if (currProps.hover.ctor === '_Tuple0')
		{
			if (nextProps.hover.ctor !== '_Tuple0')
			{
				addHover(node, nextProps.hover);
			}
		}
		else
		{
			if (nextProps.hover.ctor === '_Tuple0')
			{
				removed = true;
				removeHover(node);
			}
			else
			{
				node.elm_hover_handler = nextProps.hover;
			}
		}

		// update click handlers
		if (currProps.click.ctor === '_Tuple0')
		{
			if (nextProps.click.ctor !== '_Tuple0')
			{
				addClick(node, nextProps.click);
			}
		}
		else
		{
			if (nextProps.click.ctor === '_Tuple0')
			{
				removed = true;
				removeClick(node);
			}
			else
			{
				node.elm_click_handler = nextProps.click;
			}
		}

		// stop capturing clicks if
		if (removed
			&& nextProps.hover.ctor === '_Tuple0'
			&& nextProps.click.ctor === '_Tuple0')
		{
			node.style.pointerEvents = 'none';
		}
	}


	// TEXT

	function block(align)
	{
		return function(text)
		{
			var raw = {
				ctor :'RawHtml',
				html : Text.renderHtml(text),
				align: align
			};
			var pos = htmlHeight(0, raw);
			return newElement(pos._0, pos._1, raw);
		}
	}

	function markdown(text)
	{
		var raw = {
			ctor:'RawHtml',
			html: text,
			align: null
		};
		var pos = htmlHeight(0, raw);
		return newElement(pos._0, pos._1, raw);
	}

	function htmlHeight(width, rawHtml)
	{
		// create dummy node
		var temp = document.createElement('div');
		temp.innerHTML = rawHtml.html;
		if (width > 0)
		{
			temp.style.width = width + "px";
		}
		temp.style.visibility = "hidden";
		temp.style.styleFloat = "left";
		temp.style.cssFloat   = "left";

		document.body.appendChild(temp);

		// get dimensions
		var style = window.getComputedStyle(temp, null);
		var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
		var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
		document.body.removeChild(temp);
		return Utils.Tuple2(w,h);
	}


	return localRuntime.Native.Graphics.Element.values = {
		render: render,
		update: update,
		updateAndReplace: updateAndReplace,

		createNode: createNode,
		newElement: F3(newElement),
		addTransform: addTransform,
		htmlHeight: F2(htmlHeight),
		guid: Utils.guid,

		block: block,
		markdown: markdown
	};

};

Elm.Native.Json = {};
Elm.Native.Json.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Json = localRuntime.Native.Json || {};
	if (localRuntime.Native.Json.values) {
		return localRuntime.Native.Json.values;
	}

	var ElmArray = Elm.Native.Array.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function crash(expected, actual) {
		throw new Error(
			'expecting ' + expected + ' but got ' + JSON.stringify(actual)
		);
	}


	// PRIMITIVE VALUES

	function decodeNull(successValue) {
		return function(value) {
			if (value === null) {
				return successValue;
			}
			crash('null', value);
		};
	}


	function decodeString(value) {
		if (typeof value === 'string' || value instanceof String) {
			return value;
		}
		crash('a String', value);
	}


	function decodeFloat(value) {
		if (typeof value === 'number') {
			return value;
		}
		crash('a Float', value);
	}


	function decodeInt(value) {
		if (typeof value === 'number' && (value|0) === value) {
			return value;
		}
		crash('an Int', value);
	}


	function decodeBool(value) {
		if (typeof value === 'boolean') {
			return value;
		}
		crash('a Bool', value);
	}


	// ARRAY

	function decodeArray(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i-- ; ) {
					array[i] = decoder(value[i]);
				}
				return ElmArray.fromJSArray(array);
			}
			crash('an Array', value);
		};
	}


	// LIST

	function decodeList(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var list = List.Nil;
				for (var i = len; i-- ; ) {
					list = List.Cons( decoder(value[i]), list );
				}
				return list;
			}
			crash('a List', value);
		};
	}


	// MAYBE

	function decodeMaybe(decoder) {
		return function(value) {
			try {
				return Maybe.Just(decoder(value));
			} catch(e) {
				return Maybe.Nothing;
			}
		};
	}


	// FIELDS

	function decodeField(field, decoder) {
		return function(value) {
			var subValue = value[field];
			if (subValue !== undefined) {
				return decoder(subValue);
			}
			crash("an object with field '" + field + "'", value);
		};
	}


	// OBJECTS

	function decodeKeyValuePairs(decoder) {
		return function(value) {
			var isObject =
				typeof value === 'object'
					&& value !== null
					&& !(value instanceof Array);

			if (isObject) {
				var keyValuePairs = List.Nil;
				for (var key in value) {
					var elmValue = decoder(value[key]);
					var pair = Utils.Tuple2(key, elmValue);
					keyValuePairs = List.Cons(pair, keyValuePairs);
				}
				return keyValuePairs;
			}

			crash("an object", value);
		};
	}

	function decodeObject1(f, d1) {
		return function(value) {
			return f(d1(value));
		};
	}

	function decodeObject2(f, d1, d2) {
		return function(value) {
			return A2( f, d1(value), d2(value) );
		};
	}

	function decodeObject3(f, d1, d2, d3) {
		return function(value) {
			return A3( f, d1(value), d2(value), d3(value) );
		};
	}

	function decodeObject4(f, d1, d2, d3, d4) {
		return function(value) {
			return A4( f, d1(value), d2(value), d3(value), d4(value) );
		};
	}

	function decodeObject5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
		};
	}

	function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			return A6( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value)
			);
		};
	}

	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			return A7( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value)
			);
		};
	}

	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			return A8( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value),
				d8(value)
			);
		};
	}


	// TUPLES

	function decodeTuple1(f, d1) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 1 ) {
				crash('a Tuple of length 1', value);
			}
			return f( d1(value[0]) );
		};
	}

	function decodeTuple2(f, d1, d2) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 2 ) {
				crash('a Tuple of length 2', value);
			}
			return A2( f, d1(value[0]), d2(value[1]) );
		};
	}

	function decodeTuple3(f, d1, d2, d3) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 3 ) {
				crash('a Tuple of length 3', value);
			}
			return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
		};
	}


	function decodeTuple4(f, d1, d2, d3, d4) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 4 ) {
				crash('a Tuple of length 4', value);
			}
			return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
		};
	}


	function decodeTuple5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 5 ) {
				crash('a Tuple of length 5', value);
			}
			return A5( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4])
			);
		};
	}


	function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 6 ) {
				crash('a Tuple of length 6', value);
			}
			return A6( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5])
			);
		};
	}

	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 7 ) {
				crash('a Tuple of length 7', value);
			}
			return A7( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6])
			);
		};
	}


	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 8 ) {
				crash('a Tuple of length 8', value);
			}
			return A8( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6]),
				d8(value[7])
			);
		};
	}


	// CUSTOM DECODERS

	function decodeValue(value) {
		return value;
	}

	function runDecoderValue(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function customDecoder(decoder, callback) {
		return function(value) {
			var result = callback(decoder(value));
			if (result.ctor === 'Err') {
				throw new Error('custom decoder failed: ' + result._0);
			}
			return result._0;
		}
	}

	function andThen(decode, callback) {
		return function(value) {
			var result = decode(value);
			return callback(result)(value);
		}
	}

	function fail(msg) {
		return function(value) {
			throw new Error(msg);
		}
	}

	function succeed(successValue) {
		return function(value) {
			return successValue;
		}
	}


	// ONE OF MANY

	function oneOf(decoders) {
		return function(value) {
			var errors = [];
			var temp = decoders;
			while (temp.ctor !== '[]') {
				try {
					return temp._0(value);
				} catch(e) {
					errors.push(e.message);
				}
				temp = temp._1;
			}
			throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
		}
	}

	function get(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}


	// ENCODE / DECODE

	function runDecoderString(decoder, string) {
		try {
			return Result.Ok(decoder(JSON.parse(string)));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function encode(indentLevel, value) {
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value) {
		return value;
	}

	function encodeObject(keyValuePairs) {
		var obj = {};
		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return localRuntime.Native.Json.values = {
		encode: F2(encode),
		runDecoderString: F2(runDecoderString),
		runDecoderValue: F2(runDecoderValue),

		get: F2(get),
		oneOf: oneOf,

		decodeNull: decodeNull,
		decodeInt: decodeInt,
		decodeFloat: decodeFloat,
		decodeString: decodeString,
		decodeBool: decodeBool,

		decodeMaybe: decodeMaybe,

		decodeList: decodeList,
		decodeArray: decodeArray,

		decodeField: F2(decodeField),

		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),

		andThen: F2(andThen),
		decodeValue: decodeValue,
		customDecoder: F2(customDecoder),
		fail: fail,
		succeed: succeed,

		identity: identity,
		encodeNull: null,
		encodeArray: ElmArray.toJSArray,
		encodeList: List.toArray,
		encodeObject: encodeObject

	};

};

Elm.Native.List = {};
Elm.Native.List.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.List = localRuntime.Native.List || {};
	if (localRuntime.Native.List.values)
	{
		return localRuntime.Native.List.values;
	}
	if ('values' in Elm.Native.List)
	{
		return localRuntime.Native.List.values = Elm.Native.List.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	var Nil = Utils.Nil;
	var Cons = Utils.Cons;

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function range(lo,hi)
	{
		var lst = Nil;
		if (lo <= hi)
		{
			do { lst = Cons(hi,lst) } while (hi-->lo);
		}
		return lst
	}

	// f defined similarly for both foldl and foldr (NB: different from Haskell)
	// ie, foldl : (a -> b -> b) -> b -> [a] -> b
	function foldl(f, b, xs)
	{
		var acc = b;
		while (xs.ctor !== '[]')
		{
			acc = A2(f, xs._0, acc);
			xs = xs._1;
		}
		return acc;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function any(pred, xs)
	{
		while (xs.ctor !== '[]')
		{
			if (pred(xs._0))
			{
				return true;
			}
			xs = xs._1;
		}
		return false;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			return Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function take(n, xs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && n > 0)
		{
			arr.push(xs._0);
			xs = xs._1;
			--n;
		}
		return fromArray(arr);
	}

	function drop(n, xs)
	{
		while (xs.ctor !== '[]' && n > 0)
		{
			xs = xs._1;
			--n;
		}
		return xs;
	}

	function repeat(n, x)
	{
		var arr = [];
		var pattern = [x];
		while (n > 0)
		{
			if (n & 1)
			{
				arr = arr.concat(pattern);
			}
			n >>= 1, pattern = pattern.concat(pattern);
		}
		return fromArray(arr);
	}


	Elm.Native.List.values = {
		Nil:Nil,
		Cons:Cons,
		cons:F2(Cons),
		toArray:toArray,
		fromArray:fromArray,
		range:range,

		foldl:F3(foldl),
		foldr:F3(foldr),

		any:F2(any),
		map2:F3(map2),
		map3:F4(map3),
		map4:F5(map4),
		map5:F6(map5),
		sortBy:F2(sortBy),
		sortWith:F2(sortWith),
		take:F2(take),
		drop:F2(drop),
		repeat:F2(repeat)
	};
	return localRuntime.Native.List.values = Elm.Native.List.values;

};

Elm.Native.Port = {};
Elm.Native.Port.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Port = localRuntime.Native.Port || {};
	if (localRuntime.Native.Port.values)
	{
		return localRuntime.Native.Port.values;
	}

	var NS;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// INBOUND

	function inbound(name, type, converter)
	{
		if (!localRuntime.argsTracker[name])
		{
			throw new Error(
				"Port Error:\n" +
				"No argument was given for the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You need to provide an initial value!\n\n" +
				"Find out more about ports here <http://elm-lang.org/learn/Ports.elm>"
			);
		}
		var arg = localRuntime.argsTracker[name];
		arg.used = true;

		return jsToElm(name, type, converter, arg.value);
	}


	function inboundSignal(name, type, converter)
	{
		var initialValue = inbound(name, type, converter);

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		var signal = NS.input('inbound-port-' + name, initialValue);

		function send(jsValue)
		{
			var elmValue = jsToElm(name, type, converter, jsValue);
			setTimeout(function() {
				localRuntime.notify(signal.id, elmValue);
			}, 0);
		}

		localRuntime.ports[name] = { send: send };

		return signal;
	}


	function jsToElm(name, type, converter, value)
	{
		try
		{
			return converter(value);
		}
		catch(e)
		{
			throw new Error(
				"Port Error:\n" +
				"Regarding the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You just sent the value:\n\n" +
				"    " + JSON.stringify(value) + "\n\n" +
				"but it cannot be converted to the necessary type.\n" +
				e.message
			);
		}
	}


	// OUTBOUND

	function outbound(name, converter, elmValue)
	{
		localRuntime.ports[name] = converter(elmValue);
	}


	function outboundSignal(name, converter, signal)
	{
		var subscribers = [];

		function subscribe(handler)
		{
			subscribers.push(handler);
		}
		function unsubscribe(handler)
		{
			subscribers.pop(subscribers.indexOf(handler));
		}

		function notify(elmValue)
		{
			var jsValue = converter(elmValue);
			var len = subscribers.length;
			for (var i = 0; i < len; ++i)
			{
				subscribers[i](jsValue);
			}
		}

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		NS.output('outbound-port-' + name, notify, signal);

		localRuntime.ports[name] = {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};

		return signal;
	}


	return localRuntime.Native.Port.values = {
		inbound: inbound,
		outbound: outbound,
		inboundSignal: inboundSignal,
		outboundSignal: outboundSignal
	};
};


if (!Elm.fullscreen) {

	(function() {
		'use strict';

		var Display = {
			FULLSCREEN: 0,
			COMPONENT: 1,
			NONE: 2
		};

		Elm.fullscreen = function(module, args)
		{
			var container = document.createElement('div');
			document.body.appendChild(container);
			return init(Display.FULLSCREEN, container, module, args || {});
		};

		Elm.embed = function(module, container, args)
		{
			var tag = container.tagName;
			if (tag !== 'DIV')
			{
				throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
			}
			return init(Display.COMPONENT, container, module, args || {});
		};

		Elm.worker = function(module, args)
		{
			return init(Display.NONE, {}, module, args || {});
		};

		function init(display, container, module, args, moduleToReplace)
		{
			// defining state needed for an instance of the Elm RTS
			var inputs = [];

			/* OFFSET
			 * Elm's time traveling debugger lets you pause time. This means
			 * "now" may be shifted a bit into the past. By wrapping Date.now()
			 * we can manage this.
			 */
			var timer = {
				programStart: Date.now(),
				now: function()
				{
					return Date.now();
				}
			};

			var updateInProgress = false;
			function notify(id, v)
			{
				if (updateInProgress)
				{
					throw new Error(
						'The notify function has been called synchronously!\n' +
						'This can lead to frames being dropped.\n' +
						'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
				}
				updateInProgress = true;
				var timestep = timer.now();
				for (var i = inputs.length; i--; )
				{
					inputs[i].notify(timestep, id, v);
				}
				updateInProgress = false;
			}
			function setTimeout(func, delay)
			{
				return window.setTimeout(func, delay);
			}

			var listeners = [];
			function addListener(relevantInputs, domNode, eventName, func)
			{
				domNode.addEventListener(eventName, func);
				var listener = {
					relevantInputs: relevantInputs,
					domNode: domNode,
					eventName: eventName,
					func: func
				};
				listeners.push(listener);
			}

			var argsTracker = {};
			for (var name in args)
			{
				argsTracker[name] = {
					value: args[name],
					used: false
				};
			}

			// create the actual RTS. Any impure modules will attach themselves to this
			// object. This permits many Elm programs to be embedded per document.
			var elm = {
				notify: notify,
				setTimeout: setTimeout,
				node: container,
				addListener: addListener,
				inputs: inputs,
				timer: timer,
				argsTracker: argsTracker,
				ports: {},

				isFullscreen: function() { return display === Display.FULLSCREEN; },
				isEmbed: function() { return display === Display.COMPONENT; },
				isWorker: function() { return display === Display.NONE; }
			};

			function swap(newModule)
			{
				removeListeners(listeners);
				var div = document.createElement('div');
				var newElm = init(display, div, newModule, args, elm);
				inputs = [];
				// elm.swap = newElm.swap;
				return newElm;
			}

			function dispose()
			{
				removeListeners(listeners);
				inputs = [];
			}

			var Module = {};
			try
			{
				Module = module.make(elm);
				checkInputs(elm);
			}
			catch (error)
			{
				if (typeof container.appendChild == 'undefined')
				{
					console.log(error.message);
				}
				else
				{
					container.appendChild(errorNode(error.message));
				}
				throw error;
			}

			if (display !== Display.NONE)
			{
				var graphicsNode = initGraphics(elm, Module);
			}

			var rootNode = { kids: inputs };
			trimDeadNodes(rootNode);
			inputs = rootNode.kids;
			filterListeners(inputs, listeners);

			addReceivers(elm.ports);

			if (typeof moduleToReplace !== 'undefined')
			{
				hotSwap(moduleToReplace, elm);

				// rerender scene if graphics are enabled.
				if (typeof graphicsNode !== 'undefined')
				{
					graphicsNode.notify(0, true, 0);
				}
			}

			return {
				swap: swap,
				ports: elm.ports,
				dispose: dispose
			};
		};

		function checkInputs(elm)
		{
			var argsTracker = elm.argsTracker;
			for (var name in argsTracker)
			{
				if (!argsTracker[name].used)
				{
					throw new Error(
						"Port Error:\nYou provided an argument named '" + name +
						"' but there is no corresponding port!\n\n" +
						"Maybe add a port '" + name + "' to your Elm module?\n" +
						"Maybe remove the '" + name + "' argument from your initialization code in JS?"
					);
				}
			}
		}

		function errorNode(message)
		{
			var code = document.createElement('code');

			var lines = message.split('\n');
			code.appendChild(document.createTextNode(lines[0]));
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createElement('br'));
			for (var i = 1; i < lines.length; ++i)
			{
				code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i].replace(/  /g, '\u00A0 ')));
				code.appendChild(document.createElement('br'));
			}
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createTextNode("Open the developer console for more details."));
			return code;
		}


		//// FILTER SIGNALS ////

		// TODO: move this code into the signal module and create a function
		// Signal.initializeGraph that actually instantiates everything.

		function filterListeners(inputs, listeners)
		{
			loop:
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				for (var j = inputs.length; j--; )
				{
					if (listener.relevantInputs.indexOf(inputs[j].id) >= 0)
					{
						continue loop;
					}
				}
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		function removeListeners(listeners)
		{
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		// add receivers for built-in ports if they are defined
		function addReceivers(ports)
		{
			if ('title' in ports)
			{
				if (typeof ports.title === 'string')
				{
					document.title = ports.title;
				}
				else
				{
					ports.title.subscribe(function(v) { document.title = v; });
				}
			}
			if ('redirect' in ports)
			{
				ports.redirect.subscribe(function(v) {
					if (v.length > 0)
					{
						window.location = v;
					}
				});
			}
		}


		// returns a boolean representing whether the node is alive or not.
		function trimDeadNodes(node)
		{
			if (node.isOutput)
			{
				return true;
			}

			var liveKids = [];
			for (var i = node.kids.length; i--; )
			{
				var kid = node.kids[i];
				if (trimDeadNodes(kid))
				{
					liveKids.push(kid);
				}
			}
			node.kids = liveKids;

			return liveKids.length > 0;
		}


		////  RENDERING  ////

		function initGraphics(elm, Module)
		{
			if (!('main' in Module))
			{
				throw new Error("'main' is missing! What do I display?!");
			}

			var signalGraph = Module.main;

			// make sure the signal graph is actually a signal & extract the visual model
			if (!('notify' in signalGraph))
			{
				signalGraph = Elm.Signal.make(elm).constant(signalGraph);
			}
			var initialScene = signalGraph.value;

			// Figure out what the render functions should be
			var render;
			var update;
			if (initialScene.props)
			{
				var Element = Elm.Native.Graphics.Element.make(elm);
				render = Element.render;
				update = Element.updateAndReplace;
			}
			else
			{
				var VirtualDom = Elm.Native.VirtualDom.make(elm);
				render = VirtualDom.render;
				update = VirtualDom.updateAndReplace;
			}

			// Add the initialScene to the DOM
			var container = elm.node;
			var node = render(initialScene);
			while (container.firstChild)
			{
				container.removeChild(container.firstChild);
			}
			container.appendChild(node);

			var _requestAnimationFrame =
				typeof requestAnimationFrame !== 'undefined'
					? requestAnimationFrame
					: function(cb) { setTimeout(cb, 1000/60); }
					;

			// domUpdate is called whenever the main Signal changes.
			//
			// domUpdate and drawCallback implement a small state machine in order
			// to schedule only 1 draw per animation frame. This enforces that
			// once draw has been called, it will not be called again until the
			// next frame.
			//
			// drawCallback is scheduled whenever
			// 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
			// 2. The state transitions from NO_REQUEST to PENDING_REQUEST
			//
			// Invariants:
			// 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
			// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
			//    scheduled drawCallback.
			var NO_REQUEST = 0;
			var PENDING_REQUEST = 1;
			var EXTRA_REQUEST = 2;
			var state = NO_REQUEST;
			var savedScene = initialScene;
			var scheduledScene = initialScene;

			function domUpdate(newScene)
			{
				scheduledScene = newScene;

				switch (state)
				{
					case NO_REQUEST:
						_requestAnimationFrame(drawCallback);
						state = PENDING_REQUEST;
						return;
					case PENDING_REQUEST:
						state = PENDING_REQUEST;
						return;
					case EXTRA_REQUEST:
						state = PENDING_REQUEST;
						return;
				}
			}

			function drawCallback()
			{
				switch (state)
				{
					case NO_REQUEST:
						// This state should not be possible. How can there be no
						// request, yet somehow we are actively fulfilling a
						// request?
						throw new Error(
							"Unexpected draw callback.\n" +
							"Please report this to <https://github.com/elm-lang/core/issues>."
						);

					case PENDING_REQUEST:
						// At this point, we do not *know* that another frame is
						// needed, but we make an extra request to rAF just in
						// case. It's possible to drop a frame if rAF is called
						// too late, so we just do it preemptively.
						_requestAnimationFrame(drawCallback);
						state = EXTRA_REQUEST;

						// There's also stuff we definitely need to draw.
						draw();
						return;

					case EXTRA_REQUEST:
						// Turns out the extra request was not needed, so we will
						// stop calling rAF. No reason to call it all the time if
						// no one needs it.
						state = NO_REQUEST;
						return;
				}
			}

			function draw()
			{
				update(elm.node.firstChild, savedScene, scheduledScene);
				if (elm.Native.Window)
				{
					elm.Native.Window.values.resizeIfNeeded();
				}
				savedScene = scheduledScene;
			}

			var renderer = Elm.Native.Signal.make(elm).output('main', domUpdate, signalGraph);

			// must check for resize after 'renderer' is created so
			// that changes show up.
			if (elm.Native.Window)
			{
				elm.Native.Window.values.resizeIfNeeded();
			}

			return renderer;
		}

		//// HOT SWAPPING ////

		// Returns boolean indicating if the swap was successful.
		// Requires that the two signal graphs have exactly the same
		// structure.
		function hotSwap(from, to)
		{
			function similar(nodeOld,nodeNew)
			{
				if (nodeOld.id !== nodeNew.id)
				{
					return false;
				}
				if (nodeOld.isOutput)
				{
					return nodeNew.isOutput;
				}
				return nodeOld.kids.length === nodeNew.kids.length;
			}
			function swap(nodeOld,nodeNew)
			{
				nodeNew.value = nodeOld.value;
				return true;
			}
			var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
			if (canSwap)
			{
				depthFirstTraversals(swap, from.inputs, to.inputs);
			}
			from.node.parentNode.replaceChild(to.node, from.node);

			return canSwap;
		}

		// Returns false if the node operation f ever fails.
		function depthFirstTraversals(f, queueOld, queueNew)
		{
			if (queueOld.length !== queueNew.length)
			{
				return false;
			}
			queueOld = queueOld.slice(0);
			queueNew = queueNew.slice(0);

			var seen = [];
			while (queueOld.length > 0 && queueNew.length > 0)
			{
				var nodeOld = queueOld.pop();
				var nodeNew = queueNew.pop();
				if (seen.indexOf(nodeOld.id) < 0)
				{
					if (!f(nodeOld, nodeNew))
					{
						return false;
					}
					queueOld = queueOld.concat(nodeOld.kids || []);
					queueNew = queueNew.concat(nodeNew.kids || []);
					seen.push(nodeOld.id);
				}
			}
			return true;
		}
	}());

	function F2(fun)
	{
		function wrapper(a) { return function(b) { return fun(a,b) } }
		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function F3(fun)
	{
		function wrapper(a) {
			return function(b) { return function(c) { return fun(a,b,c) }}
		}
		wrapper.arity = 3;
		wrapper.func = fun;
		return wrapper;
	}

	function F4(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return fun(a,b,c,d) }}}
		}
		wrapper.arity = 4;
		wrapper.func = fun;
		return wrapper;
	}

	function F5(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
		}
		wrapper.arity = 5;
		wrapper.func = fun;
		return wrapper;
	}

	function F6(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return fun(a,b,c,d,e,f) }}}}}
		}
		wrapper.arity = 6;
		wrapper.func = fun;
		return wrapper;
	}

	function F7(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
		}
		wrapper.arity = 7;
		wrapper.func = fun;
		return wrapper;
	}

	function F8(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) {
			return fun(a,b,c,d,e,f,g,h)}}}}}}}
		}
		wrapper.arity = 8;
		wrapper.func = fun;
		return wrapper;
	}

	function F9(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) { return function(i) {
			return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
		}
		wrapper.arity = 9;
		wrapper.func = fun;
		return wrapper;
	}

	function A2(fun,a,b)
	{
		return fun.arity === 2
			? fun.func(a,b)
			: fun(a)(b);
	}
	function A3(fun,a,b,c)
	{
		return fun.arity === 3
			? fun.func(a,b,c)
			: fun(a)(b)(c);
	}
	function A4(fun,a,b,c,d)
	{
		return fun.arity === 4
			? fun.func(a,b,c,d)
			: fun(a)(b)(c)(d);
	}
	function A5(fun,a,b,c,d,e)
	{
		return fun.arity === 5
			? fun.func(a,b,c,d,e)
			: fun(a)(b)(c)(d)(e);
	}
	function A6(fun,a,b,c,d,e,f)
	{
		return fun.arity === 6
			? fun.func(a,b,c,d,e,f)
			: fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun,a,b,c,d,e,f,g)
	{
		return fun.arity === 7
			? fun.func(a,b,c,d,e,f,g)
			: fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun,a,b,c,d,e,f,g,h)
	{
		return fun.arity === 8
			? fun.func(a,b,c,d,e,f,g,h)
			: fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun,a,b,c,d,e,f,g,h,i)
	{
		return fun.arity === 9
			? fun.func(a,b,c,d,e,f,g,h,i)
			: fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
}

Elm.Native.Show = {};
Elm.Native.Show.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Show = localRuntime.Native.Show || {};
	if (localRuntime.Native.Show.values)
	{
		return localRuntime.Native.Show.values;
	}

	var _Array;
	var Dict;
	var List;
	var Utils = Elm.Native.Utils.make(localRuntime);

	var toString = function(v)
	{
		var type = typeof v;
		if (type === "function")
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ': ') + name + '>';
		}
		else if (type === "boolean")
		{
			return v ? "True" : "False";
		}
		else if (type === "number")
		{
			return v + "";
		}
		else if ((v instanceof String) && v.isChar)
		{
			return "'" + addSlashes(v, true) + "'";
		}
		else if (type === "string")
		{
			return '"' + addSlashes(v, false) + '"';
		}
		else if (type === "object" && '_' in v && probablyPublic(v))
		{
			var output = [];
			for (var k in v._)
			{
				for (var i = v._[k].length; i--; )
				{
					output.push(k + " = " + toString(v._[k][i]));
				}
			}
			for (var k in v)
			{
				if (k === '_') continue;
				output.push(k + " = " + toString(v[k]));
			}
			if (output.length === 0)
			{
				return "{}";
			}
			return "{ " + output.join(", ") + " }";
		}
		else if (type === "object" && 'ctor' in v)
		{
			if (v.ctor.substring(0,6) === "_Tuple")
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return "(" + output.join(",") + ")";
			}
			else if (v.ctor === "_Array")
			{
				if (!_Array)
				{
					_Array = Elm.Array.make(localRuntime);
				}
				var list = _Array.toList(v);
				return "Array.fromList " + toString(list);
			}
			else if (v.ctor === "::")
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === "::")
				{
					output += "," + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
			else if (v.ctor === "[]")
			{
				return "[]";
			}
			else if (v.ctor === "RBNode" || v.ctor === "RBEmpty")
			{
				if (!Dict)
				{
					Dict = Elm.Dict.make(localRuntime);
				}
				if (!List)
				{
					List = Elm.List.make(localRuntime);
				}
				var list = Dict.toList(v);
				var name = "Dict";
				if (list.ctor === "::" && list._0._1.ctor === "_Tuple0")
				{
					name = "Set";
					list = A2(List.map, function(x){return x._0}, list);
				}
				return name + ".fromList " + toString(list);
			}
			else if (v.ctor.slice(0,5) === "Text:")
			{
				return '<text>'
			}
			else
			{
				var output = "";
				for (var i in v)
				{
					if (i === 'ctor') continue;
					var str = toString(v[i]);
					var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
					output += ' ' + (parenless ? str : '(' + str + ')');
				}
				return v.ctor + output;
			}
		}
		if (type === 'object' && 'notify' in v && 'id' in v)
		{
			return '<Signal>';
		}
		return "<internal structure>";
	};

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, "\\'")
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}

	function probablyPublic(v)
	{
		var keys = Object.keys(v);
		var len = keys.length;
		if (len === 3
			&& 'props' in v
			&& 'element' in v)
		{
			return false;
		}
		else if (len === 5
			&& 'horizontal' in v
			&& 'vertical' in v
			&& 'x' in v
			&& 'y' in v)
		{
			return false;
		}
		else if (len === 7
			&& 'theta' in v
			&& 'scale' in v
			&& 'x' in v
			&& 'y' in v
			&& 'alpha' in v
			&& 'form' in v)
		{
			return false;
		}
		return true;
	}

	return localRuntime.Native.Show.values = {
		toString: toString
	};
};

Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Signal = localRuntime.Native.Signal || {};
	if (localRuntime.Native.Signal.values)
	{
		return localRuntime.Native.Signal.values;
	}


	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function broadcastToKids(node, timestamp, update)
	{
		var kids = node.kids;
		for (var i = kids.length; i--; )
		{
			kids[i].notify(timestamp, update, node.id);
		}
	}


	// INPUT

	function input(name, base)
	{
		var node = {
			id: Utils.guid(),
			name: 'input-' + name,
			value: base,
			parents: [],
			kids: []
		};

		node.notify = function(timestamp, targetId, value) {
			var update = targetId === node.id;
			if (update)
			{
				node.value = value;
			}
			broadcastToKids(node, timestamp, update);
			return update;
		};

		localRuntime.inputs.push(node);

		return node;
	}

	function constant(value)
	{
		return input('constant', value);
	}


	// MAILBOX

	function mailbox(base)
	{
		var signal = input('mailbox', base);

		function send(value) {
			return Task.asyncFunction(function(callback) {
				localRuntime.setTimeout(function() {
					localRuntime.notify(signal.id, value);
				}, 0);
				callback(Task.succeed(Utils.Tuple0));
			});
		}

		return {
			_: {},
			signal: signal,
			address: {
				ctor: 'Address',
				_0: send
			}
		};
	}

	function sendMessage(message)
	{
		Task.perform(message._0);
	}


	// OUTPUT

	function output(name, handler, parent)
	{
		var node = {
			id: Utils.guid(),
			name: 'output-' + name,
			parents: [parent],
			isOutput: true
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				handler(parent.value);
			}
		};

		parent.kids.push(node);

		return node;
	}


	// MAP

	function mapMany(refreshValue, args)
	{
		var node = {
			id: Utils.guid(),
			name: 'map' + args.length,
			value: refreshValue(),
			parents: args,
			kids: []
		};

		var numberOfParents = args.length;
		var count = 0;
		var update = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			++count;

			update = update || parentUpdate;

			if (count === numberOfParents)
			{
				if (update)
				{
					node.value = refreshValue();
				}
				broadcastToKids(node, timestamp, update);
				update = false;
				count = 0;
			}
		};

		for (var i = numberOfParents; i--; )
		{
			args[i].kids.push(node);
		}

		return node;
	}


	function map(func, a)
	{
		function refreshValue()
		{
			return func(a.value);
		}
		return mapMany(refreshValue, [a]);
	}


	function map2(func, a, b)
	{
		function refreshValue()
		{
			return A2( func, a.value, b.value );
		}
		return mapMany(refreshValue, [a,b]);
	}


	function map3(func, a, b, c)
	{
		function refreshValue()
		{
			return A3( func, a.value, b.value, c.value );
		}
		return mapMany(refreshValue, [a,b,c]);
	}


	function map4(func, a, b, c, d)
	{
		function refreshValue()
		{
			return A4( func, a.value, b.value, c.value, d.value );
		}
		return mapMany(refreshValue, [a,b,c,d]);
	}


	function map5(func, a, b, c, d, e)
	{
		function refreshValue()
		{
			return A5( func, a.value, b.value, c.value, d.value, e.value );
		}
		return mapMany(refreshValue, [a,b,c,d,e]);
	}



	// FOLD

	function foldp(update, state, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'foldp',
			parents: [signal],
			kids: [],
			value: state
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = A2( update, signal.value, node.value );
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	// TIME

	function timestamp(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'timestamp',
			value: Utils.Tuple2(localRuntime.timer.programStart, signal.value),
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = Utils.Tuple2(timestamp, signal.value);
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	function delay(time, signal)
	{
		var delayed = input('delay-input-' + time, signal.value);

		function handler(value)
		{
			setTimeout(function() {
				localRuntime.notify(delayed.id, value);
			}, time);
		}

		output('delay-output-' + time, handler, signal);

		return delayed;
	}


	// MERGING

	function genericMerge(tieBreaker, leftStream, rightStream)
	{
		var node = {
			id: Utils.guid(),
			name: 'merge',
			value: A2(tieBreaker, leftStream.value, rightStream.value),
			parents: [leftStream, rightStream],
			kids: []
		};

		var left = { touched: false, update: false, value: null };
		var right = { touched: false, update: false, value: null };

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === leftStream.id)
			{
				left.touched = true;
				left.update = parentUpdate;
				left.value = leftStream.value;
			}
			if (parentID === rightStream.id)
			{
				right.touched = true;
				right.update = parentUpdate;
				right.value = rightStream.value;
			}

			if (left.touched && right.touched)
			{
				var update = false;
				if (left.update && right.update)
				{
					node.value = A2(tieBreaker, left.value, right.value);
					update = true;
				}
				else if (left.update)
				{
					node.value = left.value;
					update = true;
				}
				else if (right.update)
				{
					node.value = right.value;
					update = true;
				}
				left.touched = false;
				right.touched = false;

				broadcastToKids(node, timestamp, update);
			}
		};

		leftStream.kids.push(node);
		rightStream.kids.push(node);

		return node;
	}


	// FILTERING

	function filterMap(toMaybe, base, signal)
	{
		var maybe = toMaybe(signal.value);
		var node = {
			id: Utils.guid(),
			name: 'filterMap',
			value: maybe.ctor === 'Nothing' ? base : maybe._0,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate)
			{
				var maybe = toMaybe(signal.value);
				if (maybe.ctor === 'Just')
				{
					update = true;
					node.value = maybe._0;
				}
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	// SAMPLING

	function sampleOn(ticker, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'sampleOn',
			value: signal.value,
			parents: [ticker, signal],
			kids: []
		};

		var signalTouch = false;
		var tickerTouch = false;
		var tickerUpdate = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === ticker.id)
			{
				tickerTouch = true;
				tickerUpdate = parentUpdate;
			}
			if (parentID === signal.id)
			{
				signalTouch = true;
			}

			if (tickerTouch && signalTouch)
			{
				if (tickerUpdate)
				{
					node.value = signal.value;
				}
				tickerTouch = false;
				signalTouch = false;

				broadcastToKids(node, timestamp, tickerUpdate);
			}
		};

		ticker.kids.push(node);
		signal.kids.push(node);

		return node;
	}


	// DROP REPEATS

	function dropRepeats(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'dropRepeats',
			value: signal.value,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate && !Utils.eq(node.value, signal.value))
			{
				node.value = signal.value;
				update = true;
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	return localRuntime.Native.Signal.values = {
		input: input,
		constant: constant,
		mailbox: mailbox,
		sendMessage: sendMessage,
		output: output,
		map: F2(map),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		foldp: F3(foldp),
		genericMerge: F3(genericMerge),
		filterMap: F3(filterMap),
		sampleOn: F2(sampleOn),
		dropRepeats: dropRepeats,
		timestamp: timestamp,
		delay: F2(delay)
	};
};

Elm.Native.String = {};
Elm.Native.String.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.String = localRuntime.Native.String || {};
	if (localRuntime.Native.String.values)
	{
		return localRuntime.Native.String.values;
	}
	if ('values' in Elm.Native.String)
	{
		return localRuntime.Native.String.values = Elm.Native.String.values;
	}


	var Char = Elm.Char.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr,str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd;
		return (hd = str[0])
			? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
			: Maybe.Nothing;
	}
	function append(a,b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f,str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred,str)
	{
		return str.split('').map(Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f,b,str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f,b,str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}

	function split(sep, str)
	{
		return List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}

	function slice(start, end, str)
	{
		return str.slice(start,end);
	}
	function left(n, str)
	{
		return n < 1 ? "" : str.slice(0,n);
	}
	function right(n, str)
	{
		return n < 1 ? "" : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0,-n);
	}

	function pad(n,chr,str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
	}
	function padRight(n,chr,str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n,chr,str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.trimLeft();
	}
	function trimRight(str)
	{
		return str.trimRight();
	}

	function words(str)
	{
		return List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		var i = 0;
		var is = [];
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}
		return List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			if (!Char.isDigit(s[i]))
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return Result.Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			if (Char.isDigit(s[i]))
			{
				continue;
			}
			if (s[i] === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		return Result.Ok(parseFloat(s));
	}

	function toList(str)
	{
		return List.fromArray(str.split('').map(Utils.chr));
	}
	function fromList(chars)
	{
		return List.toArray(chars).join('');
	}

	return Elm.Native.String.values = {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
};

Elm.Native.Task = {};
Elm.Native.Task.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Task = localRuntime.Native.Task || {};
	if (localRuntime.Native.Task.values)
	{
		return localRuntime.Native.Task.values;
	}

	var Result = Elm.Result.make(localRuntime);
	var Signal;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CONSTRUCTORS

	function succeed(value)
	{
		return {
			tag: 'Succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			tag: 'Fail',
			value: error
		};
	}

	function asyncFunction(func)
	{
		return {
			tag: 'Async',
			asyncFunction: func
		};
	}

	function andThen(task, callback)
	{
		return {
			tag: 'AndThen',
			task: task,
			callback: callback
		};
	}

	function catch_(task, callback)
	{
		return {
			tag: 'Catch',
			task: task,
			callback: callback
		};
	}


	// RUNNER

	function perform(task) {
		runTask({ task: task }, function() {});
	}

	function performSignal(name, signal)
	{
		var workQueue = [];

		function onComplete()
		{
			workQueue.shift();

			setTimeout(function() {
				if (workQueue.length > 0)
				{
					runTask(workQueue[0], onComplete);
				}
			}, 0);
		}

		function register(task)
		{
			var root = { task: task };
			workQueue.push(root);
			if (workQueue.length === 1)
			{
				runTask(root, onComplete);
			}
		}

		if (!Signal)
		{
			Signal = Elm.Native.Signal.make(localRuntime);
		}
		Signal.output('perform-tasks-' + name, register, signal);

		register(signal.value);

		return signal;
	}

	function mark(status, task)
	{
		return { status: status, task: task };
	}

	function runTask(root, onComplete)
	{
		var result = mark('runnable', root.task);
		while (result.status === 'runnable')
		{
			result = stepTask(onComplete, root, result.task);
		}

		if (result.status === 'done')
		{
			root.task = result.task;
			onComplete();
		}

		if (result.status === 'blocked')
		{
			root.task = result.task;
		}
	}

	function stepTask(onComplete, root, task)
	{
		var tag = task.tag;

		if (tag === 'Succeed' || tag === 'Fail')
		{
			return mark('done', task);
		}

		if (tag === 'Async')
		{
			var placeHolder = {};
			var couldBeSync = true;
			var wasSync = false;

			task.asyncFunction(function(result) {
				placeHolder.tag = result.tag;
				placeHolder.value = result.value;
				if (couldBeSync)
				{
					wasSync = true;
				}
				else
				{
					runTask(root, onComplete);
				}
			});
			couldBeSync = false;
			return mark(wasSync ? 'done' : 'blocked', placeHolder);
		}

		if (tag === 'AndThen' || tag === 'Catch')
		{
			var result = mark('runnable', task.task);
			while (result.status === 'runnable')
			{
				result = stepTask(onComplete, root, result.task);
			}

			if (result.status === 'done')
			{
				var activeTask = result.task;
				var activeTag = activeTask.tag;

				var succeedChain = activeTag === 'Succeed' && tag === 'AndThen';
				var failChain = activeTag === 'Fail' && tag === 'Catch';

				return (succeedChain || failChain)
					? mark('runnable', task.callback(activeTask.value))
					: mark('runnable', activeTask);
			}
			if (result.status === 'blocked')
			{
				return mark('blocked', {
					tag: tag,
					task: result.task,
					callback: task.callback
				});
			}
		}
	}


	// THREADS

	function sleep(time) {
		return asyncFunction(function(callback) {
			setTimeout(function() {
				callback(succeed(Utils.Tuple0));
			}, time);
		});
	}

	function spawn(task) {
		return asyncFunction(function(callback) {
			var id = setTimeout(function() {
				perform(task);
			}, 0);
			callback(succeed(id));
		});
	}


	return localRuntime.Native.Task.values = {
		succeed: succeed,
		fail: fail,
		asyncFunction: asyncFunction,
		andThen: F2(andThen),
		catch_: F2(catch_),
		perform: perform,
		performSignal: performSignal,
		spawn: spawn,
		sleep: sleep
	};
};

Elm.Native.Text = {};
Elm.Native.Text.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Text = localRuntime.Native.Text || {};
	if (localRuntime.Native.Text.values)
	{
		return localRuntime.Native.Text.values;
	}

	var toCss = Elm.Native.Color.make(localRuntime).toCss;
	var List = Elm.Native.List.make(localRuntime);


	// CONSTRUCTORS

	function fromString(str)
	{
		return {
			ctor: 'Text:Text',
			_0: str
		};
	}

	function append(a, b)
	{
		return {
			ctor: 'Text:Append',
			_0: a,
			_1: b
		};
	}

	function addMeta(field, value, text)
	{
		var newProps = {};
		var newText = {
			ctor: 'Text:Meta',
			_0: newProps,
			_1: text
		};

		if (text.ctor === 'Text:Meta')
		{
			newText._1 = text._1;
			var props = text._0;
			for (var i = metaKeys.length; i--; )
			{
				var key = metaKeys[i];
				var val = props[key];
				if (val)
				{
					newProps[key] = val;
				}
			}
		}
		newProps[field] = value;
		return newText;
	}

	var metaKeys = [
		'font-size',
		'font-family',
		'font-style',
		'font-weight',
		'href',
		'text-decoration',
		'color'
	];


	// conversions from Elm values to CSS

	function toTypefaces(list)
	{
		var typefaces = List.toArray(list);
		for (var i = typefaces.length; i--; )
		{
			var typeface = typefaces[i];
			if (typeface.indexOf(' ') > -1)
			{
				typefaces[i] = "'" + typeface + "'";
			}
		}
		return typefaces.join(',');
	}

	function toLine(line)
	{
		var ctor = line.ctor;
		return ctor === 'Under'
			? 'underline'
			: ctor === 'Over'
				? 'overline'
				: 'line-through';
	}

	// setting styles of Text

	function style(style, text)
	{
		var newText = addMeta('color', toCss(style.color), text);
		var props = newText._0;

		if (style.typeface.ctor !== '[]')
		{
			props['font-family'] = toTypefaces(style.typeface);
		}
		if (style.height.ctor !== "Nothing")
		{
			props['font-size'] = style.height._0 + 'px';
		}
		if (style.bold)
		{
			props['font-weight'] = 'bold';
		}
		if (style.italic)
		{
			props['font-style'] = 'italic';
		}
		if (style.line.ctor !== 'Nothing')
		{
			props['text-decoration'] = toLine(style.line._0);
		}
		return newText;
	}

	function height(px, text)
	{
		return addMeta('font-size', px + 'px', text);
	}

	function typeface(names, text)
	{
		return addMeta('font-family', toTypefaces(names), text);
	}

	function monospace(text)
	{
		return addMeta('font-family', 'monospace', text);
	}

	function italic(text)
	{
		return addMeta('font-style', 'italic', text);
	}

	function bold(text)
	{
		return addMeta('font-weight', 'bold', text);
	}

	function link(href, text)
	{
		return addMeta('href', href, text);
	}

	function line(line, text)
	{
		return addMeta('text-decoration', toLine(line), text);
	}

	function color(color, text)
	{
		return addMeta('color', toCss(color), text);;
	}


	// RENDER

	function renderHtml(text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			return renderHtml(text._0) + renderHtml(text._1);
		}
		if (tag === 'Text:Text')
		{
			return properEscape(text._0);
		}
		if (tag === 'Text:Meta')
		{
			return renderMeta(text._0, renderHtml(text._1));
		}
	}

	function renderMeta(metas, string)
	{
		var href = metas['href'];
		if (href)
		{
			string = '<a href="' + href + '">' + string + '</a>';
		}
		var styles = '';
		for (var key in metas)
		{
			if (key === 'href')
			{
				continue;
			}
			styles += key + ':' + metas[key] + ';';
		}
		if (styles)
		{
			string = '<span style="' + styles + '">' + string + '</span>';
		}
		return string;
	}

	function properEscape(str)
	{
		if (str.length == 0)
		{
			return str;
		}
		str = str //.replace(/&/g,  "&#38;")
			.replace(/"/g,  '&#34;')
			.replace(/'/g,  "&#39;")
			.replace(/</g,  "&#60;")
			.replace(/>/g,  "&#62;");
		var arr = str.split('\n');
		for (var i = arr.length; i--; )
		{
			arr[i] = makeSpaces(arr[i]);
		}
		return arr.join('<br/>');
	}

	function makeSpaces(s)
	{
		if (s.length == 0)
		{
			return s;
		}
		var arr = s.split('');
		if (arr[0] == ' ')
		{
			arr[0] = "&nbsp;"
		}
		for (var i = arr.length; --i; )
		{
			if (arr[i][0] == ' ' && arr[i-1] == ' ')
			{
				arr[i-1] = arr[i-1] + arr[i];
				arr[i] = '';
			}
		}
		for (var i = arr.length; i--; )
		{
			if (arr[i].length > 1 && arr[i][0] == ' ')
			{
				var spaces = arr[i].split('');
				for (var j = spaces.length - 2; j >= 0; j -= 2)
				{
					spaces[j] = '&nbsp;';
				}
				arr[i] = spaces.join('');
			}
		}
		arr = arr.join('');
		if (arr[arr.length-1] === " ")
		{
			return arr.slice(0,-1) + '&nbsp;';
		}
		return arr;
	}


	return localRuntime.Native.Text.values = {
		fromString: fromString,
		append: F2(append),

		height: F2(height),
		italic: italic,
		bold: bold,
		line: F2(line),
		monospace: monospace,
		typeface: F2(typeface),
		color: F2(color),
		link: F2(link),
		style: F2(style),

		toTypefaces: toTypefaces,
		toLine: toLine,
		renderHtml: renderHtml
	};
};

Elm.Native.Time = {};
Elm.Native.Time.make = function(localRuntime)
{

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Time = localRuntime.Native.Time || {};
	if (localRuntime.Native.Time.values)
	{
		return localRuntime.Native.Time.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);


	// FRAMES PER SECOND

	function fpsWhen(desiredFPS, isOn)
	{
		var msPerFrame = 1000 / desiredFPS;
		var ticker = NS.input('fps-' + desiredFPS, null);

		function notifyTicker()
		{
			localRuntime.notify(ticker.id, null);
		}

		function firstArg(x, y)
		{
			return x;
		}

		// input fires either when isOn changes, or when ticker fires.
		// Its value is a tuple with the current timestamp, and the state of isOn
		var input = NS.timestamp(A3(NS.map2, F2(firstArg), NS.dropRepeats(isOn), ticker));

		var initialState = {
			isOn: false,
			time: localRuntime.timer.programStart,
			delta: 0
		};

		var timeoutId;

		function update(input,state)
		{
			var currentTime = input._0;
			var isOn = input._1;
			var wasOn = state.isOn;
			var previousTime = state.time;

			if (isOn)
			{
				timeoutId = localRuntime.setTimeout(notifyTicker, msPerFrame);
			}
			else if (wasOn)
			{
				clearTimeout(timeoutId);
			}

			return {
				isOn: isOn,
				time: currentTime,
				delta: (isOn && !wasOn) ? 0 : currentTime - previousTime
			};
		}

		return A2(
			NS.map,
			function(state) { return state.delta; },
			A3(NS.foldp, F2(update), update(input.value,initialState), input)
		);
	}


	// EVERY

	function every(t)
	{
		var ticker = NS.input('every-' + t, null);
		function tellTime()
		{
			localRuntime.notify(ticker.id, null);
		}
		var clock = A2( NS.map, fst, NS.timestamp(ticker) );
		setInterval(tellTime, t);
		return clock;
	}


	function fst(pair)
	{
		return pair._0;
	}


	function read(s)
	{
		var t = Date.parse(s);
		return isNaN(t) ? Maybe.Nothing : Maybe.Just(t);
	}

	return localRuntime.Native.Time.values = {
		fpsWhen: F2(fpsWhen),
		every: every,
		toDate: function(t) { return new window.Date(t); },
		read: read
	};

};

Elm.Native.Transform2D = {};
Elm.Native.Transform2D.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Transform2D = localRuntime.Native.Transform2D || {};
	if (localRuntime.Native.Transform2D.values)
	{
		return localRuntime.Native.Transform2D.values;
	}

	var A;
	if (typeof Float32Array === 'undefined')
	{
		A = function(arr)
		{
			this.length = arr.length;
			this[0] = arr[0];
			this[1] = arr[1];
			this[2] = arr[2];
			this[3] = arr[3];
			this[4] = arr[4];
			this[5] = arr[5];
		};
	}
	else
	{
		A = Float32Array;
	}

	// layout of matrix in an array is
	//
	//   | m11 m12 dx |
	//   | m21 m22 dy |
	//   |  0   0   1 |
	//
	//  new A([ m11, m12, dx, m21, m22, dy ])

	var identity = new A([1,0,0,0,1,0]);
	function matrix(m11, m12, m21, m22, dx, dy)
	{
		return new A([m11, m12, dx, m21, m22, dy]);
	}

	function rotation(t)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		return new A([c, -s, 0, s, c, 0]);
	}

	function rotate(t,m)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11*c + m12*s, -m11*s + m12*c, m[2],
					  m21*c + m22*s, -m21*s + m22*c, m[5]]);
	}
	/*
	function move(xy,m) {
		var x = xy._0;
		var y = xy._1;
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11, m12, m11*x + m12*y + m[2],
					  m21, m22, m21*x + m22*y + m[5]]);
	}
	function scale(s,m) { return new A([m[0]*s, m[1]*s, m[2], m[3]*s, m[4]*s, m[5]]); }
	function scaleX(x,m) { return new A([m[0]*x, m[1], m[2], m[3]*x, m[4], m[5]]); }
	function scaleY(y,m) { return new A([m[0], m[1]*y, m[2], m[3], m[4]*y, m[5]]); }
	function reflectX(m) { return new A([-m[0], m[1], m[2], -m[3], m[4], m[5]]); }
	function reflectY(m) { return new A([m[0], -m[1], m[2], m[3], -m[4], m[5]]); }

	function transform(m11, m21, m12, m22, mdx, mdy, n) {
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}
	*/
	function multiply(m, n)
	{
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4], mdx = m[2], mdy = m[5];
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}

	return localRuntime.Native.Transform2D.values = {
		identity:identity,
		matrix:F6(matrix),
		rotation:rotation,
		multiply:F2(multiply)
		/*
		transform:F7(transform),
		rotate:F2(rotate),
		move:F2(move),
		scale:F2(scale),
		scaleX:F2(scaleX),
		scaleY:F2(scaleY),
		reflectX:reflectX,
		reflectY:reflectY
		*/
	};

};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Utils = localRuntime.Native.Utils || {};
	if (localRuntime.Native.Utils.values)
	{
		return localRuntime.Native.Utils.values;
	}

	function eq(l,r)
	{
		var stack = [{'x': l, 'y': r}]
		while (stack.length > 0)
		{
			var front = stack.pop();
			var x = front.x;
			var y = front.y;
			if (x === y)
			{
				continue;
			}
			if (typeof x === "object")
			{
				var c = 0;
				for (var i in x)
				{
					++c;
					if (i in y)
					{
						if (i !== 'ctor')
						{
							stack.push({ 'x': x[i], 'y': y[i] });
						}
					}
					else
					{
						return false;
					}
				}
				if ('ctor' in x)
				{
					stack.push({'x': x.ctor, 'y': y.ctor});
				}
				if (c !== Object.keys(y).length)
				{
					return false;
				}
			}
			else if (typeof x === 'function')
			{
				throw new Error('Equality error: general function equality is ' +
								'undecidable, and therefore, unsupported');
			}
			else
			{
				return false;
			}
		}
		return true;
	}

	// code in Generate/JavaScript.hs depends on the particular
	// integer values assigned to LT, EQ, and GT
	var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];

	function compare(x,y)
	{
		return {
			ctor: ord[cmp(x,y)+1]
		};
	}

	function cmp(x,y) {
		var ord;
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
		else if (x.isChar)
		{
			var a = x.toString();
			var b = y.toString();
			return a === b
				? EQ
				: a < b
					? LT
					: GT;
		}
		else if (x.ctor === "::" || x.ctor === "[]")
		{
			while (true)
			{
				if (x.ctor === "[]" && y.ctor === "[]")
				{
					return EQ;
				}
				if (x.ctor !== y.ctor)
				{
					return x.ctor === '[]' ? LT : GT;
				}
				ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
		}
		else if (x.ctor.slice(0,6) === '_Tuple')
		{
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
		else
		{
			throw new Error('Comparison error: comparison is only defined on ints, ' +
							'floats, times, chars, strings, lists of comparable values, ' +
							'and tuples of comparable values.');
		}
	}


	var Tuple0 = {
		ctor: "_Tuple0"
	};

	function Tuple2(x,y)
	{
		return {
			ctor: "_Tuple2",
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		var x = new String(c);
		x.isChar = true;
		return x;
	}

	function txt(str)
	{
		var t = new String(str);
		t.text = true;
		return t;
	}

	var count = 0;
	function guid(_)
	{
		return count++
	}

	function copy(oldRecord)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = key === '_'
				? copy(oldRecord._)
				: oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}

	function remove(key, oldRecord)
	{
		var record = copy(oldRecord);
		if (key in record._)
		{
			record[key] = record._[key][0];
			record._[key] = record._[key].slice(1);
			if (record._[key].length === 0)
			{
				delete record._[key];
			}
		}
		else
		{
			delete record[key];
		}
		return record;
	}

	function replace(keyValuePairs, oldRecord)
	{
		var record = copy(oldRecord);
		for (var i = keyValuePairs.length; i--; )
		{
			var pair = keyValuePairs[i];
			record[pair[0]] = pair[1];
		}
		return record;
	}

	function insert(key, value, oldRecord)
	{
		var newRecord = copy(oldRecord);
		if (key in newRecord)
		{
			var values = newRecord._[key];
			var copiedValues = values ? values.slice(0) : [];
			newRecord._[key] = [newRecord[key]].concat(copiedValues);
		}
		newRecord[key] = value;
		return newRecord;
	}

	function getXY(e)
	{
		var posx = 0;
		var posy = 0;
		if (e.pageX || e.pageY)
		{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY)
		{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		if (localRuntime.isEmbed())
		{
			var rect = localRuntime.node.getBoundingClientRect();
			var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
			var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
			// TODO: figure out if there is a way to avoid rounding here
			posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
			posy = posy - Math.round(rely) - localRuntime.node.clientTop;
		}
		return Tuple2(posx, posy);
	}


	//// LIST STUFF ////

	var Nil = { ctor:'[]' };

	function Cons(hd,tl)
	{
		return {
			ctor: "::",
			_0: hd,
			_1: tl
		};
	}

	function append(xs,ys)
	{
		// append Strings
		if (typeof xs === "string")
		{
			return xs + ys;
		}

		// append Text
		if (xs.ctor.slice(0,5) === 'Text:')
		{
			return {
				ctor: 'Text:Append',
				_0: xs,
				_1: ys
			};
		}



		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}

	//// RUNTIME ERRORS ////

	function indent(lines)
	{
		return '\n' + lines.join('\n');
	}

	function badCase(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in case-expression.',
			'Make sure your patterns cover every case!'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}

	function badIf(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in multi-way-if expression.',
			'It is best to use \'otherwise\' as the last branch of multi-way-if.'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}


	function badPort(expected, received)
	{
		var msg = indent([
			'Expecting ' + expected + ' but was given ',
			JSON.stringify(received)
		]);
		throw new Error('Runtime error when sending values through a port.' + msg);
	}


	return localRuntime.Native.Utils.values = {
		eq: eq,
		cmp: cmp,
		compare: F2(compare),
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		txt: txt,
		copy: copy,
		remove: remove,
		replace: replace,
		insert: insert,
		guid: guid,
		getXY: getXY,

		Nil: Nil,
		Cons: Cons,
		append: F2(append),

		badCase: badCase,
		badIf: badIf,
		badPort: badPort
	};
};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":6}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":24}],3:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],4:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],5:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":13,"is-object":3}],6:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":11,"../vnode/is-vnode.js":14,"../vnode/is-vtext.js":15,"../vnode/is-widget.js":16,"./apply-properties":5,"global/document":2}],7:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],8:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":16,"../vnode/vpatch.js":19,"./apply-properties":5,"./create-element":6,"./update-widget":10}],9:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":7,"./patch-op":8,"global/document":2,"x-is-array":4}],10:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":16}],11:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":12,"./is-vnode":14,"./is-vtext":15,"./is-widget":16}],12:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],13:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],14:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":17}],15:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":17}],16:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],17:[function(require,module,exports){
module.exports = "2"

},{}],18:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":12,"./is-vhook":13,"./is-vnode":14,"./is-widget":16,"./version":17}],19:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":17}],20:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":17}],21:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":13,"is-object":3}],22:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free,     // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":11,"../vnode/is-thunk":12,"../vnode/is-vnode":14,"../vnode/is-vtext":15,"../vnode/is-widget":16,"../vnode/vpatch":19,"./diff-props":21,"x-is-array":4}],23:[function(require,module,exports){
var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var diff = require('virtual-dom/vtree/diff');
var patch = require('virtual-dom/vdom/patch');
var createElement = require('virtual-dom/create-element');
var isHook = require("virtual-dom/vnode/is-vhook");


Elm.Native.VirtualDom = {};
Elm.Native.VirtualDom.make = function(elm)
{
	elm.Native = elm.Native || {};
	elm.Native.VirtualDom = elm.Native.VirtualDom || {};
	if (elm.Native.VirtualDom.values)
	{
		return elm.Native.VirtualDom.values;
	}

	var Element = Elm.Native.Graphics.Element.make(elm);
	var Json = Elm.Native.Json.make(elm);
	var List = Elm.Native.List.make(elm);
	var Signal = Elm.Native.Signal.make(elm);
	var Utils = Elm.Native.Utils.make(elm);

	var ATTRIBUTE_KEY = 'UniqueNameThatOthersAreVeryUnlikelyToUse';

	function listToProperties(list)
	{
		var object = {};
		while (list.ctor !== '[]')
		{
			var entry = list._0;
			if (entry.key === ATTRIBUTE_KEY)
			{
				object.attributes = object.attributes || {};
				object.attributes[entry.value.attrKey] = entry.value.attrValue;
			}
			else
			{
				object[entry.key] = entry.value;
			}
			list = list._1;
		}
		return object;
	}

	function node(name)
	{
		return F2(function(propertyList, contents) {
			return makeNode(name, propertyList, contents);
		});
	}

	function makeNode(name, propertyList, contents)
	{
		var props = listToProperties(propertyList);

		var key, namespace;
		// support keys
		if (props.key !== undefined)
		{
			key = props.key;
			props.key = undefined;
		}

		// support namespace
		if (props.namespace !== undefined)
		{
			namespace = props.namespace;
			props.namespace = undefined;
		}

		// ensure that setting text of an input does not move the cursor
		var useSoftSet =
			name === 'input'
			&& props.value !== undefined
			&& !isHook(props.value);

		if (useSoftSet)
		{
			props.value = SoftSetHook(props.value);
		}

		return new VNode(name, props, List.toArray(contents), key, namespace);
	}

	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}

	function attribute(key, value)
	{
		return {
			key: ATTRIBUTE_KEY,
			value: {
				attrKey: key,
				attrValue: value
			}
		};
	}

	function on(name, options, decoder, createMessage)
	{
		function eventHandler(event)
		{
			var value = A2(Json.runDecoderValue, decoder, event);
			if (value.ctor === 'Ok')
			{
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}
				Signal.sendMessage(createMessage(value._0));
			}
		}
		return property('on' + name, eventHandler);
	}

	function SoftSetHook(value)
	{
		if (!(this instanceof SoftSetHook))
		{
			return new SoftSetHook(value);
		}

		this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName)
	{
		if (node[propertyName] !== this.value)
		{
			node[propertyName] = this.value;
		}
	};

	function text(string)
	{
		return new VText(string);
	}

	function ElementWidget(element)
	{
		this.element = element;
	}

	ElementWidget.prototype.type = "Widget";

	ElementWidget.prototype.init = function init()
	{
		return Element.render(this.element);
	};

	ElementWidget.prototype.update = function update(previous, node)
	{
		return Element.update(node, previous.element, this.element);
	};

	function fromElement(element)
	{
		return new ElementWidget(element);
	}

	function toElement(width, height, html)
	{
		return A3(Element.newElement, width, height, {
			ctor: 'Custom',
			type: 'evancz/elm-html',
			render: render,
			update: update,
			model: html
		});
	}

	function render(model)
	{
		var element = Element.createNode('div');
		element.appendChild(createElement(model));
		return element;
	}

	function update(node, oldModel, newModel)
	{
		updateAndReplace(node.firstChild, oldModel, newModel);
		return node;
	}

	function updateAndReplace(node, oldModel, newModel)
	{
		var patches = diff(oldModel, newModel);
		var newNode = patch(node, patches);
		return newNode;
	}

	function lazyRef(fn, a)
	{
		function thunk()
		{
			return fn(a);
		}
		return new Thunk(fn, [a], thunk);
	}

	function lazyRef2(fn, a, b)
	{
		function thunk()
		{
			return A2(fn, a, b);
		}
		return new Thunk(fn, [a,b], thunk);
	}

	function lazyRef3(fn, a, b, c)
	{
		function thunk()
		{
			return A3(fn, a, b, c);
		}
		return new Thunk(fn, [a,b,c], thunk);
	}

	function Thunk(fn, args, thunk)
	{
		this.fn = fn;
		this.args = args;
		this.vnode = null;
		this.key = undefined;
		this.thunk = thunk;
	}

	Thunk.prototype.type = "Thunk";
	Thunk.prototype.update = updateThunk;
	Thunk.prototype.render = renderThunk;

	function shouldUpdate(current, previous)
	{
		if (current.fn !== previous.fn)
		{
			return true;
		}

		// if it's the same function, we know the number of args must match
		var cargs = current.args;
		var pargs = previous.args;

		for (var i = cargs.length; i--; )
		{
			if (cargs[i] !== pargs[i])
			{
				return true;
			}
		}

		return false;
	}

	function updateThunk(previous, domNode)
	{
		if (!shouldUpdate(this, previous))
		{
			this.vnode = previous.vnode;
			return;
		}

		if (!this.vnode)
		{
			this.vnode = this.thunk();
		}

		var patches = diff(previous.vnode, this.vnode);
		patch(domNode, patches);
	}

	function renderThunk()
	{
		return this.thunk();
	}

	return Elm.Native.VirtualDom.values = {
		node: node,
		text: text,
		on: F4(on),

		property: F2(property),
		attribute: F2(attribute),

		lazy: F2(lazyRef),
		lazy2: F3(lazyRef2),
		lazy3: F4(lazyRef3),

		toElement: F3(toElement),
		fromElement: fromElement,

		render: createElement,
		updateAndReplace: updateAndReplace
	};
};

},{"virtual-dom/create-element":1,"virtual-dom/vdom/patch":9,"virtual-dom/vnode/is-vhook":13,"virtual-dom/vnode/vnode":18,"virtual-dom/vnode/vtext":20,"virtual-dom/vtree/diff":22}],24:[function(require,module,exports){

},{}]},{},[23]);

Elm.Network = Elm.Network || {};
Elm.Network.make = function (_elm) {
   "use strict";
   _elm.Network = _elm.Network || {};
   if (_elm.Network.values)
   return _elm.Network.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Network",
   $Agent = Elm.Agent.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $IntDict = Elm.IntDict.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Types = Elm.Types.make(_elm);
   var analyze = F2(function (net,
   oldMetrics) {
      return function () {
         var currentlyWaiting = $List.sum($List.map(function (node) {
            return $Basics.toFloat($Types.waitingPassengersAt(node.label));
         })($Graph.nodes(net)));
         var totalBusDistanceTravelled = $List.sum($List.map(function (edge) {
            return $List.sum(A2($List.map,
            $Types.busDistanceTravelled,
            edge.label.agents));
         })($Graph.edges(net)));
         var numRoads = $Basics.toFloat($List.length($Graph.edges(net)));
         var numBuses = $List.sum($List.map(function (edge) {
            return $Basics.toFloat($List.length(A2($List.filter,
            $Types.isBus,
            edge.label.agents)));
         })($Graph.edges(net)));
         var avgBusDistanceTravelled = totalBusDistanceTravelled / numBuses;
         var numAgents = $List.sum($List.map(function (edge) {
            return $Basics.toFloat($List.length(edge.label.agents));
         })($Graph.edges(net)));
         var currentCongestion = numAgents / numRoads;
         var metrics = A2($Dict.insert,
         "avgBusDistanceTravelled",
         avgBusDistanceTravelled)(A2($Dict.insert,
         "totalWaiting",
         currentlyWaiting + $Maybe.withDefault(0)(A2($Dict.get,
         "totalWaiting",
         oldMetrics)))(A2($Dict.insert,
         "currentlyWaiting",
         currentlyWaiting)(A2($Dict.insert,
         "totalCongestion",
         currentCongestion + $Maybe.withDefault(0)(A2($Dict.get,
         "totalCongestion",
         oldMetrics)))(A2($Dict.insert,
         "currentCongestion",
         currentCongestion)(A2($Dict.insert,
         "ticks",
         1 + $Maybe.withDefault(0)(A2($Dict.get,
         "ticks",
         oldMetrics)))(oldMetrics))))));
         return $Debug.watch("metrics")(A2($Dict.insert,
         "avgBusSpeed",
         $Helpers.getOrFail("")(A2($Dict.get,
         "avgBusDistanceTravelled",
         metrics)) / $Helpers.getOrFail("")(A2($Dict.get,
         "ticks",
         metrics)))(A2($Dict.insert,
         "avgWaiting",
         $Helpers.getOrFail("")(A2($Dict.get,
         "totalWaiting",
         metrics)) / $Helpers.getOrFail("")(A2($Dict.get,
         "ticks",
         metrics)))(A2($Dict.insert,
         "avgCongestion",
         $Helpers.getOrFail("")(A2($Dict.get,
         "totalCongestion",
         metrics)) / $Helpers.getOrFail("")(A2($Dict.get,
         "ticks",
         metrics)))(metrics))));
      }();
   });
   var moveAgents = function (ctx) {
      return function () {
         var moveRoad = function (_v0) {
            return function () {
               switch (_v0.ctor)
               {case "_Tuple2":
                  return function () {
                       var go = F2(function (agent,
                       calculated) {
                          return function () {
                             var onEdge = $List.map($Basics.snd)(A2($List.filter,
                             function (_v4) {
                                return function () {
                                   switch (_v4.ctor)
                                   {case "_Tuple2":
                                      switch (_v4._0.ctor)
                                        {case "_Tuple2":
                                           return _U.eq(_v4._0._0,_v0._0);}
                                        break;}
                                   _U.badCase($moduleName,
                                   "on line 25, column 50 to 59");
                                }();
                             },
                             calculated));
                             var max = function () {
                                var _v10 = $List.head(onEdge);
                                switch (_v10.ctor)
                                {case "Just":
                                   return _v10._0.travelled - $Types.sizeOf(_v10._0);
                                   case "Nothing": return 1 / 0;}
                                _U.badCase($moduleName,
                                "between lines 26 and 29");
                             }();
                             return A2($List._op["::"],
                             A5($Agent.move,
                             ctx,
                             _v0._0,
                             _v0._1,
                             agent,
                             max),
                             calculated);
                          }();
                       });
                       return A2($List.foldl,
                       go,
                       _L.fromArray([]))($List.reverse(A2($List.sortBy,
                       function (_) {
                          return _.travelled;
                       },
                       _v0._1.agents)));
                    }();}
               _U.badCase($moduleName,
               "between lines 24 and 32");
            }();
         };
         return $List.concatMap(moveRoad)($IntDict.toList(ctx.incoming));
      }();
   };
   var updateContext = function (ctx) {
      return function () {
         var moved = moveAgents(ctx);
         var updateEdge = F2(function (edgeIds,
         road) {
            return function () {
               var spawnedAgents = function () {
                  var _v12 = ctx.node.label.kind;
                  switch (_v12.ctor)
                  {case "CarSpawner":
                     return _U.cmp(_v12._0.nextIn,
                       1) < 0 && _U.eq(_v12._0.startEdge,
                       edgeIds) ? _L.fromArray([{_: {}
                                                ,color: $Color.gray
                                                ,kind: $Types.Car(_v12._0.route)
                                                ,lastEdge: $Maybe.Nothing
                                                ,speed: _v12._0.speed
                                                ,totalDist: 0.0
                                                ,travelled: 0.0}]) : _L.fromArray([]);}
                  return _L.fromArray([]);
               }();
               var check = function (_v14) {
                  return function () {
                     switch (_v14.ctor)
                     {case "_Tuple2":
                        return _U.eq(_v14._0,
                          edgeIds) ? $Maybe.Just(_v14._1) : $Maybe.Nothing;}
                     _U.badCase($moduleName,
                     "between lines 41 and 43");
                  }();
               };
               return _U.replace([["agents"
                                  ,A2($Basics._op["++"],
                                  A2($List.filterMap,check,moved),
                                  spawnedAgents)]],
               road);
            }();
         });
         var newIncoming = A2($IntDict.map,
         F2(function (nid,road) {
            return A2(updateEdge,
            {ctor: "_Tuple2"
            ,_0: nid
            ,_1: ctx.node.id},
            road);
         }),
         ctx.incoming);
         var newIncomingEdges = $List.map(function (_v18) {
            return function () {
               switch (_v18.ctor)
               {case "_Tuple2": return {_: {}
                                       ,from: _v18._0
                                       ,label: _v18._1
                                       ,to: ctx.node.id};}
               _U.badCase($moduleName,
               "on line 55, column 83 to 129");
            }();
         })($IntDict.toList(newIncoming));
         var newOutgoing = A2($IntDict.map,
         F2(function (nid,road) {
            return A2(updateEdge,
            {ctor: "_Tuple2"
            ,_0: ctx.node.id
            ,_1: nid},
            road);
         }),
         ctx.outgoing);
         var newOutgoingEdges = $List.map(function (_v22) {
            return function () {
               switch (_v22.ctor)
               {case "_Tuple2": return {_: {}
                                       ,from: ctx.node.id
                                       ,label: _v22._1
                                       ,to: _v22._0};}
               _U.badCase($moduleName,
               "on line 56, column 81 to 125");
            }();
         })($IntDict.toList(newOutgoing));
         return {ctor: "_Tuple2"
                ,_0: newIncomingEdges
                ,_1: newOutgoingEdges};
      }();
   };
   var pickUpSpeed = 1.0;
   var updatePoint = F3(function (edges,
   id,
   point) {
      return function () {
         var _v26 = point.kind;
         switch (_v26.ctor)
         {case "BusStop":
            return function () {
                 var newProps = A2($List.any,
                 function (e) {
                    return _U.eq(e.to,
                    id) && A2($List.any,
                    function (a) {
                       return _U.eq(a.travelled,
                       e.label.length);
                    },
                    e.label.agents);
                 },
                 edges) ? _U.replace([["currentlyWaiting"
                                      ,_v26._0.currentlyWaiting - pickUpSpeed]],
                 _v26._0) : _U.replace([["currentlyWaiting"
                                        ,_v26._0.currentlyWaiting + _v26._0.waitingDelta]],
                 _v26._0);
                 return _U.replace([["kind"
                                    ,$Types.BusStop(newProps)]],
                 point);
              }();
            case "CarSpawner":
            return function () {
                 var newProps = _U.cmp(_v26._0.nextIn,
                 1) < 0 ? _U.replace([["nextIn"
                                      ,_v26._0.interval]],
                 _v26._0) : _U.replace([["nextIn"
                                        ,_v26._0.nextIn - 1]],
                 _v26._0);
                 return _U.replace([["kind"
                                    ,$Types.CarSpawner(newProps)]],
                 point);
              }();
            case "Intersection":
            return point;
            case "StopSign":
            return function () {
                 var newProps = A2($List.any,
                 function (e) {
                    return _U.eq(e.to,
                    id) && A2($List.any,
                    function (a) {
                       return _U.eq(a.travelled,
                       e.label.length);
                    },
                    e.label.agents);
                 },
                 edges) ? _U.replace([["currentDelay"
                                      ,_v26._0.currentDelay - 1]],
                 _v26._0) : _U.replace([["currentDelay"
                                        ,_v26._0.delay]],
                 _v26._0);
                 return _U.replace([["kind"
                                    ,$Types.StopSign(newProps)]],
                 point);
              }();}
         _U.badCase($moduleName,
         "between lines 62 and 78");
      }();
   });
   var updateNetwork = function (net) {
      return function () {
         var go = F2(function (ctx,
         _v30) {
            return function () {
               switch (_v30.ctor)
               {case "_Tuple2":
                  return function () {
                       var $ = updateContext(ctx),
                       in$ = $._0,
                       out$ = $._1;
                       return {ctor: "_Tuple2"
                              ,_0: A2($Basics._op["++"],
                              _v30._0,
                              in$)
                              ,_1: A2($Basics._op["++"],
                              _v30._1,
                              out$)};
                    }();}
               _U.badCase($moduleName,
               "on line 82, column 28 to 93");
            }();
         });
         var $ = A3($Graph.fold,
         go,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         net),
         ins = $._0,
         outs = $._1;
         var mergedEdges = function () {
            var intsToInt = F2(function (x,
            y) {
               return Math.pow(2,
               x) * Math.pow(3,y);
            });
            var insDict = $IntDict.fromList(A2($List.map,
            function (e) {
               return {ctor: "_Tuple2"
                      ,_0: A2(intsToInt,e.from,e.to)
                      ,_1: e};
            },
            ins));
            var outDict = $IntDict.fromList(A2($List.map,
            function (e) {
               return {ctor: "_Tuple2"
                      ,_0: A2(intsToInt,e.from,e.to)
                      ,_1: e};
            },
            outs));
            var united = A3($IntDict.uniteWith,
            F3(function (key,inE,outE) {
               return function () {
                  var inElabel = inE.label;
                  return _U.replace([["label"
                                     ,_U.replace([["agents"
                                                  ,A2($Basics._op["++"],
                                                  inE.label.agents,
                                                  outE.label.agents)]],
                                     inElabel)]],
                  inE);
               }();
            }),
            insDict,
            outDict);
            return $IntDict.values(united);
         }();
         var newNodes = $List.map(function (n) {
            return _U.replace([["label"
                               ,A3(updatePoint,
                               mergedEdges,
                               n.id,
                               n.label)]],
            n);
         })($Graph.nodes(net));
         return A2($Graph.fromNodesAndEdges,
         newNodes,
         mergedEdges);
      }();
   };
   var update = function (_v34) {
      return function () {
         switch (_v34.ctor)
         {case "State":
            return A2($Types.State,
              updateNetwork(_v34._0),
              A2(analyze,_v34._0,_v34._1));}
         _U.badCase($moduleName,
         "on line 120, column 34 to 88");
      }();
   };
   _elm.Network.values = {_op: _op
                         ,pickUpSpeed: pickUpSpeed
                         ,moveAgents: moveAgents
                         ,updateContext: updateContext
                         ,updatePoint: updatePoint
                         ,updateNetwork: updateNetwork
                         ,analyze: analyze
                         ,update: update};
   return _elm.Network.values;
};
Elm.Queue = Elm.Queue || {};
Elm.Queue.make = function (_elm) {
   "use strict";
   _elm.Queue = _elm.Queue || {};
   if (_elm.Queue.values)
   return _elm.Queue.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Queue",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Queue$Internal = Elm.Queue.Internal.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var toList = function (_v0) {
      return function () {
         switch (_v0.ctor)
         {case "Queue":
            return A2($Basics._op["++"],
              _v0._0,
              $List.reverse(_v0._1));}
         _U.badCase($moduleName,
         "on line 55, column 22 to 41");
      }();
   };
   var map = F2(function (g,_v4) {
      return function () {
         switch (_v4.ctor)
         {case "Queue":
            return A2($Queue$Internal.Queue,
              A2($List.map,g,_v4._0),
              A2($List.map,g,_v4._1));}
         _U.badCase($moduleName,
         "on line 52, column 21 to 55");
      }();
   });
   var length = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "Queue":
            return $List.length(_v8._0) + $List.length(_v8._1);}
         _U.badCase($moduleName,
         "on line 49, column 22 to 51");
      }();
   };
   var isEmpty = function (q) {
      return function () {
         switch (q.ctor)
         {case "Queue":
            switch (q._0.ctor)
              {case "[]": switch (q._1.ctor)
                   {case "[]": return true;}
                   break;}
              break;}
         return false;
      }();
   };
   var pop = function (_v15) {
      return function () {
         switch (_v15.ctor)
         {case "Queue":
            return function () {
                 switch (_v15._0.ctor)
                 {case "::":
                    return $Maybe.Just({ctor: "_Tuple2"
                                       ,_0: _v15._0._0
                                       ,_1: A2($Queue$Internal.Queue,
                                       _v15._0._1,
                                       _v15._1)});
                    case "[]": return function () {
                         switch (_v15._1.ctor)
                         {case "[]":
                            return $Maybe.Nothing;}
                         return function () {
                            var _raw = $List.reverse(_v15._1),
                            $ = _raw.ctor === "::" ? _raw : _U.badCase($moduleName,
                            "on line 40, column 27 to 41"),
                            x = $._0,
                            f$ = $._1;
                            return $Maybe.Just({ctor: "_Tuple2"
                                               ,_0: x
                                               ,_1: A2($Queue$Internal.Queue,
                                               f$,
                                               _L.fromArray([]))});
                         }();
                      }();}
                 _U.badCase($moduleName,
                 "between lines 37 and 41");
              }();}
         _U.badCase($moduleName,
         "between lines 37 and 41");
      }();
   };
   var push = F2(function (x,
   _v23) {
      return function () {
         switch (_v23.ctor)
         {case "Queue":
            return A2($Queue$Internal.Queue,
              _v23._0,
              A2($List._op["::"],x,_v23._1));}
         _U.badCase($moduleName,
         "on line 34, column 23 to 36");
      }();
   });
   var empty = A2($Queue$Internal.Queue,
   _L.fromArray([]),
   _L.fromArray([]));
   _elm.Queue.values = {_op: _op
                       ,empty: empty
                       ,push: push
                       ,pop: pop
                       ,isEmpty: isEmpty
                       ,length: length
                       ,map: map
                       ,toList: toList};
   return _elm.Queue.values;
};
Elm.Queue = Elm.Queue || {};
Elm.Queue.Internal = Elm.Queue.Internal || {};
Elm.Queue.Internal.make = function (_elm) {
   "use strict";
   _elm.Queue = _elm.Queue || {};
   _elm.Queue.Internal = _elm.Queue.Internal || {};
   if (_elm.Queue.Internal.values)
   return _elm.Queue.Internal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Queue.Internal",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var Queue = F2(function (a,b) {
      return {ctor: "Queue"
             ,_0: a
             ,_1: b};
   });
   _elm.Queue.Internal.values = {_op: _op
                                ,Queue: Queue};
   return _elm.Queue.Internal.values;
};
Elm.RenderNetwork = Elm.RenderNetwork || {};
Elm.RenderNetwork.make = function (_elm) {
   "use strict";
   _elm.RenderNetwork = _elm.RenderNetwork || {};
   if (_elm.RenderNetwork.values)
   return _elm.RenderNetwork.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "RenderNetwork",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Types = Elm.Types.make(_elm);
   var getNodes = F2(function (net,
   edge) {
      return function () {
         var _v0 = {ctor: "_Tuple2"
                   ,_0: A2($Graph.get,
                   edge.from,
                   net)
                   ,_1: A2($Graph.get,
                   edge.to,
                   net)};
         switch (_v0.ctor)
         {case "_Tuple2":
            switch (_v0._0.ctor)
              {case "Just":
                 switch (_v0._1.ctor)
                   {case "Just":
                      return $Maybe.Just({ctor: "_Tuple2"
                                         ,_0: _v0._0._0.node.label.coords
                                         ,_1: _v0._1._0.node.label.coords});}
                   break;}
              break;}
         return $Maybe.Nothing;
      }();
   });
   var agentPositions = function (network) {
      return function () {
         var go = function (edge) {
            return function () {
               var toCoords = function (_) {
                  return _.coords;
               }(function (_) {
                  return _.label;
               }(function (_) {
                  return _.node;
               }($Helpers.getOrFail("can\'t find toCoords")(A2($Graph.get,
               edge.to,
               network)))));
               var fromCoords = function (_) {
                  return _.coords;
               }(function (_) {
                  return _.label;
               }(function (_) {
                  return _.node;
               }($Helpers.getOrFail("can\'t find fromCoords")(A2($Graph.get,
               edge.from,
               network)))));
               var angle = A2($Basics.atan2,
               toCoords.y - fromCoords.y,
               toCoords.x - fromCoords.x);
               var road = edge.label;
               var length = road.length;
               var agents = road.agents;
               return A2($List.map,
               function (a) {
                  return {ctor: "_Tuple3"
                         ,_0: A3($Helpers.interpolate,
                         fromCoords,
                         toCoords,
                         a.travelled / length)
                         ,_1: a
                         ,_2: angle};
               },
               agents);
            }();
         };
         return $List.concatMap(go)($Graph.edges(network));
      }();
   };
   var size = 3;
   var roadStyle = function () {
      var def = $Graphics$Collage.defaultLine;
      return _U.replace([["width"
                         ,size * 10]
                        ,["cap"
                         ,$Graphics$Collage.Round]],
      def);
   }();
   var medianStyle = function () {
      var def = $Graphics$Collage.defaultLine;
      return _U.replace([["width"
                         ,size / 2]
                        ,["cap",$Graphics$Collage.Round]
                        ,["color",$Color.yellow]
                        ,["dashing"
                         ,_L.fromArray([8 * $Basics.round(size)
                                       ,4 * $Basics.round(size)])]],
      def);
   }();
   var loc = F2(function (scale,
   n) {
      return {ctor: "_Tuple2"
             ,_0: size * scale * n.x
             ,_1: size * scale * n.y};
   });
   var renderAgent = F2(function (coordsScale,
   _v5) {
      return function () {
         switch (_v5.ctor)
         {case "_Tuple3":
            return function () {
                 var renderedSize = function () {
                    var _v10 = _v5._1.kind;
                    switch (_v10.ctor)
                    {case "Bus": return 25;
                       case "Car": return 20;}
                    _U.badCase($moduleName,
                    "between lines 53 and 56");
                 }();
                 return $Graphics$Collage.rotate(_v5._2)($Graphics$Collage.move(A2(loc,
                 coordsScale,
                 _v5._0))($Graphics$Collage.filled(_v5._1.color)(A2($Graphics$Collage.rect,
                 renderedSize,
                 12))));
              }();}
         _U.badCase($moduleName,
         "between lines 51 and 57");
      }();
   });
   var renderRoad = F2(function (coordsScale,
   _v13) {
      return function () {
         switch (_v13.ctor)
         {case "_Tuple2":
            return function () {
                 var segment = A2($Graphics$Collage.segment,
                 A2(loc,coordsScale,_v13._0),
                 A2(loc,coordsScale,_v13._1));
                 var mainRoad = A2($Graphics$Collage.traced,
                 roadStyle,
                 segment);
                 var divider = A2($Graphics$Collage.traced,
                 medianStyle,
                 segment);
                 return $Graphics$Collage.group(_L.fromArray([mainRoad
                                                             ,divider]));
              }();}
         _U.badCase($moduleName,
         "between lines 78 and 82");
      }();
   });
   var renderPoint = F2(function (coordsScale,
   point) {
      return function () {
         var _v17 = point.kind;
         switch (_v17.ctor)
         {case "BusStop":
            return function () {
                 var busSign = $Graphics$Collage.group(_L.fromArray([$Graphics$Collage.traced($Graphics$Collage.defaultLine)(A2($Graphics$Collage.segment,
                                                                    {ctor: "_Tuple2"
                                                                    ,_0: 0
                                                                    ,_1: 0},
                                                                    {ctor: "_Tuple2"
                                                                    ,_0: -20
                                                                    ,_1: 50}))
                                                                    ,$Graphics$Collage.move({ctor: "_Tuple2"
                                                                                            ,_0: -20
                                                                                            ,_1: 50})($Graphics$Collage.filled($Color.yellow)($Graphics$Collage.circle(15)))
                                                                    ,$Graphics$Collage.rotate($Basics.degrees(22.5))($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                                                                            ,_0: -24
                                                                                                                                            ,_1: 59})($Graphics$Collage.text($Text.height(8)($Text.fromString("BUS")))))
                                                                    ,$Graphics$Collage.rotate($Basics.degrees(22.5))($Graphics$Collage.move({ctor: "_Tuple2"
                                                                                                                                            ,_0: -19
                                                                                                                                            ,_1: 48})($Graphics$Collage.text($Text.height(20)($Text.fromString(_v17._0.label)))))]));
                 var crowdSize = $Basics.max(2)(A2($Basics.min,
                 20,
                 $Basics.sqrt(_v17._0.currentlyWaiting) * 2));
                 var crowdCircle = $Graphics$Collage.filled($Color.lightBlue)($Graphics$Collage.circle(crowdSize));
                 return $Graphics$Collage.move(A2($Helpers.addCoords,
                 {ctor: "_Tuple2"
                 ,_0: (0 - size) * 5
                 ,_1: size * 5},
                 A2(loc,
                 coordsScale,
                 point.coords)))($Graphics$Collage.group(_L.fromArray([crowdCircle
                                                                      ,busSign])));
              }();
            case "StopSign":
            return $Graphics$Collage.move(A2($Helpers.addCoords,
              {ctor: "_Tuple2"
              ,_0: (0 - size) * 5
              ,_1: size * 5},
              A2(loc,
              coordsScale,
              point.coords)))($Graphics$Collage.group(_L.fromArray([$Graphics$Collage.traced($Graphics$Collage.defaultLine)(A2($Graphics$Collage.segment,
                                                                   {ctor: "_Tuple2"
                                                                   ,_0: 0
                                                                   ,_1: 0},
                                                                   {ctor: "_Tuple2"
                                                                   ,_0: -20
                                                                   ,_1: 50}))
                                                                   ,$Graphics$Collage.move({ctor: "_Tuple2"
                                                                                           ,_0: -20
                                                                                           ,_1: 50})($Graphics$Collage.filled($Color.red)(A2($Graphics$Collage.ngon,
                                                                   8,
                                                                   15)))])));}
         return $Graphics$Collage.toForm($Graphics$Element.empty);
      }();
   });
   var renderNetwork = F4(function (scale,
   coordsScale,
   globalTransform,
   net) {
      return function () {
         var agents = A2($List.map,
         renderAgent(coordsScale),
         agentPositions(net));
         var pointLabels = A2($List.map,
         function (n) {
            return $Graphics$Collage.move(A2(loc,
            coordsScale,
            n.label.coords))($Graphics$Collage.text($Text.color($Color.white)($Text.fromString($Basics.toString(n.id)))));
         },
         $Graph.nodes(net));
         var edgeNodePairs = $List.filterMap(getNodes(net))($Graph.edges(net));
         var roads = A2($List.map,
         renderRoad(coordsScale),
         edgeNodePairs);
         var points = $List.map(function (_) {
            return _.label;
         })($Graph.nodes(net));
         var busStops = A2($List.map,
         renderPoint(coordsScale),
         points);
         var mapGroup = A2($Graphics$Collage.move,
         globalTransform,
         $Graphics$Collage.group(A2($Basics._op["++"],
         roads,
         A2($Basics._op["++"],
         busStops,
         agents))));
         return A2($Graphics$Collage.collage,
         1000,
         800)(_L.fromArray([A2($Graphics$Collage.scale,
         scale,
         mapGroup)]));
      }();
   });
   var render = F4(function (scale,
   coordsScale,
   globalTransform,
   _v20) {
      return function () {
         switch (_v20.ctor)
         {case "State":
            return A2($Graphics$Element.flow,
              $Graphics$Element.down,
              _L.fromArray([$Graphics$Element.show(A2($Basics._op["++"],
                           "Avg bus speed = ",
                           $Basics.toString($Maybe.withDefault(0)(A2($Dict.get,
                           "avgBusSpeed",
                           _v20._1)))))
                           ,$Graphics$Element.show(A2($Basics._op["++"],
                           "Avg congestion = ",
                           $Basics.toString($Maybe.withDefault(0)(A2($Dict.get,
                           "avgCongestion",
                           _v20._1)))))
                           ,$Graphics$Element.show(A2($Basics._op["++"],
                           "Avg waiting passengers = ",
                           $Basics.toString($Maybe.withDefault(0)(A2($Dict.get,
                           "avgWaiting",
                           _v20._1)))))
                           ,A4(renderNetwork,
                           scale,
                           coordsScale,
                           globalTransform,
                           _v20._0)]));}
         _U.badCase($moduleName,
         "between lines 102 and 106");
      }();
   });
   _elm.RenderNetwork.values = {_op: _op
                               ,size: size
                               ,roadStyle: roadStyle
                               ,medianStyle: medianStyle
                               ,agentPositions: agentPositions
                               ,loc: loc
                               ,getNodes: getNodes
                               ,renderAgent: renderAgent
                               ,renderPoint: renderPoint
                               ,renderRoad: renderRoad
                               ,renderNetwork: renderNetwork
                               ,render: render};
   return _elm.RenderNetwork.values;
};
Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 164 and 166");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 126 and 128");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (func,
   ra) {
      return function () {
         switch (ra.ctor)
         {case "Err": return Err(ra._0);
            case "Ok":
            return Ok(func(ra._0));}
         _U.badCase($moduleName,
         "between lines 41 and 43");
      }();
   });
   var map2 = F3(function (func,
   ra,
   rb) {
      return function () {
         var _v9 = {ctor: "_Tuple2"
                   ,_0: ra
                   ,_1: rb};
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "Err":
                 return Err(_v9._0._0);
                 case "Ok": switch (_v9._1.ctor)
                   {case "Ok": return Ok(A2(func,
                        _v9._0._0,
                        _v9._1._0));}
                   break;}
              switch (_v9._1.ctor)
              {case "Err":
                 return Err(_v9._1._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 55 and 58");
      }();
   });
   var map3 = F4(function (func,
   ra,
   rb,
   rc) {
      return function () {
         var _v16 = {ctor: "_Tuple3"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc};
         switch (_v16.ctor)
         {case "_Tuple3":
            switch (_v16._0.ctor)
              {case "Err":
                 return Err(_v16._0._0);
                 case "Ok": switch (_v16._1.ctor)
                   {case "Ok":
                      switch (_v16._2.ctor)
                        {case "Ok": return Ok(A3(func,
                             _v16._0._0,
                             _v16._1._0,
                             _v16._2._0));}
                        break;}
                   break;}
              switch (_v16._1.ctor)
              {case "Err":
                 return Err(_v16._1._0);}
              switch (_v16._2.ctor)
              {case "Err":
                 return Err(_v16._2._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 63 and 67");
      }();
   });
   var map4 = F5(function (func,
   ra,
   rb,
   rc,
   rd) {
      return function () {
         var _v26 = {ctor: "_Tuple4"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd};
         switch (_v26.ctor)
         {case "_Tuple4":
            switch (_v26._0.ctor)
              {case "Err":
                 return Err(_v26._0._0);
                 case "Ok": switch (_v26._1.ctor)
                   {case "Ok":
                      switch (_v26._2.ctor)
                        {case "Ok":
                           switch (_v26._3.ctor)
                             {case "Ok": return Ok(A4(func,
                                  _v26._0._0,
                                  _v26._1._0,
                                  _v26._2._0,
                                  _v26._3._0));}
                             break;}
                        break;}
                   break;}
              switch (_v26._1.ctor)
              {case "Err":
                 return Err(_v26._1._0);}
              switch (_v26._2.ctor)
              {case "Err":
                 return Err(_v26._2._0);}
              switch (_v26._3.ctor)
              {case "Err":
                 return Err(_v26._3._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 72 and 77");
      }();
   });
   var map5 = F6(function (func,
   ra,
   rb,
   rc,
   rd,
   re) {
      return function () {
         var _v39 = {ctor: "_Tuple5"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd
                    ,_4: re};
         switch (_v39.ctor)
         {case "_Tuple5":
            switch (_v39._0.ctor)
              {case "Err":
                 return Err(_v39._0._0);
                 case "Ok": switch (_v39._1.ctor)
                   {case "Ok":
                      switch (_v39._2.ctor)
                        {case "Ok":
                           switch (_v39._3.ctor)
                             {case "Ok":
                                switch (_v39._4.ctor)
                                  {case "Ok": return Ok(A5(func,
                                       _v39._0._0,
                                       _v39._1._0,
                                       _v39._2._0,
                                       _v39._3._0,
                                       _v39._4._0));}
                                  break;}
                             break;}
                        break;}
                   break;}
              switch (_v39._1.ctor)
              {case "Err":
                 return Err(_v39._1._0);}
              switch (_v39._2.ctor)
              {case "Err":
                 return Err(_v39._2._0);}
              switch (_v39._3.ctor)
              {case "Err":
                 return Err(_v39._3._0);}
              switch (_v39._4.ctor)
              {case "Err":
                 return Err(_v39._4._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 82 and 88");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 148 and 150");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 180 and 182");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,andThen: andThen
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe
                        ,formatError: formatError
                        ,Ok: Ok
                        ,Err: Err};
   return _elm.Result.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var send = F2(function (_v0,
   value) {
      return function () {
         switch (_v0.ctor)
         {case "Address":
            return A2($Task.onError,
              _v0._0(value),
              function (_v3) {
                 return function () {
                    return $Task.succeed({ctor: "_Tuple0"});
                 }();
              });}
         _U.badCase($moduleName,
         "between lines 370 and 371");
      }();
   });
   var Message = function (a) {
      return {ctor: "Message"
             ,_0: a};
   };
   var message = F2(function (_v5,
   value) {
      return function () {
         switch (_v5.ctor)
         {case "Address":
            return Message(_v5._0(value));}
         _U.badCase($moduleName,
         "on line 352, column 5 to 24");
      }();
   });
   var mailbox = $Native$Signal.mailbox;
   var Address = function (a) {
      return {ctor: "Address"
             ,_0: a};
   };
   var forwardTo = F2(function (_v8,
   f) {
      return function () {
         switch (_v8.ctor)
         {case "Address":
            return Address(function (x) {
                 return _v8._0(f(x));
              });}
         _U.badCase($moduleName,
         "on line 339, column 5 to 29");
      }();
   });
   var Mailbox = F2(function (a,
   b) {
      return {_: {}
             ,address: a
             ,signal: b};
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var filterMap = $Native$Signal.filterMap;
   var filter = F3(function (isOk,
   base,
   signal) {
      return A3(filterMap,
      function (value) {
         return isOk(value) ? $Maybe.Just(value) : $Maybe.Nothing;
      },
      base,
      signal);
   });
   var merge = F2(function (left,
   right) {
      return A3($Native$Signal.genericMerge,
      $Basics.always,
      left,
      right);
   });
   var mergeMany = function (signalList) {
      return function () {
         var _v11 = $List.reverse(signalList);
         switch (_v11.ctor)
         {case "::":
            return A3($List.foldl,
              merge,
              _v11._0,
              _v11._1);
            case "[]":
            return $Debug.crash("mergeMany was given an empty list!");}
         _U.badCase($moduleName,
         "between lines 177 and 182");
      }();
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   _op["~"] = F2(function (funcs,
   args) {
      return A3(map2,
      F2(function (f,v) {
         return f(v);
      }),
      funcs,
      args);
   });
   var map = $Native$Signal.map;
   _op["<~"] = map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,constant: constant
                        ,dropRepeats: dropRepeats
                        ,filter: filter
                        ,filterMap: filterMap
                        ,sampleOn: sampleOn
                        ,foldp: foldp
                        ,mailbox: mailbox
                        ,send: send
                        ,message: message
                        ,forwardTo: forwardTo
                        ,Mailbox: Mailbox};
   return _elm.Signal.values;
};
Elm.StartApp = Elm.StartApp || {};
Elm.StartApp.make = function (_elm) {
   "use strict";
   _elm.StartApp = _elm.StartApp || {};
   if (_elm.StartApp.values)
   return _elm.StartApp.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "StartApp",
   $Basics = Elm.Basics.make(_elm),
   $Effects = Elm.Effects.make(_elm),
   $Html = Elm.Html.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var start = function (config) {
      return function () {
         var update = F2(function (_v0,
         _v1) {
            return function () {
               switch (_v1.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v0.ctor)
                       {case "Just":
                          return A2(config.update,
                            _v0._0,
                            _v1._0);}
                       _U.badCase($moduleName,
                       "on line 92, column 13 to 39");
                    }();}
               _U.badCase($moduleName,
               "on line 92, column 13 to 39");
            }();
         });
         var messages = $Signal.mailbox($Maybe.Nothing);
         var address = A2($Signal.forwardTo,
         messages.address,
         $Maybe.Just);
         var inputs = $Signal.mergeMany(A2($List._op["::"],
         messages.signal,
         A2($List.map,
         $Signal.map($Maybe.Just),
         config.inputs)));
         var effectsAndModel = A3($Signal.foldp,
         update,
         config.init,
         inputs);
         var model = A2($Signal.map,
         $Basics.fst,
         effectsAndModel);
         return {_: {}
                ,html: A2($Signal.map,
                config.view(address),
                model)
                ,model: model
                ,tasks: A2($Signal.map,
                function ($) {
                   return $Effects.toTask(address)($Basics.snd($));
                },
                effectsAndModel)};
      }();
   };
   var App = F3(function (a,b,c) {
      return {_: {}
             ,html: a
             ,model: b
             ,tasks: c};
   });
   var Config = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,init: a
             ,inputs: d
             ,update: b
             ,view: c};
   });
   _elm.StartApp.values = {_op: _op
                          ,start: start
                          ,Config: Config
                          ,App: App};
   return _elm.StartApp.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,length: length
                        ,reverse: reverse
                        ,repeat: repeat
                        ,cons: cons
                        ,uncons: uncons
                        ,fromChar: fromChar
                        ,append: append
                        ,concat: concat
                        ,split: split
                        ,join: join
                        ,words: words
                        ,lines: lines
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,map: map
                        ,filter: filter
                        ,foldl: foldl
                        ,foldr: foldr
                        ,any: any
                        ,all: all};
   return _elm.String.values;
};
Elm.Task = Elm.Task || {};
Elm.Task.make = function (_elm) {
   "use strict";
   _elm.Task = _elm.Task || {};
   if (_elm.Task.values)
   return _elm.Task.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Task",
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Task = Elm.Native.Task.make(_elm),
   $Result = Elm.Result.make(_elm);
   var sleep = $Native$Task.sleep;
   var spawn = $Native$Task.spawn;
   var ThreadID = function (a) {
      return {ctor: "ThreadID"
             ,_0: a};
   };
   var onError = $Native$Task.catch_;
   var andThen = $Native$Task.andThen;
   var fail = $Native$Task.fail;
   var mapError = F2(function (f,
   promise) {
      return A2(onError,
      promise,
      function (err) {
         return fail(f(err));
      });
   });
   var succeed = $Native$Task.succeed;
   var map = F2(function (func,
   promiseA) {
      return A2(andThen,
      promiseA,
      function (a) {
         return succeed(func(a));
      });
   });
   var map2 = F3(function (func,
   promiseA,
   promiseB) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return succeed(A2(func,a,b));
         });
      });
   });
   var map3 = F4(function (func,
   promiseA,
   promiseB,
   promiseC) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return succeed(A3(func,
               a,
               b,
               c));
            });
         });
      });
   });
   var map4 = F5(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return succeed(A4(func,
                  a,
                  b,
                  c,
                  d));
               });
            });
         });
      });
   });
   var map5 = F6(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD,
   promiseE) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return A2(andThen,
                  promiseE,
                  function (e) {
                     return succeed(A5(func,
                     a,
                     b,
                     c,
                     d,
                     e));
                  });
               });
            });
         });
      });
   });
   var andMap = F2(function (promiseFunc,
   promiseValue) {
      return A2(andThen,
      promiseFunc,
      function (func) {
         return A2(andThen,
         promiseValue,
         function (value) {
            return succeed(func(value));
         });
      });
   });
   var sequence = function (promises) {
      return function () {
         switch (promises.ctor)
         {case "::": return A3(map2,
              F2(function (x,y) {
                 return A2($List._op["::"],
                 x,
                 y);
              }),
              promises._0,
              sequence(promises._1));
            case "[]":
            return succeed(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 101 and 106");
      }();
   };
   var toMaybe = function (task) {
      return A2(onError,
      A2(map,$Maybe.Just,task),
      function (_v3) {
         return function () {
            return succeed($Maybe.Nothing);
         }();
      });
   };
   var fromMaybe = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return succeed(maybe._0);
            case "Nothing":
            return fail($default);}
         _U.badCase($moduleName,
         "between lines 139 and 141");
      }();
   });
   var toResult = function (task) {
      return A2(onError,
      A2(map,$Result.Ok,task),
      function (msg) {
         return succeed($Result.Err(msg));
      });
   };
   var fromResult = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return fail(result._0);
            case "Ok":
            return succeed(result._0);}
         _U.badCase($moduleName,
         "between lines 151 and 153");
      }();
   };
   var Task = {ctor: "Task"};
   _elm.Task.values = {_op: _op
                      ,succeed: succeed
                      ,fail: fail
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,andMap: andMap
                      ,sequence: sequence
                      ,andThen: andThen
                      ,onError: onError
                      ,mapError: mapError
                      ,toMaybe: toMaybe
                      ,fromMaybe: fromMaybe
                      ,toResult: toResult
                      ,fromResult: fromResult
                      ,spawn: spawn
                      ,sleep: sleep};
   return _elm.Task.values;
};
Elm.Text = Elm.Text || {};
Elm.Text.make = function (_elm) {
   "use strict";
   _elm.Text = _elm.Text || {};
   if (_elm.Text.values)
   return _elm.Text.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Text",
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Text = Elm.Native.Text.make(_elm);
   var line = $Native$Text.line;
   var italic = $Native$Text.italic;
   var bold = $Native$Text.bold;
   var color = $Native$Text.color;
   var height = $Native$Text.height;
   var link = $Native$Text.link;
   var monospace = $Native$Text.monospace;
   var typeface = $Native$Text.typeface;
   var style = $Native$Text.style;
   var append = $Native$Text.append;
   var fromString = $Native$Text.fromString;
   var empty = fromString("");
   var concat = function (texts) {
      return A3($List.foldr,
      append,
      empty,
      texts);
   };
   var join = F2(function (seperator,
   texts) {
      return concat(A2($List.intersperse,
      seperator,
      texts));
   });
   var defaultStyle = {_: {}
                      ,bold: false
                      ,color: $Color.black
                      ,height: $Maybe.Nothing
                      ,italic: false
                      ,line: $Maybe.Nothing
                      ,typeface: _L.fromArray([])};
   var Style = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bold: d
             ,color: c
             ,height: b
             ,italic: e
             ,line: f
             ,typeface: a};
   });
   var Through = {ctor: "Through"};
   var Over = {ctor: "Over"};
   var Under = {ctor: "Under"};
   var Text = {ctor: "Text"};
   _elm.Text.values = {_op: _op
                      ,fromString: fromString
                      ,empty: empty
                      ,append: append
                      ,concat: concat
                      ,join: join
                      ,link: link
                      ,style: style
                      ,defaultStyle: defaultStyle
                      ,typeface: typeface
                      ,monospace: monospace
                      ,height: height
                      ,color: color
                      ,bold: bold
                      ,italic: italic
                      ,line: line
                      ,Style: Style
                      ,Under: Under
                      ,Over: Over
                      ,Through: Through};
   return _elm.Text.values;
};
Elm.Time = Elm.Time || {};
Elm.Time.make = function (_elm) {
   "use strict";
   _elm.Time = _elm.Time || {};
   if (_elm.Time.values)
   return _elm.Time.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Time",
   $Basics = Elm.Basics.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Native$Time = Elm.Native.Time.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var delay = $Native$Signal.delay;
   var since = F2(function (time,
   signal) {
      return function () {
         var stop = A2($Signal.map,
         $Basics.always(-1),
         A2(delay,time,signal));
         var start = A2($Signal.map,
         $Basics.always(1),
         signal);
         var delaydiff = A3($Signal.foldp,
         F2(function (x,y) {
            return x + y;
         }),
         0,
         A2($Signal.merge,start,stop));
         return A2($Signal.map,
         F2(function (x,y) {
            return !_U.eq(x,y);
         })(0),
         delaydiff);
      }();
   });
   var timestamp = $Native$Signal.timestamp;
   var every = $Native$Time.every;
   var fpsWhen = $Native$Time.fpsWhen;
   var fps = function (targetFrames) {
      return A2(fpsWhen,
      targetFrames,
      $Signal.constant(true));
   };
   var inMilliseconds = function (t) {
      return t;
   };
   var millisecond = 1;
   var second = 1000 * millisecond;
   var minute = 60 * second;
   var hour = 60 * minute;
   var inHours = function (t) {
      return t / hour;
   };
   var inMinutes = function (t) {
      return t / minute;
   };
   var inSeconds = function (t) {
      return t / second;
   };
   _elm.Time.values = {_op: _op
                      ,millisecond: millisecond
                      ,second: second
                      ,minute: minute
                      ,hour: hour
                      ,inMilliseconds: inMilliseconds
                      ,inSeconds: inSeconds
                      ,inMinutes: inMinutes
                      ,inHours: inHours
                      ,fps: fps
                      ,fpsWhen: fpsWhen
                      ,every: every
                      ,timestamp: timestamp
                      ,delay: delay
                      ,since: since};
   return _elm.Time.values;
};
Elm.Transform2D = Elm.Transform2D || {};
Elm.Transform2D.make = function (_elm) {
   "use strict";
   _elm.Transform2D = _elm.Transform2D || {};
   if (_elm.Transform2D.values)
   return _elm.Transform2D.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Transform2D",
   $Native$Transform2D = Elm.Native.Transform2D.make(_elm);
   var multiply = $Native$Transform2D.multiply;
   var rotation = $Native$Transform2D.rotation;
   var matrix = $Native$Transform2D.matrix;
   var translation = F2(function (x,
   y) {
      return A6(matrix,
      1,
      0,
      0,
      1,
      x,
      y);
   });
   var scale = function (s) {
      return A6(matrix,
      s,
      0,
      0,
      s,
      0,
      0);
   };
   var scaleX = function (x) {
      return A6(matrix,
      x,
      0,
      0,
      1,
      0,
      0);
   };
   var scaleY = function (y) {
      return A6(matrix,
      1,
      0,
      0,
      y,
      0,
      0);
   };
   var identity = $Native$Transform2D.identity;
   var Transform2D = {ctor: "Transform2D"};
   _elm.Transform2D.values = {_op: _op
                             ,identity: identity
                             ,matrix: matrix
                             ,multiply: multiply
                             ,rotation: rotation
                             ,translation: translation
                             ,scale: scale
                             ,scaleX: scaleX
                             ,scaleY: scaleY};
   return _elm.Transform2D.values;
};
Elm.TransitBureaucrat = Elm.TransitBureaucrat || {};
Elm.TransitBureaucrat.make = function (_elm) {
   "use strict";
   _elm.TransitBureaucrat = _elm.TransitBureaucrat || {};
   if (_elm.TransitBureaucrat.values)
   return _elm.TransitBureaucrat.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "TransitBureaucrat",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Effects = Elm.Effects.make(_elm),
   $Helpers = Elm.Helpers.make(_elm),
   $Html = Elm.Html.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Model = Elm.Model.make(_elm),
   $Network = Elm.Network.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $StartApp = Elm.StartApp.make(_elm),
   $Task = Elm.Task.make(_elm),
   $Time = Elm.Time.make(_elm),
   $Types = Elm.Types.make(_elm),
   $Views = Elm.Views.make(_elm);
   var view = F2(function (address,
   model) {
      return function () {
         var _v0 = model.screen;
         switch (_v0.ctor)
         {case "ChooseLevelScreen":
            return A2($Views.renderChooseLevel,
              address,
              model);
            case "LevelScreen":
            return A3($Views.renderLevel,
              _v0._0,
              address,
              model);
            case "MessageScreen":
            return A2($Views.renderMessageScreen,
              _v0._0,
              address);
            case "TitleScreen":
            return $Views.renderTitleScreen(address);}
         _U.badCase($moduleName,
         "between lines 137 and 141");
      }();
   });
   var resetStateInLevelData = function (levelData) {
      return function () {
         var input = A2($List.map,
         function (s) {
            return $Helpers.getOrFail(A2($Basics._op["++"],
            "unknown bus stop ",
            s))(A2($Dict.get,
            s,
            levelData.stopToNodeMapping));
         },
         levelData.stops);
         var network = levelData.networkGenerator(input);
         return _U.replace([["state"
                            ,A2($Types.State,
                            network,
                            $Dict.empty)]],
         levelData);
      }();
   };
   var levelPassed = function (model) {
      return function () {
         var isBad = F2(function (metrics,
         trackedMetric) {
            return function () {
               var value = $Helpers.getOrFail(A2($Basics._op["++"],
               "couldn\'t find metric: ",
               trackedMetric.metricName))(A2($Dict.get,
               trackedMetric.metricName,
               metrics));
               return trackedMetric.isBadWhen(value);
            }();
         });
         return function () {
            var _v3 = model.levelData.state;
            switch (_v3.ctor)
            {case "State":
               return A2($List.all,
                 isBad(_v3._1),
                 model.levelData.trackedMetrics);}
            _U.badCase($moduleName,
            "between lines 125 and 126");
         }();
      }();
   };
   var updateStopOrder = F2(function (sd,
   oldModel) {
      return _U.eq(oldModel.levelData.changesRemaining,
      0) ? oldModel : function () {
         var oldLevelData = oldModel.levelData;
         var newLevelData = function () {
            switch (sd.ctor)
            {case "MakeActiveStopIndex":
               return _U.replace([["activeStopIdx"
                                  ,$Maybe.Just(sd._0)]],
                 oldLevelData);
               case "StopDown":
               return function () {
                    var _v8 = oldLevelData.activeStopIdx;
                    switch (_v8.ctor)
                    {case "Just":
                       return _U.cmp(_v8._0,
                         $List.length(oldLevelData.stops) - 1) < 0 ? _U.replace([["stops"
                                                                                 ,A2($Helpers.moveIthMemberDown,
                                                                                 _v8._0,
                                                                                 oldLevelData.stops)]
                                                                                ,["activeStopIdx"
                                                                                 ,$Maybe.Nothing]
                                                                                ,["changesRemaining"
                                                                                 ,oldLevelData.changesRemaining - 1]],
                         oldLevelData) : oldLevelData;
                       case "Nothing":
                       return oldLevelData;}
                    _U.badCase($moduleName,
                    "between lines 35 and 42");
                 }();
               case "StopUp":
               return function () {
                    var _v10 = oldLevelData.activeStopIdx;
                    switch (_v10.ctor)
                    {case "Just":
                       return _U.cmp(_v10._0,
                         0) > 0 ? _U.replace([["stops"
                                              ,A2($Helpers.moveIthMemberUp,
                                              _v10._0,
                                              oldLevelData.stops)]
                                             ,["activeStopIdx"
                                              ,$Maybe.Nothing]
                                             ,["changesRemaining"
                                              ,oldLevelData.changesRemaining - 1]],
                         oldLevelData) : oldLevelData;
                       case "Nothing":
                       return oldLevelData;}
                    _U.badCase($moduleName,
                    "between lines 28 and 35");
                 }();}
            _U.badCase($moduleName,
            "between lines 27 and 43");
         }();
         return _U.replace([["levelData"
                            ,newLevelData]],
         oldModel);
      }();
   });
   var update = F2(function (action,
   oldModel) {
      return function () {
         var readyForNewGameTick = function (counter) {
            return _U.cmp(counter,
            oldModel.tickRate) > -1;
         };
         var newModel = function () {
            switch (action.ctor)
            {case "ChangeStopOrder":
               return function () {
                    var updatedModel = A2(updateStopOrder,
                    action._0,
                    oldModel);
                    return _U.replace([["realtimeMs"
                                       ,0]
                                      ,["time",$Model.GameTime(0)]
                                      ,["timeAdvancing",false]
                                      ,["counter",0]
                                      ,["levelData"
                                       ,resetStateInLevelData(updatedModel.levelData)]],
                    updatedModel);
                 }();
               case "GoToScreen":
               return _U.replace([["screen"
                                  ,action._0]
                                 ,["levelData"
                                  ,$Model.levelDataForScreen(action._0)]],
                 oldModel);
               case "ResetState":
               return _U.replace([["realtimeMs"
                                  ,0]
                                 ,["time",$Model.GameTime(0)]
                                 ,["timeAdvancing",false]
                                 ,["counter",0]
                                 ,["levelData"
                                  ,$Model.levelDataForScreen(oldModel.screen)]],
                 oldModel);
               case "ResetTime":
               return _U.replace([["realtimeMs"
                                  ,0]
                                 ,["time",$Model.GameTime(0)]
                                 ,["timeAdvancing",false]
                                 ,["counter",0]
                                 ,["levelData"
                                  ,resetStateInLevelData(oldModel.levelData)]],
                 oldModel);
               case "TickRealtime":
               return readyForNewGameTick(oldModel.counter) ? function () {
                    var _raw = oldModel.timeAdvancing ? $Model.incrementTime(oldModel.time) : oldModel.time,
                    $ = _raw.ctor === "GameTime" ? _raw : _U.badCase($moduleName,
                    "on line 65, column 42 to 119"),
                    newTime = $._0;
                    return _U.cmp(newTime,
                    60 * 24) > 0 ? function () {
                       var level = function () {
                          var _v16 = oldModel.screen;
                          switch (_v16.ctor)
                          {case "ChooseLevelScreen":
                             return 0;
                             case "EndLevelScreen":
                             return _v16._0;
                             case "LevelScreen":
                             return _v16._0;
                             case "MessageScreen":
                             return _v16._0;
                             case "TitleScreen": return 0;}
                          _U.badCase($moduleName,
                          "between lines 69 and 75");
                       }();
                       return levelPassed(oldModel) ? _U.replace([["realtimeMs"
                                                                  ,0]
                                                                 ,["time"
                                                                  ,$Model.GameTime(0)]
                                                                 ,["timeAdvancing"
                                                                  ,false]
                                                                 ,["counter",0]
                                                                 ,["levelData"
                                                                  ,$Model.levelDataForScreen(oldModel.screen)]
                                                                 ,["screen"
                                                                  ,$Model.MessageScreen(level + 1)]],
                       oldModel) : _U.replace([["realtimeMs"
                                               ,0]
                                              ,["time",$Model.GameTime(0)]
                                              ,["timeAdvancing",false]
                                              ,["counter",0]
                                              ,["levelData"
                                               ,$Model.levelDataForScreen(oldModel.screen)]],
                       oldModel);
                    }() : function () {
                       var oldLevelData = oldModel.levelData;
                       var newState = oldModel.timeAdvancing ? $Network.update(oldLevelData.state) : oldLevelData.state;
                       var newLevelData = _U.replace([["state"
                                                      ,newState]],
                       oldLevelData);
                       return _U.replace([["time"
                                          ,$Model.GameTime(newTime)]
                                         ,["levelData",newLevelData]
                                         ,["counter",0]],
                       oldModel);
                    }();
                 }() : _U.replace([["realtimeMs"
                                   ,$Time.inMilliseconds(action._0)]
                                  ,["counter"
                                   ,oldModel.counter + $Basics.floor($Time.inMilliseconds(action._0) - oldModel.realtimeMs)]],
                 oldModel);
               case "ToggleAdvancingTime":
               return _U.replace([["timeAdvancing"
                                  ,$Basics.not(oldModel.timeAdvancing)]],
                 oldModel);}
            _U.badCase($moduleName,
            "between lines 51 and 118");
         }();
         return {ctor: "_Tuple2"
                ,_0: newModel
                ,_1: $Effects.tick($Model.TickRealtime)};
      }();
   });
   var app = $StartApp.start({_: {}
                             ,init: {ctor: "_Tuple2"
                                    ,_0: $Model.initialModel
                                    ,_1: $Effects.none}
                             ,inputs: _L.fromArray([])
                             ,update: update
                             ,view: view});
   var main = app.html;
   var tasks = Elm.Native.Task.make(_elm).performSignal("tasks",
   app.tasks);
   _elm.TransitBureaucrat.values = {_op: _op
                                   ,updateStopOrder: updateStopOrder
                                   ,update: update
                                   ,levelPassed: levelPassed
                                   ,resetStateInLevelData: resetStateInLevelData
                                   ,view: view
                                   ,app: app
                                   ,main: main};
   return _elm.TransitBureaucrat.values;
};
Elm.Types = Elm.Types || {};
Elm.Types.make = function (_elm) {
   "use strict";
   _elm.Types = _elm.Types || {};
   if (_elm.Types.values)
   return _elm.Types.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Types",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Graph = Elm.Graph.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var canMoveThrough = F2(function (agent,
   point) {
      return function () {
         var _v0 = {ctor: "_Tuple2"
                   ,_0: point.kind
                   ,_1: agent.kind};
         switch (_v0.ctor)
         {case "_Tuple2":
            switch (_v0._0.ctor)
              {case "BusStop":
                 switch (_v0._1.ctor)
                   {case "Bus":
                      return _U.cmp(_v0._0._0.currentlyWaiting,
                        1.0) < 1;}
                   break;
                 case "StopSign":
                 return _U.cmp(_v0._0._0.currentDelay,
                   1.0) < 1;}
              break;}
         return true;
      }();
   });
   var waitingPassengersAt = function (point) {
      return function () {
         var _v6 = point.kind;
         switch (_v6.ctor)
         {case "BusStop":
            return $Basics.round(_v6._0.currentlyWaiting);}
         return 0;
      }();
   };
   var busDistanceTravelled = function (agent) {
      return function () {
         var _v8 = agent.kind;
         switch (_v8.ctor)
         {case "Bus":
            return agent.totalDist;
            case "Car": return 0;}
         _U.badCase($moduleName,
         "between lines 71 and 73");
      }();
   };
   var sizeOf = function (agent) {
      return function () {
         var _v11 = agent.kind;
         switch (_v11.ctor)
         {case "Bus": return 0.2;
            case "Car": return 0.16;}
         _U.badCase($moduleName,
         "between lines 65 and 67");
      }();
   };
   var isBus = function (agent) {
      return function () {
         var _v14 = agent.kind;
         switch (_v14.ctor)
         {case "Bus": return true;
            case "Car": return false;}
         _U.badCase($moduleName,
         "between lines 59 and 61");
      }();
   };
   var TrackedMetric = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,displayName: a
             ,isBadWhen: c
             ,max: e
             ,metricName: b
             ,min: d};
   });
   var Car = function (a) {
      return {ctor: "Car",_0: a};
   };
   var Bus = function (a) {
      return {ctor: "Bus",_0: a};
   };
   var Agent = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,color: e
             ,kind: a
             ,lastEdge: f
             ,speed: b
             ,totalDist: d
             ,travelled: c};
   });
   var Road = F2(function (a,b) {
      return {_: {}
             ,agents: b
             ,length: a};
   });
   var CarSpawner = function (a) {
      return {ctor: "CarSpawner"
             ,_0: a};
   };
   var StopSign = function (a) {
      return {ctor: "StopSign"
             ,_0: a};
   };
   var BusStop = function (a) {
      return {ctor: "BusStop"
             ,_0: a};
   };
   var Intersection = {ctor: "Intersection"};
   var Point = F2(function (a,b) {
      return {_: {}
             ,coords: a
             ,kind: b};
   });
   var State = F2(function (a,b) {
      return {ctor: "State"
             ,_0: a
             ,_1: b};
   });
   var Coords = F2(function (a,b) {
      return {_: {},x: a,y: b};
   });
   _elm.Types.values = {_op: _op
                       ,Coords: Coords
                       ,State: State
                       ,Point: Point
                       ,Intersection: Intersection
                       ,BusStop: BusStop
                       ,StopSign: StopSign
                       ,CarSpawner: CarSpawner
                       ,Road: Road
                       ,Agent: Agent
                       ,Bus: Bus
                       ,Car: Car
                       ,TrackedMetric: TrackedMetric
                       ,isBus: isBus
                       ,sizeOf: sizeOf
                       ,busDistanceTravelled: busDistanceTravelled
                       ,waitingPassengersAt: waitingPassengersAt
                       ,canMoveThrough: canMoveThrough};
   return _elm.Types.values;
};
Elm.Views = Elm.Views || {};
Elm.Views.make = function (_elm) {
   "use strict";
   _elm.Views = _elm.Views || {};
   if (_elm.Views.values)
   return _elm.Views.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Views",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $EmailTexts = Elm.EmailTexts.make(_elm),
   $GameScreens = Elm.GameScreens.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Html$Attributes = Elm.Html.Attributes.make(_elm),
   $Html$Events = Elm.Html.Events.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Model = Elm.Model.make(_elm),
   $RenderNetwork = Elm.RenderNetwork.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Types = Elm.Types.make(_elm);
   var renderIndicator = F2(function (metrics,
   trackedMetric) {
      return function () {
         var _v0 = A2($Dict.get,
         trackedMetric.metricName,
         metrics);
         switch (_v0.ctor)
         {case "Just":
            return function () {
                 var height = 20;
                 var width = 100;
                 var pos = (_v0._0 - trackedMetric.min) / (trackedMetric.max - trackedMetric.min) * width;
                 var color = trackedMetric.isBadWhen(_v0._0) ? $Color.red : $Color.green;
                 var indicatorFrame = $Graphics$Collage.outlined(_U.replace([["color"
                                                                             ,color]],
                 $Graphics$Collage.defaultLine))(A2($Graphics$Collage.rect,
                 width,
                 height));
                 var indicatorBody = $Graphics$Collage.filled(color)(A2($Graphics$Collage.rect,
                 pos,
                 height));
                 var indicator = A3($Graphics$Collage.collage,
                 width,
                 height,
                 _L.fromArray([indicatorBody
                              ,indicatorFrame]));
                 var name = $Graphics$Element.leftAligned($Text.fromString(A2($Basics._op["++"],
                 " ",
                 A2($Basics._op["++"],
                 trackedMetric.displayName,
                 " : "))));
                 return A2($Graphics$Element.flow,
                 $Graphics$Element.right,
                 _L.fromArray([A2($Graphics$Element.spacer,
                              10,
                              10)
                              ,name
                              ,indicator
                              ,A2($Graphics$Element.spacer,
                              15,
                              15)]));
              }();
            case "Nothing":
            return A2($Graphics$Element.spacer,
              100,
              20);}
         _U.badCase($moduleName,
         "between lines 262 and 278");
      }();
   });
   var trafficGrid = function (model) {
      return function () {
         var ld = model.levelData;
         return function () {
            var _v2 = ld.state;
            switch (_v2.ctor)
            {case "State":
               return function () {
                    var indicators = A2($Graphics$Element.flow,
                    $Graphics$Element.right,
                    A2($List.map,
                    renderIndicator(_v2._1),
                    ld.trackedMetrics));
                    var networkGrid = A4($RenderNetwork.renderNetwork,
                    ld.scalingFactor,
                    ld.coordScalingFactor,
                    ld.globalTransform,
                    _v2._0);
                    return A2($Graphics$Element.flow,
                    $Graphics$Element.down,
                    _L.fromArray([indicators
                                 ,networkGrid]));
                 }();}
            _U.badCase($moduleName,
            "between lines 285 and 293");
         }();
      }();
   };
   var busStopsWidget = F2(function (address,
   model) {
      return function () {
         var stopButton = F2(function (idx,
         name) {
            return function () {
               var bkgColor = function () {
                  var _v5 = model.levelData.activeStopIdx;
                  switch (_v5.ctor)
                  {case "Just":
                     return _U.eq(_v5._0,
                       idx) ? "#ff0000" : "#ffffff";
                     case "Nothing":
                     return "#ffffff";}
                  _U.badCase($moduleName,
                  "between lines 168 and 171");
               }();
               return A2($Html.button,
               _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                  ,_0: "border"
                                                                  ,_1: "1px solid grey"}
                                                                 ,{ctor: "_Tuple2"
                                                                  ,_0: "background-color"
                                                                  ,_1: bkgColor}]))
                            ,$Html$Events.onClick(address)($Model.ChangeStopOrder($Model.MakeActiveStopIndex(idx)))]),
               _L.fromArray([$Html.text(name)]));
            }();
         });
         var stops = model.levelData.stops;
         var stopButtons = A2($List.indexedMap,
         stopButton,
         stops);
         return A2($Html.div,
         _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                            ,_0: "padding"
                                                            ,_1: "5px"}]))]),
         _L.fromArray([A2($Html.h2,
                      _L.fromArray([]),
                      _L.fromArray([$Html.text("Green Line Bus Route")]))
                      ,A2($Html.div,
                      _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                         ,_0: "border"
                                                                         ,_1: "1px solid black"}]))]),
                      stopButtons)
                      ,A2($Html.button,
                      _L.fromArray([$Html$Events.onClick(address)($Model.ChangeStopOrder($Model.StopUp))]),
                      _L.fromArray([$Html.text("<")]))
                      ,A2($Html.button,
                      _L.fromArray([$Html$Events.onClick(address)($Model.ChangeStopOrder($Model.StopDown))]),
                      _L.fromArray([$Html.text(">")]))
                      ,A2($Html.p,
                      _L.fromArray([]),
                      _L.fromArray([$Html.text("Use the buttons above to rearrange the bus schedule.")]))
                      ,A2($Html.p,
                      _L.fromArray([]),
                      _L.fromArray([$Html.text(A2($Basics._op["++"],
                      "You have ",
                      A2($Basics._op["++"],
                      $Basics.toString(model.levelData.changesRemaining),
                      " change(s) remaining.")))]))]));
      }();
   });
   var whiteBackgroundCss = {ctor: "_Tuple2"
                            ,_0: "background-color"
                            ,_1: "white"};
   var boxShadowCss = {ctor: "_Tuple2"
                      ,_0: "box-shadow"
                      ,_1: "5px 5px 10px #222222"};
   var controlPane = function (contents) {
      return function () {
         var styleAttrs = _L.fromArray([{ctor: "_Tuple2"
                                        ,_0: "position"
                                        ,_1: "absolute"}
                                       ,boxShadowCss
                                       ,{ctor: "_Tuple2"
                                        ,_0: "width"
                                        ,_1: "400px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "height"
                                        ,_1: "400px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "left"
                                        ,_1: "10px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "top"
                                        ,_1: "10px"}
                                       ,whiteBackgroundCss]);
         return A2($Html.div,
         _L.fromArray([$Html$Attributes.style(styleAttrs)]),
         contents);
      }();
   };
   var gameClock = function (model) {
      return function () {
         var clockCollage = function () {
            var hand = F2(function (len,
            time) {
               return function () {
                  var angle = $Basics.degrees(90 - 6 * time);
                  return A2($Graphics$Collage.segment,
                  {ctor: "_Tuple2",_0: 0,_1: 0},
                  $Basics.fromPolar({ctor: "_Tuple2"
                                    ,_0: len
                                    ,_1: angle}));
               }();
            });
            var hourHand = function (t) {
               return $Graphics$Collage.traced($Graphics$Collage.solid($Color.charcoal))(A2(hand,
               50,
               t / 12));
            };
            var minuteHand = function (t) {
               return $Graphics$Collage.traced($Graphics$Collage.solid($Color.orange))(A2(hand,
               90,
               t));
            };
            var timeInMin = function (t) {
               return $Basics.toFloat(function (_v7) {
                  return function () {
                     switch (_v7.ctor)
                     {case "GameTime":
                        return _v7._0;}
                     _U.badCase($moduleName,
                     "on line 240, column 58 to 59");
                  }();
               }(t));
            };
            return A3($Graphics$Collage.collage,
            200,
            200,
            _L.fromArray([A2($Graphics$Collage.filled,
                         $Color.lightGrey,
                         A2($Graphics$Collage.ngon,
                         30,
                         90))
                         ,A2($Graphics$Collage.outlined,
                         $Graphics$Collage.solid($Color.grey),
                         A2($Graphics$Collage.ngon,
                         30,
                         90))
                         ,hourHand(timeInMin(model.time))
                         ,minuteHand(timeInMin(model.time))]));
         }();
         var timeDisplay = function (_v10) {
            return function () {
               switch (_v10.ctor)
               {case "GameTime":
                  return function () {
                       var timeFormat = function (n) {
                          return _U.eq(n,
                          0) ? "00" : _U.cmp(n,
                          9) < 1 ? A2($Basics._op["++"],
                          "0",
                          $Basics.toString(n)) : $Basics.toString(n);
                       };
                       var minutes = A2($Basics._op["%"],
                       _v10._0,
                       60);
                       var hours = A2($Basics._op["%"],
                       _v10._0 / 60 | 0,
                       24);
                       var timeString = A2($Basics._op["++"],
                       timeFormat(hours),
                       A2($Basics._op["++"],
                       ":",
                       timeFormat(minutes)));
                       var days = _v10._0 / (60 * 24) | 0;
                       var dateString = A2($Basics._op["++"],
                       "Day: ",
                       $Basics.toString(days + 1));
                       return A2($Graphics$Element.flow,
                       $Graphics$Element.down,
                       _L.fromArray([$Graphics$Element.centered($Text.monospace($Text.fromString(dateString)))
                                    ,$Graphics$Element.centered($Text.monospace($Text.fromString(timeString)))]));
                    }();}
               _U.badCase($moduleName,
               "between lines 221 and 236");
            }();
         };
         var styleAttrs = _L.fromArray([{ctor: "_Tuple2"
                                        ,_0: "position"
                                        ,_1: "absolute"}
                                       ,boxShadowCss
                                       ,{ctor: "_Tuple2"
                                        ,_0: "left"
                                        ,_1: "100px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "top"
                                        ,_1: "420px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "width"
                                        ,_1: "300px"}
                                       ,{ctor: "_Tuple2"
                                        ,_0: "height"
                                        ,_1: "200px"}
                                       ,whiteBackgroundCss]);
         return A2($Html.div,
         _L.fromArray([$Html$Attributes.style(styleAttrs)]),
         _L.fromArray([$Html.fromElement(A2($Graphics$Element.flow,
         $Graphics$Element.right,
         _L.fromArray([clockCollage
                      ,timeDisplay(model.time)])))]));
      }();
   };
   var levelBackgroundCss = "rgb(140, 59, 177)";
   var emailTemplate = function (msg) {
      return function () {
         var emailLine = F2(function (bold,
         rest) {
            return A2($Html.span,
            _L.fromArray([]),
            _L.fromArray([A2($Html.b,
                         _L.fromArray([]),
                         _L.fromArray([$Html.text(bold)]))
                         ,$Html.text(rest)]));
         });
         var hr = A2($Html.hr,
         _L.fromArray([]),
         _L.fromArray([]));
         var br = A2($Html.br,
         _L.fromArray([]),
         _L.fromArray([]));
         return A2($Html.div,
         _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                            ,_0: "backgroundColor"
                                                            ,_1: "rgb(94,5,135"}
                                                           ,boxShadowCss
                                                           ,{ctor: "_Tuple2"
                                                            ,_0: "width"
                                                            ,_1: "800px"}
                                                           ,{ctor: "_Tuple2"
                                                            ,_0: "height"
                                                            ,_1: "500px"}
                                                           ,{ctor: "_Tuple2"
                                                            ,_0: "color"
                                                            ,_1: "white"}
                                                           ,{ctor: "_Tuple2"
                                                            ,_0: "padding"
                                                            ,_1: "5px"}]))]),
         _L.fromArray([A2($Html.div,
                      _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                         ,_0: "background-color"
                                                                         ,_1: "black"}
                                                                        ,{ctor: "_Tuple2"
                                                                         ,_0: "text-align"
                                                                         ,_1: "center"}]))]),
                      _L.fromArray([$Html.text("Email")]))
                      ,A2(emailLine,
                      "From: ",
                      "tklabbernick@super.com")
                      ,br
                      ,A2(emailLine,
                      "To: ",
                      "juliana.lopez@transit.municip.tri-cities.gov")
                      ,hr
                      ,msg]));
      }();
   };
   var gameButton = F3(function (address,
   action,
   text) {
      return A2($Html.button,
      _L.fromArray([A2($Html$Events.onClick,
                   address,
                   action)
                   ,$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                         ,_0: "background-color"
                                                         ,_1: "rgb(94, 5, 135)"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "color"
                                                         ,_1: "white"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "width"
                                                         ,_1: "100px"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "height"
                                                         ,_1: "100px"}]))]),
      _L.fromArray([$Html.text(text)]));
   });
   var renderTitleScreen = function (address) {
      return function () {
         var titleImage = A3($Graphics$Element.image,
         666,
         500,
         "../game_logo.png");
         var titleBackgroundColor = A3($Color.rgb,
         94,
         5,
         135);
         return A2($Html.div,
         _L.fromArray([]),
         _L.fromArray([$Html.fromElement(titleImage)
                      ,A3(gameButton,
                      address,
                      $Model.GoToScreen($Model.MessageScreen(0)),
                      "New Game")
                      ,A3(gameButton,
                      address,
                      $Model.GoToScreen($Model.ChooseLevelScreen),
                      "Continue")]));
      }();
   };
   var renderChooseLevel = F2(function (address,
   model) {
      return function () {
         var screenLinkIfUnlocked = F2(function (address,
         _v13) {
            return function () {
               switch (_v13.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v13._0.ctor)
                       {case "Level":
                          return A2($Html.li,
                            _L.fromArray([A2($Html$Events.onClick,
                            address,
                            $Model.GoToScreen($Model.LevelScreen(_v13._0._0)))]),
                            _L.fromArray([$Html.text(_v13._1)]));
                          case "Message":
                          return A2($Html.li,
                            _L.fromArray([A2($Html$Events.onClick,
                            address,
                            $Model.GoToScreen($Model.MessageScreen(_v13._0._0)))]),
                            _L.fromArray([$Html.text(_v13._1)]));}
                       _U.badCase($moduleName,
                       "between lines 56 and 60");
                    }();}
               _U.badCase($moduleName,
               "between lines 56 and 60");
            }();
         });
         return A2($Html.div,
         _L.fromArray([]),
         _L.fromArray([A2($Html.div,
                      _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                         ,_0: "color"
                                                                         ,_1: "white"}
                                                                        ,{ctor: "_Tuple2"
                                                                         ,_0: "background-color"
                                                                         ,_1: "rgb(94, 5, 135"}
                                                                        ,{ctor: "_Tuple2"
                                                                         ,_0: "width"
                                                                         ,_1: "800px"}
                                                                        ,{ctor: "_Tuple2"
                                                                         ,_0: "height"
                                                                         ,_1: "500px"}]))]),
                      _L.fromArray([$Html.text("Choose a level")
                                   ,$Html.ul(_L.fromArray([]))(A2($List.map,
                                   screenLinkIfUnlocked(address),
                                   $GameScreens.gameScreens))]))
                      ,A3(gameButton,
                      address,
                      $Model.GoToScreen($Model.TitleScreen),
                      "Return to title")]));
      }();
   });
   var renderMessageScreen = F2(function (n,
   address) {
      return function () {
         var _v20 = A2($Array.get,
         n,
         $EmailTexts.emailTexts);
         switch (_v20.ctor)
         {case "Just":
            return A2($Html.body,
              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                 ,_0: "background-color"
                                                                 ,_1: levelBackgroundCss}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "position"
                                                                 ,_1: "absolute"}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "width"
                                                                 ,_1: "100%"}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "height"
                                                                 ,_1: "100%"}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "margin"
                                                                 ,_1: "0"}]))]),
              _L.fromArray([A2($Html.div,
              _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                 ,_0: "position"
                                                                 ,_1: "absolute"}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "top"
                                                                 ,_1: "20px"}
                                                                ,{ctor: "_Tuple2"
                                                                 ,_0: "left"
                                                                 ,_1: "20px"}]))]),
              _L.fromArray([emailTemplate(_v20._0)
                           ,A3(gameButton,
                           address,
                           $Model.GoToScreen($Model.LevelScreen(n)),
                           "Begin workday...")]))]));
            case "Nothing":
            return $Html.text("Error - no message for this message id");}
         _U.badCase($moduleName,
         "between lines 76 and 101");
      }();
   });
   var renderLevel = F3(function (levelNum,
   address,
   model) {
      return A2($Html.body,
      _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                         ,_0: "background-color"
                                                         ,_1: levelBackgroundCss}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "position"
                                                         ,_1: "absolute"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "width"
                                                         ,_1: "100%"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "height"
                                                         ,_1: "100%"}
                                                        ,{ctor: "_Tuple2"
                                                         ,_0: "margin"
                                                         ,_1: "0"}]))]),
      _L.fromArray([A2($Html.div,
                   _L.fromArray([]),
                   _L.fromArray([controlPane(_L.fromArray([A3(gameButton,
                                                          address,
                                                          $Model.GoToScreen($Model.TitleScreen),
                                                          "Return to title")
                                                          ,A3(gameButton,
                                                          address,
                                                          $Model.ToggleAdvancingTime,
                                                          "Play / Pause")
                                                          ,A3(gameButton,
                                                          address,
                                                          $Model.ResetTime,
                                                          "Stop")
                                                          ,A3(gameButton,
                                                          address,
                                                          $Model.ResetState,
                                                          "Reset")
                                                          ,A2(busStopsWidget,
                                                          address,
                                                          model)]))
                                ,gameClock(model)]))
                   ,A2($Html.div,
                   _L.fromArray([$Html$Attributes.style(_L.fromArray([{ctor: "_Tuple2"
                                                                      ,_0: "position"
                                                                      ,_1: "absolute"}
                                                                     ,{ctor: "_Tuple2"
                                                                      ,_0: "left"
                                                                      ,_1: "412px"}
                                                                     ,{ctor: "_Tuple2"
                                                                      ,_0: "top"
                                                                      ,_1: "10px"}]))]),
                   _L.fromArray([$Html.fromElement(trafficGrid(model))]))]));
   });
   _elm.Views.values = {_op: _op
                       ,gameButton: gameButton
                       ,renderTitleScreen: renderTitleScreen
                       ,renderChooseLevel: renderChooseLevel
                       ,renderMessageScreen: renderMessageScreen
                       ,emailTemplate: emailTemplate
                       ,levelBackgroundCss: levelBackgroundCss
                       ,boxShadowCss: boxShadowCss
                       ,whiteBackgroundCss: whiteBackgroundCss
                       ,renderLevel: renderLevel
                       ,busStopsWidget: busStopsWidget
                       ,controlPane: controlPane
                       ,gameClock: gameClock
                       ,renderIndicator: renderIndicator
                       ,trafficGrid: trafficGrid};
   return _elm.Views.values;
};
Elm.VirtualDom = Elm.VirtualDom || {};
Elm.VirtualDom.make = function (_elm) {
   "use strict";
   _elm.VirtualDom = _elm.VirtualDom || {};
   if (_elm.VirtualDom.values)
   return _elm.VirtualDom.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "VirtualDom",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$VirtualDom = Elm.Native.VirtualDom.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var lazy3 = $Native$VirtualDom.lazy3;
   var lazy2 = $Native$VirtualDom.lazy2;
   var lazy = $Native$VirtualDom.lazy;
   var defaultOptions = {_: {}
                        ,preventDefault: false
                        ,stopPropagation: false};
   var Options = F2(function (a,
   b) {
      return {_: {}
             ,preventDefault: b
             ,stopPropagation: a};
   });
   var onWithOptions = $Native$VirtualDom.on;
   var on = F3(function (eventName,
   decoder,
   toMessage) {
      return A4($Native$VirtualDom.on,
      eventName,
      defaultOptions,
      decoder,
      toMessage);
   });
   var attribute = $Native$VirtualDom.attribute;
   var property = $Native$VirtualDom.property;
   var Property = {ctor: "Property"};
   var fromElement = $Native$VirtualDom.fromElement;
   var toElement = $Native$VirtualDom.toElement;
   var text = $Native$VirtualDom.text;
   var node = $Native$VirtualDom.node;
   var Node = {ctor: "Node"};
   _elm.VirtualDom.values = {_op: _op
                            ,text: text
                            ,node: node
                            ,toElement: toElement
                            ,fromElement: fromElement
                            ,property: property
                            ,attribute: attribute
                            ,on: on
                            ,onWithOptions: onWithOptions
                            ,defaultOptions: defaultOptions
                            ,lazy: lazy
                            ,lazy2: lazy2
                            ,lazy3: lazy3
                            ,Options: Options};
   return _elm.VirtualDom.values;
};