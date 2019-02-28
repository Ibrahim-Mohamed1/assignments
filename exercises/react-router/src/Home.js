import React from "react"

const Home = () => {
    const styles={
        div:{
            backgroundColor: "orange",
        },
        margin:{
            margin:"1%"
        }
    }
    return (
        <div style={styles.div}>
            <h1 style={{...styles.margin, ...styles.title}}>Success Stories!</h1>
            <h3 style={{...styles.margin}}>Arianna Huffington got rejected by 36 publishers.</h3>
            <p style={{...styles.margin}}>It’s hard to believe that one of the most recognizable names in online publications was once rejected by three dozen major publishers. Huffington’s second book, which she tried to publish long before she created the now ubiquitously recognizable Huffington Post empire, was rejected 36 times before it was eventually accepted for publication.</p>
            <h3 style={{...styles.margin}}>Bill Gates watched his first company crumble.</h3>
            <p style={{...styles.margin}}>Bill Gates is now one of the world’s wealthiest individuals, but he didn’t earn his fortune in a straight line to success. Gates entered the entrepreneurial scene with a company called Traf-O-Data, which aimed to process and analyze the data from traffic tapes (think of it like an early version of big data).
            <br></br>
            <br></br>
            He tried to sell the idea alongside his business partner, Paul Allen, but the product barely even worked. It was a complete disaster. However, the failure did not hold Gates back from exploring new opportunities, and a few years later, he created his first Microsoft product, and forged a new path to success.</p>
            <h3 style={{...styles.margin}}>George Steinbrenner bankrupted a team.</h3>
            <p style={{...styles.margin}}>Before Steinbrenner made a name for himself when he acquired ownership of the New York Yankees, he owned a small basketball team called the Cleveland Pipers back in 1960. By 1962, as a result of Steinbrenner’s direction, the entire franchise went bankrupt.
            <br></br>
            <br></br>
            That stretch of failure seemed to follow Steinbrenner when he took over the Yankees in the 1970s, as the team struggled with a number of setbacks and losses throughout the 1980s and 1990s. However, despite public fear and criticism of Steinbrenner’s controversial decisions, eventually he led the team to an amazing comeback, with six World Series entries between 1996 and 2003, and a record as one of the most profitable teams in Major League Baseball.</p>
            <h3 style={{...styles.margin}}>Walt Disney was told he lacked creativity.</h3>
            <p style={{...styles.margin}}>One of the most creative geniuses of the 20th century was once fired from a newspaper because he was told he lacked creativity. Trying to persevere, Disney formed his first animation company, which was called Laugh-O-Gram Films. He raised $15,000 for the company but eventually was forced to close Laugh-O-Gram, following the close of an important distributor partner.
            <br></br>
            <br></br>
            Desperate and out of money, Disney found his way to Hollywood and faced even more criticism and failure until finally, his first few classic films started to skyrocket in popularity.</p>
            <h3 style={{...styles.margin}}>Steve Jobs was booted from his own company.</h3>
            <p style={{...styles.margin}}>Steve Jobs is an impressive entrepreneur because of his boundless innovations, but also because of his emphatic comeback from an almost irrecoverable failure. Jobs found success in his 20s when Apple became a massive empire, but when he was 30, Apple’s board of directors decided to fire him.
            <br></br>
            <br></br>
            Undaunted by the failure, Jobs founded a new company, NeXT, which was eventually acquired by Apple. Once back at Apple, Jobs proved his capacity for greatness by reinventing the company’s image and taking the Apple brand to new heights.</p>
            <h3 style={{...styles.margin}}>Milton Hershey started three candy companies before Hershey's.</h3>
            <p style={{...styles.margin}}>Everyone knows Hershey’s chocolate, but when Milton Hershey first started his candy production career, he was a nobody. After being fired from an apprenticeship with a printer, Hershey started three separate candy-related ventures, and was forced to watch all of them fail.
            <br></br>
            <br></br>
            In one last attempt, Hershey founded the Lancaster Caramel Company, and started seeing enormous results. Believing in his vision for milk chocolate for the masses, he eventually founded the Hershey Company and became one of the most well-known names in the industry.</p>
        </div>
    )
}


export default Home