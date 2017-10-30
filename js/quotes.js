
function quote_name() {

var quote=new Array()
quote[0] = "The main objective of psychological therapy is not to transport the patient to an impossible state of happiness, but rather to help him acquire firmness and patience in the face of suffering. Life happens in a balance between joy and pain.";
quote[1] = "In Hollywood if you don't have a shrink, people think you're crazy.";
quote[2] = "In my early professional years I was asking the question: How can I treat, or cure, or change this person? Now I would phrase the question in this way: How can I provide a relationship which this person may use for his own personal growth?"
quote[3] = "Therapy isn't Radio.We don't need to constantly fill the air with sounds. Sometimes, when its quite, surprising things happen.";
quote[4] = "Feelings are not to be suppressed or fixed — they’re to be acknowledged.";
quote[5] = "I've always regarded therapy more as a calling than a profession, a way of life for people who care about others.";
quote[6] = "Complexity is a product of unawareness and simplicity a result of awareness! Uncomplex yourself, Live Life!";
quote[7] = "In one sense, all causes of a problem are 'current', although many of them represent the residue of earlier learning or unprocessed memories.";
quote[8] = "Psychotherapy is an art enlightened by wisdom, theory and research.";
quote[9] = "Psychotherapy isn't a twentieth-century artifice imposed on nature, but the reinstatement of a natural healing process.";
quote[10] = "In therapy the individual learns to recognize and express his feelings as his own feelings, not as a fact about another person.";
quote[11] = "Allow yourself to be an anchor and anchored by others.";


var name=new Array()
name[0] = "Carl Jung";
name[1] = "Johnny Carson";
name[2] = "Carl R. Rogers";
name[3] = "Mary Pipher";
name[4] = "Jennifer Lane";
name[5] = "Irvin D. Yalom";
name[6] = "Ramana Pemmaraju";
name[7] = "Richard S. Hallam";
name[8] = "Barbara Temaner Brodley";
name[9] = "Patricia Love";
name[10] = "Carl R. Rogers";
name[11] = "Asa Don Brown";


index = Math.floor(Math.random() * quote.length);

document.getElementById('myQuoteBox').innerHTML = quote[index]+ "<br>" + "-" + " " + name[index];

};

