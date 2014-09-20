(function(root, factory, dependenciesFactory, setup) {
  setup(root, factory, dependenciesFactory);
})(
this,
(function(require, exports, module, global, undefined) {

  var $$___src_runtime_util = {};
$$___src_runtime_util = (function(module, exports) {

  var create, defProp, hasProp, isArray, prototypeOf, toStr;

toStr = function(obj) {
  return Object.prototype.toString.call(obj);
};

if (typeof Object.getPrototypeOf !== 'function') {
  if (typeof ''.__proto__ === 'object') {
    prototypeOf = function(obj) {
      return obj.__proto__;
    };
  } else {
    prototypeOf = function(obj) {
      return obj.constructor.prototype;
    };
  }
} else {
  prototypeOf = Object.getPrototypeOf;
}

if (typeof Object.create !== 'function') {
  create = (function() {
    var F;
    F = function() {};
    return function(o) {
      if (arguments.length !== 1) {
        throw new Error('Object.create implementation only accepts one parameter.');
      }
      F.prototype = o;
      return new F();
    };
  })();
} else {
  create = Object.create;
}

hasProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

if (typeof Array.isArray !== 'function') {
  isArray = function(obj) {
    return toStr(obj) === '[object Array]';
  };
} else {
  isArray = Array.isArray;
}

if (typeof Object.defineProperty === 'function') {
  defProp = function(obj, prop, descriptor) {
    return Object.defineProperty(obj, prop, descriptor);
  };
} else {
  defProp = function(obj, prop, descriptor) {
    return obj[prop] = descriptor.value;
  };
}

exports.prototypeOf = prototypeOf;

exports.create = create;

exports.hasProp = hasProp;

exports.isArray = isArray;

exports.defProp = defProp;


  return module.exports;
})({exports: $$___src_runtime_util}, $$___src_runtime_util);var $$___src_ast_visitor = {};
$$___src_ast_visitor = (function(module, exports) {

  var Visitor;

Visitor = (function() {
  function Visitor() {}

  Visitor.prototype.visit = function(node) {
    if (node instanceof Array) {
      return this.visitArray(node);
    }
    if (node && node.type) {
      return this[node.type](node);
    }
    if (node) {
      throw new Error('unexpected node');
    }
    return null;
  };

  Visitor.prototype.visitArray = function(array) {
    var i, result;
    i = 0;
    while (i < array.length) {
      if (!array[i]) {
        i++;
        continue;
      }
      result = this.visit(array[i]);
      if (result) {
        array[i++] = result;
      } else {
        array.splice(i, 1);
      }
    }
    return array;
  };

  Visitor.prototype.Program = function(node) {
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.EmptyStatement = function(node) {
    return null;
  };

  Visitor.prototype.BlockStatement = function(node) {
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.ExpressionStatement = function(node) {
    node.expression = this.visit(node.expression);
    return node;
  };

  Visitor.prototype.IfStatement = function(node) {
    node.test = this.visit(node.test);
    node.consequent = this.visit(node.consequent);
    node.alternate = this.visit(node.alternate);
    return node;
  };

  Visitor.prototype.LabeledStatement = function(node) {
    node.label = this.visit(node.label);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.BreakStatement = function(node) {
    node.label = this.visit(node.label);
    return node;
  };

  Visitor.prototype.ContinueStatement = function(node) {
    node.label = this.visit(node.label);
    return node;
  };

  Visitor.prototype.WithStatement = function(node) {
    node.object = this.visit(node.object);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.SwitchStatement = function(node) {
    node.discriminant = this.visit(node.discriminant);
    node.cases = this.visit(node.cases);
    return node;
  };

  Visitor.prototype.ReturnStatement = function(node) {
    node.argument = this.visit(node.argument);
    return node;
  };

  Visitor.prototype.ThrowStatement = function(node) {
    node.argument = this.visit(node.argument);
    return node;
  };

  Visitor.prototype.TryStatement = function(node) {
    node.block = this.visit(node.block);
    node.handlers = this.visit(node.handlers);
    node.guardedHandlers = this.visit(node.guardedHandlers);
    node.finalizer = this.visit(node.finalizer);
    return node;
  };

  Visitor.prototype.WhileStatement = function(node) {
    node.test = this.visit(node.test);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.DoWhileStatement = function(node) {
    node.body = this.visit(node.body);
    node.test = this.visit(node.test);
    return node;
  };

  Visitor.prototype.ForStatement = function(node) {
    node.test = this.visit(node.test);
    node.body = this.visit(node.body);
    node.init = this.visit(node.init);
    node.update = this.visit(node.update);
    return node;
  };

  Visitor.prototype.ForInStatement = function(node) {
    node.left = this.visit(node.left);
    node.right = this.visit(node.right);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.ForOfStatement = function(node) {
    node.left = this.visit(node.left);
    node.right = this.visit(node.right);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.LetStatement = function(node) {
    node.head = this.visit(node.head);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.DebuggerStatement = function(node) {
    return node;
  };

  Visitor.prototype.FunctionDeclaration = function(node) {
    node.id = this.visit(node.id);
    node.params = this.visit(node.params);
    node.defaults = this.visit(node.defaults);
    node.rest = this.visit(node.rest);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.VariableDeclaration = function(node) {
    node.declarations = this.visit(node.declarations);
    return node;
  };

  Visitor.prototype.VariableDeclarator = function(node) {
    node.id = this.visit(node.id);
    node.init = this.visit(node.init);
    return node;
  };

  Visitor.prototype.ThisExpression = function(node) {
    return node;
  };

  Visitor.prototype.ArrayExpression = function(node) {
    node.elements = this.visit(node.elements);
    return node;
  };

  Visitor.prototype.ObjectExpression = function(node) {
    var property, _i, _len, _ref;
    _ref = node.properties;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      property.value = this.visit(property.value);
      property.key = this.visit(property.key);
    }
    return node;
  };

  Visitor.prototype.FunctionExpression = function(node) {
    node.id = this.visit(node.id);
    node.params = this.visit(node.params);
    node.defaults = this.visit(node.defaults);
    node.rest = this.visit(node.rest);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.SequenceExpression = function(node) {
    node.expressions = this.visit(node.expressions);
    return node;
  };

  Visitor.prototype.UnaryExpression = function(node) {
    node.argument = this.visit(node.argument);
    return node;
  };

  Visitor.prototype.BinaryExpression = function(node) {
    node.left = this.visit(node.left);
    node.right = this.visit(node.right);
    return node;
  };

  Visitor.prototype.AssignmentExpression = function(node) {
    node.right = this.visit(node.right);
    node.left = this.visit(node.left);
    return node;
  };

  Visitor.prototype.UpdateExpression = function(node) {
    node.argument = this.visit(node.argument);
    return node;
  };

  Visitor.prototype.LogicalExpression = function(node) {
    node.left = this.visit(node.left);
    node.right = this.visit(node.right);
    return node;
  };

  Visitor.prototype.ConditionalExpression = function(node) {
    node.test = this.visit(node.test);
    node.consequent = this.visit(node.consequent);
    node.alternate = this.visit(node.alternate);
    return node;
  };

  Visitor.prototype.NewExpression = function(node) {
    node.callee = this.visit(node.callee);
    node["arguments"] = this.visit(node["arguments"]);
    return node;
  };

  Visitor.prototype.CallExpression = function(node) {
    node["arguments"] = this.visit(node["arguments"]);
    node.callee = this.visit(node.callee);
    return node;
  };

  Visitor.prototype.MemberExpression = function(node) {
    node.object = this.visit(node.object);
    node.property = this.visit(node.property);
    return node;
  };

  Visitor.prototype.ObjectPattern = function(node) {
    var property, _i, _len, _ref;
    _ref = node.properties;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      property.value = this.visit(property.value);
      property.key = this.visit(property.key);
    }
    return node;
  };

  Visitor.prototype.ArrayPattern = function(node) {
    node.elements = this.visit(node.elements);
    return node;
  };

  Visitor.prototype.SwitchCase = function(node) {
    node.test = this.visit(node.test);
    node.consequent = this.visit(node.consequent);
    return node;
  };

  Visitor.prototype.CatchClause = function(node) {
    node.param = this.visit(node.param);
    node.guard = this.visit(node.guard);
    node.body = this.visit(node.body);
    return node;
  };

  Visitor.prototype.Identifier = function(node) {
    return node;
  };

  Visitor.prototype.Literal = function(node) {
    return node;
  };

  Visitor.prototype.YieldExpression = function(node) {
    node.argument = this.visit(node.argument);
    return node;
  };

  Visitor.prototype.ComprehensionExpression = function(node) {
    node.body = this.visit(node.body);
    node.blocks = this.visit(node.blocks);
    node.filter = this.visit(node.filter);
    return node;
  };

  Visitor.prototype.ComprehensionBlock = function(node) {
    node.left = this.visit(node.pattern);
    node.right = this.visit(node.right);
    return node;
  };

  Visitor.prototype.ClassExpression = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ClassBody = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ClassDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ClassHeritage = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ArrowFunctionExpression = function(node) {
    node.params = this.visit(node.params);
    node.defaults = this.visit(node.defaults);
    node.rest = this.visit(node.rest);
    node.body = this.visit(node.body);
    return node;
    throw new Error('not implemented');
  };

  Visitor.prototype.ExportBatchSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ExportSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ExportDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ImportSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ImportDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.MethodDefinition = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.Property = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.ModuleDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.SpreadElement = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.TemplateElement = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.TaggedTemplateExpression = function(node) {
    throw new Error('not implemented');
  };

  Visitor.prototype.TemplateLiteral = function(node) {
    throw new Error('not implemented');
  };

  return Visitor;

})();

module.exports = Visitor;


  return module.exports;
})({exports: $$___src_ast_visitor}, $$___src_ast_visitor);var $$___src_ast_constant_folder = {};
$$___src_ast_constant_folder = (function(module, exports) {

  var ConstantFolder, Visitor, hasProp, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Visitor = $$___src_ast_visitor;

hasProp = $$___src_runtime_util.hasProp;

ConstantFolder = (function(_super) {
  __extends(ConstantFolder, _super);

  function ConstantFolder() {
    _ref = ConstantFolder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  ConstantFolder.prototype.UnaryExpression = function(node) {
    var result;
    node = ConstantFolder.__super__.UnaryExpression.call(this, node);
    if (node.operator === '+') {
      return node.argument;
    }
    if (node.argument.type === 'Literal' && !(node.argument.value instanceof RegExp)) {
      if (!hasProp(node, 'prefix') || node.prefix) {
        result = eval("" + node.operator + "(" + node.argument.raw + ")");
      } else {
        result = eval("(" + node.argument.raw + ")" + node.operator);
      }
      return {
        type: 'Literal',
        value: result,
        loc: node.loc
      };
    }
    return node;
  };

  ConstantFolder.prototype.BinaryExpression = function(node) {
    var result;
    node = ConstantFolder.__super__.BinaryExpression.call(this, node);
    if (node.left.type === 'Literal' && node.right.type === 'Literal' && !(node.right.value instanceof RegExp) && !(node.left.value instanceof RegExp)) {
      result = eval("(" + node.left.raw + " " + node.operator + " " + node.right.raw + ")");
      return {
        type: 'Literal',
        value: result,
        loc: node.left.loc
      };
    }
    return node;
  };

  return ConstantFolder;

})(Visitor);

module.exports = ConstantFolder;


  return module.exports;
})({exports: $$___src_ast_constant_folder}, $$___src_ast_constant_folder);var $$___src_ast_transformer = {};
$$___src_ast_transformer = (function(module, exports) {

  var Transformer,
  __slice = [].slice;

Transformer = (function() {
  function Transformer() {
    var visitors;
    visitors = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.visitors = visitors;
  }

  Transformer.prototype.transform = function(ast) {
    var visitor, _i, _len, _ref;
    _ref = this.visitors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      visitor = _ref[_i];
      ast = visitor.visit(ast);
    }
    return ast;
  };

  return Transformer;

})();

module.exports = Transformer;


  return module.exports;
})({exports: $$___src_ast_transformer}, $$___src_ast_transformer);var $$___src_runtime_errors = {};
$$___src_runtime_errors = (function(module, exports) {

  var VmError, VmEvalError, VmRangeError, VmReferenceError, VmSyntaxError, VmTimeoutError, VmTypeError, VmURIError, isArray, printTrace, _ref, _ref1, _ref2, _ref3, _ref4, _ref5,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

isArray = $$___src_runtime_util.isArray;

printTrace = function(trace, indent) {
  var c, filename, frame, l, name, rv, _i, _len;
  if (indent == null) {
    indent = '';
  }
  indent += '    ';
  rv = '';
  for (_i = 0, _len = trace.length; _i < _len; _i++) {
    frame = trace[_i];
    if (isArray(frame)) {
      rv += "\n\n" + indent + "Rethrown:";
      rv += printTrace(frame, indent);
      continue;
    }
    l = frame.line;
    c = frame.column;
    name = frame.at.name;
    filename = frame.at.filename;
    if (name) {
      rv += "\n" + indent + "at " + name + " (" + filename + ":" + l + ":" + c + ")";
    } else {
      rv += "\n" + indent + "at " + filename + ":" + l + ":" + c;
    }
  }
  return rv;
};

VmError = (function() {
  function VmError(message) {
    var trace;
    this.message = message;
    trace = null;
  }

  VmError.prototype.toString = function() {
    var errName, rv;
    errName = this.constructor.display;
    rv = "" + errName + ": " + this.message;
    if (this.trace) {
      rv += printTrace(this.trace);
    }
    return rv;
  };

  return VmError;

})();

VmEvalError = (function(_super) {
  __extends(VmEvalError, _super);

  function VmEvalError() {
    _ref = VmEvalError.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  VmEvalError.display = 'EvalError';

  return VmEvalError;

})(VmError);

VmRangeError = (function(_super) {
  __extends(VmRangeError, _super);

  function VmRangeError() {
    _ref1 = VmRangeError.__super__.constructor.apply(this, arguments);
    return _ref1;
  }

  VmRangeError.display = 'RangeError';

  return VmRangeError;

})(VmError);

VmReferenceError = (function(_super) {
  __extends(VmReferenceError, _super);

  function VmReferenceError() {
    _ref2 = VmReferenceError.__super__.constructor.apply(this, arguments);
    return _ref2;
  }

  VmReferenceError.display = 'ReferenceError';

  return VmReferenceError;

})(VmError);

VmSyntaxError = (function(_super) {
  __extends(VmSyntaxError, _super);

  function VmSyntaxError() {
    _ref3 = VmSyntaxError.__super__.constructor.apply(this, arguments);
    return _ref3;
  }

  VmSyntaxError.display = 'SyntaxError';

  return VmSyntaxError;

})(VmError);

VmTypeError = (function(_super) {
  __extends(VmTypeError, _super);

  function VmTypeError() {
    _ref4 = VmTypeError.__super__.constructor.apply(this, arguments);
    return _ref4;
  }

  VmTypeError.display = 'TypeError';

  return VmTypeError;

})(VmError);

VmURIError = (function(_super) {
  __extends(VmURIError, _super);

  function VmURIError() {
    _ref5 = VmURIError.__super__.constructor.apply(this, arguments);
    return _ref5;
  }

  VmURIError.display = 'URIError';

  return VmURIError;

})(VmError);

VmTimeoutError = (function(_super) {
  __extends(VmTimeoutError, _super);

  VmTimeoutError.display = 'TimeoutError';

  function VmTimeoutError(fiber) {
    this.fiber = fiber;
    VmTimeoutError.__super__.constructor.call(this, "Script timed out");
  }

  return VmTimeoutError;

})(VmError);

exports.VmError = VmError;

exports.VmEvalError = VmEvalError;

exports.VmRangeError = VmRangeError;

exports.VmReferenceError = VmReferenceError;

exports.VmSyntaxError = VmSyntaxError;

exports.VmTypeError = VmTypeError;

exports.VmURIError = VmURIError;

exports.VmTimeoutError = VmTimeoutError;


  return module.exports;
})({exports: $$___src_runtime_errors}, $$___src_runtime_errors);var $$___src_vm_thread = {};
$$___src_vm_thread = (function(module, exports) {

  var EvalFrame, EvaluationStack, Fiber, Frame, Scope, VmError, VmTimeoutError, WithScope, isArray, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = $$___src_runtime_errors, VmError = _ref.VmError, VmTimeoutError = _ref.VmTimeoutError;

isArray = $$___src_runtime_util.isArray;

Fiber = (function() {
  function Fiber(realm, timeout) {
    this.realm = realm;
    this.timeout = timeout != null ? timeout : -1;
    this.maxDepth = 1000;
    this.maxTraceDepth = 50;
    this.callStack = [];
    this.evalStack = null;
    this.depth = -1;
    this.yielded = this.rv = void 0;
    this.paused = false;
    this.r1 = this.r2 = this.r3 = null;
    this.rexp = null;
  }

  Fiber.prototype.run = function() {
    var err, frame, guard, _ref1;
    frame = this.callStack[this.depth];
    err = frame.error;
    while (this.depth >= 0 && frame && !this.paused) {
      if (err) {
        frame = this.unwind(err);
      }
      frame.run();
      if ((err = frame.error) instanceof VmError) {
        this.injectStackTrace(err);
      }
      if (frame.done()) {
        if (frame.guards.length) {
          guard = frame.guards.pop();
          if (guard.finalizer) {
            frame.ip = guard.finalizer;
            frame.exitIp = guard.end;
            frame.paused = false;
            continue;
          }
        }
      } else {
        frame = this.callStack[this.depth];
        err = frame.error;
        continue;
      }
      if (frame.construct) {
        if ((_ref1 = typeof this.rv) !== 'object' && _ref1 !== 'function') {
          this.rv = frame.scope.get(0);
        }
      }
      frame = this.popFrame();
      if (frame && !err) {
        frame.evalStack.push(this.rv);
        this.rv = void 0;
      }
    }
    if (this.timedOut()) {
      err = new VmTimeoutError(this);
      this.injectStackTrace(err);
    }
    if (err) {
      throw err;
    }
  };

  Fiber.prototype.unwind = function(err) {
    var frame, guard, ip, len;
    frame = this.callStack[this.depth];
    while (frame) {
      frame.error = err;
      ip = frame.ip - 1;
      if (len = frame.guards.length) {
        guard = frame.guards[len - 1];
        if ((guard.start <= ip && ip <= guard.end)) {
          if (guard.handler !== null) {
            if (ip <= guard.handler) {
              frame.evalStack.push(err);
              frame.error = null;
              frame.ip = guard.handler;
            } else {
              if (guard.finalizer && frame.ip <= guard.finalizer) {
                frame.ip = guard.finalizer;
              } else {
                frame = this.popFrame();
                continue;
              }
            }
          } else {
            frame.ip = guard.finalizer;
          }
          frame.paused = false;
          return frame;
        }
      }
      frame = this.popFrame();
    }
    throw err;
  };

  Fiber.prototype.injectStackTrace = function(err) {
    var frame, i, minDepth, name, t, trace, _i, _ref1;
    trace = [];
    minDepth = 0;
    if (this.depth > this.maxTraceDepth) {
      minDepth = this.depth - this.maxTraceDepth;
    }
    for (i = _i = _ref1 = this.depth; _ref1 <= minDepth ? _i <= minDepth : _i >= minDepth; i = _ref1 <= minDepth ? ++_i : --_i) {
      frame = this.callStack[i];
      name = frame.script.name;
      if (name === '<anonymous>' && frame.fname) {
        name = frame.fname;
      }
      trace.push({
        at: {
          name: name,
          filename: frame.script.filename
        },
        line: frame.line,
        column: frame.column
      });
    }
    if (err.trace) {
      t = err.trace;
      while (isArray(t[t.length - 1])) {
        t = t[t.length - 1];
      }
      t.push(trace);
    } else {
      err.trace = trace;
    }
    return err.stack = err.toString();
  };

  Fiber.prototype.pushFrame = function(script, target, parent, args, self, name, construct) {
    var frame, scope;
    if (name == null) {
      name = '<anonymous>';
    }
    if (construct == null) {
      construct = false;
    }
    if (!this.checkCallStack()) {
      return;
    }
    scope = new Scope(parent, script.localNames, script.localLength);
    scope.set(0, target);
    frame = new Frame(this, script, scope, this.realm, name, construct);
    if (self) {
      frame.evalStack.push(self);
    }
    if (args) {
      frame.evalStack.push(args);
    }
    this.callStack[++this.depth] = frame;
    return frame;
  };

  Fiber.prototype.pushEvalFrame = function(frame, script) {
    if (!this.checkCallStack()) {
      return;
    }
    return this.callStack[++this.depth] = new EvalFrame(frame, script);
  };

  Fiber.prototype.checkCallStack = function() {
    if (this.depth === this.maxDepth) {
      this.callStack[this.depth].error = new VmError('maximum call stack size exceeded');
      this.pause();
      return false;
    }
    return true;
  };

  Fiber.prototype.popFrame = function() {
    var frame;
    frame = this.callStack[--this.depth];
    if (frame) {
      frame.paused = false;
    }
    return frame;
  };

  Fiber.prototype.setReturnValue = function(rv) {
    return this.callStack[this.depth].evalStack.push(rv);
  };

  Fiber.prototype.pause = function() {
    return this.paused = this.callStack[this.depth].paused = true;
  };

  Fiber.prototype.resume = function(timeout) {
    var evalStack, frame;
    this.timeout = timeout != null ? timeout : -1;
    this.paused = false;
    frame = this.callStack[this.depth];
    frame.paused = false;
    evalStack = this.callStack[0].evalStack;
    this.run();
    if (!this.paused) {
      return this.rexp;
    }
  };

  Fiber.prototype.timedOut = function() {
    return this.timeout === 0;
  };

  Fiber.prototype.send = function(obj) {
    return this.callStack[this.depth].evalStack.push(obj);
  };

  Fiber.prototype.done = function() {
    return this.depth === -1;
  };

  return Fiber;

})();

Frame = (function() {
  function Frame(fiber, script, scope, realm, fname, construct) {
    this.fiber = fiber;
    this.script = script;
    this.scope = scope;
    this.realm = realm;
    this.fname = fname;
    this.construct = construct != null ? construct : false;
    this.evalStack = new EvaluationStack(this.script.stackSize, this.fiber);
    this.ip = 0;
    this.exitIp = this.script.instructions.length;
    this.paused = false;
    this.finalizer = null;
    this.guards = [];
    this.rv = void 0;
    this.line = this.column = -1;
  }

  Frame.prototype.run = function() {
    var instructions, len;
    instructions = this.script.instructions;
    while (this.ip !== this.exitIp && !this.paused && this.fiber.timeout !== 0) {
      this.fiber.timeout--;
      instructions[this.ip++].exec(this, this.evalStack, this.scope, this.realm);
    }
    if (this.fiber.timeout === 0) {
      this.paused = this.fiber.paused = true;
    }
    if (!this.paused && !this.error && (len = this.evalStack.len()) !== 0) {
      throw new Error("Evaluation stack has " + len + " items after execution");
    }
  };

  Frame.prototype.done = function() {
    return this.ip === this.exitIp;
  };

  Frame.prototype.setLine = function(line) {
    this.line = line;
  };

  Frame.prototype.setColumn = function(column) {
    this.column = column;
  };

  return Frame;

})();

EvalFrame = (function(_super) {
  __extends(EvalFrame, _super);

  function EvalFrame(frame, script) {
    var guard, _i, _len, _ref1;
    _ref1 = frame.script.guards;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      guard = _ref1[_i];
      script.guards.push(guard);
    }
    EvalFrame.__super__.constructor.call(this, frame.fiber, script, frame.scope, frame.realm, script.filename);
  }

  EvalFrame.prototype.run = function() {
    EvalFrame.__super__.run.call(this);
    return this.fiber.rv = this.fiber.rexp;
  };

  return EvalFrame;

})(Frame);

EvaluationStack = (function() {
  function EvaluationStack(size, fiber) {
    this.fiber = fiber;
    this.array = new Array(size);
    this.idx = 0;
  }

  EvaluationStack.prototype.push = function(item) {
    if (this.idx === this.array.length) {
      throw new Error('maximum evaluation stack size exceeded');
    }
    return this.array[this.idx++] = item;
  };

  EvaluationStack.prototype.pop = function() {
    return this.array[--this.idx];
  };

  EvaluationStack.prototype.top = function() {
    return this.array[this.idx - 1];
  };

  EvaluationStack.prototype.len = function() {
    return this.idx;
  };

  EvaluationStack.prototype.clear = function() {
    return this.idx = 0;
  };

  return EvaluationStack;

})();

Scope = (function() {
  function Scope(parent, names, len) {
    this.parent = parent;
    this.names = names;
    this.data = new Array(len);
  }

  Scope.prototype.get = function(i) {
    return this.data[i];
  };

  Scope.prototype.set = function(i, value) {
    return this.data[i] = value;
  };

  Scope.prototype.name = function(name) {
    var k, v, _ref1;
    _ref1 = this.names;
    for (k in _ref1) {
      if (!__hasProp.call(_ref1, k)) continue;
      v = _ref1[k];
      if (v === name) {
        return parseInt(k);
      }
    }
    return -1;
  };

  Scope.prototype.namesHash = function() {
    var k, rv, v, _ref1;
    rv = {};
    _ref1 = this.names;
    for (k in _ref1) {
      if (!__hasProp.call(_ref1, k)) continue;
      v = _ref1[k];
      if (typeof v === 'string') {
        rv[v] = parseInt(k);
      }
    }
    rv['this'] = 0;
    rv['arguments'] = 1;
    return rv;
  };

  return Scope;

})();

WithScope = (function() {
  function WithScope(parent, object) {
    this.parent = parent;
    this.object = object;
  }

  WithScope.prototype.get = function(name) {
    return this.object[name];
  };

  WithScope.prototype.set = function(name, value) {
    return this.object[name] = value;
  };

  WithScope.prototype.has = function(name) {
    return name in this.object;
  };

  return WithScope;

})();

exports.Fiber = Fiber;

exports.Scope = Scope;

exports.WithScope = WithScope;


  return module.exports;
})({exports: $$___src_vm_thread}, $$___src_vm_thread);var $$___src_runtime_builtin = {};
$$___src_runtime_builtin = (function(module, exports) {

  var ArrayIterator, StopIteration, VmError,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

VmError = $$___src_runtime_errors.VmError;

StopIteration = (function(_super) {
  __extends(StopIteration, _super);

  StopIteration.display = 'StopIteration';

  function StopIteration(value, message) {
    this.value = value;
    this.message = message != null ? message : 'iterator has stopped';
  }

  return StopIteration;

})(VmError);

ArrayIterator = (function() {
  function ArrayIterator(elements) {
    this.elements = elements;
    this.index = 0;
  }

  ArrayIterator.prototype.next = function() {
    if (this.index >= this.elements.length) {
      throw new StopIteration();
    }
    return this.elements[this.index++];
  };

  return ArrayIterator;

})();

exports.StopIteration = StopIteration;

exports.ArrayIterator = ArrayIterator;


  return module.exports;
})({exports: $$___src_runtime_builtin}, $$___src_runtime_builtin);var $$___src_runtime_metadata = {};
$$___src_runtime_metadata = (function(module, exports) {

  var AccessorPropertyDescriptor, ArrayIterator, CowObjectMetadata, DataPropertyDescriptor, ObjectMetadata, PropertyDescriptor, RestrictedObjectMetadata, hasProp,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ArrayIterator = $$___src_runtime_builtin.ArrayIterator;

hasProp = $$___src_runtime_util.hasProp;

PropertyDescriptor = (function() {
  function PropertyDescriptor(enumerable, configurable) {
    this.enumerable = enumerable != null ? enumerable : false;
    this.configurable = configurable != null ? configurable : false;
  }

  return PropertyDescriptor;

})();

DataPropertyDescriptor = (function(_super) {
  __extends(DataPropertyDescriptor, _super);

  function DataPropertyDescriptor(value, writable, enumerable, configurable) {
    this.value = value;
    this.writable = writable != null ? writable : false;
    DataPropertyDescriptor.__super__.constructor.call(this, enumerable, configurable);
  }

  return DataPropertyDescriptor;

})(PropertyDescriptor);

AccessorPropertyDescriptor = (function(_super) {
  __extends(AccessorPropertyDescriptor, _super);

  function AccessorPropertyDescriptor(get, set, enumerable, configurable) {
    this.get = get;
    this.set = set;
    AccessorPropertyDescriptor.__super__.constructor.call(this, enumerable, configurable);
  }

  return AccessorPropertyDescriptor;

})(PropertyDescriptor);

ObjectMetadata = (function() {
  function ObjectMetadata(object, realm) {
    this.object = object;
    this.realm = realm;
    this.proto = null;
    this.properties = {};
    this.extensible = true;
  }

  ObjectMetadata.prototype.hasDefProperty = function(key) {
    return hasProp(this.properties, key);
  };

  ObjectMetadata.prototype.hasOwnProperty = function(key) {
    return this.hasDefProperty(key) || hasProp(this.object, key);
  };

  ObjectMetadata.prototype.getOwnProperty = function(key) {
    return this.properties[key] || this.object[key];
  };

  ObjectMetadata.prototype.setOwnProperty = function(key, value) {
    return this.object[key] = value;
  };

  ObjectMetadata.prototype.delOwnProperty = function(key) {
    return delete this.properties[key] && delete this.object[key];
  };

  ObjectMetadata.prototype.delDefProperty = function(key) {
    return delete this.properties[key];
  };

  ObjectMetadata.prototype.searchProperty = function(key) {
    var md, prop;
    md = this;
    while (md) {
      if (md.hasOwnProperty(key)) {
        prop = md.getOwnProperty(key);
        break;
      }
      md = md.proto || this.realm.mdproto(md.object);
    }
    return prop;
  };

  ObjectMetadata.prototype.has = function(key, target) {
    var md;
    if (target == null) {
      target = this.object;
    }
    md = this;
    while (md) {
      if (md.hasOwnProperty(key)) {
        return true;
      }
      md = md.proto || this.realm.mdproto(md.object);
    }
    return false;
  };

  ObjectMetadata.prototype.get = function(key, target) {
    var property;
    if (target == null) {
      target = this.object;
    }
    property = this.searchProperty(key);
    if (property instanceof AccessorPropertyDescriptor) {
      return property.get.call(target);
    }
    if (property instanceof DataPropertyDescriptor) {
      return property.value;
    }
    return property;
  };

  ObjectMetadata.prototype.set = function(key, value, target) {
    var property;
    if (target == null) {
      target = this.object;
    }
    property = this.getOwnProperty(key);
    if (property instanceof AccessorPropertyDescriptor) {
      if (property.set) {
        property.set.call(target, value);
        return true;
      }
      return false;
    }
    if (property instanceof DataPropertyDescriptor) {
      if (property.writable) {
        property.value = value;
        return true;
      }
      return false;
    }
    if (property === void 0 && !this.extensible) {
      return false;
    }
    this.setOwnProperty(key, value);
    return true;
  };

  ObjectMetadata.prototype.del = function(key) {
    var property;
    if (!this.hasOwnProperty(key)) {
      return false;
    }
    property = this.getOwnProperty(key);
    if (property instanceof PropertyDescriptor && !property.configurable) {
      return false;
    }
    this.delOwnProperty(key);
    return true;
  };

  ObjectMetadata.prototype.defineProperty = function(key, descriptor) {
    var prop;
    if (!this.extensible) {
      return false;
    }
    if ('value' in descriptor || 'writable' in descriptor) {
      prop = new DataPropertyDescriptor(descriptor.value, descriptor.writable, descriptor.enumerable, descriptor.configurable);
    } else if (typeof descriptor.get === 'function') {
      prop = new AccessorPropertyDescriptor(descriptor.get, descriptor.set, descriptor.enumerable, descriptor.writable);
    } else {
      return;
    }
    this.properties[key] = prop;
    return true;
  };

  ObjectMetadata.prototype.instanceOf = function(klass) {
    var md, proto;
    md = this;
    while (md !== null) {
      if (md.object === klass.prototype) {
        return true;
      }
      proto = md.proto;
      if (!proto) {
        return md.object instanceof klass;
      }
      md = proto;
    }
    return false;
  };

  ObjectMetadata.prototype.isEnumerable = function(k) {
    var v;
    v = this.properties[k] || this.object[k];
    return !(v instanceof PropertyDescriptor) || v.enumerable;
  };

  ObjectMetadata.prototype.ownKeys = function() {
    var k, keys, _ref, _ref1;
    keys = [];
    _ref = this.object;
    for (k in _ref) {
      if (!__hasProp.call(_ref, k)) continue;
      if (this.isEnumerable(k)) {
        keys.push(k);
      }
    }
    _ref1 = this.properties;
    for (k in _ref1) {
      if (!__hasProp.call(_ref1, k)) continue;
      if (this.isEnumerable(k)) {
        keys.push(k);
      }
    }
    return keys;
  };

  ObjectMetadata.prototype.enumerateKeys = function() {
    var keys, md;
    keys = [];
    md = this;
    while (md) {
      keys = keys.concat(md.ownKeys());
      md = md.proto || this.realm.mdproto(md.object);
    }
    return new ArrayIterator(keys);
  };

  return ObjectMetadata;

})();

CowObjectMetadata = (function(_super) {
  __extends(CowObjectMetadata, _super);

  function CowObjectMetadata(object, realm) {
    CowObjectMetadata.__super__.constructor.call(this, object, realm);
    this.exclude = {};
  }

  CowObjectMetadata.prototype.hasOwnProperty = function(key) {
    return hasProp(this.properties, key) || (hasProp(this.object, key) && !hasProp(this.exclude, key));
  };

  CowObjectMetadata.prototype.getOwnProperty = function(key) {
    if (hasProp(this.properties, key)) {
      return this.properties[key];
    }
    if (hasProp(this.object, key) && !hasProp(this.exclude, key)) {
      return this.object[key];
    }
    return void 0;
  };

  CowObjectMetadata.prototype.setOwnProperty = function(key, value) {
    if (hasProp(this.exclude, key)) {
      delete this.exclude[key];
    }
    if (!hasProp(this.properties, key)) {
      this.defineProperty(key, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    return this.properties[key].value = value;
  };

  CowObjectMetadata.prototype.delOwnProperty = function(key) {
    if (hasProp(this.properties, key)) {
      delete this.properties[key];
    }
    return this.exclude[key] = null;
  };

  CowObjectMetadata.prototype.isEnumerable = function(k) {
    if (!CowObjectMetadata.__super__.isEnumerable.call(this, k)) {
      return false;
    }
    return !hasProp(this.exclude, k);
  };

  return CowObjectMetadata;

})(ObjectMetadata);

RestrictedObjectMetadata = (function(_super) {
  __extends(RestrictedObjectMetadata, _super);

  function RestrictedObjectMetadata(object, realm) {
    RestrictedObjectMetadata.__super__.constructor.call(this, object, realm);
    this.leak = {};
  }

  RestrictedObjectMetadata.prototype.hasOwnProperty = function(key) {
    return hasProp(this.properties, key) || (hasProp(this.leak, key) && hasProp(this.object, key) && !hasProp(this.exclude, key));
  };

  RestrictedObjectMetadata.prototype.getOwnProperty = function(key) {
    if (hasProp(this.properties, key)) {
      return this.properties[key];
    }
    if (hasProp(this.leak, key) && hasProp(this.object, key) && !hasProp(this.exclude, key)) {
      return this.object[key];
    }
    return void 0;
  };

  RestrictedObjectMetadata.prototype.isEnumerable = function(k) {
    if (!RestrictedObjectMetadata.__super__.isEnumerable.call(this, k)) {
      return false;
    }
    return hasProp(this.leak, k);
  };

  return RestrictedObjectMetadata;

})(CowObjectMetadata);

exports.ObjectMetadata = ObjectMetadata;

exports.CowObjectMetadata = CowObjectMetadata;

exports.RestrictedObjectMetadata = RestrictedObjectMetadata;


  return module.exports;
})({exports: $$___src_runtime_metadata}, $$___src_runtime_metadata);var $$___src_runtime_regexp_proxy = {};
$$___src_runtime_regexp_proxy = (function(module, exports) {

  var CowObjectMetadata, RegExpProxy, defProp;

CowObjectMetadata = $$___src_runtime_metadata.CowObjectMetadata;

defProp = $$___src_runtime_util.defProp;

RegExpProxy = (function() {
  RegExpProxy.__name__ = 'RegExp';

  function RegExpProxy(regexp, realm) {
    var md;
    this.regexp = regexp;
    this.lastIndex = 0;
    md = new CowObjectMetadata(this, realm);
    md.proto = realm.getNativeMetadata(RegExp.prototype);
    md.defineProperty('global', {
      value: regexp.global
    });
    md.defineProperty('ignoreCase', {
      value: regexp.ignoreCase
    });
    md.defineProperty('multiline', {
      value: regexp.multiline
    });
    md.defineProperty('source', {
      value: regexp.source
    });
    defProp(this, '__md__', {
      value: md,
      writable: true
    });
  }

  return RegExpProxy;

})();

module.exports = RegExpProxy;


  return module.exports;
})({exports: $$___src_runtime_regexp_proxy}, $$___src_runtime_regexp_proxy);var $$___src_vm_opcodes = {};
$$___src_vm_opcodes = (function(module, exports) {

  var ArrayIterator, Counter, Fiber, Op, OpcodeClassFactory, RegExpProxy, Scope, StopIteration, Visitor, VmEvalError, VmReferenceError, VmTypeError, WithScope, calculateOpcodeFactor, call, callArrayConstructor, callDateConstructor, callRegExpConstructor, callm, create, createFunction, createGenerator, createNativeInstance, debug, defProp, esprima, hasProp, opcodes, ret, throwErr, _ref, _ref1, _ref2, _ref3,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

esprima = require('esprima');

Visitor = $$___src_ast_visitor;

_ref = $$___src_runtime_builtin, StopIteration = _ref.StopIteration, ArrayIterator = _ref.ArrayIterator;

_ref1 = $$___src_runtime_util, defProp = _ref1.defProp, hasProp = _ref1.hasProp, create = _ref1.create;

_ref2 = $$___src_runtime_errors, VmTypeError = _ref2.VmTypeError, VmEvalError = _ref2.VmEvalError, VmReferenceError = _ref2.VmReferenceError;

RegExpProxy = $$___src_runtime_regexp_proxy;

_ref3 = $$___src_vm_thread, Fiber = _ref3.Fiber, Scope = _ref3.Scope, WithScope = _ref3.WithScope;

OpcodeClassFactory = (function() {
  var classFactory, id;
  id = 0;
  classFactory = function(name, fn, calculateFactor) {
    var OpcodeClass;
    OpcodeClass = (function() {
      var constructor;
      if (typeof eval !== 'function' || (typeof (constructor = eval("(function " + name + "(args) { if (args) this.args = args; })")) !== 'function')) {
        constructor = function(args) {
          if (args) {
            this.args = args;
          }
        };
        constructor.name = name;
      }
      constructor.prototype.id = id++;
      constructor.prototype.name = name;
      constructor.prototype.exec = fn;
      if (calculateFactor) {
        constructor.prototype.calculateFactor = calculateFactor;
      } else {
        constructor.prototype.factor = calculateOpcodeFactor(fn);
        constructor.prototype.calculateFactor = function() {
          return this.factor;
        };
      }
      return constructor;
    })();
    return OpcodeClass;
  };
  return classFactory;
})();

Counter = (function(_super) {
  __extends(Counter, _super);

  function Counter() {
    this.factor = 0;
    this.current = 0;
  }

  Counter.prototype.CallExpression = function(node) {
    var name;
    node = Counter.__super__.CallExpression.call(this, node);
    if (node.callee.type === 'MemberExpression') {
      if (node.callee.property.type === 'Identifier') {
        name = node.callee.property.name;
      } else if (node.callee.property.type === 'Literal') {
        name = node.callee.property.value;
      } else {
        throw new Error('assert error');
      }
      if (name === 'push') {
        this.current++;
      } else if (name === 'pop') {
        this.current--;
      }
      this.factor = Math.max(this.factor, this.current);
    }
    return node;
  };

  return Counter;

})(Visitor);

calculateOpcodeFactor = function(opcodeFn) {
  var ast, counter;
  ast = esprima.parse("(" + (opcodeFn.toString()) + ")");
  counter = new Counter();
  counter.visit(ast);
  return counter.factor;
};

Op = function(name, fn, factorFn) {
  return OpcodeClassFactory(name, fn, factorFn);
};

opcodes = [
  Op('POP', function(f, s, l) {
    return s.pop();
  }), Op('DUP', function(f, s, l) {
    return s.push(s.top());
  }), Op('SWAP', function(f, s, l) {
    var bot, top;
    top = s.pop();
    bot = s.pop();
    s.push(top);
    return s.push(bot);
  }), Op('RET', function(f, s, l) {
    return ret(f);
  }), Op('RETV', function(f, s, l) {
    f.fiber.rv = s.pop();
    return ret(f);
  }), Op('PAUSE', function(f, s) {
    return f.paused = true;
  }), Op('YIELD', function(f, s) {
    f.fiber.yielded = s.pop();
    return f.fiber.pause();
  }), Op('THROW', function(f, s, l) {
    return throwErr(f, s.pop());
  }), Op('ENTER_GUARD', function(f) {
    return f.guards.push(f.script.guards[this.args[0]]);
  }), Op('EXIT_GUARD', function(f) {
    var currentGuard, specifiedGuard;
    currentGuard = f.guards[f.guards.length - 1];
    specifiedGuard = f.script.guards[this.args[0]];
    if (specifiedGuard === currentGuard) {
      return f.guards.pop();
    }
  }), Op('SR1', function(f, s, l) {
    return f.fiber.r1 = s.pop();
  }), Op('SR2', function(f, s, l) {
    return f.fiber.r2 = s.pop();
  }), Op('SR3', function(f, s, l) {
    return f.fiber.r3 = s.pop();
  }), Op('LR1', function(f, s, l) {
    return s.push(f.fiber.r1);
  }), Op('LR2', function(f, s, l) {
    return s.push(f.fiber.r2);
  }), Op('LR3', function(f, s, l) {
    return s.push(f.fiber.r3);
  }), Op('SREXP', function(f, s, l) {
    return s.fiber.rexp = s.pop();
  }), Op('ITER', function(f, s, l) {
    return callm(f, 0, 'iterator', s.pop());
  }), Op('ENUMERATE', function(f, s, l, r) {
    return s.push(r.enumerateKeys(s.pop()));
  }), Op('NEXT', function(f, s, l) {
    callm(f, 0, 'next', s.pop());
    if (f.error instanceof StopIteration) {
      f.error = null;
      f.paused = false;
      return f.ip = this.args[0];
    }
  }), Op('FUNCTION_SETUP', function(f, s, l) {
    var fn;
    l.set(1, s.pop());
    fn = s.pop();
    if (this.args[0]) {
      return l.set(2, fn);
    }
  }, function() {
    return 0;
  }), Op('GLOBAL', function(f, s, l, r) {
    return s.push(r.global);
  }), Op('REST', function(f, s, l, r) {
    var args, index, varIndex;
    index = this.args[0];
    varIndex = this.args[1];
    args = l.get(1);
    if (index < args.length) {
      return l.set(varIndex, Array.prototype.slice.call(args, index));
    }
  }), Op('NEW', function(f, s, l) {
    return call(f, this.args[0], s.pop(), null, null, true);
  }), Op('CALL', function(f, s, l) {
    return call(f, this.args[0], s.pop(), null, this.args[1]);
  }, function() {
    return 1 - (this.args[0] + 1);
  }), Op('CALLM', function(f, s, l) {
    return callm(f, this.args[0], s.pop(), s.pop(), this.args[1]);
  }, function() {
    return 1 - (this.args[0] + 1 + 1);
  }), Op('GET', function(f, s, l, r) {
    var key, obj;
    obj = s.pop();
    key = s.pop();
    if (obj == null) {
      return throwErr(f, new VmTypeError("Cannot read property '" + key + "' of " + obj));
    }
    return s.push(r.get(obj, key));
  }), Op('SET', function(f, s, l, r) {
    var key, obj, val;
    obj = s.pop();
    key = s.pop();
    val = s.pop();
    if (obj == null) {
      return throwErr(f, new VmTypeError("Cannot set property '" + key + "' of " + obj));
    }
    return s.push(r.set(obj, key, val));
  }), Op('DEL', function(f, s, l, r) {
    var key, obj;
    obj = s.pop();
    key = s.pop();
    if (obj == null) {
      return throwErr(f, new VmTypeError('Cannot convert null to object'));
    }
    return s.push(r.del(obj, key));
  }), Op('GETL', function(f, s, l) {
    var scope, scopeIndex, varIndex;
    scopeIndex = this.args[0];
    varIndex = this.args[1];
    scope = l;
    while (scopeIndex--) {
      scope = scope.parent;
    }
    return s.push(scope.get(varIndex));
  }), Op('SETL', function(f, s, l) {
    var scope, scopeIndex, varIndex;
    scopeIndex = this.args[0];
    varIndex = this.args[1];
    scope = l;
    while (scopeIndex--) {
      scope = scope.parent;
    }
    return s.push(scope.set(varIndex, s.pop()));
  }), Op('GETW', function(f, s, l, r) {
    var idx, key;
    key = this.args[0];
    while (l instanceof WithScope) {
      if (l.has(key)) {
        return s.push(l.get(key));
      }
      l = l.parent;
    }
    while (l instanceof Scope) {
      idx = l.name(key);
      if (idx >= 0) {
        return s.push(l.get(idx));
      }
      l = l.parent;
    }
    if (!hasProp(r.global, key) && !this.args[1]) {
      return throwErr(f, new VmReferenceError("" + key + " is not defined"));
    }
    return s.push(r.global[key]);
  }), Op('SETW', function(f, s, l, r) {
    var idx, key, value;
    key = this.args[0];
    value = s.pop();
    while (l instanceof WithScope) {
      if (l.has(key)) {
        return s.push(l.set(key, value));
      }
      l = l.parent;
    }
    while (l instanceof Scope) {
      idx = l.name(key);
      if (idx >= 0) {
        return s.push(l.set(idx, value));
      }
      l = l.parent;
    }
    return s.push(r.global[key] = value);
  }), Op('GETG', function(f, s, l, r) {
    if (!hasProp(r.global, this.args[0]) && !this.args[1]) {
      return throwErr(f, new VmReferenceError("" + this.args[0] + " is not defined"));
    }
    return s.push(r.global[this.args[0]]);
  }), Op('SETG', function(f, s, l, r) {
    return s.push(r.global[this.args[0]] = s.pop());
  }), Op('ENTER_SCOPE', function(f) {
    return f.scope = new Scope(f.scope, f.script.localNames, f.script.localLength);
  }), Op('EXIT_SCOPE', function(f) {
    return f.scope = f.scope.parent;
  }), Op('ENTER_WITH', function(f, s) {
    return f.scope = new WithScope(f.scope, s.pop());
  }), Op('INV', function(f, s, l, r) {
    return s.push(r.inv(s.pop()));
  }), Op('LNOT', function(f, s, l, r) {
    return s.push(r.lnot(s.pop()));
  }), Op('NOT', function(f, s, l, r) {
    return s.push(r.not(s.pop()));
  }), Op('INC', function(f, s, l, r) {
    return s.push(r.inc(s.pop()));
  }), Op('DEC', function(f, s, l, r) {
    return s.push(r.dec(s.pop()));
  }), Op('ADD', function(f, s, l, r) {
    return s.push(r.add(s.pop(), s.pop()));
  }), Op('SUB', function(f, s, l, r) {
    return s.push(r.sub(s.pop(), s.pop()));
  }), Op('MUL', function(f, s, l, r) {
    return s.push(r.mul(s.pop(), s.pop()));
  }), Op('DIV', function(f, s, l, r) {
    return s.push(r.div(s.pop(), s.pop()));
  }), Op('MOD', function(f, s, l, r) {
    return s.push(r.mod(s.pop(), s.pop()));
  }), Op('SHL', function(f, s, l, r) {
    return s.push(r.shl(s.pop(), s.pop()));
  }), Op('SAR', function(f, s, l, r) {
    return s.push(r.sar(s.pop(), s.pop()));
  }), Op('SHR', function(f, s, l, r) {
    return s.push(r.shr(s.pop(), s.pop()));
  }), Op('OR', function(f, s, l, r) {
    return s.push(r.or(s.pop(), s.pop()));
  }), Op('AND', function(f, s, l, r) {
    return s.push(r.and(s.pop(), s.pop()));
  }), Op('XOR', function(f, s, l, r) {
    return s.push(r.xor(s.pop(), s.pop()));
  }), Op('CEQ', function(f, s, l, r) {
    return s.push(r.ceq(s.pop(), s.pop()));
  }), Op('CNEQ', function(f, s, l, r) {
    return s.push(r.cneq(s.pop(), s.pop()));
  }), Op('CID', function(f, s, l, r) {
    return s.push(r.cid(s.pop(), s.pop()));
  }), Op('CNID', function(f, s, l, r) {
    return s.push(r.cnid(s.pop(), s.pop()));
  }), Op('LT', function(f, s, l, r) {
    return s.push(r.lt(s.pop(), s.pop()));
  }), Op('LTE', function(f, s, l, r) {
    return s.push(r.lte(s.pop(), s.pop()));
  }), Op('GT', function(f, s, l, r) {
    return s.push(r.gt(s.pop(), s.pop()));
  }), Op('GTE', function(f, s, l, r) {
    return s.push(r.gte(s.pop(), s.pop()));
  }), Op('IN', function(f, s, l, r) {
    return s.push(r.has(s.pop(), s.pop()));
  }), Op('INSTANCEOF', function(f, s, l, r) {
    return s.push(r.instanceOf(s.pop(), s.pop()));
  }), Op('TYPEOF', function(f, s, l, r) {
    return s.push(typeof s.pop());
  }), Op('VOID', function(f, s) {
    s.pop();
    return s.push(void 0);
  }), Op('JMP', function(f, s, l) {
    return f.ip = this.args[0];
  }), Op('JMPT', function(f, s, l) {
    if (s.pop()) {
      return f.ip = this.args[0];
    }
  }), Op('JMPF', function(f, s, l) {
    if (!s.pop()) {
      return f.ip = this.args[0];
    }
  }), Op('UNDEF', function(f, s) {
    return s.push(void 0);
  }), Op('LITERAL', function(f, s, l) {
    return s.push(this.args[0]);
  }), Op('STRING_LITERAL', function(f, s, l) {
    return s.push(f.script.strings[this.args[0]]);
  }), Op('REGEXP_LITERAL', function(f, s, l, r) {
    return s.push(new RegExpProxy(f.script.regexps[this.args[0]], r));
  }), Op('OBJECT_LITERAL', function(f, s, l, r) {
    var length, rv;
    length = this.args[0];
    rv = {};
    while (length--) {
      r.set(rv, s.pop(), s.pop());
    }
    return s.push(rv);
  }, function() {
    return 1 - (this.args[0] * 2);
  }), Op('ARRAY_LITERAL', function(f, s, l, r) {
    var length, rv;
    length = this.args[0];
    rv = new Array(length);
    while (length--) {
      rv[length] = s.pop();
    }
    return s.push(rv);
  }, function() {
    return 1 - this.args[0];
  }), Op('FUNCTION', function(f, s, l, r) {
    var scriptIndex;
    scriptIndex = this.args[0];
    return s.push(createFunction(f.script.scripts[scriptIndex], l, r, this.args[1]));
  }), Op('LINE', function(f) {
    return f.setLine(this.args[0]);
  }), Op('COLUMN', function(f) {
    return f.setColumn(this.args[0]);
  }), Op('DEBUG', function(f, s, l) {
    return debug();
  })
];

throwErr = function(frame, err) {
  frame.error = err;
  return frame.paused = true;
};

callm = function(frame, length, key, target, name) {
  var constructor, func, id, realm, stack, targetName;
  stack = frame.evalStack, realm = frame.realm;
  if (target == null) {
    id = 'null';
    if (target === void 0) {
      id = 'undefined';
    }
    return throwErr(frame, new VmTypeError("Cannot call method '" + key + "' of " + id));
  }
  constructor = target.constructor;
  targetName = constructor.__name__ || constructor.name || 'Object';
  name = "" + targetName + "." + name;
  func = realm.get(target, key);
  if (func instanceof Function) {
    return call(frame, length, func, target, name);
  }
  if (func == null) {
    stack.pop();
    return throwErr(frame, new VmTypeError("Object #<" + targetName + "> has no method '" + key + "'"));
  } else {
    stack.pop();
    return throwErr(frame, new VmTypeError("Property '" + key + "' of object #<" + targetName + "> is not a function"));
  }
};

call = function(frame, length, func, target, name, construct) {
  var args, e, fiber, nativeError, push, realm, script, stack, val;
  if (typeof func !== 'function') {
    return throwErr(frame, new VmTypeError("object is not a function"));
  }
  stack = frame.evalStack, fiber = frame.fiber, realm = frame.realm;
  args = {
    length: length,
    callee: func
  };
  while (length) {
    args[--length] = stack.pop();
  }
  target = target || realm.global;
  push = true;
  args = Array.prototype.slice.call(args);
  if (func === Function || func === realm["eval"]) {
    try {
      if (func === Function) {
        stack.push(createFunction(realm.compileFunction(args), null, realm));
      } else {
        script = realm["eval"](frame, args[0]);
        frame.paused = true;
        fiber.pushEvalFrame(frame, script);
      }
    } catch (_error) {
      e = _error;
      throwErr(frame, new VmEvalError(e.message));
    }
    return;
  }
  if (hasProp(func, '__vmfunction__')) {
    func.__callname__ = name;
    func.__fiber__ = fiber;
    func.__construct__ = construct;
    push = false;
  }
  try {
    if (construct) {
      val = createNativeInstance(func, args);
    } else {
      val = func.apply(target, args);
    }
    if (push && !fiber.paused) {
      return stack.push(val);
    }
  } catch (_error) {
    nativeError = _error;
    return throwErr(frame, nativeError);
  }
};

createGenerator = function(caller, script, scope, realm, target, args, fn, callname) {
  var close, fiber, frame, newborn, rv, send, thrw, timeout;
  if (caller) {
    timeout = caller.timeout;
  }
  fiber = new Fiber(realm, timeout);
  frame = fiber.pushFrame(script, target, scope, args, fn, callname, false);
  newborn = true;
  send = function(obj) {
    if (newborn && obj !== void 0) {
      throw new VmTypeError('no argument must be passed when starting generator');
    }
    if (fiber.done()) {
      throw new VmError('generator closed');
    }
    frame = fiber.callStack[fiber.depth];
    if (newborn) {
      newborn = false;
      fiber.run();
    } else {
      frame.evalStack.push(obj);
      fiber.resume();
    }
    if (caller) {
      caller.timeout = fiber.timeout;
    }
    if (fiber.done()) {
      rv.closed = true;
      throw new StopIteration(fiber.rv, 'generator has stopped');
    }
    return fiber.yielded;
  };
  thrw = function(e) {
    if (newborn) {
      close();
      return e;
    }
    if (fiber.done()) {
      throw new VmError('generator closed');
    }
    frame = fiber.callStack[fiber.depth];
    frame.error = e;
    fiber.resume();
    if (caller) {
      caller.timeout = fiber.timeout;
    }
    if (fiber.done()) {
      return fiber.rv;
    }
    return fiber.yielded;
  };
  close = function() {
    if (fiber.done()) {
      return;
    }
    if (newborn) {
      fiber.depth = -1;
    }
    frame = fiber.callStack[fiber.depth];
    frame.evalStack.clear();
    frame.ip = frame.exitIp;
    fiber.resume();
    if (caller) {
      caller.timeout = fiber.timeout;
    }
    return fiber.rv;
  };
  rv = {
    next: send,
    send: send,
    "throw": thrw,
    close: close,
    closed: false,
    iterator: function() {
      return rv;
    }
  };
  return rv;
};

createFunction = function(script, scope, realm, generator) {
  var rv;
  if (generator) {
    rv = function() {
      var fiber, gen, name;
      name = rv.__callname__ || script.name;
      gen = createGenerator(rv.__fiber__, script, scope, realm, this, arguments, rv, name);
      if (!(fiber = rv.__fiber__)) {
        return gen;
      }
      fiber.callStack[fiber.depth].evalStack.push(gen);
      rv.__fiber__ = null;
      return rv.__callname__ = null;
    };
  } else {
    rv = function() {
      var construct, fiber, name, run;
      run = false;
      if (fiber = rv.__fiber__) {
        fiber.callStack[fiber.depth].paused = true;
        rv.__fiber__ = null;
        construct = rv.__construct__;
        rv.__construct__ = null;
      } else {
        fiber = new Fiber(realm);
        run = true;
      }
      name = rv.__callname__ || script.name;
      rv.__callname__ = null;
      fiber.pushFrame(script, this, scope, arguments, rv, name, construct);
      if (run) {
        fiber.run();
        return fiber.rv;
      }
    };
  }
  defProp(rv, '__vmfunction__', {
    value: true
  });
  defProp(rv, '__source__', {
    value: script.source
  });
  defProp(rv, '__name__', {
    value: script.name
  });
  defProp(rv, '__construct__', {
    value: null,
    writable: true
  });
  defProp(rv, '__fiber__', {
    value: null,
    writable: true
  });
  defProp(rv, '__callname__', {
    value: null,
    writable: true
  });
  return rv;
};

ret = function(frame) {
  frame.evalStack.clear();
  return frame.exitIp = frame.ip;
};

debug = function() {};

callDateConstructor = function(a) {
  var rv;
  switch (a.length) {
    case 0:
      rv = new Date();
      break;
    case 1:
      rv = new Date(a[0]);
      break;
    case 2:
      rv = new Date(a[0], a[1]);
      break;
    case 3:
      rv = new Date(a[0], a[1], a[2]);
      break;
    case 4:
      rv = new Date(a[0], a[1], a[2], a[3]);
      break;
    case 5:
      rv = new Date(a[0], a[1], a[2], a[3], a[4]);
      break;
    case 6:
      rv = new Date(a[0], a[1], a[2], a[3], a[4], a[5]);
      break;
    default:
      rv = new Date(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
  }
  return rv;
};

callArrayConstructor = function(a) {
  if (a.length === 1 && (a[0] | 0) === a[0]) {
    return new Array(a[0]);
  }
  return a.slice();
};

callRegExpConstructor = function(a) {
  if (a.length === 1) {
    return new RegExp(a[0]);
  } else {
    return new RegExp(a[0], a[1]);
  }
};

createNativeInstance = function(constructor, args) {
  var constructorProxy, rv;
  if (constructor === Date) {
    return callDateConstructor(args);
  } else if (constructor === Array) {
    return callArrayConstructor(args);
  } else if (constructor === RegExp) {
    return callRegExpConstructor(args);
  } else if (constructor === Number) {
    return new Number(args[0]);
  } else if (constructor === Boolean) {
    return new Boolean(args[0]);
  } else {
    constructorProxy = function() {
      return constructor.apply(this, args);
    };
    constructorProxy.prototype = constructor.prototype;
    rv = new constructorProxy();
    return rv;
  }
};

module.exports = opcodes;


  return module.exports;
})({exports: $$___src_vm_opcodes}, $$___src_vm_opcodes);var $$___src_vm_script = {};
$$___src_vm_script = (function(module, exports) {

  var Script, instructionsFromJson, instructionsToJson, opcodes, regexpFromString, regexpToString, scriptFromJson, scriptToJson;

opcodes = $$___src_vm_opcodes;

scriptToJson = function(script) {
  var guard, regexp, rv, s, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  rv = [script.filename || 0, script.name || 0, instructionsToJson(script.instructions), [], script.localNames, [], script.stackSize, script.strings, []];
  _ref = script.scripts;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    s = _ref[_i];
    rv[3].push(scriptToJson(s));
  }
  _ref1 = script.guards;
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    guard = _ref1[_j];
    rv[5].push([guard.start || -1, guard.handler || -1, guard.finalizer || -1, guard.end || -1]);
  }
  _ref2 = script.regexps;
  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
    regexp = _ref2[_k];
    rv[8].push(regexpToString(regexp));
  }
  rv[9] = script.source || 0;
  return rv;
};

scriptFromJson = function(json) {
  var filename, guard, guards, instructions, localLength, localNames, name, regexp, regexps, s, scripts, source, stackSize, strings, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  filename = json[0] !== 0 ? json[0] : null;
  name = json[1] !== 0 ? json[1] : null;
  instructions = instructionsFromJson(json[2]);
  scripts = [];
  localNames = json[4];
  localLength = localNames.length;
  guards = [];
  stackSize = json[6];
  strings = json[7];
  regexps = [];
  _ref = json[3];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    s = _ref[_i];
    scripts.push(scriptFromJson(s));
  }
  _ref1 = json[5];
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    guard = _ref1[_j];
    guards.push({
      start: guard[0] !== -1 ? guard[0] : null,
      handler: guard[1] !== -1 ? guard[1] : null,
      finalizer: guard[2] !== -1 ? guard[2] : null,
      end: guard[3] !== -1 ? guard[3] : null
    });
  }
  _ref2 = json[8];
  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
    regexp = _ref2[_k];
    regexps.push(regexpFromString(regexp));
  }
  source = json[9] !== 0 ? json[9] : null;
  return new Script(filename, name, instructions, scripts, localNames, localLength, guards, stackSize, strings, regexps, source);
};

instructionsToJson = function(instructions) {
  var a, code, inst, rv, _i, _j, _len, _len1, _ref;
  rv = [];
  for (_i = 0, _len = instructions.length; _i < _len; _i++) {
    inst = instructions[_i];
    code = [inst.id];
    if (inst.args) {
      _ref = inst.args;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        a = _ref[_j];
        if (a != null) {
          code.push(a);
        } else {
          code.push(null);
        }
      }
    }
    rv.push(code);
  }
  return rv;
};

instructionsFromJson = function(instructions) {
  var args, i, inst, klass, opcode, rv, _i, _j, _len, _ref;
  rv = [];
  for (_i = 0, _len = instructions.length; _i < _len; _i++) {
    inst = instructions[_i];
    klass = opcodes[inst[0]];
    args = [];
    for (i = _j = 1, _ref = inst.length; 1 <= _ref ? _j < _ref : _j > _ref; i = 1 <= _ref ? ++_j : --_j) {
      args.push(inst[i]);
    }
    opcode = new klass(args.length ? args : null);
    rv.push(opcode);
  }
  return rv;
};

regexpToString = function(regexp) {
  var rv;
  rv = regexp.source + '/';
  rv += regexp.global ? 'g' : '';
  rv += regexp.ignoreCase ? 'i' : '';
  rv += regexp.multiline ? 'm' : '';
  return rv;
};

regexpFromString = function(str) {
  var flags, sliceIdx, source;
  sliceIdx = str.lastIndexOf('/');
  source = str.slice(0, sliceIdx);
  flags = str.slice(sliceIdx + 1);
  return new RegExp(source, flags);
};

Script = (function() {
  function Script(filename, name, instructions, scripts, localNames, localLength, guards, stackSize, strings, regexps, source) {
    this.filename = filename;
    this.name = name;
    this.instructions = instructions;
    this.scripts = scripts;
    this.localNames = localNames;
    this.localLength = localLength;
    this.guards = guards;
    this.stackSize = stackSize;
    this.strings = strings;
    this.regexps = regexps;
    this.source = source;
  }

  Script.prototype.toJSON = function() {
    return scriptToJson(this);
  };

  Script.fromJSON = scriptFromJson;

  Script.regexpToString = regexpToString;

  return Script;

})();

module.exports = Script;


  return module.exports;
})({exports: $$___src_vm_script}, $$___src_vm_script);var $$___src_vm_emitter = {};
$$___src_vm_emitter = (function(module, exports) {

  var Emitter, FUNCTION, GETG, GETL, Label, POP, SETG, SETL, Script, Visitor, assignOp, binaryOp, hasProp, opcodes, parse, unaryOp,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

parse = require('esprima').parse;

Script = $$___src_vm_script;

opcodes = $$___src_vm_opcodes;

Visitor = $$___src_ast_visitor;

hasProp = $$___src_runtime_util.hasProp;

Emitter = (function(_super) {
  __extends(Emitter, _super);

  function Emitter(scopes, filename, name, original, source) {
    this.filename = filename;
    this.name = name;
    this.original = original;
    this.source = source;
    this.instructions = [];
    this.labels = [];
    this.scripts = [];
    this.tryStatements = [];
    this.withLevel = 0;
    this.scopes = scopes || [];
    if (scopes) {
      this.scriptScope = scopes[0];
    }
    this.localNames = [];
    this.varIndex = 3;
    this.guards = [];
    this.currentLine = -1;
    this.currentColumn = -1;
    this.stringIds = {};
    this.strings = [];
    this.regexpIds = {};
    this.regexps = [];
    this.ignoreNotDefined = 0;
  }

  Emitter.prototype.scope = function(name) {
    var crossFunctionScope, i, scope, _i, _len, _ref;
    i = 0;
    crossFunctionScope = false;
    _ref = this.scopes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      scope = _ref[_i];
      if (hasProp(scope, name)) {
        return [i, scope[name]];
      }
      if (crossFunctionScope || scope === this.scriptScope) {
        crossFunctionScope = true;
        i++;
      }
    }
    return null;
  };

  Emitter.prototype.scopeGet = function(name) {
    var scope;
    if (this.withLevel) {
      this.GETW(name, this.ignoreNotDefined);
      this.ignoreNotDefined = 0;
      return;
    }
    scope = this.scope(name);
    if (scope) {
      this.ignoreNotDefined = 0;
      this.GETL.apply(this, scope);
      return;
    }
    this.GETG(name, this.ignoreNotDefined);
    this.ignoreNotDefined = 0;
  };

  Emitter.prototype.scopeSet = function(name) {
    var scope;
    if (this.withLevel) {
      return this.SETW(name);
    }
    scope = this.scope(name);
    if (scope) {
      return this.SETL.apply(this, scope);
    }
    return this.SETG(name);
  };

  Emitter.prototype.enterScope = function() {
    if (!this.scopes.length) {
      this.ENTER_SCOPE();
    }
    return this.scopes.unshift({});
  };

  Emitter.prototype.exitScope = function() {
    this.scopes.shift();
    if (!this.scopes.length) {
      return this.EXIT_SCOPE();
    }
  };

  Emitter.prototype.addCleanupHook = function(cleanup) {
    var label, tryStatement, _i, _j, _len, _len1, _ref, _ref1, _results;
    _ref = this.labels;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      label = _ref[_i];
      if (label.name) {
        if (!label.cleanup) {
          label.cleanup = [];
        }
        label.cleanup.push(cleanup);
      }
    }
    _ref1 = this.tryStatements;
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      tryStatement = _ref1[_j];
      _results.push(tryStatement.hooks.push(cleanup));
    }
    return _results;
  };

  Emitter.prototype.declareVar = function(name, kind) {
    var scope;
    if (kind === 'const' || kind === 'var') {
      scope = this.scriptScope;
    } else {
      scope = this.scopes[0];
    }
    if (scope && !scope[name]) {
      this.localNames[this.varIndex] = name;
      return scope[name] = this.varIndex++;
    }
  };

  Emitter.prototype.declarePattern = function(node, kind) {
    var el, prop, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _results, _results1;
    if ((_ref = node.type) === 'ArrayPattern' || _ref === 'ArrayExpression') {
      _ref1 = node.elements;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        el = _ref1[_i];
        if (el) {
          _results.push(this.declarePattern(el, kind));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    } else if ((_ref2 = node.type) === 'ObjectPattern' || _ref2 === 'ObjectExpression') {
      _ref3 = node.properties;
      _results1 = [];
      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
        prop = _ref3[_j];
        _results1.push(this.declarePattern(prop.value, kind));
      }
      return _results1;
    } else if (node.type === 'Identifier') {
      return this.declareVar(node.name, kind);
    } else {
      throw new Error('assertion error');
    }
  };

  Emitter.prototype.newLabel = function() {
    return new Label(this);
  };

  Emitter.prototype.label = function(name) {
    var label, _i, _len, _ref;
    if (!name) {
      return this.labels[this.labels.length - 1];
    }
    _ref = this.labels;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      label = _ref[_i];
      if (label.name === name) {
        return label;
      }
    }
    return null;
  };

  Emitter.prototype.pushLabel = function(name, stmt, brk, cont) {
    return this.labels.push({
      name: name,
      stmt: stmt,
      brk: brk,
      cont: cont
    });
  };

  Emitter.prototype.popLabel = function() {
    return this.labels.pop();
  };

  Emitter.prototype.declareFunction = function(name, index, generator) {
    var code, codes, i, opcode, processedLabels, s, scope, _i, _ref, _results;
    this.declareVar(name);
    scope = this.scope(name);
    if (scope) {
      opcode = new SETL(scope);
    } else {
      opcode = new SETG([name]);
    }
    codes = [new FUNCTION([index, generator]), opcode, new POP()];
    this.instructions = codes.concat(this.instructions);
    processedLabels = {};
    _results = [];
    for (i = _i = 0, _ref = this.instructions.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      code = this.instructions[i];
      if (this.scopes.length && code instanceof GETG) {
        if (code.args[0] === name) {
          this.instructions[i] = new GETL(scope);
        }
      }
      if (code instanceof GETL) {
        if (code.args[0] !== 0) {
          s = this.scopes[code.args[0]];
          if (s[name] === code.args[1]) {
            this.instructions[i] = new GETL(scope);
          }
        }
      }
      _results.push(code.forEachLabel(function(l) {
        if (hasProp(processedLabels, l.id)) {
          return l;
        }
        processedLabels[l.id] = null;
        if (l.ip != null) {
          l.ip += 3;
        }
        return l;
      }));
    }
    return _results;
  };

  Emitter.prototype.end = function() {
    var code, current, guard, i, k, localLength, max, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4;
    _ref = this.instructions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      code = _ref[_i];
      code.forEachLabel(function(l) {
        if (l.ip === null) {
          throw new Error('label has not been marked');
        }
        return l.ip;
      });
    }
    _ref1 = this.guards;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      guard = _ref1[_j];
      guard.start = guard.start.ip;
      if (guard.handler) {
        guard.handler = guard.handler.ip;
      }
      if (guard.finalizer) {
        guard.finalizer = guard.finalizer.ip;
      }
      guard.end = guard.end.ip;
    }
    current = max = 2;
    _ref2 = this.instructions;
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      code = _ref2[_k];
      current += code.calculateFactor();
      max = Math.max(current, max);
    }
    localLength = 0;
    _ref3 = this.localNames;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      k = _ref3[_l];
      localLength++;
    }
    for (i = _m = 0, _ref4 = this.scripts.length; 0 <= _ref4 ? _m < _ref4 : _m > _ref4; i = 0 <= _ref4 ? ++_m : --_m) {
      this.scripts[i] = this.scripts[i]();
    }
    return new Script(this.filename, this.name, this.instructions, this.scripts, this.localNames, localLength, this.guards, max, this.strings, this.regexps, this.source);
  };

  Emitter.prototype.visit = function(node) {
    var column, idx, line, _ref;
    if (node == null) {
      return;
    }
    if (node.loc) {
      _ref = node.loc.start, line = _ref.line, column = _ref.column;
      if (line !== this.currentLine) {
        idx = this.instructions.length - 1;
        while (this.instructions[idx] instanceof opcodes.LINE || this.instructions[idx] instanceof opcodes.COLUMN) {
          this.instructions.pop();
          idx--;
        }
        this.LINE(line);
        this.currentLine = line;
      } else if (column !== this.currentColumn) {
        idx = this.instructions.length - 1;
        while (this.instructions[idx] instanceof opcodes.COLUMN) {
          this.instructions.pop();
          idx--;
        }
        this.COLUMN(column);
        this.currentColumn = column;
      }
    }
    return Emitter.__super__.visit.call(this, node);
  };

  Emitter.prototype.BlockStatement = function(node) {
    this.enterScope();
    if (node.blockInit) {
      node.blockInit();
    }
    this.visit(node.body);
    if (node.blockCleanup) {
      node.blockCleanup();
    }
    this.exitScope();
    return node;
  };

  Emitter.prototype.VmLoop = function(node, emitInit, emitBeforeTest, emitUpdate, emitAfterTest) {
    var blockCleanup, blockInit, brk, cont, currentLabel, start,
      _this = this;
    blockInit = function() {
      if (emitInit) {
        emitInit(brk);
      }
      if (emitUpdate) {
        start.mark();
      } else {
        cont.mark();
      }
      if (emitBeforeTest) {
        emitBeforeTest();
        return _this.JMPF(brk);
      }
    };
    blockCleanup = function() {
      if (emitUpdate) {
        cont.mark();
        emitUpdate(brk);
        _this.POP();
        _this.JMP(start);
      }
      if (emitAfterTest) {
        emitAfterTest();
        _this.JMPF(brk);
      }
      return _this.JMP(cont);
    };
    currentLabel = this.label();
    start = this.newLabel();
    cont = this.newLabel();
    brk = this.newLabel();
    if ((currentLabel != null ? currentLabel.stmt : void 0) === node) {
      currentLabel.cont = cont;
    }
    this.pushLabel(null, node, brk, cont);
    if (node.body.type === 'BlockStatement') {
      node.body.blockInit = blockInit;
      node.body.blockCleanup = blockCleanup;
      this.visit(node.body);
    } else {
      this.enterScope();
      blockInit();
      this.visit(node.body);
      blockCleanup();
      this.exitScope();
    }
    brk.mark();
    this.popLabel();
    return node;
  };

  Emitter.prototype.VmIteratorLoop = function(node, pushIterator) {
    var assignNext, assignTarget, emitInit, emitUpdate, labelCleanup,
      _this = this;
    labelCleanup = function(label, isBreak) {
      if (!label || label.stmt !== node || isBreak) {
        return _this.POP();
      }
    };
    emitInit = function(brk) {
      if (node.left.type === 'VariableDeclaration') {
        _this.visit(node.left);
      }
      _this.visit(node.right);
      pushIterator();
      emitUpdate(brk);
      return _this.POP();
    };
    emitUpdate = function(brk) {
      _this.DUP();
      _this.NEXT(brk);
      return _this.visit(assignNext());
    };
    assignNext = function() {
      return {
        loc: node.left.loc,
        type: 'AssignmentExpression',
        operator: '=',
        left: assignTarget
      };
    };
    this.addCleanupHook(labelCleanup);
    assignTarget = node.left;
    if (assignTarget.type === 'VariableDeclaration') {
      assignTarget = node.left.declarations[0].id;
    }
    this.VmLoop(node, emitInit, null, emitUpdate);
    this.POP();
    return node;
  };

  Emitter.prototype.WhileStatement = function(node) {
    var emitBeforeTest,
      _this = this;
    emitBeforeTest = function() {
      return _this.visit(node.test);
    };
    this.VmLoop(node, null, emitBeforeTest);
    return node;
  };

  Emitter.prototype.DoWhileStatement = function(node) {
    var emitAfterTest,
      _this = this;
    emitAfterTest = function() {
      return _this.visit(node.test);
    };
    this.VmLoop(node, null, null, null, emitAfterTest);
    return node;
  };

  Emitter.prototype.ForStatement = function(node) {
    var emitBeforeTest, emitInit, emitUpdate,
      _this = this;
    emitInit = function() {
      _this.visit(node.init);
      if (node.init.type !== 'VariableDeclaration') {
        return _this.POP();
      }
    };
    emitBeforeTest = function() {
      return _this.visit(node.test);
    };
    emitUpdate = function() {
      return _this.visit(node.update);
    };
    this.VmLoop(node, emitInit, emitBeforeTest, emitUpdate);
    return node;
  };

  Emitter.prototype.ForInStatement = function(node) {
    var pushIterator,
      _this = this;
    pushIterator = function() {
      return _this.ENUMERATE();
    };
    this.VmIteratorLoop(node, pushIterator);
    return node;
  };

  Emitter.prototype.ForOfStatement = function(node) {
    var pushIterator,
      _this = this;
    pushIterator = function() {
      return _this.ITER();
    };
    this.VmIteratorLoop(node, pushIterator);
    return node;
  };

  Emitter.prototype.ExpressionStatement = function(node) {
    Emitter.__super__.ExpressionStatement.call(this, node);
    this.SREXP();
    return node;
  };

  Emitter.prototype.IfStatement = function(node) {
    var end, ifTrue;
    ifTrue = this.newLabel();
    end = this.newLabel();
    this.visit(node.test);
    this.JMPT(ifTrue);
    this.visit(node.alternate);
    this.JMP(end);
    ifTrue.mark();
    this.visit(node.consequent);
    end.mark();
    return node;
  };

  Emitter.prototype.LabeledStatement = function(node) {
    var brk;
    brk = this.newLabel();
    this.pushLabel(node.label.name, node.body, brk);
    this.visit(node.body);
    brk.mark();
    this.popLabel();
    return node;
  };

  Emitter.prototype.BreakStatement = function(node) {
    var cleanup, label, _i, _len, _ref;
    if (node.label) {
      label = this.label(node.label.name);
      if (label.cleanup) {
        _ref = label.cleanup;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cleanup = _ref[_i];
          cleanup(label, true);
        }
      }
    } else {
      label = this.label();
    }
    this.JMP(label.brk);
    return node;
  };

  Emitter.prototype.ContinueStatement = function(node) {
    var cleanup, label, _i, _len, _ref;
    if (node.label) {
      label = this.label(node.label.name);
      if (label.cleanup) {
        _ref = label.cleanup;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cleanup = _ref[_i];
          cleanup(label, false);
        }
      }
    } else {
      label = this.label();
    }
    this.JMP(label.cont);
    return node;
  };

  Emitter.prototype.WithStatement = function(node) {
    this.visit(node.object);
    this.ENTER_WITH();
    this.withLevel++;
    this.visit(node.body);
    this.withLevel--;
    this.EXIT_SCOPE();
    return node;
  };

  Emitter.prototype.SwitchStatement = function(node) {
    var brk, clause, nextBlock, nextTest, _i, _len, _ref,
      _this = this;
    brk = this.newLabel();
    this.pushLabel(null, node, brk);
    this.addCleanupHook((function() {
      _this.POP();
      return _this.exitScope();
    }));
    this.enterScope();
    this.visit(node.discriminant);
    nextBlock = this.newLabel();
    _ref = node.cases;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      clause = _ref[_i];
      nextTest = this.newLabel();
      if (clause.test) {
        this.DUP();
        this.visit(clause.test);
        this.CID();
        this.JMPF(nextTest);
        this.JMP(nextBlock);
      }
      if (clause.consequent.length) {
        nextBlock.mark();
        this.visit(clause.consequent);
        nextBlock = this.newLabel();
        this.JMP(nextBlock);
      }
      nextTest.mark();
    }
    nextBlock.mark();
    this.popLabel();
    brk.mark();
    this.POP();
    this.exitScope();
    return node;
  };

  Emitter.prototype.ReturnStatement = function(node) {
    if (node.argument) {
      this.visit(node.argument);
      this.RETV();
    } else {
      this.RET();
    }
    return node;
  };

  Emitter.prototype.ThrowStatement = function(node) {
    Emitter.__super__.ThrowStatement.call(this, node);
    this.THROW();
    return node;
  };

  Emitter.prototype.TryStatement = function(node) {
    var end, finalizer, guard, guardId, handler, hook, start, _i, _len, _ref,
      _this = this;
    if (node.handlers.length > 1) {
      throw new Error('assert error');
    }
    this.tryStatements.push({
      hooks: []
    });
    start = this.newLabel();
    handler = this.newLabel();
    finalizer = this.newLabel();
    end = this.newLabel();
    guard = {
      start: start,
      handler: node.handlers.length ? handler : null,
      finalizer: node.finalizer ? finalizer : null,
      end: end
    };
    this.guards.push(guard);
    guardId = this.guards.length - 1;
    this.ENTER_GUARD(guardId);
    start.mark();
    this.visit(node.block);
    this.JMP(finalizer);
    handler.mark();
    if (node.handlers.length) {
      node.handlers[0].body.blockInit = function() {
        var assign, hook, param, _i, _len, _ref, _results;
        param = node.handlers[0].param;
        _this.declarePattern(param);
        assign = {
          type: 'ExpressionStatement',
          expression: {
            loc: param.loc,
            type: 'AssignmentExpression',
            operator: '=',
            left: param
          }
        };
        _this.visit(assign);
        _ref = _this.tryStatements[_this.tryStatements.length - 1].hooks;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          hook = _ref[_i];
          _results.push(hook());
        }
        return _results;
      };
      this.visit(node.handlers[0].body);
    }
    finalizer.mark();
    if (node.finalizer) {
      this.visit(node.finalizer);
      if (!node.handlers.length) {
        _ref = this.tryStatements[this.tryStatements.length - 1].hooks;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          hook = _ref[_i];
          hook();
        }
        this.EXIT_GUARD(guardId);
        this.PAUSE();
      }
    }
    end.mark();
    this.EXIT_GUARD(guardId);
    this.tryStatements.pop();
    return node;
  };

  Emitter.prototype.DebuggerStatement = function(node) {
    this.DEBUG();
    return node;
  };

  Emitter.prototype.VariableDeclaration = function(node) {
    var decl, _i, _len, _ref;
    _ref = node.declarations;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      decl = _ref[_i];
      decl.kind = node.kind;
    }
    this.visit(node.declarations);
    return node;
  };

  Emitter.prototype.VariableDeclarator = function(node) {
    var assign;
    this.declarePattern(node.id, node.kind);
    if (node.init) {
      assign = {
        type: 'ExpressionStatement',
        expression: {
          loc: node.loc,
          type: 'AssignmentExpression',
          operator: '=',
          left: node.id,
          right: node.init
        }
      };
      this.visit(assign);
    }
    return node;
  };

  Emitter.prototype.ThisExpression = function(node) {
    if (this.scopes.length) {
      this.scopeGet('this');
    } else {
      this.GLOBAL();
    }
    return node;
  };

  Emitter.prototype.ArrayExpression = function(node) {
    Emitter.__super__.ArrayExpression.call(this, node);
    this.ARRAY_LITERAL(node.elements.length);
    return node;
  };

  Emitter.prototype.ObjectExpression = function(node) {
    var property, _i, _len, _ref;
    _ref = node.properties;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      if (property.kind === 'init') {
        this.visit(property.value);
        if (property.key.type === 'Literal') {
          this.visit(property.key);
        } else {
          this.visit({
            type: 'Literal',
            value: property.key.name
          });
        }
      } else {
        throw new Error("property kind '" + property.kind + "' not implemented");
      }
    }
    this.OBJECT_LITERAL(node.properties.length);
    return node;
  };

  Emitter.prototype.VmFunction = function(node) {
    var ecol, eline, emit, functionIndex, name, scol, sline, source, _ref, _ref1, _ref2,
      _this = this;
    _ref = node.loc, (_ref1 = _ref.start, sline = _ref1.line, scol = _ref1.column), (_ref2 = _ref.end, eline = _ref2.line, ecol = _ref2.column);
    source = this.original.slice(sline - 1, eline);
    source[0] = source[0].slice(scol);
    source[source.length - 1] = source[source.length - 1].slice(0, ecol);
    source = source.join('\n');
    name = '<anonymous>';
    if (node.id) {
      name = node.id.name;
    }
    emit = function() {
      var declaration, declarator, def, fn, i, initialScope, len, param, scope, _i;
      initialScope = {
        "this": 0,
        "arguments": 1
      };
      if (node.id) {
        initialScope[name] = 2;
      }
      if (node.lexicalThis) {
        delete initialScope["this"];
      }
      fn = new Emitter([initialScope].concat(_this.scopes), _this.filename, name, _this.original, source);
      fn.FUNCTION_SETUP(node.id != null);
      len = node.params.length;
      if (node.rest) {
        fn.declareVar(node.rest.name);
        scope = fn.scope(node.rest.name);
        fn.REST(len, scope[1]);
      }
      for (i = _i = 0; 0 <= len ? _i < len : _i > len; i = 0 <= len ? ++_i : --_i) {
        param = node.params[i];
        def = node.defaults[i];
        declaration = parse("var placeholder = arguments[" + i + "] || 0;").body[0];
        declarator = declaration.declarations[0];
        declarator.id = param;
        if (def) {
          declarator.init.right = def;
        } else {
          declarator.init = declarator.init.left;
        }
        fn.visit(declaration);
      }
      if (node.expression) {
        fn.visit(node.body);
        fn.RETV();
      } else {
        fn.visit(node.body.body);
      }
      return fn.end();
    };
    functionIndex = this.scripts.length;
    this.scripts.push(emit);
    if (node.isExpression) {
      this.FUNCTION(functionIndex, node.generator);
    }
    if (node.declare) {
      this.declareFunction(node.declare, functionIndex, node.generator);
    }
    return node;
  };

  Emitter.prototype.FunctionDeclaration = function(node) {
    node.isExpression = false;
    node.declare = node.id.name;
    this.VmFunction(node);
    return node;
  };

  Emitter.prototype.FunctionExpression = function(node) {
    node.isExpression = true;
    node.declare = false;
    this.VmFunction(node);
    return node;
  };

  Emitter.prototype.ArrowFunctionExpression = function(node) {
    node.isExpression = true;
    node.declare = false;
    node.lexicalThis = true;
    this.VmFunction(node);
    return node;
  };

  Emitter.prototype.SequenceExpression = function(node) {
    var i, _i, _ref;
    for (i = _i = 0, _ref = node.expressions.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.visit(node.expressions[i]);
      this.POP();
    }
    this.visit(node.expressions[i]);
    return node;
  };

  Emitter.prototype.UnaryExpression = function(node) {
    if (node.operator === 'delete') {
      if (node.argument.type === 'MemberExpression') {
        this.visitProperty(node.argument);
        this.visit(node.argument.object);
        this.DEL();
      } else if (node.argument.type === 'Identifier' && !this.scopes.length) {
        this.LITERAL(node.argument.name);
        this.GLOBAL();
        this.DEL();
      } else {
        this.LITERAL(false);
      }
    } else {
      if (node.operator === 'typeof' && node.argument.type === 'Identifier') {
        this.ignoreNotDefined = 1;
      }
      Emitter.__super__.UnaryExpression.call(this, node);
      this[unaryOp[node.operator]]();
    }
    return node;
  };

  Emitter.prototype.BinaryExpression = function(node) {
    Emitter.__super__.BinaryExpression.call(this, node);
    this[binaryOp[node.operator]]();
    return node;
  };

  Emitter.prototype.LogicalExpression = function(node) {
    var evalEnd;
    evalEnd = this.newLabel();
    this.visit(node.left);
    this.DUP();
    if (node.operator === '||') {
      this.JMPT(evalEnd);
    } else {
      this.JMPF(evalEnd);
    }
    this.POP();
    this.visit(node.right);
    evalEnd.mark();
    return node;
  };

  Emitter.prototype.ConditionalExpression = function(node) {
    this.IfStatement(node);
    return node;
  };

  Emitter.prototype.NewExpression = function(node) {
    this.visit(node["arguments"]);
    this.visit(node.callee);
    this.NEW(node["arguments"].length);
    return node;
  };

  Emitter.prototype.CallExpression = function(node) {
    var fname, len;
    len = node["arguments"].length;
    this.visit(node["arguments"]);
    if (node.callee.type === 'MemberExpression') {
      this.visit(node.callee.object);
      this.SR1();
      this.LR1();
      this.visitProperty(node.callee);
      if (node.callee.property.type === 'Identifier') {
        fname = node.callee.property.name;
      }
      this.CALLM(len, fname);
    } else {
      this.visit(node.callee);
      if (node.callee.type === 'Identifier') {
        fname = node.callee.name;
      }
      this.CALL(len, fname);
    }
    return node;
  };

  Emitter.prototype.visitProperty = function(memberExpression) {
    if (memberExpression.computed) {
      return this.visit(memberExpression.property);
    } else if (memberExpression.property.type === 'Identifier') {
      return this.LITERAL(memberExpression.property.name);
    } else if (memberExpression.property.type === 'Literal') {
      return this.LITERAL(memberExpression.property.value);
    } else {
      throw new Error('invalid assert');
    }
  };

  Emitter.prototype.MemberExpression = function(node) {
    this.visitProperty(node);
    this.visit(node.object);
    this.GET();
    return node;
  };

  Emitter.prototype.AssignmentExpression = function(node) {
    var childAssignment, element, index, property, source, target, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
    if (node.right) {
      if (node.right.type === 'MemberExpression' && !node.right.object) {
        this.visitProperty(node.right);
        this.SWAP();
        this.GET();
      } else {
        this.visit(node.right);
      }
    }
    if ((_ref = node.left.type) === 'ArrayPattern' || _ref === 'ArrayExpression' || _ref === 'ObjectPattern' || _ref === 'ObjectExpression') {
      if ((_ref1 = node.left.type) === 'ArrayPattern' || _ref1 === 'ArrayExpression') {
        index = 0;
        _ref2 = node.left.elements;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          element = _ref2[_i];
          if (element) {
            this.DUP();
            childAssignment = {
              operator: node.operator,
              type: 'AssignmentExpression',
              left: element,
              right: {
                type: 'MemberExpression',
                property: {
                  type: 'Literal',
                  value: index
                }
              }
            };
            this.visit(childAssignment);
            this.POP();
          }
          index++;
        }
      } else {
        _ref3 = node.left.properties;
        for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
          property = _ref3[_j];
          this.DUP();
          source = property.key;
          target = property.value;
          childAssignment = {
            operator: node.operator,
            type: 'AssignmentExpression',
            left: target,
            right: {
              type: 'MemberExpression',
              computed: true,
              property: {
                type: 'Literal',
                value: source.name
              }
            }
          };
          this.visit(childAssignment);
          this.POP();
        }
      }
      return;
    }
    if (node.left.type === 'MemberExpression') {
      this.visitProperty(node.left);
      this.visit(node.left.object);
      this.SR2();
      this.SR1();
      if (node.operator !== '=') {
        this.LR1();
        this.LR2();
        this.GET();
        this[binaryOp[node.operator.slice(0, node.operator.length - 1)]]();
        this.LR1();
        this.LR2();
        this.SET();
      } else {
        this.LR1();
        this.LR2();
        this.SET();
      }
    } else {
      if (node.operator !== '=') {
        this.scopeGet(node.left.name);
        this.SWAP();
        this[binaryOp[node.operator.slice(0, node.operator.length - 1)]]();
      }
      this.scopeSet(node.left.name);
    }
    return node;
  };

  Emitter.prototype.UpdateExpression = function(node) {
    if (node.argument.type === 'MemberExpression') {
      this.visitProperty(node.argument);
      this.visit(node.argument.object);
      this.SR2();
      this.SR1();
      this.LR1();
      this.LR2();
      this.GET();
      this.SR3();
      this.LR3();
      if (node.operator === '++') {
        this.INC();
      } else {
        this.DEC();
      }
      this.LR1();
      this.LR2();
      this.SET();
    } else {
      this.scopeGet(node.argument.name);
      this.SR3();
      this.LR3();
      if (node.operator === '++') {
        this.INC();
      } else {
        this.DEC();
      }
      this.scopeSet(node.argument.name);
    }
    if (!node.prefix) {
      this.POP();
      this.LR3();
    }
    return node;
  };

  Emitter.prototype.Identifier = function(node) {
    this.scopeGet(node.name);
    return node;
  };

  Emitter.prototype.Literal = function(node) {
    var id, idx, val;
    val = node.value;
    if (typeof val === 'undefined') {
      this.UNDEF();
    } else if (typeof val === 'string') {
      if (!hasProp(this.stringIds, val)) {
        this.strings.push(val);
        idx = this.strings.length - 1;
        this.stringIds[val] = idx;
      }
      idx = this.stringIds[val];
      this.STRING_LITERAL(idx);
    } else if (val instanceof RegExp) {
      id = Script.regexpToString(val);
      if (!hasProp(this.regexpIds, id)) {
        this.regexps.push(val);
        idx = this.regexps.length - 1;
        this.regexpIds[id] = idx;
      }
      idx = this.regexpIds[id];
      this.REGEXP_LITERAL(idx);
    } else {
      this.LITERAL(val);
    }
    return node;
  };

  Emitter.prototype.YieldExpression = function(node) {
    this.visit(node.argument);
    this.YIELD();
    return node;
  };

  Emitter.prototype.ComprehensionExpression = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ComprehensionBlock = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ClassExpression = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ClassBody = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ClassDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ClassHeritage = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ExportBatchSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ExportSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ExportDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ImportSpecifier = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ImportDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.MethodDefinition = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.Property = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.ModuleDeclaration = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.SpreadElement = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.TemplateElement = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.TaggedTemplateExpression = function(node) {
    throw new Error('not implemented');
  };

  Emitter.prototype.TemplateLiteral = function(node) {
    throw new Error('not implemented');
  };

  return Emitter;

})(Visitor);

