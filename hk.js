const puppeteer=require("puppeteer");
const codeobj=require("./codes");
const loginlink="https://www.hackerrank.com/auth/login";
const email="neerajvrma_21";
const password="neeraj__123";
let browseropen=puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null
})
let page;
browseropen.then(function(browserobj){
    let browseropenpromise=browserobj.newPage();
    return browseropenpromise;
})
.then(function(newTab){
    page=newTab;
    let hackerrankopen=newTab.goto(loginlink);
    return hackerrankopen;
})
.then(function(){
    let emailisentered=page.type("input[type='text']",email,{delay:50});
    return emailisentered;
}).then(function(){
    let passwordisentered=page.type("input[type='password']",password,{delay:50});
    return passwordisentered;
}).then(function(){
    let loginbutton=page.click('button[data-analytics="LoginPassword"]',{delay:50});
    return loginbutton;
}).then(function(){
let clickonalgopromise=waitandclick(' [data-automation="algorithms"]',page);
return clickonalgopromise;
})
.then(function(){
    let clicktowarmup=waitandclick('input[value="warmup"]',page);
    return clicktowarmup;
 })
//  .then(function(){
//     let waitfor3sec=page.waitFor(3000);
//     return waitfor3sec;
//  })
.then(function(){
    let allchalengespromise=page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    return allchalengespromise;
 }).then(function(questionarr){
    // console.log('number of question',questionarr.length);
    let questionwillclick=questionsolver(page,questionarr[0],codeobj.answers[0]);
    return questionwillclick;
 })
 function questionsolver(page,question,answer){
    return new Promise(function (resolve,reject){
        let questionclicked=question.click();
       questionclicked.then(function(){ 
        let gotoanswer=waitandclick(".monaco-editor.no-user-select.vs",page);
        return gotoanswer;

       }).then(function(){
        return waitandclick('.checkbox-input',page )
       }).then(function(){
        return page.waitForSelector('.text-area.custominput',page);
       }).then(function(){
        return page.type('.text-area.custominput',answer,{delay:10})
       }).then(function(){
        let ctrlpressed=page.keyboard.down("Control")
        return ctrlpressed;
       }).then(function(){
        let aispressed=page.keyboard.press('A',{delay:100});
        return aispressed;
       }).then(function(){
        let xispressed=page.keyboard.press('X',{delay:100});
        return xispressed;
       }).then(function(){
        let ctrlisunpressed=page.keyboard.up("Control");
        return ctrlisunpressed;
       }).then(function(){
        let maineditorfocus=waitandclick(".monaco-editor.no-user-select.vs",page);
        return maineditorfocus;
       }).then(function(){
        let ctrlpressed=page.keyboard.down("Control")
        return ctrlpressed;
       }).then(function(){
        let aispressed=page.keyboard.press('A',{delay:100});
        return aispressed;
       }).then(function(){
        let vispressed=page.keyboard.press('V',{delay:100});
        return vispressed;
       }).then(function(){
        let ctrlisunpressed=page.keyboard.up("Control");
        return ctrlisunpressed;
       }).then(function(){
        return page.click('.hr-monaco__run-code',{delay:50})
       }).then(function(){
        resolve();
       }).catch((err)=>{
       reject(new Error('Something went wrong !')) ;
       });
    })
 }

function waitandclick(selector,cpage){
    return new Promise((resolve, reject) => {
        let waitforpromise=cpage.waitForSelector(selector)
        waitforpromise.then(function(){
            let clickmodal=cpage.click(selector)
            return clickmodal;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}