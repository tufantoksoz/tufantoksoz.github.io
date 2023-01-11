import{T as B}from"./TourPage.a55c8070.js";import{_ as l,O as D,P as C,R as d,S as A,d as c,V as E,U as r}from"./index.8e6a2200.js";import"./QChip.38b2e4da.js";import"./use-cache.b0833c75.js";import"./QForm.93072130.js";var b="/assets/fishing-in-ulupinar-1.e2c08ba5.webp",m="/assets/fishing-in-ulupinar-2.c2c4e3db.webp",p="/assets/fishing-in-ulupinar-3.06f2fb6e.webp",F="/assets/fishing-in-ulupinar-4.2d94b064.webp",g="/assets/fishing-in-ulupinar-5.820c878f.webp",f="/assets/fishing-in-ulupinar-6.ecb18958.webp",h="/assets/fishing-in-ulupinar-7.eff5ee88.webp",y="/assets/fishing-in-ulupinar-8.31afebbd.webp";const T=D({components:{"tour-page":B},setup(){const u="Kemer",a="/antalya/kemer",i="\u041F\u0438\u043A\u043D\u0438\u043A \u0438 \u0420\u044B\u0431\u0430\u043B\u043A\u0430 \u0432 \u0423\u043B\u0443\u043F\u0438\u043D\u0430\u0440\u0435",e={tourName:"\u041F\u0438\u043A\u043D\u0438\u043A \u0438 \u0420\u044B\u0431\u0430\u043B\u043A\u0430 \u0432 \u0423\u043B\u0443\u043F\u0438\u043D\u0430\u0440\u0435",currency:"attach_money",oldPrice:32,adultPrice:30,childPrice:25,babyPrice:0,adultAge:"+12",childAge:"5-11",babyAge:"0-4"},t=[b,m,p,F,g,f,h,y],o=["\u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440 \u043E\u0442 \u0438 \u0434\u043E \u043E\u0442\u0435\u043B\u044F","\u041E\u0431\u0435\u0434: \u0424\u043E\u0440\u0435\u043B\u044C, \u043C\u044F\u0441\u043E \u043D\u0430 \u0432\u0435\u0440\u0442\u0435\u043B\u0435 \u0438 \u0441\u0430\u043B\u0430\u0442","\u041D\u0430\u043F\u0438\u0442\u043A\u0438 (\u0431\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0435) ( \u043F\u0438\u0432\u043E, \u0432\u0438\u043D\u043E, \u043A\u043E\u043B\u0430, \u0444\u0430\u043D\u0442\u0430, \u0447\u0430\u0439, \u043A\u043E\u0444\u0435, \u0432\u043E\u0434\u0430)","\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430"],s=["\u041B\u044E\u0431\u044B\u0435 \u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B ( \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u0441\u0443\u0432\u0435\u043D\u0438\u0440\u044B \u0438 \u0442.\u0434.)","\u0415\u0434\u0430 \u0438 \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432 \u043C\u0435\u043D\u044E ( \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0438, \u043E\u043C\u0430\u0440\u044B, \u0432\u0438\u0441\u043A\u0438 \u0438 \u0442.\u0434.)"],n={tourCost:`This tour is ${e.adultPrice} USD for adults. It's ${e.childPrice} USD for childs ages ${e.childAge}. It is free for babies ${e.babyAge} years old.`,itemsBring:["\u0424\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442","\u041F\u043E\u043B\u043E\u0442\u0435\u043D\u0446\u0435","\u041A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A","\u041A\u0440\u0435\u043C \u043E\u0442 \u0437\u0430\u0433\u0430\u0440\u0430","\u0421\u043E\u043B\u043D\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0435 \u043E\u0447\u043A\u0438","\u0414\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B"],departureTimes:["\u0412 08:30 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0411\u0435\u043B\u044C\u0434\u0438\u0431\u0438","\u0412 08:45 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0413\u0451\u0439\u043D\u044E\u043A","\u0412 09:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u041A\u0435\u043C\u0435\u0440","\u0412 09:15 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u041A\u0438\u0440\u0438\u0448","\u0412 09:25 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0427\u0430\u043C\u044C\u044E\u0432\u0430","\u0412 09:45 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0422\u0435\u043A\u0438\u0440\u043E\u0432\u0430"],returnTimes:["\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0422\u0435\u043A\u0438\u0440\u043E\u0432\u0430","\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0427\u0430\u043C\u044C\u044E\u0432\u0430","\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u041A\u0438\u0440\u0438\u0448","\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u041A\u0435\u043C\u0435\u0440","\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0413\u0451\u0439\u043D\u044E\u043A","\u0412 14:00-15:00 \u0438\u0437 \u043E\u0442\u0435\u043B\u0435\u0439 \u0411\u0435\u043B\u044C\u0434\u0438\u0431\u0438"],distance:["\u043E\u0442 \u041A\u0435\u043C\u0435\u0440\u0430 - 47 \u043A\u043C","\u043E\u0442 \u0410\u043D\u0442\u0430\u043B\u0438\u0438 - 0 \u043A\u043C","\u043E\u0442 \u0421\u0438\u0434\u0435 - 73 \u043A\u043C","\u043E\u0442 \u0410\u043B\u0430\u043D\u0438\u0438 - 133 \u043A\u043C"],hours:"4 \u0447\u0430\u0441\u0430",days:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C"};return{breadCrumbsCategory:u,breadCrumbsCategoryRoute:a,breadCrumbsTourLabel:i,sliderImages:t,includes:o,excludes:s,faq:[{label:"Question One",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{label:"Question Two",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{label:"Question Three",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}],bookingForm:e,tourDetails:n}}}),v=r("h1",{class:"text-red text-h4"},"\u041F\u0438\u043A\u043D\u0438\u043A \u0438 \u0420\u044B\u0431\u0430\u043B\u043A\u0430 \u0432 \u0423\u043B\u0443\u043F\u0438\u043D\u0430\u0440\u0435",-1),_=r("p",null," \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044E \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E \u0440\u044B\u0431\u0430\u043B\u043A\u0430 \u0432 \u0423\u043B\u0443\u043F\u0438\u043D\u0430\u0440\u0435 - \u044D\u0442\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0443\u0433\u043E\u043B\u043E\u043A \u0410\u043D\u0442\u0430\u043B\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0435 \u041A\u0435\u043C\u0435\u0440, \u043D\u0430 \u0441\u043A\u043B\u043E\u043D\u0430\u0445 \u0433\u043E\u0440\u044B \u041E\u043B\u0438\u043C\u043F. \u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0441\u044E\u0434\u0430 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0438\u0442 \u0436\u0438\u0432\u043E\u043F\u0438\u0441\u043D\u044B\u043C\u0438 \u043F\u0435\u0439\u0437\u0430\u0436\u0430\u043C\u0438 \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0445 \u0433\u043E\u0440, \u0445\u0440\u0443\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u043E\u0434\u043E\u043F\u0430\u0434\u0430\u043C\u0438, \u0437\u0430\u043F\u0430\u0445\u043E\u043C \u043A\u043E\u0441\u0442\u0440\u0430 \u0438 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0438\u043A\u043D\u0438\u043A\u043E\u043C \u0441 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0441\u0432\u0435\u0436\u0435\u0439 \u0444\u043E\u0440\u0435\u043B\u044C\u044E. ",-1),w=r("p",null," \u0414\u0430\u0436\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0435 \u0440\u044B\u0431\u0430\u043A\u0438 \u043E\u0449\u0443\u0442\u044F\u0442 \u0437\u0434\u0435\u0441\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043E\u0445\u043E\u0442\u043D\u0438\u0447\u0438\u0439 \u0430\u0437\u0430\u0440\u0442, \u0432\u0435\u0434\u044C \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u0443\u043B\u043E\u0432 \u0438\u043C \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D. \u042D\u0442\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0434\u043B\u044F \u0441\u0435\u043C\u0435\u0439\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0441\u043A\u0430\u0437\u043E\u0447\u043D\u0443\u044E \u043A\u0440\u0430\u0441\u043E\u0442\u0443 \u043F\u0440\u0438\u0440\u043E\u0434\u044B \u0438 \u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u043B\u044E\u0434, \u043F\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u0442\u0443\u0440\u0435\u0446\u043A\u0438\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C. ",-1);function P(u,a,i,e,t,o){const s=C("tour-page");return d(),A("div",null,[c(s,{breadCrumbsCategory:u.breadCrumbsCategory,breadCrumbsCategoryRoute:u.breadCrumbsCategoryRoute,breadCrumbsTourLabel:u.breadCrumbsTourLabel,sliderImages:u.sliderImages,includes:u.includes,excludes:u.excludes,tourDetails:u.tourDetails,faq:u.faq,bookingForm:u.bookingForm},{articleSummary:E(()=>[v,_]),articleFullText:E(()=>[w]),_:1},8,["breadCrumbsCategory","breadCrumbsCategoryRoute","breadCrumbsTourLabel","sliderImages","includes","excludes","tourDetails","faq","bookingForm"])])}var R=l(T,[["render",P]]);export{R as default};