(function() {
  var opcode, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = opcodes.length; _i < _len; _i++) {
    opcode = opcodes[_i];
    _results.push((function(opcode) {
      opcodes[opcode.prototype.name] = opcode;
      opcode.prototype.forEachLabel = function(cb) {
        var i, _j, _ref, _results1;
        if (this.args) {
          _results1 = [];
          for (i = _j = 0, _ref = this.args.length; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
            if (this.args[i] instanceof Label) {
              _results1.push(this.args[i] = cb(this.args[i]));
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        }
      };
      return Emitter.prototype[opcode.prototype.name] = function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (!args.length) {
          args = null;
        }
        this.instructions.push(new opcode(args));
      };
    })(opcode));
  }
  return _results;
})();

Label = (function() {
  Label.id = 1;

  function Label(emitter) {
    this.emitter = emitter;
    this.id = Label.id++;
    this.ip = null;
  }

  Label.prototype.mark = function() {
    return this.ip = this.emitter.instructions.length;
  };

  return Label;

})();

GETL = opcodes.GETL, SETL = opcodes.SETL, GETG = opcodes.GETG, SETG = opcodes.SETG, FUNCTION = opcodes.FUNCTION, POP = opcodes.POP;

unaryOp = {
  '-': 'INV',
  '!': 'LNOT',
  '~': 'NOT',
  'typeof': 'TYPEOF',
  'void': 'VOID'
};

