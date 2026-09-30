const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// Menu mobile
$('#menu').onclick=()=>$('.links').classList.toggle('open');
$$('.links a').forEach(a=>a.onclick=()=>$('.links').classList.remove('open'));
// Terminal hero
const lines=['<span class="c">$</span> whoami','pierre-amara.ouattara — BTS SIO SISR','<span class="c">$</span> cat /etc/profil','Admin systèmes &amp; réseaux en alternance','<span class="c">$</span> systemctl status dispo','<span class="g">● actif</span> — apprenti Support N1/N2 chez WAGO'];
let li=0;const t=$('#term');(function n(){if(li<lines.length){t.innerHTML+=lines[li++]+'\n';setTimeout(n,650)}})();
if(matchMedia('(prefers-reduced-motion:reduce)').matches){t.innerHTML=lines.join('\n')}
// Timeline
$$('.it').forEach(i=>i.onclick=()=>i.classList.toggle('open'));
// Révélation + barres
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');$$('.bar i',x.target).forEach(b=>b.style.width=b.dataset.w+'%')}}),{threshold:.15});
$$('.rv').forEach(e=>io.observe(e));
// Projets : données + filtres + modale
const P={
ad:{t:'Active Directory, GPO, DHCP & DNS',ctx:'Contexte : PME fictive à 30 postes à centraliser.',obj:'Objectif : domaine, OU, GPO de sécurité, DHCP/DNS redondants.',tech:'Windows Server, AD DS, GPO, DHCP, DNS, Hyper-V',doc:'assets/doc-ad-gpo.pdf',repo:'https://github.com/pierre-amara'},
deb:{t:'Serveur Debian 13 sécurisé',ctx:'Contexte : serveur Linux exposé sur le réseau interne.',obj:'Objectif : installation, SSH durci, pare-feu, services, sauvegardes.',tech:'Debian 13, SSH, nftables/UFW, systemd',doc:'assets/doc-debian.pdf',repo:'https://github.com/pierre-amara'},
vm:{t:'Lab de virtualisation VMware / Hyper-V',ctx:'Contexte : environnement de tests Linux/Windows isolé.',obj:'Objectif : créer, superviser et sauvegarder des VM, réseaux virtuels.',tech:'VMware Workstation, Hyper-V, snapshots',doc:'assets/doc-virtualisation.pdf',repo:'https://github.com/pierre-amara'},
vlan:{t:'Réseau Cisco : VLAN, routage & ACL',ctx:'Contexte : segmentation d\'un réseau multi-services.',obj:'Objectif : VLANs, trunk 802.1Q, routage inter-VLAN, ACL, VPN.',tech:'Cisco Packet Tracer, VLAN, ACL, TCP/IP',doc:'assets/doc-cisco-vlan.pdf',repo:'https://github.com/pierre-amara'}};
const d=$('#dlg');
$$('[data-p]').forEach(c=>c.onclick=()=>{const p=P[c.dataset.p];d.innerHTML=`<h3>${p.t}</h3><p>${p.ctx}</p><p>${p.obj}</p><p><b>Technologies :</b> ${p.tech}</p><div class="cta"><a class="btn p" href="${p.doc}" download>Télécharger la documentation</a><a class="btn" href="${p.repo}" target="_blank" rel="noopener">Dépôt GitHub</a><button class="btn" onclick="this.closest('dialog').close()">Fermer</button></div>`;d.showModal()});
d.onclick=e=>{if(e.target===d)d.close()};
$$('.filters .btn').forEach(b=>b.onclick=()=>{$$('.filters .btn').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('[data-p]').forEach(c=>c.hidden=b.dataset.f!=='all'&&!c.dataset.cat.includes(b.dataset.f))});
// Compétences par onglets
$$('.tabs .btn').forEach(b=>b.onclick=()=>{$$('.tabs .btn').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.skp').forEach(p=>{p.hidden=p.id!==b.dataset.k;$$('.bar i',p).forEach(i=>{i.style.width=0;setTimeout(()=>i.style.width=i.dataset.w+'%',30)})})});
// Formulaire → mailto
$('form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);location.href=`mailto:ouattarapierreamara07@gmail.com?subject=${encodeURIComponent('Portfolio – '+f.get('n'))}&body=${encodeURIComponent(f.get('m')+'\n\n'+f.get('e'))}`};
