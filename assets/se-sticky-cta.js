(function(){if(document.querySelector('.se-sticky-cta'))return;var root=document.createElement('aside');root.className='se-sticky-cta';root.setAttribute('aria-label','서로이음상조 상담, 상품 및 장례비용 계산 안내');root.innerHTML='<button class="se-cta-close" type="button" aria-label="상담 배너 닫기">×</button><strong class="se-cta-title">장례 준비, 함께하겠습니다</strong><p class="se-cta-sub">장례식장 선택부터 비용까지 24시간 무료로 안내합니다.</p><div class="se-cta-actions"><a class="se-cta-link" href="tel:16662728">☎ 24시간 장례 무료상담</a><a class="se-cta-link product" href="/incheon-funeral-service/#package">▤ 상조상품 안내받기</a><a class="se-cta-link calculator" href="/funeral-calculator/">▦ 장례비용 바로 계산하기 →</a></div><div class="se-cta-note">서로이음상조 · 1666-2728 · 상담만 받아도 괜찮습니다</div>';var reopen=document.createElement('button');reopen.type='button';reopen.className='se-sticky-reopen';reopen.textContent='☎ 상담 · 상품 · 비용계산';reopen.hidden=true;reopen.setAttribute('aria-label','상담 배너 다시 열기');root.querySelector('.se-cta-close').addEventListener('click',function(){root.hidden=true;reopen.hidden=false});reopen.addEventListener('click',function(){root.hidden=false;reopen.hidden=true;root.querySelector('.se-cta-close').focus()});document.body.appendChild(root);document.body.appendChild(reopen)})();
/* Progressive disclosure for long FAQ answers; all original text stays in the DOM. */
(function(){function enhance(){document.querySelectorAll('.faq').forEach(function(card){if(card.dataset.seFolded||!card.querySelector(':scope > strong'))return;var heading=card.querySelector(':scope > strong');var detail=document.createElement('details');detail.className='se-faq-details';var summary=document.createElement('summary');summary.textContent=heading.textContent;detail.appendChild(summary);heading.remove();while(card.firstChild)detail.appendChild(card.firstChild);card.appendChild(detail);card.dataset.seFolded='true'})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance);else enhance()})();

/* Keep essential prices and warnings visible. Collapse only lengthy, plain-language explanations. */
(function(){
function ready(){
var targets=document.querySelectorAll('.guide-panel p,.guide-step p,.guide-content p,.info-box p,.hall-card p,.card p,.step p,.qa p,.faq p,.room-desc');
targets.forEach(function(el){
if(el.closest('details,summary,.warning,.notice,.notice-yellow,.notice-blue,.price,.table-note,.cost-box,.se-sticky-cta'))return;
if(el.children.length || el.dataset.seSummary)return;
var full=(el.textContent||'').trim().replace(/\s+/g,' ');
if(full.length<155)return;
if(/(?:원|만원|비용|요금|환산|추가 비용|별도 발생|주의|확인 필요|포함되지|별도 확인|임의로 이동|사망 원인)/.test(full))return;
var match=full.slice(0,140).match(/^([\s\S]{65,130}?[.!?。])(?:\s|$)/);
if(!match)return;
var lead=match[1],rest=full.slice(lead.length).trim();if(rest.length<35)return;
var details=document.createElement('details');details.className='se-more-details';
var summary=document.createElement('summary');summary.textContent='자세히 보기';details.appendChild(summary);
var content=document.createElement('span');content.textContent=rest;details.appendChild(content);
el.textContent=lead;el.appendChild(document.createTextNode(' '));el.appendChild(details);el.dataset.seSummary='true';
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
