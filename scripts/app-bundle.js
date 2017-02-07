define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('snapsvg');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('snap-svg',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var SnapSvgCustomElement = exports.SnapSvgCustomElement = function () {
        function SnapSvgCustomElement() {
            _classCallCheck(this, SnapSvgCustomElement);
        }

        SnapSvgCustomElement.prototype.attached = function attached() {
            this.s = Snap(document.getElementById('svg'));

            this.circleOne = this.s.circle(100, 100, 50).attr({
                fill: "blue",
                stroke: "black",
                strokeWidth: 2
            });
            this.circleOne.drag();

            this.ellipseOne = this.s.ellipse(250, 100, 50, 30).attr({
                fill: "yellow",
                stroke: "black",
                strokeWidth: 2
            });
            this.ellipseOne.drag();

            this.lineOne = this.s.path({
                path: Snap.path.getSubpath("M100 210 C 100 300, 250 300, 250 210", 250, 350),
                "fill-opacity": 0,
                stroke: "black",
                strokeWidth: 2
            });
            this.lineOne.drag();
        };

        return SnapSvgCustomElement;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./snap-svg\"></require>\n  <snap-svg></snap-svg>\n</template>\n"; });
define('text!snap-svg.html', ['module'], function(module) { module.exports = "<template>\n    <h1>Draggable objects</h1>\n    <svg id=\"svg\" height=\"700\" width=\"700\"></svg>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map