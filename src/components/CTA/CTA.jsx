import styles from "./CTA.module.scss";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid purple;
  color: white;
  background-color: purple;
  padding: 15px;
  min-width: 120px;
  cursor: pointer;
`

function CTA  ()  {
    const {ctaSection, container} = styles;
    const showPost = (e) => {
        console.log(e.target)
    }
    return (
        <>
            <section className={ctaSection}>
                <div className={container}>
                    <h2>CTA Section</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, saepe!</p>
                    <Button onClick={showPost}>Show Post</Button>
                </div>
            </section>
        </>
    )
}

export default CTA;