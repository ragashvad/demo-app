
import React, { Component } from 'react';
import './style/PopularTopics.css';
class PopularTopics extends Component {
	render() {
        const categories = this.props.authorTopics;
        console.log(categories)
		return (
			<div className="container">
				<div className="title">
					<h5>Popular Topics</h5>
				</div>
                    <div className ="row">
					{categories.map((categorie, i) => {
						return categorie.topics.map((topic, i) => (
							<div className="col-sm-3" key={i}>
								<div className="card">
									<div className="card-body topic text-center">{topic}</div>
								</div>
							</div>
						));
                    })}
                    </div>
				
			</div>
		);
	}
}

export default PopularTopics;