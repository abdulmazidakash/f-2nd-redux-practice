import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
	const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	let content;

	if (isLoading) {
		content = <h1>Loading Posts</h1>;
	}
	if (!isLoading && isError) {
		content = <h1>{error}</h1>;
	}
	if (!isLoading && !isError && posts.length === 0) {
		content = <h1>No posts available</h1>;
	}

	if (!isLoading && !isError && posts.length > 0) {
		content = (
			<>
				{posts.map((post) => (
					<div key={post.id} className="card bg-base-100 w-96 shadow-sm">
						<figure className="px-10 pt-10">
							<img src={post.url} alt={post.title} className="rounded-xl" />
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">{post.title}</h2> {/* ✅ Dynamic title */}
							<p>{post.description || "No description available."}</p> {/* ✅ Dynamic or fallback description */}
							<div className="card-actions">
								<button className="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				))}
			</>
		);
	}

	return <div className="flex flex-wrap gap-4">{content}</div>;
};

export default Posts;
