/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x494dc4=_0x183b;function _0x183b(_0x847e44,_0x548313){const _0x3e2f01=_0x3e2f();return _0x183b=function(_0x183b59,_0x1de348){_0x183b59=_0x183b59-0x1a1;let _0x4c9446=_0x3e2f01[_0x183b59];return _0x4c9446;},_0x183b(_0x847e44,_0x548313);}(function(_0x294ff4,_0x24aba2){const _0x5ae539=_0x183b,_0x501d9e=_0x294ff4();while(!![]){try{const _0x274572=-parseInt(_0x5ae539(0x1b8))/0x1+-parseInt(_0x5ae539(0x1a4))/0x2*(parseInt(_0x5ae539(0x1a7))/0x3)+-parseInt(_0x5ae539(0x1b7))/0x4+parseInt(_0x5ae539(0x1bb))/0x5*(-parseInt(_0x5ae539(0x1ba))/0x6)+-parseInt(_0x5ae539(0x1b9))/0x7*(parseInt(_0x5ae539(0x1aa))/0x8)+parseInt(_0x5ae539(0x1cd))/0x9*(-parseInt(_0x5ae539(0x1bc))/0xa)+parseInt(_0x5ae539(0x1ad))/0xb;if(_0x274572===_0x24aba2)break;else _0x501d9e['push'](_0x501d9e['shift']());}catch(_0xcf7ef7){_0x501d9e['push'](_0x501d9e['shift']());}}}(_0x3e2f,0x70043));import _0x2a04f0 from'fs';import _0x62e7e2 from'dotenv';_0x62e7e2[_0x494dc4(0x1c5)]();const SECRET_KEY=process[_0x494dc4(0x1b4)][_0x494dc4(0x1c0)],obtenerDatos=()=>{const _0x22cac0=_0x494dc4;return _0x2a04f0[_0x22cac0(0x1be)](_0x22cac0(0x1c8))?JSON[_0x22cac0(0x1b5)](_0x2a04f0[_0x22cac0(0x1c9)](_0x22cac0(0x1c8),_0x22cac0(0x1a5))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x21a433=_0x494dc4;return _0x2a04f0['existsSync'](_0x21a433(0x1bf))?JSON['parse'](_0x2a04f0['readFileSync']('./src/JSON/characters.json',_0x21a433(0x1a5))):[];};let handler=async(_0x526162,{conn:_0x4882ca,text:_0x5b7638})=>{const _0x554c7b=_0x494dc4;if(!_0x5b7638){_0x4882ca[_0x554c7b(0x1ae)](_0x526162[_0x554c7b(0x1c2)],_0x554c7b(0x1bd),_0x526162,rcanal);return;}const _0x4a779e=()=>{const _0x12e2f5=_0x554c7b;try{const _0x2a0f84=JSON[_0x12e2f5(0x1b5)](_0x2a04f0[_0x12e2f5(0x1c9)](_0x12e2f5(0x1a2),'utf-8'));if(_0x2a0f84[_0x12e2f5(0x1a3)]!=='HuTao-Proyect')return![];if(_0x2a0f84[_0x12e2f5(0x1a1)][_0x12e2f5(0x1c1)]!==_0x12e2f5(0x1cb))return![];if(SECRET_KEY!=='ir83884kkc82k393i48')return![];return!![];}catch(_0x31e127){return console[_0x12e2f5(0x1b0)](_0x12e2f5(0x1af),_0x31e127),![];}};if(!_0x4a779e()){await _0x4882ca['reply'](_0x526162[_0x554c7b(0x1c2)],'𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝑯𝒖𝑻𝒂𝒐-𝑷𝒓𝒐𝒚𝒆𝒄𝒕.\x0a👻\x20https://github.com/CheirZ/HuTao-Proyect',_0x526162,rcanal);return;}const _0x285981=_0x526162['sender'],_0x561d61=_0x5b7638[_0x554c7b(0x1b3)]()[_0x554c7b(0x1ca)](),_0x25e2e8=obtenerDatos(),_0x15599a=obtenerPersonajes();if(!_0x25e2e8['usuarios'][_0x285981]||!_0x25e2e8['usuarios'][_0x285981][_0x554c7b(0x1c4)]['some'](_0x8225e9=>_0x8225e9[_0x554c7b(0x1a3)][_0x554c7b(0x1ca)]()===_0x561d61)){_0x4882ca[_0x554c7b(0x1ae)](_0x526162['chat'],_0x554c7b(0x1b1)+_0x561d61+_0x554c7b(0x1ab),_0x526162,rcanal);return;}const _0x1ec0f7=_0x25e2e8['usuarios'][_0x285981]['characters'][_0x554c7b(0x1b6)](_0xabe84b=>_0xabe84b[_0x554c7b(0x1a3)][_0x554c7b(0x1ca)]()===_0x561d61);if(!_0x1ec0f7){_0x4882ca[_0x554c7b(0x1ae)](_0x526162[_0x554c7b(0x1c2)],_0x554c7b(0x1b2)+_0x561d61+'.',_0x526162,rcanal);return;}const _0x1dd6be=_0x554c7b(0x1a9)+_0x1ec0f7['name']+_0x554c7b(0x1cc)+_0x1ec0f7[_0x554c7b(0x1c3)]+'\x20';await _0x4882ca[_0x554c7b(0x1a8)](_0x526162[_0x554c7b(0x1c2)],{'image':{'url':_0x1ec0f7[_0x554c7b(0x1c1)]},'caption':_0x1dd6be,'mimetype':_0x554c7b(0x1c7)});};function _0x3e2f(){const _0x3c7432=['Error\x20al\x20leer\x20package.json:','error','ɆⱠ\x20₱ɆɌ$Ø₦₳ɈɆ\x20','𝑵𝒐\x20𝒔𝒆\x20𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐\x20𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏\x20𝒑𝒂𝒓𝒂\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','trim','env','parse','find','190472ZXFgXT','551847PWmqMj','14nTbJQh','5152614NXINmH','5HpPpPy','492920JapFtR','𝑷𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓,\x20𝒑𝒓𝒐𝒑𝒐𝒓𝒄𝒊𝒐𝒏𝒂\x20𝒆𝒍\x20𝒏𝒐𝒎𝒃𝒓𝒆\x20𝒅𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20𝒒𝒖𝒆\x20𝒅𝒆𝒔𝒆𝒂𝒔\x20𝒗𝒆𝒓.\x20𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\x20.𝒄𝒉𝒂𝒓𝒂𝒄𝒕𝒆𝒓\x20𝑴𝒆𝒈𝒖𝒎𝒊𝒏','existsSync','./src/JSON/characters.json','SECRET_KEY','url','chat','value','characters','config','group','image/jpeg','data.json','readFileSync','toLowerCase','git+https://github.com/CheirZ/HuTao-Proyect.git','*\x0aˢᵘ\x20ᵛᵃˡᵒʳ\x20ᵉˢᵗⁱᵐᵃᵈᵒ:\x20','90PFcfZl','repository','./package.json','name','982250mmQopQ','utf-8','help','3LNIbOU','sendMessage','ᴇsᴛᴇ\x20ᴇs\x20ᴛᴜ\x20ᴘᴇʀsᴏɴᴀᴊᴇ.\x0a\x20*','152360zcwUgx','\x20₦Ø\x20$Ɇ\x20Ɇ₦€ɄɆ₦₮Ɍ₳\x20Ɇ₦\x20₮Ʉ\x20Ɨ₦⩔Ɇ₦₮₳₮ƗØ.','character','32331068ibVZom','reply'];_0x3e2f=function(){return _0x3c7432;};return _0x3e2f();}handler[_0x494dc4(0x1a6)]=[_0x494dc4(0x1ac)],handler['tags']=['rollwaifu'],handler['command']=[_0x494dc4(0x1ac)],handler[_0x494dc4(0x1c6)]=!![];export default handler;