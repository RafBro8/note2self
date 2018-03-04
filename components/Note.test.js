import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'test note'}}



//SPREAD OPERATOR EXAMPLES

//console.log({...props});  //output: { note: { text: 'test note' } }
//const triplePrint = (a, b, c) => {
//    console.log(`${a} ${b} ${c}`);
//};
//const message = ['react', 'is', 'awesome'];
//triplePrint(...message); //instead of triplePrint(message1, message2, message3)





describe('Note', () => {
    //let note = mount(<Note note={props.note} />); ES5
    let note = mount(<Note {...props} />);  //using ES6 Spread Operator

    it('renders the note text', () => {
        //console.log(note.debug());
        //expect(note.find('p').text()).toEqual('test note');   hardcoded values
        expect(note.find('p').text()).toEqual(props.note.text);   //dynamic value props.note.text in case 'test note' string changes
    });
});