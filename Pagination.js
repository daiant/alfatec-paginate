import React from "react";

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
	}
	handleClick(item) {
	    this.props.setState({
	      currentPage: Number(item.target.value)
	    });
	  }
	handlePrev() {
		if(this.props.currentPage > 1) {
			this.props.setState({
				currentPage: this.props.currentPage - 1
			})
		}
	}
	handleNext(totalPages) {
		if(this.props.currentPage < totalPages) {
			this.props.setState({
				currentPage: this.props.currentPage + 1
			})	
		}
	}
	handleFirst() {
		this.props.setState({
			currentPage: 1
		})
	}
	handleLast(totalPages) {
		this.props.setState({
			currentPage: totalPages
		})
	}
	render() {
		// Logic for displaying page numbers
	    const pageNumbers = [];
	    for (let i = 1; i <= Math.ceil(this.props.lenResults / this.props.itemsPerPage); i++) {
	      pageNumbers.push(i);
	    }

	    const renderPageNumbers = pageNumbers.map(number => {
	      return (
	       <option
	          key={number}
	          value={number}
	          id={number}
	        >
	          {number}
	        </option>
	      );
	    });
		if(this.props.lenResults == 0) {
			return null;
		}
		return(
			<nav className="pagination">
				<div id="page-numbers">
					<span>Mostrando {this.props.indexOfFirstItem+1}-{Math.min(this.props.indexOfLastItem, this.props.lenResults)} de {this.props.lenResults} resultados.</span>
				</div>
				<div className="pagination-nav"> 
					<span className="pagination-nav-info">Página 
					<select className="pagination-select" onChange={this.handleClick} value={this.props.currentPage}>  
						{renderPageNumbers}
					</select>
					de {pageNumbers.length} </span>
					<span className={"pagination-nav-info navigator " + (this.props.currentPage == 1 ? "disabled": "")} onClick={() => this.handleFirst()}>Primero</span>
					<span className={"pagination-nav-info navigator " + (this.props.currentPage == 1 ? "disabled": "")} onClick={this.handlePrev}>Anterior</span>   
					<span className={"pagination-nav-info navigator " + (this.props.currentPage == pageNumbers.length ? "disabled": "")} onClick={() => this.handleNext(pageNumbers.length)}>Siguiente</span>
					<span className={"pagination-nav-info navigator " + (this.props.currentPage == pageNumbers.length ? "disabled": "")} onClick={() => this.handleLast(pageNumbers.length)}>Ultimo</span>
				</div>
			</ nav>
			)
	}
}
