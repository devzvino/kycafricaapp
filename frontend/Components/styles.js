 
//colors

export const Colors = {
    primary: '#FFFFFF',
    main: '#2FBF00',
    orange: '#FF8115',
    green: '#00BB56',
    red: '#FF0000',
    blue: '#3190FF', 
    grey: '#505050',
};

const { primary,main, orange, green, red, blue, grey, grey2 } = Colors;
console.log(grey)

// componets styles

export const FONTSTYLES = {
    heading1: {
    
        color: grey,
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '400',
        letterSpacing: 0.5,
        textAlign: 'left',
        width: '80%',
        marginBottom: 20,
    },
    nativeButtonLink: {
        color: 'orange',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 20,

    },
    footerText: {
        color: grey,
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: '400',

    },
    mainbtntext:{
        color: primary,
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '700',
    },
    paratxt:{
    
        color: grey,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',  
    }

};

export const BUTTONS = {
    mainBtn: {
        margin: 'auto',
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: main,
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 20,
        color: primary,
        textTransform: 'uppercase',
    },
    menuBtn: {
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: main,
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 20,
        color: primary,
        textTransform: 'uppercase',
    },
    navBtn: {
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: green,
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 50,
        marginBottom: 50,
        
    },

};

export const LOGO = {
    main: {
    }
};

export const INPUT = {
    loginInput: {
        height: 60,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        borderColor: grey2,
        fontSize: 18,
        paddingLeft: 20,
    },
}