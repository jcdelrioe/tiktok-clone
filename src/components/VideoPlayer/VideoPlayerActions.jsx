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
	return (
		<aside className={styles.actions}>
			<div className={styles.action}>
				<Heart />
				<strong title="like">{likes}</strong>
			</div>
			<div className={styles.action}>
				<Comment />
				<strong title="comments">{comments}</strong>
			</div>
			<div className={styles.action}>
				<Shares />
				<strong title="share">{shares}</strong>
			</div>
		</aside>
	);
}
