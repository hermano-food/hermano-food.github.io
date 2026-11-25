const CONFIG = {
  whatsappNumber: "21263225995",
  instagramUsername: "casalux_03",
  address: "Boulevard Ahmed Ahrass, Sidi Bernoussi, Casablanca, Maroc",
  hours: { days: "7J/7", opens: "10:00", closes: "00:00" },
  deliveryZones: [
    { name: "Sidi Bernoussi", fee: 10 },
    { name: "Al Azhar", fee: 15 },
    { name: "Sidi Moumen", fee: 20 },
    { name: "Anassi", fee: 23 },
    { name: "Zenata", fee: 17 },
    { name: "Al Qods", fee: 10 }
  ],
  promo: { startDate: "2026-11-01", endDate: "2026-12-31" }
};

let products = [
 {id:1,name:"Tacos Viande Hachée",cat:"TACOS",price:20,desc:"Généreux et savoureux.",img:"https://images.unsplash.com/photo-1551509486-0d7d5e4c3b6a?auto=format&fit=crop&w=800&q=80"},
 {id:2,name:"Tacos Nuggets",cat:"TACOS",price:25,desc:"Croustillant à chaque bouchée.",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"},
 {id:3,name:"Tacos Poulet",cat:"TACOS",price:20,desc:"Poulet tendre et gourmand.",img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"},
 {id:4,name:"Tacos Saucisse de Foie",cat:"TACOS",price:20,desc:"Une recette pleine de caractère.",img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"},
 {id:5,name:"Tacos Cordon Bleu",cat:"TACOS",price:30,desc:"Fondant et croustillant.",img:"https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"},
 {id:6,name:"Tacos Mixte",cat:"TACOS",price:25,desc:"Le mélange qui fait plaisir.",img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"},
 {id:7,name:"Tacos Mkhada",cat:"TACOS",price:40,desc:"La version ultra généreuse.",img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80"},
 {id:8,name:"Tacos Daynasour",cat:"TACOS",price:60,desc:"Pour les très grandes faims.",img:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=800&q=80"},
 {id:9,name:"Tacos La Famille",cat:"TACOS",price:90,desc:"À partager entre gourmands.",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"},
 {id:10,name:"Poutchi Fromage",cat:"POUTCHI",price:6,desc:"Simple, chaud et fondant.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:11,name:"Luncheon + Fromage",cat:"POUTCHI",price:7,desc:"Le classique gourmand.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:12,name:"Hot Dog + Fromage",cat:"POUTCHI",price:8,desc:"Hot dog et fromage fondant.",img:"https://images.unsplash.com/photo-1612392062798-2dbaa9f8d7a5?auto=format&fit=crop&w=800&q=80"},
 {id:13,name:"Thon + Fromage",cat:"POUTCHI",price:8,desc:"Une association savoureuse.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:14,name:"Double Luncheon + Fromage",cat:"POUTCHI",price:9,desc:"Encore plus généreux.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:15,name:"Spécial Viande Hachée",cat:"POUTCHI",price:12,desc:"La recette spéciale Hermano.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:16,name:"Spécial Poulet",cat:"POUTCHI",price:15,desc:"Poulet et gourmandise.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:17,name:"Spécial Saucisse de Foie",cat:"POUTCHI",price:12,desc:"Une saveur bien relevée.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:18,name:"Spécial Thon",cat:"POUTCHI",price:12,desc:"Une touche marine.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:19,name:"Spécial Hot Dog",cat:"POUTCHI",price:12,desc:"Le hot dog version spéciale.",img:"https://images.unsplash.com/photo-1612392062798-2dbaa9f8d7a5?auto=format&fit=crop&w=800&q=80"},
 {id:20,name:"Spécial Cordon Bleu",cat:"POUTCHI",price:20,desc:"Croustillant et fondant.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:21,name:"Spécial Nuggets",cat:"POUTCHI",price:15,desc:"Les nuggets qu'on adore.",img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"},
 {id:22,name:"Spécial Thon + Hot Dog",cat:"POUTCHI",price:15,desc:"Un duo original.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:23,name:"Spécial Saucisse de Foie + Hot Dog",cat:"POUTCHI",price:17,desc:"Double plaisir.",img:"https://images.unsplash.com/photo-1612392062798-2dbaa9f8d7a5?auto=format&fit=crop&w=800&q=80"},
 {id:24,name:"Spécial Viande Hachée + Hot Dog",cat:"POUTCHI",price:17,desc:"Une recette bien généreuse.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:25,name:"Spécial Régime",cat:"POUTCHI",price:17,desc:"La recette spéciale.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:26,name:"Royale Mini Hermano",cat:"POUTCHI",price:17,desc:"La royale en format mini.",img:"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80"},
 {id:27,name:"Royale Maxi Habib",cat:"POUTCHI",price:22,desc:"La royale en grand format.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"},
 {id:28,name:"Mhiricha",cat:"MHIRICHA",price:7,desc:"La petite touche qui régale.",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"},
 {id:29,name:"Plat Frites",cat:"SUPPLÉMENTS",price:5,desc:"Frites dorées et croustillantes.",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"},
 {id:30,name:"Soda",cat:"SUPPLÉMENTS",price:5,desc:"Boisson fraîche.",img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80"},
 {id:31,name:"Fromage",cat:"SUPPLÉMENTS",price:1,desc:"Supplément fromage.",img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80"},
 {id:32,name:"Pizza",cat:"PIZZA",price:null,desc:"Prix et variétés à confirmer au restaurant.",img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"},
 {id:33,name:"Pasticcio",cat:"PASTICCIO",price:null,desc:"Prix et variétés à confirmer au restaurant.",img:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"}
];;
const localProducts = products.slice();
const SUPABASE_URL = "https://nvaklosmrpfihrscwhwm.supabase.co";
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YWtsb3NtcnBmaWhyc2N3aHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUyOTcwMjEsImV4cCI6MjExMDg3MzAyMX0.qa_HbOfGiiuA_G-I-s6_NO8tl9tqecZU6JbG22bg4t0";
let lastProductsSnapshot="";

function applyConfig(){
 const hoursLabel=CONFIG.hours.days+" · "+CONFIG.hours.opens+" — "+CONFIG.hours.closes;
 const address=$("footerAddress");if(address)address.textContent=CONFIG.address;
 const footerHours=$("footerHours");if(footerHours)footerHours.textContent="Ouvert "+hoursLabel;
 const heroHours=$("heroHours");if(heroHours)heroHours.textContent=hoursLabel+" · SIDI BERNOUSSI";
 const zoneSelect=$("zone");
 if(zoneSelect)zoneSelect.replaceChildren(...CONFIG.deliveryZones.map(zone=>{
  const option=document.createElement("option");option.value=zone.name;option.textContent=zone.name+" — "+zone.fee+" DH";return option;
 }));
 const zonesList=$("deliveryZoneList");
 if(zonesList)zonesList.replaceChildren(...CONFIG.deliveryZones.map(zone=>{
  const line=document.createElement("div"),name=document.createElement("span"),fee=document.createElement("b");
  name.textContent=zone.name;fee.textContent=zone.fee+" DH";line.append(name,fee);return line;
 }));
 const links=document.querySelectorAll(".footer-actions a");
 const phoneLink="tel:+"+CONFIG.whatsappNumber;
 const locationLink="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(CONFIG.address);
 const topCall=$("topCall"),topLocation=$("topLocation");
 if(topCall)topCall.href=phoneLink;
 if(topLocation)topLocation.href=locationLink;
 if(links[0])links[0].href=phoneLink;
 if(links[1])links[1].href=locationLink;
 if(links[2])links[2].href="https://wa.me/"+CONFIG.whatsappNumber;
 if(links[3])links[3].href="https://ig.me/m/"+CONFIG.instagramUsername;
}

async function loadProductsFromSupabase(){
 try{
  const response=await fetch(SUPABASE_URL+"/rest/v1/products?select=id,name,category,description,price,image_url,is_available,promo_eligible&is_available=eq.true&order=id.asc",{
   headers:{apikey:SUPABASE_PUBLIC_KEY,Authorization:"Bearer "+SUPABASE_PUBLIC_KEY},cache:"no-store"
  });
  if(!response.ok) throw new Error("Catalogue Supabase indisponible: "+response.status);
  const rows=await response.json();
  if(!Array.isArray(rows)||!rows.length) throw new Error("Catalogue vide");
  const snapshot=JSON.stringify(rows);
  if(snapshot===lastProductsSnapshot)return;
  if(document.activeElement?.matches('input,textarea,select'))return;
  lastProductsSnapshot=snapshot;
  products=rows.map(row=>{
   const local=localProducts.find(item=>item.name===row.name)||{};
   return {...local,id:Number(row.id),name:row.name,cat:row.category,price:row.price===null?null:Number(row.price),desc:row.description||local.desc||"",img:row.image_url||local.img||"",promoEligible:row.promo_eligible};
  });
  renderProducts();renderCart();
 }catch(error){console.warn("HERMANO utilise le catalogue local de secours.",error)}
}

let active="TOUT";const cart=new Map();const $=id=>document.getElementById(id);const money=n=>n+" DH";
function setCategoryMenu(open){const toggle=$("categoryToggle"),filters=$("filters");toggle.setAttribute("aria-expanded",String(open));filters.hidden=!open}
$("categoryToggle").addEventListener("click",()=>setCategoryMenu($("categoryToggle").getAttribute("aria-expanded")!=="true"));
const promoAdButton=$("promoAdButton");if(promoAdButton)promoAdButton.addEventListener("click",()=>{active="PROMO HERMANO";renderProducts();setCategoryMenu(false);$("menu").scrollIntoView({behavior:"smooth",block:"start"});});
function renderProducts(){
 const container=$("products");
 if(active==="PROMO HERMANO"){
  const panel=document.createElement("article");panel.className="promo-panel";
  panel.innerHTML='<p class="eyebrow">OFFRE SPÉCIALE HERMANO</p><h2>PROMO <em>HERMANO</em></h2><div class="promo-price">1 DH</div><p><strong>Avant de réserver : suis HERMANO sur Instagram.</strong> Le Follow est obligatoire pour profiter de la promotion et sera vérifié par notre équipe.</p><p>1. Clique sur le bouton Instagram et abonne-toi à <strong>@'+CONFIG.instagramUsername+'</strong>.</p><p>2. Reviens ici, choisis ton produit, ton jour et ton heure.</p><p>3. Crée ton numéro de réservation puis envoie-le en DM à HERMANO. Nous vérifierons ton Follow avant de confirmer.</p><p>Un seul produit par client · Sur place uniquement · Sans livraison.</p><a class="promo-instagram-button promo-panel-instagram" href="https://www.instagram.com/'+CONFIG.instagramUsername+'/" target="_blank" rel="noopener">◎ SUIVRE HERMANO SUR INSTAGRAM ↗</a>'
  container.replaceChildren(panel);
  const savedKey="hermanoPromoLastReservation";
  const savedRaw=localStorage.getItem(savedKey);
  if(savedRaw){
   try{
    const saved=JSON.parse(savedRaw);
    if(saved&&saved.id){
     const previous=document.createElement("section");previous.className="promo-confirmation";
     const heading=document.createElement("h3");heading.textContent="Ton numéro PROMO est toujours là";
     const number=document.createElement("strong");number.className="promo-reference";number.textContent=saved.code||("PROMO #"+saved.id);
     const note=document.createElement("p");note.textContent="Envoie ce numéro en message privé à HERMANO sur Instagram. Garde cette page pour retrouver ton numéro.";
     const insta=document.createElement("a");insta.className="gold-btn full";insta.href=`https://ig.me/m/${CONFIG.instagramUsername}`;insta.target="_blank";insta.rel="noopener";insta.textContent="Ouvrir Instagram et envoyer le numéro ↗";
     const qr=document.createElement("img");qr.className="promo-qr";qr.alt="QR Code de réservation HERMANO";qr.src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data="+encodeURIComponent(new URL("admin.html?promo="+saved.id,location.href).href);
     const qrNote=document.createElement("small");qrNote.textContent="Présente ce QR à l’équipe HERMANO à ton arrivée.";
     previous.append(heading,number,note,qr,qrNote,insta);container.append(previous);
    }
   }catch(e){localStorage.removeItem(savedKey);}
  }
  const grid=document.createElement("div");grid.className="promo-products";
  const form=document.createElement("form");form.className="promo-booking";form.hidden=true;
  products.filter(p=>p.promoEligible!==false).forEach(p=>{
   const card=document.createElement("article");card.className="promo-product";
   const img=document.createElement("img");img.src=p.img;img.alt=p.name;img.loading="lazy";
   const info=document.createElement("div");info.className="promo-product-info";
   const name=document.createElement("h3");name.textContent=p.name;
   const cat=document.createElement("small");cat.textContent=p.cat;
   const price=document.createElement("strong");price.textContent="1 DH";
   const choose=document.createElement("button");choose.className="add";choose.type="button";choose.textContent="Choisir";
   choose.onclick=()=>{grid.querySelectorAll(".promo-product").forEach(x=>x.classList.remove("selected"));card.classList.add("selected");grid.querySelectorAll(".promo-product .add").forEach(x=>x.textContent="Choisir");choose.textContent="Sélectionné ✓";form.dataset.product=String(p.id);form.hidden=false;form.scrollIntoView({behavior:"smooth",block:"center"})};
   info.append(name,cat,price,choose);card.append(img,info);grid.append(card);
  });
  container.append(grid);
  const today=new Date();const minDate=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
  form.innerHTML='<h3>Ton Instagram et ta réservation</h3><p class="promo-follow-reminder">Important : tu dois déjà suivre <strong>@'+CONFIG.instagramUsername+'</strong> sur Instagram. Notre équipe vérifiera ton Follow avant de confirmer la promo.</p><a class="promo-instagram-button" href="https://www.instagram.com/'+CONFIG.instagramUsername+'/" target="_blank" rel="noopener">◎ OUVRIR INSTAGRAM ET SUIVRE ↗</a><label>Ton Instagram<input name="instagram" type="text" required maxlength="31" placeholder="@ton_compte"></label><div class="promo-date-field"><span>Jour souhaité</span><input name="date" type="hidden"><div class="promo-calendar"><div class="promo-calendar-head"><button type="button" class="promo-month-prev" aria-label="Mois précédent">‹</button><strong class="promo-month-label">Chargement…</strong><button type="button" class="promo-month-next" aria-label="Mois suivant">›</button></div><div class="promo-calendar-week"><span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span></div><div class="promo-calendar-days"></div><small class="promo-date-hint">Chargement des disponibilités…</small><div class="promo-calendar-legend"><span><i class="promo-dot available"></i> Disponible</span><span><i class="promo-dot full"></i> Complet</span></div></div></div><div class="promo-time-field"><span>Heure souhaitée</span><input type="hidden" name="time"><button type="button" class="promo-time-trigger" aria-expanded="false"><span class="promo-time-icon">◷</span><span class="promo-time-value">Choisir une heure</span><span class="promo-time-chevron">⌄</span></button><div class="promo-time-panel" hidden><div class="promo-time-panel-title">Choisis ton créneau</div><div class="promo-time-slots"></div></div></div><button class="gold-btn full" type="submit">Créer mon numéro de commande</button><small>Ta demande sera enregistrée. Après, envoie ton numéro en DM Instagram. HERMANO vérifiera ton Follow avant de confirmer la promo.</small>';

  const dateInput=form.querySelector('input[name="date"]');
  const calendar=form.querySelector('.promo-calendar');
  const daysBox=calendar.querySelector('.promo-calendar-days');
  const monthLabel=calendar.querySelector('.promo-month-label');
  const hint=calendar.querySelector('.promo-date-hint');
  const prevMonth=calendar.querySelector('.promo-month-prev');
  const nextMonth=calendar.querySelector('.promo-month-next');
  const todayDate=new Date();todayDate.setHours(0,0,0,0);
  const promoStart=new Date(CONFIG.promo.startDate+"T00:00:00");
  const promoEnd=new Date(CONFIG.promo.endDate+"T00:00:00");
  const firstAllowedMonth=new Date(promoStart.getFullYear(),promoStart.getMonth(),1);
  const lastAllowedMonth=new Date(promoEnd.getFullYear(),promoEnd.getMonth(),1);
  let shownMonth=new Date(firstAllowedMonth);
  let bookedPromoDates=new Set();
  let availabilityLoaded=false;
  const dateKey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  async function loadPromoAvailability(){
   hint.textContent="Mise à jour des disponibilités…";
   try{
    const response=await fetch(SUPABASE_URL+"/functions/v1/customer-submit",{method:"POST",headers:{apikey:SUPABASE_PUBLIC_KEY,Authorization:"Bearer "+SUPABASE_PUBLIC_KEY,"Content-Type":"application/json"},body:JSON.stringify({action:"promo_availability"})});
    const result=await response.json();if(!response.ok)throw new Error(result.error||"Disponibilités indisponibles");
    bookedPromoDates=new Set(result.reserved_dates||[]);availabilityLoaded=true;drawPromoCalendar();
   }catch(error){hint.textContent="Impossible de charger les dates. Réessaie dans un instant.";console.warn("Promo calendar:",error.message)}
  }
  function drawPromoCalendar(){
   daysBox.innerHTML="";
   monthLabel.textContent=shownMonth.toLocaleDateString("ar-MA",{month:"long",year:"numeric"});
   const firstDay=(new Date(shownMonth.getFullYear(),shownMonth.getMonth(),1).getDay()+6)%7;
   const count=new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,0).getDate();
   for(let i=0;i<firstDay;i++){const blank=document.createElement("span");blank.className="promo-day blank";daysBox.append(blank)}
   for(let n=1;n<=count;n++){
    const d=new Date(shownMonth.getFullYear(),shownMonth.getMonth(),n);const key=dateKey(d);
    const outsideRange=d<promoStart||d>promoEnd;const past=d<todayDate||outsideRange;const full=bookedPromoDates.has(key);
    const state=past?"past":full?"full":"available";
    const btn=document.createElement("button");btn.type="button";btn.className="promo-day "+state+(dateInput.value===key?" selected":"");
    const number=document.createElement("b");number.className="promo-day-number";number.textContent=String(n);
    const status=document.createElement("small");status.className="promo-day-status";status.textContent=past?"—":full?"محجوز":"متاح";
    btn.append(number,status);btn.disabled=past||full||!availabilityLoaded;
    btn.setAttribute("aria-label",key+(full?", محجوز":past?", منتهي":", متاح"));
    if(!past&&!full)btn.onclick=()=>{dateInput.value=key;drawPromoCalendar();hint.textContent="التاريخ المختار: "+d.toLocaleDateString("ar-MA");};
    daysBox.append(btn);
   }
   prevMonth.disabled=shownMonth<=firstAllowedMonth;
   nextMonth.disabled=shownMonth>=lastAllowedMonth;
   if(availabilityLoaded&&!dateInput.value)hint.textContent="اختار نهار بالأخضر، والأحمر راه محجوز.";
  }
  prevMonth.onclick=()=>{if(!prevMonth.disabled){shownMonth=new Date(shownMonth.getFullYear(),shownMonth.getMonth()-1,1);drawPromoCalendar()}};
  nextMonth.onclick=()=>{if(!nextMonth.disabled){shownMonth=new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,1);drawPromoCalendar()}};
  drawPromoCalendar();loadPromoAvailability();
  const timeInput=form.querySelector('input[name="time"]');
  const timeTrigger=form.querySelector('.promo-time-trigger');
  const timeValue=form.querySelector('.promo-time-value');
  const timePanel=form.querySelector('.promo-time-panel');
  const timeSlots=form.querySelector('.promo-time-slots');
  for(let hour=Number(CONFIG.hours.opens.slice(0,2));hour<24;hour++){
   for(const minute of [0,30]){
    if(hour===23&&minute===30){}
    const value=String(hour).padStart(2,"0")+":"+String(minute).padStart(2,"0");
    const slot=document.createElement("button");slot.type="button";slot.className="promo-time-slot";slot.textContent=value;
    slot.addEventListener("click",()=>{timeInput.value=value;timeValue.textContent=value;timeTrigger.classList.add("has-value");timePanel.hidden=true;timeTrigger.setAttribute("aria-expanded","false");timeSlots.querySelectorAll(".promo-time-slot").forEach(x=>x.classList.toggle("selected",x===slot));});
    timeSlots.append(slot);
   }
  }
  const midnight=document.createElement("button");midnight.type="button";midnight.className="promo-time-slot";midnight.textContent=CONFIG.hours.closes;
  midnight.addEventListener("click",()=>{timeInput.value=CONFIG.hours.closes;timeValue.textContent=CONFIG.hours.closes;timeTrigger.classList.add("has-value");timePanel.hidden=true;timeTrigger.setAttribute("aria-expanded","false");timeSlots.querySelectorAll(".promo-time-slot").forEach(x=>x.classList.toggle("selected",x===midnight));});
  timeSlots.append(midnight);
  timeTrigger.addEventListener("click",()=>{timePanel.hidden=!timePanel.hidden;timeTrigger.setAttribute("aria-expanded",String(!timePanel.hidden));});



  form.addEventListener("submit",async e=>{
   e.preventDefault();const p=products.find(x=>x.id===Number(form.dataset.product));const data=new FormData(form);
   const time=String(data.get("time"));
   const chosenDate=String(data.get("date")||"");
   if(!chosenDate||chosenDate<CONFIG.promo.startDate||chosenDate>CONFIG.promo.endDate){alert("Choisis une date comprise entre le "+CONFIG.promo.startDate+" et le "+CONFIG.promo.endDate+".");return;}
   if(!time){alert("Choisis une heure dans les créneaux proposés.");return;}
   if(!p){alert("Choisis d’abord un produit promotionnel.");return}
   if(time<CONFIG.hours.opens&&time!==CONFIG.hours.closes){alert("Choisis une heure entre "+CONFIG.hours.opens+" et "+CONFIG.hours.closes+".");return}
   const submit=form.querySelector('button[type="submit"]');submit.disabled=true;submit.textContent="Enregistrement…";
   try{
    const response=await fetch(SUPABASE_URL+"/functions/v1/customer-submit",{method:"POST",headers:{apikey:SUPABASE_PUBLIC_KEY,Authorization:"Bearer "+SUPABASE_PUBLIC_KEY,"Content-Type":"application/json"},body:JSON.stringify({action:"promo",instagram_username:String(data.get("instagram")).trim().replace(/^@/,""),product_id:p.id,reservation_date:data.get("date"),reservation_time:time})});
    const result=await response.json();if(!response.ok)throw new Error(result.error||"Erreur d'enregistrement");
    const id=String(result.reservation.id);const code="PROMO #"+id.toUpperCase();
    const instagram=String(data.get("instagram")).trim().replace(/^@/,"");localStorage.setItem(savedKey,JSON.stringify({id,code,product:p.name,instagram,createdAt:new Date().toISOString()}));
    const confirmation=document.createElement("section");confirmation.className="promo-confirmation";
    const title=document.createElement("h3");title.textContent="Ton numéro de commande est prêt !";
    const detail=document.createElement("p");detail.textContent="Copie ce numéro et envoie-le en message privé à HERMANO sur Instagram. Tu peux revenir sur cette page : ton numéro restera affiché sur ce navigateur.";
    const ref=document.createElement("strong");ref.className="promo-reference";ref.textContent=code;
    const copy=document.createElement("button");copy.className="gold-btn full";copy.type="button";copy.textContent="Copier mon numéro";
    copy.onclick=async()=>{try{await navigator.clipboard.writeText(code);copy.textContent="Numéro copié ✓";}catch(e){copy.textContent=code;}};
    const contact=document.createElement("a");contact.className="gold-btn full";contact.href=`https://ig.me/m/${CONFIG.instagramUsername}`;contact.target="_blank";contact.rel="noopener";contact.textContent="Ouvrir Instagram et envoyer le numéro ↗";
    const qr=document.createElement("img");qr.className="promo-qr";qr.alt="QR Code de réservation HERMANO";qr.src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data="+encodeURIComponent(new URL("admin.html?promo="+id,location.href).href);
    const qrNote=document.createElement("small");qrNote.textContent="Présente ce QR à l’équipe HERMANO à ton arrivée.";
    const status=document.createElement("small");status.textContent="Statut : en attente de vérification par HERMANO. Le numéro seul ne confirme pas encore la promo.";
    confirmation.append(title,detail,ref,copy,qr,qrNote,contact,status);container.replaceChildren(confirmation);
   }catch(error){alert("La demande n'a pas pu être enregistrée : "+error.message);}
   finally{submit.disabled=false;submit.textContent="Créer mon numéro de commande";}
  });
  container.append(form);return;
 }
 const list=products.filter(p=>["POUTCHI","TACOS"].includes(String(p.cat||"").toUpperCase()));
 container.innerHTML="";
 ["POUTCHI","TACOS"].forEach(category=>{
  const group= list.filter(p=>String(p.cat||"").toUpperCase()===category);
  if(!group.length)return;
  const heading=document.createElement("h2");heading.className="menu-category-heading";heading.textContent=category;
  container.append(heading);
  group.forEach(p=>{
  const card=document.createElement("article");
  card.className="product";card.dataset.detail=p.id;card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-label","Voir "+p.name);
  const photo=document.createElement("div");photo.className="product-photo";
  const productImage=document.createElement("img");productImage.className="product-photo-image";productImage.alt=p.name||"Produit";productImage.loading="lazy";
  productImage.onerror=()=>{const fallback=document.createElement("div");fallback.className="photo-fallback";fallback.textContent="Photo indisponible";photo.replaceChildren(fallback)};
  if(p.img)productImage.src=p.img;else productImage.onerror();
  if(p.img)photo.append(productImage);
  const body=document.createElement("div");body.className="product-body";
  const title=document.createElement("h3");title.textContent=p.name;
  const desc=document.createElement("p");desc.textContent=p.desc;
  const foot=document.createElement("div");foot.className="product-foot";
  const price=document.createElement("span");price.className="price";price.textContent=p.price===null?"Prix à confirmer":money(p.price);
  const button=document.createElement("button");button.className="add";button.textContent=p.price===null?"Voir détails":"Ajouter +";
  button.addEventListener("click",e=>{e.stopPropagation();if(p.price===null)showProduct(p.id);else add(p.id)});
  foot.append(price,button);body.append(title,desc,foot);card.append(photo,body);
  card.addEventListener("click",()=>showProduct(p.id));
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showProduct(p.id)}});
  container.append(card);
  });
 });
}
function showProduct(id){const p=products.find(x=>x.id===id);if(!p)return;$("detailImage").src=p.img;$("detailImage").alt=p.name;$("detailTitle").textContent=p.name;$("detailDescription").textContent=p.desc;$("detailPrice").textContent=p.price===null?"Prix à confirmer":money(p.price);$("detailAdd").textContent=p.price===null?"Prix à confirmer":"Ajouter au panier ↗";$("detailAdd").disabled=p.price===null;$("detailAdd").style.opacity=p.price===null?".5":"1";$("detailAdd").onclick=()=>{if(p.price!==null){closeProduct();add(p.id)}};$("productDetail").classList.add("open");$("productDetail").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeProduct(){$("productDetail").classList.remove("open");$("productDetail").setAttribute("aria-hidden","true");document.body.style.overflow=""}
$("detailClose").onclick=closeProduct;$("detailBackdrop").onclick=closeProduct;document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProduct()});
function add(id){const p=products.find(x=>x.id===id);if(p.price===null)return;cart.set(id,(cart.get(id)||0)+1);renderCart();openCart()}
function change(id,d){const n=(cart.get(id)||0)+d;if(n<=0)cart.delete(id);else cart.set(id,n);renderCart()}
function deliveryFee(){const zone=CONFIG.deliveryZones.find(item=>item.name===$("zone").value);return $("orderType").value==="Livraison"?(zone?.fee||0):0}
function renderCart(){
 let count=0,subtotal=0;
 const rows=[];
 cart.forEach((q,id)=>{
  const p=products.find(x=>x.id===id);
  if(!p)return;
  count+=q;subtotal+=q*Number(p.price||0);
  const row=document.createElement("div");row.className="cart-row";
  const product=document.createElement("div");product.className="cart-product";
  const img=document.createElement("img");img.className="cart-thumb";img.alt=p.name||"Produit";
  if(p.img)img.src=p.img;
  img.onerror=()=>{img.removeAttribute("src");img.alt="Photo indisponible";img.classList.add("cart-thumb-broken")};
  const info=document.createElement("div");info.className="cart-product-info";
  const name=document.createElement("span");name.textContent=p.name||"Produit";
  const price=document.createElement("small");price.textContent=money(Number(p.price||0)*q);
  info.append(name,price);product.append(img,info);
  const qty=document.createElement("div");qty.className="qty";
  const minus=document.createElement("button");minus.type="button";minus.textContent="−";minus.setAttribute("aria-label","Retirer un "+(p.name||"produit"));
  minus.addEventListener("click",()=>change(Number(id),-1));
  const amount=document.createElement("b");amount.textContent=String(q);
  const plus=document.createElement("button");plus.type="button";plus.textContent="+";plus.setAttribute("aria-label","Ajouter un "+(p.name||"produit"));
  plus.addEventListener("click",()=>change(Number(id),1));
  qty.append(minus,amount,plus);row.append(product,qty);rows.push(row);
 });
 $("cartCount").textContent=count;
 const items=$("cartItems");
 if(rows.length)items.replaceChildren(...rows);
 else{const empty=document.createElement("p");empty.className="empty";empty.textContent="Ton panier est encore vide.";items.replaceChildren(empty)}
 $("grandTotal").textContent=money(subtotal+deliveryFee());
}
function openCart(){$("cartPanel").classList.add("open");$("cartBackdrop").classList.add("open");$("cartPanel").setAttribute("aria-hidden","false")}
function closeCart(){$("cartPanel").classList.remove("open");$("cartBackdrop").classList.remove("open");$("cartPanel").setAttribute("aria-hidden","true")}
$("cartOpen").onclick=openCart;$("cartClose").onclick=closeCart;$("cartBackdrop").onclick=closeCart;$("orderType").onchange=()=>{$("deliveryFields").hidden=$("orderType").value!=="Livraison";renderCart()};$("zone").onchange=renderCart;
$("checkoutBtn").onclick=async()=>{if(!cart.size){alert("Ajoute au moins un article au panier.");return}const name=$("customerName").value.trim(),phone=$("customerPhone").value.trim();if(!name||!phone){alert("Merci de remplir ton nom et ton téléphone.");return}if($("orderType").value==="Livraison"&&!$("customerAddress").value.trim()){alert("Merci d'ajouter ton adresse.");return}let subtotal=0,lines=[];cart.forEach((q,id)=>{const p=products.find(x=>x.id===id);subtotal+=q*p.price;lines.push(q+" x "+p.name+" — "+money(q*p.price))});const fee=deliveryFee(),total=subtotal+fee;const whatsapp=window.open("about:blank","_blank");try{
 const response=await fetch(SUPABASE_URL+"/functions/v1/customer-submit",{method:"POST",headers:{apikey:SUPABASE_PUBLIC_KEY,Authorization:"Bearer "+SUPABASE_PUBLIC_KEY,"Content-Type":"application/json"},body:JSON.stringify({action:"order",customer_name:name,customer_phone:phone,order_type:$("orderType").value,delivery_zone:$("orderType").value==="Livraison"?$("zone").value:null,delivery_address:$("orderType").value==="Livraison"?$("customerAddress").value:null,note:$("orderNote").value,items:[...cart.entries()].map(([product_id,quantity])=>({product_id,quantity}))})});
 const result=await response.json();if(!response.ok)throw new Error(result.error||"Erreur d'enregistrement");
 const msg=["Bonjour HERMANO FOOD !","Référence commande : "+result.order.id,"Nom : "+name,"Téléphone : "+phone,"Commande : "+$("orderType").value,...lines,"Sous-total : "+money(subtotal),$("orderType").value==="Livraison"?"Zone : "+$("zone").value:"", $("orderType").value==="Livraison"?"Adresse : "+$("customerAddress").value:"","Livraison : "+money(fee),"TOTAL : "+money(total),"Note : "+$("orderNote").value].filter(Boolean).join("\n");
 const url=`https://wa.me/${CONFIG.whatsappNumber}?text=`+encodeURIComponent(msg);if(whatsapp)whatsapp.location.href=url;else alert("Commande enregistrée. Référence : "+result.order.id+" — contactez-nous sur WhatsApp.");
 }catch(error){if(whatsapp)whatsapp.close();alert("La commande n'a pas pu être enregistrée : "+error.message);}
};
applyConfig();
renderProducts();renderCart();
loadProductsFromSupabase();
let catalogueRefreshTimer=null;
function startCatalogueRefresh(){
 if(catalogueRefreshTimer)return;
 catalogueRefreshTimer=setInterval(()=>{if(document.visibilityState==="visible")loadProductsFromSupabase()},60000);
}
document.addEventListener("visibilitychange",()=>{
 if(document.visibilityState==="visible")loadProductsFromSupabase();
});
startCatalogueRefresh();


/* Accessible mobile navigation */
const mobileMenuToggle=document.getElementById("mobileMenuToggle");
const mainNav=document.getElementById("mainNav");
if(mobileMenuToggle&&mainNav){
  mobileMenuToggle.addEventListener("click",()=>{
    const isOpen=mainNav.classList.toggle("open");
    mobileMenuToggle.setAttribute("aria-expanded",String(isOpen));
    mobileMenuToggle.setAttribute("aria-label",isOpen?"Fermer le menu":"Ouvrir le menu");
    mobileMenuToggle.textContent=isOpen?"✕":"☰";
  });
  mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    mainNav.classList.remove("open");
    mobileMenuToggle.setAttribute("aria-expanded","false");
    mobileMenuToggle.setAttribute("aria-label","Ouvrir le menu");
    mobileMenuToggle.textContent="☰";
  }));
}
