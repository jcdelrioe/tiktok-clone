import { Heart } from "../Icons/Heart";
import { Comment } from "../Icons/Comment";
import { Shares } from "../Icons/Shares";
import styles from "./styles.module.css";

export default function VideoPlayerActions({
	likes = 12,
	comments = 12,
	shares = 12,
	hearted = false,
}) {
	const handleLike = () => {
		alert("like");
	};
	const handleComment = () => {
		alert("Comment");
	};
	const handleShare = () => {
		alert("Share");
	};
	return (
		<aside className={styles.actions}>
			<button onClick={handleLike} className={styles.action}>
				<Heart />
				<span title="like">{likes}</span>
			</button>
			<button onClick={handleComment} className={styles.action}>
				<Comment />
				<span title="comments">{comments}</span>
			</button>
			<button onClick={handleShare} className={styles.action}>
				<Shares />
				<span title="share">{shares}</span>
			</button>
		</aside>
	);
}