binaryOp = {
  '==': 'CEQ',
  '!=': 'CNEQ',
  '===': 'CID',
  '!==': 'CNID',
  '<': 'LT',
  '<=': 'LTE',
  '>': 'GT',
  '>=': 'GTE',
  '<<': 'SHL',
  '>>': 'SAR',
  '>>>': 'SHR',
  '+': 'ADD',
  '-': 'SUB',
  '*': 'MUL',
  '/': 'DIV',
  '%': 'MOD',
  '|': 'OR',
  '&': 'AND',
  '^': 'XOR',
  'in': 'IN',
  'instanceof': 'INSTANCEOF'
};

assignOp = {
  '+=': 'ADD',
  '-=': 'SUB',
  '*=': 'MUL',
  '/=': 'DIV',
  '%=': 'MOD',
  '<<=': 'SHL',
  '>>=': 'SAR',
  '>>>=': 'SHR',
  '|=': 'OR',
  '&=': 'AND',
  '^=': 'XOR'
};

module.exports = Emitter;


  return module.exports;
})({exports: $$___src_vm_emitter}, $$___src_vm_emitter);var $$___src_runtime_realm = {};
$$___src_runtime_realm = (function(module, exports) {

  var ArrayIterator, CowObjectMetadata, ObjectMetadata, Realm, RegExpProxy, RestrictedObjectMetadata, StopIteration, VmError, VmEvalError, VmRangeError, VmReferenceError, VmSyntaxError, VmTypeError, VmURIError, create, defProp, hasProp, isArray, prototypeOf, runtimeProperties, _ref, _ref1, _ref2, _ref3,
  __hasProp = {}.hasOwnProperty;

_ref = $$___src_runtime_errors, VmError = _ref.VmError, VmEvalError = _ref.VmEvalError, VmRangeError = _ref.VmRangeError, VmReferenceError = _ref.VmReferenceError, VmSyntaxError = _ref.VmSyntaxError, VmTypeError = _ref.VmTypeError, VmURIError = _ref.VmURIError;

_ref1 = $$___src_runtime_metadata, ObjectMetadata = _ref1.ObjectMetadata, CowObjectMetadata = _ref1.CowObjectMetadata, RestrictedObjectMetadata = _ref1.RestrictedObjectMetadata;

_ref2 = $$___src_runtime_util, defProp = _ref2.defProp, isArray = _ref2.isArray, prototypeOf = _ref2.prototypeOf, create = _ref2.create, hasProp = _ref2.hasProp;

RegExpProxy = $$___src_runtime_regexp_proxy;

_ref3 = $$___src_runtime_builtin, ArrayIterator = _ref3.ArrayIterator, StopIteration = _ref3.StopIteration;

runtimeProperties = {
  '__mdid__': null,
  '__md__': null,
  '__vmfunction__': null,
  '__fiber__': null,
  '__callname__': null,
  '__construct__': null,
  '__source__': null,
  '__name__': null
};

Realm = (function() {
  function Realm(merge) {
    var currentId, defineProperty, getOwnPropertyDescriptor, getPrototypeOf, global, hasOwnProperty, k, nativeMetadata, register, v,
      _this = this;
    global = {
      undefined: void 0,
      Object: Object,
      Function: Function,
      Number: Number,
      Boolean: Boolean,
      String: String,
      Array: Array,
      Date: Date,
      RegExp: RegExp,
      Error: VmError,
      EvalError: VmEvalError,
      RangeError: VmRangeError,
      ReferenceError: VmReferenceError,
      SyntaxError: VmSyntaxError,
      TypeError: VmTypeError,
      URIError: VmURIError,
      StopIteration: StopIteration,
      Math: Math,
      JSON: JSON,
      parseInt: parseInt,
      parseFloat: parseFloat
    };
    global.global = global;
    nativeMetadata = {};
    currentId = 0;
    hasOwnProperty = function(obj, key) {
      var md, mdid, objType, type;
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (hasProp(runtimeProperties, key)) {
        if (objType) {
          if (hasProp(obj, '__mdid__')) {
            md = nativeMetadata[obj.__mdid__];
          } else if (hasProp(obj, '__md__')) {
            md = obj.__md__;
          }
          if (md) {
            return md.hasDefProperty(key);
          }
        }
        return false;
      }
      mdid = obj.__mdid__;
      md = nativeMetadata[obj.__mdid__];
      if (md && md.object === obj || !objType) {
        return md.hasOwnProperty(key, obj);
      }
      if (hasProp(obj, '__md__')) {
        return obj.__md__.hasOwnProperty(key);
      }
      return hasProp(obj, key);
    };
    register = function(obj, restrict) {
      var k, type, _i, _len;
      if (!hasProp(obj, '__mdid__')) {
        defProp(obj, '__mdid__', {
          value: currentId + 1,
          writable: true
        });
      }
      currentId = Math.max(obj.__mdid__, currentId);
      if (hasProp(nativeMetadata, obj.__mdid__)) {
        return;
      }
      type = typeof restrict;
      if (type === 'boolean' && type) {
        return nativeMetadata[obj.__mdid__] = new CowObjectMetadata(obj, _this);
      }
      if (type === 'object') {
        nativeMetadata[obj.__mdid__] = new RestrictedObjectMetadata(obj, _this);
        if (isArray(restrict)) {
          for (_i = 0, _len = restrict.length; _i < _len; _i++) {
            k = restrict[_i];
            if (hasProp(obj, k)) {
              nativeMetadata[obj.__mdid__].leak[k] = null;
              register(obj[k], true);
            }
          }
        } else {
          for (k in restrict) {
            if (!__hasProp.call(restrict, k)) continue;
            if (hasProp(obj, k)) {
              nativeMetadata[obj.__mdid__].leak[k] = null;
              register(obj[k], restrict[k]);
            }
          }
        }
        return;
      }
      return nativeMetadata[obj.__mdid__] = new ObjectMetadata(obj);
    };
    getPrototypeOf = function(obj) {
      var proto;
      if (hasProp(obj, '__mdid__')) {
        proto = nativeMetadata[obj.__mdid__].proto;
      } else if (hasProp(obj, '__md__')) {
        proto = obj.__md__.proto;
      }
      if (proto) {
        return proto;
      }
      return prototypeOf(obj);
    };
    getOwnPropertyDescriptor = function(obj, key) {};
    defineProperty = function(obj, key, descriptor) {
      var objType, type;
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (objType) {
        if (hasProp(obj, '__mdid__')) {
          nativeMetadata[obj.__mdid__].defineProperty(key, descriptor);
        } else {
          if (!hasProp(runtimeProperties, key) && hasProp(descriptor, 'value') && hasProp(descriptor, 'writable') && descriptor.writable && hasProp(descriptor, 'enumerable') && descriptor.enumerable && hasProp(descriptor, 'configurable') && descriptor.configurable) {
            obj[key] = descriptor.value;
          } else {
            if (!hasProp(obj, '__md__')) {
              defProp(obj, '__md__', {
                value: new ObjectMetadata(obj, _this),
                writable: true
              });
            }
            obj.__md__.defineProperty(key, descriptor);
          }
        }
      }
      return void 0;
    };
    register(Object, {
      'prototype': ['constructor', 'toString']
    });
    register(Function, {
      'prototype': ['constructor', 'apply', 'call', 'toString']
    });
    register(Number, {
      'isNaN': true,
      'isFinite': true,
      'prototype': ['constructor', 'toExponential', 'toFixed', 'toLocaleString', 'toPrecision', 'toString', 'valueOf']
    });
    register(Boolean, {
      'prototype': ['constructor', 'toString', 'valueOf']
    });
    register(String, {
      'fromCharCode': true,
      'prototype': ['constructor', 'charAt', 'charCodeAt', 'concat', 'contains', 'indexOf', 'lastIndexOf', 'replace', 'search', 'slice', 'split', 'substr', 'substring', 'toLowerCase', 'toString', 'toUpperCase', 'valueOf']
    });
    register(Array, {
      'isArray': true,
      'every': true,
      'prototype': ['constructor', 'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift', 'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf', 'forEach', 'map', 'reduce', 'reduceRight', 'filter', 'some', 'every']
    });
    register(Date, {
      'now': true,
      'parse': true,
      'UTC': true,
      'prototype': ['constructor', 'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds', 'getTime', 'getTimezoneOffset', 'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds', 'getUTCMinutes', 'getUTCSeconds', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setUTCDate', 'setUTCDay', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCSeconds', 'toDateString', 'toISOString', 'toJSON', 'toLocaleDateString', 'toLocaleString', 'toLocaleTimeString', 'toString', 'toTimeString', 'toUTCString', 'valueOf']
    });
    register(RegExp, {
      'prototype': ['constructor', 'exec', 'test', 'toString']
    });
    register(Math, ['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor', 'imul', 'log', 'max', 'min', 'pow', 'random', 'round', 'sin', 'sqrt', 'tan']);
    register(JSON, ['parse', 'stringify']);
    register(parseFloat, true);
    register(parseInt, true);
    register(ArrayIterator, ['prototype']);
    register(RegExpProxy, ['prototype']);
    nativeMetadata[Object.__mdid__].properties = {
      create: create,
      getPrototypeOf: getPrototypeOf,
      defineProperty: defineProperty
    };
    nativeMetadata[Object.prototype.__mdid__].properties = {
      hasOwnProperty: function(key) {
        return hasOwnProperty(this, key);
      }
    };
    nativeMetadata[Function.prototype.__mdid__].properties = {
      toString: function() {
        if (this.__vmfunction__) {
          return this.__source__;
        }
        return this.toString();
      }
    };
    nativeMetadata[Array.prototype.__mdid__].properties = {
      iterator: function() {
        return new ArrayIterator(this);
      }
    };
    nativeMetadata[String.prototype.__mdid__].properties = {
      match: function(obj) {
        if (obj instanceof RegExpProxy) {
          return this.match(obj.regexp);
        }
        return this.match(obj);
      },
      replace: function(obj) {
        var args;
        args = Array.prototype.slice.call(arguments);
        if (obj instanceof RegExpProxy) {
          args[0] = obj.regexp;
        }
        return this.replace.apply(this, args);
      }
    };
    nativeMetadata[RegExp.prototype.__mdid__].properties = {
      exec: function(str) {
        var rv;
        if (this instanceof RegExpProxy) {
          this.regexp.lastIndex = this.lastIndex;
          rv = this.regexp.exec(str);
          this.lastIndex = this.regexp.lastIndex;
          return rv;
        }
        return this.exec(str);
      },
      test: function(str) {
        var rv;
        if (this instanceof RegExpProxy) {
          this.regexp.lastIndex = this.lastIndex;
          rv = this.regexp.test(str);
          this.lastIndex = this.regexp.lastIndex;
          return rv;
        }
        return this.test(str);
      },
      toString: function() {
        if (this instanceof RegExpProxy) {
          return this.regexp.toString();
        }
        return this.toString();
      }
    };
    this.mdproto = function(obj) {
      var proto;
      proto = prototypeOf(obj);
      if (proto) {
        return nativeMetadata[proto.__mdid__];
      }
    };
    this.has = function(obj, key) {
      var md, mdid, objType, type;
      if (obj == null) {
        return false;
      }
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (hasProp(runtimeProperties, key)) {
        if (objType) {
          if (hasProp(obj, '__mdid__')) {
            md = nativeMetadata[obj.__mdid__];
          } else if (hasProp(obj, '__md__')) {
            md = obj.__md__;
          }
          if (md) {
            return md.hasDefProperty(key);
          }
          return this.has(prototypeOf(obj), key);
        }
        return false;
      }
      mdid = obj.__mdid__;
      md = nativeMetadata[obj.__mdid__];
      if (md && md.object === obj || !objType) {
        return md.has(key, obj);
      }
      if (hasProp(obj, '__md__')) {
        return obj.__md__.has(key);
      }
      if (hasProp(obj, key)) {
        return true;
      }
      return this.has(prototypeOf(obj), key);
    };
    this.get = function(obj, key) {
      var md, mdid, objType, type;
      if (obj == null) {
        return void 0;
      }
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (hasProp(runtimeProperties, key)) {
        if (objType) {
          if (hasProp(obj, '__mdid__')) {
            md = nativeMetadata[obj.__mdid__];
          } else if (hasProp(obj, '__md__')) {
            md = obj.__md__;
          }
          if (md && md.hasDefProperty(key)) {
            return md.get(key);
          }
          return this.get(prototypeOf(obj), key);
        } else {
          return nativeMetadata[obj.__mdid__].get(key);
        }
        return void 0;
      }
      if (type === 'string' && typeof key === 'number' || key === 'length') {
        return obj[key];
      }
      mdid = obj.__mdid__;
      md = nativeMetadata[obj.__mdid__];
      if (md && md.object === obj || !objType) {
        return md.get(key, obj);
      }
      if (hasProp(obj, '__md__')) {
        return obj.__md__.get(key);
      }
      if (hasProp(obj, key)) {
        return obj[key];
      }
      return this.get(prototypeOf(obj), key);
    };
    this.set = function(obj, key, val) {
      var md, objType, type;
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (hasProp(runtimeProperties, key)) {
        if (objType) {
          if (hasProp(obj, '__mdid__')) {
            md = nativeMetadata[obj.__mdid__];
          } else {
            if (!hasProp(obj, '__md__')) {
              defProp(obj, '__md__', {
                value: new ObjectMetadata(obj, this),
                writable: true
              });
            }
            md = obj.__md__;
          }
          if (!md.hasDefProperty(key)) {
            md.defineProperty(key, {
              value: val,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
          md.set(key, val);
        }
        return val;
      }
      if (objType) {
        if (hasProp(obj, '__md__')) {
          obj.__md__.set(key, val);
        } else if (hasProp(obj, '__mdid__')) {
          nativeMetadata[obj.__mdid__].set(key, val);
        } else {
          obj[key] = val;
        }
      }
      return val;
    };
    this.del = function(obj, key) {
      var objType, type;
      type = typeof obj;
      objType = type === 'object' || type === 'function';
      if (hasProp(runtimeProperties, key)) {
        if (objType) {
          if (hasProp(obj, '__mdid__')) {
            return nativeMetadata[obj.__mdid__].del(key);
          } else if (hasProp(obj, '__md__')) {
            return obj.__md__.delDefProperty(key);
          }
        }
        return true;
      }
      if (objType) {
        if (type === 'function' && key === 'prototype') {
          return false;
        }
        if (hasProp(obj, '__md__')) {
          return obj.__md__.del(key);
        } else if (hasProp(obj, '__mdid__')) {
          return nativeMetadata[obj.__mdid__].del(key);
        } else {
          return delete obj[key];
        }
      }
      return true;
    };
    this.instanceOf = function(klass, obj) {
      var _ref4;
      if ((obj == null) || ((_ref4 = typeof obj) !== 'object' && _ref4 !== 'function')) {
        return false;
      }
      if (hasProp(obj, '__mdid__')) {
        return nativeMetadata[obj.__mdid__].instanceOf(klass);
      }
      if (hasProp(obj, '__md__')) {
        return obj.__md__.instanceOf(klass);
      }
      return obj instanceof klass;
    };
    this.getNativeMetadata = function(obj) {
      return nativeMetadata[obj.__mdid__];
    };
    this.enumerateKeys = function(obj) {
      var key, keys;
      if (typeof obj === 'object') {
        if (hasProp(obj, '__md__')) {
          return obj.__md__.enumerateKeys();
        }
      }
      keys = [];
      for (key in obj) {
        if (key !== '__mdid__') {
          keys.push(key);
        }
      }
      return new ArrayIterator(keys);
    };
    for (k in merge) {
      if (!__hasProp.call(merge, k)) continue;
      v = merge[k];
      global[k] = v;
    }
    this.global = global;
    this.registerNative = register;
  }

  Realm.prototype.inv = function(o) {
    return -o;
  };

  Realm.prototype.lnot = function(o) {
    return !o;
  };

  Realm.prototype.not = function(o) {
    return ~o;
  };

  Realm.prototype.inc = function(o) {
    return o + 1;
  };

  Realm.prototype.dec = function(o) {
    return o - 1;
  };

  Realm.prototype.add = function(r, l) {
    return l + r;
  };

  Realm.prototype.sub = function(r, l) {
    return l - r;
  };

  Realm.prototype.mul = function(r, l) {
    return l * r;
  };

  Realm.prototype.div = function(r, l) {
    return l / r;
  };

  Realm.prototype.mod = function(r, l) {
    return l % r;
  };

  Realm.prototype.shl = function(r, l) {
    return l << r;
  };

  Realm.prototype.sar = function(r, l) {
    return l >> r;
  };

  Realm.prototype.shr = function(r, l) {
    return l >>> r;
  };

  Realm.prototype.or = function(r, l) {
    return l | r;
  };

  Realm.prototype.and = function(r, l) {
    return l & r;
  };

  Realm.prototype.xor = function(r, l) {
    return l ^ r;
  };

  Realm.prototype.ceq = function(r, l) {
    return l == r;
  };

  Realm.prototype.cneq = function(r, l) {
    return l != r;
  };

  Realm.prototype.cid = function(r, l) {
    return l === r;
  };

  Realm.prototype.cnid = function(r, l) {
    return l !== r;
  };

  Realm.prototype.lt = function(r, l) {
    return l < r;
  };

  Realm.prototype.lte = function(r, l) {
    return l <= r;
  };

  Realm.prototype.gt = function(r, l) {
    return l > r;
  };

  Realm.prototype.gte = function(r, l) {
    return l >= r;
  };

  return Realm;

})();

module.exports = Realm;


  return module.exports;
})({exports: $$___src_runtime_realm}, $$___src_runtime_realm);var $$___src_vm_index = {};
$$___src_vm_index = (function(module, exports) {

  var ConstantFolder, Emitter, Fiber, Realm, Script, Transformer, Vm, compile, esprima;

esprima = require('esprima');

Transformer = $$___src_ast_transformer;

Realm = $$___src_runtime_realm;

ConstantFolder = $$___src_ast_constant_folder;

Emitter = $$___src_vm_emitter;

Fiber = $$___src_vm_thread.Fiber;

Script = $$___src_vm_script;

Vm = (function() {
  function Vm(merge, allowEval) {
    if (allowEval == null) {
      allowEval = false;
    }
    this.realm = new Realm(merge);
    if (allowEval) {
      this.realm.compileFunction = Vm.compileFunction;
      this.realm["eval"] = this.realm.global["eval"] = Vm.compileEval;
    }
  }

  Vm.prototype["eval"] = function(string, filename, timeout) {
    return this.run(Vm.compile(string, filename), timeout);
  };

  Vm.prototype.run = function(script, timeout) {
    var fiber;
    fiber = this.createFiber(script, timeout);
    fiber.run();
    if (!fiber.paused) {
      return fiber.rexp;
    }
  };

  Vm.prototype.createFiber = function(script, timeout) {
    var fiber;
    fiber = new Fiber(this.realm, timeout);
    fiber.pushFrame(script, this.realm.global);
    return fiber;
  };

  Vm.compile = function(source, filename) {
    var emitter;
    if (filename == null) {
      filename = '<script>';
    }
    emitter = new Emitter(null, filename, null, source.split('\n'));
    return compile(source, emitter);
  };

  Vm.compileEval = function(frame, source) {
    var emitter, names, scope, scopes;
    scopes = [];
    scope = frame.scope;
    while (scope) {
      scopes.push(scope.namesHash());
      scope = scope.parent;
    }
    emitter = new Emitter(scopes, '<eval>', 'eval', source.split('\n'));
    if (frame.scope) {
      emitter.varIndex = frame.scope.data.length;
      names = frame.scope.names.slice();
      names[0] = 'this';
      names[1] = 'arguments';
      emitter.localNames = names;
    }
    return compile(source, emitter);
  };

  Vm.compileFunction = function(args) {
    var body, emitter, functionArgs, i, program, source, _i, _ref;
    functionArgs = [];
    if (args.length > 1) {
      for (i = _i = 0, _ref = args.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        functionArgs = functionArgs.concat(args[i].split(','));
      }
    }
    body = args[args.length - 1];
    source = "(function(" + (functionArgs.join(', ')) + ") {\n" + body + "\n})";
    emitter = new Emitter([
      {
        "this": 0,
        "arguments": 1
      }
    ], '<eval>', null, source.split('\n'));
    program = compile(source, emitter);
    return program.scripts[0];
  };

  Vm.fromJSON = Script.fromJSON;

  Vm.parse = esprima.parse;

  return Vm;

})();

compile = function(source, emitter) {
  var ast, transformer;
  transformer = new Transformer(new ConstantFolder(), emitter);
  ast = esprima.parse(source, {
    loc: true
  });
  transformer.transform(ast);
  return emitter.end();
};

module.exports = Vm;


  return module.exports;
})({exports: $$___src_vm_index}, $$___src_vm_index);var $$___src_index = {};
$$___src_index = (function(module, exports) {

  module.exports = $$___src_vm_index;


  return module.exports;
})({exports: $$___src_index}, $$___src_index);var $$___src_runtime_internal = {};
$$___src_runtime_internal = (function(module, exports) {

  


  return module.exports;
})({exports: $$___src_runtime_internal}, $$___src_runtime_internal);
    
  return $$___src_index;
}),
(function() {
  var require;

  require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"+3TlHS":[function(require,module,exports){
/*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint bitwise:true plusplus:true */
/*global esprima:true, define:true, exports:true, window: true,
throwError: true, generateStatement: true, peek: true,
parseAssignmentExpression: true, parseBlock: true,
parseClassExpression: true, parseClassDeclaration: true, parseExpression: true,
parseForStatement: true,
parseFunctionDeclaration: true, parseFunctionExpression: true,
parseFunctionSourceElements: true, parseVariableIdentifier: true,
parseImportSpecifier: true,
parseLeftHandSideExpression: true, parseParams: true, validateParam: true,
parseSpreadOrAssignmentExpression: true,
parseStatement: true, parseSourceElement: true, parseModuleBlock: true, parseConciseBody: true,
parseYieldExpression: true
*/

(function (root, factory) {
    'use strict';

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.esprima = {}));
    }
}(this, function (exports) {
    'use strict';

    var Token,
        TokenName,
        FnExprTokens,
        Syntax,
        PropertyKind,
        Messages,
        Regex,
        SyntaxTreeDelegate,
        ClassPropertyType,
        source,
        strict,
        index,
        lineNumber,
        lineStart,
        length,
        delegate,
        lookahead,
        state,
        extra;

    Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9,
        Template: 10
    };

    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.RegularExpression] = 'RegularExpression';

    // A function following one of those tokens is an expression.
    FnExprTokens = ["(", "{", "[", "in", "typeof", "instanceof", "new",
                    "return", "case", "delete", "throw", "void",
                    // assignment operators
                    "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=",
                    "&=", "|=", "^=", ",",
                    // binary/unary operators
                    "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&",
                    "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=",
                    "<=", "<", ">", "!=", "!=="];

    Syntax = {
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AssignmentExpression: 'AssignmentExpression',
        BinaryExpression: 'BinaryExpression',
        BlockStatement: 'BlockStatement',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ClassHeritage: 'ClassHeritage',
        ComprehensionBlock: 'ComprehensionBlock',
        ComprehensionExpression: 'ComprehensionExpression',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DebuggerStatement: 'DebuggerStatement',
        DoWhileStatement: 'DoWhileStatement',
        EmptyStatement: 'EmptyStatement',
        ExportDeclaration: 'ExportDeclaration',
        ExportBatchSpecifier: 'ExportBatchSpecifier',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForInStatement: 'ForInStatement',
        ForOfStatement: 'ForOfStatement',
        ForStatement: 'ForStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportDeclaration: 'ImportDeclaration',
        ImportSpecifier: 'ImportSpecifier',
        LabeledStatement: 'LabeledStatement',
        Literal: 'Literal',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MethodDefinition: 'MethodDefinition',
        ModuleDeclaration: 'ModuleDeclaration',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        Program: 'Program',
        Property: 'Property',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        SwitchCase: 'SwitchCase',
        SwitchStatement: 'SwitchStatement',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        YieldExpression: 'YieldExpression'
    };

    PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
    };

    ClassPropertyType = {
        static: 'static',
        prototype: 'prototype'
    };

    // Error messages should be identical to V8.
    Messages = {
        UnexpectedToken:  'Unexpected token %0',
        UnexpectedNumber:  'Unexpected number',
        UnexpectedString:  'Unexpected string',
        UnexpectedIdentifier:  'Unexpected identifier',
        UnexpectedReserved:  'Unexpected reserved word',
        UnexpectedTemplate:  'Unexpected quasi %0',
        UnexpectedEOS:  'Unexpected end of input',
        NewlineAfterThrow:  'Illegal newline after throw',
        InvalidRegExp: 'Invalid regular expression',
        UnterminatedRegExp:  'Invalid regular expression: missing /',
        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
        InvalidLHSInFormalsList:  'Invalid left-hand side in formals list',
        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
        NoCatchOrFinally:  'Missing catch or finally after try',
        UnknownLabel: 'Undefined label \'%0\'',
        Redeclaration: '%0 \'%1\' has already been declared',
        IllegalContinue: 'Illegal continue statement',
        IllegalBreak: 'Illegal break statement',
        IllegalDuplicateClassProperty: 'Illegal duplicate property in class definition',
        IllegalReturn: 'Illegal return statement',
        IllegalYield: 'Illegal yield expression',
        IllegalSpread: 'Illegal spread element',
        StrictModeWith:  'Strict mode code may not include a with statement',
        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        ParameterAfterRestParameter: 'Rest parameter must be final parameter of an argument list',
        DefaultRestParameter: 'Rest parameter can not have a default value',
        ElementAfterSpreadElement: 'Spread must be the final element of an element list',
        ObjectPatternAsRestParameter: 'Invalid rest parameter',
        ObjectPatternAsSpread: 'Invalid spread argument',
        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictReservedWord:  'Use of future reserved word in strict mode',
        NewlineAfterModule:  'Illegal newline after module',
        NoFromAfterImport: 'Missing from after import',
        InvalidModuleSpecifier: 'Invalid module specifier',
        NestedModule: 'Module declaration can not be nested',
        NoYieldInGenerator: 'Missing yield in generator',
        NoUnintializedConst: 'Const must be initialized',
        ComprehensionRequiresBlock: 'Comprehension must have at least one block',
        ComprehensionError:  'Comprehension Error',
        EachNotAllowed:  'Each is not supported'
    };

    // See also tools/generate-unicode-regex.py.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]')
    };

    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.

    function assert(condition, message) {
        if (!condition) {
            throw new Error('ASSERT: ' + message);
        }
    }

    function isDecimalDigit(ch) {
        return (ch >= 48 && ch <= 57);   // 0..9
    }

    function isHexDigit(ch) {
        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }

    function isOctalDigit(ch) {
        return '01234567'.indexOf(ch) >= 0;
    }


    // 7.2 White Space

    function isWhiteSpace(ch) {
        return (ch === 32) ||  // space
            (ch === 9) ||      // tab
            (ch === 0xB) ||
            (ch === 0xC) ||
            (ch === 0xA0) ||
            (ch >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(String.fromCharCode(ch)) > 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === 10) || (ch === 13) || (ch === 0x2028) || (ch === 0x2029);
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
    }

    function isIdentifierPart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch >= 48 && ch <= 57) ||         // 0..9
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    // 7.6.1.2 Future Reserved Words

    function isFutureReservedWord(id) {
        switch (id) {
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
            return true;
        default:
            return false;
        }
    }

    function isStrictModeReservedWord(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    // 7.6.1.1 Keywords

    function isKeyword(id) {
        if (strict && isStrictModeReservedWord(id)) {
            return true;
        }

        // 'const' is specialized as Keyword in V8.
        // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
        // Some others are from future reserved words.

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') ||
                (id === 'try') || (id === 'let');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    // 7.4 Comments

    function skipComment() {
        var ch, blockComment, lineComment;

        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source.charCodeAt(index);

            if (lineComment) {
                ++index;
                if (isLineTerminator(ch)) {
                    lineComment = false;
                    if (ch === 13 && source.charCodeAt(index) === 10) {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch)) {
                    if (ch === 13 && source.charCodeAt(index + 1) === 10) {
                        ++index;
                    }
                    ++lineNumber;
                    ++index;
                    lineStart = index;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    ch = source.charCodeAt(index++);
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    // Block comment ends with '*/' (char #42, char #47).
                    if (ch === 42) {
                        ch = source.charCodeAt(index);
                        if (ch === 47) {
                            ++index;
                            blockComment = false;
                        }
                    }
                }
            } else if (ch === 47) {
                ch = source.charCodeAt(index + 1);
                // Line comment starts with '//' (char #47, char #47).
                if (ch === 47) {
                    index += 2;
                    lineComment = true;
                } else if (ch === 42) {
                    // Block comment starts with '/*' (char #47, char #42).
                    index += 2;
                    blockComment = true;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch === 13 && source.charCodeAt(index) === 10) {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && isHexDigit(source[index])) {
                ch = source[index++];
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanUnicodeCodePointEscape() {
        var ch, code, cu1, cu2;

        ch = source[index];
        code = 0;

        // At least, one hex digit is required.
        if (ch === '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        while (index < length) {
            ch = source[index++];
            if (!isHexDigit(ch)) {
                break;
            }
            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
        }

        if (code > 0x10FFFF || ch !== '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        // UTF-16 Encoding
        if (code <= 0xFFFF) {
            return String.fromCharCode(code);
        }
        cu1 = ((code - 0x10000) >> 10) + 0xD800;
        cu2 = ((code - 0x10000) & 1023) + 0xDC00;
        return String.fromCharCode(cu1, cu2);
    }

    function getEscapedIdentifier() {
        var ch, id;

        ch = source.charCodeAt(index++);
        id = String.fromCharCode(ch);

        // '\u' (char #92, char #117) denotes an escaped character.
        if (ch === 92) {
            if (source.charCodeAt(index) !== 117) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            ++index;
            ch = scanHexEscape('u');
            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            id = ch;
        }

        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isIdentifierPart(ch)) {
                break;
            }
            ++index;
            id += String.fromCharCode(ch);

            // '\u' (char #92, char #117) denotes an escaped character.
            if (ch === 92) {
                id = id.substr(0, id.length - 1);
                if (source.charCodeAt(index) !== 117) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                ++index;
                ch = scanHexEscape('u');
                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                id += ch;
            }
        }

        return id;
    }

    function getIdentifier() {
        var start, ch;

        start = index++;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (ch === 92) {
                // Blackslash (char #92) marks Unicode escape sequence.
                index = start;
                return getEscapedIdentifier();
            }
            if (isIdentifierPart(ch)) {
                ++index;
            } else {
                break;
            }
        }

        return source.slice(start, index);
    }

    function scanIdentifier() {
        var start, id, type;

        start = index;

        // Backslash (char #92) starts an escaped character.
        id = (source.charCodeAt(index) === 92) ? getEscapedIdentifier() : getIdentifier();

        // There is no keyword or literal with only one character.
        // Thus, it must be an identifier.
        if (id.length === 1) {
            type = Token.Identifier;
        } else if (isKeyword(id)) {
            type = Token.Keyword;
        } else if (id === 'null') {
            type = Token.NullLiteral;
        } else if (id === 'true' || id === 'false') {
            type = Token.BooleanLiteral;
        } else {
            type = Token.Identifier;
        }

        return {
            type: type,
            value: id,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }


    // 7.7 Punctuators

    function scanPunctuator() {
        var start = index,
            code = source.charCodeAt(index),
            code2,
            ch1 = source[index],
            ch2,
            ch3,
            ch4;

        switch (code) {
        // Check for most common single-character punctuators.
        case 40:   // ( open bracket
        case 41:   // ) close bracket
        case 59:   // ; semicolon
        case 44:   // , comma
        case 123:  // { open curly brace
        case 125:  // } close curly brace
        case 91:   // [
        case 93:   // ]
        case 58:   // :
        case 63:   // ?
        case 126:  // ~
            ++index;
            if (extra.tokenize) {
                if (code === 40) {
                    extra.openParenToken = extra.tokens.length;
                } else if (code === 123) {
                    extra.openCurlyToken = extra.tokens.length;
                }
            }
            return {
                type: Token.Punctuator,
                value: String.fromCharCode(code),
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };

        default:
            code2 = source.charCodeAt(index + 1);

            // '=' (char #61) marks an assignment or comparison operator.
            if (code2 === 61) {
                switch (code) {
                case 37:  // %
                case 38:  // &
                case 42:  // *:
                case 43:  // +
                case 45:  // -
                case 47:  // /
                case 60:  // <
                case 62:  // >
                case 94:  // ^
                case 124: // |
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code) + String.fromCharCode(code2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };

                case 33: // !
                case 61: // =
                    index += 2;

                    // !== and ===
                    if (source.charCodeAt(index) === 61) {
                        ++index;
                    }
                    return {
                        type: Token.Punctuator,
                        value: source.slice(start, index),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                default:
                    break;
                }
            }
            break;
        }

        // Peek more characters.

        ch2 = source[index + 1];
        ch3 = source[index + 2];
        ch4 = source[index + 3];

        // 4-character punctuator: >>>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            if (ch4 === '=') {
                index += 4;
                return {
                    type: Token.Punctuator,
                    value: '>>>=',
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        // 3-character punctuators: === !== >>> <<= >>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '<<=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.' && ch2 === '.' && ch3 === '.') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '...',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // Other 2-character punctuators: ++ -- << >> && ||

        if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0)) {
            index += 2;
            return {
                type: Token.Punctuator,
                value: ch1 + ch2,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '=' && ch2 === '>') {
            index += 2;
            return {
                type: Token.Punctuator,
                value: '=>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.') {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    // 7.8.3 Numeric Literals

    function scanHexLiteral(start) {
        var number = '';

        while (index < length) {
            if (!isHexDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (number.length === 0) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt('0x' + number, 16),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanOctalLiteral(prefix, start) {
        var number, octal;

        if (isOctalDigit(prefix)) {
            octal = true;
            number = '0' + source[index++];
        } else {
            octal = false;
            ++index;
            number = '';
        }

        while (index < length) {
            if (!isOctalDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (!octal && number.length === 0) {
            // only 0o or 0O
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt(number, 8),
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanNumericLiteral() {
        var number, start, ch, octal;

        ch = source[index];
        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
            'Numeric literal must start with a decimal digit or a decimal point');

        start = index;
        number = '';
        if (ch !== '.') {
            number = source[index++];
            ch = source[index];

            // Hex number starts with '0x'.
            // Octal number starts with '0'.
            // Octal number in ES6 starts with '0o'.
            // Binary number in ES6 starts with '0b'.
            if (number === '0') {
                if (ch === 'x' || ch === 'X') {
                    ++index;
                    return scanHexLiteral(start);
                }
                if (ch === 'b' || ch === 'B') {
                    ++index;
                    number = '';

                    while (index < length) {
                        ch = source[index];
                        if (ch !== '0' && ch !== '1') {
                            break;
                        }
                        number += source[index++];
                    }

                    if (number.length === 0) {
                        // only 0b or 0B
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                    return {
                        type: Token.NumericLiteral,
                        value: parseInt(number, 2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }
                if (ch === 'o' || ch === 'O' || isOctalDigit(ch)) {
                    return scanOctalLiteral(ch, start);
                }
                // decimal number starts with '0' such as '09' is illegal.
                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            }

            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === '.') {
            number += source[index++];
            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === 'e' || ch === 'E') {
            number += source[index++];

            ch = source[index];
            if (ch === '+' || ch === '-') {
                number += source[index++];
            }
            if (isDecimalDigit(source.charCodeAt(index))) {
                while (isDecimalDigit(source.charCodeAt(index))) {
                    number += source[index++];
                }
            } else {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseFloat(number),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    // 7.8.4 String Literals

    function scanStringLiteral() {
        var str = '', quote, start, ch, code, unescaped, restore, octal = false;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        while (index < length) {
            ch = source[index++];

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            str += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                str += unescaped;
                            } else {
                                index = restore;
                                str += ch;
                            }
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.StringLiteral,
            value: str,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplate() {
        var cooked = '', ch, start, terminated, tail, restore, unescaped, code, octal;

        terminated = false;
        tail = false;
        start = index;

        ++index;

        while (index < length) {
            ch = source[index++];
            if (ch === '`') {
                tail = true;
                terminated = true;
                break;
            } else if (ch === '$') {
                if (source[index] === '{') {
                    ++index;
                    terminated = true;
                    break;
                }
                cooked += ch;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        cooked += '\n';
                        break;
                    case 'r':
                        cooked += '\r';
                        break;
                    case 't':
                        cooked += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            cooked += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                cooked += unescaped;
                            } else {
                                index = restore;
                                cooked += ch;
                            }
                        }
                        break;
                    case 'b':
                        cooked += '\b';
                        break;
                    case 'f':
                        cooked += '\f';
                        break;
                    case 'v':
                        cooked += '\v';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            cooked += String.fromCharCode(code);
                        } else {
                            cooked += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++lineNumber;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
            } else {
                cooked += ch;
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.Template,
            value: {
                cooked: cooked,
                raw: source.slice(start + 1, index - ((tail) ? 1 : 2))
            },
            tail: tail,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplateElement(option) {
        var startsWith, template;

        lookahead = null;
        skipComment();

        startsWith = (option.head) ? '`' : '}';

        if (source[index] !== startsWith) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        template = scanTemplate();

        peek();

        return template;
    }

    function scanRegExp() {
        var str, ch, start, pattern, flags, value, classMarker = false, restore, terminated = false;

        lookahead = null;
        skipComment();

        start = index;
        ch = source[index];
        assert(ch === '/', 'Regular expression literal must start with a slash');
        str = source[index++];

        while (index < length) {
            ch = source[index++];
            str += ch;
            if (classMarker) {
                if (ch === ']') {
                    classMarker = false;
                }
            } else {
                if (ch === '\\') {
                    ch = source[index++];
                    // ECMA-262 7.8.5
                    if (isLineTerminator(ch.charCodeAt(0))) {
                        throwError({}, Messages.UnterminatedRegExp);
                    }
                    str += ch;
                } else if (ch === '/') {
                    terminated = true;
                    break;
                } else if (ch === '[') {
                    classMarker = true;
                } else if (isLineTerminator(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnterminatedRegExp);
                }
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnterminatedRegExp);
        }

        // Exclude leading and trailing slash.
        pattern = str.substr(1, str.length - 2);

        flags = '';
        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch.charCodeAt(0))) {
                break;
            }

            ++index;
            if (ch === '\\' && index < length) {
                ch = source[index];
                if (ch === 'u') {
                    ++index;
                    restore = index;
                    ch = scanHexEscape('u');
                    if (ch) {
                        flags += ch;
                        for (str += '\\u'; restore < index; ++restore) {
                            str += source[restore];
                        }
                    } else {
                        index = restore;
                        flags += 'u';
                        str += '\\u';
                    }
                } else {
                    str += '\\';
                }
            } else {
                flags += ch;
                str += ch;
            }
        }

        try {
            value = new RegExp(pattern, flags);
        } catch (e) {
            throwError({}, Messages.InvalidRegExp);
        }

        peek();


        if (extra.tokenize) {
            return {
                type: Token.RegularExpression,
                value: value,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }
        return {
            literal: str,
            value: value,
            range: [start, index]
        };
    }

    function isIdentifierName(token) {
        return token.type === Token.Identifier ||
            token.type === Token.Keyword ||
            token.type === Token.BooleanLiteral ||
            token.type === Token.NullLiteral;
    }

    function advanceSlash() {
        var prevToken,
            checkToken;
        // Using the following algorithm:
        // https://github.com/mozilla/sweet.js/wiki/design
        prevToken = extra.tokens[extra.tokens.length - 1];
        if (!prevToken) {
            // Nothing before that: it cannot be a division.
            return scanRegExp();
        }
        if (prevToken.type === "Punctuator") {
            if (prevToken.value === ")") {
                checkToken = extra.tokens[extra.openParenToken - 1];
                if (checkToken &&
                        checkToken.type === "Keyword" &&
                        (checkToken.value === "if" ||
                         checkToken.value === "while" ||
                         checkToken.value === "for" ||
                         checkToken.value === "with")) {
                    return scanRegExp();
                }
                return scanPunctuator();
            }
            if (prevToken.value === "}") {
                // Dividing a function by anything makes little sense,
                // but we have to check for that.
                if (extra.tokens[extra.openCurlyToken - 3] &&
                        extra.tokens[extra.openCurlyToken - 3].type === "Keyword") {
                    // Anonymous function.
                    checkToken = extra.tokens[extra.openCurlyToken - 4];
                    if (!checkToken) {
                        return scanPunctuator();
                    }
                } else if (extra.tokens[extra.openCurlyToken - 4] &&
                        extra.tokens[extra.openCurlyToken - 4].type === "Keyword") {
                    // Named function.
                    checkToken = extra.tokens[extra.openCurlyToken - 5];
                    if (!checkToken) {
                        return scanRegExp();
                    }
                } else {
                    return scanPunctuator();
                }
                // checkToken determines whether the function is
                // a declaration or an expression.
                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
                    // It is an expression.
                    return scanPunctuator();
                }
                // It is a declaration.
                return scanRegExp();
            }
            return scanRegExp();
        }
        if (prevToken.type === "Keyword") {
            return scanRegExp();
        }
        return scanPunctuator();
    }

    function advance() {
        var ch;

        skipComment();

        if (index >= length) {
            return {
                type: Token.EOF,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [index, index]
            };
        }

        ch = source.charCodeAt(index);

        // Very common: ( and ) and ;
        if (ch === 40 || ch === 41 || ch === 58) {
            return scanPunctuator();
        }

        // String literal starts with single quote (#39) or double quote (#34).
        if (ch === 39 || ch === 34) {
            return scanStringLiteral();
        }

        if (ch === 96) {
            return scanTemplate();
        }
        if (isIdentifierStart(ch)) {
            return scanIdentifier();
        }

        // Dot (.) char #46 can also start a floating-point number, hence the need
        // to check the next character.
        if (ch === 46) {
            if (isDecimalDigit(source.charCodeAt(index + 1))) {
                return scanNumericLiteral();
            }
            return scanPunctuator();
        }

        if (isDecimalDigit(ch)) {
            return scanNumericLiteral();
        }

        // Slash (/) char #47 can also start a regex.
        if (extra.tokenize && ch === 47) {
            return advanceSlash();
        }

        return scanPunctuator();
    }

    function lex() {
        var token;

        token = lookahead;
        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        lookahead = advance();

        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        return token;
    }

    function peek() {
        var pos, line, start;

        pos = index;
        line = lineNumber;
        start = lineStart;
        lookahead = advance();
        index = pos;
        lineNumber = line;
        lineStart = start;
    }

    function lookahead2() {
        var adv, pos, line, start, result;

        // If we are collecting the tokens, don't grab the next one yet.
        adv = (typeof extra.advance === 'function') ? extra.advance : advance;

        pos = index;
        line = lineNumber;
        start = lineStart;

        // Scan for the next immediate token.
        if (lookahead === null) {
            lookahead = adv();
        }
        index = lookahead.range[1];
        lineNumber = lookahead.lineNumber;
        lineStart = lookahead.lineStart;

        // Grab the token right after.
        result = adv();
        index = pos;
        lineNumber = line;
        lineStart = start;

        return result;
    }

    SyntaxTreeDelegate = {

        name: 'SyntaxTree',

        postProcess: function (node) {
            return node;
        },

        createArrayExpression: function (elements) {
            return {
                type: Syntax.ArrayExpression,
                elements: elements
            };
        },

        createAssignmentExpression: function (operator, left, right) {
            return {
                type: Syntax.AssignmentExpression,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBinaryExpression: function (operator, left, right) {
            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
                        Syntax.BinaryExpression;
            return {
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBlockStatement: function (body) {
            return {
                type: Syntax.BlockStatement,
                body: body
            };
        },

        createBreakStatement: function (label) {
            return {
                type: Syntax.BreakStatement,
                label: label
            };
        },

        createCallExpression: function (callee, args) {
            return {
                type: Syntax.CallExpression,
                callee: callee,
                'arguments': args
            };
        },

        createCatchClause: function (param, body) {
            return {
                type: Syntax.CatchClause,
                param: param,
                body: body
            };
        },

        createConditionalExpression: function (test, consequent, alternate) {
            return {
                type: Syntax.ConditionalExpression,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createContinueStatement: function (label) {
            return {
                type: Syntax.ContinueStatement,
                label: label
            };
        },

        createDebuggerStatement: function () {
            return {
                type: Syntax.DebuggerStatement
            };
        },

        createDoWhileStatement: function (body, test) {
            return {
                type: Syntax.DoWhileStatement,
                body: body,
                test: test
            };
        },

        createEmptyStatement: function () {
            return {
                type: Syntax.EmptyStatement
            };
        },

        createExpressionStatement: function (expression) {
            return {
                type: Syntax.ExpressionStatement,
                expression: expression
            };
        },

        createForStatement: function (init, test, update, body) {
            return {
                type: Syntax.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        },

        createForInStatement: function (left, right, body) {
            return {
                type: Syntax.ForInStatement,
                left: left,
                right: right,
                body: body,
                each: false
            };
        },

        createForOfStatement: function (left, right, body) {
            return {
                type: Syntax.ForOfStatement,
                left: left,
                right: right,
                body: body
            };
        },

        createFunctionDeclaration: function (id, params, defaults, body, rest, generator, expression) {
            return {
                type: Syntax.FunctionDeclaration,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression
            };
        },

        createFunctionExpression: function (id, params, defaults, body, rest, generator, expression) {
            return {
                type: Syntax.FunctionExpression,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression
            };
        },

        createIdentifier: function (name) {
            return {
                type: Syntax.Identifier,
                name: name
            };
        },

        createIfStatement: function (test, consequent, alternate) {
            return {
                type: Syntax.IfStatement,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createLabeledStatement: function (label, body) {
            return {
                type: Syntax.LabeledStatement,
                label: label,
                body: body
            };
        },

        createLiteral: function (token) {
            return {
                type: Syntax.Literal,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
        },

        createMemberExpression: function (accessor, object, property) {
            return {
                type: Syntax.MemberExpression,
                computed: accessor === '[',
                object: object,
                property: property
            };
        },

        createNewExpression: function (callee, args) {
            return {
                type: Syntax.NewExpression,
                callee: callee,
                'arguments': args
            };
        },

        createObjectExpression: function (properties) {
            return {
                type: Syntax.ObjectExpression,
                properties: properties
            };
        },

        createPostfixExpression: function (operator, argument) {
            return {
                type: Syntax.UpdateExpression,
                operator: operator,
                argument: argument,
                prefix: false
            };
        },

        createProgram: function (body) {
            return {
                type: Syntax.Program,
                body: body
            };
        },

        createProperty: function (kind, key, value, method, shorthand) {
            return {
                type: Syntax.Property,
                key: key,
                value: value,
                kind: kind,
                method: method,
                shorthand: shorthand
            };
        },

        createReturnStatement: function (argument) {
            return {
                type: Syntax.ReturnStatement,
                argument: argument
            };
        },

        createSequenceExpression: function (expressions) {
            return {
                type: Syntax.SequenceExpression,
                expressions: expressions
            };
        },

        createSwitchCase: function (test, consequent) {
            return {
                type: Syntax.SwitchCase,
                test: test,
                consequent: consequent
            };
        },

        createSwitchStatement: function (discriminant, cases) {
            return {
                type: Syntax.SwitchStatement,
                discriminant: discriminant,
                cases: cases
            };
        },

        createThisExpression: function () {
            return {
                type: Syntax.ThisExpression
            };
        },

        createThrowStatement: function (argument) {
            return {
                type: Syntax.ThrowStatement,
                argument: argument
            };
        },

        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
            return {
                type: Syntax.TryStatement,
                block: block,
                guardedHandlers: guardedHandlers,
                handlers: handlers,
                finalizer: finalizer
            };
        },

        createUnaryExpression: function (operator, argument) {
            if (operator === '++' || operator === '--') {
                return {
                    type: Syntax.UpdateExpression,
                    operator: operator,
                    argument: argument,
                    prefix: true
                };
            }
            return {
                type: Syntax.UnaryExpression,
                operator: operator,
                argument: argument
            };
        },

        createVariableDeclaration: function (declarations, kind) {
            return {
                type: Syntax.VariableDeclaration,
                declarations: declarations,
                kind: kind
            };
        },

        createVariableDeclarator: function (id, init) {
            return {
                type: Syntax.VariableDeclarator,
                id: id,
                init: init
            };
        },

        createWhileStatement: function (test, body) {
            return {
                type: Syntax.WhileStatement,
                test: test,
                body: body
            };
        },

        createWithStatement: function (object, body) {
            return {
                type: Syntax.WithStatement,
                object: object,
                body: body
            };
        },

        createTemplateElement: function (value, tail) {
            return {
                type: Syntax.TemplateElement,
                value: value,
                tail: tail
            };
        },

        createTemplateLiteral: function (quasis, expressions) {
            return {
                type: Syntax.TemplateLiteral,
                quasis: quasis,
                expressions: expressions
            };
        },

        createSpreadElement: function (argument) {
            return {
                type: Syntax.SpreadElement,
                argument: argument
            };
        },

        createTaggedTemplateExpression: function (tag, quasi) {
            return {
                type: Syntax.TaggedTemplateExpression,
                tag: tag,
                quasi: quasi
            };
        },

        createArrowFunctionExpression: function (params, defaults, body, rest, expression) {
            return {
                type: Syntax.ArrowFunctionExpression,
                id: null,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: false,
                expression: expression
            };
        },

        createMethodDefinition: function (propertyType, kind, key, value) {
            return {
                type: Syntax.MethodDefinition,
                key: key,
                value: value,
                kind: kind,
                'static': propertyType === ClassPropertyType.static
            };
        },

        createClassBody: function (body) {
            return {
                type: Syntax.ClassBody,
                body: body
            };
        },

        createClassExpression: function (id, superClass, body) {
            return {
                type: Syntax.ClassExpression,
                id: id,
                superClass: superClass,
                body: body
            };
        },

        createClassDeclaration: function (id, superClass, body) {
            return {
                type: Syntax.ClassDeclaration,
                id: id,
                superClass: superClass,
                body: body
            };
        },

        createExportSpecifier: function (id, name) {
            return {
                type: Syntax.ExportSpecifier,
                id: id,
                name: name
            };
        },

        createExportBatchSpecifier: function () {
            return {
                type: Syntax.ExportBatchSpecifier
            };
        },

        createExportDeclaration: function (def, declaration, specifiers, source) {
            return {
                type: Syntax.ExportDeclaration,
                declaration: declaration,
                'default': def,
                specifiers: specifiers,
                source: source
            };
        },

        createImportSpecifier: function (id, name) {
            return {
                type: Syntax.ImportSpecifier,
                id: id,
                name: name
            };
        },

        createImportDeclaration: function (specifiers, kind, source) {
            return {
                type: Syntax.ImportDeclaration,
                specifiers: specifiers,
                kind: kind,
                source: source
            };
        },

        createYieldExpression: function (argument, delegate) {
            return {
                type: Syntax.YieldExpression,
                argument: argument,
                delegate: delegate
            };
        },

        createModuleDeclaration: function (id, source, body) {
            return {
                type: Syntax.ModuleDeclaration,
                id: id,
                source: source,
                body: body
            };
        }


    };

    // Return true if there is a line terminator before the next token.

    function peekLineTerminator() {
        var pos, line, start, found;

        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;

        return found;
    }

    // Throw an exception

    function throwError(token, messageFormat) {
        var error,
            args = Array.prototype.slice.call(arguments, 2),
            msg = messageFormat.replace(
                /%(\d)/g,
                function (whole, index) {
                    assert(index < args.length, 'Message reference must be in range');
                    return args[index];
                }
            );

        if (typeof token.lineNumber === 'number') {
            error = new Error('Line ' + token.lineNumber + ': ' + msg);
            error.index = token.range[0];
            error.lineNumber = token.lineNumber;
            error.column = token.range[0] - lineStart + 1;
        } else {
            error = new Error('Line ' + lineNumber + ': ' + msg);
            error.index = index;
            error.lineNumber = lineNumber;
            error.column = index - lineStart + 1;
        }

        error.description = msg;
        throw error;
    }

    function throwErrorTolerant() {
        try {
            throwError.apply(null, arguments);
        } catch (e) {
            if (extra.errors) {
                extra.errors.push(e);
            } else {
                throw e;
            }
        }
    }


    // Throw an exception because of the token.

    function throwUnexpected(token) {
        if (token.type === Token.EOF) {
            throwError(token, Messages.UnexpectedEOS);
        }

        if (token.type === Token.NumericLiteral) {
            throwError(token, Messages.UnexpectedNumber);
        }

        if (token.type === Token.StringLiteral) {
            throwError(token, Messages.UnexpectedString);
        }

        if (token.type === Token.Identifier) {
            throwError(token, Messages.UnexpectedIdentifier);
        }

        if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
                throwError(token, Messages.UnexpectedReserved);
            } else if (strict && isStrictModeReservedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictReservedWord);
                return;
            }
            throwError(token, Messages.UnexpectedToken, token.value);
        }

        if (token.type === Token.Template) {
            throwError(token, Messages.UnexpectedTemplate, token.value.raw);
        }

        // BooleanLiteral, NullLiteral, or Punctuator.
        throwError(token, Messages.UnexpectedToken, token.value);
    }

    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.

    function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.

    function expectKeyword(keyword) {
        var token = lex();
        if (token.type !== Token.Keyword || token.value !== keyword) {
            throwUnexpected(token);
        }
    }

    // Return true if the next token matches the specified punctuator.

    function match(value) {
        return lookahead.type === Token.Punctuator && lookahead.value === value;
    }

    // Return true if the next token matches the specified keyword

    function matchKeyword(keyword) {
        return lookahead.type === Token.Keyword && lookahead.value === keyword;
    }


    // Return true if the next token matches the specified contextual keyword

    function matchContextualKeyword(keyword) {
        return lookahead.type === Token.Identifier && lookahead.value === keyword;
    }

    // Return true if the next token is an assignment operator

    function matchAssign() {
        var op;

        if (lookahead.type !== Token.Punctuator) {
            return false;
        }
        op = lookahead.value;
        return op === '=' ||
            op === '*=' ||
            op === '/=' ||
            op === '%=' ||
            op === '+=' ||
            op === '-=' ||
            op === '<<=' ||
            op === '>>=' ||
            op === '>>>=' ||
            op === '&=' ||
            op === '^=' ||
            op === '|=';
    }

    function consumeSemicolon() {
        var line;

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();
            return;
        }

        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
            return;
        }

        if (match(';')) {
            lex();
            return;
        }

        if (lookahead.type !== Token.EOF && !match('}')) {
            throwUnexpected(lookahead);
        }
    }

    // Return true if provided expression is LeftHandSideExpression

    function isLeftHandSide(expr) {
        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
    }

    function isAssignableLeftHandSide(expr) {
        return isLeftHandSide(expr) || expr.type === Syntax.ObjectPattern || expr.type === Syntax.ArrayPattern;
    }

    // 11.1.4 Array Initialiser

    function parseArrayInitialiser() {
        var elements = [], blocks = [], filter = null, tmp, possiblecomprehension = true, body;

        expect('[');
        while (!match(']')) {
            if (lookahead.value === 'for' &&
                    lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                matchKeyword('for');
                tmp = parseForStatement({ignore_body: true});
                tmp.of = tmp.type === Syntax.ForOfStatement;
                tmp.type = Syntax.ComprehensionBlock;
                if (tmp.left.kind) { // can't be let or const
                    throwError({}, Messages.ComprehensionError);
                }
                blocks.push(tmp);
            } else if (lookahead.value === 'if' &&
                           lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                expectKeyword('if');
                expect('(');
                filter = parseExpression();
                expect(')');
            } else if (lookahead.value === ',' &&
                           lookahead.type === Token.Punctuator) {
                possiblecomprehension = false; // no longer allowed.
                lex();
                elements.push(null);
            } else {
                tmp = parseSpreadOrAssignmentExpression();
                elements.push(tmp);
                if (tmp && tmp.type === Syntax.SpreadElement) {
                    if (!match(']')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                } else if (!(match(']') || matchKeyword('for') || matchKeyword('if'))) {
                    expect(','); // this lexes.
                    possiblecomprehension = false;
                }
            }
        }

        expect(']');

        if (filter && !blocks.length) {
            throwError({}, Messages.ComprehensionRequiresBlock);
        }

        if (blocks.length) {
            if (elements.length !== 1) {
                throwError({}, Messages.ComprehensionError);
            }
            return {
                type:  Syntax.ComprehensionExpression,
                filter: filter,
                blocks: blocks,
                body: elements[0]
            };
        }
        return delegate.createArrayExpression(elements);
    }

    // 11.1.5 Object Initialiser

    function parsePropertyFunction(options) {
        var previousStrict, previousYieldAllowed, params, defaults, body;

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = options.generator;
        params = options.params || [];
        defaults = options.defaults || [];

        body = parseConciseBody();
        if (options.name && strict && isRestrictedWord(params[0].name)) {
            throwErrorTolerant(options.name, Messages.StrictParamName);
        }
        if (state.yieldAllowed && !state.yieldFound) {
            throwErrorTolerant({}, Messages.NoYieldInGenerator);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;

        return delegate.createFunctionExpression(null, params, defaults, body, options.rest || null, options.generator, body.type !== Syntax.BlockStatement);
    }


    function parsePropertyMethodFunction(options) {
        var previousStrict, tmp, method;

        previousStrict = strict;
        strict = true;

        tmp = parseParams();

        if (tmp.stricted) {
            throwErrorTolerant(tmp.stricted, tmp.message);
        }


        method = parsePropertyFunction({
            params: tmp.params,
            defaults: tmp.defaults,
            rest: tmp.rest,
            generator: options.generator
        });

        strict = previousStrict;

        return method;
    }


    function parseObjectPropertyKey() {
        var token = lex();

        // Note: This function is called only from parseObjectProperty(), where
        // EOF and Punctuator tokens are already filtered out.

        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
            if (strict && token.octal) {
                throwErrorTolerant(token, Messages.StrictOctalLiteral);
            }
            return delegate.createLiteral(token);
        }

        return delegate.createIdentifier(token.value);
    }

    function parseObjectProperty() {
        var token, key, id, value, param;

        token = lookahead;

        if (token.type === Token.Identifier) {

            id = parseObjectPropertyKey();

            // Property Assignment: Getter and Setter.

            if (token.value === 'get' && !(match(':') || match('('))) {
                key = parseObjectPropertyKey();
                expect('(');
                expect(')');
                return delegate.createProperty('get', key, parsePropertyFunction({ generator: false }), false, false);
            }
            if (token.value === 'set' && !(match(':') || match('('))) {
                key = parseObjectPropertyKey();
                expect('(');
                token = lookahead;
                param = [ parseVariableIdentifier() ];
                expect(')');
                return delegate.createProperty('set', key, parsePropertyFunction({ params: param, generator: false, name: token }), false, false);
            }
            if (match(':')) {
                lex();
                return delegate.createProperty('init', id, parseAssignmentExpression(), false, false);
            }
            if (match('(')) {
                return delegate.createProperty('init', id, parsePropertyMethodFunction({ generator: false }), true, false);
            }
            return delegate.createProperty('init', id, id, false, true);
        }
        if (token.type === Token.EOF || token.type === Token.Punctuator) {
            if (!match('*')) {
                throwUnexpected(token);
            }
            lex();

            id = parseObjectPropertyKey();

            if (!match('(')) {
                throwUnexpected(lex());
            }

            return delegate.createProperty('init', id, parsePropertyMethodFunction({ generator: true }), true, false);
        }
        key = parseObjectPropertyKey();
        if (match(':')) {
            lex();
            return delegate.createProperty('init', key, parseAssignmentExpression(), false, false);
        }
        if (match('(')) {
            return delegate.createProperty('init', key, parsePropertyMethodFunction({ generator: false }), true, false);
        }
        throwUnexpected(lex());
    }

    function parseObjectInitialiser() {
        var properties = [], property, name, key, kind, map = {}, toString = String;

        expect('{');

        while (!match('}')) {
            property = parseObjectProperty();

            if (property.key.type === Syntax.Identifier) {
                name = property.key.name;
            } else {
                name = toString(property.key.value);
            }
            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

            key = '$' + name;
            if (Object.prototype.hasOwnProperty.call(map, key)) {
                if (map[key] === PropertyKind.Data) {
                    if (strict && kind === PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.StrictDuplicateProperty);
                    } else if (kind !== PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.AccessorDataProperty);
                    }
                } else {
                    if (kind === PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.AccessorDataProperty);
                    } else if (map[key] & kind) {
                        throwErrorTolerant({}, Messages.AccessorGetSet);
                    }
                }
                map[key] |= kind;
            } else {
                map[key] = kind;
            }

            properties.push(property);

            if (!match('}')) {
                expect(',');
            }
        }

        expect('}');

        return delegate.createObjectExpression(properties);
    }

    function parseTemplateElement(option) {
        var token = scanTemplateElement(option);
        if (strict && token.octal) {
            throwError(token, Messages.StrictOctalLiteral);
        }
        return delegate.createTemplateElement({ raw: token.value.raw, cooked: token.value.cooked }, token.tail);
    }

    function parseTemplateLiteral() {
        var quasi, quasis, expressions;

        quasi = parseTemplateElement({ head: true });
        quasis = [ quasi ];
        expressions = [];

        while (!quasi.tail) {
            expressions.push(parseExpression());
            quasi = parseTemplateElement({ head: false });
            quasis.push(quasi);
        }

        return delegate.createTemplateLiteral(quasis, expressions);
    }

    // 11.1.6 The Grouping Operator

    function parseGroupExpression() {
        var expr;

        expect('(');

        ++state.parenthesizedCount;

        state.allowArrowFunction = !state.allowArrowFunction;
        expr = parseExpression();
        state.allowArrowFunction = false;

        if (expr.type !== Syntax.ArrowFunctionExpression) {
            expect(')');
        }

        return expr;
    }


    // 11.1 Primary Expressions

    function parsePrimaryExpression() {
        var type, token;

        token = lookahead;
        type = lookahead.type;

        if (type === Token.Identifier) {
            lex();
            return delegate.createIdentifier(token.value);
        }

        if (type === Token.StringLiteral || type === Token.NumericLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            return delegate.createLiteral(lex());
        }

        if (type === Token.Keyword) {
            if (matchKeyword('this')) {
                lex();
                return delegate.createThisExpression();
            }

            if (matchKeyword('function')) {
                return parseFunctionExpression();
            }

            if (matchKeyword('class')) {
                return parseClassExpression();
            }

            if (matchKeyword('super')) {
                lex();
                return delegate.createIdentifier('super');
            }
        }

        if (type === Token.BooleanLiteral) {
            token = lex();
            token.value = (token.value === 'true');
            return delegate.createLiteral(token);
        }

        if (type === Token.NullLiteral) {
            token = lex();
            token.value = null;
            return delegate.createLiteral(token);
        }

        if (match('[')) {
            return parseArrayInitialiser();
        }

        if (match('{')) {
            return parseObjectInitialiser();
        }

        if (match('(')) {
            return parseGroupExpression();
        }

        if (match('/') || match('/=')) {
            return delegate.createLiteral(scanRegExp());
        }

        if (type === Token.Template) {
            return parseTemplateLiteral();
        }

        return throwUnexpected(lex());
    }

    // 11.2 Left-Hand-Side Expressions

    function parseArguments() {
        var args = [], arg;

        expect('(');

        if (!match(')')) {
            while (index < length) {
                arg = parseSpreadOrAssignmentExpression();
                args.push(arg);

                if (match(')')) {
                    break;
                } else if (arg.type === Syntax.SpreadElement) {
                    throwError({}, Messages.ElementAfterSpreadElement);
                }

                expect(',');
            }
        }

        expect(')');

        return args;
    }

    function parseSpreadOrAssignmentExpression() {
        if (match('...')) {
            lex();
            return delegate.createSpreadElement(parseAssignmentExpression());
        }
        return parseAssignmentExpression();
    }

    function parseNonComputedProperty() {
        var token = lex();

        if (!isIdentifierName(token)) {
            throwUnexpected(token);
        }

        return delegate.createIdentifier(token.value);
    }

    function parseNonComputedMember() {
        expect('.');

        return parseNonComputedProperty();
    }

    function parseComputedMember() {
        var expr;

        expect('[');

        expr = parseExpression();

        expect(']');

        return expr;
    }

    function parseNewExpression() {
        var callee, args;

        expectKeyword('new');
        callee = parseLeftHandSideExpression();
        args = match('(') ? parseArguments() : [];

        return delegate.createNewExpression(callee, args);
    }

    function parseLeftHandSideExpressionAllowCall() {
        var expr, args, property;

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || match('(') || lookahead.type === Token.Template) {
            if (match('(')) {
                args = parseArguments();
                expr = delegate.createCallExpression(expr, args);
            } else if (match('[')) {
                expr = delegate.createMemberExpression('[', expr, parseComputedMember());
            } else if (match('.')) {
                expr = delegate.createMemberExpression('.', expr, parseNonComputedMember());
            } else {
                expr = delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral());
            }
        }

        return expr;
    }


    function parseLeftHandSideExpression() {
        var expr, property;

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || lookahead.type === Token.Template) {
            if (match('[')) {
                expr = delegate.createMemberExpression('[', expr, parseComputedMember());
            } else if (match('.')) {
                expr = delegate.createMemberExpression('.', expr, parseNonComputedMember());
            } else {
                expr = delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral());
            }
        }

        return expr;
    }

    // 11.3 Postfix Expressions

    function parsePostfixExpression() {
        var expr = parseLeftHandSideExpressionAllowCall(),
            token = lookahead;

        if (lookahead.type !== Token.Punctuator) {
            return expr;
        }

        if ((match('++') || match('--')) && !peekLineTerminator()) {
            // 11.3.1, 11.3.2
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPostfix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            token = lex();
            expr = delegate.createPostfixExpression(token.value, expr);
        }

        return expr;
    }

    // 11.4 Unary Operators

    function parseUnaryExpression() {
        var token, expr;

        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
            return parsePostfixExpression();
        }

        if (match('++') || match('--')) {
            token = lex();
            expr = parseUnaryExpression();
            // 11.4.4, 11.4.5
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPrefix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            return delegate.createUnaryExpression(token.value, expr);
        }

        if (match('+') || match('-') || match('~') || match('!')) {
            token = lex();
            expr = parseUnaryExpression();
            return delegate.createUnaryExpression(token.value, expr);
        }

        if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
            token = lex();
            expr = parseUnaryExpression();
            expr = delegate.createUnaryExpression(token.value, expr);
            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                throwErrorTolerant({}, Messages.StrictDelete);
            }
            return expr;
        }

        return parsePostfixExpression();
    }

    function binaryPrecedence(token, allowIn) {
        var prec = 0;

        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
            return 0;
        }

        switch (token.value) {
        case '||':
            prec = 1;
            break;

        case '&&':
            prec = 2;
            break;

        case '|':
            prec = 3;
            break;

        case '^':
            prec = 4;
            break;

        case '&':
            prec = 5;
            break;

        case '==':
        case '!=':
        case '===':
        case '!==':
            prec = 6;
            break;

        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
            prec = 7;
            break;

        case 'in':
            prec = allowIn ? 7 : 0;
            break;

        case '<<':
        case '>>':
        case '>>>':
            prec = 8;
            break;

        case '+':
        case '-':
            prec = 9;
            break;

        case '*':
        case '/':
        case '%':
            prec = 11;
            break;

        default:
            break;
        }

        return prec;
    }

    // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators

    function parseBinaryExpression() {
        var expr, token, prec, previousAllowIn, stack, right, operator, left, i;

        previousAllowIn = state.allowIn;
        state.allowIn = true;

        expr = parseUnaryExpression();

        token = lookahead;
        prec = binaryPrecedence(token, previousAllowIn);
        if (prec === 0) {
            return expr;
        }
        token.prec = prec;
        lex();

        stack = [expr, token, parseUnaryExpression()];

        while ((prec = binaryPrecedence(lookahead, previousAllowIn)) > 0) {

            // Reduce: make a binary expression from the three topmost entries.
            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
                right = stack.pop();
                operator = stack.pop().value;
                left = stack.pop();
                stack.push(delegate.createBinaryExpression(operator, left, right));
            }

            // Shift.
            token = lex();
            token.prec = prec;
            stack.push(token);
            stack.push(parseUnaryExpression());
        }

        state.allowIn = previousAllowIn;

        // Final reduce to clean-up the stack.
        i = stack.length - 1;
        expr = stack[i];
        while (i > 1) {
            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
            i -= 2;
        }
        return expr;
    }


    // 11.12 Conditional Operator

    function parseConditionalExpression() {
        var expr, previousAllowIn, consequent, alternate;

        expr = parseBinaryExpression();

        if (match('?')) {
            lex();
            previousAllowIn = state.allowIn;
            state.allowIn = true;
            consequent = parseAssignmentExpression();
            state.allowIn = previousAllowIn;
            expect(':');
            alternate = parseAssignmentExpression();

            expr = delegate.createConditionalExpression(expr, consequent, alternate);
        }

        return expr;
    }

    // 11.13 Assignment Operators

    function reinterpretAsAssignmentBindingPattern(expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.kind !== 'init') {
                    throwError({}, Messages.InvalidLHSInAssignment);
                }
                reinterpretAsAssignmentBindingPattern(property.value);
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                if (element) {
                    reinterpretAsAssignmentBindingPattern(element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            if (isRestrictedWord(expr.name)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        } else if (expr.type === Syntax.SpreadElement) {
            reinterpretAsAssignmentBindingPattern(expr.argument);
            if (expr.argument.type === Syntax.ObjectPattern) {
                throwError({}, Messages.ObjectPatternAsSpread);
            }
        } else {
            if (expr.type !== Syntax.MemberExpression && expr.type !== Syntax.CallExpression && expr.type !== Syntax.NewExpression) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        }
    }


    function reinterpretAsDestructuredParameter(options, expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.kind !== 'init') {
                    throwError({}, Messages.InvalidLHSInFormalsList);
                }
                reinterpretAsDestructuredParameter(options, property.value);
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                if (element) {
                    reinterpretAsDestructuredParameter(options, element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            validateParam(options, expr, expr.name);
        } else {
            if (expr.type !== Syntax.MemberExpression) {
                throwError({}, Messages.InvalidLHSInFormalsList);
            }
        }
    }

    function reinterpretAsCoverFormalsList(expressions) {
        var i, len, param, params, defaults, defaultCount, options, rest;

        params = [];
        defaults = [];
        defaultCount = 0;
        rest = null;
        options = {
            paramSet: {}
        };

        for (i = 0, len = expressions.length; i < len; i += 1) {
            param = expressions[i];
            if (param.type === Syntax.Identifier) {
                params.push(param);
                defaults.push(null);
                validateParam(options, param, param.name);
            } else if (param.type === Syntax.ObjectExpression || param.type === Syntax.ArrayExpression) {
                reinterpretAsDestructuredParameter(options, param);
                params.push(param);
                defaults.push(null);
            } else if (param.type === Syntax.SpreadElement) {
                assert(i === len - 1, "It is guaranteed that SpreadElement is last element by parseExpression");
                reinterpretAsDestructuredParameter(options, param.argument);
                rest = param.argument;
            } else if (param.type === Syntax.AssignmentExpression) {
                params.push(param.left);
                defaults.push(param.right);
                ++defaultCount;
            } else {
                return null;
            }
        }

        if (options.firstRestricted) {
            throwError(options.firstRestricted, options.message);
        }
        if (options.stricted) {
            throwErrorTolerant(options.stricted, options.message);
        }

        if (defaultCount === 0) {
            defaults = [];
        }

        return { params: params, defaults: defaults, rest: rest };
    }

    function parseArrowFunctionExpression(options) {
        var previousStrict, previousYieldAllowed, body;

        expect('=>');

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        strict = true;
        state.yieldAllowed = false;
        body = parseConciseBody();
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;

        return delegate.createArrowFunctionExpression(options.params, options.defaults, body, options.rest, body.type !== Syntax.BlockStatement);
    }

    function parseAssignmentExpression() {
        var expr, token, params, oldParenthesizedCount;

        if (matchKeyword('yield')) {
            return parseYieldExpression();
        }

        oldParenthesizedCount = state.parenthesizedCount;

        if (match('(')) {
            token = lookahead2();
            if ((token.type === Token.Punctuator && token.value === ')') || token.value === '...') {
                params = parseParams();
                if (!match('=>')) {
                    throwUnexpected(lex());
                }
                return parseArrowFunctionExpression(params);
            }
        }

        token = lookahead;
        expr = parseConditionalExpression();

        if (match('=>') && expr.type === Syntax.Identifier) {
            if (state.parenthesizedCount === oldParenthesizedCount || state.parenthesizedCount === (oldParenthesizedCount + 1)) {
                if (isRestrictedWord(expr.name)) {
                    throwError({}, Messages.StrictParamName);
                }
                return parseArrowFunctionExpression({ params: [ expr ], defaults: [], rest: null });
            }
        }

        if (matchAssign()) {
            // 11.13.1
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant(token, Messages.StrictLHSAssignment);
            }

            // ES.next draf 11.13 Runtime Semantics step 1
            if (match('=') && (expr.type === Syntax.ObjectExpression || expr.type === Syntax.ArrayExpression)) {
                reinterpretAsAssignmentBindingPattern(expr);
            } else if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            expr = delegate.createAssignmentExpression(lex().value, expr, parseAssignmentExpression());
        }

        return expr;
    }

    // 11.14 Comma Operator

    function parseExpression() {
        var expr, expressions, sequence, coverFormalsList, spreadFound, token;

        expr = parseAssignmentExpression();
        expressions = [ expr ];

        if (match(',')) {
            while (index < length) {
                if (!match(',')) {
                    break;
                }

                lex();
                expr = parseSpreadOrAssignmentExpression();
                expressions.push(expr);

                if (expr.type === Syntax.SpreadElement) {
                    spreadFound = true;
                    if (!match(')')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                    break;
                }
            }

            sequence = delegate.createSequenceExpression(expressions);
        }

        if (state.allowArrowFunction && match(')')) {
            token = lookahead2();
            if (token.value === '=>') {
                lex();

                state.allowArrowFunction = false;
                expr = expressions;
                coverFormalsList = reinterpretAsCoverFormalsList(expr);
                if (coverFormalsList) {
                    return parseArrowFunctionExpression(coverFormalsList);
                }

                throwUnexpected(token);
            }
        }

        if (spreadFound) {
            throwError({}, Messages.IllegalSpread);
        }

        return sequence || expr;
    }

    // 12.1 Block

    function parseStatementList() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseSourceElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseBlock() {
        var block;

        expect('{');

        block = parseStatementList();

        expect('}');

        return delegate.createBlockStatement(block);
    }

    // 12.2 Variable Statement

    function parseVariableIdentifier() {
        var token = lex();

        if (token.type !== Token.Identifier) {
            throwUnexpected(token);
        }

        return delegate.createIdentifier(token.value);
    }

    function parseVariableDeclaration(kind) {
        var id,
            init = null;
        if (match('{')) {
            id = parseObjectInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
        } else if (match('[')) {
            id = parseArrayInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
        } else {
            if (state.allowDefault) {
                id = matchKeyword('default') ? parseNonComputedProperty() : parseVariableIdentifier();
            } else {
                id = parseVariableIdentifier();
            }
            // 12.2.1
            if (strict && isRestrictedWord(id.name)) {
                throwErrorTolerant({}, Messages.StrictVarName);
            }
        }

        if (kind === 'const') {
            if (!match('=')) {
                throwError({}, Messages.NoUnintializedConst);
            }
            expect('=');
            init = parseAssignmentExpression();
        } else if (match('=')) {
            lex();
            init = parseAssignmentExpression();
        }

        return delegate.createVariableDeclarator(id, init);
    }

    function parseVariableDeclarationList(kind) {
        var list = [];

        do {
            list.push(parseVariableDeclaration(kind));
            if (!match(',')) {
                break;
            }
            lex();
        } while (index < length);

        return list;
    }

    function parseVariableStatement() {
        var declarations;

        expectKeyword('var');

        declarations = parseVariableDeclarationList();

        consumeSemicolon();

        return delegate.createVariableDeclaration(declarations, 'var');
    }

    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
        var declarations;

        expectKeyword(kind);

        declarations = parseVariableDeclarationList(kind);

        consumeSemicolon();

        return delegate.createVariableDeclaration(declarations, kind);
    }

    // http://wiki.ecmascript.org/doku.php?id=harmony:modules

    function parseModuleDeclaration() {
        var id, src, body;

        lex();   // 'module'

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterModule);
        }

        switch (lookahead.type) {

        case Token.StringLiteral:
            id = parsePrimaryExpression();
            body = parseModuleBlock();
            src = null;
            break;

        case Token.Identifier:
            id = parseVariableIdentifier();
            body = null;
            if (!matchContextualKeyword('from')) {
                throwUnexpected(lex());
            }
            lex();
            src = parsePrimaryExpression();
            if (src.type !== Syntax.Literal) {
                throwError({}, Messages.InvalidModuleSpecifier);
            }
            break;
        }

        consumeSemicolon();
        return delegate.createModuleDeclaration(id, src, body);
    }

    function parseExportBatchSpecifier() {
        expect('*');
        return delegate.createExportBatchSpecifier();
    }

    function parseExportSpecifier() {
        var id, name = null;

        id = parseVariableIdentifier();
        if (matchContextualKeyword('as')) {
            lex();
            name = parseNonComputedProperty();
        }

        return delegate.createExportSpecifier(id, name);
    }

    function parseExportDeclaration() {
        var previousAllowDefault, decl, def, src, specifiers;

        expectKeyword('export');

        if (matchKeyword('default')) {
            lex();
            if (match('=')) {
                lex();
                def = parseAssignmentExpression();
            } else if (lookahead.type === Token.Keyword) {
                switch (lookahead.value) {
                case 'let':
                case 'const':
                case 'var':
                case 'class':
                    def = parseSourceElement();
                    break;
                case 'function':
                    def = parseFunctionExpression();
                    break;
                default:
                    throwUnexpected(lex());
                }
            } else {
                def = parseAssignmentExpression();
            }
            consumeSemicolon();
            return delegate.createExportDeclaration(true, def, null, null);
        }

        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'let':
            case 'const':
            case 'var':
            case 'class':
            case 'function':
                previousAllowDefault = state.allowDefault;
                state.allowDefault = true;
                decl = delegate.createExportDeclaration(false, parseSourceElement(), null, null);
                state.allowDefault = previousAllowDefault;
                return decl;
            }
            throwUnexpected(lex());
        }

        specifiers = [];
        src = null;

        if (match('*')) {
            specifiers.push(parseExportBatchSpecifier());
        } else {
            expect('{');
            do {
                specifiers.push(parseExportSpecifier());
            } while (match(',') && lex());
            expect('}');
        }

        if (matchContextualKeyword('from')) {
            lex();
            src = parsePrimaryExpression();
            if (src.type !== Syntax.Literal) {
                throwError({}, Messages.InvalidModuleSpecifier);
            }
        }

        consumeSemicolon();

        return delegate.createExportDeclaration(false, null, specifiers, src);
    }

    function parseImportDeclaration() {
        var specifiers, kind, src;

        expectKeyword('import');
        specifiers = [];

        if (isIdentifierName(lookahead)) {
            kind = 'default';
            specifiers.push(parseImportSpecifier());

            if (!matchContextualKeyword('from')) {
                throwError({}, Messages.NoFromAfterImport);
            }
            lex();
        } else if (match('{')) {
            kind = 'named';
            lex();
            do {
                specifiers.push(parseImportSpecifier());
            } while (match(',') && lex());
            expect('}');

            if (!matchContextualKeyword('from')) {
                throwError({}, Messages.NoFromAfterImport);
            }
            lex();
        }

        src = parsePrimaryExpression();
        if (src.type !== Syntax.Literal) {
            throwError({}, Messages.InvalidModuleSpecifier);
        }

        consumeSemicolon();

        return delegate.createImportDeclaration(specifiers, kind, src);
    }

    function parseImportSpecifier() {
        var id, name = null;

        id = parseNonComputedProperty();
        if (matchContextualKeyword('as')) {
            lex();
            name = parseVariableIdentifier();
        }

        return delegate.createImportSpecifier(id, name);
    }

    // 12.3 Empty Statement

    function parseEmptyStatement() {
        expect(';');
        return delegate.createEmptyStatement();
    }

    // 12.4 Expression Statement

    function parseExpressionStatement() {
        var expr = parseExpression();
        consumeSemicolon();
        return delegate.createExpressionStatement(expr);
    }

    // 12.5 If statement

    function parseIfStatement() {
        var test, consequent, alternate;

        expectKeyword('if');

        expect('(');

        test = parseExpression();

        expect(')');

        consequent = parseStatement();

        if (matchKeyword('else')) {
            lex();
            alternate = parseStatement();
        } else {
            alternate = null;
        }

        return delegate.createIfStatement(test, consequent, alternate);
    }

    // 12.6 Iteration Statements

    function parseDoWhileStatement() {
        var body, test, oldInIteration;

        expectKeyword('do');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        if (match(';')) {
            lex();
        }

        return delegate.createDoWhileStatement(body, test);
    }

    function parseWhileStatement() {
        var test, body, oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        return delegate.createWhileStatement(test, body);
    }

    function parseForVariableDeclaration() {
        var token = lex(),
            declarations = parseVariableDeclarationList();

        return delegate.createVariableDeclaration(declarations, token.value);
    }

    function parseForStatement(opts) {
        var init, test, update, left, right, body, operator, oldInIteration;
        init = test = update = null;
        expectKeyword('for');

        // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
        if (matchContextualKeyword("each")) {
            throwError({}, Messages.EachNotAllowed);
        }

        expect('(');

        if (match(';')) {
            lex();
        } else {
            if (matchKeyword('var') || matchKeyword('let') || matchKeyword('const')) {
                state.allowIn = false;
                init = parseForVariableDeclaration();
                state.allowIn = true;

                if (init.declarations.length === 1) {
                    if (matchKeyword('in') || matchContextualKeyword('of')) {
                        operator = lookahead;
                        if (!((operator.value === 'in' || init.kind !== 'var') && init.declarations[0].init)) {
                            lex();
                            left = init;
                            right = parseExpression();
                            init = null;
                        }
                    }
                }
            } else {
                state.allowIn = false;
                init = parseExpression();
                state.allowIn = true;

                if (matchContextualKeyword('of')) {
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                } else if (matchKeyword('in')) {
                    // LeftHandSideExpression
                    if (!isAssignableLeftHandSide(init)) {
                        throwError({}, Messages.InvalidLHSInForIn);
                    }
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            }

            if (typeof left === 'undefined') {
                expect(';');
            }
        }

        if (typeof left === 'undefined') {

            if (!match(';')) {
                test = parseExpression();
            }
            expect(';');

            if (!match(')')) {
                update = parseExpression();
            }
        }

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        if (!(opts !== undefined && opts.ignore_body)) {
            body = parseStatement();
        }

        state.inIteration = oldInIteration;

        if (typeof left === 'undefined') {
            return delegate.createForStatement(init, test, update, body);
        }

        if (operator.value === 'in') {
            return delegate.createForInStatement(left, right, body);
        }
        return delegate.createForOfStatement(left, right, body);
    }

    // 12.7 The continue statement

    function parseContinueStatement() {
        var label = null, key;

        expectKeyword('continue');

        // Optimize the most common form: 'continue;'.
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return delegate.createContinueStatement(null);
        }

        if (peekLineTerminator()) {
            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return delegate.createContinueStatement(null);
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !state.inIteration) {
            throwError({}, Messages.IllegalContinue);
        }

        return delegate.createContinueStatement(label);
    }

    // 12.8 The break statement

    function parseBreakStatement() {
        var label = null, key;

        expectKeyword('break');

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return delegate.createBreakStatement(null);
        }

        if (peekLineTerminator()) {
            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return delegate.createBreakStatement(null);
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }

        return delegate.createBreakStatement(label);
    }

    // 12.9 The return statement

    function parseReturnStatement() {
        var argument = null;

        expectKeyword('return');

        if (!state.inFunctionBody) {
            throwErrorTolerant({}, Messages.IllegalReturn);
        }

        // 'return' followed by a space and an identifier is very common.
        if (source.charCodeAt(index) === 32) {
            if (isIdentifierStart(source.charCodeAt(index + 1))) {
                argument = parseExpression();
                consumeSemicolon();
                return delegate.createReturnStatement(argument);
            }
        }

        if (peekLineTerminator()) {
            return delegate.createReturnStatement(null);
        }

        if (!match(';')) {
            if (!match('}') && lookahead.type !== Token.EOF) {
                argument = parseExpression();
            }
        }

        consumeSemicolon();

        return delegate.createReturnStatement(argument);
    }

    // 12.10 The with statement

    function parseWithStatement() {
        var object, body;

        if (strict) {
            throwErrorTolerant({}, Messages.StrictModeWith);
        }

        expectKeyword('with');

        expect('(');

        object = parseExpression();

        expect(')');

        body = parseStatement();

        return delegate.createWithStatement(object, body);
    }

    // 12.10 The swith statement

    function parseSwitchCase() {
        var test,
            consequent = [],
            sourceElement;

        if (matchKeyword('default')) {
            lex();
            test = null;
        } else {
            expectKeyword('case');
            test = parseExpression();
        }
        expect(':');

        while (index < length) {
            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            consequent.push(sourceElement);
        }

        return delegate.createSwitchCase(test, consequent);
    }

    function parseSwitchStatement() {
        var discriminant, cases, clause, oldInSwitch, defaultFound;

        expectKeyword('switch');

        expect('(');

        discriminant = parseExpression();

        expect(')');

        expect('{');

        cases = [];

        if (match('}')) {
            lex();
            return delegate.createSwitchStatement(discriminant, cases);
        }

        oldInSwitch = state.inSwitch;
        state.inSwitch = true;
        defaultFound = false;

        while (index < length) {
            if (match('}')) {
                break;
            }
            clause = parseSwitchCase();
            if (clause.test === null) {
                if (defaultFound) {
                    throwError({}, Messages.MultipleDefaultsInSwitch);
                }
                defaultFound = true;
            }
            cases.push(clause);
        }

        state.inSwitch = oldInSwitch;

        expect('}');

        return delegate.createSwitchStatement(discriminant, cases);
    }

    // 12.13 The throw statement

    function parseThrowStatement() {
        var argument;

        expectKeyword('throw');

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterThrow);
        }

        argument = parseExpression();

        consumeSemicolon();

        return delegate.createThrowStatement(argument);
    }

    // 12.14 The try statement

    function parseCatchClause() {
        var param, body;

        expectKeyword('catch');

        expect('(');
        if (match(')')) {
            throwUnexpected(lookahead);
        }

        param = parseExpression();
        // 12.14.1
        if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
            throwErrorTolerant({}, Messages.StrictCatchVariable);
        }

        expect(')');
        body = parseBlock();
        return delegate.createCatchClause(param, body);
    }

    function parseTryStatement() {
        var block, handlers = [], finalizer = null;

        expectKeyword('try');

        block = parseBlock();

        if (matchKeyword('catch')) {
            handlers.push(parseCatchClause());
        }

        if (matchKeyword('finally')) {
            lex();
            finalizer = parseBlock();
        }

        if (handlers.length === 0 && !finalizer) {
            throwError({}, Messages.NoCatchOrFinally);
        }

        return delegate.createTryStatement(block, [], handlers, finalizer);
    }

    // 12.15 The debugger statement

    function parseDebuggerStatement() {
        expectKeyword('debugger');

        consumeSemicolon();

        return delegate.createDebuggerStatement();
    }

    // 12 Statements

    function parseStatement() {
        var type = lookahead.type,
            expr,
            labeledBody,
            key;

        if (type === Token.EOF) {
            throwUnexpected(lookahead);
        }

        if (type === Token.Punctuator) {
            switch (lookahead.value) {
            case ';':
                return parseEmptyStatement();
            case '{':
                return parseBlock();
            case '(':
                return parseExpressionStatement();
            default:
                break;
            }
        }

        if (type === Token.Keyword) {
            switch (lookahead.value) {
            case 'break':
                return parseBreakStatement();
            case 'continue':
                return parseContinueStatement();
            case 'debugger':
                return parseDebuggerStatement();
            case 'do':
                return parseDoWhileStatement();
            case 'for':
                return parseForStatement();
            case 'function':
                return parseFunctionDeclaration();
            case 'class':
                return parseClassDeclaration();
            case 'if':
                return parseIfStatement();
            case 'return':
                return parseReturnStatement();
            case 'switch':
                return parseSwitchStatement();
            case 'throw':
                return parseThrowStatement();
            case 'try':
                return parseTryStatement();
            case 'var':
                return parseVariableStatement();
            case 'while':
                return parseWhileStatement();
            case 'with':
                return parseWithStatement();
            default:
                break;
            }
        }

        expr = parseExpression();

        // 12.12 Labelled Statements
        if ((expr.type === Syntax.Identifier) && match(':')) {
            lex();

            key = '$' + expr.name;
            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.Redeclaration, 'Label', expr.name);
            }

            state.labelSet[key] = true;
            labeledBody = parseStatement();
            delete state.labelSet[key];
            return delegate.createLabeledStatement(expr, labeledBody);
        }

        consumeSemicolon();

        return delegate.createExpressionStatement(expr);
    }

    // 13 Function Definition

    function parseConciseBody() {
        if (match('{')) {
            return parseFunctionSourceElements();
        }
        return parseAssignmentExpression();
    }

    function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted,
            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesizedCount;

        expect('{');

        while (index < length) {
            if (lookahead.type !== Token.StringLiteral) {
                break;
            }
            token = lookahead;

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        oldLabelSet = state.labelSet;
        oldInIteration = state.inIteration;
        oldInSwitch = state.inSwitch;
        oldInFunctionBody = state.inFunctionBody;
        oldParenthesizedCount = state.parenthesizedCount;

        state.labelSet = {};
        state.inIteration = false;
        state.inSwitch = false;
        state.inFunctionBody = true;
        state.parenthesizedCount = 0;

        while (index < length) {
            if (match('}')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }

        expect('}');

        state.labelSet = oldLabelSet;
        state.inIteration = oldInIteration;
        state.inSwitch = oldInSwitch;
        state.inFunctionBody = oldInFunctionBody;
        state.parenthesizedCount = oldParenthesizedCount;

        return delegate.createBlockStatement(sourceElements);
    }

    function validateParam(options, param, name) {
        var key = '$' + name;
        if (strict) {
            if (isRestrictedWord(name)) {
                options.stricted = param;
                options.message = Messages.StrictParamName;
            }
            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                options.stricted = param;
                options.message = Messages.StrictParamDupe;
            }
        } else if (!options.firstRestricted) {
            if (isRestrictedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamName;
            } else if (isStrictModeReservedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictReservedWord;
            } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamDupe;
            }
        }
        options.paramSet[key] = true;
    }

    function parseParam(options) {
        var token, rest, param, def;

        token = lookahead;
        if (token.value === '...') {
            token = lex();
            rest = true;
        }

        if (match('[')) {
            param = parseArrayInitialiser();
            reinterpretAsDestructuredParameter(options, param);
        } else if (match('{')) {
            if (rest) {
                throwError({}, Messages.ObjectPatternAsRestParameter);
            }
            param = parseObjectInitialiser();
            reinterpretAsDestructuredParameter(options, param);
        } else {
            param = parseVariableIdentifier();
            validateParam(options, token, token.value);
            if (match('=')) {
                if (rest) {
                    throwErrorTolerant(lookahead, Messages.DefaultRestParameter);
                }
                lex();
                def = parseAssignmentExpression();
                ++options.defaultCount;
            }
        }

        if (rest) {
            if (!match(')')) {
                throwError({}, Messages.ParameterAfterRestParameter);
            }
            options.rest = param;
            return false;
        }

        options.params.push(param);
        options.defaults.push(def);
        return !match(')');
    }

    function parseParams(firstRestricted) {
        var options;

        options = {
            params: [],
            defaultCount: 0,
            defaults: [],
            rest: null,
            firstRestricted: firstRestricted
        };

        expect('(');

        if (!match(')')) {
            options.paramSet = {};
            while (index < length) {
                if (!parseParam(options)) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        if (options.defaultCount === 0) {
            options.defaults = [];
        }

        return options;
    }

    function parseFunctionDeclaration() {
        var id, body, token, tmp, firstRestricted, message, previousStrict, previousYieldAllowed, generator, expression;

        expectKeyword('function');

        generator = false;
        if (match('*')) {
            lex();
            generator = true;
        }

        token = lookahead;

        if (state.allowDefault) {
            id = matchKeyword('default') ? parseNonComputedProperty() : parseVariableIdentifier();
        } else {
            id = parseVariableIdentifier();
        }
        if (strict) {
            if (isRestrictedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictFunctionName);
            }
        } else {
            if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;

        // here we redo some work in order to set 'expression'
        expression = !match('{');
        body = parseConciseBody();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        if (state.yieldAllowed && !state.yieldFound) {
            throwErrorTolerant({}, Messages.NoYieldInGenerator);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;

        return delegate.createFunctionDeclaration(id, tmp.params, tmp.defaults, body, tmp.rest, generator, expression);
    }

    function parseFunctionExpression() {
        var token, id = null, firstRestricted, message, tmp, body, previousStrict, previousYieldAllowed, generator, expression;

        expectKeyword('function');

        generator = false;

        if (match('*')) {
            lex();
            generator = true;
        }

        if (!match('(')) {
            token = lookahead;
            id = parseVariableIdentifier();
            if (strict) {
                if (isRestrictedWord(token.value)) {
                    throwErrorTolerant(token, Messages.StrictFunctionName);
                }
            } else {
                if (isRestrictedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictFunctionName;
                } else if (isStrictModeReservedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictReservedWord;
                }
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;

        // here we redo some work in order to set 'expression'
        expression = !match('{');
        body = parseConciseBody();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        if (state.yieldAllowed && !state.yieldFound) {
            throwErrorTolerant({}, Messages.NoYieldInGenerator);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;

        return delegate.createFunctionExpression(id, tmp.params, tmp.defaults, body, tmp.rest, generator, expression);
    }

    function parseYieldExpression() {
        var delegateFlag, expr, previousYieldAllowed;

        expectKeyword('yield');

        if (!state.yieldAllowed) {
            throwErrorTolerant({}, Messages.IllegalYield);
        }

        delegateFlag = false;
        if (match('*')) {
            lex();
            delegateFlag = true;
        }

        // It is a Syntax Error if any AssignmentExpression Contains YieldExpression.
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = false;
        expr = parseAssignmentExpression();
        state.yieldAllowed = previousYieldAllowed;
        state.yieldFound = true;

        return delegate.createYieldExpression(expr, delegateFlag);
    }

    // 14 Classes

    function parseMethodDefinition(existingPropNames) {
        var token, key, param, propType, isValidDuplicateProp = false;

        if (lookahead.value === 'static') {
            propType = ClassPropertyType.static;
            lex();
        } else {
            propType = ClassPropertyType.prototype;
        }

        if (match('*')) {
            lex();
            return delegate.createMethodDefinition(
                propType,
                '',
                parseObjectPropertyKey(),
                parsePropertyMethodFunction({ generator: true })
            );
        }

        token = lookahead;
        key = parseObjectPropertyKey();

        if (token.value === 'get' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a setter
            if (existingPropNames[propType].hasOwnProperty(key.name)) {
                isValidDuplicateProp =
                    // There isn't already a getter for this prop
                    existingPropNames[propType][key.name].get === undefined
                    // There isn't already a data prop by this name
                    && existingPropNames[propType][key.name].data === undefined
                    // The only existing prop by this name is a setter
                    && existingPropNames[propType][key.name].set !== undefined;
                if (!isValidDuplicateProp) {
                    throwError(key, Messages.IllegalDuplicateClassProperty);
                }
            } else {
                existingPropNames[propType][key.name] = {};
            }
            existingPropNames[propType][key.name].get = true;

            expect('(');
            expect(')');
            return delegate.createMethodDefinition(
                propType,
                'get',
                key,
                parsePropertyFunction({ generator: false })
            );
        }
        if (token.value === 'set' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a getter
            if (existingPropNames[propType].hasOwnProperty(key.name)) {
                isValidDuplicateProp =
                    // There isn't already a setter for this prop
                    existingPropNames[propType][key.name].set === undefined
                    // There isn't already a data prop by this name
                    && existingPropNames[propType][key.name].data === undefined
                    // The only existing prop by this name is a getter
                    && existingPropNames[propType][key.name].get !== undefined;
                if (!isValidDuplicateProp) {
                    throwError(key, Messages.IllegalDuplicateClassProperty);
                }
            } else {
                existingPropNames[propType][key.name] = {};
            }
            existingPropNames[propType][key.name].set = true;

            expect('(');
            token = lookahead;
            param = [ parseVariableIdentifier() ];
            expect(')');
            return delegate.createMethodDefinition(
                propType,
                'set',
                key,
                parsePropertyFunction({ params: param, generator: false, name: token })
            );
        }

        // It is a syntax error if any other properties have the same name as a
        // non-getter, non-setter method
        if (existingPropNames[propType].hasOwnProperty(key.name)) {
            throwError(key, Messages.IllegalDuplicateClassProperty);
        } else {
            existingPropNames[propType][key.name] = {};
        }
        existingPropNames[propType][key.name].data = true;

        return delegate.createMethodDefinition(
            propType,
            '',
            key,
            parsePropertyMethodFunction({ generator: false })
        );
    }

    function parseClassElement(existingProps) {
        if (match(';')) {
            lex();
            return;
        }
        return parseMethodDefinition(existingProps);
    }

    function parseClassBody() {
        var classElement, classElements = [], existingProps = {};

        existingProps[ClassPropertyType.static] = {};
        existingProps[ClassPropertyType.prototype] = {};

        expect('{');

        while (index < length) {
            if (match('}')) {
                break;
            }
            classElement = parseClassElement(existingProps);

            if (typeof classElement !== 'undefined') {
                classElements.push(classElement);
            }
        }

        expect('}');

        return delegate.createClassBody(classElements);
    }

    function parseClassExpression() {
        var id, previousYieldAllowed, superClass = null;

        expectKeyword('class');

        if (!matchKeyword('extends') && !match('{')) {
            id = parseVariableIdentifier();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseAssignmentExpression();
            state.yieldAllowed = previousYieldAllowed;
        }

        return delegate.createClassExpression(id, superClass, parseClassBody());
    }

    function parseClassDeclaration() {
        var id, previousYieldAllowed, superClass = null;

        expectKeyword('class');

        if (state.allowDefault) {
            id = matchKeyword('default') ? parseNonComputedProperty() : parseVariableIdentifier();
        } else {
            id = parseVariableIdentifier();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseAssignmentExpression();
            state.yieldAllowed = previousYieldAllowed;
        }

        return delegate.createClassDeclaration(id, superClass, parseClassBody());
    }

    // 15 Program

    function matchModuleDeclaration() {
        var id;
        if (matchContextualKeyword('module')) {
            id = lookahead2();
            return id.type === Token.StringLiteral || id.type === Token.Identifier;
        }
        return false;
    }

    function parseSourceElement() {
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'const':
            case 'let':
                return parseConstLetDeclaration(lookahead.value);
            case 'function':
                return parseFunctionDeclaration();
            case 'export':
                return parseExportDeclaration();
            case 'import':
                return parseImportDeclaration();
            default:
                return parseStatement();
            }
        }

        if (matchModuleDeclaration()) {
            throwError({}, Messages.NestedModule);
        }

        if (lookahead.type !== Token.EOF) {
            return parseStatement();
        }
    }

    function parseProgramElement() {
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'export':
                return parseExportDeclaration();
            case 'import':
                return parseImportDeclaration();
            }
        }

        if (matchModuleDeclaration()) {
            return parseModuleDeclaration();
        }

        return parseSourceElement();
    }

    function parseProgramElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;

        while (index < length) {
            token = lookahead;
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseProgramElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        while (index < length) {
            sourceElement = parseProgramElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }
        return sourceElements;
    }

    function parseModuleElement() {
        return parseSourceElement();
    }

    function parseModuleElements() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseModuleElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseModuleBlock() {
        var block;

        expect('{');

        block = parseModuleElements();

        expect('}');

        return delegate.createBlockStatement(block);
    }

    function parseProgram() {
        var body;
        strict = false;
        peek();
        body = parseProgramElements();
        return delegate.createProgram(body);
    }

    // The following functions are needed only when the option to preserve
    // the comments is active.

    function addComment(type, value, start, end, loc) {
        assert(typeof start === 'number', 'Comment must have valid position');

        // Because the way the actual token is scanned, often the comments
        // (if any) are skipped twice during the lexical analysis.
        // Thus, we need to skip adding a comment if the comment array already
        // handled it.
        if (extra.comments.length > 0) {
            if (extra.comments[extra.comments.length - 1].range[1] > start) {
                return;
            }
        }

        extra.comments.push({
            type: type,
            value: value,
            range: [start, end],
            loc: loc
        });
    }

    function scanComment() {
        var comment, ch, loc, start, blockComment, lineComment;

        comment = '';
        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source[index];

            if (lineComment) {
                ch = source[index++];
                if (isLineTerminator(ch.charCodeAt(0))) {
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart - 1
                    };
                    lineComment = false;
                    addComment('Line', comment, start, index - 1, loc);
                    if (ch === '\r' && source[index] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                    comment = '';
                } else if (index >= length) {
                    lineComment = false;
                    comment += ch;
                    loc.end = {
                        line: lineNumber,
                        column: length - lineStart
                    };
                    addComment('Line', comment, start, length, loc);
                } else {
                    comment += ch;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch.charCodeAt(0))) {
                    if (ch === '\r' && source[index + 1] === '\n') {
                        ++index;
                        comment += '\r\n';
                    } else {
                        comment += ch;
                    }
                    ++lineNumber;
                    ++index;
                    lineStart = index;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    ch = source[index++];
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    comment += ch;
                    if (ch === '*') {
                        ch = source[index];
                        if (ch === '/') {
                            comment = comment.substr(0, comment.length - 1);
                            blockComment = false;
                            ++index;
                            loc.end = {
                                line: lineNumber,
                                column: index - lineStart
                            };
                            addComment('Block', comment, start, index, loc);
                            comment = '';
                        }
                    }
                }
            } else if (ch === '/') {
                ch = source[index + 1];
                if (ch === '/') {
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart
                        }
                    };
                    start = index;
                    index += 2;
                    lineComment = true;
                    if (index >= length) {
                        loc.end = {
                            line: lineNumber,
                            column: index - lineStart
                        };
                        lineComment = false;
                        addComment('Line', comment, start, index, loc);
                    }
                } else if (ch === '*') {
                    start = index;
                    index += 2;
                    blockComment = true;
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart - 2
                        }
                    };
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch.charCodeAt(0))) {
                ++index;
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++index;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function filterCommentLocation() {
        var i, entry, comment, comments = [];

        for (i = 0; i < extra.comments.length; ++i) {
            entry = extra.comments[i];
            comment = {
                type: entry.type,
                value: entry.value
            };
            if (extra.range) {
                comment.range = entry.range;
            }
            if (extra.loc) {
                comment.loc = entry.loc;
            }
            comments.push(comment);
        }

        extra.comments = comments;
    }

    function collectToken() {
        var start, loc, token, range, value;

        skipComment();
        start = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        token = extra.advance();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (token.type !== Token.EOF) {
            range = [token.range[0], token.range[1]];
            value = source.slice(token.range[0], token.range[1]);
            extra.tokens.push({
                type: TokenName[token.type],
                value: value,
                range: range,
                loc: loc
            });
        }

        return token;
    }

    function collectRegex() {
        var pos, loc, regex, token;

        skipComment();

        pos = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        regex = extra.scanRegExp();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (!extra.tokenize) {
            // Pop the previous token, which is likely '/' or '/='
            if (extra.tokens.length > 0) {
                token = extra.tokens[extra.tokens.length - 1];
                if (token.range[0] === pos && token.type === 'Punctuator') {
                    if (token.value === '/' || token.value === '/=') {
                        extra.tokens.pop();
                    }
                }
            }

            extra.tokens.push({
                type: 'RegularExpression',
                value: regex.literal,
                range: [pos, index],
                loc: loc
            });
        }

        return regex;
    }

    function filterTokenLocation() {
        var i, entry, token, tokens = [];

        for (i = 0; i < extra.tokens.length; ++i) {
            entry = extra.tokens[i];
            token = {
                type: entry.type,
                value: entry.value
            };
            if (extra.range) {
                token.range = entry.range;
            }
            if (extra.loc) {
                token.loc = entry.loc;
            }
            tokens.push(token);
        }

        extra.tokens = tokens;
    }

    function LocationMarker() {
        this.range = [index, index];
        this.loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            },
            end: {
                line: lineNumber,
                column: index - lineStart
            }
        };
    }

    LocationMarker.prototype = {
        constructor: LocationMarker,

        end: function () {
            this.range[1] = index;
            this.loc.end.line = lineNumber;
            this.loc.end.column = index - lineStart;
        },

        applyGroup: function (node) {
            if (extra.range) {
                node.groupRange = [this.range[0], this.range[1]];
            }
            if (extra.loc) {
                node.groupLoc = {
                    start: {
                        line: this.loc.start.line,
                        column: this.loc.start.column
                    },
                    end: {
                        line: this.loc.end.line,
                        column: this.loc.end.column
                    }
                };
                node = delegate.postProcess(node);
            }
        },

        apply: function (node) {
            var nodeType = typeof node;
            assert(nodeType === "object",
                "Applying location marker to an unexpected node type: " +
                    nodeType);

            if (extra.range) {
                node.range = [this.range[0], this.range[1]];
            }
            if (extra.loc) {
                node.loc = {
                    start: {
                        line: this.loc.start.line,
                        column: this.loc.start.column
                    },
                    end: {
                        line: this.loc.end.line,
                        column: this.loc.end.column
                    }
                };
                node = delegate.postProcess(node);
            }
        }
    };

    function createLocationMarker() {
        return new LocationMarker();
    }

    function trackGroupExpression() {
        var marker, expr;

        skipComment();
        marker = createLocationMarker();
        expect('(');

        ++state.parenthesizedCount;

        state.allowArrowFunction = !state.allowArrowFunction;
        expr = parseExpression();
        state.allowArrowFunction = false;

        if (expr.type === 'ArrowFunctionExpression') {
            marker.end();
            marker.apply(expr);
        } else {
            expect(')');
            marker.end();
            marker.applyGroup(expr);
        }

        return expr;
    }

    function trackLeftHandSideExpression() {
        var marker, expr;

        skipComment();
        marker = createLocationMarker();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || lookahead.type === Token.Template) {
            if (match('[')) {
                expr = delegate.createMemberExpression('[', expr, parseComputedMember());
                marker.end();
                marker.apply(expr);
            } else if (match('.')) {
                expr = delegate.createMemberExpression('.', expr, parseNonComputedMember());
                marker.end();
                marker.apply(expr);
            } else {
                expr = delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral());
                marker.end();
                marker.apply(expr);
            }
        }

        return expr;
    }

    function trackLeftHandSideExpressionAllowCall() {
        var marker, expr, args;

        skipComment();
        marker = createLocationMarker();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || match('(') || lookahead.type === Token.Template) {
            if (match('(')) {
                args = parseArguments();
                expr = delegate.createCallExpression(expr, args);
                marker.end();
                marker.apply(expr);
            } else if (match('[')) {
                expr = delegate.createMemberExpression('[', expr, parseComputedMember());
                marker.end();
                marker.apply(expr);
            } else if (match('.')) {
                expr = delegate.createMemberExpression('.', expr, parseNonComputedMember());
                marker.end();
                marker.apply(expr);
            } else {
                expr = delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral());
                marker.end();
                marker.apply(expr);
            }
        }

        return expr;
    }

    function filterGroup(node) {
        var n, i, entry;

        n = (Object.prototype.toString.apply(node) === '[object Array]') ? [] : {};
        for (i in node) {
            if (node.hasOwnProperty(i) && i !== 'groupRange' && i !== 'groupLoc') {
                entry = node[i];
                if (entry === null || typeof entry !== 'object' || entry instanceof RegExp) {
                    n[i] = entry;
                } else {
                    n[i] = filterGroup(entry);
                }
            }
        }
        return n;
    }

    function wrapTrackingFunction(range, loc) {

        return function (parseFunction) {

            function isBinary(node) {
                return node.type === Syntax.LogicalExpression ||
                    node.type === Syntax.BinaryExpression;
            }

            function visit(node) {
                var start, end;

                if (isBinary(node.left)) {
                    visit(node.left);
                }
                if (isBinary(node.right)) {
                    visit(node.right);
                }

                if (range) {
                    if (node.left.groupRange || node.right.groupRange) {
                        start = node.left.groupRange ? node.left.groupRange[0] : node.left.range[0];
                        end = node.right.groupRange ? node.right.groupRange[1] : node.right.range[1];
                        node.range = [start, end];
                    } else if (typeof node.range === 'undefined') {
                        start = node.left.range[0];
                        end = node.right.range[1];
                        node.range = [start, end];
                    }
                }
                if (loc) {
                    if (node.left.groupLoc || node.right.groupLoc) {
                        start = node.left.groupLoc ? node.left.groupLoc.start : node.left.loc.start;
                        end = node.right.groupLoc ? node.right.groupLoc.end : node.right.loc.end;
                        node.loc = {
                            start: start,
                            end: end
                        };
                        node = delegate.postProcess(node);
                    } else if (typeof node.loc === 'undefined') {
                        node.loc = {
                            start: node.left.loc.start,
                            end: node.right.loc.end
                        };
                        node = delegate.postProcess(node);
                    }
                }
            }

            return function () {
                var marker, node;

                skipComment();

                marker = createLocationMarker();
                node = parseFunction.apply(null, arguments);
                marker.end();

                if (range && typeof node.range === 'undefined') {
                    marker.apply(node);
                }

                if (loc && typeof node.loc === 'undefined') {
                    marker.apply(node);
                }

                if (isBinary(node)) {
                    visit(node);
                }

                return node;
            };
        };
    }

    function patch() {

        var wrapTracking;

        if (extra.comments) {
            extra.skipComment = skipComment;
            skipComment = scanComment;
        }

        if (extra.range || extra.loc) {

            extra.parseGroupExpression = parseGroupExpression;
            extra.parseLeftHandSideExpression = parseLeftHandSideExpression;
            extra.parseLeftHandSideExpressionAllowCall = parseLeftHandSideExpressionAllowCall;
            parseGroupExpression = trackGroupExpression;
            parseLeftHandSideExpression = trackLeftHandSideExpression;
            parseLeftHandSideExpressionAllowCall = trackLeftHandSideExpressionAllowCall;

            wrapTracking = wrapTrackingFunction(extra.range, extra.loc);

            extra.parseAssignmentExpression = parseAssignmentExpression;
            extra.parseBinaryExpression = parseBinaryExpression;
            extra.parseBlock = parseBlock;
            extra.parseFunctionSourceElements = parseFunctionSourceElements;
            extra.parseCatchClause = parseCatchClause;
            extra.parseComputedMember = parseComputedMember;
            extra.parseConditionalExpression = parseConditionalExpression;
            extra.parseConstLetDeclaration = parseConstLetDeclaration;
            extra.parseExportBatchSpecifier = parseExportBatchSpecifier;
            extra.parseExportDeclaration = parseExportDeclaration;
            extra.parseExportSpecifier = parseExportSpecifier;
            extra.parseExpression = parseExpression;
            extra.parseForVariableDeclaration = parseForVariableDeclaration;
            extra.parseFunctionDeclaration = parseFunctionDeclaration;
            extra.parseFunctionExpression = parseFunctionExpression;
            extra.parseParams = parseParams;
            extra.parseImportDeclaration = parseImportDeclaration;
            extra.parseImportSpecifier = parseImportSpecifier;
            extra.parseModuleDeclaration = parseModuleDeclaration;
            extra.parseModuleBlock = parseModuleBlock;
            extra.parseNewExpression = parseNewExpression;
            extra.parseNonComputedProperty = parseNonComputedProperty;
            extra.parseObjectProperty = parseObjectProperty;
            extra.parseObjectPropertyKey = parseObjectPropertyKey;
            extra.parsePostfixExpression = parsePostfixExpression;
            extra.parsePrimaryExpression = parsePrimaryExpression;
            extra.parseProgram = parseProgram;
            extra.parsePropertyFunction = parsePropertyFunction;
            extra.parseSpreadOrAssignmentExpression = parseSpreadOrAssignmentExpression;
            extra.parseTemplateElement = parseTemplateElement;
            extra.parseTemplateLiteral = parseTemplateLiteral;
            extra.parseStatement = parseStatement;
            extra.parseSwitchCase = parseSwitchCase;
            extra.parseUnaryExpression = parseUnaryExpression;
            extra.parseVariableDeclaration = parseVariableDeclaration;
            extra.parseVariableIdentifier = parseVariableIdentifier;
            extra.parseMethodDefinition = parseMethodDefinition;
            extra.parseClassDeclaration = parseClassDeclaration;
            extra.parseClassExpression = parseClassExpression;
            extra.parseClassBody = parseClassBody;

            parseAssignmentExpression = wrapTracking(extra.parseAssignmentExpression);
            parseBinaryExpression = wrapTracking(extra.parseBinaryExpression);
            parseBlock = wrapTracking(extra.parseBlock);
            parseFunctionSourceElements = wrapTracking(extra.parseFunctionSourceElements);
            parseCatchClause = wrapTracking(extra.parseCatchClause);
            parseComputedMember = wrapTracking(extra.parseComputedMember);
            parseConditionalExpression = wrapTracking(extra.parseConditionalExpression);
            parseConstLetDeclaration = wrapTracking(extra.parseConstLetDeclaration);
            parseExportBatchSpecifier = wrapTracking(parseExportBatchSpecifier);
            parseExportDeclaration = wrapTracking(parseExportDeclaration);
            parseExportSpecifier = wrapTracking(parseExportSpecifier);
            parseExpression = wrapTracking(extra.parseExpression);
            parseForVariableDeclaration = wrapTracking(extra.parseForVariableDeclaration);
            parseFunctionDeclaration = wrapTracking(extra.parseFunctionDeclaration);
            parseFunctionExpression = wrapTracking(extra.parseFunctionExpression);
            parseParams = wrapTracking(extra.parseParams);
            parseImportDeclaration = wrapTracking(extra.parseImportDeclaration);
            parseImportSpecifier = wrapTracking(extra.parseImportSpecifier);
            parseModuleDeclaration = wrapTracking(extra.parseModuleDeclaration);
            parseModuleBlock = wrapTracking(extra.parseModuleBlock);
            parseLeftHandSideExpression = wrapTracking(parseLeftHandSideExpression);
            parseNewExpression = wrapTracking(extra.parseNewExpression);
            parseNonComputedProperty = wrapTracking(extra.parseNonComputedProperty);
            parseObjectProperty = wrapTracking(extra.parseObjectProperty);
            parseObjectPropertyKey = wrapTracking(extra.parseObjectPropertyKey);
            parsePostfixExpression = wrapTracking(extra.parsePostfixExpression);
            parsePrimaryExpression = wrapTracking(extra.parsePrimaryExpression);
            parseProgram = wrapTracking(extra.parseProgram);
            parsePropertyFunction = wrapTracking(extra.parsePropertyFunction);
            parseTemplateElement = wrapTracking(extra.parseTemplateElement);
            parseTemplateLiteral = wrapTracking(extra.parseTemplateLiteral);
            parseSpreadOrAssignmentExpression = wrapTracking(extra.parseSpreadOrAssignmentExpression);
            parseStatement = wrapTracking(extra.parseStatement);
            parseSwitchCase = wrapTracking(extra.parseSwitchCase);
            parseUnaryExpression = wrapTracking(extra.parseUnaryExpression);
            parseVariableDeclaration = wrapTracking(extra.parseVariableDeclaration);
            parseVariableIdentifier = wrapTracking(extra.parseVariableIdentifier);
            parseMethodDefinition = wrapTracking(extra.parseMethodDefinition);
            parseClassDeclaration = wrapTracking(extra.parseClassDeclaration);
            parseClassExpression = wrapTracking(extra.parseClassExpression);
            parseClassBody = wrapTracking(extra.parseClassBody);
        }

        if (typeof extra.tokens !== 'undefined') {
            extra.advance = advance;
            extra.scanRegExp = scanRegExp;

            advance = collectToken;
            scanRegExp = collectRegex;
        }
    }

    function unpatch() {
        if (typeof extra.skipComment === 'function') {
            skipComment = extra.skipComment;
        }

        if (extra.range || extra.loc) {
            parseAssignmentExpression = extra.parseAssignmentExpression;
            parseBinaryExpression = extra.parseBinaryExpression;
            parseBlock = extra.parseBlock;
            parseFunctionSourceElements = extra.parseFunctionSourceElements;
            parseCatchClause = extra.parseCatchClause;
            parseComputedMember = extra.parseComputedMember;
            parseConditionalExpression = extra.parseConditionalExpression;
            parseConstLetDeclaration = extra.parseConstLetDeclaration;
            parseExportBatchSpecifier = extra.parseExportBatchSpecifier;
            parseExportDeclaration = extra.parseExportDeclaration;
            parseExportSpecifier = extra.parseExportSpecifier;
            parseExpression = extra.parseExpression;
            parseForVariableDeclaration = extra.parseForVariableDeclaration;
            parseFunctionDeclaration = extra.parseFunctionDeclaration;
            parseFunctionExpression = extra.parseFunctionExpression;
            parseImportDeclaration = extra.parseImportDeclaration;
            parseImportSpecifier = extra.parseImportSpecifier;
            parseGroupExpression = extra.parseGroupExpression;
            parseLeftHandSideExpression = extra.parseLeftHandSideExpression;
            parseLeftHandSideExpressionAllowCall = extra.parseLeftHandSideExpressionAllowCall;
            parseModuleDeclaration = extra.parseModuleDeclaration;
            parseModuleBlock = extra.parseModuleBlock;
            parseNewExpression = extra.parseNewExpression;
            parseNonComputedProperty = extra.parseNonComputedProperty;
            parseObjectProperty = extra.parseObjectProperty;
            parseObjectPropertyKey = extra.parseObjectPropertyKey;
            parsePostfixExpression = extra.parsePostfixExpression;
            parsePrimaryExpression = extra.parsePrimaryExpression;
            parseProgram = extra.parseProgram;
            parsePropertyFunction = extra.parsePropertyFunction;
            parseTemplateElement = extra.parseTemplateElement;
            parseTemplateLiteral = extra.parseTemplateLiteral;
            parseSpreadOrAssignmentExpression = extra.parseSpreadOrAssignmentExpression;
            parseStatement = extra.parseStatement;
            parseSwitchCase = extra.parseSwitchCase;
            parseUnaryExpression = extra.parseUnaryExpression;
            parseVariableDeclaration = extra.parseVariableDeclaration;
            parseVariableIdentifier = extra.parseVariableIdentifier;
            parseMethodDefinition = extra.parseMethodDefinition;
            parseClassDeclaration = extra.parseClassDeclaration;
            parseClassExpression = extra.parseClassExpression;
            parseClassBody = extra.parseClassBody;
        }

        if (typeof extra.scanRegExp === 'function') {
            advance = extra.advance;
            scanRegExp = extra.scanRegExp;
        }
    }

    // This is used to modify the delegate.

    function extend(object, properties) {
        var entry, result = {};

        for (entry in object) {
            if (object.hasOwnProperty(entry)) {
                result[entry] = object[entry];
            }
        }

        for (entry in properties) {
            if (properties.hasOwnProperty(entry)) {
                result[entry] = properties[entry];
            }
        }

        return result;
    }

    function tokenize(code, options) {
        var toString,
            token,
            tokens;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowDefault: true,
            allowIn: true,
            labelSet: {},
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false
        };

        extra = {};

        // Options matching.
        options = options || {};

        // Of course we collect tokens here.
        options.tokens = true;
        extra.tokens = [];
        extra.tokenize = true;
        // The following two fields are necessary to compute the Regex tokens.
        extra.openParenToken = -1;
        extra.openCurlyToken = -1;

        extra.range = (typeof options.range === 'boolean') && options.range;
        extra.loc = (typeof options.loc === 'boolean') && options.loc;

        if (typeof options.comment === 'boolean' && options.comment) {
            extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
            extra.errors = [];
        }

        if (length > 0) {
            if (typeof source[0] === 'undefined') {
                // Try first to convert to a string. This is good as fast path
                // for old IE which understands string indexing for string
                // literals only and not for string object.
                if (code instanceof String) {
                    source = code.valueOf();
                }
            }
        }

        patch();

        try {
            peek();
            if (lookahead.type === Token.EOF) {
                return extra.tokens;
            }

            token = lex();
            while (lookahead.type !== Token.EOF) {
                try {
                    token = lex();
                } catch (lexError) {
                    token = lookahead;
                    if (extra.errors) {
                        extra.errors.push(lexError);
                        // We have to break on the first error
                        // to avoid infinite loops.
                        break;
                    } else {
                        throw lexError;
                    }
                }
            }

            filterTokenLocation();
            tokens = extra.tokens;
            if (typeof extra.comments !== 'undefined') {
                filterCommentLocation();
                tokens.comments = extra.comments;
            }
            if (typeof extra.errors !== 'undefined') {
                tokens.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }
        return tokens;
    }

    function parse(code, options) {
        var program, toString;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowDefault: false,
            allowIn: true,
            labelSet: {},
            parenthesizedCount: 0,
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            yieldAllowed: false,
            yieldFound: false
        };

        extra = {};
        if (typeof options !== 'undefined') {
            extra.range = (typeof options.range === 'boolean') && options.range;
            extra.loc = (typeof options.loc === 'boolean') && options.loc;

            if (extra.loc && options.source !== null && options.source !== undefined) {
                delegate = extend(delegate, {
                    'postProcess': function (node) {
                        node.loc.source = toString(options.source);
                        return node;
                    }
                });
            }

            if (typeof options.tokens === 'boolean' && options.tokens) {
                extra.tokens = [];
            }
            if (typeof options.comment === 'boolean' && options.comment) {
                extra.comments = [];
            }
            if (typeof options.tolerant === 'boolean' && options.tolerant) {
                extra.errors = [];
            }
        }

        if (length > 0) {
            if (typeof source[0] === 'undefined') {
                // Try first to convert to a string. This is good as fast path
                // for old IE which understands string indexing for string
                // literals only and not for string object.
                if (code instanceof String) {
                    source = code.valueOf();
                }
            }
        }

        patch();
        try {
            program = parseProgram();
            if (typeof extra.comments !== 'undefined') {
                filterCommentLocation();
                program.comments = extra.comments;
            }
            if (typeof extra.tokens !== 'undefined') {
                filterTokenLocation();
                program.tokens = extra.tokens;
            }
            if (typeof extra.errors !== 'undefined') {
                program.errors = extra.errors;
            }
            if (extra.range || extra.loc) {
                program.body = filterGroup(program.body);
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }

        return program;
    }

    // Sync with package.json and component.json.
    exports.version = '1.1.0-dev-harmony';

    exports.tokenize = tokenize;

    exports.parse = parse;

    // Deep copy.
    exports.Syntax = (function () {
        var name, types = {};

        if (typeof Object.create === 'function') {
            types = Object.create(null);
        }

        for (name in Syntax) {
            if (Syntax.hasOwnProperty(name)) {
                types[name] = Syntax[name];
            }
        }

        if (typeof Object.freeze === 'function') {
            Object.freeze(types);
        }

        return types;
    })();

}));
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],"esprima":[function(require,module,exports){
module.exports=require('+3TlHS');
},{}]},{},[])
;

  return require;
}),
(function(root, factory, dependenciesFactory) {
  if(typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  }
  else {
    // provide a separate context for dependencies
    var depContext = {};
    var depAliases = {};
    var depReq = dependenciesFactory.call(depContext);
    var mod = {exports: {}};
    var exp = mod.exports;
    var exported = function(obj) {
      // check if the module exported anything
      if (typeof obj !== 'object') return true;
      for (var k in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
        return true;
      }
      return false;
    };
    var req = function(id) {
      var alias = id;
      if (alias in depAliases) id = depAliases[alias];
      if (typeof depReq == 'function') {
        try {
          var exp = depReq(alias);
          if (exported(exp)) return exp;
        } catch (e) {
          if (id !== alias) {
            // it is possible that the module wasn't loaded yet and
            // its alias is not available in the depContext object
            try {
              exp = depReq(id);
              if (exported(exp)) return exp;
            } catch (e) {
            }
          }
        }
      }
      if (!(id in depContext) && !(id in root))
        throw new Error("Cannot find module '" + alias + "'");
      return depContext[id] || root[id];
    };
    mod = factory(req, exp, mod, depContext);

    if (typeof define === 'function' && define.amd) {
      define(
      [
      'module', 'exports', 'require'], function(module, exports, require) {
          module.exports = mod;
          return mod;
       });
    } else {

      root['Vm'] = mod;
      
    }
  }
})
);


