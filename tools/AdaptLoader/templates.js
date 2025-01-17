define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":34}}}) : helper)))
    + "-title component-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":11,"column":38}}}) : helper)))
    + "-title-inner component-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":141}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":34}}}) : helper)))
    + "-body component-body\">\n            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":21,"column":38}}}) : helper)))
    + "-body-inner component-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":34}}}) : helper)))
    + "-instruction component-instruction\">\n            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":38}}}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":26}}}) : helper)))
    + "-header component-header\">\n    <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":30}}}) : helper)))
    + "-header-inner component-header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n        "
    + alias5(((helper = (helper = helpers.component_description || (depth0 != null ? depth0.component_description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":33}}}) : helper)))
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":25,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0.instruction : depth0),(depth0 != null ? depth0.mobileInstruction : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":33,"column":16}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("dropdown", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression, alias4=depth0 != null ? depth0 : (container.nullContext || {}), alias5=container.hooks.helperMissing, alias6="function";

  return "        <li role=\"option\" id=\"dropdown__item__"
    + alias3(alias2((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "__"
    + alias3(alias2((depths[1] != null ? depths[1]._dropdownIndex : depths[1]), depth0))
    + "__"
    + alias3((helpers.inc||(depth0 && depth0.inc)||alias5).call(alias4,(data && data.index),{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":12,"column":81},"end":{"line":12,"column":95}}}))
    + "\" class=\"dropdown__item\" text=\""
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias4,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":12,"column":126},"end":{"line":12,"column":134}}}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias4,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":143},"end":{"line":12,"column":153}}}) : helper)))
    + "\"><span>"
    + ((stack1 = helpers["if"].call(alias4,(depth0 != null ? depth0.displayText : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":12,"column":161},"end":{"line":12,"column":222}}})) != null ? stack1 : "")
    + "</span></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.displayText || (depth0 != null ? depth0.displayText : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayText","hash":{},"data":data,"loc":{"start":{"line":12,"column":180},"end":{"line":12,"column":197}}}) : helper))) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":12,"column":205},"end":{"line":12,"column":215}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"dropdown\">\n    <button aria-haspopup=\"listbox\">\n        <span class=\"dropdown__inner\"></span>\n        <span class=\"dropdown__arrow\">\n            <div class=\"icon\"></div>\n        </span>\n    </button>\n    <input class=\"js-data-output\" type=\"hidden\" />\n    <ul role=\"listbox\" tabindex=\"-1\">\n        <li role=\"option\" id=\"dropdown__item__"
    + alias5(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":53}}}) : helper)))
    + "__"
    + alias5(((helper = (helper = helpers._dropdownIndex || (depth0 != null ? depth0._dropdownIndex : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_dropdownIndex","hash":{},"data":data,"loc":{"start":{"line":10,"column":55},"end":{"line":10,"column":73}}}) : helper)))
    + "__0\" class=\"dropdown__placeholder dropdown__item\" disabled=\"true\" hidden=\"true\" default=\"true\" text=\""
    + alias5(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":10,"column":174},"end":{"line":10,"column":189}}}) : helper)))
    + "\" value=\""
    + alias5(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":10,"column":198},"end":{"line":10,"column":213}}}) : helper)))
    + "\"><span>"
    + ((stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":10,"column":221},"end":{"line":10,"column":238}}}) : helper))) != null ? stack1 : "")
    + "</span></li>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("quicknav-item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<button\n    role=\"link\"\n    data-type=\""
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":23}}}) : helper)))
    + "\"\n    data-id=\""
    + alias5(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":20}}}) : helper)))
    + "\"\n    data-item-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":31}}}) : helper)))
    + "\"\n    class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isHidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":51}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.locked : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":88}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":123}}})) != null ? stack1 : "")
    + "\"\n    "
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0._isHidden : depth0),(depth0 != null ? depth0.locked : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":57}}})) != null ? stack1 : "")
    + "\n    aria-label=\""
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.ariaLabel : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":44}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.locked : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":259}}})) != null ? stack1 : "")
    + "\"\n    tooltip=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._showTooltip : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":66}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._alignIconRight : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._alignIconRight : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "hidden disabled ";
},"4":function(container,depth0,helpers,partials,data) {
    return "locked disabled ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":116}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.locked), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":252}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.complete), depth0));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.incomplete), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tooltip : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":59}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._iconClass : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<span class=\"icon-left icon "
    + container.escapeExpression(((helper = (helper = helpers._iconClass || (depth0 != null ? depth0._iconClass : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":64}}}) : helper)))
    + "\"></span> ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "	<div class=\"text\">\n	"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.text : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n	</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._iconClass : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":21,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<span class=\"icon-right icon "
    + container.escapeExpression(((helper = (helper = helpers._iconClass || (depth0 != null ? depth0._iconClass : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":21,"column":51},"end":{"line":21,"column":65}}}) : helper)))
    + "\"></span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("devtoolsMapMenu", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.propertyIsEnumerable, buffer = "";

  stack1 = ((helper = (helper = helpers.isMenu || (depth0 != null ? depth0.isMenu : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"isMenu","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":14,"column":12}}}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.isMenu) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "		<div class=\"devtools-map-menu"
    + ((stack1 = helpers["if"].call(alias2,(data && data.last),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":56}}})) != null ? stack1 : "")
    + "\">\n			<a href=\"#"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":30}}}))
    + "\" class=\"devtools-map-menu-title"
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isComplete",{"name":"when","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":62},"end":{"line":4,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isOptional",{"name":"when","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":117},"end":{"line":4,"column":171}}})) != null ? stack1 : "")
    + "\">\n				<span class=\"devtools-map-abc-id\">"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":55}}}))
    + "</span>\n	            <span class=\"devtools-map-abc-label\">"
    + alias4(((helper = (helper = helpers.getTitle || (depth0 != null ? depth0.getTitle : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"getTitle","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":62}}}) : helper)))
    + "</span>\n			</a>\n			<div class=\"devtools-map-menu-items\">\n"
    + ((stack1 = container.invokePartial(partials.devtoolsMapMenu,depth0,{"name":"devtoolsMapMenu","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " last";
},"5":function(container,depth0,helpers,partials,data) {
    return " devtools-map-completed";
},"7":function(container,depth0,helpers,partials,data) {
    return " devtools-map-optional";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.devtoolsMapPage,depth0,{"name":"devtoolsMapPage","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.propertyIsEnumerable;

  stack1 = ((helper = (helper = helpers.eachChild || (depth0 != null ? depth0.eachChild : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"eachChild","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":14}}}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.eachChild) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("devtoolsMapPage", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " last";
},"3":function(container,depth0,helpers,partials,data) {
    return " devtools-map-completed";
},"5":function(container,depth0,helpers,partials,data) {
    return " devtools-map-optional";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function", alias6=container.hooks.blockHelperMissing, buffer = 
  "			<div class=\"devtools-map-article"
    + ((stack1 = helpers["if"].call(alias2,(data && data.last),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":60}}})) != null ? stack1 : "")
    + "\">\n	            <a href=\"#"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":9,"column":23},"end":{"line":9,"column":40}}}))
    + "\" class=\"devtools-map-article-title"
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isComplete",{"name":"when","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":75},"end":{"line":9,"column":130}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isOptional",{"name":"when","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":130},"end":{"line":9,"column":184}}})) != null ? stack1 : "")
    + "\">\n	            	<div class=\"devtools-map-article-header\">\n	            		<span class=\"devtools-map-abc-id\">"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":11,"column":49},"end":{"line":11,"column":66}}}))
    + "</span>\n	            		";
  stack1 = ((helper = (helper = helpers.isTrickled || (depth0 != null ? depth0.isTrickled : depth0)) != null ? helper : alias3),(options={"name":"isTrickled","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":73}}}),(typeof helper === alias5 ? helper.call(alias2,options) : helper));
  if (!helpers.isTrickled) { stack1 = alias6.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	            	</div\n	            	<span class=\"devtools-map-abc-label\">"
    + alias4(((helper = (helper = helpers.getTitle || (depth0 != null ? depth0.getTitle : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"getTitle","hash":{},"data":data,"loc":{"start":{"line":14,"column":51},"end":{"line":14,"column":63}}}) : helper)))
    + "</span>\n	            </a>\n	            <div class=\"devtools-map-article-blocks\">\n";
  stack1 = ((helper = (helper = helpers.eachChild || (depth0 != null ? depth0.eachChild : depth0)) != null ? helper : alias3),(options={"name":"eachChild","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":14},"end":{"line":35,"column":31}}}),(typeof helper === alias5 ? helper.call(alias2,options) : helper));
  if (!helpers.eachChild) { stack1 = alias6.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	            </div>\n		    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"trickled\"></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.hooks.blockHelperMissing, alias6=container.escapeExpression, buffer = 
  "		                <div class=\"devtools-map-block"
    + ((stack1 = helpers["if"].call(alias2,(data && data.last),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":48},"end":{"line":18,"column":73}}})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.isTrickled || (depth0 != null ? depth0.isTrickled : depth0)) != null ? helper : alias3),(options={"name":"isTrickled","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":73},"end":{"line":18,"column":112}}}),(typeof helper === alias4 ? helper.call(alias2,options) : helper));
  if (!helpers.isTrickled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n		                    <a href=\"#"
    + alias6((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":19,"column":32},"end":{"line":19,"column":49}}}))
    + "\" class=\"devtools-map-block-title"
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isComplete",{"name":"when","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":82},"end":{"line":19,"column":137}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isOptional",{"name":"when","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":137},"end":{"line":19,"column":191}}})) != null ? stack1 : "")
    + "\">\n		                        <span class=\"devtools-map-abc-id\">"
    + alias6((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":77}}}))
    + "</span>\n		                    </a>\n		                    <div class=\"devtools-map-block-components\">\n";
  stack1 = ((helper = (helper = helpers.eachChild || (depth0 != null ? depth0.eachChild : depth0)) != null ? helper : alias3),(options={"name":"eachChild","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":32,"column":37}}}),(typeof helper === alias4 ? helper.call(alias2,options) : helper));
  if (!helpers.eachChild) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		                	</div>\n		                </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " trickled";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "				                	<a href=\"#"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":24,"column":31},"end":{"line":24,"column":48}}}))
    + "\" class=\"devtools-map-component"
    + ((stack1 = helpers["if"].call(alias2,(data && data.last),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":79},"end":{"line":24,"column":104}}})) != null ? stack1 : "")
    + " devtools-map-component-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":128},"end":{"line":24,"column":138}}}) : helper)))
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isComplete",{"name":"when","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":138},"end":{"line":24,"column":193}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isOptional",{"name":"when","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":193},"end":{"line":24,"column":247}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isSubmitted",{"name":"when","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":248},"end":{"line":24,"column":336}}})) != null ? stack1 : "")
    + "\">\n				                        <span class=\"devtools-map-abc-id\">"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":25,"column":62},"end":{"line":25,"column":79}}}))
    + "</span>\n				                        <div class=\"devtools-map-component-info\">\n				                        	<span class=\"devtools-map-component-type\">"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_component",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":27,"column":71},"end":{"line":27,"column":95}}}))
    + "</span>\n				                        	<span class=\"devtools-map-component-mark\"></span>\n				                    	</div>\n				                        <span class=\"devtools-map-component-label\">"
    + alias4(((helper = (helper = helpers.getTitle || (depth0 != null ? depth0.getTitle : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"getTitle","hash":{},"data":data,"loc":{"start":{"line":30,"column":71},"end":{"line":30,"column":83}}}) : helper)))
    + "</span>\n				                    </a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.when||(depth0 && depth0.when)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"_isCorrect",{"name":"when","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":24,"column":272},"end":{"line":24,"column":327}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "correct";
},"17":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function", buffer = 
  "<div class=\"devtools-map-content-object"
    + ((stack1 = helpers["if"].call(alias2,(data && data.last),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":64}}})) != null ? stack1 : "")
    + "\">\n	<a href=\"#"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":28}}}))
    + "\" class=\"devtools-map-content-object-title"
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isComplete",{"name":"when","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":125}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.when||(depth0 && depth0.when)||alias3).call(alias2,"_isOptional",{"name":"when","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":125},"end":{"line":2,"column":179}}})) != null ? stack1 : "")
    + "\">\n		<span class=\"devtools-map-abc-id\">"
    + alias4((helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"_id",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":53}}}))
    + "</span>\n	    <span class=\"devtools-map-abc-label\">"
    + alias4(((helper = (helper = helpers.getTitle || (depth0 != null ? depth0.getTitle : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"getTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":54}}}) : helper)))
    + "</span>\n	</a>\n	<div class=\"devtools-map-article-container\">\n";
  stack1 = ((helper = (helper = helpers.eachChild || (depth0 != null ? depth0.eachChild : depth0)) != null ? helper : alias3),(options={"name":"eachChild","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":38,"column":19}}}),(typeof helper === alias5 ? helper.call(alias2,options) : helper));
  if (!helpers.eachChild) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>";
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"article-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"article-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":112}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"block-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"block-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":110}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"block-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":233}}})) != null ? stack1 : "")
    + "\">\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredCorrectly), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredIncorrectly), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":72},"end":{"line":12,"column":233}}})) != null ? stack1 : "")
    + "\">\n        </div>\n        <div class=\"buttons-display-inner\" aria-live=\"assertive\">\n        </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":6,"column":19}}})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.lambda, alias5=container.escapeExpression;

  return "<div class=\"drawer-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":65}}})) != null ? stack1 : "")
    + "\n	<div class=\"drawer-holder\" role=\"list\">\n	</div>\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" aria-label=\""
    + alias5(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" aria-label=\""
    + alias5(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	"
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":15,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":53}}}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":62}}}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":38}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":11,"column":8}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":87}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":89}}})) != null ? stack1 : "")
    + "\n        ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":34}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div id=\""
    + alias5(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":81}}})) != null ? stack1 : "")
    + " >\n    <span class=\"aria-label\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isA11yCompletionDescriptionEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <div class=\"loader-gif\"><div role=\"heading\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda;

  return "        <button class=\"skip-nav-link a11y-ignore-focus\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.skipNavigation : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1.skipNavigationText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression, alias4=container.lambda;

  return alias3(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"navigation-inner clearfix\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isSkipNavigationEnabled : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"link\"></button>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression;

  return alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":34}}}) : helper)))
    + "=\""
    + alias2(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":91},"end":{"line":9,"column":140}}})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"6":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                    <div id=\"notify-heading\" class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":65},"end":{"line":15,"column":98}}})) != null ? stack1 : "")
    + ">\n                        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":61},"end":{"line":22,"column":79}}})) != null ? stack1 : "")
    + "</div>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":98},"end":{"line":28,"column":115}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":134}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"notify-popup-buttons\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":36,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":35,"column":103},"end":{"line":35,"column":121}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":135},"end":{"line":35,"column":151}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":153},"end":{"line":35,"column":169}}}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.equals||(depth0 && depth0.equals)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._type : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":48,"column":23}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                <button class=\"base notify-popup-done\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                    <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n                </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div "
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._attributes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":5},"end":{"line":3,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify-popup notify-type-"
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":3,"column":88},"end":{"line":3,"column":97}}}) : helper)))
    + " "
    + alias5(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":110}}}) : helper)))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":30,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":38,"column":27}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n"
    + ((stack1 = (helpers.all||(depth0 && depth0.all)||alias3).call(alias2,(depth0 != null ? depth0._isCancellable : depth0),(depth0 != null ? depth0._showCloseButton : depth0),{"name":"all","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":49,"column":16}}})) != null ? stack1 : "")
    + "    </div>\n\n    "
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":52,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n\n\n<div class=\"notify-shadow\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div id=\"notify-push-heading\" class=\"notify-push-inner\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":75}}})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":22}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n\n<button class=\"base notify-push-close\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div class=\"page-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "						<div class=\"page-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":36},"end":{"line":15,"column":103}}})) != null ? stack1 : "")
    + ">\n							"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":33}}})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "					<div class=\"page-body\">\n						<div class=\"page-body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":7},"end":{"line":28,"column":14}}})) != null ? stack1 : "")
    + "						</div>\n					</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "								"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":25,"column":30}}})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "								"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "					<div class=\"page-instruction\">\n						<div class=\"page-instruction-inner\">\n							"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":7},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"page-inner article-container\">\n	<div class=\"page-header\">\n		<div class=\"page-header-inner clearfix\">\n\n			<div class=\"page-header-content\">\n				<div class=\"page-header-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":19,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.pageBody : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":39,"column":12}}})) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n\n		</div>\n	</div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression, alias6=container.lambda;

  return "        <div class=\"accordion-item"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":70}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":5,"column":84},"end":{"line":5,"column":94}}}) : helper)))
    + "\">\n            <button id=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":45}}}) : helper)))
    + "-accordion-button\" class=\"base accordion-item-title "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":97},"end":{"line":6,"column":129}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\n                <div class=\"accordion-item-title-inner\">\n                    <div class=\"accordion-item-title-icon icon icon-plus h5\" aria-hidden=\"true\"></div>\n                    "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </button>\n            <div role=\"region\" class=\"accordion-item-body\" aria-labelledby=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":87},"end":{"line":12,"column":97}}}) : helper)))
    + "-accordion-button\">\n                <div class=\"accordion-item-body-inner\">\n                    <div class=\"accordion-item-text\">\n                        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":15,"column":42}}})) != null ? stack1 : "")
    + "\n                    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._graphic : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":26,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " "
    + container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":63}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "                    <div class=\"accordion-item-graphic\">\n                        <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n                    </div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":24,"column":27}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"accordion-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"accordion-widget component-widget\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":86},"end":{"line":3,"column":193}}})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":153},"end":{"line":3,"column":185}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression, alias6=container.lambda;

  return "        <div class=\"gmcq-item component-item "
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":163}}})) != null ? stack1 : "")
    + " item-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":169},"end":{"line":5,"column":179}}}) : helper)))
    + " "
    + alias5((helpers.odd||(depth0 && depth0.odd)||alias3).call(alias2,(data && data.index),{"name":"odd","hash":{},"data":data,"loc":{"start":{"line":5,"column":180},"end":{"line":5,"column":194}}}))
    + "\">\n            <label aria-hidden=\"true\" for=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":54},"end":{"line":6,"column":64}}}) : helper)))
    + "-input\" class=\"component-item-color component-item-text-color component-item-border gmcq-item-container"
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":167},"end":{"line":6,"column":213}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":213},"end":{"line":6,"column":248}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":6,"column":268},"end":{"line":6,"column":278}}}) : helper)))
    + "\" >\n\n                <img src=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" aria-label=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":11,"column":23}}})) != null ? stack1 : "")
    + "\n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":68},"end":{"line":15,"column":115}}})) != null ? stack1 : "")
    + " icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <div class=\"gmcq-item-inner\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":20,"column":24},"end":{"line":20,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\n                    </div>\n                </div>\n            </label>\n            <input "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":19},"end":{"line":24,"column":68}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":24,"column":75},"end":{"line":24,"column":122}}})) != null ? stack1 : "")
    + "\" id=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":139},"end":{"line":24,"column":149}}}) : helper)))
    + "-input\" "
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":157},"end":{"line":24,"column":202}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (helpers.a11y_normalize||(depth0 && depth0.a11y_normalize)||alias3).call(alias2,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":24,"column":215},"end":{"line":24,"column":240}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":24,"column":260},"end":{"line":24,"column":270}}}) : helper)))
    + "\" />\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":70},"end":{"line":5,"column":152}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":5,"column":96},"end":{"line":5,"column":145}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"10":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"12":function(container,depth0,helpers,partials,data) {
    return " selected";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item\" ";
},"22":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"gmcq-inner component-inner clearfix\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"gmcq-widget component-widget clearfix "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":54},"end":{"line":3,"column":205}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " graphic-widget-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "      <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"graphic-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"graphic-widget component-widget"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":109}}})) != null ? stack1 : "")
    + "\">\n      <img src=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":4,"column":98},"end":{"line":4,"column":180}}})) != null ? stack1 : "")
    + " />\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "pin";
},"3":function(container,depth0,helpers,partials,data) {
    return "tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " role=\"list\"";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression, alias4=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias4,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias4,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "          <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "          <div class=\"hotgraphic-graphic-pin-list-item\" role=\"listitem\">\n            <button class=\"base hotgraphic-graphic-pin component-item-text-color "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":81},"end":{"line":12,"column":113}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":113},"end":{"line":12,"column":150}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":164},"end":{"line":12,"column":174}}}) : helper)))
    + "\" style=\"top:"
    + ((stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":12,"column":187},"end":{"line":12,"column":197}}}) : helper))) != null ? stack1 : "")
    + "%; left:"
    + ((stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":12,"column":205},"end":{"line":12,"column":216}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n              <span class=\"aria-label\">"
    + alias5(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":39},"end":{"line":13,"column":48}}}) : helper)))
    + "."
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":49},"end":{"line":13,"column":126}}})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":20,"column":21}}})) != null ? stack1 : "")
    + "            </button>\n          </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "visited";
},"13":function(container,depth0,helpers,partials,data) {
    return " has-pin-image";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._globals : depths[1])) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0))
    + ".";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression, alias3=container.lambda;

  return "                <div class=\"hotgraphic-graphic-pin-image item-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":62},"end":{"line":15,"column":72}}}) : helper)))
    + "\">\n                  <img src=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n                </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "                <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":96},"end":{"line":19,"column":106}}}) : helper)))
    + "\"></div>\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"hotgraphic-narrative\" role=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "            <div class=\"hotgraphic-graphic-pin-list-item\" role=\"listitem\">\n              <button class=\"base hotgraphic-graphic-pin component-item-text-color "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":83},"end":{"line":28,"column":115}}})) != null ? stack1 : "")
    + " hotgraphic-graphic-pin-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":139},"end":{"line":28,"column":149}}}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":150},"end":{"line":28,"column":203}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":217},"end":{"line":28,"column":227}}}) : helper)))
    + "\" style=\"top:"
    + ((stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":28,"column":240},"end":{"line":28,"column":250}}}) : helper))) != null ? stack1 : "")
    + "%; left:"
    + ((stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":28,"column":258},"end":{"line":28,"column":269}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n                <span class=\"aria-label\">"
    + alias5(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":29,"column":41},"end":{"line":29,"column":50}}}) : helper)))
    + "."
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":51},"end":{"line":29,"column":128}}})) != null ? stack1 : "")
    + "</span>\n                <div class=\"hotgraphic-graphic-pin-image component-item-color item-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":83},"end":{"line":30,"column":93}}}) : helper)))
    + "\" style=\"background-image: url("
    + alias5(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + ")\"></div>\n              </button>\n            </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"hotgraphic-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"hotgraphic-widget component-widget "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._useGraphicsAsPins : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":105}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"hotgraphic-graphic\""
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._useGraphicsAsPins : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":88}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._useGraphicsAsPins : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression, alias6=container.lambda;

  return "    <div class=\"hotgraphic-item component-item clearfix "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":56},"end":{"line":3,"column":88}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":89},"end":{"line":3,"column":119}}})) != null ? stack1 : "")
    + " "
    + alias5(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":120},"end":{"line":3,"column":132}}}) : helper)))
    + "\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isActive : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":134},"end":{"line":3,"column":185}}})) != null ? stack1 : "")
    + " data-index="
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":197},"end":{"line":3,"column":207}}}) : helper)))
    + ">\n        <div class=\"hotgraphic-item-content\">\n            <div class=\"hotgraphic-item-content-inner\">\n            <div"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":60}}})) != null ? stack1 : "")
    + " class=\"hotgraphic-content-title\" "
    + alias5((helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":6,"column":94},"end":{"line":6,"column":125}}}))
    + ">\n                "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"hotgraphic-content-body\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n            </div>\n        </div>\n        <div class=\"hotgraphic-item-graphic\">\n            <div class=\"hotgraphic-item-graphic-inner\">\n            <img src=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias5(alias6(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            </div>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "visited";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"8":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "    <div class=\"hotgraphic-popup-nav component-item-color\">\n        <button class=\"base hotgraphic-popup-controls back\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n        </button>\n        <div class=\"hotgraphic-popup-count component-item-text-color\">\n        </div>\n        <button class=\"base hotgraphic-popup-controls next\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n        </button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression;

  return "<div class=\"hotgraphic-popup-inner clearfix\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._hidePagination : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":37,"column":15}}})) != null ? stack1 : "")
    + "    <button class=\"base hotgraphic-popup-done\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n        <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n    </button>\n</div>\n"
    + alias3(((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":42,"column":19}}}) : helper)))
    + "\n";
},"useData":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":188}}})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":148},"end":{"line":3,"column":180}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "        <div class=\"matching-item item "
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":157}}})) != null ? stack1 : "")
    + " item-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":163},"end":{"line":5,"column":173}}}) : helper)))
    + "\">\n            <div class=\"matching-item-title\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</div>\n            <div class=\"matching-select-container component-item-color\">\n                <div class=\"matching-select-state\">\n                    <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\n                    <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\n                </div>\n"
    + ((stack1 = container.invokePartial(partials.dropdown,depth0,{"name":"dropdown","hash":{"_dropdownIndex":(data && data.index),"_id":(depths[1] != null ? depths[1]._id : depths[1]),"placeholder":(depths[1] != null ? depths[1].placeholder : depths[1])},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":64},"end":{"line":5,"column":146}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":139}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"matching-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"matching-widget component-widget "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":200}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":15,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":76},"end":{"line":3,"column":183}}})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":143},"end":{"line":3,"column":175}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression, alias6=container.lambda;

  return "        <div class=\"mcq-item component-item component-item-color "
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":65},"end":{"line":5,"column":183}}})) != null ? stack1 : "")
    + " item-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":189},"end":{"line":5,"column":199}}}) : helper)))
    + "\">\n            <input "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":68}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":6,"column":75},"end":{"line":6,"column":122}}})) != null ? stack1 : "")
    + "\" id=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":139},"end":{"line":6,"column":149}}}) : helper)))
    + "-input\" "
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":157},"end":{"line":6,"column":202}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (helpers.a11y_normalize||(depth0 && depth0.a11y_normalize)||alias3).call(alias2,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":6,"column":215},"end":{"line":6,"column":240}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":6,"column":260},"end":{"line":6,"column":270}}}) : helper)))
    + "\" />\n            <label aria-hidden=\"true\" for=\""
    + alias5(alias6((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":64}}}) : helper)))
    + "-input\" class=\"component-item-text-color component-item-border"
    + ((stack1 = helpers.unless.call(alias2,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":126},"end":{"line":7,"column":172}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":172},"end":{"line":7,"column":207}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":7,"column":227},"end":{"line":7,"column":237}}}) : helper)))
    + "\" >\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":9,"column":62},"end":{"line":9,"column":109}}})) != null ? stack1 : "")
    + " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <div class=\"mcq-item-inner\">\n                    "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":14,"column":20},"end":{"line":14,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </label>\n        </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":172}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":5,"column":116},"end":{"line":5,"column":165}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"24":function(container,depth0,helpers,partials,data) {
    return " selected";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"mcq-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"mcq-widget component-widget "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":195}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isRadio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":203},"end":{"line":3,"column":249}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":18,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.skipToTranscript : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + "        <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\" class=\"audio-poster\"/>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":37,"column":15}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <video aria-hidden=\"true\" preload=\"none\" width=\"640\" height=\"360\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._playsinline : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":78},"end":{"line":17,"column":116}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.if_value_equals||(depth0 && depth0.if_value_equals)||container.hooks.helperMissing).call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1),"video/vimeo",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":17,"column":117},"end":{"line":17,"column":217}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._useClosedCaptions : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":35,"column":19}}})) != null ? stack1 : "")
    + "            </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "playsinline";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "                <source src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":29,"column":23}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":34,"column":25}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "                    <track kind=\"subtitles\" src=\""
    + alias5(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":33,"column":49},"end":{"line":33,"column":56}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias5(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":33,"column":83},"end":{"line":33,"column":94}}}) : helper)))
    + "\" />\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"media-transcript-container\">\n            <div class=\"media-transcript-button-container\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":64,"column":19}}})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":70,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                <button class=\"media-inline-transcript-button button\" aria-expanded=\"false\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":46,"column":20},"end":{"line":50,"column":27}}})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                <button onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "')\" class=\"media-external-transcript-button button\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":57,"column":20},"end":{"line":61,"column":27}}})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"media-inline-transcript-body-container\" role=\"region\" aria-label=\""
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":67,"column":94},"end":{"line":67,"column":219}}})) != null ? stack1 : "")
    + "\">\n                    <div class=\"media-inline-transcript-body\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":68,"column":62},"end":{"line":68,"column":108}}})) != null ? stack1 : "")
    + "</div>\n                </div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"media-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":12}}})) != null ? stack1 : "")
    + "    <div class=\"media-widget component-widget a11y-ignore-aria\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._transcript : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":72,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "narrative-text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                <div class=\"narrative-content-item "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":83}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":97},"end":{"line":8,"column":107}}}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":81}}})) != null ? stack1 : "")
    + "\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":19,"column":46}}})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner\" "
    + container.escapeExpression((helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":11,"column":67},"end":{"line":11,"column":105}}}))
    + ">\n                            "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":28},"end":{"line":12,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.a11y_aria_image||(depth0 && depth0.a11y_aria_image)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":74}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":98},"end":{"line":27,"column":130}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":144},"end":{"line":27,"column":154}}}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "                    <button class=\"base narrative-strapline-title "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":66},"end":{"line":45,"column":98}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":45,"column":112},"end":{"line":45,"column":127}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias5(container.lambda((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":45,"column":175},"end":{"line":45,"column":185}}}) : helper)))
    + "\">\n                        <div class=\"narrative-strapline-title-inner h5\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":47,"column":43}}}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n                    </button>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression;

  return "                <div class=\"narrative-slider-graphic "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":53},"end":{"line":68,"column":85}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(alias3((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":68,"column":133},"end":{"line":68,"column":143}}}) : helper)))
    + "\">\n                    <img src=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":20},"end":{"line":72,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":90},"end":{"line":78,"column":122}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":78,"column":136},"end":{"line":78,"column":146}}}) : helper)))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression, alias5=container.hooks.helperMissing, alias6="function";

  return "<div class=\"narrative-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"narrative-widget component-widget "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._hasNavigationInTextArea : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "\">\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":28,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\" style=\"width: "
    + alias4(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":42,"column":85},"end":{"line":42,"column":100}}}) : helper)))
    + "%\">\n                    <div></div>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":52,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-slide-container\">\n\n            <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </button>\n\n            <div class=\"narrative-slider clearfix\" style=\"width: "
    + alias4(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":66,"column":65},"end":{"line":66,"column":80}}}) : helper)))
    + "%\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":16},"end":{"line":74,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":16},"end":{"line":79,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["openTextInput"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"component-inner openTextInput-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component-widget openTextInput-widget\">\n    <div class=\"openTextInput-count-characters\">\n      <div class=\"openTextInput-count-characters-container\"><span class=\"openTextInput-count-amount\"></span>&nbsp;"
    + alias5(((helper = (helper = helpers.remainingCharactersText || (depth0 != null ? depth0.remainingCharactersText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"remainingCharactersText","hash":{},"data":data,"loc":{"start":{"line":6,"column":114},"end":{"line":6,"column":141}}}) : helper)))
    + "</div>\n      <div class=\"openTextInput-autosave\"></div>\n    </div>\n\n    <div class=\"openTextInput-answer-container\">\n        <textarea class=\"openTextInput-item-textbox\" placeholder=\""
    + alias5(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":11,"column":66},"end":{"line":11,"column":81}}}) : helper)))
    + "\"\n                  maxlength=\""
    + alias5(((helper = (helper = helpers._allowedCharacters || (depth0 != null ? depth0._allowedCharacters : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_allowedCharacters","hash":{},"data":data,"loc":{"start":{"line":12,"column":29},"end":{"line":12,"column":51}}}) : helper)))
    + "\">"
    + alias5(((helper = (helper = helpers._userAnswer || (depth0 != null ? depth0._userAnswer : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_userAnswer","hash":{},"data":data,"loc":{"start":{"line":12,"column":53},"end":{"line":12,"column":68}}}) : helper)))
    + "</textarea>\n    </div>\n    <div class=\"openTextInput-item-modelanswer openTextInput-item-textbox\">"
    + ((stack1 = ((helper = (helper = helpers.modelAnswer || (depth0 != null ? depth0.modelAnswer : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"modelAnswer","hash":{},"data":data,"loc":{"start":{"line":14,"column":75},"end":{"line":14,"column":92}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    <div class=\"buttons\">\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":79},"end":{"line":3,"column":233}}})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowMarking : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":146},"end":{"line":3,"column":225}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":3,"column":169},"end":{"line":3,"column":218}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "correct";
},"6":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "                    <div class=\"base slider-scale-number\" data-id=\""
    + alias5(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":11,"column":67},"end":{"line":11,"column":76}}}) : helper)))
    + "\" aria-hidden=\"true\">"
    + alias5(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":11,"column":97},"end":{"line":11,"column":106}}}) : helper)))
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers._userAnswer || (depth0 != null ? depth0._userAnswer : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_userAnswer","hash":{},"data":data,"loc":{"start":{"line":27,"column":78},"end":{"line":27,"column":93}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":27,"column":101},"end":{"line":27,"column":116}}}) : helper)));
},"14":function(container,depth0,helpers,partials,data) {
    return "rtl";
},"16":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression, alias5=container.hooks.helperMissing, alias6="function";

  return "<div class=\"slider-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"slider-widget component-widget "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":245}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"slider-holder clearfix\">\n            <div class=\"slider-scale-labels\">\n                <div class=\"slider-scale-start\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.labelStart : stack1), depth0))
    + "\">"
    + alias4(((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"labelStart","hash":{},"data":data,"loc":{"start":{"line":6,"column":105},"end":{"line":6,"column":119}}}) : helper)))
    + "</div>\n                <div class=\"slider-scale-end\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.labelEnd : stack1), depth0))
    + "\">"
    + alias4(((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"labelEnd","hash":{},"data":data,"loc":{"start":{"line":7,"column":101},"end":{"line":7,"column":113}}}) : helper)))
    + "</div>\n            </div>\n            <div class=\"slider-scale-numbers clearfix\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":12,"column":25}}})) != null ? stack1 : "")
    + "                <div class=\"slider-modelranges\"></div>\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\n                <div class=\"slider-scale-marker component-item-color component-item-text-color a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\n            </div>\n            <div class=\"slider-scaler-wrapper clearfix\">\n               <div class=\"slider-scaler component-item-color\">\n                  <div class=\"slider-scale-start-marker slider-line component-item-color\"></div>\n                  <div class=\"slider-markers\"></div>\n                  <div class=\"slider-scale-end-marker slider-line component-item-color\"></div>\n              </div>\n          </div>\n\n            <div class=\"slider-background\">\n                <div class=\"slider-item component-item "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":55},"end":{"line":26,"column":137}}})) != null ? stack1 : "")
    + "\">\n                  <input type=\"range\" role=\"slider\" value=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._userAnswer : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":27,"column":59},"end":{"line":27,"column":123}}})) != null ? stack1 : "")
    + "\" min=\""
    + alias4(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":27,"column":130},"end":{"line":27,"column":145}}}) : helper)))
    + "\" max=\""
    + alias4(((helper = (helper = helpers._scaleEnd || (depth0 != null ? depth0._scaleEnd : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":27,"column":152},"end":{"line":27,"column":165}}}) : helper)))
    + "\" aria-valuenow=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._userAnswer : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":27,"column":182},"end":{"line":27,"column":246}}})) != null ? stack1 : "")
    + "\" aria-valuemin=\""
    + alias4(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":27,"column":263},"end":{"line":27,"column":278}}}) : helper)))
    + "\" aria-valuemax=\""
    + alias4(((helper = (helper = helpers._scaleEnd || (depth0 != null ? depth0._scaleEnd : depth0)) != null ? helper : alias5),(typeof helper === alias6 ? helper.call(alias2,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":27,"column":295},"end":{"line":27,"column":308}}}) : helper)))
    + "\" data-rangeslider data-direction=\""
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias5).call(alias2,(depth0 != null ? depth0._marginDir : depth0),"right",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":343},"end":{"line":27,"column":387}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":389},"end":{"line":27,"column":431}}})) != null ? stack1 : "")
    + ">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgrid"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "                <div role=\"listitem\" class=\"hotgrid-grid-listitem\">\n                    <button class=\"base hotgrid-grid-item hotgrid-item-states-"
    + ((stack1 = (helpers.all||(depth0 && depth0.all)||alias3).call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcHover : stack1),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcVisited : stack1),{"name":"all","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":148}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":149},"end":{"line":8,"column":181}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":195},"end":{"line":8,"column":205}}}) : helper)))
    + "\">\n\n                        <span class=\"aria-label\">\n                            "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":11,"column":149}}})) != null ? stack1 : "")
    + "."
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":150},"end":{"line":11,"column":195}}})) != null ? stack1 : "")
    + "\n                        </span>\n\n                        <div class=\"hotgrid-item-image "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._hasRoundedImages : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":55},"end":{"line":14,"column":103}}})) != null ? stack1 : "")
    + "\">\n                            <img src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" class=\"hotgrid-item-image-default\"/>\n"
    + ((stack1 = (helpers.all||(depth0 && depth0.all)||alias3).call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcHover : stack1),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcVisited : stack1),{"name":"all","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "                        </div>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":31,"column":31}}})) != null ? stack1 : "")
    + "                    </button>\n                </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "image";
},"4":function(container,depth0,helpers,partials,data) {
    return "css";
},"6":function(container,depth0,helpers,partials,data) {
    return "visited";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression;

  return alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._globals : depths[1])) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.item : stack1), depth0))
    + " "
    + alias2((helpers.numbers||(depth0 && depth0.numbers)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"numbers","hash":{},"data":data,"loc":{"start":{"line":11,"column":124},"end":{"line":11,"column":142}}}));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + ".";
},"14":function(container,depth0,helpers,partials,data) {
    return "border-radius";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "                            <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcHover : stack1), depth0))
    + "\" class=\"hotgrid-item-image-hover\"/>\n                            <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcVisited : stack1), depth0))
    + "\" class=\"hotgrid-item-image-visited\"/>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        <div class=\"hotgrid-item-title\" aria-hidden=\"true\">\n                            <div class=\"hotgrid-item-title-inner\">\n                                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "\n                            </div>\n                        </div>\n                        ";
},"20":function(container,depth0,helpers,partials,data) {
    return "\n                        <div class=\"hotgrid-item-icon\">\n                            <span class=\"icon icon-plus\"></span>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"component-inner hotgrid-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"component-widget hotgrid-widget\">\n        <div role=\"list\" class=\"hotgrid-grid\">\n            <div class=\"hotgrid-grid-inner clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":34,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgridPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "    <div class=\"hotgrid-item component-item clearfix "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":53},"end":{"line":3,"column":85}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":86},"end":{"line":3,"column":116}}})) != null ? stack1 : "")
    + " "
    + alias5(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":117},"end":{"line":3,"column":129}}}) : helper)))
    + "\" data-index="
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":142},"end":{"line":3,"column":152}}}) : helper)))
    + ">\n        <div class=\"hotgrid-item-content\">\n            <div class=\"hotgrid-item-content-inner\">\n            <div"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":60}}})) != null ? stack1 : "")
    + " class=\"hotgrid-content-title\" "
    + alias5((helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":6,"column":91},"end":{"line":6,"column":122}}}))
    + ">\n                "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <div class=\"hotgrid-content-body\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n            </div>\n        </div>\n        <div class=\"hotgrid-item-graphic\">\n            <div class=\"hotgrid-item-graphic-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._itemGraphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":20,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "visited";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "                <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._itemGraphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._itemGraphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "                <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "    <div class=\"hotgrid-popup-nav component-item-color\">\n        <button class=\"base hotgrid-popup-controls back\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"hotgrid-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n        </button>\n        <div class=\"hotgrid-popup-count component-item-text-color\">\n        </div>\n        <button class=\"base hotgrid-popup-controls next\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"hotgrid-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n        </button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression;

  return "<div class=\"hotgrid-popup-inner clearfix\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"hotgrid-popup-toolbar component-item-color clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._hidePagination : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":41,"column":15}}})) != null ? stack1 : "")
    + "    <button class=\"base hotgrid-popup-done\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n        <div class=\"hotgrid-popup-close component-item-text-color icon icon-cross\"></div>\n    </button>\n</div>\n"
    + alias3(((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":46,"column":19}}}) : helper)))
    + "\n";
},"useData":true});

this["Handlebars"]["templates"]["quicknav-tooltip"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"text\">\n"
    + ((stack1 = ((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":13}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<div class=\"triangle\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["quicknav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["quicknav-item"],depth0,{"name":"quicknav-item","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"quicknav-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"quicknav-widget\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "</div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["glossary"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"glossary-inner\">\n    "
    + alias5((helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._glossary : stack1)) != null ? stack1.glossary : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":63}}}))
    + "\n    <div class=\"glossary-textbox-container\">\n        <label for=\"glossarySearch\" class=\"glossary-textbox-label icon icon-search\" aria-hidden=\"true\"></label>\n        <input id=\"glossarySearch\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = helpers.searchPlaceholder || (depth0 != null ? depth0.searchPlaceholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":83}}}) : helper))) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.searchPlaceholder || (depth0 != null ? depth0.searchPlaceholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":97},"end":{"line":6,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"glossary-textbox\">\n        <div role=\"button\" tabindex=\"0\" class=\"glossary-cancel-button icon icon-cross display-none\" aria-label=\""
    + alias5(((helper = (helper = helpers.clearSearch || (depth0 != null ? depth0.clearSearch : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"clearSearch","hash":{},"data":data,"loc":{"start":{"line":7,"column":112},"end":{"line":7,"column":127}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"glossary-checkbox-container\">\n        <input id=\"glossaryCheckbox\" type=\"checkbox\" class=\"glossary-checkbox\">\n        <label for=\"glossaryCheckbox\" class=\"glossary-checkbox-label\">"
    + ((stack1 = ((helper = (helper = helpers.searchWithInDescriptionLabel || (depth0 != null ? depth0.searchWithInDescriptionLabel : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchWithInDescriptionLabel","hash":{},"data":data,"loc":{"start":{"line":11,"column":70},"end":{"line":11,"column":104}}}) : helper))) != null ? stack1 : "")
    + "</label>\n    </div>\n    <div class=\"glossary-items-container\" role=\"list\"></div>\n    <div class=\"glossary-item-not-found h6 display-none\">"
    + ((stack1 = ((helper = (helper = helpers.itemNotFoundMessage || (depth0 != null ? depth0.itemNotFoundMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"itemNotFoundMessage","hash":{},"data":data,"loc":{"start":{"line":14,"column":57},"end":{"line":14,"column":82}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    <div class=\"glossary-alert aria-label\" aria-live=\"polite\" aria-atomic=\"true\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["glossaryItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "<button class=\"base glossary-item-term\" tabindex=\"0\" role=\"listitem\" aria-expanded=\"false\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":1,"column":103},"end":{"line":1,"column":113}}}) : helper))) != null ? stack1 : "")
    + "\">\n    <div class=\"glossary-item-term-inner h5\">\n        "
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</button>\n<div class=\"glossary-item-description\" role=\"region\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":6,"column":65},"end":{"line":6,"column":75}}}) : helper))) != null ? stack1 : "")
    + "\">\n    <div class=\"glossary-item-description-inner\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":33}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-inner\">\n    "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":83}}})) != null ? stack1 : "")
    + "\n    <div role=\"list\" class=\"js-children\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "    <span class=\"aria-label\">\n        "
    + container.escapeExpression((helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ariaLabel : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":29}}}))
    + "\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-indicator-inner "
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":54}}}) : helper)))
    + "-indicator-inner\">\n    <div class=\"pagelevelprogress-indicator-bar\" style=\"width: "
    + alias5(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":85}}}) : helper)))
    + "%;\">\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.ariaLabel : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + ". ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":185},"end":{"line":4,"column":321}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + ". ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + ". ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"page-level-progress-item-optional-text\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "<button\n    class=\"base pagelevelprogress-item-title clearfix drawer-item-open"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":112}}})) != null ? stack1 : "")
    + " js-indicator\"\n    data-pagelevelprogress-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":38}}}) : helper)))
    + "\"\n    aria-label=\""
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":97},"end":{"line":4,"column":328}}})) != null ? stack1 : "")
    + alias4((helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":4,"column":328},"end":{"line":4,"column":345}}}))
    + "\">\n    <div class=\"pagelevelprogress-item-title-inner\">\n    "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":23}}})) != null ? stack1 : "")
    + "\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression;

  return alias2(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<span class=\"tooltip\">"
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.progress : stack1), depth0))
    + "</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5=container.lambda;

  return "	<div class=\"resources-filter clearfix resources-col-"
    + alias4((helpers.resources_get_column_count||(depth0 && depth0.resources_get_column_count)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"resources_get_column_count","hash":{},"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":93}}}))
    + "\">\n		<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\">\n			<span>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\n		</button>\n"
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"document",{"name":"resources_has_type","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"media",{"name":"resources_has_type","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":19,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"link",{"name":"resources_has_type","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":24,"column":25}}})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\n		</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\n		</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\n		</button>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "	<div class=\"resources-item drawer-item "
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":29,"column":40},"end":{"line":29,"column":49}}}) : helper)))
    + "\" role=\"listitem\">\n		<a href=\""
    + alias5(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":30,"column":11},"end":{"line":30,"column":20}}}) : helper)))
    + "\" class=\"base resources-item-open drawer-item-open\"\n			data-type=\""
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":31,"column":14},"end":{"line":31,"column":23}}}) : helper)))
    + "\"\n"
    + ((stack1 = (helpers.resources_force_download||(depth0 && depth0.resources_force_download)||alias3).call(alias2,depth0,{"name":"resources_force_download","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":3},"end":{"line":34,"column":32}}})) != null ? stack1 : "")
    + "			target=\"_blank\"\n			aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":36,"column":15},"end":{"line":36,"column":26}}}) : helper))) != null ? stack1 : "")
    + ". "
    + alias5(helpers.lookup.call(alias2,((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1),(depth0 != null ? depth0._type : depth0),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":36,"column":68}}}))
    + "."
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":69},"end":{"line":36,"column":114}}})) != null ? stack1 : "")
    + "\">\n			<div class=\"drawer-item-title\">\n				<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":38,"column":44},"end":{"line":38,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":41,"column":47},"end":{"line":41,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n		</a>\n	</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "			download=\""
    + container.escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"filename","hash":{},"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":25}}}) : helper)))
    + "\"\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return " "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":36,"column":89},"end":{"line":36,"column":106}}}) : helper))) != null ? stack1 : "")
    + ".";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"resources-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resources : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":64}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.resources_has_multiple_types||(depth0 && depth0.resources_has_multiple_types)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"resources_has_multiple_types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":26,"column":34}}})) != null ? stack1 : "")
    + "	<div class=\"resources-item-container\" role=\"list\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":1},"end":{"line":45,"column":10}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " trickle-full-width";
},"3":function(container,depth0,helpers,partials,data) {
    return " locking";
},"5":function(container,depth0,helpers,partials,data) {
    return "display-none";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":18,"column":23}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression, alias4=depth0 != null ? depth0 : (container.nullContext || {}), alias5=container.hooks.helperMissing;

  return "<div class=\"component "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component-"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias5),(typeof helper === "function" ? helper.call(alias4,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":106},"end":{"line":1,"column":113}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":113},"end":{"line":1,"column":176}}})) != null ? stack1 : "")
    + " "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0))
    + "\">\n    "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias5).call(alias4,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._trickle : stack1)) != null ? stack1.incompleteContent : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":73}}})) != null ? stack1 : "")
    + "\n    <div class=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-inner component-inner"
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":69},"end":{"line":3,"column":119}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":120},"end":{"line":3,"column":182}}})) != null ? stack1 : "")
    + "\">\n        <button class=\"button "
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":81}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":82},"end":{"line":4,"column":145}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias4,((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["devtools"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"devtools-button-container\">\n    <div class=\"section-general\">\n        <span>General</span>\n    </div>\n    <div class=\"drawer-item toggle hinting\">\n        <input type=\"checkbox\" id=\"toggle-hinting\"/>\n        <label for=\"toggle-hinting\">\n            <div class=\"toggle-state\">\n                <div class=\"checkbox icon\"></div>\n            </div>\n            <div class=\"toggle-inner h5\">Question hinting</div>\n        </label>\n    </div>\n    <div class=\"drawer-item toggle auto-correct\">\n        <input type=\"checkbox\" id=\"toggle-auto-correct\"/>\n        <label for=\"toggle-auto-correct\">\n            <div class=\"toggle-state\">\n                <div class=\"checkbox icon\"></div>\n            </div>\n            <div class=\"toggle-inner h5\">Auto correct</div>\n        </label>\n    </div>\n    <div class=\"drawer-item tip auto-correct\"><em>ctrl+click submit to correctly answer questions (ctrl+shift+click for incorrect answer)</em></div>\n    <div class=\"drawer-item toggle feedback\">\n        <input type=\"checkbox\" id=\"toggle-feedback\"/>\n        <label for=\"toggle-feedback\">\n            <div class=\"toggle-state\">\n                <div class=\"checkbox icon\"></div>\n            </div>\n            <div class=\"toggle-inner h5\">Tutor</div>\n        </label>\n    </div>\n    <div class=\"drawer-item toggle alt-text\">\n        <input type=\"checkbox\" id=\"toggle-alt-text\"/>\n        <label for=\"toggle-alt-text\">\n            <div class=\"toggle-state\">\n                <div class=\"checkbox icon\"></div>\n            </div>\n            <div class=\"toggle-inner h5\">Show alt text</div>\n        </label>\n    </div>\n    <button class=\"drawer-item unlock\">Unlock</button>\n    <div>\n        <button class=\"drawer-item open-map\"><span>Course map</span><span class=\"devtools-alpha\">ALPHA</span></button>\n        <button class=\"drawer-item open-spoor-log\"><span>Spoor log</span></button>\n        <div style=\"clear:both;\"></div>\n    </div>\n    <div class=\"section-page\">\n        <span>Page</span>\n    </div>\n    <div class=\"drawer-item toggle banking\">\n        <input type=\"checkbox\" id=\"toggle-banking\"/>\n        <label for=\"toggle-banking\">\n            <div class=\"toggle-state\">\n                <div class=\"checkbox icon\"></div>\n            </div>\n            <div class=\"toggle-inner h5\">Question banks <em>(this page)</em></div>\n        </label>\n    </div>\n    <button class=\"drawer-item end-trickle\">Untrickle</button>\n    <button class=\"drawer-item complete-page\">Complete page</button>\n    <div class=\"drawer-item tip pass-half-fail\"></div>\n    <div class=\"pass-half-fail-container clearfix\">\n        <button class=\"drawer-item pass\">Pass</button>\n        <button class=\"drawer-item half\">Half</button>\n        <button class=\"drawer-item fail\">Fail</button>\n    </div>\n    <div class=\"section-menu\">\n        <span>Menu</span>\n    </div>\n    <button class=\"drawer-item complete-menu\">Complete menu</button>\n    <div class=\"devtools-extended-settings\">\n        <div class=\"drawer-item toggle trace-focus\">\n            <input type=\"checkbox\" id=\"toggle-trace-focus\"/>\n            <label for=\"toggle-trace-focus\">\n                <div class=\"toggle-state\">\n                    <div class=\"checkbox icon\"></div>\n                </div>\n                <div class=\"toggle-inner h5\">Trace focus</div>\n            </label>\n        </div>\n    </div>\n    <div class=\"drawer-item tip\"><b>Dev tip:</b> with the browser console open, left-click and press <kbd>m</kbd> to show the data model for that element.</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["devtoolsAnnotation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":82}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "No alt text/aria-label";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<span class=\"devtools-annotation\"><em class=\"annotation-text\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":62},"end":{"line":1,"column":119}}})) != null ? stack1 : "")
    + "</em></span>";
},"useData":true});

