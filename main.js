const app = new Vue(
    {
        el:'#app',
        data: {
            newtodo: '',
            todos: ['studiare', 'programmare', 'mangiare', 'dormire']
        },
    /*aggiungo un nuovo todo al click*/
        methods: {
            addTodo() {
                this.todos.push(this.newtodo);
                this.newtodo= '';
            },
    /*rimuovo il todo al click della x*/
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
    /*al click verifico se il todo è vero o falso*/
            done(index) {
                        if(!this.line) {
                    this.line = true;
                    index.currentTarget.classList.add("linea")
                }else if(this.line) {
                    this.line = false;
                    index.currentTarget.classList.remove("linea")
                }
                
            }
        }
    }

);