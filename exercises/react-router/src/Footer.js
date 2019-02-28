import React from "react"

const Footer = () => {
    const styles={
        div:{
            backgroundColor:"black",
            color:"white"
        },
        ul:{
            display:"inline-block",
            marginLeft:"12%",
            cursor:"pointer"
        },
        li:{
            listStyleType:"none",
            fontSize:14,
            cursor:"pointer"
        },
        para:{
            fontSize:18,
            marginTop:0,
            marginBottom:4,
            textDecoration:"underline",
            cursor:"pointer"
        }
    }
    return (
        <div style={styles.div}>
            <ul style={styles.ul}>
                <p style={styles.para}>Products</p>
                <li style={styles.li}>Pricing</li>
                <li style={styles.li}>All products</li>
                <li style={styles.li}>Warranties</li>
            </ul>
            <ul style={styles.ul}>
                <p style={styles.para}>Stories</p>
                <li style={styles.li}>Authors</li>
                <li style={styles.li}>Story Types</li>
                <li style={styles.li}>Submit Story</li>
            </ul>
            <ul style={styles.ul}>
                <p style={styles.para}>Community</p>
                <li style={styles.li}>Outreach</li>
                <li style={styles.li}>Funding</li>
                <li style={styles.li}>Get Involved</li>
            </ul>
            <ul style={styles.ul}>
                <p style={styles.para}>About</p>
                <li style={styles.li}>Legal</li>
                <li style={styles.li}>Privacy</li>
                <li style={styles.li}>Copyright</li>
            </ul>
        </div>
    )
}


export default Footer