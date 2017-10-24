
function quote_name() {

var quote=new Array()
quote[0] = "The main objective of psychological therapy is not to transport the patient to an impossible state of happiness, but rather to help him acquire firmness and patience in the face of suffering. Life happens in a balance between joy and pain.";
quote[1] = "It is a miracle that curiosity survives formal education.";
quote[2] = "If you judge people, you have no time to love them."
quote[3] = "It's not how much we give, but how much love we put into giving.";
quote[4] = "Before you embark on a journey of revenge, dig two graves.";
quote[5] = "Everything has its beauty but not everyone sees it.";
quote[6] = "I hear and I forget. I see and I remember. I do and I understand.";
quote[7] = "Our greatest glory is not in never falling, but in getting up every time we do.";
quote[8] = "Respect yourself and others will respect you.";
quote[9] = "When we see men of a contrary character, we should turn inwards and examine ourselves.";
quote[10] = "When we see men of a contrary character, we should turn inwards and examine ourselves.";
quote[11] = "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.";


var name=new Array()
name[0] = "Carl Jung";
name[1] = "Albert Einstain";
name[2] = "Madre Teresa";
name[3] = "Madre Teresa";
name[4] = "Confucio";
name[5] = "Confucio";
name[6] = "Confucio";
name[7] = "Confucio";
name[8] = "Confucio";
name[9] = "Confucio";
name[10] = "Confucio";
name[11] = "Alfred Lord Tennyson";


index = Math.floor(Math.random() * quote.length);

document.getElementById('myQuoteBox').innerHTML = quote[index]+ "<br>" + "-" + " " + name[index];

};

