import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Pagination extends React.Component {
	
	constructor(props){
		super(props)
	}
	
	componentDidMount() {
		try{console.log(this.props.location.search)}catch(e){}
	}
	componentWillMount() {
		try{console.log(this.props.location.search)}catch(e){}
	}
	render(){
		try{console.log(this.props.location.search)}catch(e){}
		const { first, previous , next, last } = this.props;
		const previousLink = '/?page=' + previous;
		const nextLink = '/?page=' + next;
		const firstLink = '/?page=' + first;
		const lastLink = '/?page=' + last;
		console.log(this.props)
		return (
				<nav aria-label="...">
				  <ul className="pagination pagination-sm">
				  {
					  first ? <li className="page-item"><NavLink className="page-link" to={ firstLink } >first</NavLink></li> 
					  : <li className="page-item disabled"><NavLink className="page-link" to={ firstLink } >first</NavLink></li> 
				  }
				  {
					  previous ? <li className="page-item"><NavLink className="page-link" to={ previousLink } >previous</NavLink></li> 
					  : <li className="page-item disabled"><NavLink className="page-link" to={ previousLink } >previous</NavLink></li> 
				  }
				  {
					  next ? <li className="page-item"><NavLink className="page-link" to={ nextLink } >next</NavLink></li> 
					  : <li className="page-item disabled"><NavLink className="page-link" to={ nextLink } >next</NavLink></li> 
				  }
				  {
					  last ? <li className="page-item"><NavLink className="page-link" to={ lastLink } >last</NavLink></li> 
					  : <li className="page-item disabled"><NavLink className="page-link" to={ lastLink } >last</NavLink></li> 
				  }
			    
				  </ul>
				</nav>
			)
	}
};


Pagination.propTypes = {
		first: PropTypes.number
		, previous: PropTypes.number 
		, next: PropTypes.number
		, last: PropTypes.number
}

export default Pagination;