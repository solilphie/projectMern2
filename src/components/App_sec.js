import React, { useEffect, useState } from 'react';
import Posts from './Joblist';
import PostLoadingComponent from './PostLoading';
import axiosInstance from '../axios';

function App_sec() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});
    useEffect(() => {
			setAppState({ loading: true });
			const apiUrl = `http://127.0.0.1:8000/api/admin/allposts`;
			fetch(apiUrl)
				.then((data) => data.json())
				.then((posts) => {
					setAppState({ loading: false, posts: posts });
				});
		}, [setAppState]);
    return (
		<div className="App">
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);



}

export default App_sec;