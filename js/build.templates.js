this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.components.buttons"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template v-if=\"showSubmit\">\n<button :type=\"submitType\" class=\"btn btn-primary pull-right\">{{ submitValue }}</button>\n</template>\n<template v-if=\"showClear\">\n<button :type=\"clearType\" class=\"btn btn-secondary pull-right\" @click=\"resetForm()\">{{ clearValue }}</button>\n</template>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.checkbox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template v-for=\"(option, index) in options\">\n  <div class=\"checkbox checkbox-icon\">\n    <input :type=\"fieldType\" :id=\"name + '-' + index\" :name=\"name\" v-model=\"value\" :value=\"option.id\" :required=\"required\" v-on:change=\"updateValue()\">\n    <label :for=\"name + '-' + index\">\n      <span class=\"check\"><i class=\"fa fa-check\"></i></span> {{ option.id }}&nbsp;&nbsp;&nbsp;\n    </label>\n  </div>\n</template>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.email"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.field"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group row clearfix\">\n  <div class=\"col-xs-12\">\n    <label v-if=\"_isFormField\" :for=\"name\">{{ label }} <template v-if=\"required\"><span class=\"required-info\">*</span></template></label>\n  </div>\n  <div class=\"col-xs-12\">\n    "
    + ((stack1 = ((helper = (helper = helpers.template || (depth0 != null ? depth0.template : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"template","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.file"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<label :for=\"name\" class=\"fileUpload btn btn-primary\">\n  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  <span v-if=\"selectedFileName\">Replace file</span>\n  <span v-else>Choose file</span>\n  <input type=\"file\" ref=\"fileInput\" :id=\"name\" :name=\"name\" :data-folder-id=\"mediaFolderId\" class=\"input-file selectfile\" :required=\"required\" v-on:change=\"updateValue()\">\n</label>\n<template v-if=\"selectedFileName\">\n  <div class=\"file-name-helper\">Chosen file: <strong>{{ selectedFileName }}</strong></div>\n<template>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.horizontalRule"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<hr>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<label :for=\"name\" class=\"fileUpload btn btn-primary\">\n  <div class=\"canvas-holder\">\n    <span v-if=\"value.length > 1\" class=\"badge\">{{value.length}}</span>\n    <canvas ref=\"canvas\"></canvas>\n  </div>\n  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  <span v-if=\"value.length\">Replace image</span>\n  <span v-else>Choose image</span>\n  <input multiple type=\"file\" ref=\"imageInput\" :id=\"name\" :name=\"name\" class=\"input-file selectfile\" accept=\"image/gif, image/jpg, image/jpeg, image/tiff, image/png\" :required=\"required\" :data-folder-id=\"mediaFolderId\" v-on:click=\"onFileClick\" v-on:change=\"onFileChange\">\n</label>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.number"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.paragraph"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p v-html=\"htmlValue\"></p>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.password"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.radio"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template v-for=\"(option, index) in options\">\n  <div class=\"radio radio-icon\">\n    <input :type=\"fieldType\" :id=\"name + '-' + index\" :name=\"name\" v-model=\"value\" :required=\"required\" :value=\"option.id\" v-on:change=\"updateValue()\" >\n    <label :for=\"name + '-' + index\">\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> {{ option.id }}&nbsp;&nbsp;&nbsp;\n    </label>\n  </div>\n</template>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.select"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<label :for=\"name\" class=\"select-proxy-display\">\n  <span class=\"icon fa fa-chevron-down\"></span>\n  <span class=\"select-value-proxy\"><template v-if=\"value && value !== ''\">{{ value }}</template><template v-else>{{ placeholder }}</template></span>\n  <select class=\"form-control hidden-select\" :name=\"name\" :id=\"name\" v-model=\"value\" :required=\"required\" v-on:change=\"updateValue()\">\n    <option v-if=\"placeholder\" value=\"\">{{ placeholder }}</option>\n    <option v-for=\"option in options\" :value=\"option.id\" :disabled=\"option.disabled\">\n      {{ option.id }}\n    </option>\n  </select>\n</label>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.telephone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.textarea"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<textarea\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :rows=\"rows\"\n  :required=\"required\"\n></textarea>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.title"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>{{ value }}</h2>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.url"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input\n  :type=\"fieldType\"\n  class=\"form-control\"\n  v-model.trim=\"value\"\n  v-on:input=\"updateValue()\"\n  :name=\"name\"\n  :id=\"name\"\n  :placeholder=\"placeholder\"\n  :required=\"required\"\n/>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.checkbox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\n  <label>Default value <small>(Enter one of the options you entered above)</small></label>\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.radio"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\n  <label>Default value <small>(Enter one of the options you entered above)</small></label>\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\n</div>\n";
},"useData":true});