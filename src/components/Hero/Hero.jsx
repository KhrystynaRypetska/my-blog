import PostList from "../PostList/PostList";
import styles from "./Hero.module.scss";

const Hero = () => {
    const { heroSection } = styles;
    return (
        <>
            <section className={heroSection}>
                <PostList type="red" />
            </section>

        </>
    )
}

export default Hero;