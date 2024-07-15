import { useState } from "react";
import CommentsSection from "./CommentSection";

export default function Post({ isDarkMode }) {
	const [isLiked, setLike] = useState(false);
	const [commentActive, setCommentActive] = useState(false);

	return (
		<>
			{commentActive ? (
				<CommentsSection
					setCommentActive={setCommentActive}
					isDarkMode={isDarkMode}
				/>
			) : (
				""
			)}

			<div className="w-full h-auto flex flex-col dynamic-primary rounded-xl mb-2">
				<div className="flex flex-col p-4 pb-2">
					<div className="w-full h-14 flex items-center" id="headerPost">
						<div
							className="w-12 h-12 rounded-full dynamic-bg cursor-pointer"
							id="image"
						></div>
						<div
							className="flex flex-col px-2 dynamic-text"
							id="nameAndLocation"
						>
							<p className="font-bold text-xl cursor-pointer dynamic-text">
								Name
							</p>
							<p className="font-semibold opacity-80 dynamic-text">location</p>
						</div>
					</div>
					<div className="w-full h-auto pt-2">
						<p className="dynamic-text text-lg text-left">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur reiciendis, ullam aut quisquam temporibus quod placeat
							repellendus sequi. Quo voluptatem beatae quia at minima excepturi
							nobis, iste veniam quas. Necessitatibus?
						</p>
						<p className="text-l-accent dark:text-d-accent text-lg font-semibold py-1 cursor-pointer">
							#hashtags #kirim #socialmedia
						</p>
					</div>
				</div>
				<div className="w-full mb-2 md:mb-4 flex justify-center">
					<img src="/images/alien.jpg" alt="" />
				</div>
				<div
					className="w-full h-[40px] md:h-[50px] flex flex-row px-2 pb-2 md:pb-4 gap-1"
					id="likes"
				>
					<div className="flex flex-row justify-center leading-3">
						<img
							src={`./icons/${
								isLiked ? "active-" : isDarkMode ? "d-" : "l-"
							}like.svg`}
							alt="like"
							className="cursor-pointer w-15"
							onClick={() => {
								setLike(!isLiked);
							}}
						/>
						<p className="dynamic-text font-semibold text-lg pl-1 self-center">
							12
						</p>
					</div>
					<div className="flex flex-row justify-center">
						<img
							src={`./icons/${isDarkMode ? "d-" : "l-"}comment.svg`}
							alt="comment"
							className="cursor-pointer"
							onClick={() => setCommentActive(!commentActive)}
						/>
						<p className="dynamic-text font-semibold text-lg pl-[6px] self-center">
							32
						</p>
					</div>
					<img
						src={`./icons/${isDarkMode ? "d-" : "l-"}share.svg`}
						alt="share"
						className="cursor-pointer"
					/>
				</div>
			</div>
		</>
	);
}
