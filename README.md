# beyzadebaklava.de — v1 (iskelet)

## Bu paket ne içeriyor
Statik HTML/CSS/JS site. DE ana dil + /tr/ Türkçe. EME'S DÖNER HAUS ile
aynı mimari: framework yok, tek CSS dosyası, WhatsApp sabit sipariş
butonu, FAQ, Impressum/Datenschutz placeholder'lı, sitemap+robots (AI
arama botlarına bilinçli izin).

Palet: koyu yeşil (#0e2f22) + sıcak altın (#c9a04a) + fildişi (#f7f2e6).
Tipografi: Cormorant Garamond (başlık) + Work Sans (gövde), ikisi de
latin-extended, Türkçe karakterlerde font fallback sorunu yok.

## AÇIKÇA PLACEHOLDER / EKSİK — YAYINA ALMADAN ÖNCE TAMAMLANMALI

1. **Ürün görselleri geçici kalitede.** Burak'ın gönderdiği 20 görsel
   zaten bitmiş Instagram poster tasarımıydı (üstünde Almanca metin,
   rozet basılı). Bu pakette her posterden en az metinli bölge kırpılıp
   kart görseli olarak kullanıldı, AMA çoğunda hâlâ kalıntı metin/rozet
   parçası görünüyor (Antep serisi, Börek, Dubai çikolatası, Verlobungstablett
   gibi). Bu görseller GEÇİCİDİR. Burak'a önceden verilen 46 kalemlik
   prompt setiyle üretilecek temiz, metinsiz "hero" görseller geldiğinde
   assets/img/products/ altındaki ilgili dosyalar birebir aynı isimle
   değiştirilmeli (kod tarafında hiçbir değişiklik gerekmez).

2. **Düğün pastası görseli DİKKAT gerektiriyor.** Orijinal poster gerçek
   bir çiftin adını ve düğün tarihini taşıyordu ("Yusuf & Meryem,
   23.08.26"). Bu bilgi tamamen kırpılıp çıkarıldı, şu an sitede sadece
   isimsiz bir kek+çiçek görüntüsü var. YİNE DE: bu görsel gerçek bir
   müşterinin siparişi olabilir, marketing görseli olarak kullanmadan
   önce Burak'ın işletmeden onay alması önerilir.

3. **10 tema hiç kullanılmadı** (Dark dizisi, Spider-Man, One Piece,
   Pokémon, Bayern München, Borussia Dortmund, Galatasaray, Fenerbahçe,
   Trabzonspor, Beşiktaş) — marka/telif hakkı riski nedeniyle. Onun
   yerine "Themen-Torten nach Wunsch" (İsteğe Özel Temalı Pasta) diye
   nötr, görselsiz bir kart eklendi. Karar değişirse bu karta görsel
   eklenebilir ama telifli karakter/logo İÇERMEYEN bir görsel olmalı.

4. **Fiyat YOK, bilerek.** Gerçek fiyat bilgisi hâlâ gelmedi, bu yüzden
   her ürün kartında "Preis auf Anfrage" / "Fiyat için sorunuz" yazıyor.
   EME'S'te fiyat tahmini yapılıp sonradan düzeltilmek zorunda kalınmıştı
   — o hatayı burada tekrarlamamak için hiç tahmin yapılmadı. Gerçek
   fiyatlar gelince (a) kart başına fiyat gösterilebilir, veya (b) bu
   model bilerek korunabilir (WhatsApp'a yönlendirme, EME'S'teki gibi).

5. **Impressum/Datenschutz tamamen PLATZHALTER.** Yetkili kişi, vergi no,
   ticaret sicili, telefon, e-posta — hiçbiri yok. Sayfalar `noindex`
   işaretli ve içinde sarı uyarı kutucuklarıyla "PLATZHALTER" yazıyor.
   Bu bilgiler gelmeden site canlıya alınmamalı (EME'S'teki aynı hatanın
   tekrarı olur, üstelik oradaki analizde de bu konu risk olarak
   işaretlenmişti).

6. **Telefon numarası ve WhatsApp numarası PLATZHALTER/tahmini.**
   `tel:PLATZHALTER` ve `wa.me/491511106060X` — ikisi de gerçek numara
   ile değiştirilmeli. WhatsApp linkindeki numara eski sitenin
   denetiminden alınan numaraya benziyor ama TEYİT EDİLMEDİ.

7. **Aschaffenburg bölümü tarih içermiyor** — açılış tarihi netleşince
   eklenebilir.

8. **Logo yazı olarak kuruldu, görsel logo dosyası kullanılmadı** çünkü
   posterlerin içine gömülü, ayrı şeffaf dosya yok. Eğer ileride ayrı
   bir "beyzade" wordmark dosyası gelirse, .brand-word CSS sınıfının
   yerine <img> konabilir.

## Sonraki adımlar (öncelik sırasıyla)
1. Impressum bilgileri + telefon/WhatsApp numarası — YASAL ZORUNLULUK
2. Gerçek ürün görselleri (46 kalemlik prompt setinden üretilenler)
3. Gerçek fiyat/ürün açıklaması listesi
4. Wedding cake görseli için işletmeden kullanım onayı
5. Aschaffenburg açılış tarihi netleşince ilgili bölüm güncellenir
