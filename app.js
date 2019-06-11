let Paraules={
  "bàscula"      :"Balança, eina per mesurar una massa equilibrant-ne el pes amb el d'una altra més petita que es desplaça sobre una barra graduada",
  "esponja"      :"Peça de material sintètic porós que s’empra en la neteja i com a absorbent",
  "insuportable" :"Que no pot ser suportat, sofert",
  "jardiner"     :"Persona que cuida jardins",
  "kiwi"         :"Fruit comestible de forma oblonga i color verd, recoberta per una pell fina de color marró, rasposa i amb borrissol, que té un gust fresc lleugerament àcid, molt rica en vitamina C",
  "opac"         :"Que no deixa passar la llum",
  "qüestió"      :"Sinònim de pregunta",
  "saxòfon"      :"Instrument musical de vent-metall compost per un tub cònic en forma de J",
  "silenci"      :"Absència de soroll",
  "translúcid"   :"Que deixa passar la llum però no deixa veure distintament els objectes a través seu",
  "transparent"  :"Que deixa passar la llum de manera que es poden veure els objectes a través seu",
  "diccionari"   :"Obra que recull els mots d’una llengua, els termes d’una ciència, d’un art, d’una activitat, etc., amb llur significació, disposats en un ordre determinat, normalment alfabètic, que pot contenir d’altres informacions de naturalesa gramatical, fonètica, etc.",
  "persuadir"    :"Induir a creure, a fer, alguna cosa, convèncer",
  "adéu"         :"Ho diem per despedir-nos d'algú",
  "ampli"        :"Amb molta extensió o espai",
  "atzucac"      :"Carrer sense sortida",
  "botiguer"     :"Persona que treballa en una botiga",
  "brillant"     :"Que brilla",
  "cedir"        :"Fer una cessió",
  "corb"         :"ocell negre de la família dels còrvids",
  "covard"       :"Persona que no és valenta",
  "empaitar"     :"Perseguir algú que fuig",
  "empatia"      :"Capacitat de posar-se al lloc d'algú altre",
  "ennuvolat"    :"Cobert de núvols",
  "escriptor"    :"Persona que escriu",
  "estiu"        :"Estació de l'any que hi fa molta calor",
  "fang"         :"Mescla pastosa d'argila i aigua",
  "flaix"        :"Llum que apareix quan fas una fotografia",
  "golafre"      :"persona que li agrada massa menjar",
  "hidroavió"    :"Avió que pot aterrar a l'aigua",
  "històric"     :"Que forma part de la història",
  "hivern"       :"Estació de l'any que hi fa molt fred",
  "hola"         :"Ho diem per saludar algú",
  "inevitable"   :"Impossible d'evitar",
  "llamborda"    :"Pedra gran i plana que forma el terra d'alguns carrers",
  "lòbul"        :"Part de l'orella on es posen les arracades",
  "primavera"    :"Estació de l'any que hi floreixen els arbres",
  "sacsejar"     :"Moure enèrgicament algú o alguna cosa",
  "sembrar"      :"Plantar llavors",
  "talent"       :"Qualitat natural per fer alguna cosa",
  "tardor"       :"Estació de l'any que hi cauen les fulles",
  "tomb"         :"Sinònim de passeig",
  "tubular"      :"Que té forma de tub",
  "xal"          :"Complement, peça de roba que envolta el coll",
  "xamfrà"       :"Cantonada entre dos edificis",
  "xerraire"     :"Persona que parla molt",
  "època"        :"Espai de temps comprès entre dos moments importants a la història",
  "òpera"        :"Drama musical cantat amb orquestra i representat teatralment",
};

//transforma objecte a array i barreja
let arr=Object.entries(Paraules); //array
arr=barreja(arr);

//carrega sons
let snd_ok   = new Audio("snd/ok.wav"); //so
let snd_fail = new Audio("snd/fail.wav"); //so

//guardar punts i errors (nombres enters)
let punts  = 0;
let errors = 0;

//obtenir una paraula aleatòria i eliminar-la de Paraules
function get_paraula(){
  if(arr.length==0) return false;
  let p=arr.pop();
  return p
}

//algoritme yates barrejar array
function barreja(arr){
  for(let i=arr.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }
  return arr;
}
