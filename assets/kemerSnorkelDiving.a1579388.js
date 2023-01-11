import{T as C}from"./TourPage.a55c8070.js";import{_ as d,O as n,P as l,R as A,S as B,d as F,V as i,U as s}from"./index.8e6a2200.js";import"./QChip.38b2e4da.js";import"./use-cache.b0833c75.js";import"./QForm.93072130.js";var m="/assets/kemer-snorkel-diving-1.bd13e514.webp",c="/assets/kemer-snorkel-diving-2.85a4436c.webp",b="/assets/kemer-snorkel-diving-3.3cd4f28b.webp",g="/assets/kemer-snorkel-diving-4.d0d5f979.webp",p="/assets/kemer-snorkel-diving-5.0c67f9d3.webp",k="/assets/kemer-snorkel-diving-6.f46fe388.webp",f="/assets/kemer-snorkel-diving-7.b3be57ab.webp";const v=n({components:{"tour-page":C},setup(){const u="Kemer",E="/antalya/kemer",o="\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0421\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433 \u0432 \u041A\u0435\u043C\u0435\u0440\u0435",e={tourName:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0421\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433 \u0432 \u041A\u0435\u043C\u0435\u0440\u0435",currency:"attach_money",oldPrice:28,adultPrice:25,childPrice:20,babyPrice:0,adultAge:"+12",childAge:"6-11",babyAge:"0-5"},t=[m,c,b,g,p,k,f],a=["\u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440 \u043E\u0442 \u0438 \u0434\u043E \u043E\u0442\u0435\u043B\u044F","A\u0432\u0442\u043E\u0431\u0443\u0441 \u0441 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u043C","\u041E\u0431\u0435\u0434","\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430","\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433\u0430 (\u043C\u0430\u0441\u043A\u0430 \u0441 \u0442\u0440\u0443\u0431\u043A\u043E\u0439 \u0438 \u043F\u043B\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0441\u0442\u044B)"],r=["\u041B\u044E\u0431\u044B\u0435 \u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B (\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 , \u0441\u0443\u0432\u0435\u043D\u0438\u0440\u044B \u0438 \u0442.\u0434.)","\u041D\u0430\u043F\u0438\u0442\u043A\u0438","\u0424\u043E\u0442\u043E + \u0412\u0438\u0434\u0435\u043E \u0441 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u0438"],D={tourCost:`This tour is ${e.adultPrice} USD for adults. It's ${e.childPrice} USD for childs ages ${e.childAge}. It is free for babies ${e.babyAge} years old.`,itemsBring:["\u0424\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442","\u0412\u043E\u0434\u0430","\u041F\u043E\u043B\u043E\u0442\u0435\u043D\u0446\u0435","\u041A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A","\u041A\u0440\u0435\u043C \u043E\u0442 \u0437\u0430\u0433\u0430\u0440\u0430","\u0421\u043E\u043B\u043D\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0435 \u043E\u0447\u043A\u0438","\u0414\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B"],departureTimes:["\u0412 08:50 \u0438\u0437 \u0422\u0435\u043A\u0438\u0440\u043E\u0432\u0430","\u0412 08:50 \u0438\u0437 \u0411\u0435\u043B\u044C\u0434\u0438\u0431\u0438","\u0412 09:15 \u0438\u0437 \u0413\u0451\u0439\u043D\u044E\u043A\u0430","\u0412 09:30 \u0438\u0437 \u0427\u0430\u043C\u044C\u044E\u0432\u0430","\u0412 09:30 \u0438\u0437 \u041A\u0438\u0440\u0438\u0448\u0430","\u0412 09:45 \u0438\u0437 \u041A\u0435\u043C\u0435\u0440\u0430","\u0422\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u0432\u0430\u0448\u0435\u043C \u0432\u0430\u0443\u0447\u0435\u0440\u0435"],returnTimes:["\u0412 16:30 \u0438\u0437 \u0422\u0435\u043A\u0438\u0440\u043E\u0432\u0430","\u0412 16:45 \u0438\u0437 \u0427\u0430\u043C\u044C\u044E\u0432\u044B","\u0412 16:50 \u0438\u0437 \u041A\u0438\u0440\u0438\u0448\u0430","\u0412 17:00 \u0438\u0437 \u041A\u0435\u043C\u0435\u0440\u0430","\u0412 16:45 \u0438\u0437 \u0413\u0451\u0439\u043D\u044E\u043A\u0430","\u0412 17:00 \u0438\u0437 \u0411\u0435\u043B\u044C\u0434\u0438\u0431\u0438"],distance:["\u043E\u0442 \u041A\u0435\u043C\u0435\u0440\u0430 - 47 \u043A\u043C","\u043E\u0442 \u0410\u043D\u0442\u0430\u043B\u0438\u0438 - 0 \u043A\u043C","\u043E\u0442 \u0421\u0438\u0434\u0435 - 73 \u043A\u043C","\u043E\u0442 \u0410\u043B\u0430\u043D\u0438\u0438 - 133 \u043A\u043C"],hours:"8 \u0447\u0430\u0441\u043E\u0432",days:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C"};return{breadCrumbsCategory:u,breadCrumbsCategoryRoute:E,breadCrumbsTourLabel:o,sliderImages:t,includes:a,excludes:r,faq:[{label:"Question One",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{label:"Question Two",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{label:"Question Three",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}],bookingForm:e,tourDetails:D}}}),y=s("h1",{class:"text-red text-h4"},"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0421\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433 \u0432 \u041A\u0435\u043C\u0435\u0440\u0435",-1),h=s("p",null," \u0421\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433 \u0432 \u041A\u0435\u043C\u0435\u0440\u0435 - \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0447\u0430\u0441\u0442\u044C\u044E \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0438\u0440\u0430 \u0438 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u0435\u0441\u0447\u0438\u043D\u043A\u0443 \u0432 \u0431\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0445 \u0432\u043E\u0434\u0430\u0445 \u0421\u0440\u0435\u0434\u0438\u0437\u0435\u043C\u043D\u043E\u0433\u043E \u043C\u043E\u0440\u044F! \u0414\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043E\u0442\u043F\u0443\u0441\u043A, \u0441\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433 \u0432 \u041A\u0435\u043C\u0435\u0440\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0439 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u043F\u043B\u044F\u0436\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430! ",-1),T=s("p",null," \u0422\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u044B\u0439 \u043C\u0438\u0440,\u{1F420}\u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u043C\u043E\u0440\u0441\u043A\u0438\u0435 \u0440\u044B\u0431\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0442\u0430\u044F\u043C\u0438 \u043F\u0440\u043E\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0432\u043E\u0437\u043B\u0435 \u0432\u0430\u0441 \u0438 \u043F\u043E\u0434\u043F\u043B\u044B\u0432\u0430\u044E\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0432\u044B\u0442\u044F\u043D\u0443\u0442\u043E\u0439 \u0440\u0443\u043A\u0438,\u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0438\u{1F422}, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0436\u0438\u0432\u043E\u043F\u0438\u0441\u043D\u044B\u0439 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442 \u0421\u0440\u0435\u0434\u0438\u0437\u0435\u043C\u043D\u043E\u0433\u043E \u043C\u043E\u0440\u044F, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u0440\u0430\u0437\u0438\u0442 \u0432\u0430\u0441 \u0441\u0432\u043E\u0435\u0439 \u043A\u0440\u0430\u0441\u043E\u0442\u043E\u0439! \u0412\u0430\u0441 \u0436\u0434\u0443\u0442 \u044F\u0440\u043A\u0438\u0435, \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u0443\u044E \u043C\u043E\u0440\u0441\u043A\u0443\u044E \u0441\u043A\u0430\u0437\u043A\u0443! \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0430\u0441 \u043D\u0430 \u043C\u043E\u0440\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043D\u043E\u0440\u043A\u043B\u0438\u043D\u0433\u0430 \u0432 \u0431\u0443\u0445\u0442\u0430\u0445 \u0441 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E \u0447\u0438\u0441\u0442\u043E\u0439 \u0432\u043E\u0434\u043E\u0439!\u{1F4A6} \u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432 \u043B\u0430\u0437\u0443\u0440\u043D\u043E\u0435 \u043C\u043E\u0440\u0435, \u0432\u0430\u0441 \u0436\u0434\u0451\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u043E\u0431\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0421\u0440\u0435\u0434\u0438\u0437\u0435\u043C\u043D\u043E\u043C\u043E\u0440\u044C\u044F \u043D\u043E \u0438 \u0442\u0430\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u0449\u0435\u0440\u044B \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0438 \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u043C\u0438! ",-1);function _(u,E,o,e,t,a){const r=l("tour-page");return A(),B("div",null,[F(r,{breadCrumbsCategory:u.breadCrumbsCategory,breadCrumbsCategoryRoute:u.breadCrumbsCategoryRoute,breadCrumbsTourLabel:u.breadCrumbsTourLabel,sliderImages:u.sliderImages,includes:u.includes,excludes:u.excludes,tourDetails:u.tourDetails,faq:u.faq,bookingForm:u.bookingForm},{articleSummary:i(()=>[y,h]),articleFullText:i(()=>[T]),_:1},8,["breadCrumbsCategory","breadCrumbsCategoryRoute","breadCrumbsTourLabel","sliderImages","includes","excludes","tourDetails","faq","bookingForm"])])}var x=d(v,[["render",_]]);export{x as default};
