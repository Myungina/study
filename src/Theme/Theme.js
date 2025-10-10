import { createSystem, defaultConfig, defineLayerStyles, defineTextStyles } from '@chakra-ui/react';
import { transform } from 'typescript';

const textStyles = defineTextStyles({
    contentTxt: {
        value: {
            fontSize: ["12px", "14px", "14px"],
            fontWeight: "normal",
            lineHeight: "160%",
            wordBreak:"keep-all",
            fontFamily: "KakaoBigFont"
        }
    },
    pageTit: {
        value: {
            fontSize: "lg",
            marginBottom: "3",
            color: "#ed4d8f",
            fontWeight:"800",
            fontFamily: "'KakaoBigFont', sans-serif"  
        }
    },
    subTit: {
        value: {
            fontSize: ["14px", "15px", "16px"]
        }
    },
    hrefBtn : {
        value:{
            position:"relative",
            height:["20px", "30px"],
            fontWeight:"bold",
            _after:{
                position:"absolute",
                display:"block",
                content:"''", 
                width:"3px",
                height:"3px",
                borderRadius: "50%",
                background:"#ec708d",
                left:"-5px",
                top:"30%",
                animation: "bounce 0.6s infinite alternate"
            }
        }
    },
    contentTit : {
        value:{
            fontWeight:"600"
        }
    }
});

const layerStyles = defineLayerStyles({
    section:{
        value:{
            display:"flex",
            flexDir:"column",
            minHeight:"100vh",
            background:"bodyBg"
        }
    },
    nav:{
        value:{            
            width:"max-content",
            margin:"0 auto 30px",            
            whiteSpace:"nowrap",
            padding:"10px 0",
             "& a":{          
                position:"relative",
                width:"auto",
                height:"36px",
                padding:"0 30px",
                background:"layerBg",
                borderRadius:"18px",      
                textAlign:"center",
                fontSize:"17px",
                lineHeight:"36px",                          
                overflow:"hidden",
                zIndex:"1",
                boxSizing:"border-box",
                color:"#f88090"
            },
            
            "& a.active, & a:hover" :{
                color:"#ffffff",
                fontWeight:"600",
                "&:before":{
                position:"absolute",
                display:"block",
                width:"36px",
                height:"36px",
                content:"''",
                top:"0",
                left: "0",
                borderRadius:"50%",
                background: "linear-gradient(95deg,#f88090 30%, #efc7d9 75%, #eabcdd 93%)",
                animation: "rollAndExpand 0.5s ease-in-out forwards",
                zIndex: "-1" 
            },
            
            }
        },       
    },
    footer:{
        value:{
            bg:"#eeeeee",
            padding:"10px 0",
            "& div" : {
                width:"100%",
                maxWidth:"1100px",
                margin:'0 auto'
            },
            "& p":{
                fontSize:"14px",
                textAlign:"right",
                color:"#a4a4a4"
            }
        }
    },
    container:{
        value:{
            padding:"0 2%",
            flex:"1"
        }
    },
    content:{
        value:{
            width:"100%",
            margin:"0 auto",
            padding:"0 2%",
        }
    },    
    inner:{
        value:{
            borderRadius:["10px"],
            padding:["10px" , "15px", "20px"],            
            background:"contentBg",
            height:"100%"
        }
    },
    cardStyle:{
        value:{
                boxShadow: "0px 0px 15px 4px #e4e4e4, inset 0px 5px 18px 0px rgb(246 246 246 / 75%)",
                background:"#ffffff",
                padding:"5",
                borderRadius:"10px"
        }
    }
})

export const theme = createSystem(defaultConfig, {
  theme: {
        tokens: {
            fonts: {
                body: { value: `'KakaoBigFont', sans-serif` },
            },
            colors: {
                mainColor: { value: "#ed4d8f" },
                subColor: { value: "#fcc9deff" },
                textColor: { value: "#dddddd" },
                layerBg : {value:"#f6f6f6"},
                contentBg:{value:"#ffffff"},
                bodyBg:{value:"#e9ecef"}
                //navBg: { value: "#ffecd7" },
            },
        },
        textStyles,
        layerStyles
    },
    globalCss: {
        '@font-face': [
            {
                fontFamily: 'SUIT-Regular',
                src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2')",
                fontWeight: 'normal',
                fontStyle: 'normal'
            },
            {
                fontFamily: 'NoonnuBasicGothic',
                src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2')",
                fontWeight: 'normal',
                fontDisplay: 'swap'
            },
            {
                fontFamily: 'KakaoBigFont',
                src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2503@1.0/KakaoBigSans-Regular.woff2') format('woff2')",
                fontWeight: '400',
                fontDisplay: 'swap'
            }
        ],
        '@keyframes bounce': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-100%)' }
        },
        "@keyframes rollAndExpand" : {
            '0%': {
                width: '36px',
                left: '0',
                transform: 'rotate(0deg)',
                borderRadius: '50%'
            },
            '70%': {
                width: '36px',
                left: 'calc(100% - 36px)',
                transform: 'rotate(360deg)',
                borderRadius: '50%'
            },
            '100%': {
                width: '100%',
                height: '100%',
                left: '0',
                transform: 'rotate(360deg) scale(1)',
                borderRadius: '20px'
            }
        }
    }
});