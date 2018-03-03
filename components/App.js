import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

//sfcookies help store information put in the app in browser, so notes don't go away after page reload


const cookie_key = 'NOTES';


class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount() {

        this.setState({ notes: read_cookie(cookie_key) });
    }


    submit() {
        //const notes = this.state.notes;   ES5
        const { notes, text } = this.state;     //ES6

        //const newNote = { text: text }; ES5 key and value in { }
        //const newNote = { text };      //ES6, line later removed and 'text' moved to next line

        //notes.push(newNote);
        notes.push({ text });

        //this.setState({ notes: notes }); ES5 key and value in { }
        this.setState({ notes });      //ES6

        bake_cookie(cookie_key, this.state.notes);
    }

    clear() {
        delete_cookie(cookie_key);

        this.setState({ notes: [] });
    }

    render() {

        return (
            <div>
                <h2>Note2Self</h2>
                <Form inline>
                    <FormControl onChange={event => this.setState({ text: event.target.value })}/>
                    {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {   //index helps with React Warnings that each child in an array should have a unique key
                        return (
                            //{/*<div key={index}>{note.text}</div>*/}
                            //using Note component below instead of above line
                        <Note key={index} note={note} />
                        )
                    })
                }
                <hr />
                <Button onClick={() => this.clear()}>Clear Notes</Button>
            </div>
        )
    }
}

export default App;