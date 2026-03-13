// practical example of combining logical operators

const isProMembership = true;
const isLoggedIn = true;

const hasAccessCode = false;


if((isProMembership && isLoggedIn) || hasAccessCode){
    console.log('you can enjoi the web development course')
}else{
    console.log('access denied! please buy membership or course')
};

