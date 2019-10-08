import React from 'react';

export class Book extends React.Component {
    //function to check that the rating exists or not
    isFoundRating = () => {
        if (this.props.bookFromParent.volumeInfo.averageRating) {
            return <div><span className="text-info"> Average Rating:</span>
                {this.props.bookFromParent.volumeInfo.averageRating}</div>
        }
    }
    //finction to check that the publisher exists or not
    isFoundPublisher = () => {
        if (this.props.bookFromParent.volumeInfo.publisher) {
            return <div>
                <span className="text-info"> publisher</span>
                {this.props.bookFromParent.volumeInfo.publisher}
            </div>
        }
    }
    isFoundImage = () => {
        if (this.props.bookFromParent.volumeInfo.imageLinks.thumbnail) {
            return <div>
                    <img src={this.props.bookFromParent.volumeInfo.imageLinks.thumbnail}></img>
            </div>
        }
    }
    render() {
        console.log("hello from single bookkkkkkkkk ", this.props.bookFromParent.volumeInfo.imageLinks.thumbnail)
        return (
            <div key={this.props.bookFromParent.volumeInfo.id}>
                <div>
                    <span className="text-info"> Book Title:</span>
                    {this.props.bookFromParent.volumeInfo.title}
                </div>
                {/* <div>
                    <span className="text-info"> Authors:</span>
                    {this.props.bookFromParent.volumeInfo.authors.map(author => {
                        return <div>{author}</div>
                    })}
                </div> */}
                <div>
                    {this.isFoundPublisher()}
                </div>
                <div>
                    {this.isFoundRating()}
                </div>
                <div>                   
                {this.isFoundImage()}
                </div>

                <hr />
            </div>

        );
    }
}

{/* <div class="card" style="width: 18rem;">
  <img src={this.props.bookFromParent.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{this.props.bookFromParent.volumeInfo.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}