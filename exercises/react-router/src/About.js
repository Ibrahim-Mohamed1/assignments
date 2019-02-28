import React from "react"

const About = () => {
    const styles={
        div:{
            backgroundColor:"orange"
        },
        margin:{
            margin:"1%",
            fontFamily:"cursive"
        },
        h1:{
            fontFamily:"helvetica"
        }
    }
    return (
        <div style={styles.div}>
            <h1 style={{...styles.margin,...styles.h1}}>Founder: Ibrahim Mohamed</h1>
            <p style={styles.margin}>Motivation is a very strong tool we can use to get further in life and to achieve our dreams and goals. Setting goals for ourselves is something that I consider to be very important, I believe in always pushing myself further and further in life, not only physically but mentally as well. We all have different things or tools we can use to motivate us towards our end goals. In order for us to stay motivated we have to have a goal and be driven towards achieving that goal.
            <br></br>
            <br></br>
            For me, self-motivation is empowering. Finding something that I enjoy and love to do and setting the final goal of achieving it. My main goal that I have set right now is to work towards finishing my degree. My motivation behind this is to be able to get a better job and to set a good example for boys. With the right mind set, I can do and finish anything that I put my mind to. My education is very important to me and will help get me further in life. No one can push you towards your dreams and goals; you have to have the will and determination to push yourself.
            <br></br>
            <br></br>
            While other causes could inspire you temporarily, a cause that matters to you can inspire you indefinitely. It’s a spring of motivation that will never dry. Whenever you think that you run out of motivation,  you can always come to your cause to get a fresh dose of motivation.
            <br></br>
            <br></br>
            How can you have hunger? Your cause and your dream play a big role here. If you have a cause you care about and a big dream related to it, you should have the hunger inside of you. If you think that you are losing hunger, all you need to do is to connect again to your cause and dream. Let them inspire you and bring the hunger back.
                </p>
            <h1 style={{...styles.margin,...styles.h1}}>Co-Founder: Abe Mo</h1>
            <p style={styles.margin}>Don’t let that happen to you. You have your own race so how other people perform is irrelevant. Comparing yourself with others is like comparing the performance of a swimmer with a runner using the same time standard. They are different so how can you compare one with the other?
            <br></br>
            <br></br>
            When you meet obstacles along the way, there could be the tendency to quit. You may think that it’s too difficult to move on. You may think that your dream is impossible to achieve. But this is where you can see the difference between winners and losers. Though both of them face the same difficulties, there is one thing that makes the winners different: the courage to continue.
            <br></br>
            <br></br>
            The good news is it’s a burden you don’t have to carry. Take it off your shoulder and leave it. You might make mistakes in the past. You might disappoint others with what you did. But it’s over. It’s already in the past and there’s nothing you can do about it.
            <br></br>
            <br></br>
            If you keep thinking negative about things or you feel  you won’t succeed, it may influence things around you in such a way that all your negative predictions will come true which will make you more and more upset. This happens in the cases where you need to work hard to achieve your goals, or if you need to persuade others to support you in order to succeed.
            </p>
        </div>
    )
}


export default About