this["Handlebars"]["templates"]["devtoolsMap"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"devtools-map-container\">\n"
    + ((stack1 = container.invokePartial(partials.devtoolsMapMenu,(depth0 != null ? depth0.course : depth0),{"name":"devtoolsMapMenu","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["devtoolsNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"base devtools-navigation-drawer-toggle-button icon icon-cog\">\n</a>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchBox"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"list-item search\">\n    <input type=\"text\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":51}}}) : helper)))
    + "\" class=\"search-box\">\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchResults"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-results-inner\">\n    <div class=\"search-results-content\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["searchResultsContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isAwaitingResults : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "    <div class=\"no-results\" tabindex=\"0\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.awaitingResultsMessage || (depth0 != null ? depth0.awaitingResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":81}}}) : helper))) != null ? stack1 : "")
    + "\" role=\"region\">\n        <div class=\"search-result-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.awaitingResultsMessage || (depth0 != null ? depth0.awaitingResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.formattedResults : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":28,"column":13}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "        <button class=\"base search-result\" data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":52},"end":{"line":11,"column":58}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.searchTitle || (depth0 != null ? depth0.searchTitle : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchTitle","hash":{},"data":data,"loc":{"start":{"line":11,"column":72},"end":{"line":11,"column":89}}}) : helper))) != null ? stack1 : "")
    + ". "
    + ((stack1 = ((helper = (helper = helpers.textPreview || (depth0 != null ? depth0.textPreview : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":11,"column":91},"end":{"line":11,"column":108}}}) : helper))) != null ? stack1 : "")
    + "\">\n            <div class=\"search-result-inner\">\n                <div class=\"result-title\">"
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._showHighlights : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":13,"column":42},"end":{"line":13,"column":123}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.textPreview : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":16,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._showFoundWords : depths[1]),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.searchTitleTagged || (depth0 != null ? depth0.searchTitleTagged : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchTitleTagged","hash":{},"data":data,"loc":{"start":{"line":13,"column":68},"end":{"line":13,"column":91}}}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.searchTitle || (depth0 != null ? depth0.searchTitle : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchTitle","hash":{},"data":data,"loc":{"start":{"line":13,"column":99},"end":{"line":13,"column":116}}}) : helper))) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"result-preview\">\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._showHighlights : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":130}}})) != null ? stack1 : "")
    + "\"</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.textPreviewTagged || (depth0 != null ? depth0.textPreviewTagged : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreviewTagged","hash":{},"data":data,"loc":{"start":{"line":15,"column":75},"end":{"line":15,"column":98}}}) : helper))) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.textPreview || (depth0 != null ? depth0.textPreview : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":15,"column":106},"end":{"line":15,"column":123}}}) : helper))) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "                <div class=\"result-foundwords\"><i>"
    + ((stack1 = ((helper = (helper = helpers.foundWords || (depth0 != null ? depth0.foundWords : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"foundWords","hash":{},"data":data,"loc":{"start":{"line":18,"column":50},"end":{"line":18,"column":66}}}) : helper))) != null ? stack1 : "")
    + "</i></div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "         <div class=\"no-results\" tabindex=\"0\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.noResultsMessage || (depth0 != null ? depth0.noResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":23,"column":58},"end":{"line":23,"column":80}}}) : helper))) != null ? stack1 : "")
    + "\" role=\"region\">\n            <div class=\"search-result-inner\">\n                "
    + ((stack1 = ((helper = (helper = helpers.noResultsMessage || (depth0 != null ? depth0.noResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isBlank : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["searchSingleItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "<div class=\"drawer-item\">\n    <div class=\"base drawer-item-open search-drawer\"> \n        <div class=\"drawer-item-title\">\n            <div class=\"drawer-item-title-inner h5\" tabindex=\"0\" aria-role=\"region\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":84},"end":{"line":4,"column":95}}}) : helper))) != null ? stack1 : "")
    + "</div>\n        </div>\n        <div class=\"drawer-item-description\">\n            <div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text||(depth0 && depth0.a11y_text)||alias3).call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data,"loc":{"start":{"line":7,"column":55},"end":{"line":7,"column":82}}})) != null ? stack1 : "")
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression((helpers.a11y_aria_image||(depth0 && depth0.a11y_aria_image)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":56}}}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <span class=\"menu-item-duration\">"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":140}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":18,"column":141},"end":{"line":18,"column":155}}}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0)) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    return "visited";
},"12":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"menu-item-inner\">\n    <div class=\"menu-item-graphic\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":6,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" aria-hidden=\"true\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":87},"end":{"line":10,"column":113}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":63}}})) != null ? stack1 : "")
    + "\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":14,"column":42},"end":{"line":14,"column":60}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-button\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":19,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"js-menu-item-progress\"></div>\n        <button aria-label=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":28},"end":{"line":21,"column":100}}})) != null ? stack1 : "")
    + " "
    + alias5(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":21,"column":101},"end":{"line":21,"column":113}}}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":122},"end":{"line":21,"column":154}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":155},"end":{"line":21,"column":187}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":189},"end":{"line":21,"column":232}}})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div class=\"menu-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":10,"column":16}}})) != null ? stack1 : "")
    + "					<div class=\"menu-title-inner h1\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":38},"end":{"line":11,"column":102}}})) != null ? stack1 : "")
    + ">\n						"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":32}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner\">\n						"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":24}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"menu-container\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class=\"js-children\" role=\"list\">\n\n		</div>\n	</div>\n</div>\n";
},"useData":true});

return this["Handlebars"];

});