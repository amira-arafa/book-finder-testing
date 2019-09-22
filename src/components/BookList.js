import React from 'react';
import { Book } from './Book';
import {connect} from 'react-redux';

export class BookList extends React.Component{
    renderList(){
        if(this.props.filteredBooks){
            console.log("hello from renderList ",this.props.filteredBooks);
            return this.props.filteredBooks.map((book)=>{
                return <Book  key={book.volumeInfo.id} bookFromParent={book}/>
            })
       
        }
        
    }
    render(){
   
        return(
            <div>
                {this.renderList()}
            </div>
        );
        
    }
}

const mapStateToProps=(state)=>{
    console.log("hello from map to state -->state", state.books.books);
    //el books el awlnya bta3t el reducer ely f combined reducer welbooks eltnya ely gwa el case bta3t el reducer nfso (el property)
    return {filteredBooks:state.books.books}
}
export default connect(mapStateToProps)(BookList);