var todos = [{
    content: "crud, what what",
    completed: false
}];

function getTodos() {
    return todos;
}

function addTodos(newTodo) {
    todos.push(newTodo);
}

function clearTodos(idx) {}

function deleteTodo(idx) {
    todos.splice(idx, 1);
}

function editTodo(idx, newTodo) {
    todos.update(idx);
}

function addTodosToDom(todoData, templateStr, $target) {
    var tmpl = _.template(templateStr);
    $target.append(tmpl(todoData));
}

function addAllTodos(arr) {
    $(".content").html("");
    _.each(arr, function(el, idx) {
        el.idx = idx;
        addTodosToDom(el, todoTmpl.todo, $(".content"));
    })
}

function getTodosFromDom() {
        var input = $('input[name = "getter"]').val();
        return {
            content: input,
            completed: false
        }
    }
    //
$(document).ready(function() {
    addAllTodos(todos);
    $('form').on('submit', function(event) {
        event.preventDefault();
        var newTodo = getTodosFromDom();
        console.log(newTodo);
        addTodos(newTodo);
        addAllTodos(getTodos());
        $('input[name=getter]').val('');
    })
    $('input').on('click', '.delete', function(event, idx) {
        var idx = $(this).parent().data('idx');
        deleteTodo(idx);
        addAllTodos(getTodos());
    });
    $('div.tabTodo').on('dblclick', '.editTodo', function(event, idx) {
        addTodos(newTodo);
        addAllTodos(getTodos());
        $('input[name=getter]').val('');
    })
});
$('div.tabTodo').on('click', 'toggle', function() {});
$('input:checkbox').click(function() {
        if (this.checked) {
            $(this).siblings("input").css("text-decoration", "line-through");
        } else {
            $(this).siblings("input").css("text-decoration", "none")
        }
})
// var toggle = $(this).parent().data('idx');
// todos[toggle].completed = !todos[toggle].completed
// var completeTodo = todos.filter(function(el) {
// return el.completed === true
// });

$('button.clearCompleted').on('click', function() {
    todos.forEach(function(el, idx) {
        if (el.completed === true) {
            deleteTodo(idx)
        }
    })
    addAllTodos(getTodos());
});
$('body').on('click', 'input[type="checkbox"]', function() {
        var postIndex = $(this).parent().data('idx');
        console.log(todos[postIndex].completed);
        todos[postIndex].completed = !todos[postIndex].completed
    })
    //
    // var todoPage = {
    //   init: function() {
    //
    //   },
    //   styling: function() {
    //
    //   },
    //   events: function() {
    //
    //   },
    // }
