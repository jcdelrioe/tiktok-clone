import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
	{
		id: 1,
		author: "author01",
		description: "Descrition 01",
		likes: 123,
		shares: 234,
		comments: 111,
		songTitle: "",
		albumCover:
			"https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/b94eea8fa152426ca1ce7ebf7f8cbcb2~c5_200x200.jpeg",
		src: "https://v16-webapp.tiktok.com/d1637fa929087ee8faade9d9bc0f728b/622426f4/video/tos/useast2a/tos-useast2a-ve-0068c004/425abc585e3440c69035d97b9fe3aded/?a=1988&br=4476&bt=2238&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7Th1vgCDXq&l=2022030521134701018906604702BB5483&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M202Mzc6ZjtqOzMzNzczM0ApMzg5PGllPGU7NztkODg2Nmczc3MucjRnbl5gLS1kMTZzczY0MDA2MF4xYS0yYy8vMzI6Yw%3D%3D&vl=&vr=",
	},
	{
		id: 2,
		author: "author02",
		description: "Descrition 02",
		likes: 321,
		shares: 432,
		comments: 222,
		songTitle: "",
		albumCover:
			"https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/3bb1a2098e974cb784aaeaf4169d5b62~c5_200x200.jpeg",
		src: "https://v16-webapp.tiktok.com/e20a8222c30b03d374ec664d46ee0ab0/62240a88/video/tos/useast2a/tos-useast2a-ve-0068c001/004560f1ad964c73a851e3b08538376e/?a=1988&br=3934&bt=1967&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7ThR0OCDXq&l=2022030519112701019216213001A5301A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNoOTY6ZmtuOjMzNzczM0ApNjtlNWc1Z2U1NzQ5OGZmZmcxLmIycjRfMl9gLS1kMTZzczE1MjM0X19iMDM2MV4zYjM6Yw%3D%3D&vl=&vr=",
	},
];

export default function FeedVideos() {
	return VIDEOS.map((video) => {
		return (
			<div className={styles.item}>
				<VideoPlayer key={video.id} {...video} />
			</div>
		);
	});
}
