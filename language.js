(()=>{"use strict";
const translations={
"Menu":"القائمة","Livraison":"التوصيل","Promo":"العروض","Contact":"اتصل بنا","Panier":"السلة",
"LE GOÛT QUI RASSEMBLE":"المذاق الذي يجمعنا","Des envies généreuses. Des prix légers. Le plaisir signé HERMANO.":"وجبات شهية، وأسعار مناسبة، ومتعة من هيرمانو.",
"Découvrir le menu":"اكتشف القائمة","OFFRE SPÉCIALE · HERMANO":"عرض خاص · هيرمانو","TA PROMO À":"عرضك بـ","Pour profiter de l’offre à 1 DH, suis d’abord HERMANO sur Instagram. Ensuite, choisis ton produit, réserve ton jour et ton heure, puis envoie ton numéro en DM.":"للاستفادة من العرض بـ 1 درهم، تابع هيرمانو على إنستغرام أولاً. ثم اختر المنتج وحدد اليوم والساعة وأرسل رقم الحجز في رسالة خاصة.",
"◎ SUIVRE HERMANO SUR INSTAGRAM ↗":"◎ تابع هيرمانو على إنستغرام ↗","JE RÉSERVE MA PROMO ↗":"أحجز العرض الآن ↗",
"1. Follow HERMANO · 2. Réserve · 3. Envoie ton numéro en DM · Follow vérifié avant confirmation":"1. تابع هيرمانو · 2. احجز · 3. أرسل رقمك في رسالة خاصة · سيتم التحقق من المتابعة قبل التأكيد",
"FAIT POUR TES ENVIES":"صُنع على ذوقك","Choisis ton":"اختر","plaisir.":"ما تحب.","Du croustillant, du fondant et beaucoup de goût.":"قرمشة، مذاق غني، ومتعة في كل لقمة.",
"CHOISIR UN MENU":"اختر صنفاً","ON VIENT À TOI":"نوصّل حتى لبابك","La livraison,":"التوصيل،","sans détour.":"بكل سهولة.","Choisis ta zone au moment de commander. Tu peux aussi passer récupérer ta commande.":"اختر منطقتك عند الطلب، ويمكنك أيضاً الحضور لاستلام طلبك.",
"Nos zones de livraison":"مناطق التوصيل","Pas de minimum de commande · Paiement en espèces":"بدون حد أدنى للطلب · الدفع نقداً",
"Appeler":"اتصل بنا","Itinéraire":"الاتجاهات","Votre panier":"سلتك","TA SÉLECTION":"اختياراتك","Ton panier":"سلتك","Fermer":"إغلاق","Ton panier est encore vide.":"سلتك فارغة حالياً.",
"Nom":"الاسم","Ton nom":"اسمك","Numéro de téléphone *":"رقم الهاتف *","Type de commande":"نوع الطلب","Livraison":"التوصيل","Sur place":"استلام من المحل","Zone de livraison":"منطقة التوصيل","Adresse":"العنوان","Adresse de livraison":"عنوان التوصيل",
"Choisis ta sauce":"اختر الصلصة","Sans sauce / Pas de préférence":"بدون صلصة / لا تفضيل","Supplément +":"إضافات +","Choisis les extras que tu veux avec ta commande.":"اختر الإضافات التي تريدها مع طلبك.",
"Total estimé":"المجموع التقديري","Commander sur WhatsApp ↗":"اطلب عبر واتساب ↗","Le prix des articles sans tarif affiché sera confirmé avant validation.":"سيتم تأكيد أسعار المنتجات التي لا يظهر ثمنها قبل اعتماد الطلب.",
"LA SIGNATURE HERMANO":"بصمة هيرمانو","Ajouter au panier ↗":"أضف إلى السلة ↗","Ajouter +":"أضف +","Voir détails":"عرض التفاصيل","Prix à confirmer":"الثمن يُؤكّد لاحقاً","Photo indisponible":"الصورة غير متوفرة",
"OFFRE SPÉCIALE HERMANO":"عرض خاص من هيرمانو","PROMO HERMANO":"عرض هيرمانو","Avant de réserver : suis HERMANO sur Instagram.":"قبل الحجز: تابع هيرمانو على إنستغرام.",
"Le Follow est obligatoire pour profiter de la promotion et sera vérifié par notre équipe.":"المتابعة ضرورية للاستفادة من العرض، وسيقوم فريقنا بالتحقق منها.",
"Choisir":"اختر","Sélectionné ✓":"تم الاختيار ✓","Ton Instagram et ta réservation":"حسابك على إنستغرام وحجزك","Jour souhaité":"اليوم المطلوب","Heure souhaitée":"الساعة المطلوبة","Choisir une heure":"اختر الساعة","Choisis ton créneau":"اختر الموعد","Créer mon numéro de commande":"إنشاء رقم الحجز",
"Disponible":"متاح","Complet":"ممتلئ","Chargement…":"جارٍ التحميل…","Chargement des disponibilités…":"جارٍ تحميل المواعيد المتاحة…",
"Mise à jour des disponibilités…":"جارٍ تحديث المواعيد…","Impossible de charger les dates. Réessaie dans un instant.":"تعذر تحميل التواريخ. حاول مرة أخرى بعد قليل.",
"Ton numéro de commande est prêt !":"رقم طلبك جاهز!","Copie ce numéro et envoie-le en message privé à HERMANO sur Instagram. Tu peux revenir sur cette page : ton numéro restera affiché sur ce navigateur.":"انسخ هذا الرقم وأرسله في رسالة خاصة إلى هيرمانو على إنستغرام. يمكنك العودة إلى هذه الصفحة للعثور على رقمك.",
"Copier mon numéro":"انسخ رقمي","Numéro copié ✓":"تم نسخ الرقم ✓","Ouvrir Instagram et envoyer le numéro ↗":"افتح إنستغرام وأرسل الرقم ↗","Présente ce QR à l’équipe HERMANO à ton arrivée.":"أظهر رمز QR لفريق هيرمانو عند وصولك.",
"Statut : en attente de vérification par HERMANO. Le numéro seul ne confirme pas encore la promo.":"الحالة: في انتظار تحقق هيرمانو. الرقم وحده لا يؤكد العرض بعد.",
"Ajoute au moins un article au panier.":"أضف منتجاً واحداً على الأقل إلى السلة.","Merci de remplir ton nom et ton téléphone.":"يرجى إدخال اسمك ورقم هاتفك.","Merci d'ajouter ton adresse.":"يرجى إدخال عنوانك.","Commande enregistrée. Référence :":"تم تسجيل الطلب. الرقم المرجعي:","contactez-nous sur WhatsApp.":"تواصل معنا عبر واتساب."
};
const reverse=Object.fromEntries(Object.entries(translations).map(([a,b])=>[b,a]));
let lang="fr";
const original=new WeakMap();
function dict(){return lang==="ar"?translations:reverse}
function translateText(node){if(!node||node.nodeType!==Node.TEXT_NODE)return;const raw=node.nodeValue;const trimmed=raw.trim();if(!trimmed)return;const mapped=dict()[trimmed];if(mapped)node.nodeValue=raw.replace(trimmed,mapped)}
function translateElement(root=document.body){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())translateText(node);
 root.querySelectorAll("input[placeholder],textarea[placeholder],button[aria-label],[aria-label]").forEach(el=>{for(const attr of ["placeholder","aria-label"]){const val=el.getAttribute(attr);if(val&&dict()[val])el.setAttribute(attr,dict()[val]);}});
}
function setLanguage(next){lang=next;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.body.dir=lang==="ar"?"rtl":"ltr";translateElement();const b=document.getElementById("languageToggle");if(b){b.textContent=lang==="ar"?"FR":"عربي";b.setAttribute("aria-label",lang==="ar"?"Switch to French":"التبديل إلى العربية");}try{localStorage.setItem("hermano-language",lang)}catch(e){}}
const button=document.getElementById("languageToggle");
if(button)button.addEventListener("click",()=>setLanguage(lang==="fr"?"ar":"fr"));
try{lang=localStorage.getItem("hermano-language")==="ar"?"ar":"fr"}catch(e){}
const observer=new MutationObserver(records=>{for(const record of records){if(record.type==="childList"){record.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)translateText(n);else if(n.nodeType===Node.ELEMENT_NODE)translateElement(n)});}else if(record.type==="characterData")translateText(record.target);}});
observer.observe(document.body,{subtree:true,childList:true,characterData:true});
setLanguage(lang);
})();