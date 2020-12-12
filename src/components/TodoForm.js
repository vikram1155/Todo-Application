import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value); // to get input
    }

    const handleSubmit = e => { //so that it does not reload when button is clicked
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput(''); // so that it changes to empty string
    }



    return ( <
        form className = "todo-form"
        onSubmit = { handleSubmit } > {
            props.edit ? ( < > < input type = 'text'
                placeHolder = 'Update the todo'
                value = { input }
                name = 'text'
                className = 'todo-input'
                onChange = { handleChange }
                ref = { inputRef }
                /> <
                button className = 'todo-button edit' > Update < /button> </ > ) :
                ( <
                    >
                    <
                    input type = 'text'
                    placeHolder = 'Add a todo'
                    value = { input }
                    name = 'text'
                    className = 'todo-input'
                    onChange = { handleChange }
                    ref = { inputRef }
                    /> <
                    button className = 'todo-button' > Add todo < /button> <
                    />

                )
        }

        <
        /form>
    )
}

export default TodoForm;