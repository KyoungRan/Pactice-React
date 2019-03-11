import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as counterActions from './modules/counter';
import * as counterActions from './modules/counterThunk';
import * as postActions from './modules/post';
import axios from 'axios';

class App extends Component {

	loadData = async () => {
		const { PostActions, number } = this.props;
		// PostActions.getPost(number).then(
		// 	(response) => {
		// 		console.log(response);
		// 	}
		// ).catch(
		// 	(error) => {
		// 		console.log(error);
		// 	}
		// );
		try {
			const response = await PostActions.getPost(number);
			console.log(response);
		} catch(e) {
			console.log(e);
		}
	};

	componentDidMount() {
		// axios.get('https://jsonplaceholder.typicode.com/posts/1')
		// 	.then(response => console.log(response));
		this.loadData();
	};

	componentDidUpdate(prevProps, prevState) {
		// 이전 number와 현재 number가 다르면 요청을 시작한다.
		if(this.props.number !== prevProps.number) {
			this.loadData();
		}
	}

	render() {
		const { CounterActions, number, post, error, loading } = this.props;
		return (
			<>
				<h1>{number}</h1>
				{
					loading
					? (<h2>로딩중...</h2>)
					: (
						error
							? (<h2>오류 발생!</h2>)
							: (
								<div>
									<h2>{post.title}</h2>
									<p>{post.body}</p>
								</div>
							)
					)
				}
				<button onClick={CounterActions.incrementAsync}>+</button>
				<button onClick={CounterActions.decrementAsync}>-</button>
			</>
		);
	}
};    

export default connect(
	(state) => ({
		number: state.counter,
		post: state.post.data,
		loading: state.post.pending,
		error: state.post.error
	}),
	(dispatch) => ({
		CounterActions: bindActionCreators(counterActions, dispatch),
		PostActions: bindActionCreators(postActions, dispatch)
	})
)(App);