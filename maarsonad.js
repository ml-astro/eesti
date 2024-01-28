const dictionary = [
	["aina - только, лишь, так и"],
	["ajutiselt - временно"],
	["algselt - изначально"],
	["algul - в начале"],
	["alles - только что, едва"],
	["allpool - ниже, внизу"],
	["arvatavasti - видимо, по всей видимости, вероятно"],
	["ammu - давно"],
	["avalikult - публично"],
	["edaspidi - впредь"],
	["eelkõige - прежде всего"],
	["eelnevalt - заранее"],
	["eemal - вдали, поодаль"],
	["eeskätt - прежде всего"],
	["eespool - впереди"],
	["ega - и не"],
	["ehk - возможно, может быть, или"],
	["eks - разумеется, конечно"],
	["eks ole - не так ли, ведь"],
	["enamasti - в основном, в большинстве, как правило"],
	["endiselt - по-прежнему"],
	["eraldi - раздельно"],
	["eriti - особенно"],
	["esialgu - сначала"],
	["esile - на передний план"],
	["esiteks - во-первых, сперва"],
	["esmakordselt - впервые"],
	["esmalt - прежде всего"],
	["ettepoole - вперед"],
	["harilikult - обычно"],
	["harva - редко"],
	["hilja - поздно"],
	["hiljuti - недавно"],
	["hirmsasti - ужасно сильно"],
	["hoopis - совсем, наоборот, вместо"],
	["igati - во всех отношениях"],
	["iialgi - никогда, отродясь"],
	["ikka - все еще, всегда, конечно"],
	["ikkagi - все же"],
	["ilmselt - очевидно"],
	["iseenesest - само собой"],
	["isegi - даже, аж, и без того"],
	["isiklikult - лично"],
	["jala - пешком"],
	["jalgsi - пешком"],
	["ju - ведь, же"],
	["juhuslikult - случайно"],
	["julgelt - смело"],
	["justkui - как бы"],
	["just - именно, только что"],
	["jälle - опять"],
	["järel - после"],
	["järelikult - следовательно"],
	["järgi - по, согласно"],
	["järsku - вдруг"],
	["jätkuvalt - по-прежнему"],
	["kallale - к, на"],
	["kaugel - далеко"],
	["kehvasti - неважно, плохо"],
	["keskel - посреди"],
	["kihlatud - помолвлен"],
	["kindlasti - определенно, несомненно"],
	["kodunt - из дому"],
	["kogemata - случайно"],
	["koguni - даже"],
	["kohal - на месте"],
	["kohati - иногда, в некоторых местах"],
	["kohe - сразу"],
	["kord - раз"],
	["korduvalt - многократно"],
	["korraga - одновременно"],
	["korraks - на мгновение"],
	["kuivõrd - поскольку"],
	["kunagi - когда-то-либо-нибудь"],
	["kusagil - где-то"],
	["kuskil - куда-то"],
	["kõigepealt - прежде всего"],
	["kõikjal - везде"],
	["kõrgel - высоко"],
	["kõrval - рядом, возле"],
	["kõrvuni - по уши"],
	["kõrvuti - бок о бок"],
	["kõvasti - твердо, крепко, плотно, наглухо"],
	["külge - к, к боку"],
	["küllaltki - вполне, достаточно"],
	["lahku - врозь"],
	["lahus - отдельно"],
	["lahutatud - отделенный"],
	["laiali - в разные стороны"],
	["las - пусть"],
	["lausa - прямо, совсем"],
	["ligi - близко"],
	["loodetavasti - надеюсь, что"],
	["loomulikult - конечно"],
	["lukku - в закрытом положении"],
	["lõplikult - окончательно"],
	["lõpuks - в конце концов"],
	["läbi - через, сквозь"],
	["lähedal - близко"],
	["lähemal - ближе"],
	["lühidalt - кратко"],
	["maas - на земле, внизу"],
	["maha - вниз, на землю"],
	["majanduslikult - экономически"],
	["meeleldi - с удовольствием, охотно"],
	["meelsasti - охотно"],
	["millegipärast - почему-то"],
	["muidu - в противном случае"],
	["muide - кстати, впрочем"],
	["mujal - в другом месте"],
	["muuseas - кстати"],
	["mõnikord - иногда"],
	["märgatavalt - заметно"],
	["mööda - вдоль, мимо"],
	["niimoodi - таким образом"],
	["niipea - как только"],
	["niisama - такой же"],
	["niisiis - таким образом"],
	["niiviisi - так"],
	["nimelt - а именно"],
	["nõnda - вот так, так, таким образом"],
	["nõus - согласен"],
	["näiteks - например"],
	["ometi - тем не менее, все же"],
	["ootamatult - внезапно"],
	["otsa - конец, до конца"],
	["otse - прямо"],
	["otsekohe - сразу, немедленно"],
	["paraku - к сожалению"],
	["paratamatult - неизбежно"],
	["peaaegu - почти"],
	["peagi - скоро"],
	["peal - наверху, над"],
	["peamiselt - в основном, преимущественно"],
	["pilves - облачно"],
	["pisut - немного"],
	["pooleli - незаконченный, наполовину"],
	["poolt - на полпути"],
	["purjus - пьяный"],
	["puudu - отсутствует"],
	["pärastlõunal - после полудня"],
	["päris - вполне, довольно"],
	["päriselt - на самом деле"],
	["püsti - стоя"],
	["rahul - удовлетворен"],
	["rahus - спокойно"],
	["rikki - сломан"],
	["risti - поперек"],
	["sageli - часто"],
	["salaja - тайно"],
	["samas - в то же время"],
	["samuti - также"],
	["seejärel - затем"],
	["sees - внутри"],
	["segamini - вперемешку"],
	["segi - путаница"],
	["sellepärast - поэтому"],
	["seni - до сих пор"],
	["siiasamasse - сюда, тут же"],
	["siiski - тем не менее, всё-таки, ka siis, и тогда"],
	["sisuliselt - по сути"],
	["suhteliselt - относительно, сравнительно, довольно"],
	["sõltuvalt - в зависимости"],
	["sügavalt - глубоко"],
	["süüdi - виноват"],
	["taas - снова, jälle"],
	["tarvis - нужно"],
	["tasa - тихо, медленно"],
	["tavaliselt - обычно"],
	["teadlikult - сознательно"],
	["tegelikult - фактически, на самом деле"],
	["teisiti - иначе, по-другому"],
	["tihti - часто"],
	["tingimata - непременно"],
	["tohutu - огромный"],
	["tookord - тогда"],
	["tõesti - действительно, правда"],
	["tõsiselt - серьезно"],
	["täiesti - полностью"],
	["täis - полный"],
	["umbes - примерно"],
	["vaatamata - несмотря на"],
	["vabatahtlikult - добровольно"],
	["vaevalt - едва ли"],
	["vahel - иногда"],
	["vaid - только, лишь"],
	["vait - молчи"],
	["valmis - готов"],
	["vara - рано"],
	["varem - раньше"],
	["varsti - скоро"],
	["vastas - напротив, напротив"],
	["vastu - против"],
	["vastupidi - наоборот"],
	["veidi - немного"],
	["viimati - в последний раз"],
	["vist - вероятно, наверное"],
	["võrdselt - равномерно"],
	["väljas - снаружи"],
	["õieti - правильно"],
	["õnneks - к счастью"],
	["äkki - вдруг, может быть"],
	["äärmiselt - чрезвычайно"],
	["üksi - один"],
	["üksinda - один"],
	["ükski - ни один"],
	["ülal - вверху"],
	["üldiselt - в общем"],
	["üldse - вообще"],
	["üsna - довольно, весьма"],
]