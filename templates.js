var appTemplates = {};

var todoTmpl = {
  todo: [
    '<div class="tabTodo active" data-idx="<%= idx %>">',
      '<input type="checkbox" name="input">',
      '<input type="text" name="content" value="<%= content %>">',
    '</div>'
  ].join('')
}